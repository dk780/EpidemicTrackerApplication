using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EpidemicTrackerApp.Dto
{
    public class StatewiseCountDto
    {
        public string State { get; set; }
        public int Cured { get; set; }
        public int UnCured { get; set; }
        public int Fatality { get; set; }
        public int TotalAffected { get; set; }
    }
}
