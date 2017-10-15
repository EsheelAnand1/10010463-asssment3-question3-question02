//three let prompt tokeeps users details
// 1 x Constructor to accept new object		
// 1 x Set method called FirstName			
// 1 x Set method called LastName		
// 1 x Set method called Salary	
// 1 class
// user clicks on continue go bring up prompt to enter details  
// after entering their details nothing will shoow up until user clicks show
let check = document.querySelector('#check')//calls out id from html
let name1 = document.querySelector('#name1')
let Nname = document.querySelector('#Nname')
let wages = document.querySelector('#wages')
let show = document.querySelector('#show')

let displayEmployee = () =>{
  //  let Fname = prompt("Please enter your first name")
    // let Lname = prompt("Please enter your last name")
    // let Salary = prompt("Please enter you Salary")
 
class Employee{ //used to create objects 

    constructor(fname, Lname, Salary){ //returs a value like name 
        this._fname = fname; 
        this._Lname = Lname;
        this._Salary = Salary;
        // console.log(Fname)
    } 
    
}
let finame =  prompt("Enter you first name") // to keep users detalins
let last =  prompt("Enter you Last name")
let sal =  prompt("Enter salary")


var first = new Employee(); //keeps information in this case user entry
first.fname = finame // add from user entry from promt 
var second = new Employee();
second.fname = last
var salary = new Employee();
salary.Salary = sal

console.log("Your first name" + " " + first.fname) //call out method
console.log("Your las name" + " " + second.fname)
console.log("Your Salary" + " " + salary.Salary)
// console.log('Your name is  ${this.Fname}')

// if(show.onclick ){
//     check.innerHTML = "Your first name" + " "  + first.fname
//     Nname.innerHTML = "Your las name" + " " + second.fname
//     wage.innerHTML = "Your Salary" + " " + "$"+salary.Salary
// }

show1 = () =>{ // to show employy information when clicked show
    check.innerHTML = "Your first name" + " "  + first.fname // shows information from method
        Nname.innerHTML = "Your last name" + " " + second.fname
        wage.innerHTML = "Your Salary" + " " + "$"+salary.Salary
}
}


show.addEventListener('click', (e) => { //this allows user to click convert and it will run fah function 
    show1();
  e.preventDefault()
})
let submit = document.querySelector('#submit')
submit.addEventListener('click', (e) => { //this allows user to click convert and it will run fah function 
  displayEmployee();
  e.preventDefault()
})