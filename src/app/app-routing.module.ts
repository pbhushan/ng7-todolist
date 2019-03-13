import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { AboutComponent } from './components/pages/about/about.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      // Tell the router to use the hash instead of HTML5 pushstate.
      useHash: true,
      // Once the above is enabled, the fragment link will only work on the
      // first click. This is because, by default, the Router ignores requests
      // to navigate to the SAME URL that is currently rendered. Unfortunately,
      // the fragment scrolling is powered by Navigation Events. As such, we
      // have to tell the Router to re-trigger the Navigation Events even if we
      // are navigating to the same URL.
      onSameUrlNavigation: 'reload'
    }
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
