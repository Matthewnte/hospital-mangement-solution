$(() => {
    $.get('http://localhost:3000/patients', (data) => {
        $.each(data, (index, patient) => {
            $('#patient-table-body').append('<tr></tr>').append(`
            <td><img src="./assets/images/patients/patient3.jpg" alt="Picture of Patient" width="60em" class="img-fluid rounded-circle"></td>
            <td class="align-middle">${patient.name}</td>
            <td class="align-middle">${patient.email}</td>
            <td class="align-middle">${patient.contact}</td>
            <td class="align-middle">${patient.address}</td>
            <td class="align-middle">${patient.date}</td>
            <td class="align-middle">${patient.time}</td>
            <td class="align-middle">${patient.status}</td>
            <td class="align-middle"><button patientId="${patient.id}" class="btn btn-sm btn-teal text-white">View Profile</button></td>
            <td class="align-middle"><button patientId="${patient.id}" data-toggle="modal" data-target="#updateModal" id="edit" class="btn"><i class="fa fa-user-edit text-primary"></i></button>
                <button patientId="${patient.id}" id="trash" data-toggle="modal" data-target="#delete-modal" class="btn text-danger"><i class="fa fa-trash"></i></button></td>`)
        })

    })
})