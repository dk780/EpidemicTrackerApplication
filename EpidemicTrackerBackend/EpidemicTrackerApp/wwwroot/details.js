var cols = []
cols.push(

    {
        "title": "Delete",
        "data": "treatmentRecordsId",
        "render": function (treatmentRecordsId, type, full, meta) {

            return '<a id="delid" href="#"  onClick="deleteDetails(' + treatmentRecordsId + ')">' + "Delete" + '</a>';


        }
    },
    {
        "title": "Edit",
        "data": "treatmentRecordsId",
        "render": function (treatmentRecordsId, type, full, meta) {

            return '<a id="Editid" href="#"  onClick="EditDetails(' + treatmentRecordsId + ')">' + "Edit" + '</a>';


        }
    },

    {
        "title": "Treatment Records Id",
        "data": "treatmentRecordsId",

    },

    {
        "title": "PatientID",
        "data": "patientID",

    },

    {
        "title": "Patient Name",
        "data": "patientName",
    },


    {
        "title": "Patient Age",
        "data": "pAge",
    },
    {
        "title": "Gender",
        "data": "pGender",
    },

    {
        "title": "Email",
        "data": "pEmail",
    },

    {
        "title": "AadharId",
        "data": "aadharID",

    },

    {
        "title": "Contact",
        "data": "pContact",
    },

    {
        "title": "AddressId",
        "data": "addressId",

    },

    {
        "title": "AddressType",
        "data": "addressType",

    },

    {
        "title": "Street No",
        "data": "streetNo",

    },

    {
        "title": "Area",
        "data": "area",

    },

    {
        "title": "City",
        "data": "city",

    },

    {
        "title": "State",
        "data": "state",
    },

    {
        "title": "Country",
        "data": "country",
    },

    {
        "title": "ZipCode",
        "data": "zipCode",
    },

    {
        "title": "OccupationId",
        "data": "occupationId",
    },

    {
        "title": "Occupation Name",
        "data": "occupationName",
    },

    {
        "title": "Occupation Type",
        "data": "occupationType",
    },

    {
        "title": "OrganisationId",
        "data": "organisationId",
    },

    {
        "title": "Organisation Name",
        "data": "organisationName",
    },

    {
        "title": "Contact",
        "data": "organisationContact",
    },

    {
        "title": "Org AddressId",
        "data": "org_AddressId",
    },

    {
        "title": "Org AddressType",
        "data": "org_AddressType",
    },

    {
        "title": "Street No",
        "data": "org_StreetNo",
    },

    {
        "title": "Area",
        "data": "org_Area",
    },

    {
        "title": "City",
        "data": "org_City",
    },

    {
        "title": "State",
        "data": "org_State",
    },

    {
        "title": "Country",
        "data": "org_Country",
    },

    {
        "title": "ZipCode",
        "data": "org_ZipCode",
    },

    {
        "title": "Hospital Id",
        "data": "hospitalId",
    },

    {
        "title": "Hospital Name",
        "data": "hospitalName",
    },

    {
        "title": "Contact",
        "data": "contact",
    },

    {
        "title": "Hosp AddressId",
        "data": "hos_AddressId",
    },

    {
        "title": "Hosp AddressType",
        "data": "hos_AddressType",
    },

    {
        "title": "Street No",
        "data": "hos_StreetNo",
    },

    {
        "title": "Area",
        "data": "hos_Area",
    },

    {
        "title": "City",
        "data": "hos_City",
    },

    {
        "title": "State",
        "data": "hos_State",
    },

    {
        "title": "Country",
        "data": "hos_Country",
    },

    {
        "title": "ZipCode",
        "data": "hos_ZipCode",
    },

    {
        "title": "DiseaseId",
        "data": "diseaseId",
    },

    {
        "title": "Disease Name",
        "data": "diseaseName",
    },

    {
        "title": "Disease Type",
        "data": "diseaseType",
    },

    {
        "title": "Admitted Date",
        "data": "admittedDate",
    },

    {
        "title": "Prescription",
        "data": "prescription",
    },

    {
        "title": "Relieving Date",
        "data": "relievingDate",
    },
    {
        "title": "Is Fatal",
        "data": "isFatal",
    },
    {
        "title": "Current Stage",
        "data": "currentstage",
    },
    
  
)

var details = null;
$(document).ready(function () {


    fetch("http://localhost:59408/api/TreatmentRecords/Details",
        {

            method: 'GET',
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })

        .then(function (res) {
            return res.json();
        })

        .then(function (data) {
            details = data;
            var table = $('#table_one').DataTable({
                data: data,
                "columns": cols,

            })

        })
       


});
function deleteDetails(id) {
    var result = confirm("Are you sure want to delete record?")
    if (result) {

        fetch('http://localhost:59408/api/TreatmentRecords/' + id,

            {
                method: 'DELETE',

            })

            .then(function (response) {

                if (response.status == 200) {
                    window.location.reload();
                }
                else {
                    alert("Oops Got some error!.");
                }
                return response.json()


            })
        return true;
    }
    else {
        return false;
    }


}

function EditDetails(id) {
    details = details.filter(function (el) {

        return el.treatmentRecordsId == id;


    });
    document.getElementById('treatmentrecordid').value = details[0].treatmentRecordsId;
    document.getElementById('patientname').value = details[0].patientName;
    document.getElementById('page').value = details[0].pAge;
    document.getElementById('gender').value = details[0].gender;
    document.getElementById('pemail').value = details[0].pEmail;
    document.getElementById('aadharid').value = details[0].aadharID;
    document.getElementById('patientcontact').value = details[0].pContact;
    document.getElementById('addresstype').value = details[0].addressType;
    document.getElementById('street').value = details[0].streetNo;
    document.getElementById('area').value = details[0].area;
    document.getElementById('city').value = details[0].city;
    document.getElementById('state').value = details[0].state;
    document.getElementById('country').value = details[0].country;
    document.getElementById('zipcode').value = details[0].zipCode;
    document.getElementById('occupationname').value = details[0].occupationName;
    document.getElementById('occupationtype').value = details[0].occupationType;
    document.getElementById('organisationname').value = details[0].organisationName;
    document.getElementById('organisationcontact').value = details[0].organisationContact;
    document.getElementById('addresstype1').value = details[0].org_AddressType;
    document.getElementById('street1').value = details[0].org_StreetNo;
    document.getElementById('area1').value = details[0].org_Area;
    document.getElementById('city1').value = details[0].org_City;
    document.getElementById('state1').value = details[0].org_State;
    document.getElementById('country1').value = details[0].org_Country;
    document.getElementById('zipcode1').value = details[0].org_ZipCode;
    document.getElementById('hospitalname').value = details[0].hospitalName;
    document.getElementById('contact').value = details[0].contact;
    document.getElementById('addresstype2').value = details[0].hos_AddressType;
    document.getElementById('street2').value = details[0].hos_StreetNo;
    document.getElementById('area2').value = details[0].hos_Area;
    document.getElementById('city2').value = details[0].hos_City;
    document.getElementById('state2').value = details[0].hos_State;
    document.getElementById('country2').value = details[0].hos_Country;
    document.getElementById('zipcode2').value = details[0].hos_ZipCode;
    document.getElementById('diseasename').value = details[0].diseaseName;
    document.getElementById('diseasetype').value = details[0].diseaseType
    document.getElementById('admitdate').value = details[0].admittedDate;
    document.getElementById('prescription').value = details[0].prescription;
    document.getElementById('relievingdate').value = details[0].relievingDate;
    document.getElementById('isfatal').value = details[0].isFatal;
    document.getElementById('currentstage').value = details[0].currentstage;
}
function TreatmentDetails() {
    var id = details[0].treatmentRecordsId;
    const data =
    {
        

        patientName: document.getElementById('patientname').value,
        pAge: parseInt(document.getElementById('page').value),
        pGender: document.getElementById('gender').value,
        pEmail: document.getElementById('pemail').value,
        aadharID: document.getElementById('aadharid').value,
        pContact: parseInt(document.getElementById('patientcontact').value),
        addressType: document.getElementById('addresstype').value,
        streetNo: parseInt(document.getElementById('street').value),
        area: document.getElementById('area').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        country: document.getElementById('country').value,
        zipCode: parseInt(document.getElementById('zipcode').value),
        occupationName: document.getElementById('occupationname').value,
        occupationType: document.getElementById('occupationtype').value,
        organisationName: document.getElementById('organisationname').value,
        organisationContact: document.getElementById('organisationcontact').value,
        org_AddressType: document.getElementById('addresstype1').value,
        org_StreetNo: parseInt(document.getElementById('street1').value),
        org_Area: document.getElementById('area1').value,
        org_City: document.getElementById('city1').value,
        org_State: document.getElementById('state1').value,
        org_Country: document.getElementById('country1').value,
        org_ZipCode: parseInt(document.getElementById('zipcode1').value),
        hospitalName: document.getElementById('hospitalname').value,
        contact: document.getElementById('contact').value,
        hos_AddressType: document.getElementById('addresstype2').value,
        hos_StreetNo: parseInt(document.getElementById('street2').value),
        hos_Area: document.getElementById('area2').value,
        hos_City: document.getElementById('city2').value,
        hos_State: document.getElementById('state2').value,
        hos_Country: document.getElementById('country2').value,
        hos_ZipCode: parseInt(document.getElementById('zipcode2').value),
        diseaseName: document.getElementById('diseasename').value,
        diseaseType: document.getElementById('diseasetype').value,
        admittedDate: document.getElementById('admitdate').value,
        prescription: document.getElementById('prescription').value,
        relievingDate: document.getElementById('relievingdate').value,
        isFatal: document.getElementById('isfatal').value,
        currentstage: parseInt(document.getElementById('currentstage').value)
    };


    fetch('http://localhost:59408/api/TreatmentRecords/' + id,
        {
            method: 'PUT',
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(function (response) {
            if (response.status == 200) {
                alert("Details Updated");
                window.location.reload();

                
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);

        })

        .catch(error => console.error('Unable to update data.', error));
}

function Logout() {
    sessionStorage.clear();
    location.replace ('http://localhost:59408/index.html')
    
}

$(document).ready(function () {
    if (!sessionStorage.getItem("loginid")) {
        window.location.href ='http://localhost:59408/index.html'
    }
})






