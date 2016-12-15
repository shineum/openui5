sap.ui.jsview("z_fiori.HelloWorld", {
    getControllerName: function() {
        return "z_fiori.HelloWorld";
    }
    , createContent: function(oController) {
        var oPage = new sap.m.Page();

        oPage.addContent(
                new sap.m.Text({text: "HelloWorld"})
        );
        
        return oPage;
    }
});
