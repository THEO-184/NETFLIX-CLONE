const questions = document.querySelectorAll(".question");
window.addEventListener("load", () => {
	AOS.init();
});
questions.forEach((question) => {
	const btn = question.querySelector("span");
	btn.addEventListener("click", (e) => {
		questions.forEach((item) => {
			if (item !== question) {
				item.classList.remove("view");
			}
		});
		question.classList.toggle("view");
	});
});

const sliderImages = document.querySelectorAll(".slide-in");

function slideIn(e) {
	sliderImages.forEach((sliderImage) => {
		const scrollHeight =
			window.pageYOffset + window.innerHeight - sliderImage.height / 1;
		const imgBottom = sliderImage.offsetTop + sliderImage.height;
		const isPastHalf = scrollHeight > sliderImage.offsetTop;
		const isNotScrolledPast = window.pageYOffset < imgBottom;

		if (isPastHalf && isNotScrolledPast) {
			sliderImage.classList.add("active");
		} else {
			sliderImage.classList.remove("active");
		}
	});
}

window.addEventListener("scroll", slideIn);
