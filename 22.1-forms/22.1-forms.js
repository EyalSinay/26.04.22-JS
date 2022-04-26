const form = document.querySelector('form');
const inputs = form.getElementsByTagName('input');




form.addEventListener('submit', (e) => {
    e.preventDefault();

    let infoMsg = '';
    for (let input of inputs) {
        infoMsg += input.name + ': ' + input.value + '\n';
    }
    infoMsg += 'did you confirm?';
    if (confirm(infoMsg)) {
        alert('congratulations you successfully sent this form');
    }
});