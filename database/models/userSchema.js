const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const userSchema=new mongoose.Schema({
  fullname:{
      type: String,
      require: true
  },
  email:{
    type: String,
    require: true
},
profession:{
    type: String,
    require: true
},

dob:{
    type: String,
    require: true
},
age:{
    type: String,
    require: true
},
gender:{
    type: String,
    require: true
},
fname:{
    type: String,
    require: true
},
mobile:{
    type: String,
    require: true
},
discription:{
    type: String,
    require: true
},
fulladdress:{
    type: String,
    require: true
},

password:{
    type: String,
    require: true
},
confirmpassword:{
    type: String,
    require: true
},

date:{
    type: Date,
    default: Date.now
},
  

messages:[
    {
        fullname:{
            type: String,
            require: true
        },
        email:{
          type: String,
          require: true
      },   
      message:{
          type: String,
          require: true
      },
   
    }
],
tokens:[
    {
    token:{
        type: String,
    require: true
    }
}
],

})


userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,12);
        this.confirmpassword=await bcrypt.hash(this.confirmpassword,12);
    }
    next();
    });

    //message sending
    userSchema.methods.addMessage=async function(fullname,email,message){
        try{
        this.messages=this.messages.concat({fullname,email,message});
        await this.save();
        return this.messages;
        
        }
        catch(err){
            console.log(err)
        }
            }



 
    //storing token in database
    userSchema.methods.generateAuthToken=async function(){
        try{
            let token=jwt.sign({_id: this._id},process.env.SECRET_KEY);
            this.tokens=this.tokens.concat({token:token});
            await this.save();
           
            return token;

        }
        catch(err){
     
        }
    }


const userData=new mongoose.model('userData',userSchema);


module.exports=userData;

