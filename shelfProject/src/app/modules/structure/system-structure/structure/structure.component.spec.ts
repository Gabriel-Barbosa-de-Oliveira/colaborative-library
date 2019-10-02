import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureComponent } from './structure.component';
import { SystemStructureModule } from '../system-structure.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('StructureComponent', () => {
  let component: StructureComponent;
  let fixture: ComponentFixture<StructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SystemStructureModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
