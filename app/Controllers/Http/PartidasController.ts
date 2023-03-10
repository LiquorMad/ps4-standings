import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Partida from 'App/Models/Partida';

export default class PartidasController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({request,response}: HttpContextContract) {

    try {
      const body = request.body()
      
      const partida = await Partida.create(body);
  
      response.status(201)
  
      return {
        message: 'Partida criado com '.
          concat (partida.$isPersisted ? 'sucesso' : 'insucesso'),
        data: partida
      } // true

    } catch (error) {
      
    }
   
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
