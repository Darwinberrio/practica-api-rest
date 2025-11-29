const jwt=require('jsonwebtoken')

const JWTGenerator=(payload)=>{
    
    //devuelve una promesa 

    return new Promise((resolve,reject)=>{

        //TOKEN (payload del usuario)
        jwt.sign(
                payload, 
                process.env.SECRET_KEY, 
                {expiresIn:'2h'},
                 (error,token)=>{ 
                    if(error) {
                        console.log(error)
                        reject('error')
                    }else{
                        resolve(token)
                    }
                }

        )
    })
        
}

const decodeToken=(token)=>{
    return jwt.verify(token, process.env.SECRET_KEY);
}

module.exports={JWTGenerator,decodeToken}