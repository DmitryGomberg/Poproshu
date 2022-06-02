(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const filterSort = document.querySelectorAll(".filter__sort-item");
    filterSort.forEach((element => {
        element.addEventListener("click", (function() {
            filterSort.forEach((element => {
                element.classList.remove("active");
            }));
            element.classList.add("active");
        }));
    }));
    const filtertags = document.querySelectorAll(".filter__tag");
    filtertags.forEach((element => {
        element.addEventListener("click", (function() {
            element.classList.toggle("active");
        }));
    }));
    window["FLS"] = true;
    isWebp();
})();