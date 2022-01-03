sap.ui.define([
    'sap/ui/core/UIComponent',
    'logaligroup/SAPUI5/model/Models',
    'sap/ui/model/resource/ResourceModel',
    "./controller/HelloDialog",
    "sap/ui/Device"
],
    /**
     * 
     * @param {typeof sap.ui.core.UIComponent} UIComponent 
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel 
     * @param {typeof sap.ui.Device} Device
     */
    function (UIComponent, Models, ResourceModel,HelloDialog,Device) {
        'use strict';
        return UIComponent.extend("logaligroup.SAPUI5.Component", {

            metadata: {
                // "rootView": {
                //     "viewName": "logaligroup.SAPUI5.view.App",
                //     "type": "XML",
                //     "async": true,
                //     "id": "app"
                // }
                manifest: "json"
            },
            init: function () {
                // call the unit function of the parent    
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the view 
                this.setModel(Models.createRecipient());

                // set i18n model on the view 
                //var i18nModel = new ResourceModel({ bundleName: "logaligroup.SAPUI5.i18n.i18n" });
                //this.setModel(i18nModel, "i18n");

                //set device model
                this.setModel(Models.createDeviceModel(), "device");


                this._helloDialog = new HelloDialog(this.getRootControl()); // Pasa la instacia del controlador y a su vez la de la vista
                
                // create the views based on the url/hash 
                this.getRouter().initialize();

            },
            exit: function() {
                this._helloDialog.destroy();
                delete this._helloDialog
            },
            openHelloDialog: function() {
                this._helloDialog.open();
            },
            getContentDensityClass: function() {
                if (!sap.ui.Device.support.touch) {
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}
                return this._sContentDensityClass;
            }
        });
    });