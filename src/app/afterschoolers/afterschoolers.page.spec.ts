import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AfterSchoolersPage } from './afterschoolers.page';

describe('AfterSchoolersPage', () => {
  let component: AfterSchoolersPage;
  let fixture: ComponentFixture<AfterSchoolersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfterSchoolersPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AfterSchoolersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
