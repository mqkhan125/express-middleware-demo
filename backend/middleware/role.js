
const isStudent = (req, res, next) => {

    if(req.user.role === 'student'){
        next()
    }
    else {
        return res.json({
          success: false,
          message: "Only students allowed",
        });
    }
}

const isAdmin = (req, res, next) => {

    if(req.user.role === 'admin') {
        next()
    }
    else {
        return res.json({
          success: false,
          message: "Only admin allowed",
        });
    }
}

module.exports = {isStudent, isAdmin}