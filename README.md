<h1 align="center">
  Ngx Product Gallery
</h1>

<h4 align="center">
A minimal customizable angular library for creating stunning product galleries like Flipkart, Amazon and other Top E-commerce platforms! 🚀  

Built to help developers showcase products like a pro, with minimal effort and maximum style. 🌟  
</h4>

<br>

<p align="center">
  <a>
    <img src="https://forthebadge.com/images/badges/made-with-typescript.svg" />
  </a>
  <a>
    <img src="https://forthebadge.com/images/badges/open-source.svg" />
  </a>
  <a>
    <img src="https://forthebadge.com/images/badges/powered-by-coffee.svg" />
  </a>
  <a>
    <img src="https://forthebadge.com/images/badges/built-with-love.svg" />
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#demo">Demo</a> •
  <a href="#support">Support</a> •
  <a href="#license">License</a>
</p>


## Key Features

- 🖼️ **Dynamic Image Galleries**: Perfect for showcasing product collections.
- 🛠️ **Easy Customization**: Tailor it to fit your brand’s unique aesthetic.
- ⚡ **Angular Power**: Built using Angular’s latest features for blazing performance.

## Installation

```
npm install ngx-product-gallery
```


## How To Use

First, import the NgxProductGalleryComponent to your component/module:

```ts
import { Component } from '@angular/core';
import { NgxProductGalleryComponent } from 'ngx-product-gallery';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [NgxProductGalleryComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {}

// or 

import { NgxProductGalleryComponent } from 'ngx-product-gallery';

@NgModule({
  declarations: [...],
  imports: [NgxProductGalleryComponent],
  bootstrap: [...]
})
export class AppModule {}


```

Then use the NgxProductGalleryComponent in your HTML like below:

```ts
<ngx-product-gallery 
  [images]="images">
</ngx-product-gallery>
```

Pass Your Images

```ts
import { Component } from '@angular/core';
import { IImage, NgxProductGalleryComponent } from 'ngx-product-gallery';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [NgxProductGalleryComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
  images: IImage[] = [
    { thumbnail: 'https://picsum.photos/id/1/64', image: 'https://picsum.photos/id/1/1200', altText: 'Image 1', id: 1 },
    { thumbnail: 'https://picsum.photos/id/2/64', image: 'https://picsum.photos/id/2/1200', altText: 'Image 2', id: 2 },
    { thumbnail: 'https://picsum.photos/id/3/64', image: 'https://picsum.photos/id/3/1200', altText: 'Image 3', id: 3 },
    { thumbnail: 'https://picsum.photos/id/4/64', image: 'https://picsum.photos/id/4/1200', altText: 'Image 4', id: 4 },
    { thumbnail: 'https://picsum.photos/id/5/64', image: 'https://picsum.photos/id/5/1200', altText: 'Image 5', id: 5 },
    { thumbnail: 'https://picsum.photos/id/6/64', image: 'https://picsum.photos/id/6/1200', altText: 'Image 6', id: 6 },
    { thumbnail: 'https://picsum.photos/id/7/64', image: 'https://picsum.photos/id/7/1200', altText: 'Image 7', id: 7 },
    { thumbnail: 'https://picsum.photos/id/8/64', image: 'https://picsum.photos/id/8/1200', altText: 'Image 8', id: 8 },
    { thumbnail: 'https://picsum.photos/id/9/64', image: 'https://picsum.photos/id/9/1200', altText: 'Image 9', id: 9 },
  ]
}
```

## 🤝 Contributing
We’re better together! Got an idea? Found a bug? Let’s collab!
Check out CONTRIBUTING.md to know the deets.

## Support

<a href="https://www.buymeacoffee.com/rohtashsethi" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## 📜 License
This project is licensed under the MIT License. Check out the LICENSE.md file for more.

## 🎯 Stay Connected
- 🌟 Star this repo to support us.
- 🐦 Follow us on Twitter.
- 💼 Connect on LinkedIn.

## Demo

<a href="https://ngx-product-gallery.netlify.app/" target="_blank"> Checkout the demo </a>

<a href="https://stackblitz.com/edit/ngx-product-gallery-demo" target="_blank"> Checkout how it works in Stackblitz </a> - In progress
