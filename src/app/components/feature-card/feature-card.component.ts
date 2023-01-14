import { Component, Input, OnInit } from '@angular/core';
import { FeatureCardDetail } from 'src/app/models/feature-card-details';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent implements OnInit {

  @Input() detail?: FeatureCardDetail;

  ngOnInit(): void {
    
  }
}
