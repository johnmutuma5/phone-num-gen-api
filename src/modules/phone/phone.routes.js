import { Router } from 'express';
import PhoneController from './phone.controller';

const phoneRouter = new Router();

phoneRouter
  .route('/phone/generate')
  .post(PhoneController.generate)

phoneRouter
  .route('/phone/list')
  .get(PhoneController.listPhoneNumbers)

export default phoneRouter;
