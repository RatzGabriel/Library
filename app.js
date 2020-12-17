// @Gabriel84 Hello, congrats on completing the project. I like that you are able to add a photo of the book
//  as well as how many pages you've already read. You can make a form which pops up whenever a button is clicked 
//  (the form will take the information about the book). One problem I found is that I can submit empty books and I
//   can write letters on the pages input. About the code I would split some of it's part it into different functions so it's 
//   easier to maintain, upgrade and also can be reused. Also when I click the remove button I remove the book from the screen
//    but not from the array (myLibrary) which can cause headaches when implementing  localStorage.
//    Also when a book is submited it will be nice to clear/reset the value of all inputs.
//    For me I'll say using a switch statement wasn't really the best approach (In my opinion) as it makes the code a bit less readable.
// You could have used a class for Book and use the default constructor function as that is more optimized by the engine,
// S460heute um 13:46 Uhr
// I agree. You can make the switch a function and call it with a different argument (book,author...)
// form which pops up when a button is clicked. (the form will take the information about the book)
// I can submit empty books and I can write letters on the pages input.
// I would split some code into different functions
// when clicking remove, it removes it from screen but not from array
// clear/reset values of all inputs
// switch statement   class for Book and use the default constructor function
// You can make the switch a function and call it with a different argument (book,author...)


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
        
      
        createEl(title,author,pages,completed,image);
        addBtn.style.display="inline"
        
    
    
})});


// add.addEventListener('click',function(e){
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
        if(!myLibrary[i].image){
            imageEl.src="image/book.jpeg";
            ulElem.appendChild(imageEl);
        }else{
        imageEl.src=myLibrary[i].image;
        ulElem.appendChild(imageEl);
    }
        
    title.value = "";
    author.value = "";
    image.value = "";
    completed.value = "";
    pages.value = "";
        }};
        ;




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