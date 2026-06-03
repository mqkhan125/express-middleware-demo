const auth = (req, res, next) => {
    req.user = {userId: 1, role : "student"}

    if(req.user.role === "student"){
        next()
    } 
    else {
      return  res.json({
          success: false,
          message: "Authentication failed",
        });
    }
}

module.exports = auth;
