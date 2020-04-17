import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOperationComponent } from './update-operation.component';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';
import { of } from 'rxjs';
import { FormBuilder } from '@angular/forms';

describe('UpdateOperationComponent', () => {
  let component: UpdateOperationComponent;
  let fixture: ComponentFixture<UpdateOperationComponent>;
  const spy = jasmine.createSpyObj('UserServiceService', ['getUserDetail','updateDetail'])
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
  }));
  const updateDetailData = spy.updateDetail.and.returnValue(of([{}]))

  const formBuilder: FormBuilder = new FormBuilder();
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
        },
        { provide: FormBuilder, useValue: formBuilder }
      ],
      declarations: [ UpdateOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOperationComponent);
    router= TestBed.inject(ActivatedRoute);
    userServiceService = TestBed.inject(UserServiceService);
    component = fixture.componentInstance;
    component.updateForm = formBuilder.group({
      id: null,
      password: null,
      age: null
  });
    fixture.detectChanges();
  });

  it("test 'ngOnInit' function", () => {
    spyOn(component,'getUSerDetails');
    const result = component.ngOnInit();
    expect(component.getUSerDetails).toHaveBeenCalled();
  });

  it("test 'updateUser' function", () => {
    spyOn(component,'getUSerDetails');
    const result = component.updateUser();
    expect(userServiceService.updateDetail).toHaveBeenCalled();
  });

  it("test 'getUSerDetails' function", () => {
    spyOn(component,'getUSerDetails');
    const result = component.getUSerDetails("691016d6-ea98-456d-a791-5ee86cc5ebaf");
    expect(userServiceService.getUserDetail).toHaveBeenCalled();
  });
});
