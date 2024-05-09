//NOnoN0nOYes (Note taking app)

const notes = [];
//Save a note
function saveNote(content, id) {
  return notes.push( {content, id} )
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Clean kitchen", 3);
console.log(notes)

//Get a note
function getNote(id) {
  return notes.find(note => note.id === id);
}
const firstNote = getNote(2);
console.log(firstNote);

//Log out notes
function logOutNotesFormatted() {
  notes.forEach(note => {
    console.log(`The note with id: ${note.id}, has the following note text: ${note.content}`)
  }) 
}
logOutNotesFormatted(); 

//update note
function updateContentNote (id, newContentNote) {
  const updatedNotes = notes.map (note => {
    if (note.id === id) {
      return { ...note, content: newContentNote };
    } else {
      return note
    }
  })
  return updatedNotes
    
}
const updatedNotes = updateContentNote(1, 'Buy bread');
console.log(updatedNotes)

//Remove note
  function removeNote(id) {
    const newNotes = updatedNotes.filter(note => note.id !== id);
    return newNotes; // Update the original notes array
  }
  
  const newNotes = removeNote(2); // Remove the note with id 2
  console.log(newNotes); // Output the updated notes array