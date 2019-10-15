document.addEventListener('deviceready', mobileInit, false);

function mobileInit() {
    // Status bar settings
    StatusBar.overlaysWebView(false);
    StatusBar.backgroundColorByHexString("#003366");
    StatusBar.styleLightContent();

    // Inapp browser plugin
    window.open = cordova.InAppBrowser.open;

    //cordova.plugins.certificates.trustUnsecureCerts(true);

    window.alert = function(message) {
        navigator.notification.alert(
            message, // message
            null, // callback
            "Message", // title
            'OK' // buttonName
        );
    };

    if (navigator.network.connection.type == Connection.NONE) {
        navigator.notification.alert('Internet connection required. Please check your connection and try again.', null, 'No Network Connection', 'Close');
        return;
    } else {
        //deviceReadyStartProcessing();
        return;
    }


}