const uri = 'http://localhost:59408/api/TreatmentRecords';
function TreatmentDetails() {
    const addNameTextbox = document.getElementById('patientname');
    const addAgeTextbox = document.getElementById('page');
    const addGenderSelectbox = document.getElementById('gender');
    const addEmailTextbox = document.getElementById('pemail');
    const addAadharIDTextbox = document.getElementById('aadharid');
    const addContactTextbox = document.getElementById('patientcontact');
    const addAddressTypeSelectbox = document.getElementById('addresstype');
    const addStreetTextbox = document.getElementById('street');
    const addAreaTextbox = document.getElementById('area');
    const addCityTextbox = document.getElementById('city');
    const addStateTextbox = document.getElementById('state');
    const addCountryTextbox = document.getElementById('country');
    const addZipCodeTextbox = document.getElementById('zipcode');
    const addOccupationNameTextbox = document.getElementById('occupationname');
    const addOccupationTypeTextbox = document.getElementById('occupationtype');
    const addOrganisationNameTextbox = document.getElementById('organisationname');
    const addOrganisationContactTextbox = document.getElementById('organisationcontact');
    const addOrg_AddressTypeSelectbox = document.getElementById('addresstype1');
    const addOrg_StreetTextbox = document.getElementById('street1');
    const addOrg_AreaTextbox = document.getElementById('area1');
    const addOrg_CityTextbox = document.getElementById('city1');
    const addOrg_StateTextbox = document.getElementById('state1');
    const addOrg_CountryTextbox = document.getElementById('country1');
    const addOrg_ZipCodeTextbox = document.getElementById('zipcode1');
    const addHospitalNameTextbox = document.getElementById('hospitalname');
    const addHospitalContactTextbox = document.getElementById('contact');
    const addHos_AddressTypeSelectbox = document.getElementById('addresstype2');
    const addHos_StreetTextbox = document.getElementById('street2');
    const addHos_AreaTextbox = document.getElementById('area2');
    const addHos_CityTextbox = document.getElementById('city2');
    const addHos_StateTextbox = document.getElementById('state2');
    const addHos_CountryTextbox = document.getElementById('country2');
    const addHos_ZipCodeTextbox = document.getElementById('zipcode2');
    const addDiseaseNameTextbox = document.getElementById('diseasename');
    const addDiseaseTypeTextbox = document.getElementById('diseasetype');
    const addAdmittedDateTextbox = document.getElementById('admitdate');
    const addPrescriptionTextbox = document.getElementById('prescription');
    const addRelievingDateTextbox = document.getElementById('relievingdate');
    const addIsFatalTextbox = document.getElementById('isfatal');
    const addCurrentstageTextbox = document.getElementById('currentstage');




    const data =
    {
        patientName: addNameTextbox.value.trim(),
        pAge: parseInt(addAgeTextbox.value),
        pGender: addGenderSelectbox.value.trim(),
        pEmail: addEmailTextbox.value.trim(),
        aadharID: addAadharIDTextbox.value.trim(),
        pContact: parseFloat(addContactTextbox.value),
        addressType: addAddressTypeSelectbox.value.trim(),
        streetNo: parseInt(addStreetTextbox.value),
        area: addAreaTextbox.value.trim(),
        city: addCityTextbox.value.trim(),
        state: addStateTextbox.value.trim(),
        country: addCountryTextbox.value.trim(),
        zipCode: parseInt(addZipCodeTextbox.value),
        occupationName: addOccupationNameTextbox.value.trim(),
        occupationType: addOccupationTypeTextbox.value.trim(),
        organisationName: addOrganisationNameTextbox.value.trim(),
        organisationContact: addOrganisationContactTextbox.value.trim(),
        org_AddressType: addOrg_AddressTypeSelectbox.value.trim(),
        org_StreetNo: parseInt(addOrg_StreetTextbox.value),
        org_Area: addOrg_AreaTextbox.value.trim(),
        org_City: addOrg_CityTextbox.value.trim(),
        org_State: addOrg_StateTextbox.value.trim(),
        org_Country: addOrg_CountryTextbox.value.trim(),
        org_ZipCode: parseInt(addOrg_ZipCodeTextbox.value),
        hospitalName: addHospitalNameTextbox.value.trim(),
        contact: addHospitalContactTextbox.value.trim(),
        hos_AddressType: addHos_AddressTypeSelectbox.value.trim(),
        hos_StreetNo: parseInt(addHos_StreetTextbox.value),
        hos_Area: addHos_AreaTextbox.value.trim(),
        hos_City: addHos_CityTextbox.value.trim(),
        hos_State: addHos_StateTextbox.value.trim(),
        hos_Country: addHos_CountryTextbox.value.trim(),
        hos_ZipCode: parseInt(addHos_ZipCodeTextbox.value),
        diseaseName: addDiseaseNameTextbox.value.trim(),
        diseaseType: addDiseaseTypeTextbox.value.trim(),
        admittedDate: addAdmittedDateTextbox.value.trim(),
        prescription: addPrescriptionTextbox.value.trim(),
        relievingDate: addRelievingDateTextbox.value.trim(),
        isFatal: addIsFatalTextbox.value.trim(),
        currentstage: parseInt(addCurrentstageTextbox.value)
    };
    fetch(uri,
        {
            method: 'POST',
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        //.then(response => response.json())
        //.then((data) => {
        //    console.log(data);

        //})
        .then(function (response) {
            if (response.status == 200) {
                alert("data added successfully");
                window.location.reload();
            }
            else {
                alert("there is some mistake!");
            }
        })

   

}


$(document).ready(function () {
    if (!sessionStorage.getItem("loginid")) {
        window.location.href = 'http://localhost:59408/index.html'
    }
})

