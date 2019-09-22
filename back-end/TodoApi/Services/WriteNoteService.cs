using System.Linq;
using TodoApi.Data;
using TodoApi.Models;

namespace TodoApi.Services
{
    public interface IWriteNoteService
    {
        void CreateNote(Todo todo);
        void UpdateNote(Todo todo);
        void Delete(int? id);
    }

    public class WriteNoteService : IWriteNoteService
    {
        private readonly TodoContext db;

        public WriteNoteService(TodoContext db)
        {
            this.db = db;
        }

        public void CreateNote(Todo todo)
        {
            this.db.Add(todo);

            db.SaveChanges();
        }

        public void Delete(int? id)
        {
            var existing = this.db.Todos.FirstOrDefault(t => t.Id == id);

            if (existing != null)
            {
                this.db.Todos.Remove(existing);

                db.SaveChanges();
            }
        }

        public void UpdateNote(Todo todo)
        {
            var existing = this.db.Todos.FirstOrDefault(t => t.Id == todo.Id);

            if(existing != null)
            {
                existing.Content = todo.Content;
                existing.When = todo.When;

                db.SaveChanges();
            }
        }
    }
}
