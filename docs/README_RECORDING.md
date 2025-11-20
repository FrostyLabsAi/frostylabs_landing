# FrostyLabs Recording & GIF Creation Guide
## Everything you need to create amazing demos

---

## 🚀 Super Quick Start

```bash
# 1. Run the setup script (one time only)
./frostylabs_landing_v2/scripts/setup-obs.sh

# 2. Launch OBS and follow the on-screen instructions
obs

# 3. Record your demo (press F9 to start, F10 to stop)

# 4. Convert to GIF
cd ~/FrostyLabs/recordings/raw
../../frostylabs_landing_v2/scripts/convert-to-gif.sh your-video.mp4
```

That's it! 🎉

---

## 📚 Documentation

### For Beginners:
1. **QUICK_START_RECORDING.md** - Start here! Simplest possible guide
2. **OBS_RECORDING_GUIDE.md** - Complete OBS setup and usage

### For Advanced Users:
3. **GIF_CONVERSION_GUIDE.md** - All conversion methods and optimization
4. **RECORDING_SCRIPTS.md** - Exact scripts for each demo

---

## 🎬 What to Record (Priority Order)

### Week 1 - Must Have (3 demos):
- [ ] **Workflow Builder** - Drag nodes, connect, save (15-20 sec)
- [ ] **Use Case Demo** - Show workflow executing (20-25 sec)
- [ ] **AI Model Selection** - Show 20+ models (10-15 sec)

### Week 2 - High Priority (2 demos):
- [ ] **Blockchain Vault** - Create wallet (12-15 sec)
- [ ] **MCP Integration** - Add MCP server (10-12 sec)

### Week 3 - Nice to Have (3 demos):
- [ ] **Voice Chat** - Talk to AI (8-10 sec)
- [ ] **Workflow as Tool** - Use @mention (10-12 sec)
- [ ] **NFT Subscription** - Mint access (15-18 sec)

---

## 🛠️ Tools & Scripts

### Setup Script
```bash
./frostylabs_landing_v2/scripts/setup-obs.sh
```
Creates folders, checks dependencies, guides you through OBS setup.

### Conversion Script
```bash
./frostylabs_landing_v2/scripts/convert-to-gif.sh video.mp4 [quality]
```
Converts MP4 to GIF. Quality options: `web`, `twitter`, `preview`

Examples:
```bash
# High quality for website
./convert-to-gif.sh demo.mp4 web

# Optimized for Twitter
./convert-to-gif.sh demo.mp4 twitter

# Small preview
./convert-to-gif.sh demo.mp4 preview
```

---

## 📁 Folder Structure

```
~/FrostyLabs/recordings/
├── raw/          # OBS recordings (MP4)
├── gifs/         # Converted GIFs
└── final/        # Final edited videos
```

---

## 🎯 Recording Checklist

Before you start:
- [ ] Close unnecessary browser tabs
- [ ] Hide bookmarks bar (Ctrl+Shift+B)
- [ ] Zoom browser to 110% (Ctrl/Cmd +)
- [ ] Enable Do Not Disturb mode
- [ ] Open FrostyFlow in browser
- [ ] Practice the demo once

---

## 🔧 Common Issues

### "OBS shows black screen"
**Fix:** Right-click source → Properties → Capture Method → "Xcomposite"

### "Can't find my video"
**Fix:** Check `~/Videos/` or `~/FrostyLabs/recordings/raw/`

### "GIF file is too large"
**Fix:** Use lower quality: `./convert-to-gif.sh video.mp4 twitter`

### "gifski not found"
**Fix:** Install with `cargo install gifski` or use https://ezgif.com

---

## 💡 Pro Tips

1. **Record in 1080p** - Looks professional, scales down nicely
2. **Keep it short** - 10-20 seconds is perfect for attention span
3. **Move slowly** - Deliberate cursor movements look better
4. **Practice first** - Do a dry run before recording
5. **Record multiple takes** - Pick the best one
6. **Show results** - Let success messages display fully
7. **Use dark theme** - Matches FrostyLabs branding

---

## 🌐 Adding GIFs to Landing Page

### Step 1: Copy to public folder
```bash
cp recordings/gifs/demo.gif frostylabs_landing_v2/public/demos/
```

### Step 2: Add to component
```tsx
import Image from "next/image";

<Image
  src="/demos/demo.gif"
  alt="Demo Description"
  width={1200}
  height={675}
  className="rounded-lg shadow-2xl"
/>
```

### Step 3: Test
```bash
cd frostylabs_landing_v2
pnpm dev
```

---

## 📊 File Size Guidelines

| Use Case | Max Size | Recommended Settings |
|----------|----------|---------------------|
| Website Hero | 10MB | `web` quality |
| Feature Cards | 5MB | `web` or `twitter` |
| Twitter Posts | 15MB | `twitter` quality |
| Email/Previews | 2MB | `preview` quality |

---

## 🎬 Example Workflow

```bash
# 1. Setup (one time)
./frostylabs_landing_v2/scripts/setup-obs.sh

# 2. Launch OBS
obs

# 3. Record demo (F9 to start, F10 to stop)
# Video saved to: ~/Videos/2025-01-17_demo.mp4

# 4. Move to recordings folder
mv ~/Videos/2025-01-17_demo.mp4 ~/FrostyLabs/recordings/raw/workflow-demo.mp4

# 5. Convert to GIF
cd ~/FrostyLabs/recordings/raw/
../../frostylabs_landing_v2/scripts/convert-to-gif.sh workflow-demo.mp4 web

# 6. Move to gifs folder
mv workflow-demo-web.gif ../gifs/

# 7. Copy to landing page
cp ../gifs/workflow-demo-web.gif ../../frostylabs_landing_v2/public/demos/

# 8. Add to component and test!
```

---

## 🆘 Need Help?

1. **Start with QUICK_START_RECORDING.md** - Simplest guide
2. **Check OBS_RECORDING_GUIDE.md** - Detailed OBS instructions
3. **Ask me!** - I can walk you through any step

---

## 📈 Progress Tracking

Track your progress:

```
Week 1:
[ ] Workflow Builder demo recorded
[ ] Workflow Builder GIF created
[ ] Use Case demo recorded
[ ] Use Case GIF created
[ ] AI Model Selection recorded
[ ] AI Model Selection GIF created

Week 2:
[ ] Blockchain Vault recorded
[ ] Blockchain Vault GIF created
[ ] MCP Integration recorded
[ ] MCP Integration GIF created

Week 3:
[ ] Voice Chat recorded
[ ] Workflow as Tool recorded
[ ] NFT Subscription recorded
```

---

**You got this!** 🚀

Start with just ONE demo and go from there. Don't overwhelm yourself!

