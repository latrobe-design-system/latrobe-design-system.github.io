!function(){"use strict";function t(){var n=0,d=0,c=0,i=0,l=[],e=document.querySelectorAll(".ds-card-set--comparison .ds-card");e.forEach(function(e){var t=e.querySelector(".ds-card__heading"),a=e.querySelector(".ds-card__status-info"),o=e.querySelector(".ds-card__info"),r=e.querySelector(".ds-card__checklist"),e=e.querySelectorAll(".ds-accordion .ds-accordion__trigger");t.clientHeight>n&&(n=t.clientHeight),a.clientHeight>c&&(c=a.clientHeight),o.clientHeight>d&&(d=o.clientHeight),r.clientHeight>i&&(i=r.clientHeight),e.forEach(function(e,t){void 0===l[t]&&50<e.clientHeight&&l.push(e.clientHeight),e.clientHeight>l[t]&&(l[t]=e.clientHeight)})}),e.forEach(function(e){var t=e.querySelector(".ds-card__heading"),a=e.querySelector(".ds-card__status-info"),o=e.querySelector(".ds-card__info"),r=e.querySelector(".ds-card__checklist"),s=e.querySelectorAll(".ds-accordion"),e=e.querySelectorAll(".ds-accordion  .ds-accordion__trigger");t.style.height="",t.style.height=n+"px",a.style.height="",a.style.height=c+"px",o.style.height="",o.style.height=d+"px",r.style.height="",r.style.height=i+"px",s.forEach(function(e,t){e.style.height="",e.style.height=l[t]+"px"}),e.forEach(function(e,t){e.style.height="",e.style.height=l[t]+"px"})})}jQuery(document).ready(function(e){e(".ds-accordion__trigger").each(function(){"true"==e(this).attr("aria-expanded")&&e(this).parent().next(".ds-accordion__content").show()}),e(".ds-accordion__trigger").click(function(){"true"==e(this).attr("aria-expanded")?e(this).attr("aria-expanded","false"):e(this).attr("aria-expanded","true"),e(this).parent().next(".ds-accordion__content").slideToggle()})}),$(document).ready(function(){$(".ds-alert__close").on("click",function(){$(this).parent().remove()})}),$(document).ready(function(){3===document.querySelectorAll(".ds-card-set--comparison > .ds-card").length&&(console.log("3 elements"),document.querySelector(".ds-card-set--comparison").classList.add("ds-card-set-comparison--3max"),document.querySelector(".ds-scroll-right").style.display="none")}),$(document).ready(function(){t(),addEventListener("resize",function(e){t()})}),$(document).ready(function(){$(".ds-card-set--comparison");$(".ds-scroll-left").hide(),$(".ds-card-set--comparison").addClass("ds-card-set--comparison__first")});var a=new IntersectionObserver(function(e){e.map(function(e){e.isIntersecting?(console.log("intersect!"),document.querySelectorAll(".ds-card__header").forEach(function(e){}),document.querySelectorAll(".ds-card__status-info").forEach(function(e){}),document.querySelectorAll(".ds-card__cta").forEach(function(e){}),document.querySelectorAll(".ds-card__body").forEach(function(e){})):(console.log("not intersecting..."),document.querySelectorAll(".ds-card__header").forEach(function(e){e.classList.remove("ds-card__header--sticky")}),document.querySelectorAll(".ds-card__body").forEach(function(e){e.classList.remove("ds-card__body--transition")}))})},{threshold:.6});document.querySelectorAll(".ds-card__body").forEach(function(e){a.observe(e)});var r=0,s=!1,n=document.querySelector(".ds-card-set--comparison"),e=(document.querySelector(".ds-card-set--comparison > .ds-card"),document.querySelectorAll(".ds-card-set--comparison > .ds-card > .ds-card__header"),parseFloat(n.clientWidth)),d=420;document.querySelectorAll(".ds-card-set--comparison > .ds-card").length;$(".ds-scroll-left").click(function(){var a;$(".ds-scroll-right").show(),$(".ds-card-set--comparison").addClass("ds-card-set--comparison__last");var o=!1;window.requestAnimationFrame(function e(t){a!==t&&(s?($(".ds-card-set--comparison").removeClass("ds-card-set--comparison__last"),n.scrollLeft=990,s=!(r=990)):($(".ds-card-set--comparison").removeClass("ds-card-set--comparison__first"),n.scrollLeft-=42),console.log("scroll by: ",n.scrollLeft,r),0===n.scrollLeft&&(console.log("first"),$(".ds-scroll-left").hide(),$(".ds-card-set--comparison").addClass("ds-card-set--comparison__first"),$(".ds-card-set--comparison").removeClass("ds-card-set--comparison__last"),o=!(r=0)),n.scrollLeft===r-d&&(o=!0,r-=d)),o?window.cancelAnimationFrame(e):window.requestAnimationFrame(e)})}),$(".ds-scroll-right").click(function(){var a;$(".ds-scroll-left").show(),$(".ds-card-set--comparison").removeClass("ds-card-set--comparison__first"),console.log(e,d);var o=!1;window.requestAnimationFrame(function e(t){a!==t&&(n.scrollLeft+=28,console.log("scroll by: ",n.scrollLeft),n.scrollWidth-n.scrollLeft===n.clientWidth&&(console.log("last"),$(".ds-scroll-right").hide(),$(".ds-card-set--comparison").addClass("ds-card-set--comparison__last"),r=n.clientWidth,o=s=!0),n.scrollLeft===r+d&&(o=!0,r+=d)),o?window.cancelAnimationFrame(e):window.requestAnimationFrame(e)})}),$(document).ready(function(){function e(){var e=$(".ds-page-nav-container").offset().top-$(window).scrollTop();1024<=$(window).width()&&e==t?$(".ds-page-nav-container").addClass("ds-page-nav-container--stuck"):$(".ds-page-nav-container").removeClass("ds-page-nav-container--stuck")}var t;0<$(".ds-page-nav-container").length&&(t=parseInt($(".ds-page-nav-container").css("top"),10),e(),$(window).scroll(function(){e()}),$(window).on("resize",function(){t=parseInt($(".ds-page-nav-container").css("top"),10),e()}))}),$(document).ready(function(){jQuery(document).on("click",".ds-collapse__trigger",function(e){var t=$(e.currentTarget).attr("aria-controls");"false"==$(e.currentTarget).attr("aria-expanded")?($(e.currentTarget).attr("aria-expanded","true"),$("#"+t).slideDown(function(){$(e.currentTarget).removeAttr("hidden")})):($(e.currentTarget).attr("aria-expanded","false"),$("#"+t).slideUp(function(){$(e.currentTarget).attr("hidden","hidden")}))}),jQuery(document).on("click",".ds-collapse__close",function(e){e=$(e.currentTarget).attr("aria-controls");$('.ds-collapse[aria-controls="'+e+'"]').trigger("click").focus()})}),$(document).ready(function(){$("#show-course-filters").click(function(){var e=document.querySelector("#show-course-filters"),t=$(".ds-filter-megamenu");"Hide filters"===e.textContent?(e.textContent="Show filters",e.classList.add("ds-btn--ghost"),e.classList.remove("ds-btn--ghost__active"),t.slideUp()):(e.textContent="Hide filters",e.classList.add("ds-btn--ghost__active"),e.classList.remove("ds-btn--ghost"),t.slideDown())}),$(".ds-filter-group__nav__tab, .ds-filter-group__nav__label").click(function(){var e=$(this).attr("aria-controls"),t=$(".ds-filter-megamenu");"false"==$(this).attr("aria-expanded")?($(this).siblings().each(function(){var e=$(this).attr("aria-controls");$("#"+e).hide().attr("hidden","hidden"),$(this).attr("aria-expanded","false")}),$(this).attr("aria-expanded","true"),$("#"+e).slideDown(function(){$(this).removeAttr("hidden")}),t.slideDown()):($(this).attr("aria-expanded","false"),t.slideUp(),$("#"+e).slideUp(function(){$(this).attr("hidden","hidden")}))})}),$(document).ready(function(a){a("body").on("click",".ds-image-gallery .ds-image-gallery__image, .ds-image-gallery__more button",function(e){e.preventDefault();var t=e.target,e=a(this).parents(".ds-image-gallery").html();openModal(t,e,"medium")})}),window.openModal=function(e,t,a,o){void 0===a&&(a="800px"),void 0===o&&(o="no"),$(e).attr("data-returnfocus","yes");t='<div class="ds-modal overlay" role="dialog" aria-modal="true">\n<div class="ds-modal-dialog">'+t+"</div></div>";$("body").append(t).addClass("overlay-open"),$(".ds-modal-dialog").css("max-width",a),$(".ds-modal").fadeIn(function(){$(this).find('button:visible, [href]:visible, input:visible, select:visible, textarea:visible, [tabindex]:not([tabindex="-1"]):visible').eq(0).focus(),"yes"==o?$(this).addClass("static-backdrop"):$(this).append('<button id="overlay-close" class="ds-btn-round ds-btn--light ds-icon-x">Close</button>')})},window.closeModal=function(){$(".ds-modal").fadeOut(function(){$(this).remove();$('[data-returnfocus="yes"]').focus().removeAttr("data-returnfocus"),$("body").removeClass("overlay-open")})},$(document).ready(function(r){r("body").on("click keydown",".ds-modal",function(e){r(this).hasClass("static-backdrop")||(r(e.target).is("#overlay-close")||r(e.target).is(".ds-modal"))&&(void 0!==e.keyCode&&13!=e.keyCode&&27!=e.keyCode||(e.preventDefault(),closeModal(r(this))))}),r("body").on("click","[data-modal-content]",function(e){e.preventDefault();var t=e.target,a=r(t).attr("data-modal-content"),o=r(t).attr("data-modal-width"),e="medium"==o?"1024px":"large"==o?"1280px":"800px",o=r(t).attr("data-static-backdrop"),a=r("<div/>").append(r("#"+a).clone()).html();openModal(t,a,e,o)})}),$(document).ready(function(){var e,t,a;0<$(".ds-hero-promo__text").length&&0<$("#logo h1 img").length&&(e=$(window).width(),t=$(this).scrollTop(),a=$(".ds-hero-promo__text").offset().top,1023<e&&(a<t?$("#logo h1 img").css("transform","translateY(0)"):$("#logo h1 img").css("transform","translateY(-100%)")),$(window).scroll(function(){t=$(this).scrollTop(),1023<e&&(a<t?$("#logo h1 img").css("transform","translateY(0)"):$("#logo h1 img").css("transform","translateY(-100%)"))}),$(window).resize(function(){!(1023<(e=$(window).width()))||a<t?$("#logo h1 img").css("transform","translateY(0)"):$("#logo h1 img").css("transform","translateY(-100%)")}))}),$(document).ready(function(){var s={end:35,home:36,left:37,up:38,right:39,down:40,delete:46,enter:13,space:32},n={37:-1,38:-1,39:1,40:1};function r(e,t,a){var o=a.keyCode,r=!1;"vertical"==e.attr("aria-orientation")?o!==s.up&&o!==s.down||(a.preventDefault(),r=!0):o!==s.left&&o!==s.right||(r=!0),r&&function(e,t,a){var o=a.keyCode,e=$(e).children(),t=e.index(t);{n[o]&&(a.target,void 0!==t&&(e[t+n[o]]?e[t+n[o]].focus():o===s.left||o===s.up?i(e):o!==s.right&&o!=s.down||c(e)))}}(e,t,a)}function d(e,t){t=t||!0;var a,o=e.attr("id"),r=$('[aria-labelledby="'+o+'"]');a=r,(o=e).attr("tabindex","-1").siblings('[role="tab"]').attr("tabindex","-1"),o.attr("aria-selected","false").siblings(".ds-tabs-nav__tab").attr("aria-selected","false"),a.attr("hidden","hidden").siblings('[role="tabpanel"]').attr("hidden","hidden"),e.removeAttr("tabindex"),e.attr("aria-selected","true"),r.removeAttr("hidden"),t&&e.focus()}function c(e){e.first().focus()}function i(e){e.last().focus()}$(".ds-page-content").on("click",".ds-tabs-nav__tab",function(){d($(this),!1)}),$(".ds-page-content").on("keydown",".ds-tabs-nav__tab",function(e){var t=e.keyCode,a=$(this),o=a.parent();switch(t){case s.end:e.preventDefault(),i($(o).children());break;case s.home:e.preventDefault(),c($(o).children());break;case s.up:case s.down:r(o,a,e)}}),$(".ds-page-content").on("keyup",".ds-tabs-nav__tab",function(e){var t=e.keyCode,a=$(this),o=a.parent();switch(t){case s.left:case s.right:r(o,a,e);break;case s.enter:case s.space:d(a)}});var e=document.location.toString();e.match("#")&&document.getElementById(e.split("#")[1]).click()}),jQuery(document).ready(function(){$("table").each(function(){$(this).parent().hasClass("ds-table-wrapper")||$(this).wrap('<div class="ds-table-wrapper"></div>')})}),$(document).ready(function(a){a("body").on("click","a[data-youtube]",function(e){e.preventDefault();var t=e.target,e=a(t).attr("data-youtube");openModal(t,'<div class="ds-video ds-video--fullwidth"><div class="ds-video__wrapper"><iframe id="vid-'+e+'" width="560" height="315" type="text/html" src="https://www.youtube.com/embed/'+e+'?rel=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe></div></div>',"medium")})})}();
//# sourceMappingURL=ds-ltu.js.map
