import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'partida_players'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer("id_partida").unsigned().references("partidas.id").onDelete("CASCADE")
      table.integer("id_player").unsigned().references("players.id").onDelete("CASCADE")

      table.timestamps(true, true)

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
