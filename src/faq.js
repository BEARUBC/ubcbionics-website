import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    }) ;
})
