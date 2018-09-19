function initModel() {
	var sUrl = "/ALFAERP_HANA/cursoUI5/pagoti/helloEclipse/servico.xsodata/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}