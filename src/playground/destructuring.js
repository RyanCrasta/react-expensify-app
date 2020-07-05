/*
const person = {
    name: 'Ryan',
    age: 20,
    location:{
        city: 'Mumbai',
        temp: 32
    }
}

const {name, age} = person

const {city, temp} = person.location

console.log(`It is ${temp} in ${city}`);


const book = {
    title: 'Ego is great enemy',
    author: 'Ryan',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName='Self'} = book.publisher

console.log(publisherName);
*/

const address = ['1299 5 juniper street', 'Philodelphia', 'Penselvenia','15948'];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}`);



const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [coffee,,med] = item

console.log(`A medium ${coffee} costs ${med}`);












