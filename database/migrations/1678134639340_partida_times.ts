import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'partida_times'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer("id_partida").unsigned().references("partidas.id").onDelete("CASCADE")
      table.integer("id_time").unsigned().references("times.id").onDelete("CASCADE")

      table.timestamps(true, true)

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
