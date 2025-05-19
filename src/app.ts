import express from 'express';
import cors from 'cors';
import usersRoutes from './routes/users.routes';
import vehicleRoutes from './routes/vehicles.routes';
import vehicleDataRoutes from './routes/vehiclesData.routes';
import authRoutes from './routes/auth.routes';
import rangerInfosRouter from './routes/rangerInfos.routes';
import carouselImageRouter from './routes/carouselImages.routes';
import { availableRoutes } from '../initialRoutes'

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', usersRoutes);
app.use('/vehicles', vehicleRoutes);
app.use('/vehiclesData', vehicleDataRoutes);
app.use('/rangerinfos', rangerInfosRouter);
app.use('/carouselImages', carouselImageRouter);
app.use(authRoutes);
app.get('/', (_, res) => { res.json(availableRoutes)});

export default app;