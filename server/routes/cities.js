import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cityData from '../data/cities.js'
import CitiesController from '../controllers/cities.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', CitiesController.getCities);

router.get('/', (req, res) => {
  res.status(200).json(cityData)
})

router.get('/:cityName', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/city.html'))
})

export default router