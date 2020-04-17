import { StatusPipe } from './status.pipe';

describe('StatusPipe', () => {
  it('create an instance', () => {
    const pipe = new StatusPipe();
    expect(pipe.transform("Activate","buttonName")).toEqual("Deactivate");
  });
});
