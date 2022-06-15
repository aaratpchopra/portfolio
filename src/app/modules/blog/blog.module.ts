import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BlogRoutingModule } from "./blog-routing.module";
import { HomeComponent } from './components/home/home.component';
import { ListsComponent } from './components/helper/lists/lists.component';
import { PostComponent } from './components/helper/post/post.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListsComponent,
    PostComponent
  ],
  imports: [CommonModule, BlogRoutingModule],
})
export class BlogModule {}
