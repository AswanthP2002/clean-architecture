import express from 'express'
import PlayerRouter from './src/Presentation/routers/playerRouter'
import connectToDb from './src/Infrastructure/Database/connection'

const port = 5000

async function Main(){
    const app = express()

    app.use(express.urlencoded({extended:true}))
    app.use(express.json())

    const db = await connectToDb()

    const playerRouter = PlayerRouter(db)

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