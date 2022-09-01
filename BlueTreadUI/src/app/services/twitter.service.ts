import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { TweetModel } from '../models/tweet.model';
import { environment } from '../../environments/environment';
import * as moment from 'moment';

@Injectable()
export class TwitterService {
    private controller = 'Twitter';

    constructor(private http: HttpClient) {}

    getTweet(query: string): Observable<TweetModel[]> {
        return this.http.get<TweetModel[]>(`${environment.api}/${this.controller}?query=${encodeURIComponent(query)}`)
                .pipe(map((tweets) => {
                    return tweets.map((tweet) => {
                        tweet.createdAt = moment(tweet.createdAt).format('MMMM Do YYYY, h:mm:ss a'); 
                        return tweet;
                    });
                }));
    }
}