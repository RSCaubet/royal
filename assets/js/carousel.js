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
carousel1.images = ['images/bully/image_01.JPG', 'images/bully/image_02.JPG', 'images/bully/image_03.JPG' ]

// Carrousel de los Ingleses
const carousel2 = new Carousel('carousel2', 'image-english', 'prev-btn-english', 'next-btn-english');
carousel2.images = ['images/english/image_01.JPG', 'images/english/image_02.JPG', 'images/english/image_03.JPG', 'images/english/image_04.JPG' ]

//Carrousel de Franceses
const carousel3 = new Carousel('carousel3', 'image-french', 'prev-btn-french', 'next-btn-french');
carousel3.images = ['images/french/image_01.JPG','images/french/image_02.JPG','images/french/image_03.JPG']