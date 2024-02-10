using Microsoft.AspNetCore.Mvc;
using MyAmazingWife.Models;
using System.Diagnostics;

namespace MyAmazingWife.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Tutor()
        {
            return View();
        }
    }
}
