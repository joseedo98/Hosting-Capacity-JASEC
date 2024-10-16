ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5367").setExtent([498373.570832, 1083249.686041, 514653.226218, 1091759.960996]);
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
var format_Subestacin_1 = new ol.format.GeoJSON();
var features_Subestacin_1 = format_Subestacin_1.readFeatures(json_Subestacin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5367'});
var jsonSource_Subestacin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Subestacin_1.addFeatures(features_Subestacin_1);cluster_Subestacin_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Subestacin_1
});
var lyr_Subestacin_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Subestacin_1, 
                style: style_Subestacin_1,
                popuplayertitle: "Subestación",
                interactive: true,
                title: '<img src="styles/legend/Subestacin_1.png" /> Subestación'
            });
var format_BajaEscalaCSI_2 = new ol.format.GeoJSON();
var features_BajaEscalaCSI_2 = format_BajaEscalaCSI_2.readFeatures(json_BajaEscalaCSI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5367'});
var jsonSource_BajaEscalaCSI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BajaEscalaCSI_2.addFeatures(features_BajaEscalaCSI_2);
var lyr_BajaEscalaCSI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BajaEscalaCSI_2, 
                style: style_BajaEscalaCSI_2,
                popuplayertitle: "Baja Escala CSI (%)",
                interactive: true,
    title: 'Baja Escala CSI (%)<br />\
    <img src="styles/legend/BajaEscalaCSI_2_0.png" /> 20<br />\
    <img src="styles/legend/BajaEscalaCSI_2_1.png" /> 30<br />\
    <img src="styles/legend/BajaEscalaCSI_2_2.png" /> 40<br />\
    <img src="styles/legend/BajaEscalaCSI_2_3.png" /> 50<br />\
    <img src="styles/legend/BajaEscalaCSI_2_4.png" /> 60<br />\
    <img src="styles/legend/BajaEscalaCSI_2_5.png" /> 70<br />\
    <img src="styles/legend/BajaEscalaCSI_2_6.png" /> 80<br />\
    <img src="styles/legend/BajaEscalaCSI_2_7.png" /> 90<br />\
    <img src="styles/legend/BajaEscalaCSI_2_8.png" /> 100<br />'
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
    <img src="styles/legend/GranEscalaCSIkW_3_0.png" /> 15000<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_1.png" /> 17000<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_2.png" /> 20000<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_3.png" /> 21000<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_4.png" /> 22000<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_5.png" /> 23000<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_6.png" /> 25000<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_7.png" /> 28000<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_8.png" /> 31000<br />'
        });
var group_JASEC = new ol.layer.Group({
                                layers: [lyr_CostaRica_0,lyr_Subestacin_1,lyr_BajaEscalaCSI_2,lyr_GranEscalaCSIkW_3,],
                                fold: "open",
                                title: "JASEC"});
var group_GRANESCALA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "GRAN ESCALA"});

lyr_CostaRica_0.setVisible(true);lyr_Subestacin_1.setVisible(true);lyr_BajaEscalaCSI_2.setVisible(true);lyr_GranEscalaCSIkW_3.setVisible(true);
var layersList = [group_JASEC];
lyr_Subestacin_1.set('fieldAliases', {'Tensión (': 'Tensión (kV)', 'X1': 'X1', 'Y1': 'Y1', 'Nombre': 'Nombre', });
lyr_BajaEscalaCSI_2.set('fieldAliases', {'bus1': 'bus1', 'X1': 'X1', 'Y1': 'Y1', 'Potencia N': 'Potencia Nominal (kVA)', 'Capacidad': 'Capacidad Alojamiento DER (kW)', 'Circuito': 'Circuito', 'Capacida_1': 'Capacidad (%)', });
lyr_GranEscalaCSIkW_3.set('fieldAliases', {'DSSNAME': 'DSSNAME', 'begin': 'begin', 'end': 'end', 'DER MT —': 'Capacidad Alojamiento DER (kW)', 'DER MT �_1': 'Circuito', });
lyr_Subestacin_1.set('fieldImages', {'Tensión (': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_BajaEscalaCSI_2.set('fieldImages', {'bus1': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'Potencia N': 'TextEdit', 'Capacidad': 'TextEdit', 'Circuito': 'TextEdit', 'Capacida_1': 'TextEdit', });
lyr_GranEscalaCSIkW_3.set('fieldImages', {'DSSNAME': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'DER MT —': 'TextEdit', 'DER MT �_1': 'TextEdit', });
lyr_Subestacin_1.set('fieldLabels', {'Tensión (': 'inline label - always visible', 'X1': 'hidden field', 'Y1': 'hidden field', 'Nombre': 'inline label - always visible', });
lyr_BajaEscalaCSI_2.set('fieldLabels', {'bus1': 'hidden field', 'X1': 'hidden field', 'Y1': 'hidden field', 'Potencia N': 'inline label - always visible', 'Capacidad': 'inline label - always visible', 'Circuito': 'inline label - always visible', 'Capacida_1': 'hidden field', });
lyr_GranEscalaCSIkW_3.set('fieldLabels', {'DSSNAME': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'DER MT —': 'inline label - always visible', 'DER MT �_1': 'inline label - always visible', });
lyr_GranEscalaCSIkW_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});