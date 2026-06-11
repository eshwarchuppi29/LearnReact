public abstract class Employee : IEmployeeBase, IEmployeeBonus
{
    public int ID { get; set; }

    public string Name { get; set; }
    public Employee(int id, string name)
    {
        this.ID = id;
        this.Name = name;
    }
    public abstract decimal Bonus(decimal salary);
    public abstract decimal MinimumSalary();
}