import { Component, OnInit } from "@angular/core";
import { Ticket } from "../../backend.service";

@Component({
  selector: "app-ticket-create",
  templateUrl: "./ticket-create.component.html",
  styleUrls: ["./ticket-create.component.css"]
})
export class TicketCreateComponent implements OnInit {
  team: Pick<Ticket, "description" | "completed" | "assigneeId"> = {
    description: "",
    completed: false,
    assigneeId: undefined
  };

  constructor() {}

  ngOnInit() {}
}
