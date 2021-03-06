define([
    'lib/backbone'  
], 
function(
    Backbone
) {
    'use strict';

    var FactsModel = Backbone.Model.extend({
        //CO2 emissions from world data bank
        getData: function(){
            return [
                      {
                        "Data Source":"Aruba",
                        "ISO":"ABW",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":25.258151974793,
                            "2000":23.7402494868151
                            
                        }
                      },
                      {
                        "Data Source":"Andorra",
                        "ISO":"AND",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":7.42214436270746
                            
                        }
                      },
                      {
                        "Data Source":"Afghanistan",
                        "ISO":"AFG",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0472247801569103,
                        "Indicator Code":0.0548808382468439,
                        data: {
                            "1960":0.075411547178488,
                            "1970":0.131634865480566,
                            "1980":0.166305908254023,
                            "1990":0.103278005102276,
                            "2000":0.0161856118546458
                            
                        }
                      },
                      {
                        "Data Source":"Angola",
                        "ISO":"AGO",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.110763457342225,
                        "Indicator Code":0.0899220992080192,
                        data: {
                            "1960":0.229273121406364,
                            "1970":0.729144619448773,
                            "1980":0.567729328592484,
                            "1990":0.401602489121364,
                            "2000":0.850821552359865
                            
                        }
                      },
                      {
                        "Data Source":"Albania",
                        "ISO":"ALB",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.25040013491233,
                        "Indicator Code":1.36699527908082,
                        data: {
                            "1960":1.4333708899761,
                            "1970":2.50675736901018,
                            "1980":2.55187887015687,
                            "1990":0.692577704100372,
                            "2000":1.14945017704397
                            
                        }
                      },
                      {
                        "Data Source":"Arab World",
                        "ISO":"ARB",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.63678982045603,
                        "Indicator Code":0.677901653306117,
                        data: {
                            "1960":0.752851508054581,
                            "1970":2.09736368502235,
                            "1980":2.70888779457518,
                            "1990":3.49617830367133,
                            "2000":3.60898533727628
                            
                        }
                      },
                      {
                        "Data Source":"United Arab Emirates",
                        "ISO":"ARE",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.122768056423534,
                        "Indicator Code":0.112568686238194,
                        data: {
                            "1960":0.168560501590454,
                            "1970":72.7397492238842,
                            "1980":31.9024066311058,
                            "1990":28.8809151818426,
                            "2000":26.2732157164042
                            
                        }
                      },
                      {
                        "Data Source":"Argentina",
                        "ISO":"ARG",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":2.36690790990185,
                        "Indicator Code":2.44189753817898,
                        data: {
                            "1960":2.52149094940712,
                            "1970":3.63743566384503,
                            "1980":3.5676919462298,
                            "1990":3.62304485963537,
                            "2000":3.27595661635645
                            
                        }
                      },
                      {
                        "Data Source":"Armenia",
                        "ISO":"ARM",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":1.17467416263878,
                            "2000":0.998886774606646
                            
                        }
                      },
                      {
                        "Data Source":"American Samoa",
                        "ISO":"ASM",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Antigua and Barbuda",
                        "ISO":"ATG",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.67061685045994,
                        "Indicator Code":0.860440770355396,
                        data: {
                            "1960":1.82337376356307,
                            "1970":5.5655680380924,
                            "1980":4.25467730239304,
                            "1990":4.62464924173156,
                            "2000":4.53621142071723
                            
                        }
                      },
                      {
                        "Data Source":"Australia",
                        "ISO":"AUS",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":8.58293664258675,
                        "Indicator Code":8.64156901650291,
                        data: {
                            "1960":8.83568804691864,
                            "1970":11.9516315549822,
                            "1980":15.4249318091975,
                            "1990":16.8308907116319,
                            "2000":17.3525379362285
                            
                        }
                      },
                      {
                        "Data Source":"Austria",
                        "ISO":"AUT",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":4.37331882803344,
                        "Indicator Code":4.49636164096378,
                        data: {
                            "1960":4.75536167309783,
                            "1970":7.448516814438,
                            "1980":7.11212494091738,
                            "1990":7.72151727605246,
                            "2000":8.31227387129132
                            
                        }
                      },
                      {
                        "Data Source":"Azerbaijan",
                        "ISO":"AZE",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":7.81385938769981,
                            "2000":3.62394434620868
                            
                        }
                      },
                      {
                        "Data Source":"Burundi",
                        "ISO":"BDI",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":0.0152025731470957,
                            "1970":0.02067467549583,
                            "1980":0.0361705187826064,
                            "1990":0.0542319239244569,
                            "2000":0.0312629347515185
                            
                        }
                      },
                      {
                        "Data Source":"Belgium",
                        "ISO":"BEL",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":9.94159407412845,
                        "Indicator Code":10.1038719949198,
                        data: {
                            "1960":10.6411896304115,
                            "1970":13.4726952569298,
                            "1980":11.9266847823165,
                            "1990":11.385956298547,
                            "2000":10.4067884892602
                            
                        }
                      },
                      {
                        "Data Source":"Benin",
                        "ISO":"BEN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0663541178309111,
                        "Indicator Code":0.0520457809847681,
                        data: {
                            "1960":0.05420152826426,
                            "1970":0.127891948804001,
                            "1980":0.127787747481466,
                            "1990":0.168410364309718,
                            "2000":0.276950896753819
                            
                        }
                      },
                      {
                        "Data Source":"Burkina Faso",
                        "ISO":"BFA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.00911189654961774,
                        "Indicator Code":0.0187299088910219,
                        data: {
                            "1960":0.017003119755258,
                            "1970":0.027698414346978,
                            "1980":0.0804272716706416,
                            "1990":0.0678408228960465,
                            "2000":0.0817115644994929
                            
                        }
                      },
                      {
                        "Data Source":"Bangladesh",
                        "ISO":"BGD",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":0.0510594416679628,
                            "1980":0.09877162318993,
                            "1990":0.157859354195011,
                            "2000":0.246025687625601
                            
                        }
                      },
                      {
                        "Data Source":"Bulgaria",
                        "ISO":"BGR",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":2.83390112126359,
                        "Indicator Code":3.26992007420763,
                        data: {
                            "1960":3.83589181806542,
                            "1970":7.71565670110305,
                            "1980":10.1072753140273,
                            "1990":6.37676477875601,
                            "2000":5.67260666244052
                            
                        }
                      },
                      {
                        "Data Source":"Bahrain",
                        "ISO":"BHR",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":3.54286435160399,
                        "Indicator Code":10.5473964412472,
                        data: {
                            "1960":9.19360857735389,
                            "1970":16.0359774901127,
                            "1980":25.4918020468973,
                            "1990":20.2587771233341,
                            "2000":21.4301001582164
                            
                        }
                      },
                      {
                        "Data Source":"Bahamas, The",
                        "ISO":"BHS",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":3.74983109033472,
                        "Indicator Code":4.74669875247594,
                        data: {
                            "1960":5.99643219940041,
                            "1970":36.4959739996851,
                            "1980":10.2714755259359,
                            "1990":6.73875691946922,
                            "2000":5.10230100408039
                            
                        }
                      },
                      {
                        "Data Source":"Bosnia and Herzegovina",
                        "ISO":"BIH",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":0.998384771864715,
                            "2000":5.88025284413735
                            
                        }
                      },
                      {
                        "Data Source":"Belarus",
                        "ISO":"BLR",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":8.56375156617071,
                            "2000":5.31073786112519
                            
                        }
                      },
                      {
                        "Data Source":"Belize",
                        "ISO":"BLZ",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.47795107963679,
                        "Indicator Code":0.387218719971278,
                        data: {
                            "1960":0.715409337810225,
                            "1970":1.24013747758518,
                            "1980":1.13763217996277,
                            "1990":1.82508953585026,
                            "2000":1.42738098075197
                            
                        }
                      },
                      {
                        "Data Source":"Bermuda",
                        "ISO":"BMU",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":3.55137387387387,
                        "Indicator Code":3.86848351648352,
                        data: {
                            "1960":3.38371244635193,
                            "1970":4.66832103321033,
                            "1980":7.1423470215874,
                            "1990":6.94661660551242,
                            "2000":8.33515068667345
                            
                        }
                      },
                      {
                        "Data Source":"Bolivia",
                        "ISO":"BOL",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.299648238583411,
                        "Indicator Code":0.303776540354173,
                        data: {
                            "1960":0.313827673490277,
                            "1970":0.806390056520441,
                            "1980":0.77270680006048,
                            "1990":0.933314138093977,
                            "2000":1.08185280464982
                            
                        }
                      },
                      {
                        "Data Source":"Brazil",
                        "ISO":"BRA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.64455781319754,
                        "Indicator Code":0.656155407828585,
                        data: {
                            "1960":0.694762880653004,
                            "1970":1.13440827161093,
                            "1980":1.3501359258413,
                            "1990":1.4276106444725,
                            "2000":1.85216506517662
                            
                        }
                      },
                      {
                        "Data Source":"Barbados",
                        "ISO":"BRB",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.746558490500654,
                        "Indicator Code":0.839170290027159,
                        data: {
                            "1960":1.11974762809981,
                            "1970":2.08139057949098,
                            "1980":2.57353855969376,
                            "1990":3.75183071929737,
                            "2000":4.55783158457132
                            
                        }
                      },
                      {
                        "Data Source":"Brunei Darussalam",
                        "ISO":"BRN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":4.07857780167936,
                        "Indicator Code":3.55234071359376,
                        data: {
                            "1960":4.13379094815559,
                            "1970":66.7070444978742,
                            "1980":10.2112965916129,
                            "1990":21.3599867615423,
                            "2000":15.3600158195418
                            
                        }
                      },
                      {
                        "Data Source":"Bhutan",
                        "ISO":"BTN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":0.0117222838474153,
                            "1980":0.0759401921802518,
                            "1990":0.409523683333838,
                            "2000":0.698528711431937
                            
                        }
                      },
                      {
                        "Data Source":"Botswana",
                        "ISO":"BWA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":0.0297276920707239,
                            "1980":1.02692732069145,
                            "1990":2.25015084582874,
                            "2000":2.47916003307949
                            
                        }
                      },
                      {
                        "Data Source":"Sub-Saharan Africa (IFC classification)",
                        "ISO":"CAA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Central African Republic",
                        "ISO":"CAF",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.058535378426752,
                        "Indicator Code":0.0575505696007596,
                        data: {
                            "1960":0.0471138131995765,
                            "1970":0.0887489378717449,
                            "1980":0.0593139779969292,
                            "1990":0.0709170644053063,
                            "2000":0.0652171027763503
                            
                        }
                      },
                      {
                        "Data Source":"Canada",
                        "ISO":"CAN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":10.7708472869716,
                        "Indicator Code":10.6278976520169,
                        data: {
                            "1960":11.1306274846889,
                            "1970":17.3294250049026,
                            "1980":15.8831066185223,
                            "1990":16.397456212302,
                            "2000":16.5538823735731
                            
                        }
                      },
                      {
                        "Data Source":"East Asia and the Pacific (IFC classification)",
                        "ISO":"CEA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Europe and Central Asia (IFC classification)",
                        "ISO":"CEU",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Switzerland",
                        "ISO":"CHE",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":3.66436597885029,
                        "Indicator Code":3.75182498407337,
                        data: {
                            "1960":4.33291417099419,
                            "1970":6.8637398186475,
                            "1980":5.73116759023856,
                            "1990":6.26370443804866,
                            "2000":5.58953309741593
                            
                        }
                      },
                      {
                        "Data Source":"Channel Islands",
                        "ISO":"CHI",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Chile",
                        "ISO":"CHL",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.76373998467256,
                        "Indicator Code":1.84477664711552,
                        data: {
                            "1960":2.07825935144122,
                            "1970":2.83918884623286,
                            "1980":1.7859658919666,
                            "1990":2.43057902883197,
                            "2000":3.49951781096799
                            
                        }
                      },
                      {
                        "Data Source":"China",
                        "ISO":"CHN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.17038137226978,
                        "Indicator Code":0.836046900792028,
                        data: {
                            "1960":0.661428164381093,
                            "1970":1.08067663654397,
                            "1980":1.56673968353113,
                            "1990":2.31420729031649,
                            "2000":2.88522504139331
                            
                        }
                      },
                      {
                        "Data Source":"Cote d'Ivoire",
                        "ISO":"CIV",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.132972287870922,
                        "Indicator Code":0.153721674312723,
                        data: {
                            "1960":0.15685590948597,
                            "1970":0.524437451034191,
                            "1980":0.67845289043856,
                            "1990":0.357044922031087,
                            "2000":0.436961600030033
                            
                        }
                      },
                      {
                        "Data Source":"Latin America and the Caribbean (IFC classification)",
                        "ISO":"CLA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Middle East and North Africa (IFC classification)",
                        "ISO":"CME",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Cameroon",
                        "ISO":"CMR",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0506135841847797,
                        "Indicator Code":0.0515770455396091,
                        data: {
                            "1960":0.0517885260883183,
                            "1970":0.12078775236622,
                            "1980":0.669143785470978,
                            "1990":0.2965847560228,
                            "2000":0.203648852309051
                            
                        }
                      },
                      {
                        "Data Source":"Congo, Rep.",
                        "ISO":"COG",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.22068981166774,
                        "Indicator Code":0.257405587533343,
                        data: {
                            "1960":0.223264758254347,
                            "1970":0.467889177445233,
                            "1980":0.706298536116355,
                            "1990":0.626296321510427,
                            "2000":0.215527272583312
                            
                        }
                      },
                      {
                        "Data Source":"Colombia",
                        "ISO":"COL",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.02520430115588,
                        "Indicator Code":1.10483718960208,
                        data: {
                            "1960":1.14459452546101,
                            "1970":1.4051414441226,
                            "1980":1.62970587282166,
                            "1990":1.792909165873,
                            "2000":1.35047026535907
                            
                        }
                      },
                      {
                        "Data Source":"Comoros",
                        "ISO":"COM",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0577556109725686,
                        "Indicator Code":0.0567781826439712,
                        data: {
                            "1960":0.055821954301198,
                            "1970":0.121338964052463,
                            "1980":0.142728399571255,
                            "1990":0.17772787489095,
                            "2000":0.164874790478177
                            
                        }
                      },
                      {
                        "Data Source":"Cabo Verde",
                        "ISO":"CPV",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.103662242575867,
                        "Indicator Code":0.101321667050426,
                        data: {
                            "1960":0.0823212481760018,
                            "1970":0.175084749230948,
                            "1980":0.118255227480877,
                            "1990":0.27835054341196,
                            "2000":0.535106939059982
                            
                        }
                      },
                      {
                        "Data Source":"Costa Rica",
                        "ISO":"CRI",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.36833717628504,
                        "Indicator Code":0.355676162405214,
                        data: {
                            "1960":0.384357915096765,
                            "1970":0.922884012867228,
                            "1980":0.840203273394259,
                            "1990":1.17259881344694,
                            "2000":1.54514465636175
                            
                        }
                      },
                      {
                        "Data Source":"South Asia (IFC classification)",
                        "ISO":"CSA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Caribbean small states",
                        "ISO":"CSS",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.40392617769448,
                        "Indicator Code":2.06434559682777,
                        data: {
                            "1960":2.70927724572798,
                            "1970":5.09084294761511,
                            "1980":5.66060086912546,
                            "1990":5.98826296902648,
                            "2000":6.98787444590922
                            
                        }
                      },
                      {
                        "Data Source":"Cuba",
                        "ISO":"CUB",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.91845156158759,
                        "Indicator Code":1.67106420863038,
                        data: {
                            "1960":1.90181446511968,
                            "1970":2.30453531743499,
                            "1980":3.47956611637034,
                            "1990":2.91304141304276,
                            "2000":2.32700803817296
                            
                        }
                      },
                      {
                        "Data Source":"Curacao",
                        "ISO":"CUW",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Cayman Islands",
                        "ISO":"CYM",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.39837295029872,
                        "Indicator Code":1.37067032145527,
                        data: {
                            "1960":1.35114222549742,
                            "1970":5.42616158626813,
                            "1980":9.50711528489946,
                            "1990":11.3748996423619,
                            "2000":10.490724598811
                            
                        }
                      },
                      {
                        "Data Source":"Cyprus",
                        "ISO":"CYP",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.54890745624676,
                        "Indicator Code":1.50142176805836,
                        data: {
                            "1960":1.56787798321248,
                            "1970":3.83049681528662,
                            "1980":4.48493951953923,
                            "1990":6.5905790223066,
                            "2000":7.16651681792715
                            
                        }
                      },
                      {
                        "Data Source":"Czech Republic",
                        "ISO":"CZE",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":13.4734613590709,
                            "2000":11.7872167427877
                            
                        }
                      },
                      {
                        "Data Source":"Germany",
                        "ISO":"DEU",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":11.0633202537022,
                            "2000":10.0471142793913
                            
                        }
                      },
                      {
                        "Data Source":"Djibouti",
                        "ISO":"DJI",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.48229231431441,
                        "Indicator Code":0.49722595735545,
                        data: {
                            "1960":0.506061571125265,
                            "1970":1.06394232915235,
                            "1980":0.904411917421284,
                            "1990":0.658386997853419,
                            "2000":0.536922010547611
                            
                        }
                      },
                      {
                        "Data Source":"Dominica",
                        "ISO":"DMA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.183301119701413,
                        "Indicator Code":0.180240845416564,
                        data: {
                            "1960":0.17748128549303,
                            "1970":0.357820929227595,
                            "1980":0.536624627501064,
                            "1990":0.826622333680859,
                            "2000":1.47087642896026
                            
                        }
                      },
                      {
                        "Data Source":"Denmark",
                        "ISO":"DNK",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":6.50268309283578,
                        "Indicator Code":6.88126015490644,
                        data: {
                            "1960":7.9451073610821,
                            "1970":11.9400189839082,
                            "1980":10.4468239344563,
                            "1990":10.5038454026689,
                            "2000":9.16420709268776
                            
                        }
                      },
                      {
                        "Data Source":"Dominican Republic",
                        "ISO":"DOM",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.314460949795096,
                        "Indicator Code":0.300880777363987,
                        data: {
                            "1960":0.351130223010977,
                            "1970":0.978064478609321,
                            "1980":1.03931850202897,
                            "1990":1.48617059975829,
                            "2000":2.40615478383899
                            
                        }
                      },
                      {
                        "Data Source":"Algeria",
                        "ISO":"DZA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.546257558129688,
                        "Indicator Code":0.524643337528599,
                        data: {
                            "1960":0.478616839207465,
                            "1970":1.82760278372232,
                            "1980":1.89101554960839,
                            "1990":2.98751987958955,
                            "2000":2.78923206804217
                            
                        }
                      },
                      {
                        "Data Source":"East Asia & Pacific (developing only)",
                        "ISO":"EAP",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.995388767268365,
                        "Indicator Code":0.725752126438018,
                        data: {
                            "1960":0.583179145141776,
                            "1970":0.980002906251726,
                            "1980":1.39238658103369,
                            "1990":2.08488495743922,
                            "2000":2.49062567025462
                            
                        }
                      },
                      {
                        "Data Source":"East Asia & Pacific (all income levels)",
                        "ISO":"EAS",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.18764392460326,
                        "Indicator Code":1.0177633050348,
                        data: {
                            "1960":0.913059764215516,
                            "1970":1.72112323233551,
                            "1980":2.10371901032752,
                            "1990":2.89408567496166,
                            "2000":3.36075522731167
                            
                        }
                      },
                      {
                        "Data Source":"Europe & Central Asia (developing only)",
                        "ISO":"ECA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":6.83159294133439,
                            "2000":4.7217486642224
                            
                        }
                      },
                      {
                        "Data Source":"Europe & Central Asia (all income levels)",
                        "ISO":"ECS",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":9.07618776650754,
                            "2000":7.63451949717379
                            
                        }
                      },
                      {
                        "Data Source":"Ecuador",
                        "ISO":"ECU",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.390694576454622,
                        "Indicator Code":0.354487777634723,
                        data: {
                            "1960":0.327605329278287,
                            "1970":0.720594579988216,
                            "1980":2.31850056572923,
                            "1990":2.10439143821838,
                            "2000":1.89484522727135
                            
                        }
                      },
                      {
                        "Data Source":"Egypt, Arab Rep.",
                        "ISO":"EGY",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.573407822665718,
                        "Indicator Code":0.593632037430575,
                        data: {
                            "1960":0.628420258176919,
                            "1970":0.67231599885193,
                            "1980":1.20284043553941,
                            "1990":1.39221167972047,
                            "2000":1.86219817795768
                            
                        }
                      },
                      {
                        "Data Source":"Euro area",
                        "ISO":"EMU",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":4.20133152974859,
                        "Indicator Code":4.39208789170121,
                        data: {
                            "1960":4.73766877121814,
                            "1970":8.06027814075792,
                            "1980":7.99146841783547,
                            "1990":8.31393622549114,
                            "2000":8.34492071318073
                            
                        }
                      },
                      {
                        "Data Source":"Eritrea",
                        "ISO":"ERI",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":0.141315954685845
                            
                        }
                      },
                      {
                        "Data Source":"Spain",
                        "ISO":"ESP",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.60659271055656,
                        "Indicator Code":1.74622171978822,
                        data: {
                            "1960":1.93578153318373,
                            "1970":4.20332791298537,
                            "1980":5.53217965830412,
                            "1990":5.99106183374546,
                            "2000":7.59128078166889
                            
                        }
                      },
                      {
                        "Data Source":"Estonia",
                        "ISO":"EST",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":15.0115629143997,
                            "2000":10.9218308046461
                            
                        }
                      },
                      {
                        "Data Source":"Ethiopia",
                        "ISO":"ETH",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0158922186581343,
                        "Indicator Code":0.0150425205902801,
                        data: {
                            "1960":0.0170548268007226,
                            "1970":0.0467265036743504,
                            "1980":0.0399209561468188,
                            "1990":0.0575752569719731,
                            "2000":0.064062617408069
                            
                        }
                      },
                      {
                        "Data Source":"European Union",
                        "ISO":"EUU",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":5.73323140473784,
                        "Indicator Code":5.89229823953948,
                        data: {
                            "1960":6.1775894851697,
                            "1970":8.89943711851867,
                            "1980":8.87858518799326,
                            "1990":8.43810541955348,
                            "2000":8.08810218364104
                            
                        }
                      },
                      {
                        "Data Source":"Finland",
                        "ISO":"FIN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":3.4098467277432,
                        "Indicator Code":3.34887721488768,
                        data: {
                            "1960":3.74256736643435,
                            "1970":9.51830728004247,
                            "1980":8.92566418469036,
                            "1990":9.49188673841609,
                            "2000":11.744332478688
                            
                        }
                      },
                      {
                        "Data Source":"Fiji",
                        "ISO":"FJI",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.494050327543387,
                        "Indicator Code":0.414297363146933,
                        data: {
                            "1960":0.547993718807522,
                            "1970":1.06738072736183,
                            "1980":1.25668830129045,
                            "1990":0.970522879329339,
                            "2000":1.02430544069921
                            
                        }
                      },
                      {
                        "Data Source":"France",
                        "ISO":"FRA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":5.81421366421594,
                        "Indicator Code":5.94604712654685,
                        data: {
                            "1960":6.22432790856142,
                            "1970":9.10871779546492,
                            "1980":7.82730032509652,
                            "1990":6.74668491737833,
                            "2000":6.1621368035641
                            
                        }
                      },
                      {
                        "Data Source":"Faeroe Islands",
                        "ISO":"FRO",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.71225121111306,
                        "Indicator Code":3.2731644111719,
                        data: {
                            "1960":3.33809347708588,
                            "1970":5.96260162601626,
                            "1980":10.3928126062805,
                            "1990":14.0917346500644,
                            "2000":15.9731942786539
                            
                        }
                      },
                      {
                        "Data Source":"Micronesia, Fed. Sts.",
                        "ISO":"FSM",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":1.37105895329164
                            
                        }
                      },
                      {
                        "Data Source":"Gabon",
                        "ISO":"GAB",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.264646978988539,
                        "Indicator Code":0.327565397945855,
                        data: {
                            "1960":0.172785600414648,
                            "1970":4.47597019559143,
                            "1980":8.58598892932393,
                            "1990":2.13303758523783,
                            "2000":1.3837003760937
                            
                        }
                      },
                      {
                        "Data Source":"United Kingdom",
                        "ISO":"GBR",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":11.1507591603053,
                        "Indicator Code":11.1541389204545,
                        data: {
                            "1960":11.1429283943662,
                            "1970":11.5623541783507,
                            "1980":9.74046165830407,
                            "1990":10.0392180832638,
                            "2000":8.96092163325017
                            
                        }
                      },
                      {
                        "Data Source":"Georgia",
                        "ISO":"GEO",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":3.14669005847953,
                            "2000":0.777669956392013
                            
                        }
                      },
                      {
                        "Data Source":"Ghana",
                        "ISO":"GHA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.219936787825839,
                        "Indicator Code":0.195985454609002,
                        data: {
                            "1960":0.202350848145095,
                            "1970":0.266838086571639,
                            "1980":0.264922445853889,
                            "1990":0.264744037418008,
                            "2000":0.37584962166007
                            
                        }
                      },
                      {
                        "Data Source":"Guinea",
                        "ISO":"GIN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.114828148083532,
                        "Indicator Code":0.169582616939433,
                        data: {
                            "1960":0.17889448380217,
                            "1970":0.19423730015872,
                            "1980":0.210276493446111,
                            "1990":0.159547429391459,
                            "2000":0.146343563849004
                            
                        }
                      },
                      {
                        "Data Source":"Gambia, The",
                        "ISO":"GMB",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0498329840811678,
                        "Indicator Code":0.0584016393442623,
                        data: {
                            "1960":0.0669291441235904,
                            "1970":0.139095288470049,
                            "1980":0.248916232902706,
                            "1990":0.202128072220532,
                            "2000":0.241348407819284
                            
                        }
                      },
                      {
                        "Data Source":"Guinea-Bissau",
                        "ISO":"GNB",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0288306109227682,
                        "Indicator Code":0.0456817537707379,
                        data: {
                            "1960":0.0622895986855516,
                            "1970":0.09182332016855,
                            "1980":0.168389658282487,
                            "1990":0.24453761701752,
                            "2000":0.115726126705584
                            
                        }
                      },
                      {
                        "Data Source":"Equatorial Guinea",
                        "ISO":"GNQ",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0872696983519426,
                        "Indicator Code":0.0862485299882399,
                        data: {
                            "1960":0.0852989067224936,
                            "1970":0.320154824440144,
                            "1980":0.292452228283408,
                            "1990":0.541390053174851,
                            "2000":9.03118431480652
                            
                        }
                      },
                      {
                        "Data Source":"Greece",
                        "ISO":"GRC",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.12892048165296,
                        "Indicator Code":1.1697826281101,
                        data: {
                            "1960":1.20320119011869,
                            "1970":3.55205212772995,
                            "1980":5.32696641804347,
                            "1990":7.28105165486227,
                            "2000":8.52509500986708
                            
                        }
                      },
                      {
                        "Data Source":"Grenada",
                        "ISO":"GRD",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.244844815882307,
                        "Indicator Code":0.200909489371028,
                        data: {
                            "1960":0.277730892408898,
                            "1970":0.50747841638545,
                            "1980":0.669656572601003,
                            "1990":1.2449563276098,
                            "2000":2.011302755169
                            
                        }
                      },
                      {
                        "Data Source":"Greenland",
                        "ISO":"GRL",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":6.88267692307692,
                        "Indicator Code":8.70504451038576,
                        data: {
                            "1960":7.54354285714286,
                            "1970":11.4641200828157,
                            "1980":10.0397475728155,
                            "1990":8.75305605786618,
                            "2000":9.52231977247434
                            
                        }
                      },
                      {
                        "Data Source":"Guatemala",
                        "ISO":"GTM",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.325019876173612,
                        "Indicator Code":0.331067327048328,
                        data: {
                            "1960":0.316413501655813,
                            "1970":0.473817756147371,
                            "1980":0.492905148734732,
                            "1990":0.646150748718312,
                            "2000":0.943106331281557
                            
                        }
                      },
                      {
                        "Data Source":"Guam",
                        "ISO":"GUM",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Guyana",
                        "ISO":"GUY",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.17805588474663,
                        "Indicator Code":1.27968352848035,
                        data: {
                            "1960":1.14658632841219,
                            "1970":2.12277550088599,
                            "1980":1.82020254122624,
                            "1990":1.45562566389307,
                            "2000":2.10553682311768
                            
                        }
                      },
                      {
                        "Data Source":"High income",
                        "ISO":"HIC",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":7.70143028839209,
                        "Indicator Code":7.75235027450675,
                        data: {
                            "1960":8.01033925030613,
                            "1970":11.9352065016031,
                            "1980":11.1408853695695,
                            "1990":12.0764090657146,
                            "2000":12.0055936009175
                            
                        }
                      },
                      {
                        "Data Source":"Hong Kong SAR, China",
                        "ISO":"HKG",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.960982310797388,
                        "Indicator Code":1.0648780025883,
                        data: {
                            "1960":1.11501119448142,
                            "1970":2.25163546415753,
                            "1980":3.74257593313705,
                            "1990":5.76301560210327,
                            "2000":5.4792127934046
                            
                        }
                      },
                      {
                        "Data Source":"Honduras",
                        "ISO":"HND",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.307669103990195,
                        "Indicator Code":0.356228477805407,
                        data: {
                            "1960":0.327409489867278,
                            "1970":0.540011267859082,
                            "1980":0.455967897125208,
                            "1990":0.593839391115493,
                            "2000":0.937665270226104
                            
                        }
                      },
                      {
                        "Data Source":"Heavily indebted poor countries (HIPC)",
                        "ISO":"HPC",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.120334794865189,
                        "Indicator Code":0.123820619239547,
                        data: {
                            "1960":0.121108411745933,
                            "1970":0.216049495889708,
                            "1980":0.210355718019029,
                            "1990":0.168357058872477,
                            "2000":0.169319336923045
                            
                        }
                      },
                      {
                        "Data Source":"Croatia",
                        "ISO":"HRV",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":3.75231722595078,
                            "2000":4.92732477477477
                            
                        }
                      },
                      {
                        "Data Source":"Haiti",
                        "ISO":"HTI",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0739221272750956,
                        "Indicator Code":0.0752602323074717,
                        data: {
                            "1960":0.0755974303515383,
                            "1970":0.0803912931235837,
                            "1980":0.138461654642575,
                            "1990":0.122896345904829,
                            "2000":0.206122035501463
                            
                        }
                      },
                      {
                        "Data Source":"Hungary",
                        "ISO":"HUN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":4.54446524112109,
                        "Indicator Code":4.88332679749706,
                        data: {
                            "1960":5.02503803022421,
                            "1970":6.67702567171057,
                            "1980":8.11460893827352,
                            "1990":5.6614015297597,
                            "2000":5.52182927030948
                            
                        }
                      },
                      {
                        "Data Source":"Indonesia",
                        "ISO":"IDN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.241330794123895,
                        "Indicator Code":0.286425738214061,
                        data: {
                            "1960":0.24699755594861,
                            "1970":0.361245874996512,
                            "1980":0.692194700588875,
                            "1990":1.09549823713197,
                            "2000":1.42643072139456
                            
                        }
                      },
                      {
                        "Data Source":"Isle of Man",
                        "ISO":"IMN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"India",
                        "ISO":"IND",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.268201002790755,
                        "Indicator Code":0.284331877529839,
                        data: {
                            "1960":0.306579730517689,
                            "1970":0.375085392957605,
                            "1980":0.54470292337667,
                            "1990":0.867092169982351,
                            "2000":1.13939320354109
                            
                        }
                      },
                      {
                        "Data Source":"Not classified",
                        "ISO":"INX",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Ireland",
                        "ISO":"IRL",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":3.95272679063848,
                        "Indicator Code":4.37796487749611,
                        data: {
                            "1960":4.62633804058462,
                            "1970":7.26191217873784,
                            "1980":7.3291608812898,
                            "1990":8.8026219428231,
                            "2000":11.1298494104829
                            
                        }
                      },
                      {
                        "Data Source":"Iran, Islamic Rep.",
                        "ISO":"IRN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.70286982784767,
                        "Indicator Code":1.62150278900048,
                        data: {
                            "1960":1.61962534940965,
                            "1970":3.52483859670431,
                            "1980":3.28136687979998,
                            "1990":3.92872258174456,
                            "2000":5.9382018682754
                            
                        }
                      },
                      {
                        "Data Source":"Iraq",
                        "ISO":"IRQ",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.1338396783762,
                        "Indicator Code":1.16651679639519,
                        data: {
                            "1960":1.17690410230616,
                            "1970":2.78799833507015,
                            "1980":2.12131472936178,
                            "1990":3.32514421298442,
                            "2000":3.45744547357392
                            
                        }
                      },
                      {
                        "Data Source":"Iceland",
                        "ISO":"ISL",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":6.91319329741306,
                        "Indicator Code":6.10384909707366,
                        data: {
                            "1960":6.57485551985437,
                            "1970":7.10125420179117,
                            "1980":6.83662020011973,
                            "1990":7.00932363430209,
                            "2000":7.55022728616493
                            
                        }
                      },
                      {
                        "Data Source":"Israel",
                        "ISO":"ISR",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":3.05985184624554,
                        "Indicator Code":3.23568695652174,
                        data: {
                            "1960":3.46389969472307,
                            "1970":5.37935387547649,
                            "1980":5.973998759613,
                            "1990":8.10061272691782,
                            "2000":9.61122374429224
                            
                        }
                      },
                      {
                        "Data Source":"Italy",
                        "ISO":"ITA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":2.1784447715823,
                        "Indicator Code":2.46455580982798,
                        data: {
                            "1960":2.87849638704821,
                            "1970":6.04932145389196,
                            "1980":6.53799211538689,
                            "1990":7.40416893211442,
                            "2000":7.91905213473124
                            
                        }
                      },
                      {
                        "Data Source":"Jamaica",
                        "ISO":"JAM",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.902679123365641,
                        "Indicator Code":1.28973161452012,
                        data: {
                            "1960":1.26277490114491,
                            "1970":3.26668872541635,
                            "1980":2.8267951456752,
                            "1990":3.34155549796042,
                            "2000":3.93866406041786
                            
                        }
                      },
                      {
                        "Data Source":"Jordan",
                        "ISO":"JOR",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.881991706161137,
                        "Indicator Code":1.09830938548501,
                        data: {
                            "1960":1.1120486910051,
                            "1970":1.17402687875178,
                            "1980":2.66662089920352,
                            "1990":3.2858598982052,
                            "2000":3.35183306867805
                            
                        }
                      },
                      {
                        "Data Source":"Japan",
                        "ISO":"JPN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":2.51653751935718,
                        "Indicator Code":2.98197938763258,
                        data: {
                            "1960":3.05973635111445,
                            "1970":7.96146246781356,
                            "1980":7.59990231238761,
                            "1990":9.04436538167417,
                            "2000":9.54726303111146
                            
                        }
                      },
                      {
                        "Data Source":"Kazakhstan",
                        "ISO":"KAZ",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":15.8954463734165,
                            "2000":10.2258795171771
                            
                        }
                      },
                      {
                        "Data Source":"Kenya",
                        "ISO":"KEN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.29949688110701,
                        "Indicator Code":0.28725726973888,
                        data: {
                            "1960":0.304273984864711,
                            "1970":0.320475134027451,
                            "1980":0.267300780120826,
                            "1990":0.221306468709576,
                            "2000":0.241462559806626
                            
                        }
                      },
                      {
                        "Data Source":"Kyrgyz Republic",
                        "ISO":"KGZ",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":2.40546883996988,
                            "2000":0.971361532450358
                            
                        }
                      },
                      {
                        "Data Source":"Cambodia",
                        "ISO":"KHM",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0410292343434524,
                        "Indicator Code":0.0487280494554965,
                        data: {
                            "1960":0.0511310810368905,
                            "1970":0.015999048870288,
                            "1980":0.048589843984608,
                            "1990":0.0490352841945015,
                            "2000":0.173693889279503
                            
                        }
                      },
                      {
                        "Data Source":"Kiribati",
                        "ISO":"KIR",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":0.216514628169929,
                        data: {
                            "1960":0.316120689655172,
                            "1970":0.561304148170825,
                            "1980":0.447569396010601,
                            "1990":0.299615981697851,
                            "2000":0.470133684541778
                            
                        }
                      },
                      {
                        "Data Source":"St. Kitts and Nevis",
                        "ISO":"KNA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.214875871633103,
                        "Indicator Code":0.429768532083211,
                        data: {
                            "1960":0.287799709610328,
                            "1970":0.661793900018047,
                            "1980":1.54360281564977,
                            "1990":1.77321083172147,
                            "2000":4.21907359270465
                            
                        }
                      },
                      {
                        "Data Source":"Korea, Rep.",
                        "ISO":"KOR",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.501837250634426,
                        "Indicator Code":0.561314583166525,
                        data: {
                            "1960":0.651713666827217,
                            "1970":1.8008084426734,
                            "1980":3.60840908915223,
                            "1990":6.49814288491884,
                            "2000":9.77762888590209
                            
                        }
                      },
                      {
                        "Data Source":"Kosovo",
                        "ISO":"KSV",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Kuwait",
                        "ISO":"KWT",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":29.7845599517546,
                        "Indicator Code":33.8737367224353,
                        data: {
                            "1960":42.6339375749584,
                            "1970":31.861735956261,
                            "1980":14.0469556931746,
                            "1990":null,
                            "2000":25.755608739635
                            
                        }
                      },
                      {
                        "Data Source":"Latin America & Caribbean (developing only)",
                        "ISO":"LAC",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.29218842668613,
                        "Indicator Code":1.27234563092177,
                        data: {
                            "1960":1.29508749462277,
                            "1970":1.7814535086311,
                            "1980":2.32173920221626,
                            "1990":2.21199923165248,
                            "2000":2.45770511017927
                            
                        }
                      },
                      {
                        "Data Source":"Lao PDR",
                        "ISO":"LAO",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0380586027189299,
                        "Indicator Code":0.0524090206013273,
                        data: {
                            "1960":0.0594737323447775,
                            "1970":0.171914941916126,
                            "1980":0.0464690193767038,
                            "1990":0.061961476063886,
                            "2000":0.212273217865036
                            
                        }
                      },
                      {
                        "Data Source":"Lebanon",
                        "ISO":"LBN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.41200447441919,
                        "Indicator Code":1.42187809214284,
                        data: {
                            "1960":1.46849438729824,
                            "1970":2.36400229565163,
                            "1980":2.32227828259977,
                            "1990":4.0245323310658,
                            "2000":4.56236197250885
                            
                        }
                      },
                      {
                        "Data Source":"Liberia",
                        "ISO":"LBR",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.147293526636282,
                        "Indicator Code":0.140928084297613,
                        data: {
                            "1960":0.21620963421168,
                            "1970":1.00653218072389,
                            "1980":0.295330067646373,
                            "1990":0.142799328822008,
                            "2000":0.163605502767634
                            
                        }
                      },
                      {
                        "Data Source":"Libya",
                        "ISO":"LBY",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.485190435686608,
                        "Indicator Code":0.808506810588538,
                        data: {
                            "1960":0.684551728999597,
                            "1970":6.77829108967285,
                            "1980":9.20397468571063,
                            "1990":8.35581943364907,
                            "2000":8.95671607442829
                            
                        }
                      },
                      {
                        "Data Source":"St. Lucia",
                        "ISO":"LCA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.163157250753607,
                        "Indicator Code":0.2016763279179,
                        data: {
                            "1960":0.199107356167061,
                            "1970":0.723355689567717,
                            "1980":0.938316137020223,
                            "1990":1.44681330759367,
                            "2000":2.03700606053041
                            
                        }
                      },
                      {
                        "Data Source":"Latin America & Caribbean (all income levels)",
                        "ISO":"LCN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.33870399678725,
                        "Indicator Code":1.33104871014438,
                        data: {
                            "1960":1.37279466252016,
                            "1970":1.89177878853692,
                            "1980":2.38454310260424,
                            "1990":2.29988558901785,
                            "2000":2.57696112507863
                            
                        }
                      },
                      {
                        "Data Source":"Least developed countries: UN classification",
                        "ISO":"LDC",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0979643656056891,
                        "Indicator Code":0.0931084028846206,
                        data: {
                            "1960":0.101780848351543,
                            "1970":0.148547504597919,
                            "1980":0.145862231049317,
                            "1990":0.151160687001513,
                            "2000":0.185367671499072
                            
                        }
                      },
                      {
                        "Data Source":"Low income",
                        "ISO":"LIC",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":0.458604706754195,
                            "1990":0.645478352103831,
                            "2000":0.26347502219731
                            
                        }
                      },
                      {
                        "Data Source":"Liechtenstein",
                        "ISO":"LIE",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Sri Lanka",
                        "ISO":"LKA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.228261115602264,
                        "Indicator Code":0.22972846184107,
                        data: {
                            "1960":0.245449870726803,
                            "1970":0.267732913459296,
                            "1980":0.290541458278494,
                            "1990":0.290186675083209,
                            "2000":0.58180508429787
                            
                        }
                      },
                      {
                        "Data Source":"Lower middle income",
                        "ISO":"LMC",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.382311642765377,
                        "Indicator Code":0.404339121423323,
                        data: {
                            "1960":0.424300440838921,
                            "1970":0.625495708339417,
                            "1980":0.893773033552654,
                            "1990":1.2460125980125,
                            "2000":1.24691734840244
                            
                        }
                      },
                      {
                        "Data Source":"Low & middle income",
                        "ISO":"LMY",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.898334156716325,
                        "Indicator Code":0.777602503833579,
                        data: {
                            "1960":0.731357215912046,
                            "1970":1.14569735492563,
                            "1980":1.52017631969238,
                            "1990":1.87773526648869,
                            "2000":1.97085047160171
                            
                        }
                      },
                      {
                        "Data Source":"Lesotho",
                        "ISO":"LSO",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Lithuania",
                        "ISO":"LTU",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":5.98594529790163,
                            "2000":3.83733485290876
                            
                        }
                      },
                      {
                        "Data Source":"Luxembourg",
                        "ISO":"LUX",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":36.6851832977673,
                        "Indicator Code":36.5837775568496,
                        data: {
                            "1960":36.0126266562744,
                            "1970":38.93410271206,
                            "1980":24.2376636344983,
                            "1990":26.9385529419264,
                            "2000":21.105745503446
                            
                        }
                      },
                      {
                        "Data Source":"Latvia",
                        "ISO":"LVA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":5.17858211141788,
                            "2000":2.87941119561176
                            
                        }
                      },
                      {
                        "Data Source":"Macao SAR, China",
                        "ISO":"MAC",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.299423758865248,
                        "Indicator Code":0.397824535358438,
                        data: {
                            "1960":0.526678635547576,
                            "1970":0.908522821119859,
                            "1980":1.85513622897352,
                            "1990":2.87304095564043,
                            "2000":3.43458741416188
                            
                        }
                      },
                      {
                        "Data Source":"St. Martin (French part)",
                        "ISO":"MAF",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Morocco",
                        "ISO":"MAR",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.295357988224715,
                        "Indicator Code":0.297696143761399,
                        data: {
                            "1960":0.236230146392626,
                            "1970":0.484534043825025,
                            "1980":0.821421690832377,
                            "1990":1.01836962099851,
                            "2000":1.30509248555249
                            
                        }
                      },
                      {
                        "Data Source":"Monaco",
                        "ISO":"MCO",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Moldova",
                        "ISO":"MDA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":5.65423914801833,
                            "2000":1.10018238716312
                            
                        }
                      },
                      {
                        "Data Source":"Madagascar",
                        "ISO":"MDG",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0783828044674529,
                        "Indicator Code":0.0680943353279267,
                        data: {
                            "1960":0.0739884401702775,
                            "1970":0.185133212597752,
                            "1980":0.109763116503282,
                            "1990":0.085217189084809,
                            "2000":0.0738394394512581
                            
                        }
                      },
                      {
                        "Data Source":"Maldives",
                        "ISO":"MDV",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":0.030157986068277,
                            "1980":0.288822378266375,
                            "1990":1.11041722438483,
                            "2000":2.438242502909
                            
                        }
                      },
                      {
                        "Data Source":"Middle East & North Africa (all income levels)",
                        "ISO":"MEA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.959332969424045,
                        "Indicator Code":0.981753831847991,
                        data: {
                            "1960":1.05203921834383,
                            "1970":2.64305570844947,
                            "1980":3.19259326383483,
                            "1990":4.0574748718442,
                            "2000":4.63948598937455
                            
                        }
                      },
                      {
                        "Data Source":"Mexico",
                        "ISO":"MEX",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.63188578299843,
                        "Indicator Code":1.63512255894706,
                        data: {
                            "1960":1.547483275473,
                            "1970":2.34874524262027,
                            "1980":4.1522121926587,
                            "1990":3.6595270883963,
                            "2000":3.66601521475168
                            
                        }
                      },
                      {
                        "Data Source":"Marshall Islands",
                        "ISO":"MHL",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":1.11386740107732,
                            "2000":1.61693602499952
                            
                        }
                      },
                      {
                        "Data Source":"Middle income",
                        "ISO":"MIC",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.97205427171389,
                        "Indicator Code":0.841159069683814,
                        data: {
                            "1960":0.791081005143061,
                            "1970":1.24171838639084,
                            "1980":1.66238736063497,
                            "1990":2.0520016520884,
                            "2000":2.23718513532712
                            
                        }
                      },
                      {
                        "Data Source":"Macedonia, FYR",
                        "ISO":"MKD",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":5.40736598631264,
                            "2000":5.27129670113539
                            
                        }
                      },
                      {
                        "Data Source":"Mali",
                        "ISO":"MLI",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.023732570403821,
                        "Indicator Code":0.0227771623542483,
                        data: {
                            "1960":0.0267702902916441,
                            "1970":0.0416908686461637,
                            "1980":0.0523523882511361,
                            "1990":0.0533125917741302,
                            "2000":0.0508806576920242
                            
                        }
                      },
                      {
                        "Data Source":"Malta",
                        "ISO":"MLT",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.04434542949012,
                        "Indicator Code":0.9019523443505,
                        data: {
                            "1960":1.01892559431923,
                            "1970":2.77646883782443,
                            "1980":4.0282112808302,
                            "1990":5.65387532525051,
                            "2000":5.80653788554154
                            
                        }
                      },
                      {
                        "Data Source":"Myanmar",
                        "ISO":"MMR",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.12646343570247,
                        "Indicator Code":0.118050128783912,
                        data: {
                            "1960":0.128404767028012,
                            "1970":0.171794378437146,
                            "1980":0.155046852068014,
                            "1990":0.112571124831058,
                            "2000":0.18691822120129
                            
                        }
                      },
                      {
                        "Data Source":"Middle East & North Africa (developing only)",
                        "ISO":"MNA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.850845855986844,
                        "Indicator Code":0.832978873410949,
                        data: {
                            "1960":0.841324004480599,
                            "1970":1.73151493517303,
                            "1980":2.04444307334496,
                            "1990":2.59985783934194,
                            "2000":3.15834652189585
                            
                        }
                      },
                      {
                        "Data Source":"Montenegro",
                        "ISO":"MNE",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Mongolia",
                        "ISO":"MNG",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.35472544447561,
                        "Indicator Code":1.41875064907033,
                        data: {
                            "1960":1.95075950093047,
                            "1970":2.41914000940541,
                            "1980":3.80371081225207,
                            "1990":4.93776846703291,
                            "2000":3.39199199748202
                            
                        }
                      },
                      {
                        "Data Source":"Northern Mariana Islands",
                        "ISO":"MNP",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Mozambique",
                        "ISO":"MOZ",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.246471557745207,
                        "Indicator Code":0.33753153975002,
                        data: {
                            "1960":0.249691421266222,
                            "1970":0.333946592425282,
                            "1980":0.199636993795161,
                            "1990":0.0697602076700125,
                            "2000":0.0821852852815859
                            
                        }
                      },
                      {
                        "Data Source":"Mauritania",
                        "ISO":"MRT",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0427231928567101,
                        "Indicator Code":0.0539651741180892,
                        data: {
                            "1960":0.068556377912923,
                            "1970":0.367328070783323,
                            "1980":0.544036143206189,
                            "1990":1.37536671684672,
                            "2000":0.49829066274743
                            
                        }
                      },
                      {
                        "Data Source":"Mauritius",
                        "ISO":"MUS",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.272514942723982,
                        "Indicator Code":0.274719172920734,
                        data: {
                            "1960":0.361281304035559,
                            "1970":0.809099903409764,
                            "1980":0.507067344668808,
                            "1990":1.57576299678821,
                            "2000":2.46346129056781
                            
                        }
                      },
                      {
                        "Data Source":"Malawi",
                        "ISO":"MWI",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":0.113540830253671,
                            "1980":0.0905669386629419,
                            "1990":0.0672572815185799,
                            "2000":0.0740977152421215
                            
                        }
                      },
                      {
                        "Data Source":"Malaysia",
                        "ISO":"MYS",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":1.56310383522628,
                            "1980":2.10207998921861,
                            "1990":3.92073620815125,
                            "2000":5.5349424372573
                            
                        }
                      },
                      {
                        "Data Source":"North America",
                        "ISO":"NAC",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":15.5255287984268,
                        "Indicator Code":15.2215330668416,
                        data: {
                            "1960":15.5680938076576,
                            "1970":21.3256068879883,
                            "1980":18.2985151115196,
                            "1990":18.9070476016404,
                            "2000":19.3406515757141
                            
                        }
                      },
                      {
                        "Data Source":"Namibia",
                        "ISO":"NAM",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":0.741302870008304,
                            "2000":0.898819028516016
                            
                        }
                      },
                      {
                        "Data Source":"New Caledonia",
                        "ISO":"NCL",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":10.908164556962,
                        "Indicator Code":10.7362320944638,
                        data: {
                            "1960":6.60705260202171,
                            "1970":14.3124359985899,
                            "1980":8.75512110726644,
                            "1990":10.022187139268,
                            "2000":10.9601065510858
                            
                        }
                      },
                      {
                        "Data Source":"Niger",
                        "ISO":"NER",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.00879075831677475,
                        "Indicator Code":0.0160397118829756,
                        data: {
                            "1960":0.0187208736067335,
                            "1970":0.0542416199491547,
                            "1980":0.121286663181884,
                            "1990":0.0948868764274058,
                            "2000":0.0688883422325765
                            
                        }
                      },
                      {
                        "Data Source":"Nigeria",
                        "ISO":"NGA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0753488473116664,
                        "Indicator Code":0.089163494036536,
                        data: {
                            "1960":0.0887217732028104,
                            "1970":0.704174352105815,
                            "1980":0.84398294836839,
                            "1990":0.64501890712407,
                            "2000":0.759338561443556
                            
                        }
                      },
                      {
                        "Data Source":"Nicaragua",
                        "ISO":"NIC",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.299629657596696,
                        "Indicator Code":0.306534324352676,
                        data: {
                            "1960":0.349885290463206,
                            "1970":0.629509391810459,
                            "1980":0.615609116859183,
                            "1990":0.551445207042596,
                            "2000":0.769230783886756
                            
                        }
                      },
                      {
                        "Data Source":"Netherlands",
                        "ISO":"NLD",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":6.3991796202037,
                        "Indicator Code":6.52035766500623,
                        data: {
                            "1960":7.0608537968432,
                            "1970":11.8388097678427,
                            "1980":9.38483331924327,
                            "1990":10.5596563551795,
                            "2000":10.6733807548476
                            
                        }
                      },
                      {
                        "Data Source":"High income: nonOECD",
                        "ISO":"NOC",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":13.4288174454331,
                            "2000":11.2326871958279
                            
                        }
                      },
                      {
                        "Data Source":"Norway",
                        "ISO":"NOR",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":3.65856369820612,
                        "Indicator Code":3.69869438750069,
                        data: {
                            "1960":3.86862605862512,
                            "1970":7.48223876711033,
                            "1980":7.98493822401986,
                            "1990":6.90556576484561,
                            "2000":8.24763279558958
                            
                        }
                      },
                      {
                        "Data Source":"Nepal",
                        "ISO":"NPL",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.00845201927974807,
                        "Indicator Code":0.0083082135703362,
                        data: {
                            "1960":0.00890608506582263,
                            "1970":0.0221949605547384,
                            "1980":0.0294567522348473,
                            "1990":0.0698718941000045,
                            "2000":0.112431171036867
                            
                        }
                      },
                      {
                        "Data Source":"New Zealand",
                        "ISO":"NZL",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":4.86706973606544,
                        "Indicator Code":4.86316609497045,
                        data: {
                            "1960":4.5165265914585,
                            "1970":5.57771927407969,
                            "1980":5.7791761984728,
                            "1990":7.11553954186369,
                            "2000":8.4085141192858
                            
                        }
                      },
                      {
                        "Data Source":"High income: OECD",
                        "ISO":"OEC",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":7.90124210277756,
                        "Indicator Code":7.94234392792958,
                        data: {
                            "1960":8.19551119653683,
                            "1970":12.029981811123,
                            "1980":11.1103494791929,
                            "1990":11.8409125932926,
                            "2000":12.25469076958
                            
                        }
                      },
                      {
                        "Data Source":"OECD members",
                        "ISO":"OED",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":7.27388480569195,
                        "Indicator Code":7.30910779313713,
                        data: {
                            "1960":7.53037059160256,
                            "1970":10.9206905788185,
                            "1980":10.1463473580321,
                            "1990":10.6391201828702,
                            "2000":10.9113542497351
                            
                        }
                      },
                      {
                        "Data Source":"Oman",
                        "ISO":"OMN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":2.69222892427539,
                            "1980":4.4464267716511,
                            "1990":6.14529102262633,
                            "2000":11.0339987411243
                            
                        }
                      },
                      {
                        "Data Source":"Other small states",
                        "ISO":"OSS",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":0.592661071740508,
                            "1980":1.04162709590621,
                            "1990":0.865753688952403,
                            "2000":1.36749733150323
                            
                        }
                      },
                      {
                        "Data Source":"Pakistan",
                        "ISO":"PAK",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.310813249383616,
                        "Indicator Code":0.31403171217013,
                        data: {
                            "1960":0.336481459695373,
                            "1970":0.302708501739677,
                            "1980":0.436733479899986,
                            "1990":0.62059097898989,
                            "2000":0.762116569995031
                            
                        }
                      },
                      {
                        "Data Source":"Panama",
                        "ISO":"PAN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.877944529042593,
                        "Indicator Code":0.942988417760289,
                        data: {
                            "1960":0.988108947971051,
                            "1970":1.73474552395223,
                            "1980":1.57835261998216,
                            "1990":1.63819225752541,
                            "2000":1.84708489987258
                            
                        }
                      },
                      {
                        "Data Source":"Peru",
                        "ISO":"PER",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.823010440095865,
                        "Indicator Code":0.845857488823346,
                        data: {
                            "1960":0.948039216711687,
                            "1970":1.30243454718248,
                            "1980":1.30032589333635,
                            "1990":0.900170828533398,
                            "2000":1.01710552026197
                            
                        }
                      },
                      {
                        "Data Source":"Philippines",
                        "ISO":"PHL",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.317264629422401,
                        "Indicator Code":0.32116081404933,
                        data: {
                            "1960":0.368528394471351,
                            "1970":0.697216944784103,
                            "1980":0.699007623766011,
                            "1990":0.75008284675975,
                            "2000":0.881218033251916
                            
                        }
                      },
                      {
                        "Data Source":"Palau",
                        "ISO":"PLW",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.52189250881926,
                        "Indicator Code":5.18513281486719,
                        data: {
                            "1960":5.05793103448276,
                            "1970":14.540538260356,
                            "1980":12.4481724165154,
                            "1990":7.15219579715616,
                            "2000":9.36653895274585
                            
                        }
                      },
                      {
                        "Data Source":"Papua New Guinea",
                        "ISO":"PNG",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0913507514399145,
                        "Indicator Code":0.100789686204429,
                        data: {
                            "1960":0.0972027779795834,
                            "1970":0.492521815012113,
                            "1980":0.573407782206127,
                            "1990":0.470011240334651,
                            "2000":0.620639627070596
                            
                        }
                      },
                      {
                        "Data Source":"Poland",
                        "ISO":"POL",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":6.74036258180107,
                        "Indicator Code":6.92280256307569,
                        data: {
                            "1960":7.15360516026857,
                            "1970":9.98174269754187,
                            "1980":11.6534761434716,
                            "1990":9.31306029739024,
                            "2000":7.76690637839598
                            
                        }
                      },
                      {
                        "Data Source":"Puerto Rico",
                        "ISO":"PRI",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Korea, Dem. Rep.",
                        "ISO":"PRK",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":7.15464085879396,
                            "1990":12.2570678982575,
                            "2000":3.27376083310869
                            
                        }
                      },
                      {
                        "Data Source":"Portugal",
                        "ISO":"PRT",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.928578089430729,
                        "Indicator Code":1.01805031874782,
                        data: {
                            "1960":1.03437786476184,
                            "1970":2.12615918326202,
                            "1980":2.95157404262064,
                            "1990":4.84254308518046,
                            "2000":6.41290214595891
                            
                        }
                      },
                      {
                        "Data Source":"Paraguay",
                        "ISO":"PRY",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.159598561331403,
                        "Indicator Code":0.185405661866135,
                        data: {
                            "1960":0.195147680374172,
                            "1970":0.274088145634518,
                            "1980":0.414282937293019,
                            "1990":0.586433394006711,
                            "2000":0.699652024609382
                            
                        }
                      },
                      {
                        "Data Source":"Pacific island small states",
                        "ISO":"PSS",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.362616911813778,
                        "Indicator Code":0.377280151550721,
                        data: {
                            "1960":0.453798514066547,
                            "1970":0.877018670655219,
                            "1980":1.00253111521605,
                            "1990":0.827198168516705,
                            "2000":0.927462447874106
                            
                        }
                      },
                      {
                        "Data Source":"French Polynesia",
                        "ISO":"PYF",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.469628472266691,
                        "Indicator Code":0.726984362996555,
                        data: {
                            "1960":0.569859181868171,
                            "1970":1.82917508602541,
                            "1980":2.09695244370132,
                            "1990":3.14412794917888,
                            "2000":3.00804384733423
                            
                        }
                      },
                      {
                        "Data Source":"Qatar",
                        "ISO":"QAT",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":3.72001014455998,
                        "Indicator Code":3.14132741467593,
                        data: {
                            "1960":3.39319524521318,
                            "1970":82.7106910039114,
                            "1980":44.5603094735703,
                            "1990":54.7421865745109,
                            "2000":45.227177667151
                            
                        }
                      },
                      {
                        "Data Source":"Romania",
                        "ISO":"ROU",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":2.90381202054338,
                        "Indicator Code":3.00589159402325,
                        data: {
                            "1960":3.42028586650104,
                            "1970":6.41025170107577,
                            "1980":8.69511053084626,
                            "1990":5.40760736331968,
                            "2000":4.24167547763291
                            
                        }
                      },
                      {
                        "Data Source":"Russian Federation",
                        "ISO":"RUS",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":14.3905747499815,
                            "2000":10.7203344322092
                            
                        }
                      },
                      {
                        "Data Source":"Rwanda",
                        "ISO":"RWA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0362521749327748,
                        "Indicator Code":0.0465092682431875,
                        data: {
                            "1960":0.0276473843144094,
                            "1970":0.0165691892805082,
                            "1980":0.110972762248675,
                            "1990":0.0974863638447083,
                            "2000":0.0767058954953439
                            
                        }
                      },
                      {
                        "Data Source":"South Asia",
                        "ISO":"SAS",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.243349769418194,
                        "Indicator Code":0.256432845736915,
                        data: {
                            "1960":0.27637859262378,
                            "1970":0.327794915445235,
                            "1980":0.476408647131725,
                            "1990":0.744992526784359,
                            "2000":0.972195981671953
                            
                        }
                      },
                      {
                        "Data Source":"Saudi Arabia",
                        "ISO":"SAU",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.657376642575962,
                        "Indicator Code":0.849791005628382,
                        data: {
                            "1960":1.4395488177152,
                            "1970":11.0915007018903,
                            "1980":14.1499070228036,
                            "1990":16.5396792664432,
                            "2000":14.9554986784324
                            
                        }
                      },
                      {
                        "Data Source":"Sudan",
                        "ISO":"SDN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.12978371368493,
                        "Indicator Code":0.128810183666067,
                        data: {
                            "1960":0.134379577029642,
                            "1970":0.364911065168047,
                            "1980":0.186959354199122,
                            "1990":0.173829326253603,
                            "2000":0.223206303248099
                            
                        }
                      },
                      {
                        "Data Source":"Senegal",
                        "ISO":"SEN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.260796283644619,
                        "Indicator Code":0.249277803125182,
                        data: {
                            "1960":0.242530718013359,
                            "1970":0.324536785728219,
                            "1980":0.518755615968703,
                            "1990":0.435489542693701,
                            "2000":0.437637932444983
                            
                        }
                      },
                      {
                        "Data Source":"Singapore",
                        "ISO":"SGP",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.846573511543135,
                        "Indicator Code":1.23023325499412,
                        data: {
                            "1960":1.47308628571429,
                            "1970":10.3347374535316,
                            "1980":11.2392788061957,
                            "1990":15.5592397932337,
                            "2000":11.3100957854406
                            
                        }
                      },
                      {
                        "Data Source":"Solomon Islands",
                        "ISO":"SLB",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0933324283738727,
                        "Indicator Code":0.120820737543553,
                        data: {
                            "1960":0.117280199571433,
                            "1970":0.318686666782542,
                            "1980":0.490912852634056,
                            "1990":0.48895704034135,
                            "2000":0.396313925680647
                            
                        }
                      },
                      {
                        "Data Source":"Sierra Leone",
                        "ISO":"SLE",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.331031599765012,
                        "Indicator Code":0.132337919818733,
                        data: {
                            "1960":0.147043610762434,
                            "1970":0.25717617418052,
                            "1980":0.166234106997199,
                            "1990":0.0536625716503833,
                            "2000":0.135480888581847
                            
                        }
                      },
                      {
                        "Data Source":"El Salvador",
                        "ISO":"SLV",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.223487091457895,
                        "Indicator Code":0.203946049805185,
                        data: {
                            "1960":0.21997033889976,
                            "1970":0.42652713606291,
                            "1980":0.367869933237885,
                            "1990":0.622130129929608,
                            "2000":1.00519963357404
                            
                        }
                      },
                      {
                        "Data Source":"San Marino",
                        "ISO":"SMR",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Somalia",
                        "ISO":"SOM",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.030598466104093,
                        "Indicator Code":0.0312674642224364,
                        data: {
                            "1960":0.036989590058102,
                            "1970":0.0672401616482274,
                            "1980":0.114602191679298,
                            "1990":0.00174785037917756,
                            "2000":0.0730970553764642
                            
                        }
                      },
                      {
                        "Data Source":"Serbia",
                        "ISO":"SRB",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Sub-Saharan Africa (developing only)",
                        "ISO":"SSA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.547321449549709,
                        "Indicator Code":0.559025139169887,
                        data: {
                            "1960":0.564994680761898,
                            "1970":0.885656032115907,
                            "1980":1.04362125022862,
                            "1990":0.886323222054423,
                            "2000":0.791952901679865
                            
                        }
                      },
                      {
                        "Data Source":"South Sudan",
                        "ISO":"SSD",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Sub-Saharan Africa (all income levels)",
                        "ISO":"SSF",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.54680347372671,
                        "Indicator Code":0.558498866758397,
                        data: {
                            "1960":0.56446720740654,
                            "1970":0.885135397184662,
                            "1980":1.04313818278492,
                            "1990":0.886052345293069,
                            "2000":0.798449430148515
                            
                        }
                      },
                      {
                        "Data Source":"Small states",
                        "ISO":"SST",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.601404188792463,
                        "Indicator Code":0.854487632432884,
                        data: {
                            "1960":1.10275055284943,
                            "1970":2.21374099836752,
                            "1980":2.53933124865836,
                            "1990":2.33384669253427,
                            "2000":2.79936416218783
                            
                        }
                      },
                      {
                        "Data Source":"Sao Tome and Principe",
                        "ISO":"STP",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.171208466267217,
                        "Indicator Code":0.17042866659437,
                        data: {
                            "1960":0.170746092598054,
                            "1970":0.141869672310847,
                            "1980":0.482490232991235,
                            "1990":0.387792953656176,
                            "2000":0.406183582905841
                            
                        }
                      },
                      {
                        "Data Source":"Suriname",
                        "ISO":"SUR",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.49138510427832,
                        "Indicator Code":1.43774525737992,
                        data: {
                            "1960":1.61455972186437,
                            "1970":4.68445093313724,
                            "1980":5.09340164992729,
                            "1990":5.04464294244089,
                            "2000":4.6897369084293
                            
                        }
                      },
                      {
                        "Data Source":"Slovak Republic",
                        "ISO":"SVK",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":8.47935029790674,
                            "2000":7.30002053223114
                            
                        }
                      },
                      {
                        "Data Source":"Slovenia",
                        "ISO":"SVN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":6.25034485383907,
                            "2000":7.73101181732037
                            
                        }
                      },
                      {
                        "Data Source":"Sweden",
                        "ISO":"SWE",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":6.5764065843507,
                        "Indicator Code":6.49624827027879,
                        data: {
                            "1960":6.78785977231238,
                            "1970":10.4380581854893,
                            "1980":7.48220554714007,
                            "1990":6.37151131849811,
                            "2000":6.43422859805055
                            
                        }
                      },
                      {
                        "Data Source":"Swaziland",
                        "ISO":"SWZ",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0945013787356865,
                        "Indicator Code":0.010256711475098,
                        data: {
                            "1960":null,
                            "1970":0.807406576236882,
                            "1980":0.682544151482874,
                            "1990":0.290792303956068,
                            "2000":1.04027599768246
                            
                        }
                      },
                      {
                        "Data Source":"Sint Maarten (Dutch part)",
                        "ISO":"SXM",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Seychelles",
                        "ISO":"SYC",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":0.78483270314618,
                            "1980":1.28216783216783,
                            "1990":2.30284550009071,
                            "2000":6.48406212664277
                            
                        }
                      },
                      {
                        "Data Source":"Syrian Arab Republic",
                        "ISO":"SYR",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.701817876199955,
                        "Indicator Code":0.646399566819522,
                        data: {
                            "1960":0.65441656314294,
                            "1970":1.13735148302804,
                            "1980":2.54725569226506,
                            "1990":3.36949050497575,
                            "2000":2.29885041644807
                            
                        }
                      },
                      {
                        "Data Source":"Turks and Caicos Islands",
                        "ISO":"TCA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":4.55423183072677
                            
                        }
                      },
                      {
                        "Data Source":"Chad",
                        "ISO":"TCD",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0183191478307438,
                        "Indicator Code":0.0167693258984466,
                        data: {
                            "1960":0.0270119656400597,
                            "1970":0.0317090266868782,
                            "1980":0.0435438195838197,
                            "1990":0.0138837224050605,
                            "2000":0.0188261917123774
                            
                        }
                      },
                      {
                        "Data Source":"Togo",
                        "ISO":"TGO",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0417623898063477,
                        "Indicator Code":0.0573855356525832,
                        data: {
                            "1960":0.0545698734714074,
                            "1970":0.177837447026239,
                            "1980":0.251586739107913,
                            "1990":0.209786609203074,
                            "2000":0.240474315891292
                            
                        }
                      },
                      {
                        "Data Source":"Thailand",
                        "ISO":"THA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.135758676807623,
                        "Indicator Code":0.147094809965248,
                        data: {
                            "1960":0.173263019466934,
                            "1970":0.559094372491217,
                            "1980":0.769700652399526,
                            "1990":1.99767263839211,
                            "2000":3.38530733351933
                            
                        }
                      },
                      {
                        "Data Source":"Tajikistan",
                        "ISO":"TJK",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":1.30727003351495,
                            "2000":0.293743962868892
                            
                        }
                      },
                      {
                        "Data Source":"Turkmenistan",
                        "ISO":"TKM",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":7.23014250743114,
                            "2000":8.74865847378282
                            
                        }
                      },
                      {
                        "Data Source":"Timor-Leste",
                        "ISO":"TLS",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":0.179401734775681
                            
                        }
                      },
                      {
                        "Data Source":"Tonga",
                        "ISO":"TON",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.178587662337662,
                        "Indicator Code":0.172591779102604,
                        data: {
                            "1960":0.16604029884537,
                            "1970":0.254803182434076,
                            "1980":0.46971670118059,
                            "1990":0.92210010163134,
                            "2000":1.48037503910863
                            
                        }
                      },
                      {
                        "Data Source":"Trinidad and Tobago",
                        "ISO":"TTO",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":3.0425760859701,
                        "Indicator Code":5.31814074207609,
                        data: {
                            "1960":8.22557012973584,
                            "1970":8.50940291635957,
                            "1980":16.4434325947475,
                            "1990":16.9587704426555,
                            "2000":21.0453369000949
                            
                        }
                      },
                      {
                        "Data Source":"Tunisia",
                        "ISO":"TUN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.409210934392178,
                        "Indicator Code":0.413219709022201,
                        data: {
                            "1960":0.412987371779652,
                            "1970":0.894875928470579,
                            "1980":1.41575479204146,
                            "1990":1.76959669725203,
                            "2000":2.14841462292602
                            
                        }
                      },
                      {
                        "Data Source":"Turkey",
                        "ISO":"TUR",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.610472836627799,
                        "Indicator Code":0.615079032626076,
                        data: {
                            "1960":0.748240893241557,
                            "1970":1.4765374462692,
                            "1980":1.89114064673331,
                            "1990":2.74306376357326,
                            "2000":3.16319728769976
                            
                        }
                      },
                      {
                        "Data Source":"Tuvalu",
                        "ISO":"TUV",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Tanzania",
                        "ISO":"TZA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0822614345738593,
                        "Indicator Code":0.0678728163617231,
                        data: {
                            "1960":0.0717360438419331,
                            "1970":0.149410969601458,
                            "1980":0.108915137491228,
                            "1990":0.0867065434003599,
                            "2000":0.100260938678252
                            
                        }
                      },
                      {
                        "Data Source":"Uganda",
                        "ISO":"UGA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0621231426070875,
                        "Indicator Code":0.0580931286642978,
                        data: {
                            "1960":0.0592582617361092,
                            "1970":0.138405883360576,
                            "1980":0.0410062299287247,
                            "1990":0.0446946633142507,
                            "2000":0.0643124017357605
                            
                        }
                      },
                      {
                        "Data Source":"Ukraine",
                        "ISO":"UKR",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":12.3044625697595,
                            "2000":6.61136459727193
                            
                        }
                      },
                      {
                        "Data Source":"Upper middle income",
                        "ISO":"UMC",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.39202044282105,
                        "Indicator Code":1.17012180309426,
                        data: {
                            "1960":1.07750005509488,
                            "1970":1.70125107447591,
                            "1980":2.2855266798937,
                            "1990":2.78716358934186,
                            "2000":3.2003859099904
                            
                        }
                      },
                      {
                        "Data Source":"Uruguay",
                        "ISO":"URY",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":1.70149745212167,
                        "Indicator Code":1.60263376252122,
                        data: {
                            "1960":1.54056578196511,
                            "1970":2.15343142032396,
                            "1980":1.64964579674745,
                            "1990":1.63899593521578,
                            "2000":1.38855597295267
                            
                        }
                      },
                      {
                        "Data Source":"United States",
                        "ISO":"USA",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":15.9997791565885,
                        "Indicator Code":15.6812555160569,
                        data: {
                            "1960":16.0139374979897,
                            "1970":21.7486419846019,
                            "1980":18.5639500656123,
                            "1990":19.1887996951433,
                            "2000":19.6469218049338
                            
                        }
                      },
                      {
                        "Data Source":"Uzbekistan",
                        "ISO":"UZB",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":5.31560277868432,
                            "2000":5.0219857272024
                            
                        }
                      },
                      {
                        "Data Source":"St. Vincent and the Grenadines",
                        "ISO":"VCT",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.135902060582102,
                        "Indicator Code":0.133923354109856,
                        data: {
                            "1960":0.132214023027186,
                            "1970":0.396582490672146,
                            "1980":0.394679164791296,
                            "1990":0.780927954370793,
                            "2000":1.72923717059639
                            
                        }
                      },
                      {
                        "Data Source":"Venezuela, RB",
                        "ISO":"VEN",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":7.52868145653176,
                        "Indicator Code":6.59605426080488,
                        data: {
                            "1960":6.62071134739919,
                            "1970":5.45164824806344,
                            "1980":5.84137758861955,
                            "1990":5.11673404733825,
                            "2000":7.62867232328642
                            
                        }
                      },
                      {
                        "Data Source":"Virgin Islands (U.S.)",
                        "ISO":"VIR",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":null
                            
                        }
                      },
                      {
                        "Data Source":"Vietnam",
                        "ISO":"VNM",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.0445405981060933,
                        "Indicator Code":0.0514423337473185,
                        data: {
                            "1960":0.0497419926362705,
                            "1970":0.515172617185754,
                            "1980":0.330107044732164,
                            "1990":0.313770454681586,
                            "2000":0.890209457785958
                            
                        }
                      },
                      {
                        "Data Source":"Vanuatu",
                        "ISO":"VUT",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":0.594888357962422,
                            "1970":0.686371443671276,
                            "1980":0.422768110810076,
                            "1990":0.425181329794772,
                            "2000":0.434859499871101
                            
                        }
                      },
                      {
                        "Data Source":"West Bank and Gaza",
                        "ISO":"PSE",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":null,
                            "1980":null,
                            "1990":null,
                            "2000":0.375598342054769
                            
                        }
                      },
                      {
                        "Data Source":"World",
                        "ISO":"WLD",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":3.09437770532369,
                        "Indicator Code":3.06530875062095,
                        data: {
                            "1960":3.1362744377529,
                            "1970":4.154958725006,
                            "1980":4.05102920539326,
                            "1990":4.10178169810796,
                            "2000":4.09945218289976
                            
                        }
                      },
                      {
                        "Data Source":"Samoa",
                        "ISO":"WSM",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.135008513967509,
                        "Indicator Code":0.163528687756977,
                        data: {
                            "1960":0.158352477847063,
                            "1970":0.248908860123674,
                            "1980":0.722212692422539,
                            "1990":0.775179986470816,
                            "2000":0.809849823321555
                            
                        }
                      },
                      {
                        "Data Source":"Yemen, Rep.",
                        "ISO":"YEM",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.712578471445365,
                        "Indicator Code":0.514209822900169,
                        data: {
                            "1960":0.736723177548235,
                            "1970":0.237852010040385,
                            "1980":0.695086993475884,
                            "1990":1.10283134939121,
                            "2000":0.849785737403367
                            
                        }
                      },
                      {
                        "Data Source":"South Africa",
                        "ISO":"ZAF",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":5.62971769372269,
                        "Indicator Code":5.69438297418123,
                        data: {
                            "1960":5.72971171067901,
                            "1970":7.42556259382185,
                            "1980":9.69041651101264,
                            "1990":8.85379266958891,
                            "2000":7.5899628621056
                            
                        }
                      },
                      {
                        "Data Source":"Congo, Dem. Rep.",
                        "ISO":"COD",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":0.152228066100193,
                        "Indicator Code":0.150781683896912,
                        data: {
                            "1960":0.135558725577881,
                            "1970":0.143058623721544,
                            "1980":0.110665906793036,
                            "1990":0.0959244939574917,
                            "2000":0.0311773380272133
                            
                        }
                      },
                      {
                        "Data Source":"Zambia",
                        "ISO":"ZMB",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":0.907226372745795,
                            "1980":0.564574381686872,
                            "1990":0.298547417333781,
                            "2000":0.185327115918115
                            
                        }
                      },
                      {
                        "Data Source":"Zimbabwe",
                        "ISO":"ZWE",
                        "Country Name":"CO2 emissions (metric tons per capita)",
                        "Country Code":"EN.ATM.CO2E.PC",
                        "Indicator Name":null,
                        "Indicator Code":null,
                        data: {
                            "1960":null,
                            "1970":1.47580563840121,
                            "1980":1.11870514191956,
                            "1990":1.53909407721349,
                            "2000":0.943951556698159
                            
                        }
                      }
                    ];
        },

        //country data - used to map alpha2 country code to alpha3 country code
        //jvectormap returns alpha2 country code
        //worldbank data uses alpha3 country code
        getCountries: function(){
            return [
                      {
                        "name": "Afghanistan",
                        "alpha2": "AF",
                        "alpha3": "AFG",
                        "country-code": "004",
                        "iso_3166-2": "ISO 3166-2:AF",
                        "region-code": "142",
                        "sub-region-code": "034"
                      },
                      {
                        "name": "Åland Islands",
                        "alpha2": "AX",
                        "alpha3": "ALA",
                        "country-code": "248",
                        "iso_3166-2": "ISO 3166-2:AX",
                        "region-code": "150",
                        "sub-region-code": "154"
                      },
                      {
                        "name": "Albania",
                        "alpha2": "AL",
                        "alpha3": "ALB",
                        "country-code": "008",
                        "iso_3166-2": "ISO 3166-2:AL",
                        "region-code": "150",
                        "sub-region-code": "039"
                      },
                      {
                        "name": "Algeria",
                        "alpha2": "DZ",
                        "alpha3": "DZA",
                        "country-code": "012",
                        "iso_3166-2": "ISO 3166-2:DZ",
                        "region-code": "002",
                        "sub-region-code": "015"
                      },
                      {
                        "name": "American Samoa",
                        "alpha2": "AS",
                        "alpha3": "ASM",
                        "country-code": "016",
                        "iso_3166-2": "ISO 3166-2:AS",
                        "region-code": "009",
                        "sub-region-code": "061"
                      },
                      {
                        "name": "Andorra",
                        "alpha2": "AD",
                        "alpha3": "AND",
                        "country-code": "020",
                        "iso_3166-2": "ISO 3166-2:AD",
                        "region-code": "150",
                        "sub-region-code": "039"
                      },
                      {
                        "name": "Angola",
                        "alpha2": "AO",
                        "alpha3": "AGO",
                        "country-code": "024",
                        "iso_3166-2": "ISO 3166-2:AO",
                        "region-code": "002",
                        "sub-region-code": "017"
                      },
                      {
                        "name": "Anguilla",
                        "alpha2": "AI",
                        "alpha3": "AIA",
                        "country-code": "660",
                        "iso_3166-2": "ISO 3166-2:AI",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Antarctica",
                        "alpha2": "AQ",
                        "alpha3": "ATA",
                        "country-code": "010",
                        "iso_3166-2": "ISO 3166-2:AQ"
                      },
                      {
                        "name": "Antigua and Barbuda",
                        "alpha2": "AG",
                        "alpha3": "ATG",
                        "country-code": "028",
                        "iso_3166-2": "ISO 3166-2:AG",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Argentina",
                        "alpha2": "AR",
                        "alpha3": "ARG",
                        "country-code": "032",
                        "iso_3166-2": "ISO 3166-2:AR",
                        "region-code": "019",
                        "sub-region-code": "005"
                      },
                      {
                        "name": "Armenia",
                        "alpha2": "AM",
                        "alpha3": "ARM",
                        "country-code": "051",
                        "iso_3166-2": "ISO 3166-2:AM",
                        "region-code": "142",
                        "sub-region-code": "145"
                      },
                      {
                        "name": "Aruba",
                        "alpha2": "AW",
                        "alpha3": "ABW",
                        "country-code": "533",
                        "iso_3166-2": "ISO 3166-2:AW",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Australia",
                        "alpha2": "AU",
                        "alpha3": "AUS",
                        "country-code": "036",
                        "iso_3166-2": "ISO 3166-2:AU",
                        "region-code": "009",
                        "sub-region-code": "053"
                      },
                      {
                        "name": "Austria",
                        "alpha2": "AT",
                        "alpha3": "AUT",
                        "country-code": "040",
                        "iso_3166-2": "ISO 3166-2:AT",
                        "region-code": "150",
                        "sub-region-code": "155"
                      },
                      {
                        "name": "Azerbaijan",
                        "alpha2": "AZ",
                        "alpha3": "AZE",
                        "country-code": "031",
                        "iso_3166-2": "ISO 3166-2:AZ",
                        "region-code": "142",
                        "sub-region-code": "145"
                      },
                      {
                        "name": "Bahamas",
                        "alpha2": "BS",
                        "alpha3": "BHS",
                        "country-code": "044",
                        "iso_3166-2": "ISO 3166-2:BS",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Bahrain",
                        "alpha2": "BH",
                        "alpha3": "BHR",
                        "country-code": "048",
                        "iso_3166-2": "ISO 3166-2:BH",
                        "region-code": "142",
                        "sub-region-code": "145"
                      },
                      {
                        "name": "Bangladesh",
                        "alpha2": "BD",
                        "alpha3": "BGD",
                        "country-code": "050",
                        "iso_3166-2": "ISO 3166-2:BD",
                        "region-code": "142",
                        "sub-region-code": "034"
                      },
                      {
                        "name": "Barbados",
                        "alpha2": "BB",
                        "alpha3": "BRB",
                        "country-code": "052",
                        "iso_3166-2": "ISO 3166-2:BB",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Belarus",
                        "alpha2": "BY",
                        "alpha3": "BLR",
                        "country-code": "112",
                        "iso_3166-2": "ISO 3166-2:BY",
                        "region-code": "150",
                        "sub-region-code": "151"
                      },
                      {
                        "name": "Belgium",
                        "alpha2": "BE",
                        "alpha3": "BEL",
                        "country-code": "056",
                        "iso_3166-2": "ISO 3166-2:BE",
                        "region-code": "150",
                        "sub-region-code": "155"
                      },
                      {
                        "name": "Belize",
                        "alpha2": "BZ",
                        "alpha3": "BLZ",
                        "country-code": "084",
                        "iso_3166-2": "ISO 3166-2:BZ",
                        "region-code": "019",
                        "sub-region-code": "013"
                      },
                      {
                        "name": "Benin",
                        "alpha2": "BJ",
                        "alpha3": "BEN",
                        "country-code": "204",
                        "iso_3166-2": "ISO 3166-2:BJ",
                        "region-code": "002",
                        "sub-region-code": "011"
                      },
                      {
                        "name": "Bermuda",
                        "alpha2": "BM",
                        "alpha3": "BMU",
                        "country-code": "060",
                        "iso_3166-2": "ISO 3166-2:BM",
                        "region-code": "019",
                        "sub-region-code": "021"
                      },
                      {
                        "name": "Bhutan",
                        "alpha2": "BT",
                        "alpha3": "BTN",
                        "country-code": "064",
                        "iso_3166-2": "ISO 3166-2:BT",
                        "region-code": "142",
                        "sub-region-code": "034"
                      },
                      {
                        "name": "Bolivia, Plurinational State of",
                        "alpha2": "BO",
                        "alpha3": "BOL",
                        "country-code": "068",
                        "iso_3166-2": "ISO 3166-2:BO",
                        "region-code": "019",
                        "sub-region-code": "005"
                      },
                      {
                        "name": "Bonaire, Sint Eustatius and Saba",
                        "alpha2": "BQ",
                        "alpha3": "BES",
                        "country-code": "535",
                        "iso_3166-2": "ISO 3166-2:BQ",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Bosnia and Herzegovina",
                        "alpha2": "BA",
                        "alpha3": "BIH",
                        "country-code": "070",
                        "iso_3166-2": "ISO 3166-2:BA",
                        "region-code": "150",
                        "sub-region-code": "039"
                      },
                      {
                        "name": "Botswana",
                        "alpha2": "BW",
                        "alpha3": "BWA",
                        "country-code": "072",
                        "iso_3166-2": "ISO 3166-2:BW",
                        "region-code": "002",
                        "sub-region-code": "018"
                      },
                      {
                        "name": "Bouvet Island",
                        "alpha2": "BV",
                        "alpha3": "BVT",
                        "country-code": "074",
                        "iso_3166-2": "ISO 3166-2:BV"
                      },
                      {
                        "name": "Brazil",
                        "alpha2": "BR",
                        "alpha3": "BRA",
                        "country-code": "076",
                        "iso_3166-2": "ISO 3166-2:BR",
                        "region-code": "019",
                        "sub-region-code": "005"
                      },
                      {
                        "name": "British Indian Ocean Territory",
                        "alpha2": "IO",
                        "alpha3": "IOT",
                        "country-code": "086",
                        "iso_3166-2": "ISO 3166-2:IO"
                      },
                      {
                        "name": "Brunei Darussalam",
                        "alpha2": "BN",
                        "alpha3": "BRN",
                        "country-code": "096",
                        "iso_3166-2": "ISO 3166-2:BN",
                        "region-code": "142",
                        "sub-region-code": "035"
                      },
                      {
                        "name": "Bulgaria",
                        "alpha2": "BG",
                        "alpha3": "BGR",
                        "country-code": "100",
                        "iso_3166-2": "ISO 3166-2:BG",
                        "region-code": "150",
                        "sub-region-code": "151"
                      },
                      {
                        "name": "Burkina Faso",
                        "alpha2": "BF",
                        "alpha3": "BFA",
                        "country-code": "854",
                        "iso_3166-2": "ISO 3166-2:BF",
                        "region-code": "002",
                        "sub-region-code": "011"
                      },
                      {
                        "name": "Burundi",
                        "alpha2": "BI",
                        "alpha3": "BDI",
                        "country-code": "108",
                        "iso_3166-2": "ISO 3166-2:BI",
                        "region-code": "002",
                        "sub-region-code": "014"
                      },
                      {
                        "name": "Cambodia",
                        "alpha2": "KH",
                        "alpha3": "KHM",
                        "country-code": "116",
                        "iso_3166-2": "ISO 3166-2:KH",
                        "region-code": "142",
                        "sub-region-code": "035"
                      },
                      {
                        "name": "Cameroon",
                        "alpha2": "CM",
                        "alpha3": "CMR",
                        "country-code": "120",
                        "iso_3166-2": "ISO 3166-2:CM",
                        "region-code": "002",
                        "sub-region-code": "017"
                      },
                      {
                        "name": "Canada",
                        "alpha2": "CA",
                        "alpha3": "CAN",
                        "country-code": "124",
                        "iso_3166-2": "ISO 3166-2:CA",
                        "region-code": "019",
                        "sub-region-code": "021"
                      },
                      {
                        "name": "Cape Verde",
                        "alpha2": "CV",
                        "alpha3": "CPV",
                        "country-code": "132",
                        "iso_3166-2": "ISO 3166-2:CV",
                        "region-code": "002",
                        "sub-region-code": "011"
                      },
                      {
                        "name": "Cayman Islands",
                        "alpha2": "KY",
                        "alpha3": "CYM",
                        "country-code": "136",
                        "iso_3166-2": "ISO 3166-2:KY",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Central African Republic",
                        "alpha2": "CF",
                        "alpha3": "CAF",
                        "country-code": "140",
                        "iso_3166-2": "ISO 3166-2:CF",
                        "region-code": "002",
                        "sub-region-code": "017"
                      },
                      {
                        "name": "Chad",
                        "alpha2": "TD",
                        "alpha3": "TCD",
                        "country-code": "148",
                        "iso_3166-2": "ISO 3166-2:TD",
                        "region-code": "002",
                        "sub-region-code": "017"
                      },
                      {
                        "name": "Chile",
                        "alpha2": "CL",
                        "alpha3": "CHL",
                        "country-code": "152",
                        "iso_3166-2": "ISO 3166-2:CL",
                        "region-code": "019",
                        "sub-region-code": "005"
                      },
                      {
                        "name": "China",
                        "alpha2": "CN",
                        "alpha3": "CHN",
                        "country-code": "156",
                        "iso_3166-2": "ISO 3166-2:CN",
                        "region-code": "142",
                        "sub-region-code": "030"
                      },
                      {
                        "name": "Christmas Island",
                        "alpha2": "CX",
                        "alpha3": "CXR",
                        "country-code": "162",
                        "iso_3166-2": "ISO 3166-2:CX"
                      },
                      {
                        "name": "Cocos (Keeling) Islands",
                        "alpha2": "CC",
                        "alpha3": "CCK",
                        "country-code": "166",
                        "iso_3166-2": "ISO 3166-2:CC"
                      },
                      {
                        "name": "Colombia",
                        "alpha2": "CO",
                        "alpha3": "COL",
                        "country-code": "170",
                        "iso_3166-2": "ISO 3166-2:CO",
                        "region-code": "019",
                        "sub-region-code": "005"
                      },
                      {
                        "name": "Comoros",
                        "alpha2": "KM",
                        "alpha3": "COM",
                        "country-code": "174",
                        "iso_3166-2": "ISO 3166-2:KM",
                        "region-code": "002",
                        "sub-region-code": "014"
                      },
                      {
                        "name": "Congo",
                        "alpha2": "CG",
                        "alpha3": "COG",
                        "country-code": "178",
                        "iso_3166-2": "ISO 3166-2:CG",
                        "region-code": "002",
                        "sub-region-code": "017"
                      },
                      {
                        "name": "Congo, the Democratic Republic of the",
                        "alpha2": "CD",
                        "alpha3": "COD",
                        "country-code": "180",
                        "iso_3166-2": "ISO 3166-2:CD",
                        "region-code": "002",
                        "sub-region-code": "017"
                      },
                      {
                        "name": "Cook Islands",
                        "alpha2": "CK",
                        "alpha3": "COK",
                        "country-code": "184",
                        "iso_3166-2": "ISO 3166-2:CK",
                        "region-code": "009",
                        "sub-region-code": "061"
                      },
                      {
                        "name": "Costa Rica",
                        "alpha2": "CR",
                        "alpha3": "CRI",
                        "country-code": "188",
                        "iso_3166-2": "ISO 3166-2:CR",
                        "region-code": "019",
                        "sub-region-code": "013"
                      },
                      {
                        "name": "Côte d'Ivoire",
                        "alpha2": "CI",
                        "alpha3": "CIV",
                        "country-code": "384",
                        "iso_3166-2": "ISO 3166-2:CI",
                        "region-code": "002",
                        "sub-region-code": "011"
                      },
                      {
                        "name": "Croatia",
                        "alpha2": "HR",
                        "alpha3": "HRV",
                        "country-code": "191",
                        "iso_3166-2": "ISO 3166-2:HR",
                        "region-code": "150",
                        "sub-region-code": "039"
                      },
                      {
                        "name": "Cuba",
                        "alpha2": "CU",
                        "alpha3": "CUB",
                        "country-code": "192",
                        "iso_3166-2": "ISO 3166-2:CU",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Curaçao",
                        "alpha2": "CW",
                        "alpha3": "CUW",
                        "country-code": "531",
                        "iso_3166-2": "ISO 3166-2:CW",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Cyprus",
                        "alpha2": "CY",
                        "alpha3": "CYP",
                        "country-code": "196",
                        "iso_3166-2": "ISO 3166-2:CY",
                        "region-code": "142",
                        "sub-region-code": "145"
                      },
                      {
                        "name": "Czech Republic",
                        "alpha2": "CZ",
                        "alpha3": "CZE",
                        "country-code": "203",
                        "iso_3166-2": "ISO 3166-2:CZ",
                        "region-code": "150",
                        "sub-region-code": "151"
                      },
                      {
                        "name": "Denmark",
                        "alpha2": "DK",
                        "alpha3": "DNK",
                        "country-code": "208",
                        "iso_3166-2": "ISO 3166-2:DK",
                        "region-code": "150",
                        "sub-region-code": "154"
                      },
                      {
                        "name": "Djibouti",
                        "alpha2": "DJ",
                        "alpha3": "DJI",
                        "country-code": "262",
                        "iso_3166-2": "ISO 3166-2:DJ",
                        "region-code": "002",
                        "sub-region-code": "014"
                      },
                      {
                        "name": "Dominica",
                        "alpha2": "DM",
                        "alpha3": "DMA",
                        "country-code": "212",
                        "iso_3166-2": "ISO 3166-2:DM",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Dominican Republic",
                        "alpha2": "DO",
                        "alpha3": "DOM",
                        "country-code": "214",
                        "iso_3166-2": "ISO 3166-2:DO",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Ecuador",
                        "alpha2": "EC",
                        "alpha3": "ECU",
                        "country-code": "218",
                        "iso_3166-2": "ISO 3166-2:EC",
                        "region-code": "019",
                        "sub-region-code": "005"
                      },
                      {
                        "name": "Egypt",
                        "alpha2": "EG",
                        "alpha3": "EGY",
                        "country-code": "818",
                        "iso_3166-2": "ISO 3166-2:EG",
                        "region-code": "002",
                        "sub-region-code": "015"
                      },
                      {
                        "name": "El Salvador",
                        "alpha2": "SV",
                        "alpha3": "SLV",
                        "country-code": "222",
                        "iso_3166-2": "ISO 3166-2:SV",
                        "region-code": "019",
                        "sub-region-code": "013"
                      },
                      {
                        "name": "Equatorial Guinea",
                        "alpha2": "GQ",
                        "alpha3": "GNQ",
                        "country-code": "226",
                        "iso_3166-2": "ISO 3166-2:GQ",
                        "region-code": "002",
                        "sub-region-code": "017"
                      },
                      {
                        "name": "Eritrea",
                        "alpha2": "ER",
                        "alpha3": "ERI",
                        "country-code": "232",
                        "iso_3166-2": "ISO 3166-2:ER",
                        "region-code": "002",
                        "sub-region-code": "014"
                      },
                      {
                        "name": "Estonia",
                        "alpha2": "EE",
                        "alpha3": "EST",
                        "country-code": "233",
                        "iso_3166-2": "ISO 3166-2:EE",
                        "region-code": "150",
                        "sub-region-code": "154"
                      },
                      {
                        "name": "Ethiopia",
                        "alpha2": "ET",
                        "alpha3": "ETH",
                        "country-code": "231",
                        "iso_3166-2": "ISO 3166-2:ET",
                        "region-code": "002",
                        "sub-region-code": "014"
                      },
                      {
                        "name": "Falkland Islands (Malvinas)",
                        "alpha2": "FK",
                        "alpha3": "FLK",
                        "country-code": "238",
                        "iso_3166-2": "ISO 3166-2:FK",
                        "region-code": "019",
                        "sub-region-code": "005"
                      },
                      {
                        "name": "Faroe Islands",
                        "alpha2": "FO",
                        "alpha3": "FRO",
                        "country-code": "234",
                        "iso_3166-2": "ISO 3166-2:FO",
                        "region-code": "150",
                        "sub-region-code": "154"
                      },
                      {
                        "name": "Fiji",
                        "alpha2": "FJ",
                        "alpha3": "FJI",
                        "country-code": "242",
                        "iso_3166-2": "ISO 3166-2:FJ",
                        "region-code": "009",
                        "sub-region-code": "054"
                      },
                      {
                        "name": "Finland",
                        "alpha2": "FI",
                        "alpha3": "FIN",
                        "country-code": "246",
                        "iso_3166-2": "ISO 3166-2:FI",
                        "region-code": "150",
                        "sub-region-code": "154"
                      },
                      {
                        "name": "France",
                        "alpha2": "FR",
                        "alpha3": "FRA",
                        "country-code": "250",
                        "iso_3166-2": "ISO 3166-2:FR",
                        "region-code": "150",
                        "sub-region-code": "155"
                      },
                      {
                        "name": "French Guiana",
                        "alpha2": "GF",
                        "alpha3": "GUF",
                        "country-code": "254",
                        "iso_3166-2": "ISO 3166-2:GF",
                        "region-code": "019",
                        "sub-region-code": "005"
                      },
                      {
                        "name": "French Polynesia",
                        "alpha2": "PF",
                        "alpha3": "PYF",
                        "country-code": "258",
                        "iso_3166-2": "ISO 3166-2:PF",
                        "region-code": "009",
                        "sub-region-code": "061"
                      },
                      {
                        "name": "French Southern Territories",
                        "alpha2": "TF",
                        "alpha3": "ATF",
                        "country-code": "260",
                        "iso_3166-2": "ISO 3166-2:TF"
                      },
                      {
                        "name": "Gabon",
                        "alpha2": "GA",
                        "alpha3": "GAB",
                        "country-code": "266",
                        "iso_3166-2": "ISO 3166-2:GA",
                        "region-code": "002",
                        "sub-region-code": "017"
                      },
                      {
                        "name": "Gambia",
                        "alpha2": "GM",
                        "alpha3": "GMB",
                        "country-code": "270",
                        "iso_3166-2": "ISO 3166-2:GM",
                        "region-code": "002",
                        "sub-region-code": "011"
                      },
                      {
                        "name": "Georgia",
                        "alpha2": "GE",
                        "alpha3": "GEO",
                        "country-code": "268",
                        "iso_3166-2": "ISO 3166-2:GE",
                        "region-code": "142",
                        "sub-region-code": "145"
                      },
                      {
                        "name": "Germany",
                        "alpha2": "DE",
                        "alpha3": "DEU",
                        "country-code": "276",
                        "iso_3166-2": "ISO 3166-2:DE",
                        "region-code": "150",
                        "sub-region-code": "155"
                      },
                      {
                        "name": "Ghana",
                        "alpha2": "GH",
                        "alpha3": "GHA",
                        "country-code": "288",
                        "iso_3166-2": "ISO 3166-2:GH",
                        "region-code": "002",
                        "sub-region-code": "011"
                      },
                      {
                        "name": "Gibraltar",
                        "alpha2": "GI",
                        "alpha3": "GIB",
                        "country-code": "292",
                        "iso_3166-2": "ISO 3166-2:GI",
                        "region-code": "150",
                        "sub-region-code": "039"
                      },
                      {
                        "name": "Greece",
                        "alpha2": "GR",
                        "alpha3": "GRC",
                        "country-code": "300",
                        "iso_3166-2": "ISO 3166-2:GR",
                        "region-code": "150",
                        "sub-region-code": "039"
                      },
                      {
                        "name": "Greenland",
                        "alpha2": "GL",
                        "alpha3": "GRL",
                        "country-code": "304",
                        "iso_3166-2": "ISO 3166-2:GL",
                        "region-code": "019",
                        "sub-region-code": "021"
                      },
                      {
                        "name": "Grenada",
                        "alpha2": "GD",
                        "alpha3": "GRD",
                        "country-code": "308",
                        "iso_3166-2": "ISO 3166-2:GD",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Guadeloupe",
                        "alpha2": "GP",
                        "alpha3": "GLP",
                        "country-code": "312",
                        "iso_3166-2": "ISO 3166-2:GP",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Guam",
                        "alpha2": "GU",
                        "alpha3": "GUM",
                        "country-code": "316",
                        "iso_3166-2": "ISO 3166-2:GU",
                        "region-code": "009",
                        "sub-region-code": "057"
                      },
                      {
                        "name": "Guatemala",
                        "alpha2": "GT",
                        "alpha3": "GTM",
                        "country-code": "320",
                        "iso_3166-2": "ISO 3166-2:GT",
                        "region-code": "019",
                        "sub-region-code": "013"
                      },
                      {
                        "name": "Guernsey",
                        "alpha2": "GG",
                        "alpha3": "GGY",
                        "country-code": "831",
                        "iso_3166-2": "ISO 3166-2:GG",
                        "region-code": "150",
                        "sub-region-code": "154"
                      },
                      {
                        "name": "Guinea",
                        "alpha2": "GN",
                        "alpha3": "GIN",
                        "country-code": "324",
                        "iso_3166-2": "ISO 3166-2:GN",
                        "region-code": "002",
                        "sub-region-code": "011"
                      },
                      {
                        "name": "Guinea-Bissau",
                        "alpha2": "GW",
                        "alpha3": "GNB",
                        "country-code": "624",
                        "iso_3166-2": "ISO 3166-2:GW",
                        "region-code": "002",
                        "sub-region-code": "011"
                      },
                      {
                        "name": "Guyana",
                        "alpha2": "GY",
                        "alpha3": "GUY",
                        "country-code": "328",
                        "iso_3166-2": "ISO 3166-2:GY",
                        "region-code": "019",
                        "sub-region-code": "005"
                      },
                      {
                        "name": "Haiti",
                        "alpha2": "HT",
                        "alpha3": "HTI",
                        "country-code": "332",
                        "iso_3166-2": "ISO 3166-2:HT",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Heard Island and McDonald Islands",
                        "alpha2": "HM",
                        "alpha3": "HMD",
                        "country-code": "334",
                        "iso_3166-2": "ISO 3166-2:HM"
                      },
                      {
                        "name": "Holy See (Vatican City State)",
                        "alpha2": "VA",
                        "alpha3": "VAT",
                        "country-code": "336",
                        "iso_3166-2": "ISO 3166-2:VA",
                        "region-code": "150",
                        "sub-region-code": "039"
                      },
                      {
                        "name": "Honduras",
                        "alpha2": "HN",
                        "alpha3": "HND",
                        "country-code": "340",
                        "iso_3166-2": "ISO 3166-2:HN",
                        "region-code": "019",
                        "sub-region-code": "013"
                      },
                      {
                        "name": "Hong Kong",
                        "alpha2": "HK",
                        "alpha3": "HKG",
                        "country-code": "344",
                        "iso_3166-2": "ISO 3166-2:HK",
                        "region-code": "142",
                        "sub-region-code": "030"
                      },
                      {
                        "name": "Hungary",
                        "alpha2": "HU",
                        "alpha3": "HUN",
                        "country-code": "348",
                        "iso_3166-2": "ISO 3166-2:HU",
                        "region-code": "150",
                        "sub-region-code": "151"
                      },
                      {
                        "name": "Iceland",
                        "alpha2": "IS",
                        "alpha3": "ISL",
                        "country-code": "352",
                        "iso_3166-2": "ISO 3166-2:IS",
                        "region-code": "150",
                        "sub-region-code": "154"
                      },
                      {
                        "name": "India",
                        "alpha2": "IN",
                        "alpha3": "IND",
                        "country-code": "356",
                        "iso_3166-2": "ISO 3166-2:IN",
                        "region-code": "142",
                        "sub-region-code": "034"
                      },
                      {
                        "name": "Indonesia",
                        "alpha2": "ID",
                        "alpha3": "IDN",
                        "country-code": "360",
                        "iso_3166-2": "ISO 3166-2:ID",
                        "region-code": "142",
                        "sub-region-code": "035"
                      },
                      {
                        "name": "Iran, Islamic Republic of",
                        "alpha2": "IR",
                        "alpha3": "IRN",
                        "country-code": "364",
                        "iso_3166-2": "ISO 3166-2:IR",
                        "region-code": "142",
                        "sub-region-code": "034"
                      },
                      {
                        "name": "Iraq",
                        "alpha2": "IQ",
                        "alpha3": "IRQ",
                        "country-code": "368",
                        "iso_3166-2": "ISO 3166-2:IQ",
                        "region-code": "142",
                        "sub-region-code": "145"
                      },
                      {
                        "name": "Ireland",
                        "alpha2": "IE",
                        "alpha3": "IRL",
                        "country-code": "372",
                        "iso_3166-2": "ISO 3166-2:IE",
                        "region-code": "150",
                        "sub-region-code": "154"
                      },
                      {
                        "name": "Isle of Man",
                        "alpha2": "IM",
                        "alpha3": "IMN",
                        "country-code": "833",
                        "iso_3166-2": "ISO 3166-2:IM",
                        "region-code": "150",
                        "sub-region-code": "154"
                      },
                      {
                        "name": "Israel",
                        "alpha2": "IL",
                        "alpha3": "ISR",
                        "country-code": "376",
                        "iso_3166-2": "ISO 3166-2:IL",
                        "region-code": "142",
                        "sub-region-code": "145"
                      },
                      {
                        "name": "Italy",
                        "alpha2": "IT",
                        "alpha3": "ITA",
                        "country-code": "380",
                        "iso_3166-2": "ISO 3166-2:IT",
                        "region-code": "150",
                        "sub-region-code": "039"
                      },
                      {
                        "name": "Jamaica",
                        "alpha2": "JM",
                        "alpha3": "JAM",
                        "country-code": "388",
                        "iso_3166-2": "ISO 3166-2:JM",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Japan",
                        "alpha2": "JP",
                        "alpha3": "JPN",
                        "country-code": "392",
                        "iso_3166-2": "ISO 3166-2:JP",
                        "region-code": "142",
                        "sub-region-code": "030"
                      },
                      {
                        "name": "Jersey",
                        "alpha2": "JE",
                        "alpha3": "JEY",
                        "country-code": "832",
                        "iso_3166-2": "ISO 3166-2:JE",
                        "region-code": "150",
                        "sub-region-code": "154"
                      },
                      {
                        "name": "Jordan",
                        "alpha2": "JO",
                        "alpha3": "JOR",
                        "country-code": "400",
                        "iso_3166-2": "ISO 3166-2:JO",
                        "region-code": "142",
                        "sub-region-code": "145"
                      },
                      {
                        "name": "Kazakhstan",
                        "alpha2": "KZ",
                        "alpha3": "KAZ",
                        "country-code": "398",
                        "iso_3166-2": "ISO 3166-2:KZ",
                        "region-code": "142",
                        "sub-region-code": "143"
                      },
                      {
                        "name": "Kenya",
                        "alpha2": "KE",
                        "alpha3": "KEN",
                        "country-code": "404",
                        "iso_3166-2": "ISO 3166-2:KE",
                        "region-code": "002",
                        "sub-region-code": "014"
                      },
                      {
                        "name": "Kiribati",
                        "alpha2": "KI",
                        "alpha3": "KIR",
                        "country-code": "296",
                        "iso_3166-2": "ISO 3166-2:KI",
                        "region-code": "009",
                        "sub-region-code": "057"
                      },
                      {
                        "name": "Korea, Democratic People's Republic of",
                        "alpha2": "KP",
                        "alpha3": "PRK",
                        "country-code": "408",
                        "iso_3166-2": "ISO 3166-2:KP",
                        "region-code": "142",
                        "sub-region-code": "030"
                      },
                      {
                        "name": "Korea, Republic of",
                        "alpha2": "KR",
                        "alpha3": "KOR",
                        "country-code": "410",
                        "iso_3166-2": "ISO 3166-2:KR",
                        "region-code": "142",
                        "sub-region-code": "030"
                      },
                      {
                        "name": "Kuwait",
                        "alpha2": "KW",
                        "alpha3": "KWT",
                        "country-code": "414",
                        "iso_3166-2": "ISO 3166-2:KW",
                        "region-code": "142",
                        "sub-region-code": "145"
                      },
                      {
                        "name": "Kyrgyzstan",
                        "alpha2": "KG",
                        "alpha3": "KGZ",
                        "country-code": "417",
                        "iso_3166-2": "ISO 3166-2:KG",
                        "region-code": "142",
                        "sub-region-code": "143"
                      },
                      {
                        "name": "Lao People's Democratic Republic",
                        "alpha2": "LA",
                        "alpha3": "LAO",
                        "country-code": "418",
                        "iso_3166-2": "ISO 3166-2:LA",
                        "region-code": "142",
                        "sub-region-code": "035"
                      },
                      {
                        "name": "Latvia",
                        "alpha2": "LV",
                        "alpha3": "LVA",
                        "country-code": "428",
                        "iso_3166-2": "ISO 3166-2:LV",
                        "region-code": "150",
                        "sub-region-code": "154"
                      },
                      {
                        "name": "Lebanon",
                        "alpha2": "LB",
                        "alpha3": "LBN",
                        "country-code": "422",
                        "iso_3166-2": "ISO 3166-2:LB",
                        "region-code": "142",
                        "sub-region-code": "145"
                      },
                      {
                        "name": "Lesotho",
                        "alpha2": "LS",
                        "alpha3": "LSO",
                        "country-code": "426",
                        "iso_3166-2": "ISO 3166-2:LS",
                        "region-code": "002",
                        "sub-region-code": "018"
                      },
                      {
                        "name": "Liberia",
                        "alpha2": "LR",
                        "alpha3": "LBR",
                        "country-code": "430",
                        "iso_3166-2": "ISO 3166-2:LR",
                        "region-code": "002",
                        "sub-region-code": "011"
                      },
                      {
                        "name": "Libya",
                        "alpha2": "LY",
                        "alpha3": "LBY",
                        "country-code": "434",
                        "iso_3166-2": "ISO 3166-2:LY",
                        "region-code": "002",
                        "sub-region-code": "015"
                      },
                      {
                        "name": "Liechtenstein",
                        "alpha2": "LI",
                        "alpha3": "LIE",
                        "country-code": "438",
                        "iso_3166-2": "ISO 3166-2:LI",
                        "region-code": "150",
                        "sub-region-code": "155"
                      },
                      {
                        "name": "Lithuania",
                        "alpha2": "LT",
                        "alpha3": "LTU",
                        "country-code": "440",
                        "iso_3166-2": "ISO 3166-2:LT",
                        "region-code": "150",
                        "sub-region-code": "154"
                      },
                      {
                        "name": "Luxembourg",
                        "alpha2": "LU",
                        "alpha3": "LUX",
                        "country-code": "442",
                        "iso_3166-2": "ISO 3166-2:LU",
                        "region-code": "150",
                        "sub-region-code": "155"
                      },
                      {
                        "name": "Macao",
                        "alpha2": "MO",
                        "alpha3": "MAC",
                        "country-code": "446",
                        "iso_3166-2": "ISO 3166-2:MO",
                        "region-code": "142",
                        "sub-region-code": "030"
                      },
                      {
                        "name": "Macedonia, the former Yugoslav Republic of",
                        "alpha2": "MK",
                        "alpha3": "MKD",
                        "country-code": "807",
                        "iso_3166-2": "ISO 3166-2:MK",
                        "region-code": "150",
                        "sub-region-code": "039"
                      },
                      {
                        "name": "Madagascar",
                        "alpha2": "MG",
                        "alpha3": "MDG",
                        "country-code": "450",
                        "iso_3166-2": "ISO 3166-2:MG",
                        "region-code": "002",
                        "sub-region-code": "014"
                      },
                      {
                        "name": "Malawi",
                        "alpha2": "MW",
                        "alpha3": "MWI",
                        "country-code": "454",
                        "iso_3166-2": "ISO 3166-2:MW",
                        "region-code": "002",
                        "sub-region-code": "014"
                      },
                      {
                        "name": "Malaysia",
                        "alpha2": "MY",
                        "alpha3": "MYS",
                        "country-code": "458",
                        "iso_3166-2": "ISO 3166-2:MY",
                        "region-code": "142",
                        "sub-region-code": "035"
                      },
                      {
                        "name": "Maldives",
                        "alpha2": "MV",
                        "alpha3": "MDV",
                        "country-code": "462",
                        "iso_3166-2": "ISO 3166-2:MV",
                        "region-code": "142",
                        "sub-region-code": "034"
                      },
                      {
                        "name": "Mali",
                        "alpha2": "ML",
                        "alpha3": "MLI",
                        "country-code": "466",
                        "iso_3166-2": "ISO 3166-2:ML",
                        "region-code": "002",
                        "sub-region-code": "011"
                      },
                      {
                        "name": "Malta",
                        "alpha2": "MT",
                        "alpha3": "MLT",
                        "country-code": "470",
                        "iso_3166-2": "ISO 3166-2:MT",
                        "region-code": "150",
                        "sub-region-code": "039"
                      },
                      {
                        "name": "Marshall Islands",
                        "alpha2": "MH",
                        "alpha3": "MHL",
                        "country-code": "584",
                        "iso_3166-2": "ISO 3166-2:MH",
                        "region-code": "009",
                        "sub-region-code": "057"
                      },
                      {
                        "name": "Martinique",
                        "alpha2": "MQ",
                        "alpha3": "MTQ",
                        "country-code": "474",
                        "iso_3166-2": "ISO 3166-2:MQ",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Mauritania",
                        "alpha2": "MR",
                        "alpha3": "MRT",
                        "country-code": "478",
                        "iso_3166-2": "ISO 3166-2:MR",
                        "region-code": "002",
                        "sub-region-code": "011"
                      },
                      {
                        "name": "Mauritius",
                        "alpha2": "MU",
                        "alpha3": "MUS",
                        "country-code": "480",
                        "iso_3166-2": "ISO 3166-2:MU",
                        "region-code": "002",
                        "sub-region-code": "014"
                      },
                      {
                        "name": "Mayotte",
                        "alpha2": "YT",
                        "alpha3": "MYT",
                        "country-code": "175",
                        "iso_3166-2": "ISO 3166-2:YT",
                        "region-code": "002",
                        "sub-region-code": "014"
                      },
                      {
                        "name": "Mexico",
                        "alpha2": "MX",
                        "alpha3": "MEX",
                        "country-code": "484",
                        "iso_3166-2": "ISO 3166-2:MX",
                        "region-code": "019",
                        "sub-region-code": "013"
                      },
                      {
                        "name": "Micronesia, Federated States of",
                        "alpha2": "FM",
                        "alpha3": "FSM",
                        "country-code": "583",
                        "iso_3166-2": "ISO 3166-2:FM",
                        "region-code": "009",
                        "sub-region-code": "057"
                      },
                      {
                        "name": "Moldova, Republic of",
                        "alpha2": "MD",
                        "alpha3": "MDA",
                        "country-code": "498",
                        "iso_3166-2": "ISO 3166-2:MD",
                        "region-code": "150",
                        "sub-region-code": "151"
                      },
                      {
                        "name": "Monaco",
                        "alpha2": "MC",
                        "alpha3": "MCO",
                        "country-code": "492",
                        "iso_3166-2": "ISO 3166-2:MC",
                        "region-code": "150",
                        "sub-region-code": "155"
                      },
                      {
                        "name": "Mongolia",
                        "alpha2": "MN",
                        "alpha3": "MNG",
                        "country-code": "496",
                        "iso_3166-2": "ISO 3166-2:MN",
                        "region-code": "142",
                        "sub-region-code": "030"
                      },
                      {
                        "name": "Montenegro",
                        "alpha2": "ME",
                        "alpha3": "MNE",
                        "country-code": "499",
                        "iso_3166-2": "ISO 3166-2:ME",
                        "region-code": "150",
                        "sub-region-code": "039"
                      },
                      {
                        "name": "Montserrat",
                        "alpha2": "MS",
                        "alpha3": "MSR",
                        "country-code": "500",
                        "iso_3166-2": "ISO 3166-2:MS",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Morocco",
                        "alpha2": "MA",
                        "alpha3": "MAR",
                        "country-code": "504",
                        "iso_3166-2": "ISO 3166-2:MA",
                        "region-code": "002",
                        "sub-region-code": "015"
                      },
                      {
                        "name": "Mozambique",
                        "alpha2": "MZ",
                        "alpha3": "MOZ",
                        "country-code": "508",
                        "iso_3166-2": "ISO 3166-2:MZ",
                        "region-code": "002",
                        "sub-region-code": "014"
                      },
                      {
                        "name": "Myanmar",
                        "alpha2": "MM",
                        "alpha3": "MMR",
                        "country-code": "104",
                        "iso_3166-2": "ISO 3166-2:MM",
                        "region-code": "142",
                        "sub-region-code": "035"
                      },
                      {
                        "name": "Namibia",
                        "alpha2": "NA",
                        "alpha3": "NAM",
                        "country-code": "516",
                        "iso_3166-2": "ISO 3166-2:NA",
                        "region-code": "002",
                        "sub-region-code": "018"
                      },
                      {
                        "name": "Nauru",
                        "alpha2": "NR",
                        "alpha3": "NRU",
                        "country-code": "520",
                        "iso_3166-2": "ISO 3166-2:NR",
                        "region-code": "009",
                        "sub-region-code": "057"
                      },
                      {
                        "name": "Nepal",
                        "alpha2": "NP",
                        "alpha3": "NPL",
                        "country-code": "524",
                        "iso_3166-2": "ISO 3166-2:NP",
                        "region-code": "142",
                        "sub-region-code": "034"
                      },
                      {
                        "name": "Netherlands",
                        "alpha2": "NL",
                        "alpha3": "NLD",
                        "country-code": "528",
                        "iso_3166-2": "ISO 3166-2:NL",
                        "region-code": "150",
                        "sub-region-code": "155"
                      },
                      {
                        "name": "New Caledonia",
                        "alpha2": "NC",
                        "alpha3": "NCL",
                        "country-code": "540",
                        "iso_3166-2": "ISO 3166-2:NC",
                        "region-code": "009",
                        "sub-region-code": "054"
                      },
                      {
                        "name": "New Zealand",
                        "alpha2": "NZ",
                        "alpha3": "NZL",
                        "country-code": "554",
                        "iso_3166-2": "ISO 3166-2:NZ",
                        "region-code": "009",
                        "sub-region-code": "053"
                      },
                      {
                        "name": "Nicaragua",
                        "alpha2": "NI",
                        "alpha3": "NIC",
                        "country-code": "558",
                        "iso_3166-2": "ISO 3166-2:NI",
                        "region-code": "019",
                        "sub-region-code": "013"
                      },
                      {
                        "name": "Niger",
                        "alpha2": "NE",
                        "alpha3": "NER",
                        "country-code": "562",
                        "iso_3166-2": "ISO 3166-2:NE",
                        "region-code": "002",
                        "sub-region-code": "011"
                      },
                      {
                        "name": "Nigeria",
                        "alpha2": "NG",
                        "alpha3": "NGA",
                        "country-code": "566",
                        "iso_3166-2": "ISO 3166-2:NG",
                        "region-code": "002",
                        "sub-region-code": "011"
                      },
                      {
                        "name": "Niue",
                        "alpha2": "NU",
                        "alpha3": "NIU",
                        "country-code": "570",
                        "iso_3166-2": "ISO 3166-2:NU",
                        "region-code": "009",
                        "sub-region-code": "061"
                      },
                      {
                        "name": "Norfolk Island",
                        "alpha2": "NF",
                        "alpha3": "NFK",
                        "country-code": "574",
                        "iso_3166-2": "ISO 3166-2:NF",
                        "region-code": "009",
                        "sub-region-code": "053"
                      },
                      {
                        "name": "Northern Mariana Islands",
                        "alpha2": "MP",
                        "alpha3": "MNP",
                        "country-code": "580",
                        "iso_3166-2": "ISO 3166-2:MP",
                        "region-code": "009",
                        "sub-region-code": "057"
                      },
                      {
                        "name": "Norway",
                        "alpha2": "NO",
                        "alpha3": "NOR",
                        "country-code": "578",
                        "iso_3166-2": "ISO 3166-2:NO",
                        "region-code": "150",
                        "sub-region-code": "154"
                      },
                      {
                        "name": "Oman",
                        "alpha2": "OM",
                        "alpha3": "OMN",
                        "country-code": "512",
                        "iso_3166-2": "ISO 3166-2:OM",
                        "region-code": "142",
                        "sub-region-code": "145"
                      },
                      {
                        "name": "Pakistan",
                        "alpha2": "PK",
                        "alpha3": "PAK",
                        "country-code": "586",
                        "iso_3166-2": "ISO 3166-2:PK",
                        "region-code": "142",
                        "sub-region-code": "034"
                      },
                      {
                        "name": "Palau",
                        "alpha2": "PW",
                        "alpha3": "PLW",
                        "country-code": "585",
                        "iso_3166-2": "ISO 3166-2:PW",
                        "region-code": "009",
                        "sub-region-code": "057"
                      },
                      {
                        "name": "Palestine, State of",
                        "alpha2": "PS",
                        "alpha3": "PSE",
                        "country-code": "275",
                        "iso_3166-2": "ISO 3166-2:PS",
                        "region-code": "142",
                        "sub-region-code": "145"
                      },
                      {
                        "name": "Panama",
                        "alpha2": "PA",
                        "alpha3": "PAN",
                        "country-code": "591",
                        "iso_3166-2": "ISO 3166-2:PA",
                        "region-code": "019",
                        "sub-region-code": "013"
                      },
                      {
                        "name": "Papua New Guinea",
                        "alpha2": "PG",
                        "alpha3": "PNG",
                        "country-code": "598",
                        "iso_3166-2": "ISO 3166-2:PG",
                        "region-code": "009",
                        "sub-region-code": "054"
                      },
                      {
                        "name": "Paraguay",
                        "alpha2": "PY",
                        "alpha3": "PRY",
                        "country-code": "600",
                        "iso_3166-2": "ISO 3166-2:PY",
                        "region-code": "019",
                        "sub-region-code": "005"
                      },
                      {
                        "name": "Peru",
                        "alpha2": "PE",
                        "alpha3": "PER",
                        "country-code": "604",
                        "iso_3166-2": "ISO 3166-2:PE",
                        "region-code": "019",
                        "sub-region-code": "005"
                      },
                      {
                        "name": "Philippines",
                        "alpha2": "PH",
                        "alpha3": "PHL",
                        "country-code": "608",
                        "iso_3166-2": "ISO 3166-2:PH",
                        "region-code": "142",
                        "sub-region-code": "035"
                      },
                      {
                        "name": "Pitcairn",
                        "alpha2": "PN",
                        "alpha3": "PCN",
                        "country-code": "612",
                        "iso_3166-2": "ISO 3166-2:PN",
                        "region-code": "009",
                        "sub-region-code": "061"
                      },
                      {
                        "name": "Poland",
                        "alpha2": "PL",
                        "alpha3": "POL",
                        "country-code": "616",
                        "iso_3166-2": "ISO 3166-2:PL",
                        "region-code": "150",
                        "sub-region-code": "151"
                      },
                      {
                        "name": "Portugal",
                        "alpha2": "PT",
                        "alpha3": "PRT",
                        "country-code": "620",
                        "iso_3166-2": "ISO 3166-2:PT",
                        "region-code": "150",
                        "sub-region-code": "039"
                      },
                      {
                        "name": "Puerto Rico",
                        "alpha2": "PR",
                        "alpha3": "PRI",
                        "country-code": "630",
                        "iso_3166-2": "ISO 3166-2:PR",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Qatar",
                        "alpha2": "QA",
                        "alpha3": "QAT",
                        "country-code": "634",
                        "iso_3166-2": "ISO 3166-2:QA",
                        "region-code": "142",
                        "sub-region-code": "145"
                      },
                      {
                        "name": "Réunion",
                        "alpha2": "RE",
                        "alpha3": "REU",
                        "country-code": "638",
                        "iso_3166-2": "ISO 3166-2:RE",
                        "region-code": "002",
                        "sub-region-code": "014"
                      },
                      {
                        "name": "Romania",
                        "alpha2": "RO",
                        "alpha3": "ROU",
                        "country-code": "642",
                        "iso_3166-2": "ISO 3166-2:RO",
                        "region-code": "150",
                        "sub-region-code": "151"
                      },
                      {
                        "name": "Russian Federation",
                        "alpha2": "RU",
                        "alpha3": "RUS",
                        "country-code": "643",
                        "iso_3166-2": "ISO 3166-2:RU",
                        "region-code": "150",
                        "sub-region-code": "151"
                      },
                      {
                        "name": "Rwanda",
                        "alpha2": "RW",
                        "alpha3": "RWA",
                        "country-code": "646",
                        "iso_3166-2": "ISO 3166-2:RW",
                        "region-code": "002",
                        "sub-region-code": "014"
                      },
                      {
                        "name": "Saint Barthélemy",
                        "alpha2": "BL",
                        "alpha3": "BLM",
                        "country-code": "652",
                        "iso_3166-2": "ISO 3166-2:BL",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Saint Helena, Ascension and Tristan da Cunha",
                        "alpha2": "SH",
                        "alpha3": "SHN",
                        "country-code": "654",
                        "iso_3166-2": "ISO 3166-2:SH",
                        "region-code": "002",
                        "sub-region-code": "011"
                      },
                      {
                        "name": "Saint Kitts and Nevis",
                        "alpha2": "KN",
                        "alpha3": "KNA",
                        "country-code": "659",
                        "iso_3166-2": "ISO 3166-2:KN",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Saint Lucia",
                        "alpha2": "LC",
                        "alpha3": "LCA",
                        "country-code": "662",
                        "iso_3166-2": "ISO 3166-2:LC",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Saint Martin (French part)",
                        "alpha2": "MF",
                        "alpha3": "MAF",
                        "country-code": "663",
                        "iso_3166-2": "ISO 3166-2:MF",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Saint Pierre and Miquelon",
                        "alpha2": "PM",
                        "alpha3": "SPM",
                        "country-code": "666",
                        "iso_3166-2": "ISO 3166-2:PM",
                        "region-code": "019",
                        "sub-region-code": "021"
                      },
                      {
                        "name": "Saint Vincent and the Grenadines",
                        "alpha2": "VC",
                        "alpha3": "VCT",
                        "country-code": "670",
                        "iso_3166-2": "ISO 3166-2:VC",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Samoa",
                        "alpha2": "WS",
                        "alpha3": "WSM",
                        "country-code": "882",
                        "iso_3166-2": "ISO 3166-2:WS",
                        "region-code": "009",
                        "sub-region-code": "061"
                      },
                      {
                        "name": "San Marino",
                        "alpha2": "SM",
                        "alpha3": "SMR",
                        "country-code": "674",
                        "iso_3166-2": "ISO 3166-2:SM",
                        "region-code": "150",
                        "sub-region-code": "039"
                      },
                      {
                        "name": "Sao Tome and Principe",
                        "alpha2": "ST",
                        "alpha3": "STP",
                        "country-code": "678",
                        "iso_3166-2": "ISO 3166-2:ST",
                        "region-code": "002",
                        "sub-region-code": "017"
                      },
                      {
                        "name": "Saudi Arabia",
                        "alpha2": "SA",
                        "alpha3": "SAU",
                        "country-code": "682",
                        "iso_3166-2": "ISO 3166-2:SA",
                        "region-code": "142",
                        "sub-region-code": "145"
                      },
                      {
                        "name": "Senegal",
                        "alpha2": "SN",
                        "alpha3": "SEN",
                        "country-code": "686",
                        "iso_3166-2": "ISO 3166-2:SN",
                        "region-code": "002",
                        "sub-region-code": "011"
                      },
                      {
                        "name": "Serbia",
                        "alpha2": "RS",
                        "alpha3": "SRB",
                        "country-code": "688",
                        "iso_3166-2": "ISO 3166-2:RS",
                        "region-code": "150",
                        "sub-region-code": "039"
                      },
                      {
                        "name": "Seychelles",
                        "alpha2": "SC",
                        "alpha3": "SYC",
                        "country-code": "690",
                        "iso_3166-2": "ISO 3166-2:SC",
                        "region-code": "002",
                        "sub-region-code": "014"
                      },
                      {
                        "name": "Sierra Leone",
                        "alpha2": "SL",
                        "alpha3": "SLE",
                        "country-code": "694",
                        "iso_3166-2": "ISO 3166-2:SL",
                        "region-code": "002",
                        "sub-region-code": "011"
                      },
                      {
                        "name": "Singapore",
                        "alpha2": "SG",
                        "alpha3": "SGP",
                        "country-code": "702",
                        "iso_3166-2": "ISO 3166-2:SG",
                        "region-code": "142",
                        "sub-region-code": "035"
                      },
                      {
                        "name": "Sint Maarten (Dutch part)",
                        "alpha2": "SX",
                        "alpha3": "SXM",
                        "country-code": "534",
                        "iso_3166-2": "ISO 3166-2:SX",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Slovakia",
                        "alpha2": "SK",
                        "alpha3": "SVK",
                        "country-code": "703",
                        "iso_3166-2": "ISO 3166-2:SK",
                        "region-code": "150",
                        "sub-region-code": "151"
                      },
                      {
                        "name": "Slovenia",
                        "alpha2": "SI",
                        "alpha3": "SVN",
                        "country-code": "705",
                        "iso_3166-2": "ISO 3166-2:SI",
                        "region-code": "150",
                        "sub-region-code": "039"
                      },
                      {
                        "name": "Solomon Islands",
                        "alpha2": "SB",
                        "alpha3": "SLB",
                        "country-code": "090",
                        "iso_3166-2": "ISO 3166-2:SB",
                        "region-code": "009",
                        "sub-region-code": "054"
                      },
                      {
                        "name": "Somalia",
                        "alpha2": "SO",
                        "alpha3": "SOM",
                        "country-code": "706",
                        "iso_3166-2": "ISO 3166-2:SO",
                        "region-code": "002",
                        "sub-region-code": "014"
                      },
                      {
                        "name": "South Africa",
                        "alpha2": "ZA",
                        "alpha3": "ZAF",
                        "country-code": "710",
                        "iso_3166-2": "ISO 3166-2:ZA",
                        "region-code": "002",
                        "sub-region-code": "018"
                      },
                      {
                        "name": "South Georgia and the South Sandwich Islands",
                        "alpha2": "GS",
                        "alpha3": "SGS",
                        "country-code": "239",
                        "iso_3166-2": "ISO 3166-2:GS"
                      },
                      {
                        "name": "South Sudan",
                        "alpha2": "SS",
                        "alpha3": "SSD",
                        "country-code": "728",
                        "iso_3166-2": "ISO 3166-2:SS",
                        "region-code": "002",
                        "sub-region-code": "014"
                      },
                      {
                        "name": "Spain",
                        "alpha2": "ES",
                        "alpha3": "ESP",
                        "country-code": "724",
                        "iso_3166-2": "ISO 3166-2:ES",
                        "region-code": "150",
                        "sub-region-code": "039"
                      },
                      {
                        "name": "Sri Lanka",
                        "alpha2": "LK",
                        "alpha3": "LKA",
                        "country-code": "144",
                        "iso_3166-2": "ISO 3166-2:LK",
                        "region-code": "142",
                        "sub-region-code": "034"
                      },
                      {
                        "name": "Sudan",
                        "alpha2": "SD",
                        "alpha3": "SDN",
                        "country-code": "729",
                        "iso_3166-2": "ISO 3166-2:SD",
                        "region-code": "002",
                        "sub-region-code": "015"
                      },
                      {
                        "name": "Suriname",
                        "alpha2": "SR",
                        "alpha3": "SUR",
                        "country-code": "740",
                        "iso_3166-2": "ISO 3166-2:SR",
                        "region-code": "019",
                        "sub-region-code": "005"
                      },
                      {
                        "name": "Svalbard and Jan Mayen",
                        "alpha2": "SJ",
                        "alpha3": "SJM",
                        "country-code": "744",
                        "iso_3166-2": "ISO 3166-2:SJ",
                        "region-code": "150",
                        "sub-region-code": "154"
                      },
                      {
                        "name": "Swaziland",
                        "alpha2": "SZ",
                        "alpha3": "SWZ",
                        "country-code": "748",
                        "iso_3166-2": "ISO 3166-2:SZ",
                        "region-code": "002",
                        "sub-region-code": "018"
                      },
                      {
                        "name": "Sweden",
                        "alpha2": "SE",
                        "alpha3": "SWE",
                        "country-code": "752",
                        "iso_3166-2": "ISO 3166-2:SE",
                        "region-code": "150",
                        "sub-region-code": "154"
                      },
                      {
                        "name": "Switzerland",
                        "alpha2": "CH",
                        "alpha3": "CHE",
                        "country-code": "756",
                        "iso_3166-2": "ISO 3166-2:CH",
                        "region-code": "150",
                        "sub-region-code": "155"
                      },
                      {
                        "name": "Syrian Arab Republic",
                        "alpha2": "SY",
                        "alpha3": "SYR",
                        "country-code": "760",
                        "iso_3166-2": "ISO 3166-2:SY",
                        "region-code": "142",
                        "sub-region-code": "145"
                      },
                      {
                        "name": "Taiwan, Province of China",
                        "alpha2": "TW",
                        "alpha3": "TWN",
                        "country-code": "158",
                        "iso_3166-2": "ISO 3166-2:TW",
                        "region-code": "142",
                        "sub-region-code": "030"
                      },
                      {
                        "name": "Tajikistan",
                        "alpha2": "TJ",
                        "alpha3": "TJK",
                        "country-code": "762",
                        "iso_3166-2": "ISO 3166-2:TJ",
                        "region-code": "142",
                        "sub-region-code": "143"
                      },
                      {
                        "name": "Tanzania, United Republic of",
                        "alpha2": "TZ",
                        "alpha3": "TZA",
                        "country-code": "834",
                        "iso_3166-2": "ISO 3166-2:TZ",
                        "region-code": "002",
                        "sub-region-code": "014"
                      },
                      {
                        "name": "Thailand",
                        "alpha2": "TH",
                        "alpha3": "THA",
                        "country-code": "764",
                        "iso_3166-2": "ISO 3166-2:TH",
                        "region-code": "142",
                        "sub-region-code": "035"
                      },
                      {
                        "name": "Timor-Leste",
                        "alpha2": "TL",
                        "alpha3": "TLS",
                        "country-code": "626",
                        "iso_3166-2": "ISO 3166-2:TL",
                        "region-code": "142",
                        "sub-region-code": "035"
                      },
                      {
                        "name": "Togo",
                        "alpha2": "TG",
                        "alpha3": "TGO",
                        "country-code": "768",
                        "iso_3166-2": "ISO 3166-2:TG",
                        "region-code": "002",
                        "sub-region-code": "011"
                      },
                      {
                        "name": "Tokelau",
                        "alpha2": "TK",
                        "alpha3": "TKL",
                        "country-code": "772",
                        "iso_3166-2": "ISO 3166-2:TK",
                        "region-code": "009",
                        "sub-region-code": "061"
                      },
                      {
                        "name": "Tonga",
                        "alpha2": "TO",
                        "alpha3": "TON",
                        "country-code": "776",
                        "iso_3166-2": "ISO 3166-2:TO",
                        "region-code": "009",
                        "sub-region-code": "061"
                      },
                      {
                        "name": "Trinidad and Tobago",
                        "alpha2": "TT",
                        "alpha3": "TTO",
                        "country-code": "780",
                        "iso_3166-2": "ISO 3166-2:TT",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Tunisia",
                        "alpha2": "TN",
                        "alpha3": "TUN",
                        "country-code": "788",
                        "iso_3166-2": "ISO 3166-2:TN",
                        "region-code": "002",
                        "sub-region-code": "015"
                      },
                      {
                        "name": "Turkey",
                        "alpha2": "TR",
                        "alpha3": "TUR",
                        "country-code": "792",
                        "iso_3166-2": "ISO 3166-2:TR",
                        "region-code": "142",
                        "sub-region-code": "145"
                      },
                      {
                        "name": "Turkmenistan",
                        "alpha2": "TM",
                        "alpha3": "TKM",
                        "country-code": "795",
                        "iso_3166-2": "ISO 3166-2:TM",
                        "region-code": "142",
                        "sub-region-code": "143"
                      },
                      {
                        "name": "Turks and Caicos Islands",
                        "alpha2": "TC",
                        "alpha3": "TCA",
                        "country-code": "796",
                        "iso_3166-2": "ISO 3166-2:TC",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Tuvalu",
                        "alpha2": "TV",
                        "alpha3": "TUV",
                        "country-code": "798",
                        "iso_3166-2": "ISO 3166-2:TV",
                        "region-code": "009",
                        "sub-region-code": "061"
                      },
                      {
                        "name": "Uganda",
                        "alpha2": "UG",
                        "alpha3": "UGA",
                        "country-code": "800",
                        "iso_3166-2": "ISO 3166-2:UG",
                        "region-code": "002",
                        "sub-region-code": "014"
                      },
                      {
                        "name": "Ukraine",
                        "alpha2": "UA",
                        "alpha3": "UKR",
                        "country-code": "804",
                        "iso_3166-2": "ISO 3166-2:UA",
                        "region-code": "150",
                        "sub-region-code": "151"
                      },
                      {
                        "name": "United Arab Emirates",
                        "alpha2": "AE",
                        "alpha3": "ARE",
                        "country-code": "784",
                        "iso_3166-2": "ISO 3166-2:AE",
                        "region-code": "142",
                        "sub-region-code": "145"
                      },
                      {
                        "name": "United Kingdom",
                        "alpha2": "GB",
                        "alpha3": "GBR",
                        "country-code": "826",
                        "iso_3166-2": "ISO 3166-2:GB",
                        "region-code": "150",
                        "sub-region-code": "154"
                      },
                      {
                        "name": "United States",
                        "alpha2": "US",
                        "alpha3": "USA",
                        "country-code": "840",
                        "iso_3166-2": "ISO 3166-2:US",
                        "region-code": "019",
                        "sub-region-code": "021"
                      },
                      {
                        "name": "United States Minor Outlying Islands",
                        "alpha2": "UM",
                        "alpha3": "UMI",
                        "country-code": "581",
                        "iso_3166-2": "ISO 3166-2:UM"
                      },
                      {
                        "name": "Uruguay",
                        "alpha2": "UY",
                        "alpha3": "URY",
                        "country-code": "858",
                        "iso_3166-2": "ISO 3166-2:UY",
                        "region-code": "019",
                        "sub-region-code": "005"
                      },
                      {
                        "name": "Uzbekistan",
                        "alpha2": "UZ",
                        "alpha3": "UZB",
                        "country-code": "860",
                        "iso_3166-2": "ISO 3166-2:UZ",
                        "region-code": "142",
                        "sub-region-code": "143"
                      },
                      {
                        "name": "Vanuatu",
                        "alpha2": "VU",
                        "alpha3": "VUT",
                        "country-code": "548",
                        "iso_3166-2": "ISO 3166-2:VU",
                        "region-code": "009",
                        "sub-region-code": "054"
                      },
                      {
                        "name": "Venezuela, Bolivarian Republic of",
                        "alpha2": "VE",
                        "alpha3": "VEN",
                        "country-code": "862",
                        "iso_3166-2": "ISO 3166-2:VE",
                        "region-code": "019",
                        "sub-region-code": "005"
                      },
                      {
                        "name": "Viet Nam",
                        "alpha2": "VN",
                        "alpha3": "VNM",
                        "country-code": "704",
                        "iso_3166-2": "ISO 3166-2:VN",
                        "region-code": "142",
                        "sub-region-code": "035"
                      },
                      {
                        "name": "Virgin Islands, British",
                        "alpha2": "VG",
                        "alpha3": "VGB",
                        "country-code": "092",
                        "iso_3166-2": "ISO 3166-2:VG",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Virgin Islands, U.S.",
                        "alpha2": "VI",
                        "alpha3": "VIR",
                        "country-code": "850",
                        "iso_3166-2": "ISO 3166-2:VI",
                        "region-code": "019",
                        "sub-region-code": "029"
                      },
                      {
                        "name": "Wallis and Futuna",
                        "alpha2": "WF",
                        "alpha3": "WLF",
                        "country-code": "876",
                        "iso_3166-2": "ISO 3166-2:WF",
                        "region-code": "009",
                        "sub-region-code": "061"
                      },
                      {
                        "name": "Western Sahara",
                        "alpha2": "EH",
                        "alpha3": "ESH",
                        "country-code": "732",
                        "iso_3166-2": "ISO 3166-2:EH",
                        "region-code": "002",
                        "sub-region-code": "015"
                      },
                      {
                        "name": "Yemen",
                        "alpha2": "YE",
                        "alpha3": "YEM",
                        "country-code": "887",
                        "iso_3166-2": "ISO 3166-2:YE",
                        "region-code": "142",
                        "sub-region-code": "145"
                      },
                      {
                        "name": "Zambia",
                        "alpha2": "ZM",
                        "alpha3": "ZMB",
                        "country-code": "894",
                        "iso_3166-2": "ISO 3166-2:ZM",
                        "region-code": "002",
                        "sub-region-code": "014"
                      },
                      {
                        "name": "Zimbabwe",
                        "alpha2": "ZW",
                        "alpha3": "ZWE",
                        "country-code": "716",
                        "iso_3166-2": "ISO 3166-2:ZW",
                        "region-code": "002",
                        "sub-region-code": "014"
                      }
                    ];
        }
    });

    return FactsModel;
});


// fetch({ url: "/init.json", success: function() {
//       console.log(AllStudents);
//   }});