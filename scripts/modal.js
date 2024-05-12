document.addEventListener("DOMContentLoaded", function () {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
	};

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}

	if (refs.modal) {
		refs.modal.classList.add("is-hidden");
	}

	if (refs.openModalBtn) {
		refs.openModalBtn.addEventListener("click", function () {
			toggleModal();
		});
	}

	if (refs.closeModalBtn) {
		refs.closeModalBtn.addEventListener("click", function () {
			toggleModal();
		});
	}

	function highlightLink(link) {
		let links = document.querySelectorAll(".nav-link");
		links.forEach(function (item) {
			item.classList.remove("active");
			item.style.color = "#2E2F42";
		});

		link.classList.add("active");
		link.style.color = "#404BBF";
	}

	let links = document.querySelectorAll(".nav-link");
	links.forEach(function (link) {
		link.addEventListener("click", function (event) {
			highlightLink(this);
		});
	});
});

// Set or update the inline style using cssText
