import express from 'express'
import { Router } from 'express'
import PlayerRepository from '../../Infrastructure/Repository/PlayerRepository'
import PlayerController from '../controllers/playercontroller'
import PlayerUseCase from '../../Application/UseCase/PlayerUseCase'
import SkillRepository from '../../Infrastructure/Repository/SkillRepository'
import SkillUseCase from '../../Application/UseCase/SkillUseCase'
import SkillController from '../controllers/skillController'

function PlayerRouter() : Router {
    const playerRouter = express.Router()

    const playerRepo = new PlayerRepository()
    const skillRepo = new SkillRepository()

    const playerUC = new PlayerUseCase(playerRepo)
    const skillUC = new SkillUseCase(skillRepo)

    const playerController = new PlayerController(playerUC)
    const skillController = new SkillController(skillUC)

    playerRouter.get('/players', playerController.getAllPlayerCards.bind(playerController))
    playerRouter.get('/players/:id', playerController.getPlyerCardById.bind(playerController))
    playerRouter.post('/player', playerController.addPlayerCard.bind(playerController))
    playerRouter.post('/player/skill/add/:playerId', skillController.addPlayerSkill.bind(skillController))
    playerRouter.get('/skill/:id', skillController.testAggregatedData.bind(skillController))

    return playerRouter
}

export default PlayerRouter