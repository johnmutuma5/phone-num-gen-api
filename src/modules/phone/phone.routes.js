import { Router } from 'express';
import PhoneController from './phone.controller';

const phoneRouter = new Router();

phoneRouter
  .route('/phone/generate')
  .post(PhoneController.generate)

export default phoneRouter;
