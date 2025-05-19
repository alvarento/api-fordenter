import { Router } from 'express';
import * as VehicleController from '../controllers/vehicles.controller';

const router = Router();

router.get('/', VehicleController.getAll);
router.post('/', VehicleController.create);
router.put('/:id', VehicleController.update);
router.delete('/:id', VehicleController.remove);

export default router;