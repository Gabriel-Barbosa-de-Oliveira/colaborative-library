import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStructureComponent } from './registration-structure.component';
import { AuthModule } from '../../auth.module';
import { ToastrModule } from 'ngx-toastr';

describe('RegistrationStructureComponent', () => {
  let component: RegistrationStructureComponent;
  let fixture: ComponentFixture<RegistrationStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthModule, ToastrModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
