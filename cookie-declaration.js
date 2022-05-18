document.addEventListener("DOMContentLoaded", () => {
  console.log(
    `%c deployed:`,
    `color: green`,
    `🟢 SCORPIOS | cookie declaration v.1.0.1 | 18.05.2022 @ 09:36`
  );
  cookieDeclaration();
}); // end DOMloaded

function cookieDeclaration() {
  // options
  const cookieName = "SCORPIOS_COOKIE_DECLARATION",
    cookieValue = "ACCEPTED",
    popupDelay = 1, // delay in seconds after which the popup appears
    dayStored = 365, // days during which the cookie is stored in user's browser
    speed = 500;

  const log = console.log,
    gdprWrapper = document.getElementById("gdpr-wrapper"),
    popupButton = document.getElementById("gdpr-continue");

  // 🧠 if no cookie found
  if (!Cookies.get(cookieName)) {
    console.log(`%c warning:`, `color: orange`, `no declaration 🍪 was found yet`); // end logging
    // display popup after x amount of seconds
    setTimeout(() => {
      gdprWrapper.style.display = "flex";
      $(gdprWrapper).fadeTo(speed, 1, "linear");
      console.log(`%c success:`, `color: green`, `declaration 🍪 popup displayed`); // end logging
    }, popupDelay * 1000);

    // close popup on click
    popupButton.addEventListener("click", () => {
      $(gdprWrapper).fadeTo(speed, 0, "linear");
      setTimeout(function () {
        gdprWrapper.style.display = "none";
      }, speed);
    });

    // set date to be equal to x amount of days from current date time in ms
    let date = new Date();
    date.setTime(date.getTime() + dayStored * 24 * 60 * 60 * 1000);

    // 🧠 create cookie on button click to expire on newly defined date
    popupButton.addEventListener("click", () => {
      console.log(
        `%c success:`,
        `color: green`,
        `declaration 🍪 created and stored`
      ); // end logging
      Cookies.set(cookieName, cookieValue, {
        expires: date
      }); // end set cookie
    }); // end listener
  } else {
    console.log(
      `%c success:`,
      `color: green`,
      `"${cookieName}" 🍪 is "${cookieValue}", popup remains hidden.`
    ); // end logging
  } // end if
} // end cookieDeclaration()

// go get an 🍦

/*.#&&(                   
       #&&&&&&&&&&&&&&&&&&&&%           
   /&&&&&&&&&&&&&&&&&&&&&&&&&&&&        
   /&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&      
     &&&&&&&            &&&&&&&&&&&&    
                           &&&&&&&&&&   
                            ,&&&&&&&&&  
           .&&&&&&&&&&%      &&&&&&&&&  
      &&&&&&&&&&&&&&&&&&&&&&& &&&&&&&&& 
    &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 
  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 
 &&&&&&&&&&             %&&&&&&&&&&&&&& 
 &&&&&&&&                  &&&&&&&&&&&  
#&&&&&&&&                   &&&&&&&&&&  
 &&&&&&&&&                &&&&&&&&&&&&& 
 (&&&&&&&&&&          &&&&&&&&&&&&&&&&&&
   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    ,&&&&&&&&&&&&&&&&&&&&&&&&&, &&&&&&&&
       anthonysalamin.ch,     &&&&&&&*/