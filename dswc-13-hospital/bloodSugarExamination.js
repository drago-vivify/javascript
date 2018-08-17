const { Examination } = require('./examination')

class BloodSugarExamination extends Examination {
    constructor(date) {
        super(date, 'merenje nivoa secera u krvi');
    }

    makeResults() {
        this.value = Math.random()*10 + 5;

        // time of the last meal
        const timeDiff = 28800000; // can be between 0 and 8 hours before the appointment;
        this.lastMeal = new Date(this.date - Math.floor(Math.random()*timeDiff));
    }

    getResults() {
        return `Sugar level: ${this.value}, Time of the last meal: `
                + `${this.lastMeal.getDate()}.${this.lastMeal.getMonth()}.${this.lastMeal.getFullYear()}. ` + 
                `${this.lastMeal.getHours()}:${this.lastMeal.getMinutes()}`;
    }
}

module.exports = {
    BloodSugarExamination
}
