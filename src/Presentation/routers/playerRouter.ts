import express from 'express'
import { Router } from 'express'
import PlayerRepository from '../../Infrastructure/Repository/PlayerRepository'
import PlayerController from '../controllers/playercontroller'
import PlayerUseCase from '../../Application/UseCase/PlayerUseCase'

function PlayerRouter() : Router {
    const playerRouter = express.Router()

    const playerRepo = new PlayerRepository()

    const playerUC = new PlayerUseCase(playerRepo)

    const playerController = new PlayerController(playerUC)

    playerRouter.get('/players', playerController.getAllPlayerCards.bind(playerController))
    playerRouter.get('/players/:id', playerController.getPlyerCardById.bind(playerController))
    playerRouter.post('/player', playerController.addPlayerCard.bind(playerController))

    return playerRouter
}

export default PlayerRouter