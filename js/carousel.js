

//carousel

//Array storage class

let carouselArr = [];
class Carousel {
    constructor(image, title, url) {
        this.Image = image;
        this.Title = title;
        this.Url = url;
    }

    static Start(arr) {
        if (arr) {
            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(arr);
                Carousel._interval = setInterval(function () { Carousel.Next(arr); }, 2000);
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(carouselArr) {
        const carouselSlide = document.getElementById('carousel');
        const carouselTitle = document.getElementById('carousel-title');

        const newItems[
            carouselArr.push(new Carousel("imagem_1.jpg", "Esta é a nova Ranger Ford 2022. Verifique novidades.", "lancamento.html"));
            carouselArr.push(new Carousel("imagem_2.jpg", "Ford a nossa história", "index.html"));
            carouselArr.push(new Carousel("imagem_3.jpg", "Nova Ford Bronco Sport 2022", "lancamento.html"));
        ]

        if (carouselSlide && carouselTitle) {
            const slide = carouselArr[Carousel._sequence];

            carouselSlide.style.backgroundImage = `url('img/${slide.Image}')`;
            carouselSlide.style.backgroundSize = 'cover';
            carouselSlide.innerHTML = '';

            carouselTitle.innerHTML = `<a href="${slide.Url}">${slide.Title}</a>`;

            Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        }
    }
};

Carousel.Start(carouselArr);

 // function  playBotoes(idElementButton) {
    //     document.querySelector(idElementButton).onclick()
    // }
    // const ListaBotoesControle = document.querySelectorAll('.botoes-carousel');
    
    // for(const i = 0; i < botoesControle.length; i++) {
    //     const botao = ListaBotoesControle[i];
    //     const direcao = tecla.classList[1];
    //     const idBotao = `#botao-${direcao}`;

    //     tecla.onclick = function() {
    //         playBotoes(idBotao);
    //     }
    // }
