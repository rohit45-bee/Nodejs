const User = require('../model/user');

async function handleGetAllUsers(req,res){
    const allDbUsers = await User.Find({});
    return res.json(allDbUsers); 
 }

 async function getUserById(req,res){
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "user not found"});
    return res.json(user);
 }

 async function handleUpdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id, {lastName: "patil"});
    return res.json({ status:"suces"});
 }

 async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status:"succes"});
 }

 async function handleCreateNewUser(req,res){
    const body = req.body;
    if(
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.Gender ||
        !body.email ||
        !body.jobTitle 
    ){
        return res.status(400).json({ msg : "All field are reqired"});
    }

    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        Gender: body.Gender,
        jobTitle: body.jobTitle,
    });
    return res.status(201).json({msg: "success",id: result._id });
 }

 module.exports ={
    handleGetAllUsers,
    getUserById,
    handleGetAllUsers,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
 }