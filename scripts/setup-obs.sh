#!/bin/bash
# Interactive OBS Setup Helper for FrostyLabs
# This script will guide you through setting up OBS for the first time

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

clear

echo -e "${CYAN}"
echo "╔════════════════════════════════════════════════════════════╗"
echo "║                                                            ║"
echo "║         FrostyLabs OBS Setup Helper                       ║"
echo "║         Let's get you recording! 🎬                       ║"
echo "║                                                            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo -e "${NC}"
echo ""

# Check if OBS is installed
echo -e "${BLUE}[1/5] Checking if OBS is installed...${NC}"
if ! command -v obs &> /dev/null; then
    echo -e "${RED}✗ OBS is not installed${NC}"
    echo ""
    echo -e "${YELLOW}Install OBS with:${NC}"
    echo "  sudo apt install obs-studio"
    echo ""
    exit 1
else
    echo -e "${GREEN}✓ OBS is installed${NC}"
fi
echo ""

# Create recordings directory
echo -e "${BLUE}[2/5] Creating recordings directory...${NC}"
RECORDINGS_DIR="$HOME/FrostyLabs/recordings"
mkdir -p "$RECORDINGS_DIR/raw"
mkdir -p "$RECORDINGS_DIR/gifs"
mkdir -p "$RECORDINGS_DIR/final"
echo -e "${GREEN}✓ Created: $RECORDINGS_DIR${NC}"
echo "  - raw/   (OBS recordings go here)"
echo "  - gifs/  (Converted GIFs go here)"
echo "  - final/ (Final edited videos)"
echo ""

# Check if gifski is installed
echo -e "${BLUE}[3/5] Checking if gifski is installed...${NC}"
if ! command -v gifski &> /dev/null; then
    echo -e "${YELLOW}⚠ gifski is not installed (needed for GIF conversion)${NC}"
    echo ""
    echo -e "${YELLOW}Install gifski with:${NC}"
    echo "  cargo install gifski"
    echo ""
    echo -e "${YELLOW}Or download from: https://gif.ski/${NC}"
    echo ""
    echo -e "${CYAN}You can skip this for now and install it later.${NC}"
else
    echo -e "${GREEN}✓ gifski is installed${NC}"
fi
echo ""

# Create OBS profile config
echo -e "${BLUE}[4/5] Creating OBS configuration...${NC}"
OBS_CONFIG_DIR="$HOME/.config/obs-studio"
mkdir -p "$OBS_CONFIG_DIR"

# Create a basic scene collection
SCENES_DIR="$OBS_CONFIG_DIR/basic/scenes"
mkdir -p "$SCENES_DIR"

echo -e "${GREEN}✓ OBS config directory ready${NC}"
echo ""

# Instructions
echo -e "${BLUE}[5/5] Setup Instructions${NC}"
echo ""
echo -e "${CYAN}═══════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}Next Steps:${NC}"
echo ""
echo "1. Launch OBS:"
echo -e "   ${YELLOW}obs${NC}"
echo ""
echo "2. When OBS opens, follow the Auto-Configuration Wizard:"
echo "   - Select: 'Optimize just for recording'"
echo "   - Base Resolution: 1920x1080"
echo "   - FPS: 30"
echo "   - Click 'Apply Settings'"
echo ""
echo "3. Add a Window Capture source:"
echo "   - Click '+' in Sources panel"
echo "   - Select 'Window Capture'"
echo "   - Name it: 'FrostyFlow Browser'"
echo "   - Select your browser window"
echo "   - Click OK"
echo ""
echo "4. Set up hotkeys (optional but recommended):"
echo "   - File → Settings → Hotkeys"
echo "   - Start Recording: F9"
echo "   - Stop Recording: F10"
echo ""
echo "5. Change recording location:"
echo "   - File → Settings → Output"
echo "   - Recording Path: $RECORDINGS_DIR/raw"
echo ""
echo -e "${CYAN}═══════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "${GREEN}✓ Setup complete!${NC}"
echo ""
echo -e "${YELLOW}Quick Reference:${NC}"
echo "  - Recordings saved to: $RECORDINGS_DIR/raw/"
echo "  - Convert to GIF: ./convert-to-gif.sh video.mp4"
echo "  - Full guide: docs/OBS_RECORDING_GUIDE.md"
echo ""
echo -e "${CYAN}Ready to record? Launch OBS now:${NC}"
echo -e "  ${YELLOW}obs${NC}"
echo ""

