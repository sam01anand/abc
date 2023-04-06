function addnewWeField() {
    console.log("Adding New Field")
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.setAttribute("placeholder", "Enter here");
    newNode.setAttribute("rows", 2);
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    if (!weAddButtonOb || !weOb.contains(weAddButtonOb)) {
        weOb.appendChild(newNode);
    } else {
        weOb.insertBefore(newNode, weAddButtonOb);
    }
}
// restrict to only 10 digits number code 
const contactField = document.getElementById("contactField");

contactField.addEventListener("input", () => {
    if (contactField.value.length > 10) {
        contactField.value = contactField.value.slice(0, 10);
    }
});

// function to add more academic qualification
function addnewAQField() {
    console.log("Adding New Field")
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.setAttribute("placeholder", "Enter here");
    newNode.classList.add("eqfield");
    newNode.setAttribute("rows", 2);
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    if (!aqAddButtonOb || !aqOb.contains(aqAddButtonOb)) {
        aqOb.appendChild(newNode);
    } else {
        aqOb.insertBefore(newNode, aqAddButtonOb);
    }
}
function validateFile(input) {
    const allowedTypes = ['image/jpeg'];
    if (!allowedTypes.includes(input.files[0].type)) {
        alert('Only JPG files are allowed.');
        input.value = '';
    }
}

function generateCV() {
    //console.log("generating CV");
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    document.getElementById('nameT2').innerHTML = nameField;
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    //for links social media
    document.getElementById("gtT").innerHTML = document.getElementById("gitfield").value;
    document.getElementById("quoraT").innerHTML = document.getElementById("quorafield").value;
    document.getElementById("linkT").innerHTML = document.getElementById("LinkedinField").value;

    //objective part
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
    //work experience
    let wes = document.getElementsByClassName('wefield');
    let str = '';
    for (let e of wes) {
        str = str + ` <li> ${e.value} </li> `;
    }
    document.getElementById('weT').innerHTML = str;

    //academic part
    let aqs = document.getElementsByClassName('eqfield')
    let str1 = ''
    for (let e of aqs) // why we used e in both wes and aqs so to know as it is used in let its scoped variable used in only brackets.
    {
        str1 = str1 + `<li> ${e.value} </li> `;

    }
    document.getElementById('aqT').innerHTML = str1;

    //for displaying 
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = "block";
    //code for setting profile photo
    let file = document.getElementById('imgfield').files[0];
    console.log(file);

    let reader = new FileReader()
    reader.readAsDataURL(file);
    console.log(reader.result);

    // set the image to template
    reader.onloadend = function () {
        document.getElementById('imgTemp').src = reader.result;
    };

}



// printcv

function printCV() {
    window.print();
}
