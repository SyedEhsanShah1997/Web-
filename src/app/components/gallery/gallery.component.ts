import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  images = [
    {
      url: 'https://www.pressahmadiyya.com/wp-content/uploads/2022/09/20220910_154124-A8BA43D9-1024x516.jpg',
    },
    {
      url: 'https://www.pressahmadiyya.com/wp-content/uploads/2025/09/Main.jpg',
    },
    {
      url: 'https://www.pressahmadiyya.com/wp-content/uploads/2021/09/20210919_165846-715F56F1.jpg',
    },
    {
      url: 'https://www.pressahmadiyya.com/wp-content/uploads/2022/09/20220910_154124-A8BA43D9-1024x516.jpg',
    },
    {
      url: 'https://www.pressahmadiyya.com/wp-content/uploads/2025/09/Main.jpg',
    },
    {
      url: 'https://www.pressahmadiyya.com/wp-content/uploads/2021/09/20210919_165846-715F56F1.jpg',
    },
    {
      url: 'https://www.pressahmadiyya.com/wp-content/uploads/2022/09/20220910_154124-A8BA43D9-1024x516.jpg',
    },
    {
      url: 'https://www.pressahmadiyya.com/wp-content/uploads/2025/09/Main.jpg',
    },
    {
      url: 'https://www.pressahmadiyya.com/wp-content/uploads/2021/09/20210919_165846-715F56F1.jpg',
    },
    {
      url: 'https://www.pressahmadiyya.com/wp-content/uploads/2022/09/20220910_154124-A8BA43D9-1024x516.jpg',
    },
    {
      url: 'https://www.pressahmadiyya.com/wp-content/uploads/2025/09/Main.jpg',
    },
    {
      url: 'https://www.pressahmadiyya.com/wp-content/uploads/2021/09/20210919_165846-715F56F1.jpg',
    },
  ];
}
