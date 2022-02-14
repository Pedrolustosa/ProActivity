using Microsoft.AspNetCore.Mvc;

namespace ProActivity.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "Primeiro Metódo GET";
        }

        [HttpPost]
        public string Post()
        {
            return "Primeiro Metódo POST";
        }

        [HttpPut]
        public string Put()
        {
            return "Primeiro Metódo PUT";
        }

        [HttpDelete]
        public string Delete()
        {
            return "Primeiro Metódo DELETE";
        }

    }
}
