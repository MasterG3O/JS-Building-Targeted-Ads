// get user's data
// get user's coordinates
async function getCoords(){
    let pos = await new Promise ((resolve,reject) => {
        navigator.geolocation.getCurrentPosition(resolve,reject);
    })
    return[pos.Coords.latitude,pos.coords.longitude]
    return[12,25]
}


// get user's time
function userTime() {
    const now = new Date()
    return now.getHours()
}
console.log(5 > 4 ? "Five is greater than 4 " : "The laws of the universe broke")

// helper functions
// check time of day
function getMealTime() {
    const tod = userTime()
    return tod > 20 ? " late night snack " : tod > 16 ? "dinner" : tod > 11 ?
        "lunch" : "breakfast"
}

console.log(getMealTime())
// build ads
// build ad 1
function buildAd1(){
    const mealTime = getMealTime()
    let content = document.querySelector(".ad1")
    let adParagraph = document.createElement('p')
    adParagraph.innerHTML = `We got the best <span> ${mealTime} </span> in town`
    content.append(adParagraph) 
}

// build ad 2
function buildAd2(coordinates){
    const coords = coordinates
    const href = `https:www.google.com/maps.search/coffee/@${coords[0]},${coords[1]},15z/`
    let content = document.querySelector(".ad2")
    let adParagraph = document.createElement('p')
    adParagraph.innerHTML = `its time to try our cofee </span> <a href= ${href} target ="_blank"> Weve this close!</a> </span>  in town  `
    content.append(adParagraph)
}

// event listeners
// on load, build ads
window.onload = async () => {
    buildAd1()
    const coords = await getCoords()
    buildAd2(coords)
}

