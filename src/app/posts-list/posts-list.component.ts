import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts = [
    {
      id: 1,
      title: 'Post 1',
      description: 'Desc 111'
    },
    {
      id: 2,
      title: 'Post 2',
      description: 'Desc 222'
    },
    {
      id: 3,
      title: 'Post 3',
      description: 'Desc 3'
    }
  ]

  imgUrl = 'https://placebear.com/200/300'

  isEnabled = true;

  constructor() { }

  ngOnInit(): void {
  }

}
