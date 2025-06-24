import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { GameComponent } from './components/game/game.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'quizzes/:categoryTitle', component: QuizzesComponent },
    { path: 'quizzes/:categoryTitle/:quizTitle', component: GameComponent }
];
