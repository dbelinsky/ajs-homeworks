export default class ErrorRepository{
    constructor() {
        this.errors = new Map();

        this.errors.set(400, 'Bad request');
        this.errors.set(404, 'Not found');
        this.errors.set(403, 'Forbidden');
    }

    translate(code) {
        if (this.errors.has(code)) {
            return this.errors.get(code);
        }
        return "Unknown Error";
    }
}