chrome.tabs.getSelected(null, function(tab) {
    myFunction(tab.url);
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
        alert("You are not on facebook or google.")
    }
}
console.log(tablink);


// function whatSiteIsGrampsOn(tablink) {
//     var site, userName, userID;
//     site = String(tablink);
//     tablink = String(tablink);
//     console.log(tablink, "tablink")
//     if (site.includes("facebook")) {
//         alert("Gramps, you are on Facebook.  Do not embarrass me!");

//     } else if (site.includes("google")) {
//         alert("This is your search page, feel free to search whatever you want.")
//     } else {
//         alert("You are not on facebook or google.")
//     }
// }

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     if (changeInfo.status == 'complete') {

//         var site, userName, userID;
//         site = String(tablink);
//         tablink = String(tablink);
//         console.log(tablink, "tablink")
//         if (site.includes("facebook")) {
//             alert("Gramps, you are on Facebook.  Do not embarrass me!");

//         } else if (site.includes("google")) {
//             alert("This is your search page, feel free to search whatever you want.")
//         } else {
//             alert("You are not on facebook or google.")
//         }

//     }
// })

// chrome.notifications.create(
//     'name-for-notification', {
//         type: 'basic',
//         iconUrl: 'image.jpeg',
//         title: "This is a notification",
//         message: "hello there!"
//     },

//     function() {}

// );