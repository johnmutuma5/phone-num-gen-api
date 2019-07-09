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

    let phoneNum = generateRandomNum(minPhoneNum, maxPhoneNum, '0');
    const phone = new Phone(phoneNum);

    while((await Phone.exists(phone))) {
      phoneNum = generateRandomNum(minPhoneNum, maxPhoneNum, '0');
    }
    try {
      await phone.add(phoneNum);
      return res.status(201).json({
        message: 'New phone number generated',
        phoneNum,
      });
    } catch (error) {
      /* istanbul ignore next */
      console.error(error);
      return res.status(500).json({
        message: 'An error occured while generating a phone number. Please try again',
      })
    }
  }

  static async listPhoneNumbers (req, res, next) {
    const phoneNumbers = (await Phone.getPhoneNumbers())

    return res.status(200).json({
      phoneNumbers,
      message: 'Phone numbers generated successfully',
    });
  }
}
