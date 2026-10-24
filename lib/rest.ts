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
    title: b("Hubin in the rain", "雨里的湖滨"),
    area: b("Hangzhou, Hubin", "杭州，湖滨"),
    leave: b("08:00 from the hotel", "08:00 从酒店出发"),
    sleep: b("IntercityHotel Shanghai Xujiahui", "IntercityHotel 上海徐家汇"),
    meal: b("绿茶, in77 C2, 3rd floor", "绿茶，in77 C区2座 3楼"),
    summary: b(
      "A short Hangzhou day in the rain. Lunch is 绿茶 inside in77. A short umbrella walk on Hubin for the lake, then back indoors. Cab by 16:15 for G238 at 17:37. No boat, and no Lou Wai Lou.",
      "杭州的雨天，只走短的一段。午饭在 in77 里的绿茶。湖滨撑伞看一眼湖，再回到商场里。16:15 之前打车，赶 17:37 的 G238。不坐船，不去楼外楼。",
    ),
    region: "hangzhou",
    route: ["hongqiao", "hzeast", "in77", "hubin"],
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
        where: b("The booked morning train", "订好的早班"),
        body: b(
          "The morning departure is the one in the booking. It is not reprinted here. On the timetable checked 3 October 2026, direct trains are commonly about 45 minutes, and a full second-class fare is often shown at 87 yuan. Those rows are the pattern, not your ticket.",
          "早班以订好的那班为准，这里不重印车次。10 月 3 日查过的时刻表里，直达车常见大约 45 分钟，二等座全价常标 87 元。那是规律，不是你们的票。",
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
          b("Hangzhou East is the station for Hubin, and for G238 back.", "杭州东是去湖滨的站，也是 G238 回程的站。"),
        ],
        avoid: [
          b("Do not treat the aggregator timetable as the train you booked.", "不要把时刻表网站上的车次当成已经订好的那班。"),
        ],
      },
      {
        id: "to-hubin",
        kicker: b("Ride", "车"),
        title: b("Hangzhou East to Hubin", "杭州东到湖滨"),
        where: b("in77, by the lake", "湖边的 in77"),
        body: b(
          "This rain day stays at Hubin and in77. A metro line and a minute count for this hop were not in the notes, so neither is printed. Umbrellas out when you leave the station.",
          "这个雨天只待在湖滨和 in77。这段的地铁线和分钟数不在笔记里，所以不印。出站就撑伞。",
        ),
        pin: "in77",
        highlights: [
          b("The mall and the lake edge are the whole Hangzhou visit.", "商场和湖边就是这次杭州的全部。"),
        ],
        avoid: [
          b("Do not ride out to the canal museum. That district is off this rain day.", "不要坐去运河博物馆。那个区不在这个雨天里。"),
        ],
      },
      {
        id: "lunch-green",
        kicker: b("Lunch", "午饭"),
        title: b("绿茶", "绿茶"),
        where: b("in77, block C2, 3rd floor", "in77，C区2座，3楼"),
        body: b(
          "Sit down here. Hours and a menu price were not in the notes, so they are not printed. If the room is full, stay inside in77 and take the next seated table. Do not hunt across the city.",
          "在这里坐下。营业时间和菜价不在笔记里，所以不印。如果满了，就留在 in77 里，坐下一家就吃。不要穿城去找。",
        ),
        pin: "in77",
        highlights: [
          b("Lunch stays in the building, out of the rain.", "午饭不出这栋商场，不淋雨。"),
        ],
        avoid: [
          b("Lou Wai Lou is not this lunch.", "午饭不是楼外楼。"),
        ],
      },
      {
        id: "hubin-walk",
        kicker: b("Walk", "走"),
        title: b("A short Hubin walk", "湖滨走一小段"),
        where: b("The lakefront outside in77", "in77 外面的湖边"),
        body: b(
          "Umbrellas up. A short look at the lake in the rain, then back into in77. This is not a loop of the lake.",
          "撑伞。雨里看一眼湖，然后回到 in77。这不是绕湖一周。",
        ),
        pin: "hubin",
        highlights: [
          b("The lake view is the reason for the short walk. Then you are indoors again.", "看湖是这一小段的理由。看完就回到室内。"),
        ],
        avoid: [
          b("No boat. Huagang and Leifeng stay off the day.", "不坐船。花港和雷峰塔都不去。"),
        ],
      },
      {
        id: "home-hz",
        kicker: b("Train", "火车"),
        title: b("G238 at 17:37", "17:37 的 G238"),
        where: b("Cab to Hangzhou East by 16:15", "16:15 之前打车到杭州东"),
        body: b(
          "Leave in77 or Hubin by cab no later than 16:15. The return is G238 from Hangzhou East at 17:37. An arrival time in Shanghai is not printed here. From Hongqiao, the same metro back to the hotel.",
          "最晚 16:15 从 in77 或湖滨打车离开。回程是杭州东 17:37 的 G238。到上海的时间这里不印。出虹桥后，坐同一段地铁回酒店。",
        ),
        pin: "hzeast",
        highlights: [
          b("16:15 is the latest cab, not a suggestion to leave later.", "16:15 是最晚的车，不是可以再晚的建议。"),
        ],
        avoid: [
          b("Do not add Lingyin, Longjing, a boat, or the canal after lunch.", "午饭后不要再加灵隐、龙井、游船或运河。"),
        ],
      },
    ],
    skip: [
      b("The canal museum, Gongchen Bridge, and Xiaohe Straight Street. They are a different district, and they are not this rain day.", "运河博物馆、拱宸桥、小河直街。那是另一个区，不是这个雨天。"),
      b("A boat, and Lou Wai Lou.", "游船，还有楼外楼。"),
      b("Huagang and Leifeng. Both stay dropped.", "花港和雷峰塔。两处都继续不去。"),
      b("A longer West Lake loop, Lingyin, Longjing, Meijiawu, Longwu, and Wuzhen.", "更长的西湖环线、灵隐、龙井、梅家坞、龙坞，还有乌镇。"),
    ],

  },
];

export const sources: { label: Bi; href: string }[] = [];
