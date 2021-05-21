class ButtonCounter extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});

        shadowRoot.innerHTML = `
            <div>
                <span id="counter"></span>
                <button id="button"></button>
            </div>
        `;
        
        this.$counter = shadowRoot.querySelector('#counter');
        this.$button = shadowRoot.querySelector('#button');
        this.$button.addEventListener('click', () => {
            this.counter++;
            // this.buttonCounter && this.buttonCounter(this.counter);
        });
    }
    get label() {
        return this.getAttribute('label');
    }
    set label(value) {
        this.setAttribute('label', value);
    }
    
    get counter() {
        return this.getAttribute('counter');
    }
    set counter(value) {
        this.setAttribute('counter', value);
    }
    
    static get observedAttributes() {
        return ['label', 'counter'];
    }
    attributeChangedCallback() {
        this.render();
    }
    
    render() {
        this.$button.innerHTML = this.label;
        this.$counter.innerHTML = `You clicked me ${this.counter} times`;
    }
    
    connectedCallback() {
    }
    
    disconnectedCallback() {
        console.log('disconnectedCallback');
    }
    adoptedCallback() {
        console.log('adoptedCallback');
    }
}
customElements.define('button-counter', ButtonCounter)