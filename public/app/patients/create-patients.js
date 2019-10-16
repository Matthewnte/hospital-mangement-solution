$(() => {
    $('#create-patient').on('click', (event) => {
        const data = {
            name: $('#cp-name').val(),
            email: $('#cp-email').val(),
            contact: $('#cp-contact').val(),
            gender: $('#cp-gender').val(),
            occupation: $('#cp-occupation').val(),
            dob: $('#cp-dob').val(),
            address: $('#cp-address').val(),
            date: $('#cp-date').val(),
            time: $('#cp-time').val(),
        }
        $.post('http://localhost:3000/patients', data,  () => {
            console.log(data);
            $('#patient-table-body').append('<tr></tr>').append(`
            <td class="align-middle">${data.name}</td>
            <td><img src="./assets/images/patients/patient3.jpg" alt="Picture of Patient" width="60em" class="img-fluid rounded-circle"></td>
            <td class="align-middle">${data.email}</td>
            <td class="align-middle">${data.contact}</td>
            <td class="align-middle">${data.address}</td>
            <td class="align-middle">${data.date}</td>
            <td class="align-middle">${data.time}</td>
            <td class="align-middle">${data.status}</td>
            <td class="align-middle"><button patientId="${data.id}" class="btn btn-sm btn-teal text-white">View Profile</button></td>
            <td class="align-middle"><button patientId="${data.id}" data-toggle="modal" data-target="#updateModal" id="edit" class="btn"><i class="fa fa-user-edit text-primary"></i></button>
                <button patientId="${data.id}" id="trash" class="btn btn-danger"><i class="fa fa-trash"></i></button></td>`)
            
            alert('Patient Created Successfully');
        })
    })
})