const express = require("express")
const app = express()

const port = process.env.PORT || 3001

app.get('/products',(req,res)=>{
    res.status(200).json({
        success:true,
        msg:"its a Products routes to fetch product details"
    })
})

app.listen(port,()=>{
    console.log(`Connect on port ${port}`)
})