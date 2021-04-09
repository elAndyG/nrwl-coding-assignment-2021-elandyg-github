import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Ticket } from "../../backend.service";

@Component({
  selector: "app-ticket-details",
  templateUrl: "./ticket-details.component.html",
  styleUrls: ["./ticket-details.component.css"]
})
export class TicketDetailsComponent implements OnInit {
  @Input() ticket: Ticket;
  @Output() ticjetChange = new EventEmitter<Ticket>();
  
  constructor() {}

  ngOnInit() {}
}
