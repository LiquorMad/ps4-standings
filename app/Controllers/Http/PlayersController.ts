import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Player from 'App/Models/Player'

export default class PlayersController {
  public async index({}: HttpContextContract) {

    try {
      const player = await Player.all();
      return {
        players: player
      }
    } catch (error) {
      
    }
    
  }

  public async create({}: HttpContextContract) {}

  public async store({ request,response}: HttpContextContract) {
    try {
      const body = request.body()

      const player = await Player.create(body);
  
      response.status(201)
  
      return {
        message: 'Player criado com '.
          concat (player.$isPersisted ? 'sucesso' : 'insucesso'),
        data: player
      } // true

    } catch (error) {
      
    }
   

  }

  public async show({params}: HttpContextContract) {

    const player = await Player.findOrFail(params.id)

    return{
      player: player
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({params, request}: HttpContextContract) {
    try {
      const body = request.body()

      const player = await Player.findOrFail(params.id)

      player.nome = body.nome
      player.apelido = body.apelido

      await player.save()
      return {
        message:  'Player atualizado com sucesso !',
        data: player
      }

    } catch (error) {
      
    }
  }

  public async destroy({params}: HttpContextContract) {
    try {
      const player = await Player.findOrFail(params.id)

      await player.delete()
      
      return{
        message: 'Player eliminado com sucesso !'
      }
    } catch (error) {
      
    }
  }
}
