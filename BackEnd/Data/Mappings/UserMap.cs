using BackEnd.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BackEnd.Data.Mappings
{
    public class UserMap : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("User");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Nome).IsRequired().HasMaxLength(200).HasColumnType("varchar(200)");
            builder.Property(x => x.Tipo).IsRequired().HasMaxLength(2).HasColumnType("varchar(2)");
            builder.Property(x => x.Documento).IsRequired().HasMaxLength(18).HasColumnType("varchar(18)");
            builder.Property(x => x.DataCadastro).IsRequired();
            builder.Property(x => x.Telefone).IsRequired().HasMaxLength(10).HasColumnType("varchar(10)");
            builder.Property(x => x.IsDelete);
        }
    }
}