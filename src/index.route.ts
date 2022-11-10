import express from 'express'

const router = express.Router()
const authRoutes = require('./routes/auth');
const furnitureRoutes = require('./routes/furniture');

router.get('/health-check', (req: any, res: any) =>
  res.send('OK')
)

router.use('/auth', authRoutes);
router.use('/furniture', furnitureRoutes);

module.exports = router;