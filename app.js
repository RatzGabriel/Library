


// value : true is in the card
// image link is not working 
// ULELEM link not working with img

// missing: local storage
const insertForm = document.querySelector('.insertForm')
const cardInput = document.querySelector('.cardInput');
const addBtn = document.getElementById('add');


myLibrary=[]

function Book(title,author,pages,completed,image){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.completed = completed;
    this.image = image;
    this.value = true;
    
}

add.addEventListener('click',function(e){
            e.preventDefault();
            const title = document.getElementById('title');
            const author = document.getElementById('author');
            const pages = document.getElementById('pages');
            const completed = document.getElementById('completed');
            const image = document.getElementById('img-url');
            
            if(!title.value||!author.value||!pages.value||!completed.value){
                alert('please input all values')
            }
            
            else{
             createEl(title,author,pages,completed,image);
             toggle();
             
    }
    
    
});


let i = 0;
function createEl(title,author,pages,completed,image){
        
        let addIt = new Book(title.value,author.value,pages.value,completed.value,image.value);
            myLibrary.push(addIt);
            // Library Array loop
            for(;i < myLibrary.length;i++){
                
                ulElem = document.createElement('ul')
                ulElem.setAttribute('id',i)
                ulElem.classList.add('ul-elem');
                
                
                const btnFin = document.createElement('button');
                btnFin.innerText="Finished"
                
                
            btnFin.addEventListener('click',function(e){
                console.log(myLibrary[this.parentElement.id])
                    if(myLibrary[this.parentElement.id].value===true){
                        myLibrary[this.parentElement.id].value=false
                    }else{
                        myLibrary[this.parentElement.id].value=true
                    }
                    btnFin.parentElement.classList.toggle('line-through');
                });

                
                const btnRem = document.createElement('button');
                btnRem.innerText="Remove";
                
            btnRem.addEventListener('click',function(e){
                    e.preventDefault();
                    let id = this.parentElement.id;
                    myLibrary.splice(id,1)
                    
                 this.parentElement.remove();
                 
                })
                
                for(let j in myLibrary[i]){
                    
                    let regex = /^[a-zA-Z]+$/;
                    if(j === "pages" && myLibrary[i][j].match(regex) || j==="completed" && myLibrary[i][j].match(regex) ){
                        alert('please enter a number as value for Pages and also for completed')
                    }
                    else if(j==="image"){
                        ulElem.appendChild(btnRem);
                        
                    } else if(j==="value"){
                        ulElem.appendChild(btnFin);
                    }
                    
                    else{
                    liEle = document.createElement('li');
                    liEle.innerText = j+":"+myLibrary[i][j];
                    ulElem.appendChild(liEle);
                    cardInput.appendChild(ulElem);
                    
                   

                    }
        } 
        const imageEl = document.createElement('img');
        if(!myLibrary[i].image){
            imageEl.src="image/book.jpeg";
            ulElem.appendChild(imageEl);
        }
        else{
            try{
                imageEl.src=myLibrary[i].image;
                ulElem.appendChild(imageEl);
                
                
              
            }
            catch (err) {
                alert('test')
                
            ulElem.appendChild(imageEl);
            }
            finally{
                imageEl.src=myLibrary[i].image;
                
            
            }


      
    }
    
    title.value = "";
    author.value = "";
    image.value = "";
    completed.value = "";
    pages.value = "";
        }
};
        
//modal
let btn = document.querySelector(".modal-button");
let modal = document.querySelector(".modal");
let cancel = document.querySelector(".cancel")

    function toggle() {
        modal.classList.toggle("show-modal")
    }

    function windowHandler(ev) {
        if(ev.target === modal){
            toggle()
        }
    }

    btn.addEventListener("click",toggle);
    cancel.addEventListener("click", toggle);
    window.addEventListener("click",windowHandler);



