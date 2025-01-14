const navbar = document.querySelector(".nav-link");
const btnMenu = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");

let nextbtn = document.querySelector("#right");
const slider = document.querySelector(".vid-container");
let prevbtn = document.querySelector("#left");
let timeOut = 1500;
let autoOut;
let timeRunning = 20000;
let autoNext = setTimeout(() => {
  nextbtn.click();
}, timeRunning);

nextbtn.onclick = function () {
  showmenu("next");
};
prevbtn.onclick = function () {
  showmenu("prev");
};

function showmenu(type) {
  let itemslider = document.querySelectorAll(".vid-container .item");
  if (type === "next") {
    slider.appendChild(itemslider[0]);
    slider.classList.remove("prev");
    slider.classList.add("next");
    videos.forEach((video) => {
      videos.forEach((otherVideo) => {
        if (otherVideo !== video) {
          otherVideo.muted = true;
        }
      });
    });
  } else if (type === "prev") {
    let itemslider = document.querySelectorAll(".vid-container .item");
    slider.prepend(slider.querySelector(".item:last-child"));
    slider.classList.remove("next");
    slider.classList.add("prev");
    videos.forEach((video) => {
      videos.forEach((otherVideo) => {
        if (otherVideo !== video) {
          otherVideo.muted = true;
        }
      });
    });
  }

  clearTimeout(autoOut);
  autoOut = setTimeout(() => {
    slider.classList.remove("prev");
    slider.classList.remove("next");
  }, timeOut);

  clearTimeout(autoNext);
  autoNext = setTimeout(() => {
    nextbtn.click();
    videos.loop = true;
  }, timeRunning);
}

// Select all video elements
const videos = document.querySelectorAll("video");
let currentlyPlayingVideo = null;

// Add event listeners to each video
videos.forEach((video) => {
  video.loop = true;

  video.addEventListener("mouseover", () => {
    // MUTE all other videos
    videos.forEach((otherVideo) => {
      if (otherVideo !== video) {
        otherVideo.muted = true;
      }
    });
    video.play();
    video.muted = false;
  });
  video.addEventListener("mouseout", () => {
    video.muted = true;
  });
});

/* --------------lOGIN---------------- */
const login = document.querySelector(".btn");
const log = document.querySelector(".login");
const pasword = document.querySelector(
  '.login .form .password input[type="password"]'
);
const passwrdicon = document.querySelector(".login .form .password i");

passwrdicon.onclick = () => {
  if (pasword.type == "password") {
    pasword.type = "text";
    passwrdicon.classList.add("active");
  } else {
    pasword.type = "password";
    passwrdicon.classList.remove("active");
  }
};

login.addEventListener("click", () => log.classList.add("active"));
let fc = document.getElementsByClassName("fc");
for (let i = 0; i < fc.length; i++) {
  fc[i].addEventListener("click", function () {
    document.getElementsByClassName("login")[0].classList.remove("active");
    document.getElementsByClassName("signup")[0].classList.remove("active");
  });
}

/* --------------lOGIN---------------- */

const password = document.querySelector(
  '.signup .form .password input[type="password"]'
);
const passwordicon = document.querySelector(".signup .form .password i");
const signup = document.querySelector(".login.active a");
let page = document.querySelector(".signup");
const signup_switch = document.getElementById("signup_switch");
signup_switch.addEventListener("click", () => {
  document.getElementsByClassName("login")[0].classList.remove("active");
  document.getElementsByClassName("signup")[0].classList.add("active");
});
document.getElementById("login_switch").addEventListener("click", function () {
  document.getElementsByClassName("login")[0].classList.add("active");
  document.getElementsByClassName("signup")[0].classList.remove("active");
});
passwordicon.onclick = () => {
  if (pasword.type == "password") {
    pasword.type = "text";
    passwordicon.classList.add("active");
  } else {
    pasword.type = "password";
    passwordicon.classList.remove("active");
  }
};

btnMenu.addEventListener("click", () => navbar.classList.add("active"));
btnClose.addEventListener("click", () => navbar.classList.remove("active"));

const btnTabs = document.querySelectorAll(".button1");
const tabContent = document.querySelectorAll(".tab_img .content_img");

//tab
btnTabs.forEach((btn, indx) => {
  btn.addEventListener("click", () => {
    btnTabs.forEach((btnE) => btnE.classList.remove("active"));
    btn.classList.add("active");
    tabContent.forEach((mov) => mov.classList.remove("active"));
    tabContent[indx].classList.add("active");
  });
});

/* // Add event listeners to each video
videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    // Pause all other videos
    videos.forEach((otherVideo) => {
      if (otherVideo !== video && !otherVideo.pause()) {
        otherVideo.pause();
      }
    });
    /* videos.forEach((currentlyPlayingVideo)=>{
    if(currentlyPlayingVideo !== video ){
        currentlyPlayingVideo.currentTime = 0;
        currentlyPlayingVideo.pause()
      }
    ;}) 
    // Play the hovered video
    video.play();
    video.muted = false;
    /* currentlyPlayingVideo =video 
  });

  video.addEventListener("mouseout", () => {
    // Pause the video when mouse leaves
    video.loop = true;
    video.muted = true;
  });
}); */
