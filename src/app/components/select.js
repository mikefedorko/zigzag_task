import { getSelectorTemplate } from '../helpers/getSelectorTemplate'

export class Select {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.options = options
        this.render()
        this.setup()
        this.selectedId = null
    }

    render() {
        const {placeholder, data, selectedId} = this.options
        this.$el.classList.add('modal-select')
        this.$el.innerHTML = getSelectorTemplate(data, placeholder, selectedId)
    }

    setup() {
        this.clickHandler = this.clickHandler.bind(this)
        this.$el.addEventListener('click', this.clickHandler)
        this.$arrow = this.$el.querySelector('[data-type="arrow"]')
        this.$value = this.$el.querySelector('[data-type="value"]')
        this.$icon = this.$el.querySelector('[data-type="icon"]')
    }

    clickHandler(event) {
        const { type } = event.target.dataset
        switch (type) {
            case 'input':
            case 'value':
            case 'arrow':
                this.toggle()
                break
            case 'item':
                const id = event.target.dataset.id
                this.select(id)
                break
            case 'itemInList':
                const parentId = event.target.parentNode.dataset.id
                this.select(parentId)
                break
            default:
                break
        }
    }

    get current() {
        return this.options.data.find(item => (item.id === +this.selectedId))
    }

    select(id) {
        this.selectedId = id
        this.$value.textContent = this.current.value
        const classNamesArray = this.$icon.className.split(' ')
        this.$icon.classList.remove(`${classNamesArray[0]}`, `${classNamesArray[1]}`)
        this.$icon.classList.add(`${this.current.icon.type}`, `${this.current.icon.name}`)
        this.$el.querySelectorAll('[data-type="item"]').forEach(element => element.classList.remove('selected'))
        this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected')
        this.close()
    }

    get isOpen() {
        return this.$el.classList.contains('open')
    }

    toggle() {
        this.isOpen ? this.close() : this.open()
    }

    open() {
        this.$el.classList.add('open')
        this.$arrow.classList.remove('fa-sort-down')
        this.$arrow.classList.add('fa-sort-up')
    }

    close() {
        this.$el.classList.remove('open')
        this.$arrow.classList.remove('fa-sort-up')
        this.$arrow.classList.add('fa-sort-down')
    }
}