import { carouselArr } from "../componets/compents-carousel.js";
class Carousel {
    sequence = 0;
    size = carouselArr.length;
    carouselArray = carouselArr;
    interval = null;
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
        const carouselElemento = document.getElementById("carousel");
        const titleElemento = document.getElementById("carousel-title");
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
        if (this.interval)
            clearInterval(this.interval);
        this.interval = setInterval(() => {
            this.sequence = (this.sequence + 1) % this.size;
            this.Show();
        }, 2500);
    }
    AddListeners() {
        const buttonNext = document.getElementById("next-btn");
        const buttonBack = document.getElementById("previus-btn");
        if (buttonNext) {
            buttonNext.addEventListener("click", () => this.Next());
        }
        if (buttonBack) {
            buttonBack.addEventListener("click", () => this.Prev());
        }
    }
}
const carousel = new Carousel();
carousel.Start();
carousel.AddListeners();
