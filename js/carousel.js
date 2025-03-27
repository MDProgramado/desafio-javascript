
const carouselArr = [];


class Carousel {
    constructor(Imagem, Title, Url) {
        this.imagem = Imagem;
        this.title = Title;
        this.url = Url;
    }

    static Start(arr) {
        if ( arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length; 
            Carousel._arr = arr; 

            Carousel.Next();

            Carousel._interval = setInterval(function () {
                Carousel.Next();
            }, 2000);
        } else {
            throw "Method Start needs an Array Variable.";
        }
    }
    static Next() {
 
  const carouselElement = document.getElementById('carousel');
  const titleElement = document.getElementById('carousel-title');

  
  carouselElement.innerHTML = '';
  titleElement.innerHTML = '';

 
  const img = document.createElement('img');
  img.setAttribute('src', Carousel._arr[Carousel._sequence].imagem);
  carouselElement.appendChild(img);

 
  const title = document.createElement('a');
  title.setAttribute('href',  Carousel._arr[Carousel._sequence].url)
  title.textContent = Carousel._arr[Carousel._sequence].title;
  titleElement.appendChild(title);

  
  Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }
};
  