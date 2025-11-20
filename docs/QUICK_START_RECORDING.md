# Quick Start: Recording & Converting GIFs
## The Simplest Possible Guide

---

## 🚀 Super Quick Start (3 Steps)

### Step 1: Open OBS
```bash
obs
```

### Step 2: Record Your Demo
1. Click **"+"** in Sources panel → **"Window Capture"**
2. Select your browser window → Click **"OK"**
3. Press **F9** to start recording
4. Do your demo
5. Press **F10** to stop recording

Your video is saved to: `~/Videos/`

### Step 3: Convert to GIF
```bash
cd ~/Videos
../FrostyLabs/frostylabs_landing_v2/scripts/convert-to-gif.sh "2025-01-17 14-30-45.mp4"
```

Done! Your GIF is ready! 🎉

---

## 📚 Detailed Guides

If you need more help, check these guides:

1. **OBS_RECORDING_GUIDE.md** - Complete OBS setup and recording instructions
2. **GIF_CONVERSION_GUIDE.md** - All the ways to convert MP4 to GIF
3. **RECORDING_SCRIPTS.md** - Exact scripts for each demo to record

---

## 🎯 What to Record (Priority Order)

### Week 1 (Must-Have):
1. ✅ **Workflow Builder** - Drag nodes, connect them, save
2. ✅ **Use Case Demo** - Show a workflow executing
3. ✅ **AI Model Selection** - Show 20+ models dropdown

### Week 2 (High Priority):
4. ✅ **Blockchain Vault** - Create a wallet
5. ✅ **MCP Integration** - Add an MCP server

### Week 3 (Nice-to-Have):
6. ✅ **Voice Chat** - Talk to AI
7. ✅ **NFT Subscription** - Mint access NFT

---

## 🎬 Recording Checklist

Before you start recording:
- [ ] Close unnecessary browser tabs
- [ ] Hide bookmarks bar (Ctrl+Shift+B)
- [ ] Zoom browser to 110% (Ctrl/Cmd +)
- [ ] Enable Do Not Disturb mode
- [ ] Open FrostyFlow in browser
- [ ] Practice the demo once

---

## 🔧 Troubleshooting

### "OBS shows black screen"
```bash
# Try this in OBS:
# Right-click source → Properties → Capture Method → "Xcomposite"
```

### "Can't find my video"
```bash
# Videos are saved here:
ls -la ~/Videos/
```

### "GIF file is too large"
```bash
# Use twitter quality instead:
./convert-to-gif.sh video.mp4 twitter
```

### "gifski not found"
```bash
# Install gifski:
cargo install gifski

# Or use ezgif.com (web-based, no installation):
# https://ezgif.com/video-to-gif
```

---

## 📁 Organize Your Files

Create folders for your recordings:
```bash
mkdir -p ~/FrostyLabs/recordings/{raw,gifs}
```

Then:
- Save OBS recordings to: `~/FrostyLabs/recordings/raw/`
- Save GIFs to: `~/FrostyLabs/recordings/gifs/`

---

## 🎨 Example Workflow

```bash
# 1. Record with OBS (press F9, do demo, press F10)
# Video saved to: ~/Videos/2025-01-17_demo.mp4

# 2. Move to recordings folder
mv ~/Videos/2025-01-17_demo.mp4 ~/FrostyLabs/recordings/raw/workflow-demo.mp4

# 3. Convert to GIF
cd ~/FrostyLabs/recordings/raw/
../../frostylabs_landing_v2/scripts/convert-to-gif.sh workflow-demo.mp4

# 4. Move GIF to final location
mv workflow-demo-web.gif ../gifs/

# 5. Use in landing page
cp ../gifs/workflow-demo-web.gif ../../frostylabs_landing_v2/public/demos/
```

---

## 🎯 Next Steps

1. **Record your first demo** (Workflow Builder)
2. **Convert to GIF**
3. **Add to landing page** (see below)
4. **Test on website**
5. **Repeat for other demos**

---

## 🌐 Adding GIFs to Landing Page

### Step 1: Copy GIF to public folder
```bash
cp workflow-demo-web.gif frostylabs_landing_v2/public/demos/
```

### Step 2: Add to component
Edit the component file and add:
```tsx
<Image
  src="/demos/workflow-demo-web.gif"
  alt="Workflow Builder Demo"
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

Open http://localhost:3000 and check!

---

## 💡 Pro Tips

1. **Record in 1080p** - Looks better, scales down nicely
2. **Keep it short** - 10-20 seconds is perfect
3. **Move slowly** - Slow cursor movements look professional
4. **Practice first** - Do a dry run before recording
5. **Record multiple takes** - Pick the best one

---

## 🆘 Need Help?

If you get stuck:
1. Check the detailed guides (OBS_RECORDING_GUIDE.md, etc.)
2. Ask me! I can walk you through any step
3. Try the web-based option (ezgif.com) if local tools don't work

---

**You got this!** 🚀

Start with just ONE demo (Workflow Builder) and go from there.
Don't try to do everything at once!

