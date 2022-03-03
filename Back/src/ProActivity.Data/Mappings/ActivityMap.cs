using ProActivity.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ProActivity.Data.Mappings
{
    public class ActivityMap : IEntityTypeConfiguration<Activity>
    {
        public void Configure(EntityTypeBuilder<Activity> builder)
        {
            builder.ToTable("Activities");

            builder.Property(a => a.Title).HasColumnType("varchar(100)");
            builder.Property(a => a.Description).HasColumnType("varchar(255)");
        }
    }
}