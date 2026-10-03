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
    title: b("The new museum on the lake", "湖边的新美术馆"),
    area: b("Suzhou, Jinji Lake", "苏州，金鸡湖"),
    leave: b("08:15 from the hotel", "08:15 从酒店出发"),
    sleep: b("IntercityHotel Shanghai Xujiahui", "IntercityHotel 上海徐家汇"),
    meal: b("RUIS, inside the museum", "馆里的 RUIS"),
    summary: b(
      "Suzhou Museum of Contemporary Art opened on 30 August 2026 and is still in its opening season. The garden day stays off the map. Lunch is in the building.",
      "苏州当代美术馆 2026 年 8 月 30 日开放，现在还在开馆季。园林那一天不在这张图上。午饭就在馆里吃。",
    ),
    region: "suzhou",
    route: ["hongqiao", "sip", "moca", "lake"],
    stops: [
      {
        id: "hongqiao-sz",
        kicker: b("Metro", "地铁"),
        title: b("Same ride to Hongqiao", "还是去虹桥"),
        where: b("Line 3 or 4, then Line 10", "3 号线或 4 号线，再换 10 号线"),
        body: b(
          "Leave at 08:15 so the concourse is comfortable before a late-morning train. This is the same station as Hangzhou, on purpose.",
          "08:15 出门，上午晚些的火车之前，候车厅不用赶。和杭州同一座车站，是故意的。",
        ),
        pin: "hongqiao",
        highlights: [
          b("One station the family already used on Friday.", "周五已经用过的车站。"),
        ],
        avoid: [
          b("Do not switch to Shanghai Station for this day.", "这一天不要改去上海站。"),
        ],
      },
      {
        id: "train-sz",
        kicker: b("Train", "火车"),
        title: b("Hongqiao to Suzhou Industrial Park", "虹桥到苏州园区"),
        where: b("苏州园区站, not Suzhou Station and not Suzhou North", "苏州园区站，不是苏州站，也不是苏州北"),
        body: b(
          "This station is the one with a direct metro to the museum. On the timetable checked 3 October 2026, direct trains are often about 24 to 30 minutes. Your booked departure is the one to ride. If that ticket arrives at Suzhou Station instead, the museum's own backup is Line 4 to Sunwu Memorial Park, then Line 8.",
          "这个站有直达美术馆的地铁。10 月 3 日查的时刻表里，直达车常常大约 24 到 30 分钟。坐订好的那班。如果票到的是苏州站，博物馆自己的后备是 4 号线到孙武纪念园，再换 8 号线。",
        ),
        pin: "sip",
        photo: photo(
          "/places/sip-station.jpg",
          "Suzhou Industrial Park railway station, March 2019.",
          "苏州园区站，2019 年 3 月。",
          "Shwangtianyuan, 31 Mar 2019, CC BY-SA 4.0, Wikimedia Commons",
          "Shwangtianyuan，2019年3月31日，CC BY-SA 4.0，维基共享资源",
        ),
        highlights: [
          b("Say 苏州园区站 at the gate. Suzhou Station and Suzhou North are the long way.", "检票口认「苏州园区站」。苏州站和苏州北都要多换一次车。"),
        ],
        avoid: [
          b("Second-class fares on the aggregator are a pattern, not your ticket. The price is not reprinted here.", "时刻表上的二等座票价只是规律，不是你们的票。这里不重印价格。"),
        ],
      },
      {
        id: "line8",
        kicker: b("Metro", "地铁"),
        title: b("Line 8 to the museum", "8 号线到美术馆"),
        where: b("Suzhou MoCA Station, Exit 1", "苏州当代美术馆站，1 号口"),
        body: b(
          "Address: 99 You'an Street, on the right bank of Jinji Lake, next to the Suzhou Eye. Sunday hours are 10:00 to 17:00, last entry 16:00. Aim to walk in around 11:30 to 12:00.",
          "地址：右岸街 99 号，金鸡湖右岸，苏州之眼旁边。周日 10:00 到 17:00，16:00 停止入场。目标是 11:30 到 12:00 走进去。",
        ),
        pin: "moca",
        highlights: [
          b("From Suzhou Industrial Park station, Line 8 is direct. Exit 1.", "从苏州园区站坐 8 号线直达。1 号口。"),
          b("Friday and Saturday the museum stays open until 21:00. Sunday does not. You are here on Sunday.", "周五和周六开到 21:00。周日不是。你们是周日。"),
        ],
        avoid: [
          b("Bags larger than 30 by 42 by 10 centimetres are not allowed in. Lockers are on the first floor and B2 of Gallery 1.", "大于 30×42×10 厘米的包不能带进馆。1 号厅一楼和地下二层有寄存柜。"),
          b("Food, drink, animals, flash, selfie sticks, and tripods are on the prohibited list.", "食物、饮料、动物、闪光灯、自拍杆和三脚架都在禁止清单上。"),
        ],
      },
      {
        id: "shows",
        kicker: b("See", "看"),
        title: b("Opening season, one ticket", "开馆季，一张票"),
        where: b("Four halls", "四个展厅"),
        body: b(
          "Still on for 25 October: Picasso and the World of His Influence, and Gen, both through 8 November. Code and Canopy through 15 November. BIG: Materialism through 31 October 2027. One ticket covers the open shows. The exact Sunday price was not on the English visitor guide.",
          "10 月 25 日还在展期内的有：「毕加索与他影响的世界」和「根」，都到 11 月 8 日。「代码与树冠」到 11 月 15 日。「BIG：物质」到 2027 年 10 月 31 日。一张票覆盖当天开放的展览。英文参观指南上没有周日的具体票价。",
        ),
        pin: "moca",
        highlights: [
          b("Designed by Bjarke Ingels Group. Nine separate halls on the right bank, next to the Suzhou Eye. It opened 30 August 2026.", "Bjarke Ingels Group 设计。右岸九座分开的厅，挨着苏州之眼。2026 年 8 月 30 日开放。"),
          b("The park's opening note says the Picasso show includes the Vollard Suite, and later artists including Zao Wou-Ki, David Hockney, and George Condo. Gen, curated by Wu Hongliang, includes Huang Yongyu, Xu Bing, and Zhou Chunya among 27 names.", "园区的开馆稿写，毕加索展里有沃拉尔组画，后面接到赵无极、大卫·霍克尼、乔治·康多。吴洪亮策划的「根」点了黄永玉、徐冰、周春芽，一共 27 位或组。"),
          b("Buy on the WeChat mini program, or at the service desk in Gallery 1. Wheelchairs and strollers are free against a 100 yuan deposit.", "微信小程序买票，或在 1 号厅服务台买。轮椅和婴儿车免费借，押金 100 元，还了退。"),
        ],
        said: {
          text: b(
            "The industrial-park notice says opening day had orderly queues. The visitor guide says weekends get crowded, parking is limited, and the metro is the way to come. It also says the museum may hold people at the door if it hits capacity.",
            "园区的开馆稿写，开馆当天有人排队，秩序是好的。参观指南写周末人多，车位有限，建议坐地铁。人也可能在门口被控流。",
          ),
          source: b("Suzhou Industrial Park, opening note, and the MoCA visitor guide", "苏州工业园区开馆稿，以及美术馆参观指南"),
          href: "https://www.suzhoumoca.com/en/page/visitor-guide",
        },
        avoid: [
          b("A paid in-person tour is optional. Chinese tours were listed at 300 yuan, English at 400, about an hour, and not required.", "人工讲解是可选的。页面上中文一场 300 元，英文 400 元，大约一小时。不需要订。"),
          b("Audio guides were listed at 30 yuan. Free QR guides exist for key works. Use those if you want a voice.", "语音导览页面上写 30 元。重点作品有免费二维码讲解。想听就用那个。"),
          b("Halls 2, 4, and 9 open only for events. Do not hunt for them.", "2、4、9 号厅只在有活动时开放。不用去找。"),
          b("No photo of the finished museum was found on Wikimedia. The lake photo is the wheel next door, not the building.", "维基共享资源上没有找到建成后的馆。湖的照片是旁边的摩天轮，不是馆本身。"),
        ],
      },
      {
        id: "ruis",
        kicker: b("Lunch", "午饭"),
        title: b("RUIS, Hall 3", "RUIS，3 号厅"),
        where: b("Inside the museum", "在美术馆里面"),
        body: b(
          "The visitor guide names this restaurant and a cafe on the second floor of Hall 1. Separate restaurant hours were not published, so eat while the building is open.",
          "参观指南点了这家餐厅，还有 1 号厅二楼的咖啡。餐厅自己的时间没有公布，所以馆开着的时候吃。",
        ),
        pin: "moca",
        highlights: [
          b("Lunch stays in the building. No hunt across town.", "午饭不出这栋馆。不用穿城去找。"),
        ],
        avoid: [
          b("Eating inside the galleries is forbidden. The restaurant is the place with chairs.", "展厅里不能吃东西。有椅子的是餐厅。"),
          b("A menu and a price were not on the visitor page.", "参观页上没有菜单，也没有价格。"),
        ],
      },
      {
        id: "lake",
        kicker: b("Sit", "坐一会儿"),
        title: b("The lake edge", "湖边"),
        where: b("Outside the same building", "就在馆外面"),
        body: b(
          "Sit. Look at the wheel. Riding it stays optional. A Sunday operating notice for the wheel was not verified.",
          "坐下。看看轮子。坐不坐摩天轮随意。周日开不开、票价多少，没有核实到。",
        ),
        pin: "lake",
        photo: photo(
          "/places/suzhou-eye.jpg",
          "Jinji Lake and the Suzhou Eye, 4 October 2024, before the wheel had opened and before the museum opened. Cranes in the picture are from that day.",
          "金鸡湖和苏州之眼，2024 年 10 月 4 日。当时轮子还没开放，美术馆也还没开。照片里的吊车是那天的。",
          "Shwangtianyuan, 4 Oct 2024, CC BY-SA 4.0, Wikimedia Commons",
          "Shwangtianyuan，2024年10月4日，CC BY-SA 4.0，维基共享资源",
        ),
        highlights: [
          b("The museum and the wheel share this bank of the lake. The 2024 photo is the wheel, not a picture of the museum.", "馆和轮子在湖的同一岸。2024 年的照片是轮子，不是美术馆。"),
        ],
        avoid: [
          b("Do not buy a wheel ticket on the strength of this page. Sunday hours were not checked.", "不要凭这一页去买摩天轮的票。周日的时间没有核对。"),
          b("The Humble Administrator's Garden is the old city, a different metro day.", "拙政园在老城，是另一天地铁。"),
        ],
      },
      {
        id: "home-sz",
        kicker: b("Train", "火车"),
        title: b("Back after 16:00", "16:00 之后回"),
        where: b("Suzhou Industrial Park to Hongqiao", "苏州园区到虹桥"),
        body: b(
          "The booked return is the train to follow. Leaving after 16:00 keeps the last entry from becoming a rush. Then the metro home from Hongqiao.",
          "回程坐订好的那班。16:00 之后离开，就不会把停止入场赶成一阵跑。然后从虹桥坐地铁回家。",
        ),
        pin: "hongqiao",
        highlights: [
          b("If the return leaves from Suzhou Station instead, the museum's backup is Line 8 and then Line 4.", "如果回程票在苏州站，就按馆方的后备：8 号线再换 4 号线。"),
        ],
        avoid: [
          b("Do not add the I.M. Pei museum or Pingjiang Road on the way to the train.", "去车站的路上不要再加贝聿铭的博物馆或平江路。"),
        ],
      },
    ],
    skip: [
      b("Humble Administrator's Garden, the I.M. Pei museum, and Pingjiang Road. They are the old city, a different metro day.", "拙政园、贝聿铭的苏州博物馆、平江路。那是老城，另一天地铁。"),
      b("Suzhou Museum West and the Napoleon show. That show ends today, and the building is across the city on Changjiang Road.", "苏州博物馆西馆和拿破仑展。那个展今天结束，馆在长江路，城市的另一头。"),
    ],
  },
];

export const tailDays: Day[] = [];
export const sources: { label: Bi; href: string }[] = [];
