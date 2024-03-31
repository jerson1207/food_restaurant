import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="reservation-form"
export default class extends Controller {
  submit(event) {
    const dateInput = this.element.querySelector("input[type='date']");
    const currentDate = new Date();

    // Check if the date field is empty
    if (dateInput.value === "") {
      alert("Please enter a date");
      event.preventDefault(); // Prevent the form from being submitted
      return;
    }

    // Check if the selected date is in the past
    if (dateInput < currentDate) {
      alert("Selected date cannot be in the past");
      event.preventDefault(); // Prevent the form from being submitted
      return;
    }
  }
}
