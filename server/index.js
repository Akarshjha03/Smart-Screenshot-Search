import express from "express";
import cors from "cors";
import vision from "@google-cloud/vision";

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// Initialize Vision client with your service account key
const client = new vision.ImageAnnotatorClient({
  keyFilename: "./keys/smart-screenshot-search-fc52b5c60bcb.json",
});

app.get("/", (req, res) => {
  res.send("Server is up! ✅");
});

app.post("/search", async (req, res) => {
  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ error: "No image provided" });
    }

    // Remove data URL prefix
    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");

    // Call Vision API to detect labels
    const [result] = await client.labelDetection({
      image: { content: buffer },
    });

    const labels = result.labelAnnotations.map((label) => ({
      description: label.description,
      score: label.score,
    }));

    res.json({ labels });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Vision API error" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
