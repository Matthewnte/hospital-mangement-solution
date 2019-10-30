$(() => {
    $(document).on('click', '.viewProfile', function () {
        let id = $(this).attr('patientId');
        console.log(id)

        $.get('http://localhost:3000/patients/' + id, (data) => {

            const templateProfile = `
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="../index.html">hospital<span class="font-weight-bold text-warning">Solution</span></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto ml-5"></ul>
        <form class="form-inline my-2 my-lg-0 pr-3">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        </form>

        <div>
        <button id="sign-out" class="btn pr-3 text-light font-weight-bold"><i class="fas fa-sign-out-alt mr-3"></i>Sign Out</button>

        <!-- sign in modal -->
        <div class="modal fade" id="sign-in-modal" tabindex="-1" role="dialog" aria-labelledby="formModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-primary">
                        <h4 class="modal-title text-white" id="formModalLabel">Sign in as admin</h4>
                        <button type="button" class="close text-white" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form class="mb-4">
                            <div class="form-group row align-items-center">
                                <div class="col-sm-12 mt-2">
                                    <input id="sign-in-email" type="text" name="name" class="form-control form-control-lg" placeholder="Email Address" required/> 
                                </div> 
                            </div> 
                            <div class="form-group row align-items-center">
                                <div class="col-sm-12">
                                    <input id="sign-in-password" type="password" name="contact" class="form-control form-control-lg" placeholder="Password" required/> 
                                </div>
                            </div> 
                        </form>
                    </div>
                    <div class="text-right mx-3 mb-5">
                        <button id="submit-sign-in" type="submit" class="btn btn-success btn-block btn-lg">Sign In</button>
                    </div>
                    <p class="ml-3">Don't have an admin account? <span><a data-toggle="modal" data-dismiss="modal" href="#sign-up-modal">Sign up</a></span></p>
                </div>
            </div>
        </div>

        <!-- Sign up modal -->
        <div class="modal fade" id="sign-up-modal" tabindex="-1" role="dialog" aria-labelledby="formModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-primary">
                        <h4 class="modal-title text-white" id="formModalLabel">Sign up</h4>
                        <button type="button" class="close text-white" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form class="mb-4">
                            <div class="form-group row align-items-center">
                                <div class="col-sm-12 mt-2">
                                    <input id="signupEmail" type="text" name="name" class="form-control form-control-lg" placeholder="Email Address" required/> 
                                </div> 
                            </div>
                            <div class="form-group row align-items-center">
                                <div class="col-sm-12">
                                    <input id="adminCode" type="password" name="contact" class="form-control form-control-lg" placeholder="Admin code" required/> 
                                </div>
                            </div> 
                            <div class="form-group row align-items-center">
                                <div class="col-sm-12">
                                    <input id="signupPassword" type="password" name="contact" class="form-control form-control-lg" placeholder="Password" required/> 
                                </div>
                            </div> 
                        </form>
                    </div>
                    <div class="text-right mx-3 mb-5">
                        <button id="signupButton" type="button" class="btn btn-success text-white btn-block btn-lg">Sign up</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</nav>
  
<div id="profile-page-content" class="container py-3">
<div class="row">
    <div class="col-sm-6 col-md-3">
        <img id="patientPhoto" src="${data.imgUrl}" alt="Picture of patient" class="w-100 img-thumbnail">
    </div>
    <div class="col-sm-6 col-md-5">
        <h2 class="mt-3 h4 font-weight-bold">Patient Information</h2>
        <div class="mt-3">
            <table id="data" class="table">
                <tr>
                    <th>Full name:</th>
                    <td>${data.name}</td>
                </tr>
                <tr>
                    <th>Contact:</th>
                    <td>${data.contact}</td>
                </tr>
                <tr>
                    <th>Email:</th>
                    <td>${data.email}</td>
                </tr>
                <tr>
                    <th>Room Number:</th>
                    <td>c36</td>
                </tr>
                <tr>
                    <th>Blood Group:</th>
                    <td>${data.bloodGroup}</td>
                </tr>
            </table>
        </div>
    </div>
</div>
<ul class="nav nav-pills mt-4">
    <li class="nav-item">
        <a class="nav-link active" data-toggle="pill" href="#home">Patient History</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" data-toggle="pill" href="#menu1">Medication List</a>
    </li>
</ul>
      <!-- Tab panes -->
<div class="tab-content">
    <div id="home" class="container tab-pane active"><br>
        <div class="card">
            <table class="table table-bordered">
                <thead>
                      <tr>
                          <th></th>
                          <th></th>
                          <th colspan="2">Check in</th>
                          <th colspan="2">Log out</th>
                      </tr>
                      <tr>
                          <th>Present illness</th>
                          <th>Case Summary</th>
                          <th>Time</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Date</th>
                      </tr>
                </thead>
                <tbody id="history-table">
                      <tr>
                          <td class="pt-3">Has been seeing current doctor at the Family Medicine Clinic for 10 years. Health has been stable and feels well. Patient takes no hypertension medicine.</td>
                          <td>The patient is a 55 years old man with hypertension (high blood pressure) and type 2 diabetes. He has been a log time customer of this pharmacy. He is here is pick up refill prescription for his diabetes, which has not been well controlled and also presents a new prescription for a burning sensation in his feet.</td>
                          <td>23:57</td>
                          <td>1995-12-26</td>
                          <td>23:57</td>
                          <td>1995-12-26</td>
                      </tr>
                  </tbody>
            </table>
        </div>
    </div>
    <div id="menu1" class="container tab-pane fade"><br>
        <div class="card">
            <button class="btn py-3">Add medication <i class="fa fa-plus ml-3"></i></button>
            <div class="table-responsive-md">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Medication/Strength</th>
                            <th>Sig</th>
                            <th>Qty</th>
                            <th>Day Supply</th>
                            <th>Original Rx Date</th>
                            <th>Date picked up</th>
                            <th>Refills remaining</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Atorvastatin 20mg</td>
                            <td>1 PO daily</td>
                            <td>30</td>
                            <td>30</td>
                            <td>11/5/12</td>
                            <td>12/17/12</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>Metoprolol succinate 25mg</td>
                            <td>1 PO daily</td>
                            <td>30</td>
                            <td>30</td>
                            <td>11/10/12</td>
                            <td>12/17/12</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Aspirin 325mg</td>
                            <td>1 PO daily</td>
                            <td>30</td>
                            <td>30</td>
                            <td>11/5/12</td>
                            <td>12/17/12</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Atorvastatin 20mg</td>
                            <td>1 PO daily</td>
                            <td>30</td>
                            <td>30</td>
                            <td>11/5/12</td>
                            <td>12/20/12</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Metoprolol succinate 25mg</td>
                            <td>1 PO daily</td>
                            <td>30</td>
                            <td>30</td>
                            <td>11/14/12</td>
                            <td>11/20/12</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Clopidogrel 75mg</td>
                            <td>1 PO daily</td>
                            <td>30</td>
                            <td>30</td>
                            <td>11/14/12</td>
                            <td>11/20/12</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</div>`

            console.log(data.imgUrl)
            $('body').html(templateProfile)
        })


    })
})




