class Employee{
    constructor(name, email, age, address, yearsOfExp){
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = address;
        this.yearsOfExp = yearsOfExp;
        this.salary = 1000;
    };
    
    static numberOfEmployees;
    
    static increaseEmployee(){
        numberOfEmployees++;
    }

    printEmployee(){
        console.log(`Name: ${this.name}\nEmail: ${this.email}\nAge: ${this.age}\nAddress: ${this.address}\nYears of Experience: ${this.yearsOfExp}\nSalary: ${this.salary}`);
    }
}