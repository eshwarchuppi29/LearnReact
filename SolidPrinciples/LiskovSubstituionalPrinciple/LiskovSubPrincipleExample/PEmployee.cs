public class PEmployee : Employee
{
    public PEmployee(int id, string name) : base(id, name)
    { }
    public override decimal Bonus(decimal salary)
    {
        return salary * 100;
    }

    public override decimal MinimumSalary()
    {
        return 50000;
    }
}