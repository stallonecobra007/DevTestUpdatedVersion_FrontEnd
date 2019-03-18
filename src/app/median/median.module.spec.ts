import { MedianModule } from './median.module';

describe('MedianModule', () => {
  let medianModule: MedianModule;

  beforeEach(() => {
    medianModule = new MedianModule();
  });

  it('should create an instance', () => {
    expect(medianModule).toBeTruthy();
  });
});
