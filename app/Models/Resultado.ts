import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Resultado extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public golo_p2: number

  @column()
  public golo_p1: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
