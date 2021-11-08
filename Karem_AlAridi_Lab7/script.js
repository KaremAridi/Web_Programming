class Employee{
    constructor(name, email, age, address, yearsOfExp){
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = address;
        this.yearsOfExp = yearsOfExp;
        this.salary = 1000;
    };
    
    static numberOfEmployees=0;
    
    static increaseEmployee(x){
        this.numberOfEmployees+=x;
    }

    printEmployee(){
        console.log(`Name: ${this.name}\nEmail: ${this.email}\nAge: ${this.age}\nAddress: ${this.address}\nYears of Experience: ${this.yearsOfExp}\nSalary: ${this.salary}`);
    }

    increaseSalary(){
        this.salary = this.salary*1.5;
    }
}

class Manager extends Employee{
    constructor(name, email, age, address, yearsOfExp, department){
        super(name, email, age, address, yearsOfExp);
        this.department= department;
        this.salary = 1500;
    };

    static numberOfManagers=0;

    static increaseManager(x){
        this.numberOfManagers+=x;
    }

    printEmployee(){
        console.log(`Name: ${this.name}\nEmail: ${this.email}\nAge: ${this.age}\nAddress: ${this.address}\nYears of Experience: ${this.yearsOfExp}\nSalary: ${this.salary}\nDepartment :${this.department}`);
    }

    increaseSalary(){
        this.salary = this.salary*2;
    }
}

let man1 = new Manager("Karem","karem@company.com",19,"Beirut",4,"CS");
let man2 = new Manager("Sharif","sharif@company.com",20,"Beirut",6,"CS")
let emp1 = new Employee("Reina","reina@company.com",10,"Saida",1);
let emp2 = new Employee("Lou","lou@company.com",5,"Marj Aayoun",0.5);
let emp3 = new Employee("Hassan Jegar","hassan@company.com",19,"Laylaki",2);

const company = [man1,man2,emp1,emp2,emp3];
Manager.increaseManager(2);
Employee.increaseEmployee(3);

for(x of company){
    if(x instanceof Manager){
    x.increaseSalary();
    }
    x.printEmployee();
}


///////////////////////////////////////////////////////////////////////////////////////////////////////


Object.defineProperty(user,{})