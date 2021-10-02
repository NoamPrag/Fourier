const rubberDuckDrawing = [
  { x: 525.9919428676822, y: -924.997069820789 },
  { x: 519.490657475355, y: -922.4504848162906 },
  { x: 513.0727624669671, y: -919.6417394503951 },
  { x: 506.74259281625564, y: -916.6432435778988 },
  { x: 500.4870201865706, y: -913.4901603531762 },
  { x: 494.3172882720828, y: -910.2135403826833 },
  { x: 488.18854373693466, y: -906.8035498261452 },
  { x: 482.147297004587, y: -903.2926375983516 },
  { x: 476.16267149905616, y: -899.6633781746641 },
  { x: 470.2514007341815, y: -895.9187724740477 },
  { x: 464.41104171425104, y: -892.0413866862655 },
  { x: 458.6722334168153, y: -888.0228132213233 },
  { x: 453.07191709894687, y: -883.8389964355156 },
  { x: 447.4700394285319, y: -879.6315368519281 },
  { x: 441.79632011484864, y: -875.5389333484127 },
  { x: 436.00514153949916, y: -871.6167629100382 },
  { x: 430.00837774574757, y: -868.0116458833218 },
  { x: 423.6984956350643, y: -864.984443066176 },
  { x: 417.01446374409716, y: -862.9073438421474 },
  { x: 410.07258916902356, y: -862.0521710761823 },
  { x: 403.0943245442759, y: -862.297067051346 },
  { x: 396.16085205972195, y: -863.281253606081 },
  { x: 389.3142460156232, y: -864.6865033768117 },
  { x: 382.50038281539673, y: -866.3230368447912 },
  { x: 375.72024082607277, y: -868.0711897646215 },
  { x: 368.9105551183311, y: -869.7215038748982 },
  { x: 362.0667502477445, y: -871.1849222849996 },
  { x: 355.18786131136585, y: -872.3862263660412 },
  { x: 348.22213842168276, y: -873.208307284367 },
  { x: 341.23562955856323, y: -873.420521736145 },
  { x: 334.28918294992764, y: -872.581260696752 },
  { x: 327.89949655950477, y: -869.8401864170155 },
  { x: 323.47060346603394, y: -864.5293397903442 },
  { x: 321.7311122044921, y: -857.779858365655 },
  { x: 321.73411820419096, y: -850.7913935163269 },
  { x: 322.6770971108199, y: -843.8618135394354 },
  { x: 324.16862946679794, y: -837.0243022892937 },
  { x: 326.01197648038215, y: -830.2634004078282 },
  { x: 328.02044822182506, y: -823.5656502665952 },
  { x: 329.9278525710106, y: -816.8305967450142 },
  { x: 331.5828438689932, y: -810.019400623627 },
  { x: 332.49051947984844, y: -803.0894962428138 },
  { x: 330.355655670166, y: -796.6652946472168 },
  { x: 323.8552252650261, y: -794.3387585282326 },
  { x: 316.8774719238281, y: -794.0022888183594 },
  { x: 309.8793545362714, y: -793.7508506223385 },
  { x: 303.1089895494806, y: -792.0616321189736 },
  { x: 297.27790105342865, y: -788.282273888588 },
  { x: 293.59490244532935, y: -782.4062316410709 },
  { x: 292.494164298987, y: -775.5137691425625 },
  { x: 293.341010688775, y: -768.5894483491138 },
  { x: 295.4673907288816, y: -761.9241810648236 },
  { x: 298.46572971343994, y: -755.593337059021 },
  { x: 302.09033228145563, y: -749.6060395621171 },
  { x: 306.1922134994238, y: -743.9428225895681 },
  { x: 310.6801295549194, y: -738.5761020383397 },
  { x: 315.48863377944144, y: -733.4878107390432 },
  { x: 320.4467793414369, y: -728.5538026727736 },
  { x: 325.0749260064913, y: -723.3141967388801 },
  { x: 329.40826429413573, y: -717.7940540261916 },
  { x: 333.4635372081975, y: -712.0912450372125 },
  { x: 337.27698813604366, y: -706.238644384488 },
  { x: 340.8859676197171, y: -700.2317276299 },
  { x: 344.2808322291676, y: -694.1207897913991 },
  { x: 347.48381145950407, y: -687.8849811814725 },
  { x: 350.48076062928885, y: -681.5556365661323 },
  { x: 353.26422109537816, y: -675.1405253639095 },
  { x: 355.82817262841854, y: -668.6256329067983 },
  { x: 358.14744494589104, y: -662.021170192922 },
  { x: 360.17593942126405, y: -655.3213041341132 },
  { x: 362.0787178017199, y: -648.5876196911559 },
  { x: 364.253741555789, y: -641.9266688524658 },
  { x: 366.6928002963177, y: -635.3740910374272 },
  { x: 369.39562694513006, y: -628.9265912409901 },
  { x: 372.3597631297889, y: -622.5806047374645 },
  { x: 375.5676338672638, y: -616.3563458323479 },
  { x: 379.00192560168216, y: -610.2620459479367 },
  { x: 382.6556605952792, y: -604.2830745746614 },
  { x: 386.5054508424364, y: -598.4296469442779 },
  { x: 390.52325507998466, y: -592.7133411243558 },
  { x: 394.7128676006687, y: -587.1000301622989 },
  { x: 399.0435477308929, y: -581.6043858649209 },
  { x: 403.51059331025317, y: -576.2069663734965 },
  { x: 408.08985793736065, y: -570.9135553208034 },
  { x: 412.7774027566775, y: -565.7071608944243 },
  { x: 417.54781775636366, y: -560.5962008618662 },
  { x: 422.4066166430712, y: -555.5634553432465 },
  { x: 427.3020389416779, y: -550.5638751233928 },
  { x: 432.19795837439597, y: -545.5637871921062 },
  { x: 437.1007624377635, y: -540.5566681486671 },
  { x: 441.9998799456116, y: -535.5533140980988 },
  { x: 446.8973486211289, y: -530.5516439614003 },
  { x: 451.7923670092132, y: -525.5524762459099 },
  { x: 456.6974803110643, y: -520.5429988312535 },
  { x: 461.5879460826982, y: -515.5484805963933 },
  { x: 466.48945774137974, y: -510.5426814556122 },
  { x: 463.52635408448987, y: -507.1774035159033 },
  { x: 457.03753038612194, y: -504.53380867582746 },
  { x: 450.55718639306724, y: -501.8936685305089 },
  { x: 444.0709562357515, y: -499.25113031826913 },
  { x: 437.5394162591547, y: -496.739197361283 },
  { x: 430.7863732801925, y: -494.90200489886047 },
  { x: 423.95669014562736, y: -493.41328541024996 },
  { x: 417.07517205015756, y: -492.11782707006205 },
  { x: 410.1598489120079, y: -490.95465463346045 },
  { x: 403.2473788560892, y: -489.89585849999276 },
  { x: 396.3109568206128, y: -488.9171410071431 },
  { x: 389.3754443847174, y: -488.00923738088204 },
  { x: 382.4372863738972, y: -487.1628539260564 },
  { x: 375.47140538692474, y: -486.36918753385544 },
  { x: 368.5071402043104, y: -485.62760796397924 },
  { x: 361.54941697977483, y: -484.93561577331275 },
  { x: 354.5786956029442, y: -484.28943195569263 },
  { x: 347.60667368982104, y: -483.6892205997283 },
  { x: 340.62425751956107, y: -483.133974442846 },
  { x: 333.638946337418, y: -482.624751749956 },
  { x: 326.65761606160595, y: -482.16303359369886 },
  { x: 319.6701819093396, y: -481.78450692847764 },
  { x: 312.6722760057605, y: -481.45308411199085 },
  { x: 305.6800395288192, y: -481.1505843300729 },
  { x: 298.68434831918375, y: -480.8875838707622 },
  { x: 291.69325763615734, y: -480.67800885294264 },
  { x: 284.69950656592846, y: -480.53848634660244 },
  { x: 277.69622902572155, y: -480.48982821404934 },
  { x: 270.6881676360608, y: -480.55762283972217 },
  { x: 263.6868490329398, y: -480.7718556924847 },
  { x: 256.7177310343941, y: -481.1652863298332 },
  { x: 249.7362667825978, y: -481.77860075360286 },
  { x: 242.7987978272431, y: -482.64629568104283 },
  { x: 235.88708881366574, y: -483.80664804374237 },
  { x: 229.05187319309698, y: -485.27882358806164 },
  { x: 222.27845993372102, y: -487.0805086891669 },
  { x: 215.60858810837453, y: -489.19928351327326 },
  { x: 209.03599809925072, y: -491.6189552338328 },
  { x: 202.5855873216351, y: -494.29911945943604 },
  { x: 196.21330392696473, y: -497.2204909091779 },
  { x: 189.95341042426298, y: -500.3270949019061 },
  { x: 183.75619186432368, y: -503.60414950202494 },
  { x: 177.6376062282675, y: -507.00781045334634 },
  { x: 171.57620102004148, y: -510.5182814609725 },
  { x: 165.58038393818424, y: -514.1035101937887 },
  { x: 159.61042080770358, y: -517.7648085845726 },
  { x: 153.66540146254192, y: -521.4846413423693 },
  { x: 147.76097734236964, y: -525.2378185449011 },
  { x: 141.8853738509897, y: -529.0190128996146 },
  { x: 136.00873208767734, y: -532.8372938155662 },
  { x: 130.1459496297507, y: -536.6747134516577 },
  { x: 124.31372285776933, y: -540.5133168326779 },
  { x: 118.45866390675656, y: -544.382615755283 },
  { x: 112.63650317439169, y: -548.2404585178301 },
  { x: 106.76280238760228, y: -552.0767374254356 },
  { x: 100.86485136006559, y: -555.8220988210123 },
  { x: 94.90044475712602, y: -559.4764498226832 },
  { x: 88.85133787349332, y: -563.0122921497095 },
  { x: 82.70705704631655, y: -566.3799153288965 },
  { x: 76.44178774300963, y: -569.50844793953 },
  { x: 70.0161843267997, y: -572.2766288321291 },
  { x: 63.374377348212874, y: -574.4471729978395 },
  { x: 56.45537226762099, y: -575.4668230445532 },
  { x: 49.72241740791651, y: -573.914665063523 },
  { x: 45.27634892810602, y: -568.6624629322905 },
  { x: 43.632375680841506, y: -561.8792588058859 },
  { x: 43.43942425896239, y: -554.8924380562094 },
  { x: 43.995554558816366, y: -547.9128447535913 },
  { x: 44.997031865028475, y: -540.9879443964855 },
  { x: 46.293534826303585, y: -534.1056837108008 },
  { x: 47.795057165642675, y: -527.2779748465505 },
  { x: 49.45259722094829, y: -520.4762472214111 },
  { x: 51.22636797397695, y: -513.7118660370738 },
  { x: 53.09466441778932, y: -506.9672152681742 },
  { x: 55.037350701988544, y: -500.24560828524045 },
  { x: 56.98778908629902, y: -493.51418569113594 },
  { x: 58.330466540530324, y: -486.6528331739828 },
  { x: 53.84817465953529, y: -483.55130063463 },
  { x: 47.390676309587434, y: -486.22071427002084 },
  { x: 41.14758247323334, y: -489.3974431110546 },
  { x: 34.919126564927865, y: -492.5838219145953 },
  { x: 28.464241155597847, y: -495.28782631250215 },
  { x: 21.723737716674805, y: -497.09640979766846 },
  { x: 14.760181158781052, y: -497.0537887364626 },
  { x: 8.880526121647563, y: -493.49370946912677 },
  { x: 5.86421692132717, y: -487.23187517761835 },
  { x: 4.8558981460519135, y: -480.32507289084606 },
  { x: 4.883653579454403, y: -473.32401320085046 },
  { x: 5.511549185961485, y: -466.3511794079095 },
  { x: 6.5280951840177295, y: -459.4238161269568 },
  { x: 7.815116579025926, y: -452.552932895258 },
  { x: 9.306594056592985, y: -445.71178121150524 },
  { x: 10.954058014009206, y: -438.9091474006382 },
  { x: 12.725825538182107, y: -432.13981461516596 },
  { x: 14.600346911989618, y: -425.3949400023266 },
  { x: 16.586438913578604, y: -418.69099318530243 },
  { x: 18.6682555643697, y: -411.99879701790064 },
  { x: 20.828809880418703, y: -405.34051592007745 },
  { x: 23.06900221252363, y: -398.70532880629435 },
  { x: 25.380638122558594, y: -392.1100196838379 },
  { x: 27.77031796076335, y: -385.5295142180985 },
  { x: 30.23550256398812, y: -378.96640089280663 },
  { x: 32.76267147064209, y: -372.4511818885803 },
  { x: 35.36538254147081, y: -365.94438599486625 },
  { x: 38.03589455783367, y: -359.46237517148256 },
  { x: 40.76582377732848, y: -353.0214790653408 },
  { x: 43.55853690236472, y: -346.6099544788358 },
  { x: 46.418091818634366, y: -340.2160114672986 },
  { x: 49.33622177233701, y: -333.8558033745121 },
  { x: 52.31735640930128, y: -327.51747392133984 },
  { x: 55.352975292131305, y: -321.21706036198884 },
  { x: 58.44786564127253, y: -314.94266053702336 },
  { x: 61.60741795518334, y: -308.68245118100276 },
  { x: 64.81595010547471, y: -302.4662097477101 },
  { x: 68.07874597680211, y: -296.2820232852371 },
  { x: 71.40165548304367, y: -290.11811373618343 },
  { x: 74.77583864203552, y: -283.990248791064 },
  { x: 78.20742770984316, y: -277.88671776244814 },
  { x: 81.69520421882044, y: -271.8095920453343 },
  { x: 85.2299636528005, y: -265.77444136662416 },
  { x: 88.81823608092964, y: -259.7696976484731 },
  { x: 92.46703177854442, y: -253.78406567406614 },
  { x: 96.1671464985011, y: -247.83311532316839 },
  { x: 99.9089170198713, y: -241.93210629902023 },
  { x: 103.71645913485554, y: -236.0435450718942 },
  { x: 107.56322011596103, y: -230.20906796151462 },
  { x: 111.4739480552089, y: -224.39174492230813 },
  { x: 115.43030279637196, y: -218.61987376430739 },
  { x: 119.44000841657771, y: -212.88285940285255 },
  { x: 123.502114862913, y: -207.18314070133965 },
  { x: 127.61565611220794, y: -201.52318550320888 },
  { x: 131.8410924566922, y: -195.9473039192328 },
  { x: 136.13827502812796, y: -190.42536402031715 },
  { x: 140.5083362406997, y: -184.94820951595534 },
  { x: 144.94300973584208, y: -179.52950050584414 },
  { x: 149.4432669253604, y: -174.17090446367317 },
  { x: 154.01009400177827, y: -168.87409547373863 },
  { x: 158.6541879734851, y: -163.62995260865605 },
  { x: 163.36703456070993, y: -158.45137112526757 },
  { x: 168.14966863393784, y: -153.3400474190712 },
  { x: 173.003140550122, y: -148.29768416682168 },
  { x: 177.9285163208563, y: -143.32599024804992 },
  { x: 182.92687778158395, y: -138.42668066609892 },
  { x: 187.99932276184222, y: -133.6014764686763 },
  { x: 193.1469652565429, y: -128.8521046679234 },
  { x: 198.3605457277008, y: -124.18944435969752 },
  { x: 203.66189874159863, y: -119.59673063017726 },
  { x: 209.01016451325268, y: -115.11123537365347 },
  { x: 214.448351114057, y: -110.69875065330416 },
  { x: 219.95640309584974, y: -106.37826099617291 },
  { x: 225.53523853426418, y: -102.15088091217035 },
  { x: 231.18578587471893, y: -98.01772607565181 },
  { x: 236.90898401161212, y: -93.97991328846001 },
  { x: 242.70578236782262, y: -90.03856044282452 },
  { x: 248.55463103005604, y: -86.20924296720477 },
  { x: 254.4786052976906, y: -82.47776286619228 },
  { x: 260.46722202130286, y: -78.85203658959725 },
  { x: 266.5095966611136, y: -75.33912026094526 },
  { x: 272.6294280997748, y: -71.9261028459604 },
  { x: 278.8041751786168, y: -68.62640775257569 },
  { x: 285.0342122879068, y: -65.43986026533307 },
  { x: 291.31991381791227, y: -62.36628566877448 },
  { x: 297.6737413279068, y: -59.39999818725414 },
  { x: 304.0598077011382, y: -56.55735628587718 },
  { x: 310.5024463576767, y: -53.82673678324386 },
  { x: 317.0020295605773, y: -51.20796595659522 },
  { x: 323.53388937201817, y: -48.71019148349296 },
  { x: 330.12299898508536, y: -46.32307259029585 },
  { x: 336.7442472403102, y: -44.05491715016319 },
  { x: 343.3973386614, y: -41.90429609211401 },
  { x: 350.10789233373293, y: -39.8621421909254 },
  { x: 356.8239819055441, y: -37.94275049943394 },
  { x: 363.59735868319717, y: -36.12983438257447 },
  { x: 370.3751979199153, y: -34.43605088391428 },
  { x: 377.2101289589921, y: -32.84677688790339 },
  { x: 384.0484250257275, y: -31.373049134005896 },
  { x: 390.9163393308754, y: -30.00708744154872 },
  { x: 397.7860506530749, y: -28.752330621709234 },
  { x: 404.69809999912786, y: -27.599632142497484 },
  { x: 411.6245433467502, y: -26.552255479671913 },
  { x: 418.56468866113573, y: -25.608281209133565 },
  { x: 425.50365034332015, y: -24.767421472627433 },
  { x: 432.4689907891934, y: -24.024365023151404 },
  { x: 439.445926293846, y: -23.379049619233456 },
  { x: 446.41922151766084, y: -22.830662193196986 },
  { x: 453.4024602576868, y: -22.375943565788788 },
  { x: 460.3949218109085, y: -22.013073243816933 },
  { x: 467.3810246176272, y: -21.74073081920298 },
  { x: 474.3746747404348, y: -21.556275693177668 },
  { x: 481.3751397958288, y: -21.457937851026827 },
  { x: 488.3816837261171, y: -21.44396250093328 },
  { x: 495.37826870416757, y: -21.512371626333334 },
  { x: 502.3792302429938, y: -21.661324831235106 },
  { x: 509.3683054116718, y: -21.8885263885295 },
  { x: 516.3756710849123, y: -22.193292543319103 },
  { x: 523.3536969333694, y: -22.571659620127633 },
  { x: 530.3423695775923, y: -23.026594950949374 },
  { x: 537.3217456255747, y: -23.593072908028347 },
  { x: 544.2967263789797, y: -24.207416405833328 },
  { x: 551.2642287425406, y: -24.872126570347973 },
  { x: 558.2323384725896, y: -25.590983666237662 },
  { x: 565.1758289711142, y: -26.364372844089303 },
  { x: 572.1353212445974, y: -27.20020144339651 },
  { x: 579.0749138003298, y: -28.097812236957424 },
  { x: 586.0024153847189, y: -29.061706261016298 },
  { x: 592.9250519811212, y: -30.096822084870155 },
  { x: 599.8494836517784, y: -31.20856639907106 },
  { x: 606.732670414578, y: -32.39408163686471 },
  { x: 613.631097172638, y: -33.66765292237437 },
  { x: 620.4834459725498, y: -35.02266435951947 },
  { x: 627.3444761689461, y: -36.47481494213389 },
  { x: 634.1736093873624, y: -38.02094293713162 },
  { x: 640.9690919977766, y: -39.665411909518525 },
  { x: 647.7470016479492, y: -41.417441844940186 },
  { x: 654.4877302796522, y: -43.27743837799608 },
  { x: 661.2071672395978, y: -45.25540631358854 },
  { x: 667.8868450797927, y: -47.35166420007704 },
  { x: 674.5261683130338, y: -49.57140311015132 },
  { x: 681.1247968673706, y: -51.91998356580734 },
  { x: 687.666883552829, y: -54.39678287043921 },
  { x: 694.1534795942425, y: -57.00671166123175 },
  { x: 700.6010862220137, y: -59.76151330023458 },
  { x: 706.980534831262, y: -62.653262662353654 },
  { x: 713.2797008656489, y: -65.67918271159033 },
  { x: 719.5165349524177, y: -68.85053889037044 },
  { x: 725.6939716714369, y: -72.1720031275097 },
  { x: 731.773165429011, y: -75.62386336515192 },
  { x: 737.77314404957, y: -79.21666684455704 },
  { x: 743.6985564640308, y: -82.95343481123086 },
  { x: 749.5407236197207, y: -86.8281100939621 },
  { x: 755.2785080151916, y: -90.82392833305016 },
  { x: 760.9312578522549, y: -94.95078077984112 },
  { x: 766.4917424562191, y: -99.19964956134595 },
  { x: 771.9659826969109, y: -103.57057772234816 },
  { x: 777.3471910494845, y: -108.05279540565971 },
  { x: 782.6288748295228, y: -112.63412759219977 },
  { x: 787.8296226851126, y: -117.32386414791586 },
  { x: 792.942659145283, y: -122.10902097354142 },
  { x: 797.961295316898, y: -126.97518378248606 },
  { x: 802.9100293177196, y: -131.93714958292068 },
  { x: 807.7734706059152, y: -136.97333577283393 },
  { x: 812.5442378194814, y: -142.0822841475681 },
  { x: 817.2421377523424, y: -147.2942349071527 },
  { x: 821.8238737208503, y: -152.57011455723296 },
  { x: 826.3162006150262, y: -157.95019205745552 },
  { x: 830.6937545324909, y: -163.41528300277423 },
  { x: 834.9486048898905, y: -168.96606857599204 },
  { x: 839.0798233812733, y: -174.6132375850285 },
  { x: 843.0782134283912, y: -180.3575964876746 },
  { x: 846.9344350016761, y: -186.20000243432537 },
  { x: 850.6390047395835, y: -192.14136505813804 },
  { x: 854.1766012707187, y: -198.17262101744632 },
  { x: 857.5492131156841, y: -204.31482673901178 },
  { x: 860.7359167439802, y: -210.54898510584712 },
  { x: 863.727792757383, y: -216.8761719782799 },
  { x: 866.5158093417006, y: -223.29751719432602 },
  { x: 869.0908223695822, y: -229.81420611182898 },
  { x: 871.4367495765764, y: -236.40717028152721 },
  { x: 873.5465976733394, y: -243.07755484942754 },
  { x: 875.4133110085784, y: -249.82654840448254 },
  { x: 877.0253324356017, y: -256.6349095200567 },
  { x: 878.3779060778077, y: -263.50373658844114 },
  { x: 879.463423480164, y: -270.41356113658844 },
  { x: 880.2795125364064, y: -277.36534613191907 },
  { x: 880.8225895618828, y: -284.3393408364525 },
  { x: 881.0927067698922, y: -291.3363284496754 },
  { x: 881.0903283083444, y: -298.33622310162355 },
  { x: 880.8179279322842, y: -305.3395865565824 },
  { x: 880.2820019365047, y: -312.3049314702964 },
  { x: 879.4841662355611, y: -319.2745194857562 },
  { x: 878.4376444703564, y: -326.1853397059815 },
  { x: 877.1475362653471, y: -333.0584192871104 },
  { x: 875.620887956582, y: -339.89373507443815 },
  { x: 873.8705815219121, y: -346.6698152247616 },
  { x: 871.9057886954015, y: -353.3863235352419 },
  { x: 869.7355627893055, y: -360.0428876931139 },
  { x: 867.3688387965522, y: -366.63910081291397 },
  { x: 864.8232795725344, y: -373.1527676732512 },
  { x: 862.1001594439149, y: -379.60499938577414 },
  { x: 859.2182832539754, y: -385.97336462986027 },
  { x: 856.1772094209755, y: -392.27908536756695 },
  { x: 852.9852246549501, y: -398.52160166468343 },
  { x: 849.6627834303533, y: -404.6781385367442 },
  { x: 846.2069668926335, y: -410.77010101457995 },
  { x: 842.6324732831898, y: -416.78567433809224 },
  { x: 838.9409331024945, y: -422.7353002149757 },
  { x: 835.1474257684752, y: -428.6070354908768 },
  { x: 831.2449503490642, y: -434.42268672669763 },
  { x: 827.248038828373, y: -440.17031997442245 },
  { x: 823.1556613872617, y: -445.86061497057926 },
  { x: 818.9827512158081, y: -451.4815197782591 },
  { x: 814.7363931679592, y: -457.03228384832437 },
  { x: 810.4051482238103, y: -462.5352132957121 },
  { x: 806.0036673291518, y: -467.97821898049665 },
  { x: 801.5281199432859, y: -473.3722697830933 },
  { x: 797.0069289813837, y: -478.69974651500524 },
  { x: 792.4914091949922, y: -484.04505734339364 },
  { x: 788.0004594878537, y: -489.4202398914913 },
  { x: 783.5656213983893, y: -494.8311182484031 },
  { x: 779.2166470398515, y: -500.31624087317323 },
  { x: 775.0281386598945, y: -505.92180170863867 },
  { x: 771.1471975436434, y: -511.74888475146145 },
  { x: 767.9599401997402, y: -517.9787077205256 },
  { x: 766.5709488987923, y: -524.7901366353035 },
  { x: 768.4956578157144, y: -531.451907214825 },
  { x: 772.5735466297483, y: -537.1236743986374 },
  { x: 777.2742216274783, y: -542.3096045078564 },
  { x: 782.1396260280162, y: -547.3300196090713 },
  { x: 787.6291623572761, y: -551.6694984168716 },
  { x: 793.8365597606171, y: -554.8724724088097 },
  { x: 800.5563354688056, y: -556.8138195953943 },
  { x: 807.4803115453105, y: -557.7635641017696 },
  { x: 814.472323743481, y: -558.0683817711397 },
  { x: 821.4714527380711, y: -557.9683611716173 },
  { x: 828.46093486459, y: -557.6109479024308 },
  { x: 835.4514648246113, y: -557.0842666161479 },
  { x: 842.4137482943224, y: -556.4463263737434 },
  { x: 849.3788381936356, y: -555.7305110316247 },
  { x: 856.3334011659026, y: -554.9649353772402 },
  { x: 863.301245765877, y: -554.2484568466898 },
  { x: 870.2771491824096, y: -553.573956844135 },
  { x: 877.2494774864754, y: -552.965971761616 },
  { x: 884.2315257713199, y: -552.4599115997553 },
  { x: 891.2056581075449, y: -552.1164287095598 },
  { x: 898.2212481847528, y: -552.0375852017605 },
  { x: 905.1962334886193, y: -552.4138980358839 },
  { x: 912.0927307590755, y: -553.5992183622147 },
  { x: 918.6025827420963, y: -556.1270978756074 },
  { x: 924.2359054004628, y: -560.2531090192788 },
  { x: 928.9201245307922, y: -565.4527807235718 },
  { x: 933.0614270717633, y: -571.0819874805165 },
  { x: 937.0310213958146, y: -576.8465929282829 },
  { x: 940.364512860775, y: -583.0044388771057 },
  { x: 942.6409197533503, y: -589.6060013994575 },
  { x: 943.3608584163012, y: -596.5467912508175 },
  { x: 942.3336596488953, y: -603.465991973877 },
  { x: 939.9404714290285, y: -610.0300817182288 },
  { x: 936.8792463988066, y: -616.3137086480856 },
  { x: 934.5585232693702, y: -622.9071860108525 },
  { x: 933.8667677913327, y: -629.8462135961745 },
  { x: 935.456898631528, y: -636.6390225384384 },
  { x: 938.8746925592422, y: -642.7403908967972 },
  { x: 943.258669699775, y: -648.1863498168532 },
  { x: 947.8024346448074, y: -653.5126406232885 },
  { x: 951.7618545286532, y: -659.2745809605985 },
  { x: 955.0131225585938, y: -665.4647827148438 },
  { x: 957.426069696201, y: -672.0195134121459 },
  { x: 958.8903598480101, y: -678.8621042719751 },
  { x: 959.3181400557514, y: -685.8463748076465 },
  { x: 958.6803680423182, y: -692.8192666030955 },
  { x: 957.013312160765, y: -699.6095389738039 },
  { x: 954.403998474445, y: -706.0932740160206 },
  { x: 950.9701172872738, y: -712.1784073759627 },
  { x: 946.8289004696999, y: -717.8229851985816 },
  { x: 942.1025391443691, y: -722.9968033066543 },
  { x: 936.9003756762249, y: -727.6688362960704 },
  { x: 931.3688010806218, y: -731.958290334791 },
  { x: 925.3434014478698, y: -735.5112202428281 },
  { x: 918.6807264788076, y: -737.5284390337765 },
  { x: 911.6944770812988, y: -737.4880828857422 },
  { x: 904.8818743784213, y: -735.9589228159748 },
  { x: 898.2505943672732, y: -733.681898843497 },
  { x: 891.8171884743497, y: -730.9431927968981 },
  { x: 885.491993281059, y: -727.9665615578415 },
  { x: 879.0627212285763, y: -725.1800329759863 },
  { x: 872.4757723979419, y: -722.8316264567111 },
  { x: 865.6121143708006, y: -721.5244135329267 },
  { x: 858.8105810722336, y: -722.8155949661741 },
  { x: 853.723633695743, y: -727.5119523175672 },
  { x: 850.4202362969518, y: -733.6752498773858 },
  { x: 847.9996309876442, y: -740.2469914779067 },
  { x: 846.0086856086418, y: -746.9484088725494 },
  { x: 844.2378760246793, y: -753.7147948128259 },
  { x: 842.5816909071291, y: -760.5297994988359 },
  { x: 840.8576376862984, y: -767.3062056108356 },
  { x: 838.8825328350067, y: -774.017490029335 },
  { x: 836.6900911871899, y: -780.6673832518259 },
  { x: 834.2911872304976, y: -787.237840725109 },
  { x: 831.6887516132483, y: -793.7335551284814 },
  { x: 828.8842297570664, y: -800.1588545014674 },
  { x: 825.8936447203159, y: -806.4850727766752 },
  { x: 822.7130255241063, y: -812.7274939178897 },
  { x: 819.3596116345652, y: -818.8581482595218 },
  { x: 815.8217662191864, y: -824.9022109974007 },
  { x: 812.1104297041311, y: -830.8421104729932 },
  { x: 808.2377405548687, y: -836.6609943250842 },
  { x: 804.1884678209681, y: -842.3818798575485 },
  { x: 799.9810474553306, y: -847.9775157699805 },
  { x: 795.6208030578637, y: -853.4409813825005 },
  { x: 791.0972652435303, y: -858.7834672927856 },
  { x: 786.4143095673062, y: -863.9965009789448 },
  { x: 781.5926623530686, y: -869.0544130560011 },
  { x: 776.6033734550583, y: -873.9830955016951 },
  { x: 771.4845427726395, y: -878.7401511201169 },
  { x: 766.2056398517452, y: -883.3488842800725 },
  { x: 760.7882736042448, y: -887.783583659937 },
  { x: 755.2369708943515, y: -892.0348592254923 },
  { x: 749.5371924537394, y: -896.1063796890412 },
  { x: 743.7121819891036, y: -899.9737506639212 },
  { x: 737.7470134801915, y: -903.6387321552211 },
  { x: 731.6458036489785, y: -907.0888205822557 },
  { x: 725.4333439260372, y: -910.3010870907165 },
  { x: 719.0808898517153, y: -913.2572575237064 },
  { x: 712.646728515625, y: -915.9912109375 },
  { x: 706.117116708192, y: -918.5352931511588 },
  { x: 699.5349568180973, y: -920.8854933283292 },
  { x: 692.8713989768439, y: -923.0627044236171 },
  { x: 686.1669949782608, y: -925.0623669772976 },
  { x: 679.4132396688074, y: -926.8950371086248 },
  { x: 672.6122054648101, y: -928.5661126909517 },
  { x: 665.7776341115857, y: -930.0772318186873 },
  { x: 658.9100387912642, y: -931.4324267034963 },
  { x: 652.0092246796503, y: -932.634624204853 },
  { x: 645.0874565526774, y: -933.6838215271637 },
  { x: 638.1438972741544, y: -934.5815570593913 },
  { x: 631.1905214342132, y: -935.3269904794215 },
  { x: 624.2133852615225, y: -935.9212036755052 },
  { x: 617.2246899121674, y: -936.3616214501671 },
  { x: 610.236908233177, y: -936.6456431496554 },
  { x: 603.237235440989, y: -936.7708050902002 },
  { x: 596.2393436362308, y: -936.7326587521893 },
  { x: 589.2449398462052, y: -936.526165753653 },
  { x: 582.2569449369712, y: -936.1449851892176 },
  { x: 575.2797665788548, y: -935.5814251860065 },
  { x: 568.3195907313948, y: -934.8263878347279 },
  { x: 561.3846950525246, y: -933.869307257014 },
  { x: 554.4857877892046, y: -932.6980805593848 },
  { x: 547.625230329227, y: -931.296510038922 },
  { x: 540.8207647198835, y: -929.6481203232024 },
  { x: 534.0835863626708, y: -927.7313862977899 },
];