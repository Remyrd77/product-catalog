import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  public results = [];
  public products = [
    {
      'name': 'Amsterdam',
      'id': 1,
      'image': '../../assets/images/2.png',
    },
    {
      'name': 'Buenos Aires',
      'id': 2,
      'image': '../../assets/images/2.png',
    },
    {
      'name': 'Cairo',
      'id': 3,
      'image': '../../assets/images/2.png',
    },
    {
      'name': 'Geneva',
      'id': 4,
      'image': '../../assets/images/2.png',
    }
  ]

  ngOnInit() {
    console.log("Home page");
  }

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    if (query === '') {
      this.results = [];
    } else {
      this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
    }
  }

  showProductDetails(productId) {
    console.log('Product-id',productId)

  }

}
