import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRouterComponent } from './no-router.component';

describe('NoRouterComponent', () => {
  let component: NoRouterComponent;
  let fixture: ComponentFixture<NoRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
