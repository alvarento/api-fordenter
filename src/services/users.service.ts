import prisma from '../config/dbConfig';
import { IUser } from '../interfaces/user.interface';

export const getAll = async () => await prisma.user.findMany();

export const getById = async (id: number) => await prisma.user.findUnique({ where: { id } });

export const create = async (data: Omit<IUser, 'id'>) => await prisma.user.create({ data });

export const update = async (id: number, data: Partial<IUser>) => await prisma.user.update({ where: { id }, data });

export const remove = async (id: number) => await prisma.user.delete({ where: { id } });