import { bi, type Bi } from "@/lib/text";
import type { Day, Photo } from "@/lib/trip";

const b = bi;

function photo(src: string, altEn: string, altZh: string, creditEn: string, creditZh: string): Photo {
  return { src, alt: b(altEn, altZh), credit: b(creditEn, creditZh) };
}

export const laterDays: Day[] = [
  {
    id: "sat",
    date: b("24 Oct", "10月24日"),
    dayNum: "03",
    weekday: b("Saturday", "周六"),
    title: b("Chee Onn's birthday", "Chee Onn 的生日"),
    area: b("Wukang Road, then the river", "武康路，然后江边"),
    leave: b("10:00, hotel lobby", "10:00，酒店大堂"),
    sleep: b("IntercityHotel Shanghai Xujiahui", "IntercityHotel 上海徐家汇"),
    meal: b("Ren He Guan at 17:00", "17:00 人和馆"),
    summary: b(
      "Birthday. Meet in the lobby at 10:00. Cab to 来来小笼包 for breakfast, then a free walk on Wukang Road. Dinner is Ren He Guan at about 17:00. Then the Shiliupu night cruise, Yu Garden lights, and the Bund. Not Rockbund. Not Le Reflet.",
      "生日。10:00 在大堂集合。打车去来来小笼包吃早饭，然后武康路随便走。大约 17:00 在人和馆吃晚饭。然后十六铺夜航、豫园夜灯、外滩。不去外滩美术馆，不去 Le Reflet。",
    ),
    region: "shanghai",
    route: ["home", "lailai", "wukang", "renheguan", "shiliupu", "yuyuan", "bund"],
    stops: [
      {
        id: "lobby",
        kicker: b("Meet", "集合"),
        title: b("Hotel lobby at 10:00", "10:00 酒店大堂"),
        where: b("IntercityHotel Shanghai Xujiahui", "IntercityHotel 上海徐家汇"),
        body: b(
          "Everyone meets in the lobby at 10:00. The first ride is a cab, not the metro.",
          "10:00 都在大堂见面。第一段是出租车，不是地铁。",
        ),
        pin: "home",
        highlights: [
          b("IDs stay in a pocket. The boat later is real-name, and 70 and over is half price with an ID.", "证件放在身上。晚上的船要实名。70 岁及以上凭证件半价。"),
        ],
        avoid: [
          b("Do not start with a Nanjing Road shop walk.", "不要从逛南京路商店开始。"),
        ],
      },
      {
        id: "lailai",
        kicker: b("Breakfast", "早饭"),
        title: b("Lai Lai xiaolongbao", "来来小笼包"),
        where: b("来来小笼包, by cab", "打车去来来小笼包"),
        body: b(
          "Cab from the hotel. The shop address is not in these notes, so none is printed. Tell the driver 来来小笼包 and confirm the branch before you sit.",
          "从酒店打车。店的地址不在笔记里，所以不印。跟司机说来来小笼包，坐下之前先确认是哪一家。",
        ),
        pin: "lailai",
        highlights: [
          b("Breakfast is this shop, then you leave. It is not a second neighborhood.", "早饭就是这家，吃完就走。不是再开一个区。"),
        ],
        avoid: [
          b("Do not invent a street number that was never written down.", "笔记里没有的门牌，不要编一个。"),
        ],
      },
      {
        id: "wukang",
        kicker: b("Walk", "走"),
        title: b("Wukang Road, free and easy", "武康路，随便走"),
        where: b("武康路", "武康路"),
        body: b(
          "Another cab, then a free walk. Lunch is wherever you can sit. No restaurant is booked for midday.",
          "再打一辆车，然后随便走。午饭有位子就吃。中午没有订好的餐厅。",
        ),
        pin: "wukang",
        highlights: [
          b("Keep it light. Dinner is the seated meal that is fixed.", "步子放轻。坐下来的那顿是晚上订好的。"),
        ],
        avoid: [
          b("Do not turn the street into a march, and do not add Rockbund.", "不要把这条街走成行军，也不要加外滩美术馆。"),
        ],
      },
      {
        id: "renheguan-sat",
        kicker: b("Dinner", "晚饭"),
        title: b("Ren He Guan, about 17:00", "人和馆，大约 17:00"),
        where: b("407 Zhaojiabang Road, Xuhui", "徐汇，肇嘉浜路 407 号"),
        body: b(
          "This is the Xuhui room already in the Thursday notes, not Le Reflet. Meet here at about 17:00. Michelin lists the phone as +86 21 6403 0731. The Thursday listing gave evening hours of 17:00 to 21:30. Saturday hours were not checked on their own, so confirm the table.",
          "就是周四笔记里的徐汇那家，不是 Le Reflet。大约 17:00 在这里见面。米其林页上的电话是 +86 21 6403 0731。周四的资料写晚上 17:00 到 21:30。周六的时间没有单独核对，订的时候再确认。",
        ),
        pin: "renheguan",
        highlights: [
          b("From Yishan Road, Line 9 toward Century Avenue is three stops to Jiashan Road. Exit 5 is about 230 meters from the door.", "从宜山路坐 9 号线往世纪大道，三站到嘉善路。5 号口离门口大约 230 米。"),
          b("Shanghainese, and the same branch as Thursday.", "本帮菜，和周四同一家。"),
        ],
        avoid: [
          b("Le Reflet and Huangpu Xuan are not the birthday dinner.", "生日晚饭不是 Le Reflet，也不是黄浦轩。"),
        ],
      },
      {
        id: "boat",
        kicker: b("Boat", "船"),
        title: b("精华游 from Shiliupu", "十六铺的精华游"),
        where: b("十六铺, Zhongshan East No. 2 Road", "十六铺，中山东二路"),
        body: b(
          "The official night cruise for mom. About 45 to 50 minutes, past the Bund and Lujiazui. Aim for a boat around 19:00 to 19:30. Peak fare is 150 yuan. Age 70 and over is half price with an ID. Book ahead on the WeChat account 浦江游览集团, or at the pier. Saturday is a peak night.",
          "给妈妈的官方夜航。大约 45 到 50 分钟，经过外滩和陆家嘴。目标是 19:00 到 19:30 的船。旺季票价 150 元。70 岁及以上凭证件半价。提前在微信「浦江游览集团」订，或在码头订。周六是旺的一晚。",
        ),
        pin: "shiliupu",
        highlights: [
          b("Real-name tickets. Bring IDs.", "实名票。带证件。"),
          b("Earlier notes put ticket exchange at about 17:00 to 20:00, at 551 Zhongshan East No. 2 Road.", "早先的笔记写换票大约 17:00 到 20:00，地点是中山东二路 551 号。"),
        ],
        avoid: [
          b("Do not assume a 61-year-old pays the half fare. Half fare starts at 70.", "不要把 61 岁当成半价。半价从 70 岁起。"),
          b("Do not leave the booking to the pier queue on a Saturday night.", "周六晚上不要拖到码头现场排队再订。"),
        ],
      },
      {
        id: "yuyuan-lights",
        kicker: b("Lights", "夜灯"),
        title: b("Yu Garden lights", "豫园夜灯"),
        where: b("豫园, after the boat", "下船后的豫园"),
        body: b(
          "After the cruise, the garden lights. A ticket price and a closing time were not in the notes, so neither is printed. If the gate is shut, go on to the Bund.",
          "下船后看豫园的灯。票价和关门时间不在笔记里，所以不印。门关了就去外滩。",
        ),
        pin: "yuyuan",
        highlights: [
          b("This is the lights, not a daytime garden march.", "看的是灯，不是白天把园子走完。"),
        ],
        avoid: [
          b("Tianzifang is still a skip.", "田子坊仍然不去。"),
        ],
      },
      {
        id: "bund-night",
        kicker: b("Night", "夜"),
        title: b("The Bund at night", "夜外滩"),
        where: b("The embankment", "江堤"),
        body: b(
          "Watch the river, then cab home. This is not a walk down Nanjing Road.",
          "看江，然后打车回家。这不是沿南京路走。",
        ),
        pin: "bund",
        photo: photo(
          "/places/bund.jpg",
          "The Bund embankment, looking along the old waterfront.",
          "外滩江堤，沿老建筑的江边。",
          "Can Pac Swire, CC BY-SA 2.0, Wikimedia Commons",
          "Can Pac Swire，CC BY-SA 2.0，维基共享资源",
        ),
        highlights: [
          b("The boat already passed this water. The embankment is the last look, on foot.", "船已经从这段江上过了。江堤是上岸后的最后一眼。"),
        ],
        avoid: [
          b("A Nanjing Road shop march is not the way home.", "回家的路不是逛南京路商店。"),
        ],
      },
    ],
    skip: [
      b("Rockbund Art Museum, and the Kandis Williams show.", "外滩美术馆，以及坎迪斯·威廉姆斯的展览。"),
      b("Le Reflet, and Huangpu Xuan in the same building.", "Le Reflet，以及同一栋楼的黄浦轩。"),
      b("A Nanjing Road shop march as the walk of the day.", "把逛南京路商店当成这一天的主路。"),
      b("Tianzifang.", "田子坊。"),
    ],
  },
  {
    id: "sun",
    date: b("25 Oct", "10月25日"),
    dayNum: "04",
    weekday: b("Sunday", "周日"),
    title: b("Gardens in the rain", "雨里看园"),
    area: b("Suzhou old town", "苏州老城"),
    leave: b("08:15 to 09:00 from the hotel", "08:15 到 09:00 从酒店出发"),
    sleep: b("IntercityHotel Shanghai Xujiahui", "IntercityHotel 上海徐家汇"),
    meal: b("Seated lunch indoors, near the garden", "园子附近，室内坐下吃"),
    summary: b(
      "Rain sightseeing in the old town. Covered corridors at the Humble Administrator's Garden, then a short umbrella walk on Pingjiang Road. No museums. Pack umbrellas, anti-slip shoes, spare socks, and IDs.",
      "老城的雨天观光。拙政园走有廊的一段，然后平江路撑伞走一小段。不去任何博物馆。带伞、防滑鞋、备用袜子和证件。",
    ),
    region: "suzhou",
    route: ["hongqiao", "station", "garden", "pingjiang", "couple"],
    stops: [
      {
        id: "hongqiao-sz",
        kicker: b("Metro", "地铁"),
        title: b("Same ride to Hongqiao", "还是去虹桥"),
        where: b("Line 3 or 4, then Line 10", "3 号线或 4 号线，再换 10 号线"),
        body: b(
          "Leave between 08:15 and 09:00. The aim is a train around 9. This is the same station as Hangzhou, on purpose.",
          "08:15 到 09:00 出门。目标是 9 点左右的火车。和杭州同一座车站，是故意的。",
        ),
        pin: "hongqiao",
        highlights: [
          b("One station the family already used on Friday.", "周五已经用过的车站。"),
          b("Umbrellas, anti-slip shoes, spare socks, and IDs, before you leave the hotel.", "出门前带好伞、防滑鞋、备用袜子和证件。"),
        ],
        avoid: [
          b("Do not switch to Shanghai Station for this day.", "这一天不要改去上海站。"),
        ],
      },
      {
        id: "train-sz",
        kicker: b("Train", "火车"),
        title: b("Hongqiao to Suzhou Station", "虹桥到苏州站"),
        where: b("苏州站, the old-city station, not 苏州园区站 and not Suzhou North", "苏州站，老城这一站，不是苏州园区站，也不是苏州北"),
        body: b(
          "苏州站 is the station for the gardens. If the ticket still says 苏州园区站, switch it or rebook the morning train. These notes do not record a 苏州站 ticket already in hand. No train number is printed here.",
          "看园要在苏州站下车。如果票上还是苏州园区站，就改签或重订早上那班。这里没有记下已经持有的苏州站车票。也不印车次号。",
        ),
        pin: "station",
        highlights: [
          b("Say 苏州站 at the gate.", "检票口认「苏州站」。"),
        ],
        avoid: [
          b("Do not ride a 园区 ticket and then cross the city. The lake and its museum are not this day.", "不要拿园区的票下车后再穿城。湖和湖边的馆都不是今天。"),
          b("A ride time for 苏州站 was not in the notes, so none is printed. The old 24 to 30 minute figure was for 苏州园区站.", "笔记里没有苏州站的时长，所以不印。以前那 24 到 30 分钟是苏州园区站的。"),
        ],
      },
      {
        id: "metro-garden",
        kicker: b("Metro", "地铁"),
        title: b("Metro to the garden", "地铁到园子"),
        where: b("北寺塔, or 拙政园苏博站, then out to the garden", "北寺塔，或拙政园苏博站，出站去园子"),
        body: b(
          "Get off for 拙政园. The station name 拙政园苏博站 names a museum as well. Do not go in. No museum today.",
          "为拙政园下车。拙政园苏博站的名字里有博物馆。不要进去。今天不去任何博物馆。",
        ),
        pin: "garden",
        highlights: [
          b("Leave the station toward the garden entrance.", "出站朝拙政园门口走。"),
        ],
        avoid: [
          b("Do not follow signs into the I.M. Pei museum, the silk museum, or any other gallery.", "不要跟着指示走进贝聿铭的博物馆、丝绸博物馆，或任何别的展馆。"),
        ],
      },
      {
        id: "garden",
        kicker: b("See", "看"),
        title: b("Humble Administrator's Garden", "拙政园"),
        where: b("Covered corridors", "有廊的一段"),
        body: b(
          "Walk under cover. 兰雪堂, then 远香堂, then 香洲, then 留听阁 and 听雨轩. Sit there while it rains. Skip wet rockeries and steep steps. Wear anti-slip shoes.",
          "走有廊的路。兰雪堂，然后远香堂，然后香洲，然后留听阁和听雨轩。下雨就在那里坐。湿的假山和陡台阶不走。穿防滑鞋。",
        ),
        pin: "garden",
        highlights: [
          b("Book on 君到苏州 or 苏州园林 before you go.", "出发前在「君到苏州」或「苏州园林」预订。"),
          b("Hours and the ticket price are not in these notes. Read both on the booking page.", "开放时间和票价不在这页。以预订页上的为准。"),
          b("This is the long stop. Keep the walking light.", "这一站待得最久。步子放轻。"),
        ],
        avoid: [
          b("Wet rockeries and steep steps.", "湿的假山和陡台阶。"),
          b("The museum beside the garden. Walk past it.", "园子旁边的博物馆。从它门口走过，不要进。"),
        ],
      },
      {
        id: "lunch-sz",
        kicker: b("Lunch", "午饭"),
        title: b("Sit down indoors", "室内坐下吃"),
        where: b("Near the garden, or the north end of Pingjiang Road", "拙政园附近，或平江路北口"),
        body: b(
          "A chair indoors. Do not hunt for a famous room. If the first quiet place has seats, take them.",
          "室内要有椅子。不要满街找名店。第一家安静、有位子的就坐下。",
        ),
        pin: "pingjiang",
        highlights: [
          b("Lunch stays next to the garden and the street you will walk.", "午饭就在园子和接下来要走的街旁边。"),
        ],
        avoid: [
          b("Do not turn lunch into a second walk in the rain.", "不要把午饭走成雨里的第二段路。"),
        ],
      },
      {
        id: "pingjiang",
        kicker: b("Walk", "走"),
        title: b("Pingjiang Road, a short stretch", "平江路，只走一小段"),
        where: b("The canal street", "河边这条街"),
        body: b(
          "Umbrellas up, a short walk along the canal. When it pours, stop for tea or 评弹 under a roof. If everyone is soaked, skip the rest of the street and go back to the train.",
          "撑伞，沿河走一小段。雨大了就进屋喝茶，或听评弹。如果大家都湿了，剩下的街不走，回去赶火车。",
        ),
        pin: "pingjiang",
        highlights: [
          b("A short hop, not a full day on the street.", "一小段，不是把整条街走完。"),
        ],
        avoid: [
          b("Lion Grove Garden, 狮子林. The rockeries are a wet climb.", "狮子林。假山是湿的，要爬。"),
          b("A long walk on Shantang Street, 山塘, if anyone is tired.", "人累了就不要再走长的山塘。"),
        ],
      },
      {
        id: "couple",
        kicker: b("Optional", "可选"),
        title: b("Couple's Garden, only if energy holds", "耦园，只在还有力气时"),
        where: b("耦园, near Pingjiang Road", "耦园，靠近平江路"),
        body: b(
          "A second garden, close to the street you are already on. Go only if the walk still feels easy. It is not 狮子林.",
          "第二座园子，就在你们已经走到的街附近。步子还轻松才去。这不是狮子林。",
        ),
        pin: "couple",
        highlights: [
          b("Skip it if anyone is tired or soaked.", "有人累了或湿透了，就直接跳过。"),
        ],
        avoid: [
          b("Do not trade this for Lion Grove Garden.", "不要改去狮子林。"),
        ],
      },
      {
        id: "home-sz",
        kicker: b("Train", "火车"),
        title: b("Back in the afternoon", "下午回"),
        where: b("苏州站 to Hongqiao, then the metro home", "苏州站到虹桥，再地铁回酒店"),
        body: b(
          "Take a return in the middle or late afternoon. The train to ride is the one in the booking. These notes do not print a train number. From Hongqiao, the same metro back to the hotel.",
          "下午中间或偏晚回程。坐订好的那班。这里不印车次号。出虹桥后，坐同一路地铁回酒店。",
        ),
        pin: "station",
        highlights: [
          b("If you skipped Couple's Garden, leave from Pingjiang Road straight for 苏州站.", "如果没去耦园，就从平江路直接去苏州站。"),
        ],
        avoid: [
          b("Do not add a museum, Jinji Lake, or a long Shantang walk on the way to the station.", "去车站的路上不要再加博物馆、金鸡湖，或长的山塘。"),
        ],
      },
    ],
    skip: [
      b("Every museum. That includes the I.M. Pei Suzhou Museum, Suzhou MoCA on Jinji Lake, the silk museum, and Suzhou Museum West.", "所有博物馆。包括贝聿铭的苏州博物馆、金鸡湖边的苏州当代美术馆、丝绸博物馆，以及苏州博物馆西馆。"),
      b("Jinji Lake and the Suzhou Eye. They are the other side of the city.", "金鸡湖和苏州之眼。那是城市的另一边。"),
      b("Lion Grove Garden, 狮子林. Wet rockeries, and a second steep garden.", "狮子林。假山是湿的，而且是第二座要爬的园子。"),
      b("A long walk on Shantang Street if anyone is tired. The Napoleon show at Museum West ends today and stays off the day. The building is across the city.", "人累了就不要走长的山塘。西馆的拿破仑展今天结束，也不去。馆在城市的另一头。"),
    ],
  },
];

export const tailDays: Day[] = [];
export const sources: { label: Bi; href: string }[] = [];
