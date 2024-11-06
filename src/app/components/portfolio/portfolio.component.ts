import {Component, inject} from '@angular/core';
import {DataService} from '../../services/data.service';
import {IProject} from '../../interfaces/portfolio.interface';
import {map, Observable, of} from 'rxjs';
import {PortfolioItemComponent} from '../portfolio-item/portfolio-item.component';
import {AsyncPipe} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {TabViewModule} from 'primeng/tabview';

@Component({
  selector: 'cv-portfolio',
  standalone: true,
  imports: [
    PortfolioItemComponent, AsyncPipe, ButtonModule, TabViewModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.less'
})

export class PortfolioComponent {
  ds = inject(DataService);

  portfolio$: Observable<IProject[]> = this.ds.getPortfolio().pipe(
    map(data => data.portfolio)
  ) || of([]);

  items = [
    { label: 'Dashboard' },
    { label: 'Transactions'},
    { label: 'Products'},
    { label: 'Messages'}
  ];
}
