let init = () => {

    let container = document.getElementsByClassName('slider__container')[0];
    let slides = document.getElementsByClassName('slider__slide');
    let circles = document.getElementsByClassName('slider__circle');

    current = 1;
    time = 4000;
    console.log(`current: ${current}`);

    // slide animation
    slides[0].classList.add('slider__slide--active');
    circles[current - 1].classList.add('slider__circle--filled');

    // elipsis scroll
    let scrollElipsis = (current) => {
        for (let i = 0; i < slides.length; i++) {
            circles[i].classList.remove('slider__circle--filled');
        }
        circles[current - 1].classList.add('slider__circle--filled');
    }
    let startSliding = () => {

        setInterval(() => {
            
            // remove active from position 1 and add it to position 0 in slides HTML collection
            slides[1].classList.add('slider__slide--active');
            slides[0].classList.remove('slider__slide--active');
            // clone first slide
            container.appendChild(slides[0].cloneNode([true]));
            // remove first slide after cloning it
            container.removeChild(slides[0]);

            console.log(`slides: ${slides.length}`);
            if(current < slides.length) {
                current++;
                scrollElipsis(current);
            } else {
                current = 1;
                scrollElipsis(current);
            }
        }, time);
    }
    startSliding();
}
init();