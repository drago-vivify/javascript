const { Doctor } = require('./doctor')
const { Patient } = require('./patient')
const { BloodPressureExamination } = require('./bloodPressureExamination')
const { BloodSugarExamination } = require('./bloodSugarExamination')
const { CholesterolExamination } = require('./cholesterolExamination')

const doctorMilan = new Doctor('Milan', 'Milanovic', 'someSpeciality');
const patientDragan = new Patient('Dragan', 'Draganovic', '1112990123123', '1');

patientDragan.selectDoctor(doctorMilan);


bloodSugar = new BloodSugarExamination(new Date('2018-09-13 15:30:00'));
doctorMilan.makeAppointment(patientDragan, bloodSugar);

bloodPressure = new BloodPressureExamination(new Date('2018-09-13 16:00:00'))
doctorMilan.makeAppointment(patientDragan, bloodPressure);


patientDragan.doExamination(bloodSugar);
patientDragan.doExamination(bloodPressure);
