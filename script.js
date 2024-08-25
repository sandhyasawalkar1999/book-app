let catoagory = document.getElementById('catagory');
// let bestSeller =;


async function getCatagory(){

    let responce = await fetch('https://books-backend.p.goit.global/books/category-list');

    let data = await responce.json();

    // console.log(data);

    const html =[{ list_name : "All Categories"},...data].map((item) =>{
        return `<a> ${item.list_name}</a>`;
    }).join("");

    catoagory.innerHTML = html;
}

async function getBooks() {

    const fetchBook = await fetch('https://books-backend.p.goit.global/books/top-books');

    const book = await fetchBook.json();

    console.log(book);
    displayBooks(book);

    
}

function displayBooks(data){
    
    const html =`<div class="heading">
                <h1> Best Seller Book </h1>
                ${data.map(books =>{
                    return`<div class="book"> <h3> ${books.list_name}</h3>
                    ${books.books.map(book =>{
                        return `
                        <img class="photo" src = ${book.book_image}>
                        <a> ${book.title}</a>
                        <a> ${book.author}</a> `
                        }).join("")}
                        </div> `
                }).join("")
            }
            </div> `
        

        document.getElementById('bestSeller').innerHTML=html;
        console.log(html);
}





getBooks();
getCatagory();