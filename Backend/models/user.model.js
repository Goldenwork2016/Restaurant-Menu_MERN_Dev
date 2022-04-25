const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');


// User section schema
const UserSchema = mongoose.Schema({
    first_name:{
    	type:String,
        require:true,
        trim: true, 
    }, 
    last_name:{
    	type:String,
        require:true,
        trim: true, 
    },
    phone_number:{
    	type:Number,
        require:true,
    },
    email:{
       type: String,
       require:true,
       trim: true, 
       unique: true,
       match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    date_of_birth : {
        type:String,
        require:true,
        trim: true, 
    },
    user_identity_card_front: {
        type:String,  
    },
    user_identity_card_back: {
        type:String,  
    },
    social_insurance_number: {
        type:String,
        require:true,
    },
    address : {
        type:String,  
    },
    country: {
        type:String,    
    },
    province: {
        type:String,  
    },
    city: {
        type:String, 
    },
    postal_code: {
        type:String
    },
    bank_holder_name: {
        type:String 
    },
    bank_acount_number: {
        type: Number
    },
    routing_number: {
        type: Number  
    },
    password:{
        type:String,
        require:true
    }, 
    user_stripe_account_id: {
        type:String
    },
    visible: {
        type: String,
        default: 'true',
        enum: [ "true", "false"]
    },
    created_dt:{
        type:Date,
    	require:true
    }
});

UserSchema.statics.hashPassword =   function hashPassword(password){
    return  bcrypt.hash(password,10)
}
UserSchema.methods.isValid = function (hashedpassword) {
    return bcrypt.compareSync(hashedpassword, this.password);
}
UserSchema.methods.generateJwt = function () {
    return jwt.sign({_id: this._id}, process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXP
        })   
}


module.exports=mongoose.model("User", UserSchema);


// section for secretCode for email verifications
// const secretCode = new Schema({
//     email: {
//         type: String,
//         required: true,
//     },
//     code: {
//         type: String,
//         required: true,
//     },
//     dateCreated: {
//         type: Date,
//         default: Date.now(),
//         expires: 600,
//     },
// });
// module.exports = mongoose.model("Secret", secretCode);