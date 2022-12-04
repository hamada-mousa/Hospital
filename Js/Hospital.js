$(document).ready(function() {
	var a = $(window).width();
	if (a < 768) {
			$(".nav-link").on("click", function() {
					$("#link-of-nav").removeClass("show")
			});
			e = 98
	} else var e = 90;
	$(window).resize(function() {
			var e = $(window).width();
			a != e && location.reload()
	}), $(window).on("load scroll resize", function() {
			var a = $(window).scrollTop(),
					i = $("#about").offset().top,
					n = $("#facility").offset().top,
					t = $("#review").offset().top,
					o = $("#contact").offset().top,
					l = $("#post").offset().top,
					s = i * e / 100,
					r = (n - i) * e / 100 + i,
					v = (t - n) * e / 100 + n,
					c = (o - t) * e / 100 + t,
					d = (l - o) * e / 100 + o;
			a < s ? ($(".navbar-nav li:first-of-type a").addClass("active"), $(".navbar-nav li:first-of-type").siblings().children().removeClass("active")) : a >= s && a < r ? ($(".navbar-nav li:nth-of-type(2) a").addClass("active"), $(".navbar-nav li:nth-of-type(2)").siblings().children().removeClass("active")) : a >= r && a < v ? ($(".navbar-nav li:nth-of-type(3) a").addClass("active"), $(".navbar-nav li:nth-of-type(3)").siblings().children().removeClass("active")) : a >= v && a < c ? ($(".navbar-nav li:nth-of-type(4) a").addClass("active"), $(".navbar-nav li:nth-of-type(4)").siblings().children().removeClass("active")) : a >= c && a < d ? ($(".navbar-nav li:nth-of-type(5) a").addClass("active"), $(".navbar-nav li:nth-of-type(5)").siblings().children().removeClass("active")) : ($(".navbar-nav li:nth-of-type(6) a").addClass("active"), $(".navbar-nav li:nth-of-type(6)").siblings().children().removeClass("active"))
	}), $(window).on("load scroll", function() {
			$(window).scrollTop() > 10 ? $("#up-arrow").show() : $("#up-arrow").fadeOut()
	}), $(".container-of-body > section:not(:first-of-type)").css({
			paddingTop: $("#Naav").height()
	}), $(".facility").magnificPopup({
			delegate: "a",
			type: "image",
			gallery: {
					enabled: !0
			},
			callbacks: {
					afterClose: function() {
							$("html").css("overflow-x", "hidden")
					}
			}
	});
	var i = document.querySelectorAll(".needs-validation");
	Array.prototype.slice.call(i).forEach(function(a) {
			a.addEventListener("submit", function(e) {
					a.checkValidity() || (e.preventDefault(), e.stopPropagation()), a.classList.add("was-validated")
			}, !1)
	}), AOS.init({
			duration: 1e3,
			delay: 250
	}), $("#cover").hide(), $("#body").css("opacity", "1")
});