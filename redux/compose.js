import { compose } from 'redux';

function removeSpace(string) {
    return string.split(' ').join('');
}

function repeateString(string) {
    return string + string;
}

function convertToUpeerCase(string) {
    return string.toUpperCase();
}

const input = 'sonamlrajput'
    // const mystring = convertToUpeerCase(repeateString(removeSpace(input)));
const mystring = compose(removeSpace, repeateString, convertToUpeerCase)
console.log(mystring(input));