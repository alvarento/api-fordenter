import prisma from '../config/dbConfig';
import { IVehicleData } from '../interfaces/vehicleData.interface';

export const getAll = async () => await prisma.vehicleData.findMany();

export const create = async (data: Omit<IVehicleData, 'id'>) => await prisma.vehicleData.create({ data });

export const update = async (id: number, data: Partial<IVehicleData>) => await prisma.vehicleData.update({ where: { id }, data });

export const remove = async (id: number) => await prisma.vehicleData.delete({ where: { id } });