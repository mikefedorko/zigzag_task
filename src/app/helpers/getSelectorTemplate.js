export const getSelectorTemplate = (data = [], placeholder, selectedId) => {
    let text = placeholder ? placeholder : "Placeholder по умолчанию"

    const items = data.map(({icon, value, id}) => {
        let cls = ''
        if(id === selectedId) {
            text = value
            cls = 'selected'
        }
        return `
            <li class="modal-select__item ${cls}" data-type="item" data-id="${id}">
                <i class="${icon.type} ${icon.name}"></i>
                <span data-type="itemInList">${value}</span>
            </li>
            `
    })
    const inpImg = data.find(item => item.id === selectedId)

    return `
        <div class="modal-select__input" data-type="input">
            <i data-type="icon" class="${selectedId ? (inpImg.icon.type + ' ' + inpImg.icon.name)  : 'fas fa-money-bill-wave'}"></i>
            <span data-type="value">${text.trim()}</span>
            <i class="fas fa-sort-down" data-type="arrow"></i>
        </div>
        <div class="modal-select__dropdown">
            <ul class="modal-select__list">
                ${items.join('')}
            </ul>
        </div>
    `
}