import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Dish } from '../../shared/dish';
import { DishProvider } from '../../providers/dish/dish';
import { DishdetailPage } from '../dishdetail/dishdetail';
import { FavoriteProvider } from '../../providers/favorite/favorite';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  dishes: Dish[];
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private dishservice: DishProvider,
    private favoriteservice: FavoriteProvider,
    private toastCtrl: ToastController,
    @Inject('BaseURL') private BaseURL) { }
  
  ngOnInit() {
    this.dishservice.getDishes()
      .subscribe(dishes => this.dishes = dishes,
        errmess => this.errMess = <any>errmess);
  }

  dishSelected(event, dish) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DishdetailPage, {
      dish: dish
    });
  }
  
  addToFavorites(dish: Dish) {
    console.log('Adding to Favorites', dish.id);
    if(!this.favoriteservice.isFavorite(dish.id)) {
      this.favoriteservice.addFavorite(dish.id);
      this.toastCtrl.create({
        message: dish.name + ' added as a favorite successfully',
        duration: 3000
      }).present();
    }
  }
}
