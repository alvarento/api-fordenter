import prisma from '../config/dbConfig';
import { ICarouselImage } from '../interfaces/carouselImage.interface';

export const getAll = async () => prisma.carouselImage.findMany();

export const getById = async (id: number) => await prisma.carouselImage.findUnique({ where: { id } });

export const create = async (data: Omit<ICarouselImage, 'id'>) => await prisma.carouselImage.create({ data });

export const update = async (id: number, data: Partial<ICarouselImage>) => await prisma.carouselImage.update({ where: { id }, data });

export const remove = async (id: number) => await prisma.carouselImage.delete({ where: { id } });
