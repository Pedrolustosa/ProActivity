using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using ProActivity.Domain.Entities;
using ProActivity.Domain.Interfaces.Services;
using Microsoft.AspNetCore.Http;

namespace ProActivity.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityController : ControllerBase
    {
        private readonly IActivityService _activityService;
        public ActivityController(IActivityService activityService)
        {
            _activityService = activityService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var activities = await _activityService.TakeAllActivityAsync();
                if (activities == null) return NoContent();

                return Ok(activities);
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar recuperar dados. Erro: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                var activity = await _activityService.TakeActivityByIdAsync(id);
                if (activity == null) return NoContent();

                return Ok(activity);
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar recuperar dados. Id: {id}, Erro: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Activity model)
        {
            try
            {
                var activity = await _activityService.CreateActivity(model);
                if (activity == null) return NoContent();

                return Ok(activity);
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar recuperar dados. Erro: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Activity model)
        {
            try
            {
                if (model.Id != id) this.StatusCode(StatusCodes.Status409Conflict, $"Erro ao tentar recuperar dados.");

                var activity = await _activityService.UpdateActivity(model);
                if (activity == null) return NoContent();

                return Ok(activity);
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar recuperar dados. Erro: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var activity = await _activityService.TakeActivityByIdAsync(id);
                if (activity == null) this.StatusCode(StatusCodes.Status409Conflict, $"Erro ao tentar excluir dados inexistente.");

                if (await _activityService.DeleteActivity(id))
                {
                    return Ok(new { message = "Deletado com Sucesso!" });
                }
                else
                {
                    return BadRequest("Ocorreu um problema específico na exclusão!");
                }
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar deletar dados. Id: {id}, Erro: {ex.Message}");
            }
        }

    }
}
