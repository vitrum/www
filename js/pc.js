  var pages=["home","hand","pro","win","intro"];
  var mountain=[
    {
      "id":"1",
      "name":"龙虎山",
      "intro":"生性活泼，外向开朗，每天都充满活力，难能可贵的是你总保有一颗乐观的心。你总有滔滔不绝的开心事想要与亲友们分享，永远有一个想去的旅行目的地，纳智捷 5 Sedan最适合为你补充电量，让活力强劲十足！"
    },
    {
      "id":"2",
      "name":"武陵山",
      "intro":"工作中，你注重细节，重视实效，对于繁杂琐事耐性细心。生活中，你善于体谅他人，会贴心地了解他人的需要，喜欢和谐的人际关系，并常常展露你细腻的情感。如同纳智捷 5 Sedan，在曲折处显真情，细节中见智慧。"
    },
    {
      "id":"3",
      "name":"金佛山",
      "intro":"智慧纹映射出你的秘密，你拥有非常灵活的头脑，喜欢在不同身份中游移转换，你最适合驾驭纳智捷 5 Sedan在雄险怪奇的岩石中寻求刺激，可是小心别让变幻莫测成为你最爱的游戏！"
    },
    {
      "id":"4",
      "name":"齐云山",
      "intro":"常有人赞叹你的强大毅力，不妥协的态度和睿智的眼光。而你最在意的是自己是否主导前行的方向。强大的意志力和周全的思考，常常能帮助你在事业和家庭中扮演良好的形象，如智慧的纳智捷 5 Sedan一样，一路安全呵护。"
    },
    {
      "id":"5",
      "name":"天山",
      "intro":"你的性格开放、自由、不愿被拘束，喜欢用最痛快的方式表达自己，对于责任却可以一担在身，从容应对。你适合驾驶纳智捷 5 Sedan在苍劲雄浑的自然里，发现与生俱来的勇气与智慧。"
    },
    {
      "id":"6",
      "name":"丹霞山",
      "intro":"你拥有诗意而丰富的内心，无论是生活还是处事都有自己的哲学，喜欢追求美感的你最适合与纳智捷 5 Sedan一同在山与水的天然博物馆中，感受内在的平衡。"
    },
    {
      "id":"7",
      "name":"太姥山",
      "intro":"你谦虚而缄默，不经常表现出自我的一面，有耐心、处事灵活，很容易与他人相处。你喜欢观察周围的人和物，并有自己的独特见解。无论工作生活，你都是一枚融洽分子，像纳智捷 5 Sedan一样为大家增添开心与欢乐！"
    },
    {
      "id":"8",
      "name":"武夷山",
      "intro":"你的脑中总有许多想法，有的天马行空，有的神秘莫测，有的惊艳旁人。源源不断的奇思妙想和丰富的想象力帮助你创造出异于常人的作品，或让你做出不寻常的举动。带着你的梦想驾驭纳智捷 5 Sedan自由驰骋吧！"
    },
    {
      "id":"9",
      "name":"骊山",
      "intro":"对于问题的答案，你总是会探寻更多的可能性。思维开阔，富有好奇心和洞察力，常常有出色的长远眼光。在日常事务中，你通常灵活多变，有很好的忍耐力和适应性。如同纳智捷 5 Sedan对不同道路的适应一样，智慧而沉稳。"
    },
    {
      "id":"10",
      "name":"神农顶",
      "intro":"你具有强烈的自我意识，独立的性格、不拘于陈规，性情刚烈不服输，具有不屈不饶的精神。你最适合驾驶纳智捷 5 Sedan，经过人迹罕至的原始森林，体会神农架亘古不朽的魅力。"
    },
    {
      "id":"11",
      "name":"阿里山",
      "intro":"性格独立，喜欢冒险和富有想象力的活动。你灵活易变、思维开阔，对有创见而合理的解决方法感兴趣。工作中的狠角色，家庭中的领导者。相信纳智捷 5 Sedan会是你智慧的得力搭档！"
    },
    {
      "id":"12",
      "name":"庐山",
      "intro":"在别人看来的巨大压力，却被你视为莫大的动力。总能保持良好心态的你总有源源不竭的旺盛精力，助你不断超越自己。你的激情同纳智捷 5 Sedan的澎湃动力不谋而合，相得益彰。"
    },
    {
      "id":"13",
      "name":"玉龙雪山",
      "intro":"你拥有神秘的气质，而你在爱情中也喜欢捉迷藏，虽然你的潇洒倜傥能迷倒众生，但不要因此错失了解爱的真谛与意义。纳智捷 5 Sedan最适合你去了解如何驾驭人生的去处。"
    },
    {
      "id":"14",
      "name":"长白山",
      "intro":"你是天生的谋略家，具有独特的思想、伟大的远见和梦想。你天生精于理论对于复杂而综合的概念灵活运用，通常能看清局势中的利弊。纳智捷 5 Sedan更像是你人生旅途的智慧帮手，承载你一路向前。"
    },
    {
      "id":"15",
      "name":"喜马拉雅山",
      "intro":"你天性向往自由，钟爱大自然的秀美，喜欢到山野中呼吸新鲜空气。无拘无束的个性和崇尚纯净的心灵，让你在纷繁的日常生活中始终保持一颗平常心。驾着纳智捷 5 Sedan上路吧，给心灵一次自由旅行！"
    },
    {
      "id":"16",
      "name":"青城山",
      "intro":"你重感情，善交际，笃信“若我以诚待人，人亦将以诚待我”。你的人生信条使你结交了许多良师益友，让你总能在困境中得到帮助， 纳智捷 5 Sedan会如最信赖的朋友，与你一起，驶向属于你最正确的方向。"
    },
    {
      "id":"17",
      "name":"泰山",
      "intro":"处变不惊，稳如泰山。大风大浪中最能展现你从容不迫的一面，发现事物的本质，看清问题的根源，镇定自若地泰然处之。正如智慧安全的纳智捷 5 Sedan一般，自信沉稳，深得亲友和同侪的信赖"
    },
    {
      "id":"18",
      "name":"普陀山",
      "intro":"你骨子里透出的善良和质朴，给人深刻印象。待人真诚的你到哪儿都有一群至交好友围绕，开心时有人分享，遇到困难时更有众多援手，最适合驾驭纳智捷 5 Sedan与好友一起分享爱与友情。"
    },
    {
      "id":"19",
      "name":"五台山",
      "intro":"你对人有很强的洞察力，善于观察和沟通，富有责任感，始终坚持自己的价值观。对于事业有清晰的远景，并有自我计划且行事果断坚定。与亲朋好友一同乘坐纳智捷 5 Sedan相谈甚欢，对你而言是件十分开心的事。"
    },
    {
      "id":"20",
      "name":"嵩山",
      "intro":"你足智多谋、有独立见解，也常在工作中发挥你的聪明才智，你乐于为了推进项目的进行，或改变现状而攻克难题。对于家庭，大多数时间你喜欢扮演观察者和执行者的角色，如驾驶纳智捷 5 Sedan带着全家人出游。"
    },
    {
      "id":"21",
      "name":"黄山",
      "intro":"因你超越常人的阅历与智慧，及与生俱来的精英风范，你总是职场上的风云人物，更是全家人的主心骨。与全家人一同驾驶纳智捷 5 Sedan在假日出游，尽享一路美景和欢声笑语，是你最让人艳羡的温馨幸福。"
    },
    {
      "id":"22",
      "name":"恒山",
      "intro":"有人说你安静，有人说你内敛，有人说你沉稳，其实你只是专注于心中的方向，将所有精力倾注于最重要的事情上，不在意周遭的纷扰，矢志于不断前行。纳智捷 5 Sedan会是你前行路上最智慧最忠诚的旅伴。"
    },
    {
      "id":"23",
      "name":"衡山",
      "intro":"行事低调，作风严谨，工作中的你独立思考、深入研究，颇得领导赏识，同事们不仅对你相当钦佩，更是敬重有加。生活中的你亲切随和，在家庭中的角色也相当称职。你就是驾着纳智捷 5 Sedan驶过，让路人侧目的那个人。"
    },
    {
      "id":"24",
      "name":"雁荡山",
      "intro":"喜欢享受生活的你，拥有非常淡定的特质，都市的节奏并不影响你的脚步，坦然而笃定的心态，是因为你更加清楚生活的本质，最适合与纳智捷 5 Sedan一起驾驭生活的乐趣和感受！"
    },
    {
      "id":"25",
      "name":"昆仑山",
      "intro":"在人生的路上，你是充满智慧和胸怀的王者。你的领袖风范不怒自威，让旁人的尊敬油然而生。你拥有宽广的视野和辽阔的远见，运筹帷幄一切了然于胸。让纳智捷 5 Sedan成为你智慧的伙伴，不断助推你的人生进程！"
    },
    {
      "id":"26",
      "name":"峨眉山",
      "intro":"无论何时何地，你总会发出人群中最爽朗的笑声。乐观的性格和天生的好脾气，让你在工作和生活中总是充满冲劲，你是业务中的主力干将，也是家庭里的和蔼家长。你和智慧的纳智捷 5 Sedan一路相伴，满载工作和生活。"
    },
    {
      "id":"27",
      "name":"九华山",
      "intro":"天生的完美主义者，你往往会强烈地要求个人自由和能力，在你独创的思维中，不可动摇的信仰会促使你最终达成目的。纳智捷 5 Sedan一定会是你成功路上的智慧之选。"
    },
    {
      "id":"28",
      "name":"武当山",
      "intro":"热爱运动，崇尚健康自然的你爱好广泛，喜欢旅游到处走走看看。对未知领域充满好奇，并乐于探索发现新奇事物。你喜欢安排满满的行程，不让时间无聊虚度。你很适合自驾出游，让纳智捷 5 Sedan的智慧安全为你一路呵护。"
    },
    {
      "id":"29",
      "name":"玉山",
      "intro":"外表平静、缄默，而内心却专心致志于问题的核心。在工作中你苛求、精细，努力寻找各种解决方案。有时你稍显固执，因为只有具条理的分析才能使你信服。你适合驾驭纳智捷 5 Sedan来一场疯狂的旅行，给人生多一点感性！"
    },
    {
      "id":"30",
      "name":"华山",
      "intro":"你富有韧性，不怕冒险，勇往向前。工作能力强，往往是行业中出类拔萃的那一群人，常因机遇而选择白手起家，开创自己的事业。你适合驾驶纳智捷 5 Sedan在蜿蜒险峻的山路上，尽情释放你的冒险因子。"
    },
  ];

var citys=[
  {province:"请选择",city:"请选择"},
  {province:"北京",city:["东城","西城","崇文","宣武","朝阳","丰台","石景山","海淀","门头沟","房山","通州","顺义","昌平","大兴","平谷","怀柔","密云","延庆"]},
  {province:"上海",city:["黄浦","卢湾","徐汇","长宁","静安","普陀","闸北","虹口","杨浦","闵行","宝山","嘉定","浦东","金山","松江","青浦","南汇","奉贤","崇明"]},
  {province:"天津",city:["和平","东丽","河东","西青","河西","津南","南开","北辰","河北","武清","红挢","塘沽","汉沽","大港","宁河","静海","宝坻","蓟县"]},
  {province:"重庆",city:["万州","涪陵","渝中","大渡口","江北","沙坪坝","九龙坡","南岸","北碚","万盛","双挢","渝北","巴南","黔江","长寿","綦江","潼南","铜梁","大足","荣昌","壁山","梁平","城口","丰都","垫江","武隆","忠县","开县","云阳","奉节","巫山","巫溪","石柱","秀山","酉阳","彭水","江津","合川","永川","南川"]},
  {province:"河北",city:["石家庄","邯郸","邢台","保定","张家口","承德","廊坊","唐山","秦皇岛","沧州","衡水"]},
  {province:"山西",city:["太原","大同","阳泉","长治","晋城","朔州","吕梁","忻州","晋中","临汾","运城"]},
  {province:"内蒙古",city:["呼和浩特","包头","乌海","赤峰","呼伦贝尔盟","阿拉善盟","哲里木盟","兴安盟","乌兰察布盟","锡林郭勒盟","巴彦淖尔盟","伊克昭盟"]},
  {province:"辽宁",city:["沈阳","大连","鞍山","抚顺","本溪","丹东","锦州","营口","阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛"]},
  {province:"吉林",city:["长春","吉林","四平","辽源","通化","白山","松原","白城","延边"]},
  {province:"黑龙江",city:["哈尔滨","齐齐哈尔","牡丹江","佳木斯","大庆","绥化","鹤岗","鸡西","黑河","双鸭山","伊春","七台河","大兴安岭"]},
  {province:"江苏",city:["南京","镇江","苏州","南通","扬州","盐城","徐州","连云港","常州","无锡","宿迁","泰州","淮安"]},
  {province:"浙江",city:["杭州","宁波","温州","嘉兴","湖州","绍兴","金华","衢州","舟山","台州","丽水"]},
  {province:"安徽",city:["合肥","芜湖","蚌埠","马鞍山","淮北","铜陵","安庆","黄山","滁州","宿州","池州","淮南","巢湖","阜阳","六安","宣城","亳州"]},
  {province:"福建",city:["福州","厦门","莆田","三明","泉州","漳州","南平","龙岩","宁德"]},
  {province:"江西",city:["南昌市","景德镇","九江","鹰潭","萍乡","新馀","赣州","吉安","宜春","抚州","上饶"]},
  {province:"山东",city:["济南","青岛","淄博","枣庄","东营","烟台","潍坊","济宁","泰安","威海","日照","莱芜","临沂","德州","聊城","滨州","菏泽"]},
  {province:"河南",city:["郑州","开封","洛阳","平顶山","安阳","鹤壁","新乡","焦作","濮阳","许昌","漯河","三门峡","南阳","商丘","信阳","周口","驻马店","济源"]},
  {province:"湖北",city:["武汉","宜昌","荆州","襄樊","黄石","荆门","黄冈","十堰","恩施","潜江","天门","仙桃","随州","咸宁","孝感","鄂州"]},
  {province:"湖南",city:["长沙","常德","株洲","湘潭","衡阳","岳阳","邵阳","益阳","娄底","怀化","郴州","永州","湘西","张家界"]},
  {province:"广东",city:["广州","深圳","珠海","汕头","东莞","中山","佛山","韶关","江门","湛江","茂名","肇庆","惠州","梅州","汕尾","河源","阳江","清远","潮州","揭阳","云浮"]},
  {province:"广西",city:["南宁","柳州","桂林","梧州","北海","防城港","钦州","贵港","玉林","南宁地区","柳州地区","贺州","百色","河池"]},
  {province:"海南",city:["海口","三亚"]},
  {province:"四川",city:["成都","绵阳","德阳","自贡","攀枝花","广元","内江","乐山","南充","宜宾","广安","达川","雅安","眉山","甘孜","凉山","泸州"]},
  {province:"贵州",city:["贵阳","六盘水","遵义","安顺","铜仁","黔西南","毕节","黔东南","黔南"]},
  {province:"云南",city:["昆明","大理","曲靖","玉溪","昭通","楚雄","红河","文山","思茅","西双版纳","保山","德宏","丽江","怒江","迪庆","临沧"]},
  {province:"西藏",city:["拉萨","日喀则","山南","林芝","昌都","阿里","那曲"]},
  {province:"陕西",city:["西安","宝鸡","咸阳","铜川","渭南","延安","榆林","汉中","安康","商洛"]},
  {province:"甘肃",city:["兰州","嘉峪关","金昌","白银","天水","酒泉","张掖","武威","定西","陇南","平凉","庆阳","临夏","甘南"]},
  {province:"宁夏",city:["银川","石嘴山","吴忠","固原"]},
  {province:"青海",city:["西宁","海东","海南","海北","黄南","玉树","果洛","海西"]},
  {province:"新疆",city:["乌鲁木齐","石河子","克拉玛依","伊犁","巴音郭勒","昌吉","克孜勒苏柯尔克孜","博尔塔拉","吐鲁番","哈密","喀什","和田","阿克苏"]},
  {province:"香港",city:[]},
  {province:"澳门",city:[]},
  {province:"台湾",city:["台北","高雄","台中","台南","屏东","南投","云林","新竹","彰化","苗栗","嘉义","花莲","桃园","宜兰","基隆","台东","金门","马祖","澎湖"]},
  {province:"其它",city:["北美洲","南美洲","亚洲","非洲","欧洲","大洋洲"]}
];

function showShare(uid,mid,similar,sex){
  $("#hand_img1 img").attr("src","mountain/"+mid+"l.png");
  $("#hand_img2 img").attr("src","mountain/"+mid+"r.png");
  var bodyDiv=$("body");
  bodyDiv.attr("uid",uid);
  bodyDiv.attr("sex",sex);
  bodyDiv.attr("similar",similar);
  bodyDiv.attr("mid",mid);
  $("#hand_name").html(mountain[mid-1]["name"]);
  $("#hand_intro").html(mountain[mid-1]["intro"]);
  $("#hand_similar").html(similar);
  $(".p_hand .container").fadeOut(0);
  $(".hand_share").fadeIn(0);
  similar=parseInt(similar);
  changeHref("#flash_sina",mid,similar,3);
  changeHref("#flash_qq",mid,similar,4);
  changeHref("#flash_ren",mid,similar,5);
  changeHref("#share_sina",mid,similar,0);
  changeHref("#share_qq",mid,similar,1);
  changeHref("#share_ren",mid,similar,2);
  window.location.href="#hand_share";
}
function changeHref(selector,mid,similar,type){
  var $href=["http://service.weibo.com/share/share.php?title=%23%e6%99%ba%e6%85%a7%e6%8e%8c%e6%8f%a1%20Give%20Me%205%23%e4%bd%a0%e7%9a%84%e6%8e%8c%e7%ba%b9%e8%95%b4%e8%97%8f%e6%80%8e%e6%a0%b7%e7%9a%84%e6%99%ba%e6%85%a7%e7%a7%98%e5%af%86%ef%bc%9f%e6%98%af%e9%9f%a7%e5%a6%82%e5%8d%8e%e5%b1%b1%e8%bf%98%e6%98%af%e7%a8%b3%e9%87%8d%e5%a6%82%e6%b3%b0%e5%b1%b1%ef%bc%9f%e6%98%af%e4%b9%90%e8%a7%82%e7%9a%84%e7%94%9f%e6%b4%bb%e5%ae%b6%ef%bc%8c%e8%bf%98%e6%98%af%e5%b1%b1%e4%b8%ad%e7%9a%84%e5%af%bb%e9%81%93%e8%80%85%ef%bc%9f%e9%a9%ac%e4%b8%8a%e8%b7%9f%e6%88%91%e4%b8%80%e8%b5%b7%e5%8f%91%e7%8e%b0%e4%bd%a0%e7%9a%84%e5%a4%a9%e6%80%a7%e7%a7%98%e5%af%86%ef%bc%8c%e5%b0%b1%e6%9c%89%e6%9c%ba%e4%bc%9a%e8%b5%a2%e7%ba%b3%e6%99%ba%e6%8d%b75%20Sedan%e9%9d%92%e5%b2%9b%e4%b9%8b%e6%97%85%ef%bc%8c%e8%ae%a9%e6%9c%80%e6%99%ba%e6%85%a7%e7%9a%84%e8%bd%a6%e5%b8%a6%e4%bd%a0%e5%89%8d%e5%be%80%e6%9c%80%e5%b9%b8%e7%a6%8f%e7%9a%84%e5%9f%8e%e5%b8%82!&url=http://giveme5.dfyl-luxgen.com&source=bookmark&appkey=1995346682&ralateUid=&pic=http%3a%2f%2fclient.17bi.net%2fluxgen%2fimg.php%3fmid%3d%26similar%3d", "http://share.v.t.qq.com/index.php?c=share&a=index&url=http://giveme5.dfyl-luxgen.com&title=%23%e6%99%ba%e6%85%a7%e6%8e%8c%e6%8f%a1%20Give%20Me%205%23%e4%bd%a0%e7%9a%84%e6%8e%8c%e7%ba%b9%e8%95%b4%e8%97%8f%e6%80%8e%e6%a0%b7%e7%9a%84%e6%99%ba%e6%85%a7%e7%a7%98%e5%af%86%ef%bc%9f%e6%98%af%e9%9f%a7%e5%a6%82%e5%8d%8e%e5%b1%b1%e8%bf%98%e6%98%af%e7%a8%b3%e9%87%8d%e5%a6%82%e6%b3%b0%e5%b1%b1%ef%bc%9f%e6%98%af%e4%b9%90%e8%a7%82%e7%9a%84%e7%94%9f%e6%b4%bb%e5%ae%b6%ef%bc%8c%e8%bf%98%e6%98%af%e5%b1%b1%e4%b8%ad%e7%9a%84%e5%af%bb%e9%81%93%e8%80%85%ef%bc%9f%e9%a9%ac%e4%b8%8a%e8%b7%9f%e6%88%91%e4%b8%80%e8%b5%b7%e5%8f%91%e7%8e%b0%e4%bd%a0%e7%9a%84%e5%a4%a9%e6%80%a7%e7%a7%98%e5%af%86%ef%bc%8c%e5%b0%b1%e6%9c%89%e6%9c%ba%e4%bc%9a%e8%b5%a2%e7%ba%b3%e6%99%ba%e6%8d%b75%20Sedan%e9%9d%92%e5%b2%9b%e4%b9%8b%e6%97%85%ef%bc%8c%e8%ae%a9%e6%9c%80%e6%99%ba%e6%85%a7%e7%9a%84%e8%bd%a6%e5%b8%a6%e4%bd%a0%e5%89%8d%e5%be%80%e6%9c%80%e5%b9%b8%e7%a6%8f%e7%9a%84%e5%9f%8e%e5%b8%82!&appkey=801cf76d3cfc44ada52ec13114e84a96&pic=http%3a%2f%2fclient.17bi.net%2fluxgen%2fimg.php%3fmid%3d%26similar%3d","http://widget.renren.com/dialog/share?resourceUrl=http://mobile.dfyl-luxgen.com&srcUrl=http://giveme5.dfyl-luxgen.com&title=%23%e6%99%ba%e6%85%a7%e6%8e%8c%e6%8f%a1%20Give%20Me%205%23&description=%e4%bd%a0%e7%9a%84%e6%8e%8c%e7%ba%b9%e8%95%b4%e8%97%8f%e6%80%8e%e6%a0%b7%e7%9a%84%e6%99%ba%e6%85%a7%e7%a7%98%e5%af%86%ef%bc%9f%e6%98%af%e9%9f%a7%e5%a6%82%e5%8d%8e%e5%b1%b1%e8%bf%98%e6%98%af%e7%a8%b3%e9%87%8d%e5%a6%82%e6%b3%b0%e5%b1%b1%ef%bc%9f%e6%98%af%e4%b9%90%e8%a7%82%e7%9a%84%e7%94%9f%e6%b4%bb%e5%ae%b6%ef%bc%8c%e8%bf%98%e6%98%af%e5%b1%b1%e4%b8%ad%e7%9a%84%e5%af%bb%e9%81%93%e8%80%85%ef%bc%9f%e9%a9%ac%e4%b8%8a%e8%b7%9f%e6%88%91%e4%b8%80%e8%b5%b7%e5%8f%91%e7%8e%b0%e4%bd%a0%e7%9a%84%e5%a4%a9%e6%80%a7%e7%a7%98%e5%af%86%ef%bc%8c%e5%b0%b1%e6%9c%89%e6%9c%ba%e4%bc%9a%e8%b5%a2%e7%ba%b3%e6%99%ba%e6%8d%b75%20Sedan%e9%9d%92%e5%b2%9b%e4%b9%8b%e6%97%85%ef%bc%8c%e8%ae%a9%e6%9c%80%e6%99%ba%e6%85%a7%e7%9a%84%e8%bd%a6%e5%b8%a6%e4%bd%a0%e5%89%8d%e5%be%80%e6%9c%80%e5%b9%b8%e7%a6%8f%e7%9a%84%e5%9f%8e%e5%b8%82!&pic=http%3a%2f%2fclient.17bi.net%2fluxgen%2fimg.php%3fmid%3d%26similar%3d","http://service.weibo.com/share/share.php?title=%23%e6%99%ba%e6%85%a7%e6%8e%8c%e6%8f%a1%20Give%20Me%205%23%e6%8e%8c%e7%ba%b9%e5%b1%b1%e5%8a%bf%e6%98%af%e6%88%91%e6%99%ba%e6%85%a7%e7%9a%84%e7%a7%98%e5%af%86%ef%bc%8c%e5%8e%9f%e6%9d%a5%e6%88%91%e7%9a%84%e6%8e%8c%e7%ba%b9%e5%83%8f%e5%b1%b1%e8%84%89%e4%b8%80%e6%a0%b7%ef%bc%8c%e8%a2%ab%e8%b5%8b%e4%ba%88%e5%a4%a9%e6%80%a7%e6%99%ba%e6%85%a7%ef%bc%8c%e4%bd%a0%e7%9a%84%e6%8e%8c%e7%ba%b9%e5%8f%88%e8%95%b4%e8%97%8f%e6%80%8e%e6%a0%b7%e7%9a%84%e6%99%ba%e6%85%a7%e5%a4%a9%e5%9c%b0%ef%bc%9f%e9%a9%ac%e4%b8%8a%e8%b7%9f%e6%88%91%e4%b8%80%e8%b5%b7%e8%a7%a3%e5%af%86%e6%8e%8c%e7%ba%b9%e5%b1%b1%e5%8a%bf%ef%bc%8c%e5%b0%b1%e6%9c%89%e6%9c%ba%e4%bc%9a%e8%b5%a2%e7%ba%b3%e6%99%ba%e6%8d%b75%20Sedan%e9%9d%92%e5%b2%9b%e4%b9%8b%e6%97%85%ef%bc%8c%e8%ae%a9%e6%9c%80%e6%99%ba%e6%85%a7%e7%9a%84%e8%bd%a6%e5%b8%a6%e4%bd%a0%e5%89%8d%e5%be%80%e6%9c%80%e5%b9%b8%e7%a6%8f%e7%9a%84%e5%9f%8e%e5%b8%82%ef%bc%81&url=http://giveme5.dfyl-luxgen.com&source=bookmark&appkey=1995346682&ralateUid=&pic=http%3a%2f%2fclient.17bi.net%2fluxgen%2fimg.php%3fmid%3d%26similar%3d", "http://share.v.t.qq.com/index.php?c=share&a=index&url=http://giveme5.dfyl-luxgen.com&title=%23%e6%99%ba%e6%85%a7%e6%8e%8c%e6%8f%a1%20Give%20Me%205%23%e6%8e%8c%e7%ba%b9%e5%b1%b1%e5%8a%bf%e6%98%af%e6%88%91%e6%99%ba%e6%85%a7%e7%9a%84%e7%a7%98%e5%af%86%ef%bc%8c%e5%8e%9f%e6%9d%a5%e6%88%91%e7%9a%84%e6%8e%8c%e7%ba%b9%e5%83%8f%e5%b1%b1%e8%84%89%e4%b8%80%e6%a0%b7%ef%bc%8c%e8%a2%ab%e8%b5%8b%e4%ba%88%e5%a4%a9%e6%80%a7%e6%99%ba%e6%85%a7%ef%bc%8c%e4%bd%a0%e7%9a%84%e6%8e%8c%e7%ba%b9%e5%8f%88%e8%95%b4%e8%97%8f%e6%80%8e%e6%a0%b7%e7%9a%84%e6%99%ba%e6%85%a7%e5%a4%a9%e5%9c%b0%ef%bc%9f%e9%a9%ac%e4%b8%8a%e8%b7%9f%e6%88%91%e4%b8%80%e8%b5%b7%e8%a7%a3%e5%af%86%e6%8e%8c%e7%ba%b9%e5%b1%b1%e5%8a%bf%ef%bc%8c%e5%b0%b1%e6%9c%89%e6%9c%ba%e4%bc%9a%e8%b5%a2%e7%ba%b3%e6%99%ba%e6%8d%b75%20Sedan%e9%9d%92%e5%b2%9b%e4%b9%8b%e6%97%85%ef%bc%8c%e8%ae%a9%e6%9c%80%e6%99%ba%e6%85%a7%e7%9a%84%e8%bd%a6%e5%b8%a6%e4%bd%a0%e5%89%8d%e5%be%80%e6%9c%80%e5%b9%b8%e7%a6%8f%e7%9a%84%e5%9f%8e%e5%b8%82%ef%bc%81&appkey=801cf76d3cfc44ada52ec13114e84a96&pic=http%3a%2f%2fclient.17bi.net%2fluxgen%2fimg.php%3fmid%3d%26similar%3d", "http://widget.renren.com/dialog/share?resourceUrl=http://mobile.dfyl-luxgen.com&srcUrl=http://giveme5.dfyl-luxgen.com&title=%23%e6%99%ba%e6%85%a7%e6%8e%8c%e6%8f%a1%20Give%20Me%205%23&description=%e6%8e%8c%e7%ba%b9%e5%b1%b1%e5%8a%bf%e6%98%af%e6%88%91%e6%99%ba%e6%85%a7%e7%9a%84%e7%a7%98%e5%af%86%ef%bc%8c%e5%8e%9f%e6%9d%a5%e6%88%91%e7%9a%84%e6%8e%8c%e7%ba%b9%e5%83%8f%e5%b1%b1%e8%84%89%e4%b8%80%e6%a0%b7%ef%bc%8c%e8%a2%ab%e8%b5%8b%e4%ba%88%e5%a4%a9%e6%80%a7%e6%99%ba%e6%85%a7%ef%bc%8c%e4%bd%a0%e7%9a%84%e6%8e%8c%e7%ba%b9%e5%8f%88%e8%95%b4%e8%97%8f%e6%80%8e%e6%a0%b7%e7%9a%84%e6%99%ba%e6%85%a7%e5%a4%a9%e5%9c%b0%ef%bc%9f%e9%a9%ac%e4%b8%8a%e8%b7%9f%e6%88%91%e4%b8%80%e8%b5%b7%e8%a7%a3%e5%af%86%e6%8e%8c%e7%ba%b9%e5%b1%b1%e5%8a%bf%ef%bc%8c%e5%b0%b1%e6%9c%89%e6%9c%ba%e4%bc%9a%e8%b5%a2%e7%ba%b3%e6%99%ba%e6%8d%b75%20Sedan%e9%9d%92%e5%b2%9b%e4%b9%8b%e6%97%85%ef%bc%8c%e8%ae%a9%e6%9c%80%e6%99%ba%e6%85%a7%e7%9a%84%e8%bd%a6%e5%b8%a6%e4%bd%a0%e5%89%8d%e5%be%80%e6%9c%80%e5%b9%b8%e7%a6%8f%e7%9a%84%e5%9f%8e%e5%b8%82%ef%bc%81"];
  var href=$href[type],
      index=href.indexOf("&pic="),
      pic="&pic=http%3a%2f%2fclient.17bi.net%2fluxgen%2fimg.php%3fmid%3d";
  href=href.slice(0,index);
  if(type>=3){
    if(mid){
      if(similar){
        pic+=mid+"%26similar%3d"+similar;
      }else{
        pic+=mid;
      }
    }
  }
  href+=pic;
  $(selector).attr("href",href);
}
function shareTo(platform){
  var uid=$("body").attr("uid");
  var postData = '&uid='+uid+'&type=pc&platform='+ platform;
  $.ajax({
    type:"POST",
    url:"post.php?op=share",
    data: postData,
    success:function(json){
      json=$.parseJSON(json);
      if(json.status=="success"){
        //window.location.href=json.data.shareurl;
        //window.open(json.data.shareurl,"blank");
        $("#flash_"+platform).attr("href",json.data.shareurl);
        $(".share_"+platform+" a").attr("href",json.data.shareurl);
      }
    }
  });
}
function winOrderSilder(type){
  var silders=$(".win_txt"),
      length=silders.length;
      currentId=$(".win_txt.current"),
      current=parseInt(currentId.attr("id").replace("txt_",""));
  if(type==1){
    current++;
    current=current%length;
  }else{
    current--;
    if(current<0){current=current+length;}
  }
  currentId.hide().removeClass("current");
  $("#"+silders[current].id).fadeIn(0).addClass("current");
}

function pageTransition(){
  var bodyDiv=$("body");
  var $uid=bodyDiv.attr("uid"),
      $sex=bodyDiv.attr("sex"),
      $similar=bodyDiv.attr("similar"),
      $mid=bodyDiv.attr("mid");
  if($uid){bodyDiv.attr("uid",$uid);}
  if($sex){bodyDiv.attr("sex",$sex);}
  if($similar){bodyDiv.attr("similar",$similar);}
  if($mid){bodyDiv.attr("mid",$mid);}
  renderHeight();
  var hash=window.location.hash.replace("#",""),
      sub=hash.indexOf("_"),
      url=hash;
      subPanel=hash;
  if(sub>0){
    var hashArray=hash.split("_");
    hash=hashArray[0];   
  }else{
    if(hash=="hand"){
      subPanel="hand_swf";
    }else if(hash=="win"){
      subPanel="win_list";
    }
  }
  if(!hash||hash==""){hash="home";}
  if(hash=="hand"||hash=="win"){
    $(".subPanel").fadeOut(0);
    $("."+subPanel).fadeIn(0);
  }
  if(hash=="intro"){
    $(".body").css({"height":"1200px"});
    $(".panel").css({"height":"1200px"});
  }
  if(url!="win_list"&&url!="win_awards"){
    $(".panel").fadeOut(0);
    $(".p_"+hash).fadeIn(1000);
  }else{
    $(".p_win").show();
  }
  if(url=="hand_share"){
    var bodyDiv=$("body"),
        $uid=bodyDiv.attr("uid",uid),
        $sex=bodyDiv.attr("sex",sex);
        $similar=bodyDiv.attr("similar",similar);
        $mid=bodyDiv.attr("mid",mid);
    showShare($uid,$mid,$similar,$sex);
  }
  if(hash=="intro"||hash=="win"||hash=="pro"){
    $(".footer").addClass("wite");
  }else{
    $(".footer").removeClass("wite");
  }

  $(".nav_main a").removeClass("current");
  $("#nav_"+hash).addClass("current");
  $(".pagination_number a").removeClass("current");
  $("#page_"+hash).addClass("current");
  var i=getIndex(hash,pages,5,1),
      next=pages[i];
  $(".pagination_next").attr("href","#"+next);
}
function autoRefresh(){
  window.location.reload();
}
function getIndex(current,array,size,type){
  var index;
  $.each(array,function(i){
    if(current==array[i]){
        index=i;
    }
  });
  if(type==1){
    index++;
    index=index%size;
  }else{
    index--;
    if(index<0){index+=size}
  }
  return index;
}
function renderHeight(){
  var $height=parseInt(document.documentElement.clientHeight),
      $width=parseInt(document.documentElement.clientWidth);
  if($height<734){
    $height=800;
  }
  if($width<1024){
    $width=1024;
    $(".nav_main").css({"width":$width*0.60,"left":"200px"});
    $(".nav_sub").css({"width":$width*0.22, "right":"0px"});
  }
  $("body").css({"width":$width});
  $(".body").css({"height":$height, "width":$width});
  $(".panel").css({"height":$height, "width":$width});
}
$(function(){
  renderHeight();
  $(window).resize(function(){
    renderHeight();
  });
  $regTelPhone = /^1[3458]\d{9}$/; //手机号
  $blank = /^(|\s+)$/; //空格
  $("#formName").blur(function(){
   var self=$(this),
        $val=self.val();
    if(!$val||$val==""||$blank.test($val)){
      self.focus().addClass("error");
    }else{
      self.removeClass("error");
    }
  });
  $("#formMobile").blur(function(){
    var self=$(this),
        $val=self.val();
    if(!$val||$val==""||$blank.test($val)||!$regTelPhone.test($val)){
      self.focus().addClass("error");
    }else{
      self.removeClass("error");
    }
  });
  $.each(citys,function(i){
    $("#formProvince").append("<option pindex='"+i+"'>"+citys[i]["province"]+"</option>");
    $("#formCity").html("<option cindex='0'>请选择</option>");
  });
  $("#formProvince").change(function(){
      var self=$(this),
          parent=$("#formCity"),
          pvalue=self.val(),
          pindex=0;
      $.each(citys,function(i){
          if(pvalue==citys[i]["province"]){
              pindex=i;
          }
      });
      var cityArry=citys[pindex]["city"];
      parent.empty();
      $.each(cityArry,function(i){
        parent.append("<option cindex='"+i+"'>"+cityArry[i]+"</option>");
      });
  });

  $("#btn_draw").click(function(){
    var $body=$("body"),
        self=$(this),
        uid=$body.attr("uid"),
        sex=$body.attr("sex"),
        name=$("#formName").val(),
        mobile=$("#formMobile").val(),
        province=$("#formProvince").val(),
        city=$("#formCity").val();
    if(!uid||uid==""){
      alert("该用户不存在");
    }else if(!sex||sex==""){
      alert("用户性别不确定");
    }else if(!name||name==""||$blank.test(name)){
      alert("请填写姓名");
      $("#formName").addClass("error").focus();
    }else if(!mobile||mobile==""||!$regTelPhone.test(mobile)){
      alert("请填写手机号码");
      $("#formMobile").addClass("error").focus();
    }else if(!province||province==""||province=="请选择"){
      alert("请选择省份");
      $("#formProvince").addClass("error").focus();
    }else if(!city||city==""||city=="请选择"){
      alert("请选择城市");
      $("#formCity").addClass("error").focus();
    }else{
      $(".form_li input").removeClass("error");      
      $.ajax({
        type:"POST",
        url:"post.php?op=profile",
        data: {uid:uid,name:name,mobile:mobile,province:province,sex:sex,city:city},
        success:function(json){
          json=$.parseJSON(json);
          if(json.status=="success"){
            $("#formName").val("");
            $("#formMobile").val("");
            $("#formProvince").val("");
            $("#formCity").html("<option>请选择</option>");
            window.location.href="#hand_send";
            _gaq.push(['_trackPageview','/pv/profile/subminsuccess']);
          }
        }
      });
    }
  });
  $.ajax({
    type:"POST",
    url:"post.php?op=all",
    data: {},
    success:function(json){
      json=$.parseJSON(json);
      if(json.status=="success"){
        var total=json.data.total;
        total=total.split("");
        $.each(total,function(i){
          $("#text_total").append("<b class='text_img"+total[i]+"'>"+total[i]+"</b>");
        });
      }
    }
  });
  window.onhashchange=function(){
    pageTransition();
  }
  window.onload=function(){
    pageTransition();
  }
});