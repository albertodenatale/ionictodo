using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApi.Models
{
    public class Todo
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime? When { get; set; }
    }
}
