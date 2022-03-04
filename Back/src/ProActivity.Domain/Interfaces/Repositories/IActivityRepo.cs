using System.Threading.Tasks;
using ProActivity.Domain.Entities;

namespace ProActivity.Domain.Interfaces.Repositories
{
    public interface IActivityRepo : IGeneralRepo
    {
        Task<Activity[]> TakeAllAsync();
        Task<Activity> TakeByIdAsync(int id);
        Task<Activity> TakeByTitleAsync(string title);
    }
}