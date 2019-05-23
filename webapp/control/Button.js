sap.ui.define(["sap/ui/core/Control"], function (Control) {
  "use strict";
  return Control.extend("tc.tagCloud.control.Test", {
    "metadata": {
      "properties": {
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
      oRm.write("<button");
      oRm.writeControlData(oControl);
      oRm.addClass("snip1564");
      oRm.writeClasses();
      oRm.write(">");
      oRm.writeEscaped(oControl.getProp1());
      oRm.write("</button>");
    },
    onAfterRendering: function (evt) {},
    setProp1: function (value) {
      this.setProperty("prop1", value, true);
      return this;
    },
    onclick: function (oEvent) {
			this.fireEvent("choose", {
				value: this.getProp1()
			});
		}
  });
});