// selectors
const todoInput = document.querySelector('.todo-input')
const todoForm = document.querySelector('.todo-form')
const todoList = document.querySelector('.todo-list')
const todoFilter = document.querySelector('.todo-select')

// add new todo
todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    // create div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-item')

    // create check button
    const completeButton = document.createElement('button')
    completeButton.classList.add('todo-complete')
    completeButton.innerHTML = `<i class="fa-regular fa-square"></i>`
    todoDiv.appendChild(completeButton)

    // create li
    const newLi = document.createElement('li')
    newLi.classList.add('todo-li')
    newLi.innerText = todoInput.value.trim()
    todoDiv.appendChild(newLi)

    // create check button
    const trashButton = document.createElement('button')
    trashButton.classList.add('todo-trash')
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`
    todoDiv.appendChild(trashButton)

    // input value cleaning
    todoInput.value = ''

    // append list
    todoList.append(todoDiv)
})

// trash and complete buttons
todoList.addEventListener('click', e => {
    e.preventDefault()
    
    const item = e.target

    // complete button
    if(item.classList.contains('todo-complete')){
        const todo = item.parentElement;
        
        if(!todo.classList.contains('completed')){
            todo.classList.add('completed')
            item.innerHTML = `<i class="fa-regular fa-square-check"></i>`
        } else{
            todo.classList.remove('completed')
            item.innerHTML = `<i class="fa-regular fa-square"></i>`
        }
    }

    // trash button
    if(item.classList.contains('todo-trash')){
        const todo = item.parentElement;
        todo.classList.add('deleted')
        todo.addEventListener('transitionend', e => {
            todo.remove()
        })
    }
})

// filter
todoFilter.addEventListener('click', e => {
    const todos = todoList.childNodes
    
    todos.forEach(todo => {
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex'
                break;

            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex'
                } else{
                    todo.style.display = 'none'
                }
                break;

            case 'uncompleted':
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex'
                } else{
                    todo.style.display = 'none'
                }
                break;
        }
    })
})