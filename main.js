let form = document.querySelector('form')
let input = document.querySelector('input')
let ul = document.querySelector('ul')

const saveTodo = (e) => {
    e.preventDefault()

    let li = document.createElement('li')
    li.innerText = input.value 
    li.className = "my-2 p-4 flex items-center justify-between rounded-md shadow-xl bg-white border border-gray-400"
    let button = document.createElement('button')
    button.innerHTML = "delete"
    button.className = "delete bg-red-500 hover:bg-red-600 cursor-pointer p-1 rounded-md text-white text-sm"
    ul.appendChild(li)
    li.appendChild(button)


    form.reset()
    
}

form.addEventListener("submit" , saveTodo)



const removeTodo = (e) => {
    if(e.target.className.includes("delete")){
        ul.removeChild(e.target.parentElement)
    }
     
}

ul.addEventListener("click" , removeTodo)