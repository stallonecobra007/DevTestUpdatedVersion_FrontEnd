import { StatsTemplateModule } from './stats-template.module';

describe('StatsTemplateModule', () => {
  let statsTemplateModule: StatsTemplateModule;

  beforeEach(() => {
    statsTemplateModule = new StatsTemplateModule();
  });

  it('should create an instance', () => {
    expect(statsTemplateModule).toBeTruthy();
  });
});
