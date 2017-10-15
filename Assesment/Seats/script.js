//muntiple if statments i mean mutiple
// 1 function 
// if statments with in an if statment
// 2 lets
// switch statment 2 cases
// 4x for loop
// empty array with 10 entries
// user choose cheat class via dropbox
// user choose 1st seat 
// website ask if user wants another seat
// if user said yes give another seat
// user say cancel show Flight leaves in 3 hours
// if plane runs out of seat of the choosen class show user seats ran out of class
// if user says yes to another class given user other class seay
// if user say cancel to other class seat show Flight leaves in 3 hours
// Show users their seat

let number = document.querySelector('#number').value
let seat = document.querySelector('#seat')
let YorNo = document.querySelector('#YorNO')
let checker = document.querySelector('#checker')
let seatnu = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //to create an empty array
// var nnumber = document.getElementById("number").value;


let plane = () => {
    let First = "First Class";
    let Economy = "Economy Class";
    let number = document.getElementById("number").value;
    switch (number) {

        case First://if user choosed first class
            alert("First Class")

            for (i = 0; i < 5; i++) { // 5 times loop
                let seatnu = false;
                let asseat = i + 1; // adds 1 to 0 and so on
                alert("You have been assigned seat number" + " " + asseat) 
                // let no =prompt("Do you want more seats" , "Yes/No")
                let answer = confirm("Do you want more seats?")// ask if u want more seats //https://stackoverflow.com/questions/9334636/how-to-create-a-dialog-with-yes-and-no-options
                if (answer) { //if ok loop loop wont stop
                    console.log(i)
                } else { // cancel loop will stop
                    console.log(i)
                    alert("Flight leaves in 3 hours") //displays this
                    checker.innerHTML= "your seat number is 1 to" + " " + asseat //shows seats
                    break;


                }
            }


            if (5 == i) { // if all 5 seats are taken for first class
                let change = confirm("All seats are taken do you want to change to economy class?") //will ask u this
                if (change) { //if ok it will alows user to choose economy seat
                    for (i = 5; i < 10; i++) {
                        let asseat = i + 1;
                        alert("You have been assigned seat number" + " " + asseat)
                        console.log(i)
                        let answer = confirm("Do you want more seats?")
                        if (answer) {

                        } else { //if cance;

                            alert("Flight leaves in 3 hours") //will show
                            checker.innerHTML= "your seat number is 1 to" + " " + asseat 
                            break;


                        }
                    }
                }
                if (i == 10) {
                    alert("The flight is full. Flight leaves in 3 hours")
                    checker.innerHTML= "You have taken all the seats"
                   
                }
            }
            break;

        case Economy: // if user chooses economy
            alert("Economy Class")
            for (i = 5; i < 10; i++) { // loop starts from 5
                let seatnu = false;
                let asseat = i + 1; // adds one to 5 and so on
                alert("You have been assigned seat number" + " " + asseat)
                // let no =prompt("Do you want more seats" , "Yes/No")
                let answer = confirm("Do you want more seats?") //https://stackoverflow.com/questions/9334636/how-to-create-a-dialog-with-yes-and-no-options
                if (answer) {

                    console.log(i)
                } else {
                    console.log(i)
                    alert("Flight leaves in 3 hours")
                    checker.innerHTML= "your seat number is 5 to" +  " "  + asseat
                    break;

                }

            }
            if (10 == i) { // if all economy class seats are taken
                let change = confirm("All seats are taken do you want to change to First class?")
                if (change) {
                    for (i = 0; i < 5; i++) {

                        let asseat = i + 1;

                        alert("You have been assigned seat number" + " " + asseat)
                        console.log(i)

                        let answer = confirm("Do you want more seats?")
                        if (answer) {

                        } else {
                            alert("Flight leaves in 3 hours")
                            checker.innerHTML= "your seat number is 1 to" +  " "  + asseat + "for first class and all the economy seats has been taken by you"
                            break;


                        }
                    }

                }
                if (5 == i) {
                    alert("The flight is full. Flight leaves in 3 hours")
                    checker.innerHTML= "You have taken all the seats"
                } else {
                    break;
                }

            }



            break;
        default:

            break;
            checker.innerHTML(i)
    }
}


let submit = document.querySelector('#submit')
submit.addEventListener('click', (e) => {
    plane();
    e.preventDefault()
})