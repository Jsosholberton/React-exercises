



const name = 'Johnatan';
const last_name = 'Ortiz';

const fullname = `${ name } ${ last_name }`;

console.log( fullname );

function say_hi(name) {
    return 'Hello World! ' + name;
}

console.log( `This is a text: ${ say_hi(name) }` );
