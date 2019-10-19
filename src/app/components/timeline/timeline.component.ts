import { Component, OnInit, Input } from '@angular/core';
import { TimelineElement } from '../../types/timeline-element';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input() timeline: Array<TimelineElement> = [];
  @Input() title: string = '';

  now: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
