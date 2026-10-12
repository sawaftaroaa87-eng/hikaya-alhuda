/**
 * ==========================================================================
 * حكايا الهدى - المنطق التفاعلي ومحرك تحويل النص العربي إلى صوت
 * يعتمد على تقنية Web Speech API (speechSynthesis & SpeechSynthesisUtterance)
 * يعمل بدون اتصال بالإنترنت ودون الحاجة لأي مكتبات أو مفاتيح API مدفوعة.
 * ==========================================================================
 */

// قاعدة بيانات القصص الإسلامية المصوّرة الموثقة
const storiesData = [
  {
    id: "story-bird",
    title: "أبو عُمَيْر والنُّغَيْر",
    category: "السيرة النبوية",
    categoryKey: "seerah",
    image: "assets/images/story-bird.jpg",
    age: "٤ - ٨ سنوات",
    readTime: "٣ دقائق",
    hasAudio: true,
    excerpt: "قصة تفيض بالرحمة واللطف من رسول الله ﷺ مع الصبي أبي عُمير حين حزن على عصفوره الصغير.",
    fullContent: `كان في بيت الصحابي الجليل أبي طلحة الأنصاري رضي الله عنه صبيٌّ صغير يُكنى بأبي عُمَيْر، وكان طفلاً محبوباً ومرحاً.

وكان لأبي عمير طائرٌ صغير لطيف يُسمّى "النُّغَيْر" (وهو طائر صغير كالعصفور ذو منقار أحمر جميل)، وكان يحبه حباً جماً، ويطعمه ويسقيه ويلاعبه كل يوم.

وفي أحد الأيام، جاء رسول الله ﷺ إلى بيتهم كعادته في تفقد أصحابه وإكرامهم، فرأى أبا عمير جالساً حزيناً تترقرق الدموع في عينيه الصغيرتين.

فسأل النبي ﷺ بلطف ورحمة: «ما لي أرى أبا عُمَيْر حزيناً؟»، فقيل له: مات نُغَيرُه يا رسول الله!

فأقبل النبي الرحيم ﷺ بوجهه الشريف المنير نحو الصبي الصغير، ولم يُقلل من حزنه، بل جلس قربه ولاطفه ودعابه بكلمات رقيقة مُباركة أدخلت البهجة على قلبه، فقال متبسماً:
«يا أبا عُمَيْر، ما فَعَلَ النُّغَيْر؟»

فضحك الصغير وسُرّ بزيارة رسول الله ﷺ وتلطفه معه، فزال حزنه بفضل رحمة نبينا الحبيب ﷺ وحسن خلقه.`,
    moral: "الرحمة بالأطفال ومواساتهم عند الحزن، والرفق بالطيور والحيوانات، وحسن خلق رسول الله ﷺ في إدخال السرور على قلوب الصغار."
  },
  {
    id: "story-companions",
    title: "رفيق الغار - هجرة الصديق",
    category: "قصص الصحابة",
    categoryKey: "sahabah",
    image: "assets/images/story-companions.svg",
    age: "٦ - ١٢ سنة",
    readTime: "٤ دقائق",
    hasAudio: true,
    excerpt: "رحلة الهجرة النبوية المباركة عبر رمال الصحراء، ووفاء وتضحية أبي بكر الصديق رضي الله عنه مع الحبيب المصطفى ﷺ.",
    fullContent: `عندما أذن الله تعالى لنبيه محمد ﷺ بالهجرة من مكة المكرمة إلى المدينة المنورة، جاء النبي ﷺ في وقت الظهيرة إلى دار صاحبه الوفي أبي بكر الصديق رضي الله عنه.

فقال له النبي ﷺ: «إن الله قد أذن لي بالخروج»، ففاضت عينا أبي بكر بدموع الفرح وقال بشوق: «الصُّحبةَ يا رسول الله؟»، فأجابه النبي ﷺ: «نعم، الصُّحبة».

خرجا معاً في هدوء الليل، ورافقه أبو بكر يحميه؛ فكان يمشي تارة أمامه وتارة خلفه، وعن يمينه وعن شماله، حرصاً منه وخوفاً على سلامة رسول الله ﷺ.

وعندما وصلا إلى غار ثور، سبق أبو بكر النبي ﷺ إلى الغار ليتفقده وينظفه بنفسه حتى لا يؤذي رسول الله شيء.

وقف المشركون على باب الغار يبحثون عنهم، فخاف أبو بكر على رسول الله ﷺ وقال بصوت خافت: «لو أن أحدهم نظر تحت قدميه لرآنا!»

فنظر إليه النبي ﷺ بثقة وثبات وهدوء ملأ المكان سكينة، وقال كلمته الخالدة التي سجلها القرآن الكريم:
«ما ظَنُّكَ يا أبا بكرٍ باثْنَينِ اللهُ ثالثُهُما؟»

وحفظ الله نبيه وصاحبه، وواصلا رحلتهما المباركة إلى المدينة المنورة ليؤسسا مجتمع الإيمان والخير والسلام.`,
    moral: "عظمة الصداقة والوفاء، والتضحية في سبيل الحق، والتوكل المطلق على الله وحسن الظن به في كل الأوقات."
  },
  {
    id: "story-values",
    title: "أمانة الراعي الصغير",
    category: "أخلاق وقيم إسلامية",
    categoryKey: "values",
    image: "assets/images/story-values.svg",
    age: "٥ - ١٠ سنوات",
    readTime: "٣ دقائق",
    hasAudio: true,
    excerpt: "قصة الراعي الأمين في مراعي الصحراء مع أمير المؤمنين عمر بن الخطاب رضي الله عنه، وكيف تذكر مراقبة الله.",
    fullContent: `خرج أمير المؤمنين عمر بن الخطاب رضي الله عنه في يوم مشمس يتفقد أحوال الناس ومراعيهم خارج المدينة المنورة.

وبينما هو يسير، رأى غلاماً صغيراً يرعى قطيعاً كبيراً من الغنم بمفرده في سفح الجبل.

أعجب عمر بنشاط الغلام وحرصه، وأراد أن يختبر أمانته وإيمانه في خلوته، فاقترب منه وسلم عليه وقال:
«يا غلام، بعني شاة من هذا القطيع!».

فقال الراعي الصغير بأدب: «إنني لست صاحبها، إنها غنم سيدي وأنا مؤتمن عليها فقط».

فأراد عمر أن يمتحنه أكثر فقال: «قل لصاحبها أن الذئب قد أكل واحدة منها وخذ ثمنها لنفسك! فلن يعلم صاحبك شيئاً».

توقف الراعي الصغير، ونظر إلى السماء والدهشة تملأ وجهه، ثم التفت إلى عمر وقال بقلب واثق خاشع:
«فأين الله؟!»

اقشعر جلد عمر بن الخطاب من هذه الكلمة العظيمة، وفاضت عيناه بالدموع من خشية الله وفرحاً بأمانة هذا الفتى الصغير.

ذهب عمر إلى سيد الغلام، فاشترى منه الراعي الصغير وأعتقه لوجه الله، واشترى له قطيع الغنم ووهبه إياه جزاء أمانته وصدقه، وقال له:
«أعتقتك هذه الكلمة في الدنيا، وأرجو أن تعتقك في الآخرة».`,
    moral: "مراقبة الله تعالى في السر والعلن، وأن الأمانة والصدق يرفعان قدر الإنسان ويبارك الله له في رزقه وعمره."
  },
  {
    id: "story-bedtime",
    title: "نجوم المساء وأذكار النوم",
    category: "حكايات قبل النوم",
    categoryKey: "bedtime",
    image: "assets/images/story-bedtime.svg",
    age: "٣ - ٧ سنوات",
    readTime: "٢ دقيقة",
    hasAudio: true,
    excerpt: "رحلة هادئة مع نسائم الليل وتأمل القمر والنجوم، لنتعلم سنة النبي ﷺ وأذكار النوم بنوم هانئ وأحلام مطمئنة.",
    fullContent: `عندما أقبل المساء وهدأت حركة الطيور في أعشاشها، جلس الصغير زياد بجانب نافذة غرفته ينظر إلى السماء الصافية.

كان الهلال يبتسم بلطف بين النجوم المتلألئة، والنسيم العليل يحمل رائحة الأزهار الهادئة.

اقتربت أمه الحنونة وجلست بجانبه تبتسم وقالت: «لقد حان وقت النوم يا بني، لنستعد بنوم هانئ على سنة حبيبنا رسول الله ﷺ».

توضأ زياد وضمن سريره الدافئ ونفض فراشه ثلاث مرات بابتسامة، ثم جمع كفيه الصغيرتين وقرأ سورة الإخلاص وسورة الفلق وسورة الناس، ونفث في يديه ومسح بهما جسده الطاهر كما كان يفعل النبي ﷺ.

ثم نام على جانبه الأيمن، ووضع كفه تحت خده الأيمن، وقال الدعاء الجميل:
«بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ».

شعر زياد بسكينة تملأ قلبه الصغير وأمان لا حدود له، وغط في نوم عميق تحرسه ملائكة الرحمن برعايتها.`,
    moral: "الحرص على أذكار النوم وسنن النوم الهادئة، والشعور بالسكينة والأمان والتوكل على الله عند النوم."
  }
];

// المتغيرات العامة لحالة التصفية والعرض
let currentCategoryFilter = "all";
let currentSearchTerm = "";
let currentAudioOnlyFilter = false;
let currentReadingFontSize = 1.25; // rem

// ==========================================================================
// متغيرات محرك القراءة الصوتية (Web Speech API State)
// ==========================================================================
let currentSpeechStoryId = null;       // معرّف القصة المعروضة حالياً في المشغل
let currentStoryChunks = [];           // فقرات وجمل القصة الحالية المقسمة للقراءة
let currentChunkIndex = 0;             // مؤشر الفقرة الجاري قراءتها
let currentSpeechUtterance = null;     // الكائن الصوتي النشط
let isSpeechPlaying = false;           // حالة التشغيل
let isSpeechPaused = false;            // حالة الإيقاف المؤقت
let currentSpeechRate = 0.9;           // سرعة القراءة الافتراضية (0.9 سرعة هادئة ومناسبة للأطفال)
let currentSpeechVolume = 1.0;         // مستوى الصوت الافتراضي (100%)
let selectedArabicVoice = null;        // الصوت العربي المختار من النظام
let speechKeepAliveTimer = null;       // مؤقت لمنع توقف المحرك التلقائي في بعض المتصفحات

// التهيئة عند اكتمال تحميل المستند
document.addEventListener("DOMContentLoaded", () => {
  initSpeechSynthesisVoices();
  initStories();
  initSearchAndFilters();
  initCategoryCards();
  initReadingModal();
  initSpeechPlayerControls();
  initMobileNav();
});

// ==========================================================================
// 1. الكشف عن الأصوات العربية وتهيئة Web Speech API
// ==========================================================================
function initSpeechSynthesisVoices() {
  if (!('speechSynthesis' in window)) {
    console.warn("تنبيه: متصفحك لا يدعم Web Speech API لتحويل النصوص إلى صوت.");
    const voiceEl = document.getElementById("speechVoiceName");
    if (voiceEl) {
      voiceEl.textContent = "المتصفح لا يدعم ميزة تحويل النص إلى صوت (Web Speech API).";
      voiceEl.classList.add("voice-warning");
    }
    return;
  }

  function detectArabicVoice() {
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return;

    // 1. البحث عن صوت سعودي ar-SA بدقة
    let found = voices.find(v => v.lang === 'ar-SA' || v.lang === 'ar_SA');

    // 2. البحث عن أي صوت عربي آخر (ar-EG, ar-AE, ar-KW, etc.)
    if (!found) {
      found = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('ar'));
    }

    // 3. البحث بالاسم عن الكلمات الدالة على الصوت العربي
    if (!found) {
      found = voices.find(v => v.name && (
        v.name.includes('Arabic') || 
        v.name.includes('عربي') || 
        v.name.includes('Maged') || 
        v.name.includes('Tarik') || 
        v.name.includes('Laila') || 
        v.name.includes('Salma') || 
        v.name.includes('Naayf') ||
        v.name.includes('Hoda')
      ));
    }

    selectedArabicVoice = found || null;
    const voiceEl = document.getElementById("speechVoiceName");

    if (voiceEl) {
      if (selectedArabicVoice) {
        voiceEl.textContent = `🎙️ الصوت المتاح: ${selectedArabicVoice.name} (${selectedArabicVoice.lang})`;
        voiceEl.classList.remove("voice-warning");
      } else {
        voiceEl.textContent = `⚠️ جاري استخدام صوت النظام ar-SA (لم يُعثر على حزمة عربية مخصصة على الجهاز)`;
        voiceEl.classList.add("voice-warning");
      }
    }
  }

  detectArabicVoice();
  // بعض المتصفحات مثل Chrome تحمّل الأصوات بشكل غير متزامن
  window.speechSynthesis.onvoiceschanged = detectArabicVoice;
}

// ==========================================================================
// 2. معالجة وتجزئة نص القصة المحددة
// ==========================================================================
/**
 * تجهيز فقرات القصة المحددة فقط وتجزئتها لتفادي مشكلة انقطاع الصوت الطويل
 * في متصفحات Chromium، وضمان تتبع التقدم بدقة.
 */
function extractStorySpeechChunks(story) {
  if (!story) return [];

  // دمج العنوان ومحتوى القصة والقيمة المستفادة للقصة المحددة فقط
  const fullText = `${story.title} .\n\n${story.fullContent}\n\nالقيمة المستفادة من الحكاية : ${story.moral} .`;

  // تقسيم النص إلى جمل وفقرات طبيعية
  const rawChunks = fullText
    .split(/(?:[\n\r]+|[.!?؟]\s+)/)
    .map(chunk => chunk.trim())
    .filter(chunk => chunk.length > 0);

  return rawChunks.length > 0 ? rawChunks : [story.title, story.excerpt];
}

// ==========================================================================
// 3. تشغيل القراءة الصوتية لقصة محددة (معالجة التبديل وعدم التداخل)
// ==========================================================================
/**
 * الدالة الرئيسية لتشغيل القصة المحددة بواسطة زر «استمع للقصة»
 * @param {string} storyId معرّف القصة
 */
function openAndPlayAudio(storyId) {
  if (!('speechSynthesis' in window)) {
    alert("عذراً، متصفحك الحالي لا يدعم ميزة القراءة الصوتية (Web Speech API). يرجى تجربة متصفح Google Chrome أو Microsoft Edge حديث.");
    return;
  }

  const story = storiesData.find(s => s.id === storyId);
  if (!story) return;

  const playerModal = document.getElementById("audioPlayerModal");
  const titleEl = document.getElementById("audioPlayerStoryTitle");

  // إذا كانت نفس القصة مشغلة حالياً
  if (currentSpeechStoryId === story.id && isSpeechPlaying) {
    if (playerModal) playerModal.classList.add("active");
    return; // لا نكرر القراءة ولا نتداخل مع التشغيل الجاري
  }

  // إذا كانت نفس القصة متوقفة مؤقتاً
  if (currentSpeechStoryId === story.id && isSpeechPaused) {
    resumeSpeechStory();
    if (playerModal) playerModal.classList.add("active");
    return;
  }

  // في حال تبديل القصة أو البدء من جديد: نوقف أي قراءة سابقة فوراً
  stopSpeechStory(false);

  // تعيين القصة الجديدة
  currentSpeechStoryId = story.id;
  currentStoryChunks = extractStorySpeechChunks(story);
  currentChunkIndex = 0;

  if (titleEl) titleEl.textContent = story.title;
  if (playerModal) playerModal.classList.add("active");

  // بدء قراءة الفقرة الأولى
  speakCurrentChunk();
}

/**
 * قراءة الفقرة الحالية من القصة باستخدام SpeechSynthesisUtterance
 */
function speakCurrentChunk() {
  if (!('speechSynthesis' in window)) return;

  if (currentChunkIndex >= currentStoryChunks.length) {
    // اكتملت قراءة القصة كاملة
    isSpeechPlaying = false;
    isSpeechPaused = false;
    updateSpeechUI('finished');
    stopKeepAlive();
    return;
  }

  const chunkText = currentStoryChunks[currentChunkIndex];
  const utterance = new SpeechSynthesisUtterance(chunkText);

  // ضبط اللغة والصوت
  utterance.lang = "ar-SA";
  if (selectedArabicVoice) {
    utterance.voice = selectedArabicVoice;
  }

  // ضبط السرعة ومستوى الصوت
  utterance.rate = currentSpeechRate;
  utterance.volume = currentSpeechVolume;

  // أحداث القراءة الصوتية
  utterance.onstart = () => {
    isSpeechPlaying = true;
    isSpeechPaused = false;
    updateSpeechUI('playing');
    startKeepAlive();
  };

  utterance.onend = () => {
    // الانتقال للفقرة التالية تلقائياً
    currentChunkIndex++;
    if (currentChunkIndex < currentStoryChunks.length) {
      speakCurrentChunk();
    } else {
      isSpeechPlaying = false;
      isSpeechPaused = false;
      updateSpeechUI('finished');
      stopKeepAlive();
    }
  };

  utterance.onerror = (e) => {
    // تجاهل الأخطاء الناتجة عن الإلغاء اليدوي cancel
    if (e.error !== 'canceled' && e.error !== 'interrupted') {
      console.warn("حدث تنبيه أثناء القراءة:", e.error);
      currentChunkIndex++;
      if (currentChunkIndex < currentStoryChunks.length) {
        speakCurrentChunk();
      } else {
        updateSpeechUI('finished');
      }
    }
  };

  currentSpeechUtterance = utterance;
  window.speechSynthesis.speak(utterance);
  updateProgressUI();
}

// ==========================================================================
// 4. أزرار التحكم: تشغيل، إيقاف مؤقت، استكمال، إعادة، وإيقاف
// ==========================================================================
/**
 * زر التشغيل أو الاستكمال
 */
function playOrResumeSpeechStory() {
  if (!('speechSynthesis' in window)) return;

  if (isSpeechPaused) {
    resumeSpeechStory();
  } else if (!isSpeechPlaying) {
    if (currentSpeechStoryId) {
      speakCurrentChunk();
    } else {
      // إذا لم تكن هناك قصة محددة، نبدأ بالقصة الأولى
      openAndPlayAudio('story-bird');
    }
  }
}

/**
 * استكمال القراءة الصوتية بعد الإيقاف المؤقت
 */
function resumeSpeechStory() {
  if (!('speechSynthesis' in window)) return;

  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  } else if (currentSpeechStoryId) {
    speakCurrentChunk();
  }

  isSpeechPlaying = true;
  isSpeechPaused = false;
  updateSpeechUI('playing');
  startKeepAlive();
}

/**
 * إيقاف القراءة مؤقتاً
 */
function pauseSpeechStory() {
  if (!('speechSynthesis' in window)) return;

  if (isSpeechPlaying) {
    window.speechSynthesis.pause();
    isSpeechPlaying = false;
    isSpeechPaused = true;
    updateSpeechUI('paused');
    stopKeepAlive();
  }
}

/**
 * إيقاف القراءة وإعادة البدء من أول القصة المحددة
 */
function restartSpeechStory() {
  if (!('speechSynthesis' in window)) return;
  if (!currentSpeechStoryId) return;

  window.speechSynthesis.cancel();
  currentChunkIndex = 0;
  isSpeechPlaying = false;
  isSpeechPaused = false;
  
  // إعادة البدء فوراً من الفقرة الأولى
  speakCurrentChunk();
}

/**
 * إيقاف تام للقراءة الصوتية
 * @param {boolean} closeModal هل يتم إغلاق نافذة المشغل أم لا
 */
function stopSpeechStory(closeModal = true) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  isSpeechPlaying = false;
  isSpeechPaused = false;
  currentChunkIndex = 0;
  currentSpeechUtterance = null;
  stopKeepAlive();

  updateSpeechUI('stopped');

  if (closeModal) {
    const playerModal = document.getElementById("audioPlayerModal");
    if (playerModal) {
      playerModal.classList.remove("active");
    }
  }
}

// ==========================================================================
// 5. التحكم بمستوى الصوت وسرعة القراءة وتحديث الواجهة
// ==========================================================================
function initSpeechPlayerControls() {
  const btnPlay = document.getElementById("btnSpeechPlay");
  const btnPause = document.getElementById("btnSpeechPause");
  const btnRestart = document.getElementById("btnSpeechRestart");
  const btnStop = document.getElementById("btnSpeechStop");
  const btnClose = document.getElementById("btnCloseAudioPlayer");

  const rateRange = document.getElementById("speechRateRange");
  const volumeRange = document.getElementById("speechVolumeRange");

  if (btnPlay) btnPlay.addEventListener("click", playOrResumeSpeechStory);
  if (btnPause) btnPause.addEventListener("click", pauseSpeechStory);
  if (btnRestart) btnRestart.addEventListener("click", restartSpeechStory);
  if (btnStop) btnStop.addEventListener("click", () => stopSpeechStory(false));
  if (btnClose) btnClose.addEventListener("click", () => stopSpeechStory(true));

  // التحكم بسرعة القراءة
  if (rateRange) {
    rateRange.addEventListener("input", (e) => {
      currentSpeechRate = parseFloat(e.target.value);
      const valEl = document.getElementById("speechRateValue");
      if (valEl) valEl.textContent = `${currentSpeechRate.toFixed(1)}×`;
    });
  }

  // التحكم بمستوى الصوت
  if (volumeRange) {
    volumeRange.addEventListener("input", (e) => {
      currentSpeechVolume = parseFloat(e.target.value);
      const valEl = document.getElementById("speechVolumeValue");
      if (valEl) valEl.textContent = `${Math.round(currentSpeechVolume * 100)}%`;
    });
  }
}

/**
 * تحديث نصوص وأزرار وحالة المشغل الصوتي
 */
function updateSpeechUI(state) {
  const statusBadge = document.getElementById("speechStatusBadge");
  const playLabel = document.getElementById("btnSpeechPlayLabel");
  const playerModal = document.getElementById("audioPlayerModal");

  if (state === 'playing') {
    if (statusBadge) {
      statusBadge.textContent = "جاري القراءة الآن 🎙️";
      statusBadge.className = "speech-status-badge status-playing";
    }
    if (playLabel) playLabel.textContent = "جاري القراءة";
    if (playerModal) playerModal.classList.add("playing");
  } else if (state === 'paused') {
    if (statusBadge) {
      statusBadge.textContent = "القراءة متوقفة مؤقتاً ⏸️";
      statusBadge.className = "speech-status-badge status-paused";
    }
    if (playLabel) playLabel.textContent = "استكمال";
    if (playerModal) playerModal.classList.remove("playing");
  } else if (state === 'finished') {
    if (statusBadge) {
      statusBadge.textContent = "اكتملت قراءة القصة بحمد الله ✨";
      statusBadge.className = "speech-status-badge status-playing";
    }
    if (playLabel) playLabel.textContent = "إعادة التشغيل";
    if (playerModal) playerModal.classList.remove("playing");
    updateProgressUI(true);
  } else {
    // stopped
    if (statusBadge) {
      statusBadge.textContent = "جاهز للقراءة";
      statusBadge.className = "speech-status-badge";
    }
    if (playLabel) playLabel.textContent = "تشغيل";
    if (playerModal) playerModal.classList.remove("playing");
    updateProgressUI();
  }
}

/**
 * تحديث شريط تقدم الفقرات
 */
function updateProgressUI(isDone = false) {
  const progressFill = document.getElementById("speechProgressFill");
  const currentPartEl = document.getElementById("speechCurrentPart");
  const percentEl = document.getElementById("speechProgressPercent");

  const total = currentStoryChunks.length || 1;
  const current = isDone ? total : Math.min(currentChunkIndex + 1, total);
  const percent = isDone ? 100 : Math.round((currentChunkIndex / total) * 100);

  if (progressFill) progressFill.style.width = `${percent}%`;
  if (currentPartEl) currentPartEl.textContent = `الفقرة: ${current} من ${total}`;
  if (percentEl) percentEl.textContent = `${percent}%`;
}

/**
 * مؤقت لمنع متصفح Chrome من قطع الصوت في النصوص الطويلة
 */
function startKeepAlive() {
  stopKeepAlive();
  speechKeepAliveTimer = setInterval(() => {
    if (isSpeechPlaying && window.speechSynthesis && window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    }
  }, 12000);
}

function stopKeepAlive() {
  if (speechKeepAliveTimer) {
    clearInterval(speechKeepAliveTimer);
    speechKeepAliveTimer = null;
  }
}

// ==========================================================================
// 6. عرض وتصفية مكتبة القصص (Story Cards)
// ==========================================================================
function initStories() {
  renderStories();
}

function renderStories() {
  const container = document.getElementById("storiesContainer");
  if (!container) return;

  const filteredStories = storiesData.filter(story => {
    const matchesCategory = (currentCategoryFilter === "all") || (story.categoryKey === currentCategoryFilter);
    const matchesSearch = currentSearchTerm === "" || 
      story.title.includes(currentSearchTerm) || 
      story.excerpt.includes(currentSearchTerm) ||
      story.category.includes(currentSearchTerm);
    const matchesAudio = !currentAudioOnlyFilter || story.hasAudio;

    return matchesCategory && matchesSearch && matchesAudio;
  });

  if (filteredStories.length === 0) {
    container.innerHTML = `
      <div class="no-results-box">
        <div class="no-results-icon">📖</div>
        <h3>لم يتم العثور على أي قصة تطابق بحثك</h3>
        <p>جرب تغيير كلمات البحث أو اختيار قسم آخر من الأقسام بالأعلى.</p>
        <button class="btn-pill btn-primary" onclick="resetFilters()">عرض جميع القصص</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredStories.map(story => {
    // جميع القصص تدعم الآن القراءة الصوتية الذكية عبر Web Speech API
    const audioButtonHtml = `
      <button class="btn-listen-story" onclick="openAndPlayAudio('${story.id}')" title="استمع للقراءة الصوتية لهذه القصة">
        <span>🎧</span> استمع للقصة
      </button>
    `;

    const audioBadgeHtml = `<span class="story-badge-audio-indicator">🎧 قراءة صوتية</span>`;

    return `
      <article class="story-card" data-category="${story.categoryKey}">
        <div class="story-card-thumb">
          <img src="${story.image}" alt="${story.title}" loading="lazy">
          <span class="story-badge-category">✨ ${story.category}</span>
          ${audioBadgeHtml}
        </div>
        <div class="story-card-content">
          <div class="story-meta-tags">
            <span class="story-meta-item">⏱️ وقت القراءة: ${story.readTime}</span>
            <span class="story-meta-item">👶 الفئة: ${story.age}</span>
          </div>
          <h3 class="story-title">${story.title}</h3>
          <p class="story-excerpt">${story.excerpt}</p>
          <div class="story-card-actions">
            <button class="btn-read-story" onclick="openStoryReadingModal('${story.id}')">
              <span>📖</span> اقرأ القصة
            </button>
            ${audioButtonHtml}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// ==========================================================================
// 7. البحث والتصفية والأقسام
// ==========================================================================
function initSearchAndFilters() {
  const searchInput = document.getElementById("storySearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchTerm = e.target.value.trim();
      renderStories();
    });
  }

  const filterButtons = document.querySelectorAll(".filter-pill-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategoryFilter = btn.dataset.category;
      syncCategoryCardsUI();
      renderStories();
    });
  });

  const audioCheckbox = document.getElementById("audioFilterCheckbox");
  if (audioCheckbox) {
    audioCheckbox.addEventListener("change", (e) => {
      currentAudioOnlyFilter = e.target.checked;
      renderStories();
    });
  }
}

function initCategoryCards() {
  const categoryCards = document.querySelectorAll(".category-card");
  categoryCards.forEach(card => {
    card.addEventListener("click", () => {
      const selectedCategory = card.dataset.category;
      categoryCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      const filterButtons = document.querySelectorAll(".filter-pill-btn");
      filterButtons.forEach(btn => {
        if (btn.dataset.category === selectedCategory) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });

      currentCategoryFilter = selectedCategory;
      renderStories();

      const storiesSection = document.getElementById("storiesSection");
      if (storiesSection) {
        storiesSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

function syncCategoryCardsUI() {
  const categoryCards = document.querySelectorAll(".category-card");
  categoryCards.forEach(card => {
    if (card.dataset.category === currentCategoryFilter) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
}

function resetFilters() {
  currentCategoryFilter = "all";
  currentSearchTerm = "";
  currentAudioOnlyFilter = false;

  const searchInput = document.getElementById("storySearchInput");
  if (searchInput) searchInput.value = "";

  const audioCheckbox = document.getElementById("audioFilterCheckbox");
  if (audioCheckbox) audioCheckbox.checked = false;

  const filterButtons = document.querySelectorAll(".filter-pill-btn");
  filterButtons.forEach(b => {
    if (b.dataset.category === "all") b.classList.add("active");
    else b.classList.remove("active");
  });

  syncCategoryCardsUI();
  renderStories();
}

// ==========================================================================
// 8. نافذة قراءة القصة المنبثقة (Reading Modal)
// ==========================================================================
function initReadingModal() {
  const modalOverlay = document.getElementById("readingModalOverlay");
  const btnClose = document.getElementById("btnCloseReadingModal");
  const btnCloseFooter = document.getElementById("btnCloseReadingModalFooter");
  const btnZoomIn = document.getElementById("btnFontZoomIn");
  const btnZoomOut = document.getElementById("btnFontZoomOut");

  if (btnClose) btnClose.addEventListener("click", closeReadingModal);
  if (btnCloseFooter) btnCloseFooter.addEventListener("click", closeReadingModal);

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeReadingModal();
    });
  }

  if (btnZoomIn) {
    btnZoomIn.addEventListener("click", () => {
      if (currentReadingFontSize < 1.8) {
        currentReadingFontSize += 0.15;
        applyReadingFontSize();
      }
    });
  }

  if (btnZoomOut) {
    btnZoomOut.addEventListener("click", () => {
      if (currentReadingFontSize > 1.0) {
        currentReadingFontSize -= 0.15;
        applyReadingFontSize();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeReadingModal();
  });
}

function applyReadingFontSize() {
  const modalBody = document.getElementById("modalStoryBody");
  if (modalBody) {
    modalBody.style.fontSize = `${currentReadingFontSize}rem`;
  }
}

function openStoryReadingModal(storyId) {
  const story = storiesData.find(s => s.id === storyId);
  if (!story) return;

  const modalOverlay = document.getElementById("readingModalOverlay");
  const modalCategory = document.getElementById("modalCategoryTag");
  const modalImage = document.getElementById("modalStoryImage");
  const modalTitle = document.getElementById("modalStoryTitle");
  const modalText = document.getElementById("modalStoryText");
  const modalMoral = document.getElementById("modalStoryMoral");
  const modalAudioAction = document.getElementById("modalAudioActionContainer");

  if (modalCategory) modalCategory.textContent = story.category;
  if (modalImage) {
    modalImage.src = story.image;
    modalImage.alt = story.title;
  }
  if (modalTitle) modalTitle.textContent = story.title;
  if (modalText) modalText.textContent = story.fullContent;
  if (modalMoral) modalMoral.textContent = story.moral;

  // زر الاستماع متاح داخل نافذة القراءة للقصة الحالية
  if (modalAudioAction) {
    modalAudioAction.innerHTML = `
      <button class="btn-pill btn-listen-story" onclick="openAndPlayAudio('${story.id}')">
        <span>🎧</span> استمع للقراءة الصوتية للقصة
      </button>
    `;
  }

  applyReadingFontSize();
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeReadingModal() {
  const modalOverlay = document.getElementById("readingModalOverlay");
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ==========================================================================
// 9. القائمة المتنقلة للجوال ودوال الربط الخارجي
// ==========================================================================
function initMobileNav() {
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const navMenu = document.getElementById("mainNavigation");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });

    const navLinks = navMenu.querySelectorAll(".nav-item-link");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
      });
    });
  }
}

function filterByCategory(categoryKey) {
  currentCategoryFilter = categoryKey;
  
  const filterButtons = document.querySelectorAll(".filter-pill-btn");
  filterButtons.forEach(btn => {
    if (btn.dataset.category === categoryKey) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  syncCategoryCardsUI();
  renderStories();

  const storiesSection = document.getElementById("storiesSection");
  if (storiesSection) {
    storiesSection.scrollIntoView({ behavior: "smooth" });
  }
}

// إتاحة الدوال على كائن window لضمان عمل استدعاءات HTML والأزرار التفاعلية
window.openStoryReadingModal = openStoryReadingModal;
window.openAndPlayAudio = openAndPlayAudio;
window.playOrResumeSpeechStory = playOrResumeSpeechStory;
window.pauseSpeechStory = pauseSpeechStory;
window.restartSpeechStory = restartSpeechStory;
window.stopSpeechStory = stopSpeechStory;
window.filterByCategory = filterByCategory;
window.resetFilters = resetFilters;
