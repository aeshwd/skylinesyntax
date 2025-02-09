document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".hero",
            start: "top 60%",  // Animation starts when .hero is 80% in view
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".hero-btns", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".hero",
            start: "top 60%",
            toggleActions: "play none none reverse"
        }
    });

 // Box 1 animation
gsap.from(".box1", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".head-boxes",  // Animation triggers when .head-boxes section comes into view
        start: "top 80%",  // Start when 80% of the .head-boxes section is in view
        end: "bottom top",  // End when the bottom of .head-boxes reaches the top of the viewport
        toggleActions: "play none none reverse",  // Play when in view, reverse when out of view
        markers: false,  // Optional: use true to show debug markers
    }
});

// Box 2 animation
gsap.from(".box2", {
    opacity: 0,
    y: 50,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".head-boxes",  // Animation triggers when .head-boxes section comes into view
        start: "top 80%",  // Start when 80% of the .head-boxes section is in view
        end: "bottom top",  // End when the bottom of .head-boxes reaches the top of the viewport
        toggleActions: "play none none reverse",  // Play when in view, reverse when out of view
        markers: false,  // Optional: use true to show debug markers
    }
});

// Box 3 animation
gsap.from(".box3", {
    opacity: 0,
    y: 50,
    duration: 3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".head-boxes",  // Animation triggers when .head-boxes section comes into view
        start: "top 80%",  // Start when 80% of the .head-boxes section is in view
        end: "bottom top",  // End when the bottom of .head-boxes reaches the top of the viewport
        toggleActions: "play none none reverse",  // Play when in view, reverse when out of view
        markers: false,  // Optional: use true to show debug markers
    }
});

//Pricing
gsap.from(".plan", {
    opacity: 0,
    y: 50,
    duration: 3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".pricing",  // Animation triggers when .pricing section comes into view
        start: "top 80%",  // Start when 80% of the .pricing section is in view
        end: "bottom top",  // End when the bottom of .pricing reaches the top of the viewport
        toggleActions: "play none none reverse",  // Play when in view, reverse when out of view
        markers: false,  // Optional: use true to show debug markers
    }
});



});




