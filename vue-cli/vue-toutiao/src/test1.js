!function () {
  function r() {
    this.bf_P = this.Fbf_P(), this.bf_S0 = this.Fbf_S0(), this.bf_S1 = this.Fbf_S1(), this.bf_S2 = this.Fbf_S2(), this.bf_S3 = this.Fbf_S3(), this.escape = function (r) {
      for (var t = "", e = 0; e < r.length; e++) {
        var o = r.charCodeAt(e), n = Math.floor(o / 16), i = o % 16;
        n += 10 > n ? 48 : 55, i += 10 > i ? 48 : 55, t += String.fromCharCode(n) + String.fromCharCode(i)
      }
      return t
    }, this.wordbyte0 = function (r) {
      return Math.floor(Math.floor(Math.floor(r / 256) / 256) / 256) % 256
    }, this.wordbyte1 = function (r) {
      return Math.floor(Math.floor(r / 256) / 256) % 256
    }, this.wordbyte2 = function (r) {
      return Math.floor(r / 256) % 256
    }, this.wordbyte3 = function (r) {
      return r % 256
    }, this.xor = function (r, t) {
      var e = r ^ t;
      return 0 > e && (e = 4294967296 + e), e
    };
    var r = "4055AOI1944sa95";
    this.key = r.length > 56 ? r.substr(0, 56) : r;
    for (var t = 0, e = 0; 18 > e; ++e) {
      var o = 256 * (256 * (256 * this.key.charCodeAt(t % this.key.length) + this.key.charCodeAt((t + 1) % this.key.length)) + this.key.charCodeAt((t + 2) % this.key.length)) + this.key.charCodeAt((t + 3) % this.key.length);
      this.bf_P[e] = this.xor(this.bf_P[e], o), t = (t + 4) % this.key.length
    }
    this.xl_par = 0, this.xr_par = 0;
    for (var e = 0; 18 > e; e += 2) this.encipher(), this.bf_P[e] = this.xl_par, this.bf_P[e + 1] = this.xr_par;
    for (t = 0; 256 > t; t += 2) this.encipher(), this.bf_S0[t] = this.xl_par, this.bf_S0[t + 1] = this.xr_par;
    for (t = 0; 256 > t; t += 2) this.encipher(), this.bf_S1[t] = this.xl_par, this.bf_S1[t + 1] = this.xr_par;
    for (t = 0; 256 > t; t += 2) this.encipher(), this.bf_S2[t] = this.xl_par, this.bf_S2[t + 1] = this.xr_par;
    for (t = 0; 256 > t; t += 2) this.encipher(), this.bf_S3[t] = this.xl_par, this.bf_S3[t + 1] = this.xr_par;
    this.unescape = function (r) {
      var t = "";
      for (e = 0; e < r.length; e++) {
        var o = r.charCodeAt(e++), n = r.charCodeAt(e);
        o -= 58 > o ? 48 : o > 96 ? 87 : 55, n -= 58 > n ? 48 : n > 96 ? 87 : 55, t += String.fromCharCode(16 * o + n)
      }
      return t
    }
  }

  function t() {
    try {
      var r = o(), t = n.lingshao(r.cls);
      e.set("isg", t, 30)
    } catch (i) {
    }
  }

  r.prototype.Fbf_P = function () {
    return [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731]
  }, r.prototype.Fbf_S0 = function () {
    return [3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946]
  }, r.prototype.Fbf_S1 = function () {
    return [1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055]
  }, r.prototype.Fbf_S2 = function () {
    return [3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504]
  }, r.prototype.Fbf_S3 = function () {
    return [976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462]
  }, r.prototype.lingshao = function (r) {
    for (var t = 0; t < r.length % 8; t++) r += "0";
    for (var e = "", t = 0; t < r.length; t += 8) {
      var o = r.substr(t, 4), n = r.substr(t + 4, 4),
        i = o.charCodeAt(3) | o.charCodeAt(2) << 8 | o.charCodeAt(1) << 16 | o.charCodeAt(0) << 24;
      0 > i && (i = 4294967296 + i);
      var a = n.charCodeAt(3) | n.charCodeAt(2) << 8 | n.charCodeAt(1) << 16 | n.charCodeAt(0) << 24;
      0 > a && (a = 4294967296 + a), this.xl_par = i, this.xr_par = a, this.encipher(), e += this.wordescape(this.xl_par) + this.wordescape(this.xr_par)
    }
    return e
  }, r.prototype.wordescape = function (r) {
    for (var t = "", e = new Array(this.wordbyte3(r), this.wordbyte2(r), this.wordbyte1(r), this.wordbyte0(r)), o = 3; o >= 0; o--) {
      var n = Math.floor(e[o] / 16), i = e[o] % 16;
      n += 10 > n ? 48 : 55, i += 10 > i ? 48 : 55, t += String.fromCharCode(n) + String.fromCharCode(i)
    }
    return t
  }, r.prototype.wordunescape = function (r) {
    for (var t = 0, e = 6; e >= 0; e -= 2) {
      var o = r.charCodeAt(e), n = r.charCodeAt(e + 1);
      o -= 58 > o ? 48 : 55, n -= 58 > n ? 48 : 55, t = 256 * t + (16 * o + n)
    }
    return t
  }, r.prototype.round = function (r, t, e) {
    var o = this;
    return o.xor(r, o.xor(o.xor(o.bf_S0[o.wordbyte0(t)] + o.bf_S1[o.wordbyte1(t)], o.bf_S2[o.wordbyte2(t)]) + o.bf_S3[o.wordbyte3(t)], o.bf_P[e]))
  }, r.prototype.encipher = function () {
    var r = this, t = r.xl_par, e = r.xr_par;
    t = r.xor(t, r.bf_P[0]), e = r.round(e, t, 1), t = r.round(t, e, 2), e = r.round(e, t, 3), t = r.round(t, e, 4), e = r.round(e, t, 5), t = r.round(t, e, 6), e = r.round(e, t, 7), t = r.round(t, e, 8), e = r.round(e, t, 9), t = r.round(t, e, 10), e = r.round(e, t, 11), t = r.round(t, e, 12), e = r.round(e, t, 13), t = r.round(t, e, 14), e = r.round(e, t, 15), t = r.round(t, e, 16), e = r.xor(e, r.bf_P[17]), r.xl_par = e, r.xr_par = t
  }, r.prototype.decipher = function () {
    var r = this, t = r.xl_par, e = r.xr_par;
    t = r.xor(t, r.bf_P[17]), e = r.round(e, t, 16), t = r.round(t, e, 15), e = r.round(e, t, 14), t = r.round(t, e, 13), e = r.round(e, t, 12), t = r.round(t, e, 11), e = r.round(e, t, 10), t = r.round(t, e, 9), e = r.round(e, t, 8), t = r.round(t, e, 7), e = r.round(e, t, 6), t = r.round(t, e, 5), e = r.round(e, t, 4), t = r.round(t, e, 3), e = r.round(e, t, 2), t = r.round(t, e, 1), e = r.xor(e, r.bf_P[0]), r.xl_par = e, r.xr_par = t
  };
  var e = {
    decode: function (r) {
      return decodeURIComponent(r.replace(/\+/g, " "))
    }, isNotEmptyString: function (r) {
      return "string" == typeof r && "" !== r
    }, get: function (r) {
      var t, e, o = this;
      return o.isNotEmptyString(r) && (e = String(document.cookie).match(new RegExp("(?:^| )" + r + "(?:(?:=([^;]*))|;|$)"))) && (t = e[1] ? o.decode(e[1]) : ""), t
    }, getDomain: function () {
      var r = document.domain.split("."), t = r.length;
      return r[t - 2] + "." + r[t - 1]
    }, set: function (r, t, e, o, n, i) {
      var a = String(encodeURIComponent(t)), h = e;
      try {
        o = o ? o : this.getDomain()
      } catch (s) {
      }
      "number" == typeof h && (h = new Date, h.setTime(h.getTime() + 864e5 * e)), h instanceof Date && (a += "; expires=" + h.toUTCString()), o && (a += "; domain=" + o), a += "; path=/", i && (a += "; secure"), document.cookie = r + "=" + a
    }, del: function (r, t, e, o) {
      this.set(r, "", -1, t, e, o)
    }
  }, o = function () {
    function r(r) {
      if (external) try {
        var t = external.twGetRunPath.toLowerCase(), e = external.twGetSecurityID(window), o = external.twGetVersion(e);
        if (t && -1 === t.indexOf(r)) return !1;
        if (o) return {version: o}
      } catch (n) {
      }
    }

    function t(r, t) {
      for (var e = 0; e < t.length; e++) if (r === t[e]) return e
    }

    function e(r) {
      return r.replace(/(\d*\.[^\.]*).*/, "$1")
    }

    function o(r) {
      for (var t, e = "", o = 0; r > o; o++) t = Math.floor(10 * Math.random()), 0 == o && "0" == t && (t = 1), e += t;
      return e
    }

    function n(r) {
      return 10 > r ? "0" + r : r
    }

    return function () {
      function i() {
        var r = new Date, t = Date.parse("Jan 1," + r.getFullYear());
        return +r - t
      }

      function a() {
        var r = [0, 0, 0], t = window.navigator;
        try {
          t.javaEnabled() && (r[0] = 1)
        } catch (e) {
        }
        try {
          window.localStorage && (r[1] = 1)
        } catch (e) {
        }
        try {
          (t.plugins["Shockwave Flash"] || window.ActiveXObject) && (r[2] = 1)
        } catch (e) {
        }
        return r.join("")
      }

      function h() {
        x = "number" == typeof x ? x : x.replace(/[a-zA-Z]+/g, "");
        var r, e = p.split("|").concat(l.split("|")), h = [];
        e = e.concat(m), h[0] = n(t(w, e)), h[1] = n(parseInt(x)), h[2] = t(c.toLocaleLowerCase(), u), h[3] = o(4), h[4] = parseInt(Number(a()), 2) + 1 + "" + i(), r = parseInt(h[3] + h[4]).toString(32);
        var s = {
          name: w,
          version: x,
          core: _,
          os: c,
          cls: h[0] + "" + h[1] + h[2] + r,
          num: h,
          canCheckOS: u,
          canCheckBrowser: e
        };
        return s
      }

      var s, c, d, f = navigator.userAgent, u = ["windows", "mac", "android", "ipad", "iphone", "linux", "other"],
        p = "other|ie|chrome|firefox|webkit|safari|mobile_safari|mobile_webkit|ucbrowser|Gecko|opera|opera mini|opera mobi",
        l = "360|maxthon|qihu theworld|theworld|qqbrowser|taobrowser|se [0-9]+.|tencenttraveler|lbbrowser",
        b = new RegExp(l, "i"), m = ["ucbrowser", "crios", "mqqbrowser", "sogoumobilebrowser", "oupeng", "chrome"],
        w = "other", _ = "other", x = "00";
      if (f.indexOf("Android") > -1 ? c = "Android" : (c = f.match(/(Windows|Mac|Android|ipad|iphone|linux)/i), c = c ? c[0] : "other"), (s = f.match(/MSIE ([^;]*)|Trident.*; rv(?:\\s|:)?([\d.]+)/)) && s[1] ? (_ = "ie", _ = "trident", x = e(s[1])) : (s = f.match(/Chrome\/([\d.]*)/)) && s[1] && (_ = "chrome", w = "chrome", x = s[1]), (s = f.match(b)) && s[0] && f.indexOf("Android") < 0 && f.indexOf("Mobile") < 0) {
        if (f.indexOf("AppleWebKit") > -1 && (_ = "webkit"), w = s[0].toLocaleLowerCase(), (d = w.match(/se\s(\d+)\./i)) && d[1]) w = "se [0-9]+.", x = d[1]; else if (l.indexOf(w) > -1) {
          var d, v = new RegExp(w + "\\/*\\s*[0-9.]+", "i");
          (d = f.match(v)) && d[0] && (x = d[0].replace(/^[a-zA-Z\/\s]+/, ""))
        }
        return h()
      }
      if ((s = f.match(/Trident.*; rv(?:\\s|:)?([0-9.]+)/)) && s[1]) return w = "ie", _ = "trident", x = e(s[1]), h();
      if ((s = f.match(/MSIE ([^;]*)|Trident.*; rv(?:\\s|:)?([0-9.]+)/)) && s[1]) {
        w = "ie";
        try {
          var g = window.external;
          "ie" == w && (r("theworld") ? w = "theworld" : isNaN(g) && (w = "360"))
        } catch (y) {
        }
      }
      if (f.indexOf("AppleWebKit") > -1) if (w = "webkit", _ = "webkit", (s = f.match(/OPR\/([\d.]*)/)) && s[1]) x = e(s[1]), w = "opera"; else if ((s = f.match(/\/([\d.]*) Mobile/)) && s[1]) {
        w = "mobile_safari", x = (d = f.match(/Version\/([\d.]*)/)) && d[1] ? d[1] : e(s[1]);
        var S = new RegExp(m.join("|"), "i");
        if ((s = f.match(S)) && (w = s[0].toLowerCase(), w = w.replace(/[^a-zA-Z]+/gi, ""), m.join(",").indexOf(w) > -1)) {
          var d, v = new RegExp(w + "\\/*\\s*([0-9.]+)", "i");
          (d = f.match(v)) && d[1] && (x = d[1])
        }
      } else if (s = f.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)) {
        w = "mobile_webkit", x = s[0];
        var S = new RegExp(m.join("|"), "i");
        if ((s = f.match(S)) && (w = s[0].toLowerCase(), w = w.replace(/[^a-zA-Z]+/gi, ""), m.join(",").indexOf(w) > -1)) {
          var d, v = new RegExp(w + "\\/*\\s*([0-9.]+)", "i");
          (d = f.match(v)) && d[1] && (x = d[1])
        }
      } else (s = f.match(/\/([\d.]*) Safari/)) && s[1] ? (w = "safari", x = e(s[1]), !/version\/([\d.]+).*safari/.test(f) && (s = f.match(/Chrome\/([0-9.]*)/)) && s[1] && (w = "chrome", x = s[1])) : (s = f.match(/Chrome\/([0-9.]*)/)) && s[1] && (w = "chrome", x = s[1]); else (s = f.match(/Gecko/)) ? (w = "Gecko", _ = "Gecko", (s = f.match(/Firefox\/([\d.]*)/)) && s[1] && (w = "firefox", x = e(s[1]))) : (s = f.match(/Presto\/([\d.]*)/)) && s[1] && (_ = "presto", x = e(s[1]), (s = f.match(/Opera\/([\d.]*)/)) && s[1] && (w = "opera", x = e(s[1]), (s = f.match(/Opera\/.* Version\/([\d.]*)/)) && s[1] && (x = e(s[1])), (s = f.match(/Opera Mini[^;]*/)) && s ? (w = "opera mini", x = s[0]) : (s = f.match(/Opera Mobi[^;]*/)) && s && (w = "opera mobi", x = s[0])));
      return h()
    }
  }(), n = new r;
  t(), setInterval(t, 3000)
}(window);

!function () {
  if (!window._sufei) {
    window._sufei = 1;
    var t;
    !function (t) {
      function n(t) {
        for (var n = 0, e = t.length, i = []; e > n;) {
          var o = t[n++] << 16 | t[n++] << 8 | t[n++];
          i.push(r.charAt(o >> 18), r.charAt(o >> 12 & 63), r.charAt(o >> 6 & 63), r.charAt(63 & o))
        }
        return i.join("")
      }

      function e(t) {
        for (var n = 0, e = t.length, r = []; e > n;) {
          var o = i[t.charAt(n++)] << 18 | i[t.charAt(n++)] << 12 | i[t.charAt(n++)] << 6 | i[t.charAt(n++)];
          r.push(o >> 16, o >> 8 & 255, 255 & o)
        }
        return r
      }

      for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = {}, o = 0; 64 > o; o++) i[r[o]] = o;
      t.encode = n, t.decode = e
    }(t || (t = {}));
    var n;
    !function (t) {
      function n() {
        return c = 10807 * c >>> 0
      }

      function e(t, n, e) {
        o ? t.addEventListener(n, e) : t.attachEvent("on" + n, e)
      }

      function r(t) {
        if (a.test(t)) return t;
        var n = u.test(t) ? -3 : -2, e = t.split(".");
        return e.slice(n).join(".")
      }

      function i(t) {
        if (t) {
          var n = t.match(f);
          if (n) {
            var e = n[1];
            return s.test(e) && (e = e.split("@").pop().split(":")[0]), e
          }
        }
      }

      var o = !!window.addEventListener, c = 1e10 * Math.random() >>> 0;
      t.random = n, t.getTime = Date.now || function () {
        return +new Date
      }, t.eventBind = e;
      var u = /\.com\.cn$|\.com\.hk$/, a = /^(\d+\.){3}\d+$/;
      t.getRootDomain = r;
      var f = /^\s*(?:https?:)?\/{2,}([^\/\?\#\\]+)/i, s = /[@:]/;
      t.getHostFromUrl = i
    }(n || (n = {}));
    var e;
    !function (t) {
      function e(t) {
        o++
      }

      function r(t) {
        c++
      }

      function i() {
        return o << 16 | c
      }

      var o = 0, c = 0,
        u = "onwheel" in document.createElement("div") ? "wheel" : "onmousewheel" in document ? "mousewheel" : "DOMMouseScroll";
      n.eventBind(document, u, r), n.eventBind(document, "mousemove", e), n.eventBind(document, "touchmove", e), t.update = i
    }(e || (e = {}));
    var r;
    !function (t) {
      function n() {
        var t = "";
        try {
          t = "ActiveXObject" in window ? new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(",", ".") : navigator.plugins["Shockwave Flash"].description
        } catch (n) {
        }
        return +t.match(/\d+\.\d+/) || -1
      }

      function e() {
        return "chrome" in window
      }

      function r() {
        return "ActiveXObject" in window
      }

      function i() {
        return "MozSettingsEvent" in window
      }

      function o() {
        return "safari" in window
      }

      function c() {
        return "sgAppName" in navigator
      }

      function u() {
        return "callPhantom" in window
      }

      function a() {
        return "webdriver" in window
      }

      function f() {
        return "ontouchstart" in document
      }

      function s() {
        return !0
      }

      function d() {
        return navigator.javaEnabled()
      }

      function v() {
        return "localStorage" in window
      }

      function h() {
        return m > 8
      }

      function l() {
        return !1
      }

      function p() {
        for (var t = 0, n = 0; 16 > n; n++) {
          var e = +w[n]();
          t = t << 1 | e
        }
        return t
      }

      var m = n(), w = [e, r, i, o, c, l, l, u, a, l, l, f, s, d, v, h];
      t.getBitset = p
    }(r || (r = {}));
    var i, o = !0, c = "l", u = "isg2";
    !function (t) {
      function n(t) {
        var n = document.cookie, e = "; " + t + "=", r = n.indexOf(e);
        if (-1 == r) {
          if (e = t + "=", n.substr(0, e.length) != e) return;
          r = 0
        }
        var i = r + e.length, o = n.indexOf("; ", i);
        return -1 == o && (o = n.length), n.substring(i, o)
      }

      function e(t, n, e, r, i) {
        var o = t + "=" + n;
        r && (o += "; domain=" + r), i && (o += "; path=" + i), e && (o += "; expires=" + e), document.cookie = o
      }

      function r(t, n, e) {
        this.write(t, "", "Thu, 01 Jan 1970 00:00:00 GMT", n, e)
      }

      t.read = n, t.write = e, t.remove = r
    }(i || (i = {}));
    var a, f = function () {
      function t(t) {
        this._fields = t
      }

      return t.prototype.toBuffer = function () {
        for (var t = this._fields, n = [], e = -1, r = 0, i = t.length; i > r; r++) for (var o = this[r], c = t[r], u = e += c; n[u] = 255 & o, 0 != --c;) --u, o >>= 8;
        return n
      }, t.prototype.decode = function (t) {
        for (var n = this._fields, e = 0, r = 0, i = n.length; i > r; r++) {
          var o = n[r], c = 0;
          do c = (c << 8) + t[e++]; while (--o > 0);
          this[r] = c >>> 0
        }
      }, t.prototype.desc = function (t, n) {
        this._desc || (this._desc = []), this._desc[t] = n
      }, t.prototype.dump = function () {
        for (var t = {}, n = 0; n < this._fields.length; n++) {
          var e = this._desc[n] || n;
          t[e] = this[n]
        }
        return t
      }, t
    }();
    !function (n) {
      function e(t) {
        for (var n = 0, e = 0, r = t.length; r > e; e++) n = (n << 5) - n + t[e];
        return 255 & n
      }

      function r(t, n, e, r, i) {
        for (var o = t.length; o > n;) e[r++] = t[n++] ^ 255 & i, i = ~(131 * i)
      }

      function i(n) {
        return t.encode(n).replace(/\+/g, "-").replace(/\=/g, "_")
      }

      function o(n) {
        return n = n.replace(/\-/g, "+").replace(/\_/g, "="), t.decode(n)
      }

      function c(t) {
        var n = e(t), o = [a, n];
        return r(t, 0, o, 2, n), i(o)
      }

      function u(t) {
        var n = o(t), i = n[0];
        if (i == a) {
          var c = n[1], u = [];
          if (r(n, 2, u, 0, c), e(u) == c) return u
        }
      }

      var a = 2;
      n.pack = c, n.unpack = u
    }(a || (a = {}));
    var s;
    !function (t) {
      function u() {
        var t = i.read(c);
        if (t && 32 == t.length) {
          var e = a.unpack(t);
          if (e && (h.decode(e), 0 != h[m])) return
        }
        h[m] = n.random()
      }

      function s() {
        h[l]++, h[g] = n.getTime() / 1e3 | 0;
        var t = e.update();
        h[y] = t >> 16, h[b] = 65535 & t;
        var r = h.toBuffer();
        return a.pack(r)
      }

      function d() {
        var t = 4, e = 2;
        h = new f([e, e, t, t, t, e, e, e]), u(), h[p] = 65535 & n.random(), h[l] = 0, h[w] = 0, h[_] = r.getBitset()
      }

      function v() {
        var t = s();
        return t
      }

      var h, l = 0, p = 1, m = 2, w = 3, g = 4, _ = 5, y = 6, b = 7;
      t.init = d, t.update = v
    }(s || (s = {}));
    var d;
    if (function (t) {
        function e(t, n, e) {
          if (!t) return !1;
          var r = t[n];
          if (!r) return !1;
          var i = e(r);
          return y || (i._str = r + ""), i._raw = r, t[n] = i, !0
        }

        function r() {
          var t = s.update();
          i.write(c, t, "Fri, 01 Feb 2030 00:00:00 GMT", g, "/")
        }

        function a(t) {
          var e = n.getHostFromUrl(t);
          return e ? _.test(e) : !0
        }

        function f() {
          function t(t) {
            if (!/^https?\:/.test(t.protocol)) return !1;
            var n = t.target;
            if (!n) {
              var r = e[0];
              r && (n = r.target)
            }
            var i = !n || /^_self$/i.test(n);
            if (i) {
              var o = t.href.split("#")[0];
              if (o == m && t.hash) return !1
            }
            return !0
          }

          var e = document.getElementsByTagName("base");
          n.eventBind(document, "click", function (n) {
            n = n || event;
            var e = n.target || n.srcElement;
            do if ("A" == e.tagName) {
              t(e) && r();
              break
            } while (e = e.parentNode)
          }), n.eventBind(document, "submit", r), o || n.eventBind(window, "unload", r)
        }

        function d() {
          var t = window.XMLHttpRequest;
          t && v(t.prototype), h()
        }

        function v(t) {
          y ? e(t, "open", function (t) {
            return function () {
              try {
                r()
              } catch (n) {
              }
              return t.apply(this, arguments)
            }
          }) : e(window, "XMLHttpRequest", function (t) {
            return function () {
              try {
                r()
              } catch (n) {
              }
              return new t
            }
          })
        }

        function h() {
          e(window, "ActiveXObject", function (t) {
            return function (n) {
              if (n && /XMLHTTP/i.test(n)) try {
                r()
              } catch (e) {
              }
              return new t(n)
            }
          })
        }

        function l() {
          function t(t) {
            var n = s.update();
            return t + (/\?/.test(t) ? "&" : "?") + u + "=" + encodeURIComponent(n)
          }

          function n(n) {
            if (n && "SCRIPT" == n.tagName) {
              var e = n.src;
              /callback=/.test(e) && (a(e) ? r() : n.src = t(n.src))
            }
          }

          if (y) e(Element.prototype, "insertBefore", function (t) {
            return function (e) {
              try {
                n(e)
              } catch (r) {
              }
              return t.apply(this, arguments)
            }
          }); else {
            var i = function (t) {
              return function (e, r) {
                try {
                  n(e)
                } catch (i) {
                }
                return t(e, r)
              }
            }, o = document.getElementsByTagName("head")[0];
            e(o, "insertBefore", i), e(document.body, "insertBefore", i)
          }
        }

        function p() {
          m = location.href.split("#")[0], w = location.hostname, g = n.getRootDomain(w), _ = new RegExp("\\.?" + g.replace(/\./g, "\\.") + "$", "i"), f(), d(), l(), r()
        }

        var m, w, g, _, y = !!window.addEventListener;
        t.init = p
      }(d || (d = {})), o) {
      document.currentScript || document.scripts[document.scripts.length - 1]
    }
    try {
      s.init(), d.init()
    } catch (v) {
    }
    var h;
    !function (t) {
      function n(t) {
      }

      t.init = n
    }(h || (h = {}))
  }
}();
