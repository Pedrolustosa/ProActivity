using System;
using System.Threading.Tasks;
using ProActivity.Domain.Entities;
using ProActivity.Domain.Interfaces.Services;
using ProActivity.Domain.Interfaces.Repositories;

namespace ProActivity.Domain.Services
{
    public class ActivityService : IActivityService
    {
        private readonly IActivityRepo _activityRepo;
        public ActivityService(IActivityRepo activityRepo)
        {
            _activityRepo = activityRepo;
        }
        public async Task<bool> ConcludeActivity(Activity model)
        {
            if (model != null)
            {
                model.Conclusion();
                _activityRepo.Update<Activity>(model);
                return await _activityRepo.SaveChangeAsync();
            }
            return false;
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

        public async Task<bool> DeleteActivity(int activityId)
        {
            var activity = await _activityRepo.TakeByIdAsync(activityId);
            if (activity == null) throw new Exception("Atividade que tentou deletar não existe.");

            _activityRepo.Delete(activity);
            return await _activityRepo.SaveChangeAsync();
        }

        public async Task<Activity> TakeActivityByIdAsync(int activityId)
        {
            try
            {
                var activity = await _activityRepo.TakeByIdAsync(activityId);
                if (activity == null) return null;

                return activity;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Activity[]> TakeAllActivityAsync()
        {
            try
            {
                var activities = await _activityRepo.TakeAllAsync();
                if (activities == null) return null;

                return activities;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<Activity> UpdateActivity(Activity model)
        {
            if (model.DateConclusion != null)
                throw new Exception("Não pode alterar atvidade já concluida");

            if (await _activityRepo.TakeByIdAsync(model.Id) == null)
            {
                _activityRepo.Update(model);
                if (await _activityRepo.SaveChangeAsync())
                    return model;
            }
            return null;
        }
    }
}