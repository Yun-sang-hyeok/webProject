'use strict';

//Courses
const courseBtnContainer = document.querySelector('.courses__container');
const courseListContainer = document.querySelector('.course__list');
const category = document.querySelector('.course__menu');
const courses = document.querySelectorAll('.course__list-item');

courseBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter;
    if(filter == null) {
        return;
    }

    // Remove selection from previous item select the new one
    const active = document.querySelector('.course__menu.selected');
    active.classList.remove('selected');
    const target = e.target;
    target.classList.add('selected');


    courseListContainer.classList.add('anim-out');
    setTimeout(() => {
    courses.forEach((course) => {
        //console.log(course.dataset.type);

        if(filter === "*" || filter === course.dataset.type){
            course.classList.remove('invisible');
        } else {
            course.classList.add('invisible');
        }
    })
    courseListContainer.classList.remove('anim-out');
    },300)
})