let input = document.getElementById("input")
let h2 = document.getElementById("text")
let button = document.getElementById("button")
const ulelement = document.getElementById("ulelement")
let button2 = document.getElementById("button2")
let savetab = document.getElementById("savetab")
let myleads = []


button2.addEventListener("click", function() {
    localStorage.clear()
    myleads = []
    read(myleads)
    swal("Usunales wszystkie linki", "aha spoko nie wnikam")


})


button.addEventListener("click", click)
let getlocalstorage = JSON.parse(localStorage.getItem("myleads"))




if (getlocalstorage) {
    myleads = getlocalstorage
    read(myleads)
}
savetab.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true, }, function(tabs) {
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myleads))
        read(myleads)

    })
})

function read(leads) {
    let table = ""
    for (let i = 0; i < leads.length; i++) {
        table += `<li><a target="_blank" href='${leads[i]}'>${leads[i]}</a></li>`
    }

    ulelement.innerHTML = table
}


function click() {
    myleads.push(input.value)
    input.value = ""
    localStorage.setItem("myleads", JSON.stringify(myleads))
    read(myleads)
}