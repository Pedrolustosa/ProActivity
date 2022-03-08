using System.Linq;
using System.Threading.Tasks;
using ProActivity.Data.Context;
using ProActivity.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using ProActivity.Domain.Interfaces.Repositories;

namespace ProActivity.Data.Repositories
{
    public class ActivityRepo : GeneralRepo, IActivityRepo
    {
        private readonly DataContext _context;
        public ActivityRepo(DataContext context) : base(context)
        {
            _context = context;
        }

        public async Task<Activity[]> TakeAllAsync()
        {
            IQueryable<Activity> query = _context.Activities;

            query = query.AsNoTracking()
                         .OrderBy(activ => activ.Id);

            return await query.ToArrayAsync();
        }

        public async Task<Activity> TakeByIdAsync(int id)
        {
            IQueryable<Activity> query = _context.Activities;

            query = query.AsNoTracking()
                         .OrderBy(activ => activ.Id)
                         .Where(a => a.Id == id);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<Activity> TakeByTitleAsync(string title)
        {
            IQueryable<Activity> query = _context.Activities;

            query = query.AsNoTracking()
                         .OrderBy(activ => activ.Id);

            return await query.FirstOrDefaultAsync(a => a.Title == title);
        }
    }
}