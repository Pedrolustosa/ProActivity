using System.Threading.Tasks;
using ProActivity.Data.Context;
using ProActivity.Domain.Interfaces.Repositories;

namespace ProActivity.Data.Repositories
{
    public class GeneralRepo : IGeneralRepo
    {
        private readonly DataContext _context;

        public GeneralRepo(DataContext context)
        {
            _context = context;
        }
        public void Create<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public void DeleteAll<T>(T[] entityArray) where T : class
        {
            _context.RemoveRange(entityArray);
        }

        public async Task<bool> SaveChangeAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }
    }
}