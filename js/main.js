   window.sr = ScrollReveal();
   sr.reveal('.nav', {
       duration: 2000,
       origin: 'bottom',
       delay: '1000'
   });

   sr.reveal('.img-left', {
       duration: 2000,
       origin: 'top',
       distance: '300px'
   });

   sr.reveal('.content-right', {
       duration: 2000,
       origin: 'right',
       distance: '300px'
   });

   sr.reveal('.showcase-btn', {
       duration: 2000,
       delay: 2000,
       origin: 'bottom'
   });
   sr.reveal('.testimonial div', {
       duration: 2000,
       origin: 'bottom'
   });
   sr.reveal('.info-left', {
       duration: 2000,
       origin: 'left',
       distance: '300px',
       viewFactor: 0.2
   });

   sr.reveal('.info-right', {
       duration: 2000,
       origin: 'right',
       distance: '300px',
       viewFactor: 0.2
   });


    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') ==
                this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }

        });
    });


    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.nav ul');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    })