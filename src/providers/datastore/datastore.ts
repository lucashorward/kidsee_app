import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import { User } from '../../app/models/user';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Post} from "../../app/models/post";
import {Comment} from "../../app/models/comment";

const config: DatastoreConfig = {
  baseUrl: 'http://174.138.7.193/api',
  models: {
    users: User,
    posts: Post,
    comments: Comment
  }
}

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

    constructor(http: Http) {
        super(http);
    }

    public getBaseUrl() {
      return this.datastoreConfig.baseUrl;
    }

}