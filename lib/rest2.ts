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
    area: b("The Bund", "外滩"),
    leave: b("10:15 from the hotel", "10:15 从酒店出发"),
    sleep: b("IntercityHotel Shanghai Xujiahui", "IntercityHotel 上海徐家汇"),
    meal: b("Le Reflet at 18:00, a la carte", "18:00 Le Reflet，点菜，不吃套餐"),
    summary: b(
      "One neighborhood, and a nicer meal. A new show opens this week at Rockbund, a few streets behind the river. The embankment is the only classic, and it is a sit, not a march.",
      "只逛这一带，晚饭好一点。外滩美术馆这周有一个新展，在江后面几条街。江堤是唯一的老风景，坐下看，不游行。",
    ),
    region: "shanghai",
    route: ["home", "bund", "reflet"],
    stops: [
      {
        id: "metro-bund",
        kicker: b("Metro", "地铁"),
        title: b("Yishan Road to East Nanjing Road", "宜山路到南京东路"),
        where: b("Line 3 or 4, then Line 2", "3 号线或 4 号线，再换 2 号线"),
        body: b(
          "North to Zhongshan Park via Hongqiao Road and Yan'an West Road. Change to Line 2 toward Pudong Airport and ride to East Nanjing Road. Rockbund is a 10 minute walk from Exit 6. An official minute total for the whole ride was not published, which is why 10:15 has slack in it.",
          "往北到中山公园，经过虹桥路和延安西路。换 2 号线往浦东机场，到南京东路。外滩美术馆从 6 号口走大约 10 分钟。整段没有公布的总分钟，所以 10:15 出发留了余量。",
        ),
        pin: "bund",
        highlights: [
          b("Exit 6 of East Nanjing Road, then Huqiu Road. The museum door is the plaza just east of Huqiu Road.", "南京东路 6 号口，再到虎丘路。正门在虎丘路东侧的博物馆广场。"),
        ],
        avoid: [
          b("Do not start with a Nanjing Road shop walk. That is a second march.", "不要先逛南京路商店。那是另一次走路。"),
        ],
      },
      {
        id: "rockbund",
        kicker: b("See", "看"),
        title: b("Kandis Williams: A Cave", "坎迪斯·威廉姆斯：一个洞穴"),
        where: b("Rockbund Art Museum, 20 Huqiu Road", "上海外滩美术馆，虎丘路 20 号"),
        body: b(
          "Dated 22 October 2026 to 21 February 2027. Wednesday to Sunday, 11:00 to 19:00, last entry 18:30. Saturday is a public day. Entry has been free since May 2025. The building has an elevator and wheelchairs at the desk. See the show, then leave. You do not need to close the museum.",
          "展期 2026 年 10 月 22 日到 2027 年 2 月 21 日。周三到周日 11:00 到 19:00，18:30 停止入场。周六对公众开放。2025 年 5 月起免费。楼里有电梯，前台可以借轮椅。看完就走。不必等到闭馆。",
        ),
        pin: "bund",
        photo: photo(
          "/places/rockbund.jpg",
          "The facade of the Rockbund Art Museum on Huqiu Road.",
          "虎丘路上的上海外滩美术馆外立面。",
          "Jpbowen, CC BY-SA 4.0, Wikimedia Commons",
          "Jpbowen，CC BY-SA 4.0，维基共享资源",
        ),
        highlights: [
          b("The museum is in the 1933 former Royal Asiatic Society building. It does not keep a permanent collection. Shows change.", "馆在 1933 年的原亚洲文会大楼里。没有常设藏品。展览会换。"),
          b("Since 2 May 2025 the exhibitions are free. On Saturday you can book a time slot in the museum WeChat mini program, or queue.", "2025 年 5 月 2 日起展览免费。周六可以在「上海外滩美术馆」微信小程序预约时段，也可以现场排队。"),
          b("This Saturday is the show's opening weekend. The page gives the dates and the title. It does not describe the works in the text that loaded.", "这个周六是展览的开幕周末。页面上有日期和标题。能打开的正文没有逐件介绍作品。"),
        ],
        said: {
          text: b(
            "The visit page says weekend visitors either book a slot or join the queue, and that weekdays need neither. It also says the elevator reaches every floor.",
            "参观页写，周末要么预约时段，要么排队；工作日不用预约。同一页写电梯到每一层。",
          ),
          source: b("Rockbund Art Museum, visit page", "上海外滩美术馆参观页"),
          href: "https://www.rockbundartmuseum.org/visit",
        },
        avoid: [
          b("Monday the museum is closed. The hours block says member Tuesday starts at 12:00. The same page's footer says member Tuesday from 11:00. Do not move this visit to Tuesday.", "周一闭馆。开放时间那一栏写周二会员日 12:00 起。同一页页脚写周二会员日 11:00 起。两边不一致，所以不要改到周二来。"),
          b("Group tours need an email three days ahead and are capped at 30. You do not need one.", "团体导览要提前三天发邮件，最多 30 人。你们不需要。"),
          b("A direct open of the exhibition page failed once on 3 October. Glance at it before Saturday if you want the latest line.", "10 月 3 日直接打开展览页失败过一次。周六前想再确认，就再看一眼那个页面。"),
        ],
      },
      {
        id: "embankment",
        kicker: b("Classic", "经典"),
        title: b("A short sit on the Bund", "在外滩坐一会儿"),
        where: b("The embankment, a few minutes from the museum", "江堤，离美术馆几分钟"),
        body: b(
          "Watch the river. Skip the Nanjing Road shopping walk. It adds a second march on a birthday.",
          "看江。南京路的商店不逛。生日这天不再加一次走路。",
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
          b("This is the one classic of the day, and it is a bench, not a route march.", "这一天的老风景只有这一处，而且是坐下，不是行军。"),
        ],
        avoid: [
          b("Yu Garden and Tianzifang are a second district.", "豫园和田子坊是另一个区。"),
          b("No recent visitor notes were opened for the embankment, so this stop does not invent a best hour.", "江堤没有打开近期的游客笔记，所以这里不编一个最佳时刻。"),
        ],
      },
      {
        id: "birthday",
        kicker: b("Dinner", "晚饭"),
        title: b("Le Reflet, 18:00", "Le Reflet，18:00"),
        where: b("2nd floor, Broadway Mansions, 20 North Suzhou Road", "上海大厦 2 楼，北苏州路 20 号"),
        body: b(
          "Opened 16 June 2026, just north of Waibaidu Bridge. Tuesday to Sunday, 18:00 to 22:00. Order a la carte and plan to be done around 20:00. The chef's tasting menu is the long version, and this night is not that. Phone on the opening report: 021-63579880.",
          "2026 年 6 月 16 日开业，就在外白渡桥北面。周二到周日 18:00 到 22:00。点菜，打算 20:00 左右吃完。主厨套餐是长的那种，今晚不吃。开业报道上的电话：021-63579880。",
        ),
        pin: "reflet",
        photo: photo(
          "/places/broadway-mansions.jpg",
          "Broadway Mansions at night, the building that holds Le Reflet. Photographed in 2024, before the restaurant opened.",
          "上海大厦夜景。Le Reflet 在这栋楼里。照片是 2024 年拍的，餐厅还没开。",
          "Chainwit., 2024, CC BY 4.0, Wikimedia Commons",
          "Chainwit.，2024，CC BY 4.0，维基共享资源",
        ),
        highlights: [
          b("Second floor, south side, a long room. The opening report says a half-height glass wall faces the river, from the North Bund toward Suzhou Creek.", "二楼南侧，长条形。开业报道写半高的玻璃墙朝江，从北外滩看到苏州河。"),
          b("Two menus that do not share dishes: a la carte, and a chef's tasting menu. Drinks they describe are fermented teas and flowers, with no alcohol, plus a separate wine list.", "两套菜单，菜不重复：零点和主厨套餐。报道里的佐餐饮品是花草发酵茶，不含酒精，另外有酒单。"),
          b("If Le Reflet cannot take four, Huangpu Xuan is in the same building. The hotel catering page still listed Huangpu Xuan and did not list Le Reflet when it was checked. Hours for Huangpu Xuan were not on that page.", "Le Reflet 如果坐不下四位，同一栋楼的黄浦轩是后备。查的时候，大厦餐饮页仍列着黄浦轩，没有列 Le Reflet。黄浦轩的时间那一页上没有。"),
        ],
        said: {
          text: b(
            "The Hongkou report of the opening describes a white modern room, old photographs of the building on the walls, and French cooking simplified away from heavy butter. It is an opening notice, not a stack of diner reviews. A separate diner note was not opened in full.",
            "虹口的开业报道把房间写成白色、现代，墙上挂着大厦的老照片，法餐做得比传统更轻、少用黄油。这是开业稿，不是一叠食客评论。另一则食客笔记没有全文打开。",
          ),
          source: b("Shanghai Hongkou / NetEase, 16 Jun 2026", "上海虹口 / 网易，2026年6月16日"),
          href: "https://c.m.163.com/news/a/KVIFRE5R0514A3B5.html",
        },
        avoid: [
          b("The tasting menu turns dinner into a long night. Stay with a la carte.", "套餐会把晚饭拖长。点菜就好。"),
          b("Book through the restaurant's own mini program if the phone is busy. The name on the report is  Le Reflet餐厅预约.", "电话忙，就用报道里的小程序「Le Reflet餐厅预约」。"),
          b("Closed Monday. You are here on Saturday, which is an open night.", "周一休息。你们是周六，晚上开着。"),
        ],
      },
      {
        id: "home-sat",
        kicker: b("Metro", "地铁"),
        title: b("Line 2 home", "2 号线回家"),
        where: b("East Nanjing Road to Zhongshan Park, then Line 3 or 4", "南京东路到中山公园，再换 3 号线或 4 号线"),
        body: b(
          "Evening Line 2 service runs late enough for a 20:00 finish. A last-train clock is not quoted here because those tables move.",
          "晚上的 2 号线足够覆盖 20:00 吃完。末班车时刻这里不写，因为那张表会变。",
        ),
        pin: "home",
        highlights: [
          b("Same lines as the morning, in reverse.", "早上的线，倒过来坐。"),
        ],
        avoid: [
          b("Do not wait for a last-train time that was not checked for this Saturday.", "这个周六的末班车没有核对，不要等一个没查过的钟点。"),
        ],
      },
    ],
    skip: [
      b("Yu Garden and Tianzifang. A second district.", "豫园和田子坊。那是另一个区。"),
      b("Doing Rockbund on another day. Monday the museum is closed. Tuesday is members-only on the published hours.", "不要把外滩美术馆改到别的日子。周一闭馆。公布的时间里周二是会员日。"),
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
