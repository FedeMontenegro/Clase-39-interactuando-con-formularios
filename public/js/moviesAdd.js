
    let _title = document.querySelector("#title");
    let _rating = document.querySelector("#rating");
    let _awards = document.querySelector("#awards");
    let _date = document.querySelector("#date");
    let _length = document.querySelector("#length");
    let _genre = document.querySelector("#genre");
    let _botonAgregar = document.querySelector(".botonAgregar");
    let _form = document.querySelector("section article form");
    let _p = document.querySelectorAll("p");

    let errors = [];


    _title.focus();

    _title.addEventListener("blur", (e) => {
        switch (true) {
            case !(_title.value.trim()):
                _title.classList.add("is-invalid");
                _title.placeholder = "Campo vacío.";
                break;
            default:
                _title.classList.remove("is-invalid");
                _title.classList.add("is-valid");
                _title.placeholder = "";
                break;
        }
    });

    _rating.addEventListener("blur", (e) => {
        console.log("blur")
        switch (true) {
            case !(_rating.value.trim()):
                _rating.classList.add("is-invalid");
                _rating.placeholder = "Campo vacío."
                console.log("rating");
                break;
            case _rating.value < 0 || _rating.value > 10:
                _rating.classList.add("is-invalid");
                _rating.placeholder = "Valor fuera de rango.";
                _rating.value = "";
                let ratingError = {
                    name: "rating",
                    msg: _rating.placeholder
                }
                let _error = errors.find(element => element.name == ratingError.name)
                if(!_error){
                    errors.push(ratingError);
                }
                console.log(errors)
                break;
            default:
                _rating.classList.remove("is-invalid")
                _rating.classList.add("is-valid")

                errors.forEach(element => element.name === "rating"?errors.splice(errors.indexOf(element), 1):"");
                console.log(errors)
                break;
        };
    });

    _awards.addEventListener("blur", () => {
        switch (true) {
            case !(_awards.value.trim()):
                _awards.classList.add("is-invalid");
                _awards.placeholder = "Campo vacío.";
                break;
            case _awards.value < 0 || _awards.value > 10:
                _awards.classList.add("is-invalid");
                _awards.placeholder = "Valor fuera de rango.";
                _awards.value = "";
                let awardsError = {
                    name: "awards",
                    msg: _awards.placeholder
                }
                let _error = errors.find(element => element.name == awardsError.name)
                if(!_error){
                    errors.push(awardsError);
                }
                console.log(errors)
                break;
            default:
                _awards.classList.remove("is-invalid");
                _awards.classList.add("is-valid");
                errors.forEach(element => element.name === "awards"?errors.splice(errors.indexOf(element), 1):"");
                console.log(errors)
                break;
        }
    });

    _date.addEventListener("blur", () => {
        switch (true) {
            case !(_date.value.trim()):
                _date.classList.add("is-invalid");
                _date.placeholder = "Campo vacío.";
                break;
            default:
                _date.classList.remove("is-invalid");
                _date.classList.add("is-valid")
                _date.placeholder = "";
                break;
        }
    });

    _length.addEventListener("blur", () => {
        switch (true) {
            case !(_length.value.trim()):
                _length.classList.add("is-invalid");
                _length.placeholder = "Campo vacío.";
                break;
            case _length.value < 0 || _length.value > 360:
                _length.classList.add("is-invalid");
                _length.placeholder = "Valor fuera de rango.";
                _length.value = "";
                let lengthError = {
                    name: "length",
                    msg: _length.placeholder
                }
                let _error = errors.find(element => element.name == lengthError.name)
                if(!_error){
                    errors.push(lengthError);
                }
                console.log(errors)
                break;
            default:
                _length.classList.remove("is-invalid");
                _length.classList.add("is-valid")
                errors.forEach(element => element.name === "length"?errors.splice(errors.indexOf(element), 1):"");
                console.log(errors)
                break;
        }
    });

    _genre.addEventListener("blur", () => {
        switch (true) {
            case !(_genre.value.trim()):
                _genre.classList.add("is-invalid");
                _genre.placeholder = "Campo vacío.";
                break;
            default:
                _genre.classList.remove("is-invalid");
                _genre.classList.add("is-valid")
                _genre.placeholder = "";
                break;
        }
    });

    _form.addEventListener("submit", e => {
        e.preventDefault();
        let cont = 0;
        let formElements = _form.elements;

        for (let index = 0; index < formElements.length - 1; index++) {
            if (formElements[index].value == "") {
                formElements[index].classList.toggle("is-invalid");
                cont++;
            }
        }

        if(errors.length != 0){
            cont++;
            document.querySelector(".errors-form").innerHTML = "";
            errors.forEach(element => {
                document.querySelector(".errors-form").innerHTML += `<li>${element.name + ": " + element.msg}</li>`
            })
        }else {
            document.querySelector(".errors-form").innerHTML = "";
        }
        if(cont === 0){
            alert("Se guardó la película correctamente.")
            _form.submit();
        }
    })