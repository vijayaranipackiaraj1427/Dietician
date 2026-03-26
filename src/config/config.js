require('dotenv').config();

module.exports = {

    baseURL: process.env.BASE_URL,
    addPatientURL: process.env.BASE_URL + process.env.ADD_PATIENT_URL
}
