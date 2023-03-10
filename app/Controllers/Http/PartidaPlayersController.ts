import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Partida from 'App/Models/Partida';
import PartidaPlayer from 'App/Models/PartidaPlayer';
import Player from 'App/Models/Player';

export default class PartidaPlayersController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({request, response}: HttpContextContract) {
    try {

      const body = request.body()
      const id_partida = body.id_partida
      const id_player = body.id_player

      await Player.findOrFail(id_player)
      await Partida.findOrFail(id_partida)

      //body.id_player=id_player
      //body.id_partida=id_partida

      const partida_players = await PartidaPlayer.create(body);
      
      response.status(201)
  
      return {
        message: 'Partida criado com '.
          concat (partida_players.$isPersisted ? 'sucesso' : 'insucesso'),
        data: partida_players
      } // true

    } catch (error) {
      
    }
   
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({params}: HttpContextContract) {
    try {

      const id = params.id

      await PartidaPlayer.findOrFail(id)

      const partida_player = await PartidaPlayer.findOrFail(params.id)

      await partida_player.delete()
      
      return{
        message: 'Player eliminado da partida com sucesso !'
      }
    } catch (error) {
      
    }
  }
}
