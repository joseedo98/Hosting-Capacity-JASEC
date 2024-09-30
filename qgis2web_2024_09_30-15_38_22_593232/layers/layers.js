ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5367").setExtent([505258.904713, 1086308.018599, 505398.618429, 1086400.926714]);
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
    <img src="styles/legend/BajaEscalaCSI_2_0.png" /> 0 - 20<br />\
    <img src="styles/legend/BajaEscalaCSI_2_1.png" /> 20 - 30<br />\
    <img src="styles/legend/BajaEscalaCSI_2_2.png" /> 30 - 40<br />\
    <img src="styles/legend/BajaEscalaCSI_2_3.png" /> 40 - 50<br />\
    <img src="styles/legend/BajaEscalaCSI_2_4.png" /> 50 - 60<br />\
    <img src="styles/legend/BajaEscalaCSI_2_5.png" /> 60 - 70<br />\
    <img src="styles/legend/BajaEscalaCSI_2_6.png" /> 70 - 80<br />\
    <img src="styles/legend/BajaEscalaCSI_2_7.png" /> 80 - 90<br />\
    <img src="styles/legend/BajaEscalaCSI_2_8.png" /> 90 - 100<br />\
    <img src="styles/legend/BajaEscalaCSI_2_9.png" /> 100 - 100<br />'
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
    <img src="styles/legend/GranEscalaCSIkW_3_0.png" /> 15000 - 20001<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_1.png" /> 20001 - 21001<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_2.png" /> 21001 - 21001<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_3.png" /> 21001 - 22001<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_4.png" /> 22001 - 23001<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_5.png" /> 23001 - 25001<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_6.png" /> 25001 - 28001<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_7.png" /> 28001 - 31000<br />\
    <img src="styles/legend/GranEscalaCSIkW_3_8.png" /> 31000 - 31000<br />'
        });
var format_GranEscalaCPIkW_4 = new ol.format.GeoJSON();
var features_GranEscalaCPIkW_4 = format_GranEscalaCPIkW_4.readFeatures(json_GranEscalaCPIkW_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5367'});
var jsonSource_GranEscalaCPIkW_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranEscalaCPIkW_4.addFeatures(features_GranEscalaCPIkW_4);
var lyr_GranEscalaCPIkW_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranEscalaCPIkW_4, 
                style: style_GranEscalaCPIkW_4,
                popuplayertitle: "Gran Escala CPI (kW)",
                interactive: true,
    title: 'Gran Escala CPI (kW)<br />\
    <img src="styles/legend/GranEscalaCPIkW_4_0.png" /> 26000 - 28001<br />\
    <img src="styles/legend/GranEscalaCPIkW_4_1.png" /> 28001 - 33001<br />\
    <img src="styles/legend/GranEscalaCPIkW_4_2.png" /> 33001 - 34000<br />'
        });
var format_BajaEscalaCPI_5 = new ol.format.GeoJSON();
var features_BajaEscalaCPI_5 = format_BajaEscalaCPI_5.readFeatures(json_BajaEscalaCPI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5367'});
var jsonSource_BajaEscalaCPI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BajaEscalaCPI_5.addFeatures(features_BajaEscalaCPI_5);
var lyr_BajaEscalaCPI_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BajaEscalaCPI_5, 
                style: style_BajaEscalaCPI_5,
                popuplayertitle: "Baja Escala CPI (%)",
                interactive: true,
    title: 'Baja Escala CPI (%)<br />\
    <img src="styles/legend/BajaEscalaCPI_5_0.png" /> 0 - 33<br />\
    <img src="styles/legend/BajaEscalaCPI_5_1.png" /> 33 - 67<br />\
    <img src="styles/legend/BajaEscalaCPI_5_2.png" /> 67 - 100<br />'
        });
var group_JASEC = new ol.layer.Group({
                                layers: [lyr_CostaRica_0,lyr_Subestacin_1,lyr_BajaEscalaCSI_2,lyr_GranEscalaCSIkW_3,lyr_GranEscalaCPIkW_4,lyr_BajaEscalaCPI_5,],
                                fold: "open",
                                title: "JASEC"});
var group_GRANESCALA = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "GRAN ESCALA"});

lyr_CostaRica_0.setVisible(true);lyr_Subestacin_1.setVisible(true);lyr_BajaEscalaCSI_2.setVisible(true);lyr_GranEscalaCSIkW_3.setVisible(true);lyr_GranEscalaCPIkW_4.setVisible(true);lyr_BajaEscalaCPI_5.setVisible(true);
var layersList = [group_JASEC];
lyr_Subestacin_1.set('fieldAliases', {'Tensión (': 'Tensión (kV)', 'X1': 'X1', 'Y1': 'Y1', 'Nombre': 'Nombre', });
lyr_BajaEscalaCSI_2.set('fieldAliases', {'bus1': 'bus1', 'X1': 'X1', 'Y1': 'Y1', 'Potencia N': 'Potencia Nominal (kVA)', 'Capacidad': 'Capacidad Alojamiento DER (kW)', 'Circuito': 'Circuito', 'Capacida_1': 'Capacidad (%)', });
lyr_GranEscalaCSIkW_3.set('fieldAliases', {'DSSNAME': 'DSSNAME', 'begin': 'begin', 'end': 'end', 'DER MT —': 'Capacidad Alojamiento DER (kW)', 'DER MT �_1': 'Circuito', });
lyr_GranEscalaCPIkW_4.set('fieldAliases', {'LINEA': 'LINEA', 'begin': 'begin', 'end': 'end', 'GRAN ESCALA _Capacidad Alojamiento DER [kW]': 'Capacidad Alojamiento DER (kW)', 'GRAN ESCALA _CARGA': 'GRAN ESCALA _CARGA', 'GRAN ESCALA _IC.LIM.CARGA': 'GRAN ESCALA _IC.LIM.CARGA', 'GRAN ESCALA _IC.ALC.PROTECC': 'GRAN ESCALA _IC.ALC.PROTECC', 'GRAN ESCALA _COORD.X': 'GRAN ESCALA _COORD.X', 'GRAN ESCALA _COORD.Y': 'GRAN ESCALA _COORD.Y', 'GRAN ESCALA _ORDEN': 'GRAN ESCALA _ORDEN', 'GRAN ESCALA _Circuito': 'Circuito', });
lyr_BajaEscalaCPI_5.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'porc': 'porc', 'Potencia n': 'Potencia Nominal (kVA)', 'Capacidad': 'Capacidad Alojamiento DER (kW) ', 'CRI.INCUMP': 'CRI.INCUMP', 'CAP,NOM': 'CAP,NOM', 'COORD.X': 'COORD.X', 'COORD.Y': 'COORD.Y', 'CAP.LIBRE': 'CAP.LIBRE', 'CIRCUITO': 'Circuito', });
lyr_Subestacin_1.set('fieldImages', {'Tensión (': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_BajaEscalaCSI_2.set('fieldImages', {'bus1': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'Potencia N': 'TextEdit', 'Capacidad': 'TextEdit', 'Circuito': 'TextEdit', 'Capacida_1': 'TextEdit', });
lyr_GranEscalaCSIkW_3.set('fieldImages', {'DSSNAME': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'DER MT —': 'TextEdit', 'DER MT �_1': 'TextEdit', });
lyr_GranEscalaCPIkW_4.set('fieldImages', {'LINEA': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'GRAN ESCALA _Capacidad Alojamiento DER [kW]': 'Range', 'GRAN ESCALA _CARGA': 'TextEdit', 'GRAN ESCALA _IC.LIM.CARGA': 'TextEdit', 'GRAN ESCALA _IC.ALC.PROTECC': 'TextEdit', 'GRAN ESCALA _COORD.X': 'TextEdit', 'GRAN ESCALA _COORD.Y': 'TextEdit', 'GRAN ESCALA _ORDEN': 'Range', 'GRAN ESCALA _Circuito': 'TextEdit', });
lyr_BajaEscalaCPI_5.set('fieldImages', {'NOMBRE': 'TextEdit', 'porc': 'TextEdit', 'Potencia n': 'TextEdit', 'Capacidad': 'TextEdit', 'CRI.INCUMP': 'TextEdit', 'CAP,NOM': 'TextEdit', 'COORD.X': 'TextEdit', 'COORD.Y': 'TextEdit', 'CAP.LIBRE': 'TextEdit', 'CIRCUITO': 'TextEdit', });
lyr_Subestacin_1.set('fieldLabels', {'Tensión (': 'inline label - always visible', 'X1': 'hidden field', 'Y1': 'hidden field', 'Nombre': 'inline label - always visible', });
lyr_BajaEscalaCSI_2.set('fieldLabels', {'bus1': 'hidden field', 'X1': 'hidden field', 'Y1': 'hidden field', 'Potencia N': 'inline label - always visible', 'Capacidad': 'inline label - always visible', 'Circuito': 'inline label - always visible', 'Capacida_1': 'hidden field', });
lyr_GranEscalaCSIkW_3.set('fieldLabels', {'DSSNAME': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'DER MT —': 'inline label - always visible', 'DER MT �_1': 'inline label - always visible', });
lyr_GranEscalaCPIkW_4.set('fieldLabels', {'LINEA': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'GRAN ESCALA _Capacidad Alojamiento DER [kW]': 'inline label - always visible', 'GRAN ESCALA _CARGA': 'hidden field', 'GRAN ESCALA _IC.LIM.CARGA': 'hidden field', 'GRAN ESCALA _IC.ALC.PROTECC': 'hidden field', 'GRAN ESCALA _COORD.X': 'hidden field', 'GRAN ESCALA _COORD.Y': 'hidden field', 'GRAN ESCALA _ORDEN': 'hidden field', 'GRAN ESCALA _Circuito': 'inline label - always visible', });
lyr_BajaEscalaCPI_5.set('fieldLabels', {'NOMBRE': 'hidden field', 'porc': 'hidden field', 'Potencia n': 'inline label - always visible', 'Capacidad': 'inline label - always visible', 'CRI.INCUMP': 'hidden field', 'CAP,NOM': 'hidden field', 'COORD.X': 'hidden field', 'COORD.Y': 'hidden field', 'CAP.LIBRE': 'hidden field', 'CIRCUITO': 'inline label - always visible', });
lyr_BajaEscalaCPI_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});