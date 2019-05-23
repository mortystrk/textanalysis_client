sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("tc.tagCloud.controller.TitleList", {
		onInit: function () {
			//this.getView().setModel(this._createModel());
			this.tag = null;

			var oModel = new sap.ui.model.odata.ODataModel("/textanalysis/content/src/blogsInfo.xsodata/");
			this.getView().setModel(oModel);

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("links").attachPatternMatched(this._onObjectMatched, this);
		},

		_onObjectMatched: function (oEvent) {
			this.tag = oEvent.getParameter("arguments").tag;
			//MessageToast.show("selected : " + this.tag);
			this.tag = this.tag.replace(/%2F/g, "/");

			var oFilterTerm = new sap.ui.model.Filter(
				"TM_TERM",
				sap.ui.model.FilterOperator.EQ,
				this.tag
			);

			this.getView().byId("blogsInfo").getBinding("items").filter(oFilterTerm);
		},

		onListItemPress: function (evt) {
			var model = this.getView().getModel();
			var oContext = evt.getSource().getBindingContext();
			var oPath = oContext.getPath();
			var link = model.getProperty(oPath + "/LINK");

			window.open(link, "_blank");
			/*var oLink = new sap.m.Link("linkToBlog");
			oLink.setTarget("_blank");
			oLink.setHref(link);
			oLink.attachPress(function () {
				alert("Move to external url");
			});

			oLink.firePress();*/
			//MessageToast.show("Pressed : " + evt.getSource().getTitle());
		}
	});
});