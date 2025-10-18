const express = require('express');
const cors = require('cors');
const { chromium } = require('playwright');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Instagram Downloader API is running!');
});

app.post('/download', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).send('URL is required');
  }

  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Wait for the video or image to be visible
    const videoSelector = 'video';
    const imageSelector = 'img[style="object-fit: cover;"]';
    
    await page.waitForSelector(`${videoSelector}, ${imageSelector}`, { timeout: 10000 });

    let mediaUrl;
    const isVideo = await page.isVisible(videoSelector);

    if (isVideo) {
      mediaUrl = await page.getAttribute(videoSelector, 'src');
    } else {
      mediaUrl = await page.getAttribute(imageSelector, 'src');
    }

    await browser.close();

    if (mediaUrl) {
      res.json({ downloadUrl: mediaUrl });
    } else {
      res.status(404).send('Media not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while trying to download the media.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
