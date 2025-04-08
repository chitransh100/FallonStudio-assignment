const express = require('express')
const ConnectDB = require('../database/database')
const Feedback = require('../model/feedback')
const feedback = require('../model/feedback')
const cors = require("cors")
const app = express()
const port = 7777
require('dotenv').config();



ConnectDB().then(()=>{
    console.log("connected to DB")
    app.listen(port, (error) => {
        if(!error){
            console.log(`listening on port ${port}`)
        }
        else{
            console.error("Error in starting the server:",error)
        }
      
    })
}).catch((err)=>{
    console.log(err)
})

app.use("/",express.json())
app.use(cors({
    origin: [
      "http://localhost:3000",
      "https://fallon-studio-assignment.vercel.app"
    ],
    credentials: true
  }));

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.post("/feedback",async (req,res)=>{
    const {name,email,feedbackText}=req.body
    const feedback = new Feedback ({
        name ,
        email ,
        feedbackText 
    })
    try{
        await feedback.save()
        res.send({
            message: "feedback saved successfully",
            status: 200
        })
    }catch(err){
        console.error("can't add the feedback",err)
        if (err.code === 11000) {
            return res.status(400).send({
              message: "This email has already submitted feedback."
            });
          }          
        res.send({
            message: "cant add the feedback",
            status: 401,
            err
        })
    }
})


app.get("/admin",async (req,res)=>{
    const feedbacks = await Feedback.find()
    try{
        res.send({
            status:200,
            message: "feedbacks send successfully",
            data: feedbacks
        })
    }catch(err){
        console.error("cant add fetch the feedbacks",err)
        res.send({
            message: "cant fetch the feedback",
            status: 400,
            err
        })
    }
})
