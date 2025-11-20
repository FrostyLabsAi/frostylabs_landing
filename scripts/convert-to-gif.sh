#!/bin/bash
# FrostyLabs GIF Conversion Helper Script
# Usage: ./convert-to-gif.sh input.mp4 [quality]
# Quality options: web, twitter, preview (default: web)

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if gifski is installed
if ! command -v gifski &> /dev/null; then
    echo -e "${RED}Error: gifski is not installed${NC}"
    echo -e "${YELLOW}Install it with: cargo install gifski${NC}"
    echo -e "${YELLOW}Or download from: https://gif.ski/${NC}"
    exit 1
fi

# Check arguments
if [ -z "$1" ]; then
    echo -e "${RED}Error: No input file specified${NC}"
    echo -e "${YELLOW}Usage: $0 input.mp4 [quality]${NC}"
    echo -e "${YELLOW}Quality options: web, twitter, preview${NC}"
    echo ""
    echo "Examples:"
    echo "  $0 demo.mp4           # High quality for web (default)"
    echo "  $0 demo.mp4 twitter   # Optimized for Twitter"
    echo "  $0 demo.mp4 preview   # Small preview GIF"
    exit 1
fi

INPUT="$1"
QUALITY="${2:-web}"

# Check if input file exists
if [ ! -f "$INPUT" ]; then
    echo -e "${RED}Error: File '$INPUT' not found${NC}"
    exit 1
fi

# Get filename without extension
BASENAME=$(basename "$INPUT" .mp4)
OUTPUT_DIR="$(dirname "$INPUT")"

# Set parameters based on quality
case "$QUALITY" in
    web)
        OUTPUT="${OUTPUT_DIR}/${BASENAME}-web.gif"
        FPS=30
        QUALITY_LEVEL=90
        WIDTH=1200
        echo -e "${BLUE}Converting to high-quality web GIF...${NC}"
        ;;
    twitter)
        OUTPUT="${OUTPUT_DIR}/${BASENAME}-twitter.gif"
        FPS=24
        QUALITY_LEVEL=80
        WIDTH=800
        echo -e "${BLUE}Converting to Twitter-optimized GIF...${NC}"
        ;;
    preview)
        OUTPUT="${OUTPUT_DIR}/${BASENAME}-preview.gif"
        FPS=20
        QUALITY_LEVEL=70
        WIDTH=600
        echo -e "${BLUE}Converting to preview GIF...${NC}"
        ;;
    *)
        echo -e "${RED}Error: Invalid quality option '$QUALITY'${NC}"
        echo -e "${YELLOW}Valid options: web, twitter, preview${NC}"
        exit 1
        ;;
esac

# Convert
echo -e "${YELLOW}Input:${NC}  $INPUT"
echo -e "${YELLOW}Output:${NC} $OUTPUT"
echo -e "${YELLOW}Settings:${NC} ${WIDTH}px wide, ${FPS} fps, quality ${QUALITY_LEVEL}"
echo ""

gifski -o "$OUTPUT" --fps "$FPS" --quality "$QUALITY_LEVEL" --width "$WIDTH" "$INPUT"

# Check if conversion was successful
if [ $? -eq 0 ]; then
    FILE_SIZE=$(du -h "$OUTPUT" | cut -f1)
    echo ""
    echo -e "${GREEN}✓ Conversion successful!${NC}"
    echo -e "${GREEN}✓ Output:${NC} $OUTPUT"
    echo -e "${GREEN}✓ Size:${NC} $FILE_SIZE"
    
    # Warn if file is too large
    FILE_SIZE_BYTES=$(stat -f%z "$OUTPUT" 2>/dev/null || stat -c%s "$OUTPUT" 2>/dev/null)
    if [ "$FILE_SIZE_BYTES" -gt 5242880 ]; then  # 5MB
        echo ""
        echo -e "${YELLOW}⚠ Warning: File size is > 5MB${NC}"
        echo -e "${YELLOW}  Consider using 'twitter' or 'preview' quality for smaller size${NC}"
    fi
else
    echo -e "${RED}✗ Conversion failed${NC}"
    exit 1
fi

