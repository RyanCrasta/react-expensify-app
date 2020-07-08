import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export {firebase, db as default}


/*
db.ref().set({
    name: 'Ryan Crasta',
    age: 20,
    isSingle: true,
    stressLevel: 6,
    job: {
        title: 'Full stack',
        company: 'facebook'
    },
    location: {
        city: 'Mumbai',
        country: 'India'
    }
 
}).then(() => {
   console.log('data is saved');
    
}).catch(() => {
    console.log('error 1');
    
})
 
//db.ref('age').set(21)

//db.ref('location/city').set("Mangaluru");

db.ref('attributes/height').set(8).then(() => {
    console.log('height updated');
    
}).catch(() => {
    console.log('error');
    
});

db.ref('attributes/weight').set(58).then(() => {
    console.log('weight updated');

}).catch(() => {
    console.log('error 3');
    
});
*/


/*
//== delete ==

db.ref('isSingle').remove().then(() => {
    console.log("Remove succeeded.")
  })
  .catch((error) => {
    console.log("Remove failed: " + error.message)
});

// u can use set to wipe data
// db.ref('isSingle').set(null)
*/


// UPDATE
/*
db.ref().update({
    name: 'Astle',
    age: 30,
    'location/city': 'kolkata'

})

db.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'goa'
})

*/

/*
// fetching data

db.ref().once('value').then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
    
}).catch((e) => {
    console.log('error fetching DATA', e);
    
})

*/

/*
// SUBSCRIPTION
// .on does not return promise 
// if something changes data is showed using .on

const onValueChange = db.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(val);
}, (e) => {
    console.log('error with data fetching', e);
    
})

setTimeout(() => {
    db.ref().update({
        age: 28
    })
}, 3500)

setTimeout(() => {
    db.ref().off(onValueChange);
}, 7000)

setTimeout(() => {
    db.ref().update({
        age: 30
    })
}, 10500)


db.ref().on('value', (snapshot) => {
    const val = snapshot.val();

    console.log(`${val.name} is ${val.job.title} at ${val.job.company}`);

})
*/

// arrays

// firebase dosen't supports array
// arrays get converted to object structure

// const firebaseNotes = {
//     notes: {
//         fesdfc:{
//             title: 'first note',
//             body: 'biryani'  
//         },
//         msfj:{
//             title: 'second note',
//             body: 'frankie'  
//         }
//     }
// }


// const notes = [{
//     id: '12',
//     title: 'first note',
//     body: 'biryani'

// },
// {
//     id: '234bg',
//     title: 'second note',
//     body: 'frankie'

// }]

// db.ref('notes').set(notes);
/*
db.ref('notes').push({
    title: 'second note',
    body: 'ice cream'
});
*/

// now how to access particular value in array

// db.ref('notes/-MBbuzrMO-v6iAzhkeBf').update({
//     body: 'pizza'
// })

/*
db.ref('expenses').push({
    description: 'hotel',
    note: 'lunch',
    amount: 5000,
    createdAt: 10000
})

db.ref('expenses').push({
    description: 'movie',
    note: 'super 30',
    amount: 150,
    createdAt: 28000
})

db.ref('expenses').push({
    description: 'college',
    note: 'engineering',
    amount: 50000,
    createdAt: 796258
})
*/

// db.ref('expenses').once('value').then((snapshot) => {
//     //console.log(snapshot.val());
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
    
// }).catch(() => {

// })

/*
db.ref('expenses').on('value', (snapshot) => {
    //console.log(snapshot.val());
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    })
    console.log(expenses);
    
}, (e) => {
    console.log('error with data fetching', e);
    
})
*/

// subscription to child_remove
/*
db.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key);
    console.log(snapshot.val());
    
    
})
*/

/*
// subscription to child_changed

db.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key);
    console.log(snapshot.val());
    
    
})

// subscription to child_added

db.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key);
    console.log(snapshot.val());
})
*/