import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailsComponent } from './user-details.component';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';
import { of } from 'rxjs';
import { FullNamePipe } from 'src/app/full-name.pipe';
import { StatusPipe } from 'src/app/status.pipe';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  const spy = jasmine.createSpyObj('UserServiceService', ['getUserDetail'])
  const getUserDetailData = spy.getUserDetail.and.returnValue(of({
    "id": "691016d6-ea98-456d-a791-5ee86cc5ebaf", 
    "firstName": "One", 
    "lastName": "User", 
    "login": "User1", 
    "password": "Password 1", 
    "age": 30, 
    "isDeleted": false, 
    "createdAt": "2020-04-08T14:24:55.628Z", 
    "updatedAt": "2020-04-09T06:47:47.445Z" 
  }))

  let router:ActivatedRoute;
  let userServiceService:UserServiceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: of({ 
                id: "691016d6-ea98-456d-a791-5ee86cc5ebaf",
              }),
            },
            params: of({ 
              id: "691016d6-ea98-456d-a791-5ee86cc5ebaf",
            })
          },
        },
        {
          provide:UserServiceService,
          useValue: spy
        }
      ],
      declarations: [ UserDetailsComponent, FullNamePipe, StatusPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    router= TestBed.inject(ActivatedRoute);
    userServiceService = TestBed.inject(UserServiceService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("test 'ngOnInit' function", () => {
    let user={
      id: "691016d6-ea98-456d-a791-5ee86cc5ebaf", 
      firstName: "One", 
      lastName: "User", 
      login: "User1", 
      password: "Password 1", 
      age: 30, 
      isDeleted: false, 
      createdAt: "2020-04-08T14:24:55.628Z", 
      updatedAt: "2020-04-09T06:47:47.445Z" 
    };
    const result = component.ngOnInit();
    expect(userServiceService.getUserDetail).toHaveBeenCalled();
    expect(component.user).toEqual(user);
    expect(component.activityState).toEqual("active");
  });

});
