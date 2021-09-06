import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrefrencesPage } from './prefrences.page';

describe('PrefrencesPage', () => {
  let component: PrefrencesPage;
  let fixture: ComponentFixture<PrefrencesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefrencesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrefrencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
