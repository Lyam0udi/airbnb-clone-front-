import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ToolbarModule} from "primeng/toolbar";
import {MenuModule} from "primeng/menu";
import {CategoryComponent} from "./category/category.component";
import {AvatarComponent} from "./avatar/avatar.component";
import {DialogService} from "primeng/dynamicdialog";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navabar',
  standalone: true,
  imports: [
    ButtonModule,
    FontAwesomeModule,
    ToolbarModule,
    MenuModule,
    CategoryComponent,
    AvatarComponent
  ],

  providers: [DialogService],

  templateUrl: './navabar.component.html',
  styleUrl: './navabar.component.scss'
})
export class NavabarComponent implements OnInit {

  location: string = "Anywhere";
  guests: string = "Add guests";
  dates: string = "Any week";

  // login () => this.authService.login();
  // logout () => this.authService.logout();

  currentMenuItems : MenuItem[] | undefined = [];

  ngOnInit(): void {
    this.fetchMenu();
  }

  private fetchMenu() {
    return [
      {
      label: "Sign up",
      styleClass: "font-bold",
      },
      {
        label: "Log in",
      }
    ]
  }
}
