const home = async (req, res) => {
    try { res.status(200).send('this is page throught the router ');}
    catch (error) { console.error(error); }
}
//this function is mapped to the home route in auth.js file. It responds with a status 200 and a message when accessed through the route '/profile'.
module.exports = {home}; //exporting the function for use in other files.


