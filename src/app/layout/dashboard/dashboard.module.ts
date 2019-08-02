import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatFormFieldModule, MatCheckboxModule, MatSelectModule, MatInputModule } from '@angular/material';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { AssociadosComponent } from './components/associados/associados.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        DashboardRoutingModule,
        StatModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule, 
        MatFormFieldModule, 
        MatCheckboxModule,
        MatSelectModule,
        MatInputModule
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        AssociadosComponent
    ]
})
export class DashboardModule {}
