$(() => {
    $('#create-patient').on('click', (event) => {
        const data = {
            name: $('#cp-name').val(),
            email: $('#cp-email').val(),
            contact: $('#cp-contact').val(),
            gender: $('#cp-gender').val(),
            address: $('#cp-address').val(),
            date: `${year}-${month}-${day}`,
            time: `${hour}:${minute}`,
            status: 'Checked in',
            bloodGroup: $('#cp-blood-group').val(),
            surgery: $('#cp-surgery').val(),
            imgUrl: $('#cp-imgUrl').val()
        }

        $.post('http://localhost:3000/patients', data,  () => {
            getPatients(data);
            allPatients(data);

            $('.modal').modal('hide');
            alert('Patient Created Successfully');
        })
    })

    // history patient
    // $('#patient-table-body').on('click', '#patient-status', function () {
    //     let id = $(this).attr('patientId');
    //     console.log(id)

    //     $('#checkInSubmit').on('click', function() {
    //         const data = {
    //             presentIllness: $('#presentIllness').val(),
    //             caseSummary: $('#caseSummary').val(),
    //             checkintime: `${hour}:${minute}`,
    //             checkindate: `${year}-${month}-${day}`
    //         }

    //         console.log(data)

    //         $.post('http://localhost:3000/checkin/' + id, data, () => {
    //             $('#history-table').append(`<tr></tr>`)
    //             .append(`<td>${data.presentIllness}</td>
    //             <td>${data.caseSummary}</td>
    //             <td>${data.checkIntime}</td>
    //             <td>${data.checkIndate}</td>`)

    //             $('.modal').modal('hide');
    //             alert('Patient Checked in successfully');
    //         })
    //     })
    // })
})

const date = new Date();
const day = date.getDate(); 
const month = date.getMonth();
const year = date.getFullYear();
const hour = date.getHours();
const minute = date.getMinutes();