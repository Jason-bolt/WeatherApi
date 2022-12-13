const db = require('../config/db')
const Incident = require('../models/Incidents')(db.sequelize, db.Sequelize)
const axios = require('axios')


class IncidentService {


    async getIncidents() {
       try {
        const incidents = await Incident.findAll({
            attributes: ['client_id', 'incident_desc', 'city', 'country', 'date', 'weather_report']
        })
        // console.log(incidents)
        return incidents
       } catch (err) {
        // console.log(err)
        return {error: err}
       }
    }

    async postReport(report) {
        try {
            const city = report.city
            report.date = new Date()
            const api_key = process.env.WEATHER_API_KEY
            const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
            report.weather_report = weather.data

            const incident = await Incident.create(report)
            // console.log(incident)
            return incident
        } catch (err) {
            // console.log(err)
            return {error: err}
        }
    }

}

module.exports = new IncidentService()