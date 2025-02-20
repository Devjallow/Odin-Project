import "./style.css"
import { homapage } from "./home";
import { theBoby } from "./home";
import { thefooter } from "./home";
import { thecontact } from "./contact";
import { theFirstContact } from "./contact";
import { theSecondContact } from "./contact";
import { theThirdContact } from "./contact";

import { firstMenu } from "./menu";
import {thesecondMenu} from "./menu"
import { thethirdMenu } from "./menu";
import { thefourthMenu } from "./menu";
import { thefifthMenu } from "./menu";
import { thesixthMenu } from "./menu";



let home = document.getElementById("home")
let elesdiv = document.getElementById("content")
let newele = homapage()
let another = theBoby()
let foter = thefooter()
let themenu = firstMenu()
console.log(newele)

elesdiv.appendChild(newele)
elesdiv.appendChild(another)
elesdiv.appendChild(foter)

home.addEventListener("click", ()=> {
elesdiv.innerHTML = " "
let newele = homapage()
let another = theBoby()
let foter = thefooter()
console.log(newele)

elesdiv.appendChild(newele)
elesdiv.appendChild(another)
elesdiv.appendChild(foter)
})


let contact = document.getElementById("contact")
 
contact.addEventListener("click", ()=>{
    elesdiv.innerHTML = ""

    let tcontact = thecontact()
    let fcontact = theFirstContact()
    let scontact = theSecondContact()
    let thcontact = theThirdContact()
    elesdiv.appendChild(tcontact)
    elesdiv.appendChild(fcontact)
    elesdiv.appendChild(scontact)
    elesdiv.appendChild(thcontact)

});
let about = document.getElementById("about")
about.addEventListener("click", ()=> {
    elesdiv.innerHTML = ""

     let thefirstmenu = firstMenu()
     let themenu = thesecondMenu()
     let thmenu = thethirdMenu()
     let tfmenu = thefourthMenu()
     let tffmenu = thefifthMenu()
     let tsmenu = thesixthMenu()
     
  
    elesdiv.appendChild(thefirstmenu)
    elesdiv.appendChild(themenu)
    elesdiv.appendChild(thmenu)
    elesdiv.appendChild(tfmenu)
    elesdiv.appendChild(tffmenu)
    elesdiv.appendChild(tsmenu)

    
})
