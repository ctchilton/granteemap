  
$(document).ready(function(){

  function hashCheck() {
    var hashAttr = '';

    if(window.location.hash) {
      hashAttr = window.location.hash.replace(/[^a-z0-9]/gi, '');
    } 


    $("#granteeInfo").hide();
    $("#programInfo").show();

    L.Understated.resetZoom( zoomLevel, [37.8, -96] );


    if (hashAttr == 'all') {
        L.Understated.showAllGrantees(granteeData);
        L.Understated.resetStateOpacity(stateData, mapSettings);
        $(".info.legend.leaflet-control").show(); // Show legend
        $(".programcount").show(); // Show programcount
    }
    else {
        // loop all grantees
        //Shows information for Grantee selected from main select
        for (var key in granteeData) {
          // if found grantee, then pop its data into granteeInfo  
          if (hashAttr == key) {
            // modify the link, so that reclicking it removes the hash
            $("#stateGrantees a[data-key=" + key + "]").attr('href', '#all');

            $("#granteeInfo .name").html(granteeData[key]['name']);
            $("#granteeInfo .timeline").html("Grant period: " + granteeData[key]['timeline']);
            $("#granteeInfo .description").html(granteeData[key]['description']);
            $("#programInfo").hide();
            $("#granteeInfo").show();
           

            // highlight states that contain this grantee
            for (var stateKey in stateData) {
              // loop grantees in each state
              var fillOpacity = mapSettings.opacity.inactive;
              var fillColor = mapSettings.colors.default;
              var dataActive = false;

              for (var i3 = 0, len3 = stateData[stateKey].grantees.length; i3 < len3; i3++) {
                if (stateData[stateKey].grantees[i3] == hashAttr) {
                  fillOpacity = mapSettings.opacity.active;
                  dataActive = true;

                }
              }

              $( ".state-" + stateKey  ).attr( 'fill-opacity', fillOpacity );
              $( ".state-" + stateKey  ).attr( 'data-active', dataActive );
              if (mapSettings.colors.useDefault) $( ".state-" + stateKey  ).attr( 'fill', fillColor );

            }   
          }
        }
    }
  }

  window.onhashchange = hashCheck;

});




/*********************************************************************************************
*
*********************************************************************************************/
L.Understated.showAllGrantees(granteeData); // on default load

/** leaflet */
// replace density with grantees
for (var key in statesData.features) {
    var code = statesData.features[key].properties.code;
    var granteeCount = stateData[code].grantees.length;
    statesData.features[key].properties.density = granteeCount;
}   
 

// set zoom level of map
var zoomLevel = 4; // default size
// if move movile screen is below 700pixel, then change zoomLevel
if ($(window).width() < 700) zoomLevel = 4; 

var map = L.map('map', {zoomControl: false});
L.Understated.resetZoom( zoomLevel, [37.8, -96] );

// add the Home icon between [-] and [+]
var zoomHome = L.Control.zoomHome();
zoomHome.addTo(map);

map.doubleClickZoom.disable();

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        minZoom: 3,
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, Points &copy 2017 LINZ'
}).addTo(map);


var fullCount = addressPoints.length;

var granteesLayerGroup = L.markerClusterGroup.layerSupport({
    // Options: see https://github.com/Leaflet/Leaflet.markercluster#all-options
    showCoverageOnHover: false,
});

var control = L.control.layers(null, null, { collapsed: false }),
    i, 
    a, 
    title, 
    marker;


granteesLayerGroup.addTo(map);

var group = [];
var arryGroups = []; //need to push to array?

var granteeKeyCount = Object.keys(granteeData).length + 1;
// for(i=0; i < granteeKeyCount; i++){
for(i=1; i < granteeKeyCount; i++){
    group[i] = L.layerGroup();
    arryGroups.push(group[i]);//push to array
}


// Extend markers, add custom maker icon, and option parameters below.
var LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [37, 50],
        iconAnchor:   [37, 50],
        popupAnchor:  [-16, -30]
    }
});

// init variable for icon image
    var blueIcon    = new LeafIcon({iconUrl: 'images/blue-marker.png'}),
        orangeIcon  = new LeafIcon({iconUrl: 'images/orange-marker.png'});


//fullCount
for (i = 0; i < fullCount; i++) {
    a = addressPoints[i];

    var setIconColor = a.type == 'headquarters' ?  orangeIcon : blueIcon ;

    marker = L.marker([a.Latitude, a.Longitude], {icon: setIconColor});
    marker.bindPopup('<h3>' + a.grantee +'</h3>' + a.blurb + '');
    
    // add marker to map
    marker.addTo(
                a.granteeAcronym == 'aap' ?  group[1] : 
                a.granteeAcronym == 'amf' ?  group[2] : 
                a.granteeAcronym == 'bhsb' ?  group[3] : 
                a.granteeAcronym == 'busp' ?  group[4] : 
                a.granteeAcronym == 'cadca' ?  group[5] :
                a.granteeAcronym == 'cafp' ?  group[6] :
                a.granteeAcronym == 'ccat' ?  group[7] :
                a.granteeAcronym == 'ccf' ?  group[8] :
                a.granteeAcronym == 'cdcf' ?  group[9] :
                a.granteeAcronym == 'chc' ?  group[10] :
                a.granteeAcronym == 'chcs' ?  group[11] :
                a.granteeAcronym == 'csi' ?  group[12] :
                a.granteeAcronym == 'csjksu' ?  group[13] :
                a.granteeAcronym == 'facadd' ?  group[14] :
                a.granteeAcronym == 'fin' ?  group[15] :
                a.granteeAcronym == 'fract' ?  group[16] :
                a.granteeAcronym == 'fri' ?  group[17] :
                a.granteeAcronym == 'gih' ?  group[18] :
                a.granteeAcronym == 'isu' ?  group[19] :
                a.granteeAcronym == 'kfri' ?  group[20] :
                a.granteeAcronym == 'kip' ?  group[21] :
                a.granteeAcronym == 'lac' ?  group[22] :
                a.granteeAcronym == 'mfu' ?  group[23] :
                a.granteeAcronym == 'mgr' ?  group[24] :
                a.granteeAcronym == 'mhcf' ?  group[25] :
                a.granteeAcronym == 'nas' ?  group[26] :
                a.granteeAcronym == 'nasadad' ?  group[27] :
                a.granteeAcronym == 'ncbh' ?  group[28] :
                a.granteeAcronym == 'nhcf' ?  group[29] :
                a.granteeAcronym == 'norc' ?  group[30] :
                a.granteeAcronym == 'osu' ?  group[31] :
                a.granteeAcronym == 'pdfk' ?  group[32] :
                a.granteeAcronym == 'phi' ?  group[33] :
                a.granteeAcronym == 'phope' ?  group[34] :
                a.granteeAcronym == 'pri' ?  group[35] :
                a.granteeAcronym == 'psurf' ?  group[36] :
                a.granteeAcronym == 'sbha' ?  group[37] :            
                a.granteeAcronym == 'tah' ?  group[38] :
                a.granteeAcronym == 'tri' ?  group[39] :
                a.granteeAcronym == 'tyr' ?  group[40] :
                a.granteeAcronym == 'ucb' ?  group[41] :
                a.granteeAcronym == 'uisap' ?  group[42] :
                a.granteeAcronym == 'uom' ?  group[43] : 
                a.granteeAcronym == 'uonm' ?  group[44] :
                a.granteeAcronym == 'uvm' ?  group[45] : 
                a.granteeAcronym == 'ybu' ? group [46]: 
                a.granteeAcronym == 'ypr' ? group [47]:  group[47]

                );
}




granteesLayerGroup.checkIn(arryGroups);

addGranteeToMap();

function resetMap(){
    granteesLayerGroup['addLayers'](arryGroups);
}

function addGranteeToMap(){
        // Adding to map.
    for(i=1; i < granteeKeyCount; i++){
            group[i].addTo(map);
    } 
}


// Set-up options.
var getOption = $('#stateGrantees');

for (i = 0; i < getOption.length; i++) {
    getOption[i].addEventListener("change", toggleGroup);
}

function toggleGroup(event) {

    if(event.currentTarget.selectedOptions[0].value == 'all'){
        resetMap()
    }else{

        var data = event.currentTarget.selectedOptions[0].dataset;
        var op      = data.op;
        var groupNo = data.group;
        var group2  =   

                groupNo == 'aap' ?  group[1] : 
                groupNo == 'amf' ?  group[2] : 
                groupNo == 'bhsb' ?  group[3] : 
                groupNo == 'busp' ?  group[4] : 
                groupNo == 'cadca' ?  group[5] :
                groupNo == 'cafp' ?  group[6] :
                groupNo == 'ccat' ?  group[7] :
                groupNo == 'ccf' ?  group[8] :
                groupNo == 'cdcf' ?  group[9] :
                groupNo == 'chc' ?  group[10] :
                groupNo == 'chcs' ?  group[11] :
                groupNo == 'csi' ?  group[12] :
                groupNo == 'csjksu' ?  group[13] :
                groupNo == 'facadd' ?  group[14] :
                groupNo == 'fin' ?  group[15] :
                groupNo == 'fract' ?  group[16] :
                groupNo == 'fri' ?  group[17] :
                groupNo == 'gih' ?  group[18] :
                groupNo == 'isu' ?  group[19] :
                groupNo == 'kfri' ?  group[20] :
                groupNo == 'kip' ?  group[21] :
                groupNo == 'lac' ?  group[22] :
                groupNo == 'mfu' ?  group[23] :
                groupNo == 'mgr' ?  group[24] :
                groupNo == 'mhcf' ?  group[25] :
                groupNo == 'nas' ?  group[26] :
                groupNo == 'nasadad' ?  group[27] :
                groupNo == 'ncbh' ?  group[28] :
                groupNo == 'nhcf' ?  group[29] :
                groupNo == 'norc' ?  group[30] :
                groupNo == 'osu' ?  group[31] :
                groupNo == 'pdfk' ?  group[32] :
                groupNo == 'phi' ?  group[33] :
                groupNo == 'phope' ?  group[34] :
                groupNo == 'pri' ?  group[35] :
                groupNo == 'psurf' ?  group[36] :
                groupNo == 'sbha' ?  group[37] :            
                groupNo == 'tah' ?  group[38] :
                groupNo == 'tri' ?  group[39] :
                groupNo == 'tyr' ?  group[40] :
                groupNo == 'ucb' ?  group[41] :
                groupNo == 'uisap' ?  group[42] :
                groupNo == 'uom' ?  group[43] : 
                groupNo == 'uonm' ?  group[44] :
                groupNo == 'uvm' ?  group[45] : 
                groupNo == 'ybu' ? group [46]: 
                groupNo == 'ypr' ? group [47]: group[48] ;


        granteesLayerGroup['clearLayers'](group2);
        granteesLayerGroup[op](group2);
    }
}



/*********************************************************************************************
*
*********************************************************************************************/
// get color depending on population density value
function getColor(d) {
    // if #granteeInfo showing, return the uniform color
    // if (mapSettings.colors.useDefault && $('#granteeInfo').is(":visible") ) {

    if (mapSettings.colors.useDefault && $('#stateName')==='All Grantees' && $('#granteeInfo').is(":visible")) {
        return mapSettings.colors.default;
    }

    else {

    // get the state color
    var statColor = d > 8 ? '#B51737' :
                    d > 6 ? '#DF5F1B' :
                    d > 4 ? '#227A17' :
                    d > 2 ? '#199DDA' :
                    d > 0 ? '#7CCB00' : 
                    '#858585' ;
        }

    return statColor;
}

/*********************************************************************************************
*
*********************************************************************************************/
function style(feature) {

    var dataActive = $(".state-"+feature.properties.code).attr('data-active');
    if (dataActive == "false") {
        return {};
    }

    //if state doesn't data-active attribute, return colors
    else {
        return {
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '0',
        fillOpacity: mapSettings.opacity.active,
        fillColor: getColor(feature.properties.density) // different colors
        };
    }
}


/*********************************************************************************************
* hover over state 
*********************************************************************************************/
function highlightFeature(e) {
    var layer = e.target;
    
    var dataActive = $(".state-"+layer.feature.properties.code).attr('data-active');
    if (dataActive !== "false") {
        layer.setStyle({
            //weight: 2,
            //color: '#fff',
            //dashArray: '',
            //fillOpacity: mapSettings.opacity.active,
            //fillColor: getColor(mapSettings.colors.default)
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
        if (typeof(info) != "undefined") info.update(layer.feature.properties);
    }

    if(dataActive=="true") {
        layer.setStyle({
            fillColor: mapSettings.colors.grayhighlight //return gray highlight when state is active
        });
    }

    //check if data-active attribute exists. If so, hide program count 
    if (dataActive=="true" || dataActive=="false") {
        $(".programcount").hide(); // hide programcount
    }
}

var geojson;

/*********************************************************************************************
* Reset Highlight of states
*********************************************************************************************/
function resetHighlight(e) {
    var layer = e.target;
    var dataActive = $(".state-"+e.target.feature.properties.code).attr('data-active');
    if (dataActive !== "false") { //data-active == true, data-active==undefined

        geojson.resetStyle(e.target);       
        var hashAttr = window.location.hash.replace(/[^a-z0-9]/gi, '');
        console.log("hashAttr: " + hashAttr);

        //On mouseout, return blue color when grantee has been selected on right.
       if( $('#stateName').text()==='All Grantees' || $('#granteeInfo').is(":visible")) {
            //DO NOT return blue color when "All Grantees" has been selected or when page has loaded.
            if (hashAttr!=="all" && hashAttr!=="" && dataActive !== undefined) {
                layer.setStyle({
                    fillColor: mapSettings.colors.default //return dark blue
                });
            }
        }   
    }

    if (typeof(info) != "undefined") info.update();
}


/*********************************************************************************************
* When a state is clicked
*********************************************************************************************/
function zoomToFeature(e) {

    L.Understated.resetStateFill(stateData);
    L.Understated.resetStateOpacity(stateData, mapSettings);
    
    if (typeof e.target.feature.properties !== 'undefined') {
      window.location.hash = e.target.feature.properties.code;

      var stateCode = e.target.feature.properties.code;
      var stateInfo = stateData[stateCode];

      if ( $("#stateName").html() == stateInfo['name']){
          // show All Grantees
          L.Understated.showAllGrantees(granteeData);
      }
      else {
          // show only grantees for one state
          $("#stateName").html(stateInfo['name']);
          
          var granteesUl = '';
          for (var i = 0, len = stateInfo.grantees.length; i < len; i++) {
            for (var key in granteeData) {
              if (stateInfo.grantees[i] == key) {
                granteesUl = granteesUl + '<option value="'+key+'" data-key="'+key+'">' + granteeData[key]['name'] + '</option>';
              }
            }     
          }
          $("#stateGrantees").html('<option value="all">All Grantees</option>'+granteesUl);
          $("#stateInfo").show();
          
      }
    }
}


/*********************************************************************************************
* Add state borders
*********************************************************************************************/
geojson = L.geoJson(statesData, {
    style: style,
}).addTo(map);


var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 1, 2, 4, 6, 8],
        labels = [],
        from, to;

    labels.push(
        '<i style="background:' + getColor(from) + '"></i> ' +
        0 );
    
    for (var i = 1; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
            '<i style="background:' + getColor(from + 1) + '"></i> ' +
            from + (to ? '&ndash;' + to : '+'));
    }

    div.innerHTML = labels.join('<br>');
    return div;
};

$(document).ready(function(){
    $('<p class="legend-title"><strong>Active Grantees</strong><p class="legend-note">shading represents # active grantees, rather than a count of each site.</p>').insertBefore('.info.legend.leaflet-control i:nth-child(1)');
});


legend.addTo(map);
