sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * 
     */
    function (Controller) {
        'use strict';

        return Controller.extend("logaligroup.SAPUI5.controller.App", {
            
            onInit: function() {
                this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
                // // set data model on the view
                // this.getView().setModel(Models.createRecipient());

                // // set i18n model on the view
                // var i18nModel = new ResourceModel({
                //     bundleName : "logaligroup.SAPUI5.i18n.i18n"
                // });

                // this.getView().setModel(i18nModel, "i18n");
            },
            onOpenDialogHeader: function() {
                this.getOwnerComponent().openHelloDialog();
            }
        });

    });