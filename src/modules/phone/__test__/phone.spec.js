import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../app';


chai.use(chaiHttp);

const { expect } = chai;

describe('Generate phone number', () => {
  it('generates a ten digit number starting with Zero(0)', async () => {
    const resp = await chai.request(app)
      .post('/v1/phone/generate')
      .send();

    expect(resp.statusCode).to.equal(201);
    expect(resp.body.phoneNum.length).to.equal(10);
    expect(resp.body.phoneNum.startsWith(0)).to.equal(true);
  });
})
