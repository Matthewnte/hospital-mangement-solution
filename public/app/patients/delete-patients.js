$(() => {
    let id;

    $('#patient-table-body').on('click', '#trash', function() {
        id = $(this).attr('patientId');
    })

    $('#delete-patient').on('click', function() {
        $.ajax({
            method: 'DELETE',
            url: 'http://localhost:3000/patients/' + id,
            success: function (data){
                $('#patient-table-body').empty();
                $.get('http://localhost:3000/patients', (data) => {
                    $.each(data, (index, patient) => {
                        if (patient.status) {
                            status = 'Checked In'
                        }else {
                            status = 'Checked out'
                            $('#patient-status').removeClass('btn-success')
                            $('#patient-status').addClass('btn-secondary')
                        };
                        
                        getPatients(patient, status );
                        allPatients(patient);
                    })
                })
            }
        })

        $('#delete-modal').modal('hide');
        alert('Patient deleted successfully');
    })
})