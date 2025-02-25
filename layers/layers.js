ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11057744.687994, 1272043.237925, 11138984.213817, 1315917.588928]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'คาเฟ่',
                interactive: true,
    title: 'คาเฟ่<br />\
    <img src="styles/legend/_1_0.png" /> 265 Cafe & Restaurant<br />\
    <img src="styles/legend/_1_1.png" /> กันเอง JTK coffee & restaurant<br />\
    <img src="styles/legend/_1_2.png" /> ชุลมุน Coffee Chaos coffee<br />\
    <img src="styles/legend/_1_3.png" /> ซอย12คอฟฟี่<br />\
    <img src="styles/legend/_1_4.png" /> ซุ้มน้ำตัวกลม<br />\
    <img src="styles/legend/_1_5.png" /> ทุ่งยาวคาเฟ่<br />\
    <img src="styles/legend/_1_6.png" /> เมมโมรี่ คาเฟ่แคมป์ (memory cafe camp)<br />\
    <img src="styles/legend/_1_7.png" /> ร้านบ้าน ณ.ชา & คอฟฟี่<br />\
    <img src="styles/legend/_1_8.png" /> ร้านป๊อป_ชานมไข่มุก ขายของชำของแช่แข็ง เขาล้าน<br />\
    <img src="styles/legend/_1_9.png" /> All‘s day cafe & restaurant<br />\
    <img src="styles/legend/_1_10.png" /> Café Amazon สาขา หจก. ตรงตวงปิโตรเลียม<br />\
    <img src="styles/legend/_1_11.png" /> Cafe\' De Field<br />\
    <img src="styles/legend/_1_12.png" /> Cozy Gafe’ (ร้านกาแฟ โคซี่ กาฟี่)<br />\
    <img src="styles/legend/_1_13.png" /> Exactly Coffee Thabsakae<br />\
    <img src="styles/legend/_1_14.png" /> Hello mango cafe<br />\
    <img src="styles/legend/_1_15.png" /> KA-NUM Home Cafe<br />\
    <img src="styles/legend/_1_16.png" /> OCTORY CAFE & RESTAURANT<br />\
    <img src="styles/legend/_1_17.png" /> Pisces cafe<br />\
    <img src="styles/legend/_1_18.png" /> Somewhere Everyday Sunrise<br />\
    <img src="styles/legend/_1_19.png" /> Station666 ตำเมืองเลย ข้าวแกง กาแฟสด<br />\
    <img src="styles/legend/_1_20.png" /> ThankYou Cafe<br />\
    <img src="styles/legend/_1_21.png" /> ZMO COCOA<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1];
lyr__1.set('fieldAliases', {'ลำดับ': 'ลำดับ', 'ชื่อสถานที่': 'ชื่อสถานที่', 'ละติจูด': 'ละติจูด', 'ลองจิจูด': 'ลองจิจูด', 'ประเภทสถานที่': 'ประเภทสถานที่', 'ที่อยู่': 'ที่อยู่', 'ตำบล': 'ตำบล', 'อำเภอ': 'อำเภอ', 'จังหวัด': 'จังหวัด', 'Facebook': 'Facebook', 'ภาพสถานที่': 'ภาพสถานที่', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr__1.set('fieldImages', {'ลำดับ': 'Range', 'ชื่อสถานที่': 'TextEdit', 'ละติจูด': 'TextEdit', 'ลองจิจูด': 'TextEdit', 'ประเภทสถานที่': 'TextEdit', 'ที่อยู่': 'TextEdit', 'ตำบล': 'TextEdit', 'อำเภอ': 'TextEdit', 'จังหวัด': 'TextEdit', 'Facebook': 'TextEdit', 'ภาพสถานที่': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', 'field_15': 'TextEdit', 'field_16': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', 'field_19': 'TextEdit', 'field_20': 'TextEdit', 'field_21': 'TextEdit', 'field_22': 'TextEdit', 'field_23': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr__1.set('fieldLabels', {'ลำดับ': 'hidden field', 'ชื่อสถานที่': 'header label - always visible', 'ละติจูด': 'hidden field', 'ลองจิจูด': 'hidden field', 'ประเภทสถานที่': 'header label - always visible', 'ที่อยู่': 'header label - always visible', 'ตำบล': 'header label - always visible', 'อำเภอ': 'header label - always visible', 'จังหวัด': 'header label - always visible', 'Facebook': 'header label - always visible', 'ภาพสถานที่': 'header label - always visible', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'field_15': 'no label', 'field_16': 'no label', 'field_17': 'no label', 'field_18': 'no label', 'field_19': 'no label', 'field_20': 'no label', 'field_21': 'no label', 'field_22': 'no label', 'field_23': 'no label', 'field_24': 'no label', 'field_25': 'no label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});