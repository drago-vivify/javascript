const { Examination } = require('./examination')

class BloodPressureExamination extends Examination {
    constructor(date) {
        super(date, 'merenje krvnog pritiska');
    }

    makeResults() {
        this.topVal = Math.trunc(Math.random() * 80 + 80);
        this.bottomVal = Math.trunc(Math.random() * 50 + 50);
        this.heartRate = Math.trunc(Math.random() * 150 + 50);
    }

    getResults() {
        return `Top value: ${this.topVal}, Bottom value: ${this.bottomVal}, Heart rate: ${this.heartRate}`;
    }
}

module.exports = {
    BloodPressureExamination
}
