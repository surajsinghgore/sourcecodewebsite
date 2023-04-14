


const readApi=[
    {
        h1: "TO FETCH OR READ API'S",
        h2: "1. using async/await method ",
        code:`const events=async(e)=>{
            e.preventDefault();
        try{ 
             let URL="your url's";
             const res=await fetch(URL);
             const data=await res.json();
             console.log(data)
           }
           catch(e){
               console.log(e)
           }           }
           useEffect(()=>{
               events();
           })`,
           p:"try this using try and catch block"
    },
    {
        h2: "2. using then method ",
        code:`const events=(e)=>{
            e.preventDefault();
             let URL="your url's";
             fetch(URL).then(data=>{
                 data.json();
             }).then(data2=>{
                 console.log(data2)
             })
             .catch(e){
               console.log(e)
              }           }
           useEffect(()=>{
               events();
           })`,
           p:"error is handled using single catch"
    }
]


export default readApi;