const  jwt = require('jsonwebtoken');


module.exports={

    loginToken:(_id)=>{
       
        var token = jwt.sign({
            data: _id
          }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '4h' });
       
        return token;
    },
    verifyAccessToken: async(req, res, next) => {
        if (!req.headers['authorization']) return next()
        const authHeader = req.headers['authorization']
        const bearerToken = authHeader.split(' ')
        const token = bearerToken[1]

        try{
        var decoded = await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        // console.log(decoded);
        next();
        return decoded;
      
        }
        catch(err) {
            console.log("mfdmdf");
            next("klkkl");
            return err ;
            
        }
        
    //   console.log(decoded);
    // console.log(token);
    }


}