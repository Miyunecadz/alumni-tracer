const NodeCouchDb = require('node-couchdb');

const couch = new NodeCouchDb({
    auth: {
        user : 'jvcadz',
        pass: 'jvcadz'
    }
})

let alumnus = {
        idnumber : "123",
        lastname : "cadayona",
        firstname : 'jv',
        middlename : 'wales',
        suffix : '',
        province : 'southern leyte',
        municipality : 'tomas oppus',
        purok : 'bogo',
        contact : '1234',
        gender : 'male',
        course : 'bs info',
        major : 'networking',
        dategrad : '2019',
        email : 'jvxxxx@gmail.com',
        facebook : 'jv',
        companyname : 'none',
        companyaddress : '',
        companyemail : '',
        companycontact : '',
        companyposition : '',        
        username : 'jvcadz',
        password : 'cadz',
        type : 'alumni'
}

// console.log(alumnus)

couch.insert("alumnus", {
  values: alumnus
}).then(({data, headers, status}) => {
  console.log(data.ok)
}, err => {
  console.log(err)
  // either request error occured
  // ...or err.code=EDOCCONFLICT if document with the same id already exists
});