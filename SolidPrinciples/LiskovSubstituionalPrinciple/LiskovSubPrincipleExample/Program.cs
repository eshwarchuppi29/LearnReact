// IEmployeeBase emp1 = new PEmployee(1, "eshwar");
// IEmployeeBase emp2 = new ContractEmployee(2, "kummi");
// IEmployeeBase emp3 = new TemporaryEmployee(3, "venka");

List<Employee> lstOfEmployees1 = new List<Employee>();
Employee emp = new Employee();
lstOfEmployees1.Add(new PEmployee(1, "eshwar"));
lstOfEmployees1.Add(new ContractEmployee(1, "eshwar"));
foreach (var emp in lstOfEmployees1)
{
    Console.WriteLine(emp.Bonus(2000));
}

List<IEmployeeBase> lstOfEmployees = new List<IEmployeeBase>();
lstOfEmployees.Add(new PEmployee(1, "eshwar"));
lstOfEmployees.Add(new ContractEmployee(1, "eshwar"));
lstOfEmployees.Add(new TemporaryEmployee(1, "eshwar"));
foreach (var emp in lstOfEmployees)
{
    Console.WriteLine(emp.MinimumSalary());
}

// Liskov Substituional Principal
/*To get a bonus we can create object from Employee
  To get a Minimum salary using IEmployeeBase
  Without changing the changin the Implementation of Employee*/