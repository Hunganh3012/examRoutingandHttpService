import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PreloadAllModules} from '@angular/router';
const routes: Routes=[
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path:'about',
      component:AboutComponent
    },
    {
      path:'product',
      loadChildren: () => import('./product/product.module').then((m) => m.ProductModule)
    },
    {
      path:'',
      redirectTo: 'home',
      pathMatch:'full'
    },
    {
      path: '**',
      component: NotFoundComponent
    }
  ];
@NgModule({
    imports: [
      RouterModule.forRoot(routes,{
        preloadingStrategy:PreloadAllModules
      }),
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule { };