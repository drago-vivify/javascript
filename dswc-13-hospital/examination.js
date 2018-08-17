class Examination {
    constructor (date, type) {
        this.date = date;
        this.type = type;
    }

    makeResults() {
        throw new Error("This is abstract class");
    }

    printResults() {
        throw new Error("This is abstract class");
    }
}

module.exports = { Examination }