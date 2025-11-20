# Recording Scripts for FrostyLabs Demos
## Exact step-by-step scripts for each GIF/video

---

## 🎬 Demo 1: Visual Workflow Builder (Priority #1)
**Duration:** 15-20 seconds  
**Location:** Homepage - Use Cases section  
**File name:** `workflow-builder-demo.mp4`

### Before Recording:
- [ ] Open FrostyFlow at `http://localhost:3000`
- [ ] Navigate to Workflows page
- [ ] Click "New Workflow"
- [ ] Clear any existing nodes
- [ ] Zoom browser to 110% (Ctrl/Cmd +)

### Recording Script:
```
[0:00] - Start with empty canvas
[0:02] - Drag "Input" node from left panel → Drop in center-left
[0:04] - Pause 1 second
[0:05] - Drag "LLM" node → Drop to the right of Input
[0:07] - Pause 1 second
[0:08] - Drag "Output" node → Drop to the right of LLM
[0:10] - Pause 1 second
[0:11] - Connect Input → LLM (click and drag from Input's right handle to LLM's left handle)
[0:13] - Connect LLM → Output
[0:15] - Pause 1 second
[0:16] - Click "Save" button
[0:18] - End recording
```

### Post-Production:
- Trim first 2 seconds
- Speed up to 1.5x
- Add text overlay: "Build Workflows Visually"

---

## 🎬 Demo 2: AI Model Selection (Priority #2)
**Duration:** 10-15 seconds  
**Location:** Features page - AI Models section  
**File name:** `ai-model-selection.mp4`

### Before Recording:
- [ ] Open a workflow with an LLM node
- [ ] Click on the LLM node to open config panel
- [ ] Zoom to 110%

### Recording Script:
```
[0:00] - LLM node config panel visible on right
[0:02] - Click "Model" dropdown
[0:03] - Scroll through models slowly:
        - GPT-4o
        - Claude 3.5 Sonnet
        - Gemini 2.0 Flash
        - Grok-2
        - (show 8-10 models)
[0:08] - Select "Claude 3.5 Sonnet"
[0:10] - Pause 1 second
[0:11] - Click "Model" dropdown again
[0:12] - Select "GPT-4o"
[0:14] - End recording
```

### Post-Production:
- Add text overlay: "20+ AI Models"
- Highlight the model dropdown

---

## 🎬 Demo 3: Blockchain Vault Wallet Creation (Priority #3)
**Duration:** 12-15 seconds  
**Location:** Features page - Blockchain Operations  
**File name:** `vault-wallet-creation.mp4`

### Before Recording:
- [ ] Navigate to Vault/Wallets page
- [ ] Make sure you have < 3 wallets (so it's not cluttered)
- [ ] Zoom to 110%

### Recording Script:
```
[0:00] - Vault wallets page visible
[0:02] - Click "Create Vault Wallet" button
[0:03] - Modal appears
[0:04] - Type wallet name: "Trading Bot Wallet"
[0:06] - Select chain: "Arbitrum"
[0:08] - Click "Create Wallet" button
[0:09] - Loading spinner (2 seconds)
[0:11] - Success! Wallet appears in list with address
[0:13] - Pause 2 seconds to show the wallet
[0:15] - End recording
```

### Post-Production:
- Add text overlay: "Secured by AWS Nitro Enclaves"
- Blur the wallet address (privacy)

---

## 🎬 Demo 4: MCP Tool Integration (Priority #4)
**Duration:** 10-12 seconds  
**Location:** Features page  
**File name:** `mcp-tool-integration.mp4`

### Before Recording:
- [ ] Navigate to MCP Servers page
- [ ] Have 1-2 servers already connected
- [ ] Zoom to 110%

### Recording Script:
```
[0:00] - MCP Servers page visible
[0:02] - Click "Add MCP Server" button
[0:03] - Modal appears
[0:04] - Type name: "Playwright Browser"
[0:06] - Select type: "SSE"
[0:07] - Paste URL: "https://mcp-server.example.com"
[0:09] - Click "Add Server" button
[0:10] - Server appears in list with green status
[0:11] - Click to expand → Show available tools
[0:13] - End recording
```

### Post-Production:
- Add text overlay: "Connect Any MCP Tool"

---

## 🎬 Demo 5: Social Media Automation Use Case (Priority #5)
**Duration:** 20-25 seconds  
**Location:** Homepage - Use Cases section  
**File name:** `social-media-automation.mp4`

### Before Recording:
- [ ] Create a workflow with these nodes:
  - Input: "Tweet text"
  - LLM: "Analyze sentiment"
  - Condition: "If positive"
  - HTTP: "Post to Twitter API"
  - Output: "Success message"
- [ ] Zoom to 100%

### Recording Script:
```
[0:00] - Show complete workflow on canvas
[0:03] - Click "Run Workflow" button
[0:04] - Input modal appears
[0:05] - Type: "Just launched our new AI feature! 🚀"
[0:08] - Click "Run" button
[0:09] - Watch nodes light up as they execute:
        - Input (green)
        - LLM (green, show "Analyzing...")
        - Condition (green, show "Positive sentiment")
        - HTTP (green, show "Posting...")
        - Output (green, show "Tweet posted!")
[0:20] - Pause 3 seconds on success
[0:23] - End recording
```

### Post-Production:
- Speed up to 1.3x
- Add text overlays for each step
- Add "✓" checkmarks as nodes complete

---

## 🎬 Demo 6: Voice Chat with AI (Optional)
**Duration:** 8-10 seconds  
**Location:** Features page  
**File name:** `voice-chat-demo.mp4`

### Before Recording:
- [ ] Open chat interface
- [ ] Make sure microphone is working
- [ ] Zoom to 110%

### Recording Script:
```
[0:00] - Chat interface visible
[0:02] - Click microphone button
[0:03] - Speak: "What's the weather in New York?"
[0:05] - Show waveform animation
[0:06] - AI responds with voice (show waveform)
[0:08] - Show text response appearing
[0:10] - End recording
```

---

## 🎬 Demo 7: Workflow as Tool (Optional)
**Duration:** 10-12 seconds  
**Location:** Features page  
**File name:** `workflow-as-tool.mp4`

### Before Recording:
- [ ] Have a published workflow named "weather_check"
- [ ] Open chat interface
- [ ] Zoom to 110%

### Recording Script:
```
[0:00] - Chat interface visible
[0:02] - Type: "@weather_check New York"
[0:04] - Press Enter
[0:05] - Show workflow executing (brief animation)
[0:07] - Weather results appear in chat
[0:10] - End recording
```

---

## 🎬 Demo 8: NFT Subscription Purchase (Optional)
**Duration:** 15-18 seconds  
**Location:** Pricing section  
**File name:** `nft-subscription.mp4`

### Before Recording:
- [ ] Navigate to Pricing page
- [ ] Make sure wallet is connected
- [ ] Zoom to 110%

### Recording Script:
```
[0:00] - Pricing cards visible
[0:02] - Hover over "Pro" tier
[0:04] - Click "Mint NFT Access" button
[0:05] - Wallet connection modal appears
[0:06] - Click "Connect with Google"
[0:08] - Loading (2 seconds)
[0:10] - Minting animation
[0:13] - Success! NFT appears
[0:15] - Show "Access Granted" message
[0:18] - End recording
```

---

## 📋 Pre-Recording Checklist (For All Demos)

### Browser Setup:
- [ ] Use Chrome or Firefox (clean UI)
- [ ] Hide bookmarks bar (Ctrl+Shift+B)
- [ ] Close unnecessary tabs
- [ ] Zoom to 110% (Ctrl/Cmd +)
- [ ] Use Incognito/Private mode (clean, no extensions)

### System Setup:
- [ ] Disable notifications (Do Not Disturb mode)
- [ ] Close Slack, Discord, email
- [ ] Quit unnecessary apps
- [ ] Check internet connection (for smooth loading)

### FrostyFlow Setup:
- [ ] Use demo account (not "test123")
- [ ] Clean data (professional names)
- [ ] Dark theme enabled
- [ ] Clear any error messages

### OBS Setup:
- [ ] Window Capture source added
- [ ] Browser chrome cropped
- [ ] Preview looks good
- [ ] Hotkeys set (F9/F10)

---

## 🎯 Recording Tips

1. **Practice first** - Do a dry run before recording
2. **Move slowly** - Cursor movements should be deliberate
3. **Pause between actions** - Give viewers time to process
4. **Show results** - Let success messages display fully
5. **Record multiple takes** - Pick the best one

---

**Next Steps:**
1. Record all Priority #1-3 demos first
2. Convert to GIF using `GIF_CONVERSION_GUIDE.md`
3. Add to landing page
4. Get feedback
5. Record remaining demos

Good luck! 🎬

