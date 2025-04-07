window.addEventListener("load", () => {
  const swiper = new Swiper(".video-sw", {
    speed: 1000,
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      // nextEl: ".swiper-button-next",
      nextEl: ".nextBtn",
      prevEl: ".prevBtn",
    },
  });
});
// document.addEventListener("DOMContentLoaded", () => {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.utils.toArray(".animate").forEach((el) => {
//     gsap.to(el, {
//       opacity: 1,
//       y: 0,
//       duration: 1,
//       markers: true,
//       // ease: "power2.out",
//       scrollTrigger: {
//         trigger: el,
//         start: "top 85%",
//         end: "bottom 10%",
//         toggleActions: "play none none reverse",
//       },
//     });
//   });
// });
