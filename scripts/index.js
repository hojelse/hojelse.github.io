function scrolldown() {
  $('html, body').animate({ scrollTop: $('section.mediaContainer').offset().top }, 'slow');
  return false;
};

/*
const cursor = document.querySelector('.cursor');
console.log(cursor);

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: "+e.pageY+"px; left: "+e.pageX+"px;");
  console.log(e);
})
*/

function mailto(URL) {
  setTimeout(function () { window.location = URL }, 500);
}

var animateHTML = function () {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'hidden',
          'fade-in-element'
        );
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();


function footer() {

  var tryme = document.getElementById("tryme");
  var trymeLoad = document.getElementById("trymeLoad");
  var footerArrowArray = document.getElementsByClassName("footerArrow");
  var footerArrow = footerArrowArray[0];

  function trymeIn() {
    $(tryme).addClass("tryme-in");
    $(trymeLoad).addClass("trymeLoad-in");
    $(footerArrow).addClass("footerArrow-in");
  };

  function trymeOut() {
    $(tryme).removeClass("tryme-in");
    $(tryme).addClass("tryme-out");
    $(trymeLoad).removeClass("trymeLoad-in");
    $(trymeLoad).addClass("trymeLoad-out");
    $(footerArrow).removeClass("footerArrow-in");
    $(footerArrow).addClass("footerArrow-out");
  };

  function trymeReset() {
    $(tryme).removeClass("tryme-out");
    $(trymeLoad).removeClass("trymeLoad-out");
    $(footerArrow).removeClass("footerArrow-out");
  };

  trymeIn();
  setTimeout(trymeOut, 3000);
  setTimeout(trymeReset, 3200);

};

var tryme = document.getElementById("tryme");
tryme.onclick = function () {
  $(tryme).addClass("tryme-on");
};

/*
function mediaPost() {
  var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
  var mediaPost = document.getElementById("mediaPost");
  var mediaPostLogo = document.getElementById("mediaPostLogo");
  var mediaPostBtn1 = document.getElementById("mediaPostBtn1");
  var mediaPostBtn2 = document.getElementById("mediaPostBtn2");

  $(mediaPost).addClass("mediaPost-on");
  $(mediaPostBtn1).addClass("mediaPostBtn1-on");
  $(mediaPostBtn1).addClass("mediaPostBtn1-on");
  $(mediaPostBtn2).addClass("mediaPostBtn2-on");
  $(mediaPostLogo).addClass("mediaPostLogo-on");

  $(mediaPostLogo).one(animationEvent, function(event) {
    $(mediaPost).removeClass('mediaPost-on');
    $(mediaPostBtn1).removeClass('mediaPostBtn1-on');
    $(mediaPostBtn2).removeClass('mediaPostBtn2-on');
    $(mediaPostLogo).removeClass('mediaPostLogo-on');
  });
};
*/

//Google analytics event tracking
//ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
function gaEventTracking(eventLabel) {
  ga('send', 'event', 'Outbound links', 'IG post click', eventLabel);
}

function handleOutboundLinkClicks(eventLabel) {
  ga('send', 'event', {
    eventCategory: 'Outbound Link',
    eventAction: 'click',
    eventLabel: eventLabel,
    transport: 'beacon'
  });
}

class MediaPost {
  #title
  #platform
  #imagePath
  #linkPath
  #description

  constructor(title, platform, imagePath, linkPath, description){
    this.#title = title
    this.#platform = platform
    this.#imagePath = imagePath
    this.#linkPath = linkPath
    this.#description = description
  }
}

let mediaCols = document.querySelector(".mediaCol")
function mediaPostsSetup() {
  let mediaPosts = [
    new MediaPost("Air Mail", "CODEPEN", "images/Air Mail.png", "https://codepen.io/hojelse/full/rXvGOq", "Hey bud, wanna throw me a message? Message form animation using SVG with pure js")
  ]
  
  for (let m in mediaPosts){
    console.log(mediaCols[0].innerHTML)
  }
}
mediaPostsSetup()
