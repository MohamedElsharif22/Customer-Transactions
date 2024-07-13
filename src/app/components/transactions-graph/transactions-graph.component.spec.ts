import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsGraphComponent } from './transactions-graph.component';

describe('TransactionsGraphComponent', () => {
  let component: TransactionsGraphComponent;
  let fixture: ComponentFixture<TransactionsGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsGraphComponent]
    });
    fixture = TestBed.createComponent(TransactionsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
