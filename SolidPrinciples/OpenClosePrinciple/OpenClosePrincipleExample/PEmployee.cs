public class PEmployee : Employee
{
    public PEmployee(int id, string name) : base(id, name)
    { }
    public override decimal Bonus(decimal salary)
    {
        return salary * 100;
    }
}