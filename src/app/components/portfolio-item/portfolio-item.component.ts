import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { IPic, IProject } from '../../interfaces/portfolio.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cv-portfolio-item',
  standalone: true,
  imports: [
    GalleriaModule, FormsModule
  ],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.less'
})
export class PortfolioItemComponent implements OnChanges {
  @Input() project: IProject;

  get pics() {
    return this.project.pics;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.pics);
  }

}
