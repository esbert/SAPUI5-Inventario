sap.ui.define([
    "logaligroup/SAPUI5/localService/mockserver",
    "sap/ui/test/opaQunit",
    "./pages/HelloPanel"
],
    /**
     * 
     * @param { typeof sap.ui.test.opaQunit } opaQunit 
     */
    function (mockserver, opaQunit) {
        'use strict';

        QUnit.module("Navigation");
        opaQunit("Should open the Hello dialog", function (Given, When, Then) {

            // initialize the mock server 
            mockserver.init();

            // Arrangements
            Given.iStartMyUIComponent({
                componentConfig: {
                    name: "logaligroup.SAPUI5"
                }
            });

            //Actions
            When.onTheAppPage.iSayHelloDialogButtom();

           	// Assertions
		    Then.onTheAppPage.iSeeTheHelloDialog(); 

          	// Cleanup
		    Then.iTeardownMyApp();

        });
    });