import type { Bi } from "@/lib/text";
import { restDays } from "@/lib/rest";
import { laterDays } from "@/lib/rest2";
import { sources as sourceList, tailDays } from "@/lib/rest3";

export type Region = "shanghai" | "hangzhou" | "suzhou";

export type Pin = {
  id: string;
  x: number;
  y: number;
  label: string;
  zh: string;
  dx: number;
  dy: number;
};

export type Photo = {
  src: string;
  alt: Bi;
  credit: Bi;
};

export type Said = {
  text: Bi;
  source: Bi;
  href: string;
};

export type Stop = {
  id: string;
  kicker: Bi;
  title: Bi;
  where: Bi;
  body: Bi;
  pin: string;
  photo?: Photo;
  highlights: Bi[];
  said?: Said;
  avoid: Bi[];
};

export type Day = {
  id: string;
  date: Bi;
  dayNum: string;
  weekday: Bi;
  title: Bi;
  area: Bi;
  leave: Bi;
  sleep: Bi;
  meal: Bi;
  summary: Bi;
  region: Region;
  route: string[];
  stops: Stop[];
  skip: Bi[];
};

const b = (en: string, zh: string): Bi => ({ en, zh });

export const family: { name: string; note: Bi }[] = [
  { name: "Jing Xuan Lim", note: b("With the group", "和大家一起") },
  { name: "Jing Yao Lim", note: b("Born 15 Aug 1997", "1997年8月15日生") },
  { name: "Wai Koon Lee", note: b("Born 14 Mar 1965", "1965年3月14日生") },
  { name: "Chee Onn Lim", note: b("Birthday on Saturday", "周六生日") },
];

export const hotel = {
  name: "IntercityHotel Shanghai Xujiahui",
  nameZh: "徐家汇，中山西路",
  address: b(
    "Building 1, No. 1515 Zhongshan West Road, Xuhui",
    "徐汇区中山西路1515号1号楼",
  ),
  metro: b(
    "Yishan Road, Exit 5. The hotel text says about a 4 minute walk.",
    "宜山路站5号口。酒店页面写步行大约4分钟。",
  ),
  checkIn: b("After 14:00 on 22 Oct", "10月22日 14:00 之后"),
  checkOut: b("Before 12:00 on 28 Oct", "10月28日 12:00 之前"),
  meals: b("No meals included", "不含餐"),
  room: b(
    "Intercity King Room in the names of Wai Koon Lee and Chee Onn Lim, maximum two adults. A second room for Jing Xuan Lim and Jing Yao Lim is not booked yet.",
    "已订的城际大床房写的是 Wai Koon Lee 和 Chee Onn Lim，最多两位大人。Jing Xuan 和 Jing Yao 的第二间房还没订。",
  ),
};

export const flights = {
  out: {
    code: "MU8592 / FM864",
    from: b("KLIA T1", "吉隆坡机场 T1"),
    to: b("Pudong T1", "浦东 T1"),
    depart: b("22 Oct, 07:05", "10月22日 07:05"),
    arrive: b("22 Oct, 12:30", "10月22日 12:30"),
  },
  back: {
    code: "MU8651 / FM865",
    from: b("Pudong T1", "浦东 T1"),
    to: b("KLIA T1", "吉隆坡机场 T1"),
    depart: b("28 Oct, 13:30", "10月28日 13:30"),
    arrive: b("28 Oct, 19:05", "10月28日 19:05"),
  },
  bags: b(
    "Each person: 1 personal item, 1 cabin bag of 8 kg, 1 checked bag of 23 kg.",
    "每人：1件随身包，1件8公斤手提行李，1件23公斤托运行李。",
  ),
};

export const shanghaiPins: Pin[] = [
  { id: "home", x: 188, y: 286, label: "Xujiahui", zh: "徐家汇", dx: -78, dy: 22 },
  { id: "renheguan", x: 248, y: 246, label: "Renheguan", zh: "人和馆", dx: 14, dy: -6 },
  { id: "westbund", x: 214, y: 360, label: "West Bund", zh: "西岸", dx: 14, dy: 4 },
  { id: "jingan", x: 268, y: 148, label: "Zhangyuan", zh: "张园", dx: -86, dy: -18 },
  { id: "bund", x: 372, y: 176, label: "The Bund", zh: "外滩", dx: 14, dy: -8 },
  { id: "reflet", x: 404, y: 118, label: "Le Reflet", zh: "上海大厦", dx: 14, dy: -4 },
  { id: "hongqiao", x: 62, y: 196, label: "Hongqiao", zh: "虹桥", dx: 12, dy: -16 },
  { id: "airport", x: 468, y: 348, label: "Pudong T1", zh: "浦东", dx: -8, dy: 22 },
];

export const hangzhouPins: Pin[] = [
  { id: "hongqiao", x: 78, y: 210, label: "Hongqiao", zh: "虹桥", dx: 12, dy: 20 },
  { id: "hzeast", x: 268, y: 168, label: "Hangzhou East", zh: "杭州东", dx: -20, dy: 26 },
  { id: "museum", x: 392, y: 118, label: "Canal Museum", zh: "运河博物馆", dx: 12, dy: -8 },
  { id: "bridge", x: 430, y: 168, label: "Gongchen Bridge", zh: "拱宸桥", dx: 12, dy: 8 },
  { id: "xiaohe", x: 392, y: 230, label: "Xiaohe Street", zh: "小河直街", dx: 12, dy: 16 },
];

export const suzhouPins: Pin[] = [
  { id: "hongqiao", x: 78, y: 230, label: "Hongqiao", zh: "虹桥", dx: 12, dy: 22 },
  { id: "sip", x: 286, y: 132, label: "Suzhou Industrial Park", zh: "苏州园区", dx: -36, dy: -22 },
  { id: "moca", x: 420, y: 188, label: "Suzhou MoCA", zh: "当代美术馆", dx: -40, dy: 28 },
  { id: "lake", x: 468, y: 150, label: "Jinji Lake", zh: "金鸡湖", dx: 12, dy: -10 },
];

const photo = (
  src: string,
  altEn: string,
  altZh: string,
  creditEn: string,
  creditZh: string,
): Photo => ({
  src,
  alt: b(altEn, altZh),
  credit: b(creditZh ? creditEn : creditEn, creditZh),
});

const openingDay: Day[] = [
  {
    id: "thu",
    date: b("22 Oct", "10月22日"),
    dayNum: "01",
    weekday: b("Thursday", "周四"),
    title: b("Land, then one dinner", "落地，只吃一顿晚饭"),
    area: b("Xujiahui", "徐家汇"),
    leave: b("No morning leave. The plane lands at 12:30.", "早上不用出门。飞机 12:30 落地。"),
    sleep: b("IntercityHotel Shanghai Xujiahui", "IntercityHotel 上海徐家汇"),
    meal: b("Renheguan, Zhaojiabang Road", "人和馆，肇嘉浜路"),
    summary: b(
      "Four checked bags and two people around 61. The afternoon stays next to the hotel. Dinner is three metro stops east, then home.",
      "四件托运行李，两位六十出头。下午就待在酒店旁边。晚饭往东三站地铁，吃完回家。",
    ),
    region: "shanghai",
    route: ["airport", "home", "renheguan"],
    stops: [
      {
        id: "flight-out",
        kicker: b("Flight", "航班"),
        title: b("MU8592 / FM864", "MU8592 / FM864"),
        where: b("KLIA T1 to Pudong T1", "吉隆坡机场 T1 到浦东 T1"),
        body: b(
          "Leaves 07:05 and lands 12:30. China Eastern and Shanghai Airlines codeshare. Passports stay in a personal item, not in the checked bag.",
          "07:05 起飞，12:30 落地。东航和上航代码共享。护照放随身包，不要放进行李箱。",
        ),
        pin: "airport",
        photo: photo(
          "/places/pudong-t1.jpg",
          "Pudong Terminal 1, the departures level. The flight arrives at this same terminal.",
          "浦东一号航站楼出发层。这趟航班也是在这个航站楼落地。照片拍的是出发层，不是到达厅。",
          "Wyanhache, CC BY-SA 4.0, Wikimedia Commons",
          "Wyanhache，CC BY-SA 4.0，维基共享资源",
        ),
        highlights: [
          b("Land at Pudong Terminal 1 at 12:30.", "12:30 在浦东一号航站楼落地。"),
          b("China Eastern and Shanghai Airlines share this flight.", "东航和上航共用这个航班号。"),
        ],
        avoid: [
          b("Do not put passports in the checked bag.", "护照不要托运。"),
          b("This is not the hour to start on the Bund.", "这不是去外滩的时间。"),
        ],
      },
      {
        id: "taxi-in",
        kicker: b("Taxi", "出租车"),
        title: b("Pudong to the hotel", "浦东到酒店"),
        where: b("About 46 km, official taxi rank at T1", "大约 46 公里，走 T1 的正规出租车排队点"),
        body: b(
          "Take the taxi rank. The metro alternative is Line 2 to Century Avenue, then Line 9 to Yishan Road, about 90 minutes to the station area. That ride is a poor fit with four 23 kg bags. A door-to-door taxi time for this exact afternoon was not published, so plan on the hotel sometime between mid-afternoon and early evening.",
          "走出租车排队点。地铁是 2 号线到世纪大道，再换 9 号线到宜山路，到站大约 90 分钟。四件 23 公斤的箱子不适合这么走。这天下午没有公布的门到门出租时长，所以按下午三四点到傍晚到酒店来打算。",
        ),
        pin: "home",
        highlights: [
          b("The hotel listing puts Pudong about 46 km away.", "酒店页面写浦东大约 46 公里。"),
          b("Use the official taxi rank, or a licensed car if the queue is long.", "走正规排队点。队太长就叫有牌照的车，同一件事。"),
        ],
        avoid: [
          b("Skip the metro with four checked bags.", "四件托运行李不要挤地铁。"),
          b("No published taxi-minute count for this afternoon, so do not promise a clock time.", "这天下午没有公布的出租分钟数，不要自己许一个钟点。"),
        ],
      },
      {
        id: "checkin",
        kicker: b("Hotel", "酒店"),
        title: b("Check in after 14:00", "14:00 之后入住"),
        where: b("Yishan Road Exit 5, then Zhongshan West Road", "宜山路站 5 号口，再沿中山西路"),
        body: b(
          "The published hotel walk from Exit 5 is about 4 minutes. If the room is not ready, sit in the lobby. Bag storage before 14:00 was not in the hotel rules. This is not the hour to cross the city.",
          "酒店写的是从 5 号口步行大约 4 分钟。房间还没好就在大堂坐。14:00 前能不能寄存行李，规则里没写。这不是穿城的时候。",
        ),
        pin: "home",
        highlights: [
          b("Check-in starts at 14:00. Checkout on the 28th is before 12:00. No meals in the rate.", "入住从 14:00 开始。28 日 12:00 前退房。房价不含餐。"),
          b("The king room on file is for Wai Koon Lee and Chee Onn Lim. Jing Xuan and Jing Yao are in a second booked room.", "笔记里的大床房是 Wai Koon Lee 和 Chee Onn Lim。Jing Xuan 和 Jing Yao 住另一间已订的房。"),
        ],
        avoid: [
          b("Do not assume the desk will hold bags before 14:00. Ask when you arrive.", "不要默认 14:00 前能寄存。到了再问。"),
          b("The same hotel page also says 0.53 km, not only 300 metres. Follow Exit 5 and Zhongshan West Road.", "同一页还写过 0.53 公里，不只 300 米。认 5 号口和中山西路。"),
        ],
      },
      {
        id: "dinner-22",
        kicker: b("Dinner", "晚饭"),
        title: b("Renheguan", "人和馆"),
        where: b("407 Zhaojiabang Road", "肇嘉浜路 407 号"),
        body: b(
          "The Xuhui room. Michelin lists it as Shanghainese and family friendly. From Yishan Road, Line 9 toward Century Avenue: Xujiahui, Zhaojiabang Road, Jiashan Road. Exit 5 is about 230 meters from the door. Published Thursday hours on a local listing are 17:00 to 21:30. Come back the same way. The phone on the Michelin page is +86 21 6403 0731.",
          "徐汇这一家。米其林写成上海菜，适合家庭。从宜山路坐 9 号线往世纪大道：徐家汇、肇嘉浜路、嘉善路。5 号口到门口大约 230 米。一份本地列表写周四晚上 17:00 到 21:30。原路回来。米其林页面上的电话是 +86 21 6403 0731。",
        ),
        pin: "renheguan",
        highlights: [
          b("Shanghainese, Michelin price band ¥¥, marked family friendly, with wheelchair access on that page.", "上海菜，米其林价位 ¥¥，标了适合家庭，同一页写可以轮椅进入。"),
          b("Three stops on Line 9. Jiashan Road Exit 5, then a short walk.", "9 号线三站。嘉善路 5 号口，再走一小段。"),
          b("Call for the table. Hours on listings do not all match, so confirm the evening service on the phone.", "打电话订位。各处写的营业时间并不一致，晚上开不开以电话为准。"),
        ],
        said: {
          text: b(
            "The Michelin guide says the 1930s room, with dim lights and old songs, is not the reason it stays full. They point to the Shanghainese cooking, and single out crabmeat and roe on rice, plus fried shredded eel with water bamboo.",
            "米其林写，店里灯暗、放老歌、一派三十年代的布置，并不是它坐满的原因。他们点名的是上海菜本身，尤其是蟹粉捞饭，还有茭白炒鳝丝。",
          ),
          source: b("Michelin Guide, Ren He Guan (Xuhui)", "米其林指南，人和馆（徐汇）"),
          href: "https://guide.michelin.com/en/shanghai-municipality/shanghai/restaurant/ren-he-guan-zhaojiabang-road",
        },
        avoid: [
          b("If the call does not get a table, eat somewhere with chairs in the Xujiahui malls and keep this room for another night. No mall restaurant was verified for tonight.", "电话订不到，就在徐家汇商场里找有椅子的地方吃，这顿留到后面哪天。今晚没有核实过的商场餐厅，所以不点名。"),
          b("Pets are not allowed, on the Michelin facilities list.", "米其林的设施栏写不能带宠物。"),
          b("Do not add the Bund after dinner.", "晚饭之后不要再去外滩。"),
        ],
      },
    ],
    skip: [
      b("The Bund, Zhangyuan, and Yu Garden. The landing clock does not reach them.", "外滩、张园、豫园。落地这天的时间不够。"),
      b("A night market. None had published dates covering this week.", "夜市。没有找到覆盖这一周的公开日期。"),
    ],
  },
];

export const days: Day[] = [...openingDay, ...restDays, ...laterDays, ...tailDays];

export const sources = sourceList;
