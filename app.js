// Create an email pattern
const emailOutput = 'frshahab.1997@gmail.com';
let email = /^[a-z0-9]{3,}(?:(\.|-|_)[a-z0-9]{1,})?@[a-z1-9]{3,}\.[a-z]{2,5}$/;

console.log(`
    Email Pattern
    --------------------------------------
    ${emailOutput}  =  ${email.test(emailOutput)}
`);


// Create a  username pattern

const username = 'frshahab.me';
let userOutput = /^[a-z0-9]{3,}(?:[\.-_]{1}[a-z0-9]{2,})?$/;

console.log(`
    Username Pattern
    --------------------------------------
    @${username}  =  ${userOutput.test(username)}
`);


// Create a  Bangladeshi Phone Number pattern

const phoneNumber = '01719398245';
let phoneOut = /^(\+8801|008801|01)[0-9]{9}$/;

console.log(`
    phoneNumber Pattern
    --------------------------------------
    ${phoneNumber}  =  ${phoneOut.test(phoneNumber)}
`);


// Create a password pattern 
// here atlease use a upper case letter, lower case later and a special character. Password must be 6 to 16 character.
const password = 'Mdshahab@bc#1977';
let passOut = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*()_+\.<>]).{6,16}$/;

console.log(`
    password Pattern
    --------------------------------------
    ${password} lenth ${password.length} =  ${passOut.test(password)} 
`);

// Create a zipcode pattern 

const zipcode = '1234';
let zipcodeOut = /^[0-9]{4,5}$/;

console.log(`
    zipcode Pattern
    --------------------------------------
    ${zipcode}  =  ${zipcodeOut.test(zipcode)}
`);


