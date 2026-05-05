// Quiz, certificate, lightbox, and copy-button functions

const I18N_QUIZ = {
  ar: {
    loadingMsg: "جارٍ تحميل الأسئلة...",
    noQuestionsMsg: "لا توجد أسئلة لهذا الدرس حتى الآن.",
    quizTitle: "📝 اختبر نفسك",
    prevBtn: "← السابق",
    nextBtn: "التالي →",
    finishBtn: "إنهاء الاختبار →",
    questionsLabel: "سؤال",
    from: "من",
    questionResults: "نتيجتك 🎯",
    correctMsg: "✓ صح!",
    incorrectMsg: "✗ غلط",
    percentage: "%",
    points: "نقطة",
    excellent: "🎉 ممتاز! لقد اجتزت الاختبار!",
    good: "👍 جيد! يمكنك تحسين نتيجتك.",
    poor: "📚 راجع الدرس مرة أخرى وحاول.",
    finishQuizMsg: "أكملت الاختبار!",
    closeBtn: "تمام، إغلاق",
    codeAnswerLabel: "اكتب إجابتك:",
    codeError: "حدث خطأ! تأكد من الاتصال بالإنترنت وحاول مجدداً.",
    selectAnswerMsg: "الرجاء الإجابة على السؤال أولاً",
    provideAnswerMsg: "الرجاء كتابة إجابتك",
    continueBtn: "متابعة الدرس التالي ✓",
    retryBtn: "إعادة المحاولة",
    passRequired: "يجب أن تحصل على {percent}% على الأقل للنجاح",
    quizNote: "",
    certTitle: "مبروك يا بطل! 🎉",
    certLead: "أنهيت الدروس المتاحة بنجاح",
    certCourseTitle: "Power BI — من الصفر للاحتراف",
    certNamePlaceholder: "اكتب اسمك هنا",
    certDateLabel: "التاريخ:",
    certCloseBtn: "إغلاق",
    certDownloadBtn: "حمّل الشهادة",
    certPdfIntro: "This certifies successful completion of the available course lessons",
    certPdfCourseTitle: "Power BI - From Zero to Pro",
    certPdfDateLabel: "Date: ",
    certPdfSignature: "Authorized Signature",
    certPdfFooter: "available lessons completed",
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
    selectAnswerMsg: "Please answer the question first",
    provideAnswerMsg: "Please provide an answer",
    continueBtn: "Continue to Next Lesson ✓",
    retryBtn: "Retry",
    passRequired: "You need at least {percent}% to pass",
    quizNote: "",
    certTitle: "Congratulations! 🎉",
    certLead: "You completed the available course lessons",
    certCourseTitle: "Power BI — From Zero to Pro",
    certNamePlaceholder: "Enter your name",
    certDateLabel: "Date:",
    certCloseBtn: "Close",
    certDownloadBtn: "Download certificate",
    certPdfIntro: "This certifies that the following student has completed the available course lessons",
    certPdfCourseTitle: "Power BI - From Zero to Pro",
    certPdfDateLabel: "Date: ",
    certPdfSignature: "Authorized Signature",
    certPdfFooter: "available lessons completed",
  }
};

const qt = (key) => {
  const lang = document.documentElement.lang === "en" ? "en" : "ar";
  return I18N_QUIZ[lang][key] || I18N_QUIZ.ar[key];
};

const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#039;",
}[char]));

const currentLang = () => document.documentElement.lang === "en" ? "en" : "ar";
const isEnglish = () => currentLang() === "en";
const getCourseStats = () => window.getCourseStats ? window.getCourseStats() : {
  totalLessons: window.ALL_LESSONS ? window.ALL_LESSONS.length : 0,
  completableLessons: window.ALL_LESSONS ? window.ALL_LESSONS.length : 0,
  completedLessons: 0,
  stubLessons: 0,
  chapterCount: window.CURRICULUM ? window.CURRICULUM.length : 0,
};

window.quizData = null;
let currentQuiz = null;
let userAnswers = {};
let quizScore = 0;
let totalQuizPoints = 0;
let quizCompletionCallback = null;
const REQUIRED_PASS_PERCENTAGE = 80;

async function loadQuizData() {
  try {
    const response = await fetch("./data/quizzes.json?v=" + Date.now(), { cache: "no-store" });
    const data = await response.json();
    window.quizData = data.quizzes;
    console.log("Quiz data loaded:", window.quizData.length, "questions");
    const withEn = window.quizData.filter(q => q.en_question).length;
    console.log("Questions with English translation:", withEn);
  } catch (error) {
    console.error("Failed to load quiz data:", error);
    window.quizData = [];
  }
}

window.startQuiz = function(sectionId, callback = null) {
  if (!window.quizData) {
    alert(qt("loadingMsg"));
    loadQuizData().then(() => window.startQuiz(sectionId, callback));
    return;
  }

  const sectionQuizzes = window.quizData.filter((question) => question.section === sectionId);
  if (sectionQuizzes.length === 0) {
    alert(qt("noQuestionsMsg"));
    return;
  }

  quizCompletionCallback = callback;
  currentQuiz = { section: sectionId, questions: sectionQuizzes, currentQuestionIndex: 0 };
  userAnswers = {};
  quizScore = 0;
  totalQuizPoints = sectionQuizzes.reduce((sum, question) => sum + question.points, 0);
  showQuizModal();
  displayQuestion(currentQuiz.currentQuestionIndex);
};

function showQuizModal() {
  document.getElementById("quizModal")?.remove();
  const modal = document.createElement("div");
  modal.id = "quizModal";
  modal.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(10,16,23,0.96);z-index:2001;display:flex;align-items:center;justify-content:center;padding:2rem;";

  const isArabic = currentLang() === "ar";
  const modalContent = document.createElement("div");
  modalContent.style.cssText = `background:#131F2B;border:2px solid #F5A623;border-radius:16px;padding:2rem;max-width:760px;width:90%;max-height:90vh;overflow-y:auto;direction:${isArabic ? "rtl" : "ltr"};`;

  const header = document.createElement("div");
  header.style.cssText = "display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;";

  const title = document.createElement("h2");
  title.textContent = qt("quizTitle");
  title.style.cssText = "color:#F5A623;margin:0;font-size:1.4rem;font-family:Cairo,sans-serif;";

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "✕";
  closeBtn.style.cssText = "background:none;border:none;color:#6A7685;font-size:1.5rem;cursor:pointer;";
  closeBtn.onclick = () => document.getElementById("quizModal")?.remove();

  header.appendChild(title);
  header.appendChild(closeBtn);

  const quizContainer = document.createElement("div");
  quizContainer.id = "quizContainer";
  quizContainer.style.cssText = "margin-bottom:1.5rem;";

  const progress = document.createElement("div");
  progress.id = "quizProgress";
  progress.style.cssText = `font-size:0.9rem;color:#6A7685;margin-bottom:1rem;font-family:Cairo,sans-serif;text-align:${isArabic ? "right" : "left"};`;

  const buttons = document.createElement("div");
  buttons.style.cssText = `display:flex;gap:1rem;justify-content:${isArabic ? "flex-end" : "flex-start"};`;

  const prevBtn = document.createElement("button");
  prevBtn.textContent = qt("prevBtn");
  prevBtn.className = "btn-prev";
  prevBtn.onclick = () => {
    if (currentQuiz.currentQuestionIndex > 0) {
      currentQuiz.currentQuestionIndex--;
      displayQuestion(currentQuiz.currentQuestionIndex);
    }
  };

  const nextBtn = document.createElement("button");
  nextBtn.textContent = qt("nextBtn");
  nextBtn.className = "btn-next";
  nextBtn.onclick = () => {
    const question = currentQuiz.questions[currentQuiz.currentQuestionIndex];
    let answer = "";
    if (question.type === "multiple_choice" || question.type === "true_false") {
      const selected = document.querySelector('input[name="quizAnswer"]:checked');
      if (!selected) {
        alert(qt("selectAnswerMsg"));
        return;
      }
      answer = selected.value;
    } else if (question.type === "code") {
      const textarea = document.getElementById("codeAnswer");
      if (!textarea || !textarea.value.trim()) {
        alert(qt("provideAnswerMsg"));
        return;
      }
      answer = textarea.value;
    }

    userAnswers[currentQuiz.currentQuestionIndex] = answer;
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

  if (!isArabic && qt("quizNote")) {
    const note = document.createElement("p");
    note.textContent = qt("quizNote");
    note.style.cssText = "color:#6A7685;font-size:0.9rem;margin:0 0 1rem;font-family:Cairo,sans-serif;";
    modalContent.appendChild(note);
  }

  modalContent.appendChild(progress);
  modalContent.appendChild(quizContainer);
  modalContent.appendChild(buttons);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  updateNextButton();
}

function displayQuestion(index) {
  const quizContainer = document.getElementById("quizContainer");
  const progress = document.getElementById("quizProgress");
  const question = currentQuiz.questions[index];
  if (!quizContainer || !progress || !question) return;

  progress.textContent = `${qt("questionsLabel")} ${index + 1} ${qt("from")} ${currentQuiz.questions.length}`;

  const displayQuestion = isEnglish() && question.en_question ? question.en_question : question.question;
  const displayOptions = isEnglish() && question.en_options ? question.en_options : question.options;
  const displayCodeTemplate = isEnglish() && question.en_codeTemplate ? question.en_codeTemplate : question.codeTemplate;

  let html = `<div style="background:#1A2836;border-radius:10px;padding:1.25rem;margin-bottom:1rem;"><h3 dir="${isEnglish() ? 'ltr' : 'rtl'}" style="font-size:1rem;margin:0 0 1rem;color:#ECEFF3;font-family:Cairo,sans-serif;text-align:start;direction:${isEnglish() ? 'ltr' : 'rtl'};">${escapeHTML(displayQuestion)}</h3><div>`;

  if (question.type === "multiple_choice" || question.type === "true_false") {
    displayOptions.forEach((option, optionIndex) => {
      const isChecked = userAnswers[index] === optionIndex.toString();
      html += `<div style="margin-bottom:0.6rem;"><label style="display:flex;align-items:center;gap:0.6rem;cursor:pointer;color:#A8B2BF;font-family:Cairo,sans-serif;font-size:0.95rem;text-align:start;direction:${isEnglish() ? 'ltr' : 'rtl'};unicode-bidi:plaintext;"><input type="radio" name="quizAnswer" value="${optionIndex}" ${isChecked ? "checked" : ""} style="accent-color:#F5A623;"><bdi style="flex:1;unicode-bidi:isolate;">${escapeHTML(option)}</bdi></label></div>`;
    });
  } else if (question.type === "code") {
    html += `<div style="background:#0A1017;padding:1rem;border-radius:8px;margin-bottom:1rem;"><pre style="margin:0;white-space:pre-wrap;font-family:'JetBrains Mono',monospace;font-size:0.88rem;color:#A8B2BF;text-align:start;direction:ltr;">${escapeHTML(displayCodeTemplate || "")}</pre></div>
      <label style="display:block;margin-bottom:0.5rem;color:#A8B2BF;font-family:Cairo,sans-serif;">${qt("codeAnswerLabel")}</label>
      <textarea id="codeAnswer" style="width:100%;height:100px;background:#0A1017;border:1px solid #1E2D3D;border-radius:6px;padding:0.75rem;color:#ECEFF3;font-family:'JetBrains Mono',monospace;font-size:0.88rem;">${escapeHTML(userAnswers[index] || "")}</textarea>`;
  }

  html += "</div></div>";
  quizContainer.innerHTML = html;
  updateNextButton();
}

function saveAnswer() {
  const question = currentQuiz.questions[currentQuiz.currentQuestionIndex];
  let answer = "";
  if (question.type === "multiple_choice" || question.type === "true_false") {
    const selected = document.querySelector('input[name="quizAnswer"]:checked');
    if (selected) answer = selected.value;
  } else if (question.type === "code") {
    answer = document.getElementById("codeAnswer")?.value || "";
  }
  userAnswers[currentQuiz.currentQuestionIndex] = answer;
}

function updateNextButton() {
  const nextBtn = document.querySelector("#quizModal .btn-next");
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

    // Use English translation if available and language is English
    const displayQuestion = isEnglish() && question.en_question ? question.en_question : question.question;
    const displayExplanation = isEnglish() && question.en_explanation ? question.en_explanation : question.explanation;

    resultsHTML += `<div dir="auto" style="background:#1A2836;border-radius:10px;padding:1rem;margin-bottom:0.75rem;text-align:start;">
      <p style="font-weight:600;font-family:Cairo,sans-serif;color:#ECEFF3;margin:0 0 0.4rem;">${escapeHTML(displayQuestion)}</p>
      <p style="color:${isCorrect ? "#3FD37A" : "#E85D4A"};margin:0 0 0.3rem;font-family:Cairo,sans-serif;">${isCorrect ? qt("correctMsg") : qt("incorrectMsg")}</p>
      <p style="color:#6A7685;font-size:0.88rem;margin:0;font-family:Cairo,sans-serif;">${escapeHTML(displayExplanation)}</p>
    </div>`;
  });

  const percentage = Math.round((quizScore / totalQuizPoints) * 100);
  const isPassed = percentage >= REQUIRED_PASS_PERCENTAGE;
  const resultColor = isPassed ? "#3FD37A" : percentage >= 50 ? "#F5A623" : "#E85D4A";
  const resultMessage = isPassed ? qt("excellent") : percentage >= 50 ? qt("good") : qt("poor");
  const buttonText = isPassed ? qt("continueBtn") : qt("retryBtn");

  resultsHTML += `<div style="background:#1A2836;border-radius:12px;padding:1.25rem;margin:1rem 0;">
    <div style="font-size:2.5rem;font-weight:800;color:${resultColor};">${percentage}%</div>
    <div style="color:#6A7685;font-family:Cairo,sans-serif;">${quizScore}/${totalQuizPoints}</div>
    <div style="margin-top:0.5rem;color:#A8B2BF;font-family:Cairo,sans-serif;">${resultMessage}</div>`;

  if (!isPassed) {
    const passRequired = REQUIRED_PASS_PERCENTAGE;
    const passMessage = qt("passRequired").replace("{percent}", passRequired);
    resultsHTML += `<div style="margin-top:1rem;padding:1rem;background:#E85D4A20;border-left:4px solid #E85D4A;border-radius:6px;color:#A8B2BF;font-family:Cairo,sans-serif;font-size:0.95rem;">${passMessage}</div>`;
  }

  resultsHTML += `</div>`;
  resultsHTML += `<button id="quizCloseBtn" style="background:${isPassed ? "#3FD37A" : "#F5A623"};border:none;color:#0A1017;padding:0.75rem 1.5rem;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;font-family:Cairo,sans-serif;margin-top:0.5rem;">${buttonText}</button>`;
  resultsHTML += "</div>";

  document.getElementById("quizContainer").innerHTML = resultsHTML;
  document.getElementById("quizProgress").textContent = qt("finishQuizMsg");
  document.querySelector("#quizModal .btn-prev").style.display = "none";
  document.querySelector("#quizModal .btn-next").style.display = "none";

  const closeBtn = document.getElementById("quizCloseBtn");
  if (closeBtn) {
    closeBtn.onclick = () => {
      if (isPassed) {
        document.getElementById("quizModal").remove();
        if (typeof quizCompletionCallback === "function") {
          quizCompletionCallback();
        }
      } else {
        // Retry quiz - reset answers and go back to first question
        currentQuiz.currentQuestionIndex = 0;
        userAnswers = {};
        displayQuestion(0);
        document.getElementById("quizProgress").textContent = `${qt("questionsLabel")} 1 ${qt("from")} ${currentQuiz.questions.length}`;
        document.querySelector("#quizModal .btn-prev").style.display = "";
        document.querySelector("#quizModal .btn-next").style.display = "";
        updateNextButton();
      }
    };
  }

  saveQuizResult(currentQuiz.section, percentage, quizScore, totalQuizPoints);
}

function saveQuizResult(sectionId, percentage, score, total) {
  const results = JSON.parse(localStorage.getItem("powerbiQuizResults") || "{}");
  results[sectionId] = { percentage, score, total, date: new Date().toISOString() };
  localStorage.setItem("powerbiQuizResults", JSON.stringify(results));
}

window.updateQuizButtons = function() {
  document.querySelectorAll('[onclick^="startQuiz"]').forEach((button) => {
    const match = button.getAttribute("onclick").match(/startQuiz\('([^']+)'\)/);
    if (!match) return;

    const sectionId = match[1];
    const results = JSON.parse(localStorage.getItem("powerbiQuizResults") || "{}");
    const result = results[sectionId];
    if (!result) return;

    const pct = result.percentage;
    const badge = pct >= 90 ? "🏅 " : pct >= 70 ? "🥈 " : pct >= 50 ? "🥉 " : "";
    button.textContent = `${badge}${result.score}/${result.total} - ${pct}%`;
    button.style.background = pct >= 70 ? "#1D9E75" : pct >= 50 ? "#F5A623" : "#D85A30";
  });
};

window.showCertificate = function() {
  const modal = document.getElementById("certificateModal");
  if (!modal) return;

  const card = document.getElementById("certificateCard");
  const heading = document.getElementById("certHeading");
  const subheading = document.getElementById("certSubheading");
  const nameInput = document.getElementById("certNameInput");
  const dateLabel = document.getElementById("certDateLabel");
  const closeBtn = document.getElementById("certCloseBtn");
  const downloadBtn = document.getElementById("certDownloadBtn");

  if (card) card.style.direction = isEnglish() ? "ltr" : "rtl";
  if (heading) heading.textContent = qt("certTitle");
  if (subheading) {
    subheading.innerHTML = `${qt("certLead")}<br><strong id="certCourseTitle" style="color:#ECEFF3;">${qt("certCourseTitle")}</strong>`;
  }
  if (nameInput) nameInput.placeholder = qt("certNamePlaceholder");
  if (dateLabel) dateLabel.textContent = qt("certDateLabel");
  if (closeBtn) closeBtn.textContent = qt("certCloseBtn");
  if (downloadBtn) downloadBtn.textContent = qt("certDownloadBtn");

  document.getElementById("certDate").textContent = new Date().toLocaleDateString(isEnglish() ? "en-GB" : "ar-EG", {
    year: "numeric", month: "long", day: "numeric"
  });
  modal.style.display = "flex";
};

window.closeModal = function() {
  document.getElementById("certificateModal").style.display = "none";
};

window.downloadCertificate = function() {
  try {
    const { jsPDF } = window.jspdf;
    const stats = getCourseStats();
    const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
    const W = 297;
    const H = 210;

    doc.setFillColor(10, 16, 23);
    doc.rect(0, 0, W, H, "F");
    doc.setDrawColor(245, 166, 35);
    doc.setLineWidth(2);
    doc.rect(10, 10, W - 20, H - 20);
    doc.setLineWidth(0.5);
    doc.rect(14, 14, W - 28, H - 28);
    doc.setTextColor(245, 166, 35);
    doc.setFontSize(24);
    doc.text("* * *", W / 2, 32, { align: "center" });
    doc.setFontSize(12);
    doc.setTextColor(180, 180, 180);
    doc.text("CERTIFICATE OF COMPLETION", W / 2, 47, { align: "center" });
    doc.setDrawColor(245, 166, 35);
    doc.setLineWidth(0.8);
    doc.line(60, 53, W - 60, 53);
    doc.setFontSize(10);
    doc.setTextColor(140, 140, 140);
    doc.text(qt("certPdfIntro"), W / 2, 65, { align: "center" });
    doc.setFontSize(22);
    doc.setTextColor(245, 166, 35);
    doc.text(qt("certPdfCourseTitle"), W / 2, 82, { align: "center" });
    doc.setFontSize(9);
    doc.setTextColor(110, 110, 110);
    doc.text("Data Modeling  |  DAX Advanced  |  Time Intelligence  |  Visuals  |  Performance  |  Publishing", W / 2, 94, { align: "center" });
    doc.setDrawColor(50, 50, 50);
    doc.setLineWidth(0.3);
    doc.line(60, 101, W - 60, 101);

    const dateStr = new Date().toLocaleDateString(isEnglish() ? "en-GB" : "ar-EG", { year: "numeric", month: "long", day: "numeric" });
    doc.setFontSize(10);
    doc.setTextColor(140, 140, 140);
    doc.text(qt("certPdfDateLabel") + dateStr, W / 2, 113, { align: "center" });
    doc.setDrawColor(245, 166, 35);
    doc.setLineWidth(0.5);
    doc.line(W / 2 - 40, 145, W / 2 + 40, 145);
    doc.setFontSize(11);
    doc.setTextColor(245, 166, 35);
    doc.text("Ta3laM Platform", W / 2, 152, { align: "center" });
    doc.setFontSize(8);
    doc.setTextColor(90, 90, 90);
    doc.text(qt("certPdfSignature"), W / 2, 158, { align: "center" });

    const studentName = document.getElementById("certNameInput")?.value.trim() || "";
    if (studentName) {
      doc.setFontSize(16);
      doc.setTextColor(240, 240, 240);
      doc.text(studentName, W / 2, 127, { align: "center" });
    }

    doc.setFontSize(8);
    doc.setTextColor(70, 70, 70);
    doc.text(`${stats.completableLessons} ${qt("certPdfFooter")}  |  ${stats.chapterCount} Chapters  |  Full DAX + Performance + Publishing`, W / 2, 173, { align: "center" });
    doc.save("PowerBI_Certificate_Ta3laM.pdf");
    window.closeModal();
  } catch (error) {
    console.error(error);
    alert(qt("codeError"));
  }
};

function lightboxKeyHandler(event) {
  if (event.key === "Escape") closeLightboxInternal();
}

function closeLightboxInternal(event) {
  if (event && event.target === document.getElementById("lightbox-img")) return;
  document.getElementById("lightbox").classList.remove("open");
  document.removeEventListener("keydown", lightboxKeyHandler);
}

window.closeLightbox = closeLightboxInternal;

window.openLightbox = function(img) {
  const lightbox = document.getElementById("lightbox");
  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("lightbox-caption").textContent = img.alt || "";
  lightbox.classList.add("open");
  document.addEventListener("keydown", lightboxKeyHandler);
};

window.initLightbox = function() {
  document.querySelectorAll(".lesson-img").forEach((img) => {
    img.style.cursor = "zoom-in";
    img.onclick = null;
    img.addEventListener("click", () => window.openLightbox(img));
  });
  document.querySelectorAll(".annotated-img-wrapper img").forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => window.openLightbox(img));
  });
};

window.initCopyButtons = function() {
  document.querySelectorAll(".code-block").forEach((block) => {
    // Trim leading/trailing newlines so white-space:pre doesn't add blank lines
    if (block.firstChild && block.firstChild.nodeType === 3) {
      block.firstChild.textContent = block.firstChild.textContent.replace(/^\n/, '');
    }
    const lastNode = block.lastChild;
    if (lastNode && lastNode.nodeType === 3) {
      lastNode.textContent = lastNode.textContent.replace(/\n[ \t]*$/, '');
    }

    if (block.querySelector(".copy-btn")) return;
    const copyText = isEnglish() ? "Copy" : "نسخ 📋";
    const copiedText = isEnglish() ? "Copied ✓" : "اتنسخ ✓";
    const button = document.createElement("button");
    button.className = "copy-btn";
    button.textContent = copyText;
    button.onclick = () => {
      navigator.clipboard.writeText(block.innerText.replace(copyText, "").trim()).then(() => {
        button.textContent = copiedText;
        button.classList.add("copied");
        setTimeout(() => {
          button.textContent = copyText;
          button.classList.remove("copied");
        }, 2000);
      });
    };
    block.style.position = "relative";
    block.appendChild(button);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  loadQuizData().then(() => {
    if (typeof window.refreshShellQuizAvailability === "function") window.refreshShellQuizAvailability();
    if (typeof window.updateQuizButtons === "function") window.updateQuizButtons();
  });
});
