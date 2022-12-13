const Incident_service = require('../services/incident_service')

exports.getIncidents = async (req, res) => {
    try {
       const incidents = await Incident_service.getIncidents()
       if (incidents.error) {
        res.status(500).send( "Something went wrong!" )
       }else{
        res.send(incidents)
       }
       
    } catch (err) {
        res.status(500).send({ errors: err })
    }
}

exports.postReport = async (req, res) => {
    try {
       const report = await Incident_service.postReport(req.body)
       if (report.error) {
        res.status(500).send( "Something went wrong!" )
       }else{
        res.send(report)
       }
       
    } catch (err) {
        res.status(500).send({ errors: err })
    }
}