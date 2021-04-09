import { Component, OnInit } from "@angular/core";
import { TicketsService } from "../tickets.service";

@Component({
  selector: "app-tickets-list",
  templateUrl: "./tickets-list.component.html",
  styleUrls: ["./tickets-list.component.css"]
})
export class TicketsListComponent implements OnInit {
  constructor(private ticketsService: TicketsService) {}
  tickets = this.ticketsService.getAll();

  ngOnInit() {}
}
