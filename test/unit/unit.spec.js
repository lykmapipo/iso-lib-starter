import { spy, expect, faker } from '@lykmapipo/test-helpers';

describe('unit test', () => {
  it('should be in place', () => {
    const spied = spy(faker.internet, 'email');

    const email = faker.internet.email();
    expect(email).to.exist;

    expect(spied).to.have.been.calledOnce;
    spied.restore();
  });
});
