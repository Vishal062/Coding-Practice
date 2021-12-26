let cont = document.getElementById("container")

let count = 1;
let max = 99;
function show(num) {
    let i = 0;

    while (i < num) {
        let div = document.createElement('div')

        div.innerHTML = `Masai School Developer's studentID ${count} got job with ${Math.floor(Math.random() * 15) + 5} Lakh annual ctc`

        cont.append(div)
        count++;
        i++
    }
}

show(25)

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        setTimeout(() => {
            show(25)

        }, 1000)
    }
})