import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

const webDir = path.join(__dirname, 'web');
const fdroidDir = path.join(__dirname, 'fdroid');

// Serve static assets from web directory with HTML extension resolution
app.use(express.static(webDir, { extensions: ['html'] }));

// Serve fdroid repository directory if requested
app.use('/fdroid', express.static(fdroidDir));

// Serve root google verification file if requested
app.get('/google425a0d8b14e24d47.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'google425a0d8b14e24d47.html'));
});

// Single Page Application / fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(webDir, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`RSR-Projects server running at http://${HOST}:${PORT}`);
});
