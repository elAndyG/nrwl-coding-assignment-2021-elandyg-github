import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  exports: [FormsModule, RouterModule, ReactiveFormsModule]
})
export class SharedModule {}
