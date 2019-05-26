sap.ui.define([
	"../model/blog",
	"sap/ui/core/mvc/Controller"
], function (blog, Controller) {
	"use strict";

	return Controller.extend("tc.tagCloud.controller.MobileBlogsOverview", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf tc.tagCloud.view.MobileBlogsOverview
		 */
		onInit: function () {
			blog.getInstance(this.getView());
		},

		onChooseTag: function (oEvent) {
			var word = oEvent.getParameter("value");
			blog.getInstance().setParNext(word);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Worklist", {
				Word: word
			});

		},
		onChooseTagStack: function (oEvent) {
			var word = oEvent.getParameter("value");
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Stackoverflow", {
				Word: word
			});

		}

	});

});