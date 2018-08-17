const { Examination } = require('./examination')


class CholesterolExamination extends Examination {
    constructor(date) {
        super(date, 'merenje holesterola');
    }

    makeResults() {
        this.value = Math.random() * 10;

        // time of the last meal
        const timeDiff = 28800000; // can be between 0 and 8 hours before the appointment;
        this.lastMeal = new Date(this.date - Math.floor(Math.random()*timeDiff));
    }

    getResults() {
        return `Cholersterol: ${this.value}`;
    }
}

module.exports = {
    CholesterolExamination
}