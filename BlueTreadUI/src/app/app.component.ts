import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { TweetModel } from './models/tweet.model';
import { TwitterService } from './services/twitter.service';
import { MatChipInputEvent } from '@angular/material/chips';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  addOnBlur: boolean = true;
  isFetching: boolean = false;
  searches: string[] = ['#dotnetcore', '#azure'];
  tweets: TweetModel[] = [];

  constructor(private _twitterService: TwitterService) {}

  ngOnInit() {
    this.getTweet();
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.searches.push(value);
      this.getTweet();
    }

    event.chipInput!.clear();
  }

  remove(search: string): void {
    const index = this.searches.indexOf(search);

    if (index >= 0) {
      this.searches.splice(index, 1);
      this.getTweet();
    }
  }

  getTweet() {
    this.isFetching = true;
    let query = this.searches.join(' ');
    this._twitterService.getTweet(query).subscribe(tweets => {
      this.tweets = tweets;
      this.isFetching = false;
    });
  }
}
