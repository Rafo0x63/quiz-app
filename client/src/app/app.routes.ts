import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { GameComponent } from './components/game/game.component';
import { QuizzesListComponent } from './components/quizzes-list/quizzes-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'quizzes', component: QuizzesListComponent },
    { path: 'quizzes/:categoryTitle', component: QuizzesComponent },
    { path: 'quizzes/:categoryTitle/:quizTitle', component: GameComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];
