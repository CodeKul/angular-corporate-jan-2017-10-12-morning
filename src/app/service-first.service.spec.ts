/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceFirstService } from './service-first.service';

describe('Service: ServiceFirst', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceFirstService]
    });
  });

  it('should ...', inject([ServiceFirstService], (service: ServiceFirstService) => {
    expect(service).toBeTruthy();
  }));
});
