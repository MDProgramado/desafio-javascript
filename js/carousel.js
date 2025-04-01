//Array do carousel = plateira vazia aonde vai conter as informações e o conteudo do carosel 
const carouselArr = [];

//Class Carousel = Formulario padrão para toda vez que eu quiser recriar o mesmo codigo 
class Carousel {
    constructor(Imagem, Title, Url) {
        this.imagem = Imagem;
        this.title = Title;
        this.url = Url;
    }

    static Start(arr) {
        if (arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel._arr = arr;

            Carousel.Show(); // Exibe o primeiro item sem alterar _sequence

            Carousel._interval = setInterval(() => {
                Carousel.Next();
            }, 2000);
        } else {
            throw "Method Start needs an Array Variable.";
        }
    }

    // Método que só exibe o item atual
    static Show() {
        const carouselElement = document.getElementById('carousel');
        const titleElement = document.getElementById('carousel-title');

        carouselElement.innerHTML = '';
        titleElement.innerHTML = '';

        const img = document.createElement('img');
        img.setAttribute('src', Carousel._arr[Carousel._sequence].imagem);
        carouselElement.insertAdjacentElement("beforeend", img);

        const title = document.createElement('a');
        title.setAttribute('href', Carousel._arr[Carousel._sequence].url);
        title.textContent = Carousel._arr[Carousel._sequence].title;
        titleElement.appendChild(title);
    }

    static Next() {
        // Exibe o item atual e depois incrementa o índice
        Carousel.Show();
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }

    static Prev() {
        // Decrementa o índice e exibe o item anterior sem incrementar
        Carousel._sequence = (Carousel._sequence - 1 + Carousel._size) % Carousel._size;
        Carousel.Show();
    }
}

function Back() {
    clearInterval(Carousel._interval);
    Carousel.Prev();
    Carousel._interval = setInterval(() => {
        Carousel.Next();
    }, 2000);
}

function Prox() {
    clearInterval(Carousel._interval);
    Carousel.Next();
    Carousel._interval = setInterval(() => {
        Carousel.Next();
    }, 2000);
}
