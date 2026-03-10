let sectionElementContainer = document.getElementById("select-elements-container");
let noteSelector = document.getElementById("note-selector");
let createNoteTab = document.getElementById("create-note-tab")
let saveNoteButton = document.getElementById("save-note");
let headerText = document.getElementById("header-text");
let taskSelector = document.getElementById("task-selector")
let createTaskTab = document.getElementById("create-task-tab")
let saveTaskButton = document.getElementById("save-task")


noteSelector.addEventListener("click", ()=>{
    sectionElementContainer.style.display = "none";

    createNoteTab.style.display = "block";
    saveNoteButton.style.display = "block";
    headerText.textContent = "Create Note";
})

taskSelector.addEventListener("click", ()=>{
    sectionElementContainer.style.display = "none";

    createNoteTab.style.display = "block";
    saveNoteButton.style.display = "block";
    headerText.textContent = "Create Note";
})


























