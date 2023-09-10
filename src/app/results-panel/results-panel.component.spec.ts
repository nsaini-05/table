import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPanelComponent } from './results-panel.component';

describe('ResultsPanelComponent', () => {
  let component: ResultsPanelComponent;
  let fixture: ComponentFixture<ResultsPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsPanelComponent]
    });
    fixture = TestBed.createComponent(ResultsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
