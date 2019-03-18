import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTemplateComponent } from './stats-template.component';

describe('StatsTemplateComponent', () => {
  let component: StatsTemplateComponent;
  let fixture: ComponentFixture<StatsTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
