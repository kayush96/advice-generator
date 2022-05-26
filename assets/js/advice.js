const textAdvice = document.querySelector('#textAdvice');
const adviceId = document.querySelector('#adviceId');
const getData = document.querySelector('#getData');

getData.addEventListener('click', () => {
  getAdvice();
});

window.onload = () => {
  getAdvice();
}

function getAdvice() {

  fetch('	https://api.adviceslip.com/advice').then(response => {
    return response.json();
  }).then(adviceData => {
    const adviceObj = adviceData.slip;
    adviceId.innerHTML = `<h1>Advice #${adviceObj.id}</h1>`;
    textAdvice.innerHTML = `<p>"${adviceObj.advice}"</p>`;
  }).catch(error => {
    console.log(error);
  });
}
