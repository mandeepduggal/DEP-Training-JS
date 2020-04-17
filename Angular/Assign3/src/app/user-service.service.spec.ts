import { TestBed } from '@angular/core/testing';

import { UserServiceService } from './user-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('UserServiceService', () => {
  let service: UserServiceService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(UserServiceService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("test 'getDataOfActiveUser' function", () => {
    service.getDataOfActiveUser().subscribe((data)=>{
      expect(data).toEqual([]);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/users');
    expect(req.request.method).toEqual('GET');

    req.flush([]);

    httpTestingController.verify();
  });

  it("test 'getDataOfDeactiveUser' function", () => {
    service.getDataOfDeactiveUser().subscribe((data)=>{
      expect(data).toEqual([]);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/users');
    expect(req.request.method).toEqual('GET');

    req.flush([]);

    httpTestingController.verify();
  });

  it("test 'getUsers' function", () => {
    service.getUsers().subscribe((data)=>{
      expect(data).toEqual([]);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/users');
    expect(req.request.method).toEqual('GET');

    req.flush([]);

    httpTestingController.verify();
  });

  it("test 'getUserDetail' function", () => {
    service.getUserDetail("10").subscribe((data)=>{
      expect(data).toEqual([]);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/users/10');
    expect(req.request.method).toEqual('GET');

    req.flush([]);

    httpTestingController.verify();
  });

  it("test 'createUser' function", () => {
    let user={
      firstName: "One", 
      lastName: "User", 
      login: "User1", 
      password: "Password 1", 
      age: 30, 
      isDeleted: false,
    };
    service.createUser(user).subscribe((data)=>{
      expect(data).toEqual([]);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/users/');
    expect(req.request.method).toEqual('POST');

    req.flush([]);

    httpTestingController.verify();
  });

  it("test 'updateDetail' function", () => {
    let user={
      id: "691016d6-ea98-456d-a791-5ee86cc5ebaf", 
      firstName: "One", 
      login: "User1", 
      password: "Password1",
    };
    service.updateDetail(user).subscribe((data)=>{
      expect(data).toEqual([]);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/users/691016d6-ea98-456d-a791-5ee86cc5ebaf');
    expect(req.request.method).toEqual('PUT');

    req.flush([]);

    httpTestingController.verify();
  });
});
