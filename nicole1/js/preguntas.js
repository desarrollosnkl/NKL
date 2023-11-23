(function(){

const tituloCuestion = [...document.querySelectorAll('.cuestion__titulo')]

console.log(tituloCuestion)

tituloCuestion.forEach(cuestion => {
    cuestion.addEventListener('click', () => {
        let height = 0;
        let answer = cuestion.nextElementSibling;
        let addPadding = cuestion.parentElement.parentElement;

        addPadding.classList.toggle('cuestion__padding--add')
        cuestion.children[0].classList.toggle('cuestion__arrow--rotate')

        if ( answer.clientHeight === 0 ) {
            height = answer.scrollHeight;
        }

        answer.style.height = `${height}px`
    })
});

})();