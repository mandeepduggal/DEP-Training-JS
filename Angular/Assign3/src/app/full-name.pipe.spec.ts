import { FullNamePipe } from './full-name.pipe';

describe('FullNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FullNamePipe();
    let user = {"firstName":"EPAM","lastName":"DEP"}
    expect(pipe.transform(user)).toEqual("EPAM DEP");
  });
});
