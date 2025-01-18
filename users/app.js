const express = require("express")
const app = express()

const port = process.env.PORT || 3000

app.get('/users',(req,res)=>{
    res.status(200).json({
        success:true,
        msg:"its a user routes to fetch user details"
    })
})

app.listen(port,()=>{
    console.log(`Connect on port ${port}`)
})