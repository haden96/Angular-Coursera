import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { flyInOut, expand } from '../animations/app.animation';
import { baseURL } from '../shared/baseurl';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  errMess: string;

  constructor(
    private dishServise: DishService,
    private promotionServise: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') private BaseURL
  ) { }

  ngOnInit() {
    this.dishServise.getFeaturedDish().subscribe(dish => this.dish = dish,
      errmess => this.errMess = <any>errmess);
    this.promotionServise.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion,
      errmess => this.errMess = <any>errmess);
    this.leaderService.getFeaturedLeader().subscribe(leader => this.leader = leader,
      errmess => this.errMess = <any>errmess);
  }

}
