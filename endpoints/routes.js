const router = require('express').Router()
const Incident_Middleware = require('../middleware/incident_middleware')
const Incident_Controller = require('../contoller/incident_controller')


router.get('/incidents', Incident_Controller.getIncidents)

router.post('/report', [
    Incident_Middleware.isValidatedFields,
    Incident_Controller.postReport
])


module.exports = router