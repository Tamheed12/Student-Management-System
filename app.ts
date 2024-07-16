/*
I am Tamheed Tariq

        I make student management system 
        by using 
        .class
        .function 
        .inquirer
        .class methods 
*/


//import inquirer
import inquirer from "inquirer";

//import class
import { student_Management,student } from "./main.js";



//now class are made
//now we make function to run program
async function run()
{
    // make welcome and creater name on top
    console.log(`
        
        __________________________________Welcome to Student Management System__________________________________
        create by Tamheed Tariq
        `)
    
        //now we save new student management class in variable 
        let studentmanagement=new student_Management()

        //make loop for continous the function run in a loop
        //use while loop
        while(true)//we give defealt value true
        {
            //use inquirer with variable
            let userInput=await inquirer.prompt
            (
                {
                    name:'user',
                    type:'list',
                    message:'select anyone',
                    choices:
                    [
                        "Add student",
                        "Enroll student",
                        "View Student Balance",
                        "Pay fees",
                        "Student status",
                        "Exit"
                    ]
                }
            );


            //use switch case that is esayer then if
            switch(userInput.user)
            {
                
    //case 1
                case"Add student":
                    let userInput=await inquirer.prompt
                    (
                        [
                            {
                                name:'name',
                                type:'input',
                                message:'Write student name :   '
                            },
                            
                            {
                                name:'fname',
                                type:'input',
                                message:'Write student Father name :   '
                            }
                        ]
                    );
                    studentmanagement.new_data(userInput.name,userInput.fname)
                    break;
                
                
    //case 2
                case"Enroll student":
                    let enroll=await inquirer.prompt
                    (
                        [
                            {
                                name:'id',
                                type:'input',
                                message:'Write student id :   '
                            },    
                            {
                                name:'course',
                                type:'input',
                                message:'Write student Course name :   '
                            }
                        ]
                    );
                    studentmanagement.enroll_course(enroll.id,enroll.course)
                    break;
            
            
    //case 3
                case"View Student Balance":
                    let studentbalance=await inquirer.prompt
                    (
                        {
                            name:'balance',
                            type:'number',
                            message:'Enter student Id :      '
                        }
                    );
                    studentmanagement.view_balance(studentbalance.balance)
                    break;


    //case 4
                case"Pay fees":
                    let payfees=await inquirer.prompt
                    (
                        [
                            {
                                name:'id',
                                type:'input',
                                message:'Write student id :   '
                            },    
                            {
                                name:'amount',
                                type:'input',
                                message:'Write amount :   '
                            }
                        ]
                    );
                    studentmanagement.pay_fee(payfees.id,payfees.amount)
                    break;


    //case 5
                case"Student status":
                    let studentstatus=await inquirer.prompt
                    (
                        {
                            name:'id',
                            type:'number',
                            message:'Enter student Id:'
                        }
                    );
                    studentmanagement.showStatus(studentstatus.id)
                    break;


    //case 6
                case"Exit":
                    console.log(`
                        Exiting........
                        `);
                    process.exit();
            }; 
        };
}



//call function and run the program
run()