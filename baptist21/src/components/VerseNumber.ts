export class VerseNumber extends HTMLElement {
    constructor() {
      super()
    }
  
    connectedCallback() {
      this.classList.add('text-xs', 'font-bold', 'align-super', 'pr-0.5', 'text-indigo-800')
  
      const verse = this.getAttribute('data-verse')
  
      if (verse) {
        this.textContent = verse
        this.title = `Verse ${verse}` // optional tooltip
      }
    }
  }
  
  if (!customElements.get('v-num')) {
    customElements.define('v-num', VerseNumber)
  }
  