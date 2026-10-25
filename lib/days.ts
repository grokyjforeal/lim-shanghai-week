import { hotel, type Copy, type Day, type Place } from "@/lib/trip";

function c(en: string, zh: string): Copy {
  return { en, zh };
}

const HONGQIAO: Place = { zh: "上海虹桥火车站", addr: "上海市闵行区申贵路1500号" };

export const days: Day[] = [
  {
    id: "d1",
    date: "2026-10-22",
    weekday: c("Thursday", "星期四"),
    label: c("Arrive", "抵达"),
    title: c("Land, settle in, one good dinner", "落地，安顿，好好吃一顿"),
    area: c("Pudong Airport → Xujiahui", "浦东机场 → 徐家汇"),
    summary: c(
      "A 05:00 start in KL and four big bags. Keep today small: get to the hotel, rest, then Shanghainese dinner ten minutes away.",
      "吉隆坡清晨五点就出门，还有四件大行李。今天从简：到酒店，休息，然后去十分钟车程外吃本帮菜。",
    ),
    leave: c("Flight 07:05 from KLIA T1", "07:05 吉隆坡 T1 起飞"),
    back: c("Hotel by about 20:30", "约 20:30 回到酒店"),
    walking: c("Very light", "很少"),
    stops: [
      {
        time: "07:05",
        kind: "fly",
        title: c("MU8592 to Shanghai Pudong", "MU8592 飞上海浦东"),
        note: c(
          "Lands 12:30 at Terminal 1. Passports and a pen in your personal item. Fill the arrival card online before boarding to skip the paper form.",
          "12:30 到 T1。护照和笔放随身包。登机前先在线填好入境卡，省得现场填纸卡。",
        ),
      },
      {
        time: "12:30",
        kind: "walk",
        title: c("Immigration, bags, cash", "入境、取行李、换现金"),
        photo: "pvg",
        note: c(
          "Allow 60 to 90 minutes. Fingerprints are taken at the counter. Draw about ¥1,000 at an airport ATM as backup cash.",
          "预留 60 到 90 分钟。柜台要按指纹。在机场提款机取约 1000 元现金备用。",
        ),
      },
      {
        time: "14:00",
        kind: "cab",
        title: c("Cab to the hotel", "打车去酒店"),
        place: hotel.place,
        note: c(
          "Four adults with four large cases will not fit one sedan. Take two taxis from the official rank, or book one 6-seater on DiDi (商务型).",
          "四个大人加四件大行李，一辆轿车坐不下。在正规候车区打两辆出租车，或用滴滴叫一辆六座商务车。",
        ),
        cost: c("60–75 min · about ¥200–230 per car", "60–75 分钟 · 每车约 200–230 元"),
        guide: {
          avoid: c(
            "Anyone who approaches you inside the arrivals hall offering a ride. Real taxis only wait at the signed rank outside.",
            "到达大厅里主动上来拉客的一律不理。正规出租车只在外面有标志的候车区排队。",
          ),
        },
      },
      {
        time: "15:30",
        kind: "rest",
        title: c("Check in and rest", "入住，休息"),
        place: hotel.place,
        note: c(
          "Check-in opens 14:00. Give the front desk all four passports for registration. Nap, shower, unpack.",
          "14:00 起可入住。四本护照都要交给前台登记。睡一会儿，洗澡，整理行李。",
        ),
      },
      {
        time: "16:45",
        kind: "coffee",
        title: c("Coffee: your first Manner", "咖啡：第一杯 Manner"),
        place: { zh: "Manner Coffee 徐家汇" },
        optional: true,
        note: c(
          "Manner started as a two-square-metre window in Shanghai in 2015 and is now the city's default good coffee: proper espresso, a flat white for about ¥15 to ¥20. There are several branches around Xujiahui. Tap Amap for the nearest.",
          "Manner 2015 年从上海一个两平米的小窗口起家，现在是这座城市好咖啡的默认选择：正经的意式浓缩，一杯澳白 15 到 20 元。徐家汇一带有好几家，点高德地图找最近的。",
        ),
        cost: c("¥15–25", "15–25 元"),
        guide: {
          worth: c("Flat white or the dirty. Bring your own cup for ¥5 off.", "澳白或 dirty。自带杯减 5 元。"),
        },
      },
      {
        time: "18:00",
        kind: "eat",
        title: c("Dinner: Ren He Guan", "晚餐：人和馆"),
        place: { zh: "人和馆(肇嘉浜路店)", addr: "上海市徐汇区肇嘉浜路407号" },
        photo: "renheguan",
        fromReel: true,
        note: c(
          "From your saved reel. A 1930s-styled dining room serving old-school Shanghainese, listed by Michelin.",
          "你们收藏的 reel 里那家。1930 年代老上海风格的店堂，做老派本帮菜，米其林收录。",
        ),
        cost: c("Cab 10–15 min · about ¥150 per person", "打车 10–15 分钟 · 人均约 150 元"),
        book: "renheguan",
        guide: {
          why: c(
            "The right first meal: the sweet, dark, soy-braised cooking Shanghai is known for, in a room that looks the part.",
            "第一顿就该吃这个：上海最有代表性的浓油赤酱，店里的老上海布置也很应景。",
          ),
          worth: c(
            "Crab roe over rice (the signature), red-braised pork, Huadiao-wine steamed chicken, stir-fried river shrimp, scallion-oil noodles.",
            "蟹粉捞饭（招牌）、红烧肉、花雕蒸鸡、清炒河虾仁、葱油拌面。",
          ),
          avoid: c(
            "Walking in without a booking. Waits run to hours. Dishes are sweet, so add one plain green vegetable.",
            "别不订位直接去，要等几个小时。菜偏甜，加一个清炒时蔬。",
          ),
        },
        red: {
          q: "人和馆 肇嘉浜路",
          more: [
            c(
              "One visitor took a queue number after 16:00 and sat down after 20:00. Every post says to reserve online first.",
              "有人下午四点多拿号，八点多才吃上。每篇笔记都说要先网上预约。",
            ),
            c(
              "The dish people rave about is crab roe over rice (蟹粉捞饭), mixed at the table with a little vinegar. Also praised: Huadiao-wine steamed chicken and the cold wine-marinated platter.",
              "最受好评的是蟹粉捞饭，服务员在桌边拌，加一点醋。花雕蒸鸡、糟钵斗也被夸。",
            ),
            c(
              "The stir-fried liver is sweet, not spicy. Staff warn you it is nothing like the Sichuan version.",
              "酱爆猪肝是甜口的，不辣。店员会提醒和川菜不一样。",
            ),
          ],
        },
        local: [
          c(
            "If you cannot get a booking: Lao Rui Fu (老瑞福), a lane-house canteen a Rednote visitor rated as highly as Ren He Guan at a fraction of the price. Order the steamed 'three delicacies'.",
            "订不到位的话：老瑞福，弄堂里的平民本帮菜。小红书上有游客给它的评价和人和馆一样高，价钱只是零头。点老浦东蒸三鲜。",
          ),
          c(
            "Commenters who live in Shanghai also name Zui Lu (醉庐) and Lao Ju (老钜上海菜), both under ¥50 a head.",
            "评论里的上海本地人还提到醉庐和老钜上海菜，人均都不到 50 元。",
          ),
        ],
      },
      {
        time: "19:45",
        kind: "walk",
        title: c("Short stroll, then bed", "散个步，早点睡"),
        place: { zh: "徐家汇天主堂", addr: "上海市徐汇区蒲西路158号" },
        photo: "cathedral",
        optional: true,
        note: c(
          "If everyone still has legs: the lit-up Xujiahui Cathedral is five minutes by cab. Otherwise straight home. Tomorrow starts early.",
          "还有力气的话：亮灯的徐家汇天主堂，打车五分钟。不然直接回酒店，明天要早起。",
        ),
      },
    ],
    tips: [
      c(
        "Buy water, fruit and breakfast bits at the convenience store by the hotel tonight. The room rate has no breakfast.",
        "今晚在酒店旁的便利店买好水、水果和早餐。房价不含早餐。",
      ),
      c(
        "Test Alipay with a small purchase today so any card problem shows up early.",
        "今天先用支付宝买点小东西，银行卡有问题可以早发现。",
      ),
    ],
  },
  {
    id: "d2",
    date: "2026-10-23",
    weekday: c("Friday", "星期五"),
    label: c("Hangzhou", "杭州"),
    title: c("Hubin in the rain", "雨里的湖滨"),
    area: c("Hangzhou · Hubin", "杭州 · 湖滨"),
    summary: c(
      "A short Hangzhou day in the rain. Lunch is 绿茶 inside in77. A short umbrella walk on Hubin for the lake, then back indoors. Cab by 16:15 for G238 at 17:37.",
      "杭州的雨天，只走短的一段。午饭在 in77 里的绿茶。湖滨撑伞看一眼湖，再回到商场里。16:15 之前打车，赶 17:37 的 G238。",
    ),
    leave: c("Leave hotel 07:45", "07:45 从酒店出发"),
    back: c("Hotel by about 19:15", "约 19:15 回到酒店"),
    walking: c("A short umbrella walk, then back indoors", "撑伞走一小段，然后回到室内"),
    stops: [
      {
        time: "07:45",
        kind: "cab",
        title: c("Cab to Hongqiao Railway Station", "打车去虹桥火车站"),
        place: HONGQIAO,
        photo: "hongqiao",
        note: c(
          "Friday rush hour. G7349 is 09:11, gate 9A9B. Be inside by 08:31. Foreign passports use the staffed gate at the side of each check-in row, not the ID scanners.",
          "星期五早高峰。G7349 是 09:11，检票口 9A9B。08:31 前要进站。外国护照走检票口旁边的人工通道，不能刷身份证闸机。",
        ),
        cost: c("30–45 min · about ¥60–80", "30–45 分钟 · 约 60–80 元"),
      },
      {
        time: "09:11",
        kind: "train",
        title: c("G7349 to Hangzhou East", "G7349 到杭州东"),
        place: { zh: "杭州东站", addr: "杭州市上城区天城路1号" },
        note: c(
          "Issued. G7349, 1st class, six people. Hongqiao 09:11, gate 9A9B, arrive Hangzhou East 10:06. Booking 1433816027386644. Collection E090756664. Passport is the ticket. No paper ticket.",
          "已出票。G7349，一等座，六人。虹桥 09:11，检票口 9A9B，10:06 到杭州东。订单 1433816027386644。取票号 E090756664。护照就是车票，不用取纸质票。",
        ),
        cost: c("1st class, issued", "一等座，已出票"),
        book: "train-hz",
      },
      {
        time: "10:25",
        kind: "cab",
        title: c("Cab to in77", "打车去 in77"),
        place: { zh: "湖滨银泰 in77", addr: "杭州市上城区湖滨 湖滨银泰 in77" },
        note: c(
          "G7349 arrives Hangzhou East at 10:06. This rain day stays at Hubin and in77. Umbrellas out when you leave the station. A minute count for this hop was not in the notes.",
          "G7349 是 10:06 到杭州东。这个雨天只待在湖滨和 in77。出站就撑伞。这段的分钟数不在笔记里。",
        ),
      },
      {
        time: "11:30",
        kind: "eat",
        title: c("Lunch: 绿茶", "午餐：绿茶"),
        place: { zh: "绿茶", addr: "杭州市上城区湖滨 湖滨银泰 in77 C区2座 3楼" },
        note: c(
          "in77, block C2, 3rd floor. Sit down here. Hours and a menu price were not in the notes, so they are not printed. If the room is full, stay inside in77 and take the next seated table.",
          "in77，C区2座，3楼。在这里坐下。营业时间和菜价不在笔记里，所以不印。如果满了，就留在 in77 里，坐下一家就吃。",
        ),
      },
      {
        time: "13:00",
        kind: "walk",
        title: c("A short Hubin walk", "湖滨走一小段"),
        place: { zh: "湖滨", addr: "杭州市上城区湖滨 in77 外面的湖边" },
        note: c(
          "Umbrellas up. A short look at the lake in the rain, then back into in77. This is not a loop of the lake. Huagang and Leifeng stay off the day.",
          "撑伞。雨里看一眼湖，然后回到 in77。这不是绕湖一周。花港和雷峰塔都不去。",
        ),
      },
      {
        time: "16:15",
        kind: "cab",
        title: c("Cab back to Hangzhou East", "打车回杭州东站"),
        place: { zh: "杭州东站", addr: "杭州市上城区天城路1号" },
        note: c(
          "Leave in77 or Hubin by cab no later than 16:15. G238 is 17:37 from Hangzhou East, gate 16A. 16:15 is the latest cab.",
          "最晚 16:15 从 in77 或湖滨打车离开。G238 是杭州东 17:37，检票口 16A。16:15 是最晚的车。",
        ),
        cost: c("35–55 min · about ¥45", "35–55 分钟 · 约 45 元"),
      },
      {
        time: "17:37",
        kind: "train",
        title: c("G238 back to Hongqiao", "G238 回虹桥"),
        place: HONGQIAO,
        note: c(
          "Issued. G238, 1st class, six people. Hangzhou East 17:37, gate 16A, arrive Hongqiao 18:22. Booking 1433816027387256. Collection E227139473. Passport is the ticket. Dinner near the hotel.",
          "已出票。G238，一等座，六人。杭州东 17:37，检票口 16A，18:22 到虹桥。订单 1433816027387256。取票号 E227139473。护照就是车票。晚饭在酒店附近吃。",
        ),
        cost: c("1st class, issued · then cab home about ¥60", "一等座，已出票 · 之后打车回酒店约 60 元"),
        book: "train-hz",
      },
    ],
    tips: [
      c(
        "Umbrellas. The Hangzhou visit is Hubin and in77. After the short lake look, go back inside the mall.",
        "带伞。这次杭州就是湖滨和 in77。看完湖就回到商场里。",
      ),
      c(
        "The cab to Hangzhou East is no later than 16:15. G238 is 17:37.",
        "去杭州东的车最晚 16:15。G238 是 17:37。",
      ),
    ],
    planB: {
      title: c("If the rain is too heavy for the lake edge", "如果雨大到湖边站不住"),
      body: c(
        "Skip the umbrella walk and stay inside in77. Lunch is still 绿茶. The cab is still no later than 16:15, and G238 is still 17:37.",
        "湖边那一小段不走，留在 in77 里。午饭还是绿茶。车还是最晚 16:15，G238 还是 17:37。",
      ),
    },
  },
  {
    id: "d3",
    date: "2026-10-24",
    weekday: c("Saturday", "星期六"),
    label: c("Birthday", "生日"),
    title: c("Old Shanghai, the skyline, a birthday table", "老上海，江景，生日宴"),
    area: c("Yu Garden · North Bund · The Bund", "豫园 · 北外滩 · 外滩"),
    summary: c(
      "Chee Onn's birthday. Yu Garden at opening before the Saturday crowd, soup dumplings from your reel list, a proper rest, coffee facing the skyline at sunset, then a river-view table on the Bund.",
      "Chee Onn 的生日。趁星期六人潮没到，一开门就逛豫园；吃你们 reel 里的小笼；回酒店休息；傍晚对着江景喝咖啡看日落；晚上在外滩看着江景吃生日饭。",
    ),
    leave: c("Leave hotel 08:40", "08:40 从酒店出发"),
    back: c("Hotel by about 20:45", "约 20:45 回到酒店"),
    walking: c("About 1.5 km, mostly in Yu Garden", "约 1.5 公里，主要在豫园"),
    stops: [
      {
        time: "08:40",
        kind: "cab",
        title: c("Cab to Yu Garden", "打车去豫园"),
        place: { zh: "豫园", addr: "上海市黄浦区福佑路168号" },
        note: c(
          "Be at the gate for the 09:00 opening.",
          "赶在 09:00 开门时到。",
        ),
        cost: c("25–35 min · about ¥45", "25–35 分钟 · 约 45 元"),
      },
      {
        time: "09:00",
        kind: "see",
        title: c("Yu Garden", "豫园"),
        place: { zh: "豫园", addr: "上海市黄浦区福佑路168号" },
        photo: "yu",
        note: c(
          "A private garden built in 1559 by a Ming official for his father's old age. Rockeries, dragon-topped walls, carp ponds and halls packed into two hectares.",
          "1559 年一位明代官员为父亲养老而建的私家园林。两公顷里挤满了假山、龙墙、鱼池和厅堂。",
        ),
        cost: c("¥40 · seniors usually half", "40 元 · 长者一般半价"),
        guide: {
          why: c(
            "The one classical garden in central Shanghai, and a fitting visit on a father's birthday given why it was built.",
            "上海市中心唯一的古典园林。想想它是为父亲建的，生日这天来正合适。",
          ),
          worth: c(
            "The dragon walls, the Exquisite Jade Rock and the carp ponds. Keep to the ground-level paths, about 500 m, with seats in the halls.",
            "龙墙、玉玲珑、鱼池。走平地的路线，约 500 米，厅堂里有地方坐。",
          ),
          avoid: c(
            "Climbing the Great Rockery and the upstairs galleries, which are steep and uneven. Also arriving after 10:30 on a weekend, when it is shoulder to shoulder. Bring passports for tickets.",
            "大假山和楼上的回廊又陡又不平，别爬。周末别在 10:30 以后才到，会人挤人。买票要带护照。",
          ),
        },
        red: {
          q: "豫园 避雷 攻略",
          more: [
            c(
              "Yu Garden (ticketed, the classical garden) and the Yu Garden bazaar (free, the shops and the zigzag bridge) are two separate places next to each other. Posts show many visitors only see the bazaar and think they have seen the garden.",
              "豫园（要门票的古典园林）和豫园商城（免费，商铺和九曲桥）是挨着的两个地方。很多游客只逛了商城就以为看过豫园了。",
            ),
          ],
          tip: c(
            "Posts call a midday visit 'paying to count heads' and prefer the lantern-lit bazaar after dark. Going at opening is the other fix.",
            "笔记说白天去是「花钱数人头」，更推荐晚上看灯。一开门就去是另一个解法。",
          ),
        },
      },
      {
        time: "10:15",
        kind: "walk",
        title: c("Nine-Turn Bridge and the bazaar", "九曲桥，城隍庙老街"),
        place: { zh: "豫园九曲桥", addr: "上海市黄浦区豫园老街" },
        photo: "bazaar",
        note: c(
          "The zigzag bridge and the 1855 Huxinting teahouse sit right outside the garden gate, in a bazaar of upturned-eave buildings.",
          "九曲桥和 1855 年开业的湖心亭茶楼就在园门外，周围是飞檐翘角的老街。",
        ),
        guide: {
          worth: c("The family photo on the bridge with the teahouse behind.", "在九曲桥上以湖心亭为背景拍全家福。"),
          avoid: c(
            "The snack stalls and souvenir shops. Prices are tourist prices and the food is ordinary. Save your appetite for lunch.",
            "小吃摊和纪念品店。都是游客价，味道一般。留着肚子吃午饭。",
          ),
        },
        local: [
          c(
            "Locals come here after dark, when the lanterns are lit and the tour groups have gone. If Tuesday evening has energy left, it is ten minutes by cab from the Bund.",
            "本地人是天黑后来的，灯亮了，旅行团也走了。星期二晚上还有力气的话，从外滩打车过来十分钟。",
          ),
        ],
      },
      {
        time: "11:00",
        kind: "eat",
        title: c("Lunch: Lai Lai Xiao Long", "午餐：莱莱小笼"),
        place: { zh: "莱莱小笼(天津路店)", addr: "上海市黄浦区天津路504号" },
        photo: "xlb",
        fromReel: true,
        note: c(
          "From your reel list. A plain neighbourhood shop on Tianjin Road known for crab-roe soup dumplings and a fried pork chop.",
          "你们 reel 清单里的。天津路上一家朴素的街坊小店，以蟹粉小笼和炸猪排出名。",
        ),
        cost: c("Cab 10 min from Yu Garden · about ¥60 per person", "从豫园打车 10 分钟 · 人均约 60 元"),
        guide: {
          why: c(
            "Xiaolongbao where locals eat them, at a fraction of Yu Garden prices.",
            "在本地人吃的地方吃小笼，价钱只有豫园的零头。",
          ),
          worth: c(
            "Crab-roe xiaolongbao, pure pork xiaolongbao, and the fried pork chop with Worcestershire-style sauce.",
            "蟹粉小笼、鲜肉小笼、配辣酱油的炸猪排。",
          ),
          avoid: c(
            "Arriving at noon. It is small, shared tables, no bookings. Go at 11:00. Bite a small hole and sip the soup first, or it burns.",
            "别正午去。店小，要拼桌，不能订位。11:00 到。先咬个小口喝汤，不然会烫。",
          ),
        },
        red: {
          q: "莱莱小笼 天津路",
          more: [
            c(
              "A post with over 1,000 likes calls it the first stop for eating in Shanghai, and it appears on several 'old names worth the trip' lists alongside Da Hu Chun pan-fried buns and Shen Da Cheng rice cakes.",
              "一篇过千赞的笔记把它叫做「上海逛吃第一站」。它和大壶春生煎、沈大成糕团一起出现在好几份老字号清单里。",
            ),
          ],
          tip: c(
            "Posts tell visitors not to eat on Nanjing East Road itself and to walk one street over to Tianjin Road, which is where this is.",
            "笔记都说别在南京东路上吃饭，往旁边走一条街到天津路，就是这里。",
          ),
        },
      },
      {
        time: "11:50",
        kind: "eat",
        title: c("Snack: Luo Chun Ge pan-fried buns", "加一份：萝春阁生煎"),
        place: { zh: "萝春阁(浙江中路店)", addr: "上海市黄浦区浙江中路425号" },
        photo: "shengjian",
        fromReel: true,
        optional: true,
        note: c(
          "Also from your reel list, 300 m away on the flat. The 1920 name that invented Shanghai's pan-fried bun, reopened in January 2026 after 21 years.",
          "也在你们的 reel 清单里，平路 300 米。1920 年创出上海生煎的老字号，停业 21 年后于 2026 年 1 月复业。",
        ),
        cost: c("About ¥9 for four", "一两四个约 9 元"),
        guide: {
          worth: c("One portion to share: crisp base, soft top, hot soup inside.", "点一两分着吃：底脆、面软、里面有汤。"),
          avoid: c(
            "Counting on it. It sold out within 90 minutes on opening day and may still run out by midday.",
            "别抱太大期望一定吃得到。开业当天一个半小时就卖完，中午可能已经售罄。",
          ),
        },
      },
      {
        time: "12:30",
        kind: "rest",
        title: c("Back to the hotel, feet up", "回酒店，歇歇脚"),
        place: hotel.place,
        note: c(
          "Two to three hours of real rest. The evening is the main event, and tomorrow is another early train.",
          "认真休息两三个小时。晚上才是重头戏，明天又要赶早班车。",
        ),
        cost: c("Cab about ¥40", "打车约 40 元"),
        alt: {
          title: c("Rather not go back to the hotel?", "不想回酒店？"),
          body: [
            c(
              "12:45 Foot massage, 90 minutes. Everyone sits side by side in recliners, which rests the legs as well as a nap does. Search 足浴 on Dianping around Nanjing East Road and pick one rated 4.5 or higher. About ¥150–250 per person.",
              "12:45 足浴按摩 90 分钟。全家并排躺在沙发椅上，歇脚的效果不比回去睡一觉差。在大众点评搜南京东路附近的「足浴」，选 4.5 分以上的。每人约 150–250 元。",
            ),
            c(
              "14:30 Huangpu River cruise from Shiliupu Pier (十六铺码头), a 10-minute cab. About 50 minutes, seated, with the Bund on one side and Pudong on the other. About ¥120–150 per person. Buy at the pier ticket office.",
              "14:30 到十六铺码头坐黄浦江游船，打车 10 分钟。约 50 分钟，全程坐着，一边是外滩一边是浦东。每人约 120–150 元，在码头售票处买。",
            ),
            c(
              "15:45 Cab from the pier to Manner Coffee on the North Bund, 15 minutes, and carry on with the plan below.",
              "15:45 从码头打车到北外滩 Manner 咖啡，15 分钟，接着走下面的行程。",
            ),
            c(
              "Cheaper version: skip the cruise and ride the public ferry from Jinling East Road (金陵东路渡口) to Pudong and back. ¥2 each way, 10 minutes, same river.",
              "省钱版：不坐游船，改坐金陵东路渡口的轮渡到浦东再回来。单程 2 元，10 分钟，同一条江。",
            ),
          ],
        },
      },
      {
        time: "15:45",
        kind: "cab",
        title: c("Cab to the North Bund", "打车到北外滩"),
        place: { zh: "Manner Coffee(国客滨江店)", addr: "上海市虹口区太平路 国际港务大厦南60米(江边)" },
        note: c("Ask for the riverside by the International Cruise Terminal.", "跟司机说去国际客运中心江边。"),
        cost: c("30–40 min · about ¥55", "30–40 分钟 · 约 55 元"),
      },
      {
        time: "16:20",
        kind: "coffee",
        title: c("Manner Coffee and the skyline at sunset", "Manner 咖啡，看日落江景"),
        place: { zh: "Manner Coffee(国客滨江店)", addr: "上海市虹口区太平路 国际港务大厦南60米(江边)" },
        photo: "northbund",
        fromReel: true,
        note: c(
          "From your reel. A glass-walled branch of Shanghai's home-grown coffee chain on the North Bund riverfront, facing the Pudong towers.",
          "你们 reel 里那家。上海本土咖啡品牌开在北外滩江边的玻璃房，正对浦东的高楼。",
        ),
        cost: c("Coffee ¥15–25", "咖啡 15–25 元"),
        guide: {
          why: c(
            "The same skyline as the Bund, with a seat, a coffee and a fraction of the crowd. Sunset is about 17:10 and the towers light up after.",
            "和外滩一样的天际线，但有座位、有咖啡，人少得多。日落约 17:10，之后对岸亮灯。",
          ),
          worth: c(
            "A window seat for the whole hour. The view comes to you, so there is no need to walk the riverside.",
            "整个小时都坐在窗边。景色就在眼前，不用沿江走。",
          ),
          avoid: c(
            "Expecting a quiet café. It is popular and window seats turn over slowly on Saturdays. The riverside benches outside have the same view.",
            "别以为很清静。这里很红，星期六窗边位要等。外面江边的长椅景色一样。",
          ),
        },
        red: {
          q: "北外滩 Manner 江景",
          more: [
            c(
              "The North Bund riverside path runs 3 km with open views and room to sit, and posts say night photos there need no jostling.",
              "北外滩滨江步道有三公里，视野开阔，有地方坐。笔记说在这里拍夜景不用挤。",
            ),
            c(
              "The white dome next door is the cruise terminal. Its second-floor deck gives a high view over the river, reached by lift.",
              "旁边的白色「小巨蛋」是国客中心，二楼平台可以俯拍江景，有电梯。",
            ),
          ],
          tip: c(
            "Posts list 'squeezing onto the Bund to see the three towers' as mistake number one and send people to the North Bund instead.",
            "笔记把「挤在外滩看三件套」列为头号坑，都推荐改去北外滩。",
          ),
        },
      },
      {
        time: "17:35",
        kind: "cab",
        title: c("Cab to dinner", "打车去吃饭"),
        place: { zh: "外滩22号", addr: "上海市黄浦区中山东二路22号" },
        note: c("Call the car from Dongdaming Road, one street back from the river.", "到江边后面一条街的东大名路叫车。"),
        cost: c("10–15 min · about ¥20", "10–15 分钟 · 约 20 元"),
      },
      {
        time: "18:00",
        kind: "eat",
        title: c("Birthday dinner: Waitan Jiayan", "生日晚餐：外滩家宴"),
        place: { zh: "外滩家宴·上海菜(外滩豫园店)", addr: "上海市黄浦区中山东二路22号 外滩22号2楼" },
        photo: "bund-dinner",
        note: c(
          "Home-style Shanghainese on the second floor of Bund 22, a 1906 building on the riverfront, with windows facing the Oriental Pearl and the Pudong towers. Rated 4.8 on Dianping and top of its Huangpu district list.",
          "在外滩 22 号二楼吃本帮家常菜。这栋楼建于 1906 年，就在江边，窗外正对东方明珠和浦东高楼。大众点评 4.8 分，黄浦区热门榜第一。",
        ),
        cost: c("About ¥100–120 per person", "人均约 100–120 元"),
        book: "birthday",
        guide: {
          why: c(
            "A river-view birthday table on the Bund for the price of an ordinary dinner. The view is the treat, and the food is the city's own.",
            "用一顿普通晚饭的钱，在外滩吃一桌看得到江景的生日饭。景色就是礼物，菜是地道的上海味道。",
          ),
          worth: c(
            "Osmanthus red-braised pork, squirrel-shaped fish, stir-fried river shrimp, scallion-oil noodles as the birthday noodles. Five dishes and a soup for four keeps it near ¥100 a head.",
            "桂花红烧肉、松鼠鱼、清炒河虾仁，葱油拌面当长寿面。四个人点五菜一汤，人均就在 100 元上下。",
          ),
          avoid: c(
            "Arriving without a window booking. Window tables are few and the rest of the room is plain. Crab-roe dishes and live seafood push the bill well past ¥100.",
            "别不订靠窗位就去。靠窗桌不多，其他位置很普通。蟹粉类和活海鲜会让人均远超 100 元。",
          ),
        },
        red: {
          q: "外滩家宴 上海菜",
          more: [
            c(
              "One post suggests arriving at 17:00 so the same table gets both sunset and the lights. That would mean leaving Manner Coffee early. Your call on the day.",
              "有笔记建议 17:00 到，同一张桌子能看到日落和亮灯。那样就要早点离开 Manner。当天看情况。",
            ),
            c(
              "Dishes named most often: osmanthus red-braised pork, osmanthus rice dumplings for dessert, crab-roe xiaolongbao.",
              "被提到最多的菜：桂花红烧肉、桂花团子（甜品）、蟹粉小笼。",
            ),
            c(
              "There are only two branches. Posts keep reminding people not to go to the wrong one.",
              "只有两家分店，笔记反复提醒别跑错。",
            ),
          ],
          tip: c(
            "Posts put it at ¥75 to ¥100 a head and say to book the first-row river seats ahead. Many of the posts read like promotions, so trust the Dianping score more than the praise.",
            "笔记说人均 75 到 100 元，一线江景位要提前订。不少笔记像是推广，评价不如看大众点评的分数。",
          ),
        },
      },
      {
        time: "19:30",
        kind: "walk",
        title: c("The Bund, lit up", "亮灯后的外滩"),
        place: { zh: "外滩观景平台", addr: "上海市黄浦区中山东一路" },
        photo: "waibaidu",
        optional: true,
        note: c(
          "The promenade is across the road from the restaurant. The lights come on at about 19:00. Ten minutes on the south end is enough tonight. You are back here on Tuesday.",
          "观景平台就在餐厅马路对面。大约 19:00 亮灯。今晚在南段走十分钟就够，星期二还会再来。",
        ),
      },
      {
        time: "20:00",
        kind: "cab",
        title: c("Home", "回酒店"),
        place: hotel.place,
        note: c(
          "Cars cannot stop on the Bund. Walk one block inland to call the DiDi.",
          "外滩上不能停车。往里走一个街口再叫滴滴。",
        ),
        cost: c("30–40 min · about ¥50", "30–40 分钟 · 约 50 元"),
      },
    ],
    tips: [
      c(
        "Tell the restaurant it is a birthday when you book, and ask whether you may bring a small cake.",
        "订位时说明是庆生，顺便问能不能自带小蛋糕。",
      ),
      c(
        "Strictly under ¥100 with no view: Lan Xin on Jinxian Road (about ¥90 a head, Michelin Bib Gourmand, no bookings, queue from 16:45). Recent posts on it are mixed.",
        "一定要一百以内、不要江景的话：进贤路的兰心餐厅（人均约 90 元，米其林必比登，不能订位，16:45 就去排）。最近的评价有好有坏。",
      ),
    ],
    planB: {
      title: c("If it rains", "如果下雨"),
      body: c(
        "Replace Yu Garden with the Shanghai Museum East in Pudong (free, reserve on its WeChat mini program with passports). Manner Coffee is indoors with the same view, and dinner is unaffected.",
        "把豫园换成浦东的上海博物馆东馆（免费，用护照在微信小程序预约）。Manner 在室内，景色一样；晚餐不受影响。",
      ),
    },
  },
  {
    id: "d4",
    date: "2026-10-25",
    weekday: c("Sunday", "星期日"),
    label: c("Suzhou", "苏州"),
    title: c("Garden, noodles, two canal streets", "一座园，一碗面，两条水巷"),
    area: c("Suzhou · Old City", "苏州 · 古城"),
    summary: c(
      "G1214 arrives 苏州北站 at 09:46. Soy milk at Changmen Yaoji, a shorter visit to Humble Administrator's Garden, noodles at Gu Su Qiao, the Pingjiang hand boat, then a daytime walk on Shantang. G1919 leaves 苏州北站 at 17:39, so the lanterns give way.",
      "G1214 是 09:46 到苏州北站。先去阊门姚记喝豆浆，拙政园少看一会儿，姑苏桥吃面，平江路坐手摇船，然后白天走一段山塘街。G1919 是 17:39 从苏州北站开，看灯来不及。",
    ),
    leave: c("Leave hotel 08:00", "08:00 从酒店出发"),
    back: c("Hotel by about 18:45", "约 18:45 回到酒店"),
    walking: c("Short pieces. The boat is seated.", "几小段短程。船上是坐着的。"),
    stops: [
      {
        time: "08:00",
        kind: "cab",
        title: c("Cab to Hongqiao Railway Station", "打车去虹桥火车站"),
        place: HONGQIAO,
        note: c(
          "G1214 is 09:13, gate 17A17B. Be inside by 08:33. Staffed passport gate. Pack umbrellas, anti-slip shoes, spare socks, and passports.",
          "G1214 是 09:13，检票口 17A17B。08:33 前要进站。走人工通道验护照。带好伞、防滑鞋、备用袜子和护照。",
        ),
        cost: c("25–35 min · about ¥60", "25–35 分钟 · 约 60 元"),
      },
      {
        time: "09:13",
        kind: "train",
        title: c("G1214 to Suzhou North", "G1214 到苏州北站"),
        place: { zh: "苏州北站", addr: "苏州市相城区城通路" },
        note: c(
          "Issued. G1214, 1st class, six people. Hongqiao 09:13, gate 17A17B, arrive 苏州北站 09:46. Booking 1433816027383326. Collection E283994195. Passport is the ticket. No paper ticket.",
          "已出票。G1214，一等座，六人。虹桥 09:13，检票口 17A17B，09:46 到苏州北站。订单 1433816027383326。取票号 E283994195。护照就是车票，不用取纸质票。",
        ),
        cost: c("1st class, issued", "一等座，已出票"),
        book: "train-sz",
        guide: {
          avoid: c(
            "Getting off early. This ticket arrives at 苏州北站.",
            "不要提前下车。这张票的到站是苏州北站。",
          ),
        },
        red: {
          q: "苏州一日游 避雷",
          tip: c(
            "Your station is 苏州北站, in Xiangcheng. The cab into the old city is about 35 to 45 minutes.",
            "你们的站是相城区的苏州北站。进城打车大约 35 到 45 分钟。",
          ),
        },
      },
      {
        time: "10:30",
        kind: "eat",
        title: c("Breakfast: Changmen Yaoji Soy Milk", "早餐：阊门姚记豆浆"),
        place: { zh: "阊门姚记豆浆", addr: "苏州市姑苏区旧学前2-14号" },
        note: c(
          "G1214 arrives 苏州北站 at 09:46. Cab from there, about 35 to 45 minutes, to historic Changmen. Tell the driver 阊门姚记豆浆. Open 24 hours. Order salty soy milk (咸豆浆, about ¥6) with youzha, dried shrimp, and green onion, plus a youtiao (油条, about ¥2). Eat fast and be back in the cab by 10:50.",
          "G1214 是 09:46 到苏州北站。从那里打车，约 35 到 45 分钟，到老阊门。跟司机说阊门姚记豆浆。24 小时营业。点咸豆浆（约 6 元），加油炸、虾皮、葱花，再来一根油条（约 2 元）。快吃，10:50 前回到车上。",
        ),
        cost: c("Cab 35–45 min · about ¥55–75, then about ¥8 a person", "打车 35–45 分钟 · 约 55–75 元，豆浆每人约 8 元"),
      },
      {
        time: "10:50",
        kind: "cab",
        title: c("Cab to the garden", "打车去拙政园"),
        place: { zh: "拙政园", addr: "苏州市姑苏区东北街178号" },
        note: c(
          "From Yaoji, not from the station. Tell the driver 拙政园.",
          "从姚记出发，不是从火车站。跟司机说拙政园。",
        ),
        cost: c("About 15 min · about ¥20", "约 15 分钟 · 约 20 元"),
      },
      {
        time: "11:10",
        kind: "see",
        title: c("Humble Administrator's Garden", "拙政园"),
        place: { zh: "拙政园", addr: "苏州市姑苏区东北街178号" },
        photo: "hag",
        note: c(
          "G1214 gets you here after 11:00, so a 09:00 to 10:00 ticket slot is too early. Use a slot at 11:00 or later, or buy at the gate. Stay until about 12:00. Walk under the covered corridors if it rains. 兰雪堂, then 远香堂, then 香洲, then 留听阁 and 听雨轩. Sit at 听雨轩 while it rains. Skip wet rockeries and steep steps.",
          "G1214 到了再进城，11:00 以后才到门口，09:00 到 10:00 的票来不及。改 11:00 或更晚的时段，或在门口买。大约 12:00 离开。下雨就走有廊的路。兰雪堂，然后远香堂，然后香洲，然后留听阁和听雨轩。下雨就在听雨轩坐。湿的假山和陡台阶不走。",
        ),
        cost: c("¥80 in October", "十月旺季 80 元"),
        book: "garden",
        guide: {
          why: c(
            "If you see one Chinese garden in your life, this is the one people mean. Every window and doorway is placed to frame a view.",
            "一辈子只看一座中国园林的话，说的就是这座。每扇窗、每道门都是为了框出一幅景。",
          ),
          worth: c(
            "This is the long stop, and the walking stays light. Ask at the gate about a free wheelchair loan. Wear anti-slip shoes.",
            "这一站待得最久，步子放轻。门口可以问免费借轮椅。穿防滑鞋。",
          ),
          avoid: c(
            "Wet rockeries and steep steps. Do not go into a museum. Walk past the building beside the gate.",
            "湿的假山和陡台阶不走。不要进博物馆。园门口旁边那栋馆，从门口走过。",
          ),
        },
        red: {
          q: "拙政园 路线 避雷",
          more: [
            c(
              "Opinions split. Fans call it 'a painting in every window'. Critics in the comments say ¥80 is steep and the Suzhou gardens look alike. One good hour in the central garden is the right dose.",
              "评价两极。喜欢的说「一窗一画」；评论里也有人嫌 80 元贵、苏州园林大同小异。在中园好好看一小时正合适。",
            ),
            c(
              "The post on avoiding crowds says to go at opening or late afternoon, never 10:30 to 14:00.",
              "避开人群的笔记说：开门就去，或下午晚些去，千万别 10:30 到 14:00。",
            ),
          ],
        },
        local: [
          c(
            "The garden Suzhou people actually sit in is Yipu (艺圃, the Garden of Cultivation): a small Ming garden with a teahouse over the pond, about ¥10 to enter, where locals drink tea all morning. It is ten minutes by cab, and the last 200 m is a lane cars cannot enter.",
            "苏州人自己会去坐的是艺圃：一座小小的明代园林，茶室就架在水池上，门票约 10 元，本地人一坐就是一上午。打车十分钟，最后 200 米是车进不去的小巷。",
          ),
          c(
            "It suits short walks better than any other garden in the city: one pond, one loop, seats facing the water. If the Humble Administrator's Garden is sold out or too crowded, go here instead.",
            "它比城里任何一座园林都更适合走不了远路的人：一个水池，一圈，座位对着水。拙政园没票或人太多，就改来这里。",
          ),
        ],
      },
      {
        time: "12:15",
        kind: "eat",
        title: c("Lunch: Gu Su Qiao", "午餐：姑苏桥（第一天门）"),
        place: { zh: "姑苏桥（第一天门）", addr: "苏州市姑苏区观前街第一天门12-14号" },
        note: c(
          "Cab from the garden toward Guanqian Street. Su-style noodles at 姑苏桥（第一天门）. Walk in. For six people, call 0512-66016667 if you want one table. Stay indoors. Tell the driver 观前街第一天门.",
          "从园子打车去观前街。午饭是姑苏桥（第一天门）的苏式面。走进去就能吃。六个人想坐一桌，打电话 0512-66016667。在室内吃。跟司机说观前街第一天门。",
        ),
        cost: c("Cab about 10 min · about ¥60 a person", "打车约 10 分钟 · 人均约 60 元"),
        book: "gusuqiao",
        guide: {
          worth: c(
            "A bowl of Su-style noodles. In autumn the crab-roe noodles are the seasonal bowl. The four-taste plate of small dishes is the easy extra.",
            "点一碗苏式面。秋天的时令是蟹黄面。四味碟是好配的小菜。",
          ),
          avoid: c(
            "Do not turn lunch into another walk. Eat here, then go to the boat.",
            "不要把午饭走成另一段路。在这里吃完，就去坐船。",
          ),
        },
      },
      {
        time: "13:15",
        kind: "boat",
        title: c("Pingjiang Road, hand boat", "平江路，手摇船"),
        place: { zh: "保吉利桥码头", addr: "苏州市姑苏区平江路与白塔东路交叉口南50米" },
        photo: "pingjiang",
        note: c(
          "Cab from lunch. This is the boat. A hand-paddled ride is about 40 minutes and about ¥40 a person. Boats run from 8:30 to 17:30, so ride in the early afternoon. The dock to ask for is 保吉利桥码头, at Pingjiang Road and Baita East Road. The other dock is by the garden bridge. Confirm which boat is leaving when you arrive. Walk only a short stretch of the street before or after. Do not add a second boat on Shantang.",
          "午饭后打车过来。今天坐的是这条船。手摇船大约 40 分钟，每人约 40 元。开船时间 8:30 到 17:30，所以放在下午早些。要找的码头是保吉利桥码头，在平江路和白塔东路交叉口。另一个码头在拙政园桥旁。到了再确认哪条船在开。上船前后只沿街走一小段。山塘街不再坐第二条船。",
        ),
        cost: c("About ¥40 a person · about 40 min", "每人约 40 元 · 约 40 分钟"),
        guide: {
          why: c(
            "Suzhou was built on canals. From the water you see the stone bridges and the doors that face the canal.",
            "苏州是建在水上的城。坐在船上能看到石桥，和人家临水的门。",
          ),
          worth: c(
            "One boat, then a short walk. If it is pouring, skip the open boat and walk only the bit under the eaves.",
            "坐一条船，再走一小段。雨要是很大，敞篷船就不坐，只走屋檐下那一小段。",
          ),
          avoid: c(
            "Walking the full 1.6 km lane. Lion Grove Garden is a wet climb, so leave it. One garden today, then the boat.",
            "别把一公里六的街走完。狮子林的假山是湿的，要爬，不去。今天只看一座园，然后去坐船。",
          ),
        },
      },
      {
        time: "14:10",
        kind: "cab",
        title: c("DiDi to Shantang Street", "滴滴去山塘街"),
        place: { zh: "山塘街", addr: "苏州市姑苏区山塘街" },
        note: c(
          "From Pingjiang Road. Cars cannot enter the lanes. Call the DiDi to the east end of Shantang Street, near Changmen. Tell the driver 山塘街东入口.",
          "从平江路出发。车进不了老街。滴滴叫到山塘街东头，靠近阊门。跟司机说山塘街东入口。",
        ),
        cost: c("About 15–20 min · about ¥25", "约 15–20 分钟 · 约 25 元"),
      },
      {
        time: "14:30",
        kind: "walk",
        title: c("Shantang Street, a short walk", "山塘街，走一小段"),
        place: { zh: "山塘街", addr: "苏州市姑苏区山塘街" },
        note: c(
          "A daytime walk only. G1919 is 17:39, so leave by 16:15. The lanterns are after that train. The Pingjiang boat is the boat for today. Skip a boat here.",
          "只在白天走一小段。G1919 是 17:39，所以 16:15 前要走。看灯赶不上这班车。今天的船是平江路那条。这里的船不坐。",
        ),
        cost: c("A slow walk · free", "慢慢走 · 免费"),
        guide: {
          worth: c(
            "The canal and the shop eaves. If it rains, the eaves cover a short walk.",
            "河边和店家的屋檐。下雨的话，屋檐能遮一小段。",
          ),
          avoid: c(
            "A second boat ride. One boat today, and it was on Pingjiang Road.",
            "不要再坐一条船。今天只坐一条，在平江路。",
          ),
        },
      },
      {
        time: "16:15",
        kind: "cab",
        title: c("Cab to Suzhou North", "打车回苏州北站"),
        place: { zh: "苏州北站", addr: "苏州市相城区城通路" },
        note: c(
          "Leave Shantang at 16:15. Call the DiDi from the east end, near Changmen, not from inside the lane. Tell the driver 苏州北站. The ride is 35 to 45 minutes. Be at the station by 17:00. G1919 is 17:39, gate 2B.",
          "16:15 离开山塘街。在东头、靠近阊门叫滴滴，不要在巷子里面叫。跟司机说苏州北站。车程 35 到 45 分钟。17:00 前到站。G1919 是 17:39，检票口 2B。",
        ),
        cost: c("About 35–45 min · about ¥55–75", "约 35–45 分钟 · 约 55–75 元"),
      },
      {
        time: "17:39",
        kind: "train",
        title: c("G1919 back to Hongqiao", "G1919 回虹桥"),
        place: HONGQIAO,
        note: c(
          "Issued. G1919, 1st class, six people. 苏州北站 17:39, gate 2B, arrive Hongqiao 18:02. Booking 1433816027385452. Collection E255364710. Passport is the ticket. Then a cab home. Disney is tomorrow.",
          "已出票。G1919，一等座，六人。苏州北站 17:39，检票口 2B，18:02 到虹桥。订单 1433816027385452。取票号 E255364710。护照就是车票。到了再打车回酒店。明天去迪士尼。",
        ),
        cost: c("1st class, issued · then cab home about ¥60", "一等座，已出票 · 之后打车回酒店约 60 元"),
        book: "train-sz",
      },
    ],
    tips: [
      c(
        "No museums today. The Pingjiang boat is the one boat. Leave Shantang at 16:15 so you make G1919 at 17:39.",
        "今天不去博物馆。只坐平江路那条船。16:15 离开山塘街，赶上 17:39 的 G1919。",
      ),
      c(
        "Good things to carry home from Guanqian Street: fresh meat mooncakes from Chang Fa, and Cai Zhi Zhai sweets.",
        "观前街适合带走的：长发的鲜肉月饼、采芝斋的糖果。",
      ),
    ],
    planB: {
      title: c("If the rain is too heavy", "如果雨太大"),
      body: c(
        "Stay under the covered corridors at Humble Administrator's Garden and eat lunch indoors at Gu Su Qiao. The hand boat is open, so skip it if it is pouring. Still leave for 苏州北站 at 16:15. G1919 is 17:39.",
        "就在拙政园的廊子里看，午饭在姑苏桥室内吃。手摇船是敞篷的，雨太大就跳过。16:15 还是要去苏州北站。G1919 是 17:39。",
      ),
    },
  },
  {
    id: "d5",
    date: "2026-10-26",
    weekday: c("Monday", "星期一"),
    label: c("Disney", "迪士尼"),
    title: c("Shanghai Disneyland", "上海迪士尼乐园"),
    area: c("Pudong · Disney Resort", "浦东 · 迪士尼度假区"),
    summary: c(
      "A Monday in late October is about as quiet as this park gets. Do the headline rides before lunch, slow down in the afternoon, and decide at 17:00 whether to stay for the castle show.",
      "十月下旬的星期一，是这个乐园人最少的时候。午饭前把热门项目玩完，下午放慢，17:00 再决定要不要留下看城堡灯光秀。",
    ),
    leave: c("Leave hotel 07:15", "07:15 从酒店出发"),
    back: c("Hotel 18:30 or 21:30, your call", "18:30 或 21:30 回酒店，看体力"),
    walking: c("10 km or more. Pace it.", "10 公里以上，要分配体力"),
    stops: [
      {
        time: "07:15",
        kind: "cab",
        title: c("Cab to Disneyland", "打车去迪士尼"),
        place: { zh: "上海迪士尼乐园 西公交枢纽(出租车下客点)", addr: "上海市浦东新区黄赵路310号" },
        note: c(
          "Taxis drop at the West Public Transportation Hub. From there it is a 10-minute walk to security. Aim to be at the gate 30 minutes before opening.",
          "出租车在西公交枢纽下客，走到安检约十分钟。争取开园前 30 分钟到门口。",
        ),
        cost: c("40–55 min · about ¥130–160", "40–55 分钟 · 约 130–160 元"),
      },
      {
        time: "07:50",
        kind: "coffee",
        title: c("Coffee before the gates: Manner, Disneytown", "入园前的咖啡：迪士尼小镇 Manner"),
        place: { zh: "Manner Coffee(迪士尼小镇店)", addr: "上海市浦东新区申迪西路 迪士尼小镇" },
        note: c(
          "Disneytown, the shopping street beside the park entrance, has a Manner that opens at 07:30. It is the best coffee you will get all day and a third of the price of anything inside.",
          "乐园入口旁的迪士尼小镇有一家 Manner，07:30 开门。这是今天能喝到最好的咖啡，价钱只有园内的三分之一。",
        ),
        cost: c("¥15–25", "15–25 元"),
        guide: {
          avoid: c(
            "Waiting until you are inside. Park coffee is ordinary and the queues are long. Take one of you to buy while the others join the security line.",
            "别等进园再买。园里的咖啡普通，排队又长。一个人去买，其他人先排安检。",
          ),
        },
      },
      {
        time: "08:00",
        kind: "walk",
        title: c("Security and gates", "安检，入园"),
        place: { zh: "上海迪士尼乐园", addr: "上海市浦东新区川沙新镇黄赵路310号" },
        photo: "castle",
        note: c(
          "Opened in 2016 with the largest castle Disney has built. Passports are the tickets, so all four must be in the bag. Opening is usually 08:30. Confirm in the app the week before.",
          "2016 年开园，城堡是迪士尼造过最大的一座。护照就是门票，四本都要带。一般 08:30 开园，出发前一周在官方 App 里确认。",
        ),
        book: "disney",
        guide: {
          why: c(
            "Several rides here exist nowhere else, and most of the best ones are gentle enough for the parents.",
            "这里有好几个全球独有的项目，而且最精彩的几个大多不刺激，长辈能玩。",
          ),
          avoid: c(
            "Buying mouse ears and snacks at the entrance. The same things are sold all over the park, and outside food that needs no heating is allowed in.",
            "别在门口买发箍和零食，园里到处都有。不需加热的食物可以自带。",
          ),
        },
        red: {
          q: "上海迪士尼 带父母 攻略",
          more: [
            c(
              "A 1,500-like one-day plan runs: Pirates, Soaring, Roaring Rapids, the parade, the castle stage show. Bring an empty bottle for the water fountains, a power bank (there are no sockets) and the smallest bag you can.",
              "一篇 1500 赞的一日攻略顺序是：加勒比海盗、飞越地平线、雷鸣山漂流、花车巡游、城堡舞台秀。带空水杯接饮用水、充电宝（园内没有插座），包越小越好。",
            ),
            c(
              "Snacks worth buying: the Zootopia paw popsicle (¥45), the croissant (¥35), carrot popcorn (¥40). Not worth it: the ¥98 pizza and the ginger ice cream.",
              "值得买的小吃：疯狂动物城爪爪冰棒（45 元）、可颂（35 元）、胡萝卜爆米花（40 元）。不值的：98 元的披萨和姜味冰淇淋。",
            ),
            c(
              "Instant noodles and strong-smelling food are not allowed in. Bread and fruit are fine.",
              "泡面和有刺激气味的食物不能带进去。面包水果可以。",
            ),
            c(
              "Commenters say Klook often has the cheapest tickets.",
              "评论区说 Klook 的门票常常最便宜。",
            ),
          ],
          tip: c(
            "Posts from people who took parents rank it: Pirates, Soaring, then Zootopia. Gentle fillers are the carousel, Dumbo and Winnie the Pooh, which is shaded and a good sit.",
            "带过父母的笔记这样排：加勒比海盗、飞越地平线、热力追踪。轻松的有旋转木马、小飞象、小熊维尼，维尼阴凉还能歇脚。",
          ),
        },
      },
      {
        time: "08:30",
        kind: "see",
        title: c("Zootopia first", "先去疯狂动物城"),
        photo: "zootopia",
        note: c(
          "The only Zootopia land in the world, opened December 2023. Walk straight to the back left as the gates open.",
          "全球唯一的疯狂动物城园区，2023 年 12 月开放。一开园就直奔左后方。",
        ),
        guide: {
          worth: c(
            "Hot Pursuit, a trackless police-car chase through the film's districts. Ask for the front row.",
            "「热力追踪」，坐无轨警车穿过电影里的各个城区。跟工作人员要第一排。",
          ),
          avoid: c(
            "Leaving it for later. It holds the longest queue in the park all day. If you are alone, the single-rider line is much faster.",
            "别留到后面，它全天排队最长。一个人玩的话走单人通道快很多。",
          ),
        },
      },
      {
        time: "09:30",
        kind: "see",
        title: c("Soaring, then Pirates", "翱翔·飞越地平线，加勒比海盗"),
        photo: "treasure",
        note: c(
          "Two rides side by side in the back right. Soaring is a seated flight over the world's landmarks. Pirates is a boat ride with screens the size of buildings.",
          "两个项目在右后方挨着。「飞越地平线」是坐着飞越世界名胜。「加勒比海盗」是坐船，屏幕有楼那么大。",
        ),
        cost: c("Premier Access is usually ¥80–180 per ride", "尊享卡每个项目一般 80–180 元"),
        guide: {
          why: c(
            "Pirates of the Caribbean here is widely called the best ride Disney has built, and it is smooth the whole way.",
            "这里的加勒比海盗被公认是迪士尼最好的项目，全程平稳。",
          ),
          worth: c(
            "If Soaring's queue passes 60 minutes, buy Premier Access for it in the app. That is the one worth paying for.",
            "飞越地平线排队超过 60 分钟，就在 App 里买尊享卡。只有这个值得花钱。",
          ),
          avoid: c(
            "Surprising anyone afraid of heights on Soaring. Feet dangle. Tell them to lean back against the headrest.",
            "怕高的人要先打招呼，飞越地平线脚是悬空的。让他们头靠椅背。",
          ),
        },
      },
      {
        time: "11:30",
        kind: "eat",
        title: c("Early lunch", "早点吃午饭"),
        note: c(
          "Eat at 11:30 before the rush. Barbossa's Bounty in Treasure Cove seats you inside the Pirates ride setting. Order by phone in the app to skip the counter queue.",
          "11:30 吃，避开高峰。宝藏湾的「巴波萨烧烤」可以坐在海盗场景里吃。用 App 手机点餐，不用排柜台。",
        ),
        cost: c("About ¥100 per person", "人均约 100 元"),
      },
      {
        time: "12:30",
        kind: "see",
        title: c("Split up for an hour", "分开玩一小时"),
        photo: "tron",
        note: c(
          "Jing Xuan and Jing Yao: TRON Lightcycle, a launched coaster ridden leaning forward like a motorbike, and Seven Dwarfs Mine Train. Parents: Peter Pan's Flight, the castle walk-through, or coffee.",
          "Jing Xuan 和 Jing Yao：创极速光轮（像骑摩托一样趴着的弹射过山车）、七个小矮人矿山车。爸妈：小飞侠天空奇遇、城堡漫游，或喝杯咖啡。",
        ),
        guide: {
          worth: c(
            "Seven Dwarfs is a mild coaster. Posts say mothers who dislike thrill rides managed it fine, so the parents can try it.",
            "七个小矮人是小型过山车。笔记说不爱刺激的妈妈也能坐，爸妈可以试试。",
          ),
          avoid: c(
            "TRON for the parents, and Roaring Rapids unless you want to get wet. Sit in the middle if you do ride it.",
            "创极速光轮别让爸妈上。雷鸣山漂流会湿身，要玩就坐中间。",
          ),
        },
      },
      {
        time: "14:00",
        kind: "rest",
        title: c("Sit-down shows", "坐着看演出"),
        note: c(
          "The afternoon is for seats. The pirate stunt show in Treasure Cove and the Frozen sing-along are both indoors. The parade passes mid-afternoon. Check the time in the app and take a bench on the route 20 minutes early.",
          "下午以坐为主。宝藏湾的海盗特技表演和「冰雪奇缘」欢唱盛会都在室内。花车巡游下午经过，在 App 里查时间，提前 20 分钟在路线上找长椅。",
        ),
      },
      {
        time: "17:00",
        kind: "rest",
        title: c("Decide: home now or stay for the show", "决定：回去，还是留下看秀"),
        photo: "night",
        note: c(
          "The night show projects onto the castle with fireworks, just before closing. If the parents are done, leave now and beat the exit rush. If staying, eat at 17:30 and claim a spot facing the castle 40 minutes early.",
          "夜间秀是城堡投影加烟花，在闭园前。爸妈累了就现在走，避开散场人潮。要留下的话 17:30 吃晚饭，提前 40 分钟到城堡正面占位置。",
        ),
      },
      {
        time: "20:30",
        kind: "cab",
        title: c("Home", "回酒店"),
        place: hotel.place,
        note: c(
          "After the show the taxi queue is long. Either walk out during the last minute of fireworks, or take Metro Line 11 from Disney Resort station direct to Xujiahui (about 50 minutes, no change) and a short cab from there.",
          "灯光秀结束后出租车要排很久。要么在烟花最后一分钟就往外走，要么坐地铁 11 号线从迪士尼站直达徐家汇（约 50 分钟，不用换乘），再打个短车。",
        ),
        cost: c("Cab about ¥140 · metro ¥7", "打车约 140 元 · 地铁 7 元"),
      },
    ],
    tips: [
      c(
        "Download the Shanghai Disney Resort app at home and log in. It shows live queue times, the map, show times and sells Premier Access.",
        "出发前在家装好「上海迪士尼度假区」App 并登录。可以看实时排队、地图、演出时间，也在里面买尊享卡。",
      ),
      c(
        "Guests aged 60 and over get a senior ticket at about 25% off. Buy the right ticket type for each passport.",
        "60 岁及以上可买长者票，约七五折。按每本护照的年龄买对票种。",
      ),
      c(
        "Bring a power bank, a refillable bottle (free water fountains) and a light jacket. It gets cool after dark.",
        "带充电宝、水壶（园内有免费饮水机）和薄外套。天黑后会凉。",
      ),
      c(
        "Rent a wheelchair for Wai Koon just inside the main gate, even if she walks part of the day. The park is 10 km of walking, and the chair goes in most queues with the whole family.",
        "进门后给 Wai Koon 租一辆轮椅，哪怕她只坐一部分时间。园里一天要走十公里，轮椅大多可以跟全家一起排队。",
      ),
    ],
  },
  {
    id: "d6",
    date: "2026-10-27",
    weekday: c("Tuesday", "星期二"),
    label: c("Easy day", "轻松日"),
    title: c("Plane-tree streets, pack, the Bund at night", "梧桐路，收行李，夜外滩"),
    area: c("Former French Concession · The Bund", "武康路 · 外滩"),
    summary: c(
      "A slow morning after Disney. The prettiest street in the city, seen from a café terrace, is ten minutes from the hotel. Pack in the afternoon, then finish the trip with roast duck above the Bund and the skyline lit up.",
      "迪士尼之后睡晚一点。全市最好看的街离酒店只有十分钟，坐在咖啡馆露台上看。下午收行李，晚上在外滩楼上吃烤鸭、看夜景，给这趟旅行收尾。",
    ),
    leave: c("Leave hotel 10:00", "10:00 从酒店出发"),
    back: c("Hotel by about 21:00", "约 21:00 回到酒店"),
    walking: c("About 1.5 km, flat", "约 1.5 公里，平路"),
    stops: [
      {
        time: "10:00",
        kind: "cab",
        title: c("Cab to Wukang Mansion", "打车去武康大楼"),
        place: { zh: "武康大楼", addr: "上海市徐汇区淮海中路1850号" },
        photo: "wukangm",
        note: c(
          "A 1924 apartment block by the Hungarian architect László Hudec, shaped like a ship's bow to fit a sharp street corner.",
          "1924 年匈牙利建筑师邬达克设计的公寓，为了贴合尖角路口做成船头的形状。",
        ),
        cost: c("10–15 min · about ¥20", "10–15 分钟 · 约 20 元"),
        guide: {
          worth: c("The photo from the crossing in front. Two minutes is enough.", "在楼前路口拍一张，两分钟就够。"),
          avoid: c(
            "Stepping into the road for the shot. Wardens move people on, and it is a live junction.",
            "别站到马路上拍。有管理员会劝离，而且车很多。",
          ),
        },
      },
      {
        time: "10:25",
        kind: "coffee",
        title: c("Coffee on Wukang Road", "在武康路喝咖啡"),
        place: { zh: "武康庭", addr: "上海市徐汇区武康路376号" },
        photo: "wukangr",
        note: c(
          "Wukang Road is one kilometre of the former French Concession: plane trees planted a century ago and 1930s villas behind garden walls. Ferguson Lane, a courtyard of cafés at number 376, is 400 m up the road. Take the cab if that is too far.",
          "武康路是一公里的老法租界：百年前种下的梧桐，花园围墙后面是 1930 年代的洋房。往前 400 米的 376 号武康庭是一个开满咖啡馆的院子。嫌远就打车过去。",
        ),
        cost: c("Coffee about ¥40", "咖啡约 40 元"),
        alt: {
          title: c("For the best cup rather than the best terrace", "要喝最好的一杯，而不是坐最好的露台"),
          body: [
            c(
              "Rumors Coffee (鲁马滋咖啡), ten minutes away by cab on Hunan Road. A tiny hand-drip bar run for years by a Japanese-Chinese couple who roast their own beans. Long a favourite of people who live in the neighbourhood. Few seats, no terrace. I could not confirm its hours for this week, so check Amap before going.",
              "鲁马滋咖啡，在湖南路，打车十分钟。一间很小的手冲咖啡吧，一对中日夫妇开了很多年，自己烘豆。一直是住在附近的人的心头好。座位少，没有露台。这周的营业时间我没能核实，去之前在高德上看一下。",
            ),
          ],
        },
        guide: {
          why: c(
            "This is the Shanghai people move here for, and late October is when the leaves turn. A terrace seat gives you the street without walking its length.",
            "这才是让人想搬来上海的那一面，十月下旬叶子正转黄。坐在露台上就能看这条街，不用把它走完。",
          ),
          avoid: c(
            "Walking the full length to Anfu Road, and weekend afternoons, when it is packed with people posing.",
            "别一路走到安福路。周末下午到处是摆拍的人。",
          ),
        },
        red: {
          q: "武康路 安福路 citywalk",
          tip: c(
            "The most-liked route post says Wukang Road is now the busy one and prefers Julu Road and Fumin Road nearby. Those suit Jing Xuan and Jing Yao on another trip. They are walking routes.",
            "点赞最高的路线笔记说武康路现在人多，更推荐旁边的巨鹿路、富民路。那是纯走路的路线，留给 Jing Xuan 和 Jing Yao 下次来。",
          ),
        },
        local: [
          c(
            "Wukang Road is the mainstream choice now. The route with the most likes among people who live here is Julu Road, Fumin Road, Changle Road, Xinle Road and Yanqing Road: the same plane trees and old houses with small local shops and far fewer cameras. A cab can drop you at Fumin Road for one block of it.",
            "武康路现在是大路货。住在这里的人点赞最多的路线是巨鹿路、富民路、长乐路、新乐路、延庆路：一样的梧桐和老房子，多的是本地小店，少的是镜头。可以打车到富民路，只走一个街口。",
          ),
        ],
      },
      {
        time: "11:45",
        kind: "eat",
        title: c("Lunch: Lao Jishi", "午餐：老吉士"),
        place: { zh: "老吉士酒家(天平路店)", addr: "上海市徐汇区天平路41号" },
        photo: "lao-jishi",
        note: c(
          "A handful of tables in a small house on Tianping Road, and for thirty years the place Shanghainese name when asked where to eat home cooking.",
          "天平路一栋小楼里的几张桌子。三十年来，问上海人哪里吃本帮家常菜，说的都是这家。",
        ),
        cost: c("About ¥200 per person", "人均约 200 元"),
        book: "laojishi",
        guide: {
          worth: c(
            "Red-braised pork with egg, crab meat with tofu, scallion-roasted fish head, and 'soft heart' red dates stuffed with sticky rice.",
            "吉士红烧肉（加蛋）、蟹粉豆腐、葱烤鸦片鱼头、心太软。",
          ),
          avoid: c(
            "Turning up unbooked, and expecting warm service. It is brisk. You come for the food.",
            "别不订位就去，也别指望服务热情。动作很快，来就是为了吃。",
          ),
        },
        red: {
          q: "老吉士 天平路 点菜",
          more: [
            c(
              "A post titled 'a Shanghainese restaurant open for 30 years' and another ranking it first both say the same thing: order the red-braised pork.",
              "一篇叫「开了 30 年的上海菜」的笔记和另一篇把它排第一的笔记说的是同一句话：点红烧肉。",
            ),
          ],
          tip: c(
            "The top post on Shanghainese food is about this place: 'the pork tastes like the one at home' and 'crab tofu makes you eat two bowls of rice'.",
            "本帮菜点赞最高的笔记写的就是这家：「红烧肉和家里的一样」「蟹粉豆腐配饭能吃两碗」。",
          ),
        },
      },
      {
        time: "13:30",
        kind: "walk",
        title: c("Things to bring home", "买手信"),
        place: { zh: "港汇恒隆广场", addr: "上海市徐汇区虹桥路1号" },
        photo: "gateway",
        note: c(
          "Grand Gateway 66, a mall five minutes from the hotel. Everything is on the basement food floor, with lifts and seats, so it is one short loop.",
          "港汇恒隆广场，离酒店五分钟。要买的都在地下食品层，有电梯有座位，走一小圈就行。",
        ),
        guide: {
          worth: c(
            "White Rabbit sweets, butterfly pastries, Shen Da Cheng rice cakes (eat within two days), and Longjing tea if you did not buy in Hangzhou.",
            "大白兔奶糖、蝴蝶酥、沈大成糕团（两天内吃完），在杭州没买的话还可以买龙井。",
          ),
          avoid: c(
            "Souvenir shops at Yu Garden and Nanjing Road for the same goods at higher prices.",
            "同样的东西别在豫园和南京路的纪念品店买，贵。",
          ),
        },
      },
      {
        time: "15:00",
        kind: "rest",
        title: c("Hotel: pack and weigh", "回酒店：收行李，称重"),
        place: hotel.place,
        note: c(
          "23 kg per checked bag. Pack everything except tomorrow's clothes. Power banks and passports go in the cabin bag.",
          "托运行李每件 23 公斤。除了明天要穿的都收好。充电宝和护照放随身行李。",
        ),
      },
      {
        time: "17:30",
        kind: "eat",
        title: c("Last dinner: Sheng Yong Xing on the Bund", "最后一顿：晟永兴（外滩）"),
        place: { zh: "晟永兴(外滩店)", addr: "上海市黄浦区广东路20号外滩5号5楼" },
        photo: "duck",
        fromReel: true,
        note: c(
          "From your reel list. A Michelin-starred Beijing roast duck house on the fifth floor of Bund 5, with windows over the river.",
          "你们 reel 清单里的。外滩 5 号五楼的米其林一星北京烤鸭店，窗外就是黄浦江。",
        ),
        cost: c("Cab 30–40 min · about ¥400 per person · 021-6330 2885", "打车 30–40 分钟 · 人均约 400 元 · 021-6330 2885"),
        book: "duck",
        guide: {
          why: c(
            "The duck is roasted over jujube wood and carved at the table, and the Bund is outside the window. A good last night.",
            "鸭子用枣木烤，在桌边片；窗外就是外滩。最后一晚很合适。",
          ),
          worth: c(
            "The roast duck (half is enough for four with other dishes), the crisp skin with caviar, and a window table on the east side.",
            "烤鸭（配其他菜的话四个人半只就够）、鱼子酱配脆鸭皮，订东侧靠窗位。",
          ),
          avoid: c(
            "Leaving the booking late. Window tables go first. Say you want the river side when you call.",
            "别太晚订，靠窗位最先订完。打电话时说明要江景一侧。",
          ),
        },
        red: {
          q: "晟永兴 外滩 烤鸭",
          more: [
            c(
              "The caviar duck is about ¥600 a bird. One regular says the duck itself is good rather than astonishing and that the other dishes are the reason to come, above all the fried prawn balls.",
              "鱼子酱烤鸭一只约 600 元。有常客说鸭子不算惊艳，其他菜才是来的理由，尤其大虾球必点。",
            ),
            c(
              "Service is rated full marks, both Shanghai branches look onto the Oriental Pearl, and you leave with a small duck charm.",
              "服务被打满分，上海两家店都看得到东方明珠，吃完还送一个小鸭子挂件。",
            ),
            c(
              "One post is titled 'tried the ¥600 caviar duck on the Bund'. It is a splurge. Half a duck and three dishes for four keeps it nearer ¥300 a head.",
              "有篇笔记标题就是「外滩 600 一只的鱼子酱烤鸭」。这顿算奢侈。四个人点半只鸭加三个菜，人均能控制在 300 左右。",
            ),
          ],
        },
      },
      {
        time: "19:30",
        kind: "walk",
        title: c("The Bund at night", "夜外滩"),
        place: { zh: "外滩观景平台", addr: "上海市黄浦区中山东一路" },
        photo: "bund",
        note: c(
          "A mile of 1920s banks and trading houses in stone, lit gold, facing the towers of Pudong across the river. The promenade is two minutes from the restaurant door.",
          "一英里长的 1920 年代银行和洋行石楼，打着金色的灯，隔江对着浦东的高楼。出餐厅门两分钟就是观景平台。",
        ),
        guide: {
          why: c("The view that is on every postcard of the city, best after dark.", "每张上海明信片上的那个景，天黑后最好看。"),
          worth: c(
            "Cross to the promenade opposite the restaurant, 200 m, and take a bench. The old buildings are behind you and Pudong in front. Lights stay on until about 22:00.",
            "过马路到餐厅对面的观景平台，200 米，找张长椅坐下。身后是老建筑，眼前是浦东。灯大约亮到 22:00。",
          ),
          avoid: c(
            "The stretch at the foot of Nanjing East Road, where the crowd is thickest, and anyone inviting you to a tea ceremony or a bar. Both are well-known scams.",
            "南京东路口那一段人最挤。有人搭讪请你去喝茶、去酒吧的都别理，是出了名的骗局。",
          ),
        },
        red: {
          q: "外滩 夜景 机位 避雷",
          more: [
            c(
              "The lights come on at 19:00 sharp, according to several posts.",
              "好几篇笔记都说 19:00 准时亮灯。",
            ),
          ],
          tip: c(
            "Posts say Waibaidu Bridge is too crowded for photos and to walk 200 m further to Zhapu Road Bridge for the same view.",
            "笔记说外白渡桥上挤得拍不了照，再往前走 200 米到乍浦路桥，景一样。",
          ),
        },
        local: [
          c(
            "For the same skyline from the other bank, people who live here go to the roof terrace of the Museum of Art Pudong after 18:30 for sunset and the Bund lighting up.",
            "想从对岸看同一片天际线，本地人会在 18:30 以后上浦东美术馆的屋顶露台，看日落和外滩亮灯。",
          ),
        ],
      },
      {
        time: "20:15",
        kind: "cab",
        title: c("Home", "回酒店"),
        place: hotel.place,
        note: c(
          "Cars cannot stop on the Bund. Walk one block inland to Sichuan Middle Road to call the DiDi.",
          "外滩上不能停车。往里走一个街口到四川中路再叫滴滴。",
        ),
        cost: c("30–40 min · about ¥50", "30–40 分钟 · 约 50 元"),
      },
    ],
    tips: [
      c(
        "Tell the front desk tonight that you leave at 08:30 tomorrow and ask them to pre-book two cars or one 6-seater.",
        "今晚跟前台说明天 08:30 出发，请他们预约两辆车或一辆六座车。",
      ),
      c("Spend down the Alipay balance and leftover cash today.", "今天把支付宝余额和剩下的现金花掉。"),
    ],
    planB: {
      title: c("If it rains", "如果下雨"),
      body: c(
        "West Bund Museum, 15 minutes from the hotel: the Computer Worlds exhibition (Tue–Sun 11:00–18:00), indoors with a river view. Keep lunch and dinner as planned.",
        "去西岸美术馆，离酒店 15 分钟：「Computer Worlds」展（周二至周日 11:00–18:00），室内，看得到江景。午餐晚餐照旧。",
      ),
    },
  },
  {
    id: "d7",
    date: "2026-10-28",
    weekday: c("Wednesday", "星期三"),
    label: c("Fly home", "回家"),
    title: c("Out the door at 08:30", "08:30 出门"),
    area: c("Xujiahui → Pudong Airport", "徐家汇 → 浦东机场"),
    summary: c(
      "The flight is 13:30. Morning traffic to Pudong is slow, and four people with bags take time at check-in. No sightseeing today.",
      "13:30 的航班。早上去浦东路上堵，四个人托运行李也费时间。今天不安排景点。",
    ),
    leave: c("Leave hotel 08:30", "08:30 从酒店出发"),
    back: c("Land KLIA 19:05", "19:05 抵达吉隆坡"),
    walking: c("Airport only", "只有机场里那一段"),
    stops: [
      {
        time: "07:30",
        kind: "eat",
        title: c("Breakfast and check out", "早餐，退房"),
        place: hotel.place,
        note: c(
          "Eat what you bought last night or something from the shop downstairs. Hand back key cards and check the safe, the bathroom and every socket for chargers.",
          "吃昨晚买好的，或到楼下店里买。还房卡，检查保险箱、浴室，还有每个插座上的充电器。",
        ),
      },
      {
        time: "08:30",
        kind: "cab",
        title: c("Cab to Pudong Airport T1", "打车去浦东机场 T1"),
        place: { zh: "浦东国际机场 T1航站楼 国际出发", addr: "上海市浦东新区迎宾大道6000号" },
        photo: "pvg",
        note: c(
          "Two cars or one 6-seater, same as arrival. Say Terminal 1, international departures.",
          "和来的时候一样，两辆车或一辆六座车。跟司机说 T1 航站楼国际出发。",
        ),
        cost: c("60–80 min · about ¥200–230 per car", "60–80 分钟 · 每车约 200–230 元"),
      },
      {
        time: "10:00",
        kind: "walk",
        title: c("Check in, security, immigration, last coffee", "值机，安检，出境，最后一杯"),
        note: c(
          "Ask the China Eastern check-in desk for wheelchair assistance to the gate. Pudong T1 is a long walk. Counters open three hours before departure. Power banks must show a CCC mark and their capacity, and stay in hand luggage.",
          "在东航值机柜台申请轮椅送到登机口，浦东 T1 要走很远。柜台起飞前三小时开。充电宝要有 3C 标志和容量标示，只能放随身行李。",
        ),
      },
      {
        time: "13:30",
        kind: "fly",
        title: c("MU8651 to Kuala Lumpur", "MU8651 飞吉隆坡"),
        note: c("Lands KLIA Terminal 1 at 19:05.", "19:05 抵达吉隆坡 T1。"),
      },
    ],
    tips: [
      c(
        "Tax refund: if you spent over ¥200 in one tax-free shop and got the form, the customs desk is before check-in. Allow 20 extra minutes.",
        "退税：在同一家退税商店消费满 200 元并拿了退税单的话，海关柜台在值机之前，多留 20 分钟。",
      ),
    ],
  },
];
