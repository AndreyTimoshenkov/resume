import { Component, inject } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DataService } from '../../services/data.service';
import { IProject } from '../../interfaces/portfolio.interface';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'cv-portfolio',
  standalone: true,
  imports: [
    CarouselModule, ButtonModule, TagModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.less'
})

export class PortfolioComponent {
  ds = inject(DataService);
  portfolio: Observable<IProject[]> = this.ds.getPortfolio().pipe(
    map(data => data.portfolio)
  ) || of([]);
}