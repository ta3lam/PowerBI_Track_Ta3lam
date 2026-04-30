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
      <h3>Power BI ليس مجرد برنامج لرسم Charts</h3>
      <p>الفكرة الأساسية في Power BI هي تحويل بيانات مشتتة وغير مفهومة إلى نموذج واضح يساعدك تسأل سؤال تجاري وتجاوب عليه بثقة. التقرير الجيد لا يكتفي بأن يقول لك الرقم، بل يساعدك تفهم لماذا هذا الرقم تغيّر، وأين المشكلة، وما القرار التالي.</p>
      <p>مثال بسيط: لو عندك مبيعات من Excel، ومصاريف من نظام محاسبة، وأهداف شهرية من ملف آخر، فدور Power BI هو جمع هذه المصادر وتنظيفها وربطها ثم عرض مؤشرات مثل الإيراد، الربح، أفضل منتج، أسوأ فرع، واتجاه الأداء عبر الوقت.</p>
    </div>

    <div class="lesson-card">
      <h3>ما هو ذكاء الأعمال (Business Intelligence)؟</h3>
      <p>ذكاء الأعمال هو عملية منظمة لتحويل البيانات الخام إلى معلومات قابلة للفهم ثم إلى رؤى تساعد على القرار. كلمة "ذكاء" هنا لا تعني أن الأداة تفكر بدلًا منك، بل تعني أنها تعطيك طريقة أفضل لرؤية الواقع من خلال الأرقام.</p>
      <table class="compare-table">
        <tr>
          <th>المستوى</th>
          <th>المعنى</th>
        </tr>
        <tr>
          <td><strong>Data</strong></td>
          <td>أرقام خام مثل تاريخ البيع، اسم العميل، الكمية، السعر، والفرع.</td>
        </tr>
        <tr>
          <td><strong>Information</strong></td>
          <td>تلخيص مفهوم مثل إجمالي المبيعات في كل شهر أو حسب كل فرع.</td>
        </tr>
        <tr>
          <td><strong>Insight</strong></td>
          <td>ملاحظة لها معنى مثل أن فرعًا معينًا يبيع كثيرًا لكن هامش ربحه ضعيف.</td>
        </tr>
        <tr>
          <td><strong>Decision</strong></td>
          <td>إجراء عملي مثل مراجعة الخصومات، تغيير المخزون، أو إعادة توزيع فريق المبيعات.</td>
        </tr>
      </table>
    </div>

    <div class="lesson-card">
      <h3>مسار العمل الحقيقي داخل Power BI</h3>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>الاتصال بالبيانات</h4>
            <p>تبدأ من مصادر مختلفة: Excel، CSV، SQL Server، SharePoint، Web APIs أو أنظمة الشركة.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>تنظيف وتحويل البيانات</h4>
            <p>باستخدام Power Query تنظف الأعمدة، تغير الأنواع، توحد المسميات، وتحذف الأخطاء قبل بناء التقرير.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>بناء نموذج البيانات</h4>
            <p>تربط الجداول بعلاقات صحيحة وتفصل بين جداول الحقائق Fact وجداول الأبعاد Dimension حتى لا تصبح الأرقام مضللة.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">4</div>
          <div class="step-content">
            <h4>كتابة المقاييس والتحليل</h4>
            <p>باستخدام DAX تحسب مؤشرات مثل الإيراد، النمو، الربحية، النسبة من الإجمالي، والمقارنة مع العام السابق.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">5</div>
          <div class="step-content">
            <h4>العرض والمشاركة</h4>
            <p>تصمم صفحات التقرير، تنشرها على Power BI Service، تضبط الصلاحيات والتحديث التلقائي، ثم تشاركها مع الفريق.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>كيف تفكر كمحلل بيانات؟</h3>
      <p>قبل ما تسأل: "أعمل أي Chart؟" اسأل أولًا: "ما القرار الذي نحاول تحسينه؟" لأن التقرير الناجح يبدأ من سؤال واضح، وليس من شكل بصري جميل.</p>
      <ul>
        <li><strong>السؤال:</strong> ما المشكلة أو الفرصة التي نريد فهمها؟</li>
        <li><strong>القرار:</strong> من سيستخدم التقرير؟ وماذا سيفعل بعد رؤية الأرقام؟</li>
        <li><strong>البيانات:</strong> ما الجداول والأعمدة المطلوبة للإجابة؟ وهل تعريفاتها واضحة؟</li>
        <li><strong>الثقة:</strong> هل الأرقام نظيفة ومتصلة بعلاقات صحيحة، أم مجرد تجميع سريع؟</li>
      </ul>
      <table class="compare-table">
        <tr>
          <th>سؤال ضعيف</th>
          <th>سؤال أقوى</th>
        </tr>
        <tr>
          <td>اعمل Dashboard للمبيعات.</td>
          <td>ما المنتجات الأعلى ربحًا؟ وما الفروع التي تحتاج تدخلًا؟ وهل المشكلة في حجم المبيعات أم في هامش الربح؟</td>
        </tr>
        <tr>
          <td>اعرض كل البيانات الموجودة.</td>
          <td>ما المؤشرات القليلة التي تساعد المدير يتخذ قرارًا أسرع وبثقة أكبر؟</td>
        </tr>
      </table>
    </div>

    <div class="lesson-card">
      <h3>مكونات بيئة Power BI الأساسية</h3>
      <ul>
        <li><strong>Power BI Desktop:</strong> المكان الذي تبني فيه التقرير: الاتصال بالبيانات، Power Query، النموذج، DAX، والصفحات المرئية.</li>
        <li><strong>Power BI Service:</strong> المنصة السحابية للنشر والمشاركة والتحديث المجدول وإدارة الصلاحيات وبناء Dashboards.</li>
        <li><strong>Power BI Report Server:</strong> خادم داخل الشركة لنشر التقارير بدون الاعتماد على السحابة، ويستخدم غالبًا في المؤسسات التي لديها قيود أمنية أو تنظيمية. له نسخة Desktop خاصة به، وتحديثاته عادة أبطأ من Power BI Service.</li>
        <li><strong>Power BI Mobile:</strong> تطبيق متابعة التقارير على الهاتف، مفيد للمديرين والمتابعين وليس لبناء النماذج.</li>
        <li><strong>Gateway:</strong> جسر يربط Power BI Service بالبيانات الموجودة داخل أجهزة أو سيرفرات الشركة حتى يتم تحديث التقرير تلقائيًا.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>الفكرة الخاطئة مقابل الفهم الصحيح</h3>
      <table class="compare-table">
        <tr>
          <th>الفكرة الخاطئة</th>
          <th>الفهم الصحيح</th>
        </tr>
        <tr>
          <td>Power BI يعني رسومات جميلة فقط.</td>
          <td>الرسومات هي آخر خطوة؛ القيمة الحقيقية في تنظيف البيانات وبناء نموذج صحيح ومقاييس دقيقة.</td>
        </tr>
        <tr>
          <td>مجرد إدخال البيانات إلى Power BI يكفي لبناء تقرير صحيح.</td>
          <td>لازم تنظف البيانات في Power Query، وتبني علاقات صحيحة، وتكتب مقاييس DAX واضحة قبل أن تثق في التقرير.</td>
        </tr>
        <tr>
          <td>كل شيء يتم داخل Desktop فقط.</td>
          <td>Desktop للبناء، وService للنشر والمشاركة والتحديث والصلاحيات.</td>
        </tr>
      </table>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>قاعدة مهمة:</strong> لا تقس احترافك في Power BI بعدد الرسومات التي تعرفها، بل بقدرتك على بناء نموذج يعطي أرقامًا صحيحة قابلة للتفسير، ومفيدة لقرار واضح.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>Power BI is not just a tool for drawing charts</h3>
      <p>The core idea of Power BI is turning scattered, hard-to-read data into a clear model that helps you ask a business question and answer it with confidence. A good report does not only tell you the number. It helps you understand why the number changed, where the problem is, and what the next decision should be.</p>
      <p>A simple example: if you have sales in Excel, expenses in an accounting system, and monthly targets in another file, the role of Power BI is to bring these sources together, clean them, connect them, then show metrics such as revenue, profit, best product, weakest branch, and performance trend over time.</p>
    </div>

    <div class="lesson-card">
      <h3>What is Business Intelligence?</h3>
      <p>Business Intelligence is an organized process for turning raw data into understandable information, then into insights that support decisions. The word "intelligence" here does not mean the tool thinks for you. It means it gives you a better way to see reality through numbers.</p>
      <table class="compare-table">
        <tr>
          <th>Level</th>
          <th>Meaning</th>
        </tr>
        <tr>
          <td><strong>Data</strong></td>
          <td>Raw values such as sale date, customer name, quantity, price, and branch.</td>
        </tr>
        <tr>
          <td><strong>Information</strong></td>
          <td>A useful summary such as total sales by month or by branch.</td>
        </tr>
        <tr>
          <td><strong>Insight</strong></td>
          <td>A meaningful observation such as a branch selling a lot but generating weak margin.</td>
        </tr>
        <tr>
          <td><strong>Decision</strong></td>
          <td>A practical action such as reviewing discounts, changing stock, or redistributing the sales team.</td>
        </tr>
      </table>
    </div>

    <div class="lesson-card">
      <h3>The real workflow inside Power BI</h3>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>Connect to data</h4>
            <p>You begin with different sources: Excel, CSV, SQL Server, SharePoint, web APIs, or company systems.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>Clean and transform data</h4>
            <p>Using Power Query, you clean columns, change data types, standardize labels, and remove errors before building the report.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>Build the data model</h4>
            <p>You connect tables with the right relationships and separate Fact tables from Dimension tables so your numbers do not become misleading.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">4</div>
          <div class="step-content">
            <h4>Write measures and analysis</h4>
            <p>Using DAX, you calculate metrics such as revenue, growth, profitability, percentage of total, and comparison with last year.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">5</div>
          <div class="step-content">
            <h4>Present and share</h4>
            <p>You design report pages, publish them to Power BI Service, configure permissions and scheduled refresh, then share them with the team.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>How do you think like a data analyst?</h3>
      <p>Before asking, "Which chart should I build?" ask first, "What decision are we trying to improve?" A successful report starts from a clear question, not from a visually attractive shape.</p>
      <ul>
        <li><strong>The question:</strong> What problem or opportunity are we trying to understand?</li>
        <li><strong>The decision:</strong> Who will use the report, and what will they do after seeing the numbers?</li>
        <li><strong>The data:</strong> Which tables and columns are required to answer it, and are their definitions clear?</li>
        <li><strong>Confidence:</strong> Are the numbers clean and connected through correct relationships, or are they just a quick aggregation?</li>
      </ul>
      <table class="compare-table">
        <tr>
          <th>Weak question</th>
          <th>Stronger question</th>
        </tr>
        <tr>
          <td>Build a sales dashboard.</td>
          <td>Which products are most profitable? Which branches need intervention? Is the issue in sales volume or in profit margin?</td>
        </tr>
        <tr>
          <td>Show all available data.</td>
          <td>What small set of metrics helps the manager make a faster and more confident decision?</td>
        </tr>
      </table>
    </div>

    <div class="lesson-card">
      <h3>Core components of the Power BI environment</h3>
      <ul>
        <li><strong>Power BI Desktop:</strong> The place where you build the report: data connection, Power Query, model, DAX, and report pages.</li>
        <li><strong>Power BI Service:</strong> The cloud platform for publishing, sharing, scheduled refresh, permission management, and dashboards.</li>
        <li><strong>Power BI Report Server:</strong> An on-premises server for publishing reports without depending on the cloud. It is common in organizations with security or regulatory constraints. It has its own Desktop version, and its updates are usually slower than Power BI Service.</li>
        <li><strong>Power BI Mobile:</strong> A mobile app for following reports on the phone. It is useful for managers and consumers, not for building models.</li>
        <li><strong>Gateway:</strong> A bridge that connects Power BI Service to data stored inside company devices or servers so the report can refresh automatically.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Misconception vs correct understanding</h3>
      <table class="compare-table">
        <tr>
          <th>Misconception</th>
          <th>Correct understanding</th>
        </tr>
        <tr>
          <td>Power BI is only about pretty visuals.</td>
          <td>Visuals are the last step. The real value is in cleaning data, building the right model, and defining accurate measures.</td>
        </tr>
        <tr>
          <td>Just loading data into Power BI is enough to build a correct report.</td>
          <td>You still need to clean the data in Power Query, build the right relationships, and write clear DAX measures before trusting the report.</td>
        </tr>
        <tr>
          <td>Everything happens inside Desktop only.</td>
          <td>Desktop is for building, while Service is for publishing, sharing, refresh, and permissions.</td>
        </tr>
      </table>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>Important rule:</strong> Do not measure your Power BI skill by how many visuals you know. Measure it by your ability to build a model that produces correct, explainable numbers that support a clear decision.</p>
    </div>` }],
  },
  "setup": {
    eyebrow: "01 · 02 — التثبيت والإعداد",
    title: "التثبيت والإعداد",
    lede: "خطوات بسيطة لتنزيل البرنامج وتجهيز بيئة العمل.",
    en_eyebrow: "01 · 02 — Installation and Setup",
    en_lede: "Simple steps to download the program and prepare your work environment.",
    sectionId: "setup",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>اختار النسخة الصحيحة من البداية</h3>
      <p>أنت غالبًا تحتاج Power BI Desktop العادي، وليس Power BI Report Server Desktop. النسخة العادية هي الأفضل للتعلم ولأغلب الشغل الحديث لأنها مرتبطة بتحديثات Power BI Service والميزات الجديدة.</p>
      <table class="compare-table">
        <tr>
          <th>النسخة</th>
          <th>الاستخدام</th>
        </tr>
        <tr>
          <td><strong>Power BI Desktop</strong></td>
          <td>النسخة الأساسية لبناء التقارير والنماذج والتعلم.</td>
        </tr>
        <tr>
          <td><strong>Power BI Report Server Desktop</strong></td>
          <td>نسخة خاصة للشركات التي تنشر التقارير على Report Server داخل الشركة، وليست الاختيار الافتراضي للمبتدئ.</td>
        </tr>
      </table>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <h4>متجر مايكروسوفت (موصى به)</h4>
          <p>افتح Microsoft Store في Windows وابحث عن "Power BI Desktop" واضغط Install. الميزة هنا أن البرنامج يتحدث تلقائيًا. وهذا يقلل مشاكل الإصدارات القديمة.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <h4>التحميل المباشر من Microsoft</h4>
          <p>لو لا تستطيع استخدام المتجر، ادخل على موقع Microsoft الرسمي وحمّل Power BI Desktop. تجنب مواقع التحميل غير الرسمية حتى لا تحمل نسخة قديمة أو ملف غير موثوق.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <h4>أول تشغيل بعد التثبيت</h4>
          <p>افتح البرنامج وتأكد أن الشاشة الرئيسية ظهرت بدون أخطاء. تسجيل الدخول بحساب العمل أو الدراسة مفيد للنشر لاحقًا، لكنه ليس ضروريًا لبناء أول تقرير محلي على جهازك.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
          <h4>اضبط إعدادات اللغة والمنطقة</h4>
          <p>لو بياناتك فيها تواريخ أو أرقام بتنسيق مختلف، راجع إعدادات Regional Settings من Options. أخطاء اليوم والشهر والفواصل العشرية من أكثر أسباب النتائج الغريبة في بداية التعلم.</p>
        </div>
      </div>
    </div>

    <img class="lesson-img" src="images/Power BI - Home Page.png" alt="الشاشة الرئيسية لـ Power BI Desktop">
    <p class="lesson-img-caption">الشاشة الرئيسية لـ Power BI Desktop بعد التثبيت</p>

    <div class="lesson-card">
      <h3>Checklist سريع بعد التثبيت</h3>
      <ul>
        <li><strong>افتح Power BI Desktop:</strong> تأكد أنه يعمل بدون رسائل خطأ.</li>
        <li><strong>جرب Get Data:</strong> افتح قائمة Get Data وتأكد أنك ترى مصادر مثل Excel وText/CSV.</li>
        <li><strong>احفظ ملف اختبار:</strong> أنشئ ملفًا فارغًا واحفظه بصيغة PBIX لتتأكد أن مسار الحفظ والصلاحيات سليمة.</li>
        <li><strong>لا تبدأ بمشروع كبير:</strong> أول تجربة يفضل تكون على ملف Excel صغير حتى تتأكد أن البيئة جاهزة.</li>
      </ul>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>تنبيه:</strong> Power BI Desktop لا يعمل مباشرة على macOS. لو جهازك Mac ستحتاج Windows عبر Parallels أو Boot Camp أو جهاز Windows منفصل.</p>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>بديل للماك:</strong> يمكنك استخدام Power BI Service (app.powerbi.com) مباشرةً من المتصفح على أي نظام تشغيل. بعض المهام مثل بناء التقارير وإنشاء المقاييس متاحة فيه بدون الحاجة لـ Desktop.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>Choose the right version from the start</h3>
<p>You most likely need the standard Power BI Desktop, not Power BI Report Server Desktop. The standard version is best for learning and most modern work because it stays in sync with Power BI Service updates and new features.</p>
<table class="compare-table">
  <tr>
    <th>Version</th>
    <th>Use case</th>
  </tr>
  <tr>
    <td><strong>Power BI Desktop</strong></td>
    <td>The standard edition for building reports, data models, and learning.</td>
  </tr>
  <tr>
    <td><strong>Power BI Report Server Desktop</strong></td>
    <td>A special edition for organizations that publish reports to an on-premises Report Server — not the default choice for beginners.</td>
  </tr>
</table>
</div>

<div class="steps">
  <div class="step">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Microsoft Store (recommended)</h4>
      <p>Open Microsoft Store in Windows, search for "Power BI Desktop", and click Install. The advantage is that the app updates automatically, which reduces version-related issues.</p>
    </div>
  </div>
  <div class="step">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>Direct download from Microsoft</h4>
      <p>If you cannot use the Store, visit the official Microsoft website and download Power BI Desktop. Avoid unofficial download sites to ensure you get the latest, trusted version.</p>
    </div>
  </div>
  <div class="step">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>First launch after installation</h4>
      <p>Open the app and confirm the home screen appears without errors. Signing in with a work or school account is useful for publishing later, but it is not required to build your first local report.</p>
    </div>
  </div>
  <div class="step">
    <div class="step-num">4</div>
    <div class="step-content">
      <h4>Set your language and region settings</h4>
      <p>If your data contains dates or numbers in a non-standard format, review the Regional Settings in Options. Date order and decimal separator mismatches are among the most common causes of strange results for beginners.</p>
    </div>
  </div>
</div>

<img class="lesson-img" src="images/Power BI - Home Page.png" alt="Power BI Desktop home screen after installation">
<p class="lesson-img-caption">Power BI Desktop home screen after installation</p>

<div class="lesson-card">
<h3>Quick checklist after installation</h3>
<ul>
  <li><strong>Open Power BI Desktop:</strong> confirm it launches without error messages.</li>
  <li><strong>Try Get Data:</strong> open the Get Data menu and verify you can see sources such as Excel and Text/CSV.</li>
  <li><strong>Save a test file:</strong> create an empty file and save it as PBIX to confirm your save path and permissions are correct.</li>
  <li><strong>Don't start with a big project:</strong> your first experiment should be on a small Excel file to confirm the environment is ready.</li>
</ul>
</div>

<div class="warn-box">
<div class="icon">⚠️</div>
<p><strong>Warning:</strong> Power BI Desktop does not run natively on macOS. If you are on a Mac, you will need Windows via Parallels, Boot Camp, or a separate Windows machine.</p>
</div>

<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Mac alternative:</strong> You can use Power BI Service (app.powerbi.com) directly in a browser on any operating system. Some tasks — such as building reports and creating measures — are available there without needing Desktop.</p>
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
      <h3>📍 أنت هنا في الرحلة</h3>
      <p>في الدرس السابق تعرفت على مكونات Power BI الثلاثة: Desktop (بناء)، Service (نشر)، Mobile (متابعة). الآن سنركز على Desktop والأدوات اللي بتساعدك في <strong>كل مرحلة من مراحل بناء التقرير</strong>.</p>
    </div>

    <div class="lesson-card">
      <h3>الشاشات الرئيسية (Views)</h3>
      <ul>
        <li><strong>شاشة التقرير (Report View):</strong> الكانفاس الأبيض اللي بنرسم فيه الشارتات والرسومات البيانية.</li>
        <li><strong>شاشة البيانات (Data/Table View):</strong> هنا بتشوف الداتا بتاعتك في شكل جداول زي الإكسيل.</li>
        <li><strong>شاشة العلاقات (Model View):</strong> دي أهم شاشة للمحترفين! هنا بنربط الجداول ببعضها.</li>
        <li><strong>شاشة استعلامات DAX (DAX Query View):</strong> هنا تكتب وتجرب استعلامات DAX مباشرة وتشوف النتائج بسرعة بدون ما تبني أي Visual كل مرة.</li>
        <li><strong>شاشة TMDL (TMDL View):</strong> للمستخدمين المتقدمين، وبتخليك تراجع وتعدل مكونات الـ semantic model على شكل كود.</li>
      </ul>
    </div>

    <img class="lesson-img" src="images/Power BI - Views.png" alt="الشاشات الرئيسية في Power BI Desktop">
    <p class="lesson-img-caption">الشاشات الرئيسية في Power BI Desktop</p>

    <div class="lesson-card">
      <h3>القوائم الجانبية (Panes)</h3>
      <p>على اليمين هتلاقي مجموعة panes بتختلف قليلًا حسب إصدار Power BI Desktop والإعدادات المفعلة:</p>
      <ul>
        <li><strong>Data Pane:</strong> فيها كل الجداول والأعمدة والـ measures المتاحة للاستخدام داخل التقرير.</li>
        <li><strong>Filters Pane:</strong> لعمل فلاتر على مستوى الـ visual أو الصفحة أو التقرير كله.</li>
        <li><strong>Build Pane / Build a visual:</strong> في الواجهة الحديثة دي بتستبدل جزء كبير من الـ Visualizations Pane وبتستخدمها لاختيار نوع الـ visual وتوزيع الحقول عليه.</li>
        <li><strong>Format Pane:</strong> منها بتتحكم في الألوان، العناوين، الـ labels، الخلفيات، وأسلوب عرض الـ visual.</li>
        <li><strong>Visualizations Pane:</strong> ممكن تلاقي الاسم ده في الشروحات الأقدم أو لو إعداداتك لسه على الشكل القديم؛ وهو كان يجمع بين البناء والتنسيق في pane واحدة.</li>
        <li><strong>Panes إضافية عند الحاجة:</strong> زي Bookmarks - Selections - Sync Slicers — بتفتحها من قائمة View حسب الشغل اللي بتعمله.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>⬇️ الخطوة القادمة: فهم البيانات التي بتشتغل معاها</h3>
      <p>الآن بتعرف أين تذهب البيانات في Power BI (Data Pane) وكيف تحولها لـ Visuals. لكن <strong>قبل ما تشرع في بناء، لازم تفهم نوع البيانات اللي بتتعامل معاها</strong>:</p>
      <ul>
        <li>من أين تيجي البيانات؟ من نظام تشغيلي (مثل SAP أو نظام المبيعات) أم من ديتا وير محضّرة للتحليل؟</li>
        <li>هل البيانات متحدّثة لحظياً أم تاريخية متراكمة؟</li>
        <li>كيف هذا يؤثر على طريقة بناء النموذج؟</li>
      </ul>
      <p><strong>الدرس القادم (OLTP vs OLAP)</strong> هيجاوب على كل هذه الأسئلة ويشرح لك الفرق بين النظامين — وهذا أساسي قبل ما تشرع في نمذجة البيانات.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>📍 Where you are on the journey</h3>
<p>In the previous lesson, you learned about Power BI's three components: Desktop (build), Service (publish), Mobile (monitor). Now we'll focus on Desktop and the tools that help you in <strong>every stage of report building</strong>.</p>
</div>

<div class="lesson-card">
<h3>The main screens (Views)</h3>
<ul>
<li><strong>Report View:</strong> The white canvas where you draw charts and graphs.</li>
<li><strong>Data/Table View:</strong> See your data in table form, similar to Excel.</li>
<li><strong>Model View:</strong> The most important screen for professionals — this is where you link tables together.</li>
<li><strong>DAX Query View:</strong> Write and test DAX queries directly and see results instantly, without having to build a visual every time.</li>
<li><strong>TMDL View:</strong> For advanced users — lets you review and edit semantic model components as code.</li>
</ul>
</div>

<img class="lesson-img" src="images/Power BI - Views.png" alt="The main screens in Power BI Desktop">
<p class="lesson-img-caption">The main screens in Power BI Desktop</p>

<div class="lesson-card">
<h3>Side panels (Panes)</h3>
<p>On the right you will find a set of panes that may vary slightly depending on your Power BI Desktop version and enabled settings:</p>
<ul>
<li><strong>Data Pane:</strong> Contains all your tables, columns, and measures available for use inside the report.</li>
<li><strong>Filters Pane:</strong> Apply filters at the visual, page, or entire report level.</li>
<li><strong>Build Pane / Build a visual:</strong> In the modern interface this replaces most of the old Visualizations Pane — use it to choose the visual type and assign fields to it.</li>
<li><strong>Format Pane:</strong> Control colors, titles, labels, backgrounds, and the visual's display style.</li>
<li><strong>Visualizations Pane:</strong> You may see this name in older tutorials or if your settings are on the older layout — it used to combine building and formatting in one pane.</li>
<li><strong>Additional panes when needed:</strong> Such as Bookmarks - Selections - Sync Slicers — open them from the View menu as your work requires.</li>
</ul>
</div>

<div class="lesson-card">
<h3>⬇️ Next Step: Understanding the data you're working with</h3>
<p>Now you know where data goes in Power BI (Data Pane) and how to turn it into Visuals. But <strong>before you start building, you need to understand the type of data you're working with</strong>:</p>
<ul>
<li>Where does the data come from? From an operational system (like SAP or a sales system) or from a data warehouse prepared for analysis?</li>
<li>Is the data updated in real-time or is it accumulated historical data?</li>
<li>How does this affect the way you build the model?</li>
</ul>
<p><strong>Next Lesson (OLTP vs OLAP)</strong> will answer all these questions and explain the difference between the two systems — essential knowledge before you start modeling your data.</p>
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
      <h3>أولًا: أنت تعرف الفكرة بالفعل حتى لو لم تسمع الاسم</h3>
      <p>كثير من الناس يعملون سنوات في البيانات أو التقارير بدون أن يسمعوا مصطلحي OLTP وOLAP بهذه الصيغة الأكاديمية. لكنهم في الواقع يتعاملون معهما كل يوم.</p>
      <ul>
        <li><strong>OLTP (Online Transaction Processing)</strong> هو النظام الذي <strong>يشغّل العمل اليومي</strong>: بيع، شراء، حجز، دخول مريض، تسجيل حضور، إصدار فاتورة.</li>
        <li><strong>OLAP (Online Analytical Processing)</strong> هو النظام الذي <strong>يفهم ما حدث</strong>: ما أعلى فرع؟ لماذا انخفضت المبيعات؟ ما اتجاه الربح عبر 12 شهرًا؟</li>
      </ul>
      <p>بمعنى أبسط جدًا: <strong>OLTP يكتب الحدث</strong>، و<strong>OLAP يقرأ آلاف أو ملايين الأحداث ليفسرها</strong>.</p>
    </div>

    <div class="tip-box">
      <div class="icon">🧠</div>
      <p><strong>سطر للحفظ السريع:</strong> OLTP = "تشغيل الشغل"، بينما OLAP = "فهم الشغل".</p>
    </div>

    <img class="lesson-img" src="images/OLAP Vs OLTP.png" alt="مقارنة OLAP vs OLTP">
    <p class="lesson-img-caption">الفرق بين أنظمة OLTP وOLAP</p>

    <div class="lesson-card">
      <h3>القصة الحقيقية داخل أي شركة</h3>
      <p>تخيل متجرًا يبيع منتجاته طوال اليوم:</p>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>لحظة البيع نفسها</h4>
            <p>الكاشير يسجل عملية: المنتج، الكمية، السعر، وقت البيع، العميل. هذا شغل OLTP لأنه يهتم بتسجيل العملية بسرعة ودقة.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>تكرار العملية آلاف المرات</h4>
            <p>خلال اليوم تتراكم عمليات كثيرة جدًا. النظام التشغيلي ليس مهمًا الآن بسؤال: "ما الاتجاه الشهري؟" بل مهتم بأن كل عملية تُسجَّل بدون تعطل.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>بعد ذلك يأتي دور التحليل</h4>
            <p>المدير يريد أن يعرف: أي الفروع أفضل؟ ما المنتج الأكثر ربحية؟ هل الخصومات زادت؟ هنا يدخل OLAP أو بيئة التحليل مثل Power BI.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>الخلاصة العملية:</strong> نفس البيانات تبدأ كعمليات يومية داخل OLTP، ثم تُنقل أو تُنظّف أو تُعاد تشكيلها لكي تصبح مناسبة للتحليل داخل OLAP.</p>
    </div>

    <div class="lesson-card">
      <h3>ما الذي يريده OLTP بالضبط؟</h3>
      <p>OLTP ليس مصممًا ليعطيك Dashboard جميلة. هو مصمم لكي لا ينهار العمل اليومي.</p>
      <ul>
        <li><strong>الأولوية القصوى:</strong> السرعة في تنفيذ العملية الواحدة، مع صحة البيانات وعدم فقدانها.</li>
        <li><strong>High throughput:</strong> النظام يستقبل عددًا ضخمًا جدًا من المعاملات الصغيرة طوال اليوم بدون توقف.</li>
        <li><strong>نوع الشغل:</strong> عمليات صغيرة جدًا لكنها كثيرة جدًا: Insert, Update, Delete, Select لسجل أو عدد قليل من السجلات.</li>
        <li><strong>شكل البيانات:</strong> غالبًا Normalized؛ البيانات موزعة على جداول كثيرة لتقليل التكرار وحماية الاتساق.</li>
        <li><strong>المستخدمون:</strong> موظفو التشغيل، التطبيقات، الـ APIs، أنظمة ERP/CRM/POS والمواقع.</li>
        <li><strong>نوع السؤال المعتاد:</strong> "هات لي طلب العميل رقم 18452" وليس "احسب نمو آخر 18 شهرًا حسب الفئة والمنطقة".</li>
      </ul>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>مهم:</strong> النظام التشغيلي الممتاز ليس بالضرورة مريحًا للتحليل. قد يكون ممتازًا للعمليات اليومية لكنه سيئ جدًا لو حاولت أن تحلل عليه مباشرة.</p>
    </div>

    <div class="lesson-card">
      <h3>ما الذي يريده OLAP بالضبط؟</h3>
      <p>OLAP أو بيئة التحليل تهتم بالسؤال الكبير، لا بالمعاملة الواحدة. تريد أن تقرأ كمية ضخمة من البيانات بسرعة وتلخّصها بطريقة مفيدة للقرار.</p>
      <ul>
        <li><strong>الأولوية القصوى:</strong> سرعة القراءة والتحليل والتجميع، وليس سرعة كتابة كل عملية منفردة.</li>
        <li><strong>نوع الشغل:</strong> Aggregations, Trends, Comparisons, KPIs, slicing, filtering عبر فترات طويلة.</li>
        <li><strong>الاستعلامات:</strong> غالبًا Queries أعقد وتحتوي على joins وتجميعات كبيرة لأنها تحاول فهم الصورة الكاملة لا معاملة واحدة فقط.</li>
        <li><strong>شكل البيانات:</strong> عادة Star Schema أو نموذج تحليلي يقلل التعقيد أثناء القراءة.</li>
        <li><strong>المستخدمون:</strong> المحللون، المدراء، أصحاب القرار، ومن يبنون تقارير Power BI.</li>
        <li><strong>نوع السؤال المعتاد:</strong> "ما سبب انخفاض الربح في المنطقة الشرقية آخر ربع؟" أو "ما أكثر 10 منتجات نموًا هذه السنة؟"</li>
      </ul>
      <p>لهذا Power BI لا يحب أن يتعامل مع بيانات تشغيلية خام كما هي؛ غالبًا يحتاج تنظيفًا وإعادة تشكيل لكي تصبح قابلة للتحليل بشكل مريح وسريع.</p>
    </div>

    <div class="lesson-card">
      <h3>لماذا لا نحلل مباشرة على OLTP؟</h3>
      <p>هذا سؤال جوهري جدًا، وهو أصل الدرس كله تقريبًا.</p>
      <ul>
        <li><strong>لأن OLTP حساس للضغط:</strong> لو شغّلت عليه تقارير ثقيلة، قد تبطّئ النظام الذي يسجل المبيعات أو الطلبات الفعلية.</li>
        <li><strong>لأن جداوله معقدة:</strong> البيانات موزعة على جداول كثيرة جدًا، وهذا ممتاز للتشغيل لكنه مرهق للمحلل.</li>
        <li><strong>لأن التعاريف التحليلية لا تكون جاهزة:</strong> الربح، النمو، المقارنات الزمنية، تصنيف العملاء... هذه ليست أسئلة النظام التشغيلي من الأصل.</li>
        <li><strong>لأن التاريخ قد لا يكون محفوظًا بالشكل الذي تحتاجه:</strong> بعض الأنظمة التشغيلية تركز على الحالة الحالية أكثر من اللقطات التاريخية المنظمة للتحليل.</li>
      </ul>
      <p>لذلك في العالم الواقعي، أنت غالبًا لا تأخذ Power BI وتوصله على قاعدة تشغيلية خام ثم تنتهي. هناك دائمًا طبقة تجهيز، حتى لو كانت بسيطة، بين المصدر التشغيلي والطبقة التحليلية، وغالبًا تمر هذه الرحلة عبر Data Warehouse أو طبقة تحليلية مشابهة.</p>
    </div>

    <div class="lesson-card">
      <h3>المقارنة المباشرة</h3>
      <table class="compare-table">
        <thead>
          <tr>
            <th>زاوية المقارنة</th>
            <th>OLTP</th>
            <th>OLAP</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>الهدف الأساسي</td><td>تشغيل العمل وتسجيل كل معاملة</td><td>فهم العمل وتحليل النتائج</td></tr>
          <tr><td>نوع الأسئلة</td><td>سؤال صغير عن سجل أو عملية محددة</td><td>سؤال كبير عبر وقت أو فئات أو مناطق</td></tr>
          <tr><td>نوع العمليات</td><td>Read/Write متكرر جدًا</td><td>Read كثيف + Aggregation</td></tr>
          <tr><td>تصميم البيانات</td><td>Normalized لتقليل التكرار</td><td>Star/Snowflake لتسهيل التحليل</td></tr>
          <tr><td>أفضلية الأداء</td><td>سرعة المعاملة الواحدة</td><td>سرعة قراءة كميات كبيرة</td></tr>
          <tr><td>التحديث</td><td>لحظي أو شبه لحظي</td><td>Batch أو دورات تحميل وتحضير</td></tr>
          <tr><td>أمثلة</td><td>POS, ERP, CRM, Hospital System</td><td>Power BI, SSAS Tabular, Data Warehouse</td></tr>
        </tbody>
      </table>
    </div>

    <div class="lesson-card">
      <h3>الربط مع Power BI الذي يهمك أنت</h3>
      <p>إذا كنت تبني تقارير في Power BI، فأنت غالبًا تعمل في العالم التحليلي حتى لو كان المصدر النهائي جايًا من نظام تشغيلي.</p>
      <ul>
        <li><strong>Get Data:</strong> قد تسحب من SQL أو Excel أو API، لكن المصدر في أصله غالبًا OLTP.</li>
        <li><strong>Power Query:</strong> هنا تبدأ بتحويل البيانات من شكل تشغيلي إلى شكل أقرب للتحليل.</li>
        <li><strong>Data Warehouse / Analytical Layer:</strong> في الشركات الأكبر، البيانات لا تذهب مباشرة من النظام التشغيلي إلى التقرير، بل تمر على طبقة وسيطة تُنظّمها وتجمعها وتجهزها للتحليل.</li>
        <li><strong>Model View:</strong> هنا تترك تفكير "الجداول التشغيلية الكثيرة" وتبدأ تفكير Fact وDimension.</li>
        <li><strong>DAX:</strong> هنا تتحول من سؤال "ما العملية التي حدثت؟" إلى سؤال "ما الذي تعنيه كل هذه العمليات عندما نجمعها؟"</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">⭐</div>
      <p><strong>قاعدة ذهبية تحفظها:</strong> OLTP يبني الحقيقة لحظةً بلحظة، وOLAP يشرح الحقيقة بعد أن تتجمع. ومهمتك كمحلل هي أن تأخذ البيانات من عالم التشغيل وتحوّلها إلى عالم الفهم.</p>
    </div>

` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>First: you already know the idea, even if you've never heard the terms</h3>
<p>Many people work for years in data or reporting without ever hearing the terms OLTP and OLAP in this academic form. Yet in practice they interact with both every day.</p>
<ul>
<li><strong>OLTP (Online Transaction Processing)</strong> is the system that <strong>runs daily business</strong>: a sale, purchase, booking, patient admission, attendance record, or invoice.</li>
<li><strong>OLAP (Online Analytical Processing)</strong> is the system that <strong>understands what happened</strong>: which branch is highest? Why did sales drop? What is the profit trend over 12 months?</li>
</ul>
<p>In the simplest terms: <strong>OLTP writes the event</strong>, while <strong>OLAP reads thousands or millions of events to interpret them</strong>.</p>
</div>

<div class="tip-box">
<div class="icon">🧠</div>
<p><strong>Quick memorization line:</strong> OLTP = "running the work", OLAP = "understanding the work".</p>
</div>

<img class="lesson-img" src="images/OLAP Vs OLTP.png" alt="OLAP vs OLTP comparison">
<p class="lesson-img-caption">The difference between OLTP and OLAP systems</p>

<div class="lesson-card">
<h3>The real story inside any company</h3>
<p>Imagine a store selling products all day:</p>
<div class="steps">
  <div class="step">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>The moment of sale itself</h4>
      <p>The cashier records a transaction: product, quantity, price, sale time, customer. This is OLTP work — it cares about recording the transaction quickly and accurately.</p>
    </div>
  </div>
  <div class="step">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>The transaction repeats thousands of times</h4>
      <p>Throughout the day many transactions accumulate. The operational system is not concerned with asking "what is the monthly trend?" — it just needs every transaction recorded without failure.</p>
    </div>
  </div>
  <div class="step">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>Then comes the role of analysis</h4>
      <p>The manager wants to know: which branch performs best? Which product is most profitable? Did discounts increase? This is where OLAP or an analytical environment like Power BI comes in.</p>
    </div>
  </div>
</div>
</div>

<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Practical takeaway:</strong> The same data starts as daily operations inside OLTP, then is transferred, cleaned, or reshaped to become suitable for analysis inside OLAP.</p>
</div>

<div class="lesson-card">
<h3>What exactly does OLTP need?</h3>
<p>OLTP is not designed to give you a nice Dashboard. It is designed so that daily business does not break down.</p>
<ul>
<li><strong>Top priority:</strong> Speed on each individual transaction, with data accuracy and no data loss.</li>
<li><strong>High throughput:</strong> The system receives a very large number of small transactions all day long without stopping.</li>
<li><strong>Type of work:</strong> Very small but very frequent operations: Insert, Update, Delete, Select for one record or a few records.</li>
<li><strong>Data shape:</strong> Usually Normalized — data distributed across many tables to minimize redundancy and protect consistency.</li>
<li><strong>Users:</strong> Operational staff, applications, APIs, ERP/CRM/POS systems, and websites.</li>
<li><strong>Typical question:</strong> "Get me customer order #18452" — not "calculate growth over the last 18 months by category and region".</li>
</ul>
</div>

<div class="warn-box">
<div class="icon">⚠️</div>
<p><strong>Important:</strong> An excellent operational system is not necessarily comfortable for analysis. It can be outstanding for daily transactions but very poor if you try to analyze directly on top of it.</p>
</div>

<div class="lesson-card">
<h3>What exactly does OLAP need?</h3>
<p>OLAP or an analytical environment cares about the big question, not the individual transaction. It wants to read a huge volume of data quickly and summarize it in a way that is useful for decision-making.</p>
<ul>
<li><strong>Top priority:</strong> Speed of reading, analysis, and aggregation — not speed of writing each individual transaction.</li>
<li><strong>Type of work:</strong> Aggregations, Trends, Comparisons, KPIs, slicing, and filtering across long periods.</li>
<li><strong>Queries:</strong> Usually more complex queries with joins and large aggregations, because they are trying to understand the full picture, not just one transaction.</li>
<li><strong>Data shape:</strong> Usually Star Schema or an analytical model that reduces complexity at read time.</li>
<li><strong>Users:</strong> Analysts, managers, decision-makers, and those who build Power BI reports.</li>
<li><strong>Typical question:</strong> "Why did profit drop in the eastern region last quarter?" or "What are the 10 fastest-growing products this year?"</li>
</ul>
<p>That is why Power BI does not like working with raw operational data as-is — it usually needs cleaning and reshaping before it becomes comfortable and fast to analyze.</p>
</div>

<div class="lesson-card">
<h3>Why not analyze directly on OLTP?</h3>
<p>This is a very fundamental question, and it is almost the entire point of this lesson.</p>
<ul>
<li><strong>Because OLTP is sensitive to load:</strong> Running heavy reports on it can slow down the system that records actual sales or orders.</li>
<li><strong>Because its tables are complex:</strong> Data is distributed across many tables — excellent for operations, but exhausting for the analyst.</li>
<li><strong>Because analytical definitions are not ready:</strong> Profit, growth, time comparisons, customer segmentation — these are not the operational system's questions to begin with.</li>
<li><strong>Because history may not be stored in the form you need:</strong> Some operational systems focus on the current state more than organized historical snapshots for analysis.</li>
</ul>
<p>So in the real world, you generally don't plug Power BI directly into a raw operational database and call it done. There is always a preparation layer — even if simple — between the operational source and the analytical layer, and that journey usually passes through a Data Warehouse or similar analytical layer.</p>
</div>

<div class="lesson-card">
<h3>Direct comparison</h3>
<table class="compare-table">
<thead>
<tr>
<th>Dimension</th>
<th>OLTP</th>
<th>OLAP</th>
</tr>
</thead>
<tbody>
<tr><td>Primary goal</td><td>Run the business and record every transaction</td><td>Understand the business and analyze results</td></tr>
<tr><td>Type of questions</td><td>Small question about one record or transaction</td><td>Big question across time, categories, or regions</td></tr>
<tr><td>Type of operations</td><td>Frequent Read/Write</td><td>Heavy Read + Aggregation</td></tr>
<tr><td>Data design</td><td>Normalized to reduce redundancy</td><td>Star/Snowflake to simplify analysis</td></tr>
<tr><td>Performance priority</td><td>Speed of each individual transaction</td><td>Speed of reading large volumes</td></tr>
<tr><td>Updates</td><td>Real-time or near real-time</td><td>Batch or scheduled load cycles</td></tr>
<tr><td>Examples</td><td>POS, ERP, CRM, Hospital System</td><td>Power BI, SSAS Tabular, Data Warehouse</td></tr>
</tbody>
</table>
</div>

<div class="lesson-card">
<h3>The connection to Power BI that matters to you</h3>
<p>If you are building reports in Power BI, you are generally working in the analytical world — even if the data source ultimately comes from an operational system.</p>
<ul>
<li><strong>Get Data:</strong> You may pull from SQL, Excel, or an API, but the original source is usually OLTP.</li>
<li><strong>Power Query:</strong> This is where you start transforming data from an operational shape into something closer to analytical.</li>
<li><strong>Data Warehouse / Analytical Layer:</strong> In larger organizations, data does not go directly from the operational system to the report — it passes through an intermediate layer that organizes, aggregates, and prepares it for analysis.</li>
<li><strong>Model View:</strong> Here you leave the mindset of "many operational tables" and start thinking in Fact and Dimension.</li>
<li><strong>DAX:</strong> Here you shift from asking "what transaction happened?" to asking "what do all these transactions mean when we aggregate them?"</li>
</ul>
</div>

<div class="tip-box">
<div class="icon">⭐</div>
<p><strong>Golden rule to remember:</strong> OLTP builds the truth moment by moment, and OLAP explains the truth after it accumulates. Your job as an analyst is to take data from the operational world and transform it into the world of understanding.</p>
</div>` }],
  },
  "model": {
    eyebrow: "01 · 05 — Data Model و Star Schema",
    title: "Data Model و Star Schema",
    lede: "سر قوة Power BI! كيف تبني Data Model قوي باستخدام Star Schema.",
    en_eyebrow: "01 · 05 — Data Model and Star Schema",
    en_lede: "The secret of Power BI's power! How to build a strong database (Star Schema).",
    sectionId: "model",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>🎯 أنت هنا في الرحلة — من فهم الأنظمة إلى بناء النموذج</h3>
      <p><strong>ما فهمته لحد الآن:</strong></p>
      <ul>
        <li>Power BI بتحول خام البيانات → رؤى واتخاذ قرار</li>
        <li>البيانات تبدأ من OLTP (معقد، مكرر) وبتنقل لـ OLAP (منسق، تحليلي)</li>
      </ul>
      <p><strong>السؤال الآن:</strong> كيفية هندسة هذا التحول؟ الإجابة هي <strong>Star Schema</strong> — نموذج بيانات بسيط وقوي يفصل بين الحركات والتفاصيل.</p>
      <p>هذا النموذج ليس مجرد "تنظيم أكاديمي" — هو الأساس اللي بتبني عليه:</p>
      <ul>
        <li>الفلاتر بتاعتك (عشان الأعمدة الفريدة في Dimensions)</li>
        <li>معادلات DAX بتاعتك (عشان الفصل بين Fact و Dimension)</li>
        <li>سرعة التقرير (عشان الجداول صغيرة ومترابطة بشكل ذكي)</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>لماذا لا نستخدم جدول واحد كبير؟ (Flat Table)</h3>
      <p>في الإكسيل متعودين نحط كل الداتا في شيت واحد كبير. في Power BI ده بيسبب بطء شديد وتكرار للبيانات. الصح هو تقسيم البيانات.</p>
    </div>

    <div class="lesson-card">
      <h3>ما هو الـ Data Model أصلًا؟</h3>
      <p>الـ Data Model هو الطريقة التي ترتب بها الجداول داخل Power BI، وتحدد بها العلاقات بينها، وتقرر أين توجد الأرقام وأين توجد التفاصيل الوصفية.</p>
      <p>بمعنى عملي: الـ Data Model ليس مجرد جداول موجودة داخل الملف، بل هو الخريطة المنطقية التي تجعل Power BI يفهم كيف تنتقل الفلاتر، وكيف تتجمع الأرقام، وكيف تخرج النتائج صحيحة.</p>
    </div>

    <div class="lesson-card">
      <h3>ما هدف الـ Data Model؟</h3>
      <ul>
        <li><strong>إخراج أرقام صحيحة:</strong> حتى لا تتكرر النتائج أو تتضخم بسبب تصميم خاطئ.</li>
        <li><strong>تسريع التقرير:</strong> النموذج الجيد يجعل Power BI يقرأ البيانات بكفاءة أعلى.</li>
        <li><strong>تبسيط DAX:</strong> كلما كان الـ model واضحًا، أصبحت الـ measures أسهل وأوثق.</li>
        <li><strong>تسهيل التوسع:</strong> عند إضافة جداول أو KPIs جديدة، لا ينهار الشغل كله من جديد.</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>فكرة مهمة:</strong> التقرير الجميل لا ينقذ model سيئ. لكن model جيد يجعل حتى التقرير البسيط موثوقًا وقابلًا للتطوير.</p>
    </div>

    <div class="lesson-card">
      <h3>ما هو الـ Schema؟ وما أشهر أنواعه؟</h3>
      <p>كلمة Schema تعني شكل تنظيم الجداول والعلاقات بينها. أي: كيف رتبت البيانات داخل النموذج.</p>
      <ul>
        <li><strong>Flat Table:</strong> كل شيء في جدول واحد كبير. سهل في البداية، لكنه يسبب تكرارًا وبطئًا ومشاكل في التحليل.</li>
        <li><strong>Star Schema:</strong> أفضل شكل في أغلب مشاريع Power BI. فيه Fact Table في المنتصف، وحولها Dimension Tables.</li>
        <li><strong>Snowflake Schema:</strong> مشابه للـ Star لكن فيه الـ Dimensions نفسها متفرعة إلى جداول إضافية. أحيانًا مفيد، لكنه غالبًا أعقد من اللازم للمبتدئ.</li>
      </ul>
      <p>في هذا الدرس سنركز على Star Schema لأنه الأكثر شيوعًا، والأوضح، والأفضل غالبًا في Power BI.</p>
    </div>

    <table class="compare-table">
      <tr>
        <th>Fact Tables</th>
        <th>Dimension Tables</th>
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

    <img class="lesson-img" src="images/Schemas.png" alt="Star Schema vs Snowflake Schema">
    <p class="lesson-img-caption">مقارنة بين Star Schema وSnowflake Schema</p>

    <div class="tip-box">
      <div class="icon">⭐</div>
      <p><strong>Star Schema:</strong> هو أفضل تصميم، وفيه بيكون الـ Fact Table في المنتصف، ومحاط بـ Dimension Tables زي النجمة.</p>
    </div>

    <div class="lesson-card">
      <h3>🏆 Pro Tips من الخبرة الميدانية</h3>
      <ul>
        <li><strong>البداية البسيطة:</strong> مش محتاج نموذج معقد جداً في أول مشروع. ابدأ بـ Facts و Dimensions واضحة، وحسّن بعدين.</li>
        <li><strong>الحجم مهم:</strong> لو الـ Dimension Table فوق 10 مليون صف، فأنت بتخزّن بيانات يجب تكون في Fact Table. أعد تقييم النموذج.</li>
        <li><strong>الـ Keys:</strong> استخدم surrogate keys (مفاتيح مصطنعة: 1, 2, 3...) بدل natural keys. أسرع وأمن أكثر للربط.</li>
        <li><strong>الأداء أولاً:</strong> جرّب النموذج بـ dataset صغير أولاً (1000 صف). لو فيه مشكلة، اكتشفها بدري.</li>
        <li><strong>التوثيق:</strong> وثّق "لماذا" نموذجك بهذا الشكل. بعد 6 أشهر انت نفسك مش هتفتكر!</li>
      </ul>
    </div>

` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>🎯 Where you are in the journey — From understanding systems to building the model</h3>
<p><strong>What you've learned so far:</strong></p>
<ul>
<li>Power BI transforms raw data → insights and decision-making</li>
<li>Data starts from OLTP (complex, repetitive) and moves to OLAP (organized, analytical)</li>
</ul>
<p><strong>The question now:</strong> How do you engineer this transformation? The answer is <strong>Star Schema</strong> — a simple and powerful data model that separates transactions from details.</p>
<p>This model is not just "academic organization" — it is the foundation you build on:</p>
<ul>
<li>Your filters (because Dimensions have unique columns)</li>
<li>Your DAX formulas (because of the Fact vs Dimension separation)</li>
<li>Your report speed (because tables are small and intelligently connected)</li>
</ul>
</div>

<div class="lesson-card">
<h3>Why not use one big table? (Flat Table)</h3>
<p>In Excel we are used to putting all data in one large sheet. In Power BI this causes severe slowness and data duplication. The correct approach is to split the data.</p>
</div>

<div class="lesson-card">
<h3>What is the Data Model, exactly?</h3>
<p>The Data Model is the way you arrange tables inside Power BI, define the relationships between them, and decide where the numbers live and where the descriptive details live.</p>
<p>In practical terms: the Data Model is not just tables that exist inside the file — it is the logical map that lets Power BI understand how filters flow, how numbers aggregate, and how results come out correct.</p>
</div>

<div class="lesson-card">
<h3>What is the Data Model's goal?</h3>
<ul>
<li><strong>Produce correct numbers:</strong> So results are not duplicated or inflated by a bad design.</li>
<li><strong>Speed up the report:</strong> A good model lets Power BI read data more efficiently.</li>
<li><strong>Simplify DAX:</strong> The clearer the model, the easier and more reliable the measures.</li>
<li><strong>Make scaling easier:</strong> When you add new tables or KPIs, the whole project does not collapse.</li>
</ul>
</div>

<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Key idea:</strong> A beautiful report cannot save a bad model. But a good model makes even the simplest report trustworthy and extensible.</p>
</div>

<div class="lesson-card">
<h3>What is a Schema? And what are the most common types?</h3>
<p>The word Schema means the shape of how tables and relationships are organized — that is, how you arranged data inside the model.</p>
<ul>
<li><strong>Flat Table:</strong> Everything in one big table. Easy at first, but causes redundancy, slowness, and analytical problems.</li>
<li><strong>Star Schema:</strong> The best shape for most Power BI projects. A Fact Table sits in the center, surrounded by Dimension Tables.</li>
<li><strong>Snowflake Schema:</strong> Similar to Star, but Dimensions themselves branch into additional tables. Sometimes useful, but usually more complex than a beginner needs.</li>
</ul>
<p>This lesson focuses on Star Schema because it is the most common, the clearest, and usually the best choice in Power BI.</p>
</div>

<table class="compare-table">
<tr>
<th>Fact Tables</th>
<th>Dimension Tables</th>
</tr>
<tr>
<td>Contain transactions and numbers (sales, expenses).</td>
<td>Contain details and descriptions (customers, products).</td>
</tr>
<tr>
<td>Very long (millions of rows).</td>
<td>Short and limited (hundreds or thousands of rows).</td>
</tr>
<tr>
<td>Data repeats (a customer can buy 100 times).</td>
<td>Data is unique and does not repeat (each customer has one code only).</td>
</tr>
</table>

<img class="lesson-img" src="images/Schemas.png" alt="Star Schema vs Snowflake Schema">
<p class="lesson-img-caption">Comparison between Star Schema and Snowflake Schema</p>

<div class="tip-box">
<div class="icon">⭐</div>
<p><strong>Star Schema:</strong> The best design — a Fact Table in the center, surrounded by Dimension Tables like a star.</p>
</div>

<div class="lesson-card">
<h3>🏆 Pro Tips from field experience</h3>
<ul>
<li><strong>Start simple:</strong> You don't need a very complex model on your first project. Start with clear Facts and Dimensions, then improve later.</li>
<li><strong>Size matters:</strong> If a Dimension Table has more than 10 million rows, you are storing data that should be in a Fact Table. Re-evaluate the model.</li>
<li><strong>Keys:</strong> Use surrogate keys (artificial keys: 1, 2, 3...) instead of natural keys. Faster and safer for joins.</li>
<li><strong>Performance first:</strong> Test the model with a small dataset first (1,000 rows). If there is a problem, find it early.</li>
<li><strong>Document it:</strong> Record <em>why</em> your model looks the way it does. Six months from now, even you won't remember!</li>
</ul>
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

    <img class="lesson-img" src="images/SCD.png" alt="شرح بصري لفكرة SCD">
    <p class="lesson-img-caption">الصورة تلخص الفكرة: البيانات تخرج من المصدر، تمر عبر ETL، ثم نحفظ التاريخ داخل الـ Dimension بصفوف متعددة، وبعدها نربطها بالـ Fact Table بشكل يسمح بتحليل صحيح.</p>

    <div class="lesson-card">
      <h3>الربط الصحيح مع الـ Fact Table</h3>
      <p>الفكرة المهمة هنا أننا لا نعتمد على <strong>EmployeeID</strong> وحده، لأن الموظف نفسه قد يظهر في أكثر من صف تاريخي داخل <code>Dim_Employee</code>.</p>
      <ul>
        <li><strong>EmployeeID</strong> هو هوية الموظف في البزنس، لذلك قد يتكرر في أكثر من صف.</li>
        <li><strong>EmployeeKey</strong> هو المفتاح الفريد لكل نسخة تاريخية من الموظف، لذلك لا يتكرر.</li>
        <li>لو كنا نقرأ عملية بيع قديمة، فنحن نريد بيانات الموظف <strong>كما كانت وقت البيع</strong>، وليس كما هي اليوم.</li>
      </ul>
      <p><strong>ملاحظة مهمة:</strong> في النموذج المثالي قد نخزن <code>EmployeeKey</code> مباشرة داخل <code>Fact Table</code>. لكن في هذا المثال التعليمي نحن نتعمد الوصول للصف الصحيح باستخدام <code>EmployeeID</code> + <code>SaleDate</code> حتى تكون الفكرة أوضح للمتدرب خطوة بخطوة.</p>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>مهم جدًا:</strong> هذا المثال هدفه شرح الفكرة، وليس أن يحفظ المتدرب الصيغة. لو فهم أن اختيار الصف يتم حسب الموظف + تاريخ البيع، فهو فهم جوهر Type 2.</p>
    </div>

    <div class="lesson-card">
      <h3>كيف نشرح الكود بطريقة بسيطة جداً؟</h3>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>اسم الـ Measure</h4>
            <p><code>Employee Branch at Sale</code> معناها: أعطني فرع الموظف في لحظة البيع.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>ما معنى CALCULATE؟</h4>
            <p>فكر فيها كأنها تقول: احسب النتيجة، ولكن تحت شروط معيّنة.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>ما معنى FILTER؟</h4>
            <p>فكر فيها كأنها تقول: ابحث داخل جدول الموظفين عن الصف الذي يطابق عملية البيع الحالية.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">4</div>
          <div class="step-content">
            <h4>ما هي الشروط؟</h4>
            <p>نفس الموظف، ويجب أن يكون تاريخ البيع واقعاً بين <code>StartDate</code> و <code>EndDate</code> لهذا الصف.</p>
          </div>
        </div>
      </div>
      <p><strong>اقرأ الكود بهذه الجملة:</strong> من جدول الموظفين، ابحث عن صف نفس الموظف الذي كان صالحاً وقت البيع، ثم أرجع الفرع من هذا الصف.</p>
    </div>

    <div class="lesson-card lesson-card-wide lesson-card-example-table">
      <h3>الجدولان اللذان يعمل عليهما الكود</h3>
      <p>قبل قراءة الـ DAX، انظر أولاً إلى الجدولين. الكود يأخذ <strong>EmployeeID</strong> و<strong>SaleDate</strong> من <code>Fact_Sales</code>، ثم يبحث داخل <code>Dim_Employee</code> عن الصف التاريخي الصحيح.</p>

      <h4 style="margin:1.25rem 0 0.6rem;">1) جدول البعد</h4>
      <table class="compare-table">
        <tr>
          <th>Is_Current</th>
          <th>EndDate</th>
          <th>StartDate</th>
          <th>Branch</th>
          <th>Name</th>
          <th>EmployeeID (NK)</th>
          <th>EmployeeKey (SK)</th>
        </tr>
        <tr>
          <td>N</td>
          <td>2023-06-30</td>
          <td>2022-01-01</td>
          <td>Cairo</td>
          <td>Ahmed</td>
          <td>E001</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Y</td>
          <td>9999-12-31</td>
          <td>2023-07-01</td>
          <td>Giza</td>
          <td>Ahmed</td>
          <td>E001</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Y</td>
          <td>9999-12-31</td>
          <td>2022-01-01</td>
          <td>Alex</td>
          <td>Sara</td>
          <td>E002</td>
          <td>2</td>
        </tr>
      </table>

      <h4 style="margin:1.4rem 0 0.6rem;">2) جدول الـ Fact</h4>
      <table class="compare-table">
        <tr>
          <th>Amount</th>
          <th>SaleDate</th>
          <th>EmployeeID</th>
          <th>SaleID</th>
        </tr>
        <tr>
          <td>500</td>
          <td>2023-03-15</td>
          <td>E001</td>
          <td>100</td>
        </tr>
        <tr>
          <td>800</td>
          <td>2024-03-15</td>
          <td>E001</td>
          <td>101</td>
        </tr>
        <tr>
          <td>300</td>
          <td>2024-01-10</td>
          <td>E002</td>
          <td>102</td>
        </tr>
      </table>

      <p><strong>مثال سريع:</strong> لو الكود يقرأ الصف الذي فيه <strong>SaleID = 101</strong>، فسيرى أن الموظف هو <strong>E001</strong> وأن تاريخ البيع هو <strong>2024-03-15</strong>. بعدها سيبحث داخل <code>Dim_Employee</code> عن صف أحمد الذي تشمل فترة صلاحيته هذا التاريخ، وبالتالي ستكون النتيجة هي <strong>Giza</strong>.</p>
    </div>

    <div class="code-block">
<span class="cm">-- ابدأ من الموظف الموجود في صف البيع</span>
<span class="cm">-- ابحث عن الصف التاريخي الصالح في تاريخ البيع</span>
<span class="cm">-- أرجع اسم الفرع من هذا الصف</span>
Employee Branch at Sale = 
<span class="fn">CALCULATE</span>(
    <span class="fn">MAX</span>(Dim_Employee[Branch]),
    <span class="fn">FILTER</span>(
        Dim_Employee,
        Dim_Employee[EmployeeID] = <span class="fn">MAX</span>(Fact_Sales[EmployeeID]) &amp;&amp;
        Dim_Employee[StartDate] &lt;= <span class="fn">MAX</span>(Fact_Sales[SaleDate]) &amp;&amp;
        Dim_Employee[EndDate] &gt;= <span class="fn">MAX</span>(Fact_Sales[SaleDate])
    )
)
    </div>

    <div class="lesson-card">
      <h3>ترجمة الكود إلى كلام عادي</h3>
      <ul>
        <li><strong><code>MAX(Dim_Employee[Branch])</code>:</strong> بعد أن نجد الصف الصحيح، خذ اسم الفرع منه.</li>
        <li><strong><code>Dim_Employee[EmployeeID] = MAX(Fact_Sales[EmployeeID])</code>:</strong> احتفظ فقط بالصفوف الخاصة بنفس الموظف الموجود في عملية البيع.</li>
        <li><strong><code>StartDate &lt;= SaleDate</code>:</strong> الصف يجب أن يكون بدأ قبل البيع أو في نفس اليوم.</li>
        <li><strong><code>EndDate &gt;= SaleDate</code>:</strong> الصف يجب أن يظل صالحاً وقت البيع.</li>
      </ul>
      <p>إذا تحققت كل الشروط، فهذا هو الصف التاريخي الذي نريده، ومنه نأخذ قيمة الفرع.</p>
    </div>

    <div class="tip-box">
      <div class="icon">✅</div>
      <p><strong>الخلاصة:</strong> المطلوب هنا ليس حفظ DAX، بل فهم الفكرة. إذا فهم المتدرب أن الصف الصحيح يتم اختياره باستخدام <strong>الموظف + تاريخ البيع</strong>، فقد فهم قلب Type 2.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>What is the problem?</h3>
<p>In real life, dimension data changes over time. If a branch manager moved from Cairo to Alexandria in July, do reports before July show Cairo or Alexandria? The answer depends on the SCD type you choose.</p>
</div>

<table class="compare-table">
<tr>
<th>Type</th>
<th>Mechanism</th>
<th>When do you use it?</th>
</tr>
<tr>
<td><strong>Type 0</strong></td>
<td>No change — the first value stays forever.</td>
<td>Data that should never change, such as date of birth.</td>
</tr>
<tr>
<td><strong>Type 1</strong></td>
<td>Overwrite — replace the old value with the new one.</td>
<td>When history does not matter, such as fixing a typo.</td>
</tr>
<tr>
<td><strong>Type 2 <span class="yes">✔ Most common</span></strong></td>
<td>Add a new row with a validity period.</td>
<td>When you need to preserve the full history.</td>
</tr>
<tr>
<td><strong>Type 3</strong></td>
<td>Add a column for the previous value beside the current one.</td>
<td>To track only the latest previous change.</td>
</tr>
</table>

<img class="lesson-img" src="images/SCD.png" alt="Visual explanation of the SCD Type 2 idea">
<p class="lesson-img-caption">This image summarizes the idea: data comes from the source, passes through ETL, then history is preserved inside the dimension with multiple rows, and finally the dimension connects to the fact table in a way that supports correct analysis.</p>

<div class="lesson-card">
<h3>Correct association with the Fact Table</h3>
<p>The important idea here is that we do not rely on <strong>EmployeeID</strong> alone, because the same employee can appear in more than one historical row inside <code>Dim_Employee</code>.</p>
<ul>
<li><strong>EmployeeID</strong> is the business identity of the employee, so it can repeat across multiple rows.</li>
<li><strong>EmployeeKey</strong> is the unique key for each historical version of the employee, so it does not repeat.</li>
<li>If we are reading an old sale, we want the employee information <strong>as it was at the time of the sale</strong>, not as it is today.</li>
</ul>
<p><strong>Important note:</strong> In the ideal model, <code>EmployeeKey</code> may be stored directly inside the <code>Fact Table</code>. In this teaching example, however, we deliberately reach the correct row using <code>EmployeeID</code> + <code>SaleDate</code> so the learner can understand the logic step by step.</p>
</div>

<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Important:</strong> This example aims to explain the concept, not have the learner memorize the formula. If they understand that row selection uses <strong>employee + sale date</strong>, they have understood the heart of Type 2.</p>
</div>

<div class="lesson-card">
<h3>How do we explain the code in a very simple way?</h3>
<div class="steps">
  <div class="step">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>The measure name</h4>
      <p><code>Employee Branch at Sale</code> means: give me the employee's branch at the moment of the sale.</p>
    </div>
  </div>
  <div class="step">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>What does CALCULATE mean?</h4>
      <p>Think of it as saying: compute the result, but under specific conditions.</p>
    </div>
  </div>
  <div class="step">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>What does FILTER mean?</h4>
      <p>Think of it as saying: search inside the employee table for the row that matches the current sale.</p>
    </div>
  </div>
  <div class="step">
    <div class="step-num">4</div>
    <div class="step-content">
      <h4>What are the conditions?</h4>
      <p>The same employee, and the sale date must fall between <code>StartDate</code> and <code>EndDate</code> for that row.</p>
    </div>
  </div>
</div>
<p><strong>Read the code like this:</strong> from the employee table, find the row for the same employee that was valid when the sale happened, then return the branch from that row.</p>
</div>

<div class="lesson-card lesson-card-wide lesson-card-example-table">
  <h3>The two tables the code works with</h3>
  <p>Before reading the DAX, first look at the two tables. The code takes <strong>EmployeeID</strong> and <strong>SaleDate</strong> from <code>Fact_Sales</code>, then searches inside <code>Dim_Employee</code> for the correct historical row.</p>

  <h4 style="margin:1.25rem 0 0.6rem;">1) The dimension table</h4>
  <table class="compare-table">
    <tr>
      <th>Is_Current</th>
      <th>EndDate</th>
      <th>StartDate</th>
      <th>Branch</th>
      <th>Name</th>
      <th>EmployeeID (NK)</th>
      <th>EmployeeKey (SK)</th>
    </tr>
    <tr>
      <td>N</td>
      <td>2023-06-30</td>
      <td>2022-01-01</td>
      <td>Cairo</td>
      <td>Ahmed</td>
      <td>E001</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Y</td>
      <td>9999-12-31</td>
      <td>2023-07-01</td>
      <td>Giza</td>
      <td>Ahmed</td>
      <td>E001</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Y</td>
      <td>9999-12-31</td>
      <td>2022-01-01</td>
      <td>Alex</td>
      <td>Sara</td>
      <td>E002</td>
      <td>2</td>
    </tr>
  </table>

  <h4 style="margin:1.4rem 0 0.6rem;">2) The fact table</h4>
  <table class="compare-table">
    <tr>
      <th>Amount</th>
      <th>SaleDate</th>
      <th>EmployeeID</th>
      <th>SaleID</th>
    </tr>
    <tr>
      <td>500</td>
      <td>2023-03-15</td>
      <td>E001</td>
      <td>100</td>
    </tr>
    <tr>
      <td>800</td>
      <td>2024-03-15</td>
      <td>E001</td>
      <td>101</td>
    </tr>
    <tr>
      <td>300</td>
      <td>2024-01-10</td>
      <td>E002</td>
      <td>102</td>
    </tr>
  </table>

  <p><strong>Quick example:</strong> if the code is reading the row where <strong>SaleID = 101</strong>, it will see that the employee is <strong>E001</strong> and the sale date is <strong>2024-03-15</strong>. It will then search inside <code>Dim_Employee</code> for Ahmed's row whose validity period includes that date, so the result will be <strong>Giza</strong>.</p>
</div>

<div class="code-block">
<span class="cm">-- Start from the employee in the sale row</span>
<span class="cm">-- Find the historical row that is valid on the sale date</span>
<span class="cm">-- Return the branch name from that row</span>
Employee Branch at Sale = 
<span class="fn">CALCULATE</span>(
    <span class="fn">MAX</span>(Dim_Employee[Branch]),
    <span class="fn">FILTER</span>(
        Dim_Employee,
        Dim_Employee[EmployeeID] = <span class="fn">MAX</span>(Fact_Sales[EmployeeID]) &amp;&amp;
        Dim_Employee[StartDate] &lt;= <span class="fn">MAX</span>(Fact_Sales[SaleDate]) &amp;&amp;
        Dim_Employee[EndDate] &gt;= <span class="fn">MAX</span>(Fact_Sales[SaleDate])
    )
)
</div>

<div class="lesson-card">
<h3>Translate the code into plain words</h3>
<ul>
<li><strong><code>MAX(Dim_Employee[Branch])</code>:</strong> once we find the correct row, take the branch name from it.</li>
<li><strong><code>Dim_Employee[EmployeeID] = MAX(Fact_Sales[EmployeeID])</code>:</strong> keep only rows for the same employee as the current sale row.</li>
<li><strong><code>StartDate &lt;= SaleDate</code>:</strong> the row must have started before the sale, or on the same day.</li>
<li><strong><code>EndDate &gt;= SaleDate</code>:</strong> the row must still be valid at the time of the sale.</li>
</ul>
<p>If all conditions are true, that is the historical row we want, and that is where the branch value comes from.</p>
</div>

<div class="tip-box">
<div class="icon">✅</div>
<p><strong>Bottom line:</strong> the goal here is not to memorize DAX. If the learner understands that the correct row is chosen using <strong>employee + sale date</strong>, then they have understood the heart of Type 2.</p>
</div>` }],
  },  "bridge-tables": {
    eyebrow: "01 · 07 — Bridge Tables",
    title: "Bridge Tables",
    lede: "الحل الاحترافي لعلاقات Many-to-Many في Data Model — بدون Bridge Tables ستواجه نتائج خاطئة والـ Filters ستكون مكسورة.",
    en_eyebrow: "01 · 07 — Bridge Tables",
    en_lede: "The professional solution for Many-to-Many relationships in your data model — without bridge tables, you'll get wrong results and broken filters.",
    sectionId: "bridge-tables",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>المشكلة — لماذا Many-to-Many خطيرة؟</h3>
      <p>لو ربطت جدولين مباشرة بعلاقة Many-to-Many (مثلاً: طالب ← مادة وكل طالب له مواد متعددة وكل مادة فيها طلاب متعددين)، Power BI بيحتاج لحل وسيط لأن الفلاتر ستنتشر بشكل غير متحكم فيه وتعطي أرقاماً مضاعفة.</p>
    </div>

    <div class="lesson-card">
      <h3>الحل — Bridge Table</h3>
      <p>Bridge Table عبارة عن جدول وسيط يحتوي على المفاتيح من الجدولين ويحوّل العلاقة Many-to-Many لعلاقتين One-to-Many نظيفتين:</p>
      <div class="code-block">
<span style="color:var(--gold);">-- بدلاً من:</span>
Students ←→ Subjects  (Many-to-Many — خطأ)

<span style="color:var(--gold);">-- استخدم Bridge Table:</span>
Students ──< StudentSubjects >── Subjects
         (One-to-Many)  (Many-to-One)

<span style="color:var(--gold);">-- الـ Bridge Table يحتوي على:</span>
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

<span style="color:var(--gold);">-- Bridge Table:</span>
ProductPromotion (ProductID, PromotionID)

<span style="color:var(--gold);">-- العلاقات:</span>
Products ──< ProductPromotion >── Promotions
      </div>
    </div>

    <div class="lesson-card">
      <h3>إعداد Filter Direction مع Bridge Tables</h3>
      <ul>
        <li>العلاقة من Fact → Bridge: اتجاه واحد (Single)</li>
        <li>العلاقة من Bridge → Dimension: اتجاه واحد (Single)</li>
        <li>في بعض الحالات ستحتاج <strong>CROSSFILTER</strong> في DAX لتمرير الفلتر يدوياً</li>
      </ul>
      <div class="code-block">
<span style="color:var(--text3);">-- DAX مع CROSSFILTER لتمرير الـ filter عبر Bridge Table</span>
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
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>Problem — Why is Many-to-Many dangerous?</h3>
<p>If you connect two tables directly with a relationship Many-to-Many (for example: student ← A subject and each student has multiple subjects, and each subject has multiple students), Power BI It needs an intermediate solution because the filters will spread uncontrollably and give double numbers.</p>
</div>
<div class="lesson-card">
<h3>Solution — Bridge Table</h3>
<p>An intermediate table contains the keys from the two tables and converts the Many-to-Many relationship into two clean One-to-Many relationships:</p>
<div class="code-block">
<span style="color:var(--gold);">-- instead of:</span>
Students ←→ Subjects (Many-to-Many — false)

<span style="color:var(--gold);">-- Use a bridge table:</span>
Students ──&lt; StudentSubjects &gt;── Subjects
         (One-to-Many)  (Many-to-One)

<span style="color:var(--gold);">-- The bridge table contains:</span>
StudentSubjects: StudentID | SubjectID | Grade | Year
      </div>
</div>
<div class="lesson-card">
<h3>Real-life example — sales, products, and offers</h3>
<p>If there are promotions that apply to multiple products and each product belongs to multiple offers:</p>
<div class="code-block">
<span style="color:var(--gold);">-- Tables:</span>
Products (ProductID, Name, Category)
Promotions (PromotionID, Name, Discount%)

<span style="color:var(--gold);">-- Bridge schedule:</span>
ProductPromotion (ProductID, PromotionID)

<span style="color:var(--gold);">-- Relationships:</span>
Products ──&lt; ProductPromotion &gt;── Promotions
      </div>
</div>
<div class="lesson-card">
<h3>Setting filter direction with bridge tables</h3>
<ul>
<li>Relationship from Fact → Bridge: One Way (Single)</li>
<li>Relationship from Bridge → Dimension: One Way (Single)</li>
<li>In some cases you will need <strong>CROSSFILTER</strong> in DAX To pass the filter manually</li>
</ul>
<div class="code-block">
<span style="color:var(--text3);">-- DAX with CROSSFILTER To pass the filter through the bridge</span>
Sales With Promo =
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">CROSSFILTER</span>(ProductPromotion[ProductID], Products[ProductID], Both)
)
      </div>
</div>
<div class="warn-box">
<div class="icon">⚠️</div>
<p><strong>warning:</strong> Avoid activation Cross-filter Direction = Both On the relationships directly in the model Many-to-Many — use CROSSFILTER in DAX Instead of precise control.</p>
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
      <h3>مقدمة: مصادر البيانات المتعددة</h3>
      <p>Power BI يدعم أكثر من 100 مصدر مختلف. الاختيار بينهم يعتمد على:</p>
      <ul>
        <li><strong>نوع البيانات:</strong> Excel؟ Database؟ API؟</li>
        <li><strong>موقع البيانات:</strong> محلي (Local)؟ سحابة (Cloud)؟</li>
        <li><strong>تكرار التحديث:</strong> يومي؟ ساعي؟ فوري (Real-time)؟</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>أشهر مصادر البيانات</h3>
      <ul>
        <li><strong>ملفات (Files):</strong>
          <ul>
            <li><strong>Excel:</strong> أشهر مصدر. اختر ورقة العمل وحدد الجدول المناسب من Navigator.</li>
            <li><strong>CSV / Text:</strong> ملفات نصية. Power Query سيسأل عن الفاصل (Comma, Tab, Space).</li>
            <li><strong>Folder:</strong> استيراد كل الملفات من مجلد واحد (مثل 12 ملف Excel لأول 12 شهر) وادمجهم تلقائياً.</li>
          </ul>
        </li>
        <li><strong>قواعد البيانات (Databases):</strong>
          <ul>
            <li><strong>SQL Server:</strong> قاعدة بيانات محلية أو على الـ Cloud. توفر Query النتائج مباشرة (أسرع من Excel).</li>
            <li><strong>MySQL, Oracle, PostgreSQL:</strong> قواعد بيانات أخرى. نفس المنطق.</li>
          </ul>
        </li>
        <li><strong>Microsoft Ecosystem:</strong>
          <ul>
            <li><strong>SharePoint Lists:</strong> قوائم من SharePoint مع التحديث الفوري.</li>
            <li><strong>Dataverse:</strong> قاعدة بيانات سحابية من Microsoft Dynamics 365 و Power Apps.</li>
            <li><strong>Azure SQL Database:</strong> قاعدة بيانات محجوزة على السحابة.</li>
          </ul>
        </li>
        <li><strong>الويب و APIs:</strong>
          <ul>
            <li><strong>Web:</strong> استيراد البيانات من صفحة HTML (سحب الجداول من الويب).</li>
            <li><strong>REST API:</strong> الاتصال بـ APIs الحديثة لاستجلاب البيانات بصيغة JSON.</li>
            <li><strong>Google Analytics, Salesforce, etc.:</strong> connectors جاهزة.</li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>طرق المصادقة (Authentication)</h3>
      <p>عند الاتصال بمصدر بيانات خارجي، Power BI يسأل: "من تكون؟" إليك الطرق:</p>
      <ul>
        <li><strong>Windows Authentication (Windows):</strong> استخدم بيانات حسابك الويندوز الحالي. سريع وآمن في الشبكات الداخلية (On-Premises).</li>
        <li><strong>Basic (Username + Password):</strong> أدخل اسم المستخدم والكلمة المرور. شائع لـ APIs والمواقع.</li>
        <li><strong>OAuth (Single Sign-On):</strong> انقر على "Google Sign-In" أو "Microsoft Sign-In" — توكن آمن بدون حفظ كلمة مرور.</li>
        <li><strong>API Key / Token:</strong> لـ APIs المتقدمة — توكن طويل يمنحك وصول مؤقت.</li>
      </ul>
      <p><strong>نصيحة أمان:</strong> لا تحفظ كلمات المرور في Power Query. استخدم OAuth أو Secure Storage.</p>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <h4>Home → Get Data</h4>
          <p>من شريط الأدوات العلوي، انقر على "Get Data" واختر مصدر البيانات بتاعك (Excel, SQL Server, Web, إلخ).</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <h4>الـ Navigator Window</h4>
          <p><strong>ماذا ترى:</strong> قائمة بكل الجداول المتاحة في المصدر.</p>
          <p><strong>اختر جداولك:</strong> علم (checkmark) على الجداول اللي عايزها. تقدر تختار أكثر من جدول.</p>
          <p><strong>معاينة:</strong> انقر على جدول لتشوف البيانات الفعلية قبل الاستيراد.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <h4>Load vs Transform Data</h4>
          <p><strong>Load (الخيار السريع):</strong> استورد البيانات كما هي مباشرة إلى النموذج. استخدمه فقط لو البيانات نظيفة تماماً.</p>
          <p><strong>Transform Data (الخيار الأفضل):</strong> افتح Power Query Editor لتنظيف وتحويل البيانات قبل الاستيراد. <strong>دائماً اختر هذا الخيار.</strong></p>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Import vs DirectQuery — أي تختار؟</h3>
      <p>عند الاتصال بـ Database أو API، Power BI يسأل:</p>
      <ul>
        <li><strong>Import Mode (الافتراضي):</strong> انسخ البيانات الكاملة إلى جهازك (في ملف .pbix). الفائدة: سريع جداً. العيب: البيانات قد تكون قديمة (تحتاج Refresh يدوي).</li>
        <li><strong>DirectQuery Mode:</strong> لا تنسخ. اتصل بـ Database مباشرة في كل استعلام. الفائدة: بيانات فورية Real-time. العيب: أبطأ لأن الاستعلام يحدث كلما تفاعل المستخدم.</li>
      </ul>
      <p><strong>النصيحة:</strong> استخدم Import للبيانات الثابتة (تاريخ، منتجات). استخدم DirectQuery للبيانات المتغيرة السريعة (المبيعات الفورية).</p>
    </div>

    <div class="lesson-card">
      <h3>استكشاف الأخطاء الشائعة</h3>
      <ul>
        <li><strong>❌ "Could not find file":</strong> تحقق من المسار والملف موجود. لو الملف على محرك USB أو Shared Drive، قد يتغير الـ Path.</li>
        <li><strong>❌ Connection timeout:</strong> الـ Database بعيد أو الـ Network بطيء. جرب Increase Timeout من Data Source Settings.</li>
        <li><strong>❌ "Access Denied":</strong> بيانات الدخول خاطئة (Username/Password). أعد المحاولة أو اطلب من الـ Admin كلمة مرور جديدة.</li>
        <li><strong>❌ Headers كـ First Row:</strong> إذا أول صف بيانات وليس رؤوس (Header)، استخدم "Use First Row as Headers" في Power Query.</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>نصيحة:</strong> احفظ اتصالاتك المتكررة كـ "Query" مسماة. بهذا لو احتجت تحديثها لاحقاً، تقدر تعدّل Query واحدة وكل التقارير تحديثت تلقائياً.</p>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>تحذير:</strong> عند الاتصال بـ Database من شبكة الشركة (On-Premises)، قد تحتاج تثبيت Data Gateway. بدونه، Power BI Service لن يقدر تحديث البيانات في السحابة.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>Introduction: Multiple Data Sources</h3>
<p>Power BI supports 100+ different sources. Choosing between them depends on:</p>
<ul>
<li><strong>Data Type:</strong> Excel? Database? API?</li>
<li><strong>Location:</strong> Local? Cloud?</li>
<li><strong>Refresh Frequency:</strong> Daily? Hourly? Real-time?</li>
</ul>
</div>

<div class="lesson-card">
<h3>Popular Data Sources</h3>
<ul>
<li><strong>Files:</strong>
<ul>
<li><strong>Excel:</strong> Most common. Choose the worksheet and select the table from Navigator.</li>
<li><strong>CSV / Text:</strong> Text files. Power Query will ask about the delimiter (Comma, Tab, Space).</li>
<li><strong>Folder:</strong> Import all files from one folder (like 12 Excel files for 12 months) and merge automatically.</li>
</ul>
</li>
<li><strong>Databases:</strong>
<ul>
<li><strong>SQL Server:</strong> Local or Cloud database. Returns query results directly (faster than Excel).</li>
<li><strong>MySQL, Oracle, PostgreSQL:</strong> Other databases. Same logic.</li>
</ul>
</li>
<li><strong>Microsoft Ecosystem:</strong>
<ul>
<li><strong>SharePoint Lists:</strong> Lists from SharePoint with instant updates.</li>
<li><strong>Dataverse:</strong> Cloud database from Microsoft Dynamics 365 and Power Apps.</li>
<li><strong>Azure SQL Database:</strong> Database hosted on the cloud.</li>
</ul>
</li>
<li><strong>Web &amp; APIs:</strong>
<ul>
<li><strong>Web:</strong> Import data from HTML pages (scrape tables from websites).</li>
<li><strong>REST API:</strong> Connect to modern APIs to fetch data in JSON format.</li>
<li><strong>Google Analytics, Salesforce, etc.:</strong> Ready-made connectors.</li>
</ul>
</li>
</ul>
</div>

<div class="lesson-card">
<h3>Authentication Methods</h3>
<p>When connecting to an external data source, Power BI asks: "Who are you?" Here are the methods:</p>
<ul>
<li><strong>Windows Authentication:</strong> Use your current Windows account. Fast and secure in internal networks (On-Premises).</li>
<li><strong>Basic (Username + Password):</strong> Enter username and password. Common for APIs and websites.</li>
<li><strong>OAuth (Single Sign-On):</strong> Click "Google Sign-In" or "Microsoft Sign-In" — secure token without saving password.</li>
<li><strong>API Key / Token:</strong> For advanced APIs — long token granting temporary access.</li>
</ul>
<p><strong>Security Tip:</strong> Don't save passwords in Power Query. Use OAuth or Secure Storage.</p>
</div>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Home → Get Data</h4>
<p>From the top toolbar, click "Get Data" and choose your data source (Excel, SQL Server, Web, etc.).</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>The Navigator Window</h4>
<p><strong>What you see:</strong> List of all available tables in the source.</p>
<p><strong>Select your tables:</strong> Check (checkmark) the tables you want. You can select multiple tables.</p>
<p><strong>Preview:</strong> Click a table to see actual data before import.</p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Load vs Transform Data</h4>
<p><strong>Load (quick option):</strong> Import data as-is directly into the model. Use only if data is completely clean.</p>
<p><strong>Transform Data (best option):</strong> Open Power Query Editor to clean and transform data before import. <strong>Always choose this option.</strong></p>
</div>
</div>
</div>

<div class="lesson-card">
<h3>Import vs DirectQuery — Which to Choose?</h3>
<p>When connecting to a Database or API, Power BI asks:</p>
<ul>
<li><strong>Import Mode (default):</strong> Copy all data to your device (in .pbix file). Benefit: very fast. Drawback: data may be stale (needs manual refresh).</li>
<li><strong>DirectQuery Mode:</strong> Don't copy. Query database directly. Benefit: Real-time data. Drawback: slower because query runs every time user interacts.</li>
</ul>
<p><strong>Tip:</strong> Use Import for stable data (dates, products). Use DirectQuery for fast-changing data (live sales).</p>
</div>

<div class="lesson-card">
<h3>Troubleshoot Common Errors</h3>
<ul>
<li><strong>❌ "Could not find file":</strong> Check path and file exists. If file is on USB or Shared Drive, path may change.</li>
<li><strong>❌ Connection timeout:</strong> Database is far or network is slow. Try increasing Timeout from Data Source Settings.</li>
<li><strong>❌ "Access Denied":</strong> Login credentials wrong (Username/Password). Retry or ask Admin for new password.</li>
<li><strong>❌ Headers as First Row:</strong> If first row is data not header, use "Use First Row as Headers" in Power Query.</li>
</ul>
</div>

<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Tip:</strong> Save your repeated connections as named "Queries". This way if you need to update later, edit one Query and all reports update automatically.</p>
</div>

<div class="warn-box">
<div class="icon">⚠️</div>
<p><strong>Warning:</strong> When connecting to company network database (On-Premises), you may need to install Data Gateway. Without it, Power BI Service can't refresh data in the cloud.</p>
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
      <h3>مقدمة: الـ Data Profiling</h3>
      <p>قبل تنظيف البيانات، <strong>افهم مشاكلك أولاً</strong>. Power Query وفّر أدوات للتحليل السريع:</p>
      <ul>
        <li><strong>Column Distribution:</strong> كام فريق قيمة مختلفة في العمود؟ هل فيه Values مكررة كتير؟</li>
        <li><strong>Column Quality:</strong> كام % من القيم صحيحة / فارغة / خطأ (Errors)؟</li>
        <li><strong>Column Profile:</strong> إحصائيات مفصلة (Count, Unique, Null, Min, Max).</li>
      </ul>
      <p>في الـ Home → Column Profile Pane → اختر العمود واستكشف المشاكل قبل التصليح.</p>
    </div>

    <div class="lesson-card">
      <h3>إزالة الأخطاء والفراغات</h3>
      <ul>
        <li><strong>Remove Errors:</strong> حذف الصفوف اللي فيها #Error (أرقام محفوظة غلط أو قيمة مفقودة). Right-click على رقم الصف ← Remove Errors.</li>
        <li><strong>Remove Empty Rows:</strong> حذف الصفوف الفارغة تماماً (شائع جداً في الـ Excel imports).</li>
        <li><strong>Handle Nulls Systematically:</strong> اختر: حذف الصفوف؟ أم ملء بقيمة default؟ أم ترك Null للـ DAX ليتعامل معه؟</li>
        <li><strong>Replace Errors:</strong> بدل ما تحذف، أستبدل الـ #Error بـ Null أو "Unknown" باستخدام Replace Values.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>تقسيم ودمج الأعمدة</h3>
      <ul>
        <li><strong>Split Column:</strong> فصل عمود بناءً على مسافة أو علامة (مثل فصل "محمد علي" إلى "محمد" و"علي").</li>
        <li><strong>Merge Columns:</strong> دمج عمودين بفاصل (مثل دمج Country + Region = "Egypt - Cairo").</li>
        <li><strong>Extract (Text before/after):</strong> استخرج جزء من النص (مثل استخراج المجال من Email: "ahmed@company.com" → "company.com").</li>
        <li><strong>Unpivot:</strong> تحويل جداول عرضية (Pivot) إلى جداول طولية (Normalized). مثال: من (Product | Jan | Feb | Mar) إلى (Product, Month, Value).</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>أنواع البيانات والتصحيح</h3>
      <p><strong>مشكلة شائعة:</strong> الأرقام محفوظة كـ Text (لاحظ السهم الأيسر بدل الأيمن في الرأس).</p>
      <ul>
        <li>اختر العمود ← Transform → Data Type ← Number/Decimal/Date (حسب نوع البيانات).</li>
        <li><strong>Trim & Clean:</strong> إزالة مسافات زائدة في البداية/النهاية (وتسبب مشاكل في المرشحات).</li>
        <li><strong>Change Case:</strong> تحويل النصوص إلى UPPERCASE أو lowercase (لتوحيد الأسماء).</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>إضافة أعمدة مشروطة (Conditional Column)</h3>
      <p>بدل DAX، اصنع عمود Logic مباشرة في Power Query:</p>
      <ul>
        <li>Add Column ← Conditional Column</li>
        <li>اكتب القاعدة: IF [Sales] > 10000 THEN "High" ELSE "Low"</li>
        <li>مثال عملي: تصنيف العملاء حسب الإنفاق (من داتا الـ Import).</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>تجميع وتجميع البيانات (Group By)</h3>
      <p>ملخص البيانات قبل الاستيراد (بدل DAX Measures):</p>
      <ul>
        <li>Transform ← Group By</li>
        <li>Group By: Product, Operation: SUM على Sales</li>
        <li>النتيجة: جدول واحد محجم (200 صفوف بدل 1 مليون).</li>
        <li><strong>الفائدة:</strong> تقليل حجم البيانات و Performance أفضل.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>دمج الجداول (Merge & Append)</h3>
      <p>ربط البيانات من مصادر مختلفة:</p>
      <ul>
        <li><strong>Merge Queries:</strong> دمج جدولين بالعرض بناءً على عمود مشترك (مثل Employee ID). مثل VLOOKUP لكن أقوى.</li>
        <li><strong>Append Queries:</strong> دمج جدولين بالطول (وضع داتا شهر 2 تحت داتا شهر 1).</li>
        <li><strong>نوع الـ Join:</strong> Inner (تقاطع فقط)، Left Outer (كل الصفوف من الأول + المطابقات من الثاني).</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Fill Down و Fill Up</h3>
      <p>ملء القيم الفارغة بالقيمة الأقرب:</p>
      <ul>
        <li><strong>Fill Down:</strong> ملء Null بالقيمة من الصف الأعلى (مثل ملء "Department" المفقودة بالـ Department السابق).</li>
        <li><strong>Fill Up:</strong> ملء Null بالقيمة من الصف الأسفل.</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>نصيحة ذهبية:</strong> كل خطوة تنظيف تسجل في Power Query M-code تلقائياً. لو مصدر البيانات محدّث، الخطوات تطبق تلقائياً. هذا السحر الحقيقي للـ Power Query!</p>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>تحذير:</strong> لا تحذف البيانات الخام من المصدر. احفظ Query خاصة بالداتا الخام (Staging)، ثم ابنِ Queries محسّنة تعتمد عليها. بهذا لو احتجت العودة للخام، تقدر.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>Introduction: Data Profiling</h3>
<p>Before cleaning data, <strong>understand your problems first</strong>. Power Query provides tools for quick analysis:</p>
<ul>
<li><strong>Column Distribution:</strong> How many unique values in the column? Are values heavily duplicated?</li>
<li><strong>Column Quality:</strong> What % of values are valid / empty / error?</li>
<li><strong>Column Profile:</strong> Detailed statistics (Count, Unique, Null, Min, Max).</li>
</ul>
<p>In Home → Column Profile Pane → select the column and explore issues before fixing.</p>
</div>

<div class="lesson-card">
<h3>Remove Errors and Empty Values</h3>
<ul>
<li><strong>Remove Errors:</strong> Delete rows with #Error (badly stored numbers or missing values). Right-click row number ← Remove Errors.</li>
<li><strong>Remove Empty Rows:</strong> Delete completely empty rows (very common in Excel imports).</li>
<li><strong>Handle Nulls Systematically:</strong> Choose: delete rows? Or fill with default value? Or leave Null for DAX to handle?</li>
<li><strong>Replace Errors:</strong> Instead of deleting, replace #Error with Null or "Unknown" using Replace Values.</li>
</ul>
</div>

<div class="lesson-card">
<h3>Split and Merge Columns</h3>
<ul>
<li><strong>Split Column:</strong> Separate a column based on space or delimiter (like splitting "Mohammad Ali" to "Mohammad" and "Ali").</li>
<li><strong>Merge Columns:</strong> Combine two columns with a separator (like merging Country + Region = "Egypt - Cairo").</li>
<li><strong>Extract (Text before/after):</strong> Extract part of text (like extracting domain from Email: "ahmed@company.com" → "company.com").</li>
<li><strong>Unpivot:</strong> Convert pivot tables to normalized tables. Example: from (Product | Jan | Feb | Mar) to (Product, Month, Value).</li>
</ul>
</div>

<div class="lesson-card">
<h3>Data Types and Fixes</h3>
<p><strong>Common Problem:</strong> Numbers stored as Text (notice left arrow instead of right in header).</p>
<ul>
<li>Select column ← Transform ← Data Type ← Number/Decimal/Date.</li>
<li><strong>Trim &amp; Clean:</strong> Remove leading/trailing spaces (cause filter issues).</li>
<li><strong>Change Case:</strong> Convert text to UPPERCASE or lowercase (for name consistency).</li>
</ul>
</div>

<div class="lesson-card">
<h3>Adding Conditional Columns</h3>
<p>Instead of DAX, create logic columns directly in Power Query:</p>
<ul>
<li>Add Column ← Conditional Column</li>
<li>Write rule: IF [Sales] > 10000 THEN "High" ELSE "Low"</li>
<li>Practical example: classify customers by spend (at import time).</li>
</ul>
</div>

<div class="lesson-card">
<h3>Group By and Data Aggregation</h3>
<p>Summarize data before import (instead of DAX Measures):</p>
<ul>
<li>Transform ← Group By</li>
<li>Group By: Product, Operation: SUM on Sales</li>
<li>Result: one aggregated table (200 rows instead of 1 million).</li>
<li><strong>Benefit:</strong> Smaller file size and better performance.</li>
</ul>
</div>

<div class="lesson-card">
<h3>Merge &amp; Append Queries</h3>
<p>Link data from different sources:</p>
<ul>
<li><strong>Merge Queries:</strong> Join two tables horizontally by common column (like Employee ID). Like VLOOKUP but stronger.</li>
<li><strong>Append Queries:</strong> Stack two tables vertically (Month 2 data below Month 1).</li>
<li><strong>Join Types:</strong> Inner (intersection only), Left Outer (all rows from first + matches from second).</li>
</ul>
</div>

<div class="lesson-card">
<h3>Fill Down and Fill Up</h3>
<p>Populate empty values with nearest value:</p>
<ul>
<li><strong>Fill Down:</strong> Fill Null with value from row above (like filling missing Department with previous Department).</li>
<li><strong>Fill Up:</strong> Fill Null with value from row below.</li>
</ul>
</div>

<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Golden Tip:</strong> Every cleaning step is automatically recorded in M-code. If the source updates, steps reapply automatically. That's the real magic of Power Query!</p>
</div>

<div class="warn-box">
<div class="icon">⚠️</div>
<p><strong>Warning:</strong> Don't delete raw data from source. Keep a Staging query for raw data, then build optimized queries on top. This way you can revert to raw if needed.</p>
</div>` }],
  },
  "powerquery": {
    eyebrow: "02 · 03 — Power Query Editor",
    title: "Power Query Editor",
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
    </div>

    <div class="lesson-card">
      <h3>🏆 Pro Tips من الخبرة الميدانية</h3>
      <ul>
        <li><strong>Change Type أول خطوة:</strong> كل استعلام جديد، غيّر نوع الأعمدة أول شيء. ده يوفر مشاكل كثيرة في DAX لاحقاً.</li>
        <li><strong>Unpivot مهم جداً:</strong> معظم الجداول التي تأتي من Excel عرضية. تحويلها لـ Long هو الخطوة الأولى للتحليل الصحيح.</li>
        <li><strong>Merge بدل VLOOKUP:</strong> Power Query Merge أقوى من VLOOKUP — يدعم كل أنواع Join ولا يحتاج تحديث يدوي.</li>
        <li><strong>استخدم Remove Errors و Replace Values:</strong> بدل الفلترة اليدوية، استخدم Power Query لتنظيف البيانات آلياً.</li>
        <li><strong>الـ Applied Steps = Security:</strong> كل خطوة تُسجل تلقائياً، فتقدر تعود لأي خطوة لو غلطت، أو تشوف الخطوات تعديت كام مرة.</li>
      </ul>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>What is Power Query?</h3>
<p>It is a built-in program Power BI Its primary function is <strong>ETL</strong>:</p>
<ul>
<li><strong>Extract:</strong> Pull data from any source.</li>
<li><strong>Transform:</strong> Edit and clean up (Clear Columns, Change Type, Merge, Unpivot).</li>
<li><strong>Load:</strong> Load clean data for the model.</li>
</ul>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Super feature:</strong> Every step is recorded <strong>Applied Steps</strong>. When the data speaks, the steps are executed automatically without any intervention.</p>
</div>
<div class="lesson-card">
<h3>The most important conversion operations</h3>
<ul>
<li><strong>Change Type:</strong> Changing the column type — most important of all, do it first thing.</li>
<li><strong>Remove Duplicates:</strong> Delete duplicate rows with one click.</li>
<li><strong>Split Column:</strong> Separate a column based on a delimiter (comma, space, number of characters).</li>
<li><strong>Replace Values:</strong> Replace a null or error value with a true value.</li>
<li><strong>Unpivot Columns:</strong> Convert a table from wide to long — the magic of Power Query.</li>
<li><strong>Add Custom Column:</strong> Add a calculated column with code M.</li>
</ul>
</div>
<div class="lesson-card">
<h3>Merge vs Append</h3>
<ul>
<li><strong>Merge Queries:</strong> Merge two tables crosswise with a common column — substitute VLOOKUP The strongest. supports Left/Right/Inner/Full Join.</li>
<li><strong>Append Queries:</strong> Stack two tables on top of each other — useful for merging monthly or yearly files.</li>
</ul>
</div>
<div class="lesson-card">
<h3>M Code example — Loading and cleaning Excel file</h3>
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
    NoNeg      = <span class="fn">Table.SelectRows</span>(NoNulls,   each [Amount] &gt; <span class="num">0</span>),
    TrimRegion = <span class="fn">Table.TransformColumns</span>(NoNeg, {{<span class="str">"Region"</span>, Text.Trim}})
<span class="kw">in</span>
    TrimRegion
      </div>
</div>
<div class="lesson-card">
<h3>Example Unpivot — from Wide to Long</h3>
<div class="code-block">
<span class="cm">-- Before Unpivot (cross table — error for parsing):</span>
Product | Jan  | Feb  | Mar
------- | ---- | ---- | ----
A       | 1000 | 1200 | 900

<span class="cm">-- After Unpivot (linear table - correct):</span>
Product | Month | Sales
------- | ----- | -----
A       | Jan   | 1000
A       | Feb   | 1200
A       | Mar   | 900

<span class="cm">-- Step: select columns Jan,Feb,Mar → Transform → Unpivot Columns</span>
</div>
</div>

<div class="lesson-card">
<h3>🏆 Pro Tips from field experience</h3>
<ul>
<li><strong>Change Type first step:</strong> Every new query, change column types first. This saves many problems in DAX later.</li>
<li><strong>Unpivot is very important:</strong> Most tables that come from Excel are wide. Converting them to Long is the first step to proper analysis.</li>
<li><strong>Merge instead of VLOOKUP:</strong> Power Query Merge is stronger than VLOOKUP — supports all types of Join and doesn't require manual updates.</li>
<li><strong>Use Remove Errors and Replace Values:</strong> Instead of manual filtering, use Power Query to clean data automatically.</li>
<li><strong>Applied Steps = Security:</strong> Every step is automatically logged, so you can go back to any step if you make a mistake, or see how many times the steps have been updated.</li>
</ul>
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
    </div>

    <div class="lesson-card">
      <h3>🏆 Pro Tips من الخبرة الميدانية</h3>
      <ul>
        <li><strong>Advanced Editor = الكود الحقيقي:</strong> لا تخاف من الكود. Advanced Editor يعرضك الكود الـ M الفعلي وراء كل خطوة. اعتاد على قراءة الكود.</li>
        <li><strong>Parameters = Flexibility:</strong> استخدم Parameters لأي قيمة تتغير (مسار ملف، تاريخ، تصفية). ده يجعل الـ Query قابلة لإعادة الاستخدام.</li>
        <li><strong>Custom Functions = Reusability:</strong> لما تكرر نفس الخطوات على ملفات مختلفة، حوّلها لـ Function. أسهل وأسرع.</li>
        <li><strong>Error Handling مهم:</strong> استخدم try-catch عند قراءة ملفات خارجية. لو الملف لا يوجد أو فاسد، بدل الـ Query تفشل، أرجع قيمة افتراضية.</li>
        <li><strong>الأداء: قلل الـ Table Scans:</strong> لما تعمل Folder Connector، افلتر الملفات أول شيء (بالاسم أو الحجم) قبل فتح البيانات.</li>
      </ul>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>M language syntax — how to read code</h3>
<p>Every query in Power Query is actually a block of M code <strong>let...in</strong>. Every line = step Applied Step:</p>
<div class="code-block">
<span class="kw">let</span>
<span class="cm">// Every step = A variable that takes the result of the previous step</span>
    Source      = Excel.Workbook(<span class="fn">File.Contents</span>(<span class="str">"C:\\data\\sales.xlsx"</span>)),
    Sheet1      = Source{[<span class="fn">Name</span>=<span class="str">"Sales"</span>]}[Data],
    Headers     = <span class="fn">Table.PromoteHeaders</span>(Sheet1),
    ChangedType = <span class="fn">Table.TransformColumnTypes</span>(Headers, {
                      {<span class="str">"Date"</span>,   type date},
                      {<span class="str">"Amount"</span>, type number}
                  }),
    Filtered    = <span class="fn">Table.SelectRows</span>(ChangedType, each [Amount] &gt; <span class="num">0</span>)
<span class="kw">in</span>
    Filtered  <span class="cm">//The last step is the final output</span>
</div>
</div>
<div class="lesson-card">
<h3>Parameters — dynamic queries</h3>
<p>Instead of writing a fixed file path in your code, use a parameter that changes easily:</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Manage Parameters → New Parameter</h4>
<p>Specify the name (for example: FilePath), type (Text), and default value (C:\\data\\).</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Use it in code</h4>
<div class="code-block" style="margin-top:6px;">
<span class="cm">// Replace the static path</span>
Source = Excel.Workbook(<span class="fn">File.Contents</span>(FilePath &amp; <span class="str">"sales.xlsx"</span>))
            </div>
</div>
</div>
</div>
</div>
<div class="lesson-card">
<h3>Custom Functions — Create custom functions</h3>
<p>If you have the same cleaning steps for many files, turn them into a function and call them once:</p>
<div class="code-block">
<span class="cm">// Define a Function to clean any sales table</span>
CleanSalesTable = (<span class="kw">tbl</span> as table) as table =&gt;
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

<span class="cm">// Call the function on a new table</span>
CleanedJan = CleanSalesTable(RawJanTable)
CleanedFeb = CleanSalesTable(RawFebTable)
      </div>
</div>
<div class="lesson-card">
<h3>Folder Connector — Automatic file merging</h3>
<p>One of the most powerful M-Code scenarios is: importing an entire folder of monthly Excel files and merging them automatically:</p>
<div class="code-block">
<span class="kw">let</span>
<span class="cm">// 1. Read the entire volume</span>
    FolderPath = <span class="fn">Folder.Files</span>(<span class="str">"C:\\data\\monthly_sales\\"</span>),

    <span class="cm">// 2. Filter Excel files only</span>
    OnlyXLSX   = <span class="fn">Table.SelectRows</span>(FolderPath, 
                     each <span class="fn">Text.EndsWith</span>([Name], <span class="str">".xlsx"</span>)),

    <span class="cm">// 3. For each file, extract the table (Custom Column)</span>
    AddData    = <span class="fn">Table.AddColumn</span>(OnlyXLSX, <span class="str">"Data"</span>, each
                     <span class="fn">Excel.Workbook</span>([Content]){<span class="num">0</span>}[Data]),

    <span class="cm">// 4. Merge all the tables on top of each other</span>
    Combined   = <span class="fn">Table.Combine</span>(AddData[Data])
<span class="kw">in</span>
    Combined
      </div>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Advanced Editor:</strong> In Power Query → View → Advanced Editor. Here you can view and edit the complete M code for the query. Ctrl+Z to undo works here. Get into the habit of reading it after each step you make by pressing the buttons.</p>
</div>

<div class="lesson-card">
<h3>🏆 Pro Tips from field experience</h3>
<ul>
<li><strong>Advanced Editor = Real code:</strong> Don't be afraid of code. Advanced Editor shows you the actual M code behind each step. Get used to reading the code.</li>
<li><strong>Parameters = Flexibility:</strong> Use Parameters for any value that changes (file path, date, filter). This makes the Query reusable.</li>
<li><strong>Custom Functions = Reusability:</strong> When you repeat the same steps on different files, convert them to a Function. Easier and faster.</li>
<li><strong>Error Handling is important:</strong> Use try-catch when reading external files. If the file doesn't exist or is corrupted, instead of the Query failing, return a default value.</li>
<li><strong>Performance: Reduce Table Scans:</strong> When you do Folder Connector, filter files first (by name or size) before opening the data.</li>
</ul>
</div>` }],
  },
  "relationships": {
    eyebrow: "03 · 01 — Relationship Model",
    title: "Relationships",
    lede: "كيف نربط الجداول ببعضها عبر Relationships لتعمل ككيان واحد متصل.",
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
      <h3>Cross Filter Direction</h3>
      <p>السهم الموجود على خط العلاقة يحدد اتجاه انتقال الـ filters:</p>
      <ul>
        <li><strong>Single:</strong> الـ filter ينتقل من جداول الـ Dimension إلى جدول الـ Fact. وهذا هو الوضع الافتراضي والأكثر أماناً.</li>
        <li><strong>Both:</strong> الـ filter ينتقل في الاتجاهين. استخدمه بحذر شديد لأنه يبطئ النموذج.</li>
      </ul>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p>تأكد دائماً أن الأعمدة التي تبني عليها العلاقة (مثل Product ID) لها نفس نوع البيانات (Data Type) في الجدولين.</p>
    </div>

    <div class="warn-box">
      <div class="icon">🚨</div>
      <p><strong>خطر Both Directional Filter:</strong> تغيير العلاقة إلى "Both" يبدو مغرياً لكنه يسبب 3 مشاكل خطيرة: (1) يبطئ النموذج بشكل ملحوظ لأن المحرك يحسب مسارات Filter إضافية. (2) يؤدي لنتائج خاطئة عند وجود Many-to-Many ضمنية. (3) يجعل التشخيص صعباً جداً. الحل الصحيح: ابقَ على Single Direction واستخدم <strong>CROSSFILTER()</strong> في DAX فقط عند الحاجة.</p>
    </div>

    <div class="lesson-card">
      <h3>🏆 Pro Tips من الخبرة الميدانية</h3>
      <ul>
        <li><strong>1 to Many = الوضع الصحيح:</strong> لو شُفت Many to Many، فكّر في إضافة Bridge Table بدل قبول العلاقة الخطيرة.</li>
        <li><strong>تحقق من Data Types:</strong> أكثر مشاكل الـ Relationships تأتي من أن عمود ID نوعه نص في جدول ورقم في جدول آخر. Power BI لن يربط الاثنين.</li>
        <li><strong>Single Direction = الأصل الآمن:</strong> ابقَ على Single Direction في كل الأحوال. لو محتاج filtering عكسي، استخدم CROSSFILTER في DAX.</li>
        <li><strong>اختبر الـ Cross-Filters:</strong> الفلترة ثنائية الاتجاه تؤثر على كل الـ visuals. لو فعّلتها، اختبر كل الـ dashboard لتتأكد من النتائج.</li>
        <li><strong>المشكلة الخفية: Ambiguous Relationships:</strong> لو هناك أكثر من علاقة ممكنة بين جدولين، Power BI قد تختار الخطأ تلقائياً وتعطيك نتائج خاطئة.</li>
      </ul>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>Types of relationships (Cardinality)</h3>
<ul>
<li><strong>1 to Many (1:*):</strong> It is the ideal and always desired relationship! (One customer in the Customers table has many transactions in the Sales table.)</li>
<li><strong>1 to 1 (1:1):</strong> Rare, and usually means that the two tables should have been merged together.</li>
<li><strong>Many to Many (*:*):</strong> It is very dangerous and should be avoided, because it causes incorrect results in calculations.</li>
</ul>
</div>
<div class="lesson-card">
<h3>Cross Filter Direction</h3>
<p>The arrow on the relationship line determines the direction of travel of the filters:</p>
<ul>
<li><strong>Single:</strong> The filter moves from the Dimension tables to the Fact table. (This is the default and most secure).</li>
<li><strong>Both:</strong> The filter moves in both directions. Use it with extreme caution as it slows down the form.</li>
</ul>
</div>
<div class="warn-box">
<div class="icon">⚠️</div>
<p>Always make sure that the columns on which you build the relationship (like Product ID) It has the same data type (Data Type) In the two tables.</p>
</div>
<div class="warn-box">
<div class="icon">🚨</div>
<p><strong>The danger of both directional filter:</strong> Changing the relationship to "Both" sounds tempting but it causes 3 serious problems: (1) It slows down the model significantly because the engine calculates additional filter paths. (2) It leads to incorrect results when there is a Many-to-Many implicit. (3) It makes diagnosis very difficult. Correct solution: Stay with Single Direction and use <strong>CROSSFILTER()</strong> in DAX Only when needed.</p>
</div>

<div class="lesson-card">
<h3>🏆 Pro Tips from field experience</h3>
<ul>
<li><strong>1 to Many = the right situation:</strong> If you see Many to Many, think about adding a Bridge Table instead of accepting the dangerous relationship.</li>
<li><strong>Check Data Types:</strong> Most Relationships problems come from an ID column being text in one table and a number in another. Power BI won't connect the two.</li>
<li><strong>Single Direction = the safe origin:</strong> Stay on Single Direction in all cases. If you need reverse filtering, use CROSSFILTER in DAX.</li>
<li><strong>Test Cross-Filters:</strong> Two-way filtering affects all visuals. If you enable it, test the entire dashboard to make sure the results are correct.</li>
<li><strong>The hidden problem: Ambiguous Relationships:</strong> If there are multiple possible relationships between two tables, Power BI may automatically choose the wrong one and give you incorrect results.</li>
</ul>
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
    en_blocks: [{ kind: "html", html: `<div class="warn-box">
<div class="icon">🚨</div>
<p><strong>Rule you need to know:</strong> Power BI It does not accept functions Time Intelligence (TOTALYTD, SAMEPERIODLASTYEAR...) Unless you have a continuous calendar schedule (No gaps in dates) And teacher K Date Table.</p>
</div>
<div class="lesson-card">
<h3>method 1 — CALENDARAUTO() (The fastest way)</h3>
<p>It runs an automatic schedule from the smallest date to the largest date in the entire model. Use it if your data is complete:</p>
<div class="code-block">
<span class="cm">-- Simple automatic calendar schedule</span>
Date_Table = 
<span class="fn">ADDCOLUMNS</span>(
    <span class="fn">CALENDARAUTO</span>(),
    <span class="str">"Year"</span>,        <span class="fn">YEAR</span>([Date]),
    <span class="str">"Month Number"</span>, <span class="fn">MONTH</span>([Date]),
    <span class="str">"Month Name"</span>,   <span class="fn">FORMAT</span>([Date], <span class="str">"MMMM"</span>),
    <span class="str">"Quarter"</span>,      <span class="str">"Q"</span> &amp; <span class="fn">FORMAT</span>([Date], <span class="str">"Q"</span>),
    <span class="str">"Week Number"</span>,  <span class="fn">WEEKNUM</span>([Date]),
    <span class="str">"Day Name"</span>,     <span class="fn">FORMAT</span>([Date], <span class="str">"dddd"</span>),
    <span class="str">"Is Weekend"</span>,   <span class="fn">IF</span>(<span class="fn">WEEKDAY</span>([Date],2) &gt;= <span class="num">6</span>, <span class="kw">TRUE</span>(), <span class="kw">FALSE</span>())
)
      </div>
</div>
<div class="lesson-card">
<h3>method 2 — CALENDAR() (Complete control)</h3>
<p>You specify the exact date range. Useful if you have future or historical data outside the scope of the data:</p>
<div class="code-block">
<span class="cm">-- Calendar table from 2020 to the end of the current year</span>
Date_Table = 
<span class="fn">ADDCOLUMNS</span>(
    <span class="fn">CALENDAR</span>(
        <span class="fn">DATE</span>(<span class="num">2020</span>, <span class="num">1</span>, <span class="num">1</span>),
        <span class="fn">DATE</span>(<span class="fn">YEAR</span>(<span class="fn">TODAY</span>()), <span class="num">12</span>, <span class="num">31</span>)
    ),
    <span class="str">"Year"</span>,           <span class="fn">YEAR</span>([Date]),
    <span class="str">"Month Num"</span>,      <span class="fn">MONTH</span>([Date]),
    <span class="str">"Month Name AR"</span>,  <span class="fn">SWITCH</span>(<span class="fn">MONTH</span>([Date]),
                         <span class="num">1</span>,<span class="str">"January"</span>, <span class="num">2</span>,<span class="str">"February"</span>, <span class="num">3</span>,<span class="str">"March"</span>, <span class="num">4</span>,<span class="str">"April"</span>,
                         <span class="num">5</span>,<span class="str">"May"</span>, <span class="num">6</span>,<span class="str">"June"</span>, <span class="num">7</span>,<span class="str">"July"</span>, <span class="num">8</span>,<span class="str">"August"</span>,
                         <span class="num">9</span>,<span class="str">"September"</span>, <span class="num">10</span>,<span class="str">"October"</span>, <span class="num">11</span>,<span class="str">"November"</span>, <span class="str">"December"</span>),
    <span class="str">"Quarter"</span>,        <span class="str">"Q"</span> &amp; <span class="fn">FORMAT</span>([Date], <span class="str">"Q"</span>),
    <span class="str">"Year-Month"</span>,     <span class="fn">FORMAT</span>([Date], <span class="str">"YYYY-MM"</span>),
    <span class="str">"Sort Month"</span>,     <span class="fn">YEAR</span>([Date]) * <span class="num">100</span> + <span class="fn">MONTH</span>([Date])
)
      </div>
</div>
<div class="lesson-card">
<h3>Steps to activate the calendar table (Mark as Date Table)</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Go to Model View</h4>
<p>Open the Relationships screen and choose the Date_Table table.</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Table Tools → Mark as Date Table</h4>
<p>From the top menu, choose Column Date And he pressed Mark as Date Table. Power BI It will verify that dates are continuous and unique.</p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Link the table to the Fact Table</h4>
<p>Create a 1:Many relationship from Date_Table[Date] to Fact_Sales[OrderDate] with Single filtering.</p>
</div>
</div>
</div>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Sort Month Name:</strong> The Month Name column is arranged alphabetically (April before January!). To fix this, in the Data View choose the Month Name column, then Column Tools → Sort by Column → choose Month Num.</p>
</div>` }],
  },
  "hierarchies": {
    eyebrow: "03 · 03 — Hierarchies",
    title: "Hierarchies",
    lede: "الـ Hierarchies تتيح للمستخدم الانتقال من مستوى تحليلي لآخر بضغطة واحدة — من السنة إلى الربع إلى الشهر إلى الأسبوع إلى اليوم، أو من الدولة إلى المنطقة إلى المدينة.",
    en_eyebrow: "03 · 03 — Hierarchies",
    en_lede: "Hierarchies allow users to move from one analytical level to another with one click — from year to quarter to month to week to day, or from country to city to region.",
    sectionId: "hierarchies",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>ما هي الـ Hierarchy ولماذا تهم؟</h3>
      <p>هي ترتيب لمستويات بيانات مترابطة — وتأتي مع ميزة <strong>Drill Down</strong> التي تجعل المستخدم ينزل من مستوى عام إلى مستوى تفصيلي بنقرة واحدة.</p>
      <ul>
        <li>Time Hierarchy: السنة ← الربع ← الشهر ← اليوم</li>
        <li>Geography Hierarchy: الدولة ← المنطقة ← المدينة ← الفرع</li>
        <li>Product Hierarchy: الفئة ← الفئة الفرعية ← المنتج</li>
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
      <p><strong>نصيحة:</strong> جدول التقويم (Date Table) يجب أن يحتوي على أعمدة Year, QuarterNum, MonthNum, MonthName, Day لبناء Time Hierarchy احترافية — الأرقام للترتيب والأسماء للعرض.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>What is Hierarchy and why does it matter?</h3>
<p>It is a hierarchical arrangement of interconnected data levels — which comes with a feature <strong>Drill Down</strong> Which allows the user to descend from a general level to a detailed level with a click.</p>
<ul>
<li>Time hierarchy: year ← quarter ← month ← day</li>
<li>Geography hierarchy: country → region → city → branch</li>
<li>Product hierarchy: Category → Subcategory → Product</li>
</ul>
</div>
<div class="lesson-card">
<h3>construction Hierarchy in Power BI Desktop</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Choose the highest level column</h4>
<p>In the Data Pane, right-click on the top column (eg <strong>Year</strong>) and chose <strong>Create Hierarchy</strong>.</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Add the following levels</h4>
<p>Drag the remaining columns (Quarter, Month, Day) and drop them onto the Hierarchy, or right-click on them and choose <strong>Add to Hierarchy</strong>.</p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Ranking of levels</h4>
<p>Drag levels to arrange the pyramid from top (most general) to bottom (most detailed).</p>
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<h4>Use in report</h4>
<p>Drag the Hierarchy to the Visual — Drill Down/Up arrows will appear automatically.</p>
</div>
</div>
</div>
</div>
<div class="lesson-card">
<h3>Drill buttons in Visuals</h3>
<ul>
<li><strong>▼ (Drill Down):</strong> Descends one level for all visible values.</li>
<li><strong>⬇ (Go to next level):</strong> The next level displays all values ​​at once.</li>
<li><strong>▲ (Drill Up):</strong> Returns to the top level.</li>
<li><strong>Double click on a value:</strong> Drill Down for this specific value.</li>
</ul>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>advice:</strong> Your Date Table should have Year, QuarterNum, MonthNum, MonthName, Day columns to build a professional time hierarchy — numbers to arrange and names to display.</p>
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
    </div>

    <div class="lesson-card">
      <h3>🏆 Pro Tips من الخبرة الميدانية</h3>
      <ul>
        <li><strong>Context هو كل شيء:</strong> معظم أخطاء DAX تأتي من عدم فهم الفرق بين Row Context و Filter Context. جرّب Measure على visualizations مختلفة لتشعر بالفرق.</li>
        <li><strong>الـ Scoping:</strong> عندما تكتب Calculated Column، أنت في Row Context — كل صف يحسب لنفسه. عندما تكتب Measure، أنت تحسب بناءً على الفلاتر الإجمالية.</li>
        <li><strong>اختبر الـ Edge Cases:</strong> جرّب Measure عند الفلاتر الفارغة، عند وجود بيانات NULL، وعند المقارنات بين جداول مختلفة.</li>
        <li><strong>التسمية واضحة:</strong> استخدم أسماء Measures توضح نوعها: <code>Total Sales</code> بدل <code>Sales</code>، <code>% Growth YoY</code> بدل <code>Growth</code>.</li>
        <li><strong>الأداء:</strong> Calculated Columns تُحسب عند التحميل وتأخذ مساحة RAM. Measures تُحسب وقت الطلب. اختر الصيغة المناسبة حسب الحجم والتعقيد.</li>
      </ul>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>The difference between Calculated Column and Measure</h3>
<p>One of the most important lessons in DAX.</p>
</div>
<table class="compare-table">
<tr>
<th>Calculated Column</th>
<th>Measure</th>
</tr>
<tr>
<td>Adds an actual column in the table and takes up RAM space.</td>
<td>A virtual formula that takes no storage space; it is evaluated only when you place it in a visual.</td>
</tr>
<tr>
<td>Calculates row by row (Row Context).</td>
<td>Calculated based on overall filters (Filter Context).</td>
</tr>
<tr>
<td>We use it to make categories (high/low price).</td>
<td>We use it for numerical calculations (total, average, ratio). <span class="yes">✔ Better</span></td>
</tr>
</table>
<div class="lesson-card">
<h3>Examples of basic functions</h3>
<div class="code-block">
<span class="cm">-- Calculate total sales (Measure)</span>
Total Sales = <span class="fn">SUM</span>(Sales[Amount])

<span class="cm">-- Count total transactions</span>
Total Orders = <span class="fn">COUNTROWS</span>(Sales)

<span class="cm">-- Count unique products sold</span>
Unique Products = <span class="fn">DISTINCTCOUNT</span>(Sales[ProductID])
      </div>
</div>

<div class="lesson-card">
<h3>🏆 Pro Tips from field experience</h3>
<ul>
<li><strong>Context is everything:</strong> Most DAX errors come from misunderstanding the difference between Row Context and Filter Context. Try the same measure on different visuals to feel the difference.</li>
<li><strong>Scoping:</strong> When you write a Calculated Column, you're in Row Context — each row calculates for itself. When you write a Measure, you're calculating based on overall filters.</li>
<li><strong>Test edge cases:</strong> Try your measures with empty filters, NULL data, and cross-table comparisons.</li>
<li><strong>Clear naming:</strong> Use measure names that tell you what they do: <code>Total Sales</code> instead of <code>Sales</code>, <code>% Growth YoY</code> instead of <code>Growth</code>.</li>
<li><strong>Performance:</strong> Calculated Columns are computed at load time and consume RAM. Measures are computed on demand. Choose the right approach based on data size and complexity.</li>
</ul>
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
    </div>

    <div class="lesson-card">
      <h3>🏆 Pro Tips من الخبرة الميدانية</h3>
      <ul>
        <li><strong>SWITCH أفضل من IF المتداخل:</strong> كل ما تحتاج أكثر من 2 شروط، استخدم SWITCH — أسهل قراءة وأسرع أداء.</li>
        <li><strong>استخدم IFERROR دائماً:</strong> أي Measure يمكن أن يرجع خطأ (قسمة على صفر، قيم لا توجد، إلخ) يجب تحميه بـ IFERROR أو DIVIDE مع default value.</li>
        <li><strong>الـ Short Circuiting:</strong> إذا كان الشرط الأول FALSE، الـ IF/SWITCH لن يُقيّم الأجزاء الأخرى. استخدم هذا لتجنب الأخطاء المكلفة.</li>
        <li><strong>استخدم TRUE() مع SWITCH:</strong> عند الحاجة لشروط معقدة (مثل >= و <)، SWITCH(TRUE()) أفضل بكثير من IF المتداخل.</li>
        <li><strong>اختبر الـ NULL Values:</strong> استخدم ISBLANK قبل المقارنات إذا كانت القيم قد تكون فارغة.</li>
      </ul>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>IF — Simple condition</h3>
<p>Structure: <code>IF( &lt;Condition&gt;, &lt;TrueResult&gt;, [FalseResult] )</code></p>
<div class="code-block">
<span class="cm">-- Performance rating: above or below target?</span>
Performance Flag = 
<span class="fn">IF</span>(
    [Total Sales] &gt;= [Sales Target],
    <span class="str">"✅ On Track"</span>,
    <span class="str">"❌ Below Target"</span>
)

<span class="cm">-- Use IF To avoid division by zero (instead DIVIDE)</span>
Margin % = 
<span class="fn">IF</span>(
    [Total Revenue] = <span class="num">0</span>,
    <span class="fn">BLANK</span>(),
    <span class="fn">DIVIDE</span>([Total Profit], [Total Revenue])
)

<span class="cm">-- IF Overlapping (Nested) — Read the note below!</span>
Score Label = 
<span class="fn">IF</span>([Score] &gt;= <span class="num">90</span>, <span class="str">"Excellent"</span>,
    <span class="fn">IF</span>([Score] &gt;= <span class="num">70</span>, <span class="str">"Good"</span>,
        <span class="fn">IF</span>([Score] &gt;= <span class="num">50</span>, <span class="str">"Average"</span>, <span class="str">"Poor"</span>)
    )
)
      </div>
</div>
<div class="warn-box">
<div class="icon">⚠️</div>
<p><strong>IF Overlapping = problem:</strong> The higher the levels, the more difficult it is to read and edit. More than two levels → Go to SWITCH(TRUE()) immediately.</p>
</div>
<div class="lesson-card">
<h3>SWITCH — substitute IF Professional</h3>
<p>Two types: SWITCH For fixed values, andSWITCH(TRUE()) For compound conditions.</p>
<div class="code-block">
<span class="cm">-- Type 1: SWITCH For fixed values</span>
Month Name AR = 
<span class="fn">SWITCH</span>(
    <span class="fn">MONTH</span>('Calendar'[Date]),
    <span class="num">1</span>,  <span class="str">"January"</span>,
    <span class="num">2</span>,  <span class="str">"February"</span>,
    <span class="num">3</span>,  <span class="str">"March"</span>,
    <span class="num">4</span>,  <span class="str">"April"</span>,
    <span class="num">5</span>,  <span class="str">"May"</span>,
    <span class="num">6</span>,  <span class="str">"June"</span>,
    <span class="num">7</span>,  <span class="str">"July"</span>,
    <span class="num">8</span>,  <span class="str">"August"</span>,
    <span class="num">9</span>,  <span class="str">"September"</span>,
    <span class="num">10</span>, <span class="str">"October"</span>,
    <span class="num">11</span>, <span class="str">"November"</span>,
    <span class="str">"December"</span> <span class="cm">--Default value</span>
)

<span class="cm">-- Type 2: SWITCH(TRUE()) For compound conditions</span>
<span class="cm">-- Performance of Egyptian branches based on sales</span>
Branch Performance = 
<span class="fn">SWITCH</span>(
    <span class="kw">TRUE</span>(),
    [Total Sales] &gt;= <span class="num">500000</span>, <span class="str">"🏆 Elite Branch"</span>,
    [Total Sales] &gt;= <span class="num">200000</span>, <span class="str">"⭐ High Performer"</span>,
    [Total Sales] &gt;= <span class="num">100000</span>, <span class="str">"📈 Growing"</span>,
    [Total Sales] &gt;= <span class="num">50000</span>,  <span class="str">"⚠️ Needs Support"</span>,
    <span class="str">"🔴 Critical"</span>
)
      </div>
</div>
<div class="lesson-card">
<h3>AND / OR / NOT — Compound terms</h3>
<div class="code-block">
<span class="cm">-- AND: Both conditions are true</span>
High Value Active = 
<span class="fn">IF</span>(
    <span class="fn">AND</span>([Total Sales] &gt; <span class="num">100000</span>, [Customer Status] = <span class="str">"Active"</span>),
    <span class="str">"Premium"</span>, <span class="str">"Standard"</span>
)

<span class="cm">-- or in the abbreviated form (&amp;&amp;)</span>
High Value Active = 
<span class="fn">IF</span>(
    [Total Sales] &gt; <span class="num">100000</span> &amp;&amp; [Customer Status] = <span class="str">"Active"</span>,
    <span class="str">"Premium"</span>, <span class="str">"Standard"</span>
)

<span class="cm">-- OR: One of the two conditions is true (||)</span>
Flagged = 
<span class="fn">IF</span>(
    [Returns] &gt; <span class="num">5</span> || [Complaints] &gt; <span class="num">3</span>,
    <span class="str">"Review Needed"</span>, <span class="str">"OK"</span>
)
      </div>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>IFERROR and ISBLANK:</strong> If the Measure may return an error (such as division), use <code>IFERROR([Measure], 0)</code>. If he can come back BLANK use <code>IF(ISBLANK([Measure]), "nothing", [Measure])</code>.</p>
</div>

<div class="lesson-card">
<h3>🏆 Pro Tips from field experience</h3>
<ul>
<li><strong>SWITCH beats nested IF:</strong> Whenever you need more than 2 conditions, use SWITCH — much easier to read and faster performance.</li>
<li><strong>Always use IFERROR:</strong> Any measure that could error (division by zero, missing values, etc.) should be protected with IFERROR or DIVIDE with a default.</li>
<li><strong>Short-circuiting:</strong> If the first condition is FALSE, the IF/SWITCH won't evaluate the rest. Use this to avoid expensive errors.</li>
<li><strong>Use TRUE() with SWITCH:</strong> When you need complex conditions (like >= and <), SWITCH(TRUE()) is much better than nested IF.</li>
<li><strong>Test for NULL values:</strong> Use ISBLANK before comparisons if values could be empty.</li>
</ul>
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
    </div>

    <div class="lesson-card">
      <h3>🏆 Pro Tips من الخبرة الميدانية</h3>
      <ul>
        <li><strong>CALCULATE = السلاح السري:</strong> معظم المشاكل المعقدة في DAX يمكن حلها بـ CALCULATE + الفلاتر الصحيحة. اتعلم كيفية استخدامها بشكل صحيح أولاً.</li>
        <li><strong>استخدم REMOVEFILTERS بدل ALL:</strong> كلاهما يمسح الفلاتر، لكن REMOVEFILTERS أوضح في الكود والنية. ALL قديمة وتوصل لالتباس.</li>
        <li><strong>ALLEXCEPT توفر الكود:</strong> بدل تكتب ALL وبعدين تضيف الفلتر، استخدم ALLEXCEPT مباشرة — أقصر وأوضح.</li>
        <li><strong>اختبر التفاعلات:</strong> الفلاتر من Slicers والـ Cross-filters تتفاعل مع CALCULATE. جرّب كل الـ edge cases عند بناء Measure معقدة.</li>
        <li><strong>Context Transition = فرصة وخطر:</strong> مشكلة في Calculated Column؟ استخدم CALCULATE مع Context Transition بحذر — يمكن أن تكسر الأداء إذا كانت البيانات ضخمة.</li>
      </ul>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>How does CALCULATE work? — Context Transition</h3>
<p>CALCULATE does two things at the same time: it evaluates the expression first, then adjusts the filter context based on the filters you specify. The order matters:</p>
<div class="code-block">
<span class="cm">-- Basic syntax</span>
CALCULATE( &lt;Expression&gt;, [Filter1], [Filter2], ... )

<span class="cm">-- Example: Northern region sales only - regardless of the Slicer filter</span>
North Sales = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    Dim_Region[Region] = <span class="str">"North"</span>
)

<span class="cm">-- Example: Sales for the year 2024 only</span>
Sales 2024 = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    Dim_Date[Year] = <span class="num">2024</span>
)
      </div>
</div>
<div class="lesson-card">
<h3>ALL vs REMOVEFILTERS vs ALLEXCEPT</h3>
<p>All three clear filters, but each one does it in a different way:</p>
<div class="code-block">
<span class="cm">-- ALL: Clears all filters for a table or column</span>
% of Total = 
<span class="fn">DIVIDE</span>(
    [Total Sales],
    <span class="fn">CALCULATE</span>([Total Sales], <span class="fn">ALL</span>(Fact_Sales)),
    <span class="num">0</span>
)

<span class="cm">-- REMOVEFILTERS: same ALL But make it clearer in intention (best practice)</span>
% of Total = 
<span class="fn">DIVIDE</span>(
    [Total Sales],
    <span class="fn">CALCULATE</span>([Total Sales], <span class="fn">REMOVEFILTERS</span>(Dim_Product)),
    <span class="num">0</span>
)

<span class="cm">-- ALLEXCEPT: Clears all filters except certain columns</span>
<span class="cm">-- Here: The percentage of each product in its total category (keeping the category filter)</span>
% of Category = 
<span class="fn">DIVIDE</span>(
    [Total Sales],
    <span class="fn">CALCULATE</span>([Total Sales], <span class="fn">ALLEXCEPT</span>(Dim_Product, Dim_Product[Category])),
    <span class="num">0</span>
)
      </div>
</div>
<div class="lesson-card">
<h3>KEEPFILTERS — Add a filter without replacing it</h3>
<p>usually CALCULATE It replaces the existing filter. KEEPFILTERS It adds the new filter to the existing one (junction):</p>
<div class="code-block">
<span class="cm">-- without KEEPFILTERS: Shows North sales even if the Slicer On the south</span>
North Only = <span class="fn">CALCULATE</span>([Total Sales], Dim_Region[Region] = <span class="str">"North"</span>)

<span class="cm">-- with KEEPFILTERS: If the Slicer On the south → Result BLANK</span>
North Filtered = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">KEEPFILTERS</span>(Dim_Region[Region] = <span class="str">"North"</span>)
)
      </div>
</div>
<div class="lesson-card">
<h3>Context Transition in Calculated Columns</h3>
<p>When you use it CALCULATE Inside Calculated Column, the Row Context It automatically converts to Filter Context. This is very important and why confusion:</p>
<div class="code-block">
<span class="cm">-- This column: For each row, calculates the percentage of sales out of the total for the same category</span>
<span class="cm">-- CALCULATE Here you work Context Transition: Row → Filter</span>
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
<p><strong>Context Transition — as simple as:</strong> in DAX There are two types of context: <strong>Row Context</strong> (You are in a particular row — you know the value of each column in that row) and<strong>Filter Context</strong> (A set of filters that determine which rows are counted.) When you put <code>CALCULATE</code>, it converts the Row Context to a Filter Context automatically — this allows Measures to work within Calculated Columns. Without understanding this conversion, you will get numbers you don't expect.</p>
</div>
<div class="warn-box">
<div class="icon">⚠️</div>
<p><strong>Execution order CALCULATE:</strong> External filters are applied first ← Then filters CALCULATE Modify it ← Then it is calculated Expression. Understanding this arrangement solves 90% Of problems DAX.</p>
</div>

<div class="lesson-card">
<h3>🏆 Pro Tips from field experience</h3>
<ul>
<li><strong>CALCULATE = Secret weapon:</strong> Most complex DAX problems can be solved with CALCULATE + the right filters. Learn how to use it correctly first.</li>
<li><strong>Use REMOVEFILTERS instead of ALL:</strong> Both clear filters, but REMOVEFILTERS is clearer in the code and intent. ALL is old and causes confusion.</li>
<li><strong>ALLEXCEPT saves code:</strong> Instead of writing ALL and then adding a filter, use ALLEXCEPT directly — shorter and clearer.</li>
<li><strong>Test interactions:</strong> Filters from Slicers and Cross-filters interact with CALCULATE. Try all edge cases when building complex Measures.</li>
<li><strong>Context Transition = Opportunity and danger:</strong> Problem in Calculated Column? Use CALCULATE with Context Transition carefully — it can break performance if the data is large.</li>
</ul>
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
    </div>

    <div class="lesson-card">
      <h3>🏆 Pro Tips من الخبرة الميدانية</h3>
      <ul>
        <li><strong>RELATED في Calculated Columns فقط:</strong> في Measures استخدم RELATEDTABLE. RELATED لا تعمل في Measures وستحصل على خطأ.</li>
        <li><strong>USERELATIONSHIP أفضل من تغيير الموديل:</strong> لو محتاج تفعيل علاقة غير نشطة، استخدم USERELATIONSHIP في الـ Measure بدل تغيير العلاقة لـ Both في الموديل (ده بيبطّء الأداء).</li>
        <li><strong>CROSSFILTER فقط عند الحاجة:</strong> استخدمها فقط في الـ Measures المحددة، مش في كل الموديل. فعّل الفلترة الثنائية بحذر.</li>
        <li><strong>اختبر التفاعلات بين العلاقات:</strong> لو الموديل فيه علاقات متشابكة، جرّب كل الـ Slicers والـ Cross-filters عشان متاكد من النتائج.</li>
        <li><strong>توثيق العلاقات المعقدة:</strong> لو استخدمت USERELATIONSHIP أو CROSSFILTER، اترك ملاحظة في الـ Measure توضح ليه استخدمت ده.</li>
      </ul>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>RELATED — Fetch a value from a linked table</h3>
<p>Only works in <strong>Calculated Columns</strong>. Brings a value from the Dimension table to the Fact table via an existing relationship:</p>
<div class="code-block">
<span class="cm">-- In Fact_Sales: Add column with category name from Dim_Product</span>
Product Category = <span class="fn">RELATED</span>(Dim_Product[Category])

<span class="cm">-- Now you can use it in Calculated Column again</span>
Is Electronics = 
<span class="fn">IF</span>(
    <span class="fn">RELATED</span>(Dim_Product[Category]) = <span class="str">"Electronics"</span>,
    <span class="str">"Yes"</span>, <span class="str">"No"</span>
)

<span class="cm">-- in Measures: use RELATEDTABLE instead RELATED</span>
<span class="cm">-- (RELATED Don't work in Measures)</span>
Products Sold = <span class="fn">COUNTROWS</span>(<span class="fn">RELATEDTABLE</span>(Dim_Product))
      </div>
</div>
<div class="lesson-card">
<h3>USERELATIONSHIP — Activate an inactive relationship</h3>
<p>Common problem: Table of Fact There are two dates (OrderDate and DeliveryDate) But the model allows only one active relationship with Date Table. the solution: Make both connections and do what you need with USERELATIONSHIP:</p>
<div class="code-block">
<span class="cm">-- Setting up the model:</span>
<span class="cm">-- Active relationship: Date[Date] ← Fact[OrderDate]</span>
<span class="cm">-- Passive relationship: Date[Date] ← Fact[DeliveryDate]</span>
<span class="cm">-- Measure works on order date (default)</span>
Sales by Order Date = [Total Sales]

<span class="cm">-- Measure works on delivery date (activates dormant relationship)</span>
Sales by Delivery Date = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">USERELATIONSHIP</span>(Fact_Sales[DeliveryDate], 'Date'[Date])
)

<span class="cm">-- Real-life example: measuring revenues collected (Collected) versus required (Invoiced)</span>
Revenue Collected = 
<span class="fn">CALCULATE</span>(
    [Total Revenue],
    <span class="fn">USERELATIONSHIP</span>(Fact_Invoices[PaymentDate], 'Date'[Date])
)
      </div>
</div>
<div class="lesson-card">
<h3>CROSSFILTER — Change the filtering direction programmatically</h3>
<p>Instead of changing the relationship to Both In the model (And the slowness it causes), use CROSSFILTER inside Measure Only when needed:</p>
<div class="code-block">
<span class="cm">-- Problem: Number of customers who have not yet purchased</span>
<span class="cm">-- In the regular model (Single direction) Dim_Customer is not filtered by Fact_Sales</span>
<span class="cm">-- The solution is: CROSSFILTER:</span>
Customers With No Sales = 
<span class="fn">CALCULATE</span>(
    <span class="fn">DISTINCTCOUNT</span>(Dim_Customer[CustomerID]),
    <span class="fn">CROSSFILTER</span>(Dim_Customer[CustomerID], Fact_Sales[CustomerID], BOTH),
    <span class="fn">ISBLANK</span>(<span class="fn">CALCULATE</span>(<span class="fn">COUNTROWS</span>(Fact_Sales)))
)

<span class="cm">-- CROSSFILTER Values: NONE, ONEWAY, BOTH, ONEWAY_LEFTFILTERSRIGHT</span>
<span class="cm">-- A simpler example: the number of products that were never sold</span>
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
<p><strong>CROSSFILTER in Measure = security. Both In the model = risk:</strong> CROSSFILTER Binary filtering is activated only the moment the Measure Specified. As for changing the relationship to Both In the model, it affects all equations in the report and causes unexpected results elsewhere.</p>
</div>

<div class="lesson-card">
<h3>🏆 Pro Tips from field experience</h3>
<ul>
<li><strong>RELATED in Calculated Columns only:</strong> in Measures use RELATEDTABLE. RELATED does not work in Measures and you will get an error.</li>
<li><strong>USERELATIONSHIP better than modifying the model:</strong> If you need to activate an inactive relationship, use USERELATIONSHIP in the Measure instead of changing the relationship to Both in the model (this slows down performance).</li>
<li><strong>CROSSFILTER only when needed:</strong> Use it only in specific Measures, not throughout the model. Enable two-way filtering with caution.</li>
<li><strong>Test interactions between relationships:</strong> If the model has intertwined relationships, test each Slicers and Cross-filters so you're sure of the results.</li>
<li><strong>Document complex relationships:</strong> If you use USERELATIONSHIP or CROSSFILTER, leave a note in the Measure explaining why you used it.</li>
</ul>
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
    </div>

    <div class="lesson-card">
      <h3>🏆 Pro Tips من الخبرة الميدانية</h3>
      <ul>
        <li><strong>SUM أسرع من SUMX:</strong> لو تقدر تستخدم SUM (العمود موجود فعلاً)، استخدمها. SUMX بطيء لأنها تمشي صف بصف.</li>
        <li><strong>SUMX مع FILTER = بطء شديد:</strong> تجنب تكرار SUMX جوّا SUMX. لو محتاج، استخدم Calculated Column أولاً.</li>
        <li><strong>استخدم VALUES بدل FILTER عند الإمكان:</strong> VALUES أسرع وأقل استهلاكاً للـ Memory.</li>
        <li><strong>COUNTX بدل COUNT مع Conditions:</strong> عندما تحتاج تعد صفوف بناءً على شرط معين، استخدم COUNTX مع FILTER.</li>
        <li><strong>اختبر الأداء مع بيانات ضخمة:</strong> جرّب SUMX/AVERAGEX على ملايين الصفوف قبل تحريرها في الإنتاج. قد تكتشف مشاكل أداء.</li>
      </ul>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>The difference between SUM and SUMX</h3>
<p>SUM An existing column pool. SUMX Calculate an expression (expression) For each row, the results are then combined:</p>
<div class="code-block">
<span class="cm">-- SUM: By collecting a column Amount located in the table</span>
Total Sales = <span class="fn">SUM</span>(Fact_Sales[Amount])

<span class="cm">-- SUMX: You multiply the price by the quantity, row by row, then add</span>
<span class="cm">-- Useful if there is no Amount column and you only have Qty and Price</span>
Total Revenue = <span class="fn">SUMX</span>(Fact_Sales, Fact_Sales[Qty] * Fact_Sales[UnitPrice])

<span class="cm">-- Advanced example: Calculating profit margin row by row</span>
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
<span class="cm">-- Average invoice value (not the column average - it is calculated for each invoice and then creates an average)</span>
Avg Order Value = 
<span class="fn">AVERAGEX</span>(
    <span class="fn">VALUES</span>(Fact_Sales[OrderID]),
    <span class="fn">CALCULATE</span>(<span class="fn">SUM</span>(Fact_Sales[Amount]))
)

<span class="cm">-- Highest single day sales</span>
Max Daily Sales = 
<span class="fn">MAXX</span>(
    <span class="fn">VALUES</span>(Dim_Date[Date]),
    <span class="fn">CALCULATE</span>([Total Sales])
)

<span class="cm">-- The number of orders that contain more than 3 items</span>
Orders Above 3 Lines = 
<span class="fn">COUNTX</span>(
    <span class="fn">FILTER</span>(
        <span class="fn">VALUES</span>(Fact_Sales[OrderID]),
        <span class="fn">CALCULATE</span>(<span class="fn">COUNTROWS</span>(Fact_Sales)) &gt; <span class="num">3</span>
    ),
    Fact_Sales[OrderID]
)
      </div>
</div>
<div class="lesson-card">
<h3>PRODUCTX — Multiply the values</h3>
<div class="code-block">
<span class="cm">-- Calculating compound growth rate (multiplying growth rates)</span>
Compound Factor = 
<span class="fn">PRODUCTX</span>(
    Dim_Date,
    <span class="num">1</span> + [Monthly Growth Rate]
)
      </div>
</div>
<div class="warn-box">
<div class="icon">⚠️</div>
<p><strong>Iterator inside Iterator = Very slow:</strong> Avoid placing SUMX By air SUMX By air SUMX. The model will slow down exponentially. If you need it, use it Calculated Column First to store the internal account.</p>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Selection rule:</strong> If arithmetic requires multiplication, division, or logic at the grade level → SUMX. If you collect only an existing column → SUM (faster).</p>
</div>

<div class="lesson-card">
<h3>🏆 Pro Tips from field experience</h3>
<ul>
<li><strong>SUM is faster than SUMX:</strong> If you can use SUM (the column already exists), use it. SUMX is slow because it walks row by row.</li>
<li><strong>SUMX with FILTER = very slow:</strong> Avoid repeating SUMX inside SUMX. If you need it, use a Calculated Column first.</li>
<li><strong>Use VALUES instead of FILTER when possible:</strong> VALUES is faster and consumes less Memory.</li>
<li><strong>COUNTX instead of COUNT with Conditions:</strong> When you need to count rows based on a specific condition, use COUNTX with FILTER.</li>
<li><strong>Test performance with large data:</strong> Try SUMX/AVERAGEX on millions of rows before releasing in production. You may discover performance issues.</li>
</ul>
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
    </div>

    <div class="lesson-card">
      <h3>🏆 Pro Tips من الخبرة الميدانية</h3>
      <ul>
        <li><strong>Date Table أساسية:</strong> بدون Date Table مرتبط بشكل صحيح، معظم دوال الزمن لن تعمل. تأكد أن علاقتك من Date[Date] إلى Fact[Date] بنوع 1 إلى متعدد.</li>
        <li><strong>SAMEPERIODLASTYEAR vs PARALLELPERIOD:</strong> كلاهما يقارن بالعام الماضي، لكن SAMEPERIODLASTYEAR = PARALLELPERIOD(-1, YEAR) تقريباً. استخدم PARALLELPERIOD للتحكم الأكثر دقة.</li>
        <li><strong>Slicers تؤثر على دوال الزمن:</strong> عندما تستخدم YTD أو DATEADD في Measure، الـ Date Slicer الحالي يؤثر على الفترة المختارة. اختبر مع فلاتر مختلفة.</li>
        <li><strong>DATEADD يحتفظ بالنافذة الحالية:</strong> لو الـ Slicer على Q1، DATEADD(-1, QUARTER) يعطيك Q4 من السنة السابقة، لكن يحافظ على القيود الأخرى.</li>
        <li><strong>اختبر السنوات الكبيسة:</strong> لو بيانات تتضمن سنوات كبيسة (29 فبراير)، تأكد من نتائج المقارنات الزمنية.</li>
      </ul>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="warn-box">
<div class="icon">🚨</div>
<p><strong>prerequisite:</strong> For time functions to work, you must have a Calendar / Date Table linked to the Transactions table in a 1-to-many relationship.</p>
</div>
<div class="lesson-card">
<h3>The most important time functions in DAX</h3>
<div class="code-block">
<span class="cm">-- Year to date sales</span>
YTD Sales = <span class="fn">TOTALYTD</span>([Total Sales], 'Calendar'[Date])

<span class="cm">-- Sales for the same period last year</span>
Last Year Sales = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">SAMEPERIODLASTYEAR</span>('Calendar'[Date])
)

<span class="cm">-- Growth rate compared to last year (YoY Growth%)</span>
YoY Growth = 
<span class="fn">DIVIDE</span>(
    [Total Sales] - [Last Year Sales],
    [Last Year Sales], 
    <span class="num">0</span> <span class="cm">-- To prevent the error of dividing by zero</span>
)
      </div>
</div>
<div class="lesson-card">
<h3>DATEADD — Complete flexibility in moving time</h3>
<div class="code-block">
<span class="cm">-- Last month's sales</span>
Sales Last Month = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">PREVIOUSMONTH</span>('Calendar'[Date])
)

<span class="cm">--Sales 3 months ago</span>
Sales 3M Ago = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">DATEADD</span>('Calendar'[Date], <span class="num">-3</span>, MONTH)
)

<span class="cm">-- Sales of the same quarter of last year</span>
Sales PQ = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">DATEADD</span>('Calendar'[Date], <span class="num">-1</span>, QUARTER)
)

<span class="cm">-- MTD: Sales from the beginning of the month to the current date</span>
Sales MTD = <span class="fn">TOTALMTD</span>([Total Sales], 'Calendar'[Date])
      </div>
</div>

<div class="lesson-card">
<h3>🏆 Pro Tips from field experience</h3>
<ul>
<li><strong>Date Table is essential:</strong> Without a properly linked Date Table, most time functions won't work. Make sure your relationship is from Date[Date] to Fact[Date] as 1-to-many.</li>
<li><strong>SAMEPERIODLASTYEAR vs PARALLELPERIOD:</strong> Both compare to last year, but SAMEPERIODLASTYEAR ≈ PARALLELPERIOD(-1, YEAR). Use PARALLELPERIOD for more precise control.</li>
<li><strong>Slicers affect time functions:</strong> When you use YTD or DATEADD in a Measure, the current Date Slicer affects the selected period. Test with different filters.</li>
<li><strong>DATEADD preserves the current window:</strong> If the Slicer is on Q1, DATEADD(-1, QUARTER) gives you Q4 of the previous year, but maintains other constraints.</li>
<li><strong>Test leap years:</strong> If your data includes leap years (February 29), verify the results of time comparisons.</li>
</ul>
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
    </div>

    <div class="lesson-card">
      <h3>🏆 Pro Tips من الخبرة الميدانية</h3>
      <ul>
        <li><strong>Moving Average = Clarity:</strong> التذبذبات اليومية تخفي الحقيقة. Moving Average تعطيك صورة واضحة عن الاتجاه الحقيقي.</li>
        <li><strong>DATESINPERIOD أفضل من البرمجة اليدوية:</strong> بدل تكتب CALCULATE مع معادلات تاريخ معقدة، استخدم DATESINPERIOD مع فترة محددة.</li>
        <li><strong>PARALLELPERIOD للمقارنات الكاملة:</strong> لو محتاج تقارن فترة كاملة (ربع كامل) بنفس الفترة من الماضي، PARALLELPERIOD أحسن خيار.</li>
        <li><strong>الـ MAX(Date) مهم:</strong> في DATESINPERIOD و Moving Average، استخدم MAX('Date'[Date]) للتأكد من استخدام آخر تاريخ متوفر في البيانات.</li>
        <li><strong>الأداء: اختبر مع بيانات حقيقية:</strong> Moving Average و DATESINPERIOD قد تكون بطيئة مع ملايين الصفوف. اختبرها مع بيانات الإنتاج قبل النشر.</li>
      </ul>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>DATESINPERIOD — Animated time window</h3>
<p>Account allowance YTD or last month, DATESINPERIOD It gives you a time window of a size you specify — last 7 Days, another 30 One day, another 3 months:</p>
<div class="code-block">
<span class="cm">-- Structure: DATESINPERIOD( DateColumn, LastDate, Interval, IntervalType )</span>
<span class="cm">-- Sales in the last 7 days (moving window)</span>
Sales Last 7 Days = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">DATESINPERIOD</span>('Date'[Date], <span class="fn">MAX</span>('Date'[Date]), <span class="num">-7</span>, DAY)
)

<span class="cm">-- Sales in the last 30 days</span>
Sales Last 30 Days = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">DATESINPERIOD</span>('Date'[Date], <span class="fn">MAX</span>('Date'[Date]), <span class="num">-30</span>, DAY)
)

<span class="cm">-- Sales in the last 3 months</span>
Sales Last 3M = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">DATESINPERIOD</span>('Date'[Date], <span class="fn">MAX</span>('Date'[Date]), <span class="num">-3</span>, MONTH)
)
      </div>
</div>
<div class="lesson-card">
<h3>Moving Average</h3>
<p>A moving average smoothes out daily fluctuations and shows the real trend. Ideal for sales and performance reporting:</p>
<div class="code-block">
<span class="cm">-- Moving average for the last 7 days</span>
Moving Avg 7D = 
<span class="kw">VAR</span> Last7Days = 
    <span class="fn">DATESINPERIOD</span>('Date'[Date], <span class="fn">MAX</span>('Date'[Date]), <span class="num">-7</span>, DAY)
<span class="kw">VAR</span> DaysWithData = 
    <span class="fn">CALCULATE</span>(<span class="fn">DISTINCTCOUNT</span>('Date'[Date]), Last7Days, Fact_Sales[Amount] &gt; <span class="num">0</span>)
<span class="kw">RETURN</span>
<span class="fn">DIVIDE</span>(
        <span class="fn">CALCULATE</span>([Total Sales], Last7Days),
        DaysWithData,
        <span class="num">0</span>
    )

<span class="cm">-- Moving average for the last 3 months (popular in management reports)</span>
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
<h3>PARALLELPERIOD — Compare entire periods</h3>
<p>The difference between DATEADD andPARALLELPERIOD: DATEADD Move dates by a specified amount, PARALLELPERIOD Returns the corresponding full period (A whole month or a whole quarter):</p>
<div class="code-block">
<span class="cm">-- DATEADD: Move the current window with 12 A month back</span>
<span class="cm">-- If you are in March 2025 → it will only be March 2024</span>
Sales DATEADD LY = 
<span class="fn">CALCULATE</span>([Total Sales], <span class="fn">DATEADD</span>('Date'[Date], <span class="num">-12</span>, MONTH))

<span class="cm">-- PARALLELPERIOD: corresponding full period</span>
<span class="cm">-- If the Slicer is on Q1 2025 → it returns the full Q1 2024</span>
Sales Parallel LY = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">PARALLELPERIOD</span>('Date'[Date], <span class="num">-1</span>, YEAR)
)

<span class="cm">-- Comparing the current quarter with the last quarter</span>
Sales Prev Quarter = 
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">PARALLELPERIOD</span>('Date'[Date], <span class="num">-1</span>, QUARTER)
)

<span class="cm">-- Growth rate compared to the same period last year (with PARALLELPERIOD)</span>
YoY Growth % = 
<span class="kw">VAR</span> CurrentSales  = [Total Sales]
<span class="kw">VAR</span> PreviousSales  = <span class="fn">CALCULATE</span>([Total Sales], <span class="fn">PARALLELPERIOD</span>('Date'[Date], <span class="num">-1</span>, YEAR))
<span class="kw">RETURN</span>
<span class="fn">DIVIDE</span>(CurrentSales - PreviousSales, PreviousSales, <span class="fn">BLANK</span>())
      </div>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>When do you use them?</strong> DATESINPERIOD For fixed windows (last N day/month). DATEADD To move the current window. PARALLELPERIOD To compare full periods (A whole quarter, a whole year). SAMEPERIODLASTYEAR = PARALLELPERIOD With -1 YEAR With a nuance in dealing with leap years.</p>
</div>

<div class="lesson-card">
<h3>🏆 Pro Tips from field experience</h3>
<ul>
<li><strong>Moving Average = Clarity:</strong> Daily fluctuations hide the truth. Moving Average gives you a clear picture of the real trend.</li>
<li><strong>DATESINPERIOD better than manual programming:</strong> Instead of writing CALCULATE with complex date formulas, use DATESINPERIOD with a specific period.</li>
<li><strong>PARALLELPERIOD for complete comparisons:</strong> If you need to compare a complete period (entire quarter) with the same period in the past, PARALLELPERIOD is the best option.</li>
<li><strong>The MAX(Date) is important:</strong> in DATESINPERIOD and Moving Average, use MAX('Date'[Date]) to ensure you're using the most recent date available in the data.</li>
<li><strong>Performance: Test with real data:</strong> Moving Average and DATESINPERIOD can be slow with millions of rows. Test them with production data before release.</li>
</ul>
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
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>What is the Field Parameter?</h3>
<p>Field Parameter is a special table that contains a list of measurements or columns. When you set it as a Slicer, the user chooses which measure he wants to see on the chart at the same time.</p>
</div>
<div class="lesson-card">
<h3>Create a Field Parameter — step by step</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Modeling → New Parameter → Fields</h4>
<p>From the top menu, choose New Parameter, then Fields.</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Add the required measurements</h4>
<p>for example: Total Sales, Total Profit, Total Qty. Power BI He will name him Parameter1 And you will be able to change the name.</p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Power BI The table is generated automatically</h4>
<p>You will find a new table in the model with 3 columns: Fields (name), Order (order), and a column with the same name as Parameter.</p>
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<h4>Use it in charts and slicers</h4>
<p>Place the Parameter column in the Y-Axis of the chart. Place the Fields column in the Slicer. The user selects and the data changes immediately.</p>
</div>
</div>
</div>
</div>
<div class="lesson-card">
<h3>Automatically generated code — and how to modify it</h3>
<div class="code-block">
<span class="cm">-- Power BI This table is generated automatically</span>
KPI Selector = {
    (<span class="str">"Total Sales"</span>,   <span class="fn">NAMEOF</span>('Measures'[Total Sales]),   <span class="num">0</span>),
    (<span class="str">"Total Profit"</span>,  <span class="fn">NAMEOF</span>('Measures'[Total Profit]),  <span class="num">1</span>),
    (<span class="str">"Total Qty"</span>,     <span class="fn">NAMEOF</span>('Measures'[Total Qty]),     <span class="num">2</span>)
}

<span class="cm">-- To add a new Measure manually:</span>
<span class="cm">-- Add a new line with the same structure</span>
    (<span class="str">"Avg Order Value"</span>, <span class="fn">NAMEOF</span>('Measures'[Avg Order Value]), <span class="num">3</span>)
      </div>
</div>
<div class="lesson-card">
<h3>Dynamic Axis — Change the axis as well</h3>
<p>The same idea, but with Columns instead of Measures. Let the user choose to display sales at the region, branch, or product level:</p>
<div class="code-block">
<span class="cm">-- Dimension Parameter</span>
Axis Selector = {
    (<span class="str">"By Region"</span>,   <span class="fn">NAMEOF</span>(Dim_Region[RegionName]),   <span class="num">0</span>),
    (<span class="str">"By Branch"</span>,   <span class="fn">NAMEOF</span>(Dim_Branch[BranchName]),   <span class="num">1</span>),
    (<span class="str">"By Product"</span>,  <span class="fn">NAMEOF</span>(Dim_Product[ProductName]),  <span class="num">2</span>)
}
<span class="cm">-- Place the Axis Selector column in the X-Axis + Slicer</span>
</div>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Professional use:</strong> Combining Dimension Parameter + Measure Parameter on the same page gives the user complete control over the report — choosing what to display and at what level — without any additional pages.</p>
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
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>VAR / RETURN — Clean and faster code</h3>
<p>Instead of writing the same calculation more than once, store it in a variable. Faster to implement, easier to read and maintain.</p>
<div class="code-block">
<span class="cm">-- without VAR — Difficult to read and repetitive</span>
% of Total = 
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>(Sales[Amount]),
    <span class="fn">CALCULATE</span>(<span class="fn">SUM</span>(Sales[Amount]), <span class="fn">ALL</span>(Sales)),
    <span class="num">0</span>
)

<span class="cm">-- with VAR — Professional and clear</span>
% of Total = 
<span class="kw">VAR</span> CurrentSales = <span class="fn">SUM</span>(Sales[Amount])
<span class="kw">VAR</span> TotalSales   = <span class="fn">CALCULATE</span>(<span class="fn">SUM</span>(Sales[Amount]), <span class="fn">ALL</span>(Sales))
<span class="kw">RETURN</span>
<span class="fn">DIVIDE</span>(CurrentSales, TotalSales, <span class="num">0</span>)
      </div>
</div>
<div class="lesson-card">
<h3>RANKX — Arrange items</h3>
<div class="code-block">
<span class="cm">-- Sorting the product by sales (Top = 1)</span>
Product Rank = 
<span class="fn">RANKX</span>(
    <span class="fn">ALL</span>(Dim_Product[ProductName]),
    <span class="fn">SUM</span>(Fact_Sales[Amount]),
    ,
    DESC,
    DENSE  <span class="cm">-- DENSE: Does not leave gaps in numbering when equal</span>
)

<span class="cm">-- Show only top 5 products</span>
Top 5 Sales = 
<span class="fn">IF</span>([Product Rank] &lt;= <span class="num">5</span>, <span class="fn">SUM</span>(Fact_Sales[Amount]), <span class="fn">BLANK</span>())
      </div>
</div>
<div class="lesson-card">
<h3>SWITCH(TRUE()) — substitute IF Overlapping</h3>
<p>Instead of working IF inside IF inside IF, use SWITCH(TRUE()) — Clearer and easier to edit.</p>
<div class="code-block">
<span class="cm">-- Classification of customers according to total spending</span>
Customer Tier = 
<span class="fn">SWITCH</span>(
    <span class="kw">TRUE</span>(),
    [Total Spend] &gt;= <span class="num">50000</span>, <span class="str">"Platinum"</span>,
    [Total Spend] &gt;= <span class="num">20000</span>, <span class="str">"Gold"</span>,
    [Total Spend] &gt;= <span class="num">5000</span>,  <span class="str">"Silver"</span>,
    <span class="str">"Bronze"</span> <span class="cm">--Default value</span>
)
      </div>
</div>
<div class="lesson-card">
<h3>ALLSELECTED — A percentage of the whole, with respect to the Slicer</h3>
<p>The difference between ALL andALLSELECTED: ALL Completely removes all filters. ALLSELECTED Respect the Slicers External only.</p>
<div class="code-block">
<span class="cm">-- A percentage of the total, taking into account the current Slicer</span>
% of Slicer Total = 
<span class="fn">DIVIDE</span>(
    [Total Sales],
    <span class="fn">CALCULATE</span>(<span class="fn">SUM</span>(Fact_Sales[Amount]), <span class="fn">ALLSELECTED</span>(Dim_Product)),
    <span class="num">0</span>
)
      </div>
</div>
<div class="lesson-card">
<h3>FILTER K Iterator — Filter compound terms</h3>
<div class="code-block">
<span class="cm">-- Accounting for sales of large orders above 5000 only</span>
High Value Sales = 
<span class="fn">CALCULATE</span>(
    <span class="fn">SUM</span>(Fact_Sales[Amount]),
    <span class="fn">FILTER</span>(
        Fact_Sales,
        Fact_Sales[Amount] &gt; <span class="num">5000</span> &amp;&amp; Fact_Sales[Category] = <span class="str">"Electronics"</span>
    )
)

<span class="cm">-- The number of customers who purchased more than once</span>
Repeat Customers = 
<span class="fn">COUNTROWS</span>(
    <span class="fn">FILTER</span>(
        <span class="fn">VALUES</span>(Fact_Sales[CustomerID]),
        <span class="fn">CALCULATE</span>(<span class="fn">COUNTROWS</span>(Fact_Sales)) &gt; <span class="num">1</span>
    )
)
      </div>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Golden base:</strong> Always use <strong>VAR</strong> If the same calculation is repeated more than once in the same measure. Faster and clearer.</p>
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
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>CONCATENATEX — Group table values ​​into one text</h3>
<p>It works like an Iterator: it walks over each row and combines the values ​​into a single text separated by a delimiter of your choice. Ideal for displaying product lists or customer names:</p>
<div class="code-block">
<span class="cm">-- List of products sold to a specific customer (comma separated)</span>
Products List = 
<span class="fn">CONCATENATEX</span>(
    <span class="fn">VALUES</span>(Dim_Product[ProductName]),
    Dim_Product[ProductName],
    <span class="str">" | "</span>
)
<span class="cm">-- Result: "Laptop | Keyboard | Mouse"</span>
<span class="cm">-- sorted by sales (descending)</span>
Top Products Str = 
<span class="fn">CONCATENATEX</span>(
    <span class="fn">TOPN</span>(<span class="num">5</span>, <span class="fn">VALUES</span>(Dim_Product[ProductName]), [Total Sales], DESC),
    Dim_Product[ProductName],
    <span class="str">", "</span>,
    [Total Sales],
    DESC
)
<span class="cm">-- Result: "iPhone, Samsung, Dell, HP, Lenovo"</span>
<span class="cm">-- Practical use: displaying the branches of each manager in one card</span>
Manager Branches = 
<span class="fn">CONCATENATEX</span>(
    <span class="fn">RELATEDTABLE</span>(Dim_Branch),
    Dim_Branch[BranchName],
    <span class="str">" ← "</span>
)
      </div>
</div>
<div class="lesson-card">
<h3>FORMAT — Professionally coordinate outputs</h3>
<p>Convert numbers and dates to rich text. Necessary to display KPIs clearly:</p>
<div class="code-block">
<span class="cm">-- Format numbers</span>
Sales Formatted    = <span class="fn">FORMAT</span>([Total Sales], <span class="str">"#,##0"</span>)         <span class="cm">-- 1,250,000</span>
Sales Currency     = <span class="fn">FORMAT</span>([Total Sales], <span class="str">"#,##0.00 EGP"</span>) <span class="cm">-- 1,250,000.00 EGP</span>
Sales Millions     = <span class="fn">FORMAT</span>([Total Sales] / <span class="num">1000000</span>, <span class="str">"0.0M"</span>) <span class="cm">-- 1.3M</span>
Growth Pct         = <span class="fn">FORMAT</span>([YoY Growth], <span class="str">"0.00%"</span>)       <span class="cm">-- 12.50%</span>
<span class="cm">-- Format dates</span>
Date Label         = <span class="fn">FORMAT</span>('Date'[Date], <span class="str">"MMM YYYY"</span>)    <span class="cm">-- Mar 2025</span>
Date Arabic        = <span class="fn">FORMAT</span>('Date'[Date], <span class="str">"DD/MM/YYYY"</span>)   <span class="cm">-- 15/03/2025</span>
Quarter Label      = <span class="fn">FORMAT</span>('Date'[Date], <span class="str">"\\Q"</span>) &amp; <span class="fn">FORMAT</span>('Date'[Date], <span class="str">"Q YYYY"</span>) <span class="cm">-- Q1 2025</span>
<span class="cm">-- Practical use in Card: an offer KPI With unit</span>
Revenue Card Label = 
<span class="fn">FORMAT</span>([Total Revenue] / <span class="num">1000000</span>, <span class="str">"0.0"</span>) &amp; <span class="str">"One million pounds"</span>
<span class="cm">-- Result: "4.7 million pounds"</span>
</div>
</div>
<div class="lesson-card">
<h3>Other basic text functions</h3>
<div class="code-block">
<span class="cm">-- LEFT, RIGHT, MID: Extract part of the text</span>
Branch Code = <span class="fn">LEFT</span>(Dim_Branch[BranchID], <span class="num">3</span>)       <span class="cm">-- The first 3 letters</span>
Year Part   = <span class="fn">RIGHT</span>(Fact_Sales[InvoiceNo], <span class="num">4</span>)      <span class="cm">-- Last 4 digits</span>
City        = <span class="fn">MID</span>(Dim_Store[StoreCode], <span class="num">4</span>, <span class="num">3</span>)        <span class="cm">-- 3 letters starting from the fourth letter</span>
<span class="cm">-- UPPER, LOWER, PROPER: Change status</span>
Name Clean  = <span class="fn">PROPER</span>(Dim_Customer[FullName])          <span class="cm">-- ahmed ali → Ahmed Ali</span>
<span class="cm">-- TRIM, SUBSTITUTE: Text cleaning</span>
Clean Name  = <span class="fn">TRIM</span>(Dim_Customer[FullName])             <span class="cm">-- Delete extra spaces</span>
Fixed Code  = <span class="fn">SUBSTITUTE</span>(Fact_Sales[Code], <span class="str">"-"</span>, <span class="str">"/"</span>)  <span class="cm">-- EG-001 → EG/001</span>
<span class="cm">-- LEN, SEARCH, FIND: Search the text</span>
Has Egypt   = <span class="fn">IF</span>(<span class="fn">ISERROR</span>(<span class="fn">SEARCH</span>(<span class="str">"Egypt"</span>, Dim_Store[Address])), <span class="str">"No"</span>, <span class="str">"Yes"</span>)
      </div>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>FORMAT Returns text — Do not use it in calculations:</strong> after FORMAT You cannot add or subtract the result. Use it only in the Card or Tooltip or Labels. For calculations stay with the original numbers.</p>
</div>` }],
  },
  "dax-m2m": {
    eyebrow: "04 · 11 — Many-to-Many و TREATAS",
    title: "Many-to-Many و TREATAS — علاقات أكتر من Many",
    lede: "العلاقات Many-to-Many من أكتر المشاكل اللي بتتعب المحللين. تعلّم متى تستخدم Bridge Table ومتى تستخدم TREATAS كحل DAX نظيف.",
    en_eyebrow: "04 · 11 — Many-to-Many & TREATAS",
    en_lede: "Many-to-Many relationships are one of the trickiest data modeling problems. Learn when to use a Bridge Table and when TREATAS is the clean DAX alternative.",
    sectionId: "dax-m2m",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>ما هي مشكلة Many-to-Many؟</h3>
      <p>في نماذج البيانات العادية، العلاقة تكون <strong>One-to-Many</strong> — منتج واحد له كتير من المبيعات. المشكلة تظهر في <strong>Many-to-Many (M2M)</strong>: موظف اشتغل في أكتر من فرع، وكل فرع فيه أكتر من موظف.</p>
      <p>النتيجة: مبيعات الموظف المشترك هتتحسب <strong>مرتين</strong> في كل فرع — وده اللي بنسميه Double Counting.</p>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>الحل الغلط — Both Filter Direction:</strong> تحويل العلاقة لـ "Both" في الموديل يبدو سهلاً لكنه خطير. بيسبب <strong>ambiguous filter paths</strong> — الفلاتر تسلك مسارات غير متوقعة، الأرقام بتتكرر، والأداء بيتراجع.</p>
    </div>

    <div class="lesson-card">
      <h3>الحل المعماري الصح: Bridge Table</h3>
      <p>جدول وسيط يكسر M2M لعلاقتين One-to-Many نظيفتين:</p>
      <div class="code-block">
<span class="cm">-- بدل علاقة M2M المباشرة الخطيرة:</span>
<span class="cm">-- Dim_Employee --- M:M --- Dim_Branch</span>

<span class="cm">-- نبني Bridge Table:</span>
Dim_Employee:      EmpID | EmpName
Dim_Branch:        BranchID | BranchName
Bridge_EmpBranch:  EmpID | BranchID      <span class="cm">-- الجدول الوسيط</span>
Fact_Sales:        OrderID | EmpID | Amount

<span class="cm">-- العلاقات في الموديل (اتجاه واحد فقط):</span>
Dim_Employee  ---1:M--&gt; Bridge_EmpBranch &lt;--M:1--- Dim_Branch
Dim_Employee  ---1:M--&gt; Fact_Sales
      </div>
      <div class="tip-box">
        <div class="icon">💡</div>
        <p><strong>Bridge Table = الحل الأفضل دائماً.</strong> الفلاتر تمشي في اتجاه واحد واضح بدون ambiguity. مش محتاج DAX خاص في كل Measure — الموديل بيحل المشكلة تلقائياً.</p>
      </div>
    </div>

    <div class="lesson-card">
      <h3>TREATAS — العلاقة الوهمية في DAX</h3>
      <p>لو مش قادر تعدّل الموديل (Data Source ثابت أو أذونات محدودة)، <strong>TREATAS</strong> بتبني علاقة وهمية (Virtual Relationship) جوا الـ Measure نفسه بس.</p>
      <div class="code-block">
<span class="cm">-- Syntax الأساسي</span>
<span class="fn">TREATAS</span>(table_expression, column1 [, column2 ...])

<span class="cm">-- مثال: مبيعات حسب الفئات المختارة من الـ Slicer</span>
Sales by Category =
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">TREATAS</span>(
        <span class="fn">VALUES</span>(Dim_Category[CategoryID]),  <span class="cm">-- قيم الفئات المحددة</span>
        Dim_Product[CategoryID]             <span class="cm">-- نطبقها على عمود المنتج</span>
    )
)

<span class="cm">-- مثال: مبيعات الموظفين في الفروع المختارة</span>
Branch Sales =
<span class="kw">VAR</span> SelectedBranches = <span class="fn">VALUES</span>(Dim_Branch[BranchID])
<span class="kw">RETURN</span>
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">TREATAS</span>(SelectedBranches, Fact_Sales[BranchID])
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>مثال واقعي: منتجات في أكتر من فئة</h3>
      <p>Laptop في نفس الوقت Electronics وOffice Equipment. نريد مبيعات كل فئة بدون تكرار:</p>
      <div class="code-block">
<span class="cm">-- الجداول المطلوبة</span>
Dim_Product:     ProductID | ProductName
Dim_Category:    CategoryID | CategoryName
Bridge_ProdCat:  ProductID | CategoryID   <span class="cm">-- Bridge</span>
Fact_Sales:      OrderID | ProductID | Amount

<span class="cm">-- الـ Measure الصحيح</span>
Category Sales =
<span class="kw">VAR</span> CurrentCats      = <span class="fn">VALUES</span>(Dim_Category[CategoryID])
<span class="kw">VAR</span> FilteredProducts =
    <span class="fn">CALCULATETABLE</span>(
        <span class="fn">VALUES</span>(Bridge_ProdCat[ProductID]),
        <span class="fn">TREATAS</span>(CurrentCats, Bridge_ProdCat[CategoryID])
    )
<span class="kw">RETURN</span>
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">TREATAS</span>(FilteredProducts, Fact_Sales[ProductID])
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>SUMMARIZE — تجميع من جداول معقدة</h3>
      <p>SUMMARIZE بتبني جدول وهمي مجمّع — مفيدة كمدخل لـ TOPN وFILTER وCOUNTROWS:</p>
      <div class="code-block">
<span class="cm">-- ملخص مبيعات كل فئة</span>
<span class="kw">VAR</span> Summary =
    <span class="fn">SUMMARIZE</span>(
        Fact_Sales,
        Dim_Category[CategoryName],
        <span class="str">"Sales"</span>, [Total Sales]
    )

<span class="cm">-- أعلى 3 فئات مبيعاً باستخدام TOPN + TREATAS</span>
Top 3 Categories =
<span class="kw">VAR</span> Sum  = <span class="fn">SUMMARIZE</span>(Fact_Sales, Dim_Category[CategoryName], <span class="str">"S"</span>, [Total Sales])
<span class="kw">VAR</span> Top3 = <span class="fn">TOPN</span>(<span class="num">3</span>, Sum, [S], DESC)
<span class="kw">RETURN</span>
<span class="fn">CALCULATE</span>([Total Sales], <span class="fn">TREATAS</span>(Top3, Dim_Category[CategoryName]))
      </div>
      <div class="tip-box">
        <div class="icon">💡</div>
        <p><strong>SUMMARIZE + TREATAS = combo قوي</strong> لعمل فلاتر ديناميكية معقدة جوا الـ Measures من غير ما تحتاج تغيير الموديل.</p>
      </div>
    </div>

    <div class="lesson-card">
      <h3>🏆 Pro Tips</h3>
      <ul>
        <li><strong>Bridge أولاً، TREATAS تانياً:</strong> Bridge Table في الموديل هي الحل المعماري الصح. TREATAS هو خيار تاني لو الموديل مش في إيدك.</li>
        <li><strong>نفس نوع البيانات ضروري:</strong> TREATAS تحتاج عمود المصدر وعمود الهدف بنفس الـ Data Type — رقم مع رقم، نص مع نص.</li>
        <li><strong>اختبر بـ COUNTROWS أولاً:</strong> COUNTROWS(TREATAS(...)) تساعدك تتأكد إن الجدول الوهمي بيرجع الصفوف الصح قبل ما تضيف الحسابات.</li>
        <li><strong>TREATAS بتأثر على Filter Context بس:</strong> مش علاقة فعلية في الموديل. بتأثر بس داخل الـ Measure اللي استخدمتها فيه.</li>
        <li><strong>CROSSFILTER(BOTH) مش حل:</strong> له نفس مشاكل Both في الموديل. TREATAS أنظف وأوضح وأأمن.</li>
      </ul>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>What is the Many-to-Many problem?</h3>
<p>In normal data models relationships are <strong>One-to-Many</strong> — one product has many sales rows. The problem appears with <strong>Many-to-Many (M2M)</strong>: an employee works in multiple branches, and each branch has multiple employees.</p>
<p>Result: that employee's sales get counted <strong>twice</strong> — once per branch. This is Double Counting.</p>
</div>
<div class="warn-box">
<div class="icon">⚠️</div>
<p><strong>Wrong solution — Both Filter Direction:</strong> Switching the relationship to "Both" looks easy but it is dangerous. It causes <strong>ambiguous filter paths</strong> — filters take unexpected routes, numbers get double-counted, and performance degrades noticeably.</p>
</div>
<div class="lesson-card">
<h3>The correct architectural solution: Bridge Table</h3>
<p>An intermediate table breaks M2M into two clean One-to-Many relationships:</p>
<div class="code-block">
<span class="cm">-- Instead of the dangerous direct M2M:</span>
<span class="cm">-- Dim_Employee --- M:M --- Dim_Branch</span>

<span class="cm">-- Build a Bridge Table:</span>
Dim_Employee:      EmpID | EmpName
Dim_Branch:        BranchID | BranchName
Bridge_EmpBranch:  EmpID | BranchID
Fact_Sales:        OrderID | EmpID | Amount

<span class="cm">-- Single-direction relationships:</span>
Dim_Employee  ---1:M--&gt; Bridge_EmpBranch &lt;--M:1--- Dim_Branch
Dim_Employee  ---1:M--&gt; Fact_Sales
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Bridge Table = always the best solution.</strong> Filters flow in one clear direction without ambiguity. No special DAX needed in every measure — the model solves it automatically.</p>
</div>
</div>
<div class="lesson-card">
<h3>TREATAS — Virtual Relationship in DAX</h3>
<p>If you cannot change the model (fixed data source, limited permissions), <strong>TREATAS</strong> builds a virtual relationship inside the measure itself only.</p>
<div class="code-block">
<span class="cm">-- Basic syntax</span>
<span class="fn">TREATAS</span>(table_expression, column1 [, column2 ...])

<span class="cm">-- Example: sales by selected categories from Slicer</span>
Sales by Category =
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">TREATAS</span>(
        <span class="fn">VALUES</span>(Dim_Category[CategoryID]),
        Dim_Product[CategoryID]
    )
)

<span class="cm">-- Example: employee sales in selected branches</span>
Branch Sales =
<span class="kw">VAR</span> SelectedBranches = <span class="fn">VALUES</span>(Dim_Branch[BranchID])
<span class="kw">RETURN</span>
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">TREATAS</span>(SelectedBranches, Fact_Sales[BranchID])
)
</div>
</div>
<div class="lesson-card">
<h3>Real example: products in multiple categories</h3>
<p>A Laptop belongs to both Electronics and Office Equipment. We want each category's sales without double-counting the Laptop:</p>
<div class="code-block">
Dim_Product:     ProductID | ProductName
Dim_Category:    CategoryID | CategoryName
Bridge_ProdCat:  ProductID | CategoryID
Fact_Sales:      OrderID | ProductID | Amount

Category Sales =
<span class="kw">VAR</span> CurrentCats      = <span class="fn">VALUES</span>(Dim_Category[CategoryID])
<span class="kw">VAR</span> FilteredProducts =
    <span class="fn">CALCULATETABLE</span>(
        <span class="fn">VALUES</span>(Bridge_ProdCat[ProductID]),
        <span class="fn">TREATAS</span>(CurrentCats, Bridge_ProdCat[CategoryID])
    )
<span class="kw">RETURN</span>
<span class="fn">CALCULATE</span>(
    [Total Sales],
    <span class="fn">TREATAS</span>(FilteredProducts, Fact_Sales[ProductID])
)
</div>
</div>
<div class="lesson-card">
<h3>SUMMARIZE — aggregate from complex tables</h3>
<p>SUMMARIZE builds a virtual aggregated table — useful as input for TOPN, FILTER, and COUNTROWS:</p>
<div class="code-block">
Top 3 Categories =
<span class="kw">VAR</span> Sum  = <span class="fn">SUMMARIZE</span>(Fact_Sales, Dim_Category[CategoryName], <span class="str">"S"</span>, [Total Sales])
<span class="kw">VAR</span> Top3 = <span class="fn">TOPN</span>(<span class="num">3</span>, Sum, [S], DESC)
<span class="kw">RETURN</span>
<span class="fn">CALCULATE</span>([Total Sales], <span class="fn">TREATAS</span>(Top3, Dim_Category[CategoryName]))
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>SUMMARIZE + TREATAS = powerful combo</strong> for dynamic filters inside Measures without touching the model.</p>
</div>
</div>
<div class="lesson-card">
<h3>🏆 Pro Tips</h3>
<ul>
<li><strong>Bridge first, TREATAS second:</strong> A Bridge Table in the model is always the better architectural solution. TREATAS is a fallback when the model is out of your control.</li>
<li><strong>Data types must match:</strong> TREATAS requires the source and target columns to have the same data type — number to number, text to text.</li>
<li><strong>Test with COUNTROWS first:</strong> COUNTROWS(TREATAS(...)) lets you verify the virtual table returns the right rows before adding calculations.</li>
<li><strong>TREATAS only affects Filter Context:</strong> It does not create a real model relationship. The effect is only inside the measure where you used it.</li>
<li><strong>CROSSFILTER(BOTH) is not a solution:</strong> It has the same problems as Both in the model. TREATAS is cleaner, clearer, and safer.</li>
</ul>
</div>` }],
  },
  "dax-budget": {
    eyebrow: "04 · 12 — Budget vs Actual",
    title: "Budget vs Actual — مقارنة الهدف بالواقع",
    lede: "من أكتر البترنز المطلوبة في الشركات. تعلّم كيف تبني نموذج Budget vs Actual صحيح وتكتب Measures الفرق والإنجاز والتراكمي.",
    en_eyebrow: "04 · 12 — Budget vs Actual",
    en_lede: "One of the most requested patterns in enterprise Power BI. Build a correct Budget vs Actual model and write Variance, Achievement, and YTD measures.",
    sectionId: "dax-budget",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>لماذا Budget vs Actual مختلف؟</h3>
      <p>الفرق الجوهري هو <strong>اختلاف مستوى التفصيل (Granularity)</strong>:</p>
      <table class="compare-table">
        <tr>
          <th>جدول المبيعات الفعلية</th>
          <th>جدول الميزانية</th>
        </tr>
        <tr>
          <td>يسجل كل معاملة بتاريخ دقيق</td>
          <td>يسجل أهداف شهرية أو ربع سنوية</td>
        </tr>
        <tr>
          <td>مستوى التفصيل: يومي</td>
          <td>مستوى التفصيل: شهري أو ربعي</td>
        </tr>
        <tr>
          <td>علاقة مباشرة مع Date Table</td>
          <td>لا علاقة مباشرة — تحتاج TREATAS</td>
        </tr>
      </table>
      <p>لو ربطت الجدولين مباشرة وطرحت Budget من Actuals هتاخد أرقام غلط لأن الـ granularity مختلف.</p>
    </div>

    <div class="lesson-card">
      <h3>تصميم الموديل الصح</h3>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>Fact_Sales — المبيعات الفعلية</h4>
            <p>OrderID | Date | ProductID | RegionID | Amount</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>Fact_Budget — الميزانية</h4>
            <p>YearMonth | ProductID | RegionID | BudgetAmount</p>
            <p><em>YearMonth كرقم Integer: 202401، 202402، ...</em></p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>الربط عبر TREATAS</h4>
            <p>Fact_Budget لا يرتبط مباشرة بـ Date Table. نبني عمود YearMonth في Date Table ونستخدم TREATAS في الـ Measures للربط الصح.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>الـ Measures الأساسية</h3>
      <div class="code-block">
<span class="cm">-- 1. المبيعات الفعلية</span>
Total Actuals =
<span class="fn">SUM</span>(Fact_Sales[Amount])

<span class="cm">-- 2. الميزانية مع TREATAS لمطابقة الشهر</span>
Total Budget =
<span class="fn">CALCULATE</span>(
    <span class="fn">SUM</span>(Fact_Budget[BudgetAmount]),
    <span class="fn">TREATAS</span>(
        <span class="fn">VALUES</span>('Date'[YearMonth]),    <span class="cm">-- شهر/سنة من Date Table</span>
        Fact_Budget[YearMonth]       <span class="cm">-- نفس العمود في جدول الميزانية</span>
    )
)

<span class="cm">-- 3. الفرق (Variance)</span>
Variance =
[Total Actuals] - [Total Budget]

<span class="cm">-- 4. نسبة الانحراف</span>
Variance % =
<span class="fn">DIVIDE</span>([Variance], [Total Budget], <span class="num">0</span>)

<span class="cm">-- 5. نسبة الإنجاز</span>
Achievement % =
<span class="fn">DIVIDE</span>([Total Actuals], [Total Budget], <span class="num">0</span>)
      </div>
    </div>

    <div class="lesson-card">
      <h3>Budget YTD ومقارنة تراكمية</h3>
      <div class="code-block">
<span class="cm">-- Actuals تراكمي سنوي</span>
Actuals YTD =
<span class="fn">TOTALYTD</span>([Total Actuals], 'Date'[Date])

<span class="cm">-- Budget YTD</span>
Budget YTD =
<span class="fn">CALCULATE</span>(
    <span class="fn">SUM</span>(Fact_Budget[BudgetAmount]),
    <span class="fn">TREATAS</span>(
        <span class="fn">VALUES</span>('Date'[YearMonth]),
        Fact_Budget[YearMonth]
    ),
    <span class="fn">DATESYTD</span>('Date'[Date])
)

<span class="cm">-- Variance تراكمي</span>
Variance YTD =
[Actuals YTD] - [Budget YTD]

<span class="cm">-- تصنيف الأداء</span>
Performance Status =
<span class="fn">SWITCH</span>(
    <span class="kw">TRUE</span>(),
    [Variance %] >= <span class="num">0.05</span>,  <span class="str">"🟢 Exceeding"</span>,
    [Variance %] >= <span class="num">0</span>,     <span class="str">"🟡 On Track"</span>,
    [Variance %] >= -<span class="num">0.1</span>, <span class="str">"🟠 At Risk"</span>,
    <span class="str">"🔴 Below Budget"</span>
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>Budget ربع سنوي موزّع على أشهر</h3>
      <div class="code-block">
<span class="cm">-- توزيع الميزانية الربعية على الأشهر</span>
Monthly Budget (from Quarterly) =
<span class="kw">VAR</span> QuarterBudget =
    <span class="fn">CALCULATE</span>(
        <span class="fn">SUM</span>(Fact_Budget[BudgetAmount]),
        <span class="fn">TREATAS</span>(
            <span class="fn">VALUES</span>('Date'[QuarterYear]),
            Fact_Budget[QuarterYear]
        )
    )
<span class="kw">VAR</span> MonthsInQ =
    <span class="fn">COUNTROWS</span>(<span class="fn">VALUES</span>('Date'[MonthNum]))
<span class="kw">RETURN</span>
<span class="fn">DIVIDE</span>(QuarterBudget, MonthsInQ, <span class="num">0</span>)
      </div>
      <div class="tip-box">
        <div class="icon">💡</div>
        <p><strong>أفضل الممارسات:</strong> خزّن الميزانية في أدق مستوى متاح (شهري أفضل من ربعي). التوزيم في Power Query أسهل وأدق من التوزيع في DAX.</p>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Dashboard Budget المتكامل</h3>
      <div class="code-block">
[Total Actuals]      <span class="cm">-- المبيعات الفعلية</span>
[Total Budget]       <span class="cm">-- الميزانية المستهدفة</span>
[Variance]           <span class="cm">-- الفرق (+/-)</span>
[Variance %]         <span class="cm">-- نسبة الانحراف</span>
[Achievement %]      <span class="cm">-- نسبة الإنجاز</span>
[Actuals YTD]        <span class="cm">-- تراكمي سنوي فعلي</span>
[Budget YTD]         <span class="cm">-- تراكمي سنوي مستهدف</span>
[Variance YTD]       <span class="cm">-- فرق تراكمي</span>
[Performance Status] <span class="cm">-- 🟢 🟡 🟠 🔴</span>

<span class="cm">-- Conditional Formatting على KPI Card:</span>
<span class="cm">-- Variance % &gt; 0  → أخضر   (أحسن من الهدف)</span>
<span class="cm">-- Variance % = 0  → رمادي  (مكتمل بالظبط)</span>
<span class="cm">-- Variance % &lt; 0  → أحمر   (أقل من الهدف)</span>
      </div>
    </div>

    <div class="lesson-card">
      <h3>🏆 Pro Tips</h3>
      <ul>
        <li><strong>YearMonth كـ Integer:</strong> خزّن YearMonth كـ 202401 مش "2024-01". الأرقام أسرع في الفلترة والمقارنة.</li>
        <li><strong>DIVIDE دايماً بدل /:</strong> في Variance % وAchievement %، استخدم DIVIDE لتجنب خطأ القسمة على صفر عند بداية السنة.</li>
        <li><strong>Budget الشهري قبل الإدراج:</strong> لو الميزانية سنوية أو ربعية، قسّمها في Power Query قبل ما تدخل الموديل — أسهل وأدق.</li>
        <li><strong>اختبر بـ Matrix Visual:</strong> افرد الشهور على Rows وشوف Budget وActuals جنب بعض. لو الأرقام بدت غريبة، في مشكلة في TREATAS.</li>
        <li><strong>Budget Remaining:</strong> فكّر تضيف [Budget Remaining] = [Budget YTD] - [Actuals YTD] عشان Stakeholders يعرفوا المتبقي.</li>
      </ul>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>Why is Budget vs Actual different?</h3>
<p>The fundamental difference is the <strong>difference in granularity</strong>:</p>
<table class="compare-table">
<tr>
<th>Sales Table (Actuals)</th>
<th>Budget Table</th>
</tr>
<tr>
<td>Records each transaction with an exact date</td>
<td>Records monthly or quarterly targets</td>
</tr>
<tr>
<td>Granularity: daily</td>
<td>Granularity: monthly or quarterly</td>
</tr>
<tr>
<td>Direct relationship with Date Table</td>
<td>No direct relationship — needs TREATAS</td>
</tr>
</table>
<p>If you link both tables directly and subtract Budget from Actuals you will get wrong numbers because their granularity differs.</p>
</div>
<div class="lesson-card">
<h3>Correct model design</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Fact_Sales — Actual sales</h4>
<p>OrderID | Date | ProductID | RegionID | Amount</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Fact_Budget — Budget table</h4>
<p>YearMonth | ProductID | RegionID | BudgetAmount</p>
<p><em>YearMonth as Integer: 202401, 202402, ...</em></p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Link via TREATAS</h4>
<p>Fact_Budget does not link directly to the Date Table. Build a YearMonth column in the Date Table and use TREATAS in measures to apply the correct filter.</p>
</div>
</div>
</div>
</div>
<div class="lesson-card">
<h3>Core measures</h3>
<div class="code-block">
<span class="cm">-- 1. Actual sales</span>
Total Actuals =
<span class="fn">SUM</span>(Fact_Sales[Amount])

<span class="cm">-- 2. Budget with TREATAS to match the month</span>
Total Budget =
<span class="fn">CALCULATE</span>(
    <span class="fn">SUM</span>(Fact_Budget[BudgetAmount]),
    <span class="fn">TREATAS</span>(
        <span class="fn">VALUES</span>('Date'[YearMonth]),
        Fact_Budget[YearMonth]
    )
)

<span class="cm">-- 3. Variance</span>
Variance =     [Total Actuals] - [Total Budget]

<span class="cm">-- 4. Variance percentage</span>
Variance %   = <span class="fn">DIVIDE</span>([Variance], [Total Budget], <span class="num">0</span>)

<span class="cm">-- 5. Achievement rate</span>
Achievement % = <span class="fn">DIVIDE</span>([Total Actuals], [Total Budget], <span class="num">0</span>)
</div>
</div>
<div class="lesson-card">
<h3>Budget YTD and cumulative comparison</h3>
<div class="code-block">
Actuals YTD =
<span class="fn">TOTALYTD</span>([Total Actuals], 'Date'[Date])

Budget YTD =
<span class="fn">CALCULATE</span>(
    <span class="fn">SUM</span>(Fact_Budget[BudgetAmount]),
    <span class="fn">TREATAS</span>(<span class="fn">VALUES</span>('Date'[YearMonth]), Fact_Budget[YearMonth]),
    <span class="fn">DATESYTD</span>('Date'[Date])
)

Variance YTD = [Actuals YTD] - [Budget YTD]

Performance Status =
<span class="fn">SWITCH</span>(
    <span class="kw">TRUE</span>(),
    [Variance %] >= <span class="num">0.05</span>,  <span class="str">"🟢 Exceeding"</span>,
    [Variance %] >= <span class="num">0</span>,     <span class="str">"🟡 On Track"</span>,
    [Variance %] >= -<span class="num">0.1</span>, <span class="str">"🟠 At Risk"</span>,
    <span class="str">"🔴 Below Budget"</span>
)
</div>
</div>
<div class="lesson-card">
<h3>Quarterly budget distributed across months</h3>
<div class="code-block">
Monthly Budget (from Quarterly) =
<span class="kw">VAR</span> QuarterBudget =
    <span class="fn">CALCULATE</span>(
        <span class="fn">SUM</span>(Fact_Budget[BudgetAmount]),
        <span class="fn">TREATAS</span>(<span class="fn">VALUES</span>('Date'[QuarterYear]), Fact_Budget[QuarterYear])
    )
<span class="kw">VAR</span> MonthsInQ = <span class="fn">COUNTROWS</span>(<span class="fn">VALUES</span>('Date'[MonthNum]))
<span class="kw">RETURN</span>
<span class="fn">DIVIDE</span>(QuarterBudget, MonthsInQ, <span class="num">0</span>)
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Best practice:</strong> Store budget at the finest granularity available. Splitting in Power Query is easier and more accurate than splitting in DAX.</p>
</div>
</div>
<div class="lesson-card">
<h3>🏆 Pro Tips</h3>
<ul>
<li><strong>YearMonth as Integer:</strong> Store YearMonth as 202401 not "2024-01". Numbers filter and compare faster.</li>
<li><strong>Always use DIVIDE:</strong> In Variance % and Achievement %, DIVIDE protects automatically against divide-by-zero.</li>
<li><strong>Pre-split budget in Power Query:</strong> If budget is annual or quarterly, divide it there before loading the model.</li>
<li><strong>Test with a Matrix visual:</strong> Put Months on Rows and check Budget vs Actuals side by side. Repeated or strange numbers mean TREATAS mapping is wrong.</li>
<li><strong>Add Budget Remaining:</strong> [Budget Remaining] = [Budget YTD] - [Actuals YTD] helps stakeholders track how much budget is left.</li>
</ul>
</div>` }],
  },
  "dax-performance": {
    eyebrow: "04 · 13 — أداء DAX وتحسينه",
    title: "أداء DAX وتحسينه — اكتب Measures أسرع وأذكى",
    lede: "الكود الصح مش بس كود يشتغل — هو كود يشتغل بسرعة. تعلّم كيف DAX بيشتغل من الداخل وما هي الأنماط اللي بتبطّئ التقرير.",
    en_eyebrow: "04 · 13 — DAX Performance Tuning",
    en_lede: "Correct DAX is not just DAX that works — it is DAX that works fast. Learn how DAX evaluates internally and which patterns silently slow your reports.",
    sectionId: "dax-performance",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>كيف DAX بيشتغل من الداخل؟</h3>
      <p>لتحسين الأداء، لازم تعرف إن DAX بيشتغل عبر <strong>محركين</strong>:</p>
      <table class="compare-table">
        <tr>
          <th>Storage Engine (SE)</th>
          <th>Formula Engine (FE)</th>
        </tr>
        <tr>
          <td>يقرأ البيانات من الذاكرة بسرعة عالية</td>
          <td>ينفّذ منطق DAX المعقد</td>
        </tr>
        <tr>
          <td>يعمل بشكل متوازٍ (Parallel)</td>
          <td>يعمل بشكل خطي (Single-threaded)</td>
        </tr>
        <tr>
          <td>أسرع بكتير — استخدمه قدر الإمكان</td>
          <td>أبطأ — قلّل عمله قدر الإمكان</td>
        </tr>
        <tr>
          <td>يعمل مع Column Predicates البسيطة</td>
          <td>يعمل مع FILTER + Iterators</td>
        </tr>
      </table>
      <p><strong>القاعدة الذهبية:</strong> اجعل Storage Engine يعمل أكبر جزء من العمل، وقلّل عمل Formula Engine.</p>
    </div>

    <div class="lesson-card">
      <h3>Column Predicates بدل FILTER — الفرق الأكبر في الأداء</h3>
      <div class="code-block">
<span class="cm">-- ❌ بطيء: FILTER يشتغل بـ Formula Engine</span>
Slow Sales =
<span class="fn">CALCULATE</span>(
    <span class="fn">SUM</span>(Fact_Sales[Amount]),
    <span class="fn">FILTER</span>(Fact_Sales, Fact_Sales[Category] = <span class="str">"Electronics"</span>)
)

<span class="cm">-- ✅ أسرع: Column Predicate → Storage Engine بيعمل الفلتر</span>
Fast Sales =
<span class="fn">CALCULATE</span>(
    <span class="fn">SUM</span>(Fact_Sales[Amount]),
    Dim_Product[Category] = <span class="str">"Electronics"</span>
)

<span class="cm">-- ❌ بطيء: FILTER على Fact Table الكبيرة مباشرة</span>
Very Slow =
<span class="fn">CALCULATE</span>(
    <span class="fn">SUM</span>(Fact_Sales[Amount]),
    <span class="fn">FILTER</span>(Fact_Sales, Fact_Sales[Amount] > <span class="num">1000</span>)
)

<span class="cm">-- ✅ أحسن: FILTER على VALUES الأصغر</span>
Better =
<span class="fn">CALCULATE</span>(
    <span class="fn">SUM</span>(Fact_Sales[Amount]),
    <span class="fn">FILTER</span>(
        <span class="fn">VALUES</span>(Fact_Sales[OrderID]),
        <span class="fn">CALCULATE</span>(<span class="fn">SUM</span>(Fact_Sales[Amount])) > <span class="num">1000</span>
    )
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>VAR/RETURN — أداء أفضل وكود أنظف</h3>
      <p>DAX بيحسب كل VAR <strong>مرة واحدة فقط</strong> — مش كل مرة بتظهر في التعبير:</p>
      <div class="code-block">
<span class="cm">-- ❌ بطيء: نفس الحساب يتنفذ 3 مرات</span>
Slow Version =
<span class="fn">IF</span>(
    <span class="fn">DIVIDE</span>([Sales], <span class="fn">CALCULATE</span>([Sales], <span class="fn">ALL</span>(Fact_Sales)), <span class="num">0</span>) > <span class="num">0.1</span>,
    <span class="fn">DIVIDE</span>([Sales], <span class="fn">CALCULATE</span>([Sales], <span class="fn">ALL</span>(Fact_Sales)), <span class="num">0</span>) * <span class="num">100</span>,
    <span class="fn">DIVIDE</span>([Sales], <span class="fn">CALCULATE</span>([Sales], <span class="fn">ALL</span>(Fact_Sales)), <span class="num">0</span>)
)

<span class="cm">-- ✅ أسرع: الحساب مرة واحدة في VAR</span>
Fast Version =
<span class="kw">VAR</span> Pct = <span class="fn">DIVIDE</span>([Sales], <span class="fn">CALCULATE</span>([Sales], <span class="fn">ALL</span>(Fact_Sales)), <span class="num">0</span>)
<span class="kw">RETURN</span>
<span class="fn">IF</span>(Pct > <span class="num">0.1</span>, Pct * <span class="num">100</span>, Pct)
      </div>
    </div>

    <div class="lesson-card">
      <h3>DIVIDE بدل العلامة /</h3>
      <div class="code-block">
<span class="cm">-- ❌ خطر: لو المقام صفر → خطأ في الـ Visual</span>
Risky Margin = [Total Profit] / [Total Sales]

<span class="cm">-- ✅ آمن: قيمة افتراضية عند صفر</span>
Safe Margin  = <span class="fn">DIVIDE</span>([Total Profit], [Total Sales], <span class="num">0</span>)

<span class="cm">-- ✅ مع BLANK() لـ KPI Cards أنظف</span>
Clean Margin = <span class="fn">DIVIDE</span>([Total Profit], [Total Sales], <span class="fn">BLANK</span>())
      </div>
      <div class="tip-box">
        <div class="icon">💡</div>
        <p>DIVIDE مع BLANK() أفضل في الـ KPI Cards لأنه بيحافظ على نظافة الـ Visual عند البيانات الناقصة أو أول الأشهر.</p>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Performance Analyzer — شوف المشكلة قبل ما تحلها</h3>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>فتح Performance Analyzer</h4>
            <p>View → Performance Analyzer → Start Recording</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>تفاعل مع التقرير</h4>
            <p>اضغط على Slicers أو غيّر الصفحات. كل Visual هيسجّل وقت تنفيذه.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>راجع النتائج</h4>
            <p>لكل Visual:<br>• <strong>DAX Query:</strong> وقت تنفيذ الـ Measure<br>• <strong>Visual Display:</strong> وقت رسم الـ Visual<br>• <strong>Other:</strong> وقت الشبكة والتحضير</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">4</div>
          <div class="step-content">
            <h4>Copy Query للتحليل المتعمق</h4>
            <p>اضغط "Copy Query" على Visual بطيء وحطّه في DAX Studio (أداة خارجية مجانية) للتحليل العميق وقراءة الـ query plan.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>الأنماط المشهورة اللي بتبطّئ DAX</h3>
      <div class="code-block">
<span class="cm">-- ❌ CALCULATE متداخلة بدون داعٍ</span>
Bad =
<span class="fn">CALCULATE</span>(
    <span class="fn">CALCULATE</span>([Sales], <span class="fn">FILTER</span>(Fact_Sales, Fact_Sales[Amt] > <span class="num">100</span>)),
    Dim_Region[Region] = <span class="str">"Cairo"</span>
)

<span class="cm">-- ✅ ادمج الفلاتر في CALCULATE واحدة</span>
Good =
<span class="fn">CALCULATE</span>(
    [Sales],
    Fact_Sales[Amt] > <span class="num">100</span>,
    Dim_Region[Region] = <span class="str">"Cairo"</span>
)

<span class="cm">-- ❌ SUMX على ملايين الصفوف</span>
Slow SUMX =
<span class="fn">SUMX</span>(Fact_Sales, Fact_Sales[Qty] * Fact_Sales[Price])

<span class="cm">-- ✅ Calculated Column + SUM</span>
LineAmount = Fact_Sales[Qty] * Fact_Sales[Price]  <span class="cm">-- عمود محسوب</span>
Fast       = <span class="fn">SUM</span>(Fact_Sales[LineAmount])           <span class="cm">-- ثم SUM</span>
      </div>
    </div>

    <div class="lesson-card">
      <h3>🏆 Pro Tips للأداء</h3>
      <ul>
        <li><strong>Column Predicate > FILTER دايماً:</strong> CALCULATE([M], Table[Col] = "X") أسرع لأنه يشتغل بـ Storage Engine مش Formula Engine.</li>
        <li><strong>FILTER على Dimension مش Fact:</strong> لو محتاج FILTER، فلتر على Dim_Product (آلاف الصفوف) مش Fact_Sales (ملايين الصفوف).</li>
        <li><strong>VALUES أسرع من FILTER(ALL(...)):</strong> استخدم VALUES(Table[Col]) بدل FILTER(ALL(Table), ...) للحصول على قيم فريدة.</li>
        <li><strong>قيّم الأداء قبل ما تحسّن:</strong> استخدم Performance Analyzer لتحديد Visual البطيء أولاً. بعدين حسّن الـ Measure المسبّبة للبطء.</li>
        <li><strong>Calculated Column للعمليات الثابتة:</strong> لو الحساب ثابت ومش بيتغير بالفلاتر (زي Qty × Price)، خليه Calculated Column بدل SUMX.</li>
      </ul>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>How DAX works internally</h3>
<p>To improve performance you need to know that DAX runs through <strong>two engines</strong>:</p>
<table class="compare-table">
<tr>
<th>Storage Engine (SE)</th>
<th>Formula Engine (FE)</th>
</tr>
<tr>
<td>Reads data from memory at high speed</td>
<td>Executes complex DAX logic</td>
</tr>
<tr>
<td>Works in parallel</td>
<td>Works single-threaded</td>
</tr>
<tr>
<td>Much faster — maximize its use</td>
<td>Slower — minimize its work</td>
</tr>
<tr>
<td>Works with simple column predicates</td>
<td>Works with FILTER and iterators</td>
</tr>
</table>
<p><strong>Golden rule:</strong> Let Storage Engine do as much work as possible and reduce what Formula Engine handles.</p>
</div>
<div class="lesson-card">
<h3>Column Predicates vs FILTER — the biggest performance difference</h3>
<div class="code-block">
<span class="cm">-- ❌ Slow: FILTER runs through Formula Engine (full table scan)</span>
Slow Sales =
<span class="fn">CALCULATE</span>(
    <span class="fn">SUM</span>(Fact_Sales[Amount]),
    <span class="fn">FILTER</span>(Fact_Sales, Fact_Sales[Category] = <span class="str">"Electronics"</span>)
)

<span class="cm">-- ✅ Faster: Column Predicate → Storage Engine handles the filter</span>
Fast Sales =
<span class="fn">CALCULATE</span>(
    <span class="fn">SUM</span>(Fact_Sales[Amount]),
    Dim_Product[Category] = <span class="str">"Electronics"</span>
)

<span class="cm">-- ❌ Very slow: FILTER directly on large Fact Table</span>
Very Slow =
<span class="fn">CALCULATE</span>(
    <span class="fn">SUM</span>(Fact_Sales[Amount]),
    <span class="fn">FILTER</span>(Fact_Sales, Fact_Sales[Amount] > <span class="num">1000</span>)
)

<span class="cm">-- ✅ Better: FILTER on smaller VALUES table</span>
Better =
<span class="fn">CALCULATE</span>(
    <span class="fn">SUM</span>(Fact_Sales[Amount]),
    <span class="fn">FILTER</span>(
        <span class="fn">VALUES</span>(Fact_Sales[OrderID]),
        <span class="fn">CALCULATE</span>(<span class="fn">SUM</span>(Fact_Sales[Amount])) > <span class="num">1000</span>
    )
)
</div>
</div>
<div class="lesson-card">
<h3>VAR/RETURN — Better performance and cleaner code</h3>
<p>DAX evaluates each VAR <strong>only once</strong> — not every time it appears in the expression:</p>
<div class="code-block">
<span class="cm">-- ❌ Slow: same calculation runs 3 times</span>
Slow Version =
<span class="fn">IF</span>(
    <span class="fn">DIVIDE</span>([Sales], <span class="fn">CALCULATE</span>([Sales], <span class="fn">ALL</span>(Fact_Sales)), <span class="num">0</span>) > <span class="num">0.1</span>,
    <span class="fn">DIVIDE</span>([Sales], <span class="fn">CALCULATE</span>([Sales], <span class="fn">ALL</span>(Fact_Sales)), <span class="num">0</span>) * <span class="num">100</span>,
    <span class="fn">DIVIDE</span>([Sales], <span class="fn">CALCULATE</span>([Sales], <span class="fn">ALL</span>(Fact_Sales)), <span class="num">0</span>)
)

<span class="cm">-- ✅ Faster: calculate once in VAR</span>
Fast Version =
<span class="kw">VAR</span> Pct = <span class="fn">DIVIDE</span>([Sales], <span class="fn">CALCULATE</span>([Sales], <span class="fn">ALL</span>(Fact_Sales)), <span class="num">0</span>)
<span class="kw">RETURN</span>
<span class="fn">IF</span>(Pct > <span class="num">0.1</span>, Pct * <span class="num">100</span>, Pct)
</div>
</div>
<div class="lesson-card">
<h3>DIVIDE instead of /</h3>
<div class="code-block">
<span class="cm">-- ❌ Dangerous: denominator is zero → error in the visual</span>
Risky Margin = [Total Profit] / [Total Sales]

<span class="cm">-- ✅ Safe: default value when zero</span>
Safe Margin  = <span class="fn">DIVIDE</span>([Total Profit], [Total Sales], <span class="num">0</span>)

<span class="cm">-- ✅ With BLANK() for cleaner KPI Cards</span>
Clean Margin = <span class="fn">DIVIDE</span>([Total Profit], [Total Sales], <span class="fn">BLANK</span>())
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p>DIVIDE with BLANK() is better for KPI Cards because it keeps the visual clean when data is missing or at the start of a period.</p>
</div>
</div>
<div class="lesson-card">
<h3>Performance Analyzer — diagnose before optimizing</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Open Performance Analyzer</h4>
<p>View → Performance Analyzer → Start Recording</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Interact with the report</h4>
<p>Click Slicers or change pages. Each visual records its execution time.</p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Review the results</h4>
<p>For each visual:<br>• <strong>DAX Query:</strong> time to run the measure<br>• <strong>Visual Display:</strong> time to render the visual<br>• <strong>Other:</strong> network and preparation time</p>
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<h4>Copy Query for deep analysis</h4>
<p>Click "Copy Query" on a slow visual and paste it into DAX Studio (free external tool) for deep analysis and query plan inspection.</p>
</div>
</div>
</div>
</div>
<div class="lesson-card">
<h3>Common DAX patterns that hurt performance</h3>
<div class="code-block">
<span class="cm">-- ❌ Nested CALCULATE without reason</span>
Bad =
<span class="fn">CALCULATE</span>(
    <span class="fn">CALCULATE</span>([Sales], <span class="fn">FILTER</span>(Fact_Sales, Fact_Sales[Amt] > <span class="num">100</span>)),
    Dim_Region[Region] = <span class="str">"Cairo"</span>
)

<span class="cm">-- ✅ Merge filters into one CALCULATE</span>
Good =
<span class="fn">CALCULATE</span>(
    [Sales],
    Fact_Sales[Amt] > <span class="num">100</span>,
    Dim_Region[Region] = <span class="str">"Cairo"</span>
)

<span class="cm">-- ❌ SUMX on a million-row Fact Table</span>
Slow SUMX =
<span class="fn">SUMX</span>(Fact_Sales, Fact_Sales[Qty] * Fact_Sales[Price])

<span class="cm">-- ✅ Calculated Column + SUM</span>
LineAmount = Fact_Sales[Qty] * Fact_Sales[Price]
Fast       = <span class="fn">SUM</span>(Fact_Sales[LineAmount])
</div>
</div>
<div class="lesson-card">
<h3>🏆 Performance Pro Tips</h3>
<ul>
<li><strong>Column Predicate is always faster than FILTER:</strong> CALCULATE([M], Table[Col] = "X") runs through Storage Engine, not Formula Engine.</li>
<li><strong>FILTER Dimension not Fact:</strong> If you must use FILTER, run it on Dim_Product (thousands of rows) not Fact_Sales (millions of rows).</li>
<li><strong>VALUES is faster than FILTER(ALL(...)):</strong> Use VALUES(Table[Col]) instead of FILTER(ALL(Table), ...) to get distinct values.</li>
<li><strong>Diagnose before optimizing:</strong> Use Performance Analyzer to identify the slow visual first, then fix the specific measure causing the slowdown.</li>
<li><strong>Calculated Column for fixed math:</strong> If a calculation never changes with filters (like Qty × Price), make it a Calculated Column instead of repeating SUMX.</li>
</ul>
</div>` }],
  },
  "dax-reference": {
    eyebrow: "04 · 14 — مرجع DAX الكامل",
    title: "جدول المرجع الشامل — DAX Functions Reference",
    lede: "مرجع سريع لكل فئات دوال DAX مع أبرز الدوال في كل فئة. احتفظ بهذه الصفحة كمرجع دائم.",
    en_eyebrow: "04 · 14 — DAX Reference",
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
      <h3>ðŸ” دوال التصفية (Filter)</h3>
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
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>📊 Aggregation functions</h3>
<table class="compare-table">
<tr><th>Function</th><th>Use</th><th>note</th></tr>
<tr><td><strong>SUM</strong></td><td>Column sum</td><td>Fastest - Always use it if the column is present</td></tr>
<tr><td><strong>SUMX</strong></td><td>Sum of expression (row by row)</td><td>For multiplication and division at the row level</td></tr>
<tr><td><strong>COUNT / COUNTA</strong></td><td>Count numbers/texts</td><td>COUNTA Counts everything that is not empty</td></tr>
<tr><td><strong>COUNTROWS</strong></td><td>Count table rows</td><td>Faster than COUNT In most cases</td></tr>
<tr><td><strong>DISTINCTCOUNT</strong></td><td>Count unique values</td><td>For customers, products, branches</td></tr>
<tr><td><strong>AVERAGE / AVERAGEX</strong></td><td>Arithmetic average</td><td>AVERAGEX To average a complex expression</td></tr>
<tr><td><strong>MAX / MIN</strong></td><td>Highest/lowest value</td><td>It works on dates too</td></tr>
</table>
</div>
<div class="lesson-card">
<h3>ðŸ” Filter functions</h3>
<table class="compare-table">
<tr><th>Function</th><th>Use</th><th>note</th></tr>
<tr><td><strong>CALCULATE</strong></td><td>Edit Filter Context</td><td>The strongest function in DAX</td></tr>
<tr><td><strong>FILTER</strong></td><td>Filter a table with a condition</td><td>Iterator — Use with caution on large tables</td></tr>
<tr><td><strong>ALL</strong></td><td>Delete all filters</td><td>Returns all table/column values</td></tr>
<tr><td><strong>ALLEXCEPT</strong></td><td>Delete filters except columns</td><td>For partial percentages (% of category)</td></tr>
<tr><td><strong>ALLSELECTED</strong></td><td>Delete filters while respecting Slicer</td><td>For the percentage of all in the Slicer range</td></tr>
<tr><td><strong>REMOVEFILTERS</strong></td><td>same ALL — Clearer in intention</td><td>Best Practice Hadith</td></tr>
<tr><td><strong>KEEPFILTERS</strong></td><td>Adding a filter without replacing it</td><td>Filter intersection</td></tr>
<tr><td><strong>VALUES</strong></td><td>Unique values ​​while respecting the filter</td><td>Different from ALL</td></tr>
</table>
</div>
<div class="lesson-card">
<h3>📅 Time Intelligence functions</h3>
<table class="compare-table">
<tr><th>Function</th><th>Use</th></tr>
<tr><td><strong>TOTALYTD / TOTALMTD / TOTALQTD</strong></td><td>Cumulative from the beginning of the year/month/quarter</td></tr>
<tr><td><strong>SAMEPERIODLASTYEAR</strong></td><td>The same period last year</td></tr>
<tr><td><strong>DATEADD</strong></td><td>Move the time period</td></tr>
<tr><td><strong>PARALLELPERIOD</strong></td><td>corresponding full period</td></tr>
<tr><td><strong>DATESINPERIOD</strong></td><td>A time window of a specified size</td></tr>
<tr><td><strong>PREVIOUSMONTH / PREVIOUSQUARTER</strong></td><td>The entire previous month/quarter</td></tr>
<tr><td><strong>DATESYTD</strong></td><td>All dates year so far</td></tr>
</table>
</div>
<div class="lesson-card">
<h3>🔠 Logical &amp; Text functions</h3>
<table class="compare-table">
<tr><th>Function</th><th>Use</th></tr>
<tr><td><strong>IF / SWITCH</strong></td><td>Conditional branching</td></tr>
<tr><td><strong>AND / OR / NOT</strong></td><td>Compound terms</td></tr>
<tr><td><strong>IFERROR / ISBLANK / ISERROR</strong></td><td>Dealing with errors and blanks</td></tr>
<tr><td><strong>FORMAT</strong></td><td>Format a number or date as text</td></tr>
<tr><td><strong>CONCATENATE / CONCATENATEX</strong></td><td>Merge texts/merge table values</td></tr>
<tr><td><strong>LEFT / RIGHT / MID</strong></td><td>Extract part of the text</td></tr>
<tr><td><strong>TRIM / SUBSTITUTE</strong></td><td>Text cleaning</td></tr>
<tr><td><strong>SEARCH / FIND</strong></td><td>Search within text</td></tr>
</table>
</div>
<div class="lesson-card">
<h3>🔗 Relationship functions</h3>
<table class="compare-table">
<tr><th>Function</th><th>Use</th></tr>
<tr><td><strong>RELATED</strong></td><td>Fetch value from linked table (in Columns)</td></tr>
<tr><td><strong>RELATEDTABLE</strong></td><td>Fetch entire linked table (in Measures)</td></tr>
<tr><td><strong>USERELATIONSHIP</strong></td><td>Activate a temporarily dormant relationship</td></tr>
<tr><td><strong>CROSSFILTER</strong></td><td>Temporarily change the filtering direction</td></tr>
<tr><td><strong>TREATAS</strong></td><td>Treat a column as if it were from another table</td></tr>
</table>
</div>
<div class="tip-box">
<div class="icon">🚀</div>
<p><strong>The fastest way to learn DAX:</strong> When faced with a new problem, go to dax.guide — The official website for documenting functions DAX With examples and difficulty level. Every function mentioned here is included with a detailed explanation and application example.</p>
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
      <h3>مقدمة: رسم البيانات، ليس مجرد جداول</h3>
      <p>الدماغ البشري يستوعب <strong>الصور بـ 60,000 مرة أسرع</strong> من النصوص. الشارت الصحيح يحكي القصة في ثانية. الشارت الخاطئ يخفيها في رسوم معقدة.</p>
      <p><strong>القاعدة الذهبية:</strong> اختر الشارت الذي يظهر النمط (Pattern) الذي تريد إيصاله بأسرع وقت ممكن.</p>
    </div>

    <div class="lesson-card">
      <h3>المخططات الأساسية (Core Charts)</h3>
      <ul>
        <li><strong>Column / Bar Chart:</strong> مقارنة القيم عبر فئات. استخدمه للمقارنات المباشرة (مبيعات الدول، إيرادات المنتجات). ترتيب الأعمدة أفقياً (من الأعلى للأسفل) يسهل القراءة.</li>
        <li><strong>Line Chart:</strong> عرض التطور الزمني والاتجاهات. مثالي للـ Time Series (المبيعات عبر 12 شهر). أضف كسر خط (Dashed) لـ Forecasts.</li>
        <li><strong>Combo Chart:</strong> دمج Column + Line في نفس الشارت. مثال: عرض المبيعات (عمود) والنسبة المئوية (خط) معاً.</li>
        <li><strong>Area Chart:</strong> مثل Line لكن بملء اللون تحت الخط. يفضل مع فئات قليلة جداً فقط (لا تجعلها ملبكة).</li>
        <li><strong>Scatter / Bubble Chart:</strong> عرض العلاقة بين متغيرين (Correlation). استخدم الحجم كمتغير ثالث (Bubble Size).</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>المخططات المتخصصة (Specialized)</h3>
      <ul>
        <li><strong>Waterfall Chart:</strong> عرض التغيير التراكمي (كيف انتقل الربح من 100 إلى 250). شارت الـ Income Statement بالذات.</li>
        <li><strong>Treemap:</strong> عرض التسلسل الهرمي (Category → Subcategory → Product)، حيث الحجم يمثل القيمة. بديل بصري رائع للـ Pie.</li>
        <li><strong>Gauge / KPI:</strong> عرض KPI واحد ضد Target (المبيعات الفعلية مقابل Target).</li>
        <li><strong>Card:</strong> أبسط شارت — عدد واحد كبير. استخدمه لـ KPIs في أعلى التقرير (إجمالي الإيرادات).</li>
        <li><strong>Matrix / Table:</strong> عرض بيانات تفصيلية في صفوف/أعمدة. مثل Pivot Table. أضف Conditional Formatting للألوان.</li>
        <li><strong>Ribbon Chart:</strong> عرض الترتيب المتغير عبر الزمن (Top 5 Products تتغير ترتيبها كل شهر).</li>
        <li><strong>Shape Map / Map:</strong> خريطة جغرافية. استخدم للبيانات الجغرافية (مبيعات حسب الدول / المحافظات).</li>
        <li><strong>Decomposition Tree:</strong> تحليل Root Cause. "لماذا انخفضت المبيعات هذا الشهر؟"</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>الـ Field Wells — التحكم بأبعاد الشارت</h3>
      <p>كل شارت له <strong>Field Wells</strong> (المناطق التي تسحب فيها الأعمدة):</p>
      <ul>
        <li><strong>Axis (Category Axis):</strong> الفئات على المحور الأفقي (المنتجات، الدول، الأشهر).</li>
        <li><strong>Legend:</strong> ألوان مختلفة لكل مجموعة فرعية (Sales by Region).</li>
        <li><strong>Values:</strong> القيم العددية التي تعرض في الشارت (إجمالي المبيعات، الربح، العدد).</li>
        <li><strong>Tooltips:</strong> معلومات إضافية تظهر عند تمرير الماوس.</li>
        <li><strong>Drill Through Fields:</strong> للانتقال لصفحات تفصيلية.</li>
      </ul>
      <p><strong>نصيحة:</strong> استخدم درجات (Hierarchy) في Category — مثلاً Year → Month → Day. ثم استخدم الـ Expand في الشارت للتنقيب التدريجي.</p>
    </div>

    <div class="lesson-card">
      <h3>تنسيق الشارت (Formatting)</h3>
      <p>بعد إنشاء الشارت، انقر على أيقونة الفرشاة (Format) لتخصيصه:</p>
      <ul>
        <li><strong>Data Labels:</strong> اعرض الأرقام على كل عمود / نقطة (مثل "500K").</li>
        <li><strong>Axis Settings:</strong> تحكم بنطاق المحور (Min/Max)، عدد الخطوط (Grid Lines).</li>
        <li><strong>Legend Placement:</strong> أين تظهر المفاتيح (Right, Bottom, Top).</li>
        <li><strong>Title & Subtitle:</strong> عنوان واضح يشرح ماذا يرى القارئ.</li>
        <li><strong>Colors:</strong> اختر Palette واحدة متناسقة (لا 10 ألوان).</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>متى لا تستخدم أنواع معينة</h3>
      <ul>
        <li><strong>❌ Pie Chart بأكثر من 5 أجزاء:</strong> تصبح غير مقروءة. استخدم Treemap بدلاً منها.</li>
        <li><strong>❌ 3D Charts:</strong> تشوه الإدراك البصري (الأبعاد تبدو مختلفة). استخدم 2D.</li>
        <li><strong>❌ Dual Axis بمقاييس مختلفة جداً:</strong> تخدع القارئ. مثال: مبيعات (بالملايين) مقابل عدد الموظفين (عشرات).</li>
        <li><strong>❌ Line Chart مع فئات كثيرة:</strong> تصبح شبكة معقدة. استخدم Small Multiples بدلاً منها.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>التفاعل بين الشارتات (Cross-Filtering)</h3>
      <p>من أجمل مميزات Power BI: الشارتات تتفاعل مع بعضها. لو ضغطت على "مصر" في خريطة، كل أرقام التقرير ستتغير فوراً.</p>
      <ul>
        <li>كل شارت يرسل Filter للشارتات الأخرى عند الضغط عليه.</li>
        <li>يمكنك تعطيل التفاعل من خلال Format → Interaction → Off (إذا كان مزعجاً).</li>
        <li>استخدم Bookmarks لحفظ حالات مختلفة من التقرير (مثل Filters).</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Small Multiples — التنقيب عبر الفئات</h3>
      <p>بدل خط واحد ملبك مع 20 منتج، أنشئ 20 شارت صغير جنباً إلى جنب (واحد لكل منتج). يسهل المقارنة والبحث عن النمط.</p>
      <ul>
        <li>في خصائص الشارت، اسحب عمود في حقل "Small Multiples".</li>
        <li>مثالي للـ Scatter plots وقوائم الخطوط والمخططات التفصيلية.</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">🎨</div>
      <p><strong>نصيحة تصميم:</strong> لا تضع أكثر من 5 إلى 7 رسومات بيانية في الصفحة الواحدة. اترك مساحات فارغة (White Space). تقرير نظيف مقروء أفضل من تقرير كثيف معقد.</p>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>تحذير:</strong> في Power BI Desktop، الشارتات Interactive (تفاعلية). في Power BI Service، لا تنسَ أن Mobile users قد لا يرى التفاصيل الدقيقة على الشاشة الصغيرة. اختبر على Mobile.</p>
    </div>

    <div class="lesson-card">
      <h3>🏆 Pro Tips من الخبرة الميدانية</h3>
      <ul>
        <li><strong>قاعدة الألوان:</strong> استخدم نفس اللون لنفس الفئة عبر كل الشارتات. اللون الأحمر = مشكلة، الأخضر = نجاح. ثبّت هذا في ذهن المستخدم.</li>
        <li><strong>لا تستخدم Pie Charts:</strong> معظم المحترفين يقولون: Pie Charts سيئة. استخدم Bar أو Treemap بدلاً منها — أسهل قراءة.</li>
        <li><strong>Line Chart مع التنبؤ:</strong> أضف خط مقطع (dashed line) للتنبؤات. الناس فوراً يفهموا الفرق بين الماضي والمستقبل.</li>
        <li><strong>Data Labels = أسرع فهم:</strong> أضف أرقام على كل شريط أو نقطة. لا تجعل المستخدم يقدّر القيمة من العيون.</li>
        <li><strong>White Space = نظافة:</strong> لا تحشر 20 شارت في صفحة واحدة. 5 شارتات جيدة أفضل من 20 سيئة. اترك مساحات فارغة.</li>
      </ul>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>Introduction: Visualize Data, Don't Tabulate It</h3>
<p>The human brain processes <strong>images 60,000x faster</strong> than text. The right chart tells the story in one second. The wrong chart hides it in complexity.</p>
<p><strong>The Golden Rule:</strong> Choose the chart that shows the pattern you want to communicate as fast as possible.</p>
</div>

<div class="lesson-card">
<h3>Core Charts</h3>
<ul>
<li><strong>Column / Bar Chart:</strong> Compare values across categories. Use for direct comparisons (sales by country, revenue by product). Horizontal bars (top-to-bottom) are easier to read.</li>
<li><strong>Line Chart:</strong> Show trends and time evolution. Perfect for Time Series (sales over 12 months). Add dashed lines for forecasts.</li>
<li><strong>Combo Chart:</strong> Mix Column + Line in the same chart. Example: show Sales (column) and Margin % (line) together.</li>
<li><strong>Area Chart:</strong> Like Line but with color fill. Use only with very few categories (don't make it messy).</li>
<li><strong>Scatter / Bubble Chart:</strong> Show relationship between two variables (correlation). Use bubble size as a third variable.</li>
</ul>
</div>

<div class="lesson-card">
<h3>Specialized Charts</h3>
<ul>
<li><strong>Waterfall Chart:</strong> Show cumulative change (how profit moved from 100 to 250). Essential for Income Statements.</li>
<li><strong>Treemap:</strong> Show hierarchy (Category → Subcategory → Product), where size = value. Beautiful visual alternative to Pie.</li>
<li><strong>Gauge / KPI:</strong> Show one KPI against a Target (actual sales vs target).</li>
<li><strong>Card:</strong> Simplest chart — one big number. Use for KPIs at the top (total revenue).</li>
<li><strong>Matrix / Table:</strong> Display detailed data in rows/columns. Like Pivot Table. Add Conditional Formatting for colors.</li>
<li><strong>Ribbon Chart:</strong> Show changing rankings over time (Top 5 Products change position each month).</li>
<li><strong>Shape Map / Map:</strong> Geographic map. Use for geographic data (sales by country / region).</li>
<li><strong>Decomposition Tree:</strong> Root cause analysis. "Why did sales drop this month?"</li>
</ul>
</div>

<div class="lesson-card">
<h3>Field Wells — Controlling Chart Dimensions</h3>
<p>Every chart has <strong>Field Wells</strong> (zones where you drag columns):</p>
<ul>
<li><strong>Axis (Category Axis):</strong> Categories on the horizontal axis (products, countries, months).</li>
<li><strong>Legend:</strong> Different colors for each subgroup (sales by region).</li>
<li><strong>Values:</strong> Numeric values displayed in the chart (total sales, profit, count).</li>
<li><strong>Tooltips:</strong> Additional information on hover.</li>
<li><strong>Drill Through Fields:</strong> Navigation to detailed pages.</li>
</ul>
<p><strong>Tip:</strong> Use hierarchies in Category — e.g., Year → Month → Day. Then use Expand in the chart for progressive exploration.</p>
</div>

<div class="lesson-card">
<h3>Chart Formatting</h3>
<p>After creating the chart, click the Format icon (brush) to customize:</p>
<ul>
<li><strong>Data Labels:</strong> Show numbers on each bar / point (e.g., "500K").</li>
<li><strong>Axis Settings:</strong> Control axis range (Min/Max), grid lines.</li>
<li><strong>Legend Placement:</strong> Where legends appear (Right, Bottom, Top).</li>
<li><strong>Title & Subtitle:</strong> Clear title explaining what the reader sees.</li>
<li><strong>Colors:</strong> Choose one cohesive palette (not 10 different colors).</li>
</ul>
</div>

<div class="lesson-card">
<h3>When NOT to Use Certain Types</h3>
<ul>
<li><strong>❌ Pie Chart with more than 5 slices:</strong> Becomes unreadable. Use Treemap instead.</li>
<li><strong>❌ 3D Charts:</strong> Distort visual perception (dimensions look different). Use 2D.</li>
<li><strong>❌ Dual Axis with very different scales:</strong> Deceives the reader. Example: sales (millions) vs employee count (dozens).</li>
<li><strong>❌ Line Chart with too many categories:</strong> Becomes a messy web. Use Small Multiples instead.</li>
</ul>
</div>

<div class="lesson-card">
<h3>Cross-Filtering Interaction</h3>
<p>One of Power BI's best features: charts interact with each other. Click "Egypt" on a map, and all report numbers instantly update.</p>
<ul>
<li>Each chart sends a Filter to other charts when clicked.</li>
<li>You can disable interaction via Format → Interaction → Off (if annoying).</li>
<li>Use Bookmarks to save different states of the report (with different Filters).</li>
</ul>
</div>

<div class="lesson-card">
<h3>Small Multiples — Exploring Across Categories</h3>
<p>Instead of one messy line with 20 products, create 20 small charts side-by-side (one per product). Easier to compare and spot patterns.</p>
<ul>
<li>In chart properties, drag a column to the "Small Multiples" field.</li>
<li>Perfect for scatter plots, line charts, and detailed breakdowns.</li>
</ul>
</div>

<div class="tip-box">
<div class="icon">🎨</div>
<p><strong>Design Tip:</strong> Don't place more than 5-7 charts per page. Leave white space. A clean, readable report beats a dense, complex one.</p>
</div>

<div class="warn-box">
<div class="icon">⚠️</div>
<p><strong>Warning:</strong> In Power BI Desktop, charts are interactive. In Power BI Service, remember mobile users won't see fine details on small screens. Test on mobile.</p>
</div>

<div class="lesson-card">
<h3>🏆 Pro Tips from field experience</h3>
<ul>
<li><strong>Color rule:</strong> Use the same color for the same category across all charts. Red = problem, Green = success. Embed this in the user's mind.</li>
<li><strong>Don't use Pie Charts:</strong> Most professionals say: Pie Charts are bad. Use Bar or Treemap instead — easier to read.</li>
<li><strong>Line Chart with forecast:</strong> Add a dashed line for forecasts. People instantly understand the difference between past and future.</li>
<li><strong>Data Labels = Faster understanding:</strong> Add numbers to each bar or point. Don't make the user estimate the value from the eyes.</li>
<li><strong>White Space = Cleanliness:</strong> Don't cram 20 charts on one page. 5 good charts beat 20 bad ones. Leave empty spaces.</li>
</ul>
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
      <h3>أنواع Slicers المختلفة</h3>
      <p>Power BI يوفر عدة أنواع slicers لحالات استخدام مختلفة:</p>
      <ul>
        <li><strong>List Slicer:</strong> قائمة بجميع القيم (الافتراضي). مثالي للفئات القليلة (منطقة، منتج).</li>
        <li><strong>Dropdown Slicer:</strong> قائمة منسدلة توفر مساحة. استخدمه عندما تكون القيم كثيرة جداً.</li>
        <li><strong>Tile Slicer:</strong> أزرار قابلة للنقر. جميل للـ UI لكن يأخذ مساحة.</li>
        <li><strong>Between Slicer:</strong> نطاق (Min-Max). مثالي للأرقام والتواريخ (السعر بين 100-500 ريال).</li>
        <li><strong>Relative Date Slicer:</strong> تواريخ نسبية (آخر 30 يوم، آخر 12 شهر). لـ التقارير الديناميكية.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>تخصيص Slicer Header و Styling</h3>
      <p>اختر Visual ← Format ← Slicer Header:</p>
      <ul>
        <li><strong>Show Header:</strong> إظهار/إخفاء العنوان.</li>
        <li><strong>Header Text:</strong> غير اسم الـ Slicer للقارئ (مثل "اختر المنطقة" بدل "Region").</li>
        <li><strong>Search:</strong> أضف صندوق بحث للـ Slicers الكبيرة.</li>
        <li><strong>Selection Controls:</strong> أزرار Select All / Clear Filter.</li>
        <li><strong>Single Select:</strong> مستخدم يختار قيمة واحدة فقط (بدل متعدد).</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>What-If Parameters — Slicers للمتغيرات</h3>
      <p>بدل slicer عادي على عمود موجود، اصنع Slicer تفاعلي للحسابات:</p>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>إنشاء What-If Parameter</h4>
            <p>Modeling ← New Parameter. اختر نطاق القيم (مثل 0-100 للنسبة المئوية).</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>إنشاء Measure يستخدم Parameter</h4>
            <p>مثال: Sales with Growth = [Total Sales] * (1 + Discount[Discount Value]).</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>إضافة Slicer</h4>
            <p>السليسر تلقائياً يحدّث الـ Measure عند تغيير القيمة (scenario planning).</p>
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
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>تحذير:</strong> الـ Relative Date Slicer يُحدّث نطاقه تلقائياً بناءً على اليوم الحالي (آخر 30 يوم متغير دائماً). تأكد أن هذا ما تريده — قد لا يناسب التقارير التاريخية.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>Sync Slicers — Sync filters between pages</h3>
<p>Instead of putting the same slicer on every page, you can sync a single slicer across multiple pages — the user filters from any page and affects all.</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Open Sync Slicers</h4>
<p>Choose Slicer → View → Sync Slicers. A side window with a list of pages will open.</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Sync setting</h4>
<p>Each page has two columns: <strong>Sync</strong> (Applies filter) and <strong>Visible</strong> (The Slicer appears). You can sync without showing.</p>
</div>
</div>
</div>
</div>
<div class="lesson-card">
<h3>Edit Interactions — Control the interaction of elements</h3>
<p>By default, each Visual filters the rest of the Visuals. You can change this behavior:</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Enable Edit Interactions</h4>
<p>Choose Any Visual → Format → Edit Interactions. Icons will appear above the rest of the visuals.</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Choose the type of interaction</h4>
<ul>
<li><strong>🔽 Filter:</strong> Filters the target visual (default).</li>
<li><strong>🔆 Highlight:</strong> Highlights related values ​​without filtering.</li>
<li><strong>⛔ None:</strong> No effect — Useful for KPI Cards and fixed elements.</li>
</ul>
</div>
</div>
</div>
</div>
<div class="lesson-card">
<h3>Different Types of Slicers</h3>
<p>Power BI offers different slicer types for different use cases:</p>
<ul>
<li><strong>List Slicer:</strong> List of all values (default). Perfect for few categories (region, product).</li>
<li><strong>Dropdown Slicer:</strong> Dropdown list saves space. Use when values are too many.</li>
<li><strong>Tile Slicer:</strong> Clickable buttons. Nice for UI but takes space.</li>
<li><strong>Between Slicer:</strong> Range (Min-Max). Perfect for numbers and dates (Price between 100-500).</li>
<li><strong>Relative Date Slicer:</strong> Relative dates (last 30 days, last 12 months). For dynamic reports.</li>
</ul>
</div>

<div class="lesson-card">
<h3>Customize Slicer Header and Styling</h3>
<p>Choose Visual → Format → Slicer Header:</p>
<ul>
<li><strong>Show Header:</strong> Show/hide the title.</li>
<li><strong>Header Text:</strong> Change slicer name for reader (like "Select Region" instead of "Region").</li>
<li><strong>Search:</strong> Add search box for large slicers.</li>
<li><strong>Selection Controls:</strong> Select All / Clear Filter buttons.</li>
<li><strong>Single Select:</strong> User picks one value only (instead of multiple).</li>
</ul>
</div>

<div class="lesson-card">
<h3>What-If Parameters — Slicers for Variables</h3>
<p>Instead of normal slicer on existing column, create interactive slicer for calculations:</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Create What-If Parameter</h4>
<p>Modeling → New Parameter. Choose value range (like 0-100 for percentage).</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Create Measure using Parameter</h4>
<p>Example: Sales with Growth = [Total Sales] * (1 + Discount[Discount Value]).</p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Add Slicer</h4>
<p>Slicer automatically updates Measure when value changes (scenario planning).</p>
</div>
</div>
</div>
</div>

<div class="lesson-card">
<h3>Slicer Panel — Panel hidden by a button</h3>
<p>Common technique: Place the Slicers on a separate page or in the Overlay Panel to appear/disappear with the Bookmarks. Saves report space and improves user experience.</p>
</div>

<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Best practice:</strong> Use Sync Slicers for global filters (Year, region) and Edit Interactions=None for KPI Cards so they don't change when clicking charts.</p>
</div>

<div class="warn-box">
<div class="icon">⚠️</div>
<p><strong>Warning:</strong> Relative Date Slicer updates its range automatically based on today (last 30 days always changes). Make sure this is what you want — it may not suit historical reports.</p>
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
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>Power BI Themes</h3>
<p>The Theme It is a file JSON Defines default colors, fonts, and formats for all report elements at once.</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Theme app is ready</h4>
<p>View → Themes → Choose from built-in themes or browse Microsoft's gallery of ready-made themes.</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Customize Theme</h4>
<p>View → Themes → Customize Current Theme — You will find a section for each item type (Cards, Charts, Text).</p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Save and apply to other projects</h4>
<p>View → Themes → Save Current Theme — Saves a .json file that can be shared with the team.</p>
</div>
</div>
</div>
</div>
<div class="lesson-card">
<h3>File structure of Theme (JSON)</h3>
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
<h3>Professional design principles</h3>
<ul>
<li><strong>3 color base:</strong> Primary color + secondary color + warning/alert color. Don't go beyond that.</li>
<li><strong>Visual sequence:</strong> Bigger title → KPIs → Details. User eye tracking gradient.</li>
<li><strong>Alignment and margins:</strong> Use Format → Align to align elements — chaos loses confidence.</li>
<li><strong>Labels:</strong> Data Labels only for important values ​​— too much is distracting.</li>
<li><strong>Background:</strong> Light background for printing, dark for presentations.</li>
</ul>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Pro Tip:</strong> Start each project by creating a “Design Guide” page where you lay out standard colors and components — then copy them over each page. Saves time and ensures consistency.</p>
</div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>Default vs. custom Tooltip</h3>
<ul>
<li><strong>hypothetical:</strong> Displays field name and value only when hover.</li>
<li><strong>Custom:</strong> Displays a full report page with charts, KPIs, details — all in a popup window.</li>
</ul>
</div>
<div class="lesson-card">
<h3>Steps to create a Custom Tooltip</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Create a Tooltip page</h4>
<p>Add a new page → right click on its name → Page Information → activate <strong>Allow use as tooltip</strong>.</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Tooltip content design</h4>
<p>Change the page size for the Tooltip (View → Page Size → Tooltip). Add KPIs and mini charts.</p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Link the Tooltip to Visual</h4>
<p>Choose the main visual → Format → Tooltips → Change Type from Default to <strong>Report Page</strong> ← Select the page you created.</p>
</div>
</div>
</div>
</div>
<div class="lesson-card">
<h3>Ideas for using Custom Tooltips</h3>
<ul>
<li><strong>Bar Chart:</strong> Tooltip Displays the linear trend of the product when hovering.</li>
<li><strong>map:</strong> Tooltip displays Top 5 sales for the region.</li>
<li><strong>KPI Card:</strong> Tooltip displays a breakdown of monthly numbers.</li>
<li><strong>table:</strong> Tooltip displays the complete profile of the customer or product.</li>
</ul>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>The context is saved:</strong> The Tooltip inherits the context filter — if you look at a specific product on the chart, the Tooltip will display data for that specific product.</p>
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
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>Default vs. custom Tooltip</h3>
<ul>
<li><strong>hypothetical:</strong> Displays field name and value only when hover.</li>
<li><strong>Custom:</strong> Displays a full report page with charts, KPIs, details — all in a popup window.</li>
</ul>
</div>
<div class="lesson-card">
<h3>Steps to create a Custom Tooltip</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Create a Tooltip page</h4>
<p>Add a new page → right click on its name → Page Information → activate <strong>Allow use as tooltip</strong>.</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Tooltip content design</h4>
<p>Change the page size for the Tooltip (View → Page Size → Tooltip). Add KPIs and mini charts.</p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Link the Tooltip to Visual</h4>
<p>Choose the main visual → Format → Tooltips → Change Type from Default to <strong>Report Page</strong> ← Select the page you created.</p>
</div>
</div>
</div>
</div>
<div class="lesson-card">
<h3>Ideas for using Custom Tooltips</h3>
<ul>
<li><strong>Bar Chart:</strong> Tooltip Displays the linear trend of the product when hovering.</li>
<li><strong>map:</strong> Tooltip displays Top 5 sales for the region.</li>
<li><strong>KPI Card:</strong> Tooltip displays a breakdown of monthly numbers.</li>
<li><strong>table:</strong> Tooltip displays the complete profile of the customer or product.</li>
</ul>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>The context is saved:</strong> The Tooltip inherits the context filter — if you look at a specific product on the chart, the Tooltip will display data for that specific product.</p>
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
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>Method 1: Color Scale</h3>
<p>In any Visual or MatrixSelect the field → Format → Conditional Formatting → Background Color → Rules = Color Scale. It will be determined: Less value → Highest value and their colors. Power BI Colors automatically.</p>
</div>
<div class="lesson-card">
<h3>Method 2: Rules</h3>
<div class="code-block">
<span class="cm">-- Example: Coloring the performance green/yellow/red</span>
If Value &gt;= 90%  → Green  ✅ (Excellent performance)
If Value &gt;= 70%  → Yellow ⚠️ (Acceptable performance)
If Value &lt; 70%   → Red    ❌ (Poor performance)

<span class="cm">--Steps:</span>
Format Visual → Cells → Background Color 
→ Format Style: Rules
→ Rule 1: If Value &gt;= 90 (Number) → Green
→ Rule 2: If Value &gt;= 70 → Yellow
→ Rule 3: If Value &gt;= 0  → Red
      </div>
</div>
<div class="lesson-card">
<h3>method 3: Field Value — Control of DAX</h3>
<p>The most powerful method. The measure returns a color code (hex value or color name) and links it to conditional formatting:</p>
<div class="code-block">
<span class="cm">--Measure returns color based on performance</span>
KPI Color = 
<span class="fn">SWITCH</span>(
    <span class="kw">TRUE</span>(),
    [Achievement %] &gt;= <span class="num">0.9</span>,  <span class="str">"#1D9E75"</span>,  <span class="cm">-- green</span>
    [Achievement %] &gt;= <span class="num">0.7</span>,  <span class="str">"#F5B800"</span>,  <span class="cm">--Golden</span>
<span class="str">"#D85A30"</span> <span class="cm">-- Red</span>
)

<span class="cm">-- then: Format → Background Color → Format Style: Field Value → to choose KPI Color</span>
</div>
</div>
<div class="lesson-card">
<h3>Data Bars — Bars embedded in the cell</h3>
<p>in Matrix or Table: Select the field → Format → Conditional Formatting → Data Bars. It creates a relative tape directly inside the cell without Chart separate. Perfect for tables KPI.</p>
</div>
<div class="lesson-card">
<h3>Icons — Status icons</h3>
<div class="code-block">
<span class="cm">-- Format → Icons → Rules</span>
<span class="cm">-- Example: Up/Down/Flat icons for sales</span>
If Value &gt; 0   → ↑ (green)
If Value = 0   → → (ashen)
If Value &lt; 0   → ↓ (red)

<span class="cm">-- Type: Number, Percent, or Percentile</span>
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
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>Drill Down — Dive into Hierarchy</h3>
<p>It works when you have a specific Hierarchy (eg: year → quarter → month → day). Steps:</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Create Hierarchy</h4>
<p>In the Data Pane, right-click on the Year → New Hierarchy column. Then drag Quarter, Month, Day into it.</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Put the Hierarchy in the Axis</h4>
<p>Drag the entire Hierarchy (not one column) into the X-Axis field on the chart.</p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Activate Drill Down Mode</h4>
<p>Above the chart you will find the down arrow button ↓ — press it and then click on any column on the chart to drill down into it.</p>
</div>
</div>
</div>
</div>
<div class="lesson-card">
<h3>Drill Through — Details page</h3>
<p>It allows you to right-click on any data point and go to its detailed page. Setup steps:</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Create a new page for details</h4>
<p>Add a new page and name it “Product Details,” for example. Design it to display all the details of the chosen product.</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Activate Drill Through on the new page</h4>
<p>On the details page, he is gone Visualizations → Drag a column ProductName In a box "Drill through". Power BI He will add a button Back automatically.</p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Use</h4>
<p>Return to the home page → Right click on a product name on any chart → Drill through → Product details.</p>
</div>
</div>
</div>
</div>
<div class="lesson-card">
<h3>Tooltip Page — Custom tip when Hovering</h3>
<p>Instead of the default tooltip, you can make an entire page appear as a Tooltip when you hover over any point:</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>New page → Page Information</h4>
<p>In Format Page → turn on “Allow use as tooltip”. Change the size of the Tooltip (320×240 for example).</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Link it to the chart</h4>
<p>On the main chart → Format → Tooltip → Type: Report Page → Page: Choose the Tooltip page.</p>
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
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>What is a bookmark?</h3>
<p>Bookmark = Snapshot (Snapshot) The status of the report at a given moment — Include: That is, the Visuals visible, applied filters, and the Slicers Selected. When you press the Bookmark The report returns to that moment.</p>
</div>
<div class="lesson-card">
<h3>Usage 1: Switch between two charts</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Place the two drawings on top of each other in the same size and location</h4>
<p>For example: Bar Chart and Line Chart in the same place. Hide the Line.</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>View → Bookmarks → Add Bookmark</h4>
<p>Call it "Show Bar". Then hide the Bar, show the Line, and add a second “Show Line” Bookmark.</p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Add a button and link it to Bookmark</h4>
<p>Insert → Button → Choose the button shape → Action → Type: Bookmark → Choose “Show Bar”.</p>
</div>
</div>
</div>
</div>
<div class="lesson-card">
<h3>Usage 2: Panel Details Hideable</h3>
<div class="code-block">
<span class="cm">-- Idea: ← button opens a side panel with additional details</span>

Steps:
1. Design a side panel (rectangle + charts)
2. Bookmark 1 “Panel Closed”: Panel is hidden
3. Bookmark 2 “Panel Open”: Panel is visible
4. Button ← Open Panel
5. The X button inside Panel returns Panel Closed
      </div>
</div>
<div class="lesson-card">
<h3>Page Navigator — Automatic navigation between pages</h3>
<p>Insert → Buttons → Navigator → Page Navigator. Power BI It automatically generates buttons for all pages of the report and updates when you add new pages.</p>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Selection Pane:</strong> View → Selection. This panel displays all the elements on the page and allows you to hide or remove them with one click. You must open it while working on Bookmarks.</p>
</div>` }],
  },
  "publish": {
    eyebrow: "06 · 01 — النشر والمشاركة",
    title: "النشر والمشاركة (Power BI Service)",
    lede: "كيف تشارك عملك مع مديرك وزملائك بطريقة احترافية؟",
    en_eyebrow: "06 · 01 — Publishing to Power BI Service",
    en_lede: "How to share your reports with colleagues and managers on the cloud.",
    sectionId: "publish",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>☁️ ما الفرق بين Desktop و Service؟</h3>
      <p>Power BI Desktop للبناء والتصميم على جهازك. Power BI Service للنشر والمشاركة والتحديث التلقائي على السحابة. Service هو الوجهة النهائية لكل تقرير.</p>
      <table class="compare-table" style="width:100%; border-collapse:collapse; margin-top:12px;">
        <tr style="background:var(--bg-2);">
          <th style="padding:10px; border:1px solid var(--ink-3);">Feature</th>
          <th style="padding:10px; border:1px solid var(--ink-3);">Desktop</th>
          <th style="padding:10px; border:1px solid var(--ink-3);">Service</th>
        </tr>
        <tr>
          <td style="padding:10px; border:1px solid var(--ink-3);">التطوير والتصميم</td>
          <td style="padding:10px; border:1px solid var(--ink-3);">✅ نعم</td>
          <td style="padding:10px; border:1px solid var(--ink-3);">❌ تعديلات محدودة</td>
        </tr>
        <tr>
          <td style="padding:10px; border:1px solid var(--ink-3);">النشر والمشاركة</td>
          <td style="padding:10px; border:1px solid var(--ink-3);">❌ لا يوجد</td>
          <td style="padding:10px; border:1px solid var(--ink-3);">✅ نعم</td>
        </tr>
        <tr>
          <td style="padding:10px; border:1px solid var(--ink-3);">التحديث التلقائي</td>
          <td style="padding:10px; border:1px solid var(--ink-3);">❌ يدوي فقط</td>
          <td style="padding:10px; border:1px solid var(--ink-3);">✅ مجدول</td>
        </tr>
        <tr>
          <td style="padding:10px; border:1px solid var(--ink-3);">RLS والأمان</td>
          <td style="padding:10px; border:1px solid var(--ink-3);">⚙️ تصميم فقط</td>
          <td style="padding:10px; border:1px solid var(--ink-3);">✅ تطبيق فعلي</td>
        </tr>
      </table>
    </div>

    <div class="lesson-card">
      <h3>📋 الشروط الأساسية قبل النشر</h3>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>حساب Microsoft 365 (Work/School Email)</h4>
            <p>لا يقبل Gmail أو Yahoo. يجب أن يكون حساب عمل أو جامعي رسمي من المؤسسة.</p>
            <div class="tip-box">
              <div class="icon">💡</div>
              <p>إذا كان عندك Office 365 للعمل، البريد الخاص بك صالح للنشر.</p>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>ترخيص Power BI (License)</h4>
            <p>إما <strong>Power BI Pro</strong> (شهري) أو <strong>Power BI Premium</strong> (أعلى). الـ Free License ما تقدر تنشر.</p>
            <div class="code-block">
<span class="cm">-- قارن الخيارات:</span>
Pro    → للفرق الصغيرة والمتوسطة ($10/شهر)
Premium → للمؤسسات الكبيرة (capacity-based)
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>اتصال الإنترنت والـ Gateway (إن لزم)</h4>
            <p>للبيانات السحابية (Excel Online, SQL Azure) تحتاج اتصال مباشر. للبيانات المحلية (SQL Server محلي) تحتاج On-Premises Data Gateway.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>🚀 خطوات النشر — من Desktop إلى Service</h3>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>تحضير الملف (Desktop)</h4>
            <p>تأكد من:</p>
            <ul style="margin:8px 0; padding-left:20px;">
              <li>الـ Model خالي من الأخطاء (Error في Power Query يوقف النشر)</li>
              <li>جميع الـ Queries محدثة وصحيحة</li>
              <li>لا توجد مسافات غريبة أو أسماء غير واضحة في الأعمدة</li>
            </ul>
          </div>
        </div>

        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>الضغط على Publish</h4>
            <p>File → Publish (أو من شريط القوائم في الأعلى). ستظهر نافذة باختيار الـ Workspace.</p>
            <div class="tip-box">
              <div class="icon">💡</div>
              <p>اختار Workspace shared بدل "My Workspace" — "My Workspace" للتجربة فقط.</p>
            </div>
          </div>
        </div>

        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>تأكيد الدخول (Sign-in)</h4>
            <p>سيطلب منك تسجيل الدخول بحسابك العملي. ادخل البريد والكلمة المرور.</p>
          </div>
        </div>

        <div class="step">
          <div class="step-num">4</div>
          <div class="step-content">
            <h4>انتظر الرفع</h4>
            <p>سيظهر تقدم الرفع. التقارير الكبيرة قد تأخذ دقائق. بعد انتهاء الرفع، ستجد رابط مباشر للتقرير على Service.</p>
          </div>
        </div>

        <div class="step">
          <div class="step-num">5</div>
          <div class="step-content">
            <h4>تحديث الـ Dataset في Service (حرج)</h4>
            <p>بعد النشر الأول، في Service:</p>
            <div class="code-block">
<span class="cm">-- اذهب إلى Dataset → ⚙️ Settings</span>
<span class="cm">-- Data source credentials → أدخل بيانات الاتصال بقاعدة البيانات</span>
<span class="cm">-- (مثل: SQL Server username + password)</span>
<span class="cm">-- بدونها، التحديث التلقائي ما يشتغل</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>⚙️ إعداد التحديث التلقائي (Scheduled Refresh)</h3>
      <p>بعد النشر، بتقدر تحدث البيانات تلقائياً حسب جدول محدد:</p>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>في Service، اذهب للـ Dataset</h4>
            <p>اضغط على "..." بجانب اسم الـ Dataset وختار "Settings".</p>
          </div>
        </div>

        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>البحث عن "Scheduled Refresh"</h4>
            <div class="code-block">
<span class="cm">-- مثال: تحديث يومي في الساعة 7 صباحاً</span>
Frequency: Daily
Time: 07:00 AM
Timezone: Africa/Cairo
            </div>
          </div>
        </div>

        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>أضف عنوان بريد إلكتروني للتنبيهات</h4>
            <p>إذا فشل التحديث، Power BI بترسل إشعار. تأكد من البريد صحيح.</p>
          </div>
        </div>
      </div>

      <div class="warn-box">
        <div class="icon">⚠️</div>
        <p><strong>ملاحظة مهمة:</strong> عدد مرات التحديث يعتمد على الترخيص: Power BI Pro = 8 مرات يومياً، Premium = غير محدود. لا تحدد تحديثات كثيرة جداً بدون داعي.</p>
      </div>
    </div>

    <div class="lesson-card">
      <h3>ðŸ” إدارة الصلاحيات والمشاركة</h3>
      <p>بعد النشر، بتقدر تتحكم من يشوف التقرير:</p>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>من التقرير نفسه: Share</h4>
            <p>اضغط "Share" أعلى يمين التقرير، وادخل البريد الإلكتروني للشخص أو المجموعة. بتقدر تعطيه "View" أو "Edit" صلاحيات.</p>
          </div>
        </div>

        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>من الـ Workspace: Manage Access</h4>
            <p>بتقدر تعطي صلاحيات أعمق على مستوى الـ Workspace (Admin, Member, Contributor, Viewer).</p>
          </div>
        </div>

        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>من الـ Dataset: Row-Level Security (RLS)</h4>
            <p>اذهب للـ Dataset → Security → أضف Roles وحدد أي مستخدم يرى أي منطقة/فئة (انظر درس RLS).</p>
          </div>
        </div>
      </div>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>أفضل ممارسة:</strong> للمؤسسات الكبيرة، استخدم Apps بدل المشاركة المباشرة. App بتدي انطباع احترافي وأنظف للمستخدمين النهائيين.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>☁️ What's the difference between Desktop and Service?</h3>
<p>Power BI Desktop is for building and designing on your machine. Power BI Service is for publishing, sharing, and automated updates on the cloud. Service is the final destination for every report.</p>
<table class="compare-table" style="width:100%; border-collapse:collapse; margin-top:12px;">
<tr style="background:var(--bg-2);">
<th style="padding:10px; border:1px solid var(--ink-3);">Feature</th>
<th style="padding:10px; border:1px solid var(--ink-3);">Desktop</th>
<th style="padding:10px; border:1px solid var(--ink-3);">Service</th>
</tr>
<tr>
<td style="padding:10px; border:1px solid var(--ink-3);">Development and Design</td>
<td style="padding:10px; border:1px solid var(--ink-3);">✅ Yes</td>
<td style="padding:10px; border:1px solid var(--ink-3);">❌ Limited edits</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid var(--ink-3);">Publishing and Sharing</td>
<td style="padding:10px; border:1px solid var(--ink-3);">❌ No</td>
<td style="padding:10px; border:1px solid var(--ink-3);">✅ Yes</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid var(--ink-3);">Automated Updates</td>
<td style="padding:10px; border:1px solid var(--ink-3);">❌ Manual only</td>
<td style="padding:10px; border:1px solid var(--ink-3);">✅ Scheduled</td>
</tr>
<tr>
<td style="padding:10px; border:1px solid var(--ink-3);">RLS and Security</td>
<td style="padding:10px; border:1px solid var(--ink-3);">⚙️ Design only</td>
<td style="padding:10px; border:1px solid var(--ink-3);">✅ Actual implementation</td>
</tr>
</table>
</div>

<div class="lesson-card">
<h3>📋 Basic requirements before publishing</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Microsoft 365 Account (Work/School Email)</h4>
<p>Gmail or Yahoo not accepted. Must be an official work or school account from the organization.</p>
<div class="tip-box">
<div class="icon">💡</div>
<p>If you have Office 365 for work, your email is valid for publishing.</p>
</div>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Power BI License</h4>
<p>Either <strong>Power BI Pro</strong> (monthly) or <strong>Power BI Premium</strong> (higher). Free License cannot publish.</p>
<div class="code-block">
<span class="cm">-- Compare options:</span>
Pro    → for small to medium teams (\$10/month)
Premium → for large enterprises (capacity-based)
</div>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Internet connectivity and Gateway (if needed)</h4>
<p>For cloud data (Excel Online, SQL Azure) you need direct connection. For on-premises data (local SQL Server) you need On-Premises Data Gateway.</p>
</div>
</div>
</div>
</div>

<div class="lesson-card">
<h3>🚀 Publishing steps — from Desktop to Service</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Prepare the file (Desktop)</h4>
<p>Ensure:</p>
<ul style="margin:8px 0; padding-left:20px;">
<li>Model is error-free (Power Query errors stop publishing)</li>
<li>All Queries are updated and correct</li>
<li>No strange spaces or unclear names in columns</li>
</ul>
</div>
</div>

<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Click Publish</h4>
<p>File → Publish (or from the top menu bar). A window will appear asking you to choose the Workspace.</p>
<div class="tip-box">
<div class="icon">💡</div>
<p>Choose a shared Workspace instead of "My Workspace" — "My Workspace" is just for testing.</p>
</div>
</div>
</div>

<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Confirm login (Sign-in)</h4>
<p>It will ask you to log in with your work account. Enter email and password.</p>
</div>
</div>

<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<h4>Wait for the upload</h4>
<p>Upload progress will appear. Large reports can take minutes. After upload completes, you'll find a direct link to the report on Service.</p>
</div>
</div>

<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<h4>Update the Dataset in Service (critical)</h4>
<p>After first publish, in Service:</p>
<div class="code-block">
<span class="cm">-- Go to Dataset → ⚙️ Settings</span>
<span class="cm">-- Data source credentials → enter database connection details</span>
<span class="cm">-- (e.g.: SQL Server username + password)</span>
<span class="cm">-- Without it, scheduled refresh won't work</span>
</div>
</div>
</div>
</div>
</div>

<div class="lesson-card">
<h3>⚙️ Setting up automated updates (Scheduled Refresh)</h3>
<p>After publishing, you can update data automatically on a set schedule:</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>In Service, go to the Dataset</h4>
<p>Click "..." next to the Dataset name and select "Settings".</p>
</div>
</div>

<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Look for "Scheduled Refresh"</h4>
<div class="code-block">
<span class="cm">-- Example: daily update at 7 AM</span>
Frequency: Daily
Time: 07:00 AM
Timezone: Africa/Cairo
</div>
</div>
</div>

<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Add email address for notifications</h4>
<p>If refresh fails, Power BI will send notification. Make sure email is correct.</p>
</div>
</div>
</div>

<div class="warn-box">
<div class="icon">⚠️</div>
<p><strong>Important note:</strong> Number of refresh times depends on license: Power BI Pro = 8 times daily, Premium = unlimited. Don't schedule too many refreshes without reason.</p>
</div>
</div>

<div class="lesson-card">
<h3>ðŸ” Managing permissions and sharing</h3>
<p>After publishing, you can control who sees the report:</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>From report itself: Share</h4>
<p>Click "Share" at top right of report, enter email of person or group. You can give "View" or "Edit" permissions.</p>
</div>
</div>

<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>From Workspace: Manage Access</h4>
<p>You can grant deeper permissions at Workspace level (Admin, Member, Contributor, Viewer).</p>
</div>
</div>

<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>From Dataset: Row-Level Security (RLS)</h4>
<p>Go to Dataset → Security → Add Roles and specify which user sees which region/category (see RLS lesson).</p>
</div>
</div>
</div>
</div>

<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Best practice:</strong> For large organizations, use Apps instead of direct sharing. App gives a professional impression and is cleaner for end users.</p>
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
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>My Workspace vs Shared Workspace</h3>
<p>My Workspace is your personal space — no one sees it. The Shared Workspace is a shared space for the team:</p>
<div class="code-block">
<span class="cm">-- Roles in the Workspace (from highest to lowest):</span>
Admin → controls everything, adds and deletes members
Member → Publish content, edit, but do not delete the Workspace
Contributor → publishes and edits but does not modify the work of others
Viewer → Watch only (requires Pro or Premium License)
      </div>
</div>
<div class="lesson-card">
<h3>Create and manage Workspace</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Create a new Workspace</h4>
<p>In Service → Workspaces → Create a Workspace. Specify the name, description, and License Mode (Pro/Premium).</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Publishing from Desktop</h4>
<p>Publish → Choose the Workspace by name (not My Workspace). You will find both the Report and Dataset uploaded.</p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Add members</h4>
<p>Workspace → Access → Add the member's email and choose their role.</p>
</div>
</div>
</div>
</div>
<div class="lesson-card">
<h3>Power BI App — Professional distribution</h3>
<p>App is the cleanest deployment method for end users. Instead of giving them a direct link to Workspace (which contains all the datasets and reports), you build an App that contains only what you want them to see:</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Create an App from within Workspace</h4>
<p>Workspace → Create App. Specify the name, description, theme and logo.</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Content selection</h4>
<p>Choose which Reports and Dashboards you want to appear in the App. You can hide some of them.</p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Audience — Define the audience</h4>
<p>You can create a different Audience - for example: Managers see certain pages, Analysts see other pages.</p>
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<h4>Publish App</h4>
<p>The user goes to Apps in the Service and clicks Get Apps and sees your App organized and beautiful.</p>
</div>
</div>
</div>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Best practice:</strong> Report developers work in Workspace (Contributor/Member). End users only use the App (Viewer). This prevents any unintended modification.</p>
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
      <h3>ðŸ” لماذا RLS مهمة جداً؟</h3>
      <p>كل مدير في الشركة يحتاج نفس التقرير، لكن كل واحد يشوف بيانات نطاقه فقط. بدون RLS، لازم تطبع 20 تقرير نسخ — واحد لكل مدير. مع RLS: تقرير واحد بس، كل مدير يفتحه ويشوف بيانته تلقائياً.</p>
      <div class="tip-box">
        <div class="icon">💡</div>
        <p><strong>الفكرة الأساسية:</strong> RLS تضيف فلتر DAX خفي تلقائياً قبل ما المستخدم يشوف أي بيانات.</p>
      </div>
    </div>

    <div class="lesson-card">
      <h3>آلية العمل — كيف تحدث RLS؟</h3>
      <p>عملية RLS تمر بـ 3 خطوات:</p>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <p><strong>المستخدم يفتح التقرير</strong> من Power BI Service</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <p><strong>Power BI يعرّف هويته</strong> من البريد الإلكتروني (USERPRINCIPALNAME()) أو ID الـ Azure</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <p><strong>يطبّق الفلتر الخاص به</strong> قبل تحميل البيانات — يشوف فقط الصفوف المسموح بها</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>النوع الأول: Static RLS (ثابتة) — خطوة بخطوة</h3>
      <p>Static RLS معناه كل Role بترى منطقة جغرافية ثابتة (مثلاً: Cairo_Manager يشوف القاهرة دايماً).</p>

      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>✏️ أنشئ جدول Dimension للأدوار</h4>
            <p>قبل ما تبدأ RLS، تأكد عندك جدول مثل Dim_Region أو Dim_Manager بالمناطق والفروع:</p>
            <div class="code-block">
Region      | Manager_Email
Cairo       | ahmed@company.com
Alexandria  | sara@company.com
Giza        | khaled@company.com
            </div>
          </div>
        </div>

        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>🎯 في Power BI Desktop: Modeling → Manage Roles</h4>
            <p>انقر على "Manage Roles" وأنشئ Role جديدة باسم واضح:</p>
            <div class="code-block">
Role Name: Cairo_Manager
            </div>
          </div>
        </div>

        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>📋 اكتب فلتر DAX على جدول البيانات</h4>
            <p>اختار جدول Dim_Region، وكتب الفلتر:</p>
            <div class="code-block">
<span class="cm">-- كل من Cairo_Manager سيرى فقط Cairo</span>
[Region] = <span class="str">"Cairo"</span>

<span class="cm">-- لو تبغى فلتر أعقد (مثلاً مدير يرى أكثر من منطقة):</span>
[Region] <span class="kw">IN</span> { <span class="str">"Cairo"</span>, <span class="str">"Giza"</span> }
            </div>
          </div>
        </div>

        <div class="step">
          <div class="step-num">4</div>
          <div class="step-content">
            <h4>🧪 اختبر الفلتر قبل النشر</h4>
            <p>Modeling → View as Role. اختار Cairo_Manager واضغط OK. ستشوف التقرير كأنك Cairo_Manager — تأكد من الفلترة:</p>
            <div class="code-block">
<span class="cm">-- توقع أن ترى فقط بيانات Cairo</span>
<span class="cm">-- أي منطقة أخرى ما تظهر في المخططات</span>
            </div>
          </div>
        </div>

        <div class="step">
          <div class="step-num">5</div>
          <div class="step-content">
            <h4>☁️ بعد النشر على Power BI Service</h4>
            <p>انتقل للـ Dataset في Service، واضغط على "..." → Security:</p>
            <div class="code-block">
<span class="cm">-- مثال: إضافة مستخدمين للـ Cairo_Manager Role</span>
Role: Cairo_Manager
Email: ahmed@company.com
Email: sara@company.com
            </div>
            <p>أي مستخدم تضيفه هنا سيشوف فقط البيانات المسموح بها (Cairo في المثال).</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>النوع الثاني: Dynamic RLS (ديناميكية) — الأقوى 🚀</h3>
      <p>بدل أن تنشئ Role لكل فرع، انشئ Role واحدة ذكية تقرأ هوية المستخدم تلقائياً وتجلب بيانته:</p>

      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>📊 جدول Security — الأساس</h4>
            <p>لازم يكون عندك جدول Security بعمودين على الأقل:</p>
            <div class="code-block">
<span class="kw">Dim_Security</span>:
UserEmail           | Region      | Department
ahmed@company.com   | Cairo       | Sales
sara@company.com    | Alexandria  | Marketing
khaled@company.com  | Cairo       | Finance
            </div>
          </div>
        </div>

        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>🔗 سيناريو: مدير المبيعات في Cairo</h4>
            <p>لما Ahmed يفتح التقرير:</p>
            <div class="code-block">
<span class="cm">-- Power BI تعرّف هويته: ahmed@company.com</span>
<span class="cm">-- تبحث في Dim_Security عن صفه: Region = Cairo</span>
<span class="cm">-- تطبق الفلتر تلقائياً: اعرض فقط Cairo</span>
            </div>
          </div>
        </div>

        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>💻 كود DAX للفلترة الديناميكية</h4>
            <div class="code-block">
<span class="cm">-- في Modeling → Manage Roles → أنشئ role اسمها "Manager"</span>
<span class="cm">-- اكتب هذا الفلتر على جدول Sales أو أي جدول حقائق:</span>

[Region] <span class="kw">IN</span>
<span class="fn">CALCULATETABLE</span>(
    <span class="fn">VALUES</span>( Dim_Security[Region] ),
    Dim_Security[UserEmail] = <span class="fn">USERPRINCIPALNAME</span>()
)

<span class="cm">-- شرح:</span>
<span class="cm">-- USERPRINCIPALNAME() = يرجع email المستخدم (ahmed@company.com)</span>
<span class="cm">-- CALCULATETABLE = جيب كل القيم من Region where email = المستخدم الحالي</span>
<span class="cm">-- IN = طبّق الفلتر على الصفوف</span>
            </div>
          </div>
        </div>

        <div class="step">
          <div class="step-num">4</div>
          <div class="step-content">
            <h4>⚙️ مثال متقدم — مدير بأكثر من منطقة</h4>
            <p>لو مدير Sales عنده مسؤولية عن Cairo + Giza:</p>
            <div class="code-block">
<span class="kw">Dim_Security</span>:
UserEmail           | Region
manager@company.com | Cairo
manager@company.com | Giza

<span class="cm">-- نفس الكود DAX يشتغل!</span>
<span class="cm">-- سيجيب Cairo و Giza تلقائياً</span>
            </div>
          </div>
        </div>
      </div>

      <div class="tip-box">
        <div class="icon">💡</div>
        <p><strong>فائدة Dynamic RLS:</strong> لو عملت مستخدم جديد، بدّل البيانات في Dim_Security بس — ما تحتاج تعدّل التقرير أو تنشر نسخة جديدة!</p>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Object Level Security (OLS) — إخفاء أعمدة وجداول 🔒</h3>
      <p>RLS بتخفي <strong>صفوف</strong>. OLS بتخفي <strong>أعمدة أو جداول كاملة</strong> عن مستخدمين. مثال: مديرو المبيعات ما يرون عمود التكلفة (Cost).</p>

      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>📥 نزّل Tabular Editor</h4>
            <p>OLS تحتاج Tabular Editor (مجاني) أو Power BI Premium. انزّل من:</p>
            <div class="code-block">
tabulareditor.github.io
            </div>
          </div>
        </div>

        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>🛠️ فتح الـ Model في Tabular Editor</h4>
            <p>افتح Tabular Editor، افتح ملف PBIX الخاص بك. ستشوف شجرة الـ Tables و Columns.</p>
          </div>
        </div>

        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>🚫 اختار العمود وأخفه</h4>
            <p>مثل: Cost Column</p>
            <div class="code-block">
<span class="cm">-- Right-click على Cost Column</span>
<span class="cm">-- Object Level Security</span>
<span class="cm">-- اختار Role: Sales_Manager</span>
<span class="cm">-- Set to: None (إخفاء كامل)</span>

<span class="cm">-- النتيجة: مدراء المبيعات في Sales_Manager Role</span>
<span class="cm">-- لن يرون Cost حتى في Field List</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>🧪 الاختبار — خطوات حاسمة</h3>
      <p>قبل النشر على Service، لازم تختبر RLS كويس:</p>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <p><strong>في Desktop:</strong> Modeling → View as Role → اختار Role وتحقق من البيانات</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <p><strong>التحقق من الأرقام:</strong> كل Role يشوف أرقام مختلفة بالضبط. القاهرة مثلاً ما تشوف بيانات الإسكندرية.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <p><strong>بعد النشر:</strong> اطلب من مستخدم حقيقي أنه يفتح التقرير من Service ويتأكد من صحة الفلترة</p>
          </div>
        </div>
      </div>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>تحذير حرج:</strong> RLS تحمي البيانات عند المشاهدة فقط. لو المستخدم عنده صلاحية "Build" على الـ Dataset، ممكن يحمّل الـ PBIX ويرى البيانات كاملة! الحل:</p>
      <ul>
        <li>💻 اسحب صلاحية "Build" من الـ Dataset تماماً</li>
        <li>📱 استخدم Power BI Apps بدل مشاركة Workspace مباشرة</li>
        <li>🔑 استخدم Service Principals + Management APIs للتحكم الكامل</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>📋 جدول المقارنة — Static vs Dynamic RLS</h3>
      <table class="compare-table" style="width:100%; border-collapse:collapse;">
        <tr style="background:var(--bg-2);">
          <th style="padding:12px; border:1px solid var(--ink-3);">Feature</th>
          <th style="padding:12px; border:1px solid var(--ink-3);">Static RLS</th>
          <th style="padding:12px; border:1px solid var(--ink-3);">Dynamic RLS</th>
        </tr>
        <tr>
          <td style="padding:12px; border:1px solid var(--ink-3);"><strong>عدد Roles</strong></td>
          <td style="padding:12px; border:1px solid var(--ink-3);">كثيرة (واحدة لكل فرع)</td>
          <td style="padding:12px; border:1px solid var(--ink-3);">Role واحدة أو اثنين فقط</td>
        </tr>
        <tr>
          <td style="padding:12px; border:1px solid var(--ink-3);"><strong>التعقيد</strong></td>
          <td style="padding:12px; border:1px solid var(--ink-3);">بسيطة — فلتر ثابت</td>
          <td style="padding:12px; border:1px solid var(--ink-3);">متوسطة — تحتاج جدول Security</td>
        </tr>
        <tr>
          <td style="padding:12px; border:1px solid var(--ink-3);"><strong>الصيانة</strong></td>
          <td style="padding:12px; border:1px solid var(--ink-3);">عند تغيير: تعديل Role + نشر</td>
          <td style="padding:12px; border:1px solid var(--ink-3);">تعديل البيانات فقط (بدون نشر)</td>
        </tr>
        <tr>
          <td style="padding:12px; border:1px solid var(--ink-3);"><strong>الأداء</strong></td>
          <td style="padding:12px; border:1px solid var(--ink-3);">أسرع — فلتر مباشر</td>
          <td style="padding:12px; border:1px solid var(--ink-3);">قد يكون أبطأ قليلاً</td>
        </tr>
      </table>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>ðŸ” Why is RLS so important?</h3>
<p>Every manager in the company needs the same report, but each one sees only their regional data. Without RLS, you’d need to print 20 copies of the report — one for each manager. With RLS: one report, every manager opens it and automatically sees their data.</p>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>The basic idea:</strong> RLS adds a hidden DAX filter automatically before the user sees any data.</p>
</div>
</div>

<div class="lesson-card">
<h3>How RLS Works — The Three-Step Flow</h3>
<p>The RLS process happens in 3 steps:</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<p><strong>User opens the report</strong> from Power BI Service</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<p><strong>Power BI identifies them</strong> from their email (USERPRINCIPALNAME()) or Azure ID</p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<p><strong>Applies their filter</strong> before loading data — they see only permitted rows</p>
</div>
</div>
</div>
</div>

<div class="lesson-card">
<h3>Type 1: Static RLS (Fixed) — Step by Step</h3>
<p>Static RLS means each Role sees a fixed geographic region (e.g., Cairo_Manager always sees Cairo).</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>✏️ Create a Dimension table for regions</h4>
<p>Before starting RLS, ensure you have a table like Dim_Region with regions and branches:</p>
<div class="code-block">
Region      | Manager_Email
Cairo       | ahmed@company.com
Alexandria  | sara@company.com
Giza        | khaled@company.com
</div>
</div>
</div>

<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>🎯 In Power BI Desktop: Modeling → Manage Roles</h4>
<p>Click "Manage Roles" and create a new Role with a clear name:</p>
<div class="code-block">
Role Name: Cairo_Manager
</div>
</div>
</div>

<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>📋 Write a DAX filter on the data table</h4>
<p>Select Dim_Region table, and write the filter:</p>
<div class="code-block">
<span class="cm">-- Cairo_Manager will only see Cairo</span>
[Region] = <span class="str">"Cairo"</span>

<span class="cm">-- For complex filters (e.g., manager sees multiple regions):</span>
[Region] <span class="kw">IN</span> { <span class="str">"Cairo"</span>, <span class="str">"Giza"</span> }
</div>
</div>
</div>

<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<h4>🧪 Test the filter before publishing</h4>
<p>Modeling → View as Role. Select Cairo_Manager and click OK. You will see the report as Cairo_Manager — verify the filtering:</p>
<div class="code-block">
<span class="cm">-- Expect to see only Cairo data</span>
<span class="cm">-- Any other region should not appear in charts</span>
</div>
</div>
</div>

<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<h4>☁️ After publishing to Power BI Service</h4>
<p>Go to the Dataset in Service, click "..." → Security:</p>
<div class="code-block">
<span class="cm">-- Example: Adding users to the Cairo_Manager Role</span>
Role: Cairo_Manager
Email: ahmed@company.com
Email: sara@company.com
</div>
<p>Any user you add here will only see permitted data (Cairo in the example).</p>
</div>
</div>
</div>
</div>

<div class="lesson-card">
<h3>Type 2: Dynamic RLS (Smart) — The Powerful Approach 🚀</h3>
<p>Instead of creating a Role for each branch, create one smart Role that automatically reads the user’s identity and retrieves their data:</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>📊 Security table — The foundation</h4>
<p>You must have a Security table with at least two columns:</p>
<div class="code-block">
<span class="kw">Dim_Security</span>:
UserEmail           | Region      | Department
ahmed@company.com   | Cairo       | Sales
sara@company.com    | Alexandria  | Marketing
khaled@company.com  | Cairo       | Finance
</div>
</div>
</div>

<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>🔗 Scenario: Sales manager in Cairo</h4>
<p>When Ahmed opens the report:</p>
<div class="code-block">
<span class="cm">-- Power BI identifies him: ahmed@company.com</span>
<span class="cm">-- It searches Dim_Security for his record: Region = Cairo</span>
<span class="cm">-- Applies the filter automatically: show only Cairo</span>
</div>
</div>
</div>

<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>💻 DAX Code for Dynamic Filtering</h4>
<div class="code-block">
<span class="cm">-- In Modeling → Manage Roles → create a role named "Manager"</span>
<span class="cm">-- Write this filter on Sales or any fact table:</span>

[Region] <span class="kw">IN</span>
<span class="fn">CALCULATETABLE</span>(
    <span class="fn">VALUES</span>( Dim_Security[Region] ),
    Dim_Security[UserEmail] = <span class="fn">USERPRINCIPALNAME</span>()
)

<span class="cm">-- Explanation:</span>
<span class="cm">-- USERPRINCIPALNAME() = returns current user email (ahmed@company.com)</span>
<span class="cm">-- CALCULATETABLE = get all Region values where email = current user</span>
<span class="cm">-- IN = apply filter to rows</span>
</div>
</div>
</div>

<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<h4>⚙️ Advanced example — Manager with multiple regions</h4>
<p>If a Sales manager is responsible for Cairo + Giza:</p>
<div class="code-block">
<span class="kw">Dim_Security</span>:
UserEmail           | Region
manager@company.com | Cairo
manager@company.com | Giza

<span class="cm">-- The same DAX code works!</span>
<span class="cm">-- It will fetch Cairo and Giza automatically</span>
</div>
</div>
</div>
</div>

<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Dynamic RLS benefit:</strong> If you add a new user, just update Dim_Security — you don’t need to edit the report or publish a new version!</p>
</div>
</div>

<div class="lesson-card">
<h3>Object Level Security (OLS) — Hiding Columns and Tables 🔒</h3>
<p>RLS hides <strong>rows</strong>. OLS hides <strong>entire columns or tables</strong> from users. Example: Sales managers don’t see the Cost column.</p>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>📥 Download Tabular Editor</h4>
<p>OLS requires Tabular Editor (free) or Power BI Premium. Download from:</p>
<div class="code-block">
tabulareditor.github.io
</div>
</div>
</div>

<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>🛠️ Open the Model in Tabular Editor</h4>
<p>Open Tabular Editor, open your PBIX file. You will see the tree of Tables and Columns.</p>
</div>
</div>

<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>🚫 Select the column and hide it</h4>
<p>For example: Cost Column</p>
<div class="code-block">
<span class="cm">-- Right-click on Cost Column</span>
<span class="cm">-- Object Level Security</span>
<span class="cm">-- Select Role: Sales_Manager</span>
<span class="cm">-- Set to: None (full hiding)</span>

<span class="cm">-- Result: Sales managers in Sales_Manager Role</span>
<span class="cm">-- Won’t see Cost even in Field List</span>
</div>
</div>
</div>
</div>
</div>

<div class="lesson-card">
<h3>🧪 Testing — Critical Steps</h3>
<p>Before publishing to Service, you must test RLS thoroughly:</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<p><strong>In Desktop:</strong> Modeling → View as Role → select Role and verify data</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<p><strong>Verify numbers:</strong> Each Role sees different numbers. Cairo, for example, doesn’t see Alexandria data.</p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<p><strong>After publishing:</strong> Ask a real user to open the report from Service and verify filtering is working</p>
</div>
</div>
</div>
</div>

<div class="warn-box">
<div class="icon">⚠️</div>
<p><strong>Critical warning:</strong> RLS only protects data when viewing. If a user has "Build" permission on the Dataset, they can download the PBIX and see all the data! Solution:</p>
<ul>
<li>💻 Remove "Build" permission from the Dataset completely</li>
<li>📱 Use Power BI Apps instead of sharing the Workspace directly</li>
<li>🔑 Use Service Principals + Management APIs for full control</li>
</ul>
</div>

<div class="lesson-card">
<h3>📋 Comparison Table — Static vs Dynamic RLS</h3>
<table class="compare-table" style="width:100%; border-collapse:collapse;">
<tr style="background:var(--bg-2);">
<th style="padding:12px; border:1px solid var(--ink-3);">Feature</th>
<th style="padding:12px; border:1px solid var(--ink-3);">Static RLS</th>
<th style="padding:12px; border:1px solid var(--ink-3);">Dynamic RLS</th>
</tr>
<tr>
<td style="padding:12px; border:1px solid var(--ink-3);"><strong>Number of Roles</strong></td>
<td style="padding:12px; border:1px solid var(--ink-3);">Many (one per branch)</td>
<td style="padding:12px; border:1px solid var(--ink-3);">One or two Roles only</td>
</tr>
<tr>
<td style="padding:12px; border:1px solid var(--ink-3);"><strong>Complexity</strong></td>
<td style="padding:12px; border:1px solid var(--ink-3);">Simple — fixed filter</td>
<td style="padding:12px; border:1px solid var(--ink-3);">Moderate — needs Security table</td>
</tr>
<tr>
<td style="padding:12px; border:1px solid var(--ink-3);"><strong>Maintenance</strong></td>
<td style="padding:12px; border:1px solid var(--ink-3);">On change: edit Role + publish</td>
<td style="padding:12px; border:1px solid var(--ink-3);">Update data only (no publish)</td>
</tr>
<tr>
<td style="padding:12px; border:1px solid var(--ink-3);"><strong>Performance</strong></td>
<td style="padding:12px; border:1px solid var(--ink-3);">Faster — direct filter</td>
<td style="padding:12px; border:1px solid var(--ink-3);">Slightly slower</td>
</tr>
</table>
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
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>What is the Gateway?</h3>
<p>The Gateway It is a middleware (Bridge) It is downloaded to a fixed device within the company. His job: connects Power BI Service (The clouds) With data on the internal network (SQL Server Local, files Shared Drive...) Safely.</p>
</div>
<table class="compare-table">
<tr>
<th>Personal Gateway</th>
<th>Standard Gateway (On-Premises)</th>
</tr>
<tr>
<td>For only one person on his device.</td>
<td>For businesses — serves multiple people and resources.</td>
</tr>
<tr>
<td>Does not support DirectQuery.</td>
<td>Supports Import and DirectQuery.</td>
</tr>
<tr>
<td>Free — for personal use.</td>
<td>needs Power BI Premium or Pro.</td>
</tr>
</table>
<div class="lesson-card">
<h3>Gateway setup steps</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Download Gateway</h4>
<p>From powerbi.microsoft.com → Download On-Premises Data Gateway on the device that has the data (it must always be on).</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Log in and link it to your account</h4>
<p>Open the Gateway Register with the same account Power BI Yours. He will appear in powerbi.com → Settings → Gateways.</p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Add Data Source</h4>
<p>In Service → Settings → Manage Gateways → Add a data source (server name, database name, login data).</p>
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<h4>Connecting the Dataset to the Gateway</h4>
<p>In Service → Dataset → Settings → Gateway Connection → choose the Gateway and Data Source.</p>
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<h4>Scheduled Refresh</h4>
<p>In the same Dataset settings → Scheduled Refresh → turn on and set the times (up to 8 times a day in Pro).</p>
</div>
</div>
</div>
</div>
<div class="warn-box">
<div class="icon">⚠️</div>
<p><strong>Common problem:</strong> If the gateway is interrupted or the device turns off, the update will fail. Solution: Install the Gateway on a fixed dedicated server and not on a personal laptop.</p>
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
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>The problem it solves</h3>
<p>If you have 5 years of sales data (50 million rows), daily Full Refresh takes hours and downloads everything from scratch. Incremental Refresh says: “The data from 2020 to 2024 has not changed — it only updated this week.”</p>
</div>
<div class="lesson-card">
<h3>Basic conditions</h3>
<ul>
<li><strong>needs Power BI Premium or Premium Per User (PPU).</strong></li>
<li>The Fact table must contain a date column of type DateTime.</li>
<li>Data source must be supported Query Folding (SQL Server, SharePoint, Azure...).</li>
<li>It does not work with unsupported sources Query Folding (Files Excel local, CSV).</li>
</ul>
</div>
<div class="lesson-card">
<h3>Step-by-step setup</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Create private Parameters (their name is fixed)</h4>
<p>Create a Parameter named <strong>RangeStart</strong> And type DateTime, and another As <strong>RangeEnd</strong>. These two names are reserved in Power BI And they don't change.</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Filter the Fact table with Parameters</h4>
<div class="code-block" style="margin-top:6px;">
<span class="cm">// In Power Query — date column filter</span>
Filtered = <span class="fn">Table.SelectRows</span>(Source, each
    [OrderDate] &gt;= RangeStart &amp;&amp; [OrderDate] &lt; RangeEnd)
            </div>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Activate Incremental Refresh from Desktop</h4>
<p>Right click on the table in Fields → Incremental Refresh. Select: Keep 5 years, Update last 7 days.</p>
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<h4>Publish for Service</h4>
<p>After publishing, Power BI Service It will divide the data into... Partitions internally. all Refresh It happens Partition Only the last days.</p>
</div>
</div>
</div>
</div>
<div class="lesson-card">
<h3>Practical example — Incremental Refresh settings</h3>
<div class="code-block">
<span class="cm">// Ideal settings for an annual sales schedule</span>
Archive Data:  5 years   <span class="cm">// Keep the full 5 years</span>
Refresh Data:  14 days   <span class="cm">// Update the last 14 days (to accommodate changes)</span>
Detect Changes: OrderUpdatedAt  <span class="cm">// A column that changes when a row is modified (optional)</span>
<span class="cm">// Result: Instead of updating 50M rows → updating ~100K rows only</span>
<span class="cm">// Refresh time: from 2 hours → 3 minutes</span>
</div>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Query Folding Test:</strong> in Power QueryRight click on the last step → View Native Query. If he appears SQL Query = Query Folding He works ✅. If an error message appears = It doesn't work ❌ andIncrementalRefresh It won't work right.</p>
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
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>Import vs DirectQuery — the most important decision</h3>
</div>
<table class="compare-table">
<tr>
<th>Import Mode</th>
<th>DirectQuery Mode</th>
</tr>
<tr>
<td>Data is loaded into .pbix (VertiPaq compression).</td>
<td>Every interaction sends a Query directly to the database.</td>
</tr>
<tr>
<td>Very fast. DAX Fully supported.</td>
<td>Relatively slow. DAX Bound.</td>
</tr>
<tr>
<td>Data is not Real-Time (needs Refresh).</td>
<td>Always Real-Time.</td>
</tr>
<tr>
<td><span class="yes">✔ Default selection in 90% of cases</span></td>
<td>Only if data &gt; 1GB or Real-Time is required.</td>
</tr>
</table>
<div class="lesson-card">
<h3>Common causes of slowness and their solutions</h3>
<div class="code-block">
<span class="cm">❌ 1. Many Calculated Columns:</span>
<span class="cm">   all Calculated Column He takes RAM And he makes his account with everyone Refresh.</span>
<span class="cm">   Solution: Convert what you can to Power Query Columns (M Code).</span>
<span class="cm">❌ 2. Many-to-Many Relationships:</span>
<span class="cm">   Because Expand Table multiplies the data size.</span>
<span class="cm">   Solution: Make a bridge table that converts it to 1:Many.</span>
<span class="cm">❌ 3. Bidirectional Filters:</span>
<span class="cm">   Each Bi-directional doubles the filtration paths.</span>
<span class="cm">   the solution: use CROSSFILTER in DAX Just what you need.</span>
<span class="cm">❌ 4. SUMX On huge tables:</span>
<span class="cm">   SUMX You walk row by row — Over a million rows = Slow.</span>
<span class="cm">   Solution: Precalculate the column in Power Query.</span>
<span class="cm">❌ 5. ALL() On a large table in Measure:</span>
<span class="cm">   the solution: use REMOVEFILTERS(Column) instead ALL(Table).</span>
</div>
</div>
<div class="lesson-card">
<h3>Performance Analyzer — Measure the speed of each Visual</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>View → Performance Analyzer → Start Recording</h4>
<p>Click "Refresh visuals" and wait. Each visual will show the time taken.</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Analyze the result</h4>
<p>all Visual In it 3 times: DAX Query (The time of Measure), Visual Display (The drawing), Other. Focus on DAX Query The high.</p>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>Copy Query For DAX Studio</h4>
<p>Press "Copy Query" In the Visual Slow and paste it in DAX Studio For deeper analysis.</p>
</div>
</div>
</div>
</div>
<div class="lesson-card">
<h3>Golden rules of performance</h3>
<div class="code-block">
<span class="cm">✅ 1. Always Star Schema - not Flat Table</span>
<span class="cm">✅ 2. Measures instead of Calculated Columns</span>
<span class="cm">✅ 3. Select data types in Power Query (don’t leave them in Auto)</span>
<span class="cm">✅ 4. Clear out unused columns in Power Query before Load</span>
<span class="cm">✅ 5. VAR To store duplicate accounts in the same Measure</span>
<span class="cm">✅ 6. to avoid DISTINCT() On columns High Cardinality</span>
<span class="cm">✅ 7. Date Table is always separate and marked</span>
<span class="cm">✅ 8. Do not use IF() To prevent division error — use DIVIDE()</span>
</div>
</div>
<div class="tip-box">
<div class="icon">🚀</div>
<p><strong>DAX Studio:</strong> Separate free tool (daxstudio.org) For in-depth analysis of the performance of... DAX. You can see Server Timings, Storage Engine CallsAnd you see VertiPaq Analyzer To analyze the size of each column in the model. Professionals can't do without it.</p>
</div>` }],
  },
  "python-pbi": {
    eyebrow: "07 · 06 — Python داخل Power BI",
    title: "Python في Power BI",
    lede: "دمج Python مع Power BI يفتح أبواب التحليل الإحصائي المتقدم والمرئيات غير المتوفرة في Power BI الافتراضي — من Seaborn للـ Forecasting.",
    en_eyebrow: "07 · 06 — Python Integration",
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
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>Basic requirements</h3>
<ul>
<li>Install Python (3.x) on your machine — Anaconda Distribution preferred.</li>
<li>Required libraries: <code style="background:var(--bg4);padding:2px 6px;border-radius:4px;">pandas</code>, <code style="background:var(--bg4);padding:2px 6px;border-radius:4px;">matplotlib</code>, <code style="background:var(--bg4);padding:2px 6px;border-radius:4px;">seaborn</code></li>
<li>Set path: File → Options → Python Scripting → Select the Python folder.</li>
</ul>
</div>
<div class="lesson-card">
<h3>Using Python in Power Query (Data Transformation)</h3>
<p>The Python script can be run as a data source or as a transformation step within Power Query:</p>
<div class="code-block">
<span style="color:var(--text3);"># Import data from Python as source</span>
import pandas as pd

df = pd.read_csv('C:/data/sales.csv')
df['YearMonth'] = pd.to_datetime(df['Date']).dt.to_period('M').astype(str)
df = df[df['Sales'] &gt; 0]  <span style="color:var(--text3);"># Cleanup: Delete negative values</span>
</div>
<p style="margin-top:0.75rem;color:var(--text2);font-size:0.9rem;">Power Query automatically reads the last DataFrame in the script as a table.</p>
</div>
<div class="lesson-card">
<h3>Use Python to create a custom Visual</h3>
<p>Add <strong>Python Visual</strong> From the Visualizations Pane and drag the necessary columns:</p>
<div class="code-block">
import matplotlib.pyplot as plt
import seaborn as sns

<span style="color:var(--text3);"># dataset he DataFrame Auto from Power BI</span>
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
<h3>Statistical Analysis — Simple Forecasting</h3>
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
<p><strong>Important limitations:</strong> Python Visuals Don't work in Power BI Service directly (you need Gateway with Python Pinned). Update time may be slow with large data.</p>
</div>` }],
  },
  "paginated": {
    eyebrow: "07 · 07 — التقارير المُصفَّحة",
    title: "Paginated Reports — التقارير المُصفَّحة",
    lede: "Power BI Paginated Reports هي التقارير المصممة للطباعة والتصدير — مثالية للفواتير، كشوف الرواتب، التقارير المحاسبية التي تمتد لصفحات متعددة.",
    en_eyebrow: "07 · 07 — Paginated Reports",
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
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>When to use Paginated Reports?</h3>
<ul>
<li>When you need a report that prints perfectly, regardless of the number of pages.</li>
<li>Monthly invoices and statements for each client separately.</li>
<li>Reports contain tables with thousands of rows (Power BI Interactive He cuts it).</li>
<li>Reports are automatically sent by mail (Email Subscriptions in Power BI Service).</li>
</ul>
</div>
<div class="lesson-card">
<h3>The difference between Interactive and Paginated</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.92rem;">
<thead>
<tr style="background:var(--bg4);color:var(--gold);">
<th style="padding:10px;border:1px solid var(--border);text-align:right;">Standard</th>
<th style="padding:10px;border:1px solid var(--border);text-align:right;">Interactive (.pbix)</th>
<th style="padding:10px;border:1px solid var(--border);text-align:right;">Paginated (.rdl)</th>
</tr>
</thead>
<tbody>
<tr><td style="padding:8px;border:1px solid var(--border);">the goal</td><td style="padding:8px;border:1px solid var(--border);">Explore and interact</td><td style="padding:8px;border:1px solid var(--border);">Printing and exporting</td></tr>
<tr style="background:var(--bg4);"><td style="padding:8px;border:1px solid var(--border);">Tool</td><td style="padding:8px;border:1px solid var(--border);">Power BI Desktop</td><td style="padding:8px;border:1px solid var(--border);">Power BI Report Builder</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border);">Pages</td><td style="padding:8px;border:1px solid var(--border);">Limited to screen</td><td style="padding:8px;border:1px solid var(--border);">Automatically stretch</td></tr>
<tr style="background:var(--bg4);"><td style="padding:8px;border:1px solid var(--border);">Export</td><td style="padding:8px;border:1px solid var(--border);">PDF limited</td><td style="padding:8px;border:1px solid var(--border);">PDF, Excel, Word, CSV</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border);">Data</td><td style="padding:8px;border:1px solid var(--border);">Included in the file</td><td style="padding:8px;border:1px solid var(--border);">Live Query is live</td></tr>
</tbody>
</table>
</div>
<div class="lesson-card">
<h3>Construction tool — Power BI Report Builder</h3>
<p>Download it for free from Microsoft's website. Similar to Excel in wire charting:</p>
<ul>
<li><strong>Data Sources:</strong> Specifies the data source (Power BI Dataset, SQL Server…).</li>
<li><strong>Datasets:</strong> inquiry SQL or MDX Fetches data.</li>
<li><strong>Report Items:</strong> Table, Matrix, Chart, Image, Textbox.</li>
<li><strong>Parameters:</strong> Like a history filter — can be passed from Power BI Service.</li>
</ul>
</div>
<div class="lesson-card">
<h3>Publishing and scheduling</h3>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>Upload the report</h4>
<p>from Power BI Report Builder: Publish ← Choose the Workspace (License required Premium or PPU).</p>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>Schedule transmission</h4>
<p>in Power BI Service: Open the report ← Subscribe ← Adjust schedule, recipients, and format (PDF/Excel).</p>
</div>
</div>
</div>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Ideal use:</strong> Use Interactive Report for Executive Dashboard (managers explore), and Paginated Report for periodic statements (automatically sent to each branch/customer).</p>
</div>` }],
  },
  "kpi-finance": {
    eyebrow: "09 · 01 — المالية",
    title: "💰 المؤشرات المالية — Financial KPIs",
    lede: "أهم مؤشرات الأداء المالي المستخدمة في تحليل صحة الشركة وربحيتها. كل KPI هنا فيه معادلة DAX جاهزة، مثال عملي، وأهميته.",
    en_eyebrow: "09 · 01 — Financial KPIs",
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
        <div class="kpi-formula-label">🔷 DAX Measure — Basic</div>
        <div class="kpi-formula-box">
<span class="kw">Debt to Equity</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>( Balance[Total_Debt] ),
    <span class="fn">SUM</span>( Balance[Shareholder_Equity] )
)
        </div>
        <div class="kpi-formula-label">🔷 DAX Measure — Advanced (مع Comparison مع السنة الماضية)</div>
        <div class="kpi-formula-box">
<span class="kw">D/E Ratio with Trend</span> =
<span class="fn">VAR</span> CurrentDE =
    <span class="fn">DIVIDE</span>(
        <span class="fn">SUM</span>( Balance[Total_Debt] ),
        <span class="fn">SUM</span>( Balance[Shareholder_Equity] )
    )
<span class="fn">VAR</span> PriorYearDE =
    <span class="fn">CALCULATE</span>(
        <span class="fn">DIVIDE</span>(
            <span class="fn">SUM</span>( Balance[Total_Debt] ),
            <span class="fn">SUM</span>( Balance[Shareholder_Equity] )
        ),
        <span class="fn">SAMEPERIODLASTYEAR</span>( Dates[Date] )
    )
<span class="fn">VAR</span> Trend = CurrentDE - PriorYearDE
<span class="fn">RETURN</span>
    <span class="fn">IF</span>( Trend > <span class="num">0.1</span>, <span class="str">"🔴 ارتفاع خطير"</span>,
    <span class="fn">IF</span>( Trend > <span class="num">0</span>, <span class="str">"🟡 ارتفاع طفيف"</span>,
    <span class="fn">IF</span>( Trend < -<span class="num">0.1</span>, <span class="str">"✅ تحسن ممتاز"</span>, <span class="str">"🟢 مستقر"</span> )))
        </div>
        <div class="kpi-example">
          <div class="ex-label">📊 مثال عملي</div>
          <p><strong>2024:</strong> ديون 2,000,000 وحقوق 4,000,000 → D/E = 0.5<br>
          <strong>2023:</strong> ديون 1,500,000 وحقوق 5,000,000 → D/E = 0.3<br>
          <strong>التحليل:</strong> ارتفع الـ D/E من 0.3 إلى 0.5 (+0.2) = 🔴 ارتفاع خطير!<br>
          يعني الديون زادت والأموال الخاصة انخفضت — لازم تتحقق من السبب.</p>
        </div>
        <div class="kpi-importance">
          <div class="imp-label">⭐ الأهمية</div>
          <p>البنوك والمستثمرون بيبصوا عليه قبل أي قرض. الاتجاه أهم من الرقم نفسه — D/E بتزيد تدريجياً = خطر أكثر من ثابتة.</p>
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
    en_blocks: [{ kind: "html", html: `<div class="kpi-domain-header">
<div class="kpi-domain-icon">💰</div>
<div>
<h3>The financial domain</h3>
<p>It measures a company's overall financial health — profitability, costs, returns, and liquidity. The most important domain for company management and investors.</p>
</div>
</div>
<!-- KPI 1: Gross Profit Margin -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">1</div>
<h4>Gross profit margin <span class="kpi-en">Gross Profit Margin</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>(Revenue − Cost of Goods) ÷ Revenue x 100</p></div>
<div class="kpi-info-box"><div class="kpi-label">Good standard</div><p>Depends on the sector — segmentation: 30–50% | Technology: 60–80%</p></div>
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
<div class="ex-label">📊 Practical example</div>
<p>Company revenues <strong>5,000,000 pounds</strong> And the cost of the goods <strong>3,000,000 pounds</strong>:<br/>
          Gross Profit = 2,000,000 ÷ 5,000,000 × 100 = <strong>40%</strong><br/>
          This means that for every 100 pounds of sales, the company earns 40 pounds before operating expenses.</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>The first indicator any investor reads. If the margin decreases over time, meaning costs increase or prices decrease - you must intervene immediately.</p>
</div>
</div>
</div>
<!-- KPI 2: Net Profit Margin -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">2</div>
<h4>Net profit margin <span class="kpi-en">Net Profit Margin</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>Net profit ÷ revenue x 100</p></div>
<div class="kpi-info-box"><div class="kpi-label">Good standard</div><p>Above 10% excellent - 5-10% acceptable - less than 5% needs revision</p></div>
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
<div class="ex-label">📊 Practical example</div>
<p>Revenue <strong>5,000,000</strong> - After all expenses, net profit <strong>350,000</strong>:<br/>
          Net Margin = 350,000 ÷ 5,000,000 × 100 = <strong>7%</strong><br/>
          The real bottom line that remains with the company from every pound it sells.</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>The bottom line is the most important in any financial report. I have the full picture after all the costs, taxes and benefits. Managers base expansion decisions on it.</p>
</div>
</div>
</div>
<!-- KPI 3: Operating Expense Ratio -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">3</div>
<h4>Operating expense ratio <span class="kpi-en">Operating Expense Ratio</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>Operating expenses ÷ revenue x 100</p></div>
<div class="kpi-info-box"><div class="kpi-label">Target</div><p>The less the better - the company is more efficient in controlling its expenses</p></div>
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
<div class="ex-label">📊 Practical example</div>
<p>Operating expenses <strong>800,000</strong> On revenue <strong>5,000,000</strong>:<br/>
          OpEx Ratio = 16% — I mean 16 A penny from every pound goes into running the company (Salaries, rents, marketing...)</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>If revenues increase and the ratio is fixed or increasing, the company does not benefit from scale. What is required is that the ratio decreases as revenues grow.</p>
</div>
</div>
</div>
<!-- KPI 4: Return on Investment -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">4</div>
<h4>Return on investment <span class="kpi-en">Return on Investment (ROI)</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>(Net profit ÷ investment cost) x 100</p></div>
<div class="kpi-info-box"><div class="kpi-label">Standard</div><p>ROI positive = Successful investment / above 20% = excellent</p></div>
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
<div class="ex-label">📊 Practical example</div>
<p>I spent <strong>1,000 pounds</strong> On a machine and you get a profit <strong>200 pounds</strong>:<br/>
          ROI = 200 ÷ 1,000 × 100 = <strong>20%</strong><br/>
          This means that for every pound you invest, you will get 1.20 pounds back.</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>It helps you make a decision: invest in X no Y? Compare the ROI Between different projects, I choose the highest return with the same risk.</p>
</div>
</div>
</div>
<!-- KPI 5: Debt to Equity -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">5</div>
<h4>Debt to equity ratio <span class="kpi-en">Debt to Equity Ratio</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>Total debt ÷ shareholders' equity</p></div>
<div class="kpi-info-box"><div class="kpi-label">Standard</div><p>below 1 = Safe company / above 2 = risk</p></div>
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
<div class="ex-label">📊 Practical example</div>
<p>Company debts <strong>2,000,000</strong> and shareholders' rights <strong>4,000,000</strong>:<br/>
          D/E = 2,000,000 ÷ 4,000,000 = <strong>0.5</strong><br/>
          This means the company is financed 33% with debt and 67% with shareholders' money — a healthy situation.</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>Banks and investors look at it before making any loan or investment. A high ratio means the company relies heavily on debt to finance its activity.</p>
</div>
</div>
</div>
<!-- KPI 6: Working Capital -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">6</div>
<h4>working capital <span class="kpi-en">Working Capital</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>Current assets − current liabilities</p></div>
<div class="kpi-info-box"><div class="kpi-label">Standard</div><p>positive = The company is able to pay its short obligations</p></div>
</div>
<div class="kpi-formula-label">🔷 DAX Measure</div>
<div class="kpi-formula-box">
<span class="kw">Working Capital</span> =
<span class="fn">SUM</span>( Balance[Current_Assets] )
- <span class="fn">SUM</span>( Balance[Current_Liabilities] )
        </div>
<div class="kpi-example">
<div class="ex-label">📊 Practical example</div>
<p>Current Assets = <strong>500,000</strong> — Current Liabilities = <strong>300,000</strong>:<br/>
          Working Capital = <strong>200,000 pounds</strong><br/>
          The company has enough liquidity to comfortably cover its short-term debts.</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>The basic liquidity index - Working Capital is negative. It can go bankrupt even if it is profitable on paper! It demonstrates the company's ability to operate daily.</p>
</div>
</div>
</div>` }],
  },
  "kpi-sales": {
    eyebrow: "09 · 02 — المبيعات",
    title: "📈 مؤشرات المبيعات — Sales KPIs",
    lede: "المؤشرات الأساسية لقياس أداء فريق المبيعات ونمو الإيرادات وجودة العملاء. لازم تتابعها أسبوعياً مش بس شهرياً.",
    en_eyebrow: "09 · 02 — Sales KPIs",
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
    en_blocks: [{ kind: "html", html: `<div class="kpi-domain-header">
<div class="kpi-domain-icon">📈</div>
<div>
<h3>The sales domain</h3>
<p>It measures sales team efficiency, growth rate, and deal quality. The most important domain for sales managers and C-Level.</p>
</div>
</div>
<!-- KPI 1: Revenue Growth Rate -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">1</div>
<h4>Revenue growth rate <span class="kpi-en">Revenue Growth Rate</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>(Current period revenue − previous period) ÷ previous period x 100</p></div>
<div class="kpi-info-box"><div class="kpi-label">Standard</div><p>Growth up 15% annually = Excellent for medium companies</p></div>
</div>
<div class="kpi-formula-label">🔷 DAX Measure — with Time Intelligence</div>
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
<div class="ex-label">📊 Practical example</div>
<p>2024 revenue: <strong>5,000,000</strong> — 2023 revenues: <strong>4,200,000</strong>:<br/>
          Growth = (5,000,000 − 4,200,000) ÷ 4,200,000 × 100 = <strong>19%</strong> Annual growth</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>The primary measure of business health. Consistent growth is more important than one-time huge growth. Compare it with the average industry growth to determine the company's positioning.</p>
</div>
</div>
</div>
<!-- KPI 2: Average Order Value -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">2</div>
<h4>Average order value <span class="kpi-en">Average Order Value (AOV)</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>Total revenue ÷ number of orders</p></div>
<div class="kpi-info-box"><div class="kpi-label">Target</div><p>Increase the AOV With 10-20% = Increase revenue without new customers</p></div>
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
<div class="ex-label">📊 Practical example</div>
<p>Total revenue for the month <strong>200,000</strong> on <strong>500 requests</strong>:<br/>
          AOV = 200,000 ÷ 500 = <strong>400 pounds</strong> Average order value<br/>
          strategy upselling Can you upload it to 480 fairy = more 20% In revenue!</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>Raise the AOV Much cheaper than acquiring new customers. Follow it up with strategies upsell andcross-sell To measure its effectiveness.</p>
</div>
</div>
</div>
<!-- KPI 3: Sales Target Achievement -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">3</div>
<h4>Percentage of achieving the goal <span class="kpi-en">Sales Target Achievement %</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>Actual sales ÷ target x 100</p></div>
<div class="kpi-info-box"><div class="kpi-label">Standard</div><p>above 100% = Exceed the target / 80-100% = acceptable / below 80% = problem</p></div>
</div>
<div class="kpi-formula-label">🔷 DAX Measure — With a table Targets</div>
<div class="kpi-formula-box">
<span class="kw">Target Achievement %</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>( Sales[Actual_Revenue] ),
    <span class="fn">SUM</span>( Targets[Target_Revenue] )
) * <span class="num">100</span>
<span class="cm">-- with Conditional Color using IF</span>
<span class="kw">Achievement Status</span> =
<span class="fn">IF</span>( [Target Achievement %] &gt;= <span class="num">100</span>, <span class="str">"✅ Bypass"</span>,
<span class="fn">IF</span>( [Target Achievement %] &gt;= <span class="num">80</span>, <span class="str">"🟡 Accepted"</span>, <span class="str">"🔴 Danger"</span> ))
        </div>
<div class="kpi-example">
<div class="ex-label">📊 Practical example</div>
<p>Actual March sales <strong>480,000</strong> And the goal was <strong>500,000</strong>:<br/>
          Achievement = 480,000 ÷ 500,000 × 100 = <strong>96%</strong> — Acceptable, but close to danger</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>The simplest and quickest indicator for your sales team to follow. Do it for each salesperson, each region, and each product to determine where you need to intervene.</p>
</div>
</div>
</div>
<!-- KPI 4: Customer Lifetime Value -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">4</div>
<h4>Customer lifetime value <span class="kpi-en">Customer Lifetime Value (CLV)</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>Average purchase x purchase frequency per year x customer years</p></div>
<div class="kpi-info-box"><div class="kpi-label">Target</div><p>A CLV:CAC ratio of at least 3:1 means customer acquisition is healthy.</p></div>
</div>
<div class="kpi-formula-label">🔷 DAX Measure</div>
<div class="kpi-formula-box">
<span class="kw">CLV</span> =
<span class="fn">VAR</span> AvgPurchase =
    <span class="fn">AVERAGEX</span>( Customers, [Total Revenue per Customer] )
<span class="fn">VAR</span> PurchaseFreq =
    <span class="fn">DIVIDE</span>( <span class="fn">COUNTROWS</span>( Orders ), <span class="fn">DISTINCTCOUNT</span>( Orders[Customer_ID] ) )
<span class="fn">RETURN</span>
    AvgPurchase * PurchaseFreq * <span class="num">3</span> <span class="cm">--If the average age of the customer is 3 years</span>
</div>
<div class="kpi-example">
<div class="ex-label">📊 Practical example</div>
<p>Average customer purchase <strong>500 pounds</strong> - He buys <strong>4 times</strong> A year - and remains <strong>3 years</strong>:<br/>
          CLV = 500 × 4 × 3 = <strong>6,000 pounds</strong> - This means that it is worth spending up to 2,000 pounds to acquire it.</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>It determines how much you can spend to acquire a new customer. Companies know CLV She competes stronger because she knows what to do.</p>
</div>
</div>
</div>
<!-- KPI 5: Conversion Rate -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">5</div>
<h4>Conversion rate <span class="kpi-en">Sales Conversion Rate</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>Number of closed trades ÷ total opportunities x 100</p></div>
<div class="kpi-info-box"><div class="kpi-label">Standard</div><p>B2B: 20-30% good / B2C: 1-3% normal depending on the sector</p></div>
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
<div class="ex-label">📊 Practical example</div>
<p>He has a sales team <strong>200 chances</strong> In the pipeline and close them <strong>50 deals</strong>:<br/>
          Conversion = 50 ÷ 200 × 100 = <strong>25%</strong> — Compare it with competitors and the previous month.</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>It reveals the sales team's efficiency in closing deals. if rate Low with leads A lot = The problem is the quality of sales, not the quality of marketing.</p>
</div>
</div>
</div>` }],
  },
  "kpi-inventory": {
    eyebrow: "09 · 03 — المخزون والإمداد",
    title: "📦 مؤشرات المخزون وسلسلة الإمداد — Inventory & Supply KPIs",
    lede: "مؤشرات بتقيس كفاءة إدارة المخزون والديون التجارية. حرجة جداً في قطاعات التجزئة والتصنيع والتوزيع.",
    en_eyebrow: "09 · 03 — Inventory KPIs",
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
    en_blocks: [{ kind: "html", html: `<div class="kpi-domain-header">
<div class="kpi-domain-icon">📦</div>
<div>
<h3>The Domain — Supply Chain</h3>
<p>It measures the speed of inventory turnover, debt collection, and the company's relationship with its suppliers and customers on the financial side.</p>
</div>
</div>
<!-- KPI 1: Inventory Turnover -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">1</div>
<h4>Inventory turnover rate <span class="kpi-en">Inventory Turnover</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>Cost of goods sold ÷ average inventory</p></div>
<div class="kpi-info-box"><div class="kpi-label">Standard</div><p>The higher the better — split: 4-6 times a year is good</p></div>
</div>
<div class="kpi-formula-label">🔷 DAX Measure</div>
<div class="kpi-formula-box">
<span class="kw">Inventory Turnover</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>( Sales[COGS] ),
    <span class="fn">AVERAGE</span>( Inventory[Inventory_Value] )
)

<span class="cm">-- Days in Inventory</span>
<span class="kw">Days in Inventory</span> = <span class="fn">DIVIDE</span>( <span class="num">365</span>, [Inventory Turnover] )
        </div>
<div class="kpi-example">
<div class="ex-label">📊 Practical example</div>
<p>COGS = <strong>3,000,000</strong> — Average inventory = <strong>500,000</strong>:<br/>
          Turnover = 6 times a year — all <strong>61 days</strong> Stock is fully replenished<br/>
          if 2 Only a few times = Stagnant stock = Loss of financing and storage.</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>Slow stock = Withheld funds without return + Storage costs + Risk of damage. Very fast stock = Risk of running out. Balance must be made according to the nature of the product.</p>
</div>
</div>
</div>
<!-- KPI 2: DSO -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">2</div>
<h4>Days of sales pending <span class="kpi-en">Days Sales Outstanding (DSO)</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>(Receivables ÷ Total forward sales) x 365</p></div>
<div class="kpi-info-box"><div class="kpi-label">Target</div><p>The lower the better — reflects the speed with which debts can be collected from customers</p></div>
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
<div class="ex-label">📊 Practical example</div>
<p>accounts receivable: <strong>100,000</strong> — Annual forward sales: <strong>1,200,000</strong>:<br/>
          DSO = (100,000 ÷ 1,200,000) × 365 = <strong>30 days</strong><br/>
          This means that the company takes 30 days to collect its money from customers on average.</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>DSO high = Customers are late in paying = Pressure on liquidity. if DSO &gt; Agreed payment terms = A collection problem that needs investigation.</p>
</div>
</div>
</div>
<!-- KPI 3: AP Days -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">3</div>
<h4>Supplier payment days <span class="kpi-en">Accounts Payable Days</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>(Receivables ÷ Cost of Goods) x 365</p></div>
<div class="kpi-info-box"><div class="kpi-label">Strategy</div><p>Strive for AP Days Taller than DSO = The company takes its money before it pays it</p></div>
</div>
<div class="kpi-formula-label">🔷 DAX Measure</div>
<div class="kpi-formula-box">
<span class="kw">AP Days</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">SUM</span>( Payables[Accounts_Payable] ),
    <span class="fn">SUM</span>( Sales[COGS] )
) * <span class="num">365</span>
<span class="cm">-- comparison DSO vs AP Days</span>
<span class="kw">Cash Position Status</span> =
<span class="fn">IF</span>( [AP Days] &gt; [DSO], <span class="str">“✅ Good liquidity position”</span>, <span class="str">“⚠️ Pressure on liquidity”</span> )
        </div>
<div class="kpi-example">
<div class="ex-label">📊 Practical example</div>
<p>DSO = <strong>30 days</strong> (You take your money from clients within 30 days)<br/>
          AP Days = <strong>45 days</strong> (You pay the suppliers after 45 days)<br/>
          Result: you have it <strong>15 days</strong> It uses suppliers' money — an ideal situation!</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>balance between DSO andAP Days It is the secret of liquidity management. Companies like Walmart keep... AP Days Very high as a free financing tool from suppliers.</p>
</div>
</div>
</div>
<!-- KPI 4: Cost to Revenue -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">4</div>
<h4>Cost to revenue ratio <span class="kpi-en">Cost to Revenue Ratio</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>Total costs ÷ revenue x 100</p></div>
<div class="kpi-info-box"><div class="kpi-label">Standard</div><p>below 70% = Good margin / above 90% = The company is about to lose</p></div>
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
<div class="ex-label">📊 Practical example</div>
<p>Revenue <strong>5,000,000</strong> —Total costs <strong>3,800,000</strong>:<br/>
          Cost to Revenue = 76% — I mean 76 A penny from every pound of sales goes toward costs<br/>
          Available net profit margin = 24% but.</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>It explains how much revenue turns into profits. You follow it monthly and analyze where exactly the costs are rising — Are you in? COGS Nor in operating expenses.</p>
</div>
</div>
</div>` }],
  },
  "kpi-hr": {
    eyebrow: "09 · 04 — الموارد البشرية",
    title: "👥 مؤشرات الموارد البشرية — HR KPIs",
    lede: "المؤشرات الأساسية لقياس كفاءة القوى البشرية وتكاليف التوظيف والاحتفاظ بالموظفين. مهمة جداً في الشركات الكبيرة.",
    en_eyebrow: "09 · 04 — HR KPIs",
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
    en_blocks: [{ kind: "html", html: `<div class="kpi-domain-header">
<div class="kpi-domain-icon">👥</div>
<div>
<h3>The Domain — Human Resources</h3>
<p>It measures workplace health, employee costs, and productivity. Its data usually comes from HR systems such as SAP, Oracle, or even Excel.</p>
</div>
</div>
<!-- KPI 1: Employee Turnover Rate -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">1</div>
<h4>Staff turnover rate <span class="kpi-en">Employee Turnover Rate</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>(Number of departing employees ÷ Average number of employees) x 100</p></div>
<div class="kpi-info-box"><div class="kpi-label">Standard</div><p>below 10% annually = healthy / above 20% = An administrative or work environment problem</p></div>
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
<div class="ex-label">📊 Practical example</div>
<p>Company B <strong>200 employees</strong> — He left them <strong>30 employees</strong> During the year:<br/>
          Turnover = 30 ÷ 200 × 100 = <strong>15%</strong><br/>
          Every employee who leaves costs the company approximately 50-200% of his annual salary in rehiring costs!</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>Turnover high = Huge costs + Loss of experiences + Impact on team morale. You must analyze the reasons for leaving in detail exit interviews.</p>
</div>
</div>
</div>
<!-- KPI 2: Cost per Hire -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">2</div>
<h4>Recruitment cost <span class="kpi-en">Cost per Hire</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>Total staffing costs ÷ number of employees hired</p></div>
<div class="kpi-info-box"><div class="kpi-label">Standard</div><p>Varies by role — Includes ads + Agencies + time HR + Onboarding</p></div>
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
<div class="ex-label">📊 Practical example</div>
<p>First quarter hiring costs <strong>150,000 pounds</strong> — has been set <strong>25 employees</strong>:<br/>
          Cost per Hire = <strong>6,000 pounds</strong> For one employee<br/>
          Compare it with the previous quarter to measure the improvement in department efficiency HR.</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>cut Cost per Hire Without reducing the quality of employment is the goal of every HR. Measuring it accurately reveals where the excess spending is — Agencies? advertisements? Long procedures?</p>
</div>
</div>
</div>
<!-- KPI 3: Absenteeism Rate -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">3</div>
<h4>Absence rate <span class="kpi-en">Absenteeism Rate</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>(Days absent ÷ Total available work days) x 100</p></div>
<div class="kpi-info-box"><div class="kpi-label">Standard</div><p>below 3% = natural / above 5% = A problem in the work environment or management</p></div>
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
<div class="ex-label">📊 Practical example</div>
<p>Team of <strong>50 employees</strong> × <strong>20 working days</strong> = 1,000 Available day<br/>
          Total days of unexcused absence = <strong>45 days</strong><br/>
          Absenteeism = 45 ÷ 1,000 × 100 = <strong>4.5%</strong> - Needs follow-up.</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>A sudden increase in absenteeism = Early warning of problems in the work environment, excessive work pressure, or poor management. Detect it early before it turns into... turnover.</p>
</div>
</div>
</div>
<!-- KPI 4: Revenue per Employee -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">4</div>
<h4>Revenue per employee <span class="kpi-en">Revenue per Employee</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>Total revenue ÷ number of employees</p></div>
<div class="kpi-info-box"><div class="kpi-label">Standard</div><p>Team Productivity Metric — Tech: Millions / Retail: Hundreds of Thousands</p></div>
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
<div class="ex-label">📊 Practical example</div>
<p>Revenue <strong>10,000,000 pounds</strong> - Number of employees <strong>50 employees</strong>:<br/>
          Revenue per Employee = <strong>200,000 pounds</strong> For each employee annually<br/>
          If you are hired 10 New employees and the number has not increased = Efficiency decreases.</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>The simplest measure of team productivity. Its rise with revenue growth means the company achieves real economies of scale from manpower.</p>
</div>
</div>
</div>` }],
  },
  "kpi-marketing": {
    eyebrow: "09 · 05 — التسويق",
    title: "📣 مؤشرات التسويق — Marketing KPIs",
    lede: "مؤشرات قياس كفاءة الإنفاق التسويقي، اكتساب العملاء، والاحتفاظ بهم. لازم تُربط دائماً بإيرادات حقيقية مش مجرد vanity metrics.",
    en_eyebrow: "09 · 05 — Marketing KPIs",
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
    en_blocks: [{ kind: "html", html: `<div class="kpi-domain-header">
<div class="kpi-domain-icon">📣</div>
<div>
<h3>The Marketing Domain</h3>
<p>It measures return on marketing spend and the efficiency of acquiring and retaining customers. Its data usually comes from Google Ads, Meta, and CRM systems.</p>
</div>
</div>
<!-- KPI 1: CAC -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">1</div>
<h4>Customer acquisition cost <span class="kpi-en">Customer Acquisition Cost (CAC)</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>Total marketing and sales costs ÷ number of new customers</p></div>
<div class="kpi-info-box"><div class="kpi-label">Target</div><p>CAC should stay below one-third of CLV — aim for a CLV:CAC ratio of at least 3:1.</p></div>
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

<span class="cm">-- rate CLV to CAC</span>
<span class="kw">CLV to CAC Ratio</span> = <span class="fn">DIVIDE</span>( [CLV], [CAC] )
        </div>
<div class="kpi-example">
<div class="ex-label">📊 Practical example</div>
<p>Marketing spend + sales <strong>100,000 pounds</strong> - New clients: <strong>50 clients</strong>:<br/>
          CAC = 100,000 ÷ 50 = <strong>2,000 pounds</strong> For every customer<br/>
          if CLV = 8,000 → rate 4:1 = A very successful investment ✅</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>Many companies go bankrupt because they spend more on acquiring customers than they bring in. Measuring it accurately is the difference between sustainable growth and suicidal growth.</p>
</div>
</div>
</div>
<!-- KPI 2: ROAS -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">2</div>
<h4>Return on advertising spend <span class="kpi-en">Return on Ad Spend (ROAS)</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>Advertising revenue ÷ Advertising cost</p></div>
<div class="kpi-info-box"><div class="kpi-label">Standard</div><p>ROAS 4x = excellent — below 2x = problem — Varies according to margin</p></div>
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
<div class="ex-label">📊 Practical example</div>
<p>Spent <strong>50,000 pounds</strong> On Facebook Ads — generate revenue <strong>200,000 pounds</strong>:<br/>
          ROAS = 200,000 ÷ 50,000 = <strong>4x</strong> - This means that for every pound of advertising, you will get 4 pounds of sales back ✅</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>compare ROAS Between each advertising channel (Facebook vs Google vs TikTok) To shift budget to the highest performing channels and reduce spending on the weakest.</p>
</div>
</div>
</div>
<!-- KPI 3: Customer Retention Rate -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">3</div>
<h4>Customer retention rate <span class="kpi-en">Customer Retention Rate</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>((End of period customers − New customers) ÷ Beginning of period customers) x 100</p></div>
<div class="kpi-info-box"><div class="kpi-label">Standard</div><p>above 85% = excellent / below 70% = Customer satisfaction problem</p></div>
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
<div class="ex-label">📊 Practical example</div>
<p>I started the month with <strong>500 clients</strong> — gained <strong>50 new</strong> - End of the month <strong>510 clients</strong>:<br/>
          Retention = (510 − 50) ÷ 500 × 100 = <strong>92%</strong> ✅ — I mean Churn = 8%</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>Retaining an existing customer is 5-7 times cheaper than acquiring a new one. A low Retention Rate means all marketing efforts fill a holey bucket.</p>
</div>
</div>
</div>
<!-- KPI 4: Net Promoter Score -->
<div class="kpi-card">
<div class="kpi-card-header">
<div class="kpi-num">4</div>
<h4>Net Promoter Index <span class="kpi-en">Net Promoter Score (NPS)</span></h4>
</div>
<div class="kpi-card-body">
<div class="kpi-grid">
<div class="kpi-info-box"><div class="kpi-label">Equation</div><p>% Promoters (9-10) − % Detractors (0-6)</p></div>
<div class="kpi-info-box"><div class="kpi-label">Standard</div><p>above 50 = excellent / 0-30 = good / negative = Serious problem</p></div>
</div>
<div class="kpi-formula-label">🔷 DAX Measure</div>
<div class="kpi-formula-box">
<span class="kw">NPS</span> =
<span class="fn">VAR</span> Promoters =
    <span class="fn">DIVIDE</span>(
        <span class="fn">CALCULATE</span>( <span class="fn">COUNTROWS</span>(Surveys), Surveys[Score] &gt;= <span class="num">9</span> ),
        <span class="fn">COUNTROWS</span>(Surveys)
    ) * <span class="num">100</span>
<span class="fn">VAR</span> Detractors =
    <span class="fn">DIVIDE</span>(
        <span class="fn">CALCULATE</span>( <span class="fn">COUNTROWS</span>(Surveys), Surveys[Score] &lt;= <span class="num">6</span> ),
        <span class="fn">COUNTROWS</span>(Surveys)
    ) * <span class="num">100</span>
<span class="fn">RETURN</span> Promoters - Detractors
        </div>
<div class="kpi-example">
<div class="ex-label">📊 Practical example</div>
<p>100 polls — 60 favorable (9-10) — 15 neutral (7-8) — 25 detractors (0-6):<br/>
          NPS = 60% − 25% = <strong>35</strong> - Good but there is room for improvement<br/>
          Analyze the detractors' complaints to identify the root problems.</p>
</div>
<div class="kpi-importance">
<div class="imp-label">⭐ Importance</div>
<p>The simplest and most powerful measure of customer satisfaction and loyalty. Directly linked to organic growth — NPS High means your customers are marketing for you for free.</p>
</div>
</div>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Pro Tip:</strong> in Power BI, connect all the KPI domains Some on one page "Executive Dashboard" With slicers Timeframe so that managers can see the full picture at a glance.</p>
</div>` }],
  },

  // ==================== درس جديد: Query Folding و الأداء ====================
  "query-folding": {
    eyebrow: "02 · 05 — Query Folding و الأداء",
    title: "Query Folding و الأداء",
    lede: "فهم كيفية عمل Query Folding في Power Query وأثره الحقيقي على أداء التحديث والاستعلامات",
    en_eyebrow: "02 · 05 — Query Folding & Performance",
    en_lede: "Understanding how Query Folding works in Power Query and its real impact on refresh performance and query execution",
    sectionId: "query-folding",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>ما هي Query Folding؟</h3>
      <p>Query Folding هي القدرة على دفع (Push) عمليات التحويل إلى المصدر الأصلي للبيانات (SQL Server, Excel, إلخ) بدلاً من تحميل جميع البيانات وتحويلها في Power Query.</p>
      <p>عندما تكتب خطوات في Power Query:</p>
      <ul>
        <li><strong>مع Folding:</strong> يتم تحويل الخطوات إلى SQL Query يُنفذ في قاعدة البيانات مباشرة</li>
        <li><strong>بدون Folding:</strong> يتم تحميل جميع البيانات أولاً ثم تحويلها محلياً</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>كيفية التحقق من Query Folding</h3>
      <p><strong>الطريقة الأولى: عرض استعلام الأصل</strong></p>
      <ol>
        <li>انقر بزر الفأرة الأيمن على الخطوة قبل التي تريد فحصها</li>
        <li>اختر "View Native Query" أو "Trace Data Source Query"</li>
        <li>إذا رأيت SQL query معقد = Folding يعمل ✅</li>
        <li>إذا رأيت رسالة "Native Query not available" = لا Folding 🚫</li>
      </ol>
      <p><strong>الطريقة الثانية: استخدام Query Diagnostics</strong></p>
      <ul>
        <li>Power Query Editor → Home → Diagnostics → Query Diagnostics</li>
        <li>شغل الاستعلام وشاهد الخطوات التي تُنفذ في المصدر</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>قانون ذهبي:</strong> كلما زاد عدد الخطوات التي تُفحص بـ "View Native Query" وترجع SQL، كان الأداء أفضل والتحديث أسرع.</p>
    </div>

    <div class="lesson-card">
      <h3>العمليات التي تدعم Folding والتي لا تدعمها</h3>
      <table style="width:100%; border-collapse:collapse; margin:15px 0;">
        <tr style="background:var(--ink-light);">
          <th style="border:1px solid var(--ink-2); padding:10px; text-align:right;">✅ تدعم Folding</th>
          <th style="border:1px solid var(--ink-2); padding:10px; text-align:right;">🚫 لا تدعم Folding</th>
        </tr>
        <tr>
          <td style="border:1px solid var(--ink-2); padding:10px;">Remove Columns</td>
          <td style="border:1px solid var(--ink-2); padding:10px;">Add Custom Column (عادة)</td>
        </tr>
        <tr>
          <td style="border:1px solid var(--ink-2); padding:10px;">Filter Rows</td>
          <td style="border:1px solid var(--ink-2); padding:10px;">Merge Queries (عادة)</td>
        </tr>
        <tr>
          <td style="border:1px solid var(--ink-2); padding:10px;">Rename Column</td>
          <td style="border:1px solid var(--ink-2); padding:10px;">Group By (في حالات)</td>
        </tr>
        <tr>
          <td style="border:1px solid var(--ink-2); padding:10px;">Sort Rows</td>
          <td style="border:1px solid var(--ink-2); padding:10px;">Unpivot</td>
        </tr>
        <tr>
          <td style="border:1px solid var(--ink-2); padding:10px;">Select Columns</td>
          <td style="border:1px solid var(--ink-2); padding:10px;">Text.Replace في عمود</td>
        </tr>
      </table>
    </div>

    <div class="lesson-card">
      <h3>قصة حقيقية: الفرق الكبير</h3>
      <p><strong>السيناريو:</strong> جدول بـ 5 ملايين صف من مبيعات قديمة تريد تصفيتها لسنة واحدة فقط</p>
      <p><strong>مع Folding (الصحيح):</strong></p>
      <ul>
        <li>Filter by Date → WHERE Date >= 2024</li>
        <li>الخادم يرسل فقط 100,000 صف</li>
        <li>وقت التحديث: 5 ثوانٍ ⚡</li>
      </ul>
      <p><strong>بدون Folding (الخطأ الشائع):</strong></p>
      <ul>
        <li>تحميل 5 ملايين صف كاملاً</li>
        <li>ثم تصفيتها محلياً في الكمبيوتر</li>
        <li>استهلاك ذاكرة ضخم وتحديث بطيء جداً</li>
        <li>وقت التحديث: دقيقة أو أكثر 🐌</li>
      </ul>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>التحذير الأساسي:</strong> بعض العمليات تكسر Folding فوراً. إذا رأيت "Native Query not available" بعد خطوة معينة، اعلم أن جميع الخطوات التي بعدها ستُنفذ محلياً (توقف الـ Folding). رتب خطواتك بذكاء: ضع كل العمليات التي تدعم Folding أولاً.</p>
    </div>

    <div class="lesson-card">
      <h3>استراتيجية التعامل مع Folding</h3>
      <p><strong>1. افحص دائماً</strong></p>
      <p>قبل حفظ الـ Query، افحص كل خطوة بـ "View Native Query"</p>
      <p><strong>2. ضع العمليات الثقيلة أولاً</strong></p>
      <p>رتب الخطوات: Filter → Remove Columns → Rename → بعدها أي عمليات معقدة</p>
      <p><strong>3. استخدم الـ Staging Table</strong></p>
      <p>إذا كنت بحاجة عمليات معقدة، أنشئ Staging Query تدعم Folding بشكل كامل، ثم Merge معها</p>
      <p><strong>4. اختبر مع عينات صغيرة</strong></p>
      <p>جرب الـ Query أثناء الكتابة على عينة بـ 1000 صف لرؤية السرعة</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>What is Query Folding?</h3>
<p>Query Folding is the ability to push transformation operations to the original data source (SQL Server, Excel, etc.) instead of loading all data and transforming it in Power Query.</p>
<p>When you write steps in Power Query:</p>
<ul>
<li><strong>With Folding:</strong> Steps are converted into a SQL query executed directly in the database</li>
<li><strong>Without Folding:</strong> All data is loaded first, then transformed locally</li>
</ul>
</div>
<div class="lesson-card">
<h3>How to Check Query Folding</h3>
<p><strong>Method 1: View Native Query</strong></p>
<ol>
<li>Right-click on the step before the one you want to inspect</li>
<li>Select "View Native Query" or "Trace Data Source Query"</li>
<li>If you see a complex SQL query = Folding is working ✅</li>
<li>If you see "Native Query not available" message = No Folding 🚫</li>
</ol>
<p><strong>Method 2: Use Query Diagnostics</strong></p>
<ul>
<li>Power Query Editor → Home → Diagnostics → Query Diagnostics</li>
<li>Run the query and watch which steps execute at the source</li>
</ul>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Golden Rule:</strong> The more steps that check out with "View Native Query" and return SQL, the better the performance and the faster the refresh.</p>
</div>
<div class="lesson-card">
<h3>Operations Supporting and Not Supporting Folding</h3>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<tr style="background:var(--ink-light);">
<th style="border:1px solid var(--ink-2); padding:10px;">✅ Supports Folding</th>
<th style="border:1px solid var(--ink-2); padding:10px;">🚫 No Folding Support</th>
</tr>
<tr>
<td style="border:1px solid var(--ink-2); padding:10px;">Remove Columns</td>
<td style="border:1px solid var(--ink-2); padding:10px;">Add Custom Column (usually)</td>
</tr>
<tr>
<td style="border:1px solid var(--ink-2); padding:10px;">Filter Rows</td>
<td style="border:1px solid var(--ink-2); padding:10px;">Merge Queries (usually)</td>
</tr>
<tr>
<td style="border:1px solid var(--ink-2); padding:10px;">Rename Column</td>
<td style="border:1px solid var(--ink-2); padding:10px;">Group By (in some cases)</td>
</tr>
<tr>
<td style="border:1px solid var(--ink-2); padding:10px;">Sort Rows</td>
<td style="border:1px solid var(--ink-2); padding:10px;">Unpivot</td>
</tr>
<tr>
<td style="border:1px solid var(--ink-2); padding:10px;">Select Columns</td>
<td style="border:1px solid var(--ink-2); padding:10px;">Text.Replace on column</td>
</tr>
</table>
</div>
<div class="lesson-card">
<h3>Real-World Story: The Big Difference</h3>
<p><strong>Scenario:</strong> A table with 5 million old sales rows that you want to filter to one year only</p>
<p><strong>With Folding (Correct):</strong></p>
<ul>
<li>Filter by Date → WHERE Date >= 2024</li>
<li>Server sends only 100,000 rows</li>
<li>Refresh time: 5 seconds ⚡</li>
</ul>
<p><strong>Without Folding (Common Mistake):</strong></p>
<ul>
<li>Load all 5 million rows completely</li>
<li>Then filter them locally on your computer</li>
<li>Huge memory consumption and slow refresh</li>
<li>Refresh time: a minute or more 🐌</li>
</ul>
</div>
<div class="warn-box">
<div class="icon">⚠️</div>
<p><strong>Critical Warning:</strong> Some operations break Folding immediately. If you see "Native Query not available" after a certain step, know that all steps after it will execute locally (Folding stops). Arrange your steps wisely: put all Folding-supporting operations first.</p>
</div>
<div class="lesson-card">
<h3>Query Folding Strategy</h3>
<p><strong>1. Always Inspect</strong></p>
<p>Before saving the query, check each step with "View Native Query"</p>
<p><strong>2. Put Heavy Operations First</strong></p>
<p>Order steps: Filter → Remove Columns → Rename → then any complex operations</p>
<p><strong>3. Use Staging Tables</strong></p>
<p>If you need complex operations, create a Staging Query that fully supports Folding, then Merge with it</p>
<p><strong>4. Test with Small Samples</strong></p>
<p>Try the query while writing it on a sample of 1,000 rows to see the speed</p>
</div>` }],
  },

  // ==================== درس جديد: DirectQuery vs Import vs Live ====================
  "directquery": {
    eyebrow: "03 · 04 — DirectQuery vs Import vs Live Connection",
    title: "DirectQuery vs Import vs Live Connection",
    lede: "فهم الفروقات الجوهرية بين أنماط الاتصال الثلاثة واختيار الأنسب لحالتك",
    en_eyebrow: "03 · 04 — DirectQuery vs Import vs Live Connection",
    en_lede: "Understanding the fundamental differences between the three connection modes and choosing the right one for your case",
    sectionId: "directquery",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>المقارنة السريعة</h3>
      <table style="width:100%; border-collapse:collapse; margin:15px 0;">
        <tr style="background:var(--ink-light);">
          <th style="border:1px solid var(--ink-2); padding:10px; text-align:right;">الخاصية</th>
          <th style="border:1px solid var(--ink-2); padding:10px;">Import</th>
          <th style="border:1px solid var(--ink-2); padding:10px;">DirectQuery</th>
          <th style="border:1px solid var(--ink-2); padding:10px;">Live Connection</th>
        </tr>
        <tr>
          <td style="border:1px solid var(--ink-2); padding:10px; text-align:right;"><strong>حجم البيانات</strong></td>
          <td style="border:1px solid var(--ink-2); padding:10px;">حتى 1 GB</td>
          <td style="border:1px solid var(--ink-2); padding:10px;">ضخمة جداً</td>
          <td style="border:1px solid var(--ink-2); padding:10px;">ضخمة جداً</td>
        </tr>
        <tr>
          <td style="border:1px solid var(--ink-2); padding:10px; text-align:right;"><strong>الأداء</strong></td>
          <td style="border:1px solid var(--ink-2); padding:10px;">سريع جداً ⚡⚡⚡</td>
          <td style="border:1px solid var(--ink-2); padding:10px;">يعتمد على الشبكة ⏳</td>
          <td style="border:1px solid var(--ink-2); padding:10px;">يعتمد على الشبكة ⏳</td>
        </tr>
        <tr>
          <td style="border:1px solid var(--ink-2); padding:10px; text-align:right;"><strong>التحديث الفوري</strong></td>
          <td style="border:1px solid var(--ink-2); padding:10px;">حسب جدول التحديث</td>
          <td style="border:1px solid var(--ink-2); padding:10px;">دائماً آخر بيانات ✅</td>
          <td style="border:1px solid var(--ink-2); padding:10px;">دائماً آخر بيانات ✅</td>
        </tr>
        <tr>
          <td style="border:1px solid var(--ink-2); padding:10px; text-align:right;"><strong>الميزات المتقدمة</strong></td>
          <td style="border:1px solid var(--ink-2); padding:10px;">جميع DAX الميزات</td>
          <td style="border:1px solid var(--ink-2); padding:10px;">محدودة</td>
          <td style="border:1px solid var(--ink-2); padding:10px;">محدودة جداً</td>
        </tr>
      </table>
    </div>

    <div class="lesson-card">
      <h3>Import Mode: التقليدي والموثوق</h3>
      <p><strong>ماذا يحدث:</strong> تحميل البيانات من المصدر إلى ذاكرة Power BI، مرة واحدة أو حسب جدول معين</p>
      <p><strong>المميزات:</strong></p>
      <ul>
        <li>✅ أسرع أداء ممكنة (البيانات في الذاكرة)</li>
        <li>✅ جميع ميزات DAX متاحة</li>
        <li>✅ يعمل بدون اتصال إنترنت بعد التحميل</li>
        <li>✅ أفضل للبيانات التاريخية والمقارنات</li>
      </ul>
      <p><strong>العيوب:</strong></p>
      <ul>
        <li>❌ محدود بحجم الملف (1 GB في عادي، 10 GB في Premium)</li>
        <li>❌ بيانات غير مباشرة (متأخرة حسب جدول التحديث)</li>
        <li>❌ يحتاج تحديث منتظم</li>
      </ul>
      <p><strong>الحالات المثالية:</strong></p>
      <ul>
        <li>البيانات الصغيرة والمتوسطة (أقل من 500 MB)</li>
        <li>التقارير اليومية والأسبوعية</li>
        <li>البيانات التاريخية والتحليل العميق</li>
        <li>عندما تحتاج ميزات DAX متقدمة</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>DirectQuery Mode: البيانات الحية المباشرة</h3>
      <p><strong>ماذا يحدث:</strong> لا تحميل بيانات نهائياً! كل نقرة على الـ Slicer أو تصفية تُرسل استعلام SQL إلى المصدر</p>
      <p><strong>المميزات:</strong></p>
      <ul>
        <li>✅ بيانات حية دائماً (تحديث فوري)</li>
        <li>✅ لا حد أقصى لحجم البيانات</li>
        <li>✅ استهلاك ذاكرة محدود جداً</li>
        <li>✅ مثالي للبيانات الكبيرة جداً</li>
      </ul>
      <p><strong>العيوب:</strong></p>
      <ul>
        <li>❌ أداء أبطأ (تعتمد على السرعة والشبكة)</li>
        <li>❌ ميزات DAX محدودة (بعض الدوال لا تعمل)</li>
        <li>❌ تحتاج Gateway في Power BI Service</li>
        <li>❌ سيء للبيانات التاريخية والـ Comparisons</li>
        <li>❌ قد يشكل ضغط على قاعدة البيانات</li>
      </ul>
      <p><strong>الحالات المثالية:</strong></p>
      <ul>
        <li>البيانات الضخمة جداً (مليارات الصفوف)</li>
        <li>التقارير الفورية (Operational Dashboards)</li>
        <li>البيانات التي تتغير بسرعة كل دقائق</li>
        <li>عندما لا تحتاج ميزات DAX معقدة</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Live Connection: الاتصال المباشر بـ Analysis Services</h3>
      <p><strong>ماذا يحدث:</strong> اتصال مباشر بـ SQL Server Analysis Services أو Azure Analysis Services (Tabular Models)</p>
      <p><strong>المميزات:</strong></p>
      <ul>
        <li>✅ بيانات حية دائماً</li>
        <li>✅ استفادة من نموذج موجود على السيرفر</li>
        <li>✅ أمان ممركز</li>
      </ul>
      <p><strong>العيوب:</strong></p>
      <ul>
        <li>❌ لا يمكن تعديل النموذج</li>
        <li>❌ ميزات محدودة جداً</li>
        <li>❌ يحتاج بنية موجودة بالفعل</li>
      </ul>
      <p><strong>الحالات المثالية:</strong></p>
      <ul>
        <li>شركات كبيرة عندها Analysis Services بالفعل</li>
        <li>Data Warehouses مركزية</li>
      </ul>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>التحذير الأهم:</strong> اختيار الـ Mode الخطأ قد يسبب كارثة. إذا اخترت Import لبيانات ضخمة جداً ستفقد فعالية النموذج. وإذا اخترت DirectQuery لمشروع معقد ستفقد جميع ميزات DAX المتقدمة.</p>
    </div>

    <div class="lesson-card">
      <h3>الاختيار الذكي: Hybrid Approach</h3>
      <p><strong>الحل الأفضل في كثير من الحالات: استخدام كلا النمطين معاً!</strong></p>
      <p><strong>السيناريو:</strong> جدول مبيعات كبير جداً (ضخم) + جدول أبعاد صغير (منتجات)</p>
      <p><strong>الحل الهجين:</strong></p>
      <ul>
        <li>جدول المبيعات → DirectQuery (يبقى حي)</li>
        <li>جدول المنتجات → Import (سريع)</li>
        <li>الربط بينهما عادي</li>
      </ul>
      <p><strong>النتيجة:</strong> أداء جيدة مع بيانات حية وميزات DAX متاحة!</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>Quick Comparison</h3>
<table style="width:100%; border-collapse:collapse; margin:15px 0;">
<tr style="background:var(--ink-light);">
<th style="border:1px solid var(--ink-2); padding:10px;">Feature</th>
<th style="border:1px solid var(--ink-2); padding:10px;">Import</th>
<th style="border:1px solid var(--ink-2); padding:10px;">DirectQuery</th>
<th style="border:1px solid var(--ink-2); padding:10px;">Live Connection</th>
</tr>
<tr>
<td style="border:1px solid var(--ink-2); padding:10px;"><strong>Data Size</strong></td>
<td style="border:1px solid var(--ink-2); padding:10px;">Up to 1 GB</td>
<td style="border:1px solid var(--ink-2); padding:10px;">Extremely large</td>
<td style="border:1px solid var(--ink-2); padding:10px;">Extremely large</td>
</tr>
<tr>
<td style="border:1px solid var(--ink-2); padding:10px;"><strong>Performance</strong></td>
<td style="border:1px solid var(--ink-2); padding:10px;">Very fast ⚡⚡⚡</td>
<td style="border:1px solid var(--ink-2); padding:10px;">Network dependent ⏳</td>
<td style="border:1px solid var(--ink-2); padding:10px;">Network dependent ⏳</td>
</tr>
<tr>
<td style="border:1px solid var(--ink-2); padding:10px;"><strong>Real-time Updates</strong></td>
<td style="border:1px solid var(--ink-2); padding:10px;">Scheduled refresh</td>
<td style="border:1px solid var(--ink-2); padding:10px;">Always latest ✅</td>
<td style="border:1px solid var(--ink-2); padding:10px;">Always latest ✅</td>
</tr>
<tr>
<td style="border:1px solid var(--ink-2); padding:10px;"><strong>Advanced Features</strong></td>
<td style="border:1px solid var(--ink-2); padding:10px;">All DAX features</td>
<td style="border:1px solid var(--ink-2); padding:10px;">Limited</td>
<td style="border:1px solid var(--ink-2); padding:10px;">Very limited</td>
</tr>
</table>
</div>
<div class="lesson-card">
<h3>Import Mode: Traditional and Reliable</h3>
<p><strong>What Happens:</strong> Load data from source into Power BI memory, once or on a schedule</p>
<p><strong>Advantages:</strong></p>
<ul>
<li>✅ Fastest performance possible (data in memory)</li>
<li>✅ All DAX features available</li>
<li>✅ Works offline after loading</li>
<li>✅ Best for historical data and comparisons</li>
</ul>
<p><strong>Disadvantages:</strong></p>
<ul>
<li>❌ Limited by file size (1 GB normal, 10 GB Premium)</li>
<li>❌ Non-direct data (delayed by refresh schedule)</li>
<li>❌ Requires regular refresh</li>
</ul>
<p><strong>Ideal Cases:</strong></p>
<ul>
<li>Small to medium data (less than 500 MB)</li>
<li>Daily and weekly reports</li>
<li>Historical data and deep analysis</li>
<li>When you need advanced DAX features</li>
</ul>
</div>
<div class="lesson-card">
<h3>DirectQuery Mode: Live Direct Data</h3>
<p><strong>What Happens:</strong> No data loading at all! Every click on a Slicer or filter sends a SQL query to the source</p>
<p><strong>Advantages:</strong></p>
<ul>
<li>✅ Live data always (instant updates)</li>
<li>✅ No upper limit on data size</li>
<li>✅ Very limited memory consumption</li>
<li>✅ Perfect for very large data</li>
</ul>
<p><strong>Disadvantages:</strong></p>
<ul>
<li>❌ Slower performance (depends on network speed)</li>
<li>❌ Limited DAX features (some functions don't work)</li>
<li>❌ Requires Gateway in Power BI Service</li>
<li>❌ Bad for historical data and comparisons</li>
<li>❌ May put pressure on database</li>
</ul>
<p><strong>Ideal Cases:</strong></p>
<ul>
<li>Very large data (billions of rows)</li>
<li>Real-time reports (Operational Dashboards)</li>
<li>Data that changes rapidly every minutes</li>
<li>When you don't need complex DAX features</li>
</ul>
</div>
<div class="lesson-card">
<h3>Live Connection: Direct Analysis Services</h3>
<p><strong>What Happens:</strong> Direct connection to SQL Server Analysis Services or Azure Analysis Services (Tabular Models)</p>
<p><strong>Advantages:</strong></p>
<ul>
<li>✅ Live data always</li>
<li>✅ Leverage existing server model</li>
<li>✅ Centralized security</li>
</ul>
<p><strong>Disadvantages:</strong></p>
<ul>
<li>❌ Cannot modify the model</li>
<li>❌ Very limited features</li>
<li>❌ Requires existing infrastructure</li>
</ul>
<p><strong>Ideal Cases:</strong></p>
<ul>
<li>Large enterprises with Analysis Services</li>
<li>Centralized Data Warehouses</li>
</ul>
</div>
<div class="warn-box">
<div class="icon">⚠️</div>
<p><strong>Most Important Warning:</strong> Choosing the wrong mode can be catastrophic. If you choose Import for extremely large data, you'll lose model efficiency. If you choose DirectQuery for a complex project, you'll lose all advanced DAX features.</p>
</div>
<div class="lesson-card">
<h3>Smart Choice: Hybrid Approach</h3>
<p><strong>Best solution in many cases: Use both modes together!</strong></p>
<p><strong>Scenario:</strong> Very large sales table (huge) + small dimension table (products)</p>
<p><strong>Hybrid Solution:</strong></p>
<ul>
<li>Sales table → DirectQuery (stays live)</li>
<li>Products table → Import (fast)</li>
<li>Connect them normally</li>
</ul>
<p><strong>Result:</strong> Good performance with live data and available DAX features!</p>
</div>` }],
  },

  // ==================== درس جديد: Tabular Editor و Advanced Modeling ====================
  "tabular-editor": {
    eyebrow: "03 · 05 — Tabular Editor و Advanced Modeling",
    title: "Tabular Editor و Advanced Modeling",
    lede: "أداة احترافية متقدمة لتحرير وإدارة نماذج البيانات بسرعة وكفاءة أعلى من Desktop",
    en_eyebrow: "03 · 05 — Tabular Editor & Advanced Modeling",
    en_lede: "A professional advanced tool for editing and managing data models with greater speed and efficiency than Desktop",
    sectionId: "tabular-editor",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>ما هي Tabular Editor وليماذا تحتاجها؟</h3>
      <p>Tabular Editor هي أداة مجانية (تقريباً) تتيح لك تحرير نماذج Power BI و Analysis Services بطرق متقدمة جداً:</p>
      <ul>
        <li>تعديل الـ Metadata بسرعة فائقة</li>
        <li>نسخ Measures و Columns بين جداول</li>
        <li>Batch Editing للعمليات الضخمة</li>
        <li>Version Control و Git Integration</li>
        <li>Advanced DAX Scripting و Automation</li>
      </ul>
      <p><strong>الفرق:</strong> عندما تريد تغيير 100 Measure في Power BI Desktop ستتعب! في Tabular Editor تفعلها بدقائق.</p>
    </div>

    <div class="lesson-card">
      <h3>التثبيت والإعداد</h3>
      <p><strong>الخيار 1: Tabular Editor 2 (الأساسي المجاني)</strong></p>
      <ul>
        <li>حمل من: <code>tabulareditor.com</code></li>
        <li>مجاني تماماً</li>
        <li>يعمل مع Power BI Desktop و Analysis Services</li>
      </ul>
      <p><strong>الخيار 2: Tabular Editor 3 (الاحترافي المدفوع)</strong></p>
      <ul>
        <li>نسخة محسّنة من الـ 2</li>
        <li>واجهة أحدث وسهلة</li>
        <li>دعم أفضل ومميزات متقدمة</li>
        <li>اشتراك شهري أو سنوي</li>
      </ul>
      <p><strong>التوصية:</strong> ابدأ بـ Tabular Editor 2 (مجاني)، وإذا أحببتها انتقل للـ 3</p>
    </div>

    <div class="lesson-card">
      <h3>الحالات الشائعة للاستخدام</h3>
      <p><strong>1. Bulk Editing (التعديل الضخم)</strong></p>
      <ul>
        <li>تريد تغيير اسم 50 Measure من "Sales_2024" إلى "Sales_2024_Final"؟</li>
        <li>في Desktop: 50 نقرة</li>
        <li>في Tabular Editor: تحديد الكل وتعديل واحد ✅</li>
      </ul>
      <p><strong>2. نسخ Measures</strong></p>
      <ul>
        <li>تريد نسخ مجموعة Measures من جدول لآخر مع تعديل References؟</li>
        <li>Tabular Editor تفعلها بسهولة</li>
      </ul>
      <p><strong>3. Formatting الضخم</strong></p>
      <ul>
        <li>تطبيق Currency Format على 100 Measure</li>
        <li>تغيير عدد الـ Decimal Places</li>
        <li>إضافة Descriptions للكل</li>
      </ul>
      <p><strong>4. Version Control</strong></p>
      <ul>
        <li>حفظ النموذج في Git</li>
        <li>مقارنة الإصدارات</li>
        <li>Back to previous versions</li>
      </ul>
      <p><strong>5. Calculation Groups (ميزة متقدمة)</strong></p>
      <ul>
        <li>إضافة Calculation Groups بسهولة</li>
        <li>إدارة Dynamic Measures</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>نصيحة ذهبية:</strong> كل محترف في Power BI يستخدم Tabular Editor. ليس اختياراً بل ضرورة إذا كنت تتعامل مع نماذج معقدة أو ضخمة.</p>
    </div>

    <div class="lesson-card">
      <h3>خطوات الاتصال مع نموذجك</h3>
      <p><strong>الخطوة 1:</strong> افتح Power BI Desktop وبناء نموذجك بشكل عادي</p>
      <p><strong>الخطوة 2:</strong> افتح Tabular Editor</p>
      <p><strong>الخطوة 3:</strong> اختر "Connect to Power BI Desktop" من القائمة</p>
      <p><strong>الخطوة 4:</strong> اختر الملف من قائمة الملفات المفتوحة</p>
      <p><strong>النتيجة:</strong> Tabular Editor سيعرض نموذجك بشكل شجري كامل مع كل الـ Measures و Columns</p>
    </div>

    <div class="lesson-card">
      <h3>مثال عملي: تطبيق Currency Format على جميع الأرقام</h3>
      <p><strong>الهدف:</strong> جعل جميع الـ Numeric Measures تظهر بـ Currency Format</p>
      <p><strong>في Power BI Desktop:</strong> تحديد كل Measure واحداً واحداً وتطبيق Format (ساعات من العمل!)</p>
      <p><strong>في Tabular Editor:</strong></p>
      <ol>
        <li>اختر جميع الـ Measures (Ctrl+Click)</li>
        <li>انقر Property "Format String"</li>
        <li>اكتب: <code>"$#,##0.00"</code></li>
        <li>اضغط Enter = كل شيء يتغير فوراً ✅</li>
      </ol>
      <p>الوقت: 30 ثانية بدلاً من ساعات!</p>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>احذر:</strong> Tabular Editor قوية جداً، لذا احذر من التعديلات الخاطئة. دائماً احفظ نسخة من النموذج قبل عمل تعديلات ضخمة.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>What is Tabular Editor and Why Do You Need It?</h3>
<p>Tabular Editor is a free (almost) tool that allows you to edit Power BI and Analysis Services models in very advanced ways:</p>
<ul>
<li>Edit metadata at lightning speed</li>
<li>Copy Measures and Columns between tables</li>
<li>Batch Editing for huge operations</li>
<li>Version Control & Git Integration</li>
<li>Advanced DAX Scripting & Automation</li>
</ul>
<p><strong>The Difference:</strong> When you want to change 100 Measures in Power BI Desktop you'll be exhausted! In Tabular Editor you do it in minutes.</p>
</div>
<div class="lesson-card">
<h3>Installation and Setup</h3>
<p><strong>Option 1: Tabular Editor 2 (Free Basic)</strong></p>
<ul>
<li>Download from: <code>tabulareditor.com</code></li>
<li>Completely free</li>
<li>Works with Power BI Desktop & Analysis Services</li>
</ul>
<p><strong>Option 2: Tabular Editor 3 (Premium)</strong></p>
<ul>
<li>Enhanced version of 2</li>
<li>Newer and easier interface</li>
<li>Better support and advanced features</li>
<li>Monthly or annual subscription</li>
</ul>
<p><strong>Recommendation:</strong> Start with Tabular Editor 2 (free), then upgrade to 3 if you like it</p>
</div>
<div class="lesson-card">
<h3>Common Use Cases</h3>
<p><strong>1. Bulk Editing</strong></p>
<ul>
<li>Want to change 50 Measures from "Sales_2024" to "Sales_2024_Final"?</li>
<li>In Desktop: 50 clicks</li>
<li>In Tabular Editor: Select all and edit one ✅</li>
</ul>
<p><strong>2. Copy Measures</strong></p>
<ul>
<li>Want to copy a set of Measures from one table to another with reference changes?</li>
<li>Tabular Editor does it easily</li>
</ul>
<p><strong>3. Bulk Formatting</strong></p>
<ul>
<li>Apply Currency Format to 100 Measures</li>
<li>Change number of decimal places</li>
<li>Add Descriptions to all</li>
</ul>
<p><strong>4. Version Control</strong></p>
<ul>
<li>Save the model in Git</li>
<li>Compare versions</li>
<li>Revert to previous versions</li>
</ul>
<p><strong>5. Calculation Groups (Advanced Feature)</strong></p>
<ul>
<li>Add Calculation Groups easily</li>
<li>Manage Dynamic Measures</li>
</ul>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Golden Tip:</strong> Every Power BI professional uses Tabular Editor. Not an option but a necessity if you're dealing with complex or large models.</p>
</div>
<div class="lesson-card">
<h3>Steps to Connect to Your Model</h3>
<p><strong>Step 1:</strong> Open Power BI Desktop and build your model normally</p>
<p><strong>Step 2:</strong> Open Tabular Editor</p>
<p><strong>Step 3:</strong> Select "Connect to Power BI Desktop" from menu</p>
<p><strong>Step 4:</strong> Choose the file from the list of open files</p>
<p><strong>Result:</strong> Tabular Editor will display your model in a complete tree with all Measures and Columns</p>
</div>
<div class="lesson-card">
<h3>Practical Example: Apply Currency Format to All Numbers</h3>
<p><strong>Goal:</strong> Make all numeric Measures display in Currency Format</p>
<p><strong>In Power BI Desktop:</strong> Select each Measure individually and apply format (hours of work!)</p>
<p><strong>In Tabular Editor:</strong></p>
<ol>
<li>Select all Measures (Ctrl+Click)</li>
<li>Click Property "Format String"</li>
<li>Type: <code>"$#,##0.00"</code></li>
<li>Press Enter = everything changes instantly ✅</li>
</ol>
<p>Time: 30 seconds instead of hours!</p>
</div>
<div class="warn-box">
<div class="icon">⚠️</div>
<p><strong>Caution:</strong> Tabular Editor is very powerful, so be careful with incorrect edits. Always save a copy of the model before making bulk changes.</p>
</div>` }],
  },

  // ==================== درس جديد: Mobile Design ====================
  "mobile-design": {
    eyebrow: "05 · 08 — Mobile Design و الـ Responsive",
    title: "Mobile Design و الـ Responsive",
    lede: "تصميم تقارير تعمل بكفاءة عالية على الأجهزة المحمولة والأجهزة اللوحية",
    en_eyebrow: "05 · 08 — Mobile Design & Responsive",
    en_lede: "Design reports that work efficiently on mobile devices and tablets",
    sectionId: "mobile-design",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>الفرق بين Desktop و Mobile في Power BI</h3>
      <p><strong>Desktop Reports:</strong></p>
      <ul>
        <li>شاشة كبيرة، العديد من الـ Visuals</li>
        <li>تفاعلات معقدة وتفصيلية</li>
        <li>الملفات كبيرة وقد تكون بطيئة على الموبايل</li>
      </ul>
      <p><strong>Mobile Reports:</strong></p>
      <ul>
        <li>شاشة صغيرة، عدد محدود من الـ Visuals</li>
        <li>سرعة تحميل سريعة</li>
        <li>تفاعلات بسيطة وسهلة</li>
        <li>إمكانية الاستخدام بيد واحدة</li>
      </ul>
      <p><strong>المشكلة الشائعة:</strong> كثير من المحللين يصممون تقرير Desktop جميل ثم يتفاجئون أنه فوضوي على الموبايل!</p>
    </div>

    <div class="lesson-card">
      <h3>الخطوات الأساسية للـ Mobile Optimization</h3>
      <p><strong>الخطوة 1: تفعيل Mobile Layout</strong></p>
      <ul>
        <li>Power BI Desktop → View → Mobile Layout</li>
        <li>الآن أنت تصمم بشاشة بحجم الموبايل (عمود واحد)</li>
      </ul>
      <p><strong>الخطوة 2: التصميم البسيط</strong></p>
      <ul>
        <li>استخدم Column layout واحد فقط</li>
        <li>أضف الـ Visuals واحد تحت الآخر بترتيب منطقي</li>
        <li>تأكد أن كل Visual واضح وسهل القراءة</li>
      </ul>
      <p><strong>الخطوة 3: حذف ما لا يلزم</strong></p>
      <ul>
        <li>في الموبايل الشاشة محدودة</li>
        <li>ركز على أهم الـ KPIs و Insights</li>
        <li>أخفِ الـ Slicers غير الضرورية</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>نصائح لـ Mobile UX الممتازة</h3>
      <p><strong>1. الـ Card Visuals أفضل من الجداول</strong></p>
      <ul>
        <li>Card: سهلة القراءة على الموبايل</li>
        <li>Table: صعبة جداً على الموبايل (تحتاج scroll أفقي)</li>
      </ul>
      <p><strong>2. Drill-through بدلاً من الفصول</strong></p>
      <ul>
        <li>بدلاً من 5 صفحات منفصلة</li>
        <li>استخدم Drill-through من KPI واحد للتفاصيل</li>
      </ul>
      <p><strong>3. Buttons و Bookmarks</strong></p>
      <ul>
        <li>زر "Summary" للعودة للصفحة الرئيسية</li>
        <li>زر "Details" للدخول لصفحة التفاصيل</li>
      </ul>
      <p><strong>4. استخدم الألوان والرموز</strong></p>
      <ul>
        <li>الأرقام وحدها قد تكون ممل</li>
        <li>أضف KPI مع Icon و Color indicator</li>
      </ul>
      <p><strong>5. اختبر على هاتف حقيقي</strong></p>
      <ul>
        <li>Emulator قد لا يعطيك الصورة الحقيقية</li>
        <li>حمل التطبيق واختبر على هاتفك الشخصي</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>مثال عملي: Dashboard مبيعات</h3>
      <p><strong>Desktop Version:</strong> 3 صفحات</p>
      <ul>
        <li>صفحة 1: مجموع المبيعات + عدة مخططات تفصيلية</li>
        <li>صفحة 2: مبيعات حسب المنطقة</li>
        <li>صفحة 3: أداء المندوبين</li>
      </ul>
      <p><strong>Mobile Version:</strong> صفحة واحدة</p>
      <ul>
        <li>KPI Cards في الأعلى: Total Sales, Target Achieved, Top Salesman</li>
        <li>مخطط واحد: Sales Trend لآخر 30 يوم</li>
        <li>Drill-through Button: اضغط على أي منطقة لرؤية التفاصيل</li>
      </ul>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>تحذير:</strong> عدم اختبار التقرير على الموبايل قبل نشره قد يسبب سوء تجربة للمستخدمين. دائماً اختبر على الأجهزة الحقيقية.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>The Difference Between Desktop and Mobile in Power BI</h3>
<p><strong>Desktop Reports:</strong></p>
<ul>
<li>Large screen, many visuals</li>
<li>Complex and detailed interactions</li>
<li>Large files may be slow on mobile</li>
</ul>
<p><strong>Mobile Reports:</strong></p>
<ul>
<li>Small screen, limited number of visuals</li>
<li>Fast loading</li>
<li>Simple and easy interactions</li>
<li>One-hand usability</li>
</ul>
<p><strong>Common Problem:</strong> Many analysts design a beautiful Desktop report only to be surprised it's a mess on mobile!</p>
</div>
<div class="lesson-card">
<h3>Basic Steps for Mobile Optimization</h3>
<p><strong>Step 1: Enable Mobile Layout</strong></p>
<ul>
<li>Power BI Desktop → View → Mobile Layout</li>
<li>Now you're designing with a mobile-sized screen (single column)</li>
</ul>
<p><strong>Step 2: Simple Design</strong></p>
<ul>
<li>Use only one column layout</li>
<li>Add visuals one under the other in logical order</li>
<li>Make sure each visual is clear and easy to read</li>
</ul>
<p><strong>Step 3: Remove Unnecessary Elements</strong></p>
<ul>
<li>On mobile, the screen is limited</li>
<li>Focus on the most important KPIs and insights</li>
<li>Hide unnecessary slicers</li>
</ul>
</div>
<div class="lesson-card">
<h3>Tips for Excellent Mobile UX</h3>
<p><strong>1. Card Visuals Are Better Than Tables</strong></p>
<ul>
<li>Cards: Easy to read on mobile</li>
<li>Tables: Very difficult on mobile (need horizontal scroll)</li>
</ul>
<p><strong>2. Drill-through Instead of Multiple Pages</strong></p>
<ul>
<li>Instead of 5 separate pages</li>
<li>Use Drill-through from one KPI to details</li>
</ul>
<p><strong>3. Buttons and Bookmarks</strong></p>
<ul>
<li>Button "Summary" to return to main page</li>
<li>Button "Details" to go to details page</li>
</ul>
<p><strong>4. Use Colors and Icons</strong></p>
<ul>
<li>Numbers alone can be boring</li>
<li>Add KPI with Icon and color indicator</li>
</ul>
<p><strong>5. Test on a Real Phone</strong></p>
<ul>
<li>Emulator may not give you the true picture</li>
<li>Download the app and test on your personal phone</li>
</ul>
</div>
<div class="lesson-card">
<h3>Practical Example: Sales Dashboard</h3>
<p><strong>Desktop Version:</strong> 3 pages</p>
<ul>
<li>Page 1: Total sales + several detailed charts</li>
<li>Page 2: Sales by region</li>
<li>Page 3: Sales rep performance</li>
</ul>
<p><strong>Mobile Version:</strong> One page</p>
<ul>
<li>KPI Cards at top: Total Sales, Target Achieved, Top Salesman</li>
<li>One chart: Sales Trend for last 30 days</li>
<li>Drill-through Button: Click on any region to see details</li>
</ul>
</div>
<div class="warn-box">
<div class="icon">⚠️</div>
<p><strong>Warning:</strong> Not testing the report on mobile before publishing can cause poor user experience. Always test on real devices.</p>
</div>` }],
  },

  // ==================== درس جديد: Error Handling و Debugging ====================
  "error-handling": {
    eyebrow: "07 · 02 — Error Handling و Debugging",
    title: "Error Handling و Debugging",
    lede: "اكتشاف الأخطاء وحلها وفهم رسائل الخطأ في Power BI و DAX بعمق",
    en_eyebrow: "07 · 02 — Error Handling & Debugging",
    en_lede: "Discover, solve errors and understand error messages in Power BI and DAX deeply",
    sectionId: "error-handling",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>أنواع الأخطاء الشائعة في Power BI</h3>
      <p><strong>1. #VALUE! - خطأ نوع البيانات</strong></p>
      <ul>
        <li><strong>السبب:</strong> محاولة عملية حسابية على نوع بيانات خاطئ</li>
        <li><strong>المثال:</strong> <code>SUM("Text")</code> - محاولة جمع نصوص</li>
        <li><strong>الحل:</strong> تأكد من نوع البيانات (Numbers, Text, Date)</li>
      </ul>
      <p><strong>2. #DIV/0! - قسمة على صفر</strong></p>
      <ul>
        <li><strong>السبب:</strong> المقسوم عليه = صفر</li>
        <li><strong>المثال:</strong> <code>100/0</code></li>
        <li><strong>الحل:</strong> استخدم DIVIDE أو IF للتحقق</li>
        <li><strong>الكود الصحيح:</strong> <code>DIVIDE(100, Denominator, 0)</code></li>
      </ul>
      <p><strong>3. #NAME? - اسم غير معروف</strong></p>
      <ul>
        <li><strong>السبب:</strong> تسمية خاطئة أو Column/Table غير موجود</li>
        <li><strong>المثال:</strong> <code>SUM(Sale)</code> و اسم Column هو <code>Sales</code></li>
        <li><strong>الحل:</strong> تحقق من الأسماء بدقة</li>
      </ul>
      <p><strong>4. #NULL! - مرجع فارغ</strong></p>
      <ul>
        <li><strong>السبب:</strong> Reference إلى نطاق فارغ</li>
        <li><strong>الحل:</strong> استخدم IFERROR أو IF(ISBLANK())</li>
      </ul>
      <p><strong>5. Calculation Error - خطأ في الحساب</strong></p>
      <ul>
        <li><strong>السبب:</strong> عادة ما يكون DAX معقد جداً أو Circular Dependency</li>
        <li><strong>الحل:</strong> تبسيط الـ Formula أو إزالة الـ Circular Dependencies</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>استراتيجية Debugging في DAX</h3>
      <p><strong>الخطوة 1: اقسم الـ Formula</strong></p>
      <ul>
        <li>إذا كان لديك Measure معقد، اقسمه لعدة Measures بسيطة</li>
        <li>تحقق من كل واحد على حدة</li>
      </ul>
      <p><strong>الخطوة 2: استخدم SELECTIONSTATEMENT</strong></p>
      <ul>
        <li>أضف <code>ROW()</code> في DAX لرؤية القيم المرجعة</li>
        <li>مثال: <code>VAR x = CALCULATE(...) RETURN ROW("Debug", x)</code></li>
      </ul>
      <p><strong>الخطوة 3: استخدم DAX Studio</strong></p>
      <ul>
        <li>أداة مجانية قوية جداً (DAXstudio.org)</li>
        <li>تتيح لك تشغيل الـ DAX واختبار القيم</li>
        <li>رؤية الأداء والأوقات</li>
      </ul>
      <p><strong>الخطوة 4: اختبر مع عينات صغيرة</strong></p>
      <ul>
        <li>بدلاً من اختبار على 10 ملايين صف</li>
        <li>اختبر على 100 صف أولاً</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>الأخطاء المنطقية (الأخطر)</h3>
      <p><strong>الخطأ المنطقي:</strong> الـ Formula تعمل ولا تظهر خطأ، لكن النتيجة خاطئة!</p>
      <p><strong>المثال:</strong></p>
      <ul>
        <li>تريد حساب النسبة المئوية للنمو</li>
        <li>كتبت: <code>DIVIDE(NewValue, OldValue, 0) - 1</code></li>
        <li>النتيجة عكسية! (تظهر -50% لما يجب أن تكون +50%)</li>
      </ul>
      <p><strong>كيفية الاكتشاف:</strong></p>
      <ul>
        <li>قارن النتيجة مع Excel أو SQL</li>
        <li>اسأل نفسك: هل هذا منطقي؟</li>
        <li>استخدم أرقام معروفة واختبر</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>النصيحة الذهبية:</strong> أفضل طريقة للتعامل مع الأخطاء هي الوقاية. كتب DAX بسيط وواضح من البداية بدلاً من debugging معقد لاحقاً.</p>
    </div>

    <div class="lesson-card">
      <h3>استخدام IFERROR و ISERROR</h3>
      <p><strong>IFERROR:</strong> لإخفاء الأخطاء وإظهار قيمة بديلة</p>
      <code style="display:block; background:var(--ink-light); padding:10px; margin:10px 0; border-radius:4px;">Sales Growth = IFERROR( DIVIDE(NewSales, OldSales) - 1, 0)</code>
      <p><strong>الفائدة:</strong> بدلاً من رؤية #DIV/0!، سترى 0</p>
      <p><strong>ISERROR:</strong> للتحقق من وجود خطأ</p>
      <code style="display:block; background:var(--ink-light); padding:10px; margin:10px 0; border-radius:4px;">Has Error = IF(ISERROR(DIVIDE(A, B)), 1, 0)</code>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>Common Error Types in Power BI</h3>
<p><strong>1. #VALUE! - Data Type Error</strong></p>
<ul>
<li><strong>Cause:</strong> Attempting calculation on wrong data type</li>
<li><strong>Example:</strong> <code>SUM("Text")</code> - trying to sum text</li>
<li><strong>Solution:</strong> Ensure data type (Numbers, Text, Date)</li>
</ul>
<p><strong>2. #DIV/0! - Division by Zero</strong></p>
<ul>
<li><strong>Cause:</strong> Divisor = zero</li>
<li><strong>Example:</strong> <code>100/0</code></li>
<li><strong>Solution:</strong> Use DIVIDE or IF to check</li>
<li><strong>Correct Code:</strong> <code>DIVIDE(100, Denominator, 0)</code></li>
</ul>
<p><strong>3. #NAME? - Unknown Name</strong></p>
<ul>
<li><strong>Cause:</strong> Wrong name or Column/Table doesn't exist</li>
<li><strong>Example:</strong> <code>SUM(Sale)</code> when column is named <code>Sales</code></li>
<li><strong>Solution:</strong> Check names carefully</li>
</ul>
<p><strong>4. #NULL! - Empty Reference</strong></p>
<ul>
<li><strong>Cause:</strong> Reference to empty range</li>
<li><strong>Solution:</strong> Use IFERROR or IF(ISBLANK())</li>
</ul>
<p><strong>5. Calculation Error</strong></p>
<ul>
<li><strong>Cause:</strong> Usually DAX too complex or Circular Dependency</li>
<li><strong>Solution:</strong> Simplify formula or remove circular dependencies</li>
</ul>
</div>
<div class="lesson-card">
<h3>Debugging Strategy in DAX</h3>
<p><strong>Step 1: Break Down the Formula</strong></p>
<ul>
<li>If you have a complex measure, split it into simple ones</li>
<li>Check each one individually</li>
</ul>
<p><strong>Step 2: Use Row Function</strong></p>
<ul>
<li>Add <code>ROW()</code> in DAX to see returned values</li>
<li>Example: <code>VAR x = CALCULATE(...) RETURN ROW("Debug", x)</code></li>
</ul>
<p><strong>Step 3: Use DAX Studio</strong></p>
<ul>
<li>Free powerful tool (DAXstudio.org)</li>
<li>Lets you run DAX and test values</li>
<li>See performance and timings</li>
</ul>
<p><strong>Step 4: Test with Small Samples</strong></p>
<ul>
<li>Instead of testing on 10 million rows</li>
<li>Test on 100 rows first</li>
</ul>
</div>
<div class="lesson-card">
<h3>Logical Errors (Most Dangerous)</h3>
<p><strong>Logical Error:</strong> Formula works and shows no error, but result is wrong!</p>
<p><strong>Example:</strong></p>
<ul>
<li>You want to calculate growth percentage</li>
<li>You wrote: <code>DIVIDE(NewValue, OldValue, 0) - 1</code></li>
<li>Result is backwards! (shows -50% when should be +50%)</li>
</ul>
<p><strong>How to Detect:</strong></p>
<ul>
<li>Compare result with Excel or SQL</li>
<li>Ask yourself: Does this make sense?</li>
<li>Use known numbers and test</li>
</ul>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Golden Tip:</strong> Best way to handle errors is prevention. Write simple and clear DAX from the start instead of debugging complex code later.</p>
</div>
<div class="lesson-card">
<h3>Using IFERROR & ISERROR</h3>
<p><strong>IFERROR:</strong> To hide errors and show alternative value</p>
<code style="display:block; background:var(--ink-light); padding:10px; margin:10px 0; border-radius:4px;">Sales Growth = IFERROR( DIVIDE(NewSales, OldSales) - 1, 0)</code>
<p><strong>Benefit:</strong> Instead of seeing #DIV/0!, you'll see 0</p>
<p><strong>ISERROR:</strong> To check if error exists</p>
<code style="display:block; background:var(--ink-light); padding:10px; margin:10px 0; border-radius:4px;">Has Error = IF(ISERROR(DIVIDE(A, B)), 1, 0)</code>
</div>` }],
  },

  // ==================== درس جديد: Semantic Model Design و Governance ====================
  "semantic-model": {
    eyebrow: "07 · 03 — Semantic Model Design و Data Governance",
    title: "Semantic Model Design و Data Governance",
    lede: "بناء نماذج بيانات احترافية مع قواعد تسمية وتوثيق قوية لضمان صيانة طويلة الأجل",
    en_eyebrow: "07 · 03 — Semantic Model Design & Data Governance",
    en_lede: "Building professional data models with strong naming conventions and documentation to ensure long-term maintenance",
    sectionId: "semantic-model",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>ما هو Semantic Model Design؟</h3>
      <p>ليس فقط نموذج يعمل، بل نموذج <strong>يُفهم بسهولة</strong> من أي شخص يستخدمه أو يصيانه.</p>
      <p><strong>الفرق:</strong></p>
      <ul>
        <li><strong>نموذج عادي:</strong> جداول ومقاييس تعمل</li>
        <li><strong>Semantic Model احترافي:</strong> منظم وموثق بشكل منطقي جداً مع أسماء واضحة</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Naming Conventions (قواعس التسمية)</h3>
      <p><strong>1. Tables: Singular English Names</strong></p>
      <ul>
        <li>✅ <code>Product</code>, <code>Customer</code>, <code>Order</code></li>
        <li>❌ <code>Products</code> (جمع خطأ)</li>
        <li>❌ <code>tblProduct</code> (prefix قديم)</li>
        <li>❌ <code>منتجات</code> (عربي في النموذج)</li>
      </ul>
      <p><strong>2. Columns: Descriptive English Names</strong></p>
      <ul>
        <li>✅ <code>ProductName</code>, <code>UnitPrice</code>, <code>CreatedDate</code></li>
        <li>❌ <code>PName</code> (مختصر غير واضح)</li>
        <li>❌ <code>Col1</code> (رقم عشوائي)</li>
      </ul>
      <p><strong>3. Measures: Clear Action Verbs</strong></p>
      <ul>
        <li>✅ <code>Total Sales</code>, <code>Average Margin %</code>, <code>YTD Revenue</code></li>
        <li>❌ <code>Sales</code> (غير واضح)</li>
        <li>❌ <code>M1</code> (اختصار غير مفهوم)</li>
      </ul>
      <p><strong>4. Calculated Columns: Prefix مميز</strong></p>
      <ul>
        <li>أضف <code>[</code> و <code>]</code> أو <code>_</code> قبل الاسم</li>
        <li>✅ <code>[Full Name]</code> = FirstName &amp; LastName</li>
        <li>✅ <code>_Revenue Rank</code> = RANK(...)</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>التنظيم الهرمي للنموذج</h3>
      <p><strong>تجميع الـ Measures حسب الفئات:</strong></p>
      <ul>
        <li><strong>💰 Revenue Measures:</strong> Total Sales, Gross Profit, Net Revenue</li>
        <li><strong>📊 Count Measures:</strong> Total Orders, Number of Customers</li>
        <li><strong>📈 Percentage Measures:</strong> Profit %, Growth %</li>
        <li><strong>🎯 KPI Measures:</strong> Target Achievement, YoY Growth</li>
      </ul>
      <p><strong>الفائدة:</strong> عندما يفتح المستخدم الـ Measures يرى منظومة واضحة وليس قائمة عشوائية</p>
    </div>

    <div class="lesson-card">
      <h3>التوثيق (Documentation)</h3>
      <p><strong>اضف Descriptions لكل Measure و Column</strong></p>
      <ul>
        <li>في Tabular Editor أو Desktop</li>
        <li>اختر Property → Description</li>
        <li>اكتب شرح واضح: ماذا يحسب هذا الـ Measure؟</li>
      </ul>
      <p><strong>مثال:</strong></p>
      <p><strong>Measure:</strong> "Total Sales (Current Year)"</p>
      <p><strong>Description:</strong> "Sum of all net sales for products sold in the current calendar year. Excludes returns and credits."</p>
      <p><strong>الفائدة:</strong> المستخدمون يفهمون الفرق بين <code>Total Sales</code> و <code>Gross Revenue</code> بدون أسئلة</p>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>قانون النمذجة:</strong> استثمر 30% من وقتك في التنظيم والتوثيق، وستوفر 70% من وقتك لاحقاً في الصيانة والتعديلات.</p>
    </div>

    <div class="lesson-card">
      <h3>Data Governance Basics</h3>
      <p><strong>1. Data Lineage (معرفة مصدر البيانات)</strong></p>
      <ul>
        <li>كل Measure يجب أن تعرف من أين جاء؟</li>
        <li>هل يعتمد على column موجود؟ أم على CALCULATE؟</li>
      </ul>
      <p><strong>2. Version Control</strong></p>
      <ul>
        <li>احفظ نسختك في Git</li>
        <li>تابع التغييرات من أي شخص</li>
      </ul>
      <p><strong>3. Testing Before Publishing</strong></p>
      <ul>
        <li>اختبر جميع الـ Measures قبل النشر</li>
        <li>قارن مع Excel أو SQL</li>
      </ul>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>What is Semantic Model Design?</h3>
<p>Not just a model that works, but a model that is <strong>easily understood</strong> by anyone who uses or maintains it.</p>
<p><strong>The Difference:</strong></p>
<ul>
<li><strong>Regular model:</strong> Tables and measures that work</li>
<li><strong>Professional Semantic Model:</strong> Organized and documented very logically with clear names</li>
</ul>
</div>
<div class="lesson-card">
<h3>Naming Conventions</h3>
<p><strong>1. Tables: Singular English Names</strong></p>
<ul>
<li>✅ <code>Product</code>, <code>Customer</code>, <code>Order</code></li>
<li>❌ <code>Products</code> (wrong plural)</li>
<li>❌ <code>tblProduct</code> (old prefix)</li>
</ul>
<p><strong>2. Columns: Descriptive English Names</strong></p>
<ul>
<li>✅ <code>ProductName</code>, <code>UnitPrice</code>, <code>CreatedDate</code></li>
<li>❌ <code>PName</code> (unclear abbreviation)</li>
<li>❌ <code>Col1</code> (random number)</li>
</ul>
<p><strong>3. Measures: Clear Action Verbs</strong></p>
<ul>
<li>✅ <code>Total Sales</code>, <code>Average Margin %</code>, <code>YTD Revenue</code></li>
<li>❌ <code>Sales</code> (unclear)</li>
<li>❌ <code>M1</code> (incomprehensible abbreviation)</li>
</ul>
<p><strong>4. Calculated Columns: Distinctive Prefix</strong></p>
<ul>
<li>Add <code>[</code> and <code>]</code> or <code>_</code> before name</li>
<li>✅ <code>[Full Name]</code> = FirstName &amp; LastName</li>
<li>✅ <code>_Revenue Rank</code> = RANK(...)</li>
</ul>
</div>
<div class="lesson-card">
<h3>Hierarchical Organization of Model</h3>
<p><strong>Group Measures by Categories:</strong></p>
<ul>
<li><strong>💰 Revenue Measures:</strong> Total Sales, Gross Profit, Net Revenue</li>
<li><strong>📊 Count Measures:</strong> Total Orders, Number of Customers</li>
<li><strong>📈 Percentage Measures:</strong> Profit %, Growth %</li>
<li><strong>🎯 KPI Measures:</strong> Target Achievement, YoY Growth</li>
</ul>
<p><strong>Benefit:</strong> When users open Measures, they see organized structure, not a random list</p>
</div>
<div class="lesson-card">
<h3>Documentation</h3>
<p><strong>Add Descriptions for each Measure and Column</strong></p>
<ul>
<li>In Tabular Editor or Desktop</li>
<li>Select Property → Description</li>
<li>Write clear explanation: What does this measure calculate?</li>
</ul>
<p><strong>Example:</strong></p>
<p><strong>Measure:</strong> "Total Sales (Current Year)"</p>
<p><strong>Description:</strong> "Sum of all net sales for products sold in the current calendar year. Excludes returns and credits."</p>
<p><strong>Benefit:</strong> Users understand the difference between <code>Total Sales</code> and <code>Gross Revenue</code> without asking</p>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Modeling Law:</strong> Invest 30% of your time in organization and documentation, and you'll save 70% of your time later in maintenance and updates.</p>
</div>
<div class="lesson-card">
<h3>Data Governance Basics</h3>
<p><strong>1. Data Lineage (Know Data Source)</strong></p>
<ul>
<li>Every measure should know where it came from</li>
<li>Does it depend on existing column? Or on CALCULATE?</li>
</ul>
<p><strong>2. Version Control</strong></p>
<ul>
<li>Save your version in Git</li>
<li>Track changes from anyone</li>
</ul>
<p><strong>3. Testing Before Publishing</strong></p>
<ul>
<li>Test all measures before publishing</li>
<li>Compare with Excel or SQL</li>
</ul>
</div>` }],
  },

  // ==================== درس جديد: Common Mistakes و Anti-patterns ====================
  "common-mistakes": {
    eyebrow: "07 · 04 — الأخطاء الشائعة و Anti-patterns",
    title: "الأخطاء الشائعة و Anti-patterns",
    lede: "تجنب الأخطاء المنتشرة التي تسبب بيانات خاطئة أو أداء سيئة",
    en_eyebrow: "07 · 04 — Common Mistakes & Anti-patterns",
    en_lede: "Avoid widespread mistakes that cause incorrect data or poor performance",
    sectionId: "common-mistakes",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>الخطأ 1: Many-to-Many Relationships بدون جدول جسري</h3>
      <p><strong>السيناريو:</strong> تريد ربط Product مع Region بدون Bridge Table</p>
      <p><strong>النتيجة:</strong> بيانات مكررة وحسابات خاطئة تماماً!</p>
      <p><strong>الحل:</strong> استخدم Bridge Table (جدول جسري) أو AllowMultipleValues Cardinality</p>
      <p><strong>المثال الصحيح:</strong></p>
      <ul>
        <li>Product → ProductRegion Bridge → Region</li>
        <li>هكذا كل Product يمكن أن يكون في عدة Regions</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>الخطأ 2: استخدام SUMPRODUCT بدلاً من CALCULATE</h3>
      <p><strong>الكود الخطأ:</strong></p>
      <code style="display:block; background:var(--ink-light); padding:10px; margin:10px 0; border-radius:4px;">Sales = SUMPRODUCT(Table[Amount], Table[Quantity])</code>
      <p><strong>المشكلة:</strong> لا تعمل مع Filters وتعطي نتائج غلط</p>
      <p><strong>الكود الصحيح:</strong></p>
      <code style="display:block; background:var(--ink-light); padding:10px; margin:10px 0; border-radius:4px;">Sales = CALCULATE(SUM(Table[Amount]))</code>
    </div>

    <div class="lesson-card">
      <h3>الخطأ 3: Circular Dependencies</h3>
      <p><strong>المشكلة:</strong> Measure يعتمد على نفسه بشكل مباشر أو غير مباشر</p>
      <p><strong>المثال الخطأ:</strong></p>
      <ul>
        <li>Measure A يستخدم Measure B</li>
        <li>Measure B يستخدم Measure A</li>
        <li>النتيجة: Calculation Error</li>
      </ul>
      <p><strong>الحل:</strong> تحقق من التبعيات وأزل الحلقات المغلقة</p>
    </div>

    <div class="lesson-card">
      <h3>الخطأ 4: استخدام Calculated Columns بدلاً من Measures</h3>
      <p><strong>الخطأ الشائع:</strong> عمل Calculated Column لحساب Revenue = Price × Quantity</p>
      <p><strong>المشكلة:</strong></p>
      <ul>
        <li>استهلاك ذاكرة ضخم</li>
        <li>بطيء جداً على البيانات الكبيرة</li>
      </ul>
      <p><strong>الحل:</strong> استخدم Measure بدلاً منها</p>
      <code style="display:block; background:var(--ink-light); padding:10px; margin:10px 0; border-radius:4px;">Revenue = SUM(Sales[Price]) * SUM(Sales[Quantity])</code>
    </div>

    <div class="lesson-card">
      <h3>الخطأ 5: Bi-directional Relationships بدون تفكير</h3>
      <p><strong>المشكلة:</strong> تفعيل Bi-directional على جميع العلاقات</p>
      <p><strong>النتيجة:</strong> أداء سيئة جداً والفلاتر تعمل بشكل غريب</p>
      <p><strong>النصيحة:</strong> استخدم Bi-directional فقط عندما تحتاج فعلاً (نادراً جداً)</p>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>التحذير:</strong> هذه الأخطاء الخمسة مسؤولة عن 80% من مشاكل Power BI في الإنتاج!</p>
    </div>

    <div class="lesson-card">
      <h3>الخطأ 6: عدم استخدام RELATED و LOOKUPVALUE</h3>
      <p><strong>الخطأ:</strong> محاولة الوصول لـ Column من جدول مرتبط بدون RELATED</p>
      <p><strong>الكود الخطأ:</strong></p>
      <code style="display:block; background:var(--ink-light); padding:10px; margin:10px 0; border-radius:4px;">Product Name = Sales[Product Name]</code>
      <p><strong>الكود الصحيح:</strong></p>
      <code style="display:block; background:var(--ink-light); padding:10px; margin:10px 0; border-radius:4px;">Product Name = RELATED(Product[ProductName])</code>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>Mistake 1: Many-to-Many Relationships Without Bridge Table</h3>
<p><strong>Scenario:</strong> You want to connect Product with Region without Bridge Table</p>
<p><strong>Result:</strong> Duplicate data and completely wrong calculations!</p>
<p><strong>Solution:</strong> Use Bridge Table or AllowMultipleValues Cardinality</p>
<p><strong>Correct Example:</strong></p>
<ul>
<li>Product → ProductRegion Bridge → Region</li>
<li>So each Product can be in multiple Regions</li>
</ul>
</div>
<div class="lesson-card">
<h3>Mistake 2: Using SUMPRODUCT Instead of CALCULATE</h3>
<p><strong>Wrong Code:</strong></p>
<code style="display:block; background:var(--ink-light); padding:10px; margin:10px 0; border-radius:4px;">Sales = SUMPRODUCT(Table[Amount], Table[Quantity])</code>
<p><strong>Problem:</strong> Doesn't work with filters and gives wrong results</p>
<p><strong>Correct Code:</strong></p>
<code style="display:block; background:var(--ink-light); padding:10px; margin:10px 0; border-radius:4px;">Sales = CALCULATE(SUM(Table[Amount]))</code>
</div>
<div class="lesson-card">
<h3>Mistake 3: Circular Dependencies</h3>
<p><strong>Problem:</strong> Measure depends on itself directly or indirectly</p>
<p><strong>Wrong Example:</strong></p>
<ul>
<li>Measure A uses Measure B</li>
<li>Measure B uses Measure A</li>
<li>Result: Calculation Error</li>
</ul>
<p><strong>Solution:</strong> Check dependencies and remove closed loops</p>
</div>
<div class="lesson-card">
<h3>Mistake 4: Using Calculated Columns Instead of Measures</h3>
<p><strong>Common Mistake:</strong> Make Calculated Column to calculate Revenue = Price × Quantity</p>
<p><strong>Problem:</strong></p>
<ul>
<li>Huge memory consumption</li>
<li>Very slow on large data</li>
</ul>
<p><strong>Solution:</strong> Use Measure instead</p>
<code style="display:block; background:var(--ink-light); padding:10px; margin:10px 0; border-radius:4px;">Revenue = SUM(Sales[Price]) * SUM(Sales[Quantity])</code>
</div>
<div class="lesson-card">
<h3>Mistake 5: Bi-directional Relationships Without Thinking</h3>
<p><strong>Problem:</strong> Enabling bi-directional on all relationships</p>
<p><strong>Result:</strong> Very poor performance and filters behaving strangely</p>
<p><strong>Advice:</strong> Use bi-directional only when you really need it (very rare)</p>
</div>
<div class="warn-box">
<div class="icon">⚠️</div>
<p><strong>Warning:</strong> These five mistakes are responsible for 80% of Power BI problems in production!</p>
</div>
<div class="lesson-card">
<h3>Mistake 6: Not Using RELATED & LOOKUPVALUE</h3>
<p><strong>Wrong:</strong> Trying to access column from related table without RELATED</p>
<p><strong>Wrong Code:</strong></p>
<code style="display:block; background:var(--ink-light); padding:10px; margin:10px 0; border-radius:4px;">Product Name = Sales[Product Name]</code>
<p><strong>Correct Code:</strong></p>
<code style="display:block; background:var(--ink-light); padding:10px; margin:10px 0; border-radius:4px;">Product Name = RELATED(Product[ProductName])</code>
</div>` }],
  },

  // ==================== درس جديد: Cost Optimization ====================
  "cost-optimization": {
    eyebrow: "07 · 05 — Cost Optimization و Premium",
    title: "Cost Optimization و Premium",
    lede: "تحسين التكاليف والاستفادة الذكية من ميزات Premium في Power BI",
    en_eyebrow: "07 · 05 — Cost Optimization & Premium",
    en_lede: "Optimizing costs and smart use of Premium features in Power BI",
    sectionId: "cost-optimization",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>نماذج التسعير في Power BI</h3>
      <p><strong>1. Power BI Pro (المتوسط):</strong> $10/month لكل مستخدم</p>
      <ul>
        <li>تطبيقات Desktop والـ Service</li>
        <li>مشاركة محدودة (نحتاج Pro لكل شخص)</li>
        <li>Refresh مرتين يومياً فقط</li>
      </ul>
      <p><strong>2. Power BI Premium Per User (PPU):</strong> $20/month</p>
      <ul>
        <li>نسخة Pro بمميزات إضافية</li>
        <li>Refresh كل 15 دقيقة</li>
        <li>أفضل أداء</li>
      </ul>
      <p><strong>3. Power BI Premium (الشركات الكبيرة):</strong> $5,000/month</p>
      <ul>
        <li>سعة محجوزة (Capacity)</li>
        <li>Unlimited Refresh</li>
        <li>مشاركة مع جميع المستخدمين</li>
        <li>AI Features و Advanced</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>هل تحتاج Premium فعلاً؟</h3>
      <p><strong>اختر Pro إذا:</strong></p>
      <ul>
        <li>عدد المستخدمين قليل (أقل من 10)</li>
        <li>التحديثات كل ساعات قليلة كافية</li>
        <li>لا تحتاج استراتيجيات تقدمة (Python, R)</li>
      </ul>
      <p><strong>اختر PPU إذا:</strong></p>
      <ul>
        <li>تحتاج تحديثات كل 15 دقيقة</li>
        <li>عدد المستخدمين 10-50</li>
      </ul>
      <p><strong>اختر Premium إذا:</strong></p>
      <ul>
        <li>شركة كبيرة (500+ مستخدم)</li>
        <li>تحتاج Unlimited Refresh و Advanced Features</li>
        <li>الـ ROI واضح جداً</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>طرق تقليل التكاليف</h3>
      <p><strong>1. تحسين كفاءة النموذج</strong></p>
      <ul>
        <li>نموذج فعال = حجم ملف أصغر = أداء أسرع</li>
        <li>استخدم Aggregations للبيانات الضخمة</li>
        <li>احذف الأعمدة غير المستخدمة</li>
      </ul>
      <p><strong>2. جدولة التحديثات بذكاء</strong></p>
      <ul>
        <li>لا تحدّث كل دقيقة إذا لم تكن ضرورية</li>
        <li>حدّث في أوقات الخمول (مثلاً 3 صباحاً)</li>
        <li>استخدم Incremental Refresh للبيانات الضخمة</li>
      </ul>
      <p><strong>3. استخدام DirectQuery للبيانات الحية</strong></p>
      <ul>
        <li>بدلاً من تحديث Import كل 15 دقيقة</li>
        <li>استخدم DirectQuery فقط للبيانات التي تتغير باستمرار</li>
      </ul>
      <p><strong>4. مشاركة ذكية</strong></p>
      <ul>
        <li>استخدم Shared Capacity بدلاً من Premium لو أمكن</li>
        <li>استخدم Apps بدلاً من Dashboards للمشاركة الكبيرة</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>القاعدة الذهبية:</strong> كل $1 تنفقه على Premium يجب أن يوفر لك $5 على الأقل في الإنتاجية والسرعة.</p>
    </div>

    <div class="lesson-card">
      <h3>مثال حقيقي: شركة مبيعات</h3>
      <p><strong>السيناريو الأول (Premium مكلف):</strong></p>
      <ul>
        <li>100 مستخدم Pro @ $10/month = $1,000</li>
        <li>تكلفة سنوية: $12,000</li>
        <li>الكثير يستخدم الـ Dashboard أحياناً فقط</li>
      </ul>
      <p><strong>الحل الأفضل:</strong></p>
      <ul>
        <li>20 مستخدم PPU @ $20/month = $400</li>
        <li>80 مستخدم Pro @ $10/month = $800</li>
        <li>المجموع: $1,200/month = $14,400/سنة</li>
        <li>ولكن... PPU يوفر تحديث أسرع للـ 20 مستخدم الأساسي! ✅</li>
      </ul>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>Power BI Pricing Models</h3>
<p><strong>1. Power BI Pro (Medium):</strong> $10/month per user</p>
<ul>
<li>Desktop and Service apps</li>
<li>Limited sharing (need Pro for each person)</li>
<li>Refresh twice a day only</li>
</ul>
<p><strong>2. Power BI Premium Per User (PPU):</strong> $20/month</p>
<ul>
<li>Pro version with additional features</li>
<li>Refresh every 15 minutes</li>
<li>Better performance</li>
</ul>
<p><strong>3. Power BI Premium (Large Companies):</strong> $5,000/month</p>
<ul>
<li>Reserved capacity</li>
<li>Unlimited refresh</li>
<li>Share with all users</li>
<li>AI Features & Advanced</li>
</ul>
</div>
<div class="lesson-card">
<h3>Do You Really Need Premium?</h3>
<p><strong>Choose Pro if:</strong></p>
<ul>
<li>Few users (less than 10)</li>
<li>Refresh every few hours is sufficient</li>
<li>Don't need advanced strategies (Python, R)</li>
</ul>
<p><strong>Choose PPU if:</strong></p>
<ul>
<li>Need refresh every 15 minutes</li>
<li>10-50 users</li>
</ul>
<p><strong>Choose Premium if:</strong></p>
<ul>
<li>Large company (500+ users)</li>
<li>Need unlimited refresh & advanced features</li>
<li>ROI is very clear</li>
</ul>
</div>
<div class="lesson-card">
<h3>Ways to Reduce Costs</h3>
<p><strong>1. Improve Model Efficiency</strong></p>
<ul>
<li>Efficient model = smaller file size = faster performance</li>
<li>Use aggregations for huge data</li>
<li>Delete unused columns</li>
</ul>
<p><strong>2. Schedule Refresh Smartly</strong></p>
<ul>
<li>Don't refresh every minute if not necessary</li>
<li>Refresh during off-peak (like 3 AM)</li>
<li>Use Incremental Refresh for huge data</li>
</ul>
<p><strong>3. Use DirectQuery for Live Data</strong></p>
<ul>
<li>Instead of Import refresh every 15 minutes</li>
<li>Use DirectQuery only for constantly changing data</li>
</ul>
<p><strong>4. Smart Sharing</strong></p>
<ul>
<li>Use shared capacity instead of Premium if possible</li>
<li>Use Apps instead of dashboards for large sharing</li>
</ul>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Golden Rule:</strong> Every $1 you spend on Premium should save you at least $5 in productivity and speed.</p>
</div>
<div class="lesson-card">
<h3>Real-Life Example: Sales Company</h3>
<p><strong>Expensive Premium Scenario:</strong></p>
<ul>
<li>100 Pro users @ $10/month = $1,000</li>
<li>Annual cost: $12,000</li>
<li>Many use dashboard only occasionally</li>
</ul>
<p><strong>Better Solution:</strong></p>
<ul>
<li>20 PPU users @ $20/month = $400</li>
<li>80 Pro users @ $10/month = $800</li>
<li>Total: $1,200/month = $14,400/year</li>
<li>But... PPU gives faster updates for 20 key users! ✅</li>
</ul>
</div>` }],
  },

  // ==================== درس جديد: Power Automate و الـ Alerts ====================

  "power-automate": {
    eyebrow: "08 · 01 — Power Automate و الـ Alerts",
    title: "Power Automate و الـ Alerts",
    lede: "أتمتة التقارير والـ Alerts لإرسال الإشعارات تلقائياً عند وصول KPI لحد معين",
    en_eyebrow: "08 · 01 — Power Automate & Alerts",
    en_lede: "Automate reports and alerts to automatically send notifications when KPI reaches a threshold",
    sectionId: "power-automate",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>ما هو Power Automate في السياق التنبيهات؟</h3>
      <p>Power Automate (سابقاً Flow) هو أداة لإنشاء سير عمل تلقائي يمكن أن يتفاعل مع Power BI والخدمات الأخرى.</p>
      <p><strong>المعادلة البسيطة:</strong></p>
      <div class="code-block">
Trigger (حدث) → Condition (شرط) → Action (إجراء)

مثال:
KPI = انخفض المبيعات → IF أقل من 80% هدف → THEN أرسل تنبيه للمدير
      </div>
      <p><strong>الحالات الشائعة:</strong></p>
      <ul>
        <li>🚨 عندما تنخفض المبيعات تحت الهدف → أرسل إنذار فوري</li>
        <li>📦 عندما ينفد المخزون → أخطر فريق الشراء في Teams</li>
        <li>✅ عندما يتحسن الأداء → أرسل تهنئة للفريق</li>
        <li>⏰ كل صباح → أرسل ملخص البيانات إلى البريد الإلكتروني</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Data Alerts (الطريقة البسيطة)</h3>
      <p><strong>متى تستخدمها؟</strong> للتنبيهات الأساسية بدون تعقيدات</p>
      <p><strong>الخطوات التفصيلية:</strong></p>
      <ol>
        <li><strong>الخطوة 1:</strong> افتح Power BI Service (app.powerbi.com)</li>
        <li><strong>الخطوة 2:</strong> انتقل إلى Dashboard أو Report يحتوي على KPI مهم</li>
        <li><strong>الخطوة 3:</strong> انقر على الثلاث نقاط (⋯) أعلى الـ Visual المراد</li>
        <li><strong>الخطوة 4:</strong> اختر من القائمة: "Manage Alerts" أو "Alert Settings"</li>
        <li><strong>الخطوة 5:</strong> حدد الشرط:
          <ul>
            <li>"Alert me when the value goes above" (أنبّهني عندما يتجاوز)</li>
            <li>أو "goes below" (عندما ينخفض عن)</li>
          </ul>
        </li>
        <li><strong>الخطوة 6:</strong> أدخل القيمة الحد (مثل: 8000)</li>
        <li><strong>الخطوة 7:</strong> اختر طريقة الاستقبال: Email، Notification، أو كلاهما</li>
        <li><strong>الخطوة 8:</strong> انقر "Save"</li>
      </ol>
      <p><strong>المثال الفعلي:</strong> تنبيه عندما تنخفض المبيعات اليومية عن $8,000</p>
      <p><strong>المميزات:</strong> ✅ بسيطة جداً | ✅ سريعة التنفيذ | ✅ لا تحتاج برمجة</p>
      <p><strong>العيوب:</strong> ❌ محدودة جداً | ❌ لا يمكن تخصيص الرسالة | ❌ لا تدعم شروط معقدة</p>
    </div>

    <div class="lesson-card">
      <h3>Power Automate Flows (الطريقة المتقدمة)</h3>
      <p><strong>متى تستخدمها؟</strong> عندما تحتاج تنبيهات مخصصة وذكية مع شروط معقدة</p>
      <p><strong>خطوات إنشاء Flow جديد:</strong></p>
      <ol>
        <li><strong>الخطوة 1:</strong> اذهب إلى <strong>power.microsoft.com/automate</strong></li>
        <li><strong>الخطوة 2:</strong> انقر على "<strong>+ Create</strong>"</li>
        <li><strong>الخطوة 3:</strong> اختر "<strong>Cloud flow</strong>" → "<strong>Automated cloud flow</strong>"</li>
        <li><strong>الخطوة 4:</strong> أعط الـ Flow اسماً، مثل "Sales Alert Low Performance"</li>
        <li><strong>الخطوة 5:</strong> اختر Trigger من القائمة:
          <div class="code-block">
البحث عن: "Power BI"
اختر: "When an alert is triggered" أو "When a Power BI dataset is refreshed"
          </div>
        </li>
        <li><strong>الخطوة 6:</strong> اختر Workspace، Report، واسم الـ KPI</li>
        <li><strong>الخطوة 7:</strong> أضف Condition: "If [Sales Value] < 8000"</li>
        <li><strong>الخطوة 8:</strong> أضف Action (إجراء):
          <ul>
            <li>انقر "Add an action"</li>
            <li>ابحث عن "Send an email"</li>
            <li>أضف بيانات المستقبل والرسالة</li>
          </ul>
        </li>
      </ol>
      <p><strong>مثال عملي كامل:</strong></p>
      <div class="code-block">
<span class="cm">-- Flow: Monitor Sales Performance</span>
TRIGGER: When Power BI data refreshes
CONDITION: IF Daily_Sales < Target * 0.8 THEN
ACTION 1: Send email to SalesManager@company.com
  Subject: "🚨 Sales Alert: {sales_value} vs target {target}"
  Body: "Sales are below 80% of daily target. Immediate action needed!"
ACTION 2: Post to Teams #sales-alerts
  Message: "Sales Alert! Current: {sales_value}, Target: {target}"
ACTION 3: Update Excel tracking sheet with alert timestamp
      </div>
    </div>

    <div class="lesson-card">
      <h3>تكامل مع Teams (الطريقة الأكثر استخداماً)</h3>
      <p><strong>لماذا Teams؟</strong> لأن الفريق يستخدمه بالفعل ويرى الإشعارات فوراً</p>
      <p><strong>خطوات التكامل:</strong></p>
      <ol>
        <li>في Power Automate Flow، اضف Action جديد</li>
        <li>ابحث عن "Post message in a chat or channel"</li>
        <li>اختر:
          <ul>
            <li><strong>Team:</strong> اختر فريقك (مثل "Finance")</li>
            <li><strong>Channel:</strong> اختر القناة (مثل "#alerts")</li>
            <li><strong>Message:</strong> اكتب رسالتك مع Variables من Power BI</li>
          </ul>
        </li>
      </ol>
      <p><strong>رسالة Teams متقدمة (Adaptive Card):</strong></p>
      <div class="code-block">
{
  "@type": "MessageCard",
  "@context": "https://schema.org/extensions",
  "summary": "Sales Alert",
  "themeColor": "ff0000",
  "title": "🚨 Sales Performance Alert",
  "sections": [
    {
      "activityTitle": "Daily Sales Report",
      "facts": [
        { "name": "Current Sales:", "value": "\$7,500" },
        { "name": "Target:", "value": "\$10,000" },
        { "name": "Achievement:", "value": "75% ❌" }
      ]
    }
  ],
  "potentialAction": [
    {
      "@type": "OpenUri",
      "name": "View Dashboard",
      "targets": [{ "os": "default", "uri": "https://powerbi.microsoft.com/..." }]
    }
  ]
}
      </div>
    </div>

    <div class="lesson-card">
      <h3>تكامل مع Slack (البديل)</h3>
      <p><strong>خطوات التكامل:</strong></p>
      <ol>
        <li>في Power Automate، اضف Action: "Post message"</li>
        <li>اختر Slack Workspace واسم القناة</li>
        <li>اكتب الرسالة مع Emoji و Dynamic Content</li>
        <li>لتضمين صورة: استخدم "Get data from Power BI dashboard visual as image"</li>
      </ol>
      <p><strong>مثال رسالة Slack:</strong></p>
      <div class="code-block">
:warning: *Sales Alert - Low Performance*
Current: $7,500 | Target: $10,000 | Achievement: 75%
_Please take immediate action_
<https://app.powerbi.com/dashboards/123|View Dashboard>
      </div>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>نصيحة احترافية:</strong> ادمج بين Data Alerts و Power Automate:
      <br/>• استخدم Data Alerts للتنبيهات البسيطة (سريعة وسهلة)
      <br/>• استخدم Power Automate للمنطق المعقد والعمليات المتعددة</p>
    </div>

    <div class="lesson-card">
      <h3>مثال عملي متقدم: Alert System متكامل</h3>
      <p><strong>السيناريو:</strong> شركة بيع تريد نظام تنبيهات شامل للأداء</p>
      <p><strong>المتطلبات:</strong></p>
      <ul>
        <li>Dashboard بـ KPIs: Daily Sales, Conversion Rate, Customer Complaints</li>
        <li>متى يحدث التنبيه؟ كل ساعة عند تحديث البيانات</li>
        <li>من يستقبل؟ Sales Manager + Team + CFO</li>
      </ul>
      <p><strong>الحل الكامل:</strong></p>
      <ol>
        <li><strong>Trigger:</strong> "When a refresh completes" في Power BI Premium</li>
        <li><strong>Action 1 - فحص المبيعات:</strong>
          <div class="code-block">
IF Sales < Target * 0.80 THEN
  - Send email to SalesManager with current value
  - Post to Teams #sales-low
  - Create Task in Planner for follow-up
          </div>
        </li>
        <li><strong>Action 2 - فحص معدل التحويل:</strong>
          <div class="code-block">
IF Conversion_Rate < 10% THEN
  - Send alert to Marketing team
  - Log to Excel tracking sheet
          </div>
        </li>
        <li><strong>Action 3 - فحص الشكاوى:</strong>
          <div class="code-block">
IF Complaints > 5 THEN
  - Send email to CS Director
  - Create support ticket
  - Alert on Teams
          </div>
        </li>
        <li><strong>Action 4 - تسجيل النتائج:</strong>
          <div class="code-block">
Write to Excel:
- Timestamp
- Alert Type
- Value
- Recipient
- Status
          </div>
        </li>
      </ol>
      <p><strong>النتيجة:</strong> نظام مراقبة تلقائي متطور يعمل 24/7! 🚀</p>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>تحذيرات مهمة:</strong>
      <br/>❌ تجنب الإفراط في التنبيهات (قد تسبب إرهاق)
      <br/>❌ اختبر الـ Flow قبل تفعيله (قد ترسل مئات الرسائل خطأ!)
      <br/>✅ استخدم "Throttle" للحد من عدد التنبيهات في الساعة</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>What is Power Automate in Alerts Context?</h3>
<p>Power Automate (formerly Flow) is a tool for creating automated workflows that can interact with Power BI.</p>
<p><strong>Common Cases:</strong></p>
<ul>
<li>When sales drop below target, send alert to manager</li>
<li>When inventory runs out, send email to procurement</li>
<li>When performance improves, send notification to team</li>
</ul>
</div>
<div class="lesson-card">
<h3>Data Alerts (Simple Method)</h3>
<p><strong>Using Data Alerts Built into Power BI</strong></p>
<p><strong>Steps:</strong></p>
<ol>
<li>Open dashboard or report in Power BI Service</li>
<li>Click three dots (⋯) on important visual</li>
<li>Select "Manage Alerts"</li>
<li>Set alert: "Alert me when value goes above/below X"</li>
<li>Choose how to receive: Email, Push Notification</li>
</ol>
<p><strong>Advantages:</strong></p>
<ul>
<li>Very easy and fast</li>
<li>No programming needed</li>
</ul>
<p><strong>Disadvantages:</strong></p>
<ul>
<li>Limited features</li>
<li>Can't send full report</li>
</ul>
</div>
<div class="lesson-card">
<h3>Power Automate Flows (Advanced Method)</h3>
<p><strong>To Create Advanced Flow:</strong></p>
<ol>
<li>Go to power.microsoft.com/automate</li>
<li>Select "Create" → "Cloud Flow" → "Automated"</li>
<li>Choose Trigger: "Power BI" from list</li>
<li>Select report and visual</li>
<li>Add Condition: "When value changes"</li>
<li>Add Action: "Send Email" or "Post to Teams"</li>
</ol>
<p><strong>Example:</strong></p>
<ul>
<li>Trigger: Sales KPI in dashboard</li>
<li>Condition: If < 80% of target</li>
<li>Action: Send email to manager with visual screenshot</li>
</ul>
</div>
<div class="lesson-card">
<h3>Integration with Teams & Slack</h3>
<p><strong>Send Notifications to Teams:</strong></p>
<ul>
<li>In Flow, add Action: "Post message to Teams"</li>
<li>Select channel to send to</li>
<li>Write message with variables from Power BI</li>
</ul>
<p><strong>Slack Example:</strong></p>
<ul>
<li>Same steps but with Slack action</li>
<li>Need Slack app in workspace</li>
</ul>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Tip:</strong> Start with simple data alerts first, then move to Power Automate when you need more features.</p>
</div>
<div class="lesson-card">
<h3>Complete Practical Example: Sales Alert</h3>
<p><strong>Requirements:</strong></p>
<ul>
<li>Dashboard with "Daily Sales" KPI</li>
<li>Daily target: $10,000</li>
<li>If drops below $8,000 → instant alert</li>
</ul>
<p><strong>Solution with Power Automate:</strong></p>
<ol>
<li>Create "Automated" flow</li>
<li>Trigger: Every hour, refresh Power BI data</li>
<li>Condition: IF Daily Sales < 8000 THEN...</li>
<li>Action 1: Send email to Sales Manager with KPI value</li>
<li>Action 2: Post to Teams #sales-alerts</li>
<li>Action 3: Log alert to Excel for tracking</li>
</ol>
<p><strong>Result:</strong> Instant notification when sales drop! ⚡</p>
</div>` }],
  },

  // ==================== درس جديد: Automated Refresh و Scheduling ====================
  "auto-refresh": {
    eyebrow: "08 · 02 — Automated Refresh و Scheduling",
    title: "Automated Refresh و Scheduling",
    lede: "جدولة التحديثات التلقائية للبيانات بذكاء والتعامل مع الفشل",
    en_eyebrow: "08 · 02 — Automated Refresh & Scheduling",
    en_lede: "Schedule automatic data updates smartly and handle failures",
    sectionId: "auto-refresh",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>أنواع التحديث في Power BI</h3>
      <p><strong>رسم توضيحي:</strong></p>
      <div class="code-block">
📊 Data Model Modes
├─ Manual Refresh      → تحديث يدوي فقط (غير موصى به)
├─ Scheduled Refresh   → تحديث تلقائي بجدول زمني ✅ الأكثر استخداماً
├─ Incremental Refresh → تحديث الجزء الجديد فقط (للبيانات الضخمة)
└─ DirectQuery         → تحديث فوري من قاعدة البيانات (بطيء)
      </div>
      <p><strong>1️⃣ Manual Refresh</strong></p>
      <ul>
        <li>📌 الوصف: تحديث يدوي بنقرة زر واحدة</li>
        <li>⏱️ الوقت: يحدث في الحال</li>
        <li>❌ المشكلة: غير عملي للبيانات التي تتغير باستمرار</li>
        <li>🎯 متى تستخدمه؟ فقط للاختبار والتطوير</li>
      </ul>
      <p><strong>2️⃣ Scheduled Refresh</strong></p>
      <ul>
        <li>📌 الوصف: تحديث آلي حسب جدول محدد مسبقاً</li>
        <li>⏱️ الوقت: يحدث تلقائياً حسب الجدول (مثلاً 8 صباحاً)</li>
        <li>✅ المميزة: موثوقة وسهلة</li>
        <li>🎯 متى تستخدمه؟ <strong>90% من الحالات</strong></li>
      </ul>
      <p><strong>3️⃣ Incremental Refresh</strong></p>
      <ul>
        <li>📌 الوصف: تحديث الجزء الجديد فقط من البيانات (آخر يوم/أسبوع)</li>
        <li>⏱️ الوقت: أسرع بكثير (2 دقيقة بدلاً من 30)</li>
        <li>💰 التكلفة: توفير موارد والكهرباء</li>
        <li>🎯 متى تستخدمه؟ للبيانات الضخمة جداً (> 100 مليون صف)</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>جدولة التحديث الذكية (Scheduled Refresh)</h3>
      <p><strong>خطوات التكوين التفصيلية:</strong></p>
      <ol>
        <li><strong>الخطوة 1:</strong> اذهب إلى <strong>Power BI Service</strong> (app.powerbi.com)</li>
        <li><strong>الخطوة 2:</strong> اختر Workspace (مثل "Sales Team")</li>
        <li><strong>الخطوة 3:</strong> جد الـ Dataset المراد جدولة تحديثه</li>
        <li><strong>الخطوة 4:</strong> انقر على الثلاث نقاط (⋯) → اختر "Settings"</li>
        <li><strong>الخطوة 5:</strong> انقر على "<strong>Scheduled refresh</strong>" أو "<strong>Refresh</strong>"</li>
        <li><strong>الخطوة 6:</strong> اختر "<strong>Turn on</strong>" لتفعيل الجدولة</li>
        <li><strong>الخطوة 7:</strong> حدد:<br/>
          <ul>
            <li><strong>Frequency:</strong> عدد مرات التحديث
              <div class="code-block">
خيارات:
• مرة واحدة يومياً
• مرتين يومياً
• 4 مرات يومياً
• يومي، أسبوعي، شهري (حسب الخطة)
              </div>
            </li>
            <li><strong>Time:</strong> الساعة المحددة (مثلاً 8:00 AM)</li>
            <li><strong>Time Zone:</strong> المنطقة الزمنية (Cairo / UTC+2)</li>
          </ul>
        </li>
        <li><strong>الخطوة 8:</strong> انقر "Apply" أو "Save"</li>
      </ol>
      <p><strong>مثال عملي:</strong></p>
      <div class="code-block">
Dataset: "Sales Daily Report"

التكوين:
├─ Frequency: 4 مرات يومياً
├─ Times: 6:00 AM, 12:00 PM, 4:00 PM, 7:00 PM
├─ Time Zone: Cairo (UTC+2)
└─ Gateway: Data Gateway (مسجل)

النتيجة: Dataset يتحدث تلقائياً 4 مرات بدون أي تدخل!
      </div>
      <p><strong>النصائح الذكية للجدولة:</strong></p>
      <ul>
        <li>❌ <strong>لا تحدّث كل دقيقة</strong> - مضيعة للموارد والكهرباء</li>
        <li>❌ <strong>لا تحدّث في أوقات الذروة</strong> (8-9 صباحاً) - قد يبطئ النظام</li>
        <li>✅ <strong>حدّث في أوقات الخمول:</strong>
          <div class="code-block">
الأوقات المثالية:
├─ 6:00 AM (قبل دوام العمل)
├─ 12:30 PM (وقت الغداء)
├─ 4:00 PM (بعد ذروة العمل)
└─ 7:00 PM (بعد انتهاء العمل)
          </div>
        </li>
        <li>✅ <strong>للبيانات الحية:</strong> حدّث كل 15 دقيقة في ساعات العمل 9 AM - 6 PM فقط</li>
        <li>✅ <strong>للبيانات العادية:</strong> مرة أو مرتين يومياً كافٍ تماماً</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Incremental Refresh (التحديث الذكي الفعال)</h3>
      <p><strong>ما الفرق الحقيقي؟</strong></p>
      <div class="code-block">
مثال: جدول مبيعات بـ 100 مليون صف (2010-2024)

❌ Full Refresh (الطريقة العادية):
- تحميل جميع البيانات من 2010 إلى اليوم = 100 مليون صف
- الوقت: 20-30 دقيقة
- الموارد: عالية جداً (CPU, Memory, Network)

✅ Incremental Refresh (الطريقة الذكية):
- تحميل فقط بيانات الأسبوع الماضي = 1 مليون صف
- الوقت: 1-2 دقيقة فقط!
- الموارد: منخفضة جداً
- النتيجة: توفير 90% من الوقت والموارد!
      </div>
      <p><strong>متطلبات Incremental Refresh:</strong></p>
      <div class="code-block">
❌ شروط يجب توفرها:
1. الاشتراك: Power BI Premium أو Pro (قد يتطلب Premium Capacity)
2. جدول البيانات يجب أن يحتوي على:
   - DateTime column (مثل: TransactionDate, CreatedDate)
   - يستخدم لتقسيم البيانات (Partition)
3. في Power Query: استخدام RangeStart و RangeEnd parameters

✅ كيفية الإعداد في Power Query:
- أضف parameters: RangeStart و RangeEnd (type: DateTime)
- فلتر البيانات:
  Table.SelectRows(Source, each [Date] > RangeStart and [Date] <= RangeEnd)
      </div>
      <p><strong>مثال: إعداد Incremental Refresh</strong></p>
      <div class="code-block">
في Power BI Desktop:
1. اذهب إلى Transform Data
2. أضف Parameters:
   - RangeStart (DateTime)
   - RangeEnd (DateTime)
3. في Query، أضف Filter:
   = Table.SelectRows(#"Source",
     each [TransactionDate] > RangeStart
     and [TransactionDate] <= RangeEnd)
4. نشر الـ Report
5. في Power BI Service → Dataset Settings:
   - Incremental Refresh
   - Archive data older than X days (مثلاً 90 يوم)
   - Incrementally refresh data every X days (مثلاً 7 أيام)
      </div>
      <p><strong>مثال الأرقام الفعلية:</strong></p>
      <div class="code-block">
قبل Incremental Refresh:
- حجم جدول Sales: 100 مليون صف
- وقت التحديث: 25 دقيقة
- حجم Model: 5 GB

بعد Incremental Refresh:
- حجم في الذاكرة: 500 MB (فقط آخر 3 أشهر)
- وقت التحديث: 2 دقيقة
- توفير النطاق الترددي: 99%
      </div>
    </div>

    <div class="lesson-card">
      <h3>التعامل مع فشل التحديث</h3>
      <p><strong>الأسباب الشائعة للفشل وحلولها:</strong></p>
      <table style="width:100%;border-collapse:collapse;">
        <tr style="background:var(--bg-2);">
          <th style="padding:10px;border:1px solid var(--border);">السبب</th>
          <th style="padding:10px;border:1px solid var(--border);">الأعراض</th>
          <th style="padding:10px;border:1px solid var(--border);">الحل</th>
        </tr>
        <tr>
          <td style="padding:8px;border:1px solid var(--border);">⚠️ Gateway مقطوع</td>
          <td style="padding:8px;border:1px solid var(--border);">رسالة "Gateway offline"</td>
          <td style="padding:8px;border:1px solid var(--border);">تحقق من تشغيل On-Premises Data Gateway</td>
        </tr>
        <tr>
          <td style="padding:8px;border:1px solid var(--border);">⚠️ Credentials غير صحيحة</td>
          <td style="padding:8px;border:1px solid var(--border);">رسالة "Authentication failed"</td>
          <td style="padding:8px;border:1px solid var(--border);">أعد تسجيل بيانات الاعتماد في Dataset Settings</td>
        </tr>
        <tr>
          <td style="padding:8px;border:1px solid var(--border);">⚠️ Timeout (حد أقصى للوقت)</td>
          <td style="padding:8px;border:1px solid var(--border);">التحديث يستغرق أكثر من الحد المسموح</td>
          <td style="padding:8px;border:1px solid var(--border);">استخدم Incremental Refresh أو زيادة وقت الـ Timeout</td>
        </tr>
        <tr>
          <td style="padding:8px;border:1px solid var(--border);">⚠️ تنسيق بيانات تغير</td>
          <td style="padding:8px;border:1px solid var(--border);">رسالة "Column not found"</td>
          <td style="padding:8px;border:1px solid var(--border);">تحقق من Power Query Scripts وأعد تحديث البيانات يدوياً</td>
        </tr>
        <tr>
          <td style="padding:8px;border:1px solid var(--border);">⚠️ قاعدة بيانات معطلة</td>
          <td style="padding:8px;border:1px solid var(--border);">رسالة "Connection failed"</td>
          <td style="padding:8px;border:1px solid var(--border);">تحقق من حالة خادم قاعدة البيانات</td>
        </tr>
      </table>
      <p><strong>مراقبة التحديثات - Refresh History:</strong></p>
      <div class="code-block">
في Power BI Service:
1. اختر الـ Dataset
2. انقر على ⋯ (ثلاث نقاط)
3. اختر "Refresh History"
4. شاهد:
   - وقت بدء وانتهاء التحديث
   - المدة الإجمالية
   - حالة (Success/Failed/In Progress)
   - رسائل الخطأ إن وجدت

✅ نصيحة: احفظ Refresh History أسبوعياً للتتبع
      </div>
    </div>

    <div class="lesson-card">
      <h3>تنبيهات فشل التحديث مع Power Automate</h3>
      <p><strong>لا تجلس تنتظر - اجعل النظام ينبهك!</strong></p>
      <div class="code-block">
Flow: Monitor Refresh Failures

TRIGGER: Recurrence (يومياً الساعة 9 صباحاً)

CONDITION: Check last refresh in dataset
IF LastRefreshStatus = "FAILED" THEN
  ACTION 1: Send email to Admin
    Subject: "⚠️ Dataset Refresh Failed: Sales Daily Report"
    Body: "Last refresh failed at 8:00 AM. Check status immediately."

  ACTION 2: Post to Teams #alerts
    Message: "🚨 Dataset failed to refresh. Admin notified."

  ACTION 3: Create task in Planner
    Title: "Fix Dataset Refresh Failure"
    Assigned to: Data Team Lead
      </div>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>المعادلة الذهبية:</strong>
      <br/><strong style="color:var(--gold);">Refresh Frequency = Data Change Rate</strong>
      <br/>إذا تغيرت البيانات كل ساعة، حدّث كل ساعة
      <br/>إذا تغيرت كل يوم، حدّث يومياً
      <br/>إذا تغيرت كل أسبوع، حدّث أسبوعياً</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>Types of Refresh in Power BI</h3>
<p><strong>1. Manual Refresh</strong></p>
<ul>
<li>Manual refresh with one button click</li>
<li>Not practical for constantly changing data</li>
</ul>
<p><strong>2. Scheduled Refresh</strong></p>
<ul>
<li>Automatic refresh according to predefined schedule</li>
<li>Best for most cases</li>
</ul>
<p><strong>3. Incremental Refresh</strong></p>
<ul>
<li>Update only new data part</li>
<li>Faster and more efficient for huge data</li>
</ul>
</div>
<div class="lesson-card">
<h3>Smart Refresh Scheduling</h3>
<p><strong>Steps in Power BI Service:</strong></p>
<ol>
<li>Go to Dataset settings</li>
<li>Select "Scheduled Refresh"</li>
<li>Set refresh frequency (1, 2, or 4 times)</li>
<li>Choose time: for example, 8 AM and 2 PM</li>
<li>Set time zone</li>
</ol>
<p><strong>Smart Tips:</strong></p>
<ul>
<li>❌ Don't refresh every minute (waste of resources)</li>
<li>❌ Don't refresh during peak work hours (may slow system)</li>
<li>✅ Refresh during off-peak: 6 AM, 12 noon, 6 PM</li>
<li>✅ For very live data: refresh every 15 minutes during work hours</li>
</ul>
</div>
<div class="lesson-card">
<h3>Incremental Refresh (Smart Update)</h3>
<p><strong>What's the difference?</strong></p>
<ul>
<li><strong>Full Refresh:</strong> Load all data from 2020 to today = slow</li>
<li><strong>Incremental Refresh:</strong> Load only new data from yesterday = very fast</li>
</ul>
<p><strong>Requirements:</strong></p>
<ul>
<li>Power BI Pro or Premium (paid subscription)</li>
<li>Timestamp column in table</li>
<li>Partition data by date</li>
</ul>
<p><strong>Example:</strong></p>
<ul>
<li>Sales table with 100 million rows from 2010-2024</li>
<li>Full refresh: 30 minutes</li>
<li>Incremental: 2 minutes (load yesterday only)</li>
</ul>
</div>
<div class="lesson-card">
<h3>Handling Refresh Failures</h3>
<p><strong>Common Causes of Failure:</strong></p>
<ul>
<li>❌ Database unavailable (gateway down)</li>
<li>❌ Data format changed</li>
<li>❌ Time limit exceeded (timeout)</li>
<li>❌ Credential problem</li>
</ul>
<p><strong>Solution:</strong></p>
<ul>
<li>Use Power Automate: if refresh fails, send alert</li>
<li>Monitor refresh history in dashboard settings</li>
<li>Add logs for tracking</li>
</ul>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Golden Equation:</strong> Refresh Frequency = Data Change Rate. If data changes every hour, refresh every hour. If it changes weekly, refresh weekly.</p>
</div>` }],
  },

  // ==================== درس جديد: توليد التقارير الآلي ====================
  "automate-reports": {
    eyebrow: "08 · 03 — توليد التقارير الآلي",
    title: "توليد التقارير الآلي",
    lede: "إنشاء وإرسال التقارير تلقائياً للمستخدمين حسب جدول معين",
    en_eyebrow: "08 · 03 — Automated Report Generation",
    en_lede: "Create and send reports automatically to users on a schedule",
    sectionId: "automate-reports",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>ماذا تعني توليد التقارير الآلي؟</h3>
      <p><strong>الفكرة الأساسية:</strong> بدلاً من إرسال نفس التقرير يدوياً كل يوم أو أسبوع، اجعل البرنامج يفعلها تلقائياً!</p>
      <p><strong>الاختلاف الجوهري:</strong></p>
      <div class="code-block">
❌ الطريقة اليدوية (قديمة):
7:00 AM → فتح Power BI → Export to PDF → ملء بيانات البريد → إرسال لـ 50 مدير!

✅ الطريقة الآلية (ذكية):
7:00 AM → Flow يبدأ تلقائياً → 50 PDF مرسلة في ثانية! 🚀
      </div>
      <p><strong>الحالات الشائعة للأتمتة:</strong></p>
      <ul>
        <li>📊 إرسال تقرير مبيعات يومي للمديرين (8 صباحاً)</li>
        <li>📦 إرسال تقرير جودة المخزون أسبوعي (كل يوم جمعة)</li>
        <li>👥 إرسال ملخص الأداء الشهري للإدارة (أول يوم الشهر)</li>
        <li>💰 إرسال تقرير المالية كل نهاية أسبوع</li>
        <li>⏱️ إرسال تقرير التأخر لمديري المشاريع يومياً</li>
      </ul>
      <p><strong>الفوائد:</strong> ⏱️ توفير وقت | 🎯 ضمان المواعيد | 📈 احترافية أعلى</p>
    </div>

    <div class="lesson-card">
      <h3>الخيار 1: Email Subscriptions (الطريقة السهلة)</h3>
      <p><strong>لمن؟</strong> المستخدمين البسطاء الذين يريدون حل سريع</p>
      <p><strong>خطوات التنفيذ في Power BI Service:</strong></p>
      <ol>
        <li><strong>الخطوة 1:</strong> اذهب إلى Power BI Service (app.powerbi.com)</li>
        <li><strong>الخطوة 2:</strong> افتح التقرير أو Dashboard المراد</li>
        <li><strong>الخطوة 3:</strong> انقر على زر "<strong>Subscribe</strong>" في الأعلى اليمين</li>
        <li><strong>الخطوة 4:</strong> جديد نافذة: حدد:
          <ul>
            <li><strong>Recipients:</strong> أدخل البريد (يمكن واحد أو عدة)</li>
            <li><strong>Subject (اختياري):</strong> عنوان الرسالة</li>
            <strong>Send after</strong> قدم معة الإرسال</li>
            <li><strong>Frequency:</strong>
              <div class="code-block">
الخيارات:
• Daily (يومي)
• Weekly (أسبوعي)
• Monthly (شهري)
              </div>
            </li>
            <li><strong>Time:</strong> الساعة المحددة (مثلاً 7:00 AM)</li>
          </ul>
        </li>
        <li><strong>الخطوة 5:</strong> انقر "<strong>Save and Close</strong>"</li>
      </ol>
      <p><strong>ما الذي يرسله؟</strong></p>
      <div class="code-block">
البريد يحتوي على:
1. لقطة (Screenshot) من التقرير
2. رابط للتقرير كامل في Power BI
3. تاريخ الإرسال
4. معلومات إعادة الاشتراك

✅ مثال البريد:
â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”
[Screenshot of Sales Dashboard]

View the full report: https://app.powerbi.com/...
â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”
      </div>
      <p><strong>المميزات:</strong> ✅ بسيطة جداً | ✅ بدون برمجة | ✅ سريعة</p>
      <p><strong>العيوب:</strong> ❌ محدودة جداً | ❌ لا يمكن تغيير تصميم الرسالة | ❌ لا يمكن filters ديناميكية</p>
    </div>

    <div class="lesson-card">
      <h3>الخيار 2: Power Automate (الطريقة الاحترافية)</h3>
      <p><strong>لمن؟</strong> الشركات التي تريد حل متطور ومخصص</p>
      <p><strong>المميزات المتقدمة:</strong></p>
      <ul>
        <li>🎨 تخصيص كامل لرسالة البريد</li>
        <li>🔀 إرسال تقارير مختلفة حسب الشخص (branch-specific)</li>
        <li>📊 إضافة بيانات من مصادر أخرى (Excel, SharePoint)</li>
        <li>🔔 تنبيهات متعددة: Email + Teams + Slack</li>
        <li>ðŸ“ تسجيل وتتبع كل إرسال</li>
      </ul>
      <p><strong>مثال: إرسال تقرير مخصص حسب الموقع</strong></p>
      <div class="code-block">
السيناريو: شركة مبيعات بـ 10 فروع
المشكلة: كل المديرين يريدون تقرير فرعهم فقط (بدون البيانات الأخرى)

الحل مع Power Automate:
1. Trigger: كل يوم الساعة 8 صباحاً
2. Action 1: احصل على قائمة المديرين من Excel
3. For Each Loop:
   - Export report filtered by branch
   - Personalize email بـ اسم المدير وفرعه
   - Send personalized PDF
4. Log results في Excel

النتيجة: كل مدير يرى بيانات فرعه فقط!
      </div>
      <p><strong>خطوات بناء Flow في Power Automate:</strong></p>
      <ol>
        <li><strong>الخطوة 1:</strong> اذهب إلى <strong>flow.microsoft.com</strong></li>
        <li><strong>الخطوة 2:</strong> انقر "<strong>+ Create</strong>" → "<strong>Scheduled cloud flow</strong>"</li>
        <li><strong>الخطوة 3:</strong> سمّ الـ Flow: "Daily Sales Report Distribution"</li>
        <li><strong>الخطوة 4:</strong> حدد:
          <ul>
            <li><strong>Repeat every:</strong> 1 day</li>
            <li><strong>At:</strong> 7 AM</li>
            <li><strong>Timezone:</strong> Cairo</li>
          </ul>
        </li>
        <li><strong>الخطوة 5:</strong> أضف Action:
          <div class="code-block">
تسلسل الـ Actions:
1. Initialize Variable: managers_list (Array)
2. Get Excel Table (من قائمة المديرين)
3. Apply to Each (لكل مدير):
   a. Get Power BI Report
   b. Export to PDF (filtered by branch)
   c. Send Email (بـ Template مخصص)
   d. Log to Excel (success/failure)
          </div>
        </li>
      </ol>
    </div>

    <div class="lesson-card">
      <h3>أمثلة عملية متقدمة</h3>
      <p><strong>مثال 1: تقرير يومي مع Filters ديناميكية</strong></p>
      <div class="code-block">
Flow: "Daily Sales Report with Dynamic Date"

TRIGGER: Scheduled - يومياً 7 AM

ACTIONS:
1. Refresh Dataset في Power BI
2. Get today's date من Dynamic Content
3. Export report with Filter:
   - Date parameter = Yesterday (@{adddays(utcNow(), -1)})
4. Convert to PDF
5. Send email with beautiful HTML template:

Subject: "📊 Sales Report - @{formatDateTime(adddays(utcNow(), -1), 'MMMM dd, yyyy')}"

Body:
<html>
<body style="font-family: Arial;">
  <h2>Daily Sales Performance</h2>
  <p>Hello @{managers_name},</p>
  <p>Your sales report for @{yesterday} is attached below.</p>
  <ul>
    <li>Total Sales: @{total_sales}</li>
    <li>Orders: @{order_count}</li>
    <li>Achievement: @{achievement_percentage}% of daily target</li>
  </ul>
  <p>Best regards,<br/>BI Team</p>
</body>
</html>

6. Attachment: PDF report
      </div>
      <p><strong>مثال 2: تقرير موجه مخصص (Personalized)</strong></p>
      <div class="code-block">
Flow: "Branch-Specific Sales Report"

For each manager in managers_table:
  1. Get manager: Name, Email, Branch_ID, Region
  2. Export report with filters:
     - Branch = @{branch_id}
     - Region = @{region}
  3. Get manager KPIs from Excel:
     - Target sales
     - Current achievement
     - YTD performance
  4. Compose rich HTML email:
     <h3>Hello @{manager_name}</h3>
     <p>Your @{branch_name} performance report:</p>
     <table>
       <tr><td>Target</td><td>@{target}</td></tr>
       <tr><td>Actual</td><td>@{actual}</td></tr>
       <tr><td>Achievement</td><td>@{achievement}%</td></tr>
     </table>
     <p>@{congratulation_or_warning_message}</p>
  5. Send personalized email with PDF

Result: كل مدير يشعر بأن التقرير من أجله! 🎯
      </div>
      <p><strong>مثال 3: الأسبوعي للإدارة</strong></p>
      <div class="code-block">
Flow: "Weekly Executive Summary"

TRIGGER: كل يوم جمعة الساعة 4 مساءً

ACTIONS:
1. Get last 7 days data from Power BI
2. Create summary:
   - Total revenue: $XXX,XXX
   - Top 3 products
   - Top 3 regions
   - Risk alerts (if any)
3. Create Excel with details
4. Compose executive email:
   - Short summary (1 paragraph)
   - Key metrics table
   - Charts/images
   - Recommendations
5. Send to: CFO, CEO, VPs

Result: Leadership يشوف الصورة الكاملة بسرعة! 👔
      </div>
    </div>

    <div class="lesson-card">
      <h3>Email Templates الاحترافية</h3>
      <p><strong>لا تكتفِ بـ PDF بدون سياق! استخدم templates جميلة</strong></p>
      <div class="code-block">
Template محترف:

Subject: 📊 Daily Sales Report - @{date}

From: noreply@company.com
To: @{recipient_email}

---

<html style="font-family: 'Segoe UI', Tahoma, sans-serif;">
<body style="background-color: #f5f5f5; padding: 20px;">

  <div style="background-color: white; border-radius: 10px; padding: 30px; max-width: 600px;">

    <!-- Header -->
    <div style="border-bottom: 3px solid #0078d4; padding-bottom: 20px;">
      <h1 style="color: #0078d4; margin: 0;">📊 Daily Sales Report</h1>
      <p style="color: #666; margin: 5px 0;">@{formatDateTime(utcNow(), 'MMMM dd, yyyy')}</p>
    </div>

    <!-- Greeting -->
    <p style="color: #333; margin-top: 20px;">
      Hello @{manager_name},
    </p>

    <!-- Key Metrics -->
    <div style="background-color: #f0f8ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
      <h3 style="color: #0078d4;">Key Metrics</h3>
      <ul style="list-style: none; padding: 0;">
        <li style="padding: 5px; border-bottom: 1px solid #ddd;">
          💰 Total Sales: <strong>@{total_sales}</strong>
        </li>
        <li style="padding: 5px; border-bottom: 1px solid #ddd;">
          🎯 Target: <strong>@{target}</strong>
        </li>
        <li style="padding: 5px;">
          ✅ Achievement: <strong style="color: @{achievement_color};">@{achievement}%</strong>
        </li>
      </ul>
    </div>

    <!-- Status Message -->
    <div style="background-color: @{status_bg_color}; padding: 15px; border-radius: 5px; margin: 20px 0;">
      <p style="color: @{status_text_color}; margin: 0;">
        @{status_message}
      </p>
    </div>

    <!-- CTA Button -->
    <div style="text-align: center; margin: 20px 0;">
      <a href="@{report_url}" style="background-color: #0078d4; color: white; padding: 12px 30px; border-radius: 5px; text-decoration: none; font-weight: bold;">
        View Full Report
      </a>
    </div>

    <!-- Footer -->
    <div style="border-top: 1px solid #ddd; margin-top: 30px; padding-top: 20px; color: #999; font-size: 12px;">
      <p>
        This is an automated report. Questions? Contact the BI Team at bi@company.com
      </p>
    </div>

  </div>
</body>
</html>
      </div>
    </div>

    <div class="lesson-card">
      <h3>مثال عملي كامل: نظام توزيع تقارير متقدم</h3>
      <p><strong>السيناريو الواقعي:</strong> شركة مبيعات بـ 50 فرع، تريد نظام توزيع تقارير يومي متطور</p>
      <p><strong>المتطلبات:</strong></p>
      <ul>
        <li>50 مدير فرع ← كل واحد يريد تقرير فرعه فقط</li>
        <li>3 VPs ← يريدون ملخص كل المناطق</li>
        <li>CFO ← يريد تقرير مالي فقط</li>
        <li>المواعيد ← 8 صباحاً (قبل اجتماع اليوم)</li>
      </ul>
      <p><strong>الحل الكامل مع Flow:</strong></p>
      <div class="code-block">
TRIGGER: Scheduled - يومياً 7:30 AM (نصف ساعة قبل الموعد)

STEP 1: تجهيز البيانات
└─ Refresh Power BI Dataset

STEP 2: إعداد تواريخ
├─ Get Yesterday's date
└─ Get Month-to-date

STEP 3: معالجة المديرين (50)
└─ For Each manager in Excel:
    ├─ Get manager info (Name, Email, Branch_ID, Region_ID)
    ├─ Export report filtered by Branch_ID
    ├─ Compose personalized email (see template above)
    ├─ Send Email with PDF attachment
    └─ Log to tracking Excel (Sent time, recipient, file size)

STEP 4: معالجة الـ VPs (3)
└─ For Each VP in Excel:
    ├─ Get region summary data
    ├─ Export full regional report
    ├─ Compose executive summary email
    ├─ Attach PDF + Excel summary
    └─ Log success

STEP 5: معالجة CFO (1)
├─ Get financial KPIs
├─ Create Financial Report PDF
├─ Compose accounting email
└─ Send

STEP 6: التسجيل والمراقبة
├─ Log total emails sent: 54
├─ Log failures (if any)
├─ Send admin notification: "Daily reports distributed successfully at 8:02 AM"
└─ Create summary in Planner

RESULT: 54 بريد مخصص في دقيقة واحدة! 🚀

المخطط الزمني:
7:30 AM → Flow يبدأ
7:31 AM → تحديث البيانات
7:32-7:45 AM → إرسال 54 بريد
7:46 AM → تسجيل النتائج
8:00 AM → المديرون يشتغلون بـ البيانات الحديثة!
      </div>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>نصائح احترافية:</strong>
      <br/>🎨 استخدم HTML templates جميلة (ليست صورة عادية)
      <br/>📊 ضمّن بيانات موجزة مباشرة في الرسالة
      <br/>🔗 أضف رابط للتقرير الكامل
      <br/>ðŸ“ اكتب رسالة مخصصة لكل شخص (اسمه، فرعه، إنجازاته)
      <br/>⏰ أرسل في الوقت المناسب (قبل الاجتماعات مثلاً)</p>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>تحذيرات مهمة:</strong>
      <br/>❌ اختبر Flow قبل التفعيل (قد ترسل 100 بريد خطأ!)
      <br/>❌ تحقق من حدود الترخيص (إرسال 50+ PDF قد يحتاج Premium)
      <br/>❌ لا تنسَ Throttle الـ Flow (حد أقصى للرسائل في الساعة)
      <br/>✅ اعمل Dry Run أول يوم (أرسل لنفسك قبل التفعيل)</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
<h3>What Does Automated Report Generation Mean?</h3>
<p><strong>Idea:</strong> Instead of sending same report manually every day or week, let the program do it!</p>
<p><strong>Common Cases:</strong></p>
<ul>
<li>Send daily sales report to managers</li>
<li>Send weekly inventory quality report to procurement</li>
<li>Send monthly performance summary to management</li>
</ul>
<p><strong>Benefit:</strong> Save time and ensure reports arrive on schedule 🎯</p>
</div>
<div class="lesson-card">
<h3>Option 1: Subscriptions (Easy Method)</h3>
<p><strong>In Power BI Service:</strong></p>
<ol>
<li>Open the report or dashboard</li>
<li>Click "Subscribe" button at top</li>
<li>Set recipients (email addresses)</li>
<li>Choose send frequency: daily/weekly/monthly</li>
<li>Set time and recurrence</li>
</ol>
<p><strong>Advantages:</strong></p>
<ul>
<li>✅ Very easy</li>
<li>✅ No programming</li>
<li>✅ Sends screenshot with link</li>
</ul>
<p><strong>Disadvantages:</strong></p>
<ul>
<li>❌ Limited options (too simple)</li>
<li>❌ Can't include dynamic filters</li>
</ul>
</div>
<div class="lesson-card">
<h3>Option 2: Power Automate (Professional Method)</h3>
<p><strong>Example: Send customized report by location</strong></p>
<ol>
<li>Create new flow</li>
<li>Trigger: Scheduled (daily 8 AM)</li>
<li>Action: "Export to PDF" from Power BI</li>
<li>Condition: By location → send to that location's manager</li>
<li>Action 2: Send email with PDF attachment</li>
</ol>
<p><strong>Detailed Example:</strong></p>
<ul>
<li>Sales report from 10 branches</li>
<li>Instead of sending one report to all managers</li>
<li>Send each manager a customized report of their branch only</li>
<li>Each one sees only their branch data + team performance</li>
</ul>
</div>
<div class="lesson-card">
<h3>Adding Dynamics to Reports</h3>
<p><strong>Example: Report that changes by date</strong></p>
<ul>
<li>In Power BI: Add date parameter</li>
<li>In Flow: Use dynamic content → today's date</li>
<li>In PDF export: Pass date as filter</li>
<li>Result: Every day yesterday's report sent automatically 📊</li>
</ul>
</div>
<div class="tip-box">
<div class="icon">💡</div>
<p><strong>Professional Tip:</strong> Use email template in Power Automate. Write a nice message explaining what's in the report instead of just a PDF file without context.</p>
</div>
<div class="lesson-card">
<h3>Complete Practical Example: Daily Sales Report</h3>
<p><strong>Scenario:</strong> Sales company wants to send daily report to 50 branch managers</p>
<p><strong>Solution with Power Automate:</strong></p>
<ol>
<li><strong>Trigger:</strong> Scheduled - daily 7 AM</li>
<li><strong>Action 1:</strong> Refresh Power BI Dataset (get latest data)</li>
<li><strong>Action 2:</strong> Get list of managers from Excel/SharePoint</li>
<li><strong>Action 3:</strong> Loop through each manager:</li>
<ul>
<li>Export report filtered by their branch</li>
<li>Convert to PDF</li>
<li>Send personalized email</li>
</ul>
<li><strong>Action 4:</strong> Log success/failure to tracking sheet</li>
</ol>
<p><strong>Result:</strong> 50 customized reports sent automatically in minutes! 🚀</p>
</div>
<div class="warn-box">
<div class="icon">⚠️</div>
<p><strong>Warning:</strong> Check license limits. Sending 50 PDFs daily may require Premium Capacity in some cases.</p>
</div>` }],
  },
};

Object.assign(window.LESSONS, {
  "common-mistakes": {
    ...window.LESSONS["common-mistakes"],
    eyebrow: "07 · 04 — الأخطاء الشائعة و Anti-patterns",
    title: "الأخطاء الشائعة و Anti-patterns",
    lede: "هذا الدرس ليس قائمة أخطاء فقط، بل خريطة للأشياء التي تفسد صحة الأرقام والأداء وقابلية الصيانة في Power BI.",
    en_eyebrow: "07 · 04 — Common Mistakes & Anti-patterns",
    en_lede: "A practical map of mistakes that break correctness, performance, and maintainability in Power BI.",
    sectionId: "common-mistakes",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>كيف تتعامل مع هذا الدرس؟</h3>
      <p>كل خطأ هنا له 3 زوايا: <strong>العرض الظاهر</strong> الذي يراه المستخدم، <strong>السبب الحقيقي</strong> داخل النموذج، ثم <strong>الإصلاح الصحيح</strong> الذي يمنع تكرار المشكلة.</p>
      <p>إذا حفظت هذا الدرس جيدًا، ستوفّر على نفسك ساعات Debugging ومراجعات محرجة أمام العميل.</p>
    </div>

    <table class="compare-table">
      <tr>
        <th>Anti-pattern</th>
        <th>الخطر</th>
        <th>البديل الصحيح</th>
      </tr>
      <tr>
        <td>Flat Table واحدة لكل شيء</td>
        <td>بطء، تكرار، وصعوبة في DAX</td>
        <td>Star Schema واضح: Facts + Dimensions</td>
      </tr>
      <tr>
        <td>Many-to-Many مباشرة أو Bi-directional في كل علاقة</td>
        <td>نتائج مضاعفة وفلاتر غير متوقعة</td>
        <td>Bridge Table واستخدام الاتجاهين فقط عند الحاجة المبررة</td>
      </tr>
      <tr>
        <td>استخدام Calculated Columns بدل Measures</td>
        <td>زيادة الحجم وثبات الحساب على مستوى الصف</td>
        <td>Measure تحترم Filter Context</td>
      </tr>
      <tr>
        <td>عدم إنشاء Date Table حقيقية</td>
        <td>Time Intelligence ناقصة أو خاطئة</td>
        <td>جدول تقويم مستقل ومعلّم كـ Date Table</td>
      </tr>
      <tr>
        <td>إطفاء الأداء في آخر المشروع فقط</td>
        <td>نموذج جميل لكنه غير قابل للاستخدام</td>
        <td>قياس الأداء مبكرًا باستخدام DAX Studio وPerformance Analyzer</td>
      </tr>
    </table>

    <div class="lesson-card">
      <h3>مثال شائع: Column كان يجب أن تكون Measure</h3>
      <p><strong>الخطأ:</strong> إنشاء عمود محسوب لكل صف ثم جمعه لاحقًا، فقط لأن الصيغة بدت أسهل.</p>
      <div class="code-block">
<span class="cm">-- خطأ: عمود محسوب يستهلك الذاكرة لكل صف</span>
Line Amount = Sales[Quantity] * Sales[UnitPrice]

<span class="cm">-- ثم Measure تجمع العمود</span>
Total Sales = <span class="fn">SUM</span>( Sales[Line Amount] )

<span class="cm">-- الأفضل: الحساب وقت الاستعلام فقط</span>
Total Sales = 
<span class="fn">SUMX</span>(
    Sales,
    Sales[Quantity] * Sales[UnitPrice]
)
      </div>
      <p><strong>متى نلجأ لCalculated Column؟</strong> عندما تحتاج قيمة ثابتة على مستوى الصف للتصنيف أو الربط أو البحث، وليس Aggregate ديناميكيًا.</p>
    </div>

    <div class="lesson-card">
      <h3>Many-to-Many: متى تكون كارثة؟</h3>
      <p>المشكلة ليست في وجود علاقة Many-to-Many بحد ذاتها، بل في استخدامها كحل سريع بدون فهم لمسار الفلاتر. إذا كان المنتج يرتبط بعدة حملات، والحملة ترتبط بعدة منتجات، فالحل الصحيح غالبًا هو:</p>
      <ul>
        <li>جدول Products</li>
        <li>جدول Campaigns</li>
        <li>جدول وسيط ProductCampaign Bridge</li>
      </ul>
      <p>ثم تراقب اتجاه الفلترة وتختبر النتائج على أمثلة صغيرة قبل التعميم.</p>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>قاعدة مهمة:</strong> إذا احتجت أن تشرح للعميل لماذا الرقم تغيّر لأن “الفلاتر مشت في اتجاه غريب”، فغالبًا المشكلة ليست في العميل بل في تصميم النموذج.</p>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>Checklist قبل النشر:</strong> هل لديك Date Table؟ هل الـ Measures منفصلة عن الأعمدة؟ هل كل علاقة مفهومة ومقصودة؟ هل راجعت الأداء؟ هل جرّبت سيناريوهات edge cases؟ إذا أجبت “لا” على واحدة منها، فالمنهج العملي يقول: لا تنشر بعد.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>How to use this lesson</h3>
      <p>Each anti-pattern has three parts: the visible symptom, the real modeling cause, and the design correction that prevents the issue from returning.</p>
      <p>If you learn this lesson well, you save hours of debugging and many awkward conversations about why a number changed unexpectedly.</p>
    </div>

    <table class="compare-table">
      <tr>
        <th>Anti-pattern</th>
        <th>Why it hurts</th>
        <th>Better pattern</th>
      </tr>
      <tr>
        <td>One giant flat table</td>
        <td>Weak performance, duplication, and harder DAX.</td>
        <td>Clear star schema with facts and dimensions.</td>
      </tr>
      <tr>
        <td>Many-to-many or bidirectional everywhere</td>
        <td>Unpredictable filters and inflated totals.</td>
        <td>Bridge tables and controlled filter direction.</td>
      </tr>
      <tr>
        <td>Calculated columns for dynamic logic</td>
        <td>Larger model size and row-level rigidity.</td>
        <td>Measures that respect filter context.</td>
      </tr>
      <tr>
        <td>No proper date table</td>
        <td>Broken or incomplete time intelligence.</td>
        <td>An explicit calendar table marked as Date Table.</td>
      </tr>
      <tr>
        <td>Performance tuning at the end only</td>
        <td>A nice-looking report that nobody enjoys using.</td>
        <td>Measure performance early with DAX Studio and Performance Analyzer.</td>
      </tr>
    </table>

    <div class="lesson-card">
      <h3>Classic example: column that should have been a measure</h3>
      <p><strong>Wrong pattern:</strong> create a calculated column for every row because the formula feels easier at first, then aggregate it later.</p>
      <div class="code-block">
-- Wrong: stored on every row
Line Amount = Sales[Quantity] * Sales[UnitPrice]

-- Then aggregated later
Total Sales = SUM( Sales[Line Amount] )

-- Better: calculate at query time
Total Sales =
SUMX(
    Sales,
    Sales[Quantity] * Sales[UnitPrice]
)
      </div>
      <p>Use a calculated column only when you need a stable row-level attribute for classification, relationship logic, or search. Use a measure when the value should change with filter context.</p>
    </div>

    <div class="lesson-card">
      <h3>Many-to-many becomes risky when it becomes a shortcut</h3>
      <p>The issue is not that many-to-many can never exist. The issue is using it as a quick fix without understanding filter flow.</p>
      <p>If products connect to many campaigns and campaigns connect to many products, the safer design is usually Products, Campaigns, and a ProductCampaign bridge table, followed by careful filter testing on small examples.</p>
    </div>

    <div class="warn-box">
      <div class="icon">!</div>
      <p><strong>Rule of thumb:</strong> if you keep explaining to users that a number changed because filters moved in a strange direction, the real problem is usually the model design, not the user.</p>
    </div>

    <div class="tip-box">
      <div class="icon">?</div>
      <p><strong>Checklist before release:</strong> do you have a date table, clean measures, intentional relationships, and a performance review? If any answer is no, the practical answer is simple: do not ship yet.</p>
    </div>` }],
  },

  "external-tools": {
    ...window.LESSONS["external-tools"],
    eyebrow: "07 · 08 — الأدوات الخارجية",
    title: "الأدوات الخارجية",
    lede: "هذه الأدوات ليست رفاهية. هي التي تنقلك من مستخدم Desktop إلى شخص يدير نموذجًا احترافيًا بسرعة ودقة.",
    en_eyebrow: "07 · 08 — External Tools",
    en_lede: "These tools move you from a Desktop user to a faster and more disciplined model builder.",
    sectionId: "external-tools",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>متى تفتح أداة خارجية أصلًا؟</h3>
      <p>افتحها عندما يصبح Power BI Desktop وحده بطيئًا أو محدودًا في واحدة من 4 مهام: <strong>تشخيص الأداء</strong>، <strong>التعديل الجماعي</strong>، <strong>مقارنة النماذج</strong>، <strong>توثيق الجودة</strong>.</p>
    </div>

    <table class="compare-table">
      <tr>
        <th>الأداة</th>
        <th>الاستخدام الأساسي</th>
        <th>متى أفتحها؟</th>
      </tr>
      <tr>
        <td>DAX Studio</td>
        <td>Server Timings, Query Plan, VertiPaq Analyzer</td>
        <td>عندما يكون التقرير بطيئًا أو Measure مشكوكًا فيها</td>
      </tr>
      <tr>
        <td>Tabular Editor</td>
        <td>Bulk editing, folders, BPA, calculation groups</td>
        <td>عندما يكبر النموذج ويصير التعديل اليدوي مرهقًا</td>
      </tr>
      <tr>
        <td>Bravo</td>
        <td>إدارة Date Table، تحسين النموذج، تنسيق Measures</td>
        <td>للمهام السريعة والمتكررة</td>
      </tr>
      <tr>
        <td>ALM Toolkit</td>
        <td>مقارنة ونقل تغييرات النماذج بين بيئات مختلفة</td>
        <td>قبل الترقية من Dev إلى Test أو Prod</td>
      </tr>
    </table>

    <div class="lesson-card">
      <h3>DAX Studio — ماذا أفعل به عمليًا؟</h3>
      <ul>
        <li>شغّل <strong>Server Timings</strong> لمعرفة هل البطء من الـ Storage Engine أم Formula Engine.</li>
        <li>راجع <strong>Query Plan</strong> لتعرف هل الصيغة معقدة أكثر من اللازم.</li>
        <li>استخدم <strong>VertiPaq Analyzer</strong> لمعرفة أي جدول أو عمود يستهلك الذاكرة الأكبر.</li>
      </ul>
      <p>الهدف ليس “فتح الأداة”، بل الخروج منها بقرار عملي: حذف عمود، تبسيط Measure، أو تعديل Model.</p>
    </div>

    <div class="lesson-card">
      <h3>Tabular Editor — أين يوفر الوقت فعلًا؟</h3>
      <ul>
        <li>إنشاء Display Folders لمئات الـ Measures دفعة واحدة</li>
        <li>إضافة descriptions وتنسيقات موحّدة</li>
        <li>تشغيل <strong>Best Practice Analyzer</strong> لاكتشاف مشاكل التسمية والاعتماديات</li>
        <li>إنشاء Calculation Groups بدل تكرار 20 Measure متشابهة</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>Workflow احترافي بسيط:</strong> ابنِ النموذج في Desktop → افحص الأداء بـ DAX Studio → نظّمه في Tabular Editor → قارنه ونقله بـ ALM Toolkit. بهذا التسلسل ستحصل على سرعة + جودة + قابلية صيانة.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>When should you open an external tool?</h3>
      <p>Open one when Desktop alone becomes too slow or too limited for one of four jobs: diagnosing performance, making bulk edits, comparing models, or enforcing quality rules.</p>
    </div>

    <table class="compare-table">
      <tr>
        <th>Tool</th>
        <th>Main use</th>
        <th>When to open it</th>
      </tr>
      <tr>
        <td>DAX Studio</td>
        <td>Server Timings, Query Plan, VertiPaq Analyzer</td>
        <td>When a report is slow or a measure feels suspicious.</td>
      </tr>
      <tr>
        <td>Tabular Editor</td>
        <td>Bulk editing, display folders, BPA, calculation groups</td>
        <td>When the model becomes too large for manual editing.</td>
      </tr>
      <tr>
        <td>Bravo</td>
        <td>Quick date-table and model cleanup tasks</td>
        <td>When you want fast productivity for repetitive tasks.</td>
      </tr>
      <tr>
        <td>ALM Toolkit</td>
        <td>Compare and deploy semantic model changes</td>
        <td>Before promoting changes between environments.</td>
      </tr>
    </table>

    <div class="lesson-card">
      <h3>DAX Studio in practical terms</h3>
      <ul>
        <li>Use <strong>Server Timings</strong> to see whether the bottleneck is in the Storage Engine or Formula Engine.</li>
        <li>Use <strong>Query Plan</strong> to inspect expensive logic.</li>
        <li>Use <strong>VertiPaq Analyzer</strong> to find which tables or columns are consuming memory.</li>
      </ul>
      <p>The goal is not to open the tool for its own sake. The goal is to leave with a concrete decision: remove a column, simplify a measure, or redesign part of the model.</p>
    </div>

    <div class="lesson-card">
      <h3>Where Tabular Editor saves real time</h3>
      <ul>
        <li>Create display folders for many measures in one pass.</li>
        <li>Apply descriptions and formatting consistently.</li>
        <li>Run Best Practice Analyzer to catch quality issues early.</li>
        <li>Build calculation groups instead of hand-writing many duplicate measures.</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">?</div>
      <p><strong>Practical workflow:</strong> build in Desktop, measure in DAX Studio, organize in Tabular Editor, and compare or deploy with ALM Toolkit. That sequence gives you speed, discipline, and maintainability together.</p>
    </div>` }],
  },

  "apis": {
    ...window.LESSONS["apis"],
    eyebrow: "07 · 09 — APIs و Embedded",
    title: "APIs و Embedded",
    lede: "هذا الباب يشرح كيف تجعل Power BI جزءًا من نظام أكبر: تطبيق ويب، بوابة داخلية، أتمتة إدارية، أو منصة SaaS.",
    en_eyebrow: "07 · 09 — APIs & Embedded",
    en_lede: "How to make Power BI part of a larger system: web app, internal portal, automation flow, or SaaS platform.",
    sectionId: "apis",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>3 استخدامات مختلفة لا تخلط بينها</h3>
      <ul>
        <li><strong>REST API:</strong> لإدارة Workspaces, Reports, Datasets, Refreshes, Users, Scans.</li>
        <li><strong>Embedded Analytics:</strong> لعرض التقارير داخل تطبيقك بواجهة مخصّصة.</li>
        <li><strong>Admin / Governance APIs:</strong> للجرد، المراقبة، والتحكم المؤسسي.</li>
      </ul>
      <p>المشكلة الشائعة أن الناس تقول “عايز أستخدم API” بينما هي تقصد غالبًا <strong>Embedding</strong> أو <strong>Automation</strong> لا أكثر.</p>
    </div>

    <div class="lesson-card">
      <h3>Service Principal: ما هو فعلاً؟</h3>
      <p>Service Principal ليس “تشفيرًا” كما يظن البعض، بل <strong>هوية تطبيق</strong> non-human identity تُستخدم للأتمتة والاتصالات بين الأنظمة.</p>
      <ul>
        <li>يُستخدم في refresh automation أو scanning أو embedding scenarios</li>
        <li>يحتاج صلاحيات واضحة ومحدودة</li>
        <li>لا يغني وحده عن تصميم أمني جيد داخل Power BI</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>معمارية Embedded باختصار عملي</h3>
      <div class="code-block">
<span class="cm">1) المستخدم يفتح تطبيقك</span>
<span class="cm">2) Backend يتحقق من هوية المستخدم وصلاحياته</span>
<span class="cm">3) Backend يطلب Access Token / Embed Token</span>
<span class="cm">4) Frontend يحمّل تقرير Power BI داخل iframe أو SDK</span>
<span class="cm">5) Filters / RLS / role assignment تحدد ما الذي يراه المستخدم</span>
      </div>
      <p>الـ token جزء من المعمارية، لكنه ليس المعمارية كلها. الأهم هو: من يطلبه؟ ولأي workspace؟ وبأي scope؟</p>
    </div>

    <table class="compare-table">
      <tr>
        <th>السيناريو</th>
        <th>الأداة المناسبة</th>
      </tr>
      <tr>
        <td>إجبار Dataset على Refresh من نظام خارجي</td>
        <td>REST API</td>
      </tr>
      <tr>
        <td>عرض Dashboard داخل تطبيق SaaS لعملائك</td>
        <td>Embedded Analytics</td>
      </tr>
      <tr>
        <td>عمل Inventory لكل الـ workspaces والتقارير</td>
        <td>Admin APIs</td>
      </tr>
    </table>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>أهم تحذير:</strong> الـ embedding لا يلغي الحاجة إلى RLS/OLS/permission design. إذا بنيت المعمارية على “token يفتح كل شيء” فأنت تصنع ثغرة، لا منتجًا.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>Three different use cases you should not mix up</h3>
      <ul>
        <li><strong>REST API:</strong> manage workspaces, reports, datasets, refreshes, and assignments.</li>
        <li><strong>Embedded Analytics:</strong> place Power BI content inside your own application experience.</li>
        <li><strong>Admin APIs:</strong> inventory, monitoring, and governance at scale.</li>
      </ul>
      <p>A common confusion is saying "we need the API" when the real need is embedding or a simple automation flow.</p>
    </div>

    <div class="lesson-card">
      <h3>What a Service Principal really is</h3>
      <p>A Service Principal is not an encryption method. It is a non-human application identity used for automation and system-to-system communication.</p>
      <ul>
        <li>It can be used for refresh automation, tenant scanning, and embedding scenarios.</li>
        <li>It still needs explicit and limited permissions.</li>
        <li>It does not replace good model security or good workspace design.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Embedded architecture in one simple flow</h3>
      <div class="code-block">
1) User opens your application
2) Backend checks identity and permissions
3) Backend requests access or embed token
4) Frontend loads the Power BI content through SDK or iframe
5) RLS, filters, and role assignments limit what the user sees
      </div>
      <p>The token is part of the architecture, but not the whole architecture. The real design questions are who requests it, for which workspace, and with what scope.</p>
    </div>

    <table class="compare-table">
      <tr>
        <th>Scenario</th>
        <th>Best-fit tool</th>
      </tr>
      <tr>
        <td>Trigger dataset refresh from another system</td>
        <td>REST API</td>
      </tr>
      <tr>
        <td>Show dashboards inside a SaaS product</td>
        <td>Embedded Analytics</td>
      </tr>
      <tr>
        <td>Create tenant-wide inventory or governance scans</td>
        <td>Admin APIs</td>
      </tr>
    </table>

    <div class="warn-box">
      <div class="icon">!</div>
      <p><strong>Important warning:</strong> embedding does not remove the need for RLS, OLS, or sane permissions. If your design assumes that one token can safely open everything, you are building a vulnerability, not a product.</p>
    </div>` }],
  },

  "git-integration": {
    ...window.LESSONS["git-integration"],
    eyebrow: "07 · 10 — Git و CI/CD",
    title: "Git و CI/CD",
    lede: "Git في Power BI ليس شعارًا. هو أسلوب عمل يبدأ من PBIP/TMDL وينتهي بإطلاق منظم بين Dev و Test و Prod.",
    en_eyebrow: "07 · 10 — Git & CI/CD",
    en_lede: "Git in Power BI is a workflow, not a buzzword. It starts with PBIP/TMDL and ends with controlled promotion across environments.",
    sectionId: "git-integration",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>متى يصبح Git ذا معنى في Power BI؟</h3>
      <p>عندما تحفظ المشروع كـ <strong>PBIP</strong> أو تعتمد على <strong>TMDL / Tabular metadata</strong>. أما ملف PBIX الثنائي وحده فصعب مراجعته، ومقارنته، ودمجه داخل Git.</p>
    </div>

    <div class="lesson-card">
      <h3>ما الذي يدخل الريبو؟</h3>
      <div class="code-block">
Project/
  Report/
  SemanticModel/
  .gitignore
  deployment-notes.md
  release-checklist.md
      </div>
      <ul>
        <li>ملفات النموذج والنصوص القابلة للمقارنة</li>
        <li>وثائق التغيير والإطلاق</li>
        <li>Scripts أو pipeline config إن وجدت</li>
      </ul>
      <p><strong>ما لا يدخل غالبًا:</strong> ملفات مؤقتة، export binaries، أو أسرار وtokens.</p>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <h4>Feature Branch</h4>
          <p>كل تعديل على Measures أو visuals أو model structure يتم على branch منفصل، لا مباشرة على main.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <h4>Review</h4>
          <p>راجع التغييرات: أسماء Measures، حذف الأعمدة، تغيّر العلاقات، التأثير على RLS، وأي breaking changes.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <h4>Deploy</h4>
          <p>بعد الدمج، استخدم Deployment Pipelines أو ALM Toolkit أو scripts لنقل التغييرات بشكل مضبوط إلى Test ثم Prod.</p>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>CI/CD الواقعي في Power BI</h3>
      <ul>
        <li>CI هنا يعني التحقق من جودة metadata والملفات والـ naming conventions</li>
        <li>CD يعني دفع التغييرات بين البيئات مع قواعد واضحة للبيانات والاتصالات</li>
        <li>ليس المطلوب أن “تبني pipeline” فقط، بل أن تعرف ما الذي يجوز نقله وما الذي يجب أن يبقى environment-specific</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>أفضل نقطة بداية:</strong> لو فريقك صغير، لا تبدأ بمشهد DevOps ضخم. ابدأ بـ PBIP + Git + release checklist + بيئات واضحة. ثم أضف pipeline عندما تصبح الحاجة حقيقية.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>When does Git become meaningful in Power BI?</h3>
      <p>When the project is stored as <strong>PBIP</strong> or represented through text-friendly metadata such as TMDL. A binary PBIX file alone is difficult to diff, review, and merge in a healthy Git workflow.</p>
    </div>

    <div class="lesson-card">
      <h3>What belongs in the repository?</h3>
      <div class="code-block">
Project/
  Report/
  SemanticModel/
  .gitignore
  deployment-notes.md
  release-checklist.md
      </div>
      <ul>
        <li>Model and report metadata that can be reviewed.</li>
        <li>Release notes and deployment guidance.</li>
        <li>Pipeline config or scripts when they exist.</li>
      </ul>
      <p>What usually does not belong there: temporary exports, binaries you cannot review meaningfully, and secrets or tokens.</p>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <h4>Use feature branches</h4>
          <p>Measure changes, visual redesign, and model edits should happen on a branch, not directly on main.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <h4>Review like a BI engineer</h4>
          <p>Review naming, deleted columns, changed relationships, RLS impact, and possible breaking changes before merge.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <h4>Promote after merge</h4>
          <p>Once the change is approved, use Deployment Pipelines, ALM Toolkit, or scripts to move it safely into Test and then Prod.</p>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>What CI/CD means in the real world</h3>
      <ul>
        <li>CI means checking metadata quality, conventions, and readiness to release.</li>
        <li>CD means moving approved changes between environments with discipline.</li>
        <li>The main goal is knowing what can move automatically and what must remain environment-specific.</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">?</div>
      <p><strong>Best starting point:</strong> if your team is small, do not begin with a giant DevOps theater. Start with PBIP, Git, a release checklist, and clear environments. Add pipelines when the need becomes real.</p>
    </div>` }],
  },

  "advanced-dataflows": {
    ...window.LESSONS["advanced-dataflows"],
    eyebrow: "07 · 11 — Dataflows المتقدمة",
    title: "Dataflows المتقدمة",
    lede: "Dataflows ليست فقط “Power Query في السحابة”. هي طبقة reuse وتحضير بيانات مشتركة بين عدة تقارير وفرق.",
    en_eyebrow: "07 · 11 — Advanced Dataflows",
    en_lede: "Dataflows are not just “Power Query in the cloud”; they are a reusable preparation layer across reports and teams.",
    sectionId: "advanced-dataflows",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>متى أستخدم Dataflow بدل Power Query داخل Desktop؟</h3>
      <p>عندما تكون خطوة التحضير نفسها مطلوبة في <strong>أكثر من Dataset</strong> أو <strong>أكثر من فريق</strong> أو تحتاج أن تعمل في السحابة لا على جهاز محلل واحد.</p>
    </div>

    <table class="compare-table">
      <tr>
        <th>الخيار</th>
        <th>مناسب عندما</th>
      </tr>
      <tr>
        <td>Power Query داخل Desktop</td>
        <td>تقرير واحد أو نموذج واحد ومصدر بسيط</td>
      </tr>
      <tr>
        <td>Dataflow</td>
        <td>نفس الـ cleansing logic يجب إعادة استخدامه عبر عدة نماذج</td>
      </tr>
      <tr>
        <td>Dataflow Gen2 / Fabric</td>
        <td>تريد orchestration أوسع وربطًا أوضح مع lakehouse / warehouse</td>
      </tr>
    </table>

    <div class="lesson-card">
      <h3>نمط عملي مقترح</h3>
      <ul>
        <li><strong>Raw layer:</strong> نسخ البيانات كما هي مع أقل تعديل ممكن</li>
        <li><strong>Clean layer:</strong> توحيد الأنواع، تنظيف nulls، إصلاح keys</li>
        <li><strong>Business layer:</strong> جداول جاهزة لإعادة الاستخدام من عدة نماذج</li>
      </ul>
      <p>بهذا الشكل لا تكرر نفس خطوات التنظيف في كل PBIX.</p>
    </div>

    <div class="lesson-card">
      <h3>أخطاء شائعة مع Dataflows</h3>
      <ul>
        <li>نقل كل شيء إلى Dataflow حتى عندما لا توجد إعادة استخدام حقيقية</li>
        <li>عدم وجود ownership واضح: من يغيّر؟ ومن يختبر؟</li>
        <li>بناء layer وسطية بدون naming conventions أو data contracts</li>
      </ul>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>المهم:</strong> Dataflows ليست سحرًا ولا “أفضل دائمًا” من Power Query Desktop. هي مفيدة عندما تشتري لك <strong>مركزية</strong> و<strong>إعادة استخدام</strong> و<strong>تشغيلًا سحابيًا</strong>. بدون ذلك قد تضيف تعقيدًا إضافيًا فقط.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>When should Dataflows replace Desktop Power Query?</h3>
      <p>Use a Dataflow when the same preparation logic must be reused across multiple semantic models, multiple reports, or multiple teams, and when execution belongs in the cloud instead of one analyst's machine.</p>
    </div>

    <table class="compare-table">
      <tr>
        <th>Option</th>
        <th>Best fit</th>
      </tr>
      <tr>
        <td>Desktop Power Query</td>
        <td>One report, one model, relatively isolated preparation.</td>
      </tr>
      <tr>
        <td>Dataflow</td>
        <td>Reusable cleansing and shaping logic across several downstream models.</td>
      </tr>
      <tr>
        <td>Dataflow Gen2 / Fabric</td>
        <td>When orchestration and tighter cloud-platform integration matter more.</td>
      </tr>
    </table>

    <div class="lesson-card">
      <h3>A practical layered pattern</h3>
      <ul>
        <li><strong>Raw layer:</strong> land the source with minimal change.</li>
        <li><strong>Clean layer:</strong> fix data types, nulls, keys, and naming.</li>
        <li><strong>Business layer:</strong> publish reusable business-ready tables.</li>
      </ul>
      <p>This prevents every PBIX file from rewriting the same preparation steps from scratch.</p>
    </div>

    <div class="lesson-card">
      <h3>Common mistakes with Dataflows</h3>
      <ul>
        <li>Moving everything into Dataflows even when no reuse exists.</li>
        <li>No clear ownership for who changes and tests the logic.</li>
        <li>Creating a shared middle layer without naming conventions or data contracts.</li>
      </ul>
    </div>

    <div class="warn-box">
      <div class="icon">!</div>
      <p><strong>Important:</strong> Dataflows are not automatically better than Desktop Power Query. They are valuable when they buy you centralization, reuse, and cloud execution. Without those benefits, they may add complexity without real return.</p>
    </div>` }],
  },

  "calculation-groups": {
    eyebrow: "07 · 12 — Calculation Groups و Reusable Time Intelligence",
    title: "Calculation Groups و Reusable Time Intelligence",
    lede: "إذا كنت تكرر YTD و QTD و YoY لكل Measure، فهذه هي اللحظة التي تنتقل فيها من التكرار إلى إعادة الاستخدام.",
    en_eyebrow: "07 · 12 — Calculation Groups & Reusable Time Intelligence",
    en_lede: "If you keep repeating YTD, QTD, and YoY for every measure, this is where you move from duplication to reuse.",
    sectionId: "calculation-groups",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>ما المشكلة التي تحلها Calculation Groups؟</h3>
      <p>بدونها، تنشئ عشرات الـ Measures المتشابهة:</p>
      <ul>
        <li>Total Sales</li>
        <li>Total Sales YTD</li>
        <li>Total Sales YoY</li>
        <li>Total Sales YoY %</li>
        <li>ثم تعيد نفس السلسلة لكل Profit و Quantity و Margin...</li>
      </ul>
      <p>Calculation Group تجعل “منطق التحويل” reusable فوق أي base measure.</p>
    </div>

    <div class="lesson-card">
      <h3>تصميم بسيط وفعّال</h3>
      <div class="code-block">
Time Intelligence
  - Current
  - YTD
  - PY
  - YoY
  - YoY %
      </div>
      <p>الفكرة: المستخدم يختار calculation item، والـ engine يطبّقه على measure الحالية بدل إنشاء measure جديدة لكل حالة.</p>
    </div>

    <div class="lesson-card">
      <h3>كيف تبني Calculation Group (في Tabular Editor)</h3>
      <p>Power BI Desktop لا يوفر واجهة كاملة. يجب استخدام Tabular Editor:</p>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>افتح Tabular Editor</h4>
            <p>External Tools ← Tabular Editor (أو نزّل من GitHub).</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>أنشئ Calculation Group</h4>
            <p>Right-click على Model ← Create → Calculation Group. اسمها "Time Intelligence" مثلاً.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>أضف Calculation Items</h4>
            <p>Right-click على Group ← Add Calculation Item "YTD". ثم اكتب DAX:
            <br><code>CALCULATE(SELECTEDMEASURE(), DATESYTD(Dates[Date]))</code></p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">4</div>
          <div class="step-content">
            <h4>أضف Slicer</h4>
            <p>أضف slicer على الـ Calculation Group column (تلقائياً يختار "Current" أو "YTD").</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>SELECTEDMEASURE() — السحر الحقيقي</h3>
      <p><strong>SELECTEDMEASURE():</strong> دالة تشير إلى الـ Measure الحالية المختارة في الـ context.</p>
      <div class="code-block">
في Calculation Item "YTD":
<span class="fn">SELECTEDMEASURE</span>() يعني "أياً كان الـ measure المختار الآن (Sales, Profit, Quantity)"
<span class="fn">CALCULATE</span>(<span class="fn">SELECTEDMEASURE</span>(), <span class="fn">DATESYTD</span>(...))</p>
      <p>بدونها، ستضطر تكتب:</p>
      <ul>
        <li>YTD of Sales = CALCULATE([Sales], DATESYTD(...))</li>
        <li>YTD of Profit = CALCULATE([Profit], DATESYTD(...))</li>
        <li>YTD of Quantity = CALCULATE([Quantity], DATESYTD(...))</li>
      </ul>
      <p><strong>مع SELECTEDMEASURE():</strong> formula واحدة تشتغل على كل الـ measures!</p>
    </div>

    <div class="lesson-card">
      <h3>Precedence (الأولوية) عند تعارض Items</h3>
      <p>إذا كان عندك calculation groups متعددة (Time و Currency مثلاً)، ماذا يحدث؟</p>
      <ul>
        <li><strong>Format String Precedence:</strong> كل item لها priority. Power BI تطبق من الأعلى أولوية للأقل.</li>
        <li><strong>التحكم:</strong> في Tabular Editor، اضبط Ordinal لكل item (1, 2, 3...).</li>
        <li><strong>مثال واقعي:</strong> Time Group تطبق أولاً (YTD)، ثم Currency Group تطبق (Format as USD).</li>
      </ul>
      <p><strong>احذر:</strong> إذا كانت كل group تعدّل same column، قد تحصل على نتائج غير متوقعة.</p>
    </div>

    <div class="lesson-card">
      <h3>متى تستحق الجهد؟</h3>
      <ul>
        <li>عند وجود عشرات الـ measures الأساسية</li>
        <li>عندما تريد توحيد تعريفات Time Intelligence بين الصفحات والفرق</li>
        <li>عندما يصبح صعبًا صيانة 50 measure متكررة يدويًا</li>
      </ul>
      <p>غالبًا ستبنيها عبر Tabular Editor وليس من Desktop فقط.</p>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>أفضل استخدام:</strong> اجعل Calculation Groups طبقة موحدة فوق base measures النظيفة. إذا كانت measures الأصلية نفسها فوضوية، فـ Calculation Groups لن تنقذك.</p>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>تحذير:</strong> Calculation Groups لا تعمل مع External Tools في Power BI Service (لكن تعمل في Desktop). اختبر دائماً قبل النشر.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>What problem do calculation groups solve?</h3>
      <p>Without them, the same logic gets copied again and again:</p>
      <ul>
        <li>Total Sales</li>
        <li>Total Sales YTD</li>
        <li>Total Sales PY</li>
        <li>Total Sales YoY</li>
        <li>Total Sales YoY %</li>
      </ul>
      <p>Then you repeat the same pattern for Profit, Quantity, Margin, and every other important measure. A calculation group turns that repeated transformation logic into one reusable layer that can sit on top of many clean base measures.</p>
    </div>

    <div class="lesson-card">
      <h3>A simple reusable pattern</h3>
      <div class="code-block">
Time Intelligence
  - Current
  - YTD
  - PY
  - YoY
  - YoY %
      </div>
      <p>The user selects a calculation item, and the engine applies that item to the current measure context. You are no longer creating a brand-new measure for every time variation.</p>
    </div>

    <div class="lesson-card">
      <h3>How to Build a Calculation Group (in Tabular Editor)</h3>
      <p>Power BI Desktop does not provide full interface. Use Tabular Editor:</p>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>Open Tabular Editor</h4>
            <p>External Tools → Tabular Editor (or download from GitHub).</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>Create Calculation Group</h4>
            <p>Right-click on Model → Create → Calculation Group. Name it "Time Intelligence" for example.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>Add Calculation Items</h4>
            <p>Right-click on Group → Add Calculation Item "YTD". Then write DAX:
            <br><code>CALCULATE(SELECTEDMEASURE(), DATESYTD(Dates[Date]))</code></p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">4</div>
          <div class="step-content">
            <h4>Add Slicer</h4>
            <p>Add slicer on the Calculation Group column (automatically picks "Current" or "YTD").</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>SELECTEDMEASURE() — The Real Magic</h3>
      <p><strong>SELECTEDMEASURE():</strong> A function that refers to the current selected measure in context.</p>
      <div class="code-block">
In Calculation Item "YTD":
<span class="fn">SELECTEDMEASURE</span>() means "whatever measure is currently chosen (Sales, Profit, Quantity)"
<span class="fn">CALCULATE</span>(<span class="fn">SELECTEDMEASURE</span>(), <span class="fn">DATESYTD</span>(...))</p>
      <p>Without it, you'd have to write:</p>
      <ul>
        <li>YTD of Sales = CALCULATE([Sales], DATESYTD(...))</li>
        <li>YTD of Profit = CALCULATE([Profit], DATESYTD(...))</li>
        <li>YTD of Quantity = CALCULATE([Quantity], DATESYTD(...))</li>
      </ul>
      <p><strong>With SELECTEDMEASURE():</strong> one formula works across all measures!</p>
    </div>

    <div class="lesson-card">
      <h3>Precedence (Priority) When Items Conflict</h3>
      <p>If you have multiple calculation groups (Time and Currency for example), what happens?</p>
      <ul>
        <li><strong>Format String Precedence:</strong> each item has priority. Power BI applies from highest to lowest.</li>
        <li><strong>Control:</strong> in Tabular Editor, set Ordinal for each item (1, 2, 3...).</li>
        <li><strong>Real example:</strong> Time Group applies first (YTD), then Currency Group applies (Format as USD).</li>
      </ul>
      <p><strong>Caution:</strong> If each group modifies the same column, you may get unexpected results.</p>
    </div>

    <div class="lesson-card">
      <h3>When is the extra setup worth it?</h3>
      <ul>
        <li>When the model already has many core measures.</li>
        <li>When different report pages or teams need the same time-intelligence definitions.</li>
        <li>When maintaining dozens of near-duplicate measures has become risky and slow.</li>
      </ul>
      <p>In practice, most teams build them with Tabular Editor rather than relying on Desktop alone.</p>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>Best use case:</strong> Keep your base measures clean first, then place calculation groups on top. If the original measures are messy, calculation groups will only automate the mess.</p>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>Warning:</strong> Calculation Groups don't work with External Tools in Power BI Service (but work in Desktop). Always test before publishing.</p>
    </div>` }],
  },

  "enterprise-security": {
    eyebrow: "07 · 13 — Enterprise Security — RLS و OLS و Permissions",
    title: "Enterprise Security — RLS و OLS و Permissions",
    lede: "أغلب مشاكل الأمان في Power BI ليست من نقص الأدوات، بل من خلط المفاهيم: من يرى الصف؟ من يرى العمود؟ من يستطيع Build؟ ومن يصل إلى الـ workspace أصلًا؟",
    en_eyebrow: "07 · 13 — Enterprise Security — RLS, OLS & Permissions",
    en_lede: "Most Power BI security issues come from mixing concepts: row access, column access, build rights, and workspace exposure.",
    sectionId: "enterprise-security",
    blocks: [{ kind: "html", html: `<table class="compare-table">
      <tr>
        <th>المفهوم</th>
        <th>ما الذي يقيّده؟</th>
        <th>مثال</th>
      </tr>
      <tr>
        <td>RLS</td>
        <td>الصفوف</td>
        <td>مدير المنطقة يرى منطقته فقط</td>
      </tr>
      <tr>
        <td>OLS</td>
        <td>الأعمدة/الجداول الحساسة</td>
        <td>إخفاء cost أو salary عن بعض الأدوار</td>
      </tr>
      <tr>
        <td>Build Permission</td>
        <td>إعادة استخدام الـ semantic model</td>
        <td>السماح بإنشاء تقارير جديدة فوق dataset</td>
      </tr>
      <tr>
        <td>App / Workspace Access</td>
        <td>نقطة الدخول للمحتوى</td>
        <td>المستخدم النهائي يدخل App فقط، لا الـ workspace</td>
      </tr>
    </table>

    <div class="lesson-card">
      <h3>سيناريو عملي</h3>
      <p>لديك تقرير مبيعات إقليمي:</p>
      <ul>
        <li>مدير القاهرة يرى القاهرة فقط ← RLS</li>
        <li>جميع المديرين لا يجب أن يروا Cost أو Margin internals ← OLS أو model redesign</li>
        <li>محلل مركزي يستطيع بناء Report جديد فوق نفس dataset ← Build Permission</li>
        <li>المستخدم النهائي يدخل App جاهزة فقط ← App access</li>
      </ul>
    </div>

    <div class=”lesson-card”>
      <h3>كيفية إعداد OLS (Object Level Security) في Tabular Editor</h3>
      <p>OLS تسمح بإخفاء أعمدة أو جداول كاملة عن أدوار معينة:</p>
      <div class=”steps”>
        <div class=”step”>
          <div class=”step-num”>1</div>
          <div class=”step-content”>
            <h4>افتح Tabular Editor</h4>
            <p>في Power BI Desktop → External Tools → Tabular Editor.</p>
          </div>
        </div>
        <div class=”step”>
          <div class=”step-num”>2</div>
          <div class=”step-content”>
            <h4>اختر العمود المحساس (مثل Cost)</h4>
            <p>في Model tree، جد الجدول والعمود → Right-click → Edit Metadata.</p>
          </div>
        </div>
        <div class=”step”>
          <div class=”step-num”>3</div>
          <div class=”step-content”>
            <h4>اضبط OLS</h4>
            <p>اضبط Roles الذي يستطيع رؤية العمود. Role لا تُختار = العمود مخفي.</p>
          </div>
        </div>
        <div class=”step”>
          <div class=”step-num”>4</div>
          <div class=”step-content”>
            <h4>احفظ</h4>
            <p>Save and refresh في Power BI Desktop.</p>
          </div>
        </div>
      </div>
    </div>

    <div class=”lesson-card”>
      <h3>Dynamic RLS مع USERPRINCIPALNAME()</h3>
      <p><strong>Static RLS:</strong> حدد الأدوار يدويّاً (Admin role يرى الكل). <strong>Dynamic RLS:</strong> استخدم بيانات المستخدم الفعليّة:</p>
      <div class=”code-block”>
-- في Power BI Desktop، اذهب لـ Modeling → Manage Roles
-- اصنع Role اسمه “Regional Manager”
-- في Filter DAX على جدول Dim_Region:

[Region] = USERPRINCIPALNAME()

أو:

[Manager ID] = [User Principal Name] من Security table مربوط
      </div>
      <p><strong>الفكرة:</strong> كل مستخدم (ahmed@company.com) يُعطى وسم في Security table (Region = Cairo). DAX checks: هل هذا الصف مسموح ليوزر البته؟</p>
    </div>

    <div class=”lesson-card”>
      <h3>اختبار RLS في Power BI Desktop</h3>
      <p>قبل النشر، اختبر RLS محليّاً:</p>
      <ul>
        <li><strong>Modeling → Manage Roles → View as (اختر الدور)</strong> — تشوف البيانات تتفلتر تلقائياً.</li>
        <li><strong>Validate the filter:</strong> إذا كنت تختبر Region=”Cairo”، شُف هل الأرقام نزلت لـ Cairo data فقط.</li>
        <li><strong>Test multiple roles:</strong> اختبر Admin (كل البيانات)، Regional (Cairo فقط)، Viewer (limited).</li>
      </ul>
      <p><strong>حذر:</strong> في Service، RLS تطبق تلقائياً على المستخدم المُسجّل الدخول. في Desktop، انت تختبر يدويّاً. فرق كبير!</p>
    </div>

    <div class=”warn-box”>
      <div class=”icon”>⚠️</div>
      <p><strong>أكثر خطأ شائع:</strong> إعطاء Workspace access واسع ثم القول “لدينا RLS”. الـ RLS لا تعالج وحدها سوء توزيع الصلاحيات أو Build rights أو الوصول المباشر للبيئة الخطأ.</p>
    </div>

    <div class=”lesson-card”>
      <h3>How to Set Up OLS (Object Level Security) in Tabular Editor</h3>
      <p>OLS allows hiding entire columns or tables from certain roles:</p>
      <div class=”steps”>
        <div class=”step”>
          <div class=”step-num”>1</div>
          <div class=”step-content”>
            <h4>Open Tabular Editor</h4>
            <p>In Power BI Desktop → External Tools → Tabular Editor.</p>
          </div>
        </div>
        <div class=”step”>
          <div class=”step-num”>2</div>
          <div class=”step-content”>
            <h4>Choose the sensitive column (like Cost)</h4>
            <p>In Model tree, find the table and column → Right-click → Edit Metadata.</p>
          </div>
        </div>
        <div class=”step”>
          <div class=”step-num”>3</div>
          <div class=”step-content”>
            <h4>Set up OLS</h4>
            <p>Set which Roles can see the column. Roles not selected = column is hidden.</p>
          </div>
        </div>
        <div class=”step”>
          <div class=”step-num”>4</div>
          <div class=”step-content”>
            <h4>Save</h4>
            <p>Save and refresh in Power BI Desktop.</p>
          </div>
        </div>
      </div>
    </div>

    <div class=”lesson-card”>
      <h3>Dynamic RLS with USERPRINCIPALNAME()</h3>
      <p><strong>Static RLS:</strong> Manually define roles (Admin sees all). <strong>Dynamic RLS:</strong> Use actual user data:</p>
      <div class=”code-block”>
-- In Power BI Desktop, go to Modeling → Manage Roles
-- Create a Role named “Regional Manager”
-- In Filter DAX on Dim_Region table:

[Region] = USERPRINCIPALNAME()

OR:

[Manager ID] matches [User Principal Name] from a linked Security table
      </div>
      <p><strong>The idea:</strong> Each user (ahmed@company.com) is tagged in a Security table (Region = Cairo). DAX checks: is this row allowed for this user?</p>
    </div>

    <div class=”lesson-card”>
      <h3>Testing RLS in Power BI Desktop</h3>
      <p>Before publishing, test RLS locally:</p>
      <ul>
        <li><strong>Modeling → Manage Roles → View as (select role)</strong> — data auto-filters.</li>
        <li><strong>Validate the filter:</strong> If testing Region=”Cairo”, verify numbers dropped to Cairo data only.</li>
        <li><strong>Test multiple roles:</strong> Test Admin (all data), Regional (Cairo only), Viewer (limited).</li>
      </ul>
      <p><strong>Important:</strong> In Service, RLS applies automatically to the logged-in user. In Desktop, you test manually. Big difference!</p>
    </div>

    <div class=”warn-box”>
      <div class=”icon”>⚠️</div>
      <p><strong>Common mistake:</strong> Giving broad workspace access and claiming “we have RLS.” RLS alone does not fix weak workspace permissions or unnecessary Build rights.</p>
    </div>

    <div class=”tip-box”>
      <div class=”icon”>💡</div>
      <p><strong>Security design rule:</strong> Start with “what is the minimum permission needed for this role?” not “how do I make everything work fast?” Good security starts with least privilege.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<table class="compare-table">
      <tr>
        <th>Layer</th>
        <th>What it restricts</th>
        <th>Typical example</th>
      </tr>
      <tr>
        <td>RLS</td>
        <td>Rows</td>
        <td>A regional manager sees only their region.</td>
      </tr>
      <tr>
        <td>OLS</td>
        <td>Sensitive columns or tables</td>
        <td>Cost or salary fields are hidden from most roles.</td>
      </tr>
      <tr>
        <td>Build permission</td>
        <td>Reuse of the semantic model</td>
        <td>An analyst can create a new report on top of the model.</td>
      </tr>
      <tr>
        <td>App or Workspace access</td>
        <td>Entry point to the content</td>
        <td>Business users enter through the app, not the workspace.</td>
      </tr>
    </table>

    <div class="lesson-card">
      <h3>Practical scenario</h3>
      <p>Imagine a regional sales report:</p>
      <ul>
        <li>Cairo managers should only see Cairo rows: that is RLS.</li>
        <li>Most managers should not see cost or internal margin details: that is OLS or a safer model design.</li>
        <li>A central BI analyst should be allowed to build a new report on the same model: that is Build permission.</li>
        <li>End users should consume a finished app instead of browsing the workspace: that is an access decision, not just an RLS decision.</li>
      </ul>
    </div>

    <div class="warn-box">
      <div class="icon">!</div>
      <p><strong>Common mistake:</strong> giving broad workspace access and then saying "we have RLS." RLS does not fix weak workspace permissions, unnecessary Build rights, or the wrong content entry path.</p>
    </div>

    <div class="tip-box">
      <div class="icon">?</div>
      <p><strong>Security design rule:</strong> start from the question "what is the minimum access this role needs?" Strong Power BI security follows least privilege, not maximum convenience.</p>
    </div>` }],
  },

  "deployment-pipelines": {
    eyebrow: "07 · 14 — Deployment Pipelines و ALM Toolkit",
    title: "Deployment Pipelines و ALM Toolkit",
    lede: "الاحتراف الحقيقي ليس أن تعدّل التقرير بسرعة، بل أن تنقل التعديل بين البيئات بدون مفاجآت.",
    en_eyebrow: "07 · 14 — Deployment Pipelines & ALM Toolkit",
    en_lede: "Professional delivery is not just making a change fast; it is moving that change safely across environments.",
    sectionId: "deployment-pipelines",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>البيئات الثلاث الأساسية</h3>
      <ul>
        <li><strong>Dev:</strong> للتجربة والتطوير</li>
        <li><strong>Test / UAT:</strong> للتحقق مع أصحاب المصلحة</li>
        <li><strong>Prod:</strong> للمستخدمين النهائيين فقط</li>
      </ul>
      <p>إذا كنت تطوّر مباشرة في Prod، فأنت لا تدير منتجًا؛ أنت تختبر على المستخدمين.</p>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <h4>غيّر في Dev فقط</h4>
          <p>كل تعديل على model أو report أو permissions يبدأ في بيئة تطوير معزولة.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <h4>اختبر في Test</h4>
          <p>تحقّق من النتائج، الأداء، RLS، والـ refresh behavior مع بيانات قريبة من الواقع.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <h4>انشر إلى Prod بإجراء مضبوط</h4>
          <p>استخدم Deployment Pipelines أو ALM Toolkit للمقارنة قبل النقل، ولا تنسَ القواعد الخاصة بمصادر البيانات وparameters.</p>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>متى أستخدم ALM Toolkit؟</h3>
      <p>عندما تحتاج مقارنة دقيقة بين semantic models: measures، relationships، display folders، perspectives، calculation groups.</p>
      <p>هو ممتاز عندما تريد أن ترى <strong>ما الذي سيتغير بالضبط</strong> قبل الضغط على deploy.</p>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>Release checklist:</strong> validation of measures, refresh credentials, RLS roles, app audiences, and rollback plan. وجود rollback plan وحده يميز الفريق الناضج عن الفريق المرتجل.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>The three environments</h3>
      <ul>
        <li><strong>Dev:</strong> where change is created and iterated.</li>
        <li><strong>Test or UAT:</strong> where logic, performance, and stakeholder acceptance are validated.</li>
        <li><strong>Prod:</strong> where end users consume the approved result.</li>
      </ul>
      <p>If you develop directly in Prod, you are not managing a product. You are testing on users.</p>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <h4>Change only in Dev</h4>
          <p>Model edits, report redesign, permission updates, and measure changes should start in an isolated development environment.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <h4>Validate in Test</h4>
          <p>Check result accuracy, performance, refresh behavior, and security roles against realistic data and real stakeholder questions.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <h4>Promote to Prod deliberately</h4>
          <p>Use Deployment Pipelines or ALM Toolkit to compare and move changes in a controlled way. Environment-specific settings such as credentials and parameters must be reviewed, not assumed.</p>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>When ALM Toolkit becomes essential</h3>
      <p>Use it when you need a precise semantic-model diff before release: measures, relationships, display folders, perspectives, translations, or calculation groups.</p>
      <p>It is especially valuable when the real question is not "can we deploy?" but "what exactly will change if we do?"</p>
    </div>

    <div class="tip-box">
      <div class="icon">?</div>
      <p><strong>Release checklist:</strong> validate measures, refresh credentials, security roles, app audiences, and a rollback plan. Mature teams are distinguished by how they prepare for mistakes, not by pretending mistakes never happen.</p>
    </div>` }],
  },

  "monitoring-adoption": {
    eyebrow: "07 · 15 — Monitoring و Adoption و Refresh Operations",
    title: "Monitoring و Adoption و Refresh Operations",
    lede: "بعد النشر يبدأ شغل جديد بالكامل: من يستخدم التقرير؟ هل الـ refresh ثابت؟ أين يفشل المستخدمون؟ وما الصفحة التي لا يفتحها أحد؟",
    en_eyebrow: "07 · 15 — Monitoring, Adoption & Refresh Operations",
    en_lede: "After release, a new job begins: who uses the report, whether refresh is stable, and where adoption or operations are failing.",
    sectionId: "monitoring-adoption",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>4 مؤشرات تشغيل يجب مراقبتها</h3>
      <ul>
        <li><strong>Refresh Success Rate</strong></li>
        <li><strong>Average Refresh Duration</strong></li>
        <li><strong>Active Users / Views</strong></li>
        <li><strong>Pages أو visuals التي لا يستخدمها أحد</strong></li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>أسئلة Adoption الصحيحة</h3>
      <ul>
        <li>هل المستخدمون يعودون للتقرير أسبوعيًا أم فقط يوم الإطلاق؟</li>
        <li>هل التقرير يساعد قرارًا حقيقيًا أم مجرد dashboard جميلة؟</li>
        <li>ما أكثر سؤال يطرحه المستخدمون رغم وجود التقرير؟</li>
      </ul>
      <p>إذا استمر السؤال خارج التقرير، فغالبًا التصميم أو الـ semantics لا يجيبون السؤال المهم.</p>
    </div>

    <div class="lesson-card">
      <h3>Operational Ownership</h3>
      <p>كل نموذج يحتاج مالكًا واضحًا:</p>
      <ul>
        <li>من يراقب فشل الـ refresh؟</li>
        <li>من يعتمد تغييرات الـ business logic؟</li>
        <li>من يتعامل مع تغيّر schema من المصدر؟</li>
      </ul>
      <p>غياب هذا التحديد يحوّل أي dashboard ناجحة إلى “مشكلة مشتركة لا يملكها أحد”.</p>
    </div>

    <div class="lesson-card">
      <h3>الوصول إلى Activity Log والـ Admin Monitoring</h3>
      <p><strong>خطوة 1: Power BI Service Admin Portal</strong></p>
      <ul>
        <li>في Power BI Service، انقر على Admin Portal (أيقونة الترس).</li>
        <li>اختر Tenant Settings ← Audit and monitoring ← Audit Log.</li>
        <li>ستشوف سجل كل الـ activities: من فتح التقرير، من حدّث النموذج، متى فشل الـ refresh.</li>
      </ul>
      <p><strong>خطوة 2: Admin Monitoring Workspace (مميزة متقدمة)</strong></p>
      <ul>
        <li>Admin Settings ← Workspace Settings ← Create Monitoring Workspace.</li>
        <li>Power BI تنشئ workspace خاص يحتوي على dashboards مراقبة تلقائية (Usage، Refresh Reliability).</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>بناء "Report Usage" Dashboard خاص</h3>
      <p>بدل الاعتماد على المراقبة الافتراضية، اصنع dashboard مخصص:</p>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>استخدم Microsoft Fabric Admin API</h4>
            <p>Power BI توفر API للـ Activity Log. تقدر تسحب البيانات عبر Power Automate أو Python.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>قيّس الـ Metrics الصحيحة</h4>
            <p>Views per User، Pages per Report، Refresh Frequency، Avg Render Time.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>اصنع Alerts</h4>
            <p>لو التقرير حصل على 0 views في أسبوع، أو refresh فشل مرتين متتاليتين، شغّل تنبيه.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Refresh Operations والفشل</h3>
      <p><strong>مراقبة الـ Refresh:</strong></p>
      <ul>
        <li><strong>Success Rate:</strong> لو أقل من 95% في الشهر الأخير، هناك مشكلة نظامية (Data Gateway issues، source database down).</li>
        <li><strong>Duration Trend:</strong> لو الـ refresh بدأت تأخذ ساعتين بدل 20 دقيقة، هناك bloat في البيانات أو query performance issue.</li>
        <li><strong>Failure Alerts:</strong> في Data Gateway Settings، اضبط Email Notifications عند فشل refresh.</li>
      </ul>
      <p><strong>استكشاف الأخطاء:</strong> Dataset Settings ← Refresh History يشوفك الأخطاء الدقيقة (auth failed، timeout، SQL Server down).</p>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>خطأ شائع:</strong> قياس النجاح بعدد المشاهدات فقط. قد يحصل التقرير على 1000 view لأنه التقرير الوحيد المتاح، لا لأنه الأفضل. النجاح الحقيقي هو: استخدام متكرر + ثقة + قرار أفضل.</p>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>نصيحة مهمة:</strong> دراسة Adoption ليست لحظية. خذ 4-6 أسابيع على الأقل قبل الحكم. التقارير الجيدة تحتاج وقتاً لينسج الفريق أسلوب استخدام جديد في روتينهم.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>Four operational signals to monitor</h3>
      <ul>
        <li><strong>Refresh success rate</strong></li>
        <li><strong>Average refresh duration</strong></li>
        <li><strong>Active users and repeat views</strong></li>
        <li><strong>Pages or visuals nobody actually uses</strong></li>
      </ul>
      <p>These measures tell you whether the report is stable, whether it is adopted, and whether parts of it are wasted complexity.</p>
    </div>

    <div class="lesson-card">
      <h3>The right adoption questions</h3>
      <ul>
        <li>Do users come back weekly, or only during launch week?</li>
        <li>Does the report support a real decision, or is it just a nice-looking dashboard?</li>
        <li>What question do users still ask outside the report even after the report was published?</li>
      </ul>
      <p>If the same question keeps coming up outside the report, the semantic layer or the page design is probably not answering the business need clearly enough.</p>
    </div>

    <div class="lesson-card">
      <h3>Operational ownership</h3>
      <p>Every important model needs a named owner:</p>
      <ul>
        <li>Who watches refresh failures?</li>
        <li>Who approves business-logic changes?</li>
        <li>Who handles source-schema changes?</li>
      </ul>
      <p>Without ownership, even a successful dashboard slowly turns into a shared problem that nobody truly maintains.</p>
    </div>

    <div class="lesson-card">
      <h3>Accessing Activity Log and Admin Monitoring</h3>
      <p><strong>Step 1: Power BI Service Admin Portal</strong></p>
      <ul>
        <li>In Power BI Service, click Admin Portal (gear icon).</li>
        <li>Choose Tenant Settings → Audit and monitoring → Audit Log.</li>
        <li>You'll see activity log: who opened the report, who modified the model, when refresh failed.</li>
      </ul>
      <p><strong>Step 2: Admin Monitoring Workspace (advanced feature)</strong></p>
      <ul>
        <li>Admin Settings → Workspace Settings → Create Monitoring Workspace.</li>
        <li>Power BI creates a dedicated workspace with automated monitoring dashboards (Usage, Refresh Reliability).</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Building a Custom "Report Usage" Dashboard</h3>
      <p>Instead of relying on default monitoring, create a custom dashboard:</p>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>Use Microsoft Fabric Admin API</h4>
            <p>Power BI provides an API for Activity Log. Pull data via Power Automate or Python.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>Measure the right metrics</h4>
            <p>Views per User, Pages per Report, Refresh Frequency, Avg Render Time.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>Set up Alerts</h4>
            <p>If the report gets 0 views in a week, or refresh fails twice in a row, trigger an alert.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Refresh Operations and Failures</h3>
      <p><strong>Monitor Refresh Health:</strong></p>
      <ul>
        <li><strong>Success Rate:</strong> If below 95% over a month, there's a systemic issue (Data Gateway problems, source database down).</li>
        <li><strong>Duration Trend:</strong> If refresh went from 20 minutes to 2 hours, there's data bloat or query performance degradation.</li>
        <li><strong>Failure Alerts:</strong> In Data Gateway Settings, enable Email Notifications on refresh failure.</li>
      </ul>
      <p><strong>Troubleshoot:</strong> Dataset Settings → Refresh History shows exact failures (auth failed, timeout, SQL Server down).</p>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>Common mistake:</strong> Measuring success by total views alone. A report can get many views because it's the only available report, not because it's trusted. Real success = repeat usage + confidence + better decisions.</p>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>Important tip:</strong> Adoption studies are not instantaneous. Wait 4-6 weeks minimum before judging. Good reports need time for teams to embed them into their routine workflow.</p>
    </div>` }],
  },

  "fabric-dataflows": {
    eyebrow: "07 · 16 — Fabric و Dataflows Gen2",
    title: "Fabric و Dataflows Gen2",
    lede: "إذا كان Power BI جزءًا من منصة بيانات أكبر، فهنا يبدأ الحديث عن OneLake و Dataflows Gen2 والطبقات السحابية الأحدث.",
    en_eyebrow: "07 · 16 — Fabric & Dataflows Gen2",
    en_lede: "If Power BI is part of a broader data platform, this is where OneLake and Dataflows Gen2 enter the picture.",
    sectionId: "fabric-dataflows",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>لماذا يهمك Fabric أصلًا؟</h3>
      <p>لأن بعض الفرق لم تعد تبني التقارير فقط، بل تبني منصة كاملة: ingestion + transformation + storage + semantic models + reports.</p>
      <p>Fabric يقرّب هذه الطبقات في بيئة واحدة بدل التنقل بين أدوات كثيرة منفصلة.</p>
    </div>

    <table class="compare-table">
      <tr>
        <th>الخيار</th>
        <th>متى تختاره؟</th>
      </tr>
      <tr>
        <td>Power Query داخل Desktop</td>
        <td>تحضير بسيط محلي لتقرير أو نموذج واحد</td>
      </tr>
      <tr>
        <td>Dataflow Gen1</td>
        <td>إعادة استخدام خطوات تحضير البيانات على مستوى الخدمة</td>
      </tr>
      <tr>
        <td>Dataflow Gen2 / Fabric</td>
        <td>عندما تحتاج flow أقرب لمنصة بيانات، وربطًا أوضح مع OneLake والطبقات السحابية</td>
      </tr>
    </table>

    <div class="lesson-card">
      <h3>قرار ناضج، لا قرار موضة</h3>
      <ul>
        <li>إذا كنت فريقًا صغيرًا بمصدرين بيانات فقط، ربما Fabric مبكر عليك</li>
        <li>إذا كانت لديك فرق متعددة ونماذج كثيرة واعتماد كبير على السحابة، يصبح Fabric أكثر منطقية</li>
        <li>اسأل دائمًا: هل هذا يحل مشكلة تنسيق وتشغيل حقيقية، أم فقط يضيف طبقة جديدة؟</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>أفضل موقف تعليمي:</strong> تعلّم الأساس أولًا: model، DAX، governance. ثم ادخل Fabric كامتداد طبيعي لمنصة البيانات، لا كبديل مبكر عن فهم Power BI نفسه.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>Why Fabric matters at all</h3>
      <p>Some teams no longer build just reports. They build a data platform that includes ingestion, transformation, storage, semantic models, and reporting.</p>
      <p>Fabric matters when those layers need to work together more closely in the cloud instead of living across disconnected tools.</p>
    </div>

    <table class="compare-table">
      <tr>
        <th>Option</th>
        <th>Best fit</th>
      </tr>
      <tr>
        <td>Desktop Power Query</td>
        <td>Simple local preparation for one report or one model.</td>
      </tr>
      <tr>
        <td>Dataflow Gen1</td>
        <td>Reusable preparation logic at the service level.</td>
      </tr>
      <tr>
        <td>Dataflow Gen2 / Fabric</td>
        <td>Broader orchestration, OneLake alignment, and a stronger cloud data-platform workflow.</td>
      </tr>
    </table>

    <div class="lesson-card">
      <h3>A mature decision, not a fashion choice</h3>
      <ul>
        <li>If your team is small and your source landscape is simple, Fabric may be too early.</li>
        <li>If multiple teams reuse the same data and need stronger cloud coordination, it becomes more compelling.</li>
        <li>The real question is always: what operating problem does this solve?</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">?</div>
      <p><strong>Best learning path:</strong> master modeling, DAX, and governance first. Then learn Fabric as an extension of a real data-platform need, not as a shortcut around understanding Power BI fundamentals.</p>
    </div>` }],
  },

  "project-retail-starter": {
    eyebrow: "10 · 01 — مشروع البداية — Pizza Place Sales",
    title: "مشروع البداية — Pizza Place Sales",
    lede: "هذا أفضل مشروع بداية في Power BI: dataset صغيرة نسبيًا، متعددة الجداول، ومليانة فرص حقيقية للتنظيف والدمج وبناء KPIs تشغيلية من غير تعقيد مبكر.",
    en_eyebrow: "10 · 01 — Starter Project — Pizza Place Sales",
    en_lede: "A strong beginner capstone: small enough to finish, rich enough to teach joins, modeling, and operational KPIs.",
    sectionId: "project-retail-starter",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>سيناريو المشروع</h3>
      <p>أنت محلل بيانات لدى مطعم بيتزا يريد إجابات واضحة عن المبيعات، أوقات الذروة، أفضل المنتجات، والأصناف التي تستهلك تكلفة وجهد بلا عائد كافٍ.</p>
      <p>الـ dataset مقسمة بالفعل إلى أكثر من جدول، لذلك هي ممتازة لتعلّم بناء model صحيحة بدل الاكتفاء برسم charts سريعة.</p>
    </div>

    <div class="lesson-card">
      <h3>ملفات البيانات الفعلية</h3>
      <table class="compare-table">
        <tr>
          <th>الملف</th>
          <th>الدور</th>
        </tr>
        <tr>
          <td>orders.csv</td>
          <td>رأس الطلب: رقم الطلب، التاريخ، الوقت</td>
        </tr>
        <tr>
          <td>order_details.csv</td>
          <td>سطر الطلب: pizza_id والكمية لكل order</td>
        </tr>
        <tr>
          <td>pizzas.csv</td>
          <td>السعر والحجم وربط pizza_id مع النوع</td>
        </tr>
        <tr>
          <td>pizza_types.csv</td>
          <td>الاسم والفئة والمكوّنات</td>
        </tr>
        <tr>
          <td>data_dictionary.csv</td>
          <td>مرجع سريع للحقول</td>
        </tr>
      </table>
    </div>

    <div class="lesson-card">
      <h3>ما الذي يجب أن تبنيه؟</h3>
      <ul>
        <li>Fact table على مستوى سطر الطلب بعد دمج orders مع order_details</li>
        <li>Dimension للبيتزا بعد دمج pizzas مع pizza_types</li>
        <li>Date table واضحة + اشتقاق الساعة واليوم واسم الشهر</li>
        <li>صفحتان على الأقل: Sales Overview + Menu & Operations</li>
        <li>KPIs أساسية: Revenue, Orders, Pizzas Sold, Average Order Value, Average Pizzas per Order, Peak Hour</li>
      </ul>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <h4>وحّد الـ grain</h4>
          <p>ابدأ من order_details كسجل أساسي، ثم اربطه مع orders للحصول على التاريخ والوقت، وبعدها مع pizzas وpizza_types للحصول على السعر والاسم والفئة.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <h4>حوّل البيانات إلى أسئلة تشغيلية</h4>
          <p>لا تكتفِ بإجمالي المبيعات. اسأل: متى يزيد الضغط؟ ما أكثر الأحجام مبيعًا؟ ما الأصناف التي تحقق إيرادًا عاليًا؟ وما الأصناف التي مبيعاتها ضعيفة؟</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <h4>ابنِ report مفهومة لمدير المطعم</h4>
          <p>الهدف هنا ليس dashboard جميلة فقط، بل تقرير يساعد مدير التشغيل على اتخاذ قرار حول الجدول الزمني والـ menu mix والعروض.</p>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Definition of Done</h3>
      <ul>
        <li>العلاقات واضحة، ولا يوجد duplicated revenue بسبب دمج خاطئ</li>
        <li>يمكنك شرح لماذا اخترت line-level fact بدل الاكتفاء بجدول orders فقط</li>
        <li>يوجد visual واحد على الأقل يوضح أوقات الذروة، وvisual آخر يوضح أفضل/أضعف الأصناف</li>
        <li>كل KPI لها تعريف business واضح، لا مجرد رقم معروض على الشاشة</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Dataset Source Pack</h3>
      <ul>
        <li><strong>رابط التحميل المباشر:</strong> <a href="https://maven-datasets.s3.amazonaws.com/Pizza%20Place%20Sales/Pizza%20Place%20Sales.zip" target="_blank" rel="noopener noreferrer">Pizza Place Sales.zip</a></li>
        <li><strong>صفحة المصدر المستقرة:</strong> <a href="https://mavenanalytics.io/data-playground/pizza-place-sales" target="_blank" rel="noopener noreferrer">Maven Analytics — Pizza Place Sales</a></li>
        <li><strong>نوع البيانات:</strong> CSV متعددة الجداول، مناسبة جدًا لتعلّم joins وstar schema على حجم عملي لكن غير مرهق.</li>
        <li><strong>المصدر كما تصفه Maven:</strong> سنة كاملة من مبيعات مطعم بيتزا خيالي، مع تفاصيل عن التاريخ والوقت والنوع والحجم والسعر والمكوّنات.</li>
        <li><strong>آخر تحقق من الرابط:</strong> 2026-04-22. تم تصحيح الرابط إلى صيغة المسافات الصحيحة لأن نسخة <code>+</code> لا تعمل دائمًا.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Advanced DAX Formulas المطلوبة</h3>
      <p><strong>في Power BI Desktop، أضف هذه الـ Measures:</strong></p>
      <div class="code-block">
<span class="cm">-- 1. الإيرادات الأساسية</span>
<span class="kw">Total Revenue</span> = <span class="fn">SUMX</span>(OrderDetails, OrderDetails[Quantity] * RELATED(Pizzas[Price]))

<span class="cm">-- 2. عدد الطلبات (لا الخطوط)</span>
<span class="kw">Total Orders</span> = <span class="fn">DISTINCTCOUNT</span>(OrderDetails[OrderID])

<span class="cm">-- 3. متوسط قيمة الطلب</span>
<span class="kw">Average Order Value</span> = <span class="fn">DIVIDE</span>([Total Revenue], [Total Orders])

<span class="cm">-- 4. متوسط عدد البيتزا لكل طلب</span>
<span class="kw">Avg Pizzas per Order</span> = <span class="fn">DIVIDE</span>(<span class="fn">SUM</span>(OrderDetails[Quantity]), [Total Orders])

<span class="cm">-- 5. الساعة الأكثر ازدحاماً</span>
<span class="kw">Peak Hour</span> = <span class="fn">MAXX</span>(
    <span class="fn">VALUES</span>(Orders[Hour]),
    <span class="fn">CALCULATE</span>([Total Revenue])
)

<span class="cm">-- 6. أفضل نوع بيتزا (بالإيرادات)</span>
<span class="kw">Top Pizza Category</span> = <span class="fn">MAXX</span>(
    <span class="fn">VALUES</span>(PizzaTypes[Category]),
    <span class="fn">CALCULATE</span>([Total Revenue])
)

<span class="cm">-- 7. مقارنة أسبوعية: هذا الأسبوع مقابل الأسبوع الماضي</span>
<span class="kw">Week over Week Growth %</span> =
<span class="fn">VAR</span> CurrentWeek = [Total Revenue]
<span class="fn">VAR</span> PrevWeek = <span class="fn">CALCULATE</span>([Total Revenue], <span class="fn">DATEADD</span>(Orders[Date], -7, DAY))
<span class="fn">RETURN</span>
    <span class="fn">DIVIDE</span>(CurrentWeek - PrevWeek, PrevWeek) * 100
      </div>
    </div>

    <div class="lesson-card">
      <h3>نموذج Dashboard المتوقع</h3>
      <p><strong>صفحة 1: Sales Overview</strong></p>
      <div class="code-block">
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
│ Pizza Place Sales Dashboard             │
├─────────────────────────────────────────┤
│                                         │
│ Total Revenue: $817,860                 │
│ Total Orders: 21,350                    │
│ Avg Order Value: $38.30                 │
│ Week-over-Week: +12.5%                  │
│                                         │
├─────────────────────────────────────────┤
│ Revenue by Day of Week (Bar Chart)      │
│ [Wed  Thu  Fri  Sat  Sun  Mon  Tue]     │
│ [###  ###  ###  ███  ███  ##   ##]      │
├─────────────────────────────────────────┤
│ Orders by Hour (Line Chart)             │
│ [Peak at 12-1 PM and 6-7 PM]            │
├─────────────────────────────────────────┤
│ Top 5 Pizzas by Revenue                 │
│ 1. The Greek (14% revenue)              │
│ 2. Spicy Sicilian (12%)                 │
│ 3. The Big Meat (11%)                   │
│ 4. The Prosciutto (10%)                 │
│ 5. Thai Chicken (9%)                    │
└─────────────────────────────────────────┘

صفحة 2: Menu Analysis
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
│ Pizza Menu Performance                  │
├─────────────────────────────────────────┤
│ Revenue by Category                     │
│ [Classic  Chicken  Meat  Veggie]        │
│ [40%      25%      20%    15%]          │
│                                         │
│ Size Distribution (Pie Chart)           │
│ [Large 40% | Medium 35% | Small 25%]    │
│                                         │
│ Worst Performers (بدون مبيعات):        │
│ - The Brie Carre (طلب واحد فقط!)       │
│ - The Calabrese (طلبان فقط)             │
└─────────────────────────────────────────┘
      </div>
    </div>

    <div class="lesson-card">
      <h3>Business Insights المتوقعة</h3>
      <p><strong>يجب أن تكتشف من التحليل:</strong></p>
      <ul>
        <li>ðŸ” أوقات الذروة (متى يزيد عدد الطلبات؟) → تدرب موظفين إضافيين</li>
        <li>📊 بيتزا غير مربحة (مثل Brie Carre) → إزل من الـ menu؟</li>
        <li>💰 أفضل فئة (مثل Classic) → ركز التسويق عليها</li>
        <li>🔄 متوسط الطلب = 2 بيتزة → الـ Bundle deals ممكن تزيد من 2 ل 3</li>
        <li>📈 اتجاهات أسبوعية (جمعة-سبت أقوى) → رفع الأسعار في نهاية الأسبوع؟</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>أفضل استخدام لهذا المشروع:</strong> اجعله أول قطعة Portfolio حقيقية لك، لأنه يثبت أنك تستطيع قراءة عدة جداول، دمجها، وبناء model نظيفة، لا مجرد نسخ dashboard جاهزة.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>Project scenario</h3>
      <p>You are the analyst for a pizza business that wants clear answers about sales, peak hours, best-selling products, and menu items that consume effort without enough return.</p>
      <p>The dataset already comes as multiple tables, which makes it perfect for learning model design instead of stopping at quick charts.</p>
    </div>

    <div class="lesson-card">
      <h3>Actual dataset files</h3>
      <table class="compare-table">
        <tr>
          <th>File</th>
          <th>Role</th>
        </tr>
        <tr>
          <td>orders.csv</td>
          <td>Order header with order id, date, and time.</td>
        </tr>
        <tr>
          <td>order_details.csv</td>
          <td>Order lines with pizza id and quantity.</td>
        </tr>
        <tr>
          <td>pizzas.csv</td>
          <td>Price, size, and pizza-to-type mapping.</td>
        </tr>
        <tr>
          <td>pizza_types.csv</td>
          <td>Pizza name, category, and ingredients.</td>
        </tr>
        <tr>
          <td>data_dictionary.csv</td>
          <td>Quick field reference.</td>
        </tr>
      </table>
    </div>

    <div class="lesson-card">
      <h3>What you should build</h3>
      <ul>
        <li>A line-level fact table by combining orders with order_details.</li>
        <li>A clean pizza dimension by combining pizzas with pizza_types.</li>
        <li>A proper date table plus derived hour, weekday, and month attributes.</li>
        <li>At least two report pages: Sales Overview and Menu or Operations.</li>
        <li>Core KPIs such as Revenue, Orders, Pizzas Sold, Average Order Value, Average Pizzas per Order, and Peak Hour.</li>
      </ul>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <h4>Unify the grain</h4>
          <p>Start from order_details as the analytical grain, then attach order date and time from orders, and product attributes from pizzas and pizza_types.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <h4>Translate the data into operating questions</h4>
          <p>Go beyond total sales. Ask when demand spikes, which sizes sell best, which categories drive revenue, and which menu items underperform.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <h4>Design for a restaurant manager</h4>
          <p>The report should help staffing, menu mix, and promotion decisions. It is not just a student exercise in colorful visuals.</p>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Definition of Done</h3>
      <ul>
        <li>Relationships are clean and revenue is not duplicated by bad joins.</li>
        <li>You can explain why line-level grain is better than stopping at order-level totals.</li>
        <li>At least one visual explains peak demand, and another explains best and worst menu items.</li>
        <li>Every KPI has a business meaning, not just a formula.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Dataset Source Pack</h3>
      <ul>
        <li><strong>Direct download:</strong> <a href="https://maven-datasets.s3.amazonaws.com/Pizza%20Place%20Sales/Pizza%20Place%20Sales.zip" target="_blank" rel="noopener noreferrer">Pizza Place Sales.zip</a></li>
        <li><strong>Source page:</strong> <a href="https://mavenanalytics.io/data-playground/pizza-place-sales" target="_blank" rel="noopener noreferrer">Maven Analytics - Pizza Place Sales</a></li>
        <li><strong>Dataset type:</strong> multi-table CSV package that is ideal for early star-schema practice without overwhelming scale.</li>
        <li><strong>Last verified:</strong> 2026-04-22.</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">?</div>
      <p><strong>Portfolio angle:</strong> this is an excellent first showcase project because it proves that you can read multiple tables, join them correctly, and build a business-friendly model instead of copying a finished dashboard.</p>
    </div>` }],
  },

  "project-ops-intermediate": {
    eyebrow: "10 · 02 — مشروع متوسط — Online Chess Games",
    title: "مشروع متوسط — Online Chess Games",
    lede: "هذا مشروع متوسط مختلف وذكي: dataset من جدول واحد، لكن قيمتها التعليمية عالية جدًا لأنها تجبرك على بناء طبقات تحليلية مشتقة بدل الاعتماد على shape جاهز.",
    en_eyebrow: "10 · 02 — Intermediate Project — Online Chess Games",
    en_lede: "A strong intermediate project: one raw table, but plenty of derived dimensions, segmentation, and behavioral analysis.",
    sectionId: "project-ops-intermediate",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>سيناريو المشروع</h3>
      <p>أنت تبني تقريرًا تحليليًا لبيانات أكثر من 20 ألف مباراة شطرنج من Lichess. المطلوب ليس مجرد عرض من فاز، بل فهم تأثير rating difference وtime control والافتتاحيات على نتائج المباريات.</p>
    </div>

    <div class="lesson-card">
      <h3>شكل البيانات</h3>
      <ul>
        <li>ملف واحد فقط: <code>chess_games.csv</code></li>
        <li>كل صف يمثل مباراة واحدة</li>
        <li>حقول مهمة: winner, victory_status, turns, time_increment, white_rating, black_rating, opening_shortname, opening_variation, moves</li>
      </ul>
      <p>هذا يعني أن التحدي ليس في الـ joins، بل في تحويل الجدول الخام إلى model تحليلية مفهومة.</p>
    </div>

    <div class="lesson-card">
      <h3>ما الذي يجب أن تبنيه؟</h3>
      <ul>
        <li>طبقات مشتقة مثل Rating Band وResult Type وHigher Rated Color وTime Control Category</li>
        <li>صفحتان أو ثلاث: Match Overview + Openings Lab + Rating & Time Control</li>
        <li>KPIs مثل: White Win %, Draw %, Average Turns, Upset Rate, Higher-Rated Win %, Most Used Openings</li>
        <li>Drill واضح من الافتتاحية الرئيسية إلى variation</li>
      </ul>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <h4>ابنِ أعمدة تحليلية مشتقة</h4>
          <p>استخرج فئات rating، وحدد من هو الأعلى تقييمًا، وصنّف الوقت من الحقل <code>time_increment</code> إلى rapid / blitz / bullet أو أي تقسيم منطقي تختاره.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <h4>افصل بين الأسئلة</h4>
          <p>سؤال النتائج غير سؤال الافتتاحيات غير سؤال التوازن بين اللون الأبيض والأسود. كل صفحة يجب أن تجيب فئة محددة من الأسئلة.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <h4>لا تتورط في parsing كامل للمجال النصي moves منذ البداية</h4>
          <p>يمكن استخدام moves كامتداد متقدم لاحقًا، لكن المشروع المتوسط ينجح أصلًا عبر opening fields وratings وresult logic.</p>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Definition of Done</h3>
      <ul>
        <li>يوجد فصل واضح بين raw columns والأعمدة التحليلية المشتقة</li>
        <li>يمكن للمستخدم معرفة هل اللاعب الأعلى تقييمًا يفوز دائمًا أم لا</li>
        <li>يوجد تحليل واحد على الأقل للـ openings، وتحليل آخر للـ time controls</li>
        <li>التقرير لا يعرض moves الخام كحائط نصي بلا معنى</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Dataset Source Pack</h3>
      <ul>
        <li><strong>رابط التحميل المباشر:</strong> <a href="https://maven-datasets.s3.amazonaws.com/Online%20Chess%20Games/Online%20Chess%20Games.zip" target="_blank" rel="noopener noreferrer">Online Chess Games.zip</a></li>
        <li><strong>صفحة المصدر المستقرة:</strong> <a href="https://mavenanalytics.io/data-playground/online-chess-games" target="_blank" rel="noopener noreferrer">Maven Analytics — Online Chess Games</a></li>
        <li><strong>خلفية البيانات:</strong> بيانات أكثر من 20 ألف مباراة من Lichess، مع winner وratings وافتتاحيات ومعلومات الوقت والحركات.</li>
        <li><strong>لماذا هذا مشروع متوسط ممتاز؟</strong> لأنه يدرّبك على بناء semantic layer بنفسك: buckets, labels, derived flags, and analytical groupings.</li>
        <li><strong>آخر تحقق من الرابط:</strong> 2026-04-22. تم تصحيح الرابط إلى صيغة المسافات الصحيحة بدل النسخة غير المستقرة.</li>
      </ul>
    </div>

    <div class="warn-box">
      <div class="icon">⚠️</div>
      <p><strong>معيار الفشل هنا:</strong> أن يبقى التقرير مجرد counts وpie charts للفائز، بدون أي منطق تحليلي حول rating gap أو الافتتاحيات أو الوقت. القوة الحقيقية في هذا المشروع تأتي من التحويل الذكي للجدول الخام.</p>
    </div>

    <div class="lesson-card">
      <h3>🔷 الصيغ الضرورية (DAX Measures)</h3>
      <p>هنا أهم 7 DAX measures لهذا المشروع:</p>
      <div class="code-block">
<span class="cm">-- 1. عدد المباريات الكلي</span>
<span class="kw">Total Games</span> = <span class="fn">COUNTA</span>( Games[game_id] )

<span class="cm">-- 2. نسبة فوز الأبيض %</span>
<span class="kw">White Win %</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">CALCULATE</span>(
        <span class="fn">COUNTA</span>( Games[game_id] ),
        Games[winner] = <span class="str">"white"</span>
    ),
    [Total Games]
) * <span class="num">100</span>

<span class="cm">-- 3. نسبة الحسائم (Draws)</span>
<span class="kw">Draw %</span> = <span class="fn">DIVIDE</span>( <span class="fn">CALCULATE</span>( <span class="fn">COUNTA</span>( Games[game_id] ), Games[winner] = <span class="str">"draw"</span> ), [Total Games] ) * <span class="num">100</span>

<span class="cm">-- 4. متوسط عدد الحركات</span>
<span class="kw">Avg Moves</span> = <span class="fn">AVERAGE</span>( Games[turns] )

<span class="cm">-- 5. نسبة فوز الأعلى تقييماً %</span>
<span class="kw">Higher Rated Win %</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">CALCULATE</span>(
        <span class="fn">COUNTA</span>( Games[game_id] ),
        Games[higher_rated_won] = <span class="num">1</span>
    ),
    [Total Games]
) * <span class="num">100</span>

<span class="cm">-- 6. معدل الانزعاج (Upset Rate) = الأضعف يفوز</span>
<span class="kw">Upset Rate %</span> = <span class="num">100</span> - [Higher Rated Win %]

<span class="cm">-- 7. أشهر افتتاحية</span>
<span class="kw">Most Common Opening</span> =
<span class="fn">MAXX</span>(
    <span class="fn">TOPN</span>( <span class="num">1</span>, <span class="fn">VALUES</span>( Games[opening_shortname] ), <span class="fn">COUNTA</span>( Games[game_id] ) ),
    Games[opening_shortname]
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>📊 تخطيط Dashboard المتوقع</h3>
      <p>يجب أن يكون عندك 3 صفحات على الأقل:</p>

      <p><strong>صفحة 1: Match Overview</strong></p>
      <div class="code-block">
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
│         CHESS GAMES ANALYTICS       │
├─────────────────────────────────────┤
│  Total Games: 20,345                │
│  White Win %: 45.2%   Draw %: 34.8% │
│  Avg Turns: 48.3                    │
├─────────────────────────────────────┤
│                                     │
│  Win Distribution          Top 10   │
│  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”         Openings   │
│  │ Pie Chart   │         â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”│
│  │ W/D/B       │         │ 1. Ruy  ││
│  └─────────────┘         │ 2. Sicil││
│                          │ 3. French││
│  Rating Gap Impact        └─────────┘│
│  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”                    │
│  │ Bar Chart   │  Blitz vs Rapid     │
│  │ ↑ Win Rate  │  â”Œâ”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”   │
│  └─────────────┘  │ Blitz│Rapid │   │
│                   │ 40%  │ 52%  │   │
│                   └──────┴──────┘   │
└─────────────────────────────────────┘
      </div>

      <p><strong>صفحة 2: Opening Analysis</strong></p>
      <div class="code-block">
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
│     OPENING DEEP DIVE               │
├─────────────────────────────────────┤
│  Selected Opening: Ruy Lopez        │
│  Games Count: 3,405                 │
│  White Advantage: +6.2%             │
├─────────────────────────────────────┤
│                                     │
│  Variations Win Rate:               │
│  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   │
│  │ Variation      │ W% │ Count │   │
│  ├─────────────────────────────┤   │
│  │ Classical      │47%│ 1,245 │   │
│  │ Morphy         │44%│   856 │   │
│  │ Berlin         │48%│   734 │   │
│  │ Archangelsk    │42%│   570 │   │
│  └─────────────────────────────┘   │
│                                     │
│  Performance Trend:                 │
│  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   │
│  │ Line Chart: Wins over time  │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
      </div>

      <p><strong>صفحة 3: Rating & Time Control</strong></p>
      <div class="code-block">
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
│  RATING & TIME ANALYSIS             │
├─────────────────────────────────────┤
│  Higher-Rated Win: 58.2%            │
│  Upset Rate:       41.8%            │
├─────────────────────────────────────┤
│                                     │
│  Rating Band Performance:           │
│  â”Œâ”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”    │
│  │ Band │ W%   │Draw%│ Count│    │
│  ├──────┼──────┼──────┼──────┤    │
│  │<1200 │ 48%  │ 32% │ 1,200│    │
│  │1200+ │ 52%  │ 35% │ 4,500│    │
│  │1600+ │ 55%  │ 37% │ 8,000│    │
│  │2000+ │ 62%  │ 38% │ 5,645│    │
│  └──────┴──────┴──────┴──────┘    │
│                                     │
│  Game Speed Impact:                 │
│  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   │
│  │ Bullet: 41% | Blitz: 45%    │   │
│  │ Rapid: 52%  | Classic: 58%  │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
      </div>
    </div>

    <div class="lesson-card">
      <h3>ðŸ” Business Insights المتوقعة</h3>
      <ol>
        <li><strong>أثر التقييم حقيقي:</strong> اللاعب الأعلى تقييماً يفوز في 58% من الحالات — أعلى من الـ 50% المتوقع عشوائياً، مما يثبت أن التقييم مؤشر قوي للأداء.</li>
        <li><strong>الافتتاحيات ذات تأثير:</strong> افتتاحيات معينة (مثل Ruy Lopez و Sicilian) لها معدل فوز أعلى للأبيض — تعكس عمق الإعداد النظري.</li>
        <li><strong>الوقت يزيد الفروقات:</strong> في ألعاب Blitz (وقت قليل)، معدل الفوز أقل متوقعية (41%). في Rapid/Classic بالوقت الأطول، معدل الفوز يرتفع (58%+) — الوقت الأطول يسمح بالإعداد النظري القوي أن ينتصر.</li>
        <li><strong>Draw rates عالية:</strong> حوالي 35% من الألعاب تنتهي برسم — مؤشر على مستوى اللاعبين المتقاربة ومهاراتهم الدفاعية.</li>
        <li><strong>Short games حينما يكون rating gap كبيراً:</strong> متوسط الحركات ينخفض عندما يكون الفرق في التقييم كبيراً جداً — تسليم مبكر.</li>
      </ol>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>Project scenario</h3>
      <p>You are building an analytical report for more than 20,000 Lichess games. The goal is not just to count wins, but to explain how rating difference, time control, and opening choice affect results.</p>
    </div>

    <div class="lesson-card">
      <h3>Raw data shape</h3>
      <ul>
        <li>One main file: <code>chess_games.csv</code></li>
        <li>Each row represents a single game.</li>
        <li>Important fields include winner, victory_status, turns, time_increment, white_rating, black_rating, opening_shortname, opening_variation, and moves.</li>
      </ul>
      <p>The challenge here is not joins. The challenge is converting a raw table into an analytical model with meaningful derived categories.</p>
    </div>

    <div class="lesson-card">
      <h3>What you should build</h3>
      <ul>
        <li>Derived fields such as Rating Band, Result Type, Higher Rated Color, and Time Control Category.</li>
        <li>Two or three report pages: Match Overview, Openings Lab, and Rating or Time Control Analysis.</li>
        <li>KPIs such as White Win %, Draw %, Average Turns, Upset Rate, Higher-Rated Win %, and Most Used Openings.</li>
        <li>A drill path from opening family to variation.</li>
      </ul>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <h4>Create analytical columns deliberately</h4>
          <p>Group ratings into bands, determine which player was higher rated, and transform time_increment into clear game-speed buckets such as blitz, rapid, or bullet.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <h4>Separate the analytical questions</h4>
          <p>Result distribution is one question, opening behavior is another, and color or rating advantage is another. Let each page answer a focused family of questions.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <h4>Do not over-parse the moves text too early</h4>
          <p>The moves column can become an advanced extension later, but the intermediate version of the project already succeeds through rating logic, opening fields, and result analysis.</p>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Definition of Done</h3>
      <ul>
        <li>Raw fields and derived analytical columns are clearly separated.</li>
        <li>The user can see whether the higher-rated player actually wins most of the time.</li>
        <li>There is at least one opening analysis and one time-control analysis.</li>
        <li>The report does not dump the moves text into visuals without analytical purpose.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Dataset Source Pack</h3>
      <ul>
        <li><strong>Direct download:</strong> <a href="https://maven-datasets.s3.amazonaws.com/Online%20Chess%20Games/Online%20Chess%20Games.zip" target="_blank" rel="noopener noreferrer">Online Chess Games.zip</a></li>
        <li><strong>Source page:</strong> <a href="https://mavenanalytics.io/data-playground/online-chess-games" target="_blank" rel="noopener noreferrer">Maven Analytics - Online Chess Games</a></li>
        <li><strong>Why it is a strong intermediate project:</strong> it forces you to create semantic layers, buckets, flags, and analytical groupings by yourself.</li>
        <li><strong>Last verified:</strong> 2026-04-22.</li>
      </ul>
    </div>

    <div class="warn-box">
      <div class="icon">!</div>
      <p><strong>Failure pattern:</strong> turning this project into simple counts and pie charts of winners. The real value comes from transforming the raw table into insight about rating gaps, openings, and time-control behavior.</p>
    </div>

    <div class="lesson-card">
      <h3>🔷 Required DAX Measures</h3>
      <p>Here are the 7 essential DAX measures for this project:</p>
      <div class="code-block">
<span class="cm">-- 1. Total game count</span>
<span class="kw">Total Games</span> = <span class="fn">COUNTA</span>( Games[game_id] )

<span class="cm">-- 2. White win percentage %</span>
<span class="kw">White Win %</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">CALCULATE</span>(
        <span class="fn">COUNTA</span>( Games[game_id] ),
        Games[winner] = <span class="str">"white"</span>
    ),
    [Total Games]
) * <span class="num">100</span>

<span class="cm">-- 3. Draw percentage</span>
<span class="kw">Draw %</span> = <span class="fn">DIVIDE</span>( <span class="fn">CALCULATE</span>( <span class="fn">COUNTA</span>( Games[game_id] ), Games[winner] = <span class="str">"draw"</span> ), [Total Games] ) * <span class="num">100</span>

<span class="cm">-- 4. Average number of moves</span>
<span class="kw">Avg Moves</span> = <span class="fn">AVERAGE</span>( Games[turns] )

<span class="cm">-- 5. Higher-rated player win percentage %</span>
<span class="kw">Higher Rated Win %</span> =
<span class="fn">DIVIDE</span>(
    <span class="fn">CALCULATE</span>(
        <span class="fn">COUNTA</span>( Games[game_id] ),
        Games[higher_rated_won] = <span class="num">1</span>
    ),
    [Total Games]
) * <span class="num">100</span>

<span class="cm">-- 6. Upset Rate (weaker player wins)</span>
<span class="kw">Upset Rate %</span> = <span class="num">100</span> - [Higher Rated Win %]

<span class="cm">-- 7. Most common opening</span>
<span class="kw">Most Common Opening</span> =
<span class="fn">MAXX</span>(
    <span class="fn">TOPN</span>( <span class="num">1</span>, <span class="fn">VALUES</span>( Games[opening_shortname] ), <span class="fn">COUNTA</span>( Games[game_id] ) ),
    Games[opening_shortname]
)
      </div>
    </div>

    <div class="lesson-card">
      <h3>📊 Expected Dashboard Layout</h3>
      <p>You should have at least 3 pages:</p>

      <p><strong>Page 1: Match Overview</strong></p>
      <div class="code-block">
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
│         CHESS GAMES ANALYTICS       │
├─────────────────────────────────────┤
│  Total Games: 20,345                │
│  White Win %: 45.2%   Draw %: 34.8% │
│  Avg Turns: 48.3                    │
├─────────────────────────────────────┤
│                                     │
│  Win Distribution          Top 10   │
│  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”         Openings   │
│  │ Pie Chart   │         â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”│
│  │ W/D/B       │         │ 1. Ruy  ││
│  └─────────────┘         │ 2. Sicil││
│                          │ 3. French││
│  Rating Gap Impact        └─────────┘│
│  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”                    │
│  │ Bar Chart   │  Blitz vs Rapid     │
│  │ ↑ Win Rate  │  â”Œâ”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”   │
│  └─────────────┘  │ Blitz│Rapid │   │
│                   │ 40%  │ 52%  │   │
│                   └──────┴──────┘   │
└─────────────────────────────────────┘
      </div>

      <p><strong>Page 2: Opening Analysis</strong></p>
      <div class="code-block">
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
│     OPENING DEEP DIVE               │
├─────────────────────────────────────┤
│  Selected Opening: Ruy Lopez        │
│  Games Count: 3,405                 │
│  White Advantage: +6.2%             │
├─────────────────────────────────────┤
│                                     │
│  Variations Win Rate:               │
│  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   │
│  │ Variation      │ W% │ Count │   │
│  ├─────────────────────────────┤   │
│  │ Classical      │47%│ 1,245 │   │
│  │ Morphy         │44%│   856 │   │
│  │ Berlin         │48%│   734 │   │
│  │ Archangelsk    │42%│   570 │   │
│  └─────────────────────────────┘   │
│                                     │
│  Performance Trend:                 │
│  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   │
│  │ Line Chart: Wins over time  │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
      </div>

      <p><strong>Page 3: Rating & Time Control</strong></p>
      <div class="code-block">
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
│  RATING & TIME ANALYSIS             │
├─────────────────────────────────────┤
│  Higher-Rated Win: 58.2%            │
│  Upset Rate:       41.8%            │
├─────────────────────────────────────┤
│                                     │
│  Rating Band Performance:           │
│  â”Œâ”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”    │
│  │ Band │ W%   │Draw%│ Count│    │
│  ├──────┼──────┼──────┼──────┤    │
│  │<1200 │ 48%  │ 32% │ 1,200│    │
│  │1200+ │ 52%  │ 35% │ 4,500│    │
│  │1600+ │ 55%  │ 37% │ 8,000│    │
│  │2000+ │ 62%  │ 38% │ 5,645│    │
│  └──────┴──────┴──────┴──────┘    │
│                                     │
│  Game Speed Impact:                 │
│  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   │
│  │ Bullet: 41% | Blitz: 45%    │   │
│  │ Rapid: 52%  | Classic: 58%  │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
      </div>
    </div>

    <div class="lesson-card">
      <h3>ðŸ” Expected Business Insights</h3>
      <ol>
        <li><strong>Rating impact is real:</strong> The higher-rated player wins 58% of the time — higher than 50% random chance, proving rating is a strong performance predictor.</li>
        <li><strong>Openings matter:</strong> Certain openings (like Ruy Lopez and Sicilian) show higher white win rates — reflecting deep theoretical preparation.</li>
        <li><strong>Time amplifies differences:</strong> In Blitz games (fast), win rates are less predictable (41%). In Rapid/Classical with more time, win rates jump (58%+) — longer time allows strong theoretical play to dominate.</li>
        <li><strong>Draw rates are high:</strong> About 35% of games end in draws — showing evenly matched player levels and strong defensive skills.</li>
        <li><strong>Large rating gaps = shorter games:</strong> Average move count drops when rating difference is very large — early resignations.</li>
      </ol>
    </div>` }],
  },

  "project-enterprise-advanced": {
    eyebrow: "10 · 03 — مشروع متقدم — Airbnb Market Intelligence",
    title: "مشروع متقدم — Airbnb Market Intelligence",
    lede: "هذا مشروع متقدم فعليًا: بيانات listings كبيرة، جدول reviews ضخم، أبعاد جغرافية، وأسئلة سوقية تحتاج model ذكية وأداء منضبط لا مجرد صفحة جميلة.",
    en_eyebrow: "10 · 03 — Advanced Project — Airbnb Market Intelligence",
    en_lede: "A true advanced project: large-scale listings and review data, geography, behavioral metrics, and performance-aware modeling.",
    sectionId: "project-enterprise-advanced",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>سيناريو المشروع</h3>
      <p>أنت تبني لوحة تحليلات لسوق الإيجارات القصيرة عبر مدن متعددة. المطلوب فهم التسعير، الجودة، انتشار الـ superhosts، الفروقات بين المدن والأحياء، وعلاقة reviews بجودة السوق.</p>
    </div>

    <div class="lesson-card">
      <h3>البيانات الفعلية</h3>
      <ul>
        <li><code>Listings.csv</code>: أكثر من 250 ألف listing عبر 10 مدن رئيسية</li>
        <li><code>Reviews.csv</code>: ملايين الـ reviews التاريخية</li>
        <li><code>Listings_data_dictionary.csv</code>: توصيف الحقول</li>
      </ul>
      <p>أول صف فعلي في البيانات يوضح حقول مثل <code>city</code> و<code>neighbourhood</code> و<code>latitude</code> و<code>longitude</code> و<code>room_type</code> و<code>price</code> وحقول ratings وخصائص المضيف.</p>
    </div>

    <div class="lesson-card">
      <h3>ما الذي يجب أن تبنيه؟</h3>
      <ul>
        <li>Model تفصل بوضوح بين listing-level metrics وreview-level activity</li>
        <li>Date table لقراءة اتجاهات الـ reviews عبر الزمن</li>
        <li>صفحة Market Overview + صفحة City Benchmark + صفحة Listing/Host Quality</li>
        <li>KPIs مثل: Listings Count, Average Price, Review Volume, Average Rating, Superhost Share, Instant Bookable Share</li>
        <li>خريطة أو تحليل جغرافي واحد على الأقل مبني على latitude/longitude</li>
      </ul>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <h4>احترم الـ grain</h4>
          <p>الـ listing ليست review. لا تخلط مؤشرات القوائم مع جدول المراجعات مباشرة دون فهم أثر التكرار على الأسعار والتقييمات والنسب.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <h4>خفف الحمل على التقرير</h4>
          <p>ليس مطلوبًا أن تعرض ملايين reviews الخام في كل visual. أحيانًا يكون الأفضل بناء جداول ملخصة حسب الشهر أو المدينة أو listing_id.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <h4>اربط التحليل بقرار واضح</h4>
          <p>هل المدينة ذات السعر الأعلى تحقق أيضًا تقييمات أعلى؟ هل الـ superhosts يسيطرون على مناطق بعينها؟ هل الأحياء ذات السعر المرتفع تتلقى reviews أكثر؟</p>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Rubric التقييم</h3>
      <table class="compare-table">
        <tr>
          <th>المحور</th>
          <th>ما الذي يثبت الجودة؟</th>
        </tr>
        <tr>
          <td>Model Design</td>
          <td>فصل واضح بين listing grain وreview grain وعدم تكرار المقاييس بسبب علاقة غير منضبطة</td>
        </tr>
        <tr>
          <td>Performance</td>
          <td>وجود قرار واعٍ حول التلخيص المسبق أو تقليل visual الثقيلة على reviews</td>
        </tr>
        <tr>
          <td>Business Story</td>
          <td>وجود 2 أو 3 أسئلة سوقية حقيقية يجيب عنها التقرير بوضوح</td>
        </tr>
        <tr>
          <td>Delivery</td>
          <td>وجود صفحة benchmark واضحة وصفحة جغرافية وصفف KPIs قابلة للشرح</td>
        </tr>
      </table>
    </div>

    <div class="lesson-card">
      <h3>Dataset Source Pack</h3>
      <ul>
        <li><strong>رابط التحميل المباشر:</strong> <a href="https://maven-datasets.s3.amazonaws.com/Airbnb/Airbnb%20Data.zip" target="_blank" rel="noopener noreferrer">Airbnb Data.zip</a></li>
        <li><strong>صفحة التحدي/الوصف:</strong> <a href="https://mavenanalytics.io/challenges/maven-vacation-challenge" target="_blank" rel="noopener noreferrer">Maven Vacation Challenge</a></li>
        <li><strong>ما الذي يجعلها dataset متقدمة؟</strong> حجم كبير، مدن متعددة، reviews تاريخية، وتحليل جغرافي وسلوكي في نفس الوقت.</li>
        <li><strong>ماذا تقرر مبكرًا؟</strong> هل ستحتفظ بجدول reviews كاملًا، أم ستبني طبقة summaries شهرية أو حسب المدينة/الحي لتخفيف الأداء؟</li>
        <li><strong>آخر تحقق من الرابط:</strong> 2026-04-22. تم استخدام صيغة الرابط الصحيحة بالمئات المرمزة بدل الصيغة التي قد تفشل أحيانًا.</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>النجاح هنا لا يقاس بكثرة الصفحات.</strong> النجاح أن تبني model تفصل بين grains بوضوح، وتبرر كل KPI، وتمنع الأداء من الانهيار رغم حجم البيانات.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>Project scenario</h3>
      <p>You are building a market-intelligence dashboard for short-term rental listings across multiple cities. The objective is to understand pricing, quality, superhost concentration, neighborhood differences, and the relationship between review activity and market performance.</p>
    </div>

    <div class="lesson-card">
      <h3>Actual dataset shape</h3>
      <ul>
        <li><code>Listings.csv</code>: listing-level attributes across major cities.</li>
        <li><code>Reviews.csv</code>: historical review activity at much larger scale.</li>
        <li><code>Listings_data_dictionary.csv</code>: field definitions.</li>
      </ul>
      <p>The first modeling decision is already advanced: listing grain is not review grain, and mixing them carelessly will distort price, rating, and count metrics.</p>
    </div>

    <div class="lesson-card">
      <h3>What you should build</h3>
      <ul>
        <li>A model that clearly separates listing-level metrics from review-level activity.</li>
        <li>A date table for review trends over time.</li>
        <li>A Market Overview page, a City Benchmark page, and a Listing or Host Quality page.</li>
        <li>KPIs such as Listings Count, Average Price, Review Volume, Average Rating, Superhost Share, and Instant Bookable Share.</li>
        <li>At least one geographic view based on latitude and longitude.</li>
      </ul>
    </div>

    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <h4>Respect the grain</h4>
          <p>A listing is not a review. Do not join review history directly into listing metrics without understanding how repetition affects averages, counts, and ratios.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <h4>Reduce report pressure where needed</h4>
          <p>You do not have to expose every raw review row in the final report. Sometimes a summarized monthly or city-level layer is the more professional performance decision.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <h4>Tie the analysis to decisions</h4>
          <p>Which cities are expensive but still highly rated? Where are superhosts concentrated? Which neighborhoods combine price strength with healthy review activity?</p>
        </div>
      </div>
    </div>

    <div class="lesson-card">
      <h3>Assessment rubric</h3>
      <table class="compare-table">
        <tr>
          <th>Area</th>
          <th>What proves quality</th>
        </tr>
        <tr>
          <td>Model design</td>
          <td>Listing grain and review grain are clearly separated, with no accidental duplication of metrics.</td>
        </tr>
        <tr>
          <td>Performance</td>
          <td>You made a conscious decision about summarization or heavy visuals instead of loading everything into one page.</td>
        </tr>
        <tr>
          <td>Business story</td>
          <td>The report answers two or three real market questions clearly.</td>
        </tr>
        <tr>
          <td>Delivery</td>
          <td>There is a benchmark page, a geographic view, and KPI definitions you can defend.</td>
        </tr>
      </table>
    </div>

    <div class="lesson-card">
      <h3>Dataset Source Pack</h3>
      <ul>
        <li><strong>Direct download:</strong> <a href="https://maven-datasets.s3.amazonaws.com/Airbnb/Airbnb%20Data.zip" target="_blank" rel="noopener noreferrer">Airbnb Data.zip</a></li>
        <li><strong>Source page:</strong> <a href="https://mavenanalytics.io/challenges/maven-vacation-challenge" target="_blank" rel="noopener noreferrer">Maven Vacation Challenge</a></li>
        <li><strong>Why it is advanced:</strong> large volume, multiple cities, review history, and simultaneous geographic and behavioral analysis.</li>
        <li><strong>Last verified:</strong> 2026-04-22.</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">?</div>
      <p><strong>Success here is not the number of pages.</strong> Success is building a model that separates grains clearly, justifies each KPI, and stays performant despite large data volume.</p>
    </div>

    <div class="lesson-card">
      <h3>🔷 Critical DAX Measures for Airbnb</h3>
      <p>These 8 measures form the backbone of the Airbnb analysis:</p>
      <div class="code-block">
<span class="cm">-- 1. Total Listings Count</span>
<span class="kw">Total Listings</span> = <span class="fn">DISTINCTCOUNT</span>( Listings[id] )

<span class="cm">-- 2. Average Price (with handling for empty/null)</span>
<span class="kw">Avg Price</span> = <span class="fn">AVERAGE</span>( Listings[price] )

<span class="cm">-- 3. Superhost % (Superhosts / Total)</span>
<span class="kw">Superhost %</span> = <span class="fn">DIVIDE</span>(
    <span class="fn">CALCULATE</span>( <span class="fn">DISTINCTCOUNT</span>( Listings[id] ), Listings[host_is_superhost] = <span class="str">"t"</span> ),
    [Total Listings]
) * <span class="num">100</span>

<span class="cm">-- 4. Avg Review Score (Rating out of 5)</span>
<span class="kw">Avg Review Score</span> = <span class="fn">AVERAGE</span>( Reviews[review_scores_rating] )

<span class="cm">-- 5. Review Volume (Count of all reviews)</span>
<span class="kw">Total Reviews</span> = <span class="fn">COUNTA</span>( Reviews[id] )

<span class="cm">-- 6. Reviews per Listing (Reviews per active listing)</span>
<span class="kw">Reviews per Listing</span> = <span class="fn">DIVIDE</span>( [Total Reviews], [Total Listings] )

<span class="cm">-- 7. Instant Bookable % (Listings with instant booking)</span>
<span class="kw">Instant Bookable %</span> = <span class="fn">DIVIDE</span>(
    <span class="fn">CALCULATE</span>( <span class="fn">DISTINCTCOUNT</span>( Listings[id] ), Listings[instant_bookable] = <span class="str">"t"</span> ),
    [Total Listings]
) * <span class="num">100</span>

<span class="cm">-- 8. Price Percentile (90th percentile = luxury segment)</span>
<span class="kw">Price 90th Percentile</span> = <span class="fn">PERCENTILE.INC</span>( Listings[price], <span class="num">0.9</span> )
      </div>
    </div>

    <div class="lesson-card">
      <h3>📊 Dashboard Pages Architecture</h3>
      <p>Build 4 pages minimum for this project:</p>

      <p><strong>Page 1: Market Overview</strong></p>
      <div class="code-block">
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
│        AIRBNB MARKET INTELLIGENCE          │
├────────────────────────────────────────────┤
│  Total Listings: 250,145    Avg Price: $145│
│  Superhost %: 18.2%    Avg Review: 4.7/5  │
│  Total Reviews: 3.2M   Reviews/Listing: 12.8│
├────────────────────────────────────────────┤
│                                            │
│  Price Distribution      Market Composition│
│  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”         â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” │
│  │ Histogram   │         │ Pie Chart    │ │
│  │ $ vs Count  │         │ Room Types   │ │
│  └─────────────┘         └──────────────┘ │
│                                            │
│  Review Scores Trend       Superhost Share │
│  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”         â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” │
│  │ Line Chart  │         │ 18.2%        │ │
│  │ Rating over │         │ 82.0% Regular│ │
│  │ Time        │         │ 0.8% Other   │ │
│  └─────────────┘         └──────────────┘ │
└────────────────────────────────────────────┘
      </div>

      <p><strong>Page 2: City Benchmark</strong></p>
      <div class="code-block">
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
│     CITY COMPARISON & BENCHMARKING         │
├────────────────────────────────────────────┤
│                                            │
│  City Metrics Table:                       │
│  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”│
│  │ City   │Count│ Price │ Rev  │ SHost %││
│  ├────────┼─────┼───────┼──────┼────────┤│
│  │ NYC    │45K  │ $215  │5.2M  │ 22%    ││
│  │ LA     │38K  │ $168  │3.1M  │ 19%    ││
│  │ Chicago│28K  │ $125  │2.2M  │ 16%    ││
│  │ Boston │22K  │ $145  │1.8M  │ 21%    ││
│  │ Austin │18K  │ $98   │1.1M  │ 14%    ││
│  └────────┴─────┴───────┴──────┴────────┘│
│                                            │
│  Superhost Concentration:                 │
│  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  │
│  │ Bar Chart: Superhost % by City     │  │
│  │ NYC leads at 22%, Boston at 21%    │  │
│  └────────────────────────────────────┘  │
│                                            │
│  Price vs Quality Scatter:                │
│  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  │
│  │ X: Price | Y: Review Score | Size  │  │
│  │ Premium = High Price + High Reviews│  │
│  └────────────────────────────────────┘  │
└────────────────────────────────────────────┘
      </div>

      <p><strong>Page 3: Geographic Analysis</strong></p>
      <div class="code-block">
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
│      GEOGRAPHIC & NEIGHBORHOOD VIEW        │
├────────────────────────────────────────────┤
│                                            │
│  Map: Price Heatmap by Neighborhood       │
│  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  │
│  │ [Map showing color intensity]      │  │
│  │ Red = $200+  Yellow = $150-200     │  │
│  │ Green = $100-150  Blue = <$100     │  │
│  └────────────────────────────────────┘  │
│                                            │
│  Top 10 Neighborhoods by:                 │
│  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” │
│  │ By Price     │ By Superhost Density │ │
│  ├──────────────┼──────────────────────┤ │
│  │ 1. Tribeca   │ 1. Park Slope        │ │
│  │ 2. Upper    │ 2. Williamsburg      │ │
│  │ 3. SoHo      │ 3. Astoria           │ │
│  └──────────────┴──────────────────────┘ │
│                                            │
│  Review Sentiment by Neighborhood:        │
│  [Scatter: Listings vs Avg Score]        │
└────────────────────────────────────────────┘
      </div>

      <p><strong>Page 4: Host & Quality Analytics</strong></p>
      <div class="code-block">
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
│   HOST QUALITY & PERFORMANCE ANALYSIS      │
├────────────────────────────────────────────┤
│  Average Review Score: 4.73/5              │
│  Listings with 4.8+ Rating: 42%            │
│  Instant Bookable: 64%                     │
├────────────────────────────────────────────┤
│                                            │
│  Review Score Distribution:                │
│  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  │
│  │ Histogram: 5.0 | 4.8-4.9 | 4.5+   │  │
│  │ Most cluster at 4.8+               │  │
│  └────────────────────────────────────┘  │
│                                            │
│  Superhost vs Regular Performance:        │
│  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” │
│  │ Metric       │ Superhost │ Regular  │ │
│  ├──────────────┼──────────┼──────────┤ │
│  │ Avg Rating   │ 4.85     │ 4.62     │ │
│  │ Avg Price    │ $168     │ $135     │ │
│  │ Reviews/List │ 15.2     │ 11.4     │ │
│  └──────────────┴──────────┴──────────┘ │
│                                            │
│  Response Time Impact:                    │
│  [Line Chart: Response Speed vs Rating]   │
└────────────────────────────────────────────┘
      </div>
    </div>

    <div class="lesson-card">
      <h3>ðŸ” Business Insights You Should Discover</h3>
      <ol>
        <li><strong>Superhost Premium:</strong> Superhosts command 15-20% price premium while maintaining 4.85/5 rating (vs 4.62 for regular hosts). ROI: higher reviews + higher prices = loyalty.</li>
        <li><strong>Geographic Pricing Power:</strong> Top neighborhoods (NYC Tribeca, LA Pacific Palisades) command 2-3x median price. But Superhosts in secondary neighborhoods often match primary-area regular host ratings.</li>
        <li><strong>Instant Bookable = Risk/Reward:</strong> 64% of listings enable instant booking. They have 3-5% MORE bookings but 0.3 points LOWER review scores — convenience trades quality control.</li>
        <li><strong>Review Volume Ceiling:</strong> Avg 12.8 reviews/listing. Listings in top neighborhoods hit 20+ reviews; secondary markets average 6-8. Location drives repeat booking more than rating.</li>
        <li><strong>Price-Quality Trade-off:</strong> Listings >$250/night show ratings 0.4 points lower than $100-150 range — luxury doesn't always mean better experience, possibly because expectations are higher.</li>
      </ol>
    </div>` }],
  },

  "portfolio-playbook": {
    eyebrow: "10 · 04 — Portfolio و Interview Playbook",
    title: "Portfolio و Interview Playbook",
    lede: "كثيرون ينهون المشاريع لكن لا يعرفون كيف يقدّمونها. هذا الدرس يحوّل المشروع إلى دليل كفاءة واضح لصاحب العمل أو العميل.",
    en_eyebrow: "10 · 04 — Portfolio & Interview Playbook",
    en_lede: "Many people finish projects but do not know how to present them. This lesson turns work into evidence of skill.",
    sectionId: "portfolio-playbook",
    blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>ما الذي يجب أن تعرضه في أي مشروع Portfolio؟</h3>
      <ul>
        <li>Business problem في سطرين</li>
        <li>مصادر البيانات والغرض من كل مصدر</li>
        <li>شكل الـ model ولماذا صممته بهذا الشكل</li>
        <li>أهم 5 measures وما القرار الذي تدعمه</li>
        <li>لقطات من التقرير قبل/بعد أو overview/drill pages</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>أسئلة مقابلات يجب أن تكون مستعدًا لها</h3>
      <ul>
        <li>لماذا اخترت Import أو DirectQuery؟</li>
        <li>كيف تأكدت أن الأرقام صحيحة؟</li>
        <li>ما الفرق بين column وmeasure في هذا المشروع؟</li>
        <li>ما أكبر trade-off واجهك؟</li>
        <li>لو زاد حجم البيانات 10× ماذا كنت ستغيّر؟</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>قالب مختصر لعرض المشروع</h3>
      <div class="code-block">
1. Business Context
2. Data Sources
3. Model Design
4. Core Measures
5. Key Insights
6. Security / Deployment Notes
7. What I would improve next
      </div>
      <p>هذا القالب وحده يرفع جودة العرض جدًا لأنه ينقل الحديث من “عملت Dashboard” إلى “بنيت حلًا تحليليًا”.</p>
    </div>

    <div class="lesson-card">
      <h3>Minimum Portfolio Package</h3>
      <ul>
        <li>ملف PDF أو صور مرتبة للصفحات الأساسية</li>
        <li>شرح من صفحة واحدة للمشكلة والنموذج والنتائج</li>
        <li>3 إلى 5 لقطات تبرز الـ model والمنطق لا الشكل فقط</li>
        <li>قائمة “What I would improve next” لإظهار الوعي النقدي</li>
      </ul>
      <p>إذا كان الـ Portfolio كله صور Dashboard فقط بدون سياق أو تفسير، فغالبًا لن يظهر مستواك الحقيقي.</p>
    </div>

    <div class="lesson-card">
      <h3>Dataset Attribution Checklist</h3>
      <ul>
        <li>ضع <strong>رابط المصدر الأصلي</strong> واسم الجهة المالكة للبيانات داخل وصف المشروع أو README.</li>
        <li>اذكر <strong>ما الذي حمّلته كما هو</strong>، وما الذي أنشأته محليًا مثل <code>Targets.xlsx</code> أو <code>OrgHierarchy.xlsx</code>.</li>
        <li>اكتب <strong>تاريخ آخر تحقق من الرابط</strong> حتى لا يظهر المشروع كأنه يعتمد على source مجهول أو ميت.</li>
        <li>إذا كانت الرخصة أو شروط الاستخدام مهمة، اذكرها باختصار بدل الاكتفاء بكلمة “public”.</li>
        <li>إذا صغّرت dataset أو أنشأت extract، اشرح الفرق بين النسخة الأصلية ونسخة المشروع.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Trusted Dataset Sources</h3>
      <ul>
        <li><a href="https://learn.microsoft.com/en-us/power-bi/create-reports/sample-datasets" target="_blank" rel="noopener noreferrer">Microsoft Learn — Power BI sample catalog</a> هو أفضل نقطة بداية للمشاريع التعليمية السريعة والمتوسطة.</li>
        <li><a href="https://learn.microsoft.com/en-us/power-bi/fundamentals/mobile-apps-download-samples" target="_blank" rel="noopener noreferrer">Learning Center / built-in samples in Power BI Service</a> ممتاز عندما تريد عينة جاهزة بدون تنزيل ملفات خارجيًا.</li>
        <li><a href="https://learn.microsoft.com/en-us/sql/samples/wide-world-importers-what-is?view=sql-server-ver17" target="_blank" rel="noopener noreferrer">Wide World Importers</a> هو المصدر enterprise الأحدث لمسارات warehouse والتحليلات متعددة الجداول.</li>
        <li><a href="https://github.com/microsoft/sql-server-samples/releases" target="_blank" rel="noopener noreferrer">SQL Server Samples Releases</a> يظل fallback رسميًا مفيدًا، خاصة إذا كنت تحتاج AdventureWorks أو ملفات restore مباشرة.</li>
        <li>إذا اضطررت لاستخدام مصدر أقل استقرارًا، فأضف له <strong>fallback</strong> واضح: page link + service alternative + schema note + local extract.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Bonus Dataset لاحقًا</h3>
      <ul>
        <li><strong>الخيار الرابع الجاهز من نفس المجموعة:</strong> <a href="https://mavenanalytics.io/data-playground/inc-5000-companies" target="_blank" rel="noopener noreferrer">Inc 5000 Companies — Maven Analytics</a></li>
        <li><strong>متى تستخدمه؟</strong> إذا أردت مشروعًا إضافيًا يركز على benchmarking والنمو والتمثيل الجغرافي والقطاعات بدل التشغيل أو الـ marketplace behavior.</li>
        <li><strong>لماذا لم أضعه داخل الثلاثة الأساسية؟</strong> لأننا نملك ثلاث خانات مشاريع فقط، بينما هذا dataset مناسب جدًا كمشروع رابع أو case study إضافية للـ portfolio.</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">💡</div>
      <p><strong>أفضل Portfolio ليست الأكبر.</strong> هي التي تُظهر وضوح التفكير: مشكلة مفهومة، model منطقي، measures موثوقة، وقرارات معمارية مبررة.</p>
    </div>` }],
    en_blocks: [{ kind: "html", html: `<div class="lesson-card">
      <h3>What every portfolio project should show</h3>
      <ul>
        <li>The business problem in one or two lines.</li>
        <li>The data sources and why each source exists.</li>
        <li>The model design and why you chose that shape.</li>
        <li>The five most important measures and the decision each one supports.</li>
        <li>Selected screenshots that show flow, drill, and insight, not just decoration.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Interview questions you should be ready for</h3>
      <ul>
        <li>Why did you choose Import or DirectQuery?</li>
        <li>How did you validate that the numbers were correct?</li>
        <li>What was the difference between a calculated column and a measure in this project?</li>
        <li>What trade-off was hardest?</li>
        <li>If the data volume became ten times larger, what would you change first?</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Short presentation template</h3>
      <div class="code-block">
1. Business Context
2. Data Sources
3. Model Design
4. Core Measures
5. Key Insights
6. Security or Deployment Notes
7. What I Would Improve Next
      </div>
      <p>This structure shifts the conversation from "I built a dashboard" to "I built an analytical solution."</p>
    </div>

    <div class="lesson-card">
      <h3>Minimum portfolio package</h3>
      <ul>
        <li>A clean PDF or organized screenshots of the main pages.</li>
        <li>A one-page project summary covering the problem, model, and results.</li>
        <li>Three to five screenshots that highlight modeling and logic, not just visuals.</li>
        <li>A short "what I would improve next" section that shows critical thinking.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Dataset attribution checklist</h3>
      <ul>
        <li>Include the original source link and source owner in the project description or README.</li>
        <li>State what you downloaded as-is and what you created locally.</li>
        <li>Add the date when the link was last verified.</li>
        <li>If licensing or usage terms matter, mention them briefly instead of saying only "public data."</li>
        <li>If you shrank or reshaped the dataset, explain how your project copy differs from the original source.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Trusted dataset sources</h3>
      <ul>
        <li><a href="https://mavenanalytics.io/data-playground" target="_blank" rel="noopener noreferrer">Maven Analytics Data Playground</a> for realistic practice datasets and challenge-ready files.</li>
        <li><a href="https://learn.microsoft.com/en-us/power-bi/create-reports/sample-datasets" target="_blank" rel="noopener noreferrer">Microsoft Learn sample catalog</a> for official Power BI samples.</li>
        <li><a href="https://learn.microsoft.com/en-us/sql/samples/wide-world-importers-what-is?view=sql-server-ver17" target="_blank" rel="noopener noreferrer">Wide World Importers</a> for warehouse and multi-table enterprise-style practice.</li>
      </ul>
    </div>

    <div class="lesson-card">
      <h3>Bonus dataset for a fourth case study</h3>
      <ul>
        <li><strong>Dataset:</strong> <a href="https://maven-datasets.s3.amazonaws.com/INC%205000%20Companies/INC%205000%20Companies%202019.csv" target="_blank" rel="noopener noreferrer">INC 5000 Companies 2019.csv</a></li>
        <li><strong>Use it when:</strong> you want a growth, benchmarking, geography, and industry segmentation case study.</li>
        <li><strong>Why it is not in the core three:</strong> the site currently uses three main project slots, so this works best as an optional extra portfolio piece.</li>
      </ul>
    </div>

    <div class="tip-box">
      <div class="icon">?</div>
      <p><strong>The best portfolio is not the biggest one.</strong> It is the one that shows clear thinking: a defined problem, a logical model, trustworthy measures, and architectural decisions you can explain calmly.</p>
    </div>` }],
  },
});

// Fallback stub for lessons not yet in HTML
window.stubLesson = function(lesson, chapter) {
  const lessonIndex = chapter.lessons.findIndex(l => l.id === lesson.id) + 1;
  const lessonNum = String(lessonIndex).padStart(2, "0");
  return {
    eyebrow: chapter.num + " · " + lessonNum + " — " + chapter.title,
    en_eyebrow: chapter.num + " · " + lessonNum + " — " + (chapter.en || chapter.title),
    title: lesson.title,
    lede: lesson.title + " — هذا الدرس قيد الإعداد.",
    en_lede: lesson.en + " — this lesson is still being prepared.",
    isStub: true,
    blocks: [{ kind: "html", html: "<p style=\"color:var(--ink-2)\">محتوى هذا الدرس قادم قريباً.</p>" }],
    en_blocks: [{ kind: "html", html: "<p style=\"color:var(--ink-2)\">This lesson content is coming soon.</p>" }],
  };
};


