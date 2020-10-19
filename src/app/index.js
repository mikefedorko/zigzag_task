// SASS
import '../style/app.scss';

// JS
import { Select } from './components/select'
import { Checkbox } from './components/checkbox'
import { Modal } from './components/modal'
import './helpers/countDownTimer'

const modal = new Modal('#absolute')

const checkbox = new Checkbox('#checkboxes', {
    data: [
        {id: 5, refil: '50', get: '100', checkboxOptions: {id: 'styled-checkbox-1', value: '100'}},
        {id: 6, refil: '500', get: '1000', checkboxOptions: {id: 'styled-checkbox-2', value: '1000'}},
        {id: 7, refil: '100', get: '200', checkboxOptions: {id: 'styled-checkbox-3', value: '200'}},
    ]
})

const select = new Select('#select', {
    placeholder: 'Выберите способ оплаты',
    selectedId: 1,
    data: [
        {id: 1, value: 'Банковская карта', icon: { type: 'fas', name:'fa-credit-card' }},
        {id: 2, value: 'Биткоин', icon: { type: 'fab', name:'fa-bitcoin' }},
        {id: 3, value: 'Выставить счет', icon: { type: 'fas', name:'fa-receipt' }}
    ]
})

window.m = modal
window.s = select
window.c = checkbox