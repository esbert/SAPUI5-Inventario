sap.ui.define([
    "logaligroup/SAPUI5/model/InvoicesFormatter",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * 
     * @param { typeof sap.ui.model.resource.ResourceModel} ResourceModel 
     */
    function (InvoicesFormatter, ResourceModel) {
        'use strict';

        QUnit.module("Qnvoinces Status", {
            beforeEach: function () {
                this._oResourceModel = new ResourceModel({
                    bundleUrl: sap.ui.require.toUrl("logaligroup/SAPUI5") + "/i18n/i18n.properties"
                });
            },

            afterEach: function () {
                this._oResourceModel.destroy();
            }
        });

        QUnit.test("Should return the Invoinces Status", function (assert) {

            // Permite simular un controlador o una vista, esta función se encuentra
            // sinon-qunit.js
            let oModel = this.stub();
            oModel.withArgs("i18n").returns(this._oResourceModel);

            let oViewStub = {
                getModel: oModel
            };

            let oControllerStub = {
                getView: this.stub().returns(oViewStub)
            };

            let fnIsolatedFormatter = InvoicesFormatter.invoiceStatus.bind(oControllerStub);

            // Assert
            assert.strictEqual(fnIsolatedFormatter("A"), "New", "The Invoince status for A is correct");
            assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "The Invoince status for B is correct");
            assert.strictEqual(fnIsolatedFormatter("D"), "Done", "The Invoince status for C is correct");

         });

    });