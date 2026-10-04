export type Lang = "en" | "zh";
export type Copy = { en: string; zh: string };

export type Kind = "fly" | "cab" | "train" | "walk" | "see" | "eat" | "rest" | "boat" | "coffee";

export type Place = {
  /** Chinese name, shown to drivers and used as the map search keyword */
  zh: string;
  /** Chinese street address */
  addr?: string;
};

export type Stop = {
  time: string;
  kind: Kind;
  title: Copy;
  note: Copy;
  place?: Place;
  cost?: Copy;
  /** id of a checklist item this stop depends on */
  book?: string;
  optional?: boolean;
  /** key into lib/photos.ts and public/photos */
  photo?: string;
  /** one of the places from the Instagram reels the family saved */
  fromReel?: boolean;
  guide?: { why?: Copy; worth?: Copy; avoid?: Copy };
  /** what Rednote posts say, plus the search to read more */
  red?: { q?: string; tip?: Copy; more?: Copy[] };
  /** what locals recommend instead of, or as well as, a mainstream stop */
  local?: Copy[];
  /** a different way to spend this slot */
  alt?: { title: Copy; body: Copy[] };
};

export type Day = {
  id: string;
  /** ISO date in Shanghai */
  date: string;
  weekday: Copy;
  label: Copy;
  title: Copy;
  area: Copy;
  summary: Copy;
  leave: Copy;
  back: Copy;
  walking: Copy;
  stops: Stop[];
  tips: Copy[];
  planB?: { title: Copy; body: Copy };
};

export type Todo = {
  id: string;
  /** ISO date it should be done by, or null for "before you fly" */
  due: string | null;
  title: Copy;
  detail: Copy;
  href?: string;
  urgent?: boolean;
};

function c(en: string, zh: string): Copy {
  return { en, zh };
}

export const tripStart = "2026-10-22";
export const tripEnd = "2026-10-28";

export const family = [
  { name: "Jing Xuan Lim", note: c("Adult ticket", "成人票") },
  { name: "Jing Yao Lim", note: c("Adult ticket", "成人票") },
  { name: "Wai Koon Lee", note: c("61 · senior ticket · short walks only", "61岁 · 长者票 · 不能走太多") },
  { name: "Chee Onn Lim", note: c("Birthday Sat 24 Oct", "24日星期六生日") },
];

export const hotel = {
  name: "IntercityHotel Shanghai Xujiahui",
  place: {
    zh: "上海徐家汇城际酒店 IntercityHotel",
    addr: "上海市徐汇区中山西路1515号1号楼",
  } as Place,
  address: c("Building 1, 1515 Zhongshan West Road, Xuhui", "徐汇区中山西路1515号1号楼"),
  metro: c(
    "Yishan Road station (Lines 3, 4, 9), Exit 5, about 4 minutes on foot.",
    "宜山路站（3、4、9号线）5号口，步行约4分钟。",
  ),
  checkIn: c("Thu 22 Oct, from 14:00", "10月22日星期四 14:00 起"),
  checkOut: c("Wed 28 Oct, by 12:00", "10月28日星期三 12:00 前"),
  room: c(
    "Booked: one King Room for Wai Koon and Chee Onn, no breakfast. The second room for Jing Xuan and Jing Yao is NOT booked yet.",
    "已订：一间大床房（Wai Koon 和 Chee Onn），不含早餐。Jing Xuan 和 Jing Yao 的第二间房还没订。",
  ),
};

export const flights = [
  {
    dir: c("Out", "去程"),
    code: "MU8592 / FM864",
    date: c("Thu 22 Oct", "10月22日 星期四"),
    from: "KUL T1",
    to: "PVG T1",
    dep: "07:05",
    arr: "12:30",
  },
  {
    dir: c("Back", "回程"),
    code: "MU8651 / FM865",
    date: c("Wed 28 Oct", "10月28日 星期三"),
    from: "PVG T1",
    to: "KUL T1",
    dep: "13:30",
    arr: "19:05",
  },
];

export const bags = c(
  "Per person: 1 personal item, 1 cabin bag (8 kg), 1 checked bag (23 kg).",
  "每人：1件随身物品，1件登机行李（8公斤），1件托运行李（23公斤）。",
);

export const todos: Todo[] = [
  {
    id: "room2",
    due: "2026-10-05",
    urgent: true,
    title: c("Book the second hotel room", "订第二间房"),
    detail: c(
      "Only one room is booked and it sleeps two. Jing Xuan and Jing Yao need a room for 22 to 28 October, six nights, at IntercityHotel Shanghai Xujiahui. Ask for the same floor.",
      "目前只订了一间房，最多住两人。Jing Xuan 和 Jing Yao 需要 10月22日至28日共六晚的房间，订同一家酒店，尽量要求同一层。",
    ),
    href: "https://www.trip.com/hotels/shanghai-hotel-detail-123245486/intercityhotel-shanghai-xujiahui/",
  },
  {
    id: "birthday",
    due: "2026-10-10",
    urgent: true,
    title: c("Reserve the birthday dinner at Waitan Jiayan", "订生日晚餐：外滩家宴"),
    detail: c(
      "Sat 24 Oct, 18:00, four people, window table facing the river, birthday. Waitan Jiayan (外滩家宴·上海菜), Bund-Yu Garden branch, 2nd floor, Bund 22, 22 Zhongshan East 2nd Road. Book on Dianping (大众点评) or ask the hotel to call. Make sure it is this branch, not the Jiujiang Road one.",
      "10月24日星期六 18:00，四位，靠窗江景位，庆生。外滩家宴·上海菜（外滩豫园店），中山东二路22号外滩22号2楼。在大众点评订位，或请酒店帮忙打电话。认准这家店，不是九江路那家。",
    ),
  },
  {
    id: "train-hz",
    due: "2026-10-09",
    title: c("Buy Hangzhou train tickets", "买杭州高铁票"),
    detail: c(
      "Sales open 15 days ahead, so Friday's trains go on sale 9 October. Shanghai Hongqiao → Hangzhou East around 08:30, and back around 17:30. Four seats together. Use the 12306 app (passport sign-up takes a day to verify) or Trip.com.",
      "提前 15 天开售，星期五的车 10月9日 开卖。上海虹桥 → 杭州东，08:30 左右；回程 17:30 左右。四个连座。用 12306 App（护照注册要一天审核）或 Trip.com。",
    ),
    href: "https://www.12306.cn/en/index.html",
  },
  {
    id: "train-sz",
    due: "2026-10-11",
    title: c("Buy Suzhou train tickets", "买苏州高铁票"),
    detail: c(
      "On sale from 11 October. Shanghai Hongqiao → Suzhou (苏州站) around 08:20, and back around 17:00.",
      "10月11日 开售。上海虹桥 → 苏州站，08:20 左右；回程 17:00 左右。",
    ),
    href: "https://www.12306.cn/en/index.html",
  },
  {
    id: "disney",
    due: "2026-10-11",
    title: c("Buy Disneyland tickets", "买迪士尼门票"),
    detail: c(
      "Mon 26 Oct. Standard ticket is ¥499. Buying 15 or more days ahead can earn the early-bird discount. Two standard tickets plus senior tickets for anyone 60 or over. Enter passport numbers exactly. Official site, app, Trip.com or Klook.",
      "10月26日星期一。标准票 499 元。提前 15 天以上买可能有早鸟优惠。两张标准票，60 岁及以上买长者票。护照号码要填准确。官网、官方 App、Trip.com 或 Klook 都可以。",
    ),
    href: "https://www.shanghaidisneyresort.com/en/commerce/ticketing-v2/tickets/shdr-theme-park-tickets/ThemePark/booth?categoryId=ThemePark&groupID=ticket-group-shdr-theme-park-tickets-one-day-ticket-hybrid",
  },
  {
    id: "disney-hours",
    due: "2026-10-14",
    title: c("Check Disney hours for 26 Oct", "查 10月26日 迪士尼开放时间"),
    detail: c(
      "The park publishes hours about two weeks ahead. Note the opening time, parade time and night show time, then adjust Monday's leave time if needed.",
      "乐园大约提前两周公布时间。记下开园、巡游和夜间秀的时间，需要的话调整星期一的出发时间。",
    ),
    href: "https://www.shanghaidisneyresort.com/en/park-calendar/",
  },
  {
    id: "museum",
    due: "2026-10-18",
    urgent: true,
    title: c("Reserve Suzhou Museum", "预约苏州博物馆"),
    detail: c(
      "Free, but the slot for Sun 25 Oct opens exactly 7 days ahead on Sun 18 Oct. Tickets release at 08:00. Rednote posts say the Alipay mini program is faster than WeChat, which makes you wait through a 9-second notice. Fill in all four passports beforehand and be on the page before 08:00. Morning slots vanish in seconds, so take an afternoon slot if 11:00 is gone and we swap the garden and museum order.",
      "免费，但 10月25日 的名额在 10月18日（提前 7 天）才放出。早上 08:00 放票。小红书上说支付宝小程序比微信快，微信要先看 9 秒提示。提前把四本护照信息填好，08:00 前就停在页面上。上午时段几秒就没，11:00 抢不到就选下午，园林和博物馆的顺序对调即可。",
    ),
  },
  {
    id: "garden",
    due: "2026-10-18",
    title: c("Buy Humble Administrator's Garden tickets", "买拙政园门票"),
    detail: c(
      "Timed real-name tickets open 7 days ahead. WeChat official account「苏州园林旅游」, Sun 25 Oct, 09:00–10:00 slot, ¥80 each. Rednote posts say orders on third-party apps can fail hours later and that buying one ticket at a time works when a group order shows sold out. Ask at the gate whether the senior discount applies to foreign passports.",
      "实名分时段门票，提前 7 天开售。微信公众号「苏州园林旅游」，10月25日 09:00–10:00 时段，每人 80 元。小红书上说第三方平台的订单可能几小时后出票失败；多人一起买显示无票时，一张一张买能买到。长者优惠是否适用外国护照，到门口问。",
    ),
  },
  {
    id: "louwailou",
    due: "2026-10-20",
    title: c("Reserve Lou Wai Lou, Hangzhou", "订楼外楼（杭州）"),
    detail: c(
      "Fri 23 Oct, 11:30, four people, lake-view table. Ask the hotel front desk to call for you if the line is in Chinese only.",
      "10月23日星期五 11:30，四位，看湖的桌。电话只讲中文的话，请酒店前台帮忙打。",
    ),
  },
  {
    id: "duck",
    due: "2026-10-20",
    title: c("Reserve Sheng Yong Xing on the Bund", "订晟永兴（外滩）"),
    detail: c(
      "Tue 27 Oct, 17:30, four people, river-side window table. Bund 5, 5th floor. Phone 021-6330 2885.",
      "10月27日星期二 17:30，四位，江景靠窗位。外滩5号5楼。电话 021-6330 2885。",
    ),
  },
  {
    id: "songhelou",
    due: "2026-10-20",
    title: c("Reserve Song He Lou, Suzhou", "订松鹤楼（苏州）"),
    detail: c(
      "Sun 25 Oct, 12:30, four people, Guanqian Street branch on Taijian Lane.",
      "10月25日星期日 12:30，四位，太监弄的观前街店。",
    ),
  },
  {
    id: "laojishi",
    due: "2026-10-20",
    title: c("Reserve Lao Jishi", "订老吉士"),
    detail: c(
      "Tue 27 Oct, 11:45, four people, Tianping Road branch. It has only a handful of tables.",
      "10月27日星期二 11:45，四位，天平路店。店里只有几张桌子。",
    ),
  },
  {
    id: "renheguan",
    due: "2026-10-20",
    title: c("Reserve Ren He Guan", "订人和馆"),
    detail: c(
      "Thu 22 Oct, 18:00, four people, Zhaojiabang Road branch. Do not skip this one: Rednote posts report walk-in waits of up to four hours. Book online through Dianping.",
      "10月22日星期四 18:00，四位，肇嘉浜路店。这个一定要订：小红书上有人说不订位等了四个小时。在大众点评上预约。",
    ),
  },
  {
    id: "wheelchair",
    due: "2026-10-19",
    title: c("Request airport wheelchair assistance", "申请机场轮椅服务"),
    detail: c(
      "Call China Eastern at least 48 hours before each flight (MU8592 on 22 Oct, MU8651 on 28 Oct) and request wheelchair assistance for Wai Koon Lee. It is free and takes her from check-in to the aircraft door, with the family alongside.",
      "两趟航班（10月22日 MU8592、10月28日 MU8651）都至少提前 48 小时打给东航，为 Wai Koon Lee 申请轮椅服务。免费，从值机柜台送到机舱门口，家人可以陪同。",
    ),
  },
  {
    id: "alipay",
    due: null,
    title: c("Set up Alipay on every phone", "每部手机都装好支付宝"),
    detail: c(
      "Install Alipay, verify with passport, and add a Visa or Mastercard. Do the same in WeChat Pay as a backup. Touch 'n Go eWallet also scans Alipay+ codes in China. Almost nowhere takes foreign cards directly.",
      "装支付宝，用护照实名，绑定 Visa 或 Mastercard。微信支付也照做一遍当备用。Touch 'n Go eWallet 在中国也能扫 Alipay+ 码。几乎没有地方直接刷外卡。",
    ),
  },
  {
    id: "apps",
    due: null,
    title: c("Install the apps", "装好这些 App"),
    detail: c(
      "DiDi (the app, or the one inside Alipay; both have English), Amap 高德地图 for navigation, Shanghai Disney Resort, 12306 or Trip.com, and a translator that works offline. Google Maps is unreliable in China.",
      "滴滴（支付宝里就有，有英文）、高德地图、上海迪士尼度假区、12306 或 Trip.com，还有可离线使用的翻译。谷歌地图在中国不好用。",
    ),
  },
  {
    id: "data",
    due: null,
    title: c("Sort out mobile data", "准备好上网"),
    detail: c(
      "Roaming or a travel eSIM for at least two phones. Roaming data still reaches WhatsApp, Google and this page. Hotel Wi-Fi does not.",
      "至少两部手机开漫游或买旅行 eSIM。漫游流量可以用 WhatsApp、Google 和这个网页，酒店 Wi-Fi 不行。",
    ),
  },
  {
    id: "arrival",
    due: null,
    title: c("Fill the arrival card online", "在线填入境卡"),
    detail: c(
      "China's immigration arrival card can be filled online in the days before landing. Screenshot the QR code for each person. Malaysian passports enter visa-free for up to 30 days. Check each passport has six months left.",
      "中国入境卡可以在抵达前几天在线填写，每人的二维码截图保存。马来西亚护照免签停留最多 30 天。检查每本护照有效期还有六个月以上。",
    ),
    href: "https://s.nia.gov.cn/ArrivalCardFillingPC/",
  },
  {
    id: "offline",
    due: null,
    title: c("Save this page to the home screen", "把这个网页加到主屏幕"),
    detail: c(
      "Open it once on each phone and choose Add to Home Screen. It then opens without a connection. Also keep photos of all four passports and the hotel booking in the family chat.",
      "每部手机打开一次，选「添加到主屏幕」，之后没网也能看。四本护照和酒店订单的照片也发到家庭群里。",
    ),
  },
];

export const essentials: { id: string; title: Copy; items: Copy[] }[] = [
  {
    id: "move",
    title: c("Getting around", "交通"),
    items: [
      c(
        "The plan is built around short walks for Wai Koon, with the family together throughout: cabs door to door, boats in Hangzhou and Suzhou, and a seat at every stop. Each day shows its walking total at the top.",
        "整个行程按 Wai Koon 不能多走来安排，全家始终在一起：打车到门口，杭州和苏州都坐船，每一站都有地方坐。每天顶部写着当天的步行量。",
      ),
      c(
        "Hongqiao Railway Station is the longest walk of the train days. Have the cab drop at the departures level, and ask the service desk (服务台) inside for a wheelchair to the platform.",
        "坐高铁那两天，虹桥火车站里走的路最长。让司机在出发层下客，进站后到服务台借轮椅送到站台。",
      ),
      c(
        "Cabs are cheap and the default for four people. Use DiDi inside Alipay: type the destination in English or paste the Chinese name from this page. Pay in the app.",
        "四个人打车最方便，也便宜。用支付宝里的滴滴：输入英文目的地，或贴上这个网页里的中文名。在 App 里付款。",
      ),
      c(
        "Street taxis are fine too. Show the driver the red card on any stop. Pay with Alipay or cash.",
        "路边出租车也可以。把每个行程点的「给司机看」亮给司机。用支付宝或现金付。",
      ),
      c(
        "Metro from the hotel: Yishan Road station, Lines 3, 4 and 9. Pay with the Transport code in Alipay. Line 11 from Xujiahui goes direct to Disney.",
        "酒店旁的地铁：宜山路站，3、4、9号线。用支付宝的乘车码。徐家汇站的 11 号线直达迪士尼。",
      ),
      c(
        "High-speed trains: passport is the ticket. Arrive 40 minutes early, go through security, find your gate on the board by train number, and line up at the staffed lane.",
        "高铁：护照就是车票。提前 40 分钟到，过安检，按车次在大屏上找检票口，排人工通道。",
      ),
    ],
  },
  {
    id: "money",
    title: c("Money", "付款"),
    items: [
      c(
        "Alipay or WeChat Pay with your own card works nearly everywhere. Payments under ¥200 carry no fee. Above that the app adds 3%.",
        "绑了自己银行卡的支付宝或微信支付几乎到处能用。单笔 200 元以下免手续费，超过收 3%。",
      ),
      c(
        "Carry about ¥1,000 in cash across the family for the odd stall or a dead phone.",
        "全家身上带约 1000 元现金，应付小摊或手机没电。",
      ),
      c("No tipping anywhere.", "任何地方都不用给小费。"),
    ],
  },
  {
    id: "weather",
    title: c("Weather and what to wear", "天气和穿着"),
    items: [
      c(
        "Late October: about 14 to 22°C, dry more often than not. Sunset around 17:10.",
        "十月下旬：约 14 到 22 度，多数日子不下雨。日落约 17:10。",
      ),
      c(
        "Layers, a light jacket, a small umbrella, and shoes already broken in. Disney and Suzhou are the big walking days.",
        "洋葱式穿法，薄外套，小雨伞，穿惯的鞋。迪士尼和苏州那两天走得最多。",
      ),
      c(
        "Bring one universal plug adapter per room. Malaysian three-pin plugs do not fit Chinese sockets, which take two flat pins or angled three-pin. Voltage is the same 220 to 240V.",
        "每间房带一个万能转换插头。马来西亚的三脚插头插不进中国插座（两扁脚或斜三脚）。电压一样，都是 220 到 240 伏。",
      ),
    ],
  },
  {
    id: "health",
    title: c("Health and help", "健康和求助"),
    items: [
      c("Police 110 · Ambulance 120 · Fire 119.", "报警 110 · 急救 120 · 火警 119。"),
      c(
        "Shanghai tourist hotline with English: 12345. Malaysian Consulate General in Shanghai: +86 21 6090 0360.",
        "上海市民热线（有英语）：12345。马来西亚驻上海总领事馆：+86 21 6090 0360。",
      ),
      c(
        "Bring regular medication for the full week plus two days, in original boxes, in the cabin bag.",
        "常用药带足一周再多两天的量，原包装，放随身行李。",
      ),
      c(
        "Drink bottled or boiled water. Every hotel room has a kettle.",
        "喝瓶装水或烧开的水。酒店房间都有电热水壶。",
      ),
    ],
  },
];

export const phrases: { en: string; zh: string; pinyin: string }[] = [
  { en: "Please take me to this address.", zh: "请带我去这个地址。", pinyin: "Qǐng dài wǒ qù zhège dìzhǐ." },
  { en: "Please use the meter.", zh: "请打表。", pinyin: "Qǐng dǎ biǎo." },
  { en: "Four people. We have a reservation.", zh: "四位，我们订了位。", pinyin: "Sì wèi, wǒmen dìng le wèi." },
  { en: "Less oil, less salt, not spicy, please.", zh: "少油少盐，不要辣。", pinyin: "Shǎo yóu shǎo yán, bú yào là." },
  { en: "The bill, please.", zh: "买单，谢谢。", pinyin: "Mǎidān, xièxie." },
  { en: "Where is the toilet?", zh: "洗手间在哪里？", pinyin: "Xǐshǒujiān zài nǎlǐ?" },
  { en: "Can I pay with Alipay?", zh: "可以用支付宝吗？", pinyin: "Kěyǐ yòng Zhīfùbǎo ma?" },
  { en: "We need a doctor.", zh: "我们需要看医生。", pinyin: "Wǒmen xūyào kàn yīshēng." },
];

export const reelPicks: { name: string; zh: string; note: Copy; planned: Copy | null }[] = [
  {
    name: "Ren He Guan",
    zh: "人和馆",
    note: c("Old-school Shanghainese, Michelin-listed.", "老派本帮菜，米其林收录。"),
    planned: c("Thursday dinner", "星期四晚餐"),
  },
  {
    name: "Lai Lai Xiao Long",
    zh: "莱莱小笼",
    note: c("Crab-roe soup dumplings and fried pork chop.", "蟹粉小笼和炸猪排。"),
    planned: c("Saturday lunch", "星期六午餐"),
  },
  {
    name: "Luo Chun Ge",
    zh: "萝春阁",
    note: c("The original pan-fried bun, reopened 2026.", "生煎的鼻祖，2026 年复业。"),
    planned: c("Saturday, after lunch", "星期六午餐后"),
  },
  {
    name: "Manner Coffee, North Bund",
    zh: "Manner Coffee 国客滨江店",
    note: c("Glass café facing the skyline.", "正对江景的玻璃房咖啡店。"),
    planned: c("Saturday sunset", "星期六日落"),
  },
  {
    name: "Sheng Yong Xing",
    zh: "晟永兴",
    note: c("Roast duck above the Bund, one Michelin star.", "外滩楼上的烤鸭，米其林一星。"),
    planned: c("Tuesday dinner", "星期二晚餐"),
  },
  {
    name: "Nan Li Shan Fang",
    zh: "南里山房",
    note: c(
      "Huaiyang cooking in a garden-courtyard setting. Not placed in the plan: I could not confirm its address. Search it on Dianping if you want to swap it in for a dinner.",
      "江南庭院风格的淮扬菜。没排进行程：地址没能核实。想去的话在大众点评搜一下，可以替换某一顿晚餐。",
    ),
    planned: null,
  },
];

export const redPicks: { q: string; title: Copy; take: Copy }[] = [
  {
    q: "上海迪士尼 带父母 攻略",
    title: c("Disneyland with parents", "带父母玩迪士尼"),
    take: c(
      "Pirates, Soaring and Zootopia are the three to do together. Seven Dwarfs is a mild coaster most mothers manage. Keep TRON for the young ones.",
      "加勒比海盗、飞越地平线、热力追踪三个一起玩。七个小矮人是小过山车，多数妈妈能坐。创极速光轮留给年轻人。",
    ),
  },
  {
    q: "西湖半日游 不费体力",
    title: c("West Lake without the long walk", "不费体力游西湖"),
    take: c(
      "Cab in, boat to the island (about ¥70), boat on to Huagang, Leifeng Pagoda, sightseeing cart back round. Carry a ¥1 note and your own water.",
      "打车到，坐船上岛（约 70 元），再坐船到花港，雷峰塔，观光车绕回。带一张一元纸币，自己带水。",
    ),
  },
  {
    q: "苏州景点 避雷",
    title: c("Suzhou: what is worth it", "苏州：哪些值得去"),
    take: c(
      "Arrive at Suzhou station, not the other two. Crab-roe noodles by the Pingjiang canal are the most-recommended lunch after squirrel fish.",
      "到苏州站，别到另外两个站。除了松鼠桂鱼，平江河边的蟹黄面是被推荐最多的。",
    ),
  },
  {
    q: "上海旅游 避雷",
    title: c("Shanghai's ten tourist traps", "上海十大游客坑"),
    take: c(
      "Skip Tianzifang. Do not eat on Nanjing East Road. See the skyline from the North Bund. Photograph from Zhapu Road Bridge, not Waibaidu. Yu Garden is better at opening or after dark.",
      "田子坊可以不去。别在南京东路吃饭。到北外滩看天际线。拍照去乍浦路桥，不去外白渡桥。豫园开门时或天黑后去。",
    ),
  },
  {
    q: "上海 citywalk 梧桐区 路线",
    title: c("A quieter plane-tree walk", "更安静的梧桐区路线"),
    take: c(
      "Julu Road, Fumin Road, Changle Road, Xinle Road, Yanqing Road: the same trees and old houses as Wukang Road with far fewer people.",
      "巨鹿路、富民路、长乐路、新乐路、延庆路：和武康路一样的梧桐和老房子，人少得多。",
    ),
  },
  {
    q: "上海 本帮菜 推荐",
    title: c("Where locals eat Shanghainese", "本地人吃本帮菜的地方"),
    take: c(
      "Lao Jishi tops the list. For a river view at about ¥100 a head, Waitan Jiayan at Bund 22 is the one posts keep naming.",
      "老吉士排第一。想要江景又人均一百左右，笔记反复提到外滩22号的外滩家宴。",
    ),
  },
];

export const checked = c(
  "Plan rebuilt 4 October 2026. Prices, hours and cab times are estimates from published sources, with tips from Rednote posts read the same day. Confirm anything marked to book. Photos are from Wikimedia Commons and credited under each one. Dish photos show the dish, not the restaurant.",
  "行程于 2026年10月4日 重新整理。价格、时间和车程都是根据公开资料的估计，另参考了当天读到的小红书笔记。标明要预订的请再确认。照片来自维基共享资源，每张下方有署名。菜品照片是那道菜的示意，不是该餐厅实拍。",
);

export const sources: { label: string; href: string }[] = [
  { label: "Hotel listing", href: "https://www.trip.com/hotels/shanghai-hotel-detail-123245486/intercityhotel-shanghai-xujiahui/" },
  { label: "Ren He Guan, Michelin", href: "https://guide.michelin.com/en/shanghai-municipality/shanghai/restaurant/ren-he-guan-zhaojiabang-road" },
  { label: "Sheng Yong Xing, Michelin", href: "https://guide.michelin.com/sg/zh_CN/shanghai-municipality/shanghai/restaurant/sheng-yong-xing" },
  { label: "Luo Chun Ge reopening, Jan 2026", href: "https://news.qq.com/rain/a/20260129A03MIQ00" },
  { label: "Malaysian Consulate General, Shanghai", href: "https://www.kln.gov.my/web/chn_shanghai" },
  { label: "Hongqiao to Hangzhou East trains", href: "https://www.gaotie.com.cn/lieche/shanghaihongqiao-hangzhoudong.html" },
  { label: "Hongqiao to Suzhou trains", href: "https://www.gaotie.com.cn/lieche/shanghaihongqiao-suzhou.html" },
  { label: "Humble Administrator's Garden tickets", href: "http://suzhou.bendibao.com/tour/202178/91256.shtm" },
  { label: "Suzhou garden prices", href: "https://ylj.suzhou.gov.cn/szsylj/mpjg/wztt.shtml" },
  { label: "Disney park calendar", href: "https://www.shanghaidisneyresort.com/en/park-calendar/" },
  { label: "Disney Premier Access", href: "https://www.shanghaidisneyresort.com/en/experience/tour/vip-premier-access" },
  { label: "Disney taxi drop-off", href: "https://www.shanghaidisneyresort.com/en/experience/guest-service/taxi" },
  { label: "West Bund Museum, Computer Worlds", href: "https://wbmshanghai.com/en/exhibition/1615-event-computer-worlds/" },
  { label: "Rockbund Art Museum", href: "https://www.rockbundartmuseum.org/visit" },
];
