import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "users",
})
export class User extends Model {
  @Column({
    unique: true,
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  userId!: string;

  @Column({
    validate: {
      notEmpty: true,
    },
    allowNull: false,
  })
  name: string;

  @Column({
    validate: {
      notEmpty: true,
    },
    allowNull: false,
  })
  email: string;

  @Column({
    validate: {
      notEmpty: true,
    },
    allowNull: false,
  })
  age: number;
}
