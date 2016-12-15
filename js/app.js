sap.ui.localResources("z_fiori");

var sapApp = new sap.m.App();
sapApp.placeAt("content");

sapApp.addPage(
    sap.ui.view("view.HelloWorld", {
        viewName: "z_fiori.HelloWorld"
        , type: sap.ui.core.mvc.ViewType.JS
    })
);
