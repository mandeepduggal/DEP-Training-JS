import { FullNamePipe } from './full-name.pipe';

xdescribe('FullNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FullNamePipe();
    expect(pipe).toBeTruthy();
  });
});
