!function(){"use strict";var e,t,c,n,o,i=document.getElementById("feedback"),a=Array.prototype.slice.call(document.getElementById("feedback-dots").children),s=Array.prototype.slice.call(document.getElementById("feedback-content").children),l=document.getElementById("left-arrow"),d=document.getElementById("right-arrow"),r=0,u=0;window.onload=function(){function o(t){for(var c=0;c<a.length;c++)s[c].classList.remove("active"),s[c].classList.remove("inactive"),a[c].classList.remove("active");t<0&&(t=r=s.length-1),t>s.length-1&&(t=r=0),u!=r&&s[u].classList.add("inactive"),s[t].classList.add("active"),a[t].classList.add("active"),u=r,clearTimeout(e),e=setTimeout((function(){o(r+=1)}),4500)}l.addEventListener("click",(function(){o(r-=1)})),d.addEventListener("click",(function(){o(r+=1)}));for(var m=0;m<a.length;m++)a[m].addEventListener("click",(function(){o(r=a.indexOf(this))}));o(r),document.addEventListener("keyup",(function(e){switch(e.keyCode){case 37:l.click();break;case 39:case 39:d.click()}})),i.addEventListener("touchstart",(function(e){t=e.changedTouches[0].clientX})),i.addEventListener("touchend",(function(e){if(c=e.changedTouches[0].clientX,n=t-c,console.log(n),console.log(t),console.log(c),n>30)l.click();else{if(!(n<-30))return;d.click()}}))},"function"!=typeof(o=window.Element.prototype).matches&&(o.matches=o.msMatchesSelector||o.mozMatchesSelector||o.webkitMatchesSelector||function(e){for(var t=this,c=(t.document||t.ownerDocument).querySelectorAll(e),n=0;c[n]&&c[n]!==t;)++n;return Boolean(c[n])}),"function"!=typeof o.closest&&(o.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),c=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var c=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+c+'"]').classList.add("active"),t.classList.add("active")}))})),c.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))}))}();
//# sourceMappingURL=index.d9ef6a28.js.map
