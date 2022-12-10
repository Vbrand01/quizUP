var splide = new Splide('#splideSeries', {
    type   : 'loop',
    perPage: 3,
    focus  : 'center',
    autoplay: true,
    backgound: 'red',
    breakpoints: {
        1100: {
            perPage: 1,
            gap: '.7rem',
            height: '26rem',
        },
        480: {
            perPage: 1,
            gap: '.7rem',
            height: '26rem',
        },
    },
});

splide.mount();