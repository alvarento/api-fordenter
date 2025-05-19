import { Router } from 'express';
import * as RangerInfosController from '../controllers/rangerInfos.controller';

const router = Router();

router.get('/', RangerInfosController.getAll);
router.get('/:id', RangerInfosController.getById);
router.post('/', RangerInfosController.create);
router.put('/:id', RangerInfosController.update);
router.delete('/:id', RangerInfosController.remove);

export default router;
