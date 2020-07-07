using System;
using System.ComponentModel.DataAnnotations;

namespace BackEnd.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        public string Tipo { get; set; }
        [Required]
        public string Documento { get; set; }
        [Required]
        public DateTime DataCadastro { get; set; }
        [Required]
        public string Telefone { get; set; }
    }
}