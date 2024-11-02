import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {GalleriaModule} from 'primeng/galleria';
import {IProject} from '../../interfaces/portfolio.interface';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {StackComponent} from "../stack/stack.component";

@Component({
  selector: 'cv-portfolio-item',
  standalone: true,
  imports: [
    GalleriaModule, FormsModule, ButtonModule, StackComponent
  ],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.less'
})
export class PortfolioItemComponent implements OnChanges {
  @Input() project: IProject;

  get pics() {
    return this.project?.pics;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.pics);
  }

  redirectToWebsite(site: string) {
    window.open(site);
  }
}
