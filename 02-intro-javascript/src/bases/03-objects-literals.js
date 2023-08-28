


const person = {
    name: 'Johnatan',
    last_name: 'Ortiz',
    years: 24,
    dir: {
        city: "Cali, Colombia",
        zip: 5600001,
        lat: 14.315,
        lng: 64.4646,
    }
};


const person2 = { ...person };
person2.name = "Steven";


console.log( person );
console.log( person2 )
