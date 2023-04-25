class Carousel {
  constructor(carouselId, imageId, prevBtnId, nextBtnId) {
    this.carouselId = document.getElementById(carouselId);
    this.currentIndex = 0;
    this.prevBtn = document.getElementById(prevBtnId);
    this.nextBtn = document.getElementById(nextBtnId);
    this.image = document.getElementById(imageId);
    this.images = []; // Agrega aquí tus nombres de archivo de imagen

    this.prevBtn.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.image.src = this.images[this.currentIndex];
    });

    this.nextBtn.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.image.src = this.images[this.currentIndex];
    });
  }
}

// Crea instancias de carruseles
//Carrousel de los Bullys
const carousel1 = new Carousel('carousel1', 'image-bully', 'prev-btn-bully', 'next-btn-bully');
carousel1.images = ['images/bully/image_01.JPG', 'images/bully/image_02.JPG', 'images/bully/image_03.JPG' ];

// Carrousel de los Ingleses
const carousel2 = new Carousel('carousel2', 'image-english', 'prev-btn-english', 'next-btn-english');
carousel2.images = ['images/english/image_01.JPG', 'images/english/image_02.JPG', 'images/english/image_03.JPG', 'images/english/image_04.JPG' ];

//Carrousel de Franceses
const carousel3 = new Carousel('carousel3', 'image-french', 'prev-btn-french', 'next-btn-french');
carousel3.images = ['images/french/image_01.JPG','images/french/image_02.JPG','images/french/image_03.JPG'];

//Carrousel de Newcomers
const carousel4 = new Carousel('carousel4', 'image-newcomers', 'prev-btn-newcomers', 'next-btn-newcomers');
carousel4.images = ['images/newcomers/image_01.jpeg', 'images/newcomers/image_02.jpeg', 'images/newcomers/image_03.jpeg', 
'images/newcomers/image_04.jpeg', 'images/newcomers/image_05.jpeg', 'images/newcomers/image_06.jpeg', 'images/newcomers/image_07.jpeg', 
'images/newcomers/image_08.jpeg', 'images/newcomers/image_09.jpeg'];

//Carrousel de delivered
const carousel5 = new Carousel('carousel5', 'image-delivered', 'prev-btn-delivered', 'next-btn-delivered');
carousel5.images = ['images/delivered/image_01.jpeg', 'images/delivered/image_02.jpeg', 'images/delivered/image_03.jpeg', 
'images/delivered/image_04.jpeg', 'images/delivered/image_05.jpeg', 'images/delivered/image_06.jpeg', 'images/delivered/image_07.jpeg'];