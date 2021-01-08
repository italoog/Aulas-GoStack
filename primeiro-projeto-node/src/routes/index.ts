import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => response.json({ message: 'Hello Word' }));

export default router;
