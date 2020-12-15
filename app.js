const add = document.getElementById('add');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const completed = document.getElementById('completed');
const image = document.getElementById('img-url');
const table = document.querySelector('.tablez');

let myLibrary = [];
//class Book
function Book(title,author,pages,completed,image){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.completed = completed;
    this.image = image;
    
}

let i=0;

add.addEventListener('click',function(e){
        e.preventDefault();
        let addIt = new Book(title.value,author.value,pages.value,completed.value,image.value);
            myLibrary.push(addIt);
            // Library Array loop
            for(i;i < myLibrary.length;i++){
                
                ulElem = document.createElement('ul');
                ulElem.classList.add('ul-elem');
                // Button Finish
                const btnFin = document.createElement('button');
                btnFin.innerText="Finished"
                    btnFin.addEventListener('click',function(e){
                    btnFin.parentElement.classList.toggle('line-through');
                     });
                //Button Remove
                const btnRem = document.createElement('button');
                btnRem.innerText="Remove"
                btnRem.addEventListener('click',function(e){
                    e.preventDefault();
                    
                })
                //Library Obejcts Loop
                for(let j in myLibrary[i]){
                    switch(j) {
                        case "image":
                            break;
                        case "title":
                            liEle = document.createElement('li');
                            liEle.innerText = "Title:"+myLibrary[i][j];
                            ulElem.appendChild(liEle);
                            ulElem.appendChild(btnRem);
                            ulElem.appendChild(btnFin);
                    table.appendChild(ulElem);
                                break;
                        case "author":
                            liEle = document.createElement('li');
                            liEle.innerText = "Author:"+myLibrary[i][j];
                            ulElem.appendChild(liEle);
                            ulElem.appendChild(btnRem);
                            ulElem.appendChild(btnFin);
                    table.appendChild(ulElem);
                                    break;
                        case "pages":
                            liEle = document.createElement('li');
                            liEle.innerText = "Pages: "+myLibrary[i][j];
                            ulElem.appendChild(liEle);
                            ulElem.appendChild(btnRem);
                            ulElem.appendChild(btnFin);
                    table.appendChild(ulElem);
                                        break;
                        case "completed":
                            liEle = document.createElement('li');
                            liEle.innerText = "Pages read: "+myLibrary[i][j];
                            ulElem.appendChild(liEle);
                            ulElem.appendChild(btnRem);
                            ulElem.appendChild(btnFin);
                    table.appendChild(ulElem);
                            break;


                    }

                    // if(j == "image"){
                    //     return
                    // }
                    // else {
                    // liEle = document.createElement('li');
                    // liEle.innerText = myLibrary[i][j];
                    // ulElem.appendChild(liEle);
                    // }
                    // ulElem.appendChild(btnRem)
                    // ulElem.appendChild(btnFin)
                    // table.appendChild(ulElem)
                   
        } const imageEl = document.createElement('img');
        imageEl.src=myLibrary[i].image;
        ulElem.appendChild(imageEl);
        }})



