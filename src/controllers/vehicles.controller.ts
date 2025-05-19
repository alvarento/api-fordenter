// vehicle.controller.ts
import { Request, Response } from 'express';
import * as VehicleService from '../services/vehicles.service';

export const getAll = async (_: Request, res: Response) => {
  try {
    const vehicles = await VehicleService.getAll();
    res.status(200).json(vehicles);
  } catch (error) {
    console.error('Erro ao buscar veículos:', error);
    res.status(500).json({ message: 'Erro interno ao buscar veículos' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const vehicle = await VehicleService.create(req.body);
    res.status(201).json(vehicle);
  } catch (error) {
    console.error('Erro ao criar veículo:', error);
    res.status(400).json({ message: 'Erro ao criar veículo', error });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const updatedVehicle = await VehicleService.update(id, req.body);

    if (!updatedVehicle) {
      res.status(404).json({ message: 'Veículo não encontrado' });
    }

    res.status(200).json(updatedVehicle);
  } catch (error) {
    console.error('Erro ao atualizar veículo:', error);
    res.status(400).json({ message: 'Erro ao atualizar veículo', error });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deleted = await VehicleService.remove(id);

    if (!deleted) {
      res.status(404).json({ message: 'Veículo não encontrado' });
    }

    res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar veículo:', error);
    res.status(500).json({ message: 'Erro interno ao deletar veículo' });
  }
};