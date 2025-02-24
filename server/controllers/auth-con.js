const User = require("../models/user-models");

const home = async (req, res) => {
    try { res.status(200).send('this is page throught the router ');}
    catch (error) { console.error(error); }
}

const profile = async (req, res) => {
   
    try { res.status(200).send('this is page throught the profile ');
        const {username,email,phone , password } = req.body

        const userExist = await User.findOne({email: email})
        if(userExist){
            return res.status(400).json({message: "User already exist"})
        }
        await User.create({username: username, email: email, phone: phone, password: password})



         res.status(200).json({message:req.body});
        }
    catch (error) { console.error(error); }
}
//this function is mapped to the home route in auth.js file. It responds with a status 200 and a message when accessed through the route '/profile'.
module.exports = {home,profile}; //exporting the function for use in other files.



