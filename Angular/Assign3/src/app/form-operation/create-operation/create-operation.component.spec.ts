import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateOperationComponent } from './create-operation.component';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CreateOperationComponent', () => {
  let component: CreateOperationComponent;
  let fixture: ComponentFixture<CreateOperationComponent>;
  const spy = jasmine.createSpyObj('UserServiceService', ['createUser'])
  const createUserData = spy.createUser.and.returnValue(of([{}]))
  let router:Router;
  let userServiceService:UserServiceService;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[
        {
          provide:UserServiceService,
          useValue: spy
        },
        { provide: FormBuilder, useValue: formBuilder }
      ],
      imports: [RouterTestingModule,HttpClientTestingModule],
      declarations: [ CreateOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOperationComponent);
    userServiceService = TestBed.inject(UserServiceService);
    router= TestBed.inject(Router);
    component = fixture.componentInstance;
    component.createForm = formBuilder.group({
      firstName: null,
      lastName: null,
      login: null,
      password: null,
      age: null
  });
    fixture.detectChanges();
  });

  it("test 'createUser' function", () => {
    const result = component.createUser()
    expect(userServiceService.createUser).toHaveBeenCalled()
  });
});
