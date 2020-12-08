import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainContentPage } from './main-content.page';

describe('MainContentPage', () => {
  let component: MainContentPage;
  let fixture: ComponentFixture<MainContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
