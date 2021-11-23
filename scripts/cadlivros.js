const checkDataBook =
{
    bookName: false,
    bookAuthor: false,
    bookGender: false,
    bookImage: false,
    bookDescription: false
}

$("#bookName").change(() => {
    const bookName = document.getElementById("bookName").value;
    $("#invalidBookName").css({ display: 'none' });
    if (bookName == "" || bookName.length > 50) {
        $("#invalidBookName").css({ display: "block" });
        checkDataBook.bookName = false;
    }
    else {
        checkDataBook.bookName = true;
    }
    enableSubmitButton();
    console.log(checkDataBook);
});

$("#bookAuthor").change(() => {
    const bookAuthor = document.getElementById("bookAuthor").value;
    $("#invalidAuthor").css({ display: 'none' });
    if (bookAuthor == "" || bookAuthor.length > 50) {
        $("#invalidAuthor").css({ display: "block" });
        checkDataBook.bookAuthor = false;
    }
    else {
        checkDataBook.bookAuthor = true;
    }
    enableSubmitButton();
    console.log(checkDataBook);
});

$("#bookGender").change(() => {
    const bookGender = document.getElementById("bookGender").value;
    $("#invalidGender").css({ display: 'none' });
    if (bookGender.length < 1) {
        $("#invalidGender").css({ display: "block" });
        checkDataBook.bookGender = false;
    }
    else {
        checkDataBook.bookGender = true;
    }
    enableSubmitButton();
    console.log(checkDataBook);
});

$("#bookImage").change(() => {
    const bookImage = document.getElementById("bookImage").value;
    $("#invalidImage").css({ display: 'none' });
    if (validURL(bookImage)) {
        $("#invalidImage").css({ display: "block" });
        checkDataBook.bookImage = false;
    }
    else {
        checkDataBook.bookImage = true;
    }
    enableSubmitButton();
    console.log(checkDataBook);
});

$("#bookDescription").change(() => {
    const bookDescription = document.getElementById("bookDescription").value;
    $("#invalidBookDescription").css({ display: 'none' });
    if (bookDescription == "" || bookDescription.length > 1000) {
        $("#invalidBookDescription").css({ display: "block" });
        checkDataBook.bookDescription = false;
    }
    else {
        checkDataBook.bookDescription = true;
    }
    enableSubmitButton();
    console.log(checkDataBook);
});

function validURL(str) {
    let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !pattern.test(str);
}

const enableSubmitButton = () => {
    let enable = true;
    Object.keys(checkDataBook).forEach(key => {
        console.log('key', key);
        if (!checkDataBook[key]) {
            enable = false;
        }
    });
    if (enable) {
        document.getElementById('submitButton').disabled = false;
    }
    else {
        document.getElementById('submitButton').disabled = true;
    }
}
const showBooks = (books) => 
{
    for (let i=0;i<books.length;i++){
    let tagDivCard = document.createElement("div");
    tagDivCard.setAttribute("class", "col-10 mt-2");

    let tagImage = document.createElement("img");
    tagImage.setAttribute("class", "card-img-top");
    tagImage.setAttribute("src", books[i].bookImage);
    tagImage.setAttribute("alt", "Imagem do produto");

    tagDivCard.appendChild(tagImage);

    let tagDivCardBody = document.createElement("div");
    tagDivCardBody.setAttribute("class", "card-body");
    tagDivCard.appendChild(tagDivCardBody);

    let tagH5 = document.createElement("h5");
    tagH5.setAttribute("class", "card-title text-left");
    tagH5.setAttribute("style", "width: 20rem;");
    let textNode = document.createTextNode(books[i].bookName);
    tagH5.appendChild(textNode);
    tagDivCardBody.appendChild(tagH5);

    let tagH6 = document.createElement("h6");
    tagH6.setAttribute("class", "text-left ");
    textNode = document.createTextNode(books[i].bookGender);
    tagH6.appendChild(textNode);
    tagDivCardBody.appendChild(tagH6);

    tagH6 = document.createElement("h6");
    tagH6.setAttribute("class", "card-text text-left");
    textNode = document.createTextNode(books[i].bookAuthor);
    tagH6.appendChild(textNode);
    tagDivCardBody.appendChild(tagH6);

    tagP = document.createElement("p");
    tagP.setAttribute("class", "card-text text-left");
    tagP.setAttribute("class", "text-justify font-italic");
    tagP.setAttribute("style", "width: 18rem;");
    textNode = document.createTextNode(books[i].bookDescription);
    tagP.appendChild(textNode);
    tagDivCardBody.appendChild(tagP);
    
    let tagDivCardComment = document.createElement("div");
    tagDivCardComment.setAttribute("class", "discucao mb-5 ");
    tagDivCardBody.appendChild(tagDivCardComment);
     
    let tagDivDropd = document.createElement("div");
    tagDivCardComment.setAttribute("class", "dropdown-divider ");
    tagDivCardBody.appendChild(tagDivDropd);

    tagH6 = document.createElement("h6");
    tagH6.setAttribute("class", "card-text text-left");
    textNode = document.createTextNode('Comentarios');
    tagH6.appendChild(textNode);
    tagDivCardComment.appendChild(tagH6);
    
    // tagP = document.createElement("p");
    // textNode = document.createTextNode(books[i].bookComment);
    // tagP.appendChild(textNode);
    // tagDivCardBody.appendChild(tagP);

    //console.log(tagDivCard);

    div = document.getElementById('books');
    div.appendChild(tagDivCard);
    }
}


const fetchBooks = () => {
    // console.log("Script Fetch Products");
    fetch("http://localhost:5000/getbook.php")
    .then((response) => {
        if(response.status >= 200 && response.status<300){
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then((books) => {
        console.log(books);
        teste();
        showBooks(books);
        console.log(books);
        // document.getElementById ("products").innerHTML = response[0].productName;

    })
    .catch((error) => {
        console.log(error);
    });
}

function teste(){
    const livros =[{ bookName:'joão pé de feijão', autor:'josé', genero:'fantasia', descricao:'asdasdjbasbdah'},
    { nome:'assdasd', autor:'sdasdas', genero:'ação', descricao:'asdasdjsaasddbasbdah'},
    { nome:'cccccd', autor:'dddddd', genero:'romance', descricao:'asdasdjsaasddbasbdasadasdasdas'},]
    console.log(livros);
    const livrosAux = livros.filter ((livro)=> livro.genero === 'romance');
    console.log(livrosAux);
}



