//Theme setting
const buttonState = document.getElementById("nightBtn")
buttonState.addEventListener("click", function(){
    if(document.body.className === "day"){
        document.body.className = "night";
        buttonState.innerText = "Day Mode";
    }
    else{
        document.body.className = "day";
        buttonState.innerText = "Night Mode";
    }
});

//Submit btn
const form = document.querySelector("form");
const userUploadsDiv = document.querySelector(".userUploads");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const title = document.getElementById("title").value;
    const coverInput = document.getElementById("cover");

    if (!coverInput.files[0]) {
        alert("Select a cover image");
        return;
    }

    const coverURL = URL.createObjectURL(coverInput.files[0]);

    const bookDiv = document.createElement("div");
    bookDiv.classList.add("uploadedBook");

    const img = document.createElement("img");
    img.src = coverURL;

    const titleEl = document.createElement("div");
    titleEl.classList.add("title");
    titleEl.textContent = title;

    //Appending
    bookDiv.appendChild(img);
    bookDiv.appendChild(titleEl);

    userUploadsDiv.appendChild(bookDiv);

    //Reset
    form.reset();
});

