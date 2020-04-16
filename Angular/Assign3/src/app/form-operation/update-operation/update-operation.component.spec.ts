import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOperationComponent } from './update-operation.component';

xdescribe('UpdateOperationComponent', () => {
  let component: UpdateOperationComponent;
  let fixture: ComponentFixture<UpdateOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
