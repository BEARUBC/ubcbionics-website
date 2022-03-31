const faqs = document.querySelectorAll(".row");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    }) ;
});