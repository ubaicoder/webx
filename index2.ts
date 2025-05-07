class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayPdetail(): string {
        return "Name: " + this.name + " Age: " + this.age;
    }
}

class Emp extends Person {
    salary: number;

    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this.salary = salary;
    }

    displayfulldetail(): string {
        return `Name and age: ${this.displayPdetail()} Salary: ${this.salary}`;
    }
}

document.getElementById('empform')!.addEventListener('submit', function (event) {
    event.preventDefault();

    const nam = document.getElementById('name') as HTMLInputElement;
    const ag = document.getElementById('age') as HTMLInputElement;
    const sal = document.getElementById('salary') as HTMLInputElement;

    const newUse = new Emp(nam.value, ag.valueAsNumber, sal.valueAsNumber);
    document.getElementById('output')!.innerHTML = newUse.displayfulldetail();
});
