using EpidemicTrackerApp.Dto;
using EpidemicTrackerApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EpidemicTrackerApp.Repositories
{
    public interface ITreatmentRecordsRepository
    {
        TreatmentRecords GetTreatmentRecords(int TreatmentRecordsId);
        List<TreatmentRecordsDto> GetDetails();
        List<TreatmentRecordsDto> GetAllTreatmentRecords();
        List<TreatmentRecordsDto> GetCuredPatients();
        List<TreatmentRecordsDto> GetUnCuredPatients();
        List<TreatmentRecordsDto> GetDeceased();
        //List<TreatmentRecordsDto> GetStateValues();


        List<StatewiseCountDto> GetStates();
        //List<TreatmentRecordsDto> GetStateCured();
        //List<TreatmentRecordsDto> GetStateUnCured();
        //List<TreatmentRecordsDto> GetStateFatal();



        TreatmentRecordsDto AddTreatmentRecords(TreatmentRecordsDto treatmentRecordsDto);

        TreatmentRecordsDto Update(int id, TreatmentRecordsDto treatmentRecordsDto);
        TreatmentRecords Delete(int TreatmentRecordsId);
    }
}
