import React, { useState } from "react";
import TextbookReader from "./components/TextbookReader";
import Calculators from "./components/Calculators";
import FluidInspector from "./components/FluidInspector";
import Quiz from "./components/Quiz";
import { BookOpen, Calculator, Droplets, RefreshCw, Layers, Award, Sparkles, HelpCircle, Sun, Moon } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<"reader" | "calculators" | "comparator" | "quiz">("reader");
  const [theme, setTheme] = useState<"emerald" | "blue" | "orange" | "violet" | "slate">(() => {
    return (localStorage.getItem("fluid-theme") as any) || "emerald";
  });
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("fluid-dark-mode") === "true";
  });

  const toggleDarkMode = () => {
    const nextVal = !darkMode;
    setDarkMode(nextVal);
    localStorage.setItem("fluid-dark-mode", String(nextVal));
  };

  const selectTheme = (newTheme: "emerald" | "blue" | "orange" | "violet" | "slate") => {
    setTheme(newTheme);
    localStorage.setItem("fluid-theme", newTheme);
  };

  return (
    <div 
      className="min-h-screen bg-gray-50/50 flex flex-col font-sans select-none transition-colors duration-200" 
      id="app-container"
      data-theme={theme}
      data-mode={darkMode ? "dark" : "light"}
    >
      {/* Top Professional Portal Header */}
      <header className="bg-white border-b border-gray-150 sticky top-0 z-40 shadow-sm" id="main-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Droplet Logo matching the active brand color */}
            <div className="bg-emerald-600 text-white p-2 rounded-xl flex items-center justify-center shadow-md shadow-emerald-600/20">
              <Droplets className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-gray-800 dark:text-white tracking-tight text-lg">fluid</span>
                <span className="font-light text-gray-500 dark:text-gray-400 text-lg">therapy.org</span>
              </div>
              <p className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase font-mono">Practical Guidelines Portal</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            {/* Dynamic Interactive Theme Selector Bar */}
            <div className="flex items-center gap-2 bg-gray-100/80 dark:bg-gray-800/80 px-2.5 py-1.5 rounded-xl border border-gray-200/50 dark:border-gray-700/60 transition-all">
              <div className="flex items-center gap-1">
                {[
                  { id: "emerald", bg: "bg-emerald-500", label: "Medical Emerald" },
                  { id: "blue", bg: "bg-blue-500", label: "Clinical Blue" },
                  { id: "orange", bg: "bg-orange-500", label: "Sunset Orange" },
                  { id: "violet", bg: "bg-violet-500", label: "Academic Violet" },
                  { id: "slate", bg: "bg-slate-500", label: "Neutral Slate" },
                ].map((th) => (
                  <button
                    key={th.id}
                    onClick={() => selectTheme(th.id as any)}
                    className={`w-4 h-4 rounded-full transition-transform hover:scale-125 focus:ring-1 focus:ring-slate-400 focus:outline-none relative ${th.bg} ${
                      theme === th.id 
                        ? "ring-2 ring-offset-2 ring-slate-500 dark:ring-offset-slate-900 scale-110" 
                        : "opacity-85 hover:opacity-100"
                    }`}
                    title={th.label}
                    aria-label={`Switch to ${th.label} color team`}
                  />
                ))}
              </div>

              <div className="w-px h-3.5 bg-gray-300 dark:bg-gray-700" />

              <button
                onClick={toggleDarkMode}
                className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors p-0.5 rounded focus:outline-none flex items-center justify-center"
                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                aria-label="Toggle brightness mode"
              >
                {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Practical Medical Badge info */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-gray-505 bg-gray-100/80 dark:bg-gray-800/80 px-3 py-1.5 rounded-lg border border-gray-200/50 dark:border-gray-700/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-gray-600 dark:text-gray-300">Third Edition (2024)</span>
            </div>
          </div>
        </div>
      </header>

      {/* Global Quick Reference Metric Bar */}
      <section className="bg-white border-b border-gray-100 py-3 px-4 shadow-sm" id="reference-strip">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-y-2 gap-x-8 items-center justify-between text-xs text-gray-500 font-medium font-sans">
          <div className="flex items-center gap-1.5">
            <span className="bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-bold font-mono">1 gm NaCl</span>
            <span>= 17 mEq Na+ / Cl- (58mg per mEq)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-bold font-mono">Net Insensible loss</span>
            <span>= 700 mL/day (Urine output + 700 ml requirement)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-bold font-mono">Sepsis Target</span>
            <span>= 30 mL/kg within first 3 hours</span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5">
            <span className="bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-bold font-mono">Geriatric Maintenance</span>
            <span>= 20 to 25 mL/kg/day</span>
          </div>
        </div>
      </section>

      {/* Main Educational Application Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Navigation Tabs Selector */}
        <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-100 flex-wrap md:flex-nowrap gap-1">
          <button
            id="tab-reader"
            onClick={() => setActiveTab("reader")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-semibold tracking-wide transition-all ${
              activeTab === "reader"
                ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/60"
            }`}
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            <span>Study Handbook</span>
          </button>

          <button
            id="tab-calculators"
            onClick={() => setActiveTab("calculators")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-semibold tracking-wide transition-all ${
              activeTab === "calculators"
                ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/60"
            }`}
          >
            <Calculator className="w-4 h-4 shrink-0" />
            <span>Interactive Calculators</span>
          </button>

          <button
            id="tab-comparator"
            onClick={() => setActiveTab("comparator")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-semibold tracking-wide transition-all ${
              activeTab === "comparator"
                ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/60"
            }`}
          >
            <Layers className="w-4 h-4 shrink-0" />
            <span>IV Fluid comparator</span>
          </button>

          <button
            id="tab-quiz"
            onClick={() => setActiveTab("quiz")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-semibold tracking-wide transition-all ${
              activeTab === "quiz"
                ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/60"
            }`}
          >
            <Award className="w-4 h-4 shrink-0" />
            <span>Simulators & Quiz</span>
          </button>
        </div>

        {/* Selected Area Content view */}
        <div className="transition-all" id="content-viewer">
          {activeTab === "reader" && <TextbookReader />}
          {activeTab === "calculators" && <Calculators />}
          {activeTab === "comparator" && <FluidInspector />}
          {activeTab === "quiz" && <Quiz />}
        </div>
      </main>

      {/* Portal Educational Footer */}
      <footer className="bg-white border-t border-gray-150 py-8 px-4 text-center mt-auto" id="main-footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 leading-normal">
          <div className="text-left space-y-1">
            <div className="font-semibold text-gray-700">Practical Guidelines on Fluid Therapy</div>
            <p className="font-light">Complete Monogram on Fluid, Electrolytes, and Acid-Base Disorders by Dr. Sanjay Pandya.</p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center font-medium font-mono text-[11px] text-orange-600">
            <a href="https://www.fluidtherapy.org" target="_blank" rel="noopener noreferrer" className="hover:underline">
              www.fluidtherapy.org
            </a>
            <span className="text-gray-300 hidden md:inline">|</span>
            <a href="https://www.KidneyEducation.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              www.KidneyEducation.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
