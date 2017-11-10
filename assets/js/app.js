$(document).ready(function () {

// slick-carousel

    $('.siema').slick({
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        // make it responsive
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 548,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

// timer

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {



        var clock = document.getElementById(id);

        if (clock == null) return;

        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    initializeClock('clockdiv', deadline);

// Look for .hamburger
    var hamburger = document.querySelector(".hamburger");
// On click
    hamburger.addEventListener("click", function() {
        // Toggle class "is-active"
        hamburger.classList.toggle("is-active");
        // Do something else, like open/close menu
    });

// menu

    var link = document.querySelector('.hamburger');
    var items = document.querySelectorAll('.menu__item');
    var menu = document.querySelector('.menu');

    link.addEventListener('click', function (e) {
        e.preventDefault();

        menu.classList.toggle('animated');

        if (menu.classList.contains('animated')) {
            [].slice.call(items).forEach(function (item) {
                item.firstElementChild.classList.remove('bounce-in');
            });
        }
    }, true);

    document.querySelector('.menu__left')
        .addEventListener('transitionend', showItems);


    function showItems() {
        var counter = 0;

        function recursion() {
            items[counter].firstElementChild.classList.add('bounce-in');
            counter++;

            if (counter < items.length) {
                setTimeout(recursion, 200);
            }
        }

        recursion();
    }
// header responsive fix
    $(window).scroll(function() {

        var scrollTop = $("body, html").scrollTop();

        if (window.matchMedia('(max-width: 768px)').matches){
            if( scrollTop > 0 ) {

                $(".header__menu").addClass("header__menu--responsive");

            } else {

                $(".header__menu").removeClass("header__menu--responsive");

            }
        }
// class-remove fix
    }).resize(function() {

        if( window.screen.width > 768 ) {

            $(".header__menu").removeClass("header__menu--responsive");

        }

    });

    // slick carousel gallery

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
});



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4vLyBzbGljay1jYXJvdXNlbFxyXG5cclxuICAgICQoJy5zaWVtYScpLnNsaWNrKHtcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PC9idXR0b24+JyxcclxuICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj48L2J1dHRvbj4nLFxyXG4gICAgICAgIC8vIG1ha2UgaXQgcmVzcG9uc2l2ZVxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTMwMCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDkwMCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU0OCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcbi8vIHRpbWVyXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGltZVJlbWFpbmluZyhlbmR0aW1lKSB7XHJcbiAgICAgICAgdmFyIHQgPSBEYXRlLnBhcnNlKGVuZHRpbWUpIC0gRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKTtcclxuICAgICAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHQgLyAxMDAwKSAlIDYwKTtcclxuICAgICAgICB2YXIgbWludXRlcyA9IE1hdGguZmxvb3IoKHQgLyAxMDAwIC8gNjApICUgNjApO1xyXG4gICAgICAgIHZhciBob3VycyA9IE1hdGguZmxvb3IoKHQgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KTtcclxuICAgICAgICB2YXIgZGF5cyA9IE1hdGguZmxvb3IodCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgJ3RvdGFsJzogdCxcclxuICAgICAgICAgICAgJ2RheXMnOiBkYXlzLFxyXG4gICAgICAgICAgICAnaG91cnMnOiBob3VycyxcclxuICAgICAgICAgICAgJ21pbnV0ZXMnOiBtaW51dGVzLFxyXG4gICAgICAgICAgICAnc2Vjb25kcyc6IHNlY29uZHNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemVDbG9jayhpZCwgZW5kdGltZSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgIHZhciBjbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuXHJcbiAgICAgICAgaWYgKGNsb2NrID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIGRheXNTcGFuID0gY2xvY2sucXVlcnlTZWxlY3RvcignLmRheXMnKTtcclxuICAgICAgICB2YXIgaG91cnNTcGFuID0gY2xvY2sucXVlcnlTZWxlY3RvcignLmhvdXJzJyk7XHJcbiAgICAgICAgdmFyIG1pbnV0ZXNTcGFuID0gY2xvY2sucXVlcnlTZWxlY3RvcignLm1pbnV0ZXMnKTtcclxuICAgICAgICB2YXIgc2Vjb25kc1NwYW4gPSBjbG9jay5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kcycpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVDbG9jaygpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSBnZXRUaW1lUmVtYWluaW5nKGVuZHRpbWUpO1xyXG5cclxuICAgICAgICAgICAgZGF5c1NwYW4uaW5uZXJIVE1MID0gdC5kYXlzO1xyXG4gICAgICAgICAgICBob3Vyc1NwYW4uaW5uZXJIVE1MID0gKCcwJyArIHQuaG91cnMpLnNsaWNlKC0yKTtcclxuICAgICAgICAgICAgbWludXRlc1NwYW4uaW5uZXJIVE1MID0gKCcwJyArIHQubWludXRlcykuc2xpY2UoLTIpO1xyXG4gICAgICAgICAgICBzZWNvbmRzU3Bhbi5pbm5lckhUTUwgPSAoJzAnICsgdC5zZWNvbmRzKS5zbGljZSgtMik7XHJcblxyXG4gICAgICAgICAgICBpZiAodC50b3RhbCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZUNsb2NrKCk7XHJcbiAgICAgICAgdmFyIHRpbWVpbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZUNsb2NrLCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGVhZGxpbmUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKG5ldyBEYXRlKCkpICsgMTUgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcclxuICAgIGluaXRpYWxpemVDbG9jaygnY2xvY2tkaXYnLCBkZWFkbGluZSk7XHJcblxyXG4vLyBMb29rIGZvciAuaGFtYnVyZ2VyXHJcbiAgICB2YXIgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJcIik7XHJcbi8vIE9uIGNsaWNrXHJcbiAgICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIFRvZ2dsZSBjbGFzcyBcImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XHJcbiAgICAgICAgLy8gRG8gc29tZXRoaW5nIGVsc2UsIGxpa2Ugb3Blbi9jbG9zZSBtZW51XHJcbiAgICB9KTtcclxuXHJcbi8vIG1lbnVcclxuXHJcbiAgICB2YXIgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKTtcclxuICAgIHZhciBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19pdGVtJyk7XHJcbiAgICB2YXIgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XHJcblxyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FuaW1hdGVkJyk7XHJcblxyXG4gICAgICAgIGlmIChtZW51LmNsYXNzTGlzdC5jb250YWlucygnYW5pbWF0ZWQnKSkge1xyXG4gICAgICAgICAgICBbXS5zbGljZS5jYWxsKGl0ZW1zKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2JvdW5jZS1pbicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCB0cnVlKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbGVmdCcpXHJcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzaG93SXRlbXMpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93SXRlbXMoKSB7XHJcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiByZWN1cnNpb24oKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zW2NvdW50ZXJdLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2JvdW5jZS1pbicpO1xyXG4gICAgICAgICAgICBjb3VudGVyKys7XHJcblxyXG4gICAgICAgICAgICBpZiAoY291bnRlciA8IGl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChyZWN1cnNpb24sIDIwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlY3Vyc2lvbigpO1xyXG4gICAgfVxyXG4vLyBoZWFkZXIgcmVzcG9uc2l2ZSBmaXhcclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKFwiYm9keSwgaHRtbFwiKS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjhweCknKS5tYXRjaGVzKXtcclxuICAgICAgICAgICAgaWYoIHNjcm9sbFRvcCA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5oZWFkZXJfX21lbnVcIikuYWRkQ2xhc3MoXCJoZWFkZXJfX21lbnUtLXJlc3BvbnNpdmVcIik7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIuaGVhZGVyX19tZW51XCIpLnJlbW92ZUNsYXNzKFwiaGVhZGVyX19tZW51LS1yZXNwb25zaXZlXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuLy8gY2xhc3MtcmVtb3ZlIGZpeFxyXG4gICAgfSkucmVzaXplKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBpZiggd2luZG93LnNjcmVlbi53aWR0aCA+IDc2OCApIHtcclxuXHJcbiAgICAgICAgICAgICQoXCIuaGVhZGVyX19tZW51XCIpLnJlbW92ZUNsYXNzKFwiaGVhZGVyX19tZW51LS1yZXNwb25zaXZlXCIpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc2xpY2sgY2Fyb3VzZWwgZ2FsbGVyeVxyXG5cclxuICAgICQoJy5zbGlkZXItZm9yJykuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgYXNOYXZGb3I6ICcuc2xpZGVyLW5hdidcclxuICAgIH0pO1xyXG4gICAgJCgnLnNsaWRlci1uYXYnKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGFzTmF2Rm9yOiAnLnNsaWRlci1mb3InLFxyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
