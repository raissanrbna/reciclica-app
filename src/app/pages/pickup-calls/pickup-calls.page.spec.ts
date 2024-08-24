import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PickupCallsPage } from './pickup-calls.page';
import { Router } from '@angular/router';
import { PickupCallPage } from '../pickup-call/pickup-call.page';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('PickupCallsPage', () => {
  let component: PickupCallsPage;
  let fixture: ComponentFixture<PickupCallsPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(PickupCallsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
