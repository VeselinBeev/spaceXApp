import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLauncheDataComponent } from './full-launche-data.component';

describe('FullLauncheDataComponent', () => {
  let component: FullLauncheDataComponent;
  let fixture: ComponentFixture<FullLauncheDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullLauncheDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLauncheDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
