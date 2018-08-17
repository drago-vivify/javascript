const { log } = require('./logger');

class Patient {
    constructor (firstName, lastName, idNumber, medicalId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.medicalId = medicalId;
        this.arrangedAppointments = [];
    }

    selectDoctor(doctor) {
        this.doctor = doctor;
        this.doctor.addPatient(this);
    } 

    arrangeAppointment(examination) {
        this.arrangedAppointments.push(examination);
    }

    doExamination(examination) {
        this.arrangedAppointments.splice(this.arrangedAppointments.indexOf(examination), 1);
        examination.makeResults();
        console.log(examination.getResults());
    }
}


class PatientWithLogging extends Patient{
    constructor (firstName, lastName, idNumber, medicalId) {
        super(firstName, lastName, idNumber, medicalId);
        log(`Kreiran pacijent "${this.firstName}"`);
    }

    selectDoctor(doctor) {
        super.selectDoctor(doctor);
        log(`Pacijent ${this.firstName} izabrao doktora ${doctor.firstName}`);
    }

    doExamination(examination) {
        super.doExamination(examination);
        log(`Pacijent ${this.firstName} izvrsio pregled "${examination.type}"`);
    }
}

module.exports = { Patient: PatientWithLogging }
