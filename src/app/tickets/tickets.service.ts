import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BackendService, Ticket } from "../backend.service";

@Injectable()
export class TicketsService {
  constructor(private backendService: BackendService) {}

  getAll(): Observable<Ticket[]> {
    return this.backendService.tickets();
  }

  getById(id: number): Observable<Ticket> {
    return this.backendService.ticket(id);
  }
}
