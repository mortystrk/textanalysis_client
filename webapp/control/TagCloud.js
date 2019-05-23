sap.ui.define(["sap/ui/core/Control"], function (Control) {
	return Control.extend("tc.tagCloud.control.TagCloud", {
		metadata: {
			properties: {
				"id1": "string",
				"height": {
					type: "sap.ui.core.CSSSize",
					defaultValue: "70%"
				},
				"marginleft": {
					type: "sap.ui.core.CSSSize",
					defaultValue: "auto"
				},
				"marginright": {
					type: "sap.ui.core.CSSSize",
					defaultValue: "auto"
				},
				"width": {
					type: "sap.ui.core.CSSSize",
					defaultValue: "70%"
				},
				"borderradius": {
					type: "sap.ui.core.CSSSize",
					defaultValue: "36%"
				},
				"border": {
					type: "sap.ui.core.CSSSize",
					defaultValue: "1px solid #EEFAFA"
				},
				"backgroundcolor": {
					type: "sap.ui.core.CSSSize",
					defaultValue: "#FFFFFF"
				}
			},
			aggregations: {}
		},
		init: function () {

		},
		renderer: function (oRm, oControl) {
			oRm.write("<div");
			oRm.writeAttributeEscaped("id", oControl.getId1());
			oRm.addStyle("height", oControl.getHeight());
			oRm.addStyle("width", oControl.getWidth());
			oRm.addStyle("margin-left", oControl.getMarginleft());
			oRm.addStyle("margin-right", oControl.getMarginright());
			oRm.addStyle("border-radius", oControl.getBorderradius());
			oRm.addStyle("border", oControl.getBorder());
			oRm.addStyle("background-color", oControl.getBackgroundcolor());
			oRm.writeStyles();
			oRm.write(">");
			oRm.write("</div>");
		},
		onAfterRendering: function () {

			if (sap.ui.core.Control.prototype.onAfterRendering) {
				sap.ui.core.Control.prototype.onAfterRendering.apply(this, arguments); //run the super class's method first
			}
		}
	});
});