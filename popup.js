$(function() {
    $('#onButton').bind('click', function() {

        chrome.extension.getBackgroundPage().setSnoozeUntil(new Date(new Date().getTime() + 20000).getTime());
        $("#onButton").hide();
        $("#offButton").show();
        // self.close();

    });
    $('#stopButton').bind('click', function() {
        chrome.extension.getBackgroundPage().setSnoozeUntil(null);
        $("#offButton").hide();
        $("#onButton").show();
        // self.close();
    });

    // $('button').hide();


    chrome.storage.local.get(function(settings) {
        $('#recruitModeButton').toggle(!settings.recruitMode);
        $('#normalButton').toggle(settings.recruitMode);
        var isSnoozing = !(!settings.snoozeUntil || settings.snoozeUntil < new Date().getTime);
        $('#onButton').toggle(!isSnoozing);
        $('#offButton').toggle(isSnoozing);
    });
});