const joi = require('@hapi/joi');


//register validation

const registerValidation= (data)=>{
    const validationSchema = joi.object( {
        first_name: joi.string()
              .min(3)
              .required(),

        last_name: joi.string()
              .min(3)
              .required(),

        card_number: joi.string()
              .min(6),
              

        year: joi.number()
              .min(6),
    
        email: joi.string()
            .min(6)
            .email()
            .required(),
    
        
        password: joi.string()
            .min(6)
            .required()
    });
   return  validationSchema.validate(data);
}

//login validation
const loginValidation = data =>{
    const loginSchema = joi.object({
        
        email: joi.string()
            .min(6)
            .email()
            .required(),

        password: joi.string()
            .min(6)
            .required()
    });
    return  loginSchema.validate(data);
}

module.exports.registerValidation=registerValidation;
module.exports.loginValidation=loginValidation;