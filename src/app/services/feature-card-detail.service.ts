import { Injectable } from '@angular/core';
import { FeatureCardDetail } from '../models/feature-card-details';
import { Observable, of } from 'rxjs';
import { MOCK_FEATURE_CARD_DETAILS } from '../../assets/static/data/mock-feature-card-details';

@Injectable({
  providedIn: 'root'
})
export class FeatureCardDetailService {
  
  private details: FeatureCardDetail[] = [];
  
  constructor() {
    this.details = MOCK_FEATURE_CARD_DETAILS;
  }
  getFeatureCardDetails(): Observable<FeatureCardDetail[]> {
    return of(this.details);
  }
}
