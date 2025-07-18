import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsDashboardComponent } from './questions-dashboard.component';

describe('QuestionsDashboardComponent', () => {
  let component: QuestionsDashboardComponent;
  let fixture: ComponentFixture<QuestionsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionsDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
