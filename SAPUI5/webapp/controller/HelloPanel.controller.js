sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/base/Log"
 //   "sap/ui/core/Fragment"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.base.Log} Log
     * 
     */
    function (Controller, MessageToast,Log) {
        'use strict';

        return Controller.extend("logaligroup.SAPUI5.controller.HelloPanel", {

            onInit: function () {

            },

            onBeforeRendering: function() {
                window.message = 'Log message - onBeforeRendering';
                Log.info(window.message);
                Log.error(window.message);
            },

            onAfterRendering: function() {
                debugger;
            },

            onShowHello: function () {
                // read text from i18n model    
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                // read property from data model 
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient,])
                MessageToast.show(sMsg);
                //MessageToast.show("Hello World - Controlador");
            },
            onOpenDialog: function () {
                this.getOwnerComponent().openHelloDialog();
                // const oView = this.getView();
                // if (!this.byId("helloDialog")) {
                //     Fragment.load({
                //         id: oView.getId(),
                //         name: "logaligroup.SAPUI5.view.HelloDialog",
                //         controller: this
                //     }).then(function (oDialog) {
                //         oView.addDependent(oDialog);
                //         oDialog.open();
                //     });
                // } else {
                //     this.byId("helloDialog").open();
                // }

            },
            // onCloseDialog: function() {
            //     this.byId("helloDialog").close();
            // }
        });

    });