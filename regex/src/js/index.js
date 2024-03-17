
export default class Validator {
    validateUsername(username) {
        const regex = /^(?!.*[\d]{4,})[a-zA-Z0-9_-]{3,}[a-zA-Z0-9]$/;
        const reIncludeFourNumbers = /\d\d\d\d/;
        return regex.test(username)
        && reIncludeFourNumbers.test(username);
    }
}