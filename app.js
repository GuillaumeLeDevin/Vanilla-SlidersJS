const imgs = document.querySelectorAll('.cont-slides img');
const next = document.querySelector('.right');
const prev = document.querySelector('.left');
const circles = document.querySelectorAll('.circle');
let index = 0;

next.addEventListener('click', nextSlide);

function nextSlide() {

    if(index < imgs.length - 1){

        imgs[index].classList.remove('active');
        index++;
        imgs[index].classList.add('active');

    }
    else if (index === imgs.length - 1) {

        imgs[index].classList.remove('active');
        index = 0;
        imgs[index].classList.add('active');

    }

    for(i = 0; i < circles.length; i++){

        if(circles[i].getAttribute('data-clic') - 1 === index){
            circles[i].classList.add('active-circle');
        } else {
            circles[i].classList.remove('active-circle');
        }

    }
}
prev.addEventListener('click', prevSlide);

function prevSlide() {

    if(index > 0) {

        imgs[index].classList.remove('active');
        index--;
        imgs[index].classList.add('active');

    }
    else if(index === 0) {

        imgs[index].classList.remove('active');
        index = 2;
        imgs[index].classList.add('active');

    }

    for( i = 0; i < circles.length; i++) {

        if(circles[i].getAttribute('data-clic') - 1 === index) {
            circles[i].classList.add('active-circle');
        } else {
            circles[i].classList.remove('active-circle');
        }
    }

}

document.addEventListener('keydown', keyPressed)

function keyPressed(e) {
    if(e.keyCode === 37) {
        prevSlide();
    }
    else if (e.keyCode === 39) {
        nextSlide();
    }
}

// circles

circles.forEach(circle => {

    circle.addEventListener('click', function(){

        for(i = 0; i < circles.length; i++) {
            circles[i].classList.remove('active-circle');
        }
        this.classList.add('active-circle');

        imgs[index].classList.remove('active');
        index = this.getAttribute('data-clic');
        imgs[index].classList.add('active');
    })

})