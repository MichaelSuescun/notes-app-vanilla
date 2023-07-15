const form = document.querySelector('.form-notes')
const notesContainer = document.querySelector('.notes-container')
const noteTemplate = document.querySelector('#note-template')
const titleInput = document.querySelector('#title')
const descriptionInput = document.querySelector('#description')
const classError = 'error'

const checkInput = (inputElement, classError) => {
  if (inputElement.value == 0) {
    inputElement.parentElement.classList.add(classError)
  } else {
    inputElement.parentElement.classList.remove(classError)
  }

  return inputElement.parentElement.classList.contains(classError)
}

// Agregar nota
form.addEventListener('submit', (e) => {
  e.preventDefault()

  const titleCheck = checkInput(titleInput, classError)
  const descriptionCheck = checkInput(descriptionInput, classError)

  if (titleCheck || descriptionCheck) {
    return
  }

  const newNote = noteTemplate.content.cloneNode(true)
  const newNoteTitle = newNote.querySelector('.note__title')
  const newNoteDescription = newNote.querySelector('.note__description')

  newNoteTitle.insertAdjacentText('beforeend', titleInput.value)
  newNoteDescription.insertAdjacentText('beforeend', descriptionInput.value)

  notesContainer.prepend(newNote)

  form.reset()
  titleInput.focus()
})

// Remover nota
// notesContainer.addEventListener('click', (e) => {
//   const note = e.target

//   if (e.target.classList.contains('note')) {
//     const button = note.querySelector('.note__button')
//     button.classList.toggle('note__button--hidden')
//   }
// })