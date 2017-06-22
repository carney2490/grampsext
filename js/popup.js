  $(function() {
      chrome.tabs.getSelected(null, function(tab) {
          myFunction(tab.url);
      });
  });

  function myFunction(tablink) {
      var site, userName, userID;
      site = String(tablink);
      tablink = String(tablink);
      console.log(tablink, "tablink")
      if (site.includes("facebook")) {
          alert("Gramps, you are on Facebook.  Do not embarrass me!");

      } else if (site.includes("google")) {
          alert("This is your search page, feel free to search whatever you want.")
      } else {
          alert("You are not on facebook or google.  It is probably safe :)")
      }
  }