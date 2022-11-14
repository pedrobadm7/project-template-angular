import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { SuccesAlertComponent } from "./succes-alert/succes-alert.component";
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccesAlertComponent,
    WarningAlertComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
