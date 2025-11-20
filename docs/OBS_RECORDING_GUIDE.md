# OBS Studio Recording Guide for FrostyLabs
## Simple Step-by-Step Instructions

---

## 🎬 First Time Setup (Do Once)

### Step 1: Launch OBS
```bash
obs
```

### Step 2: Auto-Configuration Wizard (First Launch)
When OBS opens for the first time, it will show a wizard:

1. **"Auto-Configuration Wizard"** appears
   - Click **"Yes"** to run it
   
2. **"Usage Information"**
   - Select: **"Optimize just for recording, I will not be streaming"**
   - Click **"Next"**

3. **"Video Settings"**
   - Base Resolution: **1920x1080** (should auto-detect)
   - FPS: **30** (or 60 if you want smoother)
   - Click **"Next"**

4. **"Recording Settings"**
   - Let it run the test
   - Click **"Apply Settings"**

✅ **Done!** OBS is now configured.

---

## 🎥 Recording Your First Video (Every Time)

### Step 1: Add Your Browser Window as a Source

1. In the **"Sources"** panel (bottom section), click the **"+"** button
2. Select **"Window Capture"**
3. Name it: **"FrostyFlow Browser"** → Click **"OK"**
4. In the properties window:
   - **Window:** Select your browser window (e.g., "Google Chrome - FrostyFlow")
   - **Capture Method:** "Automatic"
   - ✅ Check **"Capture Cursor"**
   - Click **"OK"**

### Step 2: Crop the Window (Remove Browser Chrome)

1. **Right-click** on the source in the preview
2. Select **"Transform"** → **"Edit Transform"**
3. Adjust the crop values to remove browser tabs/address bar:
   - **Crop Top:** 80-100 (removes address bar)
   - **Crop Left:** 0
   - **Crop Right:** 0
   - **Crop Bottom:** 0
4. Click **"Close"**

### Step 3: Resize to Fit Canvas

1. **Right-click** on the source in the preview
2. Select **"Transform"** → **"Fit to Screen"**

### Step 4: Start Recording

1. Click the **"Start Recording"** button (bottom right)
2. Perform your demo in the browser
3. Click **"Stop Recording"** when done

### Step 5: Find Your Video

Your video is saved to:
```
~/Videos/
```

The file will be named something like: `2025-01-17 14-30-45.mp4`

---

## ⚙️ Quick Settings (Optional but Recommended)

### Change Recording Location:
1. **File** → **Settings** → **Output**
2. **Recording Path:** Click **"Browse"** and select a folder
3. I recommend: `~/FrostyLabs/recordings/`

### Improve Quality:
1. **File** → **Settings** → **Output**
2. **Recording Quality:** "Indistinguishable Quality, Large File Size"
3. **Recording Format:** MP4
4. Click **"Apply"** → **"OK"**

### Add Hotkeys (Easier Recording):
1. **File** → **Settings** → **Hotkeys**
2. Find **"Start Recording"** → Set to: **F9**
3. Find **"Stop Recording"** → Set to: **F10**
4. Click **"Apply"** → **"OK"**

Now you can press **F9** to start and **F10** to stop!

---

## 🎯 Quick Reference Card

```
┌─────────────────────────────────────────┐
│  OBS QUICK REFERENCE                    │
├─────────────────────────────────────────┤
│  Start Recording:  F9 (or button)       │
│  Stop Recording:   F10 (or button)      │
│  Videos saved to:  ~/Videos/            │
│                                         │
│  BEFORE RECORDING:                      │
│  1. Add Window Capture source           │
│  2. Crop browser chrome                 │
│  3. Fit to screen                       │
│                                         │
│  DURING RECORDING:                      │
│  - Move cursor slowly                   │
│  - Pause between actions                │
│  - Show results fully                   │
└─────────────────────────────────────────┘
```

---

## 🚨 Common Issues & Fixes

### Issue: "Black screen in preview"
**Fix:** 
- Right-click source → Properties
- Change **"Capture Method"** to "Xcomposite"

### Issue: "Can't see my browser window in the list"
**Fix:**
- Make sure the browser is open
- Try refreshing the window list
- Or use **"Screen Capture"** instead of "Window Capture"

### Issue: "Recording is laggy"
**Fix:**
- Settings → Output → Recording Quality → "High Quality, Medium File Size"
- Settings → Video → FPS → Change to 30

### Issue: "File size is too large"
**Fix:**
- Settings → Output → Recording Format → MP4
- Settings → Output → Encoder → "Software (x264)"
- Settings → Output → Rate Control → CRF → Set to 23

---

## 📁 Recommended Folder Structure

Create this folder for your recordings:
```bash
mkdir -p ~/FrostyLabs/recordings/raw
mkdir -p ~/FrostyLabs/recordings/edited
mkdir -p ~/FrostyLabs/recordings/final
```

- **raw/** - OBS recordings go here
- **edited/** - After editing in DaVinci Resolve
- **final/** - Final GIFs and videos for website

---

## 🎬 Next Steps

Once you have your MP4 recording, see:
- `GIF_CONVERSION_GUIDE.md` - How to convert MP4 to GIF
- `RECORDING_SCRIPTS.md` - What to record for each demo

---

**Need help?** Just ask! I can walk you through any step in more detail.

