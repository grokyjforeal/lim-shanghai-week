import type { Bi } from "@/lib/text";
import { bi } from "@/lib/text";
import type { Day, Photo, Stop } from "@/lib/trip";

const b = bi;

function photo(src: string, altEn: string, altZh: string, creditEn: string, creditZh: string): Photo {
  return { src, alt: b(altEn, altZh), credit: b(creditEn, creditZh) };
}

export const restDays: Day[] = [
  {
    id: "fri",
    date: b("23 Oct", "10月23日"),
    dayNum: "02",
    weekday: b("Friday", "周五"),
    title: b("The canal, not the lake", "看运河，不去西湖"),
    area: b("Hangzhou, Gongshu", "杭州，拱墅"),
    leave: b("08:00 from the hotel", "08:00 从酒店出发"),
    sleep: b("IntercityHotel Shanghai Xujiahui", "IntercityHotel 上海徐家汇"),
    meal: b("A seated lunch on Xiaohe Straight Street", "小河直街找一家能坐下的午饭"),
    summary: b(
      "One district in Hangzhou: the Grand Canal at Gongchen Bridge. The reason to go is a museum show that runs through 31 December 2026. West Lake stays off the day.",
      "杭州只去一个区：拱宸桥边的大运河。去的理由是一个展览，展到 2026 年 12 月 31 日。西湖不在这一天。",
    ),
    region: "hangzhou",
    route: ["hongqiao", "hzeast", "museum", "bridge", "xiaohe"],
    stops: [
      {
        id: "to-hongqiao",
        kicker: b("Metro", "地铁"),
        title: b("Hotel to Hongqiao station", "酒店到虹桥火车站"),
        where: b("Line 3 or 4, then Line 10", "3 号线或 4 号线，再换 10 号线"),
        body: b(
          "Walk to Yishan Road. One stop to Hongqiao Road, then Line 10 eight stops to Hongqiao Railway Station. A planner puts the ride at about 31 minutes. With the walks, being on the concourse around 09:00 to 09:30 matches that figure. It is not a measured trip.",
          "走到宜山路。一站到虹桥路，再坐 10 号线八站到虹桥火车站。一份路线规划写车程大约 31 分钟。加上走路，09:00 到 09:30 到候车厅对得上这个数。这不是实测。",
        ),
        pin: "hongqiao",
        photo: photo(
          "/places/hongqiao-station.jpg",
          "The concourse at Shanghai Hongqiao railway station.",
          "上海虹桥火车站候车大厅。",
          "Ermell, 2015, CC BY-SA 4.0, Wikimedia Commons",
          "Ermell，2015，CC BY-SA 4.0，维基共享资源",
        ),
        highlights: [
          b("Hongqiao is the station for both train days, on purpose.", "两天的火车都走虹桥，是故意的，只认一个站。"),
          b("Line 3 toward Jiangyang North Road, or the Line 4 train whose next stop is Hongqiao Road.", "3 号线往江杨北路，或 4 号线下一站就是虹桥路的那班。"),
        ],
        avoid: [
          b("Shanghai Railway Station is an easier ride and has fewer fast trains to Hangzhou East.", "上海站从徐家汇更好坐，但到杭州东的快车更少。"),
          b("Shanghai South is closer to the hotel and usually the wrong end of Hangzhou.", "上海南站离酒店更近，通常接到的是杭州不对的那一头。"),
        ],
      },
      {
        id: "train-hz",
        kicker: b("Train", "火车"),
        title: b("Hongqiao to Hangzhou East", "虹桥到杭州东"),
        where: b("Direct high-speed train", "直达高铁"),
        body: b(
          "On the timetable checked 3 October 2026, direct trains are commonly about 45 minutes, and a full second-class fare is often shown at 87 yuan. Those rows are the pattern, not your ticket. Your exact departure is in the booking.",
          "10 月 3 日查过的时刻表里，直达车常见大约 45 分钟，二等座全价常标 87 元。那是规律，不是你们的票。出发时刻以订的那班为准。",
        ),
        pin: "hzeast",
        photo: photo(
          "/places/hangzhou-east.jpg",
          "Inside Hangzhou East railway station at night.",
          "杭州东站夜间的站内。",
          "Staeiou, CC BY-SA 4.0, Wikimedia Commons",
          "Staeiou，CC BY-SA 4.0，维基共享资源",
        ),
        highlights: [
          b("Hangzhou East is the end that connects to the canal by metro.", "杭州东是能换地铁去运河的那一头。"),
          b("A late-morning arrival fits the museum, which opens at 09:00.", "上午晚些到，赶得上博物馆 09:00 开门。"),
        ],
        avoid: [
          b("Do not treat the aggregator timetable as the train you booked.", "不要把时刻表网站上的车次当成已经订好的那班。"),
        ],
      },
      {
        id: "metro-canal",
        kicker: b("Metro", "地铁"),
        title: b("Hangzhou East to the canal", "杭州东到运河"),
        where: b("Line 1, then Line 5", "1 号线，再换 5 号线"),
        body: b(
          "Line 1 toward Xianghu. Change at Datieguan to Line 5 toward Nanhudong. Get off at Gongchenqiao East and walk along Quzhou Street to the canal plaza. A 2024 note says Exit B and about 500 meters. Follow the plaza signs if the exits differ. An official minute count for this ride was not found.",
          "1 号线往湘湖。在打铁关换 5 号线往南湖东。拱宸桥东站下车，沿衢州街走到运河文化广场。一份 2024 年的交通笔记写 B 口、大约 500 米。出口如果对不上，跟广场的指示走。这段地铁没有找到官方分钟数。",
        ),
        pin: "museum",
        highlights: [
          b("The museum's own note says: Line 5, Gongchenqiao East, then Quzhou Street to the plaza.", "博物馆自己写：5 号线拱宸桥东站，沿衢州街到运河文化广场。"),
          b("Address on that page: 1 Canal Cultural Plaza, Gongshu. Phone 0571-88162018.", "同一页地址：拱墅区运河文化广场 1 号。电话 0571-88162018。"),
        ],
        avoid: [
          b("Do not print a ride time that was never published.", "没有公布的车程就不要写成确定分钟。"),
          b("The 2024 exit note may not match the signs. Follow the plaza.", "2024 年的出口笔记可能和现场牌子不一样。认广场。"),
        ],
      },
      {
        id: "canal-show",
        kicker: b("See", "看"),
        title: b("Canal Museum, the anniversary show", "运河博物馆，二十年展"),
        where: b("1 Canal Cultural Plaza", "运河文化广场 1 号"),
        body: b(
          "Open Tuesday to Sunday, 09:00 to 16:30, last entry 16:00, closed Monday, free. Friday is an open day. The show 运博20年 何以动人 opened on 25 September 2026 in the second-floor gallery and runs through 31 December. Give it about 90 minutes.",
          "周二到周日 09:00 到 16:30，16:00 停止入馆，周一闭馆，免费。周五开着。展览「运博20年 何以动人」2026 年 9 月 25 日在二楼临展厅开幕，展到 12 月 31 日。大约留 90 分钟。",
        ),
        pin: "museum",
        highlights: [
          b("A fan-shaped museum on the canal. The visitor page says it is free, and asks for neat clothes, no pets, and quiet halls. Elders and small children should have family with them.", "运河边一座扇形的馆。参观页写免费，衣着整齐，不带宠物，展厅里不要喧哗。老人和小孩要有家人陪。"),
          b("The 25 September paper describes a 25-metre scroll by Xie Huang, a copper sculpture by Zhu Bingren more than 5 metres long, and paper-cuts of the eight Hushu scenes by Fang Jianguo.", "9 月 25 日的报道写到谢煌的 25 米长卷、朱炳仁五米多长的铜雕，还有方建国的「湖墅八景」剪纸。"),
          b("The same paper says there are check-in activities at different times. It does not list the Friday slots.", "同一篇写不同时段有互动打卡。周五具体哪几场，文章里没有。"),
        ],
        said: {
          text: b(
            "Hangzhou.com, reporting the opening, describes the show as a 20-year memory exhibition built from borrowed stories, not a new permanent hall. The museum's visitor page is stricter about manners than about a ticket price, because there is no ticket.",
            "杭州网写开幕时，把这个展说成借来的记忆，不是新的常设厅。博物馆参观页对礼貌比对票价更较真，因为本来就不买票。",
          ),
          source: b("Hangzhou.com, 25 Sep 2026, and the museum visitor page", "杭州网，2026年9月25日，以及博物馆参观须知"),
          href: "https://hznews.hangzhou.com.cn/chengshi/content/2026-09/25/content_9316929.htm",
        },
        avoid: [
          b("A 2023 notice required a real-name slot. The visitor page checked now says entry is free and does not confirm that the slot was lifted. Check the door rule that morning.", "2023 年的通知要求实名预约。现在的参观页写免费，但没有确认预约已经取消。当天早上以门口的规矩为准。"),
          b("The summer line on that page turns away vests and slippers. It is written as a summer rule, so it is not treated here as an October ban.", "参观页有一句夏天不让穿背心和拖鞋。那是夏天的规矩，这里不把它写成十月的禁令。"),
          b("Closed Monday. You are here on Friday, which is an open day.", "周一闭馆。你们是周五，开着。"),
        ],
      },
      {
        id: "bridge",
        kicker: b("Classic", "经典"),
        title: b("Gongchen Bridge, from the plaza", "拱宸桥，在广场上看"),
        where: b("Beside the museum", "就在博物馆旁边"),
        body: b(
          "This is the one classic look. It stands next to the museum. Watch it from the plaza. The plan does not turn it into a climb.",
          "这一天只看这一处老东西。桥就在馆旁边。在广场上看。计划里不把它走成一次爬坡。",
        ),
        pin: "bridge",
        photo: photo(
          "/places/gongchen-bridge.jpg",
          "Gongchen Bridge over the Grand Canal, November 2023.",
          "大运河上的拱宸桥，2023 年 11 月。",
          "Windmemories, 22 Nov 2023, CC BY-SA 4.0, Wikimedia Commons",
          "Windmemories，2023年11月22日，CC BY-SA 4.0，维基共享资源",
        ),
        highlights: [
          b("A stone arch bridge. Wikipedia records it as a pedestrian and bicycle bridge, about 92 metres long, first built in 1631 and rebuilt in 1885.", "石拱桥。维基百科记的是人行和自行车桥，长约 92 米，1631 年建成，1885 年重建。"),
          b("Listed as a major national historical site in 2013.", "2013 年列入全国重点文物保护单位。"),
        ],
        avoid: [
          b("It is a real walking bridge, not a viewing tower. The day still stops at looking from the plaza.", "它是能走的桥，不是观景塔。这一天仍然停在广场上看。"),
          b("Do not add a canal cruise. That was not part of this route.", "不要再加游船。这条路线里没有。"),
        ],
      },
      {
        id: "lunch-hz",
        kicker: b("Lunch", "午饭"),
        title: b("Xiaohe Straight Street", "小河直街"),
        where: b("Same canal district, north of the bridge", "同一段运河，桥的北面"),
        body: b(
          "Sit down by the water. A single restaurant's hours for 23 October were not verified, so the rule is a table and a chair in this street, not a named booking. Eat before anyone is tired. On the same walk, the copper art center under Qinjian Bridge opened in August 2026. Hours were not published. Step in if the door is open.",
          "在水边坐下。没有核实任何一家 10 月 23 日的营业时间，所以规矩是这条街上有桌有椅，不是一家订好的馆子。趁还没累先吃。同一段路上，勤俭桥下的铜艺中心 2026 年 8 月开过。没有公布时间。门开着就进去看看。",
        ),
        pin: "xiaohe",
        photo: photo(
          "/places/xiaohe-street.jpg",
          "The canal edge at Xiaohe Straight Street, photographed in 2013. Not a 2026 street view.",
          "小河直街的运河边，2013 年拍的。不是 2026 年的街景。",
          "zhiyin586, 2013, CC BY 3.0, Wikimedia Commons",
          "zhiyin586，2013，CC BY 3.0，维基共享资源",
        ),
        highlights: [
          b("Where the Grand Canal, Xiaohe, and the Yuhangtang River meet. Late-Qing and early-Republic houses still line the lanes, and people still live in them.", "京杭大运河、小河、余杭塘河交汇的地方。清末民初的房子还在，人也还住在里面。"),
          b("The copper art center is a door you may pass. If it is shut, the day does not change.", "铜艺中心是路过可能遇上的一扇门。关着，这一天也不变。"),
        ],
        said: {
          text: b(
            "An August 2025 Tencent essay says a writer who remembered Xiaohe as a quiet street found it busy on an ordinary weeknight. The same piece says many courtyards are still homes, and that you only step in when the door is open and you are not in the way.",
            "2025 年 8 月的一篇腾讯文章写，作者记得小河直街很清静，结果一个普通周二的晚上已经很热闹。同一篇说不少院子仍是住家，门开着、又不打扰人的时候才进去坐坐。",
          ),
          source: b("Tencent News, 16 Aug 2025", "腾讯新闻，2025年8月16日"),
          href: "https://news.qq.com/rain/a/20250816A054KI00",
        },
        avoid: [
          b("Do not push into a courtyard that is clearly someone's house.", "明显是住家的院子，不要挤进去。"),
          b("No restaurant name is printed, because none was checked for this Friday.", "不印餐厅名字，因为周五没有核实过任何一家。"),
          b("West Lake and Wuzhen are a second trip, not a detour from this street.", "西湖和乌镇是另一次出门，不是这条街的顺路。"),
        ],
      },
      {
        id: "home-hz",
        kicker: b("Train", "火车"),
        title: b("Back to Hongqiao", "回虹桥"),
        where: b("Leave the canal around 15:30", "大约 15:30 离开运河"),
        body: b(
          "Take a late-afternoon train from Hangzhou East to Shanghai Hongqiao, then the same metro home. The return you booked is the one to follow. The evening at the hotel stays quiet.",
          "下午晚些从杭州东回上海虹桥，再坐同一段地铁回家。回程以订好的那班为准。晚上在酒店安静待着。",
        ),
        pin: "hongqiao",
        highlights: [
          b("Leaving the canal around 15:30 keeps the museum from becoming a rush at last entry.", "大约 15:30 离开，就不会卡在 16:00 停止入馆那一下。"),
        ],
        avoid: [
          b("Do not add Lingyin, Longjing, or a water town after lunch.", "午饭后不要再加灵隐、龙井或水乡。"),
        ],
      },
    ],
    skip: [
      b("West Lake, Lingyin, Longjing, Meijiawu, and Longwu. A second district, and part of the packaged day that was turned down.", "西湖、灵隐、龙井、梅家坞、龙坞。那是第二个区，也是已经推掉的跟团日里的一段。"),
      b("Wuzhen. The direct train does not stop in the water town. It needs another station and another ride.", "乌镇。直达车不停水乡。还要换站，再坐一段。"),
      b("The Xiaohe tank market and the Tianmuli osmanthus fair. Those dates ended with the National Day holiday.", "小河的集市和天目里的桂花市集。日期停在国庆假期。"),
    ],
  },
];

export const sources: { label: Bi; href: string }[] = [];
