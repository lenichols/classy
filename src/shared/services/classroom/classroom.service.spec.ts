import { TestBed } from '@angular/core/testing';

import { ClassroomService } from './classroom.service';

describe('ClassroomService', () => {
  let service: ClassroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassroomService);
  });

  it('INIT: should be created', () => {
    expect(service).toBeTruthy();
  });

  it('METHOD: should be check to see if uid gets generated', () => {
    expect(service.uuid).toBeDefined();
  });
});
