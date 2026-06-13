import React, { useState } from "react";
import { QUIZ_QUESTIONS } from "../data/chapters";
import { Award, BookOpen, AlertCircle, RefreshCw } from "lucide-react";

export default function Quiz() {
  const [activeQuizTab, setActiveQuizTab] = useState<"questions" | "cases">("cases");

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" id="quiz-root">
      <div className="flex border-b border-gray-100 flex-wrap bg-gray-50/50">
        <button
          id="btn-quiz-cases"
          onClick={() => setActiveQuizTab("cases")}
          className={`flex-1 py-4 px-6 text-sm font-medium transition-all text-center border-b-2 ${
            activeQuizTab === "cases"
              ? "border-emerald-500 text-emerald-700 bg-white"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
          }`}
        >
          🩺 Dynamic Case Simulator
        </button>
        <button
          id="btn-quiz-questions"
          onClick={() => setActiveQuizTab("questions")}
          className={`flex-1 py-4 px-6 text-sm font-medium transition-all text-center border-b-2 ${
            activeQuizTab === "questions"
              ? "border-emerald-500 text-emerald-700 bg-white"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
          }`}
        >
          📝 Multiple Choice Quiz
        </button>
      </div>

      <div className="p-6 md:p-8">
        {activeQuizTab === "cases" ? <CaseSimulator /> : <QuestionQuiz />}
      </div>
    </div>
  );
}

// ==========================================
// 1. DYNAMIC CASE SIMULATOR
// ==========================================
function CaseSimulator() {
  const [currentCase, setCurrentCase] = useState<number>(0);
  const [selectedResponse, setSelectedResponse] = useState<number | null>(null);
  const [simulationChecked, setSimulationChecked] = useState<boolean>(false);

  const clinicalCases = [
    {
      title: "Case 1: Sepsis & Fluid Resuscitation Volume Targeting",
      context: "A 70 kg adult patient is admitted to the emergency department displaying suspected sepsis-induced hypoperfusion and hypotension. Lactate and blood culture bottles have been drawn.",
      question: "According to the Surviving Sepsis Campaign guidelines (2021) highlighted in Chapter 8, what represents the firstline resuscitating crystalloid fluid target and time constraint parameter?",
      options: [
        "Inffuse 1000 mL of 5% Dextrose in Water (D5W) within 6 hours to provide oxidation energy.",
        "Infuse at least 30 mL/kg of an IV crystalloid (approx 2100 mL for 70 kg) within the first 3 hours.",
        "Rapidly push 4% clinical Albumin solution (approx 500 mL) within 15 minutes as firstline resuscitation.",
        "Start an immediate intravenous drip of Isolyte-G at 250 mL/hour to correct possible acid burdens."
      ],
      correctIndex: 1,
      rationale: "For initial fluid resuscitation in sepsis-induced hypoperfusion or septic shock, guidelines mandate infusing at least 30 mL/kg of IV crystalloid (e.g. Normal Saline, Ringer's Lactate, or PlasmaLyte) within the first 3 hours. 5% Dextrose is completely avoided inside shock as it fails to restore intravascular pressure and triggers osmotic diuresis. Albumin is considered secondline, and Isolyte-G is acidifying (ammonium chloride) and contraindicated/inappropriate in sepsis."
    },
    {
      title: "Case 2: Geriatric Dehydration Diagnosis & Fluid Care",
      context: "An 82-year-old female presents with acute confusion. On assessment, you evaluate dry furrowed tongue, flat veins, slurred speech, and upper extremity muscle weakness. Her kidney function shows mild GFR decline. Vitals indicate orthostatic hypotension.",
      question: "Which of the following describes the most precise medical diagnosis and safely programmed maintenance fluid rate?",
      options: [
        "Assess dehydration using standard skin turgor beneath her clavicle, and give Normal Saline at 35 mL/kg/day.",
        "Diagnose dehydration by positive presentation of >= 4 of the 7 clinical criteria (including slurred speech, furrowed tongue), and program maintenance fluid safely at 20-25 mL/kg/day to avoid congestive heart overload.",
        "Diagnose water deficit by urine specific gravity, and restrict all maintenance fluids to 10 mL/kg/day.",
        "Diagnose by dry oral mucous membranes alone, and rapidly infuse Isolyte-M at 150 mL/hour to replenish cells."
      ],
      correctIndex: 1,
      rationale: "In the elderly, skin turgor and mouth dryness are highly inaccurate indicators due to age-related tissue atrophy and dry-mouth inducing medications. As per Chapter 9, clinical diagnostic criteria checklist of furrowed tongue, non-fluent speech, confusion, and muscle weakness (>= 4 of 7 criteria) are indicative of dehydration, with serum osmolality > 300 mOsm/kg being the most reliable test. Geriatric weight-based maintenance must be lower than youth, at 20-25 mL/kg/day (rather than 25-30 mL/kg/day), due to high cardiac/renal congestion risks."
    },
    {
      title: "Case 3: Hydration in Traumatic Brain Injury (TBI)",
      context: "A 28-year-old male is admitted following a motor vehicle collision with a severe closed traumatic brain injury and intracranial swelling, compounded by active femoral hemorrhage.",
      question: "Which resuscitating intravenous fluid is most appropriate, and which is strictly contraindicated?",
      options: [
        "Ringer's Lactate is preferred; Ringer's Acetate is strictly contraindicated.",
        "Normal Saline is preferred to maintain serum sodium and prevent brain swelling; Human Albumin (4%) is strictly contraindicated due to slightly hypotonic edema-promoting shifts.",
        "5% Dextrose (D5W) is preferred; Normal Saline is strictly contraindicated.",
        "Isolyte-P is preferred to hydrate cells; Normal Saline is contraindicated due to hyperchloremia risks."
      ],
      correctIndex: 1,
      rationale: "In patients with severe TBI and risk of raised intracranial pressure, Normal Saline (0.9% NaCl) is preferred because its osmolality (308 mOsm/L) maintains serum sodium stability. Clinical albumin (4%) is slightly hypotonic (260 mOsm/kg) compared to brain tissue ECF; in the SAFE trial, this tonicity gradient drew free water across the blood-brain barrier, expanding cerebral edema and raising TBI mortality. 5% Dextrose and other hypotonic fluids (Isolyte-P) are strictly avoided in neurological swelling."
    }
  ];

  const currentSimCase = clinicalCases[currentCase];

  const handleOptionSelect = (idx: number) => {
    if (simulationChecked) return;
    setSelectedResponse(idx);
  };

  const handleCheck = () => {
    if (selectedResponse === null) return;
    setSimulationChecked(true);
  };

  const handleNext = () => {
    setSelectedResponse(null);
    setSimulationChecked(false);
    setCurrentCase((prev) => (prev + 1) % clinicalCases.length);
  };

  return (
    <div id="case-simulator-container" className="space-y-6">
      <div className="border-b border-gray-100 pb-4">
        <h4 className="text-base font-bold text-gray-800">{currentSimCase.title}</h4>
        <p className="text-xs text-gray-500 mt-1">Practice high-stakes clinical决策 (clinical decision making) based on textbook instructions.</p>
      </div>

      <div className="bg-gray-50 border border-gray-150 rounded-xl p-5 text-sm leading-relaxed text-gray-700">
        <strong className="text-emerald-800 block text-xs tracking-wider uppercase mb-1.5">Simulation Context:</strong>
        {currentSimCase.context}
      </div>

      <div className="space-y-3">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Question / Challenge:</p>
        <p className="text-sm font-semibold text-gray-800 mb-4">{currentSimCase.question}</p>

        <div className="grid grid-cols-1 gap-3">
          {currentSimCase.options.map((option, idx) => {
            const isSelected = selectedResponse === idx;
            const isCorrect = idx === currentSimCase.correctIndex;
            
            let btnStyle = "border-gray-200 bg-white hover:bg-gray-50 text-gray-700";
            if (isSelected) {
              btnStyle = "border-emerald-500 bg-emerald-50/50 text-emerald-950 font-medium";
            }
            if (simulationChecked) {
              if (isCorrect) {
                btnStyle = "border-emerald-500 bg-emerald-100 text-emerald-950 font-semibold";
              } else if (isSelected) {
                btnStyle = "border-red-500 bg-red-100/50 text-red-950 text-gray-500";
              } else {
                btnStyle = "border-gray-200 bg-gray-50 text-gray-400 opacity-60";
              }
            }

            return (
              <button
                key={idx}
                id={`btn-case-option-${idx}`}
                onClick={() => handleOptionSelect(idx)}
                className={`w-full py-3 px-4 border rounded-xl text-xs text-left transition-all flex items-start gap-3 leading-relaxed ${btnStyle}`}
              >
                <span className="font-mono bg-gray-100 text-gray-600 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px]">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span>{option}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="pt-4 flex justify-between items-center border-t border-gray-100">
        <div className="text-xs text-gray-400">
          Case {currentCase + 1} of {clinicalCases.length}
        </div>

        <div className="flex gap-2">
          {!simulationChecked ? (
            <button
              id="btn-sim-check"
              onClick={handleCheck}
              disabled={selectedResponse === null}
              className={`py-2.5 px-6 rounded-lg text-xs font-semibold shadow-sm transition-all ${
                selectedResponse === null
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-emerald-600 text-white hover:bg-emerald-700"
              }`}
            >
              Submit Response
            </button>
          ) : (
            <button
              id="btn-sim-next"
              onClick={handleNext}
              className="py-2.5 px-6 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm transition-all flex items-center gap-1.5"
            >
              Next Clinical Case ➡️
            </button>
          )}
        </div>
      </div>

      {simulationChecked && (
        <div className="bg-emerald-50 border border-emerald-250 rounded-xl p-5 text-xs text-emerald-950 leading-relaxed shadow-sm">
          <strong className="text-emerald-800 text-sm block mb-1">
            {selectedResponse === currentSimCase.correctIndex ? "🎉 Excellent Assessment!" : "⚠️ Incorrect Diagnostic Choice"}
          </strong>
          <span className="block font-medium">Physiological Rationale:</span>
          <span className="block mt-1 font-sans opacity-90">{currentSimCase.rationale}</span>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 2. MULTIPLE CHOICE QUIZ
// ==========================================
function QuestionQuiz() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [quizChecked, setQuizChecked] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizComplete, setQuizCheckedComplete] = useState<boolean>(false);

  const q = QUIZ_QUESTIONS[currentIdx];

  const handleOptionSelect = (idx: number) => {
    if (quizChecked) return;
    setSelectedOpt(idx);
  };

  const handleVerify = () => {
    if (selectedOpt === null) return;
    setQuizChecked(true);
    if (selectedOpt === q.answerIndex) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOpt(null);
    setQuizChecked(false);
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setQuizCheckedComplete(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setQuizChecked(false);
    setQuizScore(0);
    setQuizCheckedComplete(false);
  };

  if (quizComplete) {
    const percentage = Math.round((quizScore / QUIZ_QUESTIONS.length) * 100);
    return (
      <div className="text-center py-10 space-y-6 max-w-lg mx-auto" id="quiz-complete-container">
        <div className="bg-emerald-500/10 text-emerald-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto border border-emerald-200">
          <Award className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h4 className="text-2xl font-bold text-gray-800">Quiz Completed!</h4>
          <p className="text-sm text-gray-500">You scored {quizScore} out of {QUIZ_QUESTIONS.length} ({percentage}%) on Dr. Sanjay Pandya's fluid therapy review.</p>
        </div>

        <div className="bg-gray-50 border border-gray-150 rounded-xl p-5 text-xs text-gray-600 text-left leading-relaxed">
          <strong className="text-gray-800 block text-sm mb-1.5">🎓 Key Review Recommendations:</strong>
          Our clinical fluid therapy calculations require 100% precision. Review Chapter 8 on hyperchloremia and Chapter 9 on geriatric dehydration criteria checklist to keep diagnostic safety high.
        </div>

        <button
          id="btn-quiz-restart"
          onClick={handleReset}
          className="py-2.5 px-6 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm transition-all inline-flex items-center gap-2"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Restart Clinical Quiz
        </button>
      </div>
    );
  }

  return (
    <div id="questions-quiz-container" className="space-y-6">
      <div className="border-b border-gray-100 pb-4 flex justify-between items-center">
        <div>
          <h4 className="text-base font-bold text-gray-800">Clinical Knowledge Challenge</h4>
          <p className="text-xs text-gray-500 mt-0.5">Reference Context: {q.chapterContext}</p>
        </div>
        <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded-full border border-emerald-100">
          Score: {quizScore} / {QUIZ_QUESTIONS.length}
        </span>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-semibold text-gray-800 mb-4">{q.question}</p>

        <div className="grid grid-cols-1 gap-3">
          {q.options.map((option, idx) => {
            const isSelected = selectedOpt === idx;
            const isCorrect = idx === q.answerIndex;

            let btnStyle = "border-gray-200 bg-white hover:bg-gray-50 text-gray-700";
            if (isSelected) {
              btnStyle = "border-emerald-500 bg-emerald-50/50 text-emerald-950 font-medium";
            }
            if (quizChecked) {
              if (isCorrect) {
                btnStyle = "border-emerald-500 bg-emerald-100 text-emerald-950 font-semibold";
              } else if (isSelected) {
                btnStyle = "border-red-500 bg-red-100/50 text-red-950 scale-95 opacity-60";
              } else {
                btnStyle = "border-gray-200 bg-gray-50 text-gray-400 opacity-60";
              }
            }

            return (
              <button
                key={idx}
                id={`btn-question-option-${idx}`}
                onClick={() => handleOptionSelect(idx)}
                className={`w-full py-3.5 px-4 border rounded-xl text-xs text-left transition-all flex items-start gap-3 leading-relaxed ${btnStyle}`}
              >
                <span className="font-mono bg-gray-100 text-gray-600 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px]">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span>{option}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="pt-4 flex justify-between items-center border-t border-gray-100">
        <div className="text-xs text-gray-400">
          Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}
        </div>

        <div className="flex gap-2">
          {!quizChecked ? (
            <button
              id="btn-question-submit"
              onClick={handleVerify}
              disabled={selectedOpt === null}
              className={`py-2.5 px-6 rounded-lg text-xs font-semibold shadow-sm transition-all ${
                selectedOpt === null
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-emerald-600 text-white hover:bg-emerald-700"
              }`}
            >
              Verify Answer
            </button>
          ) : (
            <button
              id="btn-question-next"
              onClick={handleNextQuestion}
              className="py-2.5 px-6 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm transition-all flex items-center gap-1.5"
            >
              {currentIdx === QUIZ_QUESTIONS.length - 1 ? "Finish Quiz 🏁" : "Next Question ➡️"}
            </button>
          )}
        </div>
      </div>

      {quizChecked && (
        <div className="bg-emerald-50 border border-emerald-250 rounded-xl p-5 text-xs text-emerald-950 leading-relaxed shadow-sm">
          <strong className="text-emerald-800 text-sm block mb-1">
            {selectedOpt === q.answerIndex ? "🎉 Precise Diagnostics!" : "⚠️ Clinical Review Needed"}
          </strong>
          <span className="block font-medium">Physiological Rationale:</span>
          <span className="block mt-1 font-sans opacity-90">{q.rationale}</span>
        </div>
      )}
    </div>
  );
}
