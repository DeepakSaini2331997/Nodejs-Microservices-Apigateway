const express = require("express")
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express()

const port = process.env.PORT || 8000

const routes = {
    '/users':'http://localhost:3000',
    '/products':'http://localhost:3001',
    '/orders':'http://localhost:3002'
}


for(const route in routes){
    const target = routes[route]
    console.log(target)
    app.use(route,createProxyMiddleware({target}))
}


app.listen(port,()=>{
    console.log(`Connect on port ${port}`)
})