import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["header"];

  connect() {
    console.log("test");
    this.lastScrollPos = 0;
    window.addEventListener("scroll", this.handleScroll.bind(this));
    this.hideHeader();
    
  }

  disconnect() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll() {
    if (window.scrollY >= 50) {
      this.headerTarget.classList.add("active");
      // Assuming backTopBtn is defined somewhere in your code
      // backTopBtn.classList.add("active");
      this.hideHeader();
    } else {
      this.headerTarget.classList.remove("active");
      // Assuming backTopBtn is defined somewhere in your code
      // backTopBtn.classList.remove("active");
    }
  }

  hideHeader() {
    const isScrollBottom = this.lastScrollPos < window.scrollY;
    if (isScrollBottom) {
      this.headerTarget.classList.add("hide");
    } else {
      this.headerTarget.classList.remove("hide");
    }

    this.lastScrollPos = window.scrollY;
  }
}
