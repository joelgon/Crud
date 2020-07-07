using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEnd.Data;
using BackEnd.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Controllers
{
    public class UserController
    {
        private readonly UserContext _context;
        public UserController(UserContext context)
        {
            _context = context;
        }

        [Route("/user")]
        [HttpGet]
        [Route("/user/params")]
        [HttpGet("params")]
        public IEnumerable<User> Get(string Params)
        {
            var user = from m in _context.User select m;
            if (!String.IsNullOrEmpty(Params))
            {
                user = user.Where(
                    u => u.Nome.Contains(Params) ||
                    u.Tipo.Contains(Params) ||
                    u.Documento.Contains(Params) ||
                    u.Telefone.Contains(Params) 
                );
            }
            return user.ToList();
        }


        [Route("/user/{id}")]
        [HttpGet]
        public User Get(int id)
        {
            return _context.User.AsNoTracking().Where(x => x.Id == id).FirstOrDefault();
        }

        [Route("/user")]
        [HttpPost]
        public User Post([FromBody]User user)
        {;
            _context.User.Add(user);
            _context.SaveChanges();
            return user;
        }
        [Route("/user")]
        [HttpPut]
        public User Put([FromBody]User user)
        {
            _context.Entry<User>(user).State = EntityState.Modified;
            _context.SaveChanges();
            return user;
        }
        [Route("/user")]
        [HttpDelete]
        public User Delete([FromBody]User user)
        {
            _context.User.Remove(user);
            _context.SaveChanges();
            return user;
        }
        [Route("/user/{id}")]
        [HttpDelete]
        public void DeleteById(int id)
        {
            var user = _context.User.AsNoTracking().Where(x => x.Id == id).FirstOrDefault();
            _context.User.Remove(user);
            _context.SaveChanges();
        }
    }  
}
