import { Component } from '@angular/core';
import { FeatureCardDetail } from 'src/app/models/feature-card-details';
import { FeatureCardDetailService } from 'src/app/services/feature-card-detail.service';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss']
})
export class FeatureListComponent {

  details: FeatureCardDetail[] = [];

  constructor(private detailService: FeatureCardDetailService) { }

  ngOnInit(): void {
    this.detailService.getFeatureCardDetails().subscribe((details) => (this.details = details.slice(0, 3)));
  }
}
