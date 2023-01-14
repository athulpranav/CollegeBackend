const Express=require("express")
const BodyParser=require("body-parser")
const Moongoose=require("mongoose")
const Cors=require("cors")


var college=Express()

college.get("/",(req,res)=>{
    res.send("Welecome To College App")
})

college.get("/viewall",(req,res)=>{
    res.send("view college")
})

college.post("/studentadd",(req,res)=>{
    res.send("Add Student")
})


college.post("/studentdelete",(req,res)=>{
    res.send("Delete Student")
})


college.post("/studentedit",(req,res)=>{
    res.send("Edit Student")
})


college.post("/facultyadd",(req,res)=>{
    res.send("Add faculty")
})

college.post("/facultydelete",(req,res)=>{
    res.send("delete faculty")
})

college.post("/facultyedit",(req,res)=>{
    res.send("edit faculty")
})





college.listen(3000)