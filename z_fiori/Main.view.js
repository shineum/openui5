sap.ui.jsview("z_fiori.Main", {
    getControllerName: function() {
        return "z_fiori.Main";
    }
    , createContent: function(oController) {
        var oPage = new sap.m.Page({
            customHeader: new sap.m.Bar({
                contentLeft:[new sap.m.Label({text:"OpenUI5 Logo"})]
                , contentRight: [new sap.m.Link({text:"Login"})]
            }).addStyleClass("headerBar")
        });

        oPage.addContent(
            new sap.m.HBox({items:[
                new sap.m.Label({text:"Section Title"})
            ]}).addStyleClass("sectionTitle")
        );

        oPage.addContent(
            new sap.m.FlexBox({
                items:[
                    new sap.m.ScrollContainer({content: [
                        new sap.m.List({
                            showNoData: true
                            , columns: [ new sap.m.Column() ]
                            , items: {
                                path: "/d/listItems"
                                , template: new sap.m.StandardListItem({
                                    title: "{title}"
                                    , icon: "{icon}"
                                    , info: {
                                        parts: ["rating"]
                                        , formatter: oController.infoFormatter
                                    }
                                    , description: "{description}"
                                })
                            }
                        })
                    ]}).addStyleClass("scrollContainer")
                    , new sap.m.TextArea({
                            cols:50
                            , rows:10
                            , value: "{/d/siteDescription}"
                    }).addStyleClass("textArea")
                ]
            }).addStyleClass("mainContent")
        );

        return oPage;
    }
});
