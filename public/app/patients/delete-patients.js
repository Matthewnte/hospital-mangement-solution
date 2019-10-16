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
            }
        })
        alert('Patient deleted successfully');
    })

    
    
})