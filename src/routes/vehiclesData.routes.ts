import { Router } from 'express';
import * as VehicleDataController from '../controllers/vehiclesData.controller';

const router = Router();

router.get('/', VehicleDataController.getAll);
router.post('/', VehicleDataController.create);
router.put('/:id', VehicleDataController.update);
router.delete('/:id', VehicleDataController.remove);

export default router;