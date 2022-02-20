using Microsoft.AspNetCore.Mvc;
using ProActivity.API.Models;

namespace ProActivity.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityController : ControllerBase
    {
        [HttpGet]
        public Activity Get()
        {
            return new Activity();
        }

        [HttpGet("{id}")]
        public string GetById(int id)
        {
            return $"Primeiro Metódo GET {id}";
        }

        [HttpPost]
        public Activity Post(Activity activity)
        {
            return activity;
        }

        [HttpPut("{id}")]
        public Activity Put(int id, Activity activity)
        {
            return activity;
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return "Primeiro Metódo DELETE";
        }

    }
}
