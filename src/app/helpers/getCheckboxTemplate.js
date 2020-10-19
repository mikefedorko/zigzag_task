export const getCheckboxTemplate = (data) => {
    const items = data.map(({ id, refil, get, checkboxOptions }) => {
        return `
            <div class="modal-checkboxes__container" key=${id}>
                <div class="modal-checkboxes__refil">
                    <span>Пополнить на</span>
                    <h2>${refil}$</h2>
                </div>
                <div class="modal-checkboxes__get">
                    <span>Получить</span>
                    <h2>${get}$</h2>
                </div>
                <input class="styled-checkbox" data-type="checkbox" id="${checkboxOptions.id}" type="checkbox" value="${checkboxOptions.value}">
                <label for="${checkboxOptions.id}"></label>
            </div>
        `
    })

    return items.join('')
}