using System;

namespace ProActivity.Domain.Entities
{
    public class Activity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime DateConclusion { get; set; }
        public Priority Priority { get; set; }

        public Activity() => CreationDate = DateTime.Now;

        public Activity(int id, string title, string description) : this()
        {
            Id = id;
            Title = title;
            Description = description;
        }

        public void Conclusion()
        {
            if (DateConclusion == null)
                DateConclusion = DateTime.Now;
            else
                throw new Exception($"Atividade concluida em: {DateConclusion.ToString("dd/MM/yyyy hh:mm")}");
        }
    }
}