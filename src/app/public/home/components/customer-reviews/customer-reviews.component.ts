import { Component } from '@angular/core';
import { reviews } from 'src/app/public/core/data';
import { Review } from 'src/app/public/core/models';

@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.scss'],
})
export class CustomerReviewsComponent {
  reviews: Review[] = reviews;
}
