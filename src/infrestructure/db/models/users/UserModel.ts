import { Sequelize, DataTypes, Model, ModelStatic } from "sequelize";

export interface UserModel extends Model {
  id_user: string;
  email: string;
  password: string;
  id_rol: number | null;
  email_verified: boolean;
}

export const defineUserModel = (
  sequelize: Sequelize
): ModelStatic<UserModel> => {
  return sequelize.define<UserModel>(
    "User",
    {
      id_user: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_rol: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      email_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      schema: "users",
      tableName: "users",
      timestamps: false,
    }
  );
};
