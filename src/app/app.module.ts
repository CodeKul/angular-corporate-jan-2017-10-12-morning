import { ServiceFirstService } from './service-first.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FristComponent } from './frist/frist.component';
import { OtherComponent } from './other/other.component';
import { OtherOneComponent } from './other-one/other-one.component';
import { InnerOneComponent } from './frist/inner-one.component';
import { InnerTwoComponent } from './frist/inner-two.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { ViewInComponent } from './view-encapsulation/view-in.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { InterpolationComponent } from './databinding/interpolation.component';
import { InputBindingComponent } from './databinding/input-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { ThirdComponent } from './databinding/third.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LifeChildComponent } from './life-cycle/life-child.component';
import { LifeParentComponent } from './life-cycle/life-parent.component';
import { DirectivesComponent } from './directives/directives.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CodeResizerDirective } from './directives/code-resizer.directive';

@NgModule({
  declarations: [
    AppComponent,
    FristComponent,
    OtherComponent,
    OtherOneComponent,
    InnerOneComponent,
    InnerTwoComponent,
    ViewEncapsulationComponent,
    ViewInComponent,
    DatabindingComponent,
    InterpolationComponent,
    InputBindingComponent,
    EventBindingComponent,
    ThirdComponent,
    LifeCycleComponent,
    LifeChildComponent,
    LifeParentComponent,
    DirectivesComponent,
    NavBarComponent,
    CodeResizerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServiceFirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }


