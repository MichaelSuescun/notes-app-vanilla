const form = document.querySelector('#form-notes')
const notesContainer = document.querySelector('.notes-container')
const noteTemplate = document.querySelector('#note-template')

// const titleContainer = document.querySelector('#field-title')
// const titleInput = titleContainer.querySelector('#title')
const titleInput = document.querySelector('#title')

// const descriptionContainer = document.querySelector('#field-description')
// const descriptionInput = descriptionContainer.querySelector('#description')
const descriptionInput = document.querySelector('#description')

const classError = 'error'

const notes = []

const checkInput = (element, classError) => {
  // const { parentElement } = element

  if (element.value == 0) {
    element.parentElement.classList.add(classError)
  } else {
    element.parentElement.classList.remove(classError)
  }

  return element.parentElement.classList.contains(classError)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const titleCheck = checkInput(titleInput, classError)
  const descriptionCheck = checkInput(descriptionInput, classError)

  if (titleCheck || descriptionCheck) {
    throw new Error('Campo vacío')
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