import { Request, Response } from 'express'
import { authenticateUser } from '../services/auth.service'

export const login = async (req: Request, res: Response) => {
   const { identifier, password } = req.body

   try {
      const user = await authenticateUser(identifier, password)

      res.status(200).json({ message: 'Login bem-sucedido!', user })



   } catch (error: any) {
      const message = error.message || 'Erro interno do servidor.'
      const status = message === 'Usuário não encontrado.' || message === 'Credenciais inválidas.' ? 401 : 400
      res.status(status).json({ message })
   }
}
