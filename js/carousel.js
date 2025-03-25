


class Carousel {
    constructor(image, title, url) {
        this.Image = image;
        this.Title = title;
        this.Url = url;
    }

    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel.Next(arr); //Start
            Carousel._interval = setInterval(() => Carousel.Next(arr), 2000);
        } else {
            console.error("O carrossel está vazio ou não foi fornecido um array.");
        }
    }

    static Next(arr) {
        const carouselSlide = document.getElementById('carousel');
        const carouselTitle = document.getElementById('carousel-title');

        if (carouselSlide && carouselTitle) {
            const slide = arr[Carousel._sequence];
            carouselSlide.style.backgroundImage = `url('img/${slide.Image}')`;
            carouselSlide.style.backgroundSize = 'cover';
            carouselTitle.innerHTML = `<a href="${slide.Url}">${slide.Title}</a>`;
            Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        }
    }
}


let carouselArr = [
    new Carousel("imagem_1.jpg", "Esta é a nova Ranger Ford 2022. Verifique novidades.", "lancamento.html"),
    new Carousel("imagem_2.jpg", "Ford a nossa história", "index.html"),
    new Carousel("imagem_3.jpg", "Nova Ford Bronco Sport 2022", "lancamento.html")
];


Carousel.Start(carouselArr);
