
  var minGrantees = 999;
  var maxGrantees = 0;

  var mapSettings = {
    colors: {
        //default: '#033069',
        useDefault: true,
        grayhighlight: '#858585'
    },
    opacity: {
        active: 1,
        inactive: .1
    }
  }



  stateData = {
    al: { name: 'Alabama', grantees: ['ybu'] },
    az: { name: 'Arizona', grantees: ['ybu'] },
    ca: { name: 'California', grantees: ['ybu', 'cafp', 'ccf', 'kfri', 'kip', 'sbha', 'abamf', 'ncbh', 'uisap'] },
    co: { name: 'Colorado', grantees: ['ybu', 'csi', 'abamf', 'ncbh'] },
    ct: { name: 'Connecticut', grantees: ['aap', 'facadd', 'pri', 'abamf'] },
    dc: { name: 'Washington DC', grantees: ['ybu', 'fin', 'gih', 'lac', 'mfu', 'nasadad', 'nas', 'sbha', 'abamf', 'ncbh', 'tah'] },
    fl: { name: 'Florida', grantees: ['ybu', 'chcs', 'abamf'] },
    ga: { name: 'Georgia', grantees: ['ybu', 'aap', 'csi', 'ccat', 'abamf', 'cdcf', 'csjksu'] },
    hi: { name: 'Hawaii', grantees: ['kfri'] },
    il: { name: 'Illinois', grantees: ['ybu', 'aap', 'sbha', 'abamf'] },
    in: { name: 'Indiana', grantees: ['ybu', 'cdcf'] },
    ks: { name: 'Kansas', grantees: ['ybu', 'ncbh'] },
    ky: { name: 'Kentucky', grantees: ['ybu', 'chcs', 'abamf'] },
    la: { name: 'Louisiana', grantees: ['ybu', 'pri'] },
    ma: { name: 'Massachusetts', grantees: ['ybu', 'busp', 'chcs', 'csi', 'chc', 'ccat', 'abamf'] },
    md: { name: 'Maryland', grantees: ['bhsb', 'mgr', 'norc', 'sbha', 'abamf'] },
    mi: { name: 'Michigan', grantees: ['ybu','kfri','abamf'] },
    mn: { name: 'Minnesota', grantees: ['ybu', 'pri', 'abamf', 'uom'] },
    mo: { name: 'Missouri', grantees: ['ybu'] },
    ms: { name: 'Mississippi', grantees: ['ybu'] },
    mt: { name: 'Montana', grantees: ['ybu', 'mhcf'] },
    nc: { name: 'North Carolina', grantees: ['ybu', 'csi', 'psurf'] },
    nh: { name: 'New Hampshire', grantees: ['nhcf'] },
    nj: { name: 'New Jersey', grantees: ['ybu', 'chs', 'ccat'] },
    nm: { name: 'New Mexico', grantees: ['ybu', 'sbha', 'uonm'] },
    nv: { name: 'Nevada', grantees: ['ybu', 'tyr'] },
    ny: { name: 'New York', grantees: ['ybu', 'chcs', 'fract', 'mfu', 'pdfk', 'pri', 'psurf', 'abamf', 'ncbh', 'tri'] },
    oh: { name: 'Ohio', grantees: ['ybu', 'csi', 'ccat', 'pri', 'abamf', 'cdcf', 'osu'] },
    ok: { name: 'Oklahoma', grantees: ['ybu', 'abamf' ] },
    or: { name: 'Oregon', grantees: ['psurf','sbha','abamf'] },
    pa: { name: 'Pennsylvania', grantees: ['chcs', 'csi', 'kfri', 'abamf'] },
    ri: { name: 'Rhode Island', grantees: ['ybu', 'abamf', 'ncbh'] },
    sc: { name: 'South Carolina', grantees: ['ybu'] },
    tn: { name: 'Tennessee', grantees: ['ybu', 'abamf', 'ncbh'] },
    tx: { name: 'Texas', grantees: ['ybu', 'chcs', 'abamf'] },
    va: { name: 'Virginia', grantees: ['ybu', 'chcs', 'cadca', 'phope', 'abamf'] },
    vt: { name: 'Vermont', grantees: ['ybu', 'psurf', 'uvm'] },
    wa: { name: 'Washington', grantees: ['ybu', 'psurf', 'abamf'] },
    wi: { name: 'Wisconsin', grantees: ['ybu', 'ccat', 'abamf'] },
    wv: { name: 'West Virginia', grantees: ['ybu'] }
  }



  granteeData = {
    aap: { coords: "1005,440", name: "American Academy of Pediatrics", timeline: "10/1/2014 - 9/30/2018", description: "AAP is increasing utilization of SBIRT among pediatric providers serving adolescents. Key components include a learning collaborative to design and implement best practices, including quality measures, and development of an EQIPP® (Education in Quality Improvement and Pediatric Practice) module, which is an online tool to train pediatric practitioners."},
    bhsb: { coords: "1310,490", name: "Behavioral Health System Baltimore", timeline: "11/1/2015 - 12/31/2017", description: "BHSB is leading a multi-jurisdictional, multi-partner initiative to integrate adolescent SBIRT into pediatric primary settings and school-based health centers across Maryland." },
    cafp: { coords: "250,650", name: "California Academy of Family Physicians", timeline: "9/1/15 - 8/31/18", description: "CAFP will increase practitioner awareness, competence, and confidence in identifying and addressing youth substance use, including alcohol and other drugs through partners from five national primary care associations that serve family physicians, nurse practitioners, physician assistants, general internists, and pediatricians." },
    ccf: { coords: "250,650", name: "California Community Foundation ", timeline: "Grant 1 - 8/1/14 - 9/1/15, Grant 2 - 3/1/16 -2/28/18", description: "CCF had an initial grant to lead a planning a process to explore the feasibility of implementing SBIRT for adolescents in Los Angeles County. In their second grant, they are implementing SBIRT in 4 schools in LA County." },
    csi: { coords: "1390,360", name: "Center for Social Innovation", timeline: "12/1/2014 - 12/31/2017", description: "C4 is partnering with researchers, practitioners, and young people in recovery from substance use disorders to determine how peer-based interventions can be effective at motivating change and promoting healthy choices for adolescents." },
    cdcf: { coords: "1100,800", name: "CDC Foundation", timeline: "01/01/16 - 12/31/218", description: "CDC will conduct a comprehensive, regional substance use prevention and sexual risk behavior reduction program for communities with high substance use and/or HIV/STD rates among youth.  Their school-centered approach will focus on four major activities: substance use and HIV prevention education, access to key health services, promotion of safe and supportive school and community climates, and monitoring and evaluation." },
    chcs: { coords: "780,700", name: "Center for Health Care Strategies", timeline: "Grant 1: 4/1/15 - 3/31/16, Grant 2: 1/1/16-12/31/18", description: "Grant 1: CHCS  convened a small group consultation (SGC), to facilitate the identification of opportunities for and challenges to the implementation of a publicly financed primary care approach to the prevention of and early intervention for youth substance use disorders. Grant 2: CHCS and ACAP will conduct a learning collaborative to support a target of five participating plans in developing and implementing a PCP training program on the use of SBIRT." },
    chc: { coords: "280,700", name: "Children’s Hospital Corp", timeline: "12/1/14 - 11/30/18", description: "CHC is conducting a research study to develop a set of outcome measures for real-world clinical settings to assess the short term impact of SBIRT. The research is testing the efficacy of SBIRT and the measures for a particularly vulnerable group: youth with chronic medical conditions." },
    cadca: { coords: "780,700", name: "Community Anti-Drug Coalitions of America", timeline: "7/1/15 - 6/30/16", description: "CADCA will create a planning process to develop, pilot, and evaluate an approach to provide training and technical assistance to community coalitions to support the development and implementation of SBIRT in their communities." },
    ccat: { coords: "280,700", name: "Community Catalyst", timeline: "12/1/13 - 11/30/16", description: "CC is developing consumer-led advocacy campaigns in six states (GA, MA, NY, NJ, OH, WI) to enact state policy change to increase access to SBIRT by improving reimbursement and expanding the settings/professionals that can provide it, with a focus on peer approaches." },
    facadd: { coords: "780,700", name: "Facing Addiction", timeline: "4/1/16  - 3/31/18", description: "Facing Addiction will build and organize a grassroots advocacy movement of those affected by addiction to advance public health responses, including Screening, Brief Intervention, and Referral to Treatment (SBIRT)." },
    fract: { coords: "280,700", name: "Fractured Atlas", timeline: "10/1/14 - 9/30/15", description: "Fractured Atlas is producing and conducting community discussion forums for Generation Found, a documentary film project about adolescents in recovery and the pediatric nature of the onset of addiction." },
    fin: { coords: "780,700", name: "Frameworks Institute", timeline: "1/1/15 - 4/30/16", description: "FrameWorks will explore how to effectively communicate with the members of the public, practitioners, and policymakers about youth substance use and what it takes to improve outcomes for young people." },
    gih: { coords: "280,700", name: "Grantmakers in Health", timeline: "8/1/15 - 7/31/16", description: "GIH will convene behavioral health funders, with a particular emphasis on SUD, as part of the GIH Fall Forum in Washington, DC to illuminate philanthropy’s current assets, gaps, and barriers to scaling behavioral health efforts as well as opportunities for partnering with different sectors and government." },
    kfri: { coords: "780,700", name: "Kaiser Foundation Research Institute", timeline: "2/1/2016 - 1/31/2019", description: "KP will develop predictive statistical models - “risk profiles” - of clinical and demographic characteristics which can be used by health systems and other youth-serving organizations to identify children and adolescents at greatest risk of developing substance use problems, for targeted prevention and early intervention efforts, including SBIRT." },
    lac: { coords: "280,700", name: "Legal Action Center ", timeline: "12/1/14 - 11/30/17", description: "LAC is analyzing the implementation of the Affordable Care Act and the Mental Health Parity and Addiction Equity Act, identify opportunities to improve access to preventative services, and provide technical assistance to state agencies, insurers, and advocates to improve policy and practice to expand access to prevention services." },
    mfu: { coords: "780,700", name: "Mentor Foundation USA", timeline: "11/1/15 - 7/31/16", description: "Mentor Foundation USA will create an interactive “multi-media” version of their current Shattering the Myths model, called STM 2.0, that incorporates messages for prevention specifically designed to counteract the misinformation (myths) adolescents have about drugs and alcohol. Messages will be framed to promote the benefits of prevention behaviors." },
    mgr: { coords: "280,700", name: "Mosaic Group", timeline: "9/1/14 - 8/31/16", description: "Mosaic Group is developing an Adolescent SBIRT checklist to support effective implementation of SBIRT for Foundation grantees and is providing technical assistance to implement the checklist with three grantees (National Council, School Based Health Alliance, YouthBuild)." },
    nas: { coords: "780,700", name: "National Academy of Sciences", timeline: "7/1/15 - 6/30/17", description: "The National Academies will continue to coordinate the Forum on Promoting Children's Cognitive, Affective, and Behavioral Health (C-CAB Forum). The Forum will consist of scientists, practitioners, government officials, and staff from private foundations. The goal is to advance an agenda focused on implementation that promote the mental, emotional, and behavioral health of adolescents." },
    ncbh: { coords: "280,700", name: "National Council of Behavioral Health ", timeline: "4/1/2014 - 3/31/2017", description: "Grant 1 - The National Council will implement a project to pilot SBIRT in 30 CBHOs in five states. Utilizing a competitive application process, the National Council will identify the agencies who will work in partnership with their respective State Associations to implement their SBIRT projects and conduct advocacy to establish Medicaid reimbursement for SBIRT." },
    norc: { coords: "780,700", name: "National Opinion Research Council", timeline: "10/1/2014 - 9/30/2017", description: "NORC is developing an online interactive SBIRT curriculum for social work and nursing schools." },
    nhcf: { coords: "280,700", name: "New Hampshire Charitable Foundation", timeline: "1/1/2014 - 6/30/2017", description: " NHCF is expanding SBIRT for adolescents in New Hampshire in community health settings and advocate for state policy changes to sustain SBIRT financing." },
    osu: { coords: "780,700", name: "Ohio State University", timeline: "7/1/14 - 6/30/17", description: "OSU is helping to establish a national Higher Education Center on Alcohol and Drug Prevention and Recovery, to operate as an information dissemination center to promote SBIRT and other evidence-based strategies to address alcohol and other drug use on college campuses. They have developed ScreenU, a drug misuse screening software, being piloted on college campuses across the country." },
    pdfk: { coords: "280,700", name: "Partnership for Drug Free Kids", timeline: "7/1/14 - 6/30/16", description: "The Partnership is developing, piloting, and evaluating an approach to engage parents in SBIRT programs and build a national peer support network of parents to address adolescent substance use." },
    pri: { coords: "780,700", name: "Policy Research Inc.", timeline: "9/1/14 - 8/31/17", description: "PRI is partnering with the National Center for Mental Health and Juvenile Justice to develop and implement an SBIRT approach for youth involved in the juvenile justice system." },
    psurf: { coords: "280,700", name: "Portland State University - Reclaiming Futures", timeline: "9/1/2014 - 6/30/2018", description: "Reclaiming Futures is incorporating SBIRT into the model to expand early intervention and diversion opportunities for court-involved youth." },
    phope: { coords: "780,700", name: "Project Hope", timeline: "3/1/16 - 2/28/17", description: "Health Affairs will conduct a briefing to highlight the issues in the behavioral health journal and discuss how policymakers and other stakeholders can promote behavioral health, health policy, and health systems improvement. This briefing will be held in Washington, DC and will include key stakeholders, including members of Congress and the Administration—as well as other health and health care stakeholders." },
    sbha: { coords: "280,700", name: "School Based Health Alliance", ended: true, timeline: "6/1/2014 - 5/31/2016", description: "SBHA conducted a two-year pilot project to provide adolescent-specific SBIRT training and technical assistance to 10 school-based health clinics" },
    abamf: { coords: "780,700", name: "The American Board of Addiction Medicine Foundation", timeline: "11/1/13 - 10/31/16", description: " ABAM is establishing the National Center for Physician Training in Addiction Medicine, to educate and train physicians in addiction medicine and prevention/early intervention of adolescent substance use." },
    csjksu: { coords: "280,700", name: "The Center for Sustainable Journalism - Kennesaw State University ", timeline: "4/1/15 - 3/3/16", description: "KSURSF is supporting the Center for Sustainable Journalism to develop media and communication materials to increase awareness among funders, policymakers and practitioners about adolescent substance use prevention and foster care and how the strategic initiative goals can promote opportunities and reduce barriers for these young people." },
    tyr: { coords: "780,700", name: "Transforming Youth Recovery", timeline: "4/1/15 - 3/3/16", description: "TYR is conducting a strategic planning process to launch Facing Addiction by: 1) conducting a public awareness campaign to build a coalition of stakeholders; 2) developing a research-based marketing and fundraising plan to motivate giving using tailored messaging; and 3) creating a social media campaign." },
    tri: { coords: "280,700", name: "Treatment Research Institute", timeline: "1/1/14 - 8/31/17", description: "TRI is piloting an SBIRT approach in four New York City metro area schools utilizing a computerized screening protocol and tailored brief intervention." },
    tah: { coords: "780,700", name: "Trust for America’s Health", timeline: "10/1/14 - 9/30/15", description: "TFAH is conducting an expert convening to identify best practices and emerging models related to primary prevention and early intervention, and developing a set of indicators to serve as an agenda for advocates to pursue in their states." },
    uisap: { coords: "280,700", name: "UCLA Integrated Substance Abuse Programs", timeline: "9/1/15 - 8/31/18", description: "UCLA will provide training and technical assistance to grantees." },
    uom: { coords: "780,700", name: "University of Minnesota", timeline: "7/1/14 - 6/30/17", description: "UMN is partnering with Kaiser Permanente to conduct a randomized controlled study of a four-session intervention model for teens and parents  that has been adapted for adolescents referred from schools and pediatric settings. This project is also testing a group intervention format." },
    uonm: { coords: "1,1", name: "University of New Mexico", timeline: "9/1/2014 - 8/31/2017", description: "UNM’s Center on Alcoholism, Substance Abuse, and Addictions is implementing SBIRT in school-based health clinics throughout the state of New Mexico." },
    ybu: { coords: "780,700", name: "YouthBuild, USA", timeline: "4/1/2014 - 9/30/2017", description: " YouthBuild, USA is implementing an SBIRT model in community-based YouthBuild programs." }
  }

$(document).ready(function(){

  function hashCheck() {
    var hashAttr = '';

    if(window.location.hash) {
      hashAttr = window.location.hash.replace(/[^a-z0-9]/gi, '');
    } 


    $("#granteeInfo").hide();
    $("#programInfo").show();

    if (hashAttr == 'all') {
        showAllGrantees();
        resetStateOpacity();
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
            $("#granteeInfo .timeline").html(granteeData[key]['timeline']);
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
function resetStateOpacity() {
    for (var stateKey in stateData) {
        // loop grantees in each state
        for (var i = 0, len = stateData[stateKey].grantees.length; i < len; i++) {
            fillOpacity = mapSettings.opacity.active;
        }

        $( ".state-" + stateKey  ).attr( 'fill-opacity', fillOpacity );
        $( ".state-" + stateKey  ).removeAttr( 'data-active' );
    }   
}

/**
 * Set the background fill color to the default for all states.  Takes into account the grantees count.
 */
function resetStateFill() {
    for (var stateKey in stateData) {
        var granteeCount = stateData[stateKey].grantees.length;
        var fillColor = getColor(granteeCount);
        $( ".state-" + stateKey  ).attr( 'fill', fillColor );
    }   
}

/*********************************************************************************************
*
*********************************************************************************************/
function showAllGrantees() {
    $("#stateName").html("All Grantees");

    var granteesUl = '';
    for (var key in granteeData) {
        granteesUl = granteesUl + '<option value="'+key+'" data-group="'+key+'" data-key="'+key+'" data-op="addLayer">' + granteeData[key]['name'] + '  </option>';
    }     
    $("#stateGrantees").html('<option value="all">All Grantees</option>'+granteesUl);
    $("#stateInfo").show();
    resetStateFill();
}

/*********************************************************************************************
*
*********************************************************************************************/
showAllGrantees(); // on default load

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
if ($(window).width() < 700) zoomLevel = 3; 

var map = L.map('map').setView([37.8, -96], zoomLevel);
//map.doubleClickZoom.disable();

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        //maxZoom: 18,
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
}).addTo(map);


var fullCount = addressPoints.length;
//var quarterCount = Math.round(fullCount / 4);



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

var granteeKeyCount = Object.keys(granteeData).length;
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
        popupAnchor:  [-3, -76]
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
                a.granteeAcronym == 'aap'   ? group[1] : 
                a.granteeAcronym == 'bhsb'  ? group[2] : 
                a.granteeAcronym == 'cafp'  ? group[3] : 
                a.granteeAcronym == 'ccf'   ? group[4] : 
                a.granteeAcronym == 'csi'   ? group[5] : 
                a.granteeAcronym == 'cdcf'  ? group[6] : 
                a.granteeAcronym == 'chcs'  ? group[7] : 
                a.granteeAcronym == 'chc'   ? group[8] : 
                a.granteeAcronym == 'cadca' ? group[9] : 
                a.granteeAcronym == 'ccat'  ? group[10] : 
                a.granteeAcronym == 'facadd'? group[11] : 
                a.granteeAcronym == 'fract' ? group[12] : 
                a.granteeAcronym == 'fin'   ? group[13] : 
                a.granteeAcronym == 'gih'   ? group[14] : 
                a.granteeAcronym == 'kfri'  ? group[15] : 
                a.granteeAcronym == 'lac'   ? group[16] : 
                a.granteeAcronym == 'mfu'   ? group[17] : 
                a.granteeAcronym == 'mgr'   ? group[18] : 
                a.granteeAcronym == 'nas'   ? group[19] : 
                a.granteeAcronym == 'ncbh'  ? group[20] : 
                a.granteeAcronym == 'norc'  ? group[21] : 
                a.granteeAcronym == 'nhcf'  ? group[22] : 
                a.granteeAcronym == 'osu'   ? group[23] : 
                a.granteeAcronym == 'pdfk'  ? group[24] : 
                a.granteeAcronym == 'pri'  ? group[25] : 
                a.granteeAcronym == 'psurf'  ? group[26] : 
                a.granteeAcronym == 'phope'  ? group[27] : 
                a.granteeAcronym == 'sbha'  ? group[28] : 
                a.granteeAcronym == 'abamf'  ? group[29] : 
                a.granteeAcronym == 'csjksu'  ? group[30] : 
                a.granteeAcronym == 'tyr'  ? group[31] : 
                a.granteeAcronym == 'tri'  ? group[32] : 
                a.granteeAcronym == 'tah'  ? group[33] : 
                a.granteeAcronym == 'uisap'  ? group[34] : 
                //a.granteeAcronym == 'uom'  ? group[35] : 
                //a.granteeAcronym == 'uonm'  ? group[36] : 
                a.granteeAcronym == 'ybu'  ? group[35] : group[36]
                );
}



granteesLayerGroup.checkIn(arryGroups);

addGranteeToMap();

function resetMap(){
    granteesLayerGroup['addLayers'](arryGroups);
}

/*
function clearMap(){
    granteesLayerGroup['clearLayers'](arryGroups);
}
*/

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
        var group2  =   groupNo == 'aap'   ? group[1] : 
                        groupNo == 'bhsb'  ? group[2] : 
                        groupNo == 'cafp'  ? group[3] : 
                        groupNo == 'ccf'   ? group[4] : 
                        groupNo == 'csi'   ? group[5] : 
                        groupNo == 'cdcf'  ? group[6] : 
                        groupNo == 'chcs'  ? group[7] : 
                        groupNo == 'chc'   ? group[8] : 
                        groupNo == 'cadca' ? group[9] : 
                        groupNo == 'ccat'  ? group[10] : 
                        groupNo == 'facadd'? group[11] : 
                        groupNo == 'fract' ? group[12] : 
                        groupNo == 'fin'   ? group[13] : 
                        groupNo == 'gih'   ? group[14] : 
                        groupNo == 'kfri'  ? group[15] : 
                        groupNo == 'lac'   ? group[16] : 
                        groupNo == 'mfu'   ? group[17] : 
                        groupNo == 'mgr'   ? group[18] : 
                        groupNo == 'nas'   ? group[19] : 
                        groupNo == 'ncbh'  ? group[20] : 
                        groupNo == 'norc'  ? group[21] : 
                        groupNo == 'nhcf'  ? group[22] : 
                        groupNo == 'osu'  ? group[23] : 
                        groupNo == 'pdfk'  ? group[24] : 
                        groupNo == 'pri'  ? group[25] : 
                        groupNo == 'psurf'  ? group[26] : 
                        groupNo == 'phope'  ? group[27] : 
                        groupNo == 'sbha'  ? group[28] : 
                        groupNo == 'abamf'  ? group[29] : 
                        groupNo == 'csjksu'  ? group[30] : 
                        groupNo == 'tyr'  ? group[31] : 
                        groupNo == 'tri'  ? group[32] : 
                        groupNo == 'tah'  ? group[33] : 
                        groupNo == 'uisap'  ? group[34] : 
                        groupNo == 'uom'  ? group[35] : 
                        groupNo == 'uonm'  ? group[36] : 
                        groupNo == 'ybu'  ? group[37] : group[38];

        //granteesLayerGroup[op](group);
        granteesLayerGroup['clearLayers'](group2);
        granteesLayerGroup[op](group2);
        //granteesLayerGroup.refreshClusters(); 
        //console.log(granteesLayerGroup.refreshClusters());
        //console.log(op + " " + groupNo);
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
    var statColor = d > 22 ? '#B51737' :
                    d > 20 ? '#DF5F1B' :
                    d > 18 ? '#227A17' :
                    d > 16 ? '#199DDA' :
                    d > 14 ? '#7CCB00' : 
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

    resetStateFill();
    resetStateOpacity();
    
    if (typeof e.target.feature.properties !== 'undefined') {
      window.location.hash = e.target.feature.properties.code;

      var stateCode = e.target.feature.properties.code;
      var stateInfo = stateData[stateCode];

      if ( $("#stateName").html() == stateInfo['name']){
          // show All Grantees
          showAllGrantees();
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
        grades = [0, 14, 16, 18, 20, 22],
        labels = [],
        from, to;

    for (var i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
            '<i style="background:' + getColor(from + 1) + '"></i> ' +
            from + (to ? '&ndash;' + to : '+'));
    }

    div.innerHTML = labels.join('<br>');
    return div;
};

legend.addTo(map);

function onOptionClick () {
    alert(e.value);
}

