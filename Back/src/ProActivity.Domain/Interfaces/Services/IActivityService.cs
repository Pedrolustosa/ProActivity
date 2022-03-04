using System.Threading.Tasks;
using ProActivity.Domain.Entities;

namespace ProActivity.Domain.Interfaces.Services
{
    public interface IActivityService
    {
        Task<Activity> CreateActivity(Activity model);
        Task<Activity> UpdateActivity(Activity model);
        Task<bool> DeleteActivity(int id);
        Task<bool> ConcludeActivity(Activity model);
        Task<Activity[]> TakeActivityByIdAsync();
        Task<Activity> TakeAllActivityAsync(int activityId);
    }
}