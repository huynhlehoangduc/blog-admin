import { Component, OnInit } from '@angular/core';
import { Post } from '../../../@core/interfaces/post';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { PostService } from '../../../@core/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  total = 1;
  posts: Post[] = [];
  loading = true;
  pageSize = 10;
  pageIndex = 1;

  constructor(private readonly postService: PostService) { }

  ngOnInit(): void {
    this.loadDataFromServer(this.pageIndex, this.pageSize, null, null, []);
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find(item => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;
    this.loadDataFromServer(pageIndex, pageSize, sortField, sortOrder, filter);
  }

  loadDataFromServer(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filter: Array<{ key: string; value: string[] }>
  ): void {
    this.loading = true;
    this.postService.list({ params: { page: pageIndex, take: pageSize }}).subscribe(res => {
      this.loading = false;
      this.posts = res.data;
      this.total = res.meta.itemCount;
    });
  }

  delete(id: string): void {
    this.postService.delete(id).subscribe(res => {
      this.loadDataFromServer(this.pageIndex, this.pageSize, null, null, []);
    });
  }
}
