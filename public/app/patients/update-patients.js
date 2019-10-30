$(() => {
    $('#patient-table-body').on('click', '#edit', function () {
        const id = $(this).attr('patientId');
        
        $.get('http://localhost:3000/patients/'+ id, (data) => {
            let $data = {
                name: $('#update-fullname').val(data.name),
                email: $('#update-email').val(data.email),
                address: $('#update-address').val(data.address),
                contact: $('#update-contact').val(data.contact),
                gender: $('#update-gender').val(data.gender),
                surgery: $('#update-surgery').val(data.surgery),
                bloodGroup: $('#update-blood-group').val(data.bloodGroup),
                imgUrl: $('#update-imgUrl').val(data.imgUrl),
            }
            $('#updatePatientInfo').on('click', function () {
                updateData = {
                    imgUrl: $data.imgUrl.val(),
                    name: $data.name.val(),
                    email: $data.email.val(),
                    address: $data.address.val(),
                    contact: $data.contact.val(),
                };
                // Patch json
                $.ajax({
                    type: 'PATCH',
                    url: 'http://localhost:3000/patients/'+ id,
                    data: updateData,
                    dataType: 'json',
                }).done(data => {
                    $('#patient-table-body').empty();
                    refreshData()
                })
            });
        })
    })

    const date = new Date();
    const day = date.getDate(); 
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

    $('#patient-table-body').on('click', '#patient-status', function() {
        const id = $(this).attr('patientId');
        $.get('http://localhost:3000/patients/' + id, (data) => {
            if(data.status === 'Checked in'){
                data.status = "Checked out";
                data.checkoutDate.push(`${year-month-day}`)
            }else {
                data.status = "Checked in"
                data.checkinDate.push(`${year-month-day}`)
            }

            console.log(data.checkinDate)
            console.log(data.checkinDate)
        
            statusUpdate = {
                status: data.status,
                checkinDate: data.checkinDate,
                checkoutDate: data.checkoutDate
            };
            
            // Patch json
            $.ajax({
                type: 'PATCH',
                url: 'http://localhost:3000/patients/'+ id,
                data: statusUpdate,
                dataType: 'json',
            }).done(data => {
                $('#patient-table-body').empty();
                refreshData()
            })
        })

    })
})

function refreshData() {
    $.get('http://localhost:3000/patients', (data) => {
        $.each(data, (index, patient) => {
            getPatients(patient, status);
            allPatients(patient);
        })
        $('.modal').modal('hide');
    })
}