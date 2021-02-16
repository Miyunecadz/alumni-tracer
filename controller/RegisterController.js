const {body, validationResult, check} = require('express-validator')
const Alumni = require('../model/Alumni')

exports.alumniRegister = async(req,res) =>{
    await body('idnumber').notEmpty().run(req);
    await body('lastname').notEmpty().run(req);
    await body('firstname').notEmpty().run(req);
    await body('province').notEmpty().run(req)
    await body('municipality').notEmpty().run(req)
    await body('purok').notEmpty().run(req)
    await body('contact').isNumeric().run(req)
    await body('gender').notEmpty().run(req)
    await body('course').notEmpty().run(req)
    await body('major').notEmpty().run(req)
    await body('yeargrad').isDate().run(req)
    await body('companyname').notEmpty().run(req)
    await body('username').notEmpty().run(req)
    await body('password').notEmpty().run(req)


    const result = validationResult(req)

    if(!result.isEmpty()){
        return res.json({status: 'fields_error' ,errors: result.array()});
    }

    const alumni = new Alumni(req.body);

    // console.log(alumni)

    Alumni.register(alumni, result =>{
        // res.result
        if(!result.ok == true){
            res.json({status: 'db_error', errors: result.body.reason})
        }
        res.json({status: 'success'})
    })
    
}