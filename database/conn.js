const mongoose=require('mongoose');

//connecting to database server


const db=process.env.DATABASE;

mongoose.connect(db,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}).then(()=>{
    console.log('database successfully connected');
}).catch((e)=>{

    console.log('data not connected',e);
})


