const { log } = require('./logger');

class Doctor {
    constructor (firstName, lastName, speciality) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.speciality = speciality;
        this.patients = [];
    }

    addPatient(patient) {
        this.patients.push(patient);
    }

    makeAppointment(patient, examination) {
        patient.arrangeAppointment(examination);
    }
};


class DoctorWithLogging extends Doctor {
    constructor (firstName, lastName, speciality) {
        super(firstName, lastName, speciality);
        log(`Kreiran doktor "${this.firstName}"`);
    }
}
module.exports = { Doctor : DoctorWithLogging }