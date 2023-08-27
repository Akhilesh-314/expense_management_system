const mongoose = require('mongoose')
const colors = require('colors')
const connectDb = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://atloginn:akhilesh@cluster0.ql6cy5y.mongodb.net/",{
            useNewUrlParser:true
        })
        const db = mongoose.connection
        db.on('error',error => console.error(error))
        db.once('open',() => console.log('Connected to Mongoose'))
    } catch (error) {
        console.log(`${error}`.bgRed)
    }
}

module.exports = connectDb