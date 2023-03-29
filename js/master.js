/* Control Links by clicking on bars and x-mark icons*/

document.querySelector(".bars").onclick = () => {
    document.querySelector(".header-content .header-links").classList.remove("translate-x-100");
}

document.querySelector(".x-mark").onclick = () => {
    document.querySelector(".header-content .header-links").classList.add("translate-x-100");
}