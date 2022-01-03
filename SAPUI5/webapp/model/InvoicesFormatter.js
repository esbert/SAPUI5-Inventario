sap.ui.define([

],
    function (require, factory) {
        'use strict';

        return {
            invoiceStatus: function (sStatus) {
                const resourceBundle = this.getView().getModel("i18n").getResourceBundle();
                switch (sStatus) {
                    case 'A': return resourceBundle.getText("invoicesStatusA");
                    case 'B': return resourceBundle.getText("invoicesStatusB");
                    case 'C': return resourceBundle.getText("invoicesStatusC");
                    default: return resourceBundle.getText("invoicesStatusA"); //sStatus;
                }
            }
        }

    }); 