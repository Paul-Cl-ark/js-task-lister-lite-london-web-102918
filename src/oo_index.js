// View

document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList()

  const formEl = document.querySelector('#create-task-form')
  formEl.addEventListener("submit", addToDo)
  const listEl = document.querySelector('#tasks')
  const inputEl = document.querySelector('#new-task-description')

  function addToDo (event) {
    event.preventDefault()

    // create the li
    let newToDo = document.createElement('li')
    let newDeleteBut = document.createElement('button')

    // use submitted text to put inside the li
    newToDo.innerHTML = inputEl.value
    newDeleteBut.innerHTML = "x"
    // append the new ToDo to the list
    listEl.appendChild(newToDo)
    newToDo.appendChild(newDeleteBut)
    newDeleteBut.addEventListener('click', deleteToDo)
    inputEl.value = ''
  }

  function deleteToDo (event) {
    event.target.parentNode.remove()
  }
})
