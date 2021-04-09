import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TicketsListComponent } from "./tickets-list/tickets-list.component";
import { TicketsService } from "./tickets.service";
import { TicketDetailsComponent } from "./ticket-details/ticket-details.component";
import { TicketCreateComponent } from "./ticket-create/ticket-create.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    TicketsListComponent,
    TicketDetailsComponent,
    TicketCreateComponent
  ],
  providers: [TicketsService],
  exports: [TicketsListComponent]
})
export class TicketsModule {}
