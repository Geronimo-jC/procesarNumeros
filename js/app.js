const mainList = []

const addNumber = (event) => {
    event.preventDefault()
    const number = document.getElementById('number')
    mainList.push(Number(number.value))
    document.getElementById('numberList').innerHTML = ''
    number.value = ''
    showList()
}

const showList = () => {
    const table = document.getElementById("numberList")
    mainList.map((e, i) => {
        table.innerHTML += `
        <tr>
        <th>${i}</th>
        <td>${e}</td>
        </tr>
        `
    })
}

const processList = () => {
    let total = 0
    mainList.map(e => total += e)
    let promedy = total / mainList.length
    let min = Math.min(...mainList)
    let max = Math.max(...mainList)
    const list = document.getElementById('processList')
    list.innerHTML = `
        <li>Suma total: ${total}</li>
        <li>Promedio: ${promedy}</li>
        <li>Minimo: ${min}</li>
        <li>Maximo: ${max}</li>

        `
}