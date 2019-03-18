import { MeanModule } from './mean.module';

describe('MeanModule', () => {
  let meanModule: MeanModule;

  beforeEach(() => {
    meanModule = new MeanModule();
  });

  it('should create an instance', () => {
    expect(meanModule).toBeTruthy();
  });
});
