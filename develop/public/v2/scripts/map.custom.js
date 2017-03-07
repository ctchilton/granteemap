
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
    ak: { name: 'Alaska', grantees: [] },
    az: { name: 'Arizona', grantees: ['ybu'] },
    ar: { name: 'Arkansas', grantees: [] },
    ca: { name: 'California', grantees: ['ybu', 'cafp', 'ccf', 'kfri', 'kip', 'sbha', 'abamf', 'ncbh', 'uisap'] },
    co: { name: 'Colorado', grantees: ['ybu', 'csi', 'abamf', 'ncbh'] },
    ct: { name: 'Connecticut', grantees: ['aap', 'facadd', 'pri', 'abamf'] },
    de: { name: 'Delaware', grantees: [] },
    fl: { name: 'Florida', grantees: ['ybu', 'chcs', 'abamf'] },
    ga: { name: 'Georgia', grantees: ['ybu', 'aap', 'csi', 'ccat', 'abamf', 'cdcf', 'csjksu'] },
    hi: { name: 'Hawaii', grantees: ['kfri'] },
    id: { name: 'Idaho', grantees: [] },
    il: { name: 'Illinois', grantees: ['ybu', 'aap', 'sbha', 'abamf'] },
    in: { name: 'Indiana', grantees: ['ybu', 'cdcf'] },
    ia: { name: 'Iowa', grantees: [] },
    ks: { name: 'Kansas', grantees: ['ybu', 'ncbh'] },
    ky: { name: 'Kentucky', grantees: ['ybu', 'chcs', 'abamf'] },
    la: { name: 'Louisiana', grantees: ['ybu', 'pri'] },
    me: { name: 'Maine', grantees: [] },
    md: { name: 'Maryland', grantees: ['bhsb', 'mgr', 'norc', 'sbha', 'abamf'] },
    ma: { name: 'Massachusetts', grantees: ['ybu', 'busp', 'chcs', 'csi', 'chc', 'ccat', 'abamf'] },
    mi: { name: 'Michigan', grantees: ['ybu','kfri','abamf'] },
    mn: { name: 'Minnesota', grantees: ['ybu', 'pri', 'abamf', 'uom'] },
    ms: { name: 'Mississippi', grantees: ['ybu'] },
    mo: { name: 'Missouri', grantees: ['ybu'] },
    mt: { name: 'Montana', grantees: ['ybu', 'mhcf'] },
    ne: { name: 'Nebraska', grantees: [] },
    nv: { name: 'Nevada', grantees: ['ybu', 'tyr'] },
    nh: { name: 'New Hampshire', grantees: ['nhcf'] },
    nj: { name: 'New Jersey', grantees: ['ybu', 'chs', 'ccat'] },
    nm: { name: 'New Mexico', grantees: ['ybu', 'sbha', 'uonm'] },
    ny: { name: 'New York', grantees: ['ybu', 'chcs', 'fract', 'mfu', 'pdfk', 'pri', 'psurf', 'abamf', 'ncbh', 'tri'] },
    nc: { name: 'North Carolina', grantees: ['ybu', 'csi', 'psurf'] },
    nd: { name: 'North Dakota', grantees: [] },
    oh: { name: 'Ohio', grantees: ['ybu', 'csi', 'ccat', 'pri', 'abamf', 'cdcf', 'osu'] },
    ok: { name: 'Oklahoma', grantees: ['ybu', 'abamf' ] },
    or: { name: 'Oregon', grantees: ['psurf','sbha','abamf'] },
    pa: { name: 'Pennsylvania', grantees: ['chcs', 'csi', 'kfri', 'abamf'] },
    ri: { name: 'Rhode Island', grantees: ['ybu', 'abamf', 'ncbh'] },
    sc: { name: 'South Carolina', grantees: ['ybu'] },
    sd: { name: 'South Dakota', grantees: [] },
    tn: { name: 'Tennessee', grantees: ['ybu', 'abamf', 'ncbh'] },
    tx: { name: 'Texas', grantees: ['ybu', 'chcs', 'abamf'] },
    ut: { name: 'Utah', grantees: ['ybu', 'aap'] },
    vt: { name: 'Vermont', grantees: ['ybu', 'psurf', 'uvm'] },
    va: { name: 'Virginia', grantees: ['ybu', 'chcs', 'cadca', 'phope', 'abamf'] },
    wa: { name: 'Washington', grantees: ['ybu', 'psurf', 'abamf'] },
    dc: { name: 'Washington DC', grantees: ['ybu', 'fin', 'gih', 'lac', 'mfu', 'nasadad', 'nas', 'sbha', 'abamf', 'ncbh', 'tah'] },
    wv: { name: 'West Virginia', grantees: ['ybu'] },
    wi: { name: 'Wisconsin', grantees: ['ybu', 'ccat', 'abamf'] },
    wy: { name: 'Wyoming', grantees: [] },
    pr: { name: 'Puerto Rico', grantees: [] }
  }

  granteeData = {
    aap: { coords: "1005,440", name: "American Academy of Pediatrics", timeline: "10/1/2014 - 9/30/2018", description: "<a href='https://www.aap.org/en-us/Pages/Default.aspx' target='_blank'>AAP</a> is increasing SBIRT among pediatric providers serving adolescents with a learning collaborative to design and implement best practices, including quality measures, and an online tool to train pediatric practitioners (EQIPP)."},
    abamf: { coords: "1005,440", name: "The Addiction Medicine Foundation", timeline: "Grant 1 - 11/1/13 - 10/31/16, Grant 2 - 11/1/16 -10/31/18", description: "<a href='http://addictionmedicinefoundation.org/' target='_blank'>The Addiction Medicine Foundation</a> is establishing the National Center for Physician Training in Addiction Medicine, to educate and train physicians in addiction medicine and prevention/early intervention of adolescent substance use."},
    bhsb: { coords: "1310,490", name: "Behavioral Health System Baltimore", timeline: "11/1/2015 - 12/31/2017", description: "<a href='http://bhsbaltimore.org/' target='_blank'>Behavioral Health Systems Baltimore (BHSB)</a> is leading a multi-jurisdictional, multi-partner initiative to integrate adolescent SBIRT into pediatric primary settings and SBHCs across Maryland." },
    busp: { coords: "1310,490", name: "Boston University School of Public Health", timeline: "4/1/2014 - 5/8/2015", description: "<a href='http://bu.edu/sph/' target='_blank'>Boston University School of Public Health (BUSPH)</a> held a conference with experts in alcohol interventions, web/mobile enabled behavior change, application development and evaluation, and adolescent marketing to discuss the state of the field and provide guidance to the Foundation on fruitful areas of investment <em>(Grant expired)</em>." },
    cadca: { coords: "780,700", name: "Community Anti-Drug Coalitions of America", timeline: "7/1/15 - 6/30/16", description: "<a href='http://cadca.org/' target='_blank'>Community Anti-Drug Coalitions of America (CADCA)</a> implemented a planning process to develop, pilot, and evaluate an approach to provide training and technical assistance to community coalitions to support the development and implementation of SBIRT in their communities <em>(Grant expired)</em>." },
    cafp: { coords: "250,650", name: "California Academy of Family Physicians", timeline: "9/1/15 - 8/31/18", description: "<a href='http://familydocs.org/node/451' target='_blank'>California Academy of Family Physicians (CAFP)</a> is increasing practitioner awareness, competence, and confidence in identifying and addressing youth substance use through partners from five national primary care associations." },
    ccat: { coords: "280,700", name: "Community Catalyst", timeline: "12/1/13 - 11/30/16", description: "<a href='http://communitycatalyst.org/' target='_blank'>Community Catalyst</a> developed consumer-led advocacy campaigns in five states to enact state policy change to increase access to SBIRT by improving reimbursement and expanding the settings/professionals that can provide it, with a focus on peer approaches <em>(Grant expired)</em>." },
    ccf: { coords: "250,650", name: "California Community Foundation ", timeline: "Grant 1 - 8/1/14 - 9/1/15, Grant 2 - 3/1/16 -2/28/18", description: "<a href='http://calfund.org/' target='_blank'>California Community Foundation (CCF)</a> is increasing practitioner awareness, competence, and confidence in identifying and addressing youth substance use through partners from five national primary care associations." },
    cdcf: { coords: "1100,800", name: "CDC Foundation", timeline: "01/01/16 - 12/31/218", description: "<a href='http://cdcfoundation.org/' target='_blank'>CDC</a> is conducting a comprehensive, regional substance use prevention and sexual risk behavior reduction program for communities with high substance use and/or HIV/STD rates among youth." },
    chc: { coords: "280,700", name: "Children&#39;s Hospital Corp", timeline: "12/1/14 - 11/30/18", description: "<a href='http://www.childrenshospital.org/' target='_blank'>CHC</a> is conducting a research study to develop outcome measures for real-world clinical settings to assess the short term impact of SBIRT for youth with chronic medical conditions." },
    chcs: { coords: "780,700", name: "Center for Health Care Strategies", timeline: "Grant 1: 4/1/15 - 3/31/16, Grant 2: 1/1/16-12/31/18", description: "<a href='http://chcs.org/' target='_blank'>Center for Health Care Strategies (CHCS)</a> initially convened a small group consultation, to identify opportunities for and challenges to implementation of a publicly financed primary care approach to the prevention of and early intervention for youth substance use disorders (Grant expired). Now, CHCS and ACAP conduct a learning collaborative to support a target of five participating health plans in developing and implementing a PCP training program on the use of SBIRT." },
    csi: { coords: "1390,360", name: "Center for Social Innovation", timeline: "12/1/2014 - 12/31/2017", description: "<a href='http://center4si.com/' target='_blank'>Center for Social Innovation (C4)</a> partners with researchers, practitioners, and young people in recovery from substance use disorders to determine how peer-based interventions can be effective at motivating change and promoting healthy choices for adolescents." },
    csjksu: { coords: "280,700", name: "The Center for Sustainable Journalism - Kennesaw State University ", timeline: "4/1/15 - 3/3/16", description: "<a href='http://sustainablejournalism.org/' target='_blank'>The Center for Sustainable Journalism</a> developed media and communication materials to increase awareness among funders, policymakers, and practitioners about adolescent substance use prevention and foster care, and how the Strategic Initiative goals can promote opportunities and reduce barriers for these young people <em>(Grant expired).</em>" },
    facadd: { coords: "780,700", name: "Facing Addiction", timeline: "4/1/16 - 3/31/18", description: "<a href='http://facingaddiction.org/' target='_blank'>Facing Addiction</a> is building and organizing a national grassroots advocacy movement of those affected by addiction to advance public health responses, including SBIRT." },
    fin: { coords: "780,700", name: "Frameworks Institute", timeline: "1/1/15 - 4/30/16", description: "<a href='http://frameworksinstitute.org/' target='_blank'>FrameWorks Institute</a> initially explored how to effectively communicate with members of the public, practitioners, and policymakers about youth substance use and what it takes to improve outcomes for young people (Grant expired). Now they are creating a comprehensive framing strategy about adolescent substance use for these audiences to improve outcomes for young people misusing substances." },
    fract: { coords: "280,700", name: "Fractured Atlas", timeline: "10/1/14 - 9/30/15", description: "<a href='http://fracturedatlas.org/' target='_blank'>Fractured Atlas</a> produced and conducted community discussion forums for Generation Found, a documentary film project about adolescents in recovery and the pediatric nature of the onset of addiction <em>(Grant expired)</em>." },
    gih: { coords: "280,700", name: "Grantmakers in Health", timeline: "8/1/15 - 7/31/16", description: "<a href='http://gih.org/' target='_blank'>Grantmakers in Health (GIH)</a> convened behavioral health funders, with an emphasis on SUD, to illuminate philanthropy?s current assets, gaps, and barriers to scaling behavioral health efforts, as well as opportunities for partnering with different sectors and government <em>(Grant expired)</em>." },
    kfri: { coords: "780,700", name: "Kaiser Foundation Research Institute", timeline: "2/1/16 - 1/31/19", description: "<a href='http://share.kaiserpermanente.org/article/kaiser-foundation-research-institute/' target='_blank'>The Kaiser Foundation</a> is developing predictive statistical models (risk profiles) of clinical and demographic characteristics for health systems and other youth-serving organizations to identify children and adolescents at greatest risk of developing substance use problems for targeted prevention and early intervention efforts, including SBIRT." },
    kip: { coords: "780,700", name: "Kaiser Permanente", timeline: "7/1/2014 - 6/30/2017", description: "<a href='https://www.dor.kaiser.org/external/dorexternal/index.aspx' target='_blank'>Kaiser Permanente</a> in partnership with UMN, is conducting a randomized controlled study of a four-session intervention model for teens and parents adapted for adolescents referred from schools and pediatric settings, and testing a group intervention format." },
    lac: { coords: "280,700", name: "Legal Action Center ", timeline: "12/1/14 - 11/30/17", description: "<a href='http://lac.org/' target='_blank'>Legal Action Center</a> is analyzing implementation of ACA and MHPAEA to identify opportunities to improve access to preventive services, and provide technical assistance to state agencies, insurers, and advocates to improve policy and practice to expand access to prevention services." },
    mfu: { coords: "780,700", name: "Mentor Foundation USA", timeline: "11/1/15 - 7/31/16", description: "<a href='http://mentorfoundationusa.org/' target='_blank'>Mentor Foundation USA</a> is analyzing implementation of ACA and MHPAEA to identify opportunities to improve access to preventive services, and provide technical assistance to state agencies, insurers, and advocates to improve policy and practice to expand access to prevention services." },
    mgr: { coords: "280,700", name: "Mosaic Group", timeline: "9/1/14 - 8/31/16", description: "<a href='http://groupmosaic.com/' target='_blank'>The Mosaic Group</a> developed an adolescent SBIRT checklist to support effective implementation of SBIRT for Foundation grantees and provided technical assistance to implement the checklist <em>(Grant expired)</em>." },
    mhcf: { coords: "280,700", name: "Montana Healthcare Foundation (MHCF)", timeline: "7/1/16 - 6/30/17", description: "<a href='http://mthcf.org/' target='_blank'>Montana Healthcare Foundation (MHCF)</a> is exploring the use of SBIRT in Montana to develop a detailed report with a statewide strategy and practical recommendations for promoting broader use of SBIRT." },
    nas: { coords: "780,700", name: "National Academy of Sciences", timeline: "7/1/15 - 6/30/17", description: "<a href='http://sites.nationalacademies.org/DBASSE/BCYF/Forum_on_Promoting_Childrens_Cognitive_Affective_and_Behavioral_Health/index.htm' target='_blank'>The National Academies</a> coordinates the Forum on Promoting Children's Cognitive, Affective, and Behavioral Health (C-CAB Forum), which consists of scientists, practitioners, government officials, and staff from private foundations to advance implementation that promotes the mental, emotional, and behavioral health of adolescents." },
    nasadad: { coords: "780,700", name: "NASADAD", timeline: "5/1/14 - 12/31/14", description: "<a href='http://nasadad.org/' target='_blank'>NASADAD</a> conducted case studies of five state initiatives directed at identifying and providing interventions to youth that exhibit elevated risk for substance use disorders <em>(Grant expired).</em>" },
    ncbh: { coords: "280,700", name: "National Council of Behavioral Health ", timeline: "4/1/2014 - 3/31/2017", description: "<a href='http://thenationalcouncil.org/' target='_blank'>The National Council</a> is piloting SBIRT in five states, working with the respective State Associations to implement the SBIRT projects and conduct advocacy to establish Medicaid reimbursement for SBIRT. They are also developing a SBIRT change package and a two-year national learning collaborative to provide expert consultation to 15 FQHCs focused on piloting, refining, and evaluating the change package." },
    nhcf: { coords: "280,700", name: "New Hampshire Charitable Foundation", timeline: "1/1/2014 - 6/30/2017", description: "<a href='http://nhcf.org/' target='_blank'>New Hampshire Charitable Foundation (NHCF)</a> is expanding SBIRT for adolescents in New Hampshire community health settings and advocating for state policy changes to sustain SBIRT financing." },
    norc: { coords: "780,700", name: "National Opinion Research Council", timeline: "10/1/2014 - 9/30/2017", description: "<a href='http://norc.org/Pages/default.aspx' target='_blank'>NORC at the University of Chicago</a> is developing an online, interactive SBIRT curriculum for baccalaureate and graduate social work and nursing schools." },
    osu: { coords: "780,700", name: "Ohio State University", timeline: "7/1/14 - 6/30/17", description: "The Ohio State University Foundation (OSU) established the national <a href='http://hecaod.osu.edu/' target='_blank'>Higher Education Center on Alcohol and Drug Prevention and Recovery</a> to operate as an information dissemination center promoting SBIRT and other evidence-based strategies to address alcohol and other drug use on college campuses." },
    pdfk: { coords: "280,700", name: "Partnership for Drug Free Kids", timeline: "7/1/14 - 6/30/16", description: "<a href='http://drugfree.org/' target='_blank'>The Partnership for Drug Free Kids</a> developed, piloted, and evaluated an approach to engage parents in SBIRT programs and build a national peer support network of parents to address adolescent substance use <em>(Grant expired)</em>." },
    phope: { coords: "780,700", name: "Project Hope", timeline: "3/1/16 - 2/28/17", description: "<a href='http://www.projecthope.org/' target='_blank'>Project Hope</a>, with Health Affairs, convened a Washington, DC briefing for a special theme issue on issues in behavioral health, health care, and policy of experts <em>(Grant expired)</em>." },
    pri: { coords: "780,700", name: "Policy Research Inc.", timeline: "9/1/14 - 8/31/17", description: "<a href='http://policyresearchinc.org/' target='_blank'>Policy Research Inc. (PRI)</a> with the National Center for Mental Health and Juvenile Justice, developed and implements an SBIRT approach for youth involved in the juvenile justice system." },
    psurf: { coords: "280,700", name: "Portland State University - Reclaiming Futures", timeline: "9/1/2014 - 6/30/2018", description: "<a href='http://reclaimingfutures.org/' target='_blank'>Reclaiming Futures</a> is incorporating SBIRT into the model to expand early intervention and diversion opportunities for court-involved youth." },
    sbha: { coords: "280,700", name: "School Based Health Alliance", ended: true, timeline: "6/1/2014 - 5/31/2016", description: "<a href='http://sbh4all.org/' target='_blank'>School Based Health Alliance (SBHA)</a> conducted a two-year pilot project to provide adolescent-specific SBIRT training and technical assistance to 10 SBHCs <em>(Grant expired).</em>" },
    tah: { coords: "780,700", name: "Trust for America&#39;s Health", timeline: "10/1/14 - 9/30/15", description: "<a href='http://healthyamericans.org/' target='_blank'>Trust for America's Health (TFAH)</a> conducted an expert convening to identify best practices and emerging models related to primary prevention and early intervention, and developed a set of indicators to serve as an agenda for advocates to pursue in their states <em>(Grant expired)</em>." },
    tri: { coords: "280,700", name: "Treatment Research Institute", timeline: "1/1/14 - 8/31/17", description: "<a href='http://www.tresearch.org/' target='_blank'>Treatment Research Institute (TRI)</a> is piloting an SBIRT approach in four New York City metro area schools utilizing a computerized screening protocol and tailored brief intervention." },
    tyr: { coords: "780,700", name: "Transforming Youth Recovery", timeline: "4/1/15 - 3/3/16", description: "<a href='http://transformingyouthrecovery.org/' target='_blank'>Transforming Youth Recovery (TYR)</a> conducted a strategic planning process with a public awareness/stakeholder coalition campaign, research-based marketing and fundraising plan, and social media campaign to launch Facing Addiction <em>(Grant expired)</em>." },
    uisap: { coords: "280,700", name: "UCLA Integrated Substance Abuse Programs", timeline: "9/1/15 - 8/31/18", description: "<a href='http://uclaisap.org/' target='_blank'>UCLA</a> provides training and technical assistance to Foundation grantees." },
    uom: { coords: "780,700", name: "University of Minnesota", timeline: "7/1/14 - 6/30/17", description: "<a href='https://www.psychiatry.umn.edu/research/center-adolescent-substance-abuse-research-casar' target='_blank'>The University of Minnesota (UMN)</a>, with Kaiser Permanente, conducts a randomized controlled study of a four-session intervention model for teens and parents that has been adapted for adolescents referred from schools and pediatric settings, and a group intervention format." },
    uonm: { coords: "1,1", name: "University of New Mexico", timeline: "9/1/2014 - 8/31/2017", description: "<a href='http://casaa.unm.edu/' target='_blank'>UNM&#39;s Center on Alcoholism, Substance Abuse, and Addictions</a> is implementing SBIRT in school-based health clinics throughout the state of New Mexico." },
    uvm: { coords: "1,1", name: "University of Vermont (UVM)", timeline: "Ongoing", description: "<a href='https://www.uvm.edu/we' target='_blank'>The University of Vermont (UVM)</a> is developing an Apple Watch app to monitor health and fitness goals and provide program impact data to support the incentivized behavioral change components of their Wellness Environment (WE)." },
    ybu: { coords: "780,700", name: "YouthBuild, USA", timeline: "4/1/2014 - 9/30/2017", description: "<a href='http://youthbuild.org/' target='_blank'>YouthBuild, USA</a> is implementing an SBIRT model in community-based YouthBuild programs." }

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
        granteesUl = granteesUl + '<option value="'+key+'" data-group="'+key+'" data-key="'+key+'" data-op="addLayer">' + granteeData[key]['name'] + '</option>';
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
if ($(window).width() < 700) zoomLevel = 4; 

var map = L.map('map', {zoomControl: false}).setView([37.8, -96], zoomLevel );

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

console.log(group);

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
                a.granteeAcronym == 'abamf' ?  group[2] :
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
                a.granteeAcronym == 'gih' ?  group[17] :
                a.granteeAcronym == 'kfri' ?  group[18] :
                a.granteeAcronym == 'kip' ?  group[19] :
                a.granteeAcronym == 'lac' ?  group[20] :
                a.granteeAcronym == 'mfu' ?  group[21] :
                a.granteeAcronym == 'mgr' ?  group[22] :
                a.granteeAcronym == 'mhcf' ?  group[23] :
                a.granteeAcronym == 'nas' ?  group[24] :
                a.granteeAcronym == 'nasadad' ?  group[25] :
                a.granteeAcronym == 'ncbh' ?  group[26] :
                a.granteeAcronym == 'nhcf' ?  group[27] :
                a.granteeAcronym == 'norc' ?  group[28] :
                a.granteeAcronym == 'osu' ?  group[29] :
                a.granteeAcronym == 'pdfk' ?  group[30] :
                a.granteeAcronym == 'phope' ?  group[31] :
                a.granteeAcronym == 'pri' ?  group[32] :
                a.granteeAcronym == 'psurf' ?  group[33] :
                a.granteeAcronym == 'sbha' ?  group[34] : 
                a.granteeAcronym == 'tah' ?  group[35] :
                a.granteeAcronym == 'tri' ?  group[36] :
                a.granteeAcronym == 'tyr' ?  group[37] :
                a.granteeAcronym == 'uisap' ?  group[38] :
                a.granteeAcronym == 'uom' ?  group[39] : 
                a.granteeAcronym == 'uonm' ?  group[40] :
                a.granteeAcronym == 'uvm' ?  group[41] : 
                a.granteeAcronym == 'ybu' ? group [42]: group[42]

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
        var group2  =   groupNo == 'aap' ?  group[1] :
                        groupNo == 'abamf' ?  group[2] :
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
                        groupNo == 'gih' ?  group[17] :
                        groupNo == 'kfri' ?  group[18] :
                        groupNo == 'kip' ?  group[19] :
                        groupNo == 'lac' ?  group[20] :
                        groupNo == 'mfu' ?  group[21] :
                        groupNo == 'mgr' ?  group[22] :
                        groupNo == 'mhcf' ?  group[23] :
                        groupNo == 'nas' ?  group[24] :
                        groupNo == 'nasadad' ?  group[25] :
                        groupNo == 'ncbh' ?  group[26] :
                        groupNo == 'nhcf' ?  group[27] :
                        groupNo == 'norc' ?  group[28] :
                        groupNo == 'osu' ?  group[29] :
                        groupNo == 'pdfk' ?  group[30] :
                        groupNo == 'phope' ?  group[31] :
                        groupNo == 'pri' ?  group[32] :
                        groupNo == 'psurf' ?  group[33] :
                        groupNo == 'sbha' ?  group[34] :
                        groupNo == 'tah' ?  group[35] :
                        groupNo == 'tri' ?  group[36] :
                        groupNo == 'tyr' ?  group[37] :
                        groupNo == 'uisap' ?  group[38] :
                        groupNo == 'uom' ?  group[39] :
                        groupNo == 'uonm' ?  group[40] :
                        groupNo == 'uvm' ?  group[41] :
                        groupNo == 'ybu' ?  group[42] : group[43];


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
    $('<p class="legend-title"><strong>Active Sites</strong></p>').insertBefore('.info.legend.leaflet-control i:nth-child(1)');
});


legend.addTo(map);

function onOptionClick () {
    alert(e.value);
}

