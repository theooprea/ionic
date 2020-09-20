import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { stringify } from '@angular/core/src/util';
import { Comment } from '../../shared/comment';
/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  comment: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder) {
      this.comment = this.formBuilder.group({
        author: ['', Validators.required],
        rating: 5,
        comment: ['', Validators.required],
        date: ''
      });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    this.comment.value.date = new Date().toString();
    console.log(this.comment.value);
    /* console.log(this.comment.value.author + ' ' + this.comment.value.rating + ' ' + this.comment.value.comment + '\n' + this.comment.value); */
    this.viewCtrl.dismiss(this.comment.value);
  }
}
