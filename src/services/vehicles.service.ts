import prisma from '../config/dbConfig';
import { IVehicle } from '../interfaces/vehicle.interface';

export const getAll = async () => await prisma.vehicle.findMany();

export const create = async (data: Omit<IVehicle, 'id'>) => await prisma.vehicle.create({ data });

export const update = async (id: number, data: Partial<IVehicle>) => await prisma.vehicle.update({ where: { id }, data });

export const remove = async (id: number) => await prisma.vehicle.delete({ where: { id } });