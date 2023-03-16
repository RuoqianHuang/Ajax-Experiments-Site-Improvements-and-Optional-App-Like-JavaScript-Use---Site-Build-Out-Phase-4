class ButtonCount extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
  
      // Create a shadow root
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      // Create a button element
      const button = document.createElement('button');
      button.textContent = 'Times Clicked: 0';
  
      // Append the button to the shadow root
      shadowRoot.appendChild(button);
  
      this.countValue = 0;
      button.addEventListener('click', () => {
        this.countValue++;
        button.textContent = `Times Clicked: ${this.countValue}`;
      });
    }
  }
  
  // Define the button-count element in the custom elements registry
  customElements.define('button-count', ButtonCount);
  