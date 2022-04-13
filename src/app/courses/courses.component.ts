import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  courses:any = [{
    id: 'course_001',
    title : 'web development',
    duration: '8 hours'
  },
  {
    id: 'course_002',
    title:'Html css',
    duration: '5 hours',
  },
  {
    id: 'course_003',
    title:'Html css',
    duration: '5 hours',
  },
  {
    id: 'course_004',
    title:'Html css',
    duration: '5 hours',
  }
]
  ngOnInit(): void {
  }

}
