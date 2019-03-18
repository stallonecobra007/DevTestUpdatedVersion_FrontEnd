import { ModeModule } from './mode.module';

describe('ModeModule', () => {
  let modeModule: ModeModule;

  beforeEach(() => {
    modeModule = new ModeModule();
  });

  it('should create an instance', () => {
    expect(modeModule).toBeTruthy();
  });
});
