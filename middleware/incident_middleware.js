const validator = require('../request/request_validation')

exports.isValidatedFields = async (req, res, next) => {
    const validationRules = {
        "client_id": "required|numeric",
        "incident_desc": "required|string",
        "city": "required|string",
        "country": "required|string"
    }

    try {
        await validator(req.body, validationRules, {}, (err, status) => {
            if (!status) {
                res.status(412)
                .send({
                    success: false,
                    message: "Validation failed",
                    data: err
                })
            }else {
                next()
            }
        })
    } catch (err) {
        console.error(err)
        res.status(500).send({
            error: err
        })
    }

}