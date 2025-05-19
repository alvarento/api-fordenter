import prisma from '../config/dbConfig';
import { IRangerInfos } from '../interfaces/rangerInfos.interface';

export const getAll = () => prisma.rangerInfos.findMany();

export const getById = (id: number) => prisma.rangerInfos.findUnique({ where: { id } });

export const create = (data: Omit<IRangerInfos, 'id'>) => prisma.rangerInfos.create({ data });

export const update = (id: number, data: Partial<Omit<IRangerInfos, 'id'>>) =>
   prisma.rangerInfos.update({ where: { id }, data });

export const remove = (id: number) => prisma.rangerInfos.delete({ where: { id } });
