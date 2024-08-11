<!DOCTYPE html>
<?php
include('func1.php');
$pid='';
$ID='';
$appdate='';
$apptime='';
$fname = '';
$lname= '';
$doctor = $_SESSION['dname'];
if(isset($_GET['pid']) && isset($_GET['ID']) && ($_GET['appdate']) && isset($_GET['apptime']) && isset($_GET['fname']) && isset($_GET['lname'])) {
$pid = $_GET['pid'];
  $ID = $_GET['ID'];
  $fname = $_GET['fname'];
  $lname = $_GET['lname'];
  $appdate = $_GET['appdate'];
  $apptime = $_GET['apptime'];
}



if(isset($_POST['prescribe']) && isset($_POST['pid']) && isset($_POST['ID']) && isset($_POST['appdate']) && isset($_POST['apptime']) && isset($_POST['lname']) && isset($_POST['fname'])){
  $appdate = $_POST['appdate'];
  $apptime = $_POST['apptime'];
  $disease = $_POST['disease'];
  $allergy = $_POST['allergy'];
  $fname = $_POST['fname'];
  $lname = $_POST['lname'];
  $pid = $_POST['pid'];
  $ID = $_POST['ID'];
  $prescription = $_POST['prescription'];
  
  $query=mysqli_query($con,"insert into prestb(doctor,pid,ID,fname,lname,appdate,apptime,disease,allergy,prescription) values ('$doctor','$pid','$ID','$fname','$lname','$appdate','$apptime','$disease','$allergy','$prescription')");
    if($query)
    {
      echo "<script>alert('Prescribed successfully!');</script>";
    }
    else{
      echo "<script>alert('Unable to process your request. Try again!');</script>";
    }
  // else{
  //   echo "<script>alert('GET is not working!');</script>";
  // }initial
  // enga error?
}

?>

<html lang="en">

<head>


    <!-- Required meta tags -->
    <meta charset="utf-8">
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png" />
    <meta name="viewport" content="width=device-width, -scale=1, shrink-to-fit=no">
    <link rel="stylesheet" type="text/css" href="font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
    <!-- Bootstrap CSS -->

    <link rel="stylesheet" href="vendor/fontawesome/css/font-awesome.min.css">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
        integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap" rel="stylesheet">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <a class="navbar-brand" href="#"><i class="fa fa-hospital-o" aria-hidden="true"></i>CEYLON HOSPITALS </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

<style>
    .bg-primary {
        background: #eaf9e6; /* light green fallback */
        background: -webkit-linear-gradient(to right, #004d00, #eaf9e6);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #004d00, #eaf9e6);
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    .list-group-item.active {
        z-index: 2;
        color: #fff;
        background-color: #006400; /* dark green */
        border-color: #00ff00; /* bright green */
    }

    .text-primary {
        color: #006400 !important; /* dark green */
    }

    .btn-primary {
        background-color: #004d00; /* dark green */
        border-color: #004d00; /* dark green */
    }
</style>

        <style>
            .containerMM {
                width: 700px;
                margin: auto;
                padding: 20px;
                font-family: Arial, sans-serif;
            }

            .form-group {
                margin-bottom: 20px;
                position: relative;
            }

            .form-group label {
                display: block;
                margin-bottom: 5px;
                font-weight: bold;
            }

            .form-control {
                width: 100%;
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #ccc;
                box-sizing: border-box;
                font-size: 16px;
            }

            .image-preview {
                margin-top: 10px;
                display: flex;
                align-items: center;
                gap: 15px;
            }

            .image-preview img {
                max-width: 150px;
                max-height: 150px;
                border: 2px solid #4CAF50;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }

            .form-group button {
                padding: 10px 15px;
                border: none;
                border-radius: 5px;
                background-color: #4CAF50;
                color: white;
                font-size: 16px;
                cursor: pointer;
            }

            .form-group button:hover {
                background-color: #45a049;
            }
        </style>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="logout1.php"><i class="fa fa-power-off" aria-hidden="true"></i> Logout</a>

                </li>
                <li class="nav-item">
                    <a class="nav-link" href="doctor-panel.php"><i class="fa fa-sign-out"
                            aria-hidden="true"></i>Back</a>
                </li>
            </ul>
        </div>
    </nav>

</head>
<style type="text/css">
    button:hover {
        cursor: pointer;
    }

    #inputbtn:hover {
        cursor: pointer;
    }
</style>

<body style="padding-top:50px;">
    <div class="container-fluid" style="margin-top:50px;">
        <h3 style="margin-left: 40%;  padding-bottom: 20px; font-family: 'IBM Plex Sans', sans-serif;"> Welcome &nbsp
            <?php echo $doctor ?>
        </h3>

        <div class="tab-pane" id="list-pres" role="tabpanel" aria-labelledby="list-pres-list">
    <form class="form-group" name="prescribeform" method="post" action="prescribe.php" enctype="multipart/form-data">

        <div class="row">
            <div class="containerMM">
                <div class="form-group">
                    <label for="disease">Disease:</label>
                    <textarea id="disease" class="form-control" rows="5" name="disease" required></textarea>
                </div>

                <div class="form-group">
                    <label for="allergy">Allergies:</label>
                    <textarea id="allergy" class="form-control" rows="5" name="allergy" required></textarea>
                </div>
                <br>

                <h5><b>Prescription :</b></h5>
                <br>

                <div class="form-group">
                    <label for="prescriptionOption">Prescription Type:</label>
                    <select id="prescriptionOption" class="form-control" onchange="togglePrescriptionOptions()">
                        <option value="">Select an option</option>
                        <option value="text">Option 1 - Prescribe as Text (Type)</option>
                        <option value="image">Option 2 - Prescribe as Image (Upload)</option>
                    </select>
                </div>

                <div id="textPrescription" class="form-group" style="display:none;">
                    <label for="prescription">Prescription Text:</label>
                    <textarea id="prescription" class="form-control" rows="5" name="prescription"></textarea>
                </div>

                <div id="imagePrescription" class="form-group" style="display:none;">
                    <label for="prescriptionUpload">Prescription Image:</label>
                    <input type="file" id="prescriptionUpload" name="prescriptionUpload" accept="image/*"
                        capture="environment" class="form-control">
                    <div id="previewContainer" class="image-preview"></div>
                </div>

            </div>

            <script>
                document.getElementById('prescriptionUpload').addEventListener('change', function (event) {
                    var file = event.target.files[0];
                    var previewContainer = document.getElementById('previewContainer');
                    previewContainer.innerHTML = '';

                    if (file) {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            var img = document.createElement('img');
                            img.src = e.target.result;
                            img.style.maxWidth = '200px'; // Adjust size as needed
                            img.style.maxHeight = '200px'; // Adjust size as needed
                            previewContainer.appendChild(img);
                        };
                        reader.readAsDataURL(file);
                    }
                });

                function togglePrescriptionOptions() {
                    var option = document.getElementById('prescriptionOption').value;
                    var textPrescription = document.getElementById('textPrescription');
                    var imagePrescription = document.getElementById('imagePrescription');

                    if (option === 'text') {
                        textPrescription.style.display = 'block';
                        imagePrescription.style.display = 'none';
                    } else if (option === 'image') {
                        textPrescription.style.display = 'none';
                        imagePrescription.style.display = 'block';
                    } else {
                        textPrescription.style.display = 'none';
                        imagePrescription.style.display = 'none';
                    }
                }
            </script>

        </div><br>
        <input type="hidden" name="fname" value="<?php echo $fname ?>" />
        <input type="hidden" name="lname" value="<?php echo $lname ?>" />
        <input type="hidden" name="appdate" value="<?php echo $appdate ?>" />
        <input type="hidden" name="apptime" value="<?php echo $apptime ?>" />
        <input type="hidden" name="pid" value="<?php echo $pid ?>" />
        <input type="hidden" name="ID" value="<?php echo $ID ?>" />
        <br><br>
        <input type="submit" name="prescribe" value="Prescribe" class="btn btn-primary" style="margin-left: 40%;">
    </form>
</div>


    </form>
    <br>

    </div>
    </div>