import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Impor IonicModule
import { PickupCallCardComponent} from '../components/pickup-call-card/pickup-call-card.component';
import { PickupCallPageModule } from '../pages/pickup-call/pickup-call.module';
import { HomePageModule } from '../pages/home/home.module';
import { ErrorMessageComponent } from '../components/error-message/error-message.component';



@NgModule({
  declarations: [
    PickupCallCardComponent
  ],
  imports: [
    CommonModule, IonicModule
  ],
  exports:[
    PickupCallCardComponent
  ]
})
export class SharedModule { }



