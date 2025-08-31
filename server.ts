import express from 'express'
import PlayerRouter from './src/Presentation/routers/playerRouter'
import connectDb from './src/Infrastructure/Database/connection'


const port = 5000

async function Main(){
    const app = express()

    app.use(express.urlencoded({extended:true}))
    app.use(express.json())

    await connectDb()

    const playerRouter = PlayerRouter()

    app.use('/', playerRouter)

    app.listen(port, (err) => {
        if(err){
            console.log('Error occured while connecting application', err)
            return
        }else{
            console.log(`Server started running on port ${port}`)
        }
    })
}

Main()