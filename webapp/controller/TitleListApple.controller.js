sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("tc.tagCloud.controller.TitleListApple", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf tc.tagCloud.view.TitleListApple
		 */
		onInit: function () {
			this.tag = null;

			var oModel = new sap.ui.model.odata.ODataModel("/textanalysis/content/src/AppleNewsRoomInfo.xsodata/");
			this.getView().setModel(oModel);

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("links").attachPatternMatched(this._onObjectMatched, this);
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf tc.tagCloud.view.TitleListApple
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf tc.tagCloud.view.TitleListApple
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf tc.tagCloud.view.TitleListApple
		 */
		//	onExit: function() {
		//
		//	}
		
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