import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isFormOpen: boolean = false;
  currentYear = new Date().getFullYear();
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Show/hide the scroll-to-top button based on the scroll position
@HostListener('window:scroll')
  onWindowScroll() {
    const button = document.querySelector('.scroll-top');
    if (button) {
      button.classList.toggle('show', window.pageYOffset > 200);
    }
  }
  toggleForm() {
    this.isFormOpen = !this.isFormOpen;
  }

closeForm() {
  // Implement the logic to close the form here
  this.isFormOpen = false;
}

}
