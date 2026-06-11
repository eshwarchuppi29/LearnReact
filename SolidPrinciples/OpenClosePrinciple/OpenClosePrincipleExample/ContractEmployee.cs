public class ContractEmployee : Employee
{
    public ContractEmployee(int id, string name) : base(id, name)
    { }
    public override decimal Bonus(decimal salary)
    {
        return salary * 50;
    }
}