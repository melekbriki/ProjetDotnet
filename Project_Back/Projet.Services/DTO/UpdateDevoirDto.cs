using System;
using System.ComponentModel.DataAnnotations;

public class UpdateDevoirDto
{
    [Required]
    public string Titre { get; set; }

    public string? Description { get; set; }

    [Required]
    public DateTime DateDevoir { get; set; }
}
