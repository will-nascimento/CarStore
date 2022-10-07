import express, {Request, Response} from 'express'
import mongoose from 'mongoose'
import router from './routes'

const port = process.env.PORT || 3333

const app = express()

app.use(express.json())
app.use(router)
const cors = require('cors');
app.use(cors());

mongoose.connect('mongodb+srv://willnascimento:senha@cluster0.3qkeiqw.mongodb.net/?retryWrites=true&w=majority')

.then((data)=>{
    console.log('MongoDB connection succeeded')
})

.catch((err)=>{
    console.log('Error in DB connection', err.message)
})

app.get('/',(req: Request,res: Response)=>{
    return res.send("Get running!!")
})

app.listen(port,()=>{console.log("Server running!!")})