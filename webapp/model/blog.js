sap.ui.define([
	"sap/m/MessageToast"
], function (MessageToast) {

	var oInstance;

	function Blog(oView) {
		this.oView = oView;
		this.Par = null;
	};
	Blog.prototype.setParNext = function (isPar) {
		this.Par = isPar;
	};

	Blog.prototype.buildTagCloud = function (words, isPhone) {

		var minFont, maxFon;

		if (isPhone) {
			minFont = 9;
			maxFont = 28;
		} else {
			minFont = 15;
			maxFont = 45;
		}

		jQuery("#TagCloud").jQWCloud({
			words: words,
			minFont: minFont,
			maxFont: maxFont,
			fontOffset: 1,
			cloud_font_family: 'FreeMono, monospace',
			padding_left: 1,
			word_common_classes: 'WordClass',
			word_mouseEnter: function () {
				$(this).css("text-decoration", "underline")
			},
			word_mouseOut: function () {
				$(this).css("text-decoration", "none");
			},
			word_click: function () {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(oInstance.oView);
				//if (this.Par == "Sap") {
					oRouter.navTo("links", {
						tag: $(this).text().replace(/\//g, '%2F')
					});
				//} else {
				//	oRouter.navTo("TitleListApple", {
				//		tag: $(this).text().replace(/\//g, '%2F')
				//	});
			//	}
				//alert("You have selected:" + $(this).text());
			}
		});
	};

	Blog.prototype.loadTermFrequencyDataJSON = async function () {

		let response;
		let url;
		switch (this.Par) {

		case "Sap":

			url = "/textanalysis/content/src/load_array.xsjs?blogtype=SAP";

			sap.ui.core.BusyIndicator.show(0);

			try {
				response = await jQuery.ajax({
					url: url,
					dataType: "json",
					xhrFields: {
						withCredentials: true
					}
				});
				return response;
			} catch (error) {
				return error;
			}

			break;
		case "Apple":
			url = "/textanalysis/content/src/load_array.xsjs?blogtype=APPLE";

			sap.ui.core.BusyIndicator.show(0);

			try {
				response = await jQuery.ajax({
					url: url,
					dataType: "json",
					xhrFields: {
						withCredentials: true
					}
				});
				return response;
			} catch (error) {
				return error;
			}

			break;
		case "STACK_ENG":

			url = "/textanalysis/content/src/load_array.xsjs?blogtype=STACK_ENG";

			sap.ui.core.BusyIndicator.show(0);

			try {
				response = await jQuery.ajax({
					url: url,
					dataType: "json",
					xhrFields: {
						withCredentials: true
					}
				});
				return response;
			} catch (error) {
				return error;
			}

			break;
		case "STACK_CODE":

			url = "/textanalysis/content/src/load_array.xsjs?blogtype=STACK_CODE";

			sap.ui.core.BusyIndicator.show(0);

			try {
				response = await jQuery.ajax({
					url: url,
					dataType: "json",
					xhrFields: {
						withCredentials: true
					}
				});
				return response;
			} catch (error) {
				return error;
			}

			break;
		case "Stack companies":

			url = "/textanalysis/content/src/load_array.xsjs?blogtype=STACK_COM";

			sap.ui.core.BusyIndicator.show(0);

			try {
				response = await jQuery.ajax({
					url: url,
					dataType: "json",
					xhrFields: {
						withCredentials: true
					}
				});
				return response;
			} catch (error) {
				return error;
			}

			break;

		}

	};
	Blog.prototype.Refresh = async function () {
		var isPhone = sap.ui.Device.system.phone;
		var data;
		data = await oInstance.loadTermFrequencyDataJSON();
		oInstance.buildTagCloud(data, isPhone);
		sap.ui.core.BusyIndicator.hide();
	};
	Blog.prototype.asyncLoad = async function () {

		let response;
		let url;
		switch (this.Par) {

		case "Sap":

			url = "/textanalysis/content/src/load.xsjs?blogtype=SAP";

			sap.ui.core.BusyIndicator.show(0);

			try {
				response = await jQuery.ajax({
					url: url,
					dataType: "json",
					xhrFields: {
						withCredentials: true
					}
				});
				return response;
			} catch (error) {
				return error;
			}

			break;
		case "Apple":
			url = "/textanalysis/content/src/load.xsjs?blogtype=APPLE";

			sap.ui.core.BusyIndicator.show(0);

			try {
				response = await jQuery.ajax({
					url: url,
					dataType: "json",
					xhrFields: {
						withCredentials: true
					}
				});
				return response;
			} catch (error) {
				return error;
			}

			break;
		case "STACK_ENG":

			url = "/textanalysis/content/src/load.xsjs?blogtype=STACKOVERFLOW&stacktype=ENG";

			sap.ui.core.BusyIndicator.show(0);

			try {
				response = await jQuery.ajax({
					url: url,
					dataType: "json",
					xhrFields: {
						withCredentials: true
					}
				});
				return response;
			} catch (error) {
				return error;
			}

			break;
		case "STACK_CODE":

			url = "/textanalysis/content/src/load.xsjs?blogtype=STACKOVERFLOW&stacktype=CODE";

			sap.ui.core.BusyIndicator.show(0);

			try {
				response = await jQuery.ajax({
					url: url,
					dataType: "json",
					xhrFields: {
						withCredentials: true
					}
				});
				return response;
			} catch (error) {
				return error;
			}

			break;
		case "Stack companies":

			url = "/textanalysis/content/src/load.xsjs?blogtype=STACKOVERFLOW&stacktype=COM";

			sap.ui.core.BusyIndicator.show(0);

			try {
				response = await jQuery.ajax({
					url: url,
					dataType: "json",
					xhrFields: {
						withCredentials: true
					}
				});
				return response;
			} catch (error) {
				return error;
			}

			break;

		}
	};

	Blog.prototype.timeout = function (ms) {
		return new Promise(res => setTimeout(res, ms));
	};

	Blog.prototype.asyncRefresh = async function (text) {
		let data_t;
		var isPhone_t = sap.ui.Device.system.phone;
		MessageToast.show(text);
		await oInstance.timeout(1700);
		MessageToast.show("Text mining process has begun...");
		await oInstance.timeout(3000);
		data_t = await oInstance.loadTermFrequencyDataJSON();
		oInstance.buildTagCloud(data_t, isPhone_t);
	};

	Blog.prototype.getDataFromService = async function (dataFormat, isPhone) {
		let data;

		MessageToast.show("Blogs are loading...");

		switch (dataFormat) {

		case "JSON":
			data = await oInstance.loadTermFrequencyDataJSON();
			oInstance.buildTagCloud(data, isPhone);

			break;

		case "OData":
			data = await oInstance.asyncLoad();
			break;
		}

		sap.ui.core.BusyIndicator.hide();

		//await oInstance.asyncRefresh(data);
	}

	Blog.prototype.getResponseFromAsyncRequest = async function () {
		sap.ui.core.BusyIndicator.show(0);
		MessageToast.show("Blogs are loading...");
		const response = await oInstance.asyncLoad();
		sap.ui.core.BusyIndicator.hide();
		await oInstance.asyncRefresh(response);
		sap.ui.core.BusyIndicator.hide();
	}

	Blog.prototype.refreshData = function () {
		var oTable = this.oView.byId("table");
		oTable.getBinding("items").refresh();
	};

	Blog.prototype.showMessage = function (message) {
		MessageToast.show(message.toString());
	};

	Blog.prototype.loadBlogs = function () {
		var vUrl = "/textanalysis/content/src/test.xsjs?func=load";

		jQuery.ajax({
			url: vUrl,
			dataType: "json",
			xhrFields: {
				withCredentials: true
			},
			contentType: "text/plain",
			success: this.onCompleteLoad,
			error: this.onErrorLoad
		});
	};

	Blog.prototype.updateBlogs = function () {
		var vUrl = "/textanalysis/content/src/test.xsjs?func=update";

		jQuery.ajax({
			url: vUrl,
			dataType: "json",
			xhrFields: {
				withCredentials: true
			},
			contentType: "text/plain",
			success: this.onCompleteUpdate,
			error: this.onErrorUpdate
		});
	};

	Blog.prototype.truncateBlogs = function () {

		let url;
		switch (this.Par) {

		case "Sap":

			url = "/textanalysis/content/src/truncate.xsjs?blogtype=SAP";

			jQuery.ajax({
				url: url,
				dataType: "json",
				xhrFields: {
					withCredentials: true
				},
				contentType: "text/plain",
				success: this.onCompleteTruncate,
				error: this.onErrorTruncate
			});

			break;
		case "Apple":
			url = "/textanalysis/content/src/truncate.xsjs?blogtype=APPLE";

			jQuery.ajax({
				url: url,
				dataType: "json",
				xhrFields: {
					withCredentials: true
				},
				contentType: "text/plain",
				success: this.onCompleteTruncate,
				error: this.onErrorTruncate
			});

			break;
		case "STACK_ENG":

			url = "/textanalysis/content/src/truncate.xsjs?blogtype=STACK_ENG";

			jQuery.ajax({
				url: url,
				dataType: "json",
				xhrFields: {
					withCredentials: true
				},
				contentType: "text/plain",
				success: this.onCompleteTruncate,
				error: this.onErrorTruncate
			});

			break;
		case "STACK_CODE":

			url = "/textanalysis/content/src/truncate.xsjs?blogtype=STACK_CODE";

			jQuery.ajax({
				url: url,
				dataType: "json",
				xhrFields: {
					withCredentials: true
				},
				contentType: "text/plain",
				success: this.onCompleteTruncate,
				error: this.onErrorTruncate
			});

			break;
		case "Stack companies":

			url = "/textanalysis/content/src/truncate.xsjs?blogtype=STACK_COMPANY";

			jQuery.ajax({
				url: url,
				dataType: "json",
				xhrFields: {
					withCredentials: true
				},
				contentType: "text/plain",
				success: this.onCompleteTruncate,
				error: this.onErrorTruncate
			});

			break;

		}

	};

	Blog.prototype.onCompleteLoad = function (message) {
		MessageToast.show("Successful loaded");
		// 		setTimeout(oInstance.refreshData, 3000);
		oInstance.refreshData();
		//sap.ui.getCore().byId("worklist").getModel().refresh(true);
	};

	Blog.prototype.onErrorLoad = function (jqXHR, textStatus, errorThrown) {
		MessageToast.show(jqXHR.responseText);
	};

	Blog.prototype.onCompleteUpdate = function (message) {
		MessageToast.show("Successful updated");
		oInstance.refreshData();
	};

	Blog.prototype.onErrorUpdate = function (jqXHR, textStatus, errorThrown) {
		MessageToast.show(jqXHR.responseText);
	};

	Blog.prototype.onCompleteTruncate = function (message) {
		var isPhone_t = sap.ui.Device.system.phone;
		//MessageToast.show(this.oView.getModel("i18n").getResourceBundle().getText("MessageSuccessTruncate"));
		MessageToast.show("Successful truncated");

		oInstance.buildTagCloud([{
			word: 'Data was trucated. Load data for next step.',
			weight: 40
		}], isPhone_t);
	};

	Blog.prototype.onErrorTruncate = function (jqXHR, textStatus, errorThrown) {
		MessageToast.show(jqXHR.responseText);
	};

	return {

		getInstance: function (oView) {
			if (oInstance === undefined) {
				oInstance = new Blog(oView);
			}
			return oInstance;
		}

	};
});