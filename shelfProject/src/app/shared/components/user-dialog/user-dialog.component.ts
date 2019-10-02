import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { IProject } from "src/app/models/projects.interface";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-user-dialog",
  templateUrl: "./user-dialog.component.html",
  styleUrls: ["./user-dialog.component.scss"]
})
export class UserDialogComponent implements OnInit {
  projects: Array<any> = [];

  constructor(
    private _apiService: ApiService,
    public dialogRef: MatDialogRef<UserDialogComponent>
  ) {}

  ngOnInit() {
    this.getUserProjects();
  }

  getUserProjects() {
    this._apiService.getUserProjects().subscribe(
      success => {
        this.mapProjectsRequest(success);
      },
      error => {}
    );
  }

  mapProjectsRequest(successObject: Array<IProject>) {
    this.projects = successObject;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
