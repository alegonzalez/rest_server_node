const { Schema, model } = require('mongoose')


const userSchema = Schema({
name:{
    type: String,
    required:[true,'The field name is required']
},
email:{
    type: String,
    required:[true,'The field email is required'],
    unique:true
},
password:{
    type: String,
    required:[true,'The field password is required']
},
image:{
    type: String
},
role:{
    type: String,
    required:true,
    emun: ['ADMIN_ROLE','USER_ROLE'] 
},
state:{
    type: Boolean,
    default:true
},
google:{
    type: Boolean,
    default:false
}

});

userSchema.methods.toJSON = function(){
    const { __v,password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
}
module.exports = model('User',userSchema)