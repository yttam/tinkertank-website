import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BirthdayPartiesPage } from './birthday-parties.page';

describe('BirthdayPartiesPage', () => {
  let component: BirthdayPartiesPage;
  let fixture: ComponentFixture<BirthdayPartiesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BirthdayPartiesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BirthdayPartiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
