import { TestBed } from '@angular/core/testing';

import { SellerloginService } from './sellerlogin.service';

describe('SellerloginService', () => {
  let service: SellerloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
