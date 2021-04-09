import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { TicketsListComponent } from "./tickets-list/tickets-list.component";
import { TicketDetailsComponent } from "./ticket-details/ticket-details.component";

const routes: Routes = [
  {
    path: "",
    component: TicketsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class TicketsRoutingModule {}
