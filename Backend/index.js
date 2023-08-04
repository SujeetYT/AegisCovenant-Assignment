require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const axios = require('axios');

const dummyData = require('./dummyData');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/flightfare', async (req, res)=>{
    const {from, to, date, adult, type, currency} = req.body;

    const options = {
      method: 'GET',
      url: 'https://flight-fare-search.p.rapidapi.com/v2/flights/',
      params: {
        from: `${from}`,
        to: `${to}`,
        date: `${date}`, //2023-08-04
        adult: `${adult}`,
        type: `${type}`,
        currency: `${currency}`
      },
      headers: {
        'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
        'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        // const response = dummyData;
        
        // sending desired data
        const newData = [];
        response[0].results.map((data)=>{
          const obj = {
            "flight_name": data.flight_name, // Air-India
            "careerCode": data.careerCode,   // AI
            "cabinType": data.cabinType,     // Economy
            "currency": data.currency,       // INR
            "total": data.totals.total,      // Fare price
          };
          newData.push(obj);
        });

        // ------------------------- Mock data starts ---------------------------------------
        // response.map((data)=>{
        //   const obj = {
        //     "flight_name": data.flight_name, // Air-India
        //     "careerCode": data.careerCode,   // AI
        //     "cabinType": data.cabinType,     // Economy
        //     "currency": data.currency,       // INR
        //     "total": data.totals.total,      // Fare price
        //   };
        //   newData.push(obj);
        // });
        // ------------------------- Mock data ends ---------------------------------------
        res.send(newData);

    } catch (error) {
        res.send(error);
    }

});



app.listen(port, ()=>console.log(`App running on http://localhost:${port}`));