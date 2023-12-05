# Log Up - Back End

Today we'll be making the back end of our app.

### Introduction

Some apps have a simplified signup/login process, where if you enter an email and password and your email is NOT in their system, they'll register you with that email and password, and if you enter an email that IS in their system, they'll attempt to log you in with your email/password.

This app is even simpler than that, in that our "system" is just variables with the email and password for three users.

But the functions you write here will do the logical work for the interface we'll write for our next part of this project!

### Setup

- Create your local repo.
- Code in `main.js` until you've passed the tests.
- Push to GitHub.
- Turn that link in as your assignment.

### Hints

- There are many hints below, but don't forget to read the tests in `main.test.js`!

### Tasks

- `isValidEmail` - returns `true` if the given string ends with `.prsvr@gmail.com`  or `@perseverenow.org`  and has at least one character before that, and `false` otherwise.
- `isValidPassword` - returns true if the given string is at least 8 characters with a lower case and upper case letter, and false otherwise. Do not use Regular Expressions (regex).
  - HINT: you can COMPARE an upper-cased version of your string to the current string. If they're different, then it has at least one lower-cased letter. You can also do the same to check for an upper-cased letter.
- `isRegisteredUser` - returns true if the given string is identical to ONE of the strings held in the variables `user1`, `user2`, and `user3`. Returns false otherwise.
  - HINT: your solution should NOT need `&&`.
- `passwordMatches` - returns true if the first string given is one of the strings in the user variables AND the second string is the matching string in the password variables. Returns false otherwise.
