sap.ui.define([
	"../model/blog",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/UIComponent",
	"sap/ui/core/routing/Router",
	"sap/m/MessageToast"
], function ( blog, Controller, JSONModel, UIComponent, Router, MessageToast) {
	"use strict";

	return Controller.extend("tc.tagCloud.controller.Tag", {
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