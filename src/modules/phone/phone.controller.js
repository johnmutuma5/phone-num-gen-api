import { generateRandomNum } from '../../shared/utils';

export default class PhoneController {
  /**
   * generate random phone numebrs
   */
  static generate(req, res, next) {
    const minPhoneNum = 700100100;
    const expectedTotalNumsCount = 10000;
    const maxPhoneNum = minPhoneNum + expectedTotalNumsCount;

    const phoneNum = generateRandomNum(minPhoneNum, maxPhoneNum, '0');
    return res.status(201).json({
      message: 'New phone number generated',
      phoneNum,
    });
  }
}
