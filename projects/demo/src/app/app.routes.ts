import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { BrandingComponent } from './branding/branding.component';

export const routes: Routes = [
    {
        path: '',
        component: BrandingComponent
    },
    {
        path: 'demo',
        component: DemoComponent
    }
];
