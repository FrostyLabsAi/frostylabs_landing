# GIF Conversion Guide
## Convert OBS Recordings to High-Quality GIFs

---

## 🎨 Method 1: Using Gifski (Best Quality) ⭐⭐⭐

### Install Gifski
```bash
# Install via cargo (Rust package manager)
cargo install gifski

# Or download pre-built binary from:
# https://gif.ski/
```

### Basic Conversion
```bash
# High quality for website (1200px wide)
gifski -o output.gif --fps 30 --quality 90 --width 1200 input.mp4

# Medium quality for Twitter (800px wide, smaller file)
gifski -o twitter.gif --fps 24 --quality 80 --width 800 input.mp4

# Low quality for fast loading (600px wide)
gifski -o preview.gif --fps 20 --quality 70 --width 600 input.mp4
```

### Advanced Options
```bash
# Full control
gifski \
  -o output.gif \
  --fps 30 \
  --quality 90 \
  --width 1200 \
  --height 675 \
  --fast \
  input.mp4
```

**Parameters Explained:**
- `--fps 30` - Frames per second (lower = smaller file)
- `--quality 90` - Quality 1-100 (higher = better quality, larger file)
- `--width 1200` - Width in pixels (height auto-calculated)
- `--fast` - Faster encoding (slightly lower quality)

---

## 🌐 Method 2: Using ezgif.com (No Installation) ⭐⭐

### Steps:
1. Go to: https://ezgif.com/video-to-gif
2. Click **"Choose File"** → Select your MP4
3. Click **"Upload video!"**
4. Adjust settings:
   - **Size:** 1200 (width)
   - **Frame rate:** 30
   - **Method:** Optimize for transparency
5. Click **"Convert to GIF!"**
6. Click **"Optimize"** (optional, reduces file size)
7. Download your GIF

**Pros:** No installation, easy to use
**Cons:** File size limits (100MB), slower than local tools

---

## 🎬 Method 3: Using FFmpeg (Most Control) ⭐

### Install FFmpeg
```bash
sudo apt install ffmpeg
```

### Convert to GIF
```bash
# Basic conversion
ffmpeg -i input.mp4 -vf "fps=30,scale=1200:-1:flags=lanczos" output.gif

# High quality with palette generation (2-step process)
# Step 1: Generate palette
ffmpeg -i input.mp4 -vf "fps=30,scale=1200:-1:flags=lanczos,palettegen" palette.png

# Step 2: Use palette to create GIF
ffmpeg -i input.mp4 -i palette.png -filter_complex "fps=30,scale=1200:-1:flags=lanczos[x];[x][1:v]paletteuse" output.gif
```

---

## 📊 Recommended Settings by Use Case

### For Website Hero Section (Large, High Quality)
```bash
gifski -o hero.gif --fps 30 --quality 95 --width 1400 input.mp4
```
- Target: < 8MB
- Resolution: 1400px wide
- FPS: 30
- Quality: 95

### For Website Feature Cards (Medium Quality)
```bash
gifski -o feature.gif --fps 24 --quality 85 --width 1000 input.mp4
```
- Target: < 4MB
- Resolution: 1000px wide
- FPS: 24
- Quality: 85

### For Twitter Posts (Small, Optimized)
```bash
gifski -o twitter.gif --fps 20 --quality 75 --width 800 input.mp4
```
- Target: < 3MB (Twitter limit: 15MB)
- Resolution: 800px wide
- FPS: 20
- Quality: 75

### For Email/Previews (Tiny, Fast Loading)
```bash
gifski -o preview.gif --fps 15 --quality 65 --width 600 input.mp4
```
- Target: < 1MB
- Resolution: 600px wide
- FPS: 15
- Quality: 65

---

## 🗜️ Optimize Existing GIFs (Reduce File Size)

### Using gifsicle
```bash
# Install
sudo apt install gifsicle

# Optimize
gifsicle -O3 --lossy=80 input.gif -o output.gif

# Aggressive optimization
gifsicle -O3 --lossy=100 --colors 128 input.gif -o output.gif
```

### Using ezgif.com
1. Go to: https://ezgif.com/optimize
2. Upload your GIF
3. Set **Compression level:** 35-50
4. Click **"Optimize GIF!"**
5. Download optimized version

---

## 📏 File Size Guidelines

| Use Case | Max Size | Recommended |
|----------|----------|-------------|
| Website Hero | 10MB | 5-8MB |
| Feature Cards | 5MB | 2-4MB |
| Twitter | 15MB | 3-5MB |
| Email | 2MB | < 1MB |

**Rule of Thumb:** If GIF > 5MB, consider using MP4 video instead!

---

## 🎯 Quick Conversion Script

Save this as `convert-gif.sh`:
```bash
#!/bin/bash
# Usage: ./convert-gif.sh input.mp4 output.gif

INPUT=$1
OUTPUT=$2

if [ -z "$INPUT" ] || [ -z "$OUTPUT" ]; then
    echo "Usage: ./convert-gif.sh input.mp4 output.gif"
    exit 1
fi

echo "Converting $INPUT to $OUTPUT..."
gifski -o "$OUTPUT" --fps 30 --quality 90 --width 1200 "$INPUT"
echo "Done! File size: $(du -h "$OUTPUT" | cut -f1)"
```

Make it executable:
```bash
chmod +x convert-gif.sh
```

Use it:
```bash
./convert-gif.sh recording.mp4 demo.gif
```

---

## 🚀 Batch Convert Multiple Videos

```bash
#!/bin/bash
# Convert all MP4s in current directory to GIFs

for file in *.mp4; do
    output="${file%.mp4}.gif"
    echo "Converting $file..."
    gifski -o "$output" --fps 30 --quality 85 --width 1000 "$file"
done

echo "All conversions complete!"
```

---

## 📊 Check GIF File Size

```bash
# Check file size
ls -lh output.gif

# Or
du -h output.gif
```

If too large, reduce quality or FPS:
```bash
# Reduce quality
gifski -o smaller.gif --fps 24 --quality 75 --width 1000 input.mp4
```

---

**Next:** See `RECORDING_SCRIPTS.md` for what to record for each demo!

