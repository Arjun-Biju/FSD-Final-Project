import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  blogs = [
    {
      img:"https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/02/12172523/iStock-1189051075.jpg",
      title: 'Blog Post 1',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae nulla a doloribus sequi ex saepe modi quidem, veritatis laudantium placeat cum quia maxime iusto quisquam! Quasi id illo vero iure minima molestiae quae, nihil maxime voluptatum amet asperiores excepturi molestias impedit quas veritatis accusantium aut quis, numquam vel cumque! Tempore.'
    },
    {
      img:"https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/02/12172523/iStock-1189051075.jpg",
      title: 'Blog Post 2',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae nulla a doloribus sequi ex saepe modi quidem, veritatis laudantium placeat cum quia maxime iusto quisquam! Quasi id illo vero iure minima molestiae quae, nihil maxime voluptatum amet asperiores excepturi molestias impedit quas veritatis accusantium aut quis, numquam vel cumque! Tempore.'
    },
    {
      img:"https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/02/12172523/iStock-1189051075.jpg",
      title: 'Blog Post 3',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae nulla a doloribus sequi ex saepe modi quidem, veritatis laudantium placeat cum quia maxime iusto quisquam! Quasi id illo vero iure minima molestiae quae, nihil maxime voluptatum amet asperiores excepturi molestias impedit quas veritatis accusantium aut quis, numquam vel cumque! Tempore.'
    }
  ];

  slideIndex = 0;
  
  nextSlide() {
    this.slideIndex = (this.slideIndex + 1) % this.blogs.length;
  }
  
  previousSlide() {
    this.slideIndex = (this.slideIndex - 1 + this.blogs.length) % this.blogs.length;
  }

  testimonials = [
    {
      name: 'Name1',
      course: 'Course',
      quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae nulla a doloribus sequi ex saepe modi quidem, veritatis laudantium placeat cum quia maxime iusto quisquam! Quasi id illo vero iure minima molestiae quae, nihil maxime voluptatum amet asperiores excepturi molestias impedit quas veritatis accusantium aut quis, numquam vel cumque! Tempore.",
      image: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
      rating: 4.5
    },
    {
      name: 'Name2',
      course: 'course',
      quote: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae nulla a doloribus sequi ex saepe modi quidem, veritatis laudantium placeat cum quia maxime iusto quisquam! Quasi id illo vero iure minima molestiae quae, nihil maxime voluptatum amet asperiores excepturi molestias impedit quas veritatis accusantium aut quis, numquam vel cumque! Tempore.',
      image: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
      rating: 4.2
    },
    {
      name: 'Name3',
      course: 'course',
      quote: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae nulla a doloribus sequi ex saepe modi quidem, veritatis laudantium placeat cum quia maxime iusto quisquam! Quasi id illo vero iure minima molestiae quae, nihil maxime voluptatum amet asperiores excepturi molestias impedit quas veritatis accusantium aut quis, numquam vel cumque! Tempore.',
      image: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
      rating: 5
    },
  ];
}
