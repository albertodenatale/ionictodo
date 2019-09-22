using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TodoApi.Models;
using TodoApi.Services;

namespace TodoApi.Controllers
{
    public class NoteController:Controller
    {
        private readonly IReadNoteService readNoteService;
        private readonly IWriteNoteService writeNoteService;

        public NoteController(IReadNoteService readNoteService, IWriteNoteService writeNoteService)
        {
            this.readNoteService = readNoteService;
            this.writeNoteService = writeNoteService;
        }

        public ActionResult<Todo> Get(int? id)
        {
            var todo = readNoteService.GetNote(id);

            if(todo != null)
            {
                return Ok(todo);
            }

            return NotFound();
        }

        public ActionResult<List<Todo>> GetAll()
        {
            return readNoteService.GetAll();
        }

        [HttpPost]
        public ActionResult Create([FromBody] Todo todo)
        {
            this.writeNoteService.CreateNote(todo);

            return Ok();
        }

        [HttpDelete]
        public ActionResult Delete(int? id)
        {
            this.writeNoteService.Delete(id);

            return Ok();
        }

        [HttpPut]
        public ActionResult Update([FromBody] Todo todo)
        {
            this.writeNoteService.UpdateNote(todo);

            return Ok();
        }
    }
}
