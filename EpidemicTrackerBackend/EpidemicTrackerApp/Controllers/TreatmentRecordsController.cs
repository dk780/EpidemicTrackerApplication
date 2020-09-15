using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EpidemicTrackerApp.Dto;
using EpidemicTrackerApp.Models;
using EpidemicTrackerApp.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EpidemicTrackerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TreatmentRecordsController : ControllerBase
    {
        private ITreatmentRecordsRepository treatmentRecordsRepository;
        public TreatmentRecordsController(ITreatmentRecordsRepository treatmentRecordsRepository)
        {
            this.treatmentRecordsRepository = treatmentRecordsRepository;
        }
        // GET: api/TreatmentRecords
        [HttpGet]
        public ActionResult GetAlltreatmentRecords()
        {
            List<TreatmentRecordsDto> treatmentRecords = new List<TreatmentRecordsDto>();
            treatmentRecords = treatmentRecordsRepository.GetAllTreatmentRecords();
            if (treatmentRecords.Count == 0)
            {
                return NotFound();
            }
            return Ok(treatmentRecords);
        }

        [HttpGet]
        [Route("GetCuredPatients")]
        public ActionResult GetCuredPatients()
        {
            List<TreatmentRecordsDto> curedpatients = new List<TreatmentRecordsDto>();
            curedpatients = treatmentRecordsRepository.GetCuredPatients();
            if (curedpatients.Count == 0)
            {
                return NotFound();
            }
            return Ok(curedpatients);
        }
        [HttpGet]
        [Route("GetUnCuredPatients")]
        public ActionResult GetUnCuredPatients()
        {
            List<TreatmentRecordsDto> uncuredpatients = new List<TreatmentRecordsDto>();
            uncuredpatients = treatmentRecordsRepository.GetUnCuredPatients();
            if (uncuredpatients.Count == 0)
            {
                return NotFound();
            }
            return Ok(uncuredpatients);
        }

        [HttpGet]
        [Route("GetDeceased")]
        public ActionResult GetDeceased()
        {
            List<TreatmentRecordsDto> deceased = new List<TreatmentRecordsDto>();
            deceased = treatmentRecordsRepository.GetDeceased();
            if (deceased.Count == 0)
            {
                return NotFound();
            }
            return Ok(deceased);
        }
        

        [HttpGet]
        [Route("GetStates")]
        public ActionResult GetStates()
        {
            List<StatewiseCountDto> states = new List<StatewiseCountDto>();
            states = treatmentRecordsRepository.GetStates();
            if (states.Count == 0)
            {
                return NotFound("No data found");
            }
            return Ok(states);
        }

        [HttpGet]
        [Route("Details")]
        public ActionResult GetDetails()
        {
            List<TreatmentRecordsDto> details = new List<TreatmentRecordsDto>();
            details = treatmentRecordsRepository.GetDetails();
            if (details.Count == 0)
            {
                return NotFound();
            }
            return Ok(details);
        }

        // GET: api/TreatmentRecords/5
        [HttpGet("{TreatmentRecordsId}")]
        public TreatmentRecords GetTreatmentRecords(int TreatmentRecordsId) => treatmentRecordsRepository.GetTreatmentRecords(TreatmentRecordsId);


        // POST: api/TreatmentRecords
        [HttpPost]
        public ActionResult<TreatmentRecordsDto> PostTreatmentRecords(TreatmentRecordsDto treatmentRecordsDto)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid Data");
            treatmentRecordsRepository.AddTreatmentRecords(treatmentRecordsDto);
            return Ok("Added Successfully.");
        }


        
        [HttpPut]
        [Route("{id}")]
        public ActionResult Put(int id, TreatmentRecordsDto treatmentRecordsDto)
        {
            if (id > 0)
            {
                treatmentRecordsRepository.Update(id, treatmentRecordsDto);
                return Ok("Patient Details Updated");
            }
            return NotFound("Patient with Id " + id.ToString() + " not found to update");

        }



        // DELETE: api/ApiWithActions/5
        [HttpDelete]
        [Route("{id}")]

        public ActionResult Delete(int id)
        {
            if (id > 0)
            {
              treatmentRecordsRepository.Delete(id);
                return Ok(" Id deleted");
            }

            return NotFound(" ID not found");


        }

    }
}
