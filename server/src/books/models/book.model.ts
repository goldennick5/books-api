import { v4 as uuidv4 } from 'uuid'
import { Model, Optional, DataTypes } from 'sequelize'
import sequelizeConnection from '../../config'

export type BooksAtributes = {
  id: string
  author: string
  title: string
  text: string
  image: string
  createdAt?: Date
  updatedAt?: Date
}

export interface BooksInput extends Optional<BooksAtributes, 'id'> {}
export interface BooksOutput extends Required<BooksAtributes> {}

class Books
  extends Model<BooksAtributes, BooksInput>
  implements BooksAtributes
{
  public id: string
  public author: string
  public title: string
  public text: string
  public image: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Books.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: () => uuidv4(),
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
  }
)

export default Books
