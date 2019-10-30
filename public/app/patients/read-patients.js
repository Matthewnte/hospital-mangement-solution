$(() => {
    $.get('http://localhost:3000/patients', (data) => {
        $.each(data, (index, patient) => {
            getPatients(patient)
        })

        $.each(data, (i, patient) => {
            allPatients(patient)
        })
    })
})

function getPatients(patient, status) {

    $('#patient-table-body').append('<tr></tr>').append(`
        <td><img src="${patient.imgUrl}" alt="Picture of Patient" width="60em" class="img-fluid rounded-circle"></td>
        <td class="align-middle">${patient.name}</td>
        <td class="align-middle">${patient.email}</td>
        <td class="align-middle">${patient.contact}</td>
        <td class="align-middle">${patient.address}</td>
        <td class="align-middle">${patient.date}</td>
        <td class="align-middle">${patient.time}</td>
        <td class="align-middle"><button id="patient-status" patientId="${patient.id}" class="btn btn-success btn-sm">${patient.status}</button></td>
        <td class="align-middle"><button patientId="${patient.id}" class="btn btn-sm btn-teal text-white viewProfile">View Profile</button></td>
        <td class="align-middle"><button patientId="${patient.id}" data-toggle="modal" data-target="#updateModal" id="edit" class="btn"><i class="fa fa-user-edit text-primary"></i></button>
            <button patientId="${patient.id}" id="trash" data-toggle="modal" data-target="#delete-modal" class="btn text-danger"><i class="fa fa-trash"></i></button></td>`)
}


function allPatients(patient) {
    $('#patient-list').append(
        `<div class="col-1-5 mb-3">
            <div class="card shadow-sm">
                <div class="card-head">
                    <img src="${patient.imgUrl}" class="img-fluid rounded-circle my-3 d-block mx-auto" width="80em">
                    <div class="text-center">
                        <h3 class="h5 mb-0">${patient.name}</h3>
                        <small class="my-0">${patient.email}</small>
                    </div>
                    <div class="text-center mt-2">
                        <button patientId="${patient.id}" class="btn btn-warning text-light viewProfile">View Patient</button>
                    </div>
                </div>
                <hr>
                <div class="card-body pt-0">
                    <h4 class="small text-muted font-weight-bold">Medical Data</h4>
                    <p class="small"> Blood Group: ${patient.bloodGroup} <br>Surgery: ${patient.surgery}  </p>
                    <hr>
                    <p class="small">Phone:<a href="tel:+2347065390558"> ${patient.contact}</a></p>
                </div>
            </div>
        </div>`
    )
}

