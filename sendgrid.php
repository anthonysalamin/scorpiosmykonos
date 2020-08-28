<?php

    /*
     * SendGrid API v.4
     * Build date: 05/08/2020 | anthonysalamin.ch
    */

    // handle CORS request + preflight
    if (!isset($_SERVER['HTTP_ORIGIN'])) {
        // not a cross-domain request
        exit;
    }

    $wildcard = FALSE; // set to TRUE if no need to limit domains
    $credentials = FALSE; // set TRUE if expecting credential requests (Cookies, Authentication, SSL certificates)
    $allowedOrigins = array('https://scorpiosdev.webflow.io', 'https://copyscorpiosmykonos.webflow.io');
    if (!in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins) && !$wildcard) {
        // origin is not allowed
        exit;
    }
    $origin = $wildcard && !$credentials ? '*' : $_SERVER['HTTP_ORIGIN'];

    header("Access-Control-Allow-Origin: " . $origin);
    if ($credentials) {
        header("Access-Control-Allow-Credentials: true");
    }
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Origin");
    header('P3P: CP="CAO PSA OUR"'); // makes IE to support cookies

    // handling the preflight
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') { 
        exit;
    }

    // response
    header("Content-Type: application/json; charset=utf-8");

    /////////////////////////////////////////////////////////////////////////////////////////
    
    /*
     * SendGrid API
     * extract data + populate HTML body
    */

    require("/home/einmgpmu/public_html/sendgrid-php/sendgrid-php.php");

    // sendGrid credentials
    $APIkey = 'XXXX'; // sendgrid verified domain API key
    $fromEmail = 'hello@anthonysalamin.ch'; // sendgrid verified email address
    $fromName = 'Scorpios Mykonos';

    // inputs variables
    $toEmail = $_POST['email'];    
    $firstName = ucwords(strtolower(htmlspecialchars($_POST['name'])));
    $lastName = ucwords(strtolower(htmlspecialchars($_POST['last-name'])));
    $reservation = ucwords(strtolower(htmlspecialchars($_POST['reservation'])));
    $guests = (int) $_POST['guests'];
    $time = $_POST['time'];
    $date = $_POST['date'];
    $phone = $_POST['phone'];
    $request = ucwords(strtolower(htmlspecialchars($_POST['request'])));
    $month = ucfirst(strtolower(htmlspecialchars($_POST['month']))); 

    // HTML message
    $subjectLine = "{$reservation} request | {$month} | Scorpios Mykonos";
    $plainTextMessage = "Name: {$firstName}\r\n\r\nEmail: {$toEmail}\r\n\r\nRequest Area: {$reservation}\r\n\r\n";
    $htmlMessage = '
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

<head>
  <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
  <meta content="width=device-width" name="viewport" />
  <!--[if !mso]><!-->
  <meta content="IE=edge" http-equiv="X-UA-Compatible" />
  <!--<![endif]-->
  <title></title>
  <!--[if !mso]><!-->
  <!--<![endif]-->
  <style type="text/css">
    body{margin:0;padding:0}table,td,tr{vertical-align:top;border-collapse:collapse}*{line-height:inherit}a[x-apple-data-detectors=true]{color:inherit!important;text-decoration:none!important}
  </style>
  <style id="media-query" type="text/css">
    @media (max-width:520px){.block-grid,.col{min-width:320px!important;max-width:100%!important;display:block!important}.block-grid{width:100%!important}.col{width:100%!important}.col>div{margin:0 auto}img.fullwidth,img.fullwidthOnMobile{max-width:100%!important}.no-stack .col{min-width:0!important;display:table-cell!important}.no-stack.two-up .col{width:50%!important}.no-stack .col.num4{width:33%!important}.no-stack .col.num8{width:66%!important}.no-stack .col.num4{width:33%!important}.no-stack .col.num3{width:25%!important}.no-stack .col.num6{width:50%!important}.no-stack .col.num9{width:75%!important}.video-block{max-width:none!important}.mobile_hide{min-height:0;max-height:0;max-width:0;display:none;overflow:hidden;font-size:0}.desktop_hide{display:block!important;max-height:none!important}}
  </style>
</head>

<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
  <!--[if IE]><div class="ie-browser"><![endif]-->
  <table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" valign="top" width="100%">
    <tbody>
      <tr style="vertical-align: top;" valign="top">
        <td style="word-break: break-word; vertical-align: top;" valign="top">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
          <div style="background-color:#f8f8f8;">
            <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8f8f8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:#ffffff;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:40px; padding-bottom:40px;"><![endif]-->
                <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:40px; padding-bottom:40px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <div align="center" class="img-container center fixedwidth" style="padding-right: 0px;padding-left: 0px;">
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img align="center" alt="Alternate text" border="0" class="center fixedwidth" src="https://uploads-ssl.webflow.com/5e53b00333d3682a2440085e/5f2b124fa2f1573844d10d32_scorpios-logotype.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 175px; display: block;" title="Alternate text" width="175" />
                        <!--[if mso]></td></tr></table><![endif]-->
                      </div>
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style="background-color:#f8f8f8;">
            <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #f1f9ff;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ebf8ec;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8f8f8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:#f1f9ff"><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:#f1f9ff;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:20px; padding-bottom:20px;"><![endif]-->
                <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:20px; padding-bottom:20px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                      <div style="color:#3BB54A;font-family:Arial, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div style="line-height: 1.2; font-size: 12px; font-family: Arial, Helvetica, sans-serif; color: #3BB54A; mso-line-height-alt: 14px;">
                          <p style="font-size: 18px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Arial, Helvetica, sans-serif; mso-line-height-alt: 22px; margin: 0;"><span style="font-size: 18px;"><strong>'.$reservation.' | '.$month.'</strong></span></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style="background-color:#f8f8f8;">
            <div class="block-grid two-up no-stack" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8f8f8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="250" style="background-color:#ffffff;width:250px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:20px; padding-bottom:5px;"><![endif]-->
                <div class="col num6" style="max-width: 320px; min-width: 250px; display: table-cell; vertical-align: top; width: 250px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:20px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                      <div style="color:#000000;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:5px;padding-bottom:10px;padding-left:10px;">
                        <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: right; mso-line-height-alt: 17px; margin: 0;"><strong>Location</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td><td align="center" width="250" style="background-color:#ffffff;width:250px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:20px; padding-bottom:5px;"><![endif]-->
                <div class="col num6" style="max-width: 320px; min-width: 250px; display: table-cell; vertical-align: top; width: 250px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:20px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 5px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                      <div style="color:#000000;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:5px;">
                        <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;">'.$reservation.'</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style="background-color:#f8f8f8;">
            <div class="block-grid two-up no-stack" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8f8f8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="250" style="background-color:#ffffff;width:250px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class="col num6" style="max-width: 320px; min-width: 250px; display: table-cell; vertical-align: top; width: 250px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                      <div style="color:#000000;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:5px;padding-bottom:10px;padding-left:10px;">
                        <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: right; mso-line-height-alt: 17px; margin: 0;"><strong>Date</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td><td align="center" width="250" style="background-color:#ffffff;width:250px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class="col num6" style="max-width: 320px; min-width: 250px; display: table-cell; vertical-align: top; width: 250px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 5px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                      <div style="color:#000000;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:5px;">
                        <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;">'.$date.'</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style="background-color:#f8f8f8;">
            <div class="block-grid two-up no-stack" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8f8f8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="250" style="background-color:#ffffff;width:250px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class="col num6" style="max-width: 320px; min-width: 250px; display: table-cell; vertical-align: top; width: 250px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                      <div style="color:#000000;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:5px;padding-bottom:10px;padding-left:10px;">
                        <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: right; mso-line-height-alt: 17px; margin: 0;"><strong>Time</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td><td align="center" width="250" style="background-color:#ffffff;width:250px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class="col num6" style="max-width: 320px; min-width: 250px; display: table-cell; vertical-align: top; width: 250px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 5px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                      <div style="color:#000000;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:5px;">
                        <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;">'.$time.'</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style="background-color:#f8f8f8;">
            <div class="block-grid two-up no-stack" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8f8f8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="250" style="background-color:#ffffff;width:250px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class="col num6" style="max-width: 320px; min-width: 250px; display: table-cell; vertical-align: top; width: 250px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                      <div style="color:#000000;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:5px;padding-bottom:10px;padding-left:10px;">
                        <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: right; mso-line-height-alt: 17px; margin: 0;"><strong>Status</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td><td align="center" width="250" style="background-color:#ffffff;width:250px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class="col num6" style="max-width: 320px; min-width: 250px; display: table-cell; vertical-align: top; width: 250px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 5px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                      <div style="color:#3BB54A;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:5px;">
                        <div style="line-height: 1.2; font-size: 12px; color: #3BB54A; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;">Requested</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style="background-color:#f8f8f8;">
            <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8f8f8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:#ffffff;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
                        <tbody>
                          <tr style="vertical-align: top;" valign="top">
                            <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 25px; padding-right: 25px; padding-bottom: 25px; padding-left: 25px;" valign="top">
                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 2px solid #F0EAE2; width: 100%;" valign="top" width="100%">
                                <tbody>
                                  <tr style="vertical-align: top;" valign="top">
                                    <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style="background-color:#f8f8f8;">
            <div class="block-grid no-stack" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8f8f8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:#ffffff;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:15px;"><![endif]-->
                <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:15px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top: 5px; padding-bottom: 0px; font-family: Arial, sans-serif"><![endif]-->
                      <div style="color:#000000;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:5px;padding-right:5px;padding-bottom:0px;padding-left:5px;">
                        <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;"><strong>Name</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                      <div style="color:#000000;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;">'.$firstName.' '.$lastName.'</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style="background-color:#f8f8f8;">
            <div class="block-grid no-stack" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8f8f8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:#ffffff;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:15px;"><![endif]-->
                <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:15px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top: 5px; padding-bottom: 0px; font-family: Arial, sans-serif"><![endif]-->
                      <div style="color:#000000;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:5px;padding-right:5px;padding-bottom:0px;padding-left:5px;">
                        <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;"><strong>Email</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                      <div style="color:#000000;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;">'.$toEmail.'</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style="background-color:#f8f8f8;">
            <div class="block-grid no-stack" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8f8f8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:#ffffff;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:15px;"><![endif]-->
                <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:15px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top: 5px; padding-bottom: 0px; font-family: Arial, sans-serif"><![endif]-->
                      <div style="color:#000000;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:5px;padding-right:5px;padding-bottom:0px;padding-left:5px;">
                        <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;"><strong>Phone</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                      <div style="color:#000000;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;">'.$phone.'</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style="background-color:#f8f8f8;">
            <div class="block-grid no-stack" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8f8f8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:#ffffff;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:30px;"><![endif]-->
                <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:30px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top: 5px; padding-bottom: 0px; font-family: Arial, sans-serif"><![endif]-->
                      <div style="color:#000000;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:5px;padding-right:5px;padding-bottom:0px;padding-left:5px;">
                        <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;"><strong>Request</strong></p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                      <div style="color:#000000;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                        <div style="line-height: 1.2; font-size: 12px; color: #000000; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;">'.$request.'</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style="background-color:#f8f8f8;">
            <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8f8f8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <div align="center" class="img-container center fixedwidth" style="padding-right: 0px;padding-left: 0px;">
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img align="center" alt="Alternate text" border="0" class="center fixedwidth" src="https://uploads-ssl.webflow.com/5e53b00333d3682a2440085e/5f2b1173c3e2478892c6b0f5_restaurant-500p.jpg" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 500px; display: block;" title="Alternate text" width="500" />
                        <!--[if mso]></td></tr></table><![endif]-->
                      </div>
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style="background-color:#f8f8f8;">
            <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8f8f8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:#ffffff;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 50px; padding-left: 50px; padding-top: 50px; padding-bottom: 50px; font-family: Arial, sans-serif"><![endif]-->
                      <div style="color:#b7b7b7;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:50px;padding-right:50px;padding-bottom:50px;padding-left:50px;">
                        <div style="line-height: 1.2; font-size: 12px; color: #b7b7b7; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;">Is it necessary to print this email? If you care about the environment like we do, please refrain from printing emails. It helps to keep the environment forested and litter-free. The content of this email is confidential and intended for the recipient specified in message only. It is strictly forbidden to share any part of this message with any third party, without a written consent of the sender. If you received this message by mistake, please reply to this message and follow with its deletion, so that we can ensure such a mistake does not occur in the future. This message has been sent as a part of discussion between sender and the addressee whose name is specified above. Should you receive this message by mistake, we would be most grateful if you informed us that the message has been sent to you. In this case, we also ask that you delete this message from your mailbox, and do not forward it or any part of it to anyone else. Thank you for your cooperation and understanding.</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style="background-color:#f8f8f8;">
            <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8f8f8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:#ffffff;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:40px;"><![endif]-->
                <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:40px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <div align="center" class="img-container center autowidth" style="padding-right: 0px;padding-left: 0px;">
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img align="center" alt="Alternate text" border="0" class="center autowidth" src="https://uploads-ssl.webflow.com/5e53b00333d3682a2440085e/5f2b11717c7bb3eaab1f667f_logomark.jpg" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 87px; display: block;" title="Alternate text" width="87" />
                        <!--[if mso]></td></tr></table><![endif]-->
                      </div>
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style="background-color:#f8f8f8;">
            <div class="block-grid three-up no-stack" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8f8f8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="166" style="background-color:#ffffff;width:166px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:30px;"><![endif]-->
                <div class="col num4" style="max-width: 320px; min-width: 166px; display: table-cell; vertical-align: top; width: 166px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:30px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <div align="right" class="img-container right autowidth" style="padding-right: 0px;padding-left: 0px;">
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="right"><![endif]--><a href="https://www.instagram.com/scorpiosmyk/" style="outline:none" tabindex="-1" target="_blank"> <img align="right" alt="instagram" border="0" class="right autowidth" src="https://uploads-ssl.webflow.com/5e53b00333d3682a2440085e/5f2b1170611b792a66be924a_icon-instagram.jpg" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 40px; float: none; display: block;" title="instagram" width="40" /></a>
                        <!--[if mso]></td></tr></table><![endif]-->
                      </div>
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td><td align="center" width="166" style="background-color:#ffffff;width:166px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class="col num4" style="max-width: 320px; min-width: 166px; display: table-cell; vertical-align: top; width: 166px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <div align="center" class="img-container center autowidth" style="padding-right: 0px;padding-left: 0px;">
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><a href="https://www.facebook.com/scorpiosmykonos/" style="outline:none" tabindex="-1" target="_blank"> <img align="center" alt="facebook" border="0" class="center autowidth" src="https://uploads-ssl.webflow.com/5e53b00333d3682a2440085e/5f2b1170d084376440e045e7_icon-facebook.jpg" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 40px; display: block;" title="facebook" width="40" /></a>
                        <!--[if mso]></td></tr></table><![endif]-->
                      </div>
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td><td align="center" width="166" style="background-color:#ffffff;width:166px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class="col num4" style="max-width: 320px; min-width: 166px; display: table-cell; vertical-align: top; width: 166px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <div align="left" class="img-container left autowidth" style="padding-right: 0px;padding-left: 0px;">
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="left"><![endif]--><a href="https://soundcloud.com/scorpiosmykonos" style="outline:none" tabindex="-1" target="_blank"> <img alt="soundcloud" border="0" class="left autowidth" src="https://uploads-ssl.webflow.com/5e53b00333d3682a2440085e/5f2b117040808453107a8f60_icon-soundcloud.jpg" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 40px; display: block;" title="soundcloud" width="40" /></a>
                        <!--[if mso]></td></tr></table><![endif]-->
                      </div>
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <div style="background-color:#f8f8f8;">
            <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #f0eae2;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color:#f0eae2;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8f8f8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:#f0eae2"><![endif]-->
                <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:#f0eae2;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                  <div style="width:100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                      <!--<![endif]-->
                      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 50px; padding-left: 50px; padding-top: 50px; padding-bottom: 50px; font-family: Arial, sans-serif"><![endif]-->
                      <div style="color:#555555;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:50px;padding-right:50px;padding-bottom:50px;padding-left:50px;">
                        <div style="line-height: 1.2; font-size: 12px; color: #555555; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                          <p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;">copyright © scorpiosmykonos</p>
                        </div>
                      </div>
                      <!--[if mso]></td></tr></table><![endif]-->
                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
  <!--[if (IE)]></div><![endif]-->
</body>

</html>
    ';

    $from = new \SendGrid\Mail\From($fromEmail, $fromName);
    $subject = new \SendGrid\Mail\Subject($subjectLine);
    $to = new \SendGrid\Mail\To($toEmail, $firstName);
    $plainTextContent = new \SendGrid\Mail\PlainTextContent($plainTextMessage);
    $htmlContent = new \SendGrid\Mail\HtmlContent($htmlMessage);

    $email = new \SendGrid\Mail\Mail(
        $from,
        $to,
        $subject,
        $plainTextContent,
        $htmlContent
    );
    $sendgrid = new \SendGrid($APIkey);

    try {
        // send email
        $sendgrid->send($email);
        // setup associative PHP array
        $data = array("name"=>$firstName, "reservation"=>$reservation, "guests"=>$guests, "time"=>$time, "month"=>$month);
        // encode array into JSON + echo data
        echo json_encode($data);
        // error handling
    } catch (Exception $e) {
        echo 'Ooops, SendGrid caught an exception: '.  $e->getMessage(). "\n";
    }

?>