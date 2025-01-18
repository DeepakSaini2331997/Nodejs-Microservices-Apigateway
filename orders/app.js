const express = require("express")
const app = express()

const port = process.env.PORT || 3002

app.get('/orders',(req,res)=>{
    res.status(200).json({
        success:true,
        msg:"its a orders routes to fetch orders details"
    })
})

app.listen(port,()=>{
    console.log(`Connect on port ${port}`)
})