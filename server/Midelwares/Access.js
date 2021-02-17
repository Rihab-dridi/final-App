
 const  hasAccess = accessLevel => {
     return (req, res, next)=> {
       console.log(req.user)
       if (req.user.role === accessLevel) {
          
         return next()
       }
       return res.json({
         success: false,
         error: 'Unauthorized'
       })
     }
   }

   module.exports= hasAccess;