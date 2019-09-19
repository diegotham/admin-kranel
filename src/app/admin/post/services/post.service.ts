import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private apiService: ApiService) { }

  getPosts(): Observable<Post[]> {
    return this.apiService.get<Post[]>('posts');
  }

  getPost(id: number): Observable<Post> {
    return this.apiService.get<Post>(`posts/${id}`);
  }
}
