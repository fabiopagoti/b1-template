sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("alfaerp.template.Template.controller.XS", {
		onInit: function(){
			window.load = this._load;
		},
		
		_load: function(){
			// /alfaerp/util/serviceLayer.xsjs?cmd=Get&actionUri=Banks&sessionID=c36a2bd8-bc45-11e8-8000-00155d0f1300&username=B1SiteUser&filter=BankCode eq 267
		}
	});
});