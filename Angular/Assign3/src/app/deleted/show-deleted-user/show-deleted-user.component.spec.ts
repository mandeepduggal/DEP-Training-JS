import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeletedUserComponent } from './show-deleted-user.component';

describe('ShowDeletedUserComponent', () => {
  let component: ShowDeletedUserComponent;
  let fixture: ComponentFixture<ShowDeletedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDeletedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeletedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("test 'ngOnInit' function", () => {
    expect(component.isDeactivate).toEqual("true");
  });
});
