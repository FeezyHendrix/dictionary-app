import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchService } from './services/search.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { IndexcomponentComponent } from './components/indexcomponent/indexcomponent.component';
import { ChatServiceService } from './services/chat-service.service';


@NgModule({
  declarations: [
    AppComponent,
    IndexcomponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    SearchService,
    ChatServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
