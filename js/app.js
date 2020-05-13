window.onload = () => {
    let l = document.querySelectorAll(`td`);

    for(let i = 0; i < l.length; i++) {
        l[i].addEventListener(`click`, () => {
            l[i].classList.toggle(`rotate`);
        });
    }
};
