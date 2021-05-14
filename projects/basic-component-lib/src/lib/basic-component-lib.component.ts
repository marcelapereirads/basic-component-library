import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-basic-component-lib',
  template: `
    <p>
      basic-component-lib works!
    </p>
  `,
  styles: [
  ]
})
export class BasicComponentLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
