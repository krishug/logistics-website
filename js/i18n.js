/* ============================================
   i18n — Chinese/English translation system
   ============================================ */
;(function () {
  'use strict';

  var translations = {
    zh: {
      /* header */
      'nav.about': '关于我们',
      'nav.shanghai': '上海优势',
      'nav.services': '业务范围',
      'nav.gallery': '上海掠影',
      'nav.order': '在线下单',
      'nav.locations': '联系我们',
      'header.login': '物流管理系统',
      'header.lang': '中',

      /* hero */
      'hero.badge': '总部 · 中国上海',
      'hero.title': '立足上海<br><span class="highlight">链接全国</span>',
      'hero.desc': '依托上海国际航运枢纽，提供覆盖全国的货运配送、仓储管理与中转服务。从洋山港到陆路枢纽，让每一件货物高效流转。',
      'hero.btn_order': '立即下单',
      'hero.btn_about': '了解更多',
      'hero.stat1': '8000+',
      'hero.stat1_label': '服务客户',
      'hero.stat2': '80+',
      'hero.stat2_label': '覆盖城市',
      'hero.stat3': '15年',
      'hero.stat3_label': '行业经验',
      'hero.card_title': '核心运输线路',
      'hero.node1_title': '上海总仓 · 收货入仓',
      'hero.node1_desc': '外高桥、青浦、松江三大收货点核验入仓',
      'hero.node2_title': '仓储分拣 · 打单装车',
      'hero.node2_desc': '标准化仓储，条码管理，定时装车发运',
      'hero.node3_title': '干线运输 · 全国网络',
      'hero.node3_desc': '华东 / 华南 / 华中 / 华北 定时班车',
      'hero.node4_title': '到达派送 · 门到门',
      'hero.node4_desc': '到仓核验、客户提货或末端配送',

      /* about */
      'about.label': '关于我们',
      'about.title': '上海出发，服务全国',
      'about.desc': '以中国最大的经济中心上海为基地，构建辐射全国的物流服务网络。',
      'about.caption_title': '上海洋山深水港',
      'about.caption_desc': '全球最繁忙的集装箱港口之一',
      'about.p1': '速达物流成立于2010年，总部位于上海，依托洋山深水港、外高桥港区及浦东国际枢纽的区位优势，长期专注国内公路运输、仓储管理与中转配送。',
      'about.p2': '我们以稳定线路、清晰交接、及时反馈为基础，把客户下单、收货入仓、扫码装车、干线运输、到达提货等环节串联起来，为电商、制造、商贸等各类企业提供更高效、更透明的现代化物流服务。',
      'about.p3': '上海作为中国乃至全球最重要的物流枢纽之一，拥有世界级港口和机场，完善的公路与铁路网络，为我们的业务提供了得天独厚的基础。',
      'about.tag': '📍 总部：上海市浦东新区',

      /* shanghai advantage */
      'shanghai.label': '上海优势',
      'shanghai.title': '国际枢纽 · 通达全国',
      'shanghai.desc': '上海作为全球顶级物流枢纽，为货物运输提供无与伦比的区位优势。',
      'shanghai.card1_stat': '全球第一',
      'shanghai.card1_title': '洋山深水港',
      'shanghai.card1_desc': '连续多年位居全球集装箱吞吐量第一，连接全球200多个国家和地区的600多个港口，为进出口货物提供便捷的海运通道。',
      'shanghai.card2_stat': '辐射全国',
      'shanghai.card2_title': '陆路运输枢纽',
      'shanghai.card2_desc': '上海地处长三角核心，G2/G15/G40/G50等多条国家级高速公路在此交汇，4小时内可达长三角主要城市，24小时覆盖华东全境。',
      'shanghai.card3_stat': '百万平米',
      'shanghai.card3_title': '现代化仓储集群',
      'shanghai.card3_desc': '外高桥保税区、青浦物流园区、松江工业区等大型仓储集群环绕上海，配备标准化仓库与智能管理系统，满足各类货物存储需求。',

      /* services */
      'services.label': '业务范围',
      'services.title': '全链条物流服务',
      'services.desc': '从上海出发，覆盖收货、仓储、运输、配送全流程。',
      'services.card1_title': '货物收运',
      'services.card1_desc': '上海三大收货点（外高桥 / 青浦 / 松江）核验入仓，生成唯一追踪单号，全程可查。',
      'services.card2_title': '仓储管理',
      'services.card2_desc': '标准化仓储作业，条码扫描管理、分拣复核、货物安全存放，库存信息实时更新。',
      'services.card3_title': '干线运输',
      'services.card3_desc': '定时班车发往华东、华南、华中、华北，GPS全程追踪，节点状态实时可查。',
      'services.card4_title': '配送提货',
      'services.card4_desc': '货物到达目的仓后核验入库，支持客户自提及末端配送上门，签收反馈。',

      /* gallery */
      'gallery.label': '上海掠影',
      'gallery.title': '一座为物流而生的城市',
      'gallery.desc': '从百年外滩到世界级枢纽，上海见证了中国物流的腾飞。',
      'gallery.item1_title': '外滩 · 百年金融脉搏',
      'gallery.item1_desc': '黄浦江两岸见证上海商业的繁荣与变迁',
      'gallery.item2_title': '陆家嘴 · 金融中心',
      'gallery.item2_desc': '中国经济的引擎与全球贸易的窗口',
      'gallery.item3_title': '石库门 · 城市记忆',
      'gallery.item3_desc': '传统与现代交融的上海韵味',
      'gallery.item4_title': '上海港 · 全球枢纽',
      'gallery.item4_desc': '世界最繁忙港口，链接中国与全球贸易',

      /* workflow */
      'workflow.label': '服务流程',
      'workflow.title': '标准化作业流程',
      'workflow.desc': '从下单到签收，每一步都可追溯，让您随时掌握货物动态。',
      'workflow.step1_title': '客户下单',
      'workflow.step1_desc': '在线填写货物信息<br>提交后生成运单号',
      'workflow.step2_title': '上海入仓',
      'workflow.step2_desc': '外高桥/青浦/松江<br>核验数量与品名',
      'workflow.step3_title': '扫码装车',
      'workflow.step3_desc': '条码扫描确认<br>定时班车发运',
      'workflow.step4_title': '运输中转',
      'workflow.step4_desc': '全国干线运输<br>节点扫码更新状态',
      'workflow.step5_title': '到达提货',
      'workflow.step5_desc': '到仓核验通知<br>客户提货或配送上门',

      /* order */
      'order.label': '在线下单',
      'order.title': '快速提交运单',
      'order.desc': '填写货物信息提交后，上海仓库人员将联系您确认收货与入仓安排。',
      'order.intro_title': '上海发往全国，简单三步',
      'order.intro_p1': '在线填写以下货物信息，提交后将生成待处理运单。我们的客服人员会在工作时间尽快与您联系，确认收货时间与入仓细节。',
      'order.intro_p2': '货物可送至上海三大收货点：外高桥保税区、青浦物流园、松江工业区。长期合作客户建议登录物流管理系统下单，享受更快捷的服务。',
      'order.note': '📌 温馨提示：提交后请保存运单号。运费、车辆和最终提货安排以上海仓库确认结果为准。',
      'order.form.customerName': '客户姓名 *',
      'order.form.phone': '联系电话 *',
      'order.form.cargoNo': '货号',
      'order.form.cargoName': '货物名称 *',
      'order.form.quantity': '件数 *',
      'order.form.weight': '重量 (kg)',
      'order.form.dimensions': '体积 (cm) 长×宽×高',
      'order.form.freight': '合计运费 (元)',
      'order.form.remarks': '备注',
      'order.ph.customerName': '请输入姓名',
      'order.ph.phone': '手机号码',
      'order.ph.cargoNo': '日期-货号-件数',
      'order.ph.cargoName': '如：服装、配件、电子',
      'order.ph.weight': '约多少公斤',
      'order.ph.dimensions': '例如 60×40×50',
      'order.ph.freight': '0.00',
      'order.ph.remarks': '可填写发货要求、包装说明或上海收货点选择',
      'order.btn': '提交下单',
      'order.success': '下单成功！您的运单号为：<strong>{no}</strong>，请保存此号码以便查询。',
      'order.err.name': '请输入客户姓名',
      'order.err.phone': '请输入联系电话',
      'order.err.cargo': '请输入货物名称',
      'order.err.qty': '请输入正确的件数',

      /* locations */
      'locations.label': '联系我们',
      'locations.title': '上海收货网点',
      'locations.desc': '三大收货点覆盖上海主要物流枢纽，欢迎来电咨询。',
      'locations.card1_title': '外高桥保税区 · 收货中心',
      'locations.card1_sub': '🕐 营业时间：7:30 - 19:30',
      'locations.card1_desc': '上海市浦东新区外高桥保税区 富特西一路 物流中心 A区<br>临近外高桥港区，集装箱货物直达入仓',
      'locations.card2_title': '青浦物流园区 · 仓储中心',
      'locations.card2_sub': '🕐 营业时间：8:00 - 18:00',
      'locations.card2_desc': '上海市青浦区华新镇 物流园区 2号库<br>G15/G50高速出口，长三角货物集散核心',
      'locations.card3_title': '松江工业区 · 配送中心',
      'locations.card3_sub': '🕐 营业时间：8:00 - 18:00',
      'locations.card3_desc': '上海市松江区新桥镇 工业区 东区 3F<br>G60科创走廊节点，覆盖上海西南制造产业带',
      'locations.map_amap': '📍 高德地图',
      'locations.map_baidu': '📍 百度地图',

      /* footer */
      'footer.brand_title': '速达物流',
      'footer.brand_desc': '总部位于上海，依托国际枢纽优势，专注全国货运配送、仓储管理与中转服务，以标准化流程和数字化追踪，为客户提供高效、透明的现代物流体验。',
      'footer.nav_title': '快速导航',
      'footer.contact_title': '联系方式',
      'footer.copyright': '© 2026 速达物流 · 上海总部 All Rights Reserved.',

      /* login page */
      'login.tagline': '统一登录注册入口，系统会根据账号身份自动进入管理员端、仓库端、财务端或用户端页面。',
      'login.step1': '登录',
      'login.step2': '身份识别',
      'login.step3': '进入工作台',
      'login.badge': '统一入口',
      'login.title': '登录注册',
      'login.tab_login': '登录',
      'login.tab_register': '注册',
      'login.username': '账号',
      'login.password': '密码',
      'login.btn_login': '登录',
      'login.ph_username': '请输入账号',
      'login.ph_password': '请输入密码',
      'login.realName': '姓名',
      'login.ph_realName': '请输入真实姓名',
      'login.ph_reg_username': '设置登录账号',
      'login.ph_reg_password': '设置登录密码',
      'login.btn_register': '注册普通用户',
      'login.back': '← 返回官网首页',

      /* meta */
      'meta.title': '速达物流 | 上海 — 全国货运配送 · 仓储中转服务',
      'meta.title_login': '速达物流管理系统 | 登录注册',
      'meta.desc': '速达物流总部位于上海，依托洋山深水港与浦东国际枢纽，专注全国货运配送、仓储运输与中转服务。',
    },

    en: {
      /* header */
      'nav.about': 'About Us',
      'nav.shanghai': 'Shanghai Edge',
      'nav.services': 'Services',
      'nav.gallery': 'Shanghai Gallery',
      'nav.order': 'Place Order',
      'nav.locations': 'Contact Us',
      'header.login': 'Logistics System',
      'header.lang': 'EN',

      /* hero */
      'hero.badge': 'Headquarters · Shanghai, China',
      'hero.title': 'Based in Shanghai<br><span class="highlight">Connecting Nationwide</span>',
      'hero.desc': 'Leveraging Shanghai\'s international shipping hub, we provide nationwide freight distribution, warehousing, and transshipment services. From Yangshan Port to land routes — moving every shipment efficiently.',
      'hero.btn_order': 'Order Now',
      'hero.btn_about': 'Learn More',
      'hero.stat1': '8,000+',
      'hero.stat1_label': 'Clients Served',
      'hero.stat2': '80+',
      'hero.stat2_label': 'Cities Covered',
      'hero.stat3': '15 Years',
      'hero.stat3_label': 'Industry Experience',
      'hero.card_title': 'Core Transport Routes',
      'hero.node1_title': 'Shanghai Warehouse · Intake',
      'hero.node1_desc': 'Receive & verify at Waigaoqiao, Qingpu, Songjiang',
      'hero.node2_title': 'Sorting · Labeling · Loading',
      'hero.node2_desc': 'Standardized storage, barcode management, scheduled dispatch',
      'hero.node3_title': 'Line Haul · National Network',
      'hero.node3_desc': 'East / South / Central / North China scheduled trucks',
      'hero.node4_title': 'Last-Mile Delivery',
      'hero.node4_desc': 'Warehouse check, customer pickup or door delivery',

      /* about */
      'about.label': 'About Us',
      'about.title': 'Starting from Shanghai, Serving the Nation',
      'about.desc': 'Based in China\'s largest economic center, we build a logistics network that reaches every corner of the country.',
      'about.caption_title': 'Yangshan Deep-Water Port',
      'about.caption_desc': 'One of the busiest container ports in the world',
      'about.p1': 'Founded in 2010 and headquartered in Shanghai, Suda Logistics leverages the strategic advantages of Yangshan Port, Waigaoqiao Port, and Pudong International Hub, specializing in domestic road transport, warehousing, and distribution.',
      'about.p2': 'Built on stable routes, clear handoffs, and timely feedback, we connect every link — from order placement and intake to scanning, line haul, and delivery — providing e-commerce, manufacturing, and trading companies with efficient, transparent modern logistics.',
      'about.p3': 'As one of the world\'s most important logistics hubs, Shanghai\'s world-class port and airport, along with its extensive road and rail network, provide an unparalleled foundation for our business.',
      'about.tag': '📍 HQ: Pudong, Shanghai',

      /* shanghai advantage */
      'shanghai.label': 'Shanghai Edge',
      'shanghai.title': 'Global Hub · Nationwide Reach',
      'shanghai.desc': 'As a world-class logistics hub, Shanghai offers unparalleled advantages for freight movement.',
      'shanghai.card1_stat': 'World #1',
      'shanghai.card1_title': 'Yangshan Port',
      'shanghai.card1_desc': 'For years ranked first globally in container throughput, connecting over 600 ports across 200+ countries and regions, providing convenient sea routes for import and export goods.',
      'shanghai.card2_stat': 'Nationwide Reach',
      'shanghai.card2_title': 'Road Transport Hub',
      'shanghai.card2_desc': 'Located at the heart of the Yangtze River Delta, Shanghai is where G2/G15/G40/G50 highways converge — within 4 hours to key delta cities, 24 hours to all of East China.',
      'shanghai.card3_stat': 'Million sqm',
      'shanghai.card3_title': 'Modern Warehousing Cluster',
      'shanghai.card3_desc': 'Waigaoqiao FTZ, Qingpu Logistics Park, Songjiang Industrial Zone — large warehousing clusters equipped with standardized facilities and smart management systems.',

      /* services */
      'services.label': 'Services',
      'services.title': 'Full-Chain Logistics',
      'services.desc': 'From Shanghai — covering intake, warehousing, transport, and delivery end-to-end.',
      'services.card1_title': 'Freight Intake',
      'services.card1_desc': 'Three Shanghai intake points (Waigaoqiao / Qingpu / Songjiang) with verification and unique tracking number generation.',
      'services.card2_title': 'Warehousing',
      'services.card2_desc': 'Standardized operations, barcode scanning, sortation checks, secure storage with real-time inventory updates.',
      'services.card3_title': 'Line Haul',
      'services.card3_desc': 'Scheduled trucks to East, South, Central, and North China with GPS tracking and real-time status updates.',
      'services.card4_title': 'Delivery & Pickup',
      'services.card4_desc': 'Warehouse verification upon arrival, supporting customer pickup and last-mile delivery with sign-off feedback.',

      /* gallery */
      'gallery.label': 'Shanghai Gallery',
      'gallery.title': 'A City Built for Logistics',
      'gallery.desc': 'From the historic Bund to world-class hubs, Shanghai has witnessed the rise of China\'s logistics industry.',
      'gallery.item1_title': 'The Bund · Financial Pulse',
      'gallery.item1_desc': 'The Bund has witnessed Shanghai\'s commercial prosperity and transformation through the ages',
      'gallery.item2_title': 'Lujiazui · Financial Center',
      'gallery.item2_desc': 'Engine of China\'s economy and window to global trade',
      'gallery.item3_title': 'Shikumen · City Memory',
      'gallery.item3_desc': 'Shanghai\'s charm where tradition meets modernity',
      'gallery.item4_title': 'Port of Shanghai · Global Hub',
      'gallery.item4_desc': 'World\'s busiest port, linking China to global trade',

      /* workflow */
      'workflow.label': 'How It Works',
      'workflow.title': 'Standardized Process',
      'workflow.desc': 'From order to sign-off, every step is traceable — stay informed of your cargo status.',
      'workflow.step1_title': 'Place Order',
      'workflow.step1_desc': 'Fill cargo info online<br>Get tracking number',
      'workflow.step2_title': 'Warehouse Intake',
      'workflow.step2_desc': 'Waigaoqiao/Qingpu/Songjiang<br>Verify quantity & type',
      'workflow.step3_title': 'Scan & Load',
      'workflow.step3_desc': 'Barcode scan confirmation<br>Scheduled truck departure',
      'workflow.step4_title': 'Transit',
      'workflow.step4_desc': 'Nationwide line haul<br>Scan updates at each node',
      'workflow.step5_title': 'Pickup & Delivery',
      'workflow.step5_desc': 'Warehouse arrival notice<br>Customer pickup or delivery',

      /* order */
      'order.label': 'Place Order',
      'order.title': 'Submit Your Shipment',
      'order.desc': 'Fill in the cargo details and submit — our Shanghai team will contact you to confirm intake arrangements.',
      'order.intro_title': 'From Shanghai to the Nation, Simple Steps',
      'order.intro_p1': 'Fill in the cargo information below. After submission, a pending waybill will be generated. Our customer service will contact you during business hours to confirm the intake time and details.',
      'order.intro_p2': 'Cargo can be delivered to three Shanghai intake points: Waigaoqiao FTZ, Qingpu Logistics Park, or Songjiang Industrial Zone. Regular clients may log into the management system for faster service.',
      'order.note': '📌 Please save your waybill number after submission. Freight, vehicle, and final delivery arrangements are subject to Shanghai warehouse confirmation.',
      'order.form.customerName': 'Customer Name *',
      'order.form.phone': 'Phone *',
      'order.form.cargoNo': 'Cargo No.',
      'order.form.cargoName': 'Cargo Name *',
      'order.form.quantity': 'Quantity *',
      'order.form.weight': 'Weight (kg)',
      'order.form.dimensions': 'Size (cm) L×W×H',
      'order.form.freight': 'Freight (CNY)',
      'order.form.remarks': 'Remarks',
      'order.ph.customerName': 'Enter your name',
      'order.ph.phone': 'Mobile number',
      'order.ph.cargoNo': 'Date-cargo-qty',
      'order.ph.cargoName': 'e.g. Clothing, parts, electronics',
      'order.ph.weight': 'Approx. weight in kg',
      'order.ph.dimensions': 'e.g. 60×40×50',
      'order.ph.freight': '0.00',
      'order.ph.remarks': 'Shipping requirements, packaging instructions, or preferred Shanghai drop-off point',
      'order.btn': 'Submit Order',
      'order.success': 'Order placed! Your waybill: <strong>{no}</strong> — please save it for tracking.',
      'order.err.name': 'Please enter customer name',
      'order.err.phone': 'Please enter phone number',
      'order.err.cargo': 'Please enter cargo name',
      'order.err.qty': 'Please enter a valid quantity',

      /* locations */
      'locations.label': 'Contact Us',
      'locations.title': 'Shanghai Drop-off Points',
      'locations.desc': 'Three intake points covering Shanghai\'s main logistics hubs. Call us for inquiries.',
      'locations.card1_title': 'Waigaoqiao FTZ · Intake Center',
      'locations.card1_sub': '🕐 Hours: 7:30 – 19:30',
      'locations.card1_desc': 'Zone A, Logistics Center, Fute West 1st Rd, Waigaoqiao FTZ, Pudong, Shanghai<br>Adjacent to Waigaoqiao Port — container cargo direct intake',
      'locations.card2_title': 'Qingpu Logistics Park · Warehouse Center',
      'locations.card2_sub': '🕐 Hours: 8:00 – 18:00',
      'locations.card2_desc': 'Warehouse 2, Logistics Park, Huaxin Town, Qingpu, Shanghai<br>G15/G50 Expressway exits — Yangtze Delta cargo hub',
      'locations.card3_title': 'Songjiang Industrial Zone · Distribution Center',
      'locations.card3_sub': '🕐 Hours: 8:00 – 18:00',
      'locations.card3_desc': 'Building 3F, East Zone, Industrial Park, Xinqiao Town, Songjiang, Shanghai<br>G60 Innovation Corridor node — covering SW Shanghai manufacturing belt',
      'locations.map_amap': '📍 Amap',
      'locations.map_baidu': '📍 Baidu Maps',

      /* footer */
      'footer.brand_title': 'Suda Logistics',
      'footer.brand_desc': 'Headquartered in Shanghai, leveraging international hub advantages, focusing on nationwide freight distribution, warehousing, and transshipment services — delivering efficient, transparent modern logistics through standardized processes and digital tracking.',
      'footer.nav_title': 'Quick Links',
      'footer.contact_title': 'Contact',
      'footer.copyright': '© 2026 Suda Logistics · Shanghai HQ All Rights Reserved.',

      /* login page */
      'login.tagline': 'Unified login for all roles — enter the admin, warehouse, finance, or user dashboard automatically.',
      'login.step1': 'Login',
      'login.step2': 'Identity Check',
      'login.step3': 'Enter Dashboard',
      'login.badge': 'Unified Portal',
      'login.title': 'Login / Register',
      'login.tab_login': 'Login',
      'login.tab_register': 'Register',
      'login.username': 'Username',
      'login.password': 'Password',
      'login.btn_login': 'Login',
      'login.ph_username': 'Enter username',
      'login.ph_password': 'Enter password',
      'login.realName': 'Full Name',
      'login.ph_realName': 'Enter your full name',
      'login.ph_reg_username': 'Set a username',
      'login.ph_reg_password': 'Set a password',
      'login.btn_register': 'Register',
      'login.back': '← Back to homepage',

      /* meta */
      'meta.title': 'Suda Logistics | Shanghai — Nationwide Freight · Warehousing',
      'meta.title_login': 'Suda Logistics System | Login',
      'meta.desc': 'Suda Logistics, headquartered in Shanghai near Yangshan Port and Pudong Hub, provides nationwide freight, warehousing, and transshipment services.',
    }
  };

  /* ---- helpers ---- */
  function get(key, lang) {
    return translations[lang] && translations[lang][key];
  }

  function format(str, data) {
    return str.replace(/\{(\w+)\}/g, function (m, k) { return data[k] !== undefined ? data[k] : m; });
  }

  /* ---- core ---- */
  var currentLang = localStorage.getItem('suda_lang') || 'zh';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('suda_lang', lang);

    // Update html lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Update lang switch buttons
    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      var bLang = btn.getAttribute('data-lang');
      btn.classList.toggle('active', bLang === lang);
      if (bLang === 'zh') {
        btn.setAttribute('aria-label', lang === 'zh' ? '当前语言：中文' : 'Switch to Chinese');
      } else {
        btn.setAttribute('aria-label', lang === 'en' ? 'Current: English' : '切换到英文');
      }
    });

    // Translate data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var text = get(key, lang);
      if (text !== undefined) {
        el.innerHTML = text;
      }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var text = get(key, lang);
      if (text !== undefined) {
        el.placeholder = text;
      }
    });

    // Update page title & meta description
    var isLoginPage = document.body.classList.contains('login-page');
    var titleKey = isLoginPage ? 'meta.title_login' : 'meta.title';
    var titleText = get(titleKey, lang);
    if (titleText) document.title = titleText;

    var metaDesc = document.querySelector('meta[name="description"]');
    var descText = get('meta.desc', lang);
    if (metaDesc && descText) metaDesc.setAttribute('content', descText);
  }

  /* ---- init ---- */
  function init() {
    // Apply saved/initial language
    applyLanguage(currentLang);

    // Bind toggle buttons
    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        if (lang && lang !== currentLang) {
          applyLanguage(lang);
        }
      });
    });
  }

  // Expose publicly
  window.i18n = {
    init: init,
    apply: applyLanguage,
    get: get,
    current: function () { return currentLang; },
    t: function (key) { return get(key, currentLang); },
    format: format
  };

})();
