import { LowerCasePipe } from './lower-case.pipe';

describe('LowerCasePipe', () => {
  it('create an instance', () => {
    const pipe = new LowerCasePipe();
    expect(pipe).toBeTruthy();
  });
});
