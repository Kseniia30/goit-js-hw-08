import throttle from "lodash.throttle";

const key = "feedback-form-state";
const feedBack = document.querySelector(".feedback-form");
const mail = document.querySelector("input[name=email]");
const message = document.querySelector("textarea[name=message]");
const btn = document.querySelector("button[type=submit]");

feedBack.addEventListener('input', throttle(onInput, 500));

function onInput() {
    const form = new FormData(feedBack);
    let newForm = {};
    form.forEach((value, name) => (newForm[name] = value));
    localStorage.setItem(key, JSON.stringify(newForm));
}

function saveInf() {
    const newFormInf = JSON.parse(localStorage.getItem(key));
    if (newFormInf) {
        const inputDatas = Object.keys(newFormInf);
        inputDatas.forEach(inputData => {
            feedBack.elements[inputData].value = newFormInf[inputData]
        })
    }
}
saveInf()

feedBack.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    localStorage.removeItem(key);
    let infData = {};
    const formData = new FormData(feedBack);
    formData.forEach((value, name) => (infData[name] = value));
    console.log(infData);
    feedBack.reset();
}