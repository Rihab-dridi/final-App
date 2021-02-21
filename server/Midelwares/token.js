const jwt=require('jsonwebtoken');


 const Auth= async (req,res,next)=>{

    const token =req.headers.authorization.split(' ')[1]

   const  isCustumAuth= token.length <500; 

    let decodedData;
    try {
        if(token && isCustumAuth){
            decodedData=jwt.verify(token,"secretKey")
            req.user={
                _id:decodedData._id,
                role:decodedData.role
            };
        }
        else{
            decodedData = jwt.decode(token)
            req.user= decodedData.sub
                
            
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports= Auth