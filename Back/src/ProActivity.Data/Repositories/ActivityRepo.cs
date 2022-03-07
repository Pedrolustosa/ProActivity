using System.Threading.Tasks;
using ProActivity.Domain.Entities;
using ProActivity.Domain.Interfaces.Repositories;

namespace ProActivity.Data.Repositories
{
    public class ActivityRepo : GeneralRepo, IActivityRepo
    {

        public Task<Activity[]> TakeAllAsync()
        {
            throw new System.NotImplementedException();
        }

        public Task<Activity> TakeByIdAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<Activity> TakeByTitleAsync(string title)
        {
            throw new System.NotImplementedException();
        }
    }
}