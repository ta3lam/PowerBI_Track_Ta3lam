// Quiz, certificate, lightbox, and copy-button functions

// Extend I18N with quiz-specific strings
const I18N_QUIZ = {
  ar: {
    loadingMsg: "لحظة، الأسئلة بتتحمل...",
    noQuestionsMsg: "مفيش أسئلة لهذا الدرس دلوقتي.",
    quizTitle: "📝 اختبر نفسك",
    prevBtn: "← اللي فات",
    nextBtn: "الجاي →",
    finishBtn: "خلّص الاختبار →",
    questionsLabel: "سؤال",
    from: "من",
    questionResults: "نتيجتك 🎯",
    correctMsg: "✓ صح!",
    incorrectMsg: "✗ غلط",
    percentage: "%",
    points: "نقطة",
    excellent: "🎉 عظيم! عدّيت الاختبار!",
    good: "👍 كويس! بس ممكن تتحسن أكتر.",
    poor: "📚 ارجع راجع الدرس تاني وحاول.",
    finishQuizMsg: "خلّصت الاختبار!",
    closeBtn: "تمام، إغلاق",
    codeAnswerLabel: "اكتب إجابتك:",
    codeError: "في مشكلة! تأكد من النت وحاول تاني.",
    quizNote: "Questions are currently in Arabic.",
  },
  en: {
    loadingMsg: "Loading questions...",
    noQuestionsMsg: "No questions available for this lesson yet.",
    quizTitle: "📝 Quiz",
    prevBtn: "← Previous",
    nextBtn: "Next →",
    finishBtn: "Finish →",
    questionsLabel: "Question",
    from: "of",
    questionResults: "Results 🎯",
    correctMsg: "✓ Correct!",
    incorrectMsg: "✗ Wrong",
    percentage: "%",
    points: "point",
    excellent: "🎉 Excellent! You passed!",
    good: "👍 Good! You can do better.",
    poor: "📚 Review the lesson and try again.",
    finishQuizMsg: "Quiz finished!",
    closeBtn: "Close",
    codeAnswerLabel: "Your answer:",
    codeError: "Error! Please try again.",
    quizNote: "Questions are currently in Arabic.",
  }
};

const qt = (key) => { const lang = document.documentElement.lang === "en" ? "en" : "ar"; return I18N_QUIZ[lang][key] || I18N_QUIZ.ar[key]; };

// ── Quiz ──────────────────────────────────────────────
window.quizData = null;
let currentQuiz = null;
let userAnswers = {};
let quizScore = 0;
let totalQuizPoints = 0;

async function loadQuizData() {
  try {
    const response = await fetch('./data/quizzes.json');
    const data = await response.json();
    window.quizData = data.quizzes;
    console.log('Quiz data loaded:', window.quizData.length, 'questions');
  } catch (error) {
    console.error('Failed to load quiz data:', error);
    window.quizData = [];
  }
}

window.startQuiz = function(sectionId) {
  if (!window.quizData) {
    alert(qt("loadingMsg"));
    loadQuizData().then(() => window.startQuiz(sectionId));
    return;
  }
  const sectionQuizzes = window.quizData.filter(q => q.section === sectionId);
  if (sectionQuizzes.length === 0) {
    alert(qt("noQuestionsMsg"));
    return;
  }
  currentQuiz = { section: sectionId, questions: sectionQuizzes, currentQuestionIndex: 0 };
  userAnswers = {};
  quizScore = 0;
  totalQuizPoints = sectionQuizzes.reduce((sum, q) => sum + q.points, 0);
  showQuizModal();
  displayQuestion(currentQuiz.currentQuestionIndex);
};

function showQuizModal() {
  document.getElementById('quizModal')?.remove();
  const modal = document.createElement('div');
  modal.id = 'quizModal';
  modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(10,16,23,0.96);z-index:2001;display:flex;align-items:center;justify-content:center;padding:2rem;';

  const isArabic = !window.STATE || window.STATE.lang === "ar";
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `background:#131F2B;border:2px solid #F5A623;border-radius:16px;padding:2rem;max-width:760px;width:90%;max-height:90vh;overflow-y:auto;direction:${isArabic ? 'rtl' : 'ltr'};`;

  const header = document.createElement('div');
  header.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;';

  const title = document.createElement('h2');
  title.textContent = qt("quizTitle");
  title.style.cssText = 'color:#F5A623;margin:0;font-size:1.4rem;font-family:Cairo,sans-serif;';

  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✕';
  closeBtn.style.cssText = 'background:none;border:none;color:#6A7685;font-size:1.5rem;cursor:pointer;';
  closeBtn.onclick = () => document.getElementById('quizModal')?.remove();

  header.appendChild(title);
  header.appendChild(closeBtn);

  const quizContainer = document.createElement('div');
  quizContainer.id = 'quizContainer';
  quizContainer.style.cssText = 'margin-bottom:1.5rem;';

  const progress = document.createElement('div');
  progress.id = 'quizProgress';
  progress.style.cssText = 'font-size:0.9rem;color:#6A7685;margin-bottom:1rem;font-family:Cairo,sans-serif;';

  const buttons = document.createElement('div');
  buttons.style.cssText = `display:flex;gap:1rem;justify-content:${isArabic ? 'flex-end' : 'flex-start'};`;

  const prevBtn = document.createElement('button');
  prevBtn.textContent = qt("prevBtn");
  prevBtn.className = 'btn-prev';
  prevBtn.onclick = () => {
    if (currentQuiz.currentQuestionIndex > 0) {
      currentQuiz.currentQuestionIndex--;
      displayQuestion(currentQuiz.currentQuestionIndex);
    }
  };

  const nextBtn = document.createElement('button');
  nextBtn.textContent = qt("nextBtn");
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
  updateNextButton();
}

function displayQuestion(index) {
  const quizContainer = document.getElementById('quizContainer');
  const progress = document.getElementById('quizProgress');
  const question = currentQuiz.questions[index];
  if (!quizContainer || !progress || !question) return;

  progress.textContent = `${qt("questionsLabel")} ${index + 1} ${qt("from")} ${currentQuiz.questions.length}`;

  let html = `<div style="background:#1A2836;border-radius:10px;padding:1.25rem;margin-bottom:1rem;"><h3 style="font-size:1rem;margin:0 0 1rem;color:#ECEFF3;font-family:Cairo,sans-serif;">${question.question}</h3><div>`;

  if (question.type === 'multiple_choice' || question.type === 'true_false') {
    question.options.forEach((option, i) => {
      const isChecked = userAnswers[index] === i.toString();
      html += `<div style="margin-bottom:0.6rem;"><label style="display:flex;align-items:center;gap:0.6rem;cursor:pointer;color:#A8B2BF;font-family:Cairo,sans-serif;font-size:0.95rem;"><input type="radio" name="quizAnswer" value="${i}" ${isChecked ? 'checked' : ''} style="accent-color:#F5A623;"> ${option}</label></div>`;
    });
  } else if (question.type === 'code') {
    html += `<div style="background:#0A1017;padding:1rem;border-radius:8px;margin-bottom:1rem;"><pre style="margin:0;white-space:pre-wrap;font-family:'JetBrains Mono',monospace;font-size:0.88rem;color:#A8B2BF;">${question.codeTemplate || ''}</pre></div>
      <label style="display:block;margin-bottom:0.5rem;color:#A8B2BF;font-family:Cairo,sans-serif;">${qt("codeAnswerLabel")}</label>
      <textarea id="codeAnswer" style="width:100%;height:100px;background:#0A1017;border:1px solid #1E2D3D;border-radius:6px;padding:0.75rem;color:#ECEFF3;font-family:'JetBrains Mono',monospace;font-size:0.88rem;">${userAnswers[index] || ''}</textarea>`;
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
  nextBtn.textContent = currentQuiz.currentQuestionIndex === currentQuiz.questions.length - 1 ? qt("finishBtn") : qt("nextBtn");
}

function finishQuiz() {
  saveAnswer();
  quizScore = 0;
  let resultsHTML = '<div style="text-align:center;padding:1rem;">';
  resultsHTML += `<h3 style="color:#F5A623;margin-bottom:1rem;font-family:Cairo,sans-serif;">${qt("questionResults")}</h3>`;

  currentQuiz.questions.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === question.correctAnswer.toString();
    if (isCorrect) quizScore += question.points;
    resultsHTML += `<div style="background:#1A2836;border-radius:10px;padding:1rem;margin-bottom:0.75rem;text-align:${window.STATE?.lang === "en" ? "left" : "right"};">
      <p style="font-weight:600;font-family:Cairo,sans-serif;color:#ECEFF3;margin:0 0 0.4rem;">${question.question}</p>
      <p style="color:${isCorrect ? '#3FD37A' : '#E85D4A'};margin:0 0 0.3rem;font-family:Cairo,sans-serif;">${isCorrect ? qt("correctMsg") : qt("incorrectMsg")}</p>
      <p style="color:#6A7685;font-size:0.88rem;margin:0;font-family:Cairo,sans-serif;">${question.explanation}</p>
    </div>`;
  });

  const percentage = Math.round((quizScore / totalQuizPoints) * 100);
  resultsHTML += `<div style="background:#1A2836;border-radius:12px;padding:1.25rem;margin:1rem 0;">
    <div style="font-size:2.5rem;font-weight:800;color:${percentage >= 70 ? '#3FD37A' : percentage >= 50 ? '#F5A623' : '#E85D4A'};">${percentage}%</div>
    <div style="color:#6A7685;font-family:Cairo,sans-serif;">${quizScore}/${totalQuizPoints}</div>
    <div style="margin-top:0.5rem;color:#A8B2BF;font-family:Cairo,sans-serif;">${percentage >= 70 ? qt("excellent") : percentage >= 50 ? qt("good") : qt("poor")}</div>
  </div>`;
  resultsHTML += `<button onclick="document.getElementById('quizModal').remove();" class="btn-next" style="margin-top:0.5rem;">${qt("closeBtn")}</button>`;
  resultsHTML += '</div>';

  document.getElementById('quizContainer').innerHTML = resultsHTML;
  document.getElementById('quizProgress').textContent = qt("finishQuizMsg");
  document.querySelector('#quizModal .btn-prev').style.display = 'none';
  document.querySelector('#quizModal .btn-next').style.display = 'none';

  saveQuizResult(currentQuiz.section, percentage, quizScore, totalQuizPoints);
}

function saveQuizResult(sectionId, percentage, score, total) {
  const results = JSON.parse(localStorage.getItem('powerbiQuizResults') || '{}');
  results[sectionId] = { percentage, score, total, date: new Date().toISOString() };
  localStorage.setItem('powerbiQuizResults', JSON.stringify(results));
}

window.updateQuizButtons = function() {
  document.querySelectorAll('[onclick^="startQuiz"]').forEach(btn => {
    const match = btn.getAttribute('onclick').match(/startQuiz\('([^']+)'\)/);
    if (match) {
      const sectionId = match[1];
      const results = JSON.parse(localStorage.getItem('powerbiQuizResults') || '{}');
      const result = results[sectionId];
      if (result) {
        const pct = result.percentage;
        const badge = pct >= 90 ? '🏅 ' : pct >= 70 ? '🥈 ' : pct >= 50 ? '🥉 ' : '';
        btn.textContent = `${badge}${result.score}/${result.total} - ${pct}%`;
        btn.style.background = pct >= 70 ? '#1D9E75' : pct >= 50 ? '#F5A623' : '#D85A30';
      }
    }
  });
};

// ── Certificate ──────────────────────────────────────────────
window.showCertificate = function() {
  const modal = document.getElementById('certificateModal');
  if (!modal) return;
  const isEnglish = window.STATE?.lang === "en";
  document.getElementById('certDate').textContent = new Date().toLocaleDateString(isEnglish ? 'en-GB' : 'ar-EG', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
  modal.style.display = 'flex';
};

window.closeModal = function() {
  document.getElementById('certificateModal').style.display = 'none';
};

window.downloadCertificate = function() {
  try {
    const { jsPDF } = window.jspdf;
    const isEnglish = window.STATE?.lang === "en";
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const W = 297, H = 210;
    doc.setFillColor(10, 16, 23); doc.rect(0, 0, W, H, 'F');
    doc.setDrawColor(245, 166, 35); doc.setLineWidth(2); doc.rect(10, 10, W-20, H-20);
    doc.setLineWidth(0.5); doc.rect(14, 14, W-28, H-28);
    doc.setTextColor(245, 166, 35); doc.setFontSize(24); doc.text('* * *', W/2, 32, {align:'center'});
    doc.setFontSize(12); doc.setTextColor(180,180,180); doc.text('CERTIFICATE OF COMPLETION', W/2, 47, {align:'center'});
    doc.setDrawColor(245,166,35); doc.setLineWidth(0.8); doc.line(60,53,W-60,53);
    doc.setFontSize(10); doc.setTextColor(140,140,140);
    const certText = isEnglish ? 'This certifies that the following student has completed the' : 'This certifies successful completion of the course';
    doc.text(certText, W/2, 65, {align:'center'});
    doc.setFontSize(22); doc.setTextColor(245,166,35);
    const courseTitle = isEnglish ? 'Power BI — From Zero to Pro' : 'Power BI - From Zero to Pro';
    doc.text(courseTitle, W/2, 82, {align:'center'});
    doc.setFontSize(9); doc.setTextColor(110,110,110);
    doc.text('Data Modeling  |  DAX Advanced  |  Time Intelligence  |  Visuals  |  Performance  |  Publishing', W/2, 94, {align:'center'});
    doc.setDrawColor(50,50,50); doc.setLineWidth(0.3); doc.line(60,101,W-60,101);
    const dateStr = new Date().toLocaleDateString(isEnglish ? 'en-GB' : 'ar-EG', {year:'numeric', month:'long', day:'numeric'});
    const dateLabel = isEnglish ? 'Date: ' : 'التاريخ: ';
    doc.setFontSize(10); doc.setTextColor(140,140,140); doc.text(dateLabel + dateStr, W/2, 113, {align:'center'});
    doc.setDrawColor(245,166,35); doc.setLineWidth(0.5); doc.line(W/2-40,145,W/2+40,145);
    doc.setFontSize(11); doc.setTextColor(245,166,35); doc.text('Ta3laM Platform', W/2, 152, {align:'center'});
    doc.setFontSize(8); doc.setTextColor(90,90,90);
    const sigLabel = isEnglish ? 'Authorized Signature' : 'التوقيع';
    doc.text(sigLabel, W/2, 158, {align:'center'});
    const studentName = (document.getElementById('certNameInput') && document.getElementById('certNameInput').value.trim()) || '';
    if (studentName) {
      doc.setFontSize(16); doc.setTextColor(240,240,240);
      doc.text(studentName, W/2, 127, {align:'center'});
    }
    doc.setFontSize(8); doc.setTextColor(70,70,70); doc.text('50 Lessons  |  8 Chapters  |  Full DAX + Performance + Publishing', W/2, 173, {align:'center'});
    doc.save('PowerBI_Certificate_Ta3laM.pdf');
    window.closeModal();
  } catch(e) {
    console.error(e);
    alert(qt("codeError"));
  }
};

// ── Lightbox ──────────────────────────────────────────────
function lightboxKeyHandler(e) {
  if (e.key === 'Escape') closeLightboxInternal();
}

function closeLightboxInternal(e) {
  if (e && e.target === document.getElementById('lightbox-img')) return;
  document.getElementById('lightbox').classList.remove('open');
  document.removeEventListener('keydown', lightboxKeyHandler);
}

window.closeLightbox = closeLightboxInternal;

window.openLightbox = function(img) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox-caption').textContent = img.alt || '';
  lb.classList.add('open');
  document.addEventListener('keydown', lightboxKeyHandler);
};

window.initLightbox = function() {
  document.querySelectorAll('.lesson-img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.onclick = null;
    img.addEventListener('click', () => window.openLightbox(img));
  });
  document.querySelectorAll('.annotated-img-wrapper img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => window.openLightbox(img));
  });
};

// ── Copy buttons ──────────────────────────────────────────────
window.initCopyButtons = function() {
  document.querySelectorAll('.code-block').forEach(block => {
    if (block.querySelector('.copy-btn')) return; // already has one
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'نسخ 📋';
    btn.onclick = () => {
      navigator.clipboard.writeText(block.innerText.replace('نسخ 📋', '').trim()).then(() => {
        btn.textContent = 'اتنسخ ✓';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = 'نسخ 📋'; btn.classList.remove('copied'); }, 2000);
      });
    };
    block.style.position = 'relative';
    block.appendChild(btn);
  });
};

// ── Init ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadQuizData().then(() => {
    if (typeof window.updateQuizButtons === 'function') window.updateQuizButtons();
  });
});
