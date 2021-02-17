const jwt=require('jsonwebtoken');


 const Auth= async (req,res,next)=>{

    const token =req.headers['auth_token'];
    if(!token)return res.status(401).send('access denied');
    try {
        const verified= jwt.verify(token,"secretKey");
        req.user={
            _id:verified._id,
            role:verified.role
        };

        next()
    } catch (error) {
        res.send(error)
        // res.status(404).send('invalid token')
    }
}

module.exports= Auth