function initModel() {
	var sUrl = "/textanalysis/content/src/AppleNewsRoomInfo.xsodata/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}