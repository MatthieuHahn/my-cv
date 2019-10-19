import { Component, OnInit } from '@angular/core';
import { TimelineElement } from '../types/timeline-element';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  experience: Array<TimelineElement> = [
    {
      "start": "2017-09",
      "end": "",
      "title": "CTO @ Méta-Coaching",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus ex id sapien rhoncus cursus. Quisque a enim libero. Aliquam ac nulla rutrum, sodales nulla at, pulvinar est."
    },
    {
      "start": "2016-09",
      "end": "2017-09",
      "title": "Lead Developer @ SHG",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus ex id sapien rhoncus cursus. Quisque a enim libero. Aliquam ac nulla rutrum, sodales nulla at, pulvinar est."
    },
    {
      "start": "2012-09",
      "end": "2016-09",
      "title": "Lead Developer @ Cofely",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus ex id sapien rhoncus cursus. Quisque a enim libero. Aliquam ac nulla rutrum, sodales nulla at, pulvinar est."
    }
  ];

  studies: Array<TimelineElement> = [
    {
      "start": "2017-09",
      "end": "",
      "title": "CTO @ Méta-Coaching",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus ex id sapien rhoncus cursus. Quisque a enim libero. Aliquam ac nulla rutrum, sodales nulla at, pulvinar est."
    },
    {
      "start": "2016-09",
      "end": "2017-09",
      "title": "Lead Developer @ SHG",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus ex id sapien rhoncus cursus. Quisque a enim libero. Aliquam ac nulla rutrum, sodales nulla at, pulvinar est."
    },
    {
      "start": "2016-09",
      "end": "2017-09",
      "title": "Lead Developer @ SHG",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus ex id sapien rhoncus cursus. Quisque a enim libero. Aliquam ac nulla rutrum, sodales nulla at, pulvinar est."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
