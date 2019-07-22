import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TodosComponent} from './todos/todos.component';
import {TodosResolver} from './todos.resolver';

const routes: Routes = [
{
  path: '',
  redirectTo: 'consultas',
  pathMatch: 'full'
},
{
  path: 'consultas', 
  children: [
  {
    path: '',
    component: TodosComponent,
    resolve: {
      consultas: TodosResolver
    }
  },
  {
    path: ':id',
    component: TodosComponent,
    resolve: {
      consultas: TodosResolver
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [TodosResolver]
})
export class AppRoutingModule {
}
