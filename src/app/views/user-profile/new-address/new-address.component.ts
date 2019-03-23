import { MAT_DIALOG_DATA } from "@angular/material";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-new-address",
  templateUrl: "./new-address.component.html",
  styleUrls: ["./new-address.component.sass"]
})
export class NewAddressComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NewAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}
}
