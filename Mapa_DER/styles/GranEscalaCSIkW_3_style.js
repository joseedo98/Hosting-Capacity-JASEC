var size = 0;
var placement = 'point';
function categories_GranEscalaCSIkW_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '15000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,204,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '17000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,182,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '20000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,161,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '21000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,139,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '22000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,117,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '23000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,95,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '25000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,73,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '28000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,52,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '31000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,30,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_GranEscalaCSIkW_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("DER MT —");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_GranEscalaCSIkW_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
