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
## 🧠 About Google Cloud Vision API

This project uses the **Google Cloud Vision API**, which provides powerful pre-trained machine learning models to understand the content of images. With Vision API, developers can easily perform tasks like label detection, web detection, face detection, landmark recognition, text extraction (OCR), and more — all through a secure, scalable cloud service. In this project, Vision API analyzes screenshots captured by the extension and returns descriptive labels and web entity matches, demonstrating how cloud AI can be integrated into a real-time, user-facing browser tool.

## 📊 System Architecture Diagrams

![Smart Screenshot Search - Overall Flow](https://github.com/Akarshjha03/Smart-Screenshot-Search/blob/main/Diagram1.png)

*Diagram 1: High-level flow showing how the Chrome extension captures a screenshot and sends it to the Node.js server for Google Cloud Vision API analysis.*

---

![Smart Screenshot Search - Detailed Data Flow](https://github.com/Akarshjha03/Smart-Screenshot-Search/blob/main/Diagram2.png)

*Diagram 2: Detailed data flow — illustrating the interaction between the browser extension, backend server, and the Vision API endpoints.*



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

## ✨ Highlights
✔️ Secure API communication using fetch and async requests.
✔️ Clean Node.js Express server handling POST requests and image data.
✔️ Cloud AI integration demonstrating real-world Vision API usage.
✔️ Practical Chrome Extension using Manifest V3 service workers.
✔️ Good candidate for personal portfolio, resume, or backend showcase.

## 📌 Future Enhancements
🔍 Add OCR text extraction for screenshots.
🗂️ Store user search history securely.
🪄 Implement smart local fallback with TensorFlow.js.
🎨 Improve popup UI with React or Next.js.
🔐 Add user auth for personal usage tracking.

## 📚 License
This project is open-source for educational purposes only.
Always secure your API keys and manage your Google Cloud billing to avoid unexpected costs.

## 👤 Author
# Akarsh Jha
🎓 Computer Science & Engineering Undergraduate
🔗 [LinkedIn](https://www.linkedin.com/in/akarshjha03/)

