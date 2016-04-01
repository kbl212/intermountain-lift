<?php
  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);
  
  $intermountainlift_email = "kyle.lauritzen@gmail.com";
  
  $user_name = $request->clientName;
  $user_email = $request->email;
  $user_subject = $request->subject;
  $user_message_input = $request->message;

  $user_headers = "From: <" . $user_email . ">\r\n";
  $user_headers .= "MIME-Version: 1.0 \r\n";
  $user_headers .= "Content-Type: text/html; charset=ISO-8859-1 \r\n";

  $user_message = '
    <html>
      <head>
      </head>
      <body style="padding: 0; margin: 0;">
	<table cellpadding="0" cellspacing="0" width="600px" style="border: 1px solid #b0b0b0; margin-left: auto; margin-right: auto;">
	  <tr style="background-color: #2e2e2e;">
	    <td style="text-align: center;">
	      <img style="width: 200px; margin: 30px auto 30px auto;" src="http://drillrite.net/images/logo.png"/>
	    </td>
	  </tr>
	  <tr style="background-color: #ffffff;">
	    <td>
	      <table width="550px;" style="margin-top: 20px; margin-bottom: 0; margin-left: auto; margin-right: auto;">
		<tr>
		  <td>
		    <h1 style="color: #444; font-family: helvetica;">Intermountain Lift has been contacted by, ' . $user_name . '.</h1>
		      <p style="color: #444; font-size: 18px; font-family: helvetica;"><b>Their Message:</b><br />' . $user_message_input . '</p>
		      <p style="color: #444; font-size: 18px; font-family: helvetica;"><b>Time Sent:</b><br />' . date("l") . " " . date("m/d/Y") . " at " . date("h:i:sa") . '</p>
		      <p style="color: #444; font-size: 18px; font-family: helvetica;"><b>Their Email: </b><a style="text-decoration: none; color: #0b5d85;">' . $user_email . '</a></p>
		      <br />
		  </td>
		</tr>
	      </table>
	    </td>
	  </tr>
	  <tr style="background-color: #2e2e2e;">
	    <td>
	      <table width="550px;" style="margin-top: 10px; margin-bottom: 10; margin-left: auto; margin-right: auto;">
		<tr style="text-align: center;">
		  <td width="300px">
		    <p style="color: #fff; font-size: 15px; font-family: helvetica;">Copyright DrillRite ' . date("Y") . '</p>
		  </td>
		</tr>
	      </table>
	    </td>
	  </tr>
	</table>
      </body>
    </html>
  ';
  
  if (str_replace(" ", "", $user_subject) != "") {
    if (preg_match('/(.+)@(.+){2,}\.(.+){2,}/', $user_email)) {
      if (str_replace(" ", "", $user_name) != "") {
	if (mail($intermountainlift_email, $user_subject, $user_message, $user_headers)) {
	  echo "Your email has been sent.";
	} else {
	  echo "There was an error. Please try again later.";
	}
      } else {
	echo "You did not provide a name.";
      }
    } else {
      echo "The email you provided was invalid.";
    }
  } else {
    echo "You did not provide a subject.";
  }
?>