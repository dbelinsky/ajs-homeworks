import Validator from '../index';

describe('Validator', () => {
    const validator = new Validator();

    test('Username with more than 3 digits in a row should return false', () => {
        expect(validator.validateUsername("user1234")).toBe(false);
    });

    test('Username starting or ending with a digit should return false', () => {
        expect(validator.validateUsername("1username1")).toBe(false);
    });

    test('Username starting or ending with a underline should return false', () => {
        expect(validator.validateUsername("_username_")).toBe(false);
    });

    test('Username starting or ending with a dash should return false', () => {
        expect(validator.validateUsername("-username-")).toBe(false);
    });

    test('Username with invalid characters should return false', () => {
        expect(validator.validateUsername("user@name")).toBe(false);
    });
});


