


// 17.12.2020
// added createForm function,added createEl Function,
// added reset/delete values after clicking
// added when values are missing alert comes up
// added can not enter letters in number input field
// removed switch statement and added loop

// missing : clicking remove button should remove opjectitem from array
// missing: local storage


const classes = ["form-items", "input", "is-info"]
const insertForm = document.querySelector('.insertForm')
const table = document.querySelector('.tablez');
const buttonClass = ["button", "is-dark"];
const addBtn = document.getElementById('addBtn');

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


addBtn.addEventListener('click',function(){

 createForm();

addBtn.style.display="none";

        add.addEventListener('click',function(e){
            e.preventDefault();
            const title = document.getElementById('title');
            const author = document.getElementById('author');
            const pages = document.getElementById('pages');
            const completed = document.getElementById('completed');
            const image = document.getElementById('img-url');
            //checks if an input is missing
            if(!title.value||!author.value||!pages.value||!completed.value){
                alert('please input all values')
            }
            
            else{
             createEl(title,author,pages,completed,image);
            addBtn.style.display="inline"
    }
    
    
})});



function createEl(title,author,pages,completed,image){
        
        let addIt = new Book(title.value,author.value,pages.value,completed.value,image.value);
            myLibrary.push(addIt);
            // Library Array loop
            for(i;i < myLibrary.length;i++){
                
                ulElem = document.createElement('ul');
                ulElem.classList.add('ul-elem');
                // Button Finish
                const btnFin = document.createElement('button');
                btnFin.innerText="Finished"
                btnFin.classList.add(...buttonClass);
                
                    btnFin.addEventListener('click',function(e){
                    btnFin.parentElement.classList.toggle('line-through');
                });
                //Button Remove
                const btnRem = document.createElement('button');
                btnRem.innerText="Remove";
                btnRem.classList.add(...buttonClass);
                
                btnRem.addEventListener('click',function(e){
                    e.preventDefault();

                    btnRem.parentElement.remove();
                    
                })
                //Library Obejcts Loop
                for(let j in myLibrary[i]){
                    // check if input is a number
                    var regex = /^[a-zA-Z]+$/;
                    if(j==="pages" && myLibrary[i][j].match(regex) || j==="completed" && myLibrary[i][j].match(regex) ){
                        alert('please enter a number as value for Pages and also for completed')
                    }
                    else if(j==="image"){
                        ulElem.appendChild(btnRem);
                        ulElem.appendChild(btnFin);
                    }
                    
                    else{
                    liEle = document.createElement('li');
                    liEle.innerText = j+":"+myLibrary[i][j];
                    ulElem.appendChild(liEle);
                    table.appendChild(ulElem);
                    }
        } 
        //adding image
        console.log(myLibrary[i].image)
        const imageEl = document.createElement('img');
        //if book image url is missing add cusom book image
        if(!myLibrary[i].image){
            imageEl.src="image/book.jpeg";
            ulElem.appendChild(imageEl);
        }else{
        imageEl.src=myLibrary[i].image;
        ulElem.appendChild(imageEl);
    }
    // remove values from form after submitting a book
    title.value = "";
    author.value = "";
    image.value = "";
    completed.value = "";
    pages.value = "";
        }
};
        
// You can make the switch a function and call it with a different argument (book,author...)


// create the form element
function createForm(){
            const form = document.createElement('form');
            form.action=''
            const labelz = document.createElement('label');
            const add = document.createElement('button')
            add.setAttribute('id','add');
            
            add.innerText="add Book";
            labelz.classList.add('form');
            form.appendChild(labelz)
            const getTitle = document.createElement('input');
            getTitle.classList.add(...classes);
            getTitle.setAttribute('id','title');
            getTitle.setAttribute('placeholder','Title');
            getTitle.setAttribute('name','title');
            getTitle.setAttribute('type','text');
            
            const getAuthor = document.createElement('input');
            getAuthor.classList.add(...classes);
            getAuthor.setAttribute('id','author');
            getAuthor.setAttribute('name','author');
            getAuthor.setAttribute('type','text');
            getAuthor.setAttribute('placeholder','Author');

            const getPages = document.createElement('input');
            getPages.classList.add(...classes);
            getPages.setAttribute('id','pages');
            getPages.setAttribute('name','pages');
            getPages.setAttribute('type','text');
            getPages.setAttribute('placeholder','Nr or Pages');


            const getCompleted = document.createElement('input');
            getCompleted.classList.add(...classes);
            getCompleted.setAttribute('id','completed');
            getCompleted.setAttribute('name','completed');
            getCompleted.setAttribute('type','text');
            getCompleted.setAttribute('placeholder','Pages read');

            const getImage = document.createElement('input');
            getImage.classList.add(...classes);
            getImage.setAttribute('id','img-url');
            getImage.setAttribute('name','img-url');
            getImage.setAttribute('type','text')
            getImage.setAttribute('placeholder','link to an book image');
            

            labelz.appendChild(getTitle);
            labelz.appendChild(getAuthor);
            labelz.appendChild(getPages);
            labelz.appendChild(getCompleted);
            labelz.appendChild(getImage);
            labelz.appendChild(add);
            insertForm.appendChild(form);
            
            
}

