const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat("en-US");

const salesInput = document.querySelector("#salesInput");
const expenseInput = document.querySelector("#expenseInput");
const ordersInput = document.querySelector("#ordersInput");

const salesOutput = document.querySelector("#salesOutput");
const expenseOutput = document.querySelector("#expenseOutput");
const ordersOutput = document.querySelector("#ordersOutput");

const revenueResult = document.querySelector("#revenueResult");
const profitResult = document.querySelector("#profitResult");
const averageResult = document.querySelector("#averageResult");
const marginResult = document.querySelector("#marginResult");
const languageButtons = document.querySelectorAll(".language-button");

const translations = {
  en: {
    pageTitle: "IMJ Digital Studio | Websites, Stores & Excel Automation",
    brandTagline: "Web design, stores & automation",
    navServices: "Services",
    navDemo: "Live Demo",
    navWork: "Work",
    navContact: "Contact",
    startProject: "Start a Project",
    heroEyebrow: "Digital presence and business automation",
    heroTitle: "Premium websites, online stores, and smart Excel systems for businesses ready to grow.",
    heroText:
      "IMJ Digital Studio designs clean, credible digital experiences that help your business look established, win trust faster, and replace slow manual work with automated systems.",
    heroPrimary: "Get a Free Quote",
    heroSecondary: "View Live Demos",
    statOneTitle: "Built for trust",
    statOneText: "Modern design that makes your business look established",
    statTwoTitle: "Made to sell",
    statTwoText: "Clear pages, strong calls to action, and simple customer journeys",
    statThreeTitle: "Automated to save time",
    statThreeText: "Track sales, expenses, stock, and performance with less manual work",
    dashboardTitle: "Executive business tracker",
    metricOrders: "Orders",
    metricExpenses: "Expenses",
    metricProfit: "Profit",
    servicesEyebrow: "What we create",
    servicesTitle: "Professional tools that make your business easier to trust, buy from, and manage",
    serviceOneTitle: "Business Websites",
    serviceOneText: "Elegant, mobile-ready websites that present your brand clearly and guide visitors toward action.",
    serviceOnePointOne: "Landing pages and full websites",
    serviceOnePointTwo: "Responsive design for phones and desktop",
    serviceOnePointThree: "Professional copy and conversion-focused structure",
    serviceTwoTitle: "E-commerce Stores",
    serviceTwoText: "Beautiful product experiences designed to make your offers easy to explore, understand, and purchase.",
    serviceTwoPointOne: "Product grids and product pages",
    serviceTwoPointTwo: "Shop-ready page structure",
    serviceTwoPointThree: "Promotions and featured collections",
    serviceThreeTitle: "Excel Automation",
    serviceThreeText: "Smart spreadsheets that calculate, organize, and report important business numbers automatically.",
    serviceThreePointOne: "Live formulas and dashboards",
    serviceThreePointTwo: "Monthly reporting templates",
    serviceThreePointThree: "Less manual typing and fewer errors",
    demoEyebrow: "Live business demo",
    demoTitle: "Preview a custom tracker we can build for your business",
    demoText:
      "Move the controls below to see how a custom Excel system can turn everyday sales data into instant business insight. When a client needs it, we can build a tracker like this for sales, expenses, stock, invoices, attendance, or reports.",
    inputSales: "Monthly sales",
    inputExpenses: "Monthly expenses",
    inputOrders: "Number of orders",
    sheetTitle: "IMJ Automation Demo",
    sheetStatus: "Live calculations",
    sheetMetric: "Metric",
    sheetFormula: "Formula",
    sheetResult: "Result",
    sheetRevenue: "Revenue",
    sheetSalesInput: "Sales input",
    sheetProfit: "Profit",
    sheetProfitFormula: "Sales - Expenses",
    sheetAverage: "Average order",
    sheetAverageFormula: "Sales / Orders",
    sheetMargin: "Profit margin",
    sheetMarginFormula: "Profit / Sales",
    demoCtaText: "Want a tracker like this for your business?",
    demoCtaButton: "Request a Custom Tracker",
    portfolioEyebrow: "Design directions",
    portfolioTitle: "Polished layouts for the kind of business you want customers to remember",
    portfolioOneTitle: "Restaurant or Cafe Website",
    portfolioOneText: "Premium menus, location details, booking prompts, and direct messaging for local customers.",
    portfolioTwoTitle: "Online Store Experience",
    portfolioTwoText: "Product collections, featured offers, shop categories, and pages designed to support confident buying.",
    portfolioThreeTitle: "Service Business Website",
    portfolioThreeText: "Sharp positioning, service packages, trust-building sections, and simple lead capture.",
    processEyebrow: "How we work",
    processTitle: "A clear process from first idea to professional launch",
    processOneTitle: "Define the goal",
    processOneText: "We clarify what you sell, who you serve, and what your website or system needs to accomplish.",
    processTwoTitle: "Design the experience",
    processTwoText: "We shape the structure, message, and visual direction before building the final result.",
    processThreeTitle: "Launch with confidence",
    processThreeText: "We deliver a polished result, check it across screens, and keep future improvements easy to plan.",
    contactEyebrow: "Start your project",
    contactTitle: "Let us build the digital system your business deserves",
    contactText:
      "Send a short message and we will help you choose the strongest next step: a professional website, an online store, or an automated Excel system.",
    whatsappButton: "Chat on WhatsApp",
    instagramButton: "DM us on Instagram",
    formName: "Name",
    formNamePlaceholder: "Your name",
    formBusiness: "Business Name",
    formBusinessPlaceholder: "Your business name",
    formService: "What service do you need?",
    formChoose: "Choose one service",
    formWebsite: "Business website",
    formStore: "E-commerce store",
    formExcel: "Automated Excel system",
    formNotSure: "Not sure yet",
    formMessage: "Message",
    formMessagePlaceholder: "Tell us what you want to improve or build",
    formSubmit: "Send Request",
    footerText: "Premium websites, online stores, and Excel automation for ambitious businesses.",
  },
  pt: {
    pageTitle: "IMJ Digital Studio | Sites, Lojas Online e Automação Excel",
    brandTagline: "Web design, lojas e automação",
    navServices: "Serviços",
    navDemo: "Demo ao Vivo",
    navWork: "Trabalhos",
    navContact: "Contacto",
    startProject: "Iniciar Projecto",
    heroEyebrow: "Presença digital e automação empresarial",
    heroTitle: "Sites premium, lojas online e sistemas Excel inteligentes para empresas prontas para crescer.",
    heroText:
      "A IMJ Digital Studio cria experiências digitais limpas e credíveis que ajudam a sua empresa a parecer mais profissional, ganhar confiança mais rápido e substituir trabalho manual por sistemas automatizados.",
    heroPrimary: "Pedir Orçamento",
    heroSecondary: "Ver Demos",
    statOneTitle: "Criado para gerar confiança",
    statOneText: "Design moderno que faz a sua empresa parecer mais estabelecida",
    statTwoTitle: "Feito para vender",
    statTwoText: "Páginas claras, chamadas para ação fortes e jornadas simples para o cliente",
    statThreeTitle: "Automatizado para poupar tempo",
    statThreeText: "Controle vendas, despesas, stock e desempenho com menos trabalho manual",
    dashboardTitle: "Painel executivo do negócio",
    metricOrders: "Pedidos",
    metricExpenses: "Despesas",
    metricProfit: "Lucro",
    servicesEyebrow: "O que criamos",
    servicesTitle: "Ferramentas profissionais que tornam o seu negócio mais confiável, vendável e fácil de gerir",
    serviceOneTitle: "Sites Empresariais",
    serviceOneText: "Sites elegantes e adaptados ao telemóvel que apresentam a sua marca com clareza e guiam visitantes para a ação.",
    serviceOnePointOne: "Landing pages e sites completos",
    serviceOnePointTwo: "Design responsivo para telemóvel e computador",
    serviceOnePointThree: "Texto profissional e estrutura focada em conversão",
    serviceTwoTitle: "Lojas Online",
    serviceTwoText: "Experiências de produto bonitas, criadas para tornar as suas ofertas fáceis de explorar, entender e comprar.",
    serviceTwoPointOne: "Grelhas de produtos e paginas de produto",
    serviceTwoPointTwo: "Estrutura pronta para loja online",
    serviceTwoPointThree: "Promoções e coleções em destaque",
    serviceThreeTitle: "Automação em Excel",
    serviceThreeText: "Planilhas inteligentes que calculam, organizam e mostram números importantes do negócio automaticamente.",
    serviceThreePointOne: "Formulas ao vivo e dashboards",
    serviceThreePointTwo: "Modelos de relatório mensal",
    serviceThreePointThree: "Menos digitação manual e menos erros",
    demoEyebrow: "Demo empresarial ao vivo",
    demoTitle: "Veja um rastreador personalizado que podemos criar para o seu negocio",
    demoText:
      "Mova os controlos abaixo para ver como um sistema Excel personalizado transforma dados de vendas em informação instantânea. Quando o cliente precisa, podemos criar um rastreador como este para vendas, despesas, stock, facturas, presenças ou relatórios.",
    inputSales: "Vendas mensais",
    inputExpenses: "Despesas mensais",
    inputOrders: "Número de pedidos",
    sheetTitle: "Demo de Automação IMJ",
    sheetStatus: "Cálculos ao vivo",
    sheetMetric: "Métrica",
    sheetFormula: "Formula",
    sheetResult: "Resultado",
    sheetRevenue: "Receita",
    sheetSalesInput: "Valor das vendas",
    sheetProfit: "Lucro",
    sheetProfitFormula: "Vendas - Despesas",
    sheetAverage: "Media por pedido",
    sheetAverageFormula: "Vendas / Pedidos",
    sheetMargin: "Margem de lucro",
    sheetMarginFormula: "Lucro / Vendas",
    demoCtaText: "Quer um rastreador como este para o seu negocio?",
    demoCtaButton: "Pedir Rastreador Personalizado",
    portfolioEyebrow: "Direções de design",
    portfolioTitle: "Layouts profissionais para o tipo de negócio que os clientes lembram",
    portfolioOneTitle: "Site para Restaurante ou Cafe",
    portfolioOneText: "Menus premium, localização, reservas e mensagens directas para clientes locais.",
    portfolioTwoTitle: "Experiencia de Loja Online",
    portfolioTwoText: "Coleções de produtos, ofertas em destaque, categorias e páginas criadas para compras com confiança.",
    portfolioThreeTitle: "Site para Empresa de Servicos",
    portfolioThreeText: "Posicionamento claro, pacotes de serviços, secções de confiança e captação simples de contactos.",
    processEyebrow: "Como trabalhamos",
    processTitle: "Um processo claro da primeira ideia ao lançamento profissional",
    processOneTitle: "Definir o objetivo",
    processOneText: "Clarificamos o que vende, quem atende e o que o site ou sistema precisa realizar.",
    processTwoTitle: "Desenhar a experiência",
    processTwoText: "Criamos a estrutura, a mensagem e a direção visual antes de construir o resultado final.",
    processThreeTitle: "Lançar com confiança",
    processThreeText: "Entregamos um resultado polido, testamos em diferentes ecrãs e deixamos melhorias futuras claras.",
    contactEyebrow: "Inicie o seu projecto",
    contactTitle: "Vamos criar o sistema digital que o seu negócio merece",
    contactText:
      "Envie uma mensagem curta e ajudamos a escolher o melhor próximo passo: um site profissional, uma loja online ou um sistema Excel automatizado.",
    whatsappButton: "Falar no WhatsApp",
    instagramButton: "Enviar DM no Instagram",
    formName: "Nome",
    formNamePlaceholder: "O seu nome",
    formBusiness: "Nome da Empresa",
    formBusinessPlaceholder: "Nome da sua empresa",
    formService: "Que serviço precisa?",
    formChoose: "Escolha um serviço",
    formWebsite: "Site empresarial",
    formStore: "Loja online",
    formExcel: "Sistema Excel automatizado",
    formNotSure: "Ainda não tenho certeza",
    formMessage: "Mensagem",
    formMessagePlaceholder: "Diga o que quer melhorar ou construir",
    formSubmit: "Enviar Pedido",
    footerText: "Sites premium, lojas online e automação Excel para empresas ambiciosas.",
  },
  zh: {
    pageTitle: "IMJ Digital Studio | 網站、網店與 Excel 自動化",
    brandTagline: "網站設計、網店與自動化",
    navServices: "服務",
    navDemo: "即時示範",
    navWork: "作品",
    navContact: "聯絡",
    startProject: "開始專案",
    heroEyebrow: "數位形象與業務自動化",
    heroTitle: "為準備成長的企業打造高質感網站、線上商店與智慧 Excel 系統。",
    heroText:
      "IMJ Digital Studio 打造清晰、可信、專業的數位體驗，幫助企業提升形象，更快贏得客戶信任，並用自動化系統取代耗時的手動工作。",
    heroPrimary: "取得免費報價",
    heroSecondary: "查看即時示範",
    statOneTitle: "建立信任",
    statOneText: "現代化設計，讓您的企業看起來更專業、更可靠",
    statTwoTitle: "促進成交",
    statTwoText: "清晰頁面、強而有力的行動呼籲，以及順暢的客戶流程",
    statThreeTitle: "自動化節省時間",
    statThreeText: "用更少手動工作追蹤銷售、支出、庫存與業績",
    dashboardTitle: "企業管理儀表板",
    metricOrders: "訂單",
    metricExpenses: "支出",
    metricProfit: "利潤",
    servicesEyebrow: "我們能建立什麼",
    servicesTitle: "讓企業更可信、更好銷售、更容易管理的專業工具",
    serviceOneTitle: "企業網站",
    serviceOneText: "優雅、適合手機瀏覽的網站，清楚呈現品牌並引導訪客採取行動。",
    serviceOnePointOne: "落地頁與完整網站",
    serviceOnePointTwo: "適合手機與電腦的響應式設計",
    serviceOnePointThree: "專業文案與轉化導向架構",
    serviceTwoTitle: "電子商務商店",
    serviceTwoText: "美觀的商品體驗，讓客戶更容易瀏覽、理解並購買您的產品。",
    serviceTwoPointOne: "商品列表與商品詳情頁",
    serviceTwoPointTwo: "適合線上商店的頁面架構",
    serviceTwoPointThree: "促銷活動與精選系列",
    serviceThreeTitle: "Excel 自動化",
    serviceThreeText: "智慧試算表可自動計算、整理並呈現重要業務數據。",
    serviceThreePointOne: "即時公式與儀表板",
    serviceThreePointTwo: "月度報告範本",
    serviceThreePointThree: "減少手動輸入與錯誤",
    demoEyebrow: "即時業務示範",
    demoTitle: "預覽我們可為您的企業客製化的追蹤系統",
    demoText:
      "移動下方控制條，看看客製化 Excel 系統如何把日常銷售資料轉化為即時業務洞察。若客戶需要，我們可以為銷售、支出、庫存、發票、出勤或報告製作類似追蹤系統。",
    inputSales: "月銷售額",
    inputExpenses: "月支出",
    inputOrders: "訂單數量",
    sheetTitle: "IMJ 自動化示範",
    sheetStatus: "即時計算",
    sheetMetric: "指標",
    sheetFormula: "公式",
    sheetResult: "結果",
    sheetRevenue: "收入",
    sheetSalesInput: "銷售輸入",
    sheetProfit: "利潤",
    sheetProfitFormula: "銷售額 - 支出",
    sheetAverage: "平均訂單金額",
    sheetAverageFormula: "銷售額 / 訂單",
    sheetMargin: "利潤率",
    sheetMarginFormula: "利潤 / 銷售額",
    demoCtaText: "想為您的企業客製化這樣的追蹤系統嗎？",
    demoCtaButton: "申請客製化追蹤系統",
    portfolioEyebrow: "設計方向",
    portfolioTitle: "讓客戶記住您企業的專業頁面版型",
    portfolioOneTitle: "餐廳或咖啡館網站",
    portfolioOneText: "高質感菜單、位置資訊、預約引導，以及面向本地客戶的直接聯絡。",
    portfolioTwoTitle: "線上商店體驗",
    portfolioTwoText: "商品系列、精選優惠、商店分類，以及支援客戶放心購買的頁面。",
    portfolioThreeTitle: "服務型企業網站",
    portfolioThreeText: "清晰定位、服務方案、信任建立區塊與簡單的客戶線索收集。",
    processEyebrow: "我們的流程",
    processTitle: "從初步想法到專業上線的清晰流程",
    processOneTitle: "明確目標",
    processOneText: "我們了解您銷售什麼、服務誰，以及網站或系統需要完成什麼目標。",
    processTwoTitle: "設計體驗",
    processTwoText: "在正式建置前，我們規劃架構、訊息表達與視覺方向。",
    processThreeTitle: "自信上線",
    processThreeText: "我們交付精緻成果，在不同螢幕上測試，並讓未來優化更清晰。",
    contactEyebrow: "開始您的專案",
    contactTitle: "讓我們打造您的企業應得的數位系統",
    contactText:
      "發送一則簡短訊息，我們會協助您選擇最適合的下一步：專業網站、線上商店或自動化 Excel 系統。",
    whatsappButton: "WhatsApp 諮詢",
    instagramButton: "Instagram 私訊",
    formName: "姓名",
    formNamePlaceholder: "您的姓名",
    formBusiness: "企業名稱",
    formBusinessPlaceholder: "您的企業名稱",
    formService: "您需要什麼服務？",
    formChoose: "選擇一項服務",
    formWebsite: "企業網站",
    formStore: "電子商務商店",
    formExcel: "自動化 Excel 系統",
    formNotSure: "還不確定",
    formMessage: "留言",
    formMessagePlaceholder: "告訴我們您想改善或建置什麼",
    formSubmit: "發送請求",
    footerText: "為有目標的企業打造高質感網站、線上商店與 Excel 自動化。",
  },
};

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;

  document.documentElement.lang = language === "zh" ? "zh-Hant" : language;
  document.title = dictionary.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      element.placeholder = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("imjLanguage", language);
}

function updateAutomationDemo() {
  const sales = Number(salesInput.value);
  const expenses = Number(expenseInput.value);
  const orders = Number(ordersInput.value);
  const profit = sales - expenses;
  const averageOrder = orders > 0 ? sales / orders : 0;
  const margin = sales > 0 ? Math.round((profit / sales) * 100) : 0;

  salesOutput.textContent = currencyFormatter.format(sales);
  expenseOutput.textContent = currencyFormatter.format(expenses);
  ordersOutput.textContent = numberFormatter.format(orders);

  revenueResult.textContent = currencyFormatter.format(sales);
  profitResult.textContent = currencyFormatter.format(profit);
  averageResult.textContent = currencyFormatter.format(averageOrder);
  marginResult.textContent = `${margin}%`;
}

[salesInput, expenseInput, ordersInput].forEach((input) => {
  input.addEventListener("input", updateAutomationDemo);
});

updateAutomationDemo();

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

setLanguage(localStorage.getItem("imjLanguage") || "en");
