import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchesComponent } from './launches/launches.component'
import { RocketsComponent } from './rockets/rockets.component';
import { FullLauncheDataComponent } from './full-launche-data/full-launche-data.component';

const routes: Routes = [
  { path: 'launches',
    component: LaunchesComponent,
    data: { title: 'launches' }
  },
  { path: 'rockets',
    component: RocketsComponent,
    data: { title: 'Rockets Information' }
  },
  { path: 'full-launche-data',
    component: FullLauncheDataComponent,
    data: { title: 'Full Launches Information' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
