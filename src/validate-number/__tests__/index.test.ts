import { validateNumber } from '../index';

describe('tests credit card type utils', () => {
  it('validates a luhn number', () => {
    const type = validateNumber('8649');
    expect(type).toBe(true);
  });
  it('returns false if not a luhn number', () => {
    const type = validateNumber('8650');
    expect(type).toBe(false);
  });
});
