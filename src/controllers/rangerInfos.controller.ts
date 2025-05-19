import { Request, Response } from 'express';
import * as RangerInfosService from '../services/rangerInfos.service';

export const getAll = async (_: Request, res: Response) => {
   try {
      const list = await RangerInfosService.getAll();
      res.status(200).json(list);
   } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar dados', error });
   }
};

export const getById = async (req: Request, res: Response) => {
   try {
      const ranger = await RangerInfosService.getById(Number(req.params.id));
      if (!ranger) {
         res.status(404).json({ message: 'Ranger não encontrado' });
         return
      }
      
      res.json(ranger);
   } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar ranger', error });
   }
};

export const create = async (req: Request, res: Response) => {
   try {
      const newRanger = await RangerInfosService.create(req.body);
      res.status(201).json(newRanger);
   } catch (error) {
      res.status(400).json({ message: 'Erro ao criar ranger', error });
   }
};

export const update = async (req: Request, res: Response) => {
   try {
      const updated = await RangerInfosService.update(Number(req.params.id), req.body);
      res.json(updated);
   } catch (error) {
      res.status(400).json({ message: 'Erro ao atualizar ranger', error });
   }
};

export const remove = async (req: Request, res: Response) => {
   try {
      await RangerInfosService.remove(Number(req.params.id));
      res.status(204).send();
   } catch (error) {
      res.status(400).json({ message: 'Erro ao deletar ranger', error });
   }
};
