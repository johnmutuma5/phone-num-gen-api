import { promises as fsp } from 'fs';
import path from 'path';

export default class Phone {
  constructor (num) {
    this.num = num;
  }

  add () {
    const writePath = path.join(__dirname,  '../../../.data/numbers');
    return fsp.appendFile(writePath, this.num + '\n', 'utf-8');
  }
}
