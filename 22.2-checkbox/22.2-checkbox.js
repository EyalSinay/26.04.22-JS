const check = document.querySelector('#check');
check.addEventListener('input', () => {
    if(check.checked){
        const img = document.createElement('img');
        img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Nilgiri_wood_pigeon_%28Columba_elphinstonii%29.jpg/250px-Nilgiri_wood_pigeon_%28Columba_elphinstonii%29.jpg');
        img.setAttribute('with', '300px');
        document.body.appendChild(img);
    } else {
        document.querySelector('img').remove();
    }
});