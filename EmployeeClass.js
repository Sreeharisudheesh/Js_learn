function Employee(name,emp_id,role,depart){
    this.name=name;
    this.Emp_id=emp_id;
    this.role=role; 
    this.depart=depart;   
}

Employee.prototype.greet=function() {
        console.log(`hai,I'am ${this.name},My Employee id is ${this.Emp_id} Working here as ${this.role},belongs to ${this.depart} team`);
    }

function TemporaryEmployee(temp_id,temp_dur){
    Employee.call(this,name,role,depart)
    temp_id=temp_id;
    temp_dur=temp_dur;
}

const Emp_2= new TemporaryEmployee(12,"6 months" )
const Emp_1=new Employee("Sreehari",12610,"Analyst","development");
Emp_1.greet();


