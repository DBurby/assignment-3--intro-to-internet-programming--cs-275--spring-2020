window.onload = () => {
    let l = document.querySelectorAll(`td`);

    for(let i = 0; i < l.length; i++) {
        l[i].addEventListener(`click`, () => {
            l[i].classList.toggle(`rotate`);
        });
    }

    l[0].addEventListener(`click`, () => {
        if (l[0].classList.contains(`rotate`)){
            l[1].classList.remove(`rotate`);
            l[2].classList.remove(`rotate`);
            l[3].classList.remove(`rotate`);
        }
    });
    l[1].addEventListener(`click`, () => {
        if (l[1].classList.contains(`rotate`)){
            l[0].classList.remove(`rotate`);
            l[2].classList.remove(`rotate`);
            l[3].classList.remove(`rotate`);
        }
    });
    l[2].addEventListener(`click`, () => {
        if (l[2].classList.contains(`rotate`)){
            l[0].classList.remove(`rotate`);
            l[1].classList.remove(`rotate`);
            l[3].classList.remove(`rotate`);
        }
    });
    l[3].addEventListener(`click`, () => {
        if (l[3].classList.contains(`rotate`)){
            l[0].classList.remove(`rotate`);
            l[1].classList.remove(`rotate`);
            l[2].classList.remove(`rotate`);
        }
    });
};
