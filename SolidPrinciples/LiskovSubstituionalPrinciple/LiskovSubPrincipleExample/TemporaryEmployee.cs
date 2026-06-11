public class TemporaryEmployee : IEmployeeBase
{
    public int ID { get; set; }
    public string Name { get; set; }

    public TemporaryEmployee(int id, string name)
    {
        this.ID = id;
        this.Name = Name;
    }
    public decimal MinimumSalary()
    {
        return 50000;
    }
}