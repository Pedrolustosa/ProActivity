using System.Threading.Tasks;
using ProActivity.Domain.Entities;

namespace ProActivity.Domain.Interfaces.Repositories
{
    public interface IActivityRepo
    {
         Task<Activity[]> TakeAllAsync();
         Task<Activity> TakeByIdAsync();
         Task<Activity> TakeByTitleAsync();
    }
}