﻿using System.Linq;
using ProActivity.API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using ProActivity.API.Data;
using System;

namespace ProActivity.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityController : ControllerBase
    {
        private readonly DataContext _context;

        public ActivityController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Activity> Get()
        {
            return _context.Activities;
        }

        [HttpGet("{id}")]
        public Activity GetById(int id)
        {
            return _context.Activities.FirstOrDefault(act => act.Id == id);
        }

        [HttpPost]
        public IEnumerable<Activity> Post(Activity activity)
        {
            _context.Activities.Add(activity);
            if (_context.SaveChanges() > 0)
                return _context.Activities;
            else
                throw new Exception("VocÊ não coseguiu adicionar uma atividade");
        }

        [HttpPut("{id}")]
        public Activity Put(int id, Activity activity)
        {
            if (activity.Id != id) throw new Exception("Você está tentando atuaizar a atividade errada!");

            _context.Update(activity);
            if (_context.SaveChanges() > 0)
                return _context.Activities.FirstOrDefault(act => act.Id == id);
            else
                return new Activity();
        }

        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            var activity = _context.Activities.FirstOrDefault(act => act.Id == id);
            if (activity == null)
                throw new Exception("Você está tentando deletar uma atividade que não existe");

            _context.Remove(activity);

            return _context.SaveChanges() > 0;
        }

    }
}
