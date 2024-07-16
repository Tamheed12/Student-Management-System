/*
I am Tamheed Tariq

        I make student management system
        by using
        .class
        .function
        .inquirer
        .class methods
*/
//use class for student information need and also add method
export class student {
    //make studen type we need
    id;
    name;
    FatherName;
    Enroll_in_courses;
    balance;
    //use constructor to assigin value of above type
    constructor(Name, Fname) {
        //when we call type in class use this.
        this.name = Name;
        this.FatherName = Fname;
        this.Enroll_in_courses = [];
        //we give defealt value to balance is to pay fees
        this.balance = 5000;
        //for id .we make a variable to give random id
        let idnumber = 1;
        this.id = ++idnumber;
    }
    ;
    //1. method
    //make method that add student in courses
    //courses is array use push() to add data
    add_in_courses(addcourse) {
        this.Enroll_in_courses.push(addcourse);
    }
    ;
    //2. method
    //make method that show us student balance
    showbalance() {
        console.log(`
            Student Id : ${this.id}
            Name : ${this.name}
            Father Name : ${this.FatherName}
            Balance : ${this.balance}
            `);
    }
    ;
    //3. method
    //make method to pay fees of student
    Payfees(amount) {
        this.balance -= amount;
        console.log(`
            ${this.name} 
            your fees ${amount} is paid
            Remaing balance is ${this.balance}
            `);
    }
    ;
    //4. method
    //make method that show student status
    studentStatus() {
        console.log(`Id : ${this.id}
            Name : ${this.name}
            Father Name : ${this.FatherName}
            Enroll in Courses : ${this.Enroll_in_courses}
            Balance : ${this.balance}`);
    }
    ;
}
;
//make another class that do
//student manage and work
export class student_Management {
    //make student data type by use above class
    student_data;
    //assigin value to student data
    constructor() {
        this.student_data = [];
    }
    ;
    //1. method
    //mathod to assigin to add new student data
    new_data(NAME, fatherNAME) {
        let students = new student(NAME, fatherNAME);
        this.student_data.push(students);
        console.log(`
            The data of ${NAME} 
            Father name ${fatherNAME}
                Your Id is ${students.id}`);
    }
    ;
    //2. method
    //make find id mathod because it is use in many mathod
    find_student(id) {
        return this.student_data.find(find => find.id === id);
    }
    ;
    //3.method
    //make method to enroll student in course
    enroll_course(id, coursess) {
        let studentId = this.find_student(id);
        //make if to find correct student course
        if (studentId) {
            studentId.add_in_courses(coursess);
            console.log(`Dear ${studentId.name}
                    You are in enroll in ${coursess} course successfully
                    `);
        }
        else {
            console.log(`
                Please enter correct student id
                `);
        }
    }
    ;
    //4. method
    //mathod to view the status of student
    view_balance(id) {
        let student_Balance = this.find_student(id);
        //make if to find correct student balance
        if (student_Balance) {
            student_Balance.showbalance();
        }
        else {
            console.log(`
                Please enter correct student id
                `);
        }
    }
    ;
    //5. method
    //method to pay fees of student
    pay_fee(id, amount) {
        let student_fee = this.find_student(id);
        //make if to find correct student for pay fees
        if (student_fee) {
            student_fee.Payfees(amount);
        }
        else {
            console.log(`
                Please enter correct student id
                `);
        }
    }
    ;
    //6. method
    //method to sshow student status
    showStatus(id) {
        let studentStatus = this.find_student(id);
        //make if to find correct student status
        if (studentStatus) {
            studentStatus.studentStatus();
        }
        else {
            console.log(`
                Please enter correct student id
                `);
        }
    }
    ;
}
;
