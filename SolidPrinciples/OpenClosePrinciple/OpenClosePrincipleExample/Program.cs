Employee emp1 = new PEmployee(1, "eshwar");
Employee emp2 = new ContractEmployee(2, "kummi");

Console.WriteLine(emp1.Bonus(5000));
Console.WriteLine(emp2.Bonus(5000));

// Open Closed Principle
// Without altering the Employee class, We implement the Bonus for the Contract ane Permanent empolyees by using employee
// as a Abstract class, this makes Employee class is Open for Extensibality and closed for Modification