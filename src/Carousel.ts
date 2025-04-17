import { CarouselItem } from "./types/tipos.js";
import { carouselArr } from "./componets/compents-carousel.js";

//Carousel padrão do site, onde é feito a chamada do array e o loop de imagens
class Carousel {
    sequence: number = 0; 
    size: number = carouselArr.length;
    carouselArray: CarouselItem[] = carouselArr;
    interval: ReturnType<typeof setInterval> | null = null;

    Start() {
        if (this.size > 0) {
            this.sequence = 0;
            this.Show();

            this.interval = setInterval(() => {
                this.sequence = (this.sequence + 1) % this.size;
                this.Show();
            }, 2500);
        }
    }

    Show() {
        const carouselElemento = document.getElementById("carousel") as HTMLDivElement;
        const titleElemento = document.getElementById("carousel-title") as HTMLDivElement;

        carouselElemento.innerHTML = "";
        titleElemento.innerHTML = "";

        const item = this.carouselArray[this.sequence];

        const img = document.createElement("img");
        img.setAttribute("src", item.image);
        carouselElemento.appendChild(img);

        const title = document.createElement("a");
        title.setAttribute("href", item.url);
        title.textContent = item.title;
        titleElemento.appendChild(title);
    }

    Next() {
        this.sequence = (this.sequence + 1) % this.size;
        this.Show();
        this.ResetInterval();
    }

    Prev() {
        this.sequence = (this.sequence - 1 + this.size) % this.size;
        this.Show();
        this.ResetInterval();
    }

    ResetInterval() {
        if (this.interval) clearInterval(this.interval);
        this.interval = setInterval(() => {
            this.sequence = (this.sequence + 1) % this.size;
            this.Show();
        }, 2500);
    }

    AddListeners() {
        const buttonNext = document.getElementById("next-btn");
        const buttonBack = document.getElementById("previus-btn");

        if (buttonNext) {
            buttonNext.addEventListener("click", ():void => this.Next());
        }

        if (buttonBack) {
            buttonBack.addEventListener("click", ():void => this.Prev());
        }
    }
}


const carousel = new Carousel();
carousel.Start();
carousel.AddListeners();


