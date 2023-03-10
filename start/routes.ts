import Route from '@ioc:Adonis/Core/Route'

Route.group(()=> {
  Route.resource('times', 'TimesController')
  Route.resource('players', 'PlayersController')
  Route.resource('partidas', 'PartidasController')
  Route.resource('resultados', 'ResultadosController')
  Route.resource('partida_times', 'PartidasTimesController')
  Route.post('partida_players', 'PartidaPlayersController.store')
  Route.delete('partida_players/:id','PartidaPlayersController.destroy')
}).prefix('/api')
