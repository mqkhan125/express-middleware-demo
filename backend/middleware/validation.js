
const validation = (req, res, next) => {
    
    if(!req.user || !req.user.userId){
        return res.json({
          success: false,
          message: "Validation failed",
        });
    }

    next()
}

module.exports = validation;