import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {
  @Input() event:any;
  
  getStartTimeStyle():any {
    if(this.event && this.event.time === '8:00 am')
      return {color: 'green', 'font-weight': 'bold'}
    return []
  }

 

}
