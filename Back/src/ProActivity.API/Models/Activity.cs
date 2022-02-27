namespace ProActivity.API.Models
{
    public class Activity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Priority Priority { get; set; }

        public Activity() { }

        public Activity(int id)
        {
            Id = id;
        }
    }
}