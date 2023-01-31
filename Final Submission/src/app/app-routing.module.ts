import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailReaderBasicsComponent } from './email-reader-basics/email-reader-basics.component';
import { EmailReaderFormComponent } from './email-reader-form/email-reader-form.component';


const routes: Routes = [

  {path: 'create', component: EmailReaderFormComponent },
  {path: 'view', component: EmailReaderBasicsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
