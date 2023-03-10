import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Partida from './Partida'
import Time from './Time'

export default class PartidaTime extends BaseModel {
  @hasMany(() => Partida)
  public partidas: HasMany<typeof Partida>

  @hasMany(() => Time)
  public times: HasMany<typeof Time>
  
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
