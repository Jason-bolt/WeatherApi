const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    
    class Incident extends Model {}

    Incident.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        client_id: {
            type: DataTypes.REAL,
        },
        incident_desc: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        country: {
            type: DataTypes.STRING,
        },
        date: {
            type: DataTypes.DATE,
        },
        weather_report: {
            type: DataTypes.JSONB
        }
    }, {
        sequelize,
        modelName: 'incident'
    })

    return Incident

}