using System;
using System.Threading.Tasks;
using ProActivity.Domain.Entities;
using ProActivity.Domain.Interfaces.Repositories;
using ProActivity.Domain.Interfaces.Services;

namespace ProActivity.Domain.Services
{
    public class ActivityService : IActivityService
    {
        private readonly IActivityRepo _activityRepo;
        public ActivityService(IActivityRepo activityRepo)
        {
            _activityRepo = activityRepo;
        }
        public Task<bool> ConcludeActivity(Activity model)
        {
            throw new System.NotImplementedException();
        }

        public async Task<Activity> CreateActivity(Activity model)
        {
            if (await _activityRepo.TakeByTitleAsync(model.Title) != null)
                throw new Exception("Já existe uma atividade com esse título.");

            if (await _activityRepo.TakeByIdAsync(model.Id) == null)
            {
                _activityRepo.Create(model);
                if (await _activityRepo.SaveChangeAsync())
                    return model;
            }

            return null;
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