/* =========================================================
   NAVBAR MOBILE
========================================================= */

const menuToggle = document.getElementById("menu_toggle");

const navMenu = document.getElementById("nav_menu");


/* Buka / tutup hamburger */

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


/* =========================================================
   TUTUP MENU MOBILE
   Menu otomatis tertutup setelah memilih section
========================================================= */

const navLinks = document.querySelectorAll(".nav_menu a");


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (navMenu) {

            navMenu.classList.remove("active");

        }

    });

});


/* =========================================================
   ACTIVE NAVBAR + SCROLL REVEAL
========================================================= */

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                /* Scroll Reveal */

                entry.target.classList.add("show");


                /* Active Navbar */

                navLinks.forEach((link) => {

                    link.classList.remove("active");

                });


                const activeLink = document.querySelector(

                    `.nav_menu a[href="#${entry.target.id}"]`

                );


                if (activeLink) {

                    activeLink.classList.add("active");

                }

            }

        });

    },

    {

        threshold: 0.3

    }

);


/* Jalankan observer */

sections.forEach((section) => {

    observer.observe(section);

});


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop = document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =========================================================
   LOADING SCREEN
========================================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");


    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 800);

    }

});