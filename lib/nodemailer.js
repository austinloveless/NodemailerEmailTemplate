const nodemailer = require("nodemailer");
require("dotenv").config();
const subscribe = data => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    logger: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });
  let mailOptions = {
    from: `TravelGram, <${data.email}>`,
    to: data.email,
    subject: `Welcome to TravelGram!`,
    html: `<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <title></title>
    <style>

        html,
        body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
        }

        * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        div[style*="margin: 16px 0"] {
            margin: 0 !important;
        }

        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }

        table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
        }
        table table table {
            table-layout: auto;
        }

        a {
            text-decoration: none;
        }

        img {
            -ms-interpolation-mode:bicubic;
        }

        *[x-apple-data-detectors],
        .unstyle-auto-detected-links *,
        .aBn {
            border-bottom: 0 !important;
            cursor: default !important;
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }


        .im {
            color: inherit !important;
        }


        .a6S {
           display: none !important;
           opacity: 0.01 !important;
    }

    img.g-img + div {
       display: none !important;
    }


        /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
        @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
            u ~ div .email-container {
                min-width: 320px !important;
            }
        }
        /* iPhone 6, 6S, 7, 8, and X */
        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
            u ~ div .email-container {
                min-width: 375px !important;
            }
        }
        /* iPhone 6+, 7+, and 8+ */
        @media only screen and (min-device-width: 414px) {
            u ~ div .email-container {
                min-width: 414px !important;
            }
        }

    </style>
    <style>
        .button-td,
        .button-a {
            transition: all 100ms ease-in;
        }
      .button-td-primary:hover,
      .button-a-primary:hover {
          background: #555555 !important;
          border-color: #555555 !important;
      }

        /* Media Queries */
        @media screen and (max-width: 600px) {

            .email-container {
                width: 100% !important;
                margin: auto !important;
            }
            .fluid {
                max-width: 100% !important;
                height: auto !important;
                margin-left: auto !important;
                margin-right: auto !important;
            }
            .stack-column,
            .stack-column-center {
                display: block !important;
                width: 100% !important;
                max-width: 100% !important;
                direction: ltr !important;
            }
            .stack-column-center {
                text-align: center !important;
            }
            .center-on-narrow {
                text-align: center !important;
                display: block !important;
                margin-left: auto !important;
                margin-right: auto !important;
                float: none !important;
            }
            table.center-on-narrow {
                display: inline-block !important;
            }
            .email-container p {
                font-size: 17px !important;
            }
        }

    </style>

    </head>
    <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #AE2607;">
    <center style="width: 100%; background-color: grey;">
        <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
            Ends today! Book a your next travel adventure now! Prices starting as low as 1$. These deals wont last long! Join Now!
        </div>
        <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
          &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
        </div>
        <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto;" class="email-container">
            <tr>
                <td style="background-color: #ffffff;">
                    <img src="https://images.unsplash.com/photo-1484544808355-8ec84e534d75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" width="600" height="" alt="alt_text" border="0" style="width: 100%; max-width: 600px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555; margin: auto;" class="g-img">
                </td>
            </tr>
            <tr>
                <td style="background-color: #ffffff;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td style="padding: 20px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">
                                <h1 style="margin: 0 0 10px; font-size: 25px; line-height: 30px; color: #333333; font-weight: normal;">Praesent laoreet malesuada&nbsp;cursus.</h1>
                                <p style="margin: 0 0 10px;">Maecenas sed ante pellentesque, posuere leo id, eleifend dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent laoreet malesuada cursus. Maecenas scelerisque congue eros eu posuere. Praesent in felis ut velit pretium lobortis rhoncus ut&nbsp;erat.</p>
                                <ul style="padding: 0; margin: 0; list-style-type: disc;">
                  <li style="margin:0 0 10px 20px;" class="list-item-first">A list item.</li>
                  <li style="margin:0 0 10px 20px;">Another list item here.</li>
                  <li style="margin: 0 0 0 20px;" class="list-item-last">Everyone gets a list item, list items for everyone!</li>
                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 0 20px 20px;">
                                <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: auto;">
                                    <tr>
                                        <td class="button-td button-td-primary" style="border-radius: 4px; background: #AE2607;">
                      <a target="_blank" class="button-a button-a-primary" href="https://www.youtube.com/watch?v=uPNPc1oFXgs&t=81s" style="background: #AE2607; border: 1px solid #000000; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; display: block; border-radius: 4px;">View TravelGram!</a>
                    </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                    </table>
                </td>
            </tr>
            <tr>
                <td valign="middle" style="text-align: center; background-image: url('https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-color: #AE2607; background-position: center center !important; background-size: cover !important;">
                  <div>
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                              <td valign="middle" style="text-align: center; padding: 40px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #ffffff;">
                                  <p style="margin: 0;">Maecenas sed ante pellentesque, posuere leo id, eleifend dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent laoreet malesuada cursus. Maecenas scelerisque congue eros eu posuere. Praesent in felis ut velit pretium lobortis rhoncus ut&nbsp;erat.</p>
                              </td>
                          </tr>
                      </table>
                  </div>
              </td>
          </tr>
          <tr>
              <td valign="top" style="padding: 10px; background-color: #ffffff;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                          <td class="stack-column-center">
                              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                  <tr>
                                      <td style="padding: 10px; text-align: center">
                                          <img src="https://images.unsplash.com/photo-1506020757198-1a3adb04b6b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" width="270" height="270" alt="alt_text" border="0" class="fluid" style="height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555;">
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding: 0 10px 10px; text-align: left;" class="center-on-narrow">
                                          <p style="margin: 0;">Maecenas sed ante pellentesque, posuere leo id, eleifend dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                          <td class="stack-column-center">
                              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                  <tr>
                                      <td style="padding: 10px; text-align: center">
                                          <img src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" width="270" height="270" alt="alt_text" border="0" class="fluid" style="height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555;">
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding: 0 10px 10px; text-align: left;" class="center-on-narrow">
                                          <p style="margin: 0;">Maecenas sed ante pellentesque, posuere leo id, eleifend dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
          <tr>
              <td valign="top" style="padding: 10px; background-color: #ffffff;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                          <td width="33.33%" class="stack-column-center">
                              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                  <tr>
                                      <td style="padding: 10px; text-align: center">
                                          <img src="https://images.unsplash.com/photo-1484804959297-65e7c19d7c9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" width="170" height="170" alt="alt_text" border="0" class="fluid" style="height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555;">
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding: 0 10px 10px; text-align: left;" class="center-on-narrow">
                                          <p style="margin: 0;">Maecenas sed ante pellentesque, posuere leo id, eleifend dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                          <td width="33.33%" class="stack-column-center">
                              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                  <tr>
                                      <td style="padding: 10px; text-align: center">
                                          <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" width="170" height="170" alt="alt_text" border="0" class="fluid" style="height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555;">
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding: 0 10px 10px; text-align: left;" class="center-on-narrow">
                                          <p style="margin: 0;">Maecenas sed ante pellentesque, posuere leo id, eleifend dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                          <td width="33.33%" class="stack-column-center">
                              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                  <tr>
                                      <td style="padding: 10px; text-align: center">
                                          <img src="https://images.unsplash.com/photo-1508711046474-2f4c2d3d30ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" width="170" height="170" alt="alt_text" border="0" class="fluid" style="height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555;">
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding: 0 10px 10px; text-align: left;" class="center-on-narrow">
                                          <p style="margin: 0;">Maecenas sed ante pellentesque, posuere leo id, eleifend dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                      </td>
                                  </tr>
                              </table>
                          </td>

                      </tr>
                  </table>
              </td>
          </tr>
          <tr>
              <td dir="ltr" valign="top" width="100%" style="padding: 10px; background-color: #ffffff;">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                          <td width="33.33%" class="stack-column-center">
                              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                  <tr>
                                      <td dir="ltr" valign="top" style="padding: 0 10px;">
                                          <img src="https://images.unsplash.com/photo-1509220676330-01891402eb14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" width="170" height="170" alt="alt_text" border="0" class="center-on-narrow" style="height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555;">
                                      </td>
                                  </tr>
                              </table>
                          </td>
                          <td width="66.66%" class="stack-column-center">
                              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                  <tr>
                                      <td dir="ltr" valign="top" style="font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding: 10px; text-align: left;" class="center-on-narrow">
                                          <h2 style="margin: 0 0 10px 0; font-family: sans-serif; font-size: 18px; line-height: 22px; color: #333333; font-weight: bold;">Class aptent taciti sociosqu</h2>
                                          <p style="margin: 0 0 10px 0;">Maecenas sed ante pellentesque, posuere leo id, eleifend dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" class="center-on-narrow" style="float:left;">
                                              <tr>
                                                <td class="button-td button-td-primary" style="border-radius: 4px; background: #AE2607;">
                            <a class="button-a button-a-primary" href="https://images.unsplash.com/photo-1509220676330-01891402eb14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" style="background: #AE2607; border: 1px solid #000000; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; display: block; border-radius: 4px;">View Image</a>
                          </td>
                                            </tr>
                                        </table>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
          <tr>
              <td dir="rtl" valign="top" width="100%" style="padding: 10px; background-color: #ffffff;">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                          <td width="33.33%" class="stack-column-center">
                              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                  <tr>
                                      <td dir="ltr" valign="top" style="padding: 0 10px;">
                                          <img src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" width="170" height="170" alt="alt_text" border="0" class="center-on-narrow" style="height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555;">
                                      </td>
                                  </tr>
                              </table>
                          </td>
                          <td width="66.66%" class="stack-column-center">
                              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                  <tr>
                                      <td dir="ltr" valign="top" style="font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding: 10px; text-align: left;" class="center-on-narrow">
                                          <h2 style="margin: 0 0 10px 0; font-family: sans-serif; font-size: 18px; line-height: 22px; color: #333333; font-weight: bold;">Class aptent taciti sociosqu</h2>
                                          <p style="margin: 0 0 10px 0;">Maecenas sed ante pellentesque, posuere leo id, eleifend dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" class="center-on-narrow" style="float:left;">
                                              <tr>
                                                <td class="button-td button-td-primary" style="border-radius: 4px; background: #AE2607;">
                            <a class="button-a button-a-primary" href="https://www.travelocity.com/" style="background: #AE2607; border: 1px solid #000000; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; display: block; border-radius: 4px;">Get Tickets!</a>
                          </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
          <tr>
              <td aria-hidden="true" height="40" style="font-size: 0px; line-height: 0px;">
                  &nbsp;
              </td>
          </tr>
          <tr>
              <td style="background-color: #ffffff;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                          <td style="padding: 20px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">
                              Maecenas sed ante pellentesque, posuere leo id, eleifend dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent laoreet malesuada cursus. Maecenas scelerisque congue eros eu posuere. Praesent in felis ut velit pretium lobortis rhoncus ut&nbsp;erat.
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>

      </table>

        <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto;" class="email-container">
          <tr>
              <td style="padding: 20px; font-family: sans-serif; font-size: 12px; line-height: 15px; text-align: center; color: white;">
                  TravelGram<br><span style="color: white;" >123 Fake Street, SpringField, OR, 97477 US<br>(123) 456-7890</span>
                  <br><br>
                  <unsubscribe class="unstyle-auto-detected-links" style="color: A49B99; text-decoration: underline;">unsubscribe</unsubscribe>
              </td>
          </tr>
      </table>



    </td>
    </tr>
    </table>
    </center>
    </body>
    </html>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
};

module.exports = {
  subscribe
};
