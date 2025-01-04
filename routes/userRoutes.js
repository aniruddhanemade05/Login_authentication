const HandelUser = require('../controller/userController')

module.exports=(router)=>{
    //signup user
    router.use("/api/v1/user/signup",HandelUser.HandelUserSignUp)
    //Login User
    router.use("/api/v1/user/Login",HandelUser.HandelUserLogin)
}
