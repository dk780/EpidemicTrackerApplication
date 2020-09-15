using EpidemicTrackerApp.Dto;
using EpidemicTrackerApp.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EpidemicTrackerApp.Repositories
{
    public class PatientRepository : IPatientRepository
    {
        private readonly EpidemicTrackerAppDBContext Context;

        public PatientRepository(EpidemicTrackerAppDBContext context)
        {
            Context = context;

        }

        public PatientDto AddPatient(PatientDto patientDto)
        {
            Address addr = new Address()
            {
                AddressId = patientDto.AddressId,
                AddressType = patientDto.AddressType,
                StreetNo = patientDto.StreetNo,
                Area = patientDto.Area,
                City = patientDto.City,
                State = patientDto.State,
                Country = patientDto.Country,
                ZipCode = patientDto.ZipCode,
            };
            Context.Addresses.Add(addr);
            Context.SaveChanges();
            int addressid = addr.AddressId;


            var pat = new Patient()
            {
                PatientID = patientDto.PatientID,
                PatientName = patientDto.PatientName,
                PAge = patientDto.PAge,
                PGender = patientDto.PGender,
                PEmail = patientDto.PEmail,
                PContact = patientDto.PContact,
                AadharID = patientDto.AadharID,
                AddressId = addressid,

            };

            Context.Patients.Add(pat);
            Context.SaveChanges();
            int patientID = pat.PatientID;

           
            Occupation occ = new Occupation()
            {
                OccupationId = patientDto.OccupationId,
                OccupationName = patientDto.OccupationName,
                OccupationType = patientDto.OccupationType,
                PatientID = patientID,
            };
            Context.Occupations.Add(occ);
            Context.SaveChanges();
            int occupationid = occ.OccupationId;

            Address orgaddr = new Address()
            {
                AddressId = patientDto.Org_AddressId,
                AddressType = patientDto.Org_AddressType,
                StreetNo = patientDto.Org_StreetNo,
                Area = patientDto.Org_Area,
                City = patientDto.Org_City,
                State = patientDto.Org_State,
                Country = patientDto.Org_Country,
                ZipCode = patientDto.Org_ZipCode,
            };
            Context.Addresses.Add(orgaddr);
            Context.SaveChanges();
            int orgaddressid = orgaddr.AddressId;

            Organisation org = new Organisation()
            {
                OrganisationId = patientDto.OrganisationId,
                OrganisationName = patientDto.OrganisationName,
                OrganisationContact = patientDto.OrganisationContact,
                PatientID = patientID,
                AddressId = orgaddressid,
            };
            Context.Organisations.Add(org);
            Context.SaveChanges();



            return patientDto;
        }

        public Patient Delete(int PatientId)
        {
            var patient = Context.Set<Patient>().Find(PatientId);
            if(patient== null)
            {
                return patient;
            }

            Context.Set<Patient>().Remove(patient);
            Context.SaveChanges();
            return patient;
        }

        public List<PatientDto> GetAllPatient()
        {

            var patients = (from psnt in Context.Patients
                           .Include(a => a.Address).Include(a => a.Occupation).Include(a => a.Organisation).ThenInclude(a => a.Address)

                            select new PatientDto()
                            {
                                PatientID = psnt.PatientID,
                                PatientName = psnt.PatientName,
                                PAge = psnt.PAge,
                                PGender = psnt.PGender,
                                PEmail = psnt.PEmail,
                                AadharID = psnt.AadharID,
                                PContact = psnt.PContact,

                                AddressId = psnt.Address.AddressId,
                                AddressType = psnt.Address.AddressType,
                                StreetNo = psnt.Address.StreetNo,
                                Area = psnt.Address.Area,
                                City = psnt.Address.City,
                                State = psnt.Address.State,
                                Country = psnt.Address.Country,
                                ZipCode = psnt.Address.ZipCode,

                                OccupationId = psnt.Occupation.OccupationId,
                                OccupationName = psnt.Occupation.OccupationName,
                                OccupationType = psnt.Occupation.OccupationType,

                                OrganisationId = psnt.Organisation.OrganisationId,
                                OrganisationName = psnt.Organisation.OrganisationName,
                                OrganisationContact = psnt.Organisation.OrganisationContact,
                                Org_AddressId= psnt.Organisation.Address.AddressId,
                                Org_AddressType= psnt.Organisation.Address.AddressType,
                                Org_StreetNo= psnt.Organisation.Address.StreetNo,
                                Org_Area = psnt.Organisation.Address.Area,
                                Org_City= psnt.Organisation.Address.City,
                                Org_State= psnt.Organisation.Address.State,
                                Org_Country= psnt.Organisation.Address.Country,
                                Org_ZipCode= psnt.Organisation.Address.ZipCode


                            }).ToList();
            return patients;
        }

        public List<PatientDto> GetPatient(int? PatientId)
        {
            if(Context != null)
            {
                var patients = (from psnt in Context.Patients
                           .Include(a => a.Address).Include(a => a.Occupation).Include(a => a.Organisation)

                                select new PatientDto()
                                {
                                    PatientID = psnt.PatientID,
                                    PatientName = psnt.PatientName,
                                    PAge = psnt.PAge,
                                    PGender = psnt.PGender,
                                    PEmail = psnt.PEmail,
                                    PContact = psnt.PContact,

                                    AddressId = psnt.Address.AddressId,
                                    AddressType = psnt.Address.AddressType,
                                    StreetNo = psnt.Address.StreetNo,
                                    Area = psnt.Address.Area,
                                    City = psnt.Address.City,
                                    State = psnt.Address.State,
                                    Country = psnt.Address.Country,
                                    ZipCode = psnt.Address.ZipCode,


                                    OccupationId = psnt.Occupation.OccupationId,
                                    OccupationName = psnt.Occupation.OccupationName,
                                    OccupationType = psnt.Occupation.OccupationType,

                                    OrganisationId = psnt.Organisation.OrganisationId,
                                    OrganisationName = psnt.Organisation.OrganisationName,
                                    OrganisationContact = psnt.Organisation.OrganisationContact



                                }).FirstOrDefault();
            }
            return null;
        }

        public Patient Update(Patient patientChanges)
        {
            var patient = Context.Patients.Attach(patientChanges);
            patient.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            Context.SaveChanges();
            return patientChanges;
        }
    }
}
