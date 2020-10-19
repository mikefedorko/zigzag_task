import { getCheckboxTemplate } from "../helpers/getCheckboxTemplate"
 
export class Checkbox {
    constructor(checkbox, options) {
        this.$el = document.querySelector(checkbox)
        this.$sum = document.querySelector('.modal-sum__amount')
        this.$rp = document.querySelector('.replenishment')
        this.options = options
        this.render()
        this.setup()
    }

    render() {
        const { data } = this.options
        this.$el.classList.add('modal-checkboxes')
        this.$el.innerHTML = getCheckboxTemplate(data)
    }

    setup() {
        this.clickHandler = this.clickHandler.bind(this)
        this.checkInfoHandler = this.checkInfoHandler.bind(this)
        this.$checkbox = this.$el.querySelectorAll('[data-type="checkbox"]').forEach(element => {
            element.addEventListener('click', this.clickHandler)
        })
        this.$btn = this.$rp.addEventListener('click', this.checkInfoHandler)
    }

    checkInfoHandler() {
        const selectorTxt = document.querySelector('[data-type="value"]').textContent
        alert(`${this.$sum.textContent} ${selectorTxt}`)
    }

    checkTotal() {
        let sum = 0
        for (let i=0; i < this.$el.querySelectorAll('[data-type="checkbox"]').length; i++) {
            if (this.$el.querySelectorAll('[data-type="checkbox"]')[i].checked) {
                sum = sum + parseInt(this.$el.querySelectorAll('[data-type="checkbox"]')[i].value);
            }
        }
        this.$sum.textContent = `$${sum.toFixed(2)}`
    }

    toggle(nodeInput) {
        if(nodeInput.hasAttribute('checked')) {
            nodeInput.removeAttribute('checked')
            nodeInput.parentElement.style.removeProperty('transform');
            nodeInput.parentElement.style.cssText = 'border: 2px solid #91ACD4'
        } else {
            nodeInput.setAttribute('checked', true)
            nodeInput.parentElement.style.cssText = 'transform: scale(1.2); border: 2px solid #83F6B1'
        }
    }

    clickHandler(event) {
        this.toggle(event.target)
        this.checkTotal()
    }
}