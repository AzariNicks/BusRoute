


//So heres our interactivetly and for now our fake info so



const cl = (event) => console.log(event)            


//right now its all about making an html into a actual file 

const BusIns1 = document.getElementById('Save1')
const BusIns2 = document.getElementById('Save2')
const BusIns3 = document.getElementById('Save3')
const BusIns4 = document.getElementById('Save4')
const BusIns5 = document.getElementById('Save5')
const BusIns6 = document.getElementById('Save6')
const BusIns7 = document.getElementById('Save7')
const BusIns8 = document.getElementById('Save8')
const Tester = () => {console.log('this is working')}
const ClassAdd1 = () => {BusIns1.classList.toggle('Para')}
const ClassAdd2 = () => {BusIns2.classList.toggle('Para')}
const ClassAdd3 = () => {BusIns3.classList.toggle('Para')}
const ClassAdd4 = () => {BusIns4.classList.toggle('Para')}
const ClassAdd5 = () => {BusIns5.classList.toggle('Para')}
const ClassAdd6 = () => {BusIns6.classList.toggle('Para')}
const ClassAdd7 = () => {BusIns7.classList.toggle('Para')}
const ClassAdd8 = () => {BusIns8.classList.add('Para')}
const MouseOver1 = () => {Stoper = setInterval(function () {BusIns1.classList.toggle('FlashColor')}, 1000)
clearInterval()}

function BusClickAndMouseOver () {
    
    BusIns1.addEventListener('click' , ClassAdd1)
    BusIns2.addEventListener('click' , ClassAdd2)
    BusIns3.addEventListener('click' , ClassAdd3)
    BusIns4.addEventListener('click' , ClassAdd4)
    BusIns5.addEventListener('click' , ClassAdd5)
    BusIns6.addEventListener('click' , ClassAdd6)
    BusIns7.addEventListener('click' , ClassAdd7)
    BusIns8.addEventListener('click' , ClassAdd8)
    BusIns1.addEventListener('mouseover', MouseOver1)
}
BusClickAndMouseOver()
cl(BusIns8)
