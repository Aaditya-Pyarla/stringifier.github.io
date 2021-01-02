const textarea = document.querySelector('textarea');
const counts = document.querySelector('.count');

function count(){
    const text = textarea.value;
    const textlength = text.length;
    counts.innerHTML = `${textlength}`
}