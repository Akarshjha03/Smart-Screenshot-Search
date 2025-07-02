# 📸 Smart Screenshot Search 🔍

**Smart Screenshot Search** is a full-stack Chrome extension with a custom Node.js backend that allows users to capture any webpage screenshot and analyze it using the **Google Cloud Vision API**, returning intelligent labels and web matches — similar to Google Lens for the desktop browser.

---

## 🚀 **Key Features**

- 📷 **Capture Screenshots:** Instantly capture the active browser tab.
- ☁️ **Cloud Integration:** Send images securely to a Node.js server and process them with Google Cloud Vision.
- 🔍 **Image Recognition:** Get accurate labels, web matches, and insights about the image.
- ⚙️ **Full-Stack Flow:** Demonstrates complete workflow — browser ➜ server ➜ cloud ➜ back to user.
- 🔐 **Secure API Handling:** Uses a service account and environment-based credentials.

---

## 💡 **Project Purpose**

> **Why this project?**  
This extension demonstrates **practical full-stack engineering**:
- Secure **API integration** with Google Cloud services.
- Handling image data (base64 encoding/decoding, REST APIs).
- Building a functional **Chrome Extension** with Manifest V3.
- Designing an end-to-end **cloud-connected workflow** for real-world AI features.

---


---

## ⚙️ **Tech Stack**

- **Frontend:** Chrome Extension (Manifest V3, HTML, JavaScript)
- **Backend:** Node.js, Express.js
- **Cloud AI:** Google Cloud Vision API
- **Cloud Security:** Service Account, API key management

---

## ✅ **How It Works**

1️⃣ User clicks the extension icon → opens a simple popup.  
2️⃣ Click **“Take Screenshot”** → active tab is captured.  
3️⃣ Image is encoded in base64 and sent to the Node.js backend.  
4️⃣ Backend calls **Google Cloud Vision API** to analyze the image.  
5️⃣ Backend responds with labels, detected objects, and web matches.  
6️⃣ Extension displays the result or opens a new tab with the output.

---

## 🔐 **Billing Note**

> ⚠️ The **Google Cloud Vision API** requires billing to be enabled on your GCP project.
> Google provides **free credits** for new accounts — ensure you monitor usage responsibly.

---




