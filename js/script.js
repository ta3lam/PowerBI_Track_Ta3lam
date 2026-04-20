const SECTIONS = [
  'intro','setup','interface','oltp-olap','model','scd','bridge-tables',
  'getdata','cleaning','powerquery','mcode',
  'relationships','datetable','hierarchies',
  'dax1','dax-logical','calculate','relationships-dax','iterators','dax2','time-intel-pro','fieldparams','dax3','dax-text','dax-reference',
  'visuals','sync-slicers','themes','custom-tooltips','condformat','drillthrough','bookmarks',
  'publish','workspaces','rls','gateway','incremental',
  'performance','python-pbi','paginated',
  'premium','external-tools','apis','git-integration','advanced-dataflows',
  'kpi-finance','kpi-sales','kpi-inventory','kpi-hr','kpi-marketing'
];

let visitedSections = new Set();
let certificateShown = false;
let storageAvailable = true;

function safeSet(key, value) {
  if (!storageAvailable) return;
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch(e) { storageAvailable = false; }
}
function safeGet(key) {
  if (!storageAvailable) return null;
  try { const d = localStorage.getItem(key); return d ? JSON.parse(d) : null; }
  catch(e) { storageAvailable = false; return null; }
}
function safeRemove(key) {
  if (!storageAvailable) return;
  try { localStorage.removeItem(key); } catch(e) {}
}

function saveProgress() { safeSet('powerbiCourseProgress', Array.from(visitedSections)); }

function loadProgress() {
  const saved = safeGet('powerbiCourseProgress');
  if (saved) visitedSections = new Set(saved);
  updateProgress();
  document.querySelectorAll('.nav-item').forEach(n => {
    if (visitedSections.has(n.dataset.section)) n.classList.add('done');
  });
}

function updateProgress() {
  const pct = Math.round((visitedSections.size / SECTIONS.length) * 100);
  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('progressLabel').textContent = pct + '% مكتمل';
}

function markAsDone(id) {
  visitedSections.add(id);
  saveProgress();
  document.querySelectorAll('.nav-item').forEach(n => {
    if (visitedSections.has(n.dataset.section)) n.classList.add('done');
  });
  updateProgress();
}

function goTo(id) {
  document.querySelectorAll('.section-page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const page = document.getElementById('sec-' + id);
  if (page) {
    page.classList.add('active');
    const main = document.getElementById('main');
    if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const navItem = document.querySelector('[data-section="' + id + '"]');
  if (navItem) navItem.classList.add('active');
  // FIX: Hero يختفي عند اختيار أي درس
  const hero = document.getElementById('heroSection');
  if (hero) hero.style.display = 'none';
}

function resetProgress() {
  if (confirm('هل أنت متأكد من إعادة تعيين كل التقدم؟')) {
    safeRemove('powerbiCourseProgress');
    safeRemove('powerbiCertificateShown');
    visitedSections = new Set();
    certificateShown = false;
    document.querySelectorAll('.nav-item').forEach(n => { n.classList.remove('done'); n.classList.remove('active'); });
    document.querySelectorAll('.section-page').forEach(p => p.classList.remove('active'));
    updateProgress();
    const hero = document.getElementById('heroSection');
    if (hero) hero.style.display = 'block';
    document.querySelector('[data-section="intro"]').classList.add('active');
  }
}

function showCertificate() {
  const modal = document.getElementById('certificateModal');
  document.getElementById('certDate').textContent = new Date().toLocaleDateString('ar-EG', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
  modal.style.display = 'flex';
}

function closeModal() { document.getElementById('certificateModal').style.display = 'none'; }

// FIX: تحميل PDF حقيقي
function downloadCertificate() {
  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const W = 297, H = 210;
    doc.setFillColor(13, 13, 13); doc.rect(0, 0, W, H, 'F');
    doc.setDrawColor(245, 184, 0); doc.setLineWidth(2); doc.rect(10, 10, W-20, H-20);
    doc.setLineWidth(0.5); doc.rect(14, 14, W-28, H-28);
    doc.setTextColor(245, 184, 0); doc.setFontSize(24); doc.text('* * *', W/2, 32, {align:'center'});
    doc.setFontSize(12); doc.setTextColor(180,180,180); doc.text('CERTIFICATE OF COMPLETION', W/2, 47, {align:'center'});
    doc.setDrawColor(245,184,0); doc.setLineWidth(0.8); doc.line(60,53,W-60,53);
    doc.setFontSize(10); doc.setTextColor(140,140,140); doc.text('This certifies successful completion of the course', W/2, 65, {align:'center'});
    doc.setFontSize(22); doc.setTextColor(245,184,0); doc.text('Power BI - From Zero to Pro', W/2, 82, {align:'center'});
    doc.setFontSize(9); doc.setTextColor(110,110,110);
    doc.text('Data Modeling  |  DAX Advanced  |  Time Intelligence  |  Visuals  |  Performance  |  Publishing', W/2, 94, {align:'center'});
    doc.setDrawColor(50,50,50); doc.setLineWidth(0.3); doc.line(60,101,W-60,101);
    const dateStr = new Date().toLocaleDateString('en-GB', {year:'numeric', month:'long', day:'numeric'});
    doc.setFontSize(10); doc.setTextColor(140,140,140); doc.text('Date: ' + dateStr, W/2, 113, {align:'center'});
    doc.setDrawColor(245,184,0); doc.setLineWidth(0.5); doc.line(W/2-40,145,W/2+40,145);
    doc.setFontSize(11); doc.setTextColor(245,184,0); doc.text('Ta3laM Platform', W/2, 152, {align:'center'});
    doc.setFontSize(8); doc.setTextColor(90,90,90); doc.text('Authorized Signature', W/2, 158, {align:'center'});
    const studentName = (document.getElementById('certNameInput') && document.getElementById('certNameInput').value.trim()) || '';
    if (studentName) {
      doc.setFontSize(16); doc.setTextColor(240,240,240);
      doc.text(studentName, W/2, 127, {align:'center'});
    }
    doc.setFontSize(8); doc.setTextColor(70,70,70); doc.text('37 Lessons  |  7 Chapters  |  Full DAX + Performance + Publishing', W/2, 173, {align:'center'});
    doc.save('PowerBI_Certificate_Ta3laM.pdf');
    closeModal();
  } catch(e) {
    console.error(e);
    alert('تأكد من اتصال الإنترنت ثم أعد المحاولة.');
  }
}

function goNext(currentId) {
  markAsDone(currentId);
  const idx = SECTIONS.indexOf(currentId);
  if (idx >= 0 && idx < SECTIONS.length - 1) goTo(SECTIONS[idx + 1]);
}

function goPrev(currentId) {
  const idx = SECTIONS.indexOf(currentId);
  if (idx > 0) goTo(SECTIONS[idx - 1]);
}

// FIX: finishCourse — يتحقق من كل الدروس ويعرض الشهادة
function finishCourse() {
  markAsDone('performance');
  const allDone = SECTIONS.every(s => visitedSections.has(s));
  if (allDone) {
    if (!certificateShown) {
      certificateShown = true;
      safeSet('powerbiCertificateShown', 'true');
    }
    showCertificate();
  } else {
    const remaining = SECTIONS.filter(s => !visitedSections.has(s));
    if (confirm('لسه فيه ' + remaining.length + ' درس لم تكتملها. هل تريد الانتقال لأول درس لم تكمله؟')) {
      goTo(remaining[0]);
    }
  }
}

// نظام الاختبارات التفاعلي
let quizData = null;
let currentQuiz = null;
let userAnswers = {};
let quizScore = 0;
let totalQuizPoints = 0;

async function loadQuizData() {
  try {
    const response = await fetch('./data/quizzes.json');
    const data = await response.json();
    quizData = data.quizzes;
    console.log('Quiz data loaded:', quizData.length, 'questions');
  } catch (error) {
    console.error('Failed to load quiz data:', error);
    quizData = [];
  }
}

function startQuiz(sectionId) {
  if (!quizData) {
    alert('جاري تحميل بيانات الاختبار... يرجى الانتظار قليلاً.');
    loadQuizData().then(() => startQuiz(sectionId));
    return;
  }

  const sectionQuizzes = quizData.filter(q => q.section === sectionId);
  if (sectionQuizzes.length === 0) {
    alert(`لا يوجد اختبارات متاحة للقسم: ${sectionId}`);
    return;
  }

  currentQuiz = {
    section: sectionId,
    questions: sectionQuizzes,
    currentQuestionIndex: 0
  };

  userAnswers = {};
  quizScore = 0;
  totalQuizPoints = sectionQuizzes.reduce((sum, q) => sum + q.points, 0);

  showQuizModal();
  displayQuestion(currentQuiz.currentQuestionIndex);
}

function showQuizModal() {
  const modal = document.createElement('div');
  modal.id = 'quizModal';
  modal.style.cssText = `
    position: fixed; top:0; left:0; width:100%; height:100%;
    background: rgba(13,13,13,0.95); z-index: 2001;
    display: flex; align-items: center; justify-content: center;
    padding: 2rem;
  `;

  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
    background: var(--bg2); border: 3px solid #1D9E75;
    border-radius: 20px; padding: 2rem; max-width: 800px; width: 90%;
    max-height: 90vh; overflow-y: auto;
  `;

  const header = document.createElement('div');
  header.style.cssText = 'display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;';

  const title = document.createElement('h2');
  title.textContent = '📝 اختبار الدرس';
  title.style.cssText = 'color: #1D9E75; margin: 0; font-size: 1.5rem;';

  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✕';
  closeBtn.style.cssText = 'background: none; border: none; color: var(--text2); font-size: 1.5rem; cursor: pointer;';
  closeBtn.onclick = () => document.getElementById('quizModal')?.remove();

  header.appendChild(title);
  header.appendChild(closeBtn);

  const quizContainer = document.createElement('div');
  quizContainer.id = 'quizContainer';
  quizContainer.style.cssText = 'margin-bottom: 1.5rem;';

  const progress = document.createElement('div');
  progress.id = 'quizProgress';
  progress.style.cssText = 'font-size: 0.9rem; color: var(--text3); margin-bottom: 1rem;';

  const buttons = document.createElement('div');
  buttons.style.cssText = 'display: flex; gap: 1rem; justify-content: flex-end;';

  const prevBtn = document.createElement('button');
  prevBtn.textContent = '← السابق';
  prevBtn.className = 'btn-prev';
  prevBtn.onclick = () => {
    if (currentQuiz.currentQuestionIndex > 0) {
      currentQuiz.currentQuestionIndex--;
      displayQuestion(currentQuiz.currentQuestionIndex);
    }
  };

  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'التالي →';
  nextBtn.className = 'btn-next';
  nextBtn.onclick = () => {
    saveAnswer();
    if (currentQuiz.currentQuestionIndex < currentQuiz.questions.length - 1) {
      currentQuiz.currentQuestionIndex++;
      displayQuestion(currentQuiz.currentQuestionIndex);
    } else {
      finishQuiz();
    }
  };

  buttons.appendChild(prevBtn);
  buttons.appendChild(nextBtn);

  modalContent.appendChild(header);
  modalContent.appendChild(progress);
  modalContent.appendChild(quizContainer);
  modalContent.appendChild(buttons);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // تحديث الزر التالي بناءً على السؤال الأخير
  updateNextButton();
}

function displayQuestion(index) {
  const quizContainer = document.getElementById('quizContainer');
  const progress = document.getElementById('quizProgress');
  const question = currentQuiz.questions[index];

  if (!quizContainer || !progress || !question) return;

  progress.textContent = `السؤال ${index + 1} من ${currentQuiz.questions.length}`;

  let html = `
    <div class="lesson-card" style="margin-bottom: 1rem;">
      <h3>${question.question}</h3>
      <div style="margin-top: 1rem;">
  `;

  if (question.type === 'multiple_choice') {
    question.options.forEach((option, i) => {
      const isChecked = userAnswers[index] === i.toString();
      html += `
        <div style="margin-bottom: 0.5rem;">
          <input type="radio" id="option${i}" name="quizAnswer" value="${i}" ${isChecked ? 'checked' : ''}>
          <label for="option${i}" style="margin-right: 0.5rem;">${option}</label>
        </div>
      `;
    });
  } else if (question.type === 'true_false') {
    question.options.forEach((option, i) => {
      const isChecked = userAnswers[index] === i.toString();
      html += `
        <div style="margin-bottom: 0.5rem;">
          <input type="radio" id="option${i}" name="quizAnswer" value="${i}" ${isChecked ? 'checked' : ''}>
          <label for="option${i}" style="margin-right: 0.5rem;">${option}</label>
        </div>
      `;
    });
  } else if (question.type === 'code') {
    html += `
      <div style="background: var(--bg4); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
        <pre style="margin: 0; white-space: pre-wrap; font-family: 'Courier New', monospace; font-size: 0.9rem; color: var(--text2);">${question.codeTemplate}</pre>
      </div>
      <div>
        <label for="codeAnswer" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">أدخل الإجابة:</label>
        <textarea id="codeAnswer" style="width: 100%; height: 100px; background: var(--bg4); border: 1px solid var(--border); border-radius: 6px; padding: 0.75rem; color: var(--text); font-family: 'Courier New', monospace; font-size: 0.9rem;" placeholder="اكتب الإجابة هنا...">${userAnswers[index] || ''}</textarea>
      </div>
    `;
  }

  html += `</div></div>`;
  quizContainer.innerHTML = html;
  updateNextButton();
}

function saveAnswer() {
  const question = currentQuiz.questions[currentQuiz.currentQuestionIndex];
  let answer = '';

  if (question.type === 'multiple_choice' || question.type === 'true_false') {
    const selected = document.querySelector('input[name="quizAnswer"]:checked');
    if (selected) answer = selected.value;
  } else if (question.type === 'code') {
    answer = document.getElementById('codeAnswer')?.value || '';
  }

  userAnswers[currentQuiz.currentQuestionIndex] = answer;
}

function updateNextButton() {
  const nextBtn = document.querySelector('#quizModal .btn-next');
  if (!nextBtn) return;

  if (currentQuiz.currentQuestionIndex === currentQuiz.questions.length - 1) {
    nextBtn.textContent = 'إنهاء الاختبار →';
  } else {
    nextBtn.textContent = 'التالي →';
  }
}

function finishQuiz() {
  saveAnswer();

  // حساب النقاط
  quizScore = 0;
  let resultsHTML = '<div style="text-align: center; padding: 2rem;">';
  resultsHTML += `<h3 style="color: #1D9E75; margin-bottom: 1rem;">نتيجة الاختبار</h3>`;
  resultsHTML += `<p style="font-size: 1.2rem; margin-bottom: 1rem;">لقد أجبت على ${Object.keys(userAnswers).length} من ${currentQuiz.questions.length} سؤال</p>`;

  currentQuiz.questions.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === question.correctAnswer.toString();

    if (isCorrect) {
      quizScore += question.points;
    }

    resultsHTML += `
      <div class="lesson-card" style="margin-bottom: 1rem; text-align: right;">
        <h4>سؤال ${index + 1}: ${question.points} نقطة</h4>
        <p><strong>${question.question}</strong></p>
        <p style="color: ${isCorrect ? '#1D9E75' : '#D85A30'};">
          ${isCorrect ? '✓ إجابة صحيحة' : '✗ إجابة خاطئة'}
        </p>
        <p style="color: var(--text3); font-size: 0.9rem;">${question.explanation}</p>
      </div>
    `;
  });

  const percentage = Math.round((quizScore / totalQuizPoints) * 100);
  resultsHTML += `<div style="background: var(--bg3); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0;">
    <h4 style="color: var(--gold); margin-bottom: 0.5rem;">النتيجة النهائية</h4>
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <div style="font-size: 2rem; font-weight: 800; color: ${percentage >= 70 ? '#1D9E75' : percentage >= 50 ? '#F5B800' : '#D85A30'};">${percentage}%</div>
        <div style="color: var(--text3); font-size: 0.9rem;">${quizScore} من ${totalQuizPoints} نقطة</div>
      </div>
      <div style="font-size: 1rem; color: var(--text2);">
        ${percentage >= 70 ? '🎉 ممتاز! لقد تجاوزت الاختبار بنجاح!' :
          percentage >= 50 ? '👍 جيد! يمكنك تحسين نتائجك أكثر.' :
          '📚 تحتاج إلى مراجعة الدرس مرة أخرى.'}
      </div>
    </div>
  </div>`;

  resultsHTML += `<button onclick="document.getElementById('quizModal').remove();" class="btn-next" style="margin-top: 1rem;">إغلاق</button>`;
  resultsHTML += '</div>';

  document.getElementById('quizContainer').innerHTML = resultsHTML;
  document.getElementById('quizProgress').textContent = 'تم الانتهاء من الاختبار';
  document.querySelector('#quizModal .btn-prev').style.display = 'none';
  document.querySelector('#quizModal .btn-next').style.display = 'none';

  // حفظ النتيجة في localStorage
  saveQuizResult(currentQuiz.section, percentage, quizScore, totalQuizPoints);
}

function saveQuizResult(sectionId, percentage, score, total) {
  const results = JSON.parse(localStorage.getItem('powerbiQuizResults') || '{}');
  results[sectionId] = { percentage, score, total, date: new Date().toISOString() };
  localStorage.setItem('powerbiQuizResults', JSON.stringify(results));

  // تحديث تقدم المستخدم
  markAsDone(sectionId);
}

// تحديث زر الاختبار ليشمل النتيجة إذا تم الاختبار من قبل
function updateQuizButtons() {
  document.querySelectorAll('[onclick^="startQuiz"]').forEach(btn => {
    const match = btn.getAttribute('onclick').match(/startQuiz\('([^']+)'\)/);
    if (match) {
      const sectionId = match[1];
      const results = JSON.parse(localStorage.getItem('powerbiQuizResults') || '{}');
      const result = results[sectionId];

      if (result) {
        const percentage = result.percentage;
        let badge = '';
        if (percentage >= 90) badge = '🏅 ';
        else if (percentage >= 70) badge = '🥈 ';
        else if (percentage >= 50) badge = '🥉 ';

        btn.textContent = `${badge}${result.score}/${result.total} - ${percentage}%`;
        btn.style.background = percentage >= 70 ? '#1D9E75' : percentage >= 50 ? '#F5B800' : '#D85A30';
      }
    }
  });
}

// ── Search ──
let searchIndex = [];

function buildSearchIndex() {
  searchIndex = [];
  document.querySelectorAll('.section-page').forEach(page => {
    const id = page.id.replace('sec-', '');
    const title = (page.querySelector('h2') || {}).textContent || '';
    const intro = (page.querySelector('.section-intro') || {}).textContent || '';
    const cards = Array.from(page.querySelectorAll('.lesson-card h3')).map(h => h.textContent).join(' ');
    searchIndex.push({ id, title, preview: (intro + ' ' + cards).trim() });
  });
}

function initSearch() {
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  if (!input || !results) return;

  input.addEventListener('input', function() {
    const q = this.value.trim().toLowerCase();
    results.innerHTML = '';
    if (!q) { results.style.display = 'none'; return; }

    const hits = searchIndex.filter(item =>
      item.title.toLowerCase().includes(q) || item.preview.toLowerCase().includes(q)
    ).slice(0, 8);

    if (hits.length === 0) {
      results.style.display = 'none';
      return;
    }

    hits.forEach(item => {
      const div = document.createElement('div');
      div.className = 'search-result-item';
      div.textContent = item.title;
      div.onclick = () => {
        goTo(item.id);
        input.value = '';
        results.style.display = 'none';
      };
      results.appendChild(div);
    });
    results.style.display = 'block';
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('#searchBox')) results.style.display = 'none';
  });
}

// ── Lightbox ──
function openLightbox(img) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox-caption').textContent = img.alt || '';
  lb.classList.add('open');
  document.addEventListener('keydown', lightboxKeyHandler);
}

function closeLightbox(e) {
  if (e && e.target === document.getElementById('lightbox-img')) return;
  document.getElementById('lightbox').classList.remove('open');
  document.removeEventListener('keydown', lightboxKeyHandler);
}

function lightboxKeyHandler(e) {
  if (e.key === 'Escape') closeLightbox();
}

function initLightbox() {
  document.querySelectorAll('.lesson-img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img));
  });
  // also support annotated images
  document.querySelectorAll('.annotated-img-wrapper img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(img));
  });
}

// ── Copy buttons on code blocks ──
function initCopyButtons() {
  document.querySelectorAll('.code-block').forEach(block => {
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'نسخ';
    btn.onclick = () => {
      navigator.clipboard.writeText(block.innerText.replace('نسخ', '').trim()).then(() => {
        btn.textContent = 'تم ✓';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = 'نسخ'; btn.classList.remove('copied'); }, 2000);
      });
    };
    block.style.position = 'relative';
    block.appendChild(btn);
  });
}

window.onload = function() {
  loadProgress();
  loadQuizData().then(() => {
    console.log('Quiz data loaded successfully');
    updateQuizButtons();
  });

  buildSearchIndex();
  initSearch();
  initCopyButtons();
  initLightbox();

  // FIX: Hero ظاهر في البداية، مفيش section active — المستخدم يبدأ منه
  document.querySelectorAll('.section-page').forEach(p => p.classList.remove('active'));
  const hero = document.getElementById('heroSection');
  if (hero) hero.style.display = 'block';
  document.querySelector('[data-section="intro"]').classList.add('active');
};
