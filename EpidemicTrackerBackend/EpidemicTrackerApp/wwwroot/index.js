$(document).ready(function () {
    var form = $('.login-form');
    var status = false;
    $('#login').click(function (event) {
        event.preventDefault();
        if (status == false) {
            form.fadeIn();
            status = true;
        } else {
            form.fadeOut();
            status = false;
        }
    })
})  




function validateLogin() {
    const uri = 'http://localhost:59408/api/Logins/SignIn';
    const addNameTextbox = document.getElementById('email');
    const addPasswordTextbox = document.getElementById('pwd');

    const item =
    {
        email: addNameTextbox.value.trim(),
        password: addPasswordTextbox.value.trim()
    };
    fetch(uri,
        {
            method: 'POST',
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })

        .then(function (response) {

            if (response.status == 200) {
                sessionStorage.setItem("loginid", "true");

                window.location.href = 'http://localhost:59408/DataTreatment.html';


            }
            else {
                alert("Invalid Username/Password .. Try Again!");
            }


            return response.json()
        })

        

        .then((item) => {
            console.log(item);

            let loginid = item.loginId;
            let name = item.name;
            localStorage.setItem("loginid", loginid);
            localStorage.setItem("name", name);
            console.log(localStorage);
            localStorage.getItem("loginid");
        })
        .catch(error => console.error('Unable to add item.', error));

}




var cols = []
cols.push(
    {
        "title": "States",
        "data": "state",

    },

    {
        "title": "Total Affected",
        "data": "totalAffected",
    },

    
    {
        "title": "Cured",
        "data": "cured",
    },

    {
        "title": "UnCured",
        "data": "unCured",
    },

    {
        "title": "Fatality",
        "data": "fatality",
    },
    
)
var statewise = null;
$(document).ready(function () {


    fetch("http://localhost:59408/api/TreatmentRecords/GetStates",
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
            statewise = data;
            var table = $('#table1').DataTable({
                data: data,
                "columns": cols,

            })

        })



});


        
