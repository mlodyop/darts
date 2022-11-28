import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'darts-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true,
  imports: [BoardComponent],
})
export class RootComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

bootstrapApplication(RootComponent);
rfawsfsazdfasdf;
