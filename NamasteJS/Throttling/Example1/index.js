let input = document.getElementById('search-box');
let throttleTimer;
let actualCount = 1,
    throttleCount = 1;
const search = () => {
    console.log(throttleCount++);
    console.log("Fetching Data ..");
}
const throttle = (searchData, time) => {
    //console.log(actualCount++);
    if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
        search(searchData);
        throttleTimer = false;
    }, time);
}
input.addEventListener("input", () => {
    throttle(event.target.value, 1000);
});