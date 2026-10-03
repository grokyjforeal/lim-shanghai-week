import { bi, type Bi } from "@/lib/text";
import type { Day, Photo } from "@/lib/trip";

const b = bi;

function photo(src: string, altEn: string, altZh: string, creditEn: string, creditZh: string): Photo {
  return { src, alt: b(altEn, altZh), credit: b(creditEn, creditZh) };
}

export const tailDays: Day[] = [
  {
    id: "mon",
    date: b("26 Oct", "10月26日"),
    dayNum: "05",
    weekday: b("Monday", "周一"),
    title: b("Zhangyuan, then a bench", "张园，然后找张长椅"),
    area: b("Jing'an", "静安"),
    leave: b("10:30 from the hotel", "10:30 从酒店出发"),
    sleep: b("IntercityHotel Shanghai Xujiahui", "IntercityHotel 上海徐家汇"),
    meal: b("A seated lunch in the lanes, or next door in the mall", "弄堂里坐下吃，或旁边商场"),
    summary: b(
      "The east section of Zhangyuan opened on 30 June 2026. Monday is the right day for it, because Rockbund and the West Bund museum are both closed.",
      "张园东区 2026 年 6 月 30 日开放。周一适合去，因为外滩美术馆和西岸美术馆这天都关。",
    ),
    region: "shanghai",
    route: ["home", "jingan"],
    stops: [
      {
        id: "metro-jingan",
        kicker: b("Metro", "地铁"),
        title: b("To West Nanjing Road", "到南京西路"),
        where: b("Line 3 or 4 to Zhongshan Park, then Line 2", "3 号线或 4 号线到中山公园，再换 2 号线"),
        body: b(
          "Get off at West Nanjing Road. The city note says the new east section links to HKRI Taikoo Hui and opens from North Maoming Road. Walk in there. Published house numbers for Zhangyuan do not all agree, so the metro and North Maoming Road are the approach.",
          "在南京西路下车。市政府的稿子写，新的东区和兴业太古汇连上了，可以从茂名北路进去。从那里走进去。张园公开的门牌并不一致，所以认地铁和茂名北路。",
        ),
        pin: "jingan",
        highlights: [
          b("No museum opens this morning, so the clock is about energy, not a ticket.", "今天早上没有必须赶上的馆，时间看体力，不看门票。"),
        ],
        avoid: [
          b("Do not hunt a single house number. The sources disagree.", "不要死认一个门牌。资料对不上。"),
        ],
      },
      {
        id: "lanes",
        kicker: b("See", "看"),
        title: b("East lanes, then the west lanes", "先东区，再西区"),
        where: b("Between West Nanjing, North Maoming, Weihai, and Shimen No. 2", "南京西路、茂名北路、威海路、石门二路这一块"),
        body: b(
          "The east section is the 2026 opening. The west section has been open since November 2022 and is where people actually sit. Stay inside this block. Launch pop-ups from June, including a coffee truck and a Barbie stall, were not confirmed for this Monday, so they are not a stop.",
          "东区是 2026 年开的。西区 2022 年 11 月就开了，真正能坐的是那边。就待在这一块里。六月开幕时的快闪，包括咖啡车和芭比店，没有确认这个周一还在，所以不算一站。",
        ),
        pin: "jingan",
        highlights: [
          b("The city page says preserved shikumen houses in the new section were turned into shops, with a new door from North Maoming Road and a link into HKRI Taikoo Hui.", "市政府的页面写，新开的一段里，留下来的石库门改成了店铺，茂名北路有新的入口，并且和兴业太古汇连上了。"),
          b("West section: open since November 2022, the part with longer-running places to sit.", "西区：2022 年 11 月起开放，能坐下来的老店多在这边。"),
        ],
        said: {
          text: b(
            "The same city page says the west section has averaged more than 50,000 visits a day since it opened, and that a peak day passed 130,000. That is an official count, not a review of this Monday.",
            "同一页写，西区开了以后日均超过 5 万人，高峰一天超过 13 万。这是官方数字，不是这个周一的评论。",
          ),
          source: b("Shanghai municipal site, 3 Jul 2026", "上海市政府英文网，2026年7月3日"),
          href: "https://english.shanghai.gov.cn/en-SpecialtyShoppingAreas/20260703/9f135bc472af47448dc7face360a6acc.html",
        },
        avoid: [
          b("Do not plan the day around Palm Angels, Aape, Barbie, % Arabica, or the coffee truck. Those were in the June opening story and were not confirmed for 26 October.", "不要把这一天排成 Palm Angels、Aape、芭比、% Arabica 或咖啡车。那些是六月开幕稿里的，没有确认 10 月 26 日还在。"),
          b("The calligraphy show in W16 runs into November and is by invitation only.", "西区 W16 的书法展展到十一月，而且要邀请。"),
          b("No usable photo of Zhangyuan was found on Wikimedia. None is shown.", "维基共享资源上没有找到能用的张园照片。这里就不放图。"),
        ],
      },
      {
        id: "park",
        kicker: b("Classic", "经典"),
        title: b("Jing'an Temple, from the park", "静安寺，在公园里看"),
        where: b("Jing'an Park, one stop west if you would rather ride", "静安公园。想坐车的话，往西一站"),
        body: b(
          "Look at the temple from the park and sit. A full temple visit is extra walking. Park gate hours for this Monday were not checked. If the gate is shut, sit in the west lanes instead.",
          "在公园里看寺庙，坐下。进寺是额外的路。这个周一的公园开门时间没有查。门关了，就回西区的弄堂坐。",
        ),
        pin: "jingan",
        photo: photo(
          "/places/jingan-temple.jpg",
          "Jing'an Temple. The plan is to see it from the park, not to tour the halls.",
          "静安寺。计划是在公园里看，不把殿走一遍。",
          "kallerna, CC BY-SA 4.0, Wikimedia Commons",
          "kallerna，CC BY-SA 4.0，维基共享资源",
        ),
        highlights: [
          b("One classic, and it is a view across the road.", "这一天的老风景只有这一眼，隔着路看。"),
        ],
        avoid: [
          b("Do not add a full temple visit on top of the lanes.", "弄堂走完，不要再把寺庙内部走一遍。"),
          b("If the park gate is shut, the west lanes are the bench.", "公园门关了，长椅就在西区。"),
        ],
      },
      {
        id: "lunch-mon",
        kicker: b("Lunch", "午饭"),
        title: b("A table, then stop", "坐下吃，然后结束"),
        where: b("West section, or HKRI Taikoo Hui, or Plaza 66", "西区，或兴业太古汇，或恒隆广场"),
        body: b(
          "One restaurant's Monday hours were not verified. If the lanes are queues, the malls are the same junction and they have chairs. Then go home. Line 2 to Zhongshan Park, then Line 3 or 4 to Yishan Road. Monday night is rest.",
          "没有核实任何一家周一的营业时间。弄堂如果在排队，商场就在同一个路口，里面有椅子。然后回家。2 号线到中山公园，再换 3 号线或 4 号线到宜山路。周一晚上休息。",
        ),
        pin: "jingan",
        highlights: [
          b("The rule is a chair, not a named booking.", "规矩是有椅子，不是一家订好的餐厅。"),
        ],
        avoid: [
          b("No restaurant name is printed, because none was checked.", "不印餐厅名字，因为没有核实过。"),
          b("Yu Garden, Tianzifang, Rockbund, and the West Bund are the wrong day or the wrong district.", "豫园、田子坊、外滩美术馆、西岸，要么日子不对，要么区不对。"),
        ],
      },
    ],
    skip: [
      b("The calligraphy show in Zhangyuan W16. It runs into November and is by invitation only.", "张园西区 W16 的书法展。展到十一月，只限邀请。"),
      b("Yu Garden, Tianzifang, Rockbund, and the West Bund. Wrong day, or wrong district.", "豫园、田子坊、外滩美术馆、西岸。日子不对，或区不对。"),
    ],
  },
  {
    id: "tue",
    date: b("27 Oct", "10月27日"),
    dayNum: "06",
    weekday: b("Tuesday", "周二"),
    title: b("One show, then the river", "一个展览，然后看江"),
    area: b("West Bund, Xuhui", "西岸，徐汇"),
    leave: b("10:15 from the hotel", "10:15 从酒店出发"),
    sleep: b("IntercityHotel Shanghai Xujiahui", "IntercityHotel 上海徐家汇"),
    meal: b("The museum dining room", "馆里的餐厅"),
    summary: b(
      "Computer Worlds is open today and closed on Mondays. It sits a short metro hop from the hotel. Be out by mid-afternoon and pack, because Wednesday starts at 08:00.",
      "「计算万千世界」今天开，周一关。离酒店只有短短几站地铁。下午三四点出来，晚上收拾行李，因为周三 08:00 要走。",
    ),
    region: "shanghai",
    route: ["home", "westbund"],
    stops: [
      {
        id: "metro-wb",
        kicker: b("Metro", "地铁"),
        title: b("Yishan Road to Yunjin Road", "宜山路到云锦路"),
        where: b("Line 9, then Line 11 toward Disney", "9 号线，再换 11 号线往迪士尼"),
        body: b(
          "One stop to Xujiahui. Then Shanghai Swimming Center, Longhua, Yunjin Road. The museum says the walk is about 10 minutes to 2600 Longteng Avenue. There is a river entrance and a Longteng Avenue entrance.",
          "一站到徐家汇。然后上海游泳馆、龙华、云锦路。博物馆写步行大约 10 分钟到龙腾大道 2600 号。有江边入口，也有龙腾大道入口。",
        ),
        pin: "westbund",
        highlights: [
          b("Follow the museum's metro note. A district road-distance figure did not match this short hop, so it is not used.", "跟博物馆写的地铁走。区里另一个公路距离和这几站对不上，所以不用那个数。"),
        ],
        avoid: [
          b("Do not add the Long Museum on the same avenue. It is a second large museum.", "同一条路上的龙美术馆不要加。那是另一座大馆。"),
        ],
      },
      {
        id: "computer",
        kicker: b("See", "看"),
        title: b("Computer Worlds", "计算万千世界"),
        where: b("West Bund Museum", "西岸美术馆"),
        body: b(
          "Dated 24 September 2026 to 14 February 2027. Tuesday to Sunday, 11:00 to 18:00, last entry 17:00. The ticket price was not on the exhibition page, so it lives at the desk or in the WeChat account. A guided tour exists and is optional.",
          "展期 2026 年 9 月 24 日到 2027 年 2 月 14 日。周二到周日 11:00 到 18:00，17:00 停止入场。展览页上没有票价，所以在前台或微信里看。有导览，可选。",
        ),
        pin: "westbund",
        photo: photo(
          "/places/west-bund.jpg",
          "The street entrance of the West Bund Museum, June 2020.",
          "西岸美术馆临街入口，2020 年 6 月。",
          "Lcsun, Jun 2020, CC BY-SA 4.0, Wikimedia Commons",
          "Lcsun，2020年6月，CC BY-SA 4.0，维基共享资源",
        ),
        highlights: [
          b("From the Centre Pompidou collection. The museum describes digital art from the 1950s to now: generative art, data, 3D printing, NFTs, and questions about AI and machines.", "作品来自蓬皮杜中心的收藏。馆方写的是从 1950 年代到现在的数字创作：生成艺术、数据、3D 打印、NFT，以及人工智能和机器的问题。"),
          b("Closed Monday, including the cafe, shop, and the rest of the public rooms. Tuesday is an open day.", "周一全关，咖啡、商店和其他公共区域一起关。周二开着。"),
          b("The ticket page says students with ID pay half, and that seniors 70 and over, disabled visitors, and military with ID are free. Children under 1.3 m are free with an adult, one child per adult. The full adult price was not on that page.", "票务页写学生凭证件半价；70 岁及以上、残疾人士、军人凭证件免费。1.3 米以下儿童免费，一位大人带一位。成人全价那一页上没有。"),
        ],
        said: {
          text: b(
            "The museum's own text asks what computers have done to art, design, and architecture, and says the history it traces is more than 75 years long. That is the institution talking, not a visitor review.",
            "馆方自己的文字问，计算机对艺术、设计和建筑做了什么，并说这段历史超过 75 年。这是馆在说话，不是游客评论。",
          ),
          source: b("West Bund Museum, Computer Worlds", "西岸美术馆，「计算万千世界」"),
          href: "https://wbmshanghai.com/en/exhibition/1615-event-computer-worlds/",
        },
        avoid: [
          b("The free tour needs a same-day ticket and a reservation. Be at the first-floor desk 5 minutes early. Ten minutes late and you miss it. Under 3 people, they may cancel. You do not need the tour.", "免费导览要当天的票，还要预约。提前 5 分钟到一楼前台。迟到 10 分钟不能参加。少于 3 人，馆方可以取消。你们不需要这场导览。"),
          b("Reinventing Landscape, in this same building, ended on 18 October.", "同一栋楼的「重塑风景」10 月 18 日已经结束。"),
          b("The West Bund art fair is 13 to 16 November, after the flight.", "西岸艺博会是 11 月 13 日到 16 日，在飞机之后。"),
        ],
      },
      {
        id: "cafe-wb",
        kicker: b("Lunch", "午饭"),
        title: b("Eat in the building", "在馆里吃"),
        where: b("Dining room and cafe, open with the museum", "餐厅和咖啡，跟美术馆一起开"),
        body: b(
          "The visit page lists both, plus lockers and step-free access. Eating here keeps the afternoon in one place. A menu and a price were not published on that page.",
          "参观页写了餐厅和咖啡，还有寄存柜和无障碍。在这里吃，下午就不用换地方。那一页没有菜单，也没有价格。",
        ),
        pin: "westbund",
        highlights: [
          b("Cafe and dining room close on Monday with the museum. Today they are open.", "咖啡和餐厅周一随馆关闭。今天开着。"),
        ],
        avoid: [
          b("Do not leave the building to hunt for lunch.", "不要出馆再去找午饭。"),
        ],
      },
      {
        id: "river",
        kicker: b("Sit", "坐一会儿"),
        title: b("Out by the river entrance", "从江边的门出来"),
        where: b("The waterfront in front of the museum", "馆前面的江边"),
        body: b(
          "Leave the galleries around 15:30, sit, and go home the same way. Pack tonight.",
          "大约 15:30 离开展厅，坐下，原路回家。今晚收拾行李。",
        ),
        pin: "westbund",
        highlights: [
          b("Use the river entrance on the way out so the sit is the end, not a second project.", "出来走江边的门，坐下就是结尾，不是另一个项目。"),
          b("Wednesday's taxi is 08:00. The room has to be packed tonight.", "周三出租车 08:00。行李今晚收好。"),
        ],
        avoid: [
          b("Do not start a second museum after 15:30.", "15:30 之后不要再开一座馆。"),
        ],
      },
    ],
    skip: [
      b("The Long Museum next door. A second large museum, even though its show runs into 2027.", "旁边的龙美术馆。另一座大馆，虽然展览展到 2027 年。"),
      b("Reinventing Landscape, in this same building. It closed on 18 October.", "同一栋楼的「重塑风景」。10 月 18 日已结束。"),
      b("The West Bund art fair. That is 13 to 16 November, after the flight.", "西岸艺博会。11 月 13 日到 16 日，飞机之后。"),
    ],
  },
  {
    id: "wed",
    date: b("28 Oct", "10月28日"),
    dayNum: "07",
    weekday: b("Wednesday", "周三"),
    title: b("Leave at 08:00", "08:00 出发"),
    area: b("Pudong Airport", "浦东机场"),
    leave: b("08:00 by taxi", "08:00 坐出租车"),
    sleep: b("Last night at the Xujiahui hotel", "最后一晚仍在徐家汇的酒店"),
    meal: b("Eat before the car, or at the airport. The hotel rate has no breakfast.", "上车前吃，或在机场吃。房价不含早餐。"),
    summary: b(
      "The flight is 13:30. Be in Terminal 1 at 10:30. Checkout is noon, and you are already gone. No morning sight.",
      "航班 13:30。10:30 要在一号航站楼。退房是中午，人已经走了。早上没有景点。",
    ),
    region: "shanghai",
    route: ["home", "airport"],
    stops: [
      {
        id: "taxi-out",
        kicker: b("Taxi", "出租车"),
        title: b("Hotel door at 08:00", "08:00 在酒店门口"),
        where: b("About 46 km to Pudong T1", "到浦东 T1 大约 46 公里"),
        body: b(
          "08:00 is the protected clock: two and a half hours for the car, a slow road, and the walk from the curb to check-in. A published taxi minute count for this Wednesday morning was not found. A metered taxi or a licensed car from the door. Four checked bags again.",
          "08:00 是留出来的钟点：两个半小时给车、给慢的路、给从路边走到值机。这个周三早上没有找到公布的出租分钟数。门口上计价出租，或有牌照的车。又是四件托运行李。",
        ),
        pin: "home",
        highlights: [
          b("The room is empty before you leave. You will not be back by the 12:00 checkout.", "出门前房间要空。12:00 退房之前你们不会回来。"),
        ],
        avoid: [
          b("Metro is the worse path with the bags: Line 9 to Century Avenue, Line 2 to the airport, about 90 minutes to the station, plus walks. If you take it, leave at 08:15, and it is tighter against 10:30.", "带着行李，地铁更差：9 号线到世纪大道，2 号线到机场，到站大约 90 分钟，还要走路。如果坐，08:15 出门，对 10:30 更紧。"),
        ],
      },
      {
        id: "terminal",
        kicker: b("Airport", "机场"),
        title: b("Terminal 1 by 10:30", "10:30 前到一号航站楼"),
        where: b("Three hours before departure", "起飞前三小时"),
        body: b(
          "That 10:30 target is the rule for this trip. Passports, the booking, and phones stay in personal items.",
          "10:30 到航站楼是这次的规矩。护照、订票和手机放随身包。",
        ),
        pin: "airport",
        photo: photo(
          "/places/pudong-t1.jpg",
          "Pudong Terminal 1, departures level.",
          "浦东一号航站楼出发层。",
          "Wyanhache, CC BY-SA 4.0, Wikimedia Commons",
          "Wyanhache，CC BY-SA 4.0，维基共享资源",
        ),
        highlights: [
          b("This day's only place is the airport move. There is no sight attached to it.", "这一天唯一的地方就是去机场。没有附带景点。"),
          b("Four checked bags of 23 kg, one cabin bag of 8 kg, one personal item, each person.", "每人一件 23 公斤托运，一件 8 公斤手提，一件随身包。"),
        ],
        avoid: [
          b("Rockbund and the West Bund both open at 11:00, which is after you need to be at the airport.", "外滩美术馆和西岸都是 11:00 开门，那时你们应该已经在机场。"),
          b("No highlight is invented for the terminal. It is a departure, not a visit.", "航站楼不编看点。这是离开，不是参观。"),
        ],
      },
      {
        id: "flight-home",
        kicker: b("Flight", "航班"),
        title: b("MU8651 / FM865", "MU8651 / FM865"),
        where: b("Pudong T1, 13:30, to KLIA T1, 19:05", "浦东 T1 13:30，到吉隆坡机场 T1 19:05"),
        body: b(
          "China Eastern and Shanghai Airlines codeshare, same as the way in.",
          "东航和上航代码共享，和来的时候一样。",
        ),
        pin: "airport",
        highlights: [
          b("Departs 13:30. Lands KLIA Terminal 1 at 19:05.", "13:30 起飞。19:05 到吉隆坡机场一号航站楼。"),
        ],
        avoid: [
          b("Do not leave passports in a bag you have checked.", "护照不要放进已经托运的箱子。"),
        ],
      },
    ],
    skip: [
      b("Any last-morning sight. Rockbund and the West Bund both open at 11:00, which is after you need to be at the airport.", "最后一早上的任何景点。外滩美术馆和西岸都是 11:00 开门，那时你们该在机场了。"),
    ],
  },
];

export const sources: { label: Bi; href: string }[] = [
  { label: b("Hotel listing, check-in and Yishan Road", "酒店页面，入住和宜山路"), href: "https://www.trip.com/hotels/shanghai-hotel-detail-123245486/intercityhotel-shanghai-xujiahui/" },
  { label: b("Metro, Pudong to Yishan Road", "地铁，浦东到宜山路"), href: "https://bus.mapbar.com/shanghai/pudongjichang_dao_yishanluzhongshanxilu.html" },
  { label: b("Metro, Yishan Road to Hongqiao station", "地铁，宜山路到虹桥火车站"), href: "https://www.dacheche.com/jiaotong/257877.html" },
  { label: b("Renheguan, Michelin", "人和馆，米其林"), href: "https://guide.michelin.com/en/shanghai-municipality/shanghai/restaurant/ren-he-guan-zhaojiabang-road" },
  { label: b("Canal museum hours", "运河博物馆开放时间"), href: "https://www.canal-museum.cn/info/vistor_info" },
  { label: b("Canal anniversary show, 25 Sep 2026", "运河博物馆二十年展，2026年9月25日"), href: "https://hznews.hangzhou.com.cn/chengshi/content/2026-09/25/content_9316929.htm" },
  { label: b("Gongchen Bridge", "拱宸桥"), href: "https://en.wikipedia.org/wiki/Gongchen_Bridge" },
  { label: b("Xiaohe Straight Street, 16 Aug 2025", "小河直街，2025年8月16日"), href: "https://news.qq.com/rain/a/20250816A054KI00" },
  { label: b("Rockbund hours", "外滩美术馆开放时间"), href: "https://www.rockbundartmuseum.org/visit" },
  { label: b("Kandis Williams dates", "坎迪斯·威廉姆斯展期"), href: "https://www.rockbundartmuseum.org/exhibition/kandis-williams-a-cave" },
  { label: b("Le Reflet opening, 16 Jun 2026", "Le Reflet 开业，2026年6月16日"), href: "https://c.m.163.com/news/a/KVIFRE5R0514A3B5.html" },
  { label: b("Zhangyuan east section, 30 Jun 2026", "张园东区，2026年6月30日"), href: "https://english.shanghai.gov.cn/en-SpecialtyShoppingAreas/20260703/9f135bc472af47448dc7face360a6acc.html" },
  { label: b("Suzhou MoCA visitor guide", "苏州当代美术馆参观指南"), href: "https://www.suzhoumoca.com/en/page/visitor-guide" },
  { label: b("Suzhou MoCA opening", "苏州当代美术馆开馆"), href: "https://www.sipac.gov.cn/szgyyqenglish/202608MoCA/202608MoCA.shtml" },
  { label: b("West Bund Museum, Computer Worlds", "西岸美术馆，「计算万千世界」"), href: "https://wbmshanghai.com/en/exhibition/1615-event-computer-worlds/" },
  { label: b("West Bund ticket rules", "西岸美术馆票务"), href: "https://wbmshanghai.com/en/page/Ticket%20Purchase%20Information" },
];
