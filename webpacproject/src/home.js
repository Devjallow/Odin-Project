export function homapage (){


const theheader = document.createElement("h1")
theheader.classList.add("theheader")
 theheader.innerHTML = "Welcome to my Restaurant"
 return theheader
}
export function theBoby (){

    const newcontainer = document.createElement('div')
    newcontainer.classList.add("newcontainer")
    const menu = document.createElement('h3')
    const owner = document.createElement('p')
    menu.innerHTML = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    owner.innerHTML = "Goldilocks"
    newcontainer.appendChild(menu)
    newcontainer.appendChild(owner)

    const hourlycontainer = document.createElement("div")
    hourlycontainer.classList.add("hourly")
    const hours = document.createElement("h3")
    const stimes = document.createElement('p')
    const mtimes = document.createElement('p')
    const ttimes = document.createElement('p')
    const wtimes = document.createElement('p')
    const thtimes = document.createElement('p')
    const ftimes = document.createElement('p')
    const satime = document.createElement('p')


    stimes.innerHTML = "Sunday: 8am - 8pm"
    mtimes.innerHTML = "Monday: 6am - 6pm"
    ttimes.innerHTML = "Tuesday: 6am - 6pm"
    wtimes.innerHTML = "Wednesday: 6am - 6pm"
    thtimes.innerHTML = "Thursday: 6am - 10pm"
    ftimes.innerHTML = "Friday: 6am - 10pm"
    satime.innerHTML = "Saturday: 8am - 10pm"
    hours.innerHTML = "Hours"
    
    
    newcontainer.appendChild(hours)
    newcontainer.appendChild(stimes)
    newcontainer.appendChild(mtimes)
    newcontainer.appendChild(ttimes)
    newcontainer.appendChild(wtimes)
    newcontainer.appendChild(thtimes)
    newcontainer.appendChild(ftimes)
    newcontainer.appendChild(satime)

    return newcontainer
}

export function thefooter(){
    const tfooter = document.createElement('div')
    tfooter.classList.add("tfooter")
    const location = document.createElement("h3")
    const address = document.createElement("p")

    location.innerHTML = "Location"
    address.innerHTML = "123 Banjul Drive, Forestville, Maine"
    
    tfooter.appendChild(location)
    tfooter.appendChild(address)

    return tfooter

}
