import { ICarrerasRepository } from "../../../../domain/repositories/ICarrerasRepository";
import { Carrera } from "../../../../domain/entities/Carreras";
import { ModelStatic } from "sequelize";
import { CarrerasModel } from "../../models/carreras/CarrerasModel";

export class CarrerasRepository implements ICarrerasRepository {
  constructor(private readonly CarrerasModel: ModelStatic<CarrerasModel>) {}

  async findByIdCarrera(id_carrera: number): Promise<Carrera | null> {
    const record = await this.CarrerasModel.findOne({
      where: {
        id_carrera,
      },
    });

    if (!record) return null;

    return new Carrera(
      record.id_carrera,
      record.nombre,
      record.unidad_academica,
      record.direccion
    );
  }
}
