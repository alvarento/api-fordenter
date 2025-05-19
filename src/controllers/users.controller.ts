import { Request, Response } from 'express';
import * as UserService from '../services/users.service';

export const getAll = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAll();
    res.status(200).json(users);

  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ message: 'Erro interno ao buscar usuários' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const user = await UserService.getById(id);

    if (!user) {
       res.status(404).json({ message: 'Usuário não encontrado' });
    }

     res.status(200).json(user);
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
     res.status(500).json({ message: 'Erro interno ao buscar usuário' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const newUser = await UserService.create(req.body);
     res.status(201).json(newUser);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
     res.status(400).json({ message: 'Erro ao criar usuário', error });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const updatedUser = await UserService.update(id, req.body);

    if (!updatedUser) {
       res.status(404).json({ message: 'Usuário não encontrado' });
    }

     res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
     res.status(400).json({ message: 'Erro ao atualizar usuário', error });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deleted = await UserService.remove(id);

    if (!deleted) {
       res.status(404).json({ message: 'Usuário não encontrado' });
    }

     res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
     res.status(500).json({ message: 'Erro interno ao deletar usuário' });
  }
};
