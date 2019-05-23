sap.ui.define(["sap/ui/core/Control"], function (Control) {
	"use strict";
	return Control.extend("tc.tagCloud.control.Custbox", {
		"metadata": {
			"properties": {
				"src1": "string",
				"prop1": "string"
			},
			"events": {
				"choose": {
					"parameters": {
						"value": {
							"type": "string"
						}
					}
				}
			}
		},
		init: function () {},
		renderer: function (oRm, oControl) {
			oRm.write("<figure");
			oRm.writeControlData(oControl);
			oRm.addClass("snip1573");
			oRm.writeClasses();
			oRm.write(">");
			oRm.write("<img");
			oRm.writeAttributeEscaped("src", oControl.getSrc1());
			oRm.write(">");
			oRm.write("</img>");
			oRm.write("<figcaption");
			oRm.write(">");
			oRm.write("<h3");
			oRm.write(">");
			oRm.writeEscaped(oControl.getProp1());
			oRm.write("</h3>");
			oRm.write("</figcaption>");
			oRm.write("</figure>");
		},

		onAfterRendering: function (evt) {},

		setSrc1: function (value) {
			this.setProperty("src1", value, true);
			return this;
		},

		setProp1: function (value) {
			this.setProperty("prop1", value, true);
			return this;
		},

		// an event handler:
		onclick: function (oEvent) {
			this.fireEvent("choose", {
				value: this.getProp1()
			});
		}
	});
});