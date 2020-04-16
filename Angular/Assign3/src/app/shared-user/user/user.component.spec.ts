import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserComponent } from './user.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let router:Router;
  const spy = jasmine.createSpyObj('UserServiceService', ['user']);
  


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[
        {
          provide:UserServiceService,
          userValue:spy
        }
      ],
      imports: [RouterTestingModule,HttpClientTestingModule],
      declarations: [ UserComponent ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    router= TestBed.inject(Router);
    component = fixture.componentInstance;
    component.anchorName="Activate";
    component.user = {
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
    fixture.detectChanges();
  });

  it("function call 'ngOnInit'", () => {
    const result = component.ngOnInit();
    expect(component.cardClass).toEqual("card card-green");
    expect(component.buttonClass).toEqual("btn btn-danger");
    expect(component.buttonText).toEqual("Deactivate");
  });

  it("function call 'updateUser'", () => {
    spyOn(router,'navigate');
    const result = component.updateUser("10");
    expect(router.navigate).toHaveBeenCalledWith(['manage/form/update','10']);
  });


  it("function call 'invertActivationId'", () => {
    let userID = component.user["id"];
    component.invertActivationStatus.subscribe((id: string) => expect(id).toBe(userID));
    component.invertActivationId(userID);
  });
});
