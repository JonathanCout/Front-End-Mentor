const form = document.querySelector('#form')
const billInput = document.querySelector('#billCost')
const gridButtons = document.querySelectorAll('[data-btn]')
const customInput = document.querySelector('[data-input]')
const peopleInput = document.querySelector('#peopleTotal')
const tipAmount = document.querySelector('[data-tip]')
const totalAmount = document.querySelector('[data-total]')
const text = document.createElement('p')
const resetBtn = document.querySelector('[data-reset-btn]')
let tipValue = 0
let tipPerPerson
let totalPerPerson

const getBtnValue = (btn) => {
    tipValue = parseInt(btn.textContent) / 100  
}

gridButtons.forEach(btn => {
    btn.addEventListener('click',() => {
        getBtnValue(btn)
        triggerEvent()
    })
})

customInput.addEventListener('keyup', () => {
    tipValue = customInput.value / 100
    triggerEvent()
})

const validator = () => {
    text.innerText = "Can't be zero"
    peopleInput.previousElementSibling.appendChild(text)
}

const calculator = () => {
    tipPerPerson = billInput.value * tipValue / peopleInput.value
    totalPerPerson = tipPerPerson + (billInput.value / peopleInput.value)
}

const showValues = () => {
    calculator()
    tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`
    totalAmount.textContent = `$${totalPerPerson.toFixed(2)}`
}
const triggerEvent = () => {
    if(peopleInput.value ==0) {
        validator()
        return
    }
    text.remove()
    showValues()
}
peopleInput.addEventListener('keyup', triggerEvent)

resetBtn.addEventListener('click',() => {
    form.reset()
    tipAmount.textContent = '$0.00' 
    totalAmount.textContent = '$0.00'
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
})


