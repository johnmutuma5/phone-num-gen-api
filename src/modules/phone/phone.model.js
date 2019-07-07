import { promises as fsp } from 'fs';
import path from 'path';

const NUMBERS_PATH = path.join(__dirname,  '../../../.data/numbers');

export default class Phone {
  constructor (num) {
    this.num = num;
  }

  add () {
    return fsp.appendFile(NUMBERS_PATH, this.num + '\n', 'utf-8');
  }

  static async exists (phone) {
    const existingNums = await fsp.readFile(NUMBERS_PATH);
    return existingNums.includes(phone.num);
  }
}
