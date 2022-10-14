import express, {Request, Response, urlencoded} from 'express'
import mongoose from 'mongoose'
import router from './routes'
import cors from 'cors'

const port = process.env.PORT || 3333

const app = express()

app.use(cors({
    origin: '*'
}));

app.use(urlencoded({
    extended:true
}))

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
    return res.send("Express is working!!")
})

app.listen(port,()=>{console.log("Server running!!")})