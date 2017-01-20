sap.ui.controller("z_fiori.Main", {
    oModel: new sap.ui.model.json.JSONModel()
    , onInit: function() {
        this.getView().setModel(this.oModel);
        this.oModel.setData({
            d: {
                listItems: [
                    { title: "MoonBucks", icon: "sap-icon://e-care", rating: 2, description: "Description" }
                    , { title: "StartBucks", icon: "sap-icon://e-care", rating: 4, description: "Description" }
                    , { title: "CoffeeVince", icon: "sap-icon://e-care", rating: 3, description: "Description" }
                    , { title: "StarBugs", icon: "sap-icon://e-care", rating: 1, description: "Description" }
                ]
                , siteDescription: "In the long history of the world, only a few generations have been granted the role of defending freedom in its hour of maximum danger. I do not shrink from this responsibility - I welcome it."
            }
        });
    }
    , infoFormatter: function(pInfo) {
        var stars = "★★★★★☆☆☆☆☆";
        return stars.substr(5-pInfo, 5);
    }
});
