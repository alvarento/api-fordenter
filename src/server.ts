import { env } from 'process';
import app from './app';
import { logServerStartSucess, logServerStartError } from './utils/logger';

const PORT: number = Number(env.PORT) || 3000;

app.listen(PORT, (error: Error | undefined) => {
   if (error) {
      logServerStartError(error);
      return
   }

   logServerStartSucess(PORT);
});