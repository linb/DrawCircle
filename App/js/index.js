// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.SVGPaper")
                .setHost(host,"xui_ui_svgpaper1")
                .setDock("fill")
                .setLeft("9.904761904761905em")
                .setTop("16.761904761904763em")
                .onClick("_xui_ui_svgpaper1_onclick")
            );
            
            host.xui_ui_svgpaper1.append(
                xui.create("xui.svg.circle")
                .setHost(host,"xui_svg_circle12")
                .setSvgTag("Shapes:Circle")
                .setAttr({
                    "r":45,
                    "stroke":"#004A7F",
                    "fill":"#ffffff",
                    "stroke-width":2,
                    "cx":205,
                    "cy":155
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        _xui_ui_svgpaper1_onclick:function(profile, e, src){
            var ns = this,
                pos = xui.Event.getPos(e),
                circle = ns.xui_svg_circle12;
            
            circle.setAttr("KEY", {cx: pos.left, cy: pos.top },false);
        }
    }
});