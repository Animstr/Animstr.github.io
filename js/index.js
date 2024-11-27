'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector(".content__wheel__segments");
    const spinBtn = document.querySelector(".content__wheel__btn");
    const counter = document.querySelector('.content__attempts__count');
    const getTryBtn = document.querySelectorAll('.btn');
    const getTryRule = document.querySelectorAll('.content__attempts__list__item');

    let tryes = 2;
    let number = Math.floor((Math.random() * 1000) / 51) * 51.4;

    spinBtn.addEventListener('click', () => {
        if (tryes > 0) {
            container.style.transform = "rotate(" + number + "deg)";
            number += Math.floor((Math.random() * 1000 + 154.2) / 51.4) * 51.4;
            tryes--;
            counter.innerHTML = `Всего попыток: ${tryes}`
        } else {
            counter.classList.add('error');
            setTimeout (() => counter.classList.remove('error'), 500)
        }
    })

    getTryBtn.forEach(tryBtn => {
        tryBtn.addEventListener('click', () => {
            if (tryBtn.getAttribute('class') == 'btn') {
                tryBtn.classList.add('btn-active');
                tryBtn.innerHTML = 'Начислено';

                getTryRule.forEach(rule => {
                    if (tryBtn.getAttribute('data-btn') == rule.getAttribute('data-list')) {
                        rule.classList.add('content__attempts__list__item-active')
                    }
                })

                tryes++;
                counter.innerHTML = `Всего попыток: ${tryes}`;
            } 
        })
    })
})