sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("alfaerp.template.Template.controller.Menu", {

		onPressHana: function () {
			this.getOwnerComponent().getRouter().navTo("HANA");
		},

		onPressXs: function () {
			this.getOwnerComponent().getRouter().navTo("XS");
		},

		onPressSL: function () {
			this.getOwnerComponent().getRouter().navTo("SL");
		}

	});

});