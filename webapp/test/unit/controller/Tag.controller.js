/*global QUnit*/

sap.ui.define([
	"tc/tagCloud/controller/Tag.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Tag Controller");

	QUnit.test("I should test the Tag controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});