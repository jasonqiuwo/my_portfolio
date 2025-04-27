// GSAP animations on page load
gsap.from(".navbar", { y: -50, opacity: 0, duration: 1 });

gsap.from(".hero img", { opacity: 0, y: 30, duration: 1, delay: 0.5 });
gsap.from(".hero h1", { opacity: 0, y: 30, duration: 1, delay: 0.7 });
gsap.from(".hero p", { opacity: 0, y: 30, duration: 1, delay: 0.9 });

gsap.utils.toArray("section").forEach((section, i) => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: i * 0.3,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
        }
    });
});
