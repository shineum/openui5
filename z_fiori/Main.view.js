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
                            , columns: [
                                new sap.m.Column()
                            ]
                        }).addItem(
                            new sap.m.StandardListItem({
                                title: "MoonBucks"
                                , icon: "sap-icon://e-care"
                                , info: "★★☆☆☆"
                                , description: "Description"
                            })
                        ).addItem(
                            new sap.m.StandardListItem({
                                title: "StartBucks"
                                , icon: "sap-icon://e-care"
                                , info: "★★★★☆"
                                , description: "Description"
                            })
                        ).addItem(
                            new sap.m.StandardListItem({
                                title: "CoffeeVince"
                                , icon: "sap-icon://e-care"
                                , info: "★★★☆☆"
                                , description: "Description"
                            })
                        ).addItem(
                            new sap.m.StandardListItem({
                                title: "StarBugs"
                                , icon: "sap-icon://e-care"
                                , info: "★★★☆☆"
                                , description: "Description"
                            })
                        )
                    ]}).addStyleClass("scrollContainer")
                    , new sap.m.TextArea({
                            cols:50
                            , rows:10
                            , value: "In the long history of the world, only a few generations have been granted the role of defending freedom in its hour of maximum danger. I do not shrink from this responsibility - I welcome it."
                    }).addStyleClass("textArea")
                ]
            }).addStyleClass("mainContent")
        );

        return oPage;
    }
});
