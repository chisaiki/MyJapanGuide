import express from 'express'
import { fileURLToPath } from 'url';
import path from 'path';
import citiesRouter from './routes/cities.js'

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))
app.use('/cities', citiesRouter)
app.use('/cityimages', express.static(path.join(__dirname, 'data/cityimages')));
app.use('/hotelimages', express.static(path.join(__dirname, 'data/hotelimages')));

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">MyJapanGuide API</h1>')
})

const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})