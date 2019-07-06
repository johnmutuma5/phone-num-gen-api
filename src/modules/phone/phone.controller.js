import { generateRandomNum } from '../../shared/utils';
import Phone from './phone.model';

export default class PhoneController {
  /**
   * generate random phone numebrs
   */
  static async generate(req, res, next) {
    const minPhoneNum = 700100100;
    const expectedTotalNumsCount = 10000;
    const maxPhoneNum = minPhoneNum + expectedTotalNumsCount;

    const phoneNum = generateRandomNum(minPhoneNum, maxPhoneNum, '0');
    const phone = new Phone(phoneNum);
    try {
      const file = await phone.add(phoneNum);
      console.log(file);
      return res.status(201).json({
        message: 'New phone number generated',
        phoneNum,
      });
    } catch (error) {
      conosle.error(error);
      return res.status(500).json({
        message: 'An error occured while generating a phone number. Please try again',
      })
    }
  }
}
