const endDate = "30 June 2023 01:36 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock () {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;

    if(diff < 0) return; //for stop the countdown on 0, not to show the negative numbers
    
    inputs[0].value = Math.floor(diff/3600/24)
    inputs[1].value = Math.floor((diff/3600) % 24)
    inputs[2].value = Math.floor((diff/60) % 60)
    inputs[3].value = Math.floor(diff % 60)
}
clock();

/**
 * 1 day = 24 hrs
 * 1 hr = 60 mins
 * 1 hr = 3600 sec
 */
setInterval (
    () => {
    clock()
},
    1000
)
