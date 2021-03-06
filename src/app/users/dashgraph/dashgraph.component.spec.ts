import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashgraphComponent } from './dashgraph.component';

describe('DashgraphComponent', () => {
  let component: DashgraphComponent;
  let fixture: ComponentFixture<DashgraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashgraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
