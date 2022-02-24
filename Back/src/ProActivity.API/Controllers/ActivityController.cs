using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ProActivity.API.Models;

namespace ProActivity.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityController : ControllerBase
    {

        public IEnumerable<Activity> Activities = new List<Activity>(){
            new Activity(1),
            new Activity(2),
            new Activity(3)
        };

        [HttpGet]
        public IEnumerable<Activity> Get()
        {
            return Activities;
        }

        [HttpGet("{id}")]
        public Activity GetById(int id)
        {
            return Activities.FirstOrDefault(act => act.Id == id);
        }

        [HttpPost]
        public IEnumerable<Activity> Post(Activity activity)
        {
            return Activities.Append<Activity>(activity);
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
