import { Request, Response } from 'express';
import * as CarouselService from '../services/carouselImages.service';

export const getAll = async (_: Request, res: Response) => {
   try {
      const data = await CarouselService.getAll();
      res.json(data);
   } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar imagens do carrossel' });
   }
};

export const getById = async (req: Request, res: Response) => {
   try {
      const image = await CarouselService.getById(Number(req.params.id));
      image ? res.json(image) : res.status(404).json({ message: 'Imagem não encontrada' });
   } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar imagem' });
   }
};

export const create = async (req: Request, res: Response) => {
   try {
      const image = await CarouselService.create(req.body);
      res.status(201).json(image);
   } catch (error) {
      res.status(400).json({ message: 'Erro ao criar imagem' });
   }
};

export const update = async (req: Request, res: Response) => {
   try {
      const image = await CarouselService.update(Number(req.params.id), req.body);
      image ? res.json(image) : res.status(404).json({ message: 'Imagem não encontrada' });
   } catch (error) {
      res.status(400).json({ message: 'Erro ao atualizar imagem' });
   }
};

export const remove = async (req: Request, res: Response) => {
   try {
      await CarouselService.remove(Number(req.params.id));
      res.status(204).send();
   } catch (error) {
      res.status(500).json({ message: 'Erro ao remover imagem' });
   }
};
