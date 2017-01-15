sap.ui.localResources("z_fiori");

var sapApp = new sap.m.App();
sapApp.placeAt("content");

sapApp.addPage(
    sap.ui.view("view.Main", {
        viewName: "z_fiori.Main"
        , type: sap.ui.core.mvc.ViewType.JS
    })
);
