import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {  
  title = "Employee page";

  number1=12;
  number2=20;

  visible = this.ShowContent(this.number1, this.number2);
  color: any; 
    
  
  SetColor($event:any) {
    this.color = $event.target.value;
  }

  Employee : any[] = [];
  constructor() {
    this.Employee = [
      {
        Name: "Ah Kow",
        Age: '21',
        Gender: 'M',
      }, {
        Name: "Ah Meow",
        Age: '22',
        Gender: 'F',
      }, {
        Name: "Caterpillar",
        Age: '22',
        Gender: 'F',
      }
    ]
  }

  GetMoreEmployee() : void {
    this.Employee = [
      {
        Name: "Ah Kow",
        Age: '21',
        Gender: 'M',
      }, {
        Name: "Ah Meow",
        Age: '17',
        Gender: 'F',
      }, {
        Name: "Caterpillar",
        Age: '22',
        Gender: 'F',
      }, {
        Name: "Test",
        Age: '18',
        Gender: 'M',
      }, {
        Name: "Test2",
        Age: '17',
        Gender: 'F',
      }, {
        Name: "Ah MMeow",
        Age: '22',
        Gender: 'M',
      }, {
        Name: "Cat",
        Age: '22',
        Gender: 'F',
      }
    ]
  }

  TrackByEmployeeName(index: number, employee: any) :String {
    return employee.Name;
  }

  // returns boolean
  ShowContent(val1: number, val2: number) : boolean {
    if (val1 < val2) {
      return true;
    } else {
      return false;
    }
  }

  IsVisible = true;

  Onchange(arg: any) {
    this.IsVisible=arg;
  }

  CheckAge(Age: number) {
    let val = Age<18?'Under 18':'Above 18';

    switch(val) {
      case 'Under 18':
        return 'red';
      case 'Above 18':
        return 'green';
    }
    return "";
  }

  GetCSS(isEven:any) {
    if (isEven) {
      return "color1";
    } else {
      return "color2";
    }
  }

  ShowSomeData() {
    alert("Hello world");
  }

  myName: string = "comWorks";
}
