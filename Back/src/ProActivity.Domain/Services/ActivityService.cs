using System.Threading.Tasks;
using ProActivity.Domain.Entities;
using ProActivity.Domain.Interfaces.Repositories;
using ProActivity.Domain.Interfaces.Services;

namespace ProActivity.Domain.Services
{
    public class ActivityService : IActivityService
    {
        private readonly IActivityRepo _activityRepo;
        private readonly IGeneralRepo _generalRepo;
        public ActivityService(IActivityRepo activityRepo, IGeneralRepo generalRepo)
        {
            _activityRepo = activityRepo;
            _generalRepo = generalRepo;
        }
        public Task<bool> ConcludeActivity(Activity model)
        {
            throw new System.NotImplementedException();
        }

        public Task<Activity> CreateActivity(Activity model)
        {
            throw new System.NotImplementedException();
        }

        public Task<bool> DeleteActivity(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<Activity[]> TakeActivityByIdAsync()
        {
            throw new System.NotImplementedException();
        }

        public Task<Activity> TakeAllActivityAsync(int activityId)
        {
            throw new System.NotImplementedException();
        }

        public Task<Activity> UpdateActivity(Activity model)
        {
            throw new System.NotImplementedException();
        }
    }
}