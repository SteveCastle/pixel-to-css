import maybeToPrecision from '../maybeToPrecision';

describe('maybeToPrecision', () => {
  it('positive number - no digit', () => {
    expect(maybeToPrecision(0)).toStrictEqual('0');
    expect(maybeToPrecision(10)).toStrictEqual('10');
    expect(maybeToPrecision(0.052469)).toStrictEqual('0.052469');
  });

  it('positive number - digit', () => {
    expect(maybeToPrecision(0, 1)).toStrictEqual('0');
    expect(maybeToPrecision(0, 2)).toStrictEqual('0.0');
    expect(maybeToPrecision(0.52469, 3)).toStrictEqual('0.525');
  });

  it('negative number - no digit', () => {
    expect(maybeToPrecision(-0)).toStrictEqual('0');
    expect(maybeToPrecision(-10)).toStrictEqual('- 10');
    expect(maybeToPrecision(-0.052469)).toStrictEqual('- 0.052469');
  });

  it('negative number - digit', () => {
    expect(maybeToPrecision(-0, 1)).toStrictEqual('0');
    expect(maybeToPrecision(-0, 2)).toStrictEqual('0.0');
    expect(maybeToPrecision(-0.52469, 3)).toStrictEqual('- 0.525');
    expect(maybeToPrecision(-4, 3)).toStrictEqual('- 4.00');
  });

  it('wrong digit option', () => {
    expect(function () {
      maybeToPrecision(0, 0);
    }).toThrow(/toPrecision\(\) argument must be between 1 and (100|21)/);
  });
});
