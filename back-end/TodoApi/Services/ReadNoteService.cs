using System;
using System.Collections.Generic;
using System.Linq;
using TodoApi.Data;
using TodoApi.Models;

namespace TodoApi.Services
{
    public interface IReadNoteService
    {
        Todo GetNote(int? id);
        List<Todo> GetAll();
    }

    public class ReadNoteService : IReadNoteService
    {
        private readonly TodoContext todoContext;

        public ReadNoteService(TodoContext todoContext)
        {
            this.todoContext = todoContext;
        }

        public List<Todo> GetAll()
        {
            return todoContext.Todos.ToList();
        }

        public Todo GetNote(int? id)
        {
            return todoContext.Todos.FirstOrDefault(x => x.Id == id);
        }
    }
}
