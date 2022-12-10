var splide = new Splide('#splideFilms', {
    type   : 'loop',
    perPage: 3,
    focus  : 'center',
    autoplay: true,
    backgound: 'red',
    breakpoints: {
        1100: {
            perPage: 1,
            gap: '.7rem',
            height: '23rem',
        },
        480: {
            perPage: 1,
            gap: '.7rem',
            height: '23rem',
        },
    },
});

  
  splide.mount();