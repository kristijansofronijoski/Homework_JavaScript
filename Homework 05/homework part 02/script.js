/* Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

Already read 'The Robots of dawn' by Isaac Asimov. (if true)
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
Bonus: enter the values from prompt() */

let book = {
    title: "",
    author: "",
    readingStatus: true,

    result: function(){
        if(this.readingStatus){
            console.log(`You have already read` + ` ${this.title}`);
        }else {
            console.log(`You still need to read` + ` ${this.title}`);
        }
    }
}

function Book(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;

    this.result = function () {
        if (this.readingStatus) {
            console.log(`You have already read "${this.title}".`);
        } else {
            console.log(`You still need to read "${this.title}".`);
        }
    };
}

let books = [] ;
for(let i = 0; i <2; i++)
{
  let title =  window.prompt(`Enter the name of the "${i+1}" book`);
  let author = window.prompt(`Enter the name of the "${i+1}" author`);
  let readines = window.prompt(`Have you read the book?`);
  let readingStatus = false;
  if(readines == "Yes" || readines ==  "yes")
  {
    readingStatus = true;
  }
  else 
  {
    readingStatus = false;
  }
  let newBook = new Book(title, author, readingStatus);
  books.push(newBook);
}

for(let kniga of books)
{
    kniga.result();
}
