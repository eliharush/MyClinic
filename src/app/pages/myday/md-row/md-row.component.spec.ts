import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MdRowComponent } from './md-row.component';

describe('MdRowComponent', () => {
  let component: MdRowComponent;
  let fixture: ComponentFixture<MdRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdRowComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MdRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
