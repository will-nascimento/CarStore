import express, {Request, Response} from 'express'
import mongoose from 'mongoose'
import router from './routes'

const app = express()

app.use(express.json())
app.use(router)

mongoose.connect('mongodb+srv://willnascimento:senha@cluster0.3qkeiqw.mongodb.net/?retryWrites=true&w=majority')

.then((data)=>{
    console.log('MongoDB connection succeeded')
})

.catch((err)=>{
    console.log('Error in DB connection', err.message)
})

app.get('/',(req: Request,res: Response)=>{
    return res.send('hello world')
})

app.listen(3333)