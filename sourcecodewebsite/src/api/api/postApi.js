


const postApi=[
    {
        h1: "POST USER'DATA USING FETCH",
        h2: "1. using FETCH ",
        h3:"register.js",
        code:`const data={
            name:"suraj singh",
            status:"programmer"
                            }
        const onSubmit=async(e)=>{
            e.preventDefault();
        try{ 
             let URL="http://localhost:5000/sendData";
             fetch(URL,{
                 method:"POST",
                 headers:{
                     "Content-Type":"application/json"
                 },
                 body: JSON.stringify(data).await (res=>{
                    console.log(res)
                })
            })
          }
          catch(e){
              console.log(e)
          }           }
           `,
    },
    {
        h3:"server.js",
        code:`const bodyParser=require('body-parser);
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: false
        }));
        app.post('/sendData',(req,res)=>{
            console.log(req.body);
            res.send(JSON.stringify(req.body))
        })
           `,
    
    }
    
]


export default postApi;