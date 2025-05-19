// src/services/auth.service.ts
import prisma from '../config/dbConfig';

export const authenticateUser = async (identifier: string, password: string) => {
   if (!identifier || !password) {
      throw new Error('Identifier and password are required')
   }

   const user = await prisma.user.findFirst({
      where: {
         OR: [
            { email: identifier },
            { firstName: identifier }
         ]
      }
   })

   if (!user) {
      throw new Error('User not found')
   }

   if (user.password !== password) {
      throw new Error('Invalid credentials')
   }

   const { password: _, registration_at, update_at, ...safeUser } = user;
   return safeUser;
}
