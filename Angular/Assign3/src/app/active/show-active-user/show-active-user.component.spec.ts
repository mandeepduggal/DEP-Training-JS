import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowActiveUserComponent } from './show-active-user.component';

describe('ShowActiveUserComponent', () => {
  let component: ShowActiveUserComponent;
  let fixture: ComponentFixture<ShowActiveUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowActiveUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowActiveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('check ngOnInit function', () => {
    
  });
});
