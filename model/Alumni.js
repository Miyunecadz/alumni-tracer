const couch = require('../database/couchdb');

class Alumni{
    constructor(alumni){
        this.idnumber = alumni.idnumber,
        this.lastname = alumni.lastname,
        this.firstname = alumni.firstname,
        this.middlename = alumni.middlename,
        this.suffix = alumni.suffix,
        this.province = alumni.province,
        this.municipality = alumni.municipality,
        this.purok = alumni.purok,
        this.contact = alumni.contact,
        this.gender = alumni.gender,
        this.course = alumni.course,
        this.major = alumni.major,
        this.dategrad = alumni.dategrad,
        this.email = alumni.email,
        this.facebook = alumni.facebook,
        this.companyname = alumni.companyname,
        this.companyaddress = alumni.companyaddress,
        this.companyemail = alumni.companyemail,
        this.companycontact =alumni.companycontact,
        this.companyposition = alumni.companyposition,        
        this.username = alumni.username,
        this.password = alumni.password,
        this.type = 'alumni'
    }

}

Alumni.register = (alumnus, result) =>{
    couch.insert("alumnus", {
        values: alumnus
    }).then(({data, headers, status}) => {
        // console.log(data.ok)
        result(data)
    }, err => {
        // console.log(err)
        result(err)
        // either request error occured
        // ...or err.code=EDOCCONFLICT if document with the same id already exists
    });
}

module.exports = Alumni;