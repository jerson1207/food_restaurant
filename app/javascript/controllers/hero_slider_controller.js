import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ["slider", "sliderItem"];
  static values = { currentSlidePos: Number };

  connect() {
    this.currentSlidePosValue = 0;
    this.lastActiveSliderItem = this.sliderItemTargets[0];
    this.autoSlideInterval = null;
    this.autoSlide();
  }

  updateSliderPos() {
    this.lastActiveSliderItem.classList.remove("active");
    this.sliderItemTargets[this.currentSlidePosValue].classList.add("active");
    this.lastActiveSliderItem = this.sliderItemTargets[this.currentSlidePosValue];
  }

  slideNext() {
    console.log("Next button clicked");
    if (this.currentSlidePosValue >= this.sliderItemTargets.length - 1) {
      this.currentSlidePosValue = 0;
    } else {
      this.currentSlidePosValue++;
    }

    this.updateSliderPos();
  }

  slidePrev() {
    console.log("Previous button clicked");
    if (this.currentSlidePosValue <= 0) {
      this.currentSlidePosValue = this.sliderItemTargets.length - 1;
    } else {
      this.currentSlidePosValue--;
    }

    this.updateSliderPos();
  }

  autoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.slideNext();
    }, 7000);
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }

  startAutoSlide() {
    this.autoSlide();
  }

  onMouseOver() {
    this.stopAutoSlide();
  }

  onMouseOut() {
    this.startAutoSlide();
  }
}
