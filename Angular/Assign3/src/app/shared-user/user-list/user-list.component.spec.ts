import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserServiceService } from 'src/app/user-service.service';
import { of } from 'rxjs';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  const spy = {
    user: jasmine.createSpyObj('UserServiceService', ['user']),
    getDataOfActiveUser: jasmine.createSpyObj('UserServiceService', ['getDataOfActiveUser'])
  }
  
  const getDataOfActiveUserData = spy["getDataOfActiveUser"].getDataOfActiveUser.and.returnValue(of([{}]))
  let userServiceService:UserServiceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[
        {
          provide:UserServiceService,
          userValue:spy
        }
      ],
      imports: [RouterTestingModule,HttpClientTestingModule],
      declarations: [ UserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    userServiceService = TestBed.inject(UserServiceService);
    component = fixture.componentInstance;
    // component.anchorName="Activate";
    component.isDeactivate="false";
    fixture.detectChanges();
  });

  it("should create 'ngOnInit'", () => {
    spyOn(component,'getDataOfActiveUser');
    const result = component.ngOnInit();
    expect(component.anchorName).toEqual("Activate");
    expect(component.getDataOfActiveUser).toHaveBeenCalled()
  });

  it('should create', () => {
    // spyOn(userServiceService,'getDataOfActiveUser');
    // console.log(userServiceService)
    const result = component.getDataOfActiveUser();
    console.log("abc ",component);
    result
    expect(component.getDataOfActiveUser).toEqual([{}]);

    // expect(userServiceService.getDataOfActiveUser).toHaveBeenCalled()
    // expect(component.getDataOfActiveUser).toBeTruthy()
  });
});
