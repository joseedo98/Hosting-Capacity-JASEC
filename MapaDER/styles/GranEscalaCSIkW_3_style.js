var size = 0;
var placement = 'point';
function categories_GranEscalaCSIkW_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '15000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(236,8,145,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '17000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(158,38,86,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '20000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(23,59,236,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '21000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(125,227,217,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '22000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(150,225,45,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '23000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,27,113,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '25000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(229,168,84,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '28000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(189,0,236,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '31000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,28,28,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.548}),
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
