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
      name: 'Sandra',
      course: 'Angular Certification Training',
      quote: "Learntos is an excellent online learning platform. The classes are well-designed and easy to understand. The trainers are very friendly and do their best to clear up any confusion.",
      image: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
      rating: 5
    },
    {
      name: 'Rahul',
      course: 'Selenium Certification Training',
      quote: "I am very lucky to be a part of Learntos. It's one of the best online platforms to learn and practice the Selenium Certification Training course. The teaching methods and class notes are very simple and effective.",
      image: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
      rating: 5
    },
    {
      name: 'Karthika',
      course: 'Web Developer Certification Training',
      quote: 'My web development experience with Learntos was excellent. I was able to learn all of the concepts quickly and thoroughly. Now I can create websites and templates of my own design.',
      image: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
      rating: 5
    },
  ];
}
