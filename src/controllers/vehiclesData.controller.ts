import { Request, Response } from 'express';
import * as VehicleDataService from '../services/vehiclesData.service';

export const getAll = async (_: Request, res: Response) => {
  try {
    const data = await VehicleDataService.getAll();
    res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao buscar dados dos veículos:', error);
    res.status(500).json({ message: 'Erro interno ao buscar dados dos veículos' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const data = await VehicleDataService.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.error('Erro ao criar dados do veículo:', error);
    res.status(400).json({ message: 'Erro ao criar dados do veículo', error });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = await VehicleDataService.update(id, req.body);

    if (!data) {
      res.status(404).json({ message: 'Dados do veículo não encontrados' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao atualizar dados do veículo:', error);
    res.status(400).json({ message: 'Erro ao atualizar dados do veículo', error });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deleted = await VehicleDataService.remove(id);

    if (!deleted) {
      res.status(404).json({ message: 'Dados do veículo não encontrados' });
    }

    res.status(204).send();
  } catch (error) {
    console.error('Erro ao remover dados do veículo:', error);
    res.status(500).json({ message: 'Erro interno ao remover dados do veículo' });
  }
};
