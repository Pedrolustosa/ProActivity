using System.Threading.Tasks;

namespace ProActivity.Domain.Interfaces.Repositories
{
    public interface IGeneralRepo
    {
        void Create<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        void DeleteAll<T>(T[] entity) where T : class;

        Task<bool> SaveChangeAsync();
    }
}