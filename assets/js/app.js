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

        var scrollTop = $("body").scrollTop();

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

});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuLy8gc2xpY2stY2Fyb3VzZWxcclxuXHJcbiAgICAkKCcuc2llbWEnKS5zbGljayh7XHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjwvYnV0dG9uPicsXHJcbiAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PC9idXR0b24+JyxcclxuICAgICAgICAvLyBtYWtlIGl0IHJlc3BvbnNpdmVcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzMDAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5MDAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NDgsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4vLyB0aW1lclxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRpbWVSZW1haW5pbmcoZW5kdGltZSkge1xyXG4gICAgICAgIHZhciB0ID0gRGF0ZS5wYXJzZShlbmR0aW1lKSAtIERhdGUucGFyc2UobmV3IERhdGUoKSk7XHJcbiAgICAgICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKCh0IC8gMTAwMCkgJSA2MCk7XHJcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0IC8gMTAwMCAvIDYwKSAlIDYwKTtcclxuICAgICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKCh0IC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNCk7XHJcbiAgICAgICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKHQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICd0b3RhbCc6IHQsXHJcbiAgICAgICAgICAgICdkYXlzJzogZGF5cyxcclxuICAgICAgICAgICAgJ2hvdXJzJzogaG91cnMsXHJcbiAgICAgICAgICAgICdtaW51dGVzJzogbWludXRlcyxcclxuICAgICAgICAgICAgJ3NlY29uZHMnOiBzZWNvbmRzXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplQ2xvY2soaWQsIGVuZHRpbWUpIHtcclxuXHJcblxyXG5cclxuICAgICAgICB2YXIgY2xvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblxyXG4gICAgICAgIGlmIChjbG9jayA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciBkYXlzU3BhbiA9IGNsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5kYXlzJyk7XHJcbiAgICAgICAgdmFyIGhvdXJzU3BhbiA9IGNsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5ob3VycycpO1xyXG4gICAgICAgIHZhciBtaW51dGVzU3BhbiA9IGNsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5taW51dGVzJyk7XHJcbiAgICAgICAgdmFyIHNlY29uZHNTcGFuID0gY2xvY2sucXVlcnlTZWxlY3RvcignLnNlY29uZHMnKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQ2xvY2soKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0gZ2V0VGltZVJlbWFpbmluZyhlbmR0aW1lKTtcclxuXHJcbiAgICAgICAgICAgIGRheXNTcGFuLmlubmVySFRNTCA9IHQuZGF5cztcclxuICAgICAgICAgICAgaG91cnNTcGFuLmlubmVySFRNTCA9ICgnMCcgKyB0LmhvdXJzKS5zbGljZSgtMik7XHJcbiAgICAgICAgICAgIG1pbnV0ZXNTcGFuLmlubmVySFRNTCA9ICgnMCcgKyB0Lm1pbnV0ZXMpLnNsaWNlKC0yKTtcclxuICAgICAgICAgICAgc2Vjb25kc1NwYW4uaW5uZXJIVE1MID0gKCcwJyArIHQuc2Vjb25kcykuc2xpY2UoLTIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHQudG90YWwgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1laW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGVDbG9jaygpO1xyXG4gICAgICAgIHZhciB0aW1laW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVDbG9jaywgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRlYWRsaW5lID0gbmV3IERhdGUoRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKSArIDE1ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcbiAgICBpbml0aWFsaXplQ2xvY2soJ2Nsb2NrZGl2JywgZGVhZGxpbmUpO1xyXG5cclxuLy8gTG9vayBmb3IgLmhhbWJ1cmdlclxyXG4gICAgdmFyIGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpO1xyXG4vLyBPbiBjbGlja1xyXG4gICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBUb2dnbGUgY2xhc3MgXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgICAgIC8vIERvIHNvbWV0aGluZyBlbHNlLCBsaWtlIG9wZW4vY2xvc2UgbWVudVxyXG4gICAgfSk7XHJcblxyXG4vLyBtZW51XHJcblxyXG4gICAgdmFyIGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJyk7XHJcbiAgICB2YXIgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9faXRlbScpO1xyXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xyXG5cclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhbmltYXRlZCcpO1xyXG5cclxuICAgICAgICBpZiAobWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2FuaW1hdGVkJykpIHtcclxuICAgICAgICAgICAgW10uc2xpY2UuY2FsbChpdGVtcykuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdib3VuY2UtaW4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgdHJ1ZSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2xlZnQnKVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc2hvd0l0ZW1zKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0l0ZW1zKCkge1xyXG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVjdXJzaW9uKCkge1xyXG4gICAgICAgICAgICBpdGVtc1tjb3VudGVyXS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdib3VuY2UtaW4nKTtcclxuICAgICAgICAgICAgY291bnRlcisrO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPCBpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVjdXJzaW9uLCAyMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWN1cnNpb24oKTtcclxuICAgIH1cclxuLy8gaGVhZGVyIHJlc3BvbnNpdmUgZml4XHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJChcImJvZHlcIikuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY4cHgpJykubWF0Y2hlcyl7XHJcbiAgICAgICAgICAgIGlmKCBzY3JvbGxUb3AgPiAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIuaGVhZGVyX19tZW51XCIpLmFkZENsYXNzKFwiaGVhZGVyX19tZW51LS1yZXNwb25zaXZlXCIpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiLmhlYWRlcl9fbWVudVwiKS5yZW1vdmVDbGFzcyhcImhlYWRlcl9fbWVudS0tcmVzcG9uc2l2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbi8vIGNsYXNzLXJlbW92ZSBmaXhcclxuICAgIH0pLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgaWYoIHdpbmRvdy5zY3JlZW4ud2lkdGggPiA3NjggKSB7XHJcblxyXG4gICAgICAgICAgICAkKFwiLmhlYWRlcl9fbWVudVwiKS5yZW1vdmVDbGFzcyhcImhlYWRlcl9fbWVudS0tcmVzcG9uc2l2ZVwiKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
