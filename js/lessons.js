// Lesson content extracted from original course HTML
window.LESSONS = {
  "intro": {
    eyebrow: "01 · 01 — مقدمة في Power BI",
    title: "مقدمة في Power BI",
    lede: "ما هو Power BI؟ ولماذا يعتبر الأداة الأقوى عالمياً في مجال تحليل البيانات وذكاء الأعمال؟",
    en_eyebrow: "01 · 01 — Introduction to Power BI",
    en_lede: "What is Power BI? And why is it considered the most powerful tool in the world in the field of data analysis and business intelligence?",
    sectionId: "intro",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>ما هو ذكاء الأعمال (Business Intelligence)؟</h3>
      <p>هو عملية تحويل البيانات الخام (Raw Data) إلى معلومات ورؤى (Insights) مفهومة تساعد مدراء الشركات على اتخاذ قرارات صحيحة ومبنية على أرقام.</p>
    </div>

    <div class="lesson-card">
      <h3>مكونات بيئة Power BI الأساسية</h3>
      <ul>
        <li><strong>Power BI Desktop:</strong> البرنامج المجاني اللي بننزله على الكمبيوتر، وبنبني فيه التقارير والمعادلات.</li>
        <li><strong>Power BI Service:</strong> السيرفر السحابي (Cloud) اللي بنرفع عليه التقرير عشان نشاركه مع الفريق والمديرين.</li>
        <li><strong>Power BI Mobile:</strong> تطبيق الموبايل اللي بيسمح للمديرين بمتابعة التقارير من أي مكان.</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>معلومة:</strong> برنامج Power BI Desktop مجاني بالكامل 100% وتقدر تتعلم عليه وتعمل كل حاجة بدون أي اشتراك مدفوع!</p>
    </div>` }],
  },
  "setup": {
    eyebrow: "01 · 02 — التثبيت والإعداد",
    title: "التثبيت والإعداد",
    lede: "خطوات بسيطة لتنزيل البرنامج وتجهيز بيئة العمل.",
    en_eyebrow: "01 · 02 — Installation and Setup",
    en_lede: "Simple steps to download the program and prepare your work environment.",
    sectionId: "setup",
    blocks: [{ kind: "html", html: `<div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <h4>متجر مايكروسوفت (موصى به)</h4>
          <p>افتح Microsoft Store في الويندوز وابحث عن "Power BI Desktop" واضغط Install. الميزة هنا إن البرنامج هيتحدث لوحده.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <h4>التحميل المباشر</h4>
          <p>لو معندكش ستور، تقدر تحمله من موقع مايكروسوفت الرسمي (ابحث في جوجل عن Download Power BI Desktop).</p>
        </div>
      </div>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>تنبيه:</strong> Power BI Desktop لا يعمل على أجهزة الماك (Mac OS). لو معاك ماك هتحتاج تنزل Windows عليه باستخدام Parallels أو Boot Camp.</p>
    </div>` }],
  },
  "interface": {
    eyebrow: "01 · 03 — واجهة البرنامج",
    title: "واجهة البرنامج",
    lede: "تعرف على الواجهة الرئيسية والأدوات المتاحة.",
    en_eyebrow: "01 · 03 — Program Interface",
    en_lede: "Learn about the main interface and available tools.",
    sectionId: "interface",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>الثلاث شاشات الرئيسية (Views)</h3>
      <ul>
        <li><strong>شاشة التقرير (Report View):</strong> الكانفاس الأبيض اللي بنرسم فيه الشارتات والرسومات البيانية.</li>
        <li><strong>شاشة البيانات (Data/Table View):</strong> هنا بتشوف الداتا بتاعتك في شكل جداول زي الإكسيل.</li>
        <li><strong>شاشة العلاقات (Model View):</strong> دي أهم شاشة للمحترفين! هنا بنربط الجداول ببعضها.</li>
      </ul>
    </div>
    
    <div class="lesson-card">
      <h3>القوائم الجانبية (Panes)</h3>
      <p>على اليمين هتلاقي:</p>
      <ul>
          <li><strong>Data Pane:</strong> فيها كل الجداول والأعمدة بتاعتك.</li>
          <li><strong>Visualizations Pane:</strong> فيها كل أنواع الشارتات (بار، باي، خريطة..) وإعدادات الألوان.</li>
          <li><strong>Filters Pane:</strong> لعمل فلاتر متقدمة على مستوى التقرير كله أو شارت معين.</li>
      </ul>
    </div>` }],
  },
  "oltp-olap": {
    eyebrow: "01 · 04 — OLTP vs OLAP",
    title: "أنظمة البيانات — OLTP vs OLAP",
    lede: "قبل ما تبدأ تبني أي نموذج بيانات، لازم تفهم الفرق الجوهري بين النظامين اللي بتتعامل معاهم في عالم البيانات.",
    en_eyebrow: "01 · 04 — OLTP vs OLAP",
    en_lede: "Before you start building any data model, you must understand the fundamental difference between the two systems you deal with in the world of data.",
    sectionId: "oltp-olap",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>OLTP — الأنظمة التشغيلية (Online Transaction Processing)</h3>
      <p>دي الأنظمة اللي بتشغّل الأعمال يوم بيوم — مثل نظام المبيعات، نظام المستشفى، نظام المخزون.</p>
      <ul>
        <li><strong>الهدف:</strong> تسجيل العمليات بسرعة وأمان (Insert, Update, Delete).</li>
        <li><strong>البيانات:</strong> محدّثة لحظياً — بتعكس الحالة الحالية فقط.</li>
        <li><strong>النموذج:</strong> جداول كثيرة ومترابطة (Normalized) لتقليل التكرار.</li>
        <li><strong>المستخدم:</strong> موظفو الإدخال والأنظمة التشغيلية.</li>
        <li><strong>مثال:</strong> نظام نقاط البيع (POS)، SAP، نظام المستشفى.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>OLAP — أنظمة التحليل (Online Analytical Processing)</h3>
      <p>دي الأنظمة اللي بتحلّل البيانات التاريخية لاستخراج الرؤى واتخاذ القرارات — زي Power BI.</p>
      <ul>
        <li><strong>الهدف:</strong> استعلامات تحليلية معقدة (Aggregations, Trends, Comparisons).</li>
        <li><strong>البيانات:</strong> تاريخية متراكمة — بتعكس فترات زمنية طويلة.</li>
        <li><strong>النموذج:</strong> Star Schema أو Snowflake Schema (Denormalized) لسرعة القراءة.</li>
        <li><strong>المستخدم:</strong> المديرون والمحللون واتخاذ القرار.</li>
        <li><strong>مثال:</strong> Power BI، Tableau، Azure Synapse.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>المقارنة المباشرة</h3>
      <table style="width:100%;border-collapse:collapse;font-size:0.92rem;">
        <thead>
          <tr style="background:var(--bg4);color:var(--gold);">
            <th style="padding:10px;border:1px solid var(--border);text-align:right;">المعيار</th>
            <th style="padding:10px;border:1px solid var(--border);text-align:right;">OLTP</th>
            <th style="padding:10px;border:1px solid var(--border);text-align:right;">OLAP</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:8px;border:1px solid var(--border);">الهدف</td><td style="padding:8px;border:1px solid var(--border);">تشغيل الأعمال</td><td style="padding:8px;border:1px solid var(--border);">تحليل البيانات</td></tr>
          <tr style="background:var(--bg4);"><td style="padding:8px;border:1px solid var(--border);">نوع العمليات</td><td style="padding:8px;border:1px solid var(--border);">Read/Write متكرر</td><td style="padding:8px;border:1px solid var(--border);">Read كثيف</td></tr>
          <tr><td style="padding:8px;border:1px solid var(--border);">حجم البيانات</td><td style="padding:8px;border:1px solid var(--border);">صغير نسبياً</td><td style="padding:8px;border:1px solid var(--border);">ضخم (GB → TB)</td></tr>
          <tr style="background:var(--bg4);"><td style="padding:8px;border:1px solid var(--border);">النموذج</td><td style="padding:8px;border:1px solid var(--border);">Normalized</td><td style="padding:8px;border:1px solid var(--border);">Star Schema</td></tr>
          <tr><td style="padding:8px;border:1px solid var(--border);">التحديث</td><td style="padding:8px;border:1px solid var(--border);">لحظي</td><td style="padding:8px;border:1px solid var(--border);">دوري (Batch)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>الصورة الكاملة:</strong> البيانات بتبدأ من OLTP (التشغيل) ← بتنتقل عبر ETL/Power Query ← لتوصل لـ OLAP (التحليل في Power BI). أنت كمحلل بياناتك بتشتغل في الجزء الأخير.</p>
    </div>` }],
  },
  "model": {
    eyebrow: "01 · 05 — نموذج البيانات والـ Star Schema",
    title: "نموذج البيانات (Data Model)",
    lede: "سر قوة Power BI! كيف تبني قاعدة بيانات قوية (Star Schema).",
    en_eyebrow: "01 · 05 — Data Model and Star Schema",
    en_lede: "The secret of Power BI's power! How to build a strong database (Star Schema).",
    sectionId: "model",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>لماذا لا نستخدم جدول واحد كبير؟ (Flat Table)</h3>
      <p>في الإكسيل متعودين نحط كل الداتا في شيت واحد كبير. في Power BI ده بيسبب بطء شديد وتكرار للبيانات. الصح هو تقسيم البيانات.</p>
    </div>

    <table class="compare-table">
      <tr>
        <th>جداول الحقائق (Fact Tables)</th>
        <th>جداول الأبعاد (Dimension Tables)</th>
      </tr>
      <tr>
        <td>تحتوي على الحركات والأرقام (المبيعات، المصروفات).</td>
        <td>تحتوي على التفاصيل والوصف (العملاء، المنتجات).</td>
      </tr>
      <tr>
        <td>طويلة جداً (ملايين الصفوف).</td>
        <td>قصيرة ومحدودة (مئات أو آلاف الصفوف).</td>
      </tr>
      <tr>
        <td>البيانات فيها تتكرر (العميل ممكن يشتري 100 مرة).</td>
        <td>البيانات فيها فريدة ولا تتكرر (كل عميل له كود واحد فقط).</td>
      </tr>
    </table>

    <div class="tip-box">
      <div class="icon">⭐</div>
      <p><strong>Star Schema:</strong> هو أفضل تصميم، وفيه بيكون جدول الحركات (Fact) في النص، ومحاط بجداول الأبعاد (Dimensions) زي النجمة.</p>
    </div>` }],
  },
  "scd": {
    eyebrow: "01 · 06 — الأبعاد المتغيرة ببطء",
    title: "البيانات المتغيرة (SCD) — Slowly Changing Dimensions",
    lede: "ماذا يحدث لو العميل غيّر عنوانه أو انتقل الموظف لفرع آخر؟ SCD هي الإجابة على هذا السؤال الأساسي في هندسة البيانات.",
    en_eyebrow: "01 · 06 — Slowly Changing Dimensions",
    en_lede: "What if the customer changed their address or the employee moved to another branch? SCD is the answer to this fundamental question in data engineering.",
    sectionId: "scd",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>ما هي المشكلة؟</h3>
      <p>في الواقع، بيانات الـ Dimension تتغير مع الوقت. لو مدير فرع انتقل من القاهرة للإسكندرية في يوليو، هل تقارير ما قبل يوليو تعكس القاهرة أم الإسكندرية؟ الإجابة تعتمد على نوع الـ SCD الذي تختاره.</p>
    </div>

    <table class="compare-table">
      <tr>
        <th>النوع</th>
        <th>الآلية</th>
        <th>متى تستخدمه؟</th>
      </tr>
      <tr>
        <td><strong>Type 0</strong></td>
        <td>لا تغيير — القيمة الأولى تبقى للأبد.</td>
        <td>بيانات لا تتغير أبداً (تاريخ الميلاد).</td>
      </tr>
      <tr>
        <td><strong>Type 1</strong></td>
        <td>Overwrite — استبدل القيمة القديمة بالجديدة.</td>
        <td>لما التاريخ لا يهمك (تصحيح خطأ إملائي).</td>
      </tr>
      <tr>
        <td><strong>Type 2 <span class="yes">✔ الأكثر شيوعاً</span></strong></td>
        <td>أضف صف جديد مع تواريخ بداية ونهاية.</td>
        <td>لما تحتاج الحفاظ على التاريخ الكامل.</td>
      </tr>
      <tr>
        <td><strong>Type 3</strong></td>
        <td>أضف عمود للقيمة السابقة بجانب الحالية.</td>
        <td>تتبع آخر تغيير واحد فقط.</td>
      </tr>
    </table>

    <div class="lesson-card">
      <h3>Type 2 في Power Query — التطبيق العملي</h3>
      <p>لكل موظف أو عميل يغيّر بياناته، تضيف صفاً جديداً بدل تعديل القديم:</p>
      <div class="code-block">
<span class="cm">-- جدول الموظفين بـ SCD Type 2</span>
EmployeeKey | EmployeeID | Name   | Branch       | StartDate  | EndDate    | IsCurrent
----------- | ---------- | ------ | ------------ | ---------- | ---------- | ---------
1           | E001       | Ahmed  | Cairo        | 2020-01-01 | 2023-06-30 | FALSE
2           | E001       | Ahmed  | Alexandria   | 2023-07-01 | 9999-12-31 | TRUE
3           | E002       | Sara   | Cairo        | 2021-03-15 | 9999-12-31 | TRUE

<span class="cm">-- تاريخ 9999-12-31 = لا يزال نشطاً حتى الآن</span>
<span class="cm">-- IsCurrent = TRUE للصف الحالي الفعّال</span>
      </div>
    </div>

    <div class="lesson-card">
      <h3>الربط الصحيح مع Fact Table</h3>
      <div class="code-block">
<span class="cm">-- الربط يكون على EmployeeKey (مش EmployeeID)</span>
<span class="cm">-- لأن EmployeeID متكرر (صفين للموظف E001)</span>

<span class="cm">-- في DAX: لعرض بيانات الموظف في تاريخ العملية</span>
Employee Branch at Sale = 
<span class="fn">CALCULATE</span>(
    <span class="fn">MAX</span>(Dim_Employee[Branch]),
    <span class="fn">FILTER</span>(
        Dim_Employee,
        Dim_Employee[EmployeeID] = <span class="fn">MAX</span>(Fact_Sales[EmployeeID]) &amp;&amp;
        Dim_Employee[StartDate] &lt;= <span class="fn">MAX</span>(Fact_Sales[SaleDate]) &amp;&amp;
        Dim_Employee[EndDate] >= <span class="fn">MAX</span>(Fact_Sales[SaleDate])
    )
)
      </div>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>في معظم مشاريع Power BI:</strong> Type 1 كافٍ لـ 80% من الحالات. Type 2 لما العميل أو المدير يسألك "ما كانت بيانات الموظف وقت البيعة؟" — هنا فقط تحتاجه.</p>
    </div>` }],
  },
  "bridge-tables": {
    eyebrow: "01 · 07 — الجداول الجسرية",
    title: "جداول الجسر — Bridge Tables",
    lede: "الحل الاحترافي لعلاقات Many-to-Many في نموذج البيانات — بدون جداول الجسر ستواجه نتائج خاطئة وفلاتر مكسورة.",
    en_eyebrow: "01 · 07 — Bridge Tables",
    en_lede: "The professional solution for Many-to-Many relationships in your data model — without bridge tables, you'll get wrong results and broken filters.",
    sectionId: "bridge-tables",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>المشكلة — لماذا Many-to-Many خطيرة؟</h3>
      <p>لو ربطت جدولين مباشرة بعلاقة Many-to-Many (مثلاً: طالب ← مادة وكل طالب له مواد متعددة وكل مادة فيها طلاب متعددين)، Power BI بيحتاج لحل وسيط لأن الفلاتر ستنتشر بشكل غير متحكم فيه وتعطي أرقاماً مضاعفة.</p>
    </div>

    <div class="lesson-card">
      <h3>الحل — جدول الجسر (Bridge Table)</h3>
      <p>جدول وسيط يحتوي على المفاتيح من الجدولين ويحوّل العلاقة Many-to-Many لعلاقتين One-to-Many نظيفتين:</p>
      <div class="code-block">
<span style="color:var(--gold);">-- بدلاً من:</span>
Students ←→ Subjects  (Many-to-Many — خطأ)

<span style="color:var(--gold);">-- استخدم جدول جسر:</span>
Students ──< StudentSubjects >── Subjects
         (One-to-Many)  (Many-to-One)

<span style="color:var(--gold);">-- جدول الجسر يحتوي على:</span>
StudentSubjects: StudentID | SubjectID | Grade | Year
      </div>
    </div>

    <div class="lesson-card">
      <h3>مثال واقعي — المبيعات والمنتجات والعروض</h3>
      <p>في حالة وجود عروض ترويجية تنطبق على منتجات متعددة وكل منتج ينتمي لعروض متعددة:</p>
      <div class="code-block">
<span style="color:var(--gold);">-- الجداول:</span>
Products (ProductID, Name, Category)
Promotions (PromotionID, Name, Discount%)

<span style="color:var(--gold);">-- جدول الجسر:</span>
ProductPromotion (ProductID, PromotionID)

<span style="color:var(--gold);">-- العلاقات:</span>
Products ──< ProductPromotion >── Promotions
      </div>
    </div>

    <div class="lesson-card">
      <h3>إعداد اتجاه الفلتر مع جداول الجسر</h3>
      <ul>
        <li>العلاقة من Fact → Bridge: اتجاه واحد (Single)</li>
        <li>العلاقة من Bridge → Dimension: اتجاه واحد (Single)</li>
        <li>في بعض الحالات ستحتاج <strong>CROSSFILTER</strong> في DAX لتمرير الفلتر يدوياً</li>
      </ul>
      <div class="code-block">
<span style="color:var(--text3);">-- DAX مع CROSSFILTER لتمرير الفلتر عبر الجسر</span>
Sales With Promo =
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">CROSSFILTER</span>(ProductPromotion[ProductID], Products[ProductID], Both)
)
      </div>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>تحذير:</strong> تجنّب تفعيل Cross-filter Direction = Both على العلاقات مباشرة في نموذج Many-to-Many — استخدم CROSSFILTER في DAX بدلاً منه للتحكم الدقيق.</p>
    </div>` }],
  },
  "getdata": {
    eyebrow: "02 · 01 — هندسة البيانات وتحويلها",
    title: "جلب البيانات (Get Data)",
    lede: "كيفية استيراد البيانات من مصادر مختلفة لداخل البرنامج.",
    en_eyebrow: "02 · 01 — Data Engineering and Transformation",
    en_lede: "How to import data from different sources into the program.",
    sectionId: "getdata",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>مصادر البيانات المدعومة</h3>
      <p>باور بي آي بيقدر يقرأ من أكثر من 100 مصدر مختلف، أشهرهم:</p>
      <ul>
        <li>ملفات (Excel, CSV, PDF, Folder).</li>
        <li>قواعد بيانات (SQL Server, MySQL, Oracle).</li>
        <li>خدمات سحابية ومواقع (Web, SharePoint, Google Analytics).</li>
      </ul>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <h4>الضغط على Get Data</h4>
          <p>من قائمة Home، اختار مصدر البيانات بتاعك (مثلاً Excel workbook).</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <h4>اختيار الجداول</h4>
          <p>هتظهر لك شاشة (Navigator) بتوريك الشيتات المتاحة، علم صح على الجدول اللي عايزه.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <h4>Load vs Transform</h4>
          <p>لو الداتا نظيفة وجاهزة اضغط <strong>Load</strong>. لو محتاجة تنظيف وتعديل اضغط <strong>Transform Data</strong> (وهذا هو الأفضل دائماً).</p>
        </div>
      </div>
    </div>` }],
  },
  "cleaning": {
    eyebrow: "02 · 02 — تنظيف البيانات",
    title: "أهم مهارات تنظيف البيانات",
    lede: "أشهر الأدوات اللي هتحتاجها في Power Query لتجهيز الداتا بتاعتك.",
    en_eyebrow: "02 · 02 — Data Cleaning",
    en_lede: "The most common tools you'll need in Power Query to prepare your data.",
    sectionId: "cleaning",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>أدوات التحويل (Transformations)</h3>
      <ul>
        <li><strong>Data Types:</strong> التأكد إن الأرقام مقرية كأرقام والتواريخ كتواريخ (مهم جداً جداً).</li>
        <li><strong>Split Column:</strong> فصل عمود بناءً على مسافة أو علامة (زي فصل الاسم الأول عن الأخير).</li>
        <li><strong>Replace Values:</strong> استبدال قيمة بخطأ أو قيمة فارغة بقيمة صحيحة (زي Find & Replace).</li>
        <li><strong>Unpivot:</strong> تحويل الجداول العرضية (الكروس تاب) إلى جداول طولية مناسبة للتحليل. (سحر الباور كويري!).</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>دمج الجداول (Merge & Append)</h3>
      <p>زي دوال VLOOKUP في الإكسيل بس أقوى بكتير:</p>
      <ul>
        <li><strong>Merge Queries:</strong> دمج جدولين بالعرض بناءً على عمود مشترك (زي كود الموظف).</li>
        <li><strong>Append Queries:</strong> دمج جدولين بالطول (وضع داتا شهر 2 تحت داتا شهر 1).</li>
      </ul>
    </div>` }],
  },
  "powerquery": {
    eyebrow: "02 · 03 — محرر Power Query",
    title: "Power Query — محرر الاستعلامات",
    lede: "المطبخ السري لـ Power BI. كل خطوة بتتسجل تلقائياً وبتتطبق كل مرة تحدّث البيانات.",
    en_eyebrow: "02 · 03 — Power Query Editor",
    en_lede: "The secret kitchen of Power BI. Every step is automatically recorded and applied every time you update the data.",
    sectionId: "powerquery",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>ما هو Power Query؟</h3>
      <p>هو برنامج مدمج داخل Power BI وظيفته الأساسية هي <strong>ETL</strong>:</p>
      <ul>
        <li><strong>Extract:</strong> سحب البيانات من أي مصدر.</li>
        <li><strong>Transform:</strong> تعديل وتنظيف (مسح أعمدة، تغيير نوع، دمج، Unpivot).</li>
        <li><strong>Load:</strong> تحميل البيانات النظيفة للموديل.</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>الميزة الخارقة:</strong> كل خطوة بتتسجل في <strong>Applied Steps</strong>. لما الداتا تتحدث، الخطوات تتنفذ تلقائياً بدون تدخل.</p>
    </div>

    <div class="lesson-card">
      <h3>أهم عمليات التحويل</h3>
      <ul>
        <li><strong>Change Type:</strong> تغيير نوع العمود — الأهم على الإطلاق، افعله أول شيء.</li>
        <li><strong>Remove Duplicates:</strong> حذف الصفوف المكررة بضغطة واحدة.</li>
        <li><strong>Split Column:</strong> فصل عمود بناءً على محدد (فاصلة، مسافة، عدد أحرف).</li>
        <li><strong>Replace Values:</strong> استبدال قيمة null أو خطأ بقيمة صحيحة.</li>
        <li><strong>Unpivot Columns:</strong> تحويل جدول عرضي (Wide) إلى طولي (Long) — سحر Power Query.</li>
        <li><strong>Add Custom Column:</strong> إضافة عمود محسوب بكود M.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Merge vs Append</h3>
      <ul>
        <li><strong>Merge Queries:</strong> دمج جدولين بالعرض بعمود مشترك — بديل VLOOKUP الأقوى. يدعم Left/Right/Inner/Full Join.</li>
        <li><strong>Append Queries:</strong> تراص جدولين فوق بعض — مفيد لدمج ملفات شهرية أو سنوية.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>مثال M Code — تحميل وتنظيف ملف Excel</h3>
      <div class="code-block">
<span class="kw">let</span>
    Source     = Excel.Workbook(<span class="fn">File.Contents</span>(<span class="str">"C:\\data\\sales.xlsx"</span>)),
    Sheet      = Source{[<span class="fn">Name</span>=<span class="str">"Sheet1"</span>]}[Data],
    Promoted   = <span class="fn">Table.PromoteHeaders</span>(Sheet, [PromoteAllScalars=<span class="kw">true</span>]),
    TypedCols  = <span class="fn">Table.TransformColumnTypes</span>(Promoted, {
                     {<span class="str">"Date"</span>,   type date},
                     {<span class="str">"Amount"</span>, type number},
                     {<span class="str">"Region"</span>, type text}
                 }),
    NoNulls    = <span class="fn">Table.SelectRows</span>(TypedCols, each [Amount] &lt;&gt; null),
    NoNeg      = <span class="fn">Table.SelectRows</span>(NoNulls,   each [Amount] > <span class="num">0</span>),
    TrimRegion = <span class="fn">Table.TransformColumns</span>(NoNeg, {{<span class="str">"Region"</span>, Text.Trim}})
<span class="kw">in</span>
    TrimRegion
      </div>
    </div>

    <div class="lesson-card">
      <h3>مثال Unpivot — من Wide لـ Long</h3>
      <div class="code-block">
<span class="cm">-- قبل Unpivot (جدول عرضي — خطأ للتحليل):</span>
Product | Jan  | Feb  | Mar
------- | ---- | ---- | ----
A       | 1000 | 1200 | 900

<span class="cm">-- بعد Unpivot (جدول طولي — صح):</span>
Product | Month | Sales
------- | ----- | -----
A       | Jan   | 1000
A       | Feb   | 1200
A       | Mar   | 900

<span class="cm">-- الخطوة: select columns Jan,Feb,Mar → Transform → Unpivot Columns</span>
      </div>
    </div>` }],
  },
  "mcode": {
    eyebrow: "02 · 04 — لغة M المتقدمة",
    title: "Advanced M-Code — لغة Power Query",
    lede: "الانتقال من \"الضغط على الأزرار\" إلى كتابة كود M يدوياً لبناء استعلامات مرنة وقابلة لإعادة الاستخدام.",
    en_eyebrow: "02 · 04 — Advanced M Language",
    en_lede: "Moving from clicking buttons to writing M code manually to build flexible and reusable queries.",
    sectionId: "mcode",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>بنية لغة M — كيف تقرأ الكود</h3>
      <p>كل استعلام في Power Query هو في الحقيقة كود M مكوّن من كتلة <strong>let...in</strong>. كل سطر = خطوة Applied Step:</p>
      <div class="code-block">
<span class="kw">let</span>
    <span class="cm">// كل خطوة = متغير يأخذ نتيجة الخطوة السابقة</span>
    Source      = Excel.Workbook(<span class="fn">File.Contents</span>(<span class="str">"C:\\data\\sales.xlsx"</span>)),
    Sheet1      = Source{[<span class="fn">Name</span>=<span class="str">"Sales"</span>]}[Data],
    Headers     = <span class="fn">Table.PromoteHeaders</span>(Sheet1),
    ChangedType = <span class="fn">Table.TransformColumnTypes</span>(Headers, {
                      {<span class="str">"Date"</span>,   type date},
                      {<span class="str">"Amount"</span>, type number}
                  }),
    Filtered    = <span class="fn">Table.SelectRows</span>(ChangedType, each [Amount] > <span class="num">0</span>)
<span class="kw">in</span>
    Filtered  <span class="cm">// الخطوة الأخيرة هي المخرج النهائي</span>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Parameters — استعلامات ديناميكية</h3>
      <p>بدل ما تكتب مسار الملف ثابتاً في الكود، استخدم Parameter يتغير بسهولة:</p>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>Manage Parameters → New Parameter</h4>
            <p>حدد الاسم (مثلاً: FilePath)، النوع (Text)، والقيمة الافتراضية (C:\\data\\).</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>استخدامه في الكود</h4>
            <div class="code-block" style="margin-top:6px;">
<span class="cm">// بدل المسار الثابت</span>
Source = Excel.Workbook(<span class="fn">File.Contents</span>(FilePath &amp; <span class="str">"sales.xlsx"</span>))
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Custom Functions — إنشاء وظائف مخصصة</h3>
      <p>لو عندك نفس خطوات التنظيف على ملفات كثيرة، حوّلها لـ Function وادعيها مرة واحدة:</p>
      <div class="code-block">
<span class="cm">// تعريف Function لتنظيف أي جدول مبيعات</span>
CleanSalesTable = (<span class="kw">tbl</span> as table) as table =>
<span class="kw">let</span>
    Typed    = <span class="fn">Table.TransformColumnTypes</span>(tbl, {
                   {<span class="str">"Date"</span>,   type date},
                   {<span class="str">"Amount"</span>, type number},
                   {<span class="str">"Region"</span>, type text}
               }),
    NoNulls  = <span class="fn">Table.SelectRows</span>(Typed, each [Amount] &lt;&gt; null),
    Trimmed  = <span class="fn">Table.TransformColumns</span>(NoNulls, {{<span class="str">"Region"</span>, Text.Trim}})
<span class="kw">in</span>
    Trimmed

<span class="cm">// استدعاء الـ Function على جدول جديد</span>
CleanedJan = CleanSalesTable(RawJanTable)
CleanedFeb = CleanSalesTable(RawFebTable)
      </div>
    </div>

    <div class="lesson-card">
      <h3>Folder Connector — دمج ملفات تلقائي</h3>
      <p>من أقوى سيناريوهات M-Code: استيراد مجلد كامل من ملفات Excel شهرية ودمجها تلقائياً:</p>
      <div class="code-block">
<span class="kw">let</span>
    <span class="cm">// 1. اقرأ المجلد كله</span>
    FolderPath = <span class="fn">Folder.Files</span>(<span class="str">"C:\\data\\monthly_sales\\"</span>),

    <span class="cm">// 2. صفّي ملفات Excel فقط</span>
    OnlyXLSX   = <span class="fn">Table.SelectRows</span>(FolderPath, 
                     each <span class="fn">Text.EndsWith</span>([Name], <span class="str">".xlsx"</span>)),

    <span class="cm">// 3. لكل ملف استخرج الجدول (Custom Column)</span>
    AddData    = <span class="fn">Table.AddColumn</span>(OnlyXLSX, <span class="str">"Data"</span>, each
                     <span class="fn">Excel.Workbook</span>([Content]){<span class="num">0</span>}[Data]),

    <span class="cm">// 4. ادمج كل الجداول فوق بعض</span>
    Combined   = <span class="fn">Table.Combine</span>(AddData[Data])
<span class="kw">in</span>
    Combined
      </div>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>Advanced Editor:</strong> في Power Query → View → Advanced Editor. هنا تشوف وتعدّل الكود M الكامل للاستعلام. Ctrl+Z للتراجع يشتغل هنا. اعتاد على قراءته بعد كل خطوة تعملها بالضغط على الأزرار.</p>
    </div>` }],
  },
  "relationships": {
    eyebrow: "03 · 01 — بناء النموذج الربطي",
    title: "العلاقات (Relationships)",
    lede: "كيف نربط الجداول ببعضها لتعمل ككيان واحد متصل.",
    en_eyebrow: "03 · 01 — Building the Relationship Model",
    en_lede: "How to connect tables to each other so they work as a single connected entity.",
    sectionId: "relationships",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>أنواع العلاقات (Cardinality)</h3>
      <ul>
        <li><strong>1 to Many (1:*):</strong> وهي العلاقة المثالية والمطلوبة دائماً! (عميل واحد في جدول العملاء، له حركات كثيرة في جدول المبيعات).</li>
        <li><strong>1 to 1 (1:1):</strong> نادرة، وغالباً تعني أنه كان يجب دمج الجدولين معاً.</li>
        <li><strong>Many to Many (*:*):</strong> خطيرة جداً ويجب تجنبها، لأنها تسبب نتائج خاطئة في الحسابات.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>اتجاه الفلترة (Cross Filter Direction)</h3>
      <p>السهم الموجود على خط العلاقة يحدد اتجاه انتقال الفلاتر:</p>
      <ul>
        <li><strong>Single (أحادي):</strong> الفلتر ينتقل من جداول الـ Dimension إلى جدول الـ Fact. (هذا هو الافتراضي والأكثر أماناً).</li>
        <li><strong>Both (ثنائي):</strong> الفلتر ينتقل في الاتجاهين. استخدمه بحذر شديد لأنه يبطئ النموذج.</li>
      </ul>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p>تأكد دائماً أن الأعمدة التي تبني عليها العلاقة (مثل Product ID) لها نفس نوع البيانات (Data Type) في الجدولين.</p>
    </div>

    <div class="warn-box">
      <div class="icon">🚨</div>
      <p><strong>خطر الفلترة الثنائية (Both Directional Filter):</strong> تغيير العلاقة لـ "Both" يبدو مغرياً لكنه يسبب 3 مشاكل خطيرة: (1) يبطئ النموذج بشكل ملحوظ لأن المحرك يحسب مسارات فلترة إضافية. (2) يؤدي لنتائج خاطئة عند وجود Many-to-Many ضمنية. (3) يجعل التشخيص صعباً جداً. الحل الصحيح: ابقَ على Single Direction واستخدم <strong>CROSSFILTER()</strong> في DAX فقط عند الحاجة.</p>
    </div>` }],
  },
  "datetable": {
    eyebrow: "03 · 02 — جدول التقويم",
    title: "جدول التقويم (Date Table)",
    lede: "الشرط الأساسي لأي دوال Time Intelligence. بدون جدول تقويم صحيح، كل حسابات الزمن ستفشل أو تعطي نتائج خاطئة.",
    en_eyebrow: "03 · 02 — Date Table",
    en_lede: "The basic requirement for any Time Intelligence function. Without a proper calendar table, all time calculations will fail or give wrong results.",
    sectionId: "datetable",
    blocks: [{ kind: "html", html: `<div class="warn-box">
      <div class="icon">🚨</div>
      <p><strong>قاعدة لازم تعرفها:</strong> Power BI لا يقبل دوال Time Intelligence (TOTALYTD, SAMEPERIODLASTYEAR...) إلا إذا كان عندك جدول تقويم مستمر (بدون فجوات في التواريخ) ومعلّم كـ Date Table.</p>
    </div>

    <div class="lesson-card">
      <h3>الطريقة 1 — CALENDARAUTO() (أسرع طريقة)</h3>
      <p>تعمل جدول تلقائي من أصغر تاريخ لأكبر تاريخ موجود في الموديل كله. استخدمها لو بياناتك مكتملة:</p>
      <div class="code-block">
<span class="cm">-- جدول تقويم بسيط تلقائي</span>
Date_Table = 
<span class="fn">ADDCOLUMNS</span>(
    <span class="fn">CALENDARAUTO</span>(),
    <span class="str">"Year"</span>,        <span class="fn">YEAR</span>([Date]),
    <span class="str">"Month Number"</span>, <span class="fn">MONTH</span>([Date]),
    <span class="str">"Month Name"</span>,   <span class="fn">FORMAT</span>([Date], <span class="str">"MMMM"</span>),
    <span class="str">"Quarter"</span>,      <span class="str">"Q"</span> &amp; <span class="fn">FORMAT</span>([Date], <span class="str">"Q"</span>),
    <span class="str">"Week Number"</span>,  <span class="fn">WEEKNUM</span>([Date]),
    <span class="str">"Day Name"</span>,     <span class="fn">FORMAT</span>([Date], <span class="str">"dddd"</span>),
    <span class="str">"Is Weekend"</span>,   <span class="fn">IF</span>(<span class="fn">WEEKDAY</span>([Date],2) >= <span class="num">6</span>, <span class="kw">TRUE</span>(), <span class="kw">FALSE</span>())
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>الطريقة 2 — CALENDAR() (تحكم كامل)</h3>
      <p>تحدد أنت نطاق التواريخ بدقة. مفيد لو عندك بيانات مستقبلية أو تاريخية خارج نطاق الداتا:</p>
      <div class="code-block">
<span class="cm">-- جدول تقويم من 2020 لنهاية السنة الحالية</span>
Date_Table = 
<span class="fn">ADDCOLUMNS</span>(
    <span class="fn">CALENDAR</span>(
        <span class="fn">DATE</span>(<span class="num">2020</span>, <span class="num">1</span>, <span class="num">1</span>),
        <span class="fn">DATE</span>(<span class="fn">YEAR</span>(<span class="fn">TODAY</span>()), <span class="num">12</span>, <span class="num">31</span>)
    ),
    <span class="str">"Year"</span>,           <span class="fn">YEAR</span>([Date]),
    <span class="str">"Month Num"</span>,      <span class="fn">MONTH</span>([Date]),
    <span class="str">"Month Name AR"</span>,  <span class="fn">SWITCH</span>(<span class="fn">MONTH</span>([Date]),
                         <span class="num">1</span>,<span class="str">"يناير"</span>, <span class="num">2</span>,<span class="str">"فبراير"</span>, <span class="num">3</span>,<span class="str">"مارس"</span>, <span class="num">4</span>,<span class="str">"أبريل"</span>,
                         <span class="num">5</span>,<span class="str">"مايو"</span>, <span class="num">6</span>,<span class="str">"يونيو"</span>, <span class="num">7</span>,<span class="str">"يوليو"</span>, <span class="num">8</span>,<span class="str">"أغسطس"</span>,
                         <span class="num">9</span>,<span class="str">"سبتمبر"</span>, <span class="num">10</span>,<span class="str">"أكتوبر"</span>, <span class="num">11</span>,<span class="str">"نوفمبر"</span>, <span class="str">"ديسمبر"</span>),
    <span class="str">"Quarter"</span>,        <span class="str">"Q"</span> &amp; <span class="fn">FORMAT</span>([Date], <span class="str">"Q"</span>),
    <span class="str">"Year-Month"</span>,     <span class="fn">FORMAT</span>([Date], <span class="str">"YYYY-MM"</span>),
    <span class="str">"Sort Month"</span>,     <span class="fn">YEAR</span>([Date]) * <span class="num">100</span> + <span class="fn">MONTH</span>([Date])
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>خطوات تفعيل جدول التقويم (Mark as Date Table)</h3>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>روح على Model View</h4>
            <p>افتح شاشة العلاقات واختار جدول Date_Table.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>Table Tools → Mark as Date Table</h4>
            <p>من القائمة العلوية اختار العمود Date وضغط Mark as Date Table. Power BI هيتحقق أن التواريخ مستمرة وفريدة.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>ربط الجدول بالـ Fact Table</h4>
            <p>اعمل علاقة 1:Many من Date_Table[Date] إلى Fact_Sales[OrderDate] بفلترة أحادية (Single).</p>
          </div>
        </div>
      </div>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>Sort Month Name:</strong> عمود Month Name بيرتب أبجدياً (أبريل قبل يناير!). عشان تصلح ده، في الـ Data View اختار عمود Month Name ثم Column Tools → Sort by Column → اختار Month Num.</p>
    </div>` }],
  },
  "hierarchies": {
    eyebrow: "03 · 03 — التصنيفات الهرمية",
    title: "التصنيفات الهرمية — Hierarchies",
    lede: "الـ Hierarchies تتيح للمستخدم الانتقال من مستوى تحليلي لآخر بضغطة واحدة — من السنة للربع للشهر للأسبوع للوم، أو من الدولة للمدينة للمنطقة.",
    en_eyebrow: "03 · 03 — Hierarchies",
    en_lede: "Hierarchies allow users to move from one analytical level to another with one click — from year to quarter to month to week to day, or from country to city to region.",
    sectionId: "hierarchies",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>ما هي الـ Hierarchy ولماذا تهم؟</h3>
      <p>هي ترتيب هرمي لمستويات بيانات مترابطة — بتيجي مع ميزة <strong>Drill Down</strong> اللي تخلي المستخدم ينزل من مستوى عام لمستوى تفصيلي بنقرة.</p>
      <ul>
        <li>هرمية الوقت: السنة ← الربع ← الشهر ← اليوم</li>
        <li>هرمية الجغرافيا: الدولة ← المنطقة ← المدينة ← الفرع</li>
        <li>هرمية المنتجات: الفئة ← الفئة الفرعية ← المنتج</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>إنشاء Hierarchy في Power BI Desktop</h3>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>اختيار العمود الأعلى مستوى</h4>
            <p>في Data Pane، اضغط كليك يمين على العمود الأعلى (مثلاً <strong>Year</strong>) واختار <strong>Create Hierarchy</strong>.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>إضافة المستويات التالية</h4>
            <p>اسحب الأعمدة الباقية (Quarter, Month, Day) وأفلتها على الـ Hierarchy، أو اضغط كليك يمين عليها واختار <strong>Add to Hierarchy</strong>.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>ترتيب المستويات</h4>
            <p>اسحب المستويات لترتيب الهرم من الأعلى (الأعم) للأسفل (الأكثر تفصيلاً).</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">4</div>
          <div class="step-content">
            <h4>استخدام في التقرير</h4>
            <p>اسحب الـ Hierarchy للـ Visual — ستظهر أسهم Drill Down/Up تلقائياً.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>أزرار Drill في الـ Visuals</h3>
      <ul>
        <li><strong>▼ (Drill Down):</strong> ينزل مستوى واحد لكل القيم المرئية.</li>
        <li><strong>⬇ (Go to next level):</strong> يعرض المستوى التالي لكل القيم دفعة واحدة.</li>
        <li><strong>▲ (Drill Up):</strong> يرجع للمستوى الأعلى.</li>
        <li><strong>نقر مزدوج على قيمة:</strong> Drill Down لهذه القيمة تحديداً.</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>نصيحة:</strong> جدول التقويم (Date Table) بتاعك يجب أن يحتوي على أعمدة Year, QuarterNum, MonthNum, MonthName, Day لبناء هرمية زمنية احترافية — الأرقام للترتيب والأسماء للعرض.</p>
    </div>` }],
  },
  "dax1": {
    eyebrow: "04 · 01 — لغة التحليل DAX",
    title: "أساسيات لغة DAX",
    lede: "مقدمة عن لغة المعادلات الخاصة بـ Power BI (Data Analysis Expressions).",
    en_eyebrow: "04 · 01 — DAX Analysis Language",
    en_lede: "Introduction to Power BI's formula language (Data Analysis Expressions).",
    sectionId: "dax1",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>الفرق بين Calculated Column و Measure</h3>
      <p>أهم درس في DAX على الإطلاق!</p>
    </div>

    <table class="compare-table">
      <tr>
        <th>العمود المحسوب (Calculated Column)</th>
        <th>القياس (Measure)</th>
      </tr>
      <tr>
        <td>يضيف عمود فعلي في الجدول ويأخذ مساحة من الرام.</td>
        <td>معادلة وهمية لا تأخذ مساحة، تُحسب فقط عند وضعها في شارت.</td>
      </tr>
      <tr>
        <td>يُحسب صفا بصف (Row Context).</td>
        <td>يُحسب بناءً على الفلاتر الإجمالية (Filter Context).</td>
      </tr>
      <tr>
        <td>نستخدمه لعمل فئات (سعر عالي/منخفض).</td>
        <td>نستخدمه للحسابات الرقمية (إجمالي، متوسط، نسبة). <span class="yes">✔ أفضل</span></td>
      </tr>
    </table>

    <div class="lesson-card">
      <h3>أمثلة لدوال أساسية</h3>
      <div class="code-block">
<span class="cm">-- حساب إجمالي المبيعات (Measure)</span>
Total Sales = <span class="fn">SUM</span>(Sales[Amount])

<span class="cm">-- حساب عدد العمليات</span>
Total Orders = <span class="fn">COUNTROWS</span>(Sales)

<span class="cm">-- عد المنتجات الفريدة المباعة</span>
Unique Products = <span class="fn">DISTINCTCOUNT</span>(Sales[ProductID])
      </div>
    </div>` }],
  },
  "dax-logical": {
    eyebrow: "04 · 02 — IF و SWITCH",
    title: "دوال المنطق (Logical Functions) — IF & SWITCH",
    lede: "التفرع الشرطي في DAX. أساس بناء أي منطق ذكي داخل Measures والأعمدة المحسوبة.",
    en_eyebrow: "04 · 02 — IF and SWITCH",
    en_lede: "Conditional branching in DAX. The basis for building any smart logic in Measures and Calculated Columns.",
    sectionId: "dax-logical",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>IF — الشرط البسيط</h3>
      <p>البنية: <code>IF( &lt;Condition&gt;, &lt;TrueResult&gt;, [FalseResult] )</code></p>
      <div class="code-block">
<span class="cm">-- تصنيف الأداء: فوق الـ Target أم تحته؟</span>
Performance Flag = 
<span class="fn">IF</span>(
    [Total Sales] >= [Sales Target],
    <span class="str">"✅ On Track"</span>,
    <span class="str">"❌ Below Target"</span>
)

<span class="cm">-- استخدام IF لتجنب القسمة على صفر (بدل DIVIDE)</span>
Margin % = 
<span class="fn">IF</span>(
    [Total Revenue] = <span class="num">0</span>,
    <span class="fn">BLANK</span>(),
    <span class="fn">DIVIDE</span>([Total Profit], [Total Revenue])
)

<span class="cm">-- IF متداخل (Nested) — اقرأ الملاحظة أسفله!</span>
Score Label = 
<span class="fn">IF</span>([Score] >= <span class="num">90</span>, <span class="str">"Excellent"</span>,
    <span class="fn">IF</span>([Score] >= <span class="num">70</span>, <span class="str">"Good"</span>,
        <span class="fn">IF</span>([Score] >= <span class="num">50</span>, <span class="str">"Average"</span>, <span class="str">"Poor"</span>)
    )
)
      </div>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>IF المتداخل = مشكلة:</strong> كلما زادت المستويات، كلما صعب القراءة والتعديل. أكثر من مستويين → انتقل لـ SWITCH(TRUE()) فوراً.</p>
    </div>

    <div class="lesson-card">
      <h3>SWITCH — بديل IF الاحترافي</h3>
      <p>نوعان: SWITCH للقيم الثابتة، وSWITCH(TRUE()) للشروط المركبة.</p>
      <div class="code-block">
<span class="cm">-- النوع 1: SWITCH للقيم الثابتة</span>
Month Name AR = 
<span class="fn">SWITCH</span>(
    <span class="fn">MONTH</span>('Calendar'[Date]),
    <span class="num">1</span>,  <span class="str">"يناير"</span>,
    <span class="num">2</span>,  <span class="str">"فبراير"</span>,
    <span class="num">3</span>,  <span class="str">"مارس"</span>,
    <span class="num">4</span>,  <span class="str">"أبريل"</span>,
    <span class="num">5</span>,  <span class="str">"مايو"</span>,
    <span class="num">6</span>,  <span class="str">"يونيو"</span>,
    <span class="num">7</span>,  <span class="str">"يوليو"</span>,
    <span class="num">8</span>,  <span class="str">"أغسطس"</span>,
    <span class="num">9</span>,  <span class="str">"سبتمبر"</span>,
    <span class="num">10</span>, <span class="str">"أكتوبر"</span>,
    <span class="num">11</span>, <span class="str">"نوفمبر"</span>,
    <span class="str">"ديسمبر"</span>  <span class="cm">-- القيمة الافتراضية</span>
)

<span class="cm">-- النوع 2: SWITCH(TRUE()) للشروط المركبة</span>
<span class="cm">-- أداء الفروع المصرية بناءً على المبيعات</span>
Branch Performance = 
<span class="fn">SWITCH</span>(
    <span class="kw">TRUE</span>(),
    [Total Sales] >= <span class="num">500000</span>, <span class="str">"🏆 Elite Branch"</span>,
    [Total Sales] >= <span class="num">200000</span>, <span class="str">"⭐ High Performer"</span>,
    [Total Sales] >= <span class="num">100000</span>, <span class="str">"📈 Growing"</span>,
    [Total Sales] >= <span class="num">50000</span>,  <span class="str">"⚠️ Needs Support"</span>,
    <span class="str">"🔴 Critical"</span>
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>AND / OR / NOT — الشروط المركبة</h3>
      <div class="code-block">
<span class="cm">-- AND: الشرطان صحيحان معاً</span>
High Value Active = 
<span class="fn">IF</span>(
    <span class="fn">AND</span>([Total Sales] > <span class="num">100000</span>, [Customer Status] = <span class="str">"Active"</span>),
    <span class="str">"Premium"</span>, <span class="str">"Standard"</span>
)

<span class="cm">-- أو بالصيغة المختصرة (&&)</span>
High Value Active = 
<span class="fn">IF</span>(
    [Total Sales] > <span class="num">100000</span> &amp;&amp; [Customer Status] = <span class="str">"Active"</span>,
    <span class="str">"Premium"</span>, <span class="str">"Standard"</span>
)

<span class="cm">-- OR: أحد الشرطين صحيح (||)</span>
Flagged = 
<span class="fn">IF</span>(
    [Returns] > <span class="num">5</span> || [Complaints] > <span class="num">3</span>,
    <span class="str">"Review Needed"</span>, <span class="str">"OK"</span>
)
      </div>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>IFERROR و ISBLANK:</strong> لو الـ Measure ممكن يرجع خطأ (مثل قسمة) استخدم <code>IFERROR([Measure], 0)</code>. لو ممكن يرجع BLANK استخدم <code>IF(ISBLANK([Measure]), "لا يوجد", [Measure])</code>.</p>
    </div>` }],
  },
  "calculate": {
    eyebrow: "04 · 03 — CALCULATE بعمق",
    title: "CALCULATE بعمق — قلب DAX",
    lede: "CALCULATE هي أقوى دالة في DAX وأكثرها غموضاً. فهمها الصحيح هو الفرق بين مبتدئ ومحترف.",
    en_eyebrow: "04 · 03 — CALCULATE Deep Dive",
    en_lede: "CALCULATE is the most powerful and most mysterious function in DAX. Understanding it correctly is the difference between a beginner and a professional.",
    sectionId: "calculate",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>كيف تعمل CALCULATE؟ — Context Transition</h3>
      <p>CALCULATE تقوم بشيئين في نفس الوقت: تحسب المعادلة الأولى، ثم تعدّل الـ Filter Context بناءً على الفلاتر اللي حددتها. الترتيب مهم:</p>
      <div class="code-block">
<span class="cm">-- البنية الأساسية</span>
CALCULATE( &lt;Expression&gt;, [Filter1], [Filter2], ... )

<span class="cm">-- مثال: مبيعات منطقة الشمال فقط — بغض النظر عن فلتر الـ Slicer</span>
North Sales = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    Dim_Region[Region] = <span class="str">"North"</span>
)

<span class="cm">-- مثال: مبيعات سنة 2024 فقط</span>
Sales 2024 = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    Dim_Date[Year] = <span class="num">2024</span>
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>ALL vs REMOVEFILTERS vs ALLEXCEPT</h3>
      <p>الثلاثة بيمسحوا الفلاتر، لكن بطرق مختلفة:</p>
      <div class="code-block">
<span class="cm">-- ALL: يمسح كل الفلاتر عن جدول أو عمود</span>
% of Total = 
<span class="fn">DIVIDE</span>(
    [Total Sales],
    <span class="fn">CALCULATE</span>([Total Sales], <span class="fn">ALL</span>(Fact_Sales)),
    <span class="num">0</span>
)

<span class="cm">-- REMOVEFILTERS: نفس ALL لكن أوضح في النية (best practice)</span>
% of Total = 
<span class="fn">DIVIDE</span>(
    [Total Sales],
    <span class="fn">CALCULATE</span>([Total Sales], <span class="fn">REMOVEFILTERS</span>(Dim_Product)),
    <span class="num">0</span>
)

<span class="cm">-- ALLEXCEPT: يمسح كل الفلاتر ما عدا أعمدة معينة</span>
<span class="cm">-- هنا: نسبة كل منتج من إجمالي فئته (مع الاحتفاظ بفلتر الفئة)</span>
% of Category = 
<span class="fn">DIVIDE</span>(
    [Total Sales],
    <span class="fn">CALCULATE</span>([Total Sales], <span class="fn">ALLEXCEPT</span>(Dim_Product, Dim_Product[Category])),
    <span class="num">0</span>
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>KEEPFILTERS — إضافة فلتر بدون استبداله</h3>
      <p>عادةً CALCULATE بيستبدل الفلتر الموجود. KEEPFILTERS بيضيف الفلتر الجديد على الموجود (تقاطع):</p>
      <div class="code-block">
<span class="cm">-- بدون KEEPFILTERS: يعرض مبيعات الشمال حتى لو الـ Slicer على الجنوب</span>
North Only = <span class="fn">CALCULATE</span>([Total Sales], Dim_Region[Region] = <span class="str">"North"</span>)

<span class="cm">-- مع KEEPFILTERS: لو الـ Slicer على الجنوب → النتيجة BLANK</span>
North Filtered = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">KEEPFILTERS</span>(Dim_Region[Region] = <span class="str">"North"</span>)
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>Context Transition في Calculated Columns</h3>
      <p>لما بتستخدم CALCULATE جوه Calculated Column، الـ Row Context بيتحوّل تلقائياً لـ Filter Context. ده مهم جداً وبيسبب confusion:</p>
      <div class="code-block">
<span class="cm">-- هذا العمود: لكل صف يحسب نسبة المبيعات من إجمالي نفس الفئة</span>
<span class="cm">-- CALCULATE هنا بتعمل Context Transition: Row → Filter</span>
Sales % of Category = 
<span class="fn">DIVIDE</span>(
    Fact_Sales[Amount],
    <span class="fn">CALCULATE</span>(
        <span class="fn">SUM</span>(Fact_Sales[Amount]),
        <span class="fn">ALLEXCEPT</span>(Fact_Sales, Fact_Sales[Category])
    ),
    <span class="num">0</span>
)
      </div>
    </div>

    <div class="tip-box">
      <div class="icon">🧠</div>
      <p><strong>Context Transition — بالبساطة:</strong> في DAX يوجد نوعان من السياق: <strong>Row Context</strong> (أنت في صف معين — تعرف قيمة كل عمود في هذا الصف) و<strong>Filter Context</strong> (مجموعة فلاتر تحدد أي الصفوف تُحسب). عندما تضع <code>CALCULATE</code>، هي تُحوّل الـ Row Context إلى Filter Context تلقائياً — وهذا يسمح للـ Measures بأن تعمل داخل Calculated Columns. بدون فهم هذا التحويل، ستحصل على أرقام لا تتوقعها.</p>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>ترتيب تنفيذ CALCULATE:</strong> الفلاتر الخارجية تُطبَّق أولاً ← ثم فلاتر CALCULATE تعدّل عليها ← ثم تُحسب Expression. فهم هذا الترتيب يحل 90% من مشاكل DAX.</p>
    </div>` }],
  },
  "relationships-dax": {
    eyebrow: "04 · 04 — العلاقات داخل DAX",
    title: "إدارة العلاقات في DAX — RELATED & USERELATIONSHIP & CROSSFILTER",
    lede: "أحياناً البنية الثابتة للموديل لا تكفي. هذه الدوال تمنحك تحكماً كاملاً في العلاقات داخل الـ Measures.",
    en_eyebrow: "04 · 04 — Managing Relationships in DAX",
    en_lede: "Sometimes the fixed structure of the model is not enough. These functions give you complete control over relationships inside Measures.",
    sectionId: "relationships-dax",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>RELATED — جلب قيمة من جدول مرتبط</h3>
      <p>تعمل فقط في <strong>Calculated Columns</strong>. تجلب قيمة من جدول الـ Dimension إلى جدول الـ Fact عبر علاقة قائمة:</p>
      <div class="code-block">
<span class="cm">-- في Fact_Sales: أضف عمود باسم الفئة من Dim_Product</span>
Product Category = <span class="fn">RELATED</span>(Dim_Product[Category])

<span class="cm">-- الآن تقدر تستخدمه في Calculated Column تاني</span>
Is Electronics = 
<span class="fn">IF</span>(
    <span class="fn">RELATED</span>(Dim_Product[Category]) = <span class="str">"Electronics"</span>,
    <span class="str">"Yes"</span>, <span class="str">"No"</span>
)

<span class="cm">-- في Measures: استخدم RELATEDTABLE بدل RELATED</span>
<span class="cm">-- (RELATED لا تعمل في Measures)</span>
Products Sold = <span class="fn">COUNTROWS</span>(<span class="fn">RELATEDTABLE</span>(Dim_Product))
      </div>
    </div>

    <div class="lesson-card">
      <h3>USERELATIONSHIP — تفعيل علاقة غير نشطة</h3>
      <p>مشكلة شائعة: جدول الـ Fact فيه تاريخين (OrderDate و DeliveryDate) لكن الموديل يسمح بعلاقة نشطة واحدة فقط مع Date Table. الحل: اعمل العلاقتين وفعّل اللي تحتاجه بـ USERELATIONSHIP:</p>
      <div class="code-block">
<span class="cm">-- الإعداد في الموديل:</span>
<span class="cm">-- علاقة نشطة:   Date[Date] ← Fact[OrderDate]</span>
<span class="cm">-- علاقة خاملة:  Date[Date] ← Fact[DeliveryDate]</span>

<span class="cm">-- Measure يعمل على تاريخ الطلب (الافتراضي)</span>
Sales by Order Date = [Total Sales]

<span class="cm">-- Measure يعمل على تاريخ التسليم (يُفعّل العلاقة الخاملة)</span>
Sales by Delivery Date = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">USERELATIONSHIP</span>(Fact_Sales[DeliveryDate], 'Date'[Date])
)

<span class="cm">-- مثال واقعي: قياس الإيرادات المحصّلة (Collected) مقابل المطلوبة (Invoiced)</span>
Revenue Collected = 
<span class="fn">CALCULATE</span>(
    [Total Revenue],
    <span class="fn">USERELATIONSHIP</span>(Fact_Invoices[PaymentDate], 'Date'[Date])
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>CROSSFILTER — تغيير اتجاه الفلترة برمجياً</h3>
      <p>بدل تغيير العلاقة للـ Both في الموديل (وما يسببه من بطء)، استخدم CROSSFILTER داخل Measure فقط عند الحاجة:</p>
      <div class="code-block">
<span class="cm">-- مشكلة: عدد العملاء الذين لم يشتروا بعد</span>
<span class="cm">-- في الموديل العادي (Single direction) Dim_Customer لا تُفلتر من Fact_Sales</span>

<span class="cm">-- الحل بـ CROSSFILTER:</span>
Customers With No Sales = 
<span class="fn">CALCULATE</span>(
    <span class="fn">DISTINCTCOUNT</span>(Dim_Customer[CustomerID]),
    <span class="fn">CROSSFILTER</span>(Dim_Customer[CustomerID], Fact_Sales[CustomerID], BOTH),
    <span class="fn">ISBLANK</span>(<span class="fn">CALCULATE</span>(<span class="fn">COUNTROWS</span>(Fact_Sales)))
)

<span class="cm">-- CROSSFILTER القيم: NONE, ONEWAY, BOTH, ONEWAY_LEFTFILTERSRIGHT</span>

<span class="cm">-- مثال أبسط: عدد المنتجات التي لم تُباع أبداً</span>
Unsold Products = 
<span class="fn">CALCULATE</span>(
    <span class="fn">COUNTROWS</span>(Dim_Product),
    <span class="fn">CROSSFILTER</span>(Dim_Product[ProductID], Fact_Sales[ProductID], BOTH),
    <span class="fn">ISBLANK</span>(<span class="fn">CALCULATE</span>(<span class="fn">COUNTROWS</span>(Fact_Sales)))
)
      </div>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>CROSSFILTER في Measure = آمن. Both في الموديل = خطر:</strong> CROSSFILTER يفعّل الفلترة الثنائية فقط لحظة تنفيذ الـ Measure المحدد. أما تغيير العلاقة لـ Both في الموديل، فيؤثر على كل المعادلات في التقرير ويسبب نتائج غير متوقعة في أماكن أخرى.</p>
    </div>` }],
  },
  "iterators": {
    eyebrow: "04 · 05 — دوال التكرار",
    title: "Iterator Functions — دوال التكرار",
    lede: "دوال تمشي صف بصف على الجدول وتعمل حساب لكل صف، ثم تجمع النتائج. أداة لا غنى عنها لحسابات الإيرادات والتكاليف والهوامش.",
    en_eyebrow: "04 · 05 — Iterator Functions",
    en_lede: "Functions that walk row by row through a table and perform a calculation for each row, then sum the results. An indispensable tool for revenue, cost, and margin calculations.",
    sectionId: "iterators",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>الفرق بين SUM و SUMX</h3>
      <p>SUM تجمع عمود موجود. SUMX تحسب تعبيراً (expression) لكل صف ثم تجمع النتائج:</p>
      <div class="code-block">
<span class="cm">-- SUM: بتجمع عمود Amount الموجود في الجدول</span>
Total Sales = <span class="fn">SUM</span>(Fact_Sales[Amount])

<span class="cm">-- SUMX: بتضرب السعر في الكمية صف بصف ثم تجمع</span>
<span class="cm">-- مفيد لو مفيش عمود Amount وعندك Qty و Price بس</span>
Total Revenue = <span class="fn">SUMX</span>(Fact_Sales, Fact_Sales[Qty] * Fact_Sales[UnitPrice])

<span class="cm">-- مثال متقدم: حساب هامش الربح صف بصف</span>
Total Profit = 
<span class="fn">SUMX</span>(
    Fact_Sales,
    Fact_Sales[Qty] * (Fact_Sales[UnitPrice] - Fact_Sales[UnitCost])
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>AVERAGEX, MAXX, MINX, COUNTX</h3>
      <div class="code-block">
<span class="cm">-- متوسط قيمة الفاتورة (مش متوسط العمود — بيحسب لكل فاتورة ثم يعمل متوسط)</span>
Avg Order Value = 
<span class="fn">AVERAGEX</span>(
    <span class="fn">VALUES</span>(Fact_Sales[OrderID]),
    <span class="fn">CALCULATE</span>(<span class="fn">SUM</span>(Fact_Sales[Amount]))
)

<span class="cm">-- أعلى مبيعات يوم واحد</span>
Max Daily Sales = 
<span class="fn">MAXX</span>(
    <span class="fn">VALUES</span>(Dim_Date[Date]),
    <span class="fn">CALCULATE</span>([Total Sales])
)

<span class="cm">-- عدد الأوردرات التي تحتوي على أكثر من 3 بنود</span>
Orders Above 3 Lines = 
<span class="fn">COUNTX</span>(
    <span class="fn">FILTER</span>(
        <span class="fn">VALUES</span>(Fact_Sales[OrderID]),
        <span class="fn">CALCULATE</span>(<span class="fn">COUNTROWS</span>(Fact_Sales)) > <span class="num">3</span>
    ),
    Fact_Sales[OrderID]
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>PRODUCTX — ضرب القيم</h3>
      <div class="code-block">
<span class="cm">-- حساب compound growth rate (ضرب نسب النمو)</span>
Compound Factor = 
<span class="fn">PRODUCTX</span>(
    Dim_Date,
    <span class="num">1</span> + [Monthly Growth Rate]
)
      </div>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>Iterator داخل Iterator = بطء شديد:</strong> تجنب وضع SUMX جوّا SUMX جوّا SUMX. الموديل هيتباطأ بشكل أسّي. لو محتاجها، استخدم Calculated Column أولاً لتخزين الحساب الداخلي.</p>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>قاعدة الاختيار:</strong> لو الحساب يحتاج ضرب أو قسمة أو منطق على مستوى الصف → SUMX. لو بتجمع عمود موجود فقط → SUM (أسرع).</p>
    </div>` }],
  },
  "dax2": {
    eyebrow: "04 · 06 — ذكاء الوقت",
    title: "دوّال الزمن (Time Intelligence)",
    lede: "كيف تقارن مبيعات هذا العام بالعام الماضي أو الشهر الماضي؟",
    en_eyebrow: "04 · 06 — Time Functions",
    en_lede: "How do you compare this year's sales with last year's or last month's?",
    sectionId: "dax2",
    blocks: [{ kind: "html", html: `<div class="warn-box">
      <div class="icon">🚨</div>
      <p><strong>شرط أساسي:</strong> لكي تعمل دوال الزمن، يجب أن يكون لديك جدول تقويم (Calendar / Date Table) مربوط بجدول الحركات بعلاقة 1 إلى متعدد.</p>
    </div>

    <div class="lesson-card">
      <h3>أهم دوال الزمن في DAX</h3>
      <div class="code-block">
<span class="cm">-- مبيعات السنة حتى اليوم (Year To Date)</span>
YTD Sales = <span class="fn">TOTALYTD</span>([Total Sales], 'Calendar'[Date])

<span class="cm">-- مبيعات نفس الفترة من العام الماضي</span>
Last Year Sales = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">SAMEPERIODLASTYEAR</span>('Calendar'[Date])
)

<span class="cm">-- نسبة النمو مقارنة بالعام الماضي (YoY Growth %)</span>
YoY Growth = 
<span class="fn">DIVIDE</span>(
    [Total Sales] - [Last Year Sales],
    [Last Year Sales], 
    <span class="num">0</span> <span class="cm">-- لمنع خطأ القسمة على صفر</span>
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>DATEADD — مرونة كاملة في التحريك الزمني</h3>
      <div class="code-block">
<span class="cm">-- مبيعات الشهر اللي فات</span>
Sales Last Month = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">PREVIOUSMONTH</span>('Calendar'[Date])
)

<span class="cm">-- مبيعات قبل 3 شهور</span>
Sales 3M Ago = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">DATEADD</span>('Calendar'[Date], <span class="num">-3</span>, MONTH)
)

<span class="cm">-- مبيعات نفس الربع من السنة الماضية</span>
Sales PQ = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">DATEADD</span>('Calendar'[Date], <span class="num">-1</span>, QUARTER)
)

<span class="cm">-- MTD: مبيعات من أول الشهر للتاريخ الحالي</span>
Sales MTD = <span class="fn">TOTALMTD</span>([Total Sales], 'Calendar'[Date])
      </div>
    </div>` }],
  },
  "time-intel-pro": {
    eyebrow: "04 · 07 — ذكاء الوقت المتقدم",
    title: "Time Intelligence Pro — المتوسطات والمقارنات المرنة",
    lede: "ما وراء YTD وYoY: المتوسطات المتحركة، DATESINPERIOD، وPARALLELPERIOD للمقارنات المخصصة.",
    en_eyebrow: "04 · 07 — Advanced Time Intelligence",
    en_lede: "Beyond YTD and YoY: Moving averages, DATESINPERIOD, and PARALLELPERIOD for flexible comparisons.",
    sectionId: "time-intel-pro",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>DATESINPERIOD — نافذة زمنية متحركة</h3>
      <p>بدل حساب YTD أو الشهر الماضي، DATESINPERIOD تعطيك نافذة زمنية بحجم تحدده أنت — آخر 7 أيام، آخر 30 يوم، آخر 3 أشهر:</p>
      <div class="code-block">
<span class="cm">-- البنية: DATESINPERIOD( DateColumn, LastDate, Interval, IntervalType )</span>

<span class="cm">-- المبيعات في آخر 7 أيام (نافذة متحركة)</span>
Sales Last 7 Days = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">DATESINPERIOD</span>('Date'[Date], <span class="fn">MAX</span>('Date'[Date]), <span class="num">-7</span>, DAY)
)

<span class="cm">-- المبيعات في آخر 30 يوم</span>
Sales Last 30 Days = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">DATESINPERIOD</span>('Date'[Date], <span class="fn">MAX</span>('Date'[Date]), <span class="num">-30</span>, DAY)
)

<span class="cm">-- المبيعات في آخر 3 أشهر</span>
Sales Last 3M = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">DATESINPERIOD</span>('Date'[Date], <span class="fn">MAX</span>('Date'[Date]), <span class="num">-3</span>, MONTH)
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>المتوسط المتحرك (Moving Average)</h3>
      <p>المتوسط المتحرك يُخفف التذبذبات اليومية ويُظهر الاتجاه الحقيقي. مثالي لتقارير المبيعات والأداء:</p>
      <div class="code-block">
<span class="cm">-- متوسط متحرك لآخر 7 أيام</span>
Moving Avg 7D = 
<span class="kw">VAR</span> Last7Days = 
    <span class="fn">DATESINPERIOD</span>('Date'[Date], <span class="fn">MAX</span>('Date'[Date]), <span class="num">-7</span>, DAY)
<span class="kw">VAR</span> DaysWithData = 
    <span class="fn">CALCULATE</span>(<span class="fn">DISTINCTCOUNT</span>('Date'[Date]), Last7Days, Fact_Sales[Amount] > <span class="num">0</span>)
<span class="kw">RETURN</span>
    <span class="fn">DIVIDE</span>(
        <span class="fn">CALCULATE</span>([Total Sales], Last7Days),
        DaysWithData,
        <span class="num">0</span>
    )

<span class="cm">-- متوسط متحرك لآخر 3 أشهر (مشهور في تقارير الإدارة)</span>
Moving Avg 3M = 
<span class="fn">DIVIDE</span>(
    <span class="fn">CALCULATE</span>(
        [Total Sales],
        <span class="fn">DATESINPERIOD</span>('Date'[Date], <span class="fn">MAX</span>('Date'[Date]), <span class="num">-3</span>, MONTH)
    ),
    <span class="num">3</span>
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>PARALLELPERIOD — مقارنة فترات كاملة</h3>
      <p>الفرق بين DATEADD وPARALLELPERIOD: DATEADD تحرّك التواريخ بمقدار محدد، PARALLELPERIOD ترجع الفترة الكاملة المقابلة (شهر كامل أو ربع كامل):</p>
      <div class="code-block">
<span class="cm">-- DATEADD: تحريك النافذة الحالية بـ 12 شهر للخلف</span>
<span class="cm">-- لو أنت في مارس 2025 → يرجع مارس 2024 فقط</span>
Sales DATEADD LY = 
<span class="fn">CALCULATE</span>([Total Sales], <span class="fn">DATEADD</span>('Date'[Date], <span class="num">-12</span>, MONTH))

<span class="cm">-- PARALLELPERIOD: الفترة الكاملة المقابلة</span>
<span class="cm">-- لو الـ Slicer على Q1 2025 → يرجع Q1 2024 كامل</span>
Sales Parallel LY = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">PARALLELPERIOD</span>('Date'[Date], <span class="num">-1</span>, YEAR)
)

<span class="cm">-- مقارنة الربع الحالي مع الربع الماضي</span>
Sales Prev Quarter = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">PARALLELPERIOD</span>('Date'[Date], <span class="num">-1</span>, QUARTER)
)

<span class="cm">-- نسبة النمو مقارنة بنفس الفترة من السنة الماضية (مع PARALLELPERIOD)</span>
YoY Growth % = 
<span class="kw">VAR</span> CurrentSales  = [Total Sales]
<span class="kw">VAR</span> PreviousSales  = <span class="fn">CALCULATE</span>([Total Sales], <span class="fn">PARALLELPERIOD</span>('Date'[Date], <span class="num">-1</span>, YEAR))
<span class="kw">RETURN</span>
    <span class="fn">DIVIDE</span>(CurrentSales - PreviousSales, PreviousSales, <span class="fn">BLANK</span>())
      </div>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>متى تستخدم أيها؟</strong> DATESINPERIOD للنوافذ الثابتة (آخر N يوم/شهر). DATEADD لتحريك النافذة الحالية. PARALLELPERIOD لمقارنة الفترات الكاملة (ربع كامل، سنة كاملة). SAMEPERIODLASTYEAR = PARALLELPERIOD بـ -1 YEAR مع فارق دقيق في التعامل مع السنوات الكبيسة.</p>
    </div>` }],
  },
  "fieldparams": {
    eyebrow: "04 · 08 — Field Parameters",
    title: "Field Parameters — المؤشرات الديناميكية",
    lede: "تمكين المستخدم من تغيير محتوى الشارت كاملاً (مبيعات / ربح / كمية) بضغطة زر — بدون إنشاء شارتات متعددة.",
    en_eyebrow: "04 · 08 — Field Parameters",
    en_lede: "Empower the user to change the entire chart content (Sales/Profit/Quantity) with one click — without creating multiple charts.",
    sectionId: "fieldparams",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>ما هو الـ Field Parameter؟</h3>
      <p>Field Parameter هو جدول خاص بيحتوي على قائمة من الـ Measures أو الأعمدة. لما تضعه كـ Slicer، المستخدم يختار أي Measure يريد رؤيته في الشارت في نفس اللحظة.</p>
    </div>

    <div class="lesson-card">
      <h3>إنشاء Field Parameter — خطوة بخطوة</h3>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>Modeling → New Parameter → Fields</h4>
            <p>من القائمة العلوية اختار New Parameter ثم Fields.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>أضف الـ Measures المطلوبة</h4>
            <p>مثلاً: Total Sales، Total Profit، Total Qty. Power BI هيسمّيه Parameter1 وهتقدر تغيّر الاسم.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>Power BI يولّد الجدول تلقائياً</h4>
            <p>هتلاقي جدول جديد في الموديل وفيه 3 أعمدة: Fields (الاسم)، Order (الترتيب)، وعمود بنفس اسم الـ Parameter.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">4</div>
          <div class="step-content">
            <h4>استخدمه في الشارت والـ Slicer</h4>
            <p>ضع عمود Parameter في الـ Y-Axis للشارت. وضع عمود Fields في Slicer. المستخدم يختار وتتغير البيانات فوراً.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>الكود المولّد تلقائياً — وكيف تعدّله</h3>
      <div class="code-block">
<span class="cm">-- Power BI يولّد هذا الجدول تلقائياً</span>
KPI Selector = {
    (<span class="str">"Total Sales"</span>,   <span class="fn">NAMEOF</span>('Measures'[Total Sales]),   <span class="num">0</span>),
    (<span class="str">"Total Profit"</span>,  <span class="fn">NAMEOF</span>('Measures'[Total Profit]),  <span class="num">1</span>),
    (<span class="str">"Total Qty"</span>,     <span class="fn">NAMEOF</span>('Measures'[Total Qty]),     <span class="num">2</span>)
}

<span class="cm">-- لإضافة Measure جديد يدوياً:</span>
<span class="cm">-- أضف سطر جديد بنفس البنية</span>
    (<span class="str">"Avg Order Value"</span>, <span class="fn">NAMEOF</span>('Measures'[Avg Order Value]), <span class="num">3</span>)
      </div>
    </div>

    <div class="lesson-card">
      <h3>Dynamic Axis — تغيير المحور أيضاً</h3>
      <p>نفس الفكرة لكن على الـ Columns (أعمدة) بدل الـ Measures. تخلي المستخدم يختار يعرض المبيعات على مستوى المنطقة أو الفرع أو المنتج:</p>
      <div class="code-block">
<span class="cm">-- Dimension Parameter</span>
Axis Selector = {
    (<span class="str">"By Region"</span>,   <span class="fn">NAMEOF</span>(Dim_Region[RegionName]),   <span class="num">0</span>),
    (<span class="str">"By Branch"</span>,   <span class="fn">NAMEOF</span>(Dim_Branch[BranchName]),   <span class="num">1</span>),
    (<span class="str">"By Product"</span>,  <span class="fn">NAMEOF</span>(Dim_Product[ProductName]),  <span class="num">2</span>)
}
<span class="cm">-- ضع عمود Axis Selector في الـ X-Axis + Slicer</span>
      </div>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>الاستخدام الاحترافي:</strong> دمج Dimension Parameter + Measure Parameter في نفس الصفحة يعطي المستخدم تحكماً كاملاً في التقرير — يختار ما يعرضه وعلى أي مستوى — بدون أي صفحات إضافية.</p>
    </div>` }],
  },
  "dax3": {
    eyebrow: "04 · 09 — DAX المتقدم",
    title: "DAX المتقدم",
    lede: "VAR/RETURN لكود أنظف، RANKX للترتيب، SWITCH بديل IF، ALLSELECTED، FILTER كـ Iterator.",
    en_eyebrow: "04 · 09 — Advanced DAX",
    en_lede: "VAR/RETURN for cleaner code, RANKX for ranking, SWITCH as IF alternative, ALLSELECTED, FILTER as Iterator.",
    sectionId: "dax3",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>VAR / RETURN — كود نظيف وأسرع</h3>
      <p>بدل ما تكتب نفس الحساب أكتر من مرة، خزّنه في متغير. أسرع في التنفيذ وأسهل في القراءة والصيانة.</p>
      <div class="code-block">
<span class="cm">-- بدون VAR — صعب القراءة ومكرر</span>
% of Total = 
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>(Sales[Amount]),
    <span class="fn">CALCULATE</span>(<span class="fn">SUM</span>(Sales[Amount]), <span class="fn">ALL</span>(Sales)),
    <span class="num">0</span>
)

<span class="cm">-- مع VAR — احترافي وواضح</span>
% of Total = 
<span class="kw">VAR</span> CurrentSales = <span class="fn">SUM</span>(Sales[Amount])
<span class="kw">VAR</span> TotalSales   = <span class="fn">CALCULATE</span>(<span class="fn">SUM</span>(Sales[Amount]), <span class="fn">ALL</span>(Sales))
<span class="kw">RETURN</span>
    <span class="fn">DIVIDE</span>(CurrentSales, TotalSales, <span class="num">0</span>)
      </div>
    </div>

    <div class="lesson-card">
      <h3>RANKX — ترتيب العناصر</h3>
      <div class="code-block">
<span class="cm">-- ترتيب المنتج حسب المبيعات (الأعلى = 1)</span>
Product Rank = 
<span class="fn">RANKX</span>(
    <span class="fn">ALL</span>(Dim_Product[ProductName]),
    <span class="fn">SUM</span>(Fact_Sales[Amount]),
    ,
    DESC,
    DENSE  <span class="cm">-- DENSE: لا يترك فجوات في الترقيم عند التساوي</span>
)

<span class="cm">-- عرض أعلى 5 منتجات فقط</span>
Top 5 Sales = 
<span class="fn">IF</span>([Product Rank] &lt;= <span class="num">5</span>, <span class="fn">SUM</span>(Fact_Sales[Amount]), <span class="fn">BLANK</span>())
      </div>
    </div>

    <div class="lesson-card">
      <h3>SWITCH(TRUE()) — بديل IF المتداخل</h3>
      <p>بدل ما تعمل IF داخل IF داخل IF، استخدم SWITCH(TRUE()) — أوضح وأسهل في التعديل.</p>
      <div class="code-block">
<span class="cm">-- تصنيف العملاء حسب إجمالي الإنفاق</span>
Customer Tier = 
<span class="fn">SWITCH</span>(
    <span class="kw">TRUE</span>(),
    [Total Spend] >= <span class="num">50000</span>, <span class="str">"Platinum"</span>,
    [Total Spend] >= <span class="num">20000</span>, <span class="str">"Gold"</span>,
    [Total Spend] >= <span class="num">5000</span>,  <span class="str">"Silver"</span>,
    <span class="str">"Bronze"</span>  <span class="cm">-- القيمة الافتراضية</span>
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>ALLSELECTED — نسبة من الكل مع احترام الـ Slicer</h3>
      <p>الفرق بين ALL وALLSELECTED: ALL يشيل كل الفلاتر تماماً، ALLSELECTED يحترم الـ Slicers الخارجية فقط.</p>
      <div class="code-block">
<span class="cm">-- نسبة من الإجمالي مع مراعاة الـ Slicer الحالي</span>
% of Slicer Total = 
<span class="fn">DIVIDE</span>(
    [Total Sales],
    <span class="fn">CALCULATE</span>(<span class="fn">SUM</span>(Fact_Sales[Amount]), <span class="fn">ALLSELECTED</span>(Dim_Product)),
    <span class="num">0</span>
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>FILTER كـ Iterator — فلترة شروط مركبة</h3>
      <div class="code-block">
<span class="cm">-- حساب مبيعات الأوردرات الكبيرة فوق 5000 فقط</span>
High Value Sales = 
<span class="fn">CALCULATE</span>(
    <span class="fn">SUM</span>(Fact_Sales[Amount]),
    <span class="fn">FILTER</span>(
        Fact_Sales,
        Fact_Sales[Amount] > <span class="num">5000</span> &amp;&amp; Fact_Sales[Category] = <span class="str">"Electronics"</span>
    )
)

<span class="cm">-- عدد العملاء اللي اشتروا أكتر من مرة</span>
Repeat Customers = 
<span class="fn">COUNTROWS</span>(
    <span class="fn">FILTER</span>(
        <span class="fn">VALUES</span>(Fact_Sales[CustomerID]),
        <span class="fn">CALCULATE</span>(<span class="fn">COUNTROWS</span>(Fact_Sales)) > <span class="num">1</span>
    )
)
      </div>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>قاعدة ذهبية:</strong> دايماً استخدم <strong>VAR</strong> لو نفس الحساب بيتكرر أكتر من مرة في نفس الـ Measure. أسرع وأوضح.</p>
    </div>` }],
  },
  "dax-text": {
    eyebrow: "04 · 10 — دوال النصوص",
    title: "دوال النصوص — Text Functions",
    lede: "معالجة النصوص وتنسيق المخرجات وتجميع القيم — أدوات لا غنى عنها لبناء تقارير احترافية.",
    en_eyebrow: "04 · 10 — Text Functions",
    en_lede: "Text processing and output formatting and value concatenation — essential tools for building professional reports.",
    sectionId: "dax-text",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>CONCATENATEX — تجميع قيم جدول في نص واحد</h3>
      <p>تعمل كـ Iterator: تمشي على كل صف وتجمع القيم في نص واحد مفصول بمحدد تختاره. مثالية لعرض قائمة المنتجات أو أسماء العملاء:</p>
      <div class="code-block">
<span class="cm">-- قائمة المنتجات المباعة لعميل معين (مفصولة بفاصلة)</span>
Products List = 
<span class="fn">CONCATENATEX</span>(
    <span class="fn">VALUES</span>(Dim_Product[ProductName]),
    Dim_Product[ProductName],
    <span class="str">" | "</span>
)
<span class="cm">-- النتيجة: "Laptop | Keyboard | Mouse"</span>

<span class="cm">-- مع ترتيب حسب المبيعات (تنازلياً)</span>
Top Products Str = 
<span class="fn">CONCATENATEX</span>(
    <span class="fn">TOPN</span>(<span class="num">5</span>, <span class="fn">VALUES</span>(Dim_Product[ProductName]), [Total Sales], DESC),
    Dim_Product[ProductName],
    <span class="str">", "</span>,
    [Total Sales],
    DESC
)
<span class="cm">-- النتيجة: "iPhone, Samsung, Dell, HP, Lenovo"</span>

<span class="cm">-- استخدام عملي: عرض فروع كل مدير في كارت واحد</span>
Manager Branches = 
<span class="fn">CONCATENATEX</span>(
    <span class="fn">RELATEDTABLE</span>(Dim_Branch),
    Dim_Branch[BranchName],
    <span class="str">" ← "</span>
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>FORMAT — تنسيق المخرجات باحتراف</h3>
      <p>تحويل الأرقام والتواريخ إلى نصوص منسّقة. ضرورية لعرض KPIs بشكل واضح:</p>
      <div class="code-block">
<span class="cm">-- تنسيق الأرقام</span>
Sales Formatted    = <span class="fn">FORMAT</span>([Total Sales], <span class="str">"#,##0"</span>)         <span class="cm">-- 1,250,000</span>
Sales Currency     = <span class="fn">FORMAT</span>([Total Sales], <span class="str">"#,##0.00 EGP"</span>) <span class="cm">-- 1,250,000.00 EGP</span>
Sales Millions     = <span class="fn">FORMAT</span>([Total Sales] / <span class="num">1000000</span>, <span class="str">"0.0M"</span>) <span class="cm">-- 1.3M</span>
Growth Pct         = <span class="fn">FORMAT</span>([YoY Growth], <span class="str">"0.00%"</span>)       <span class="cm">-- 12.50%</span>

<span class="cm">-- تنسيق التواريخ</span>
Date Label         = <span class="fn">FORMAT</span>('Date'[Date], <span class="str">"MMM YYYY"</span>)    <span class="cm">-- Mar 2025</span>
Date Arabic        = <span class="fn">FORMAT</span>('Date'[Date], <span class="str">"DD/MM/YYYY"</span>)   <span class="cm">-- 15/03/2025</span>
Quarter Label      = <span class="fn">FORMAT</span>('Date'[Date], <span class="str">"\\Q"</span>) &amp; <span class="fn">FORMAT</span>('Date'[Date], <span class="str">"Q YYYY"</span>) <span class="cm">-- Q1 2025</span>

<span class="cm">-- استخدام عملي في Card: عرض KPI مع وحدة</span>
Revenue Card Label = 
<span class="fn">FORMAT</span>([Total Revenue] / <span class="num">1000000</span>, <span class="str">"0.0"</span>) &amp; <span class="str">" مليون جنيه"</span>
<span class="cm">-- النتيجة: "4.7 مليون جنيه"</span>
      </div>
    </div>

    <div class="lesson-card">
      <h3>دوال نصية أساسية أخرى</h3>
      <div class="code-block">
<span class="cm">-- LEFT, RIGHT, MID: استخراج جزء من النص</span>
Branch Code = <span class="fn">LEFT</span>(Dim_Branch[BranchID], <span class="num">3</span>)       <span class="cm">-- أول 3 حروف</span>
Year Part   = <span class="fn">RIGHT</span>(Fact_Sales[InvoiceNo], <span class="num">4</span>)      <span class="cm">-- آخر 4 أرقام</span>
City        = <span class="fn">MID</span>(Dim_Store[StoreCode], <span class="num">4</span>, <span class="num">3</span>)        <span class="cm">-- 3 حروف ابتداءً من الحرف الرابع</span>

<span class="cm">-- UPPER, LOWER, PROPER: تغيير الحالة</span>
Name Clean  = <span class="fn">PROPER</span>(Dim_Customer[FullName])          <span class="cm">-- ahmed ali → Ahmed Ali</span>

<span class="cm">-- TRIM, SUBSTITUTE: تنظيف النصوص</span>
Clean Name  = <span class="fn">TRIM</span>(Dim_Customer[FullName])             <span class="cm">-- حذف المسافات الزائدة</span>
Fixed Code  = <span class="fn">SUBSTITUTE</span>(Fact_Sales[Code], <span class="str">"-"</span>, <span class="str">"/"</span>)  <span class="cm">-- EG-001 → EG/001</span>

<span class="cm">-- LEN, SEARCH, FIND: البحث في النص</span>
Has Egypt   = <span class="fn">IF</span>(<span class="fn">ISERROR</span>(<span class="fn">SEARCH</span>(<span class="str">"Egypt"</span>, Dim_Store[Address])), <span class="str">"No"</span>, <span class="str">"Yes"</span>)
      </div>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>FORMAT تُرجع نصاً — لا تستخدمها في حسابات:</strong> بعد FORMAT لا تقدر تجمع أو تطرح النتيجة. استخدمها فقط في الـ Card أو Tooltip أو Labels. للحسابات ابق على الأرقام الأصلية.</p>
    </div>` }],
  },
  "dax-reference": {
    eyebrow: "04 · 11 — مرجع DAX الكامل",
    title: "جدول المرجع الشامل — DAX Functions Reference",
    lede: "مرجع سريع لكل فئات دوال DAX مع أبرز الدوال في كل فئة. احتفظ بهذه الصفحة كمرجع دائم.",
    en_eyebrow: "04 · 11 — DAX Reference",
    en_lede: "Complete reference for DAX functions organized by category.",
    sectionId: "dax-reference",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>📊 دوال التجميع (Aggregation)</h3>
      <table class="compare-table">
        <tr><th>الدالة</th><th>الاستخدام</th><th>ملاحظة</th></tr>
        <tr><td><strong>SUM</strong></td><td>مجموع عمود</td><td>الأسرع — استخدمها دائماً لو العمود موجود</td></tr>
        <tr><td><strong>SUMX</strong></td><td>مجموع تعبير (صف بصف)</td><td>للضرب والقسمة على مستوى الصف</td></tr>
        <tr><td><strong>COUNT / COUNTA</strong></td><td>عد الأرقام / النصوص</td><td>COUNTA تعد كل شيء غير فارغ</td></tr>
        <tr><td><strong>COUNTROWS</strong></td><td>عد صفوف جدول</td><td>أسرع من COUNT في معظم الحالات</td></tr>
        <tr><td><strong>DISTINCTCOUNT</strong></td><td>عد القيم الفريدة</td><td>للعملاء، المنتجات، الفروع</td></tr>
        <tr><td><strong>AVERAGE / AVERAGEX</strong></td><td>المتوسط الحسابي</td><td>AVERAGEX لمتوسط تعبير مركب</td></tr>
        <tr><td><strong>MAX / MIN</strong></td><td>أعلى / أدنى قيمة</td><td>تعمل على التواريخ أيضاً</td></tr>
      </table>
    </div>

    <div class="lesson-card">
      <h3>🔍 دوال التصفية (Filter)</h3>
      <table class="compare-table">
        <tr><th>الدالة</th><th>الاستخدام</th><th>ملاحظة</th></tr>
        <tr><td><strong>CALCULATE</strong></td><td>تعديل Filter Context</td><td>أقوى دالة في DAX</td></tr>
        <tr><td><strong>FILTER</strong></td><td>تصفية جدول بشرط</td><td>Iterator — استخدم بحذر على جداول كبيرة</td></tr>
        <tr><td><strong>ALL</strong></td><td>حذف كل الفلاتر</td><td>يرجع كل قيم الجدول/العمود</td></tr>
        <tr><td><strong>ALLEXCEPT</strong></td><td>حذف الفلاتر ما عدا أعمدة</td><td>للنسب الجزئية (% من الفئة)</td></tr>
        <tr><td><strong>ALLSELECTED</strong></td><td>حذف الفلاتر مع احترام Slicer</td><td>للنسبة من الكل في نطاق الـ Slicer</td></tr>
        <tr><td><strong>REMOVEFILTERS</strong></td><td>نفس ALL — أوضح في النية</td><td>Best Practice الحديث</td></tr>
        <tr><td><strong>KEEPFILTERS</strong></td><td>إضافة فلتر بدون استبدال</td><td>تقاطع الفلترة</td></tr>
        <tr><td><strong>VALUES</strong></td><td>قيم فريدة مع احترام الفلتر</td><td>يختلف عن ALL</td></tr>
      </table>
    </div>

    <div class="lesson-card">
      <h3>📅 دوال الزمن (Time Intelligence)</h3>
      <table class="compare-table">
        <tr><th>الدالة</th><th>الاستخدام</th></tr>
        <tr><td><strong>TOTALYTD / TOTALMTD / TOTALQTD</strong></td><td>تراكمي من بداية السنة / الشهر / الربع</td></tr>
        <tr><td><strong>SAMEPERIODLASTYEAR</strong></td><td>نفس الفترة من السنة الماضية</td></tr>
        <tr><td><strong>DATEADD</strong></td><td>تحريك الفترة الزمنية</td></tr>
        <tr><td><strong>PARALLELPERIOD</strong></td><td>الفترة الكاملة المقابلة</td></tr>
        <tr><td><strong>DATESINPERIOD</strong></td><td>نافذة زمنية بحجم محدد</td></tr>
        <tr><td><strong>PREVIOUSMONTH / PREVIOUSQUARTER</strong></td><td>الشهر / الربع السابق كاملاً</td></tr>
        <tr><td><strong>DATESYTD</strong></td><td>كل تواريخ السنة حتى الآن</td></tr>
      </table>
    </div>

    <div class="lesson-card">
      <h3>🔠 دوال المنطق والنصوص (Logical & Text)</h3>
      <table class="compare-table">
        <tr><th>الدالة</th><th>الاستخدام</th></tr>
        <tr><td><strong>IF / SWITCH</strong></td><td>التفرع الشرطي</td></tr>
        <tr><td><strong>AND / OR / NOT</strong></td><td>الشروط المركبة</td></tr>
        <tr><td><strong>IFERROR / ISBLANK / ISERROR</strong></td><td>التعامل مع الأخطاء والفراغات</td></tr>
        <tr><td><strong>FORMAT</strong></td><td>تنسيق رقم أو تاريخ كنص</td></tr>
        <tr><td><strong>CONCATENATE / CONCATENATEX</strong></td><td>دمج النصوص / دمج قيم جدول</td></tr>
        <tr><td><strong>LEFT / RIGHT / MID</strong></td><td>استخراج جزء من النص</td></tr>
        <tr><td><strong>TRIM / SUBSTITUTE</strong></td><td>تنظيف النصوص</td></tr>
        <tr><td><strong>SEARCH / FIND</strong></td><td>البحث داخل نص</td></tr>
      </table>
    </div>

    <div class="lesson-card">
      <h3>🔗 دوال العلاقات والعلاقات (Relationship)</h3>
      <table class="compare-table">
        <tr><th>الدالة</th><th>الاستخدام</th></tr>
        <tr><td><strong>RELATED</strong></td><td>جلب قيمة من جدول مرتبط (في Columns)</td></tr>
        <tr><td><strong>RELATEDTABLE</strong></td><td>جلب جدول مرتبط كامل (في Measures)</td></tr>
        <tr><td><strong>USERELATIONSHIP</strong></td><td>تفعيل علاقة خاملة مؤقتاً</td></tr>
        <tr><td><strong>CROSSFILTER</strong></td><td>تغيير اتجاه الفلترة مؤقتاً</td></tr>
        <tr><td><strong>TREATAS</strong></td><td>معاملة عمود كأنه من جدول آخر</td></tr>
      </table>
    </div>

    <div class="tip-box">
      <div class="icon">🚀</div>
      <p><strong>أسرع طريقة لتعلم DAX:</strong> عند مواجهة مشكلة جديدة، اذهب لـ dax.guide — الموقع الرسمي لتوثيق دوال DAX مع أمثلة ومستوى الصعوبة. كل دالة مذكورة هنا موجودة فيه مع شرح مفصّل ومثال تطبيقي.</p>
    </div>` }],
  },
  "visuals": {
    eyebrow: "05 · 01 — التصميم البصري",
    title: "التصورات البصرية (Visualizations)",
    lede: "كيف تختار الرسم البياني الصحيح لقصتك؟ (Data Storytelling)",
    en_eyebrow: "05 · 01 — Visualizations",
    en_lede: "Overview of all Power BI chart types and when to use each one.",
    sectionId: "visuals",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>قواعد اختيار الشارت الصحيح</h3>
      <ul>
        <li><strong>Bar / Column Chart:</strong> لمقارنة القيم ببعضها (مبيعات الدول، مبيعات المنتجات).</li>
        <li><strong>Line Chart:</strong> ممتاز جداً لعرض التطور الزمني (المبيعات عبر الشهور).</li>
        <li><strong>Pie / Donut Chart:</strong> استخدمه فقط لمعرفة النسبة من الكل، ويفضل ألا يزيد عن 4 أو 5 أجزاء.</li>
        <li><strong>Cards:</strong> لعرض الأرقام الإجمالية الهامة (KPIs) بخط كبير في أعلى التقرير (إجمالي المبيعات، الربح).</li>
        <li><strong>Matrix:</strong> زي الـ Pivot Table في الإكسيل، مفيد لعرض أرقام تفصيلية بصفوف وأعمدة.</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">🎨</div>
      <p><strong>نصيحة تصميم:</strong> لا تضع أكثر من 5 إلى 7 رسومات بيانية في الصفحة الواحدة. اترك مساحات فارغة (White Space) لكي لا تشتت عين القارئ.</p>
    </div>

    <div class="lesson-card">
      <h3>التفاعل بين الشارتات (Cross-Filtering)</h3>
      <p>من أجمل مميزات Power BI أن الشارتات تتفاعل مع بعضها. لو ضغطت على "مصر" في خريطة، كل أرقام التقرير ورسوماته ستتغير فوراً لتعرض بيانات مصر فقط.</p>
    </div>` }],
  },
  "sync-slicers": {
    eyebrow: "05 · 02 — الـ Slicers والتفاعل",
    title: "Sync Slicers & Visual Interactions",
    lede: "تحكم في كيفية تفاعل العناصر البصرية مع بعضها — ومزامنة الـ Slicers عبر صفحات التقرير المختلفة.",
    en_eyebrow: "05 · 02 — Synchronized Slicers",
    en_lede: "How to create slicers that affect multiple pages and charts intelligently.",
    sectionId: "sync-slicers",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>Sync Slicers — مزامنة الفلاتر بين الصفحات</h3>
      <p>بدلاً من وضع نفس الـ Slicer في كل صفحة، يمكنك مزامنة slicer واحد عبر صفحات متعددة — المستخدم يفلتر من أي صفحة ويؤثر على الكل.</p>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>فتح Sync Slicers</h4>
            <p>اختار الـ Slicer ← View ← Sync Slicers. ستفتح نافذة جانبية بقائمة الصفحات.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>إعداد المزامنة</h4>
            <p>لكل صفحة عمودان: <strong>Sync</strong> (يطبق الفلتر) و <strong>Visible</strong> (يظهر الـ Slicer). يمكنك المزامنة بدون إظهار.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Edit Interactions — تحكم في تفاعل العناصر</h3>
      <p>بشكل افتراضي، كل Visual يفلتر باقي الـ Visuals. تقدر تغير هذا السلوك:</p>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>تفعيل Edit Interactions</h4>
            <p>اختار أي Visual ← Format ← Edit Interactions. ستظهر أيقونات فوق باقي الـ Visuals.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>اختيار نوع التفاعل</h4>
            <ul>
              <li><strong>🔽 Filter:</strong> يفلتر الـ Visual المستهدف (الافتراضي).</li>
              <li><strong>🔆 Highlight:</strong> يبرز القيم المتعلقة دون فلترة.</li>
              <li><strong>⛔ None:</strong> لا تأثير — مفيد لـ KPI Cards والعناصر الثابتة.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Slicer Panel — Panel مخفي بزر</h3>
      <p>تقنية شائعة: ضع الـ Slicers في صفحة منفصلة أو في Overlay Panel يظهر/يختفي بالـ Bookmarks. يوفر مساحة التقرير ويحسن تجربة المستخدم.</p>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>أفضل ممارسة:</strong> استخدم Sync Slicers للفلاتر العالمية (السنة، المنطقة) وEdit Interactions=None للـ KPI Cards حتى لا تتغير بالضغط على الشارتات.</p>
    </div>` }],
  },
  "themes": {
    eyebrow: "05 · 03 — الثيمات والتصميم",
    title: "Themes & Professional Design — التصميم الاحترافي",
    lede: "التقرير الاحترافي لا يقتصر على الأرقام الصحيحة — الألوان والخطوط والتنسيق الموحّد هي ما يجعله قابلاً للثقة والقراءة.",
    en_eyebrow: "05 · 03 — Themes and Custom Formatting",
    en_lede: "Creating a consistent, professional look across all your reports.",
    sectionId: "themes",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>Power BI Themes</h3>
      <p>الـ Theme هو ملف JSON يحدد الألوان والخطوط والتنسيقات الافتراضية لكل عناصر التقرير دفعة واحدة.</p>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>تطبيق Theme جاهز</h4>
            <p>View ← Themes ← اختر من الثيمات المدمجة أو استعرض معرض Microsoft للثيمات الجاهزة.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>تخصيص Theme</h4>
            <p>View ← Themes ← Customize Current Theme — ستجد قسماً لكل نوع عنصر (Cards, Charts, Text).</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>حفظ وتطبيق على مشاريع أخرى</h4>
            <p>View ← Themes ← Save Current Theme — يحفظ ملف .json يمكن مشاركته مع الفريق.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>بنية ملف الـ Theme (JSON)</h3>
      <div class="code-block">
{
  "name": "Corporate Theme",
  "dataColors": ["#0070C0","#00B050","#FF0000","#FFC000"],
  "background": "#FFFFFF",
  "foreground": "#252525",
  "tableAccent": "#0070C0",
  "visualStyles": {
    "*": { "*": { "fontFamily": [{ "value": "Segoe UI" }] } }
  }
}
      </div>
    </div>

    <div class="lesson-card">
      <h3>مبادئ التصميم الاحترافي</h3>
      <ul>
        <li><strong>قاعدة 3 ألوان:</strong> لون رئيسي + لون ثانوي + لون تحذير/تنبيه. لا تزد عن ذلك.</li>
        <li><strong>التسلسل البصري:</strong> العنوان الأكبر ← KPIs ← التفاصيل. عين المستخدم تتبع التدرج.</li>
        <li><strong>المحاذاة والهوامش:</strong> استخدم Format ← Align لمحاذاة العناصر — الفوضى تفقد الثقة.</li>
        <li><strong>التسميات:</strong> Data Labels فقط للقيم المهمة — الكثرة تشتت.</li>
        <li><strong>الخلفية:</strong> خلفية فاتحة للطباعة، غامقة للعروض التقديمية.</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>نصيحة الاحتراف:</strong> ابدأ كل مشروع بإنشاء صفحة "Design Guide" تضع فيها الألوان والمكوّنات المعيارية — ثم انسخ منها في كل صفحة. يوفر وقتاً ويضمن الاتساق.</p>
    </div>` }],
  },
  "custom-tooltips": {
    eyebrow: "05 · 04 — Tooltips مخصصة",
    title: "Custom Tooltips — تلميحات الأدوات المخصصة",
    lede: "بدلاً من الـ Tooltip الافتراضي الذي يظهر الرقم فقط، يمكنك عرض صفحة تقرير كاملة كـ Tooltip — تُحوّل hover بسيط إلى تحليل متكامل.",
    en_eyebrow: "05 · 04 — Custom Tooltips",
    en_lede: "Creating smart tooltips that display rich information when users hover over visuals.",
    sectionId: "custom-tooltips",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>الـ Tooltip الافتراضي مقابل المخصص</h3>
      <ul>
        <li><strong>افتراضي:</strong> يعرض اسم الحقل والقيمة فقط عند hover.</li>
        <li><strong>مخصص:</strong> يعرض صفحة تقرير كاملة تحتوي على شارتات، KPIs، تفاصيل — كل ذلك في نافذة popup.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>خطوات إنشاء Custom Tooltip</h3>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>إنشاء صفحة Tooltip</h4>
            <p>أضف صفحة جديدة ← اضغط كليك يمين على اسمها ← Page Information ← فعّل <strong>Allow use as tooltip</strong>.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>تصميم محتوى الـ Tooltip</h4>
            <p>غير حجم الصفحة لـ Tooltip (View ← Page Size ← Tooltip). أضف KPIs وشارتات مصغرة.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>ربط الـ Tooltip بالـ Visual</h4>
            <p>اختار الـ Visual الرئيسي ← Format ← Tooltips ← غير Type من Default لـ <strong>Report Page</strong> ← اختر الصفحة التي أنشأتها.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>أفكار لاستخدام Custom Tooltips</h3>
      <ul>
        <li><strong>شارت Bar:</strong> Tooltip يعرض Trend خطي للمنتج عند hover.</li>
        <li><strong>خريطة:</strong> Tooltip يعرض Top 5 مبيعات للمنطقة.</li>
        <li><strong>KPI Card:</strong> Tooltip يعرض تفصيل الأرقام الشهرية.</li>
        <li><strong>جدول:</strong> Tooltip يعرض Profile كامل للعميل أو المنتج.</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>الـ Context محفوظ:</strong> الـ Tooltip يرث فلتر السياق — لو وقفت على منتج معين في الشارت، الـ Tooltip سيعرض بيانات هذا المنتج تحديداً.</p>
    </div>` }],
  },
  "condformat": {
    eyebrow: "05 · 05 — التنسيق الشرطي",
    title: "Conditional Formatting",
    lede: "لوّن التقرير تلقائياً بناءً على القيم. من أقوى أدوات Data Storytelling في Power BI.",
    en_eyebrow: "05 · 05 — Conditional Formatting",
    en_lede: "Using colors and icons to highlight important data points and patterns.",
    sectionId: "condformat",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>الطريقة 1: Color Scale (التلوين التدريجي)</h3>
      <p>في أي Visual أو Matrix، اختار الحقل → Format → Conditional Formatting → Background Color → Rules = Color Scale. هتحدد: أقل قيمة → أعلى قيمة وألوانهم. Power BI يلوّن تلقائياً.</p>
    </div>

    <div class="lesson-card">
      <h3>الطريقة 2: Rules (قواعد محددة)</h3>
      <div class="code-block">
<span class="cm">-- مثال: تلوين الأداء بالأخضر/الأصفر/الأحمر</span>
If Value >= 90%  → Green  ✅ (أداء ممتاز)
If Value >= 70%  → Yellow ⚠️ (أداء مقبول)
If Value &lt; 70%   → Red    ❌ (أداء ضعيف)

<span class="cm">-- الخطوات:</span>
Format Visual → Cells → Background Color 
→ Format Style: Rules
→ Rule 1: If Value >= 90 (Number) → Green
→ Rule 2: If Value >= 70 → Yellow
→ Rule 3: If Value >= 0  → Red
      </div>
    </div>

    <div class="lesson-card">
      <h3>الطريقة 3: Field Value — التحكم بـ DAX</h3>
      <p>الأقوى على الإطلاق. تعمل Measure يرجع كود اللون (Hex أو اسم اللون) وبتربطه بالـ Conditional Formatting:</p>
      <div class="code-block">
<span class="cm">-- Measure يرجع لون بناءً على الأداء</span>
KPI Color = 
<span class="fn">SWITCH</span>(
    <span class="kw">TRUE</span>(),
    [Achievement %] >= <span class="num">0.9</span>,  <span class="str">"#1D9E75"</span>,  <span class="cm">-- أخضر</span>
    [Achievement %] >= <span class="num">0.7</span>,  <span class="str">"#F5B800"</span>,  <span class="cm">-- ذهبي</span>
    <span class="str">"#D85A30"</span>                     <span class="cm">-- أحمر</span>
)

<span class="cm">-- ثم: Format → Background Color → Format Style: Field Value → اختار KPI Color</span>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Data Bars — أشرطة مضمّنة في الخلية</h3>
      <p>في Matrix أو Table: اختار الحقل → Format → Conditional Formatting → Data Bars. بتعمل شريط نسبي جوا الخلية مباشرة بدون Chart منفصل. مثالي لجداول KPI.</p>
    </div>

    <div class="lesson-card">
      <h3>Icons — أيقونات حالة</h3>
      <div class="code-block">
<span class="cm">-- Format → Icons → Rules</span>
<span class="cm">-- مثال: أيقونات Up/Down/Flat للمبيعات</span>
If Value > 0   → ↑ (أخضر)
If Value = 0   → → (رمادي)
If Value &lt; 0   → ↓ (أحمر)

<span class="cm">-- النوع: Number, Percent, أو Percentile</span>
      </div>
    </div>` }],
  },
  "drillthrough": {
    eyebrow: "05 · 06 — Drill Down و Drill Through",
    title: "Drill Down & Drill Through",
    lede: "التنقل في البيانات من المستوى العام للتفصيلي. من أقوى مميزات Power BI التفاعلية.",
    en_eyebrow: "05 · 06 — Drillthrough Pages",
    en_lede: "Create interactive drillthrough buttons that take users from summary views to detailed analysis.",
    sectionId: "drillthrough",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>Drill Down — التعمق في الهيرارشية</h3>
      <p>بيشتغل لما يكون عندك Hierarchy محددة (مثل: السنة ← الربع ← الشهر ← اليوم). الخطوات:</p>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>إنشاء Hierarchy</h4>
            <p>في Data Pane، كليك يمين على عمود Year → New Hierarchy. ثم اسحب Quarter ثم Month ثم Day داخلها.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>ضع الـ Hierarchy في الـ Axis</h4>
            <p>اسحب الـ Hierarchy كلها (مش عمود واحد) في خانة X-Axis في الشارت.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>تفعيل Drill Down Mode</h4>
            <p>فوق الشارت هتلاقي زر السهم للأسفل ↓ — اضغطه ثم اضغط على أي عمود في الشارت للتعمق فيه.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Drill Through — صفحة التفاصيل</h3>
      <p>بيسمحلك تعمل كليك يمين على أي نقطة بيانات وتنتقل لصفحة تفصيلية خاصة بيها. خطوات الإعداد:</p>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>إنشاء صفحة جديدة للتفاصيل</h4>
            <p>اضف Page جديدة وسمّيها "تفاصيل المنتج" مثلاً. صمّمها لتعرض كل تفاصيل المنتج المختار.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>تفعيل Drill Through في الصفحة الجديدة</h4>
            <p>في صفحة التفاصيل، راحل Visualizations → اسحب عمود ProductName في خانة "Drill through". Power BI هيضيف زر Back تلقائياً.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>الاستخدام</h4>
            <p>ارجع للصفحة الرئيسية → كليك يمين على اسم منتج في أي شارت → Drill through → تفاصيل المنتج.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Tooltip Page — تلميح مخصص عند Hover</h3>
      <p>بدل التلميح الافتراضي، تقدر تعمل صفحة كاملة تظهر كـ Tooltip عند التمرير على أي نقطة:</p>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>صفحة جديدة → Page Information</h4>
            <p>في Format Page → شغّل "Allow use as tooltip". غيّر الحجم لـ Tooltip (320×240 مثلاً).</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>ربطها بالشارت</h4>
            <p>في الشارت الرئيسي → Format → Tooltip → Type: Report Page → Page: اختار صفحة الـ Tooltip.</p>
          </div>
        </div>
      </div>
    </div>` }],
  },
  "bookmarks": {
    eyebrow: "05 · 07 — الإشارات المرجعية",
    title: "Bookmarks & Buttons & Navigation",
    lede: "ابني تقارير تفاعلية احترافية بأزرار تنقل وإخفاء وإظهار للعناصر — بدون كود.",
    en_eyebrow: "05 · 07 — Bookmarks",
    en_lede: "Using bookmarks to create guided narratives and interactive storytelling in your reports.",
    sectionId: "bookmarks",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>ما هو الـ Bookmark؟</h3>
      <p>Bookmark = لقطة (Snapshot) لحالة التقرير في لحظة معينة — تشمل: أي الـ Visuals ظاهرة، الفلاتر المطبقة، والـ Slicers المختارة. لما بتضغط الـ Bookmark بيرجع التقرير لتلك اللحظة.</p>
    </div>

    <div class="lesson-card">
      <h3>الاستخدام 1: تبديل بين رسمين بيانيين</h3>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>ضع الرسمين فوق بعض بنفس الحجم والمكان</h4>
            <p>مثلاً: Bar Chart و Line Chart في نفس المكان. اخفي الـ Line.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>View → Bookmarks → Add Bookmark</h4>
            <p>سمّيه "Show Bar". ثم اخفي الـ Bar وأظهر الـ Line وأضف Bookmark ثانية "Show Line".</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>اضف زر وربطه بالـ Bookmark</h4>
            <p>Insert → Button → اختار شكل الزر → Action → Type: Bookmark → اختار "Show Bar".</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>الاستخدام 2: Panel تفاصيل قابل للإخفاء</h3>
      <div class="code-block">
<span class="cm">-- الفكرة: زر ← يفتح Panel جانبي بتفاصيل إضافية</span>

الخطوات:
1. صمّم Panel جانبي (مستطيل + شارتات)
2. Bookmark 1 "Panel Closed": Panel مخفي
3. Bookmark 2 "Panel Open":  Panel ظاهر
4. زر ← يفتح Panel Open
5. زر X داخل Panel يرجع Panel Closed
      </div>
    </div>

    <div class="lesson-card">
      <h3>Page Navigator — تنقل تلقائي بين الصفحات</h3>
      <p>Insert → Buttons → Navigator → Page Navigator. Power BI بيولّد أزرار لكل صفحات التقرير تلقائياً وبيتحدث لما تضيف صفحات جديدة.</p>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>Selection Pane:</strong> View → Selection. هذا اللوح بيوريك كل العناصر في الصفحة ويسمحلك تخفيها أو تجيبها بضغطة. لازم تفتحه وأنت بتشتغل على الـ Bookmarks.</p>
    </div>` }],
  },
  "publish": {
    eyebrow: "06 · 01 — النشر والمشاركة",
    title: "النشر والمشاركة (Power BI Service)",
    lede: "كيف تشارك عملك مع مديرك وزملائك بطريقة احترافية؟",
    en_eyebrow: "06 · 01 — Publishing to Power BI Service",
    en_lede: "How to share your reports with colleagues and managers on the cloud.",
    sectionId: "publish",
    blocks: [{ kind: "html", html: `<div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <h4>إنشاء حساب</h4>
          <p>للنشر تحتاج حساب عمل أو جامعة (Work/School email)، ولا يقبل حسابات مثل Gmail أو Yahoo.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <h4>زر الـ Publish</h4>
          <p>من داخل الـ Desktop، اضغط Publish، واختر مساحة العمل (Workspace) ليتم رفع التقرير للسحابة.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <h4>التحديث التلقائي (Scheduled Refresh)</h4>
          <p>من داخل الـ Service، يمكنك ضبط التقرير ليتحدث بياناته تلقائياً كل يوم الساعة 8 صباحاً مثلاً، بدون تدخل منك!</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
          <h4>الأمان (Row Level Security - RLS)</h4>
          <p>بتتحكم في مين يشوف إيه في نفس التقرير. كل مستخدم يفتح التقرير يشوف بيانات نطاقه فقط.</p>
        </div>
      </div>
    </div>` }],
  },
  "workspaces": {
    eyebrow: "06 · 02 — Workspaces و Apps",
    title: "Workspaces, Apps & Sharing",
    lede: "إدارة التقارير وتوزيعها على الفريق بشكل احترافي ومنظم مع تحكم كامل في الصلاحيات.",
    en_eyebrow: "06 · 02 — Workspaces and Collaboration",
    en_lede: "Organizing reports and sharing with team members efficiently.",
    sectionId: "workspaces",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>My Workspace vs Shared Workspace</h3>
      <p>My Workspace هي مساحتك الشخصية — لا أحد يراها. الـ Shared Workspace هي مساحة مشتركة للفريق:</p>
      <div class="code-block">
<span class="cm">-- أدوار في الـ Workspace (من الأعلى للأدنى):</span>
Admin   → يتحكم في كل شيء، يضيف ويحذف أعضاء
Member  → ينشر محتوى، يعدّل، لكن لا يحذف الـ Workspace
Contributor → ينشر ويعدل لكن لا يعدل على عمل الآخرين
Viewer  → يشاهد فقط (يحتاج Pro أو Premium License)
      </div>
    </div>

    <div class="lesson-card">
      <h3>إنشاء وإدارة Workspace</h3>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>إنشاء Workspace جديدة</h4>
            <p>في Service → Workspaces → Create a Workspace. حدد الاسم والوصف والـ License Mode (Pro / Premium).</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>النشر من Desktop</h4>
            <p>Publish → اختار الـ Workspace بالاسم (مش My Workspace). هتلاقي الـ Report والـ Dataset الاثنين رُفعوا.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>إضافة أعضاء</h4>
            <p>Workspace → Access → أضف البريد الإلكتروني للعضو واختار دوره.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Power BI App — التوزيع الاحترافي</h3>
      <p>الـ App هي طريقة النشر الأنظف للمستخدمين النهائيين. بدل إعطائهم رابط الـ Workspace مباشرة (اللي فيه كل الـ Datasets والـ Reports)، بتبني App تحتوي فقط على ما تريدهم يرونه:</p>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>Create App من داخل الـ Workspace</h4>
            <p>Workspace → Create App. حدد الاسم والوصف والثيم واللوجو.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>اختيار المحتوى</h4>
            <p>اختار أي Reports وDashboards تريد ظهورها في الـ App. ممكن تخفي بعضها.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>Audience — تحديد الجمهور</h4>
            <p>تقدر تعمل Audience مختلفة — مثلاً: Managers يشوفون صفحات معينة، Analysts يشوفون صفحات تانية.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">4</div>
          <div class="step-content">
            <h4>Publish App</h4>
            <p>المستخدم بيروح Apps في الـ Service ويضغط Get Apps ويشوف الـ App بتاعتك منظمة وجميلة.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>أفضل ممارسة:</strong> مطوّرو التقارير يشتغلوا في الـ Workspace (Contributor/Member). المستخدمون النهائيون يستخدموا الـ App فقط (Viewer). ده بيمنع أي تعديل غير مقصود.</p>
    </div>` }],
  },
  "rls": {
    eyebrow: "06 · 03 — أمن الصفوف RLS",
    title: "أمن البيانات (Row Level Security)",
    lede: "نفس التقرير — كل مدير يرى فقط بيانات نطاقه. RLS هو الحل الاحترافي لتوزيع التقارير بأمان كامل.",
    en_eyebrow: "06 · 03 — Row-Level Security (RLS)",
    en_lede: "Control which users see which data rows in your reports.",
    sectionId: "rls",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>كيف تعمل RLS؟</h3>
      <p>RLS بتضيف فلتر DAX خفي على كل مستخدم. لما يفتح التقرير، Power BI يحدد هويته ويطبّق الفلتر المناسب تلقائياً قبل أن يرى أي بيانات.</p>
    </div>

    <div class="lesson-card">
      <h3>Static RLS — خطوة بخطوة</h3>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>Modeling → Manage Roles → Create</h4>
            <p>أنشئ Role لكل فئة مستخدمين (Cairo_Manager، Alex_Manager...).</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>اكتب الـ DAX Filter على الجدول</h4>
            <div class="code-block" style="margin-top:6px;">
<span class="cm">-- Static: يشوف القاهرة بس (مهما كان المستخدم)</span>
[Region] = <span class="str">"Cairo"</span>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>View as Role — اختبر قبل النشر</h4>
            <p>Modeling → View as Role. شوف التقرير من منظور كل Role قبل ما تنشر.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">4</div>
          <div class="step-content">
            <h4>بعد النشر على Service</h4>
            <p>الـ Dataset → Security → أضف البريد الإلكتروني لكل مستخدم في الـ Role المناسبة.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Dynamic RLS — الأقوى والأكثر احترافاً</h3>
      <p>بدل إنشاء Role لكل فرع، Role واحدة تعرف هوية المستخدم تلقائياً من الـ Email:</p>
      <div class="code-block">
<span class="cm">-- Dynamic RLS: يشوف بيانات نطاقه هو فقط</span>
<span class="cm">-- شرط: لازم يكون عندك جدول Security بعمودين</span>
<span class="cm">-- [UserEmail] و [Region]</span>

<span class="cm">-- الـ DAX Filter على جدول Dim_Region:</span>
[Region] <span class="kw">IN</span>
<span class="fn">CALCULATETABLE</span>(
    <span class="fn">VALUES</span>(Security[Region]),
    Security[UserEmail] = <span class="fn">USERPRINCIPALNAME</span>()
)

<span class="cm">-- USERPRINCIPALNAME() يرجع email المستخدم الحالي تلقائياً</span>
<span class="cm">-- مثلاً: "ahmed@company.com"</span>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Object Level Security (OLS) — إخفاء جداول وأعمدة كاملة</h3>
      <p>RLS بتخفي صفوف. OLS بتخفي أعمدة أو جداول كاملة عن مستخدمين معينين. تحتاج Power BI Premium أو Tabular Editor:</p>
      <div class="code-block">
<span class="cm">-- سيناريو: مديرو المبيعات لا يرون عمود التكلفة (Cost)</span>
<span class="cm">-- في Tabular Editor: اختار العمود → Object Level Security → None</span>
<span class="cm">-- المستخدمون في هذا الـ Role لن يروا العمود حتى في الـ Field List</span>
      </div>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>حد مهم:</strong> RLS بتحمي البيانات عند المشاهدة فقط. لو المستخدم عنده صلاحية تنزيل الـ Dataset من Service، هيتجاوز RLS تماماً. لمنع ذلك: اسحب صلاحية "Build" من الـ Dataset واستخدم Apps بدل الـ Workspace مباشرة.</p>
    </div>` }],
  },
  "gateway": {
    eyebrow: "06 · 04 — Gateway والتحديث",
    title: "Gateway & On-Premises Refresh",
    lede: "كيف يتحدث التقرير على Service من بيانات موجودة على جهاز داخلي (On-Premises) أو شبكة الشركة؟",
    en_eyebrow: "06 · 04 — Data Gateway",
    en_lede: "Connecting to on-premises data sources from the cloud.",
    sectionId: "gateway",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>ما هو الـ Gateway؟</h3>
      <p>الـ Gateway هو برنامج وسيط (Bridge) بيتنزّل على جهاز ثابت داخل الشركة. وظيفته: يربط Power BI Service (السحاب) بالبيانات الموجودة على الشبكة الداخلية (SQL Server محلي، ملفات Shared Drive...) بأمان.</p>
    </div>

    <table class="compare-table">
      <tr>
        <th>Personal Gateway</th>
        <th>Standard Gateway (On-Premises)</th>
      </tr>
      <tr>
        <td>لشخص واحد فقط على جهازه.</td>
        <td>للشركات — يخدم عدة أشخاص ومصادر.</td>
      </tr>
      <tr>
        <td>لا يدعم DirectQuery.</td>
        <td>يدعم Import و DirectQuery.</td>
      </tr>
      <tr>
        <td>مجاني — للاستخدام الشخصي.</td>
        <td>يحتاج Power BI Premium أو Pro.</td>
      </tr>
    </table>

    <div class="lesson-card">
      <h3>خطوات إعداد Gateway</h3>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>تنزيل Gateway</h4>
            <p>من powerbi.microsoft.com → نزّل On-Premises Data Gateway على الجهاز اللي فيه البيانات (لازم يكون شغال دايماً).</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>تسجيل الدخول وربطه بحسابك</h4>
            <p>فتح الـ Gateway وسجّل بنفس حساب Power BI الخاص بيك. هيظهر في powerbi.com → Settings → Gateways.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>إضافة Data Source</h4>
            <p>في Service → Settings → Manage Gateways → إضافة مصدر بيانات (اسم السيرفر، اسم قاعدة البيانات، بيانات الدخول).</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">4</div>
          <div class="step-content">
            <h4>ربط الـ Dataset بالـ Gateway</h4>
            <p>في Service → الـ Dataset → Settings → Gateway Connection → اختار الـ Gateway والـ Data Source.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">5</div>
          <div class="step-content">
            <h4>Scheduled Refresh</h4>
            <p>في نفس إعدادات الـ Dataset → Scheduled Refresh → شغّل وحدد الأوقات (حتى 8 مرات يومياً في Pro).</p>
          </div>
        </div>
      </div>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>مشكلة شائعة:</strong> لو الـ Gateway انقطع أو انطفأ الجهاز، التحديث هيفشل. حل: ركّب الـ Gateway على سيرفر مخصص ثابت وليس على لابتوب شخصي.</p>
    </div>` }],
  },
  "incremental": {
    eyebrow: "06 · 05 — Incremental Refresh",
    title: "Incremental Refresh — التحديث المتزايد",
    lede: "لما الداتا بتاعتك كبيرة جداً (ملايين صفوف)، تحديث كل شيء كل يوم مستحيل. Incremental Refresh بيحدّث فقط البيانات الجديدة أو المعدّلة.",
    en_eyebrow: "06 · 05 — Incremental Refresh",
    en_lede: "Loading only new/modified data to reduce refresh time and improve performance.",
    sectionId: "incremental",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>المشكلة التي يحلها</h3>
      <p>لو عندك 5 سنوات من بيانات المبيعات (50 مليون صف)، الـ Full Refresh اليومي يأخذ ساعات ويحمّل كل شيء من الصفر. Incremental Refresh بيقول: "البيانات من 2020 لـ 2024 ما اتغيرتش — حدّث أسبوع هذا الأسبوع فقط."</p>
    </div>

    <div class="lesson-card">
      <h3>الشروط الأساسية</h3>
      <ul>
        <li><strong>يحتاج Power BI Premium أو Premium Per User (PPU).</strong></li>
        <li>جدول الـ Fact لازم يحتوي على عمود تاريخ من نوع DateTime.</li>
        <li>مصدر البيانات لازم يدعم Query Folding (SQL Server, SharePoint, Azure...).</li>
        <li>لا يعمل مع مصادر لا تدعم Query Folding (ملفات Excel محلية، CSV).</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>الإعداد خطوة بخطوة</h3>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>إنشاء Parameters خاصة (اسمهم ثابت)</h4>
            <p>أنشئ Parameter باسم <strong>RangeStart</strong> ونوع DateTime، وآخر باسم <strong>RangeEnd</strong>. هذان الاسمان محجوزان في Power BI ولا يتغيران.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>فلترة جدول الـ Fact بالـ Parameters</h4>
            <div class="code-block" style="margin-top:6px;">
<span class="cm">// في Power Query — فلتر عمود التاريخ</span>
Filtered = <span class="fn">Table.SelectRows</span>(Source, each
    [OrderDate] >= RangeStart &amp;&amp; [OrderDate] &lt; RangeEnd)
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>تفعيل Incremental Refresh من Desktop</h4>
            <p>كليك يمين على الجدول في الـ Fields → Incremental Refresh. حدد: احتفظ بـ 5 سنوات، حدّث آخر 7 أيام.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">4</div>
          <div class="step-content">
            <h4>Publish للـ Service</h4>
            <p>بعد النشر، Power BI Service هيقسّم الداتا لـ Partitions داخلياً. كل Refresh بيحدّث Partition الأيام الأخيرة فقط.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>مثال عملي — إعدادات Incremental Refresh</h3>
      <div class="code-block">
<span class="cm">// الإعدادات المثالية لجدول مبيعات سنوي</span>
Archive Data:  5 years   <span class="cm">// احتفظ بـ 5 سنوات كاملة</span>
Refresh Data:  14 days   <span class="cm">// حدّث آخر 14 يوم (لاستيعاب التعديلات)</span>
Detect Changes: OrderUpdatedAt  <span class="cm">// عمود يتغير عند تعديل الصف (اختياري)</span>

<span class="cm">// النتيجة: بدل تحديث 50M صف → يحدّث ~100K صف فقط</span>
<span class="cm">// وقت الـ Refresh: من 2 ساعة → 3 دقائق</span>
      </div>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>Query Folding اختبار:</strong> في Power Query، كليك يمين على الخطوة الأخيرة → View Native Query. لو ظهر SQL Query = Query Folding يعمل ✅. لو ظهر رسالة خطأ = لا يعمل ❌ وIncrementalRefresh لن يشتغل صح.</p>
    </div>` }],
  },
  "performance": {
    eyebrow: "07 · 01 — الأداء والتحسين",
    title: "Performance & Optimization",
    lede: "تقريرك بطيء؟ هنا أسباب البطء والحلول العملية لكل مشكلة.",
    en_eyebrow: "06 · 06 — Performance Optimization",
    en_lede: "Techniques to make your reports faster and more responsive.",
    sectionId: "performance",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>Import vs DirectQuery — أهم قرار</h3>
    </div>

    <table class="compare-table">
      <tr>
        <th>Import Mode</th>
        <th>DirectQuery Mode</th>
      </tr>
      <tr>
        <td>البيانات تُحمَّل داخل الـ .pbix (ضغط VertiPaq).</td>
        <td>كل interaction يرسل Query للقاعدة مباشرة.</td>
      </tr>
      <tr>
        <td>سريع جداً. DAX كاملة مدعومة.</td>
        <td>بطيء نسبياً. DAX مقيّدة.</td>
      </tr>
      <tr>
        <td>البيانات ليست Real-Time (تحتاج Refresh).</td>
        <td>Real-Time دائماً.</td>
      </tr>
      <tr>
        <td><span class="yes">✔ الاختيار الافتراضي في 90% من الحالات</span></td>
        <td>فقط لو الداتا > 1GB أو Real-Time مطلوب.</td>
      </tr>
    </table>

    <div class="lesson-card">
      <h3>أسباب البطء الشائعة وحلولها</h3>
      <div class="code-block">
<span class="cm">❌ 1. Calculated Columns كثيرة:</span>
<span class="cm">   كل Calculated Column بياخد RAM وبيتعمل حسابه عند كل Refresh.</span>
<span class="cm">   الحل: حوّل ما تقدر منها لـ Power Query Columns (M Code).</span>

<span class="cm">❌ 2. Many-to-Many Relationships:</span>
<span class="cm">   بيسبب Expand Table يضرب حجم البيانات.</span>
<span class="cm">   الحل: اعمل Bridge Table تحوّلها لـ 1:Many.</span>

<span class="cm">❌ 3. Bidirectional Filters:</span>
<span class="cm">   كل Bi-directional بيضاعف مسارات الفلترة.</span>
<span class="cm">   الحل: استخدم CROSSFILTER في DAX فقط لما تحتاجه.</span>

<span class="cm">❌ 4. SUMX على جداول ضخمة:</span>
<span class="cm">   SUMX بتمشي صف بصف — على مليون صف = بطء.</span>
<span class="cm">   الحل: احسب العمود مسبقاً في Power Query.</span>

<span class="cm">❌ 5. ALL() على جدول كبير في Measure:</span>
<span class="cm">   الحل: استخدم REMOVEFILTERS(Column) بدل ALL(Table).</span>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Performance Analyzer — قياس سرعة كل Visual</h3>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>View → Performance Analyzer → Start Recording</h4>
            <p>اضغط "Refresh visuals" وانتظر. كل Visual هيظهر الوقت اللي أخده.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>تحليل النتيجة</h4>
            <p>كل Visual فيه 3 أوقات: DAX Query (وقت الـ Measure)، Visual Display (الرسم)، Other. ركّز على DAX Query العالية.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>Copy Query للـ DAX Studio</h4>
            <p>اضغط "Copy Query" في الـ Visual البطيء والصقه في DAX Studio لتحليل أعمق.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>قواعد الأداء الذهبية</h3>
      <div class="code-block">
<span class="cm">✅ 1. Star Schema دائماً — مش Flat Table</span>
<span class="cm">✅ 2. Measures بدل Calculated Columns</span>
<span class="cm">✅ 3. حدد أنواع البيانات في Power Query (مش تسيبها Auto)</span>
<span class="cm">✅ 4. اشطب الأعمدة غير المستخدمة في Power Query قبل Load</span>
<span class="cm">✅ 5. VAR لتخزين الحسابات المتكررة في نفس الـ Measure</span>
<span class="cm">✅ 6. تجنب DISTINCT() على أعمدة High Cardinality</span>
<span class="cm">✅ 7. Date Table منفصلة ومعلّمة دائماً</span>
<span class="cm">✅ 8. لا تستخدم IF() لمنع خطأ القسمة — استخدم DIVIDE()</span>
      </div>
    </div>

    <div class="tip-box">
      <div class="icon">🚀</div>
      <p><strong>DAX Studio:</strong> أداة مجانية منفصلة (daxstudio.org) للتحليل العميق لأداء الـ DAX. تقدر تشوف Server Timings، Storage Engine Calls، وترى VertiPaq Analyzer لتحليل حجم كل عمود في الموديل. المحترفون لا يستغنون عنها.</p>
    </div>` }],
  },
  "python-pbi": {
    eyebrow: "07 · 02 — Python داخل Power BI",
    title: "Python في Power BI",
    lede: "دمج Python مع Power BI يفتح أبواب التحليل الإحصائي المتقدم والمرئيات غير المتوفرة في Power BI الافتراضي — من Seaborn للـ Forecasting.",
    en_eyebrow: "06 · 07 — Python Integration",
    en_lede: "Using Python scripts within Power BI for advanced data transformations.",
    sectionId: "python-pbi",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>المتطلبات الأساسية</h3>
      <ul>
        <li>تثبيت Python (3.x) على جهازك — يفضل Anaconda Distribution.</li>
        <li>مكتبات مطلوبة: <code style="background:var(--bg4);padding:2px 6px;border-radius:4px;">pandas</code>, <code style="background:var(--bg4);padding:2px 6px;border-radius:4px;">matplotlib</code>, <code style="background:var(--bg4);padding:2px 6px;border-radius:4px;">seaborn</code></li>
        <li>ضبط المسار: File ← Options ← Python Scripting ← حدد مجلد Python.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>استخدام Python في Power Query (تحويل البيانات)</h3>
      <p>يمكن تشغيل سكريبت Python كمصدر بيانات أو كخطوة تحويل داخل Power Query:</p>
      <div class="code-block">
<span style="color:var(--text3);"># استيراد بيانات من Python كمصدر</span>
import pandas as pd

df = pd.read_csv('C:/data/sales.csv')
df['YearMonth'] = pd.to_datetime(df['Date']).dt.to_period('M').astype(str)
df = df[df['Sales'] > 0]  <span style="color:var(--text3);"># تنظيف: حذف القيم السالبة</span>
      </div>
      <p style="margin-top:0.75rem;color:var(--text2);font-size:0.9rem;">Power Query يقرأ الـ DataFrame الأخير في السكريبت تلقائياً كجدول.</p>
    </div>

    <div class="lesson-card">
      <h3>استخدام Python لإنشاء Visual مخصص</h3>
      <p>أضف <strong>Python Visual</strong> من Visualizations Pane واسحب الأعمدة اللازمة:</p>
      <div class="code-block">
import matplotlib.pyplot as plt
import seaborn as sns

<span style="color:var(--text3);"># dataset هو DataFrame تلقائي من Power BI</span>
fig, ax = plt.subplots(figsize=(8, 4))
sns.boxplot(data=dataset, x='Category', y='Sales',
            palette='viridis', ax=ax)
ax.set_title('Sales Distribution by Category')
ax.set_xlabel('')
plt.tight_layout()
plt.show()
      </div>
    </div>

    <div class="lesson-card">
      <h3>تحليل إحصائي — Forecasting بسيط</h3>
      <div class="code-block">
import matplotlib.pyplot as plt
import numpy as np

x = np.arange(len(dataset))
y = dataset['Sales'].values
z = np.polyfit(x, y, 1)
p = np.poly1d(z)

plt.figure(figsize=(8,4))
plt.plot(dataset['Month'], y, 'o-', label='Actual')
plt.plot(dataset['Month'], p(x), '--', color='orange', label='Trend')
plt.legend()
plt.tight_layout()
plt.show()
      </div>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>قيود مهمة:</strong> Python Visuals لا تعمل في Power BI Service مباشرة (تحتاج Gateway مع Python مثبّت). وقت التحديث قد يكون بطيئاً مع البيانات الضخمة.</p>
    </div>` }],
  },
  "paginated": {
    eyebrow: "07 · 03 — التقارير المُصفَّحة",
    title: "Paginated Reports — التقارير المُصفَّحة",
    lede: "Power BI Paginated Reports هي التقارير المصممة للطباعة والتصدير — مثالية للفواتير، كشوف الرواتب، التقارير المحاسبية التي تمتد لصفحات متعددة.",
    en_eyebrow: "06 · 08 — Paginated Reports",
    en_lede: "Creating pixel-perfect reports optimized for printing and distribution.",
    sectionId: "paginated",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>متى تستخدم Paginated Reports؟</h3>
      <ul>
        <li>عندما تحتاج تقريراً يطبع بشكل مثالي مهما كان عدد الصفحات.</li>
        <li>الفواتير والكشوفات الشهرية لكل عميل على حدة.</li>
        <li>تقارير تحتوي على جداول بآلاف الصفوف (Power BI Interactive يقطعها).</li>
        <li>تقارير تُرسل تلقائياً عبر البريد (Email Subscriptions في Power BI Service).</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>الفرق بين Interactive و Paginated</h3>
      <table style="width:100%;border-collapse:collapse;font-size:0.92rem;">
        <thead>
          <tr style="background:var(--bg4);color:var(--gold);">
            <th style="padding:10px;border:1px solid var(--border);text-align:right;">المعيار</th>
            <th style="padding:10px;border:1px solid var(--border);text-align:right;">Interactive (.pbix)</th>
            <th style="padding:10px;border:1px solid var(--border);text-align:right;">Paginated (.rdl)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:8px;border:1px solid var(--border);">الهدف</td><td style="padding:8px;border:1px solid var(--border);">الاستكشاف والتفاعل</td><td style="padding:8px;border:1px solid var(--border);">الطباعة والتصدير</td></tr>
          <tr style="background:var(--bg4);"><td style="padding:8px;border:1px solid var(--border);">الأداة</td><td style="padding:8px;border:1px solid var(--border);">Power BI Desktop</td><td style="padding:8px;border:1px solid var(--border);">Power BI Report Builder</td></tr>
          <tr><td style="padding:8px;border:1px solid var(--border);">الصفحات</td><td style="padding:8px;border:1px solid var(--border);">محدودة بالشاشة</td><td style="padding:8px;border:1px solid var(--border);">تمتد تلقائياً</td></tr>
          <tr style="background:var(--bg4);"><td style="padding:8px;border:1px solid var(--border);">التصدير</td><td style="padding:8px;border:1px solid var(--border);">PDF محدود</td><td style="padding:8px;border:1px solid var(--border);">PDF, Excel, Word, CSV</td></tr>
          <tr><td style="padding:8px;border:1px solid var(--border);">البيانات</td><td style="padding:8px;border:1px solid var(--border);">مضمّنة في الملف</td><td style="padding:8px;border:1px solid var(--border);">Live Query مباشر</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-card">
      <h3>أداة البناء — Power BI Report Builder</h3>
      <p>تحمّلها مجاناً من موقع Microsoft. تشبه Excel في التخطيط الشبكي:</p>
      <ul>
        <li><strong>Data Sources:</strong> تحدد مصدر البيانات (Power BI Dataset, SQL Server…).</li>
        <li><strong>Datasets:</strong> استعلام SQL أو MDX يجلب البيانات.</li>
        <li><strong>Report Items:</strong> Table, Matrix, Chart, Image, Textbox.</li>
        <li><strong>Parameters:</strong> مثل فلتر التاريخ — يمكن تمريرها من Power BI Service.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>النشر والجدولة</h3>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>رفع التقرير</h4>
            <p>من Power BI Report Builder: Publish ← اختار الـ Workspace (يلزم ترخيص Premium أو PPU).</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>جدولة الإرسال</h4>
            <p>في Power BI Service: فتح التقرير ← Subscribe ← ضبط الجدول والمستلمين والصيغة (PDF/Excel).</p>
          </div>
        </div>
      </div>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>الاستخدام المثالي:</strong> استخدم Interactive Report للـ Dashboard التنفيذي (المديرون يستكشفون)، و Paginated Report للكشوفات الدورية (تُرسل تلقائياً لكل فرع/عميل).</p>
    </div>` }],
  },
  "kpi-finance": {
    eyebrow: "08 · 01 — المالية",
    title: "💰 المؤشرات المالية — Financial KPIs",
    lede: "أهم مؤشرات الأداء المالي المستخدمة في تحليل صحة الشركة وربحيتها. كل KPI هنا فيه معادلة DAX جاهزة، مثال عملي، وأهميته.",
    en_eyebrow: "07 · 01 — Financial KPIs",
    en_lede: "Key financial metrics: Revenue, Profit, Margins, and Cash Flow.",
    sectionId: "kpi-finance",
    blocks: [{ kind: "html", html: `<div class="kpi-domain-header">
      <div class="kpi-domain-icon">💰</div>
      <div>
        <h3>الـ Domain المالي</h3>
        <p>بيقيس الصحة المالية العامة للشركة — الربحية، التكاليف، العائد، والسيولة. أهم domain بالنسبة لإدارة الشركة والمستثمرين.</p>
      </div>
    </div>

    <!-- KPI 1: Gross Profit Margin -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">1</div>
        <h4>هامش الربح الإجمالي <span class="kpi-en">Gross Profit Margin</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>(الإيرادات − تكلفة البضاعة) ÷ الإيرادات × 100</p></div>
          <div class="kpi-info-box"><div class="kpi-label">المعيار الجيد</div><p>يعتمد على القطاع — تجزئة: 30–50% | تقنية: 60–80%</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">Gross Profit Margin %</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>( Sales[Revenue] ) - <span class="fn">SUM</span>( Sales[COGS] ),
    <span class="fn">SUM</span>( Sales[Revenue] )
) * <span class="num">100</span>
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>شركة إيراداتها <strong>5,000,000 جنيه</strong> وتكلفة البضاعة <strong>3,000,000 جنيه</strong>:<br>
          Gross Profit = 2,000,000 ÷ 5,000,000 × 100 = <strong>40%</strong><br>
          يعني مقابل كل 100 جنيه بيعات، الشركة بتكسب 40 جنيه قبل المصاريف التشغيلية.</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>أول مؤشر بيقرأه أي مستثمر. لو الـ margin بتنخفض مع الوقت، يعني التكاليف بترتفع أو الأسعار بتنخفض — لازم تتدخل فوراً.</p>
        </div>
      </div>
    </div>

    <!-- KPI 2: Net Profit Margin -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">2</div>
        <h4>صافي هامش الربح <span class="kpi-en">Net Profit Margin</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>صافي الربح ÷ الإيرادات × 100</p></div>
          <div class="kpi-info-box"><div class="kpi-label">المعيار الجيد</div><p>فوق 10% ممتاز — 5-10% مقبول — أقل من 5% تحتاج مراجعة</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">Net Profit Margin %</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>( Financials[Net_Profit] ),
    <span class="fn">SUM</span>( Financials[Revenue] )
) * <span class="num">100</span>
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>إيرادات <strong>5,000,000</strong> — بعد كل المصاريف صافي الربح <strong>350,000</strong>:<br>
          Net Margin = 350,000 ÷ 5,000,000 × 100 = <strong>7%</strong><br>
          الـ bottom line الحقيقية اللي بتبقى عند الشركة من كل جنيه بتبيعه.</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>الـ bottom line الأهم في أي تقرير مالي. بيدي الصورة الكاملة بعد كل التكاليف والضرائب والفوائد. المديرون بيبنوا عليه قرارات التوسع.</p>
        </div>
      </div>
    </div>

    <!-- KPI 3: Operating Expense Ratio -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">3</div>
        <h4>نسبة المصاريف التشغيلية <span class="kpi-en">Operating Expense Ratio</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>المصاريف التشغيلية ÷ الإيرادات × 100</p></div>
          <div class="kpi-info-box"><div class="kpi-label">الهدف</div><p>كلما أقل كلما أحسن — الشركة أكفأ في التحكم بمصاريفها</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">OpEx Ratio %</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>( Expenses[Operating_Expenses] ),
    <span class="fn">SUM</span>( Financials[Revenue] )
) * <span class="num">100</span>
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>مصاريف تشغيلية <strong>800,000</strong> على إيرادات <strong>5,000,000</strong>:<br>
          OpEx Ratio = 16% — يعني 16 قرش من كل جنيه بيروح في تشغيل الشركة (مرتبات، إيجارات، تسويق...)</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>لو الإيرادات بتزيد والـ ratio ثابت أو بيزيد، الشركة مش بتستفيد من الـ scale. المطلوب إن الـ ratio ينخفض مع نمو الإيرادات.</p>
        </div>
      </div>
    </div>

    <!-- KPI 4: Return on Investment -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">4</div>
        <h4>العائد على الاستثمار <span class="kpi-en">Return on Investment (ROI)</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>(صافي الربح ÷ تكلفة الاستثمار) × 100</p></div>
          <div class="kpi-info-box"><div class="kpi-label">المعيار</div><p>ROI موجب = استثمار ناجح / فوق 20% = ممتاز</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">ROI %</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>( Investments[Net_Profit] ),
    <span class="fn">SUM</span>( Investments[Investment_Cost] )
) * <span class="num">100</span>
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>صرفت <strong>1,000 جنيه</strong> على ماكينة وجبلك ربح <strong>200 جنيه</strong>:<br>
          ROI = 200 ÷ 1,000 × 100 = <strong>20%</strong><br>
          يعني كل جنيه استثمرته رجعلك 1.20 جنيه.</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>بيساعد على اتخاذ قرار: أستثمر في X ولا Y؟ قارن الـ ROI بين المشاريع المختلفة وأختار الأعلى عائداً بنفس الخطورة.</p>
        </div>
      </div>
    </div>

    <!-- KPI 5: Debt to Equity -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">5</div>
        <h4>نسبة الدين إلى حقوق الملكية <span class="kpi-en">Debt to Equity Ratio</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>إجمالي الديون ÷ حقوق المساهمين</p></div>
          <div class="kpi-info-box"><div class="kpi-label">المعيار</div><p>أقل من 1 = شركة آمنة / فوق 2 = خطر</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">Debt to Equity</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>( Balance[Total_Debt] ),
    <span class="fn">SUM</span>( Balance[Shareholder_Equity] )
)
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>ديون الشركة <strong>2,000,000</strong> وحقوق المساهمين <strong>4,000,000</strong>:<br>
          D/E = 2,000,000 ÷ 4,000,000 = <strong>0.5</strong><br>
          يعني الشركة ممولة 33% بديون و67% بأموال المساهمين — وضع صحي.</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>البنوك والمستثمرون بيبصوا عليه قبل أي قرض أو استثمار. نسبة عالية تعني الشركة تعتمد اعتماداً كبيراً على الديون لتمويل نشاطها.</p>
        </div>
      </div>
    </div>

    <!-- KPI 6: Working Capital -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">6</div>
        <h4>رأس المال العامل <span class="kpi-en">Working Capital</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>الأصول المتداولة − الالتزامات المتداولة</p></div>
          <div class="kpi-info-box"><div class="kpi-label">المعيار</div><p>موجب = الشركة قادرة على سداد التزاماتها القصيرة</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">Working Capital</span> =
<span class="fn">SUM</span>( Balance[Current_Assets] )
- <span class="fn">SUM</span>( Balance[Current_Liabilities] )
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>Current Assets = <strong>500,000</strong> — Current Liabilities = <strong>300,000</strong>:<br>
          Working Capital = <strong>200,000 جنيه</strong><br>
          الشركة عندها سيولة كافية لتغطية ديونها قصيرة المدى براحة.</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>مؤشر السيولة الأساسي — شركة Working Capital سالب ممكن تفلس حتى لو ربحانة على الورق! بيوضح قدرة الشركة على العمل اليومي.</p>
        </div>
      </div>
    </div>` }],
  },
  "kpi-sales": {
    eyebrow: "08 · 02 — المبيعات",
    title: "📈 مؤشرات المبيعات — Sales KPIs",
    lede: "المؤشرات الأساسية لقياس أداء فريق المبيعات ونمو الإيرادات وجودة العملاء. لازم تتابعها أسبوعياً مش بس شهرياً.",
    en_eyebrow: "07 · 02 — Sales KPIs",
    en_lede: "Tracking sales performance: Revenue, Orders, Customer Acquisition, and Churn.",
    sectionId: "kpi-sales",
    blocks: [{ kind: "html", html: `<div class="kpi-domain-header">
      <div class="kpi-domain-icon">📈</div>
      <div>
        <h3>الـ Domain المبيعاتي</h3>
        <p>بيقيس كفاءة فريق المبيعات، معدل النمو، وجودة الصفقات. أهم domain لمديري المبيعات وال C-Level.</p>
      </div>
    </div>

    <!-- KPI 1: Revenue Growth Rate -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">1</div>
        <h4>معدل نمو الإيرادات <span class="kpi-en">Revenue Growth Rate</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>(إيرادات الفترة الحالية − الفترة السابقة) ÷ الفترة السابقة × 100</p></div>
          <div class="kpi-info-box"><div class="kpi-label">المعيار</div><p>نمو فوق 15% سنوياً = ممتاز للشركات المتوسطة</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure — مع Time Intelligence</div>
        <div class="kpi-formula-box">
<span class="kw">Revenue Growth %</span> =
<span class="fn">VAR</span> CurrentRev = <span class="fn">SUM</span>( Sales[Revenue] )
<span class="fn">VAR</span> PrevRev =
    <span class="fn">CALCULATE</span>(
        <span class="fn">SUM</span>( Sales[Revenue] ),
        <span class="fn">SAMEPERIODLASTYEAR</span>( Dates[Date] )
    )
<span class="fn">RETURN</span>
    <span class="fn">DIVIDE</span>( CurrentRev - PrevRev, PrevRev ) * <span class="num">100</span>
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>إيرادات 2024: <strong>5,000,000</strong> — إيرادات 2023: <strong>4,200,000</strong>:<br>
          Growth = (5,000,000 − 4,200,000) ÷ 4,200,000 × 100 = <strong>19%</strong> نمو سنوي</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>المقياس الأساسي للصحة التجارية. نمو متسق أهم من نمو ضخم لمرة واحدة. قارنه مع متوسط نمو الصناعة لتحديد موقع الشركة.</p>
        </div>
      </div>
    </div>

    <!-- KPI 2: Average Order Value -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">2</div>
        <h4>متوسط قيمة الطلب <span class="kpi-en">Average Order Value (AOV)</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>إجمالي الإيرادات ÷ عدد الطلبات</p></div>
          <div class="kpi-info-box"><div class="kpi-label">الهدف</div><p>زيادة الـ AOV بـ 10-20% = زيادة إيرادات بدون عملاء جدد</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">Average Order Value</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>( Orders[Revenue] ),
    <span class="fn">DISTINCTCOUNT</span>( Orders[Order_ID] )
)
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>إجمالي إيرادات الشهر <strong>200,000</strong> على <strong>500 طلب</strong>:<br>
          AOV = 200,000 ÷ 500 = <strong>400 جنيه</strong> متوسط قيمة الطلب<br>
          استراتيجية upselling ممكن ترفعه لـ 480 جنيه = زيادة 20% في الإيرادات!</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>رفع الـ AOV أرخص بكثير من اكتساب عملاء جدد. تتابعه مع استراتيجيات upsell وcross-sell لقياس فعاليتها.</p>
        </div>
      </div>
    </div>

    <!-- KPI 3: Sales Target Achievement -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">3</div>
        <h4>نسبة تحقيق الهدف <span class="kpi-en">Sales Target Achievement %</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>المبيعات الفعلية ÷ الهدف × 100</p></div>
          <div class="kpi-info-box"><div class="kpi-label">المعيار</div><p>فوق 100% = تجاوز الهدف / 80-100% = مقبول / أقل من 80% = مشكلة</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure — مع جدول Targets</div>
        <div class="kpi-formula-box">
<span class="kw">Target Achievement %</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>( Sales[Actual_Revenue] ),
    <span class="fn">SUM</span>( Targets[Target_Revenue] )
) * <span class="num">100</span>

<span class="cm">-- مع Conditional Color باستخدام IF</span>
<span class="kw">Achievement Status</span> =
<span class="fn">IF</span>( [Target Achievement %] >= <span class="num">100</span>, <span class="str">"✅ تجاوز"</span>,
<span class="fn">IF</span>( [Target Achievement %] >= <span class="num">80</span>, <span class="str">"🟡 مقبول"</span>, <span class="str">"🔴 خطر"</span> ))
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>مبيعات شهر مارس الفعلية <strong>480,000</strong> والهدف كان <strong>500,000</strong>:<br>
          Achievement = 480,000 ÷ 500,000 × 100 = <strong>96%</strong> — مقبول لكن قريب من الخطر</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>أبسط وأسرع مؤشر لمتابعة فريق المبيعات. اعمله لكل مندوب مبيعات وكل منطقة وكل منتج لتحديد أين تحتاج تتدخل.</p>
        </div>
      </div>
    </div>

    <!-- KPI 4: Customer Lifetime Value -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">4</div>
        <h4>القيمة الدائمة للعميل <span class="kpi-en">Customer Lifetime Value (CLV)</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>متوسط الشراء × تكرار الشراء سنوياً × سنوات العميل</p></div>
          <div class="kpi-info-box"><div class="kpi-label">الهدف</div><p>CLV : CAC نسبة 3:1 على الأقل = استثمار ناجح في اكتساب العملاء</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">CLV</span> =
<span class="fn">VAR</span> AvgPurchase =
    <span class="fn">AVERAGEX</span>( Customers, [Total Revenue per Customer] )
<span class="fn">VAR</span> PurchaseFreq =
    <span class="fn">DIVIDE</span>( <span class="fn">COUNTROWS</span>( Orders ), <span class="fn">DISTINCTCOUNT</span>( Orders[Customer_ID] ) )
<span class="fn">RETURN</span>
    AvgPurchase * PurchaseFreq * <span class="num">3</span> <span class="cm">-- لو متوسط عمر العميل 3 سنوات</span>
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>متوسط شراء العميل <strong>500 جنيه</strong> — يشتري <strong>4 مرات</strong> في السنة — ويظل <strong>3 سنوات</strong>:<br>
          CLV = 500 × 4 × 3 = <strong>6,000 جنيه</strong> — يعني يستحق إنك تصرف حتى 2,000 جنيه لاكتسابه.</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>بيحدد كم تقدر تصرف لاكتساب عميل جديد. شركات بتعرف CLV بتتنافس أقوى لأنها عارفة بتصرف على ايه.</p>
        </div>
      </div>
    </div>

    <!-- KPI 5: Conversion Rate -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">5</div>
        <h4>معدل التحويل <span class="kpi-en">Sales Conversion Rate</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>عدد الصفقات المغلقة ÷ إجمالي الفرص × 100</p></div>
          <div class="kpi-info-box"><div class="kpi-label">المعيار</div><p>B2B: 20-30% جيد / B2C: 1-3% طبيعي حسب القطاع</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">Conversion Rate %</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">CALCULATE</span>(
        <span class="fn">COUNTROWS</span>( Pipeline ),
        Pipeline[Stage] = <span class="str">"Won"</span>
    ),
    <span class="fn">COUNTROWS</span>( Pipeline )
) * <span class="num">100</span>
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>فريق مبيعات عنده <strong>200 فرصة</strong> في الـ pipeline وأغلق منهم <strong>50 صفقة</strong>:<br>
          Conversion = 50 ÷ 200 × 100 = <strong>25%</strong> — قارنه بالمنافسين والشهر السابق.</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>بيكشف كفاءة فريق المبيعات في إغلاق الصفقات. لو rate منخفض مع leads كتيرة = مشكلة في جودة المبيعات مش جودة التسويق.</p>
        </div>
      </div>
    </div>` }],
  },
  "kpi-inventory": {
    eyebrow: "08 · 03 — المخزون والإمداد",
    title: "📦 مؤشرات المخزون وسلسلة الإمداد — Inventory & Supply KPIs",
    lede: "مؤشرات بتقيس كفاءة إدارة المخزون والديون التجارية. حرجة جداً في قطاعات التجزئة والتصنيع والتوزيع.",
    en_eyebrow: "07 · 03 — Inventory KPIs",
    en_lede: "Managing stock: Turnover, Stockout Rate, and Carrying Cost.",
    sectionId: "kpi-inventory",
    blocks: [{ kind: "html", html: `<div class="kpi-domain-header">
      <div class="kpi-domain-icon">📦</div>
      <div>
        <h3>الـ Domain — Supply Chain</h3>
        <p>بيقيس سرعة دوران المخزون، تحصيل الديون، وعلاقة الشركة بموردينها وعملائها في الجانب المالي.</p>
      </div>
    </div>

    <!-- KPI 1: Inventory Turnover -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">1</div>
        <h4>معدل دوران المخزون <span class="kpi-en">Inventory Turnover</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>تكلفة البضاعة المباعة ÷ متوسط المخزون</p></div>
          <div class="kpi-info-box"><div class="kpi-label">المعيار</div><p>كلما أعلى كلما أحسن — تجزئة: 4-6 مرات سنوياً جيد</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">Inventory Turnover</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>( Sales[COGS] ),
    <span class="fn">AVERAGE</span>( Inventory[Inventory_Value] )
)

<span class="cm">-- أيام المخزون (Days in Inventory)</span>
<span class="kw">Days in Inventory</span> = <span class="fn">DIVIDE</span>( <span class="num">365</span>, [Inventory Turnover] )
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>COGS = <strong>3,000,000</strong> — متوسط المخزون = <strong>500,000</strong>:<br>
          Turnover = 6 مرات سنوياً — كل <strong>61 يوم</strong> بيتجدد المخزون بالكامل<br>
          لو 2 مرات بس = مخزون راكد = خسارة في التمويل والتخزين.</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>مخزون بطيء = أموال محجوزة بدون عائد + تكاليف تخزين + خطر تلف. مخزون سريع جداً = خطر نفاد. لازم التوازن حسب طبيعة المنتج.</p>
        </div>
      </div>
    </div>

    <!-- KPI 2: DSO -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">2</div>
        <h4>أيام المبيعات المعلقة <span class="kpi-en">Days Sales Outstanding (DSO)</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>(الذمم المدينة ÷ إجمالي مبيعات الآجل) × 365</p></div>
          <div class="kpi-info-box"><div class="kpi-label">الهدف</div><p>كلما أقل كلما أحسن — يعكس سرعة تحصيل الديون من العملاء</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">DSO</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>( Receivables[Accounts_Receivable] ),
    <span class="fn">SUM</span>( Sales[Credit_Sales] )
) * <span class="num">365</span>
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>الذمم المدينة: <strong>100,000</strong> — مبيعات آجل سنوية: <strong>1,200,000</strong>:<br>
          DSO = (100,000 ÷ 1,200,000) × 365 = <strong>30 يوم</strong><br>
          يعني الشركة بتاخد 30 يوم لتحصيل فلوسها من العملاء في المتوسط.</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>DSO مرتفع = عملاء بيتأخروا في الدفع = ضغط على السيولة. لو DSO > شروط الدفع المتفق عليها = مشكلة في التحصيل تحتاج تحقيق.</p>
        </div>
      </div>
    </div>

    <!-- KPI 3: AP Days -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">3</div>
        <h4>أيام سداد الموردين <span class="kpi-en">Accounts Payable Days</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>(الذمم الدائنة ÷ تكلفة البضاعة) × 365</p></div>
          <div class="kpi-info-box"><div class="kpi-label">الاستراتيجية</div><p>اسعى لـ AP Days أطول من DSO = الشركة بتاخد فلوسها قبل ما تدفعها</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">AP Days</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>( Payables[Accounts_Payable] ),
    <span class="fn">SUM</span>( Sales[COGS] )
) * <span class="num">365</span>

<span class="cm">-- مقارنة DSO vs AP Days</span>
<span class="kw">Cash Position Status</span> =
<span class="fn">IF</span>( [AP Days] > [DSO], <span class="str">"✅ وضع سيولة جيد"</span>, <span class="str">"⚠️ ضغط على السيولة"</span> )
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>DSO = <strong>30 يوم</strong> (بتاخد فلوسك من العملاء في 30 يوم)<br>
          AP Days = <strong>45 يوم</strong> (بتدفع للموردين بعد 45 يوم)<br>
          النتيجة: عندك <strong>15 يوم</strong> تستخدم فيها فلوس الموردين — وضع مثالي!</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>التوازن بين DSO وAP Days هو سر إدارة السيولة. شركات زي وول مارت بتحتفظ بـ AP Days عالية جداً كأداة تمويل مجانية من الموردين.</p>
        </div>
      </div>
    </div>

    <!-- KPI 4: Cost to Revenue -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">4</div>
        <h4>نسبة التكلفة للإيرادات <span class="kpi-en">Cost to Revenue Ratio</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>إجمالي التكاليف ÷ الإيرادات × 100</p></div>
          <div class="kpi-info-box"><div class="kpi-label">المعيار</div><p>أقل من 70% = هامش جيد / فوق 90% = الشركة على وشك خسارة</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">Cost to Revenue %</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>( Costs[Total_Costs] ),
    <span class="fn">SUM</span>( Sales[Revenue] )
) * <span class="num">100</span>
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>إيرادات <strong>5,000,000</strong> — إجمالي التكاليف <strong>3,800,000</strong>:<br>
          Cost to Revenue = 76% — يعني 76 قرش من كل جنيه بيعات بيروح في التكاليف<br>
          هامش الربح الصافي المتاح = 24% بس.</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>بيوضح إيه قد إيه الإيرادات بتتحول لأرباح. تتابعه شهرياً وحلل فين بالظبط التكاليف بترتفع — هل في COGS ولا في المصاريف التشغيلية.</p>
        </div>
      </div>
    </div>` }],
  },
  "kpi-hr": {
    eyebrow: "08 · 04 — الموارد البشرية",
    title: "👥 مؤشرات الموارد البشرية — HR KPIs",
    lede: "المؤشرات الأساسية لقياس كفاءة القوى البشرية وتكاليف التوظيف والاحتفاظ بالموظفين. مهمة جداً في الشركات الكبيرة.",
    en_eyebrow: "07 · 04 — HR KPIs",
    en_lede: "Employee metrics: Headcount, Turnover, Satisfaction, and Productivity.",
    sectionId: "kpi-hr",
    blocks: [{ kind: "html", html: `<div class="kpi-domain-header">
      <div class="kpi-domain-icon">👥</div>
      <div>
        <h3>الـ Domain — Human Resources</h3>
        <p>بيقيس صحة بيئة العمل، تكلفة الموظفين، وإنتاجيتهم. بياناته من HR Systems زي SAP أو Oracle أو حتى Excel.</p>
      </div>
    </div>

    <!-- KPI 1: Employee Turnover Rate -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">1</div>
        <h4>معدل دوران الموظفين <span class="kpi-en">Employee Turnover Rate</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>(عدد الموظفين المغادرين ÷ متوسط عدد الموظفين) × 100</p></div>
          <div class="kpi-info-box"><div class="kpi-label">المعيار</div><p>أقل من 10% سنوياً = صحي / فوق 20% = مشكلة إدارية أو بيئة عمل</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">Turnover Rate %</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">CALCULATE</span>(
        <span class="fn">COUNTROWS</span>( Employees ),
        Employees[Status] = <span class="str">"Left"</span>
    ),
    <span class="fn">AVERAGE</span>( HeadcountSnapshot[Headcount] )
) * <span class="num">100</span>
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>شركة بـ <strong>200 موظف</strong> — غادر منهم <strong>30 موظف</strong> خلال السنة:<br>
          Turnover = 30 ÷ 200 × 100 = <strong>15%</strong><br>
          كل موظف بيغادر بيكلف الشركة تقريباً 50-200% من راتبه السنوي في تكاليف إعادة التوظيف!</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>Turnover مرتفع = تكاليف ضخمة + فقدان خبرات + تأثير على معنويات الفريق. لازم تحلل أسباب المغادرة بتفصيل عبر exit interviews.</p>
        </div>
      </div>
    </div>

    <!-- KPI 2: Cost per Hire -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">2</div>
        <h4>تكلفة التوظيف <span class="kpi-en">Cost per Hire</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>إجمالي تكاليف التوظيف ÷ عدد الموظفين المُعيَّنين</p></div>
          <div class="kpi-info-box"><div class="kpi-label">المعيار</div><p>يتفاوت حسب الدور — يشمل الإعلانات + وكالات + وقت HR + أونبوردنج</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">Cost per Hire</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>( HR_Costs[Recruitment_Cost] ),
    <span class="fn">CALCULATE</span>(
        <span class="fn">COUNTROWS</span>( Employees ),
        Employees[Status] = <span class="str">"Hired"</span>
    )
)
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>تكاليف توظيف الربع الأول <strong>150,000 جنيه</strong> — تم تعيين <strong>25 موظف</strong>:<br>
          Cost per Hire = <strong>6,000 جنيه</strong> للموظف الواحد<br>
          قارنه بالربع السابق لقياس تحسن كفاءة قسم HR.</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>خفض Cost per Hire بدون خفض جودة التوظيف هو هدف كل HR. قياسه بدقة بيكشف أين الإنفاق الزائد — وكالات؟ إعلانات؟ إجراءات طويلة؟</p>
        </div>
      </div>
    </div>

    <!-- KPI 3: Absenteeism Rate -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">3</div>
        <h4>معدل الغياب <span class="kpi-en">Absenteeism Rate</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>(أيام الغياب ÷ إجمالي أيام العمل المتاحة) × 100</p></div>
          <div class="kpi-info-box"><div class="kpi-label">المعيار</div><p>أقل من 3% = طبيعي / فوق 5% = مشكلة في بيئة العمل أو الإدارة</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">Absenteeism Rate %</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>( Attendance[Absent_Days] ),
    <span class="fn">SUM</span>( Attendance[Working_Days_Available] )
) * <span class="num">100</span>
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>فريق من <strong>50 موظف</strong> × <strong>20 يوم عمل</strong> = 1,000 يوم متاح<br>
          إجمالي أيام الغياب غير المبرر = <strong>45 يوم</strong><br>
          Absenteeism = 45 ÷ 1,000 × 100 = <strong>4.5%</strong> — يحتاج متابعة.</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>ارتفاع مفاجئ في الغياب = إنذار مبكر لمشاكل في بيئة العمل، ضغط عمل زائد، أو إدارة سيئة. اكشفه مبكراً قبل ما يتحول لـ turnover.</p>
        </div>
      </div>
    </div>

    <!-- KPI 4: Revenue per Employee -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">4</div>
        <h4>الإيراد لكل موظف <span class="kpi-en">Revenue per Employee</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>إجمالي الإيرادات ÷ عدد الموظفين</p></div>
          <div class="kpi-info-box"><div class="kpi-label">المعيار</div><p>مقياس إنتاجية الفريق — تقنية: ملايين / تجزئة: مئات الآلاف</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">Revenue per Employee</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>( Sales[Revenue] ),
    <span class="fn">CALCULATE</span>(
        <span class="fn">COUNTROWS</span>( Employees ),
        Employees[Status] = <span class="str">"Active"</span>
    )
)
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>إيرادات <strong>10,000,000 جنيه</strong> — عدد الموظفين <strong>50 موظف</strong>:<br>
          Revenue per Employee = <strong>200,000 جنيه</strong> لكل موظف سنوياً<br>
          لو وظفت 10 موظفين جدد وما زادش الرقم = كفاءة بتنخفض.</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>أبسط مقياس لإنتاجية الفريق. ارتفاعه مع نمو الإيرادات يعني الشركة تحقق economies of scale حقيقية من القوى البشرية.</p>
        </div>
      </div>
    </div>` }],
  },
  "kpi-marketing": {
    eyebrow: "08 · 05 — التسويق",
    title: "📣 مؤشرات التسويق — Marketing KPIs",
    lede: "مؤشرات قياس كفاءة الإنفاق التسويقي، اكتساب العملاء، والاحتفاظ بهم. لازم تُربط دائماً بإيرادات حقيقية مش مجرد vanity metrics.",
    en_eyebrow: "07 · 05 — Marketing KPIs",
    en_lede: "Campaign metrics: CAC, LTV, Conversion Rate, and ROI.",
    sectionId: "kpi-marketing",
    blocks: [{ kind: "html", html: `<div class="kpi-domain-header">
      <div class="kpi-domain-icon">📣</div>
      <div>
        <h3>الـ Domain التسويقي</h3>
        <p>بيقيس العائد على الإنفاق التسويقي وكفاءة اكتساب العملاء والاحتفاظ بهم. بياناته من Google Ads, Meta, CRM.</p>
      </div>
    </div>

    <!-- KPI 1: CAC -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">1</div>
        <h4>تكلفة اكتساب العميل <span class="kpi-en">Customer Acquisition Cost (CAC)</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>إجمالي تكاليف التسويق والمبيعات ÷ عدد العملاء الجدد</p></div>
          <div class="kpi-info-box"><div class="kpi-label">الهدف</div><p>CAC أقل من ثلث الـ CLV — نسبة CLV:CAC = 3:1 على الأقل</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">CAC</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>( Marketing[Total_Marketing_Cost] )
    + <span class="fn">SUM</span>( Sales_Costs[Total_Sales_Cost] ),
    <span class="fn">CALCULATE</span>(
        <span class="fn">DISTINCTCOUNT</span>( Customers[Customer_ID] ),
        Customers[Is_New] = <span class="num">1</span>
    )
)

<span class="cm">-- نسبة CLV to CAC</span>
<span class="kw">CLV to CAC Ratio</span> = <span class="fn">DIVIDE</span>( [CLV], [CAC] )
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>إنفاق تسويقي + مبيعات <strong>100,000 جنيه</strong> — عملاء جدد: <strong>50 عميل</strong>:<br>
          CAC = 100,000 ÷ 50 = <strong>2,000 جنيه</strong> لكل عميل<br>
          لو CLV = 8,000 → نسبة 4:1 = استثمار ناجح جداً ✅</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>شركات كتيرة بتفلس لأنها بتصرف على اكتساب عملاء أكتر من اللي بيجيبوه. قياسه بدقة هو الفرق بين نمو مستدام ونمو انتحاري.</p>
        </div>
      </div>
    </div>

    <!-- KPI 2: ROAS -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">2</div>
        <h4>العائد على الإنفاق الإعلاني <span class="kpi-en">Return on Ad Spend (ROAS)</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>إيرادات من الإعلانات ÷ تكلفة الإعلانات</p></div>
          <div class="kpi-info-box"><div class="kpi-label">المعيار</div><p>ROAS 4x = ممتاز — أقل من 2x = مشكلة — يتفاوت حسب الـ margin</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">ROAS</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>( Ad_Revenue[Revenue_from_Ads] ),
    <span class="fn">SUM</span>( Marketing[Ad_Spend] )
)

<span class="cm">-- ROAS per Campaign</span>
<span class="kw">ROAS per Campaign</span> =
<span class="fn">CALCULATE</span>( [ROAS], <span class="fn">ALLEXCEPT</span>( Campaigns, Campaigns[Campaign_Name] ) )
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>أنفقت <strong>50,000 جنيه</strong> على إعلانات فيسبوك — جابت إيرادات <strong>200,000 جنيه</strong>:<br>
          ROAS = 200,000 ÷ 50,000 = <strong>4x</strong> — يعني كل جنيه إعلانات رجعلك 4 جنيه مبيعات ✅</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>قارن ROAS بين كل قناة إعلانية (Facebook vs Google vs TikTok) لتحويل الميزانية للقنوات الأعلى أداءً وخفض الإنفاق على الأضعف.</p>
        </div>
      </div>
    </div>

    <!-- KPI 3: Customer Retention Rate -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">3</div>
        <h4>معدل الاحتفاظ بالعملاء <span class="kpi-en">Customer Retention Rate</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>((عملاء نهاية الفترة − عملاء جدد) ÷ عملاء بداية الفترة) × 100</p></div>
          <div class="kpi-info-box"><div class="kpi-label">المعيار</div><p>فوق 85% = ممتاز / أقل من 70% = مشكلة في رضا العملاء</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">Retention Rate %</span> =
<span class="fn">VAR</span> EndCustomers = [Active Customers End of Period]
<span class="fn">VAR</span> NewCustomers = [New Customers This Period]
<span class="fn">VAR</span> StartCustomers = [Active Customers Start of Period]
<span class="fn">RETURN</span>
    <span class="fn">DIVIDE</span>( EndCustomers - NewCustomers, StartCustomers ) * <span class="num">100</span>

<span class="cm">-- Churn Rate = 100% - Retention Rate</span>
<span class="kw">Churn Rate %</span> = <span class="num">100</span> - [Retention Rate %]
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>بدأت الشهر بـ <strong>500 عميل</strong> — اكتسبت <strong>50 جديد</strong> — نهاية الشهر <strong>510 عميل</strong>:<br>
          Retention = (510 − 50) ÷ 500 × 100 = <strong>92%</strong> ✅ — يعني Churn = 8%</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>الاحتفاظ بعميل موجود أرخص بـ 5-7 مرات من اكتساب عميل جديد. Retention Rate منخفض يعني كل جهود التسويق بتملأ دلو مثقوب.</p>
        </div>
      </div>
    </div>

    <!-- KPI 4: Net Promoter Score -->
    <div class="kpi-card">
      <div class="kpi-card-header">
        <div class="kpi-num">4</div>
        <h4>مؤشر صافي المروجين <span class="kpi-en">Net Promoter Score (NPS)</span></h4>
      </div>
      <div class="kpi-card-body">
        <div class="kpi-grid">
          <div class="kpi-info-box"><div class="kpi-label">المعادلة</div><p>% المروجين (9-10) − % المنتقدين (0-6)</p></div>
          <div class="kpi-info-box"><div class="kpi-label">المعيار</div><p>فوق 50 = ممتاز / 0-30 = جيد / سالب = مشكلة خطيرة</p></div>
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure</div>
        <div class="kpi-formula-box">
<span class="kw">NPS</span> =
<span class="fn">VAR</span> Promoters =
    <span class="fn">DIVIDE</span>(
        <span class="fn">CALCULATE</span>( <span class="fn">COUNTROWS</span>(Surveys), Surveys[Score] >= <span class="num">9</span> ),
        <span class="fn">COUNTROWS</span>(Surveys)
    ) * <span class="num">100</span>
<span class="fn">VAR</span> Detractors =
    <span class="fn">DIVIDE</span>(
        <span class="fn">CALCULATE</span>( <span class="fn">COUNTROWS</span>(Surveys), Surveys[Score] <= <span class="num">6</span> ),
        <span class="fn">COUNTROWS</span>(Surveys)
    ) * <span class="num">100</span>
<span class="fn">RETURN</span> Promoters - Detractors
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p>100 استطلاع — 60 مروج (9-10) — 15 محايد (7-8) — 25 منتقد (0-6):<br>
          NPS = 60% − 25% = <strong>35</strong> — جيد لكن هناك مجال للتحسين<br>
          حلل شكاوى الـ detractors لتعرف المشاكل الجذرية.</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>أبسط وأقوى مقياس لرضا العملاء وولائهم. مرتبط مباشرة بالنمو العضوي — NPS مرتفع يعني عملاؤك بيسوقوا ليك مجاناً.</p>
        </div>
      </div>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>نصيحة احترافية:</strong> في Power BI، اربط كل الـ KPI domains ببعض في صفحة واحدة "Executive Dashboard" بـ slicers زمنية عشان المديرون يقدروا يشوفوا الصورة الكاملة بنظرة واحدة.</p>
    </div>` }],
  },
};

// Fallback stub for lessons not yet in HTML
window.stubLesson = function(lesson, chapter) {
  return {
    eyebrow: chapter.num + " · " + String(chapter.lessons.findIndex(l => l.id === lesson.id) + 1).padStart(2, "0") + " — " + chapter.title,
    title: lesson.title,
    lede: lesson.en + " — هذا الدرس قيد الإعداد.",
    isStub: true,
    blocks: [{ kind: "html", html: "<p style=\"color:var(--ink-2)\">محتوى هذا الدرس قادم قريباً.</p>" }],
  };
};