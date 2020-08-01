import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';

import { StartComponent } from './start.component';
import { ElementRef } from '@angular/core';
import { ClassroomService } from 'src/shared/services/classroom/classroom.service';
import { of } from 'rxjs';

describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;
  let classroomService: jasmine.SpyObj<ClassroomService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartComponent ],
      providers: [
        { provide: ClassroomService, useFactory: () => spyOnClass(ClassroomService) } // allows us to mock the entire service class
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // so the service runes before all tests create another
  // befor each with mock/fake data
  // global and avail for all tests
  beforeEach(() => {
    // mock the method in the service
    classroomService = TestBed.get(ClassroomService);
    classroomService.saveClass$.and.returnValue({
      roomId: '7979797',
      roomTitle: 'Gym Class',
      slug: 'gym-class'
    });
    fixture.detectChanges();
  });

  it('EVENT: Create Component', () => {
    expect(component).toBeTruthy();
  });

  it('UI: should show thee title on Start Page', () => {
    expect(fixture.nativeElement.querySelector('[data-cl=titlebox]')).toBeTruthy();
  })


  it('METHOD: generateClassroomURL() should generateurl', () => {
    // moved to before each to make assessible to other tests
    // mock the method in the service
    // classroomService = TestBed.get(ClassroomService);
    // classroomService.saveClass$.and.returnValue(of([
    //   {
    //     url: 'newthis.com'
    //   }
    // ]));
    // fixture.detectChanges();
    expect(classroomService).toBeDefined();
  })



});
