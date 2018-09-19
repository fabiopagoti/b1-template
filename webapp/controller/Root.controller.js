sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("alfaerp.template.Template.controller.Root", {

		onPressHana: function () {
			this.getOwnerComponent().navTo("HANA");
		},

		onPressXs: function () {
			this.getOwnerComponent().navTo("XS");
		},

		onPressSL: function () {
			this.getOwnerComponent().navTo("SL");
		}

	});

});