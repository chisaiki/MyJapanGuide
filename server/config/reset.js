import pool from './database.js'
import dotenv from './dotenv.js'
import cityData from '../data/cities.js'

const createCitiesTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS cities;

        CREATE TABLE IF NOT EXISTS cities (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            imageCity VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            imageHotel VARCHAR(255) NOT NULL,
            hotelLocation VARCHAR(255) NOT NULL,
            hotelName VARCHAR(255) NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 cities table created successfully')
    } catch (err) {
        console.error('⚠️ error creating cities table', err)
    }
}

const seedCitiesTable = async () => {
  await createCitiesTable()
  
    cityData.forEach((city) => {
       const insertQuery = {
        text: 'INSERT INTO cities (name, imageCity, description, imageHotel, hotelLocation, hotelName) VALUES ($1, $2, $3, $4, $5, $6)'
        }

        const values = [
            city.name,
            city.image,
            city.description,
            city.hotelimage,
            city.hotellocation,
            city.hotel
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting hotel', err)
                return
            }

            console.log(`✅ ${city.name} added successfully`)
        })
    })
}

seedCitiesTable();