import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseId: any;

  name: string = '';

  courses: any = [
    {
      id: 'course_001',
      title: 'Web Development',
      duration: '8 Weeks',
      level: 'Begineer',
      lessons: '5',
      language: 'English',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      syllabus: [{
        topics: 'HTML',
        sub_topics: [
          {
            sub_topic: 'Training Overview Video'
          },
          {
            sub_topic: 'About the Training'
          },
          {
            sub_topic: 'Basic Concepts of Web Development'
          },
          {
            sub_topic: 'Setting Up Local Environment'
          },
          {
            sub_topic: 'Introduction to HTML'
          },
          {
            sub_topic: 'HTML Tags'
          },

        ]
      },
      {
        topics: 'CSS',
        sub_topics: [
          {
            sub_topic: 'Training Overview Video'
          },
          {
            sub_topic: 'About the Training'
          },
          {
            sub_topic: 'Basic Concepts of Web Development'
          },
          {
            sub_topic: 'Setting Up Local Environment'
          },
          {
            sub_topic: 'Introduction to HTML'
          },
          {
            sub_topic: 'HTML Tags'
          },

        ]
      },
      {
        topics: 'Bootstrap',
        sub_topics: [
          {
            sub_topic: 'Training Overview Video'
          },
          {
            sub_topic: 'About the Training'
          },
          {
            sub_topic: 'Basic Concepts of Web Development'
          },
          {
            sub_topic: 'Setting Up Local Environment'
          },
          {
            sub_topic: 'Introduction to HTML'
          },
          {
            sub_topic: 'HTML Tags'
          },

        ]
      },
      {
        topics: 'DBMS',
        sub_topics: [
          {
            sub_topic: 'Training Overview Video'
          },
          {
            sub_topic: 'About the Training'
          },
          {
            sub_topic: 'Basic Concepts of Web Development'
          },
          {
            sub_topic: 'Setting Up Local Environment'
          },
          {
            sub_topic: 'Introduction to HTML'
          },
          {
            sub_topic: 'HTML Tags'
          },

        ]
      },
      {
        topics: 'PHP',
        sub_topics: [
          {
            sub_topic: 'Training Overview Video'
          },
          {
            sub_topic: 'About the Training'
          },
          {
            sub_topic: 'Basic Concepts of Web Development'
          },
          {
            sub_topic: 'Setting Up Local Environment'
          },
          {
            sub_topic: 'Introduction to HTML'
          },
          {
            sub_topic: 'HTML Tags'
          },

        ]
      },
      ],
      testimonial: [
        {
          name: 'Abish',
          quote: 'Very nice',
          desination: 'Student'
        },
        {
          name: 'Lal',
          quote: 'Usefull course',
          desination:'student'
        },
        {
          name: 'Amala',
          quote: 'The teaching was very good',
          desination:'professor'
        },
        
      ]
    },

  ]
  constructor(public activateRoute: ActivatedRoute) {
    this.courseId = this.activateRoute.snapshot.paramMap.get("id");

  }
  panelOpenState = false;
  ngOnInit(): void { }


}
