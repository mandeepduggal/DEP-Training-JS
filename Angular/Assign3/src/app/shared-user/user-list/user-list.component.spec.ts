import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserServiceService } from 'src/app/user-service.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  const spy = jasmine.createSpyObj('UserServiceService', ['getDataOfActiveUser','getUsers','getDataOfDeactiveUser','updateDetail'])
  const getDataOfActiveUserData = spy.getDataOfActiveUser.and.returnValue(of([{}]))
  const getUsersData = spy.getUsers.and.returnValue(of([{}]))
  const getDataOfDeactiveUserData = spy.getDataOfDeactiveUser.and.returnValue(of([{}]))
  const updateDetailData = spy.updateDetail.and.returnValue(of([]))
  let router:Router;
  let userServiceService:UserServiceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[
        {
          provide:UserServiceService,
          useValue: spy
        }
      ],
      imports: [RouterTestingModule,HttpClientTestingModule],
      declarations: [ UserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    router= TestBed.inject(Router);
    userServiceService = TestBed.inject(UserServiceService);
    component = fixture.componentInstance;
    component.isDeactivate="false";
    fixture.detectChanges();
  });

  it("test 'ngOnInit' function", () => {
    spyOn(component,'getDataOfActiveUser');
    const result = component.ngOnInit();
    expect(component.anchorName).toEqual("Activate");
    expect(component.getDataOfActiveUser).toHaveBeenCalled()
  });

  it("test 'getDataOfActiveUser' function", () => {
    
    const result = component.getDataOfActiveUser();
    expect(userServiceService.getDataOfActiveUser).toHaveBeenCalled()
    expect(component.userList).toEqual([{}]);
  });

  it("test 'getUsers' function", () => {
    
    const result = component.getUsers();
    expect(userServiceService.getUsers).toHaveBeenCalled()
    expect(component.userList).toEqual([{}]);
  });

  it("test 'getDataOfDeactiveUser' function", () => {
    
    const result = component.getDataOfDeactiveUser();
    expect(userServiceService.getDataOfDeactiveUser).toHaveBeenCalled()
    expect(component.userList).toEqual([{}]);
  });

  it("test 'invertActivationStatus' function", () => {
    
    spyOn(component,'getDataOfActiveUser');
    const result = component.invertActivationStatus("1");
    expect(userServiceService.updateDetail).toHaveBeenCalled()
    expect(component.getDataOfActiveUser).toHaveBeenCalled()
  });

  it("test 'getUserDetail' function", () => {
    spyOn(router,'navigate');
    const result = component.getUserDetail("10");
    expect(router.navigate).toHaveBeenCalledWith(['manage','10']);
  });

  it("test 'createNewUser' function", () => {
    spyOn(router,'navigate');
    const result = component.createNewUser();
    expect(router.navigate).toHaveBeenCalledWith(['manage/form/create']);
  });
});
