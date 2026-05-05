// Real Ta3laM Power BI curriculum — 10 chapters, 79 lessons
window.CURRICULUM = [
  {
    id: "foundations",
    num: "01",
    title: "البداية الحقيقية: افهم البيانات الأول",
    en: "The Real Start: Understand Data First",
    subtitle: "Before Power BI, Understand Data",
    accent: "gold",
    lessons: [
      { id: "intro",         title: "مقدمة في Power BI",                en: "Intro to Power BI",             mins: 8,  kind: "concept" },
      { id: "setup",         title: "التثبيت والإعداد",                 en: "Installation & Setup",          mins: 6,  kind: "practice" },
      { id: "interface",     title: "واجهة البرنامج",                   en: "Interface Overview",            mins: 9,  kind: "concept" },
      { id: "oltp-olap",     title: "OLTP مقابل OLAP",                  en: "OLTP vs OLAP",                  mins: 11, kind: "theory" },
      { id: "model",         title: "نموذج البيانات والـ Star Schema",  en: "Data Model & Star Schema",      mins: 14, kind: "theory" },
      { id: "scd",           title: "البيانات المتغيرة عبر الوقت (SCD)", en: "Slowly Changing Dimensions",    mins: 12, kind: "theory" },
      { id: "bridge-tables", title: "ربط الجداول المعقدة (Bridge Tables)",                  en: "Bridge Tables",                 mins: 10, kind: "theory" },
    ],
  },
  {
    id: "data",
    num: "02",
    title: "هندسة البيانات وتحويلها",
    en: "Data Engineering & Transformation",
    subtitle: "Power Query · M Language",
    accent: "teal",
    lessons: [
      { id: "getdata",     title: "جلب البيانات",            en: "Get Data",         mins: 7,  kind: "practice" },
      { id: "cleaning",    title: "تنظيف البيانات",           en: "Data Cleaning",    mins: 12, kind: "practice" },
      { id: "powerquery",  title: "محرر Power Query",          en: "Power Query",      mins: 18, kind: "practice" },
      { id: "pq-groupby",  title: "Group By وPivot/Unpivot والـ Parameters", en: "Group By, Pivot & Parameters", mins: 20, kind: "code" },
      { id: "mcode",       title: "لغة M المتقدمة",            en: "Advanced M Code",  mins: 22, kind: "code" },
      { id: "query-folding", title: "Query Folding و الأداء", en: "Query Folding & Performance", mins: 24, kind: "theory" },
    ],
  },
  {
    id: "modeling",
    num: "03",
    title: "بناء النموذج الربطي",
    en: "Building the Data Model",
    subtitle: "Data Modeling in Power BI",
    accent: "blue",
    lessons: [
      { id: "relationships", title: "إدارة العلاقات",  en: "Relationships",  mins: 11, kind: "theory" },
      { id: "datetable",     title: "جدول التقويم",    en: "Date Table",     mins: 14, kind: "code" },
      { id: "hierarchies",   title: "التصنيفات الهرمية", en: "Hierarchies",    mins: 7,  kind: "practice" },
      { id: "directquery",   title: "DirectQuery vs Import vs Live", en: "DirectQuery vs Import vs Live", mins: 22, kind: "theory" },
      { id: "tabular-editor", title: "Tabular Editor و Advanced Modeling", en: "Tabular Editor & Advanced Modeling", mins: 26, kind: "code" },
    ],
  },
  {
    id: "dax",
    num: "04",
    title: "لغة التحليل DAX",
    en: "DAX — Data Analysis Expressions",
    subtitle: "Data Analysis Expressions",
    accent: "coral",
    lessons: [
      { id: "dax1",              title: "أساسيات DAX",                en: "DAX Basics",              mins: 10, kind: "code" },
      { id: "filter-context",    title: "Row Context و Filter Context",  en: "Row Context & Filter Context", mins: 18, kind: "theory" },
      { id: "dax-logical",       title: "IF و SWITCH",                en: "Logical Functions",       mins: 13, kind: "code" },
      { id: "calculate",         title: "CALCULATE بعمق",             en: "CALCULATE Deep Dive",     mins: 20, kind: "code" },
      { id: "relationships-dax", title: "العلاقات داخل DAX",          en: "Relationships in DAX",    mins: 12, kind: "code" },
      { id: "iterators",         title: "دوال التكرار",                en: "Iterator Functions",      mins: 15, kind: "code" },
      { id: "dax2",              title: "ذكاء الوقت",                  en: "Time Intelligence",       mins: 18, kind: "code" },
      { id: "time-intel-pro",    title: "ذكاء الوقت المتقدم",          en: "Time Intelligence Pro",   mins: 22, kind: "code" },
      { id: "fieldparams",       title: "Field Parameters",            en: "Field Parameters",        mins: 11, kind: "practice" },
      { id: "dax3",              title: "DAX المتقدم",                 en: "Advanced DAX",            mins: 25, kind: "code" },
      { id: "dax-text",          title: "دوال النصوص",                 en: "Text Functions",          mins: 12, kind: "code" },
      { id: "dax-m2m",          title: "Many-to-Many و TREATAS",       en: "Many-to-Many & TREATAS",  mins: 18, kind: "code" },
      { id: "dax-budget",       title: "Budget vs Actual",             en: "Budget vs Actual",        mins: 16, kind: "code" },
      { id: "dax-performance",  title: "أداء DAX وتحسينه",             en: "DAX Performance Tuning",  mins: 20, kind: "theory" },
      { id: "dax-reference",     title: "مرجع DAX الكامل",             en: "DAX Reference",           mins: 9,  kind: "reference" },
    ],
  },
  {
    id: "visuals",
    num: "05",
    title: "التصميم البصري",
    en: "Visual Design & Visualization",
    subtitle: "Visualization & UX",
    accent: "violet",
    lessons: [
      { id: "visuals",         title: "المخططات البصرية",            en: "Visualizations",          mins: 14, kind: "practice" },
      { id: "sync-slicers",    title: "الـ Slicers والتفاعل",        en: "Sync Slicers",            mins: 9,  kind: "practice" },
      { id: "themes",          title: "الثيمات والتصميم",            en: "Themes & Design",         mins: 11, kind: "practice" },
      { id: "custom-tooltips", title: "Tooltips مخصصة",              en: "Custom Tooltips",         mins: 8,  kind: "practice" },
      { id: "condformat",      title: "التنسيق الشرطي",              en: "Conditional Formatting",  mins: 10, kind: "practice" },
      { id: "drillthrough",    title: "Drill Down و Drill Through",  en: "Drill Through",           mins: 11, kind: "practice" },
      { id: "bookmarks",       title: "الإشارات المرجعية",            en: "Bookmarks",               mins: 9,  kind: "practice" },
      { id: "mobile-design",   title: "Mobile Design و الـ Responsive", en: "Mobile Design & Responsive", mins: 18, kind: "practice" },
      { id: "storytelling",    title: "\u0633\u0631\u062f \u0627\u0644\u0642\u0635\u0629 \u0628\u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a",      en: "Storytelling with Data", mins: 16, kind: "theory" },
      { id: "ai-visuals",        title: "المرئيات الذكية والذكاء الاصطناعي", en: "AI Visuals & Intelligence",     mins: 20, kind: "concept" },
      { id: "dashboard-workshop", title: "\u0648\u0631\u0634\u0629 \u0628\u0646\u0627\u0621 \u0644\u0648\u062d\u0629 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0643\u0627\u0645\u0644\u0629", en: "Full Dashboard Workshop", mins: 26, kind: "practice" },
    ],
  },
  {
    id: "publish",
    num: "06",
    title: "النشر والإدارة",
    en: "Publishing & Governance",
    subtitle: "Publishing & Governance",
    accent: "gold",
    lessons: [
      { id: "publish",     title: "النشر والمشاركة",    en: "Publish & Share",        mins: 8,  kind: "practice" },
      { id: "workspaces",  title: "Workspaces و Apps",  en: "Workspaces & Apps",      mins: 10, kind: "practice" },
      { id: "rls",         title: "أمن الصفوف RLS",     en: "Row Level Security",     mins: 13, kind: "code" },
      { id: "gateway",     title: "Gateway والتحديث",    en: "Gateway & Refresh",      mins: 11, kind: "practice" },
      { id: "incremental", title: "Incremental Refresh", en: "Incremental Refresh",    mins: 14, kind: "practice" },
    ],
  },
  {
    id: "advanced",
    num: "07",
    title: "التميز والتحسين",
    en: "Advanced & Optimization",
    subtitle: "Advanced & Optimization",
    accent: "teal",
    lessons: [
      { id: "performance",         title: "الأداء والتحسين",       en: "Performance",            mins: 16, kind: "theory" },
      { id: "error-handling",      title: "Error Handling و Debugging", en: "Error Handling & Debugging", mins: 24, kind: "code" },
      { id: "semantic-model",      title: "Semantic Model Design و Governance", en: "Semantic Model Design & Governance", mins: 28, kind: "theory" },
      { id: "common-mistakes",     title: "الأخطاء الشائعة و Anti-patterns", en: "Common Mistakes & Anti-patterns", mins: 26, kind: "theory" },
      { id: "data-governance",    title: "حوكمة البيانات والتصنيف الأمني",   en: "Data Governance & Sensitivity", mins: 18, kind: "theory"  },
      { id: "cost-optimization",   title: "Cost Optimization و Premium", en: "Cost Optimization & Premium", mins: 22, kind: "theory" },
      { id: "python-pbi",          title: "Python داخل Power BI",  en: "Python in PBI",          mins: 18, kind: "code" },
      { id: "paginated",           title: "التقارير الموجهة",       en: "Paginated Reports",      mins: 12, kind: "practice" },
      { id: "external-tools",      title: "الأدوات الخارجية",        en: "External Tools",         mins: 11, kind: "reference" },
      { id: "apis",                title: "APIs و Embedded",        en: "APIs & Embedded",        mins: 14, kind: "code" },
      { id: "git-integration",     title: "Git و CI/CD",            en: "Git Integration",        mins: 10, kind: "reference" },
      { id: "advanced-dataflows",  title: "Dataflows المتقدمة",     en: "Advanced Dataflows",     mins: 13, kind: "practice" },
    ],
  },
  {
    id: "automation",
    num: "08",
    title: "الأتمتة والتكامل",
    en: "Automation & Integration",
    subtitle: "Power Automate & Alerts",
    accent: "gold",
    lessons: [
      { id: "power-automate",  title: "Power Automate و الـ Alerts",      en: "Power Automate & Alerts",     mins: 24, kind: "code" },
      { id: "auto-refresh",    title: "Automated Refresh و Scheduling",  en: "Automated Refresh & Scheduling", mins: 20, kind: "practice" },
      { id: "automate-reports", title: "توليد التقارير الآلي",           en: "Automated Report Generation",  mins: 22, kind: "code" },
    ],
  },
  {
    id: "kpi",
    num: "09",
    title: "مؤشرات الأداء الرئيسية",
    en: "KPI Domains",
    subtitle: "KPI Domains",
    accent: "gold",
    lessons: [
      { id: "kpi-finance",   title: "المالية",         en: "Financial KPIs",   mins: 18, kind: "reference" },
      { id: "kpi-sales",     title: "المبيعات",        en: "Sales KPIs",       mins: 15, kind: "reference" },
      { id: "kpi-inventory", title: "المخزون والإمداد", en: "Inventory & Supply", mins: 16, kind: "reference" },
      { id: "kpi-hr",        title: "الموارد البشرية",   en: "HR KPIs",          mins: 14, kind: "reference" },
      { id: "kpi-marketing", title: "التسويق",         en: "Marketing KPIs",   mins: 13, kind: "reference" },
    ],
  },
];

const advancedChapter = window.CURRICULUM.find((chapter) => chapter.id === "advanced");
if (advancedChapter && !advancedChapter.lessons.some((lesson) => lesson.id === "calculation-groups")) {
  advancedChapter.lessons.push(
    { id: "composite-models", title: "Composite Models والـ Aggregations", en: "Composite Models & Aggregations", mins: 22, kind: "theory" },
    { id: "calculation-groups", title: "Calculation Groups و Reusable Time Intelligence", en: "Calculation Groups & Reusable Time Intelligence", mins: 17, kind: "code" },
    { id: "enterprise-security", title: "Enterprise Security — RLS و OLS و Permissions", en: "Enterprise Security — RLS, OLS & Permissions", mins: 18, kind: "theory" },
    { id: "deployment-pipelines", title: "Deployment Pipelines و ALM Toolkit", en: "Deployment Pipelines & ALM Toolkit", mins: 16, kind: "practice" },
    { id: "monitoring-adoption", title: "Monitoring و Adoption و Refresh Operations", en: "Monitoring, Adoption & Refresh Operations", mins: 15, kind: "theory" },
    { id: "fabric-dataflows", title: "Fabric و Dataflows Gen2", en: "Fabric & Dataflows Gen2", mins: 18, kind: "practice" }
  );
}

if (!window.CURRICULUM.some((chapter) => chapter.id === "projects")) {
  window.CURRICULUM.push({
    id: "projects",
    num: "10",
    title: "المشاريع ودراسات الحالة",
    en: "Capstones & Case Studies",
    subtitle: "Portfolio-ready Power BI projects",
    accent: "blue",
    lessons: [
      { id: "project-retail-starter", title: "مشروع البداية — Pizza Place Sales", en: "Starter Project — Pizza Place Sales", mins: 35, kind: "practice" },
      { id: "project-ops-intermediate", title: "مشروع متوسط — Online Chess Games", en: "Intermediate Project — Online Chess Games", mins: 45, kind: "practice" },
      { id: "project-enterprise-advanced", title: "مشروع متقدم — Airbnb Market Intelligence", en: "Advanced Project — Airbnb Market Intelligence", mins: 60, kind: "practice" },
      { id: "portfolio-playbook", title: "Portfolio و Interview Playbook", en: "Portfolio & Interview Playbook", mins: 20, kind: "reference" },
    ],
  });
}

window.COURSE_PATH_META = {
  chapters: {
    foundations: {
      phase: 1,
      level: "beginner",
      focus: {
        ar: "قبل أن تفتح Power BI، يجب أن تفهم البيانات: من أين تأتي، ما معناها، وكيف تتحوّل إلى قرار.",
        en: "Before opening Power BI, understand the data: where it comes from, what it means, and how it becomes a decision."
      },
      audience: {
        ar: "مناسب إذا كنت جديدًا على Power BI أو قادمًا من Excel وتريد أساسًا واضحًا.",
        en: "Best if you're new to Power BI or coming from Excel and want a clean foundation."
      },
      milestone: {
        ar: "بنهاية هذه المرحلة ستتعامل مع Power BI كأداة تفكير وتحليل، وليس كبرنامج رسومات فقط.",
        en: "By the end of this phase, you will treat Power BI as a thinking and analysis tool, not just a visual builder."
      },
      outcomes: {
        ar: [
          "ستفهم الفرق بين البيانات الخام والمعلومة والرؤية والقرار.",
          "ستعرف لماذا ترتيب الجداول والعلاقات أهم من شكل التقرير في البداية.",
          "ستتعلم الأساس الذي يجعل مفاهيم مثل OLTP و OLAP و Star Schema مفهومة."
        ],
        en: [
          "You will understand the difference between raw data, information, insight, and decision.",
          "You will see why table structure and relationships matter more than report appearance at the start.",
          "You will build the foundation that makes OLTP, OLAP, and Star Schema understandable."
        ]
      },
      checkpoint: {
        ar: [
          "إذا كنت لا تزال تخلط بين Fact و Dimension، راجع هذا الفصل قبل الانتقال.",
          "إذا كانت Many-to-Many أو SCD ما تزال غامضة، لا تتخطها لأن DAX سيعتمد عليها لاحقًا.",
          "علامة النجاح هنا: صرت ترى النموذج كمنطق أعمال، لا كجداول فقط."
        ],
        en: [
          "If Fact vs Dimension is still fuzzy, review this chapter before moving on.",
          "If Many-to-Many or SCD still feels vague, do not skip them because later DAX will depend on them.",
          "Success signal here: you now see the model as business logic, not just tables."
        ]
      }
    },
    data: {
      phase: 2,
      level: "beginner",
      focus: {
        ar: "تنقل البيانات من شكلها الخام إلى شكل يمكن الوثوق به وتحليله.",
        en: "Move data from raw shape into something reliable and analysis-ready."
      },
      audience: {
        ar: "مناسبة لمن يريد تحويل ملفات ومصادر متفرقة إلى dataset نظيف وقابل للتحديث.",
        en: "Best for anyone turning messy files and sources into a clean refreshable dataset."
      },
      milestone: {
        ar: "بعدها ستكون قادرًا على تنظيف البيانات بدون كسر المنطق أو الأداء.",
        en: "After this phase you should be able to clean data without breaking logic or performance."
      },
      outcomes: {
        ar: [
          "ستجلب البيانات من أكثر من مصدر وتفهم متى تستخدم كل connector.",
          "ستتعلم تنظيف البيانات بشكل منظم وقابل للتكرار بدل التعديلات اليدوية.",
          "ستفهم أين يفيد M Code وQuery Folding ومتى يبدأ الأداء في التراجع."
        ],
        en: [
          "You will load data from multiple sources and understand when each connector makes sense.",
          "You will learn to clean data in a repeatable, structured way instead of one-off edits.",
          "You will understand where M code and query folding help, and when performance starts to degrade."
        ]
      },
      checkpoint: {
        ar: [
          "راجع هذا الفصل إذا كنت ما زلت تنظف البيانات بعشوائية أو بخطوات غير قابلة للإعادة.",
          "تأكد أنك تستطيع شرح ETL داخل Power Query بلغة بسيطة وواضحة.",
          "علامة النجاح هنا: صار عندك dataset نظيف يمكن تحديثه بثقة."
        ],
        en: [
          "Review this chapter if your cleaning steps still feel random or non-repeatable.",
          "Make sure you can explain ETL inside Power Query in simple, clear language.",
          "Success signal here: you now have a clean dataset you can refresh with confidence."
        ]
      }
    },
    modeling: {
      phase: 3,
      level: "intermediate",
      focus: {
        ar: "تحول الجداول النظيفة إلى semantic model متماسك وسريع وقابل للتوسع.",
        en: "Turn clean tables into a coherent, fast, and scalable semantic model."
      },
      audience: {
        ar: "مناسبة لمن بدأ يجلب البيانات ويريد فهم العلاقات والتاريخ وقرارات التخزين بعمق.",
        en: "Best once you can load data and want to reason deeply about relationships, dates, and storage modes."
      },
      milestone: {
        ar: "هنا تبدأ فعليًا في بناء model يمكن أن يحمل DAX وتقارير صحيحة.",
        en: "This is where you start building a model that can safely carry DAX and trustworthy reports."
      },
      outcomes: {
        ar: [
          "ستضبط العلاقات والاتجاهات بحيث تعمل الفلاتر بدون مفاجآت.",
          "ستنشئ Date Table صحيحة بدل الاعتماد على تواريخ مبعثرة في الجداول.",
          "ستفهم متى تستخدم Import أو DirectQuery أو Live على أساس منطقي."
        ],
        en: [
          "You will configure relationships and filter directions so filters behave predictably.",
          "You will create a proper Date Table instead of relying on scattered date columns.",
          "You will understand when to use Import, DirectQuery, or Live with real reasoning."
        ]
      },
      checkpoint: {
        ar: [
          "لا تنتقل إذا كنت ما زلت تضبط العلاقات بالتجربة والخطأ فقط.",
          "تأكد أنك تعرف لماذا Date Table أساسية قبل Time Intelligence.",
          "علامة النجاح هنا: modelك صار مستقراً ويمكن البناء عليه."
        ],
        en: [
          "Do not move on if relationship design still feels like trial and error.",
          "Make sure you understand why a Date Table is essential before time intelligence.",
          "Success signal here: your model now feels stable enough to build on."
        ]
      }
    },
    dax: {
      phase: 4,
      level: "intermediate",
      focus: {
        ar: "تبني طبقة القياس والتحليل التي تحول النموذج إلى قرارات فعلية.",
        en: "Build the measurement layer that turns a model into real decisions."
      },
      audience: {
        ar: "مناسبة لمن لديه model جيد ويريد كتابة measures قوية بدل الحلول السريعة.",
        en: "Best for learners who already have a decent model and want strong measures instead of shortcuts."
      },
      milestone: {
        ar: "بنهاية هذه المرحلة ستكون قادرًا على كتابة Measures احترافية وفهم Context بشكل مريح.",
        en: "By the end of this phase you should be comfortable writing professional measures and reasoning about context."
      },
      outcomes: {
        ar: [
          "ستفهم الفرق بين Measure وCalculated Column بدل حفظه فقط.",
          "ستتعامل مع Filter Context وRow Context بثقة أكبر.",
          "ستكتب Time Intelligence وMeasures متقدمة بطريقة أوضح وأقل تكرارًا."
        ],
        en: [
          "You will understand the difference between a measure and a calculated column instead of memorizing it.",
          "You will handle filter context and row context with much more confidence.",
          "You will write time intelligence and advanced measures in a clearer, less repetitive way."
        ]
      },
      checkpoint: {
        ar: [
          "إذا كانت CALCULATE لا تزال تبدو لك سحرًا، راجع هذا الفصل قبل الإكمال.",
          "تأكد أنك تستطيع شرح Context بكلماتك أنت لا بكلمات الكتاب.",
          "علامة النجاح هنا: صرت تبني Measures منطقية لا مجرد صيغ منسوخة."
        ],
        en: [
          "If CALCULATE still feels like magic, review this chapter before continuing.",
          "Make sure you can explain context in your own words, not just repeat definitions.",
          "Success signal here: you are writing logical measures, not just copied formulas."
        ]
      }
    },
    visuals: {
      phase: 5,
      level: "intermediate",
      focus: {
        ar: "تحول الأرقام إلى قصة بصرية واضحة وسريعة الفهم.",
        en: "Turn numbers into a visual story that is clear and quick to understand."
      },
      audience: {
        ar: "مناسبة لمن يريد رفع جودة التقارير من مجرد صحيحة إلى مقنعة وسهلة الاستخدام.",
        en: "Best for learners who want reports that feel persuasive and easy to use, not just technically correct."
      },
      milestone: {
        ar: "بعدها ستعرف كيف تختار visual مناسب وتبني تجربة استخدام محترمة.",
        en: "After this phase you'll know how to choose the right visual and build a more deliberate report UX."
      },
      outcomes: {
        ar: [
          "ستختار visual بناءً على الرسالة لا بناءً على الشكل فقط.",
          "ستجعل التفاعل بين slicers, drill, tooltips, and bookmarks أكثر سلاسة.",
          "ستتعلم كيف تفكر في الموبايل والـ responsive مبكرًا لا في آخر لحظة."
        ],
        en: [
          "You will choose visuals based on the message, not just on appearance.",
          "You will make slicers, drill, tooltips, and bookmarks work together more smoothly.",
          "You will learn to think about mobile and responsive design earlier, not at the last minute."
        ]
      },
      checkpoint: {
        ar: [
          "راجع هذا الفصل إذا كانت تقاريرك صحيحة لكن متعبة أو بطيئة الفهم.",
          "تأكد أنك تستطيع تبرير اختيار كل visual في الصفحة.",
          "علامة النجاح هنا: التقرير صار يشرح نفسه بسرعة."
        ],
        en: [
          "Review this chapter if your reports are correct but still tiring or slow to read.",
          "Make sure you can justify every visual choice on the page.",
          "Success signal here: the report now explains itself quickly."
        ]
      }
    },
    publish: {
      phase: 6,
      level: "intermediate",
      focus: {
        ar: "تنقل العمل من ملف محلي إلى بيئة تشغيل ومشاركة وحوكمة.",
        en: "Move the work from a local file into a governed sharing and delivery environment."
      },
      audience: {
        ar: "مناسبة لمن يريد أن ينشر التقارير بشكل آمن وقابل للإدارة داخل الفريق أو الشركة.",
        en: "Best for learners who need to publish reports safely inside a team or company setting."
      },
      milestone: {
        ar: "هنا يبدأ الفرق بين dashboard للتجربة وsolution جاهز للاستخدام الحقيقي.",
        en: "This is where a practice dashboard starts becoming a real-world solution."
      },
      outcomes: {
        ar: [
          "ستفهم الفرق بين النشر والمشاركة والحوكمة.",
          "ستضبط Workspaces وApps وRLS بطريقة أكثر مهنية.",
          "ستتعامل مع Gateway وRefresh كجزء من المنتج لا كخطوة جانبية."
        ],
        en: [
          "You will understand the difference between publishing, sharing, and governance.",
          "You will configure Workspaces, Apps, and RLS in a more professional way.",
          "You will treat Gateway and refresh as part of the product, not an afterthought."
        ]
      },
      checkpoint: {
        ar: [
          "إذا كنت لا تزال تنشر إلى My Workspace كحل نهائي، راجع هذا الفصل.",
          "تأكد أنك تعرف الفرق بين access control وRLS وBuild permissions.",
          "علامة النجاح هنا: صار عندك توزيع آمن وقابل للإدارة."
        ],
        en: [
          "If you still treat My Workspace as a final deployment path, review this chapter.",
          "Make sure you understand the difference between access control, RLS, and Build permissions.",
          "Success signal here: your distribution path is now safer and easier to manage."
        ]
      }
    },
    advanced: {
      phase: 7,
      level: "advanced",
      focus: {
        ar: "تركز على الأداء والجودة التشغيلية وأدوات المطور المحترف.",
        en: "Focus on performance, operational quality, and the professional developer toolchain."
      },
      audience: {
        ar: "مناسبة لمن تجاوز مرحلة بناء التقارير ويريد التفكير كصاحب منصة أو مطور حلول.",
        en: "Best for learners who are past report-building basics and want to think like a solution owner."
      },
      milestone: {
        ar: "بنهاية هذه المرحلة ستتعامل مع performance, security, release, and Fabric بعقلية احترافية.",
        en: "By the end of this phase you should be approaching performance, security, release, and Fabric with a professional mindset."
      },
      outcomes: {
        ar: [
          "ستفكر في الأداء والتكلفة والأخطاء كمسؤولية مستمرة لا كإصلاحات متأخرة.",
          "ستستخدم أدوات مثل Tabular Editor وALM Toolkit وmonitoring بوعي أوضح.",
          "سترى Power BI كجزء من منصة بيانات أوسع تشمل security وrelease discipline وFabric."
        ],
        en: [
          "You will treat performance, cost, and troubleshooting as ongoing responsibilities, not late fixes.",
          "You will use tools like Tabular Editor, ALM Toolkit, and monitoring with better judgment.",
          "You will see Power BI as part of a broader data platform involving security, release discipline, and Fabric."
        ]
      },
      checkpoint: {
        ar: [
          "هذا فصل عميق؛ راجع أي جزء تشعر أنه مجرد أسماء أدوات بلا فهم تشغيلي.",
          "تأكد أنك تعرف متى تحتاج optimization ومتى تحتاج redesign.",
          "علامة النجاح هنا: بدأت تفكر كصاحب حل لا مجرد صانع report."
        ],
        en: [
          "This is a deep chapter; revisit any area that still feels like tool names without operational understanding.",
          "Make sure you know when you need optimization versus when you need redesign.",
          "Success signal here: you are starting to think like a solution owner, not just a report builder."
        ]
      }
    },
    automation: {
      phase: 8,
      level: "advanced",
      focus: {
        ar: "تقلل العمل اليدوي وتربط Power BI بعمليات تنبيه وجدولة وأتمتة.",
        en: "Reduce manual work by connecting Power BI to scheduling, alerts, and automation flows."
      },
      audience: {
        ar: "مناسبة لمن يريد جعل التقارير جزءًا من workflow وليس شاشة معزولة فقط.",
        en: "Best for learners who want reports to become part of an operational workflow, not an isolated screen."
      },
      milestone: {
        ar: "بعدها ستعرف متى تعتمد على الأتمتة ومتى تترك الإنسان في الحلقة.",
        en: "After this phase you'll know when automation adds value and when humans should stay in the loop."
      },
      outcomes: {
        ar: [
          "ستربط التقارير بإشعارات وجدولة وتدفقات متابعة.",
          "ستتعلم أين تضيف automation بدون أن تخلق تعقيدًا بلا داعٍ.",
          "سترى كيف يتحول التقرير من dashboard إلى process trigger."
        ],
        en: [
          "You will connect reports to alerts, scheduling, and follow-up flows.",
          "You will learn where automation adds value without creating needless complexity.",
          "You will see how a report can evolve from a dashboard into a process trigger."
        ]
      },
      checkpoint: {
        ar: [
          "راجع هذا الفصل إذا كانت الأتمتة عندك ما تزال تعني فقط زر refresh.",
          "تأكد أنك تربط كل automation بحاجة عمل حقيقية.",
          "علامة النجاح هنا: التقرير صار جزءًا من workflow."
        ],
        en: [
          "Review this chapter if automation still means nothing more than pressing refresh.",
          "Make sure every automation path is tied to a real business need.",
          "Success signal here: the report has become part of a workflow."
        ]
      }
    },
    kpi: {
      phase: 9,
      level: "advanced",
      focus: {
        ar: "تربط المهارة التقنية بمؤشرات أعمال حقيقية داخل مجالات مختلفة.",
        en: "Connect technical skill to real business metrics across different domains."
      },
      audience: {
        ar: "مناسبة لمن يريد التحدث بلغة البزنس وليس بلغة الأدوات فقط.",
        en: "Best for learners who want to speak the language of business, not just the language of tools."
      },
      milestone: {
        ar: "هذه المرحلة تساعدك على ترجمة Power BI إلى أثر تجاري واضح.",
        en: "This phase helps you translate Power BI skill into visible business impact."
      },
      outcomes: {
        ar: [
          "سترى كيف تختلف KPI logic من finance إلى sales إلى HR.",
          "ستتدرب على الحديث عن المؤشرات بلغة يفهمها business stakeholders.",
          "ستربط الـ measures بالقرار وليس بالرقم فقط."
        ],
        en: [
          "You will see how KPI logic changes from finance to sales to HR.",
          "You will practice talking about metrics in a language business stakeholders can follow.",
          "You will connect measures to decisions, not just numbers."
        ]
      },
      checkpoint: {
        ar: [
          "راجع هذه المرحلة إذا كنت تبني KPIs بلا تعريفات عمل واضحة.",
          "تأكد أنك تستطيع شرح معنى كل KPI قبل طريقة حسابه.",
          "علامة النجاح هنا: صار عندك ربط أفضل بين التحليل والقرار."
        ],
        en: [
          "Review this phase if you still build KPIs without clear business definitions.",
          "Make sure you can explain what each KPI means before how it is calculated.",
          "Success signal here: your analysis now connects more clearly to decisions."
        ]
      }
    },
    projects: {
      phase: 10,
      level: "expert",
      focus: {
        ar: "تجمع كل ما سبق في مشاريع قابلة للعرض والتوظيف والمراجعة المهنية.",
        en: "Combine everything into portfolio-grade projects that can stand up to review."
      },
      audience: {
        ar: "مناسبة لمن يريد إثبات المستوى أمام مدير أو عميل أو مقابلة عمل.",
        en: "Best for learners who need proof of skill for a manager, client, or interview."
      },
      milestone: {
        ar: "هنا يتحول التعلم إلى evidence: مشروع، قرار معماري، وقصة مهنية يمكن شرحها.",
        en: "This is where learning turns into evidence: a project, an architectural decision, and a professional story you can explain."
      },
      outcomes: {
        ar: [
          "ستدمج modeling وDAX وUX وgovernance داخل أمثلة أقرب للحياة.",
          "ستبني مشاريع يمكن استخدامها في portfolio أو مقابلة عمل.",
          "ستتعلم كيف تعرض قراراتك المهنية بدل الاكتفاء بقول: أنا عملت dashboard."
        ],
        en: [
          "You will combine modeling, DAX, UX, and governance inside more realistic cases.",
          "You will build projects that can support a portfolio or an interview.",
          "You will learn how to present professional decisions instead of just saying you built a dashboard."
        ]
      },
      checkpoint: {
        ar: [
          "لا تكتفِ بإكمال المشروع؛ تأكد أنك تستطيع شرحه والدفاع عن قراراته.",
          "راجع الفصول السابقة إذا ظهرت نقطة ضعف واضحة داخل المشروع النهائي.",
          "علامة النجاح هنا: أصبح لديك evidence حقيقي على المستوى."
        ],
        en: [
          "Do not stop at finishing the project; make sure you can explain and defend its decisions.",
          "Go back to earlier chapters if the final project exposes a clear weakness.",
          "Success signal here: you now have real evidence of skill."
        ]
      }
    }
  }
};

window.CURRICULUM = window.CURRICULUM.map((chapter, chapterIndex) => ({
  ...chapter,
  path: window.COURSE_PATH_META.chapters[chapter.id] || { phase: chapterIndex + 1, level: "advanced" },
  lessons: chapter.lessons.map((lesson, lessonIndex) => ({
    ...lesson,
    order: lessonIndex + 1
  }))
}));

// Flatten for progress tracking
window.ALL_LESSONS = window.CURRICULUM.flatMap(ch =>
  ch.lessons.map(l => ({
    ...l,
    chapter: ch.id,
    chapterNum: ch.num,
    chapterTitle: ch.title,
    accent: ch.accent,
    chapterPhase: ch.path?.phase,
    chapterLevel: ch.path?.level
  }))
);
