/*Note*/

const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=> {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "Capybara/delete-vector-icon.jpg";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
/*const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=> {
    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})*/



/*Flipbook*/

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

let currentLocation = 1;
let numOfPapers = 4;
let maxLocations = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-230px)";
    nextBtn.style.transform = "translateX(230px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)"
    } else {
        book.style.transform = "translateX(100%)"
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocations) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                closeBook();
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 4;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 3;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 2;
                break;
            case 5:
                openBook();
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 1;
                break;

            default:
                throw new Error("unknown state");
        }

        currentLocation--;
    }
}

//Cambio immagine



/*






const notesContainer1 = document.querySelector(".notes-container1");
const createBtn1 = document.querySelector(".btn1");
let notes1 = document.querySelectorAll(".input-box1");

function showNotes() {
    notesContainer1.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer1.innerHTML);
}

createBtn1.addEventListener("click", ()=> {
    let inputBox = document.createElement("p");
    inputBox.className = "input-box1";
    inputBox.setAttribute("contenteditable", "true");
    notesContainer1.appendChild(inputBox).appendChild(img);
})

notesContainer1.addEventListener("click", function(e) {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P") {
        notes1 = document.querySelectorAll(".input-box1");
        notes1.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
    


const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=> {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "Capybara/delete-vector-icon.jpg";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})*/

document.addEventListener('DOMContentLoaded', () => {
    const uploaders = [
        { inputId: 'img-input-1', displayId: 'img-display-1', storageKey: 'uploadedImage1' },
        { inputId: 'img-input-2', displayId: 'img-display-2', storageKey: 'uploadedImage2' },
        { inputId: 'img-input-3', displayId: 'img-display-3', storageKey: 'uploadedImage3' },
        { inputId: 'img-input-4', displayId: 'img-display-4', storageKey: 'uploadedImage4' },
        { inputId: 'img-input-5', displayId: 'img-display-5', storageKey: 'uploadedImage5' },
        { inputId: 'img-input-6', displayId: 'img-display-6', storageKey: 'uploadedImage6' }
    ];

    uploaders.forEach(uploader => {
        const imgInput = document.getElementById(uploader.inputId);
        const imgDisplay = document.getElementById(uploader.displayId);

        // Load the image from local storage if it exists
        const savedImage = localStorage.getItem(uploader.storageKey);
        if (savedImage) {
            imgDisplay.src = savedImage;
        }

        imgInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    const dataURL = reader.result;
                    localStorage.setItem(uploader.storageKey, dataURL);
                    imgDisplay.src = dataURL;
                };
                reader.readAsDataURL(file);
            }
        });
    });
});


//Scrivere nel FlipBook

const maxWords = 50;

        document.querySelectorAll('.writingSpace').forEach(writingSpace => {
            const id = writingSpace.getAttribute('data-id');
            const wordCount = document.querySelector(`.wordCount[data-id="${id}"]`);

            // Load saved content from local storage
            const savedContent = localStorage.getItem(`writingSpaceContent${id}`);
            if (savedContent) {
                writingSpace.innerHTML = savedContent;
                updateWordCount(writingSpace, wordCount);
            }

            writingSpace.addEventListener('input', () => {
                let words = writingSpace.innerText.match(/\b[-?(\w+)?]+\b/gi);
                if (words && words.length > maxWords) {
                    // Prevent adding more words
                    let trimmedContent = words.slice(0, maxWords).join(' ');
                    writingSpace.innerText = trimmedContent;
                    placeCaretAtEnd(writingSpace);
                }
                updateWordCount(writingSpace, wordCount);
                // Save content to local storage
                localStorage.setItem(`writingSpaceContent${id}`, writingSpace.innerHTML);
            });
        });

        function updateWordCount(writingSpace, wordCount) {
            let words = writingSpace.innerText.match(/\b[-?(\w+)?]+\b/gi);
            if (words) {
                wordCount.textContent = `Words: ${words.length}/${maxWords}`;
            } else {
                wordCount.textContent = `Words: 0/${maxWords}`;
            }
        }

        function placeCaretAtEnd(el) {
            el.focus();
            if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
                let range = document.createRange();
                range.selectNodeContents(el);
                range.collapse(false);
                let sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
        