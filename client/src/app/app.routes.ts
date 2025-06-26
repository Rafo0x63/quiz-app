import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { GameComponent } from './components/game/game.component';
import { QuizzesListComponent } from './components/quizzes-list/quizzes-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesDashboardComponent } from './components/dashboard/categories-dashboard/categories-dashboard.component';
import { QuizzesDashboardComponent } from './components/dashboard/quizzes-dashboard/quizzes-dashboard.component';
import { QuestionsDashboardComponent } from './components/dashboard/questions-dashboard/questions-dashboard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, canActivate:[authGuard] },
    { path: 'categories', component: CategoriesComponent, canActivate:[authGuard] },
    { path: 'quizzes', component: QuizzesListComponent, canActivate:[authGuard] },
    { path: 'quizzes/:categoryTitle', component: QuizzesComponent, canActivate:[authGuard] },
    { path: 'quizzes/:categoryTitle/:quizTitle', component: GameComponent, canActivate:[authGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate:[authGuard] },
    { path: 'dashboard/categories', component: CategoriesDashboardComponent, canActivate:[authGuard] },
    { path: 'dashboard/quizzes', component: QuizzesDashboardComponent, canActivate:[authGuard] },
    { path: 'dashboard/questions', component: QuestionsDashboardComponent, canActivate:[authGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];
