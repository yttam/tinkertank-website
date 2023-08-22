import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HolidayCampsPage } from './holiday-camps.page';

describe('HolidayCampsPage', () => {
  let component: HolidayCampsPage;
  let fixture: ComponentFixture<HolidayCampsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HolidayCampsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HolidayCampsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
