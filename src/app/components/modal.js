export class Modal {
    constructor(btn) {
        this.$el = document.querySelector(btn)
        this.$modal = document.querySelector('.modal-container')
        this.$closeIc = document.querySelector('.modal-header__close')
        this.$el.addEventListener('click', () => this.open())
        this.$closeIc.addEventListener('click', () => this.close() )
    }
    
    open() {
        this.$modal.classList.add('open')
    }

    close() {
        this.$modal.classList.remove('open')
    }
}