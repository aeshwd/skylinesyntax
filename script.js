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


/* Contact Section */

const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const companyNameEl = document.querySelector("#company-name");
const messageEl = document.querySelector("#message");

const form = document.querySelector("#submit-form");

function checkValidations() {
  let letters = /^[a-zA-Z\s]*$/;
  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const companyName = companyNameEl.value.trim();
  const message = messageEl.value.trim();
  if (name === "") {
     document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please fill out this field!";
  } else {
    if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please enter only characters!";
    } else {
      
    }
  }
  if (email === "") {
     document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please fill out this field!";
  } else {
    if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please enter only characters!";
    } else {
      
    }
  }
}

function reset() {
  nameEl = "";
  emailEl = "";
  companyNameEl = "";
  messageEl = "";
  document.querySelector(".name-error").innerText = "";
}





