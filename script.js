function IsMale(bool) {
    const image = document.querySelector('.image img');
    console.log(bool)
    if (bool) {
        image.src = '../Image/iop.png';
    } else {
        image.src = '../Image/iop_femmele.jpeg';
    }
}
