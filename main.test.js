
const assert = require('assert');
const {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
  user1,
  user2,
  user3,
  password1,
  password2,
  password3,
} = require('./main.js');

describe('isValidEmail', () => {
  it('returns whether the email ends with a persevere domain', () => {
    const validEmail1 = 'kyle.rose@perseverenow.org';
    const validEmail2 = 'your.name.prsvr@gmail.com';
    const invalidEmail1 = 'kyle.rose@gmail.com';
    const invalidEmail2 = 'kyle@fake.com';
    assert.strictEqual(isValidEmail(validEmail1), true);
    assert.strictEqual(isValidEmail(validEmail2), true);
    assert.strictEqual(isValidEmail(invalidEmail1), false);
    assert.strictEqual(isValidEmail(invalidEmail2), false);
  });

  it('requires there be at least one character before the @ symbol', () => {
    const validEmail1 = 'krose@perseverenow.org';
    const validEmail2 = 'c@perseverenow.org';
    const validEmail3 = 'm.prsvr@gmail.com';
    const validEmail4 = ' .prsvr@gmail.com';
    const invalidEmail1 = '@perseverenow.org';
    const invalidEmail2 = '.prsvr@gmail.com';
    assert.strictEqual(isValidEmail(validEmail1), true);
    assert.strictEqual(isValidEmail(validEmail2), true);
    assert.strictEqual(isValidEmail(validEmail3), true);
    assert.strictEqual(isValidEmail(validEmail4), true);
    assert.strictEqual(isValidEmail(invalidEmail1), false);
    assert.strictEqual(isValidEmail(invalidEmail2), false);
  });
});

describe('isValidPassword', () => {
  it('returns whether the password is at least 8 characters long', () => {
    const validPassword1 = 'Long enough!';
    const validPassword2 = 'Barely!!';
    const invalidPassword1 = 'Almost!';
    const invalidPassword2 = 'But no';
    assert.strictEqual(isValidPassword(validPassword1), true);
    assert.strictEqual(isValidPassword(validPassword2), true);
    assert.strictEqual(isValidPassword(invalidPassword1), false);
    assert.strictEqual(isValidPassword(invalidPassword2), false);
  });

  it('should have at least 1 uppercase character', () => {
    const validPassword1 = 'MOSTLY yelling';
    const validPassword2 = 'Just one capital letter.';
    const invalidPassword1 = 'not one caps';
    const invalidPassword2 = 'lowercase 4 lyfe';
    assert.strictEqual(isValidPassword(validPassword1), true);
    assert.strictEqual(isValidPassword(validPassword2), true);
    assert.strictEqual(isValidPassword(invalidPassword1), false);
    assert.strictEqual(isValidPassword(invalidPassword2), false);
  });

  it('should have at least 1 lowercase character', () => {
    const validPassword1 = 'welcome to Smallville, population: this sentence';
    const validPassword2 = 'MOSTLY BIG i GUESS';
    const invalidPassword1 = 'TROLL ALERT';
    const invalidPassword2 = 'HULK SMASH';
    assert.strictEqual(isValidPassword(validPassword1), true);
    assert.strictEqual(isValidPassword(validPassword2), true);
    assert.strictEqual(isValidPassword(invalidPassword1), false);
    assert.strictEqual(isValidPassword(invalidPassword2), false);
  });
});

describe('isRegisteredUser', () => {
  it('returns whether or not the given email is in the "database"', () => {
    const registeredUser1 = 'krose@perseverenow.org';
    const registeredUser2 = 'jdoty@perseverenow.org';
    const unregisteredUser1 = 'anyone.else@perseverenow.org';
    const unregisteredUser2 = 'i.mean.literally.anyone.prsvr@gmail.com';
    assert.strictEqual(isRegisteredUser(registeredUser1), true);
    assert.strictEqual(isRegisteredUser(registeredUser2), true);
    assert.strictEqual(isRegisteredUser(unregisteredUser1), false);
    assert.strictEqual(isRegisteredUser(unregisteredUser2), false);
  });
});

describe('passwordMatches', () => {
  it('returns whether or not the given email/password combination goes with a current user', () => {
    assert.strictEqual(passwordMatches(user1, password1), true);
    assert.strictEqual(passwordMatches(user2, password2), true);
    assert.strictEqual(passwordMatches(user3, password3), true);
    assert.strictEqual(passwordMatches(user1, 'NOT my password'), false);
    assert.strictEqual(passwordMatches(user2, 'nor HERS'), false);
    assert.strictEqual(passwordMatches(user3, 'and not his EITHER'), false);
    assert.strictEqual(passwordMatches(user1, password2), false);
    assert.strictEqual(passwordMatches(user2, password3), false);
    assert.strictEqual(passwordMatches(user3, password1), false);
  });
});
