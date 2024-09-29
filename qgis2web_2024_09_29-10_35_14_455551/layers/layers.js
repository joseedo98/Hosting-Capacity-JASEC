ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5367").setExtent([500267.671365, 1085502.001395, 511579.288922, 1091448.120705]);
var wms_layers = [];


        var lyr_CostaRica_0 = new ol.layer.Tile({
            'title': 'Costa Rica',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BajaEscalaCSIkW_1 = new ol.format.GeoJSON();
var features_BajaEscalaCSIkW_1 = format_BajaEscalaCSIkW_1.readFeatures(json_BajaEscalaCSIkW_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5367'});
var jsonSource_BajaEscalaCSIkW_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BajaEscalaCSIkW_1.addFeatures(features_BajaEscalaCSIkW_1);
var lyr_BajaEscalaCSIkW_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BajaEscalaCSIkW_1, 
                style: style_BajaEscalaCSIkW_1,
                popuplayertitle: "Baja Escala CSI (kW)",
                interactive: true,
    title: 'Baja Escala CSI (kW)<br />\
    <img src="styles/legend/BajaEscalaCSIkW_1_0.png" /> 20 - 30<br />\
    <img src="styles/legend/BajaEscalaCSIkW_1_1.png" /> 30 - 40<br />\
    <img src="styles/legend/BajaEscalaCSIkW_1_2.png" /> 40 - 50<br />\
    <img src="styles/legend/BajaEscalaCSIkW_1_3.png" /> 50 - 60<br />\
    <img src="styles/legend/BajaEscalaCSIkW_1_4.png" /> 60 - 70<br />\
    <img src="styles/legend/BajaEscalaCSIkW_1_5.png" /> 70 - 80<br />\
    <img src="styles/legend/BajaEscalaCSIkW_1_6.png" /> 80 - 90<br />\
    <img src="styles/legend/BajaEscalaCSIkW_1_7.png" /> 90 - 100<br />'
        });
var format_Subestacin_2 = new ol.format.GeoJSON();
var features_Subestacin_2 = format_Subestacin_2.readFeatures(json_Subestacin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5367'});
var jsonSource_Subestacin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Subestacin_2.addFeatures(features_Subestacin_2);cluster_Subestacin_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Subestacin_2
});
var lyr_Subestacin_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Subestacin_2, 
                style: style_Subestacin_2,
                popuplayertitle: "Subestación",
                interactive: true,
                title: '<img src="styles/legend/Subestacin_2.png" /> Subestación'
            });
var format_GranEscalaCSIkW_3 = new ol.format.GeoJSON();
var features_GranEscalaCSIkW_3 = format_GranEscalaCSIkW_3.readFeatures(json_GranEscalaCSIkW_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5367'});
var jsonSource_GranEscalaCSIkW_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranEscalaCSIkW_3.addFeatures(features_GranEscalaCSIkW_3);
var lyr_GranEscalaCSIkW_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranEscalaCSIkW_3, 
                style: style_GranEscalaCSIkW_3,
                popuplayertitle: "Gran Escala CSI (kW)",
                interactive: true,
    title: 'Gran Escala CSI (kW)<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_0.png" /> 15000 - 20000<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_1.png" /> 20000 - 21000<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_2.png" /> 21000 - 21000<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_3.png" /> 21000 - 22000<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_4.png" /> 22000 - 23000<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_5.png" /> 23000 - 25000<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_6.png" /> 25000 - 28000<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_7.png" /> 28000 - 31000<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_8.png" /> 31000 - 31000<br />'
        });
var group_JASEC = new ol.layer.Group({
                                layers: [lyr_CostaRica_0,lyr_BajaEscalaCSIkW_1,lyr_Subestacin_2,lyr_GranEscalaCSIkW_3,],
                                fold: "open",
                                title: "JASEC"});

lyr_CostaRica_0.setVisible(true);lyr_BajaEscalaCSIkW_1.setVisible(true);lyr_Subestacin_2.setVisible(true);lyr_GranEscalaCSIkW_3.setVisible(true);
var layersList = [group_JASEC];
lyr_BajaEscalaCSIkW_1.set('fieldAliases', {'bus1': 'bus1', 'X1': 'X1', 'Y1': 'Y1', 'S nom (KVA': 'S nominal (kVA)', 'DER (kW)': 'DER (kW)', 'Circuito': 'Circuito', 'Capacidad': 'Capacidad (%)', });
lyr_Subestacin_2.set('fieldAliases', {'Tensión (': 'Tensión (kV)', 'X1': 'X1', 'Y1': 'Y1', 'Nombre': 'Nombre', });
lyr_GranEscalaCSIkW_3.set('fieldAliases', {'DSSNAME': 'DSSNAME', 'begin': 'begin', 'end': 'end', 'DER MT —': 'Capacidad DER (kW)', 'DER MT �_1': 'Circuito', });
lyr_BajaEscalaCSIkW_1.set('fieldImages', {'bus1': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'S nom (KVA': 'TextEdit', 'DER (kW)': 'TextEdit', 'Circuito': 'TextEdit', 'Capacidad': 'TextEdit', });
lyr_Subestacin_2.set('fieldImages', {'Tensión (': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_GranEscalaCSIkW_3.set('fieldImages', {'DSSNAME': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'DER MT —': 'TextEdit', 'DER MT �_1': 'TextEdit', });
lyr_BajaEscalaCSIkW_1.set('fieldLabels', {'bus1': 'hidden field', 'X1': 'hidden field', 'Y1': 'hidden field', 'S nom (KVA': 'inline label - always visible', 'DER (kW)': 'inline label - always visible', 'Circuito': 'inline label - always visible', 'Capacidad': 'hidden field', });
lyr_Subestacin_2.set('fieldLabels', {'Tensión (': 'inline label - always visible', 'X1': 'hidden field', 'Y1': 'hidden field', 'Nombre': 'inline label - always visible', });
lyr_GranEscalaCSIkW_3.set('fieldLabels', {'DSSNAME': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'DER MT —': 'inline label - always visible', 'DER MT �_1': 'inline label - always visible', });
lyr_GranEscalaCSIkW_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});