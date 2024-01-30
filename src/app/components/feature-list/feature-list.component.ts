import { Component } from '@angular/core';
import { FeatureCardDetail } from 'src/app/models/feature-card-details';
import { FeatureCardDetailService } from 'src/app/services/feature-card-detail.service';
import gsap from 'gsap';

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

  ngAfterViewInit(): void {
    this.featureCardEntry();
  }

  featureCardEntry(): void {
	let detail_cards = gsap.utils.toArray<HTMLElement>('.detail-card');
	detail_cards.forEach(detail_card => {

		gsap.from(detail_card, {
			yPercent: 10,
			opacity: 0,
			duration: 2,
			scrollTrigger: {
				trigger: detail_card,
				start: "top 100%",
			},
		})

	})
  }
}
