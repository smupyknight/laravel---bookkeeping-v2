import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'signin',
		loadChildren: './app/pages/signin/signin.module#SigninModule'
	},
	{
		path: 'signup',
		loadChildren: './app/pagessignup/signup.module#SignupModule'
	},
	{
		path: '**',
		redirectTo: 'signin'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }