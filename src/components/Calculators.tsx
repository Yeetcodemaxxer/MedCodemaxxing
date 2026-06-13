import React, { useState } from "react";
import { Table, Key } from "lucide-react";

export default function Calculators() {
  const [activeTab, setActiveTab] = useState<"tbw" | "solute" | "drip" | "osm">("tbw");

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" id="calculators-root">
      {/* Selector Navigation */}
      <div className="flex border-b border-gray-100 flex-wrap bg-gray-50/50">
        <button
          id="tab-tbw"
          onClick={() => setActiveTab("tbw")}
          className={`flex-1 min-w-[150px] py-4 px-6 text-sm font-medium transition-all text-center border-b-2 ${
            activeTab === "tbw"
              ? "border-emerald-500 text-emerald-700 bg-white"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
          }`}
        >
          💧 TBW & Compartments
        </button>
        <button
          id="tab-solute"
          onClick={() => setActiveTab("solute")}
          className={`flex-1 min-w-[150px] py-4 px-6 text-sm font-medium transition-all text-center border-b-2 ${
            activeTab === "solute"
              ? "border-emerald-500 text-emerald-700 bg-white"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
          }`}
        >
          ⚖️ Solute Converter
        </button>
        <button
          id="tab-drip"
          onClick={() => setActiveTab("drip")}
          className={`flex-1 min-w-[150px] py-4 px-6 text-sm font-medium transition-all text-center border-b-2 ${
            activeTab === "drip"
              ? "border-emerald-500 text-emerald-700 bg-white"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
          }`}
        >
          ⏱️ Drip Rate Calculator
        </button>
        <button
          id="tab-osm"
          onClick={() => setActiveTab("osm")}
          className={`flex-1 min-w-[150px] py-4 px-6 text-sm font-medium transition-all text-center border-b-2 ${
            activeTab === "osm"
              ? "border-emerald-500 text-emerald-700 bg-white"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
          }`}
        >
          🧪 Plasma Osmolality (Tonicity)
        </button>
      </div>

      <div className="p-6 md:p-8">
        {activeTab === "tbw" && <TbwCalculator />}
        {activeTab === "solute" && <SoluteConverter />}
        {activeTab === "drip" && <DripCalculator />}
        {activeTab === "osm" && <OsmolalityCalculator />}
      </div>
    </div>
  );
}

// ==========================================
// 1. TBW COMPARTMENT CALCULATOR
// ==========================================
function TbwCalculator() {
  const [weight, setWeight] = useState<number>(70);
  const [demographic, setDemographic] = useState<"male" | "female" | "elderly" | "obese" | "infant" | "neonate">("male");

  const ratios: Record<string, { pct: number; label: string }> = {
    male: { pct: 0.6, label: "Adult Male (60% TBW)" },
    female: { pct: 0.5, label: "Adult Female (50% TBW)" },
    elderly: { pct: 0.5, label: "Elderly (50% TBW)" },
    obese: { pct: 0.5, label: "Adult Obese (50% TBW)" },
    infant: { pct: 0.7, label: "Infant (70% TBW)" },
    neonate: { pct: 0.8, label: "Neonate (80% TBW)" }
  };

  const selectedRatio = ratios[demographic];
  const tbw = weight * selectedRatio.pct;
  const icf = tbw * (2 / 3);
  const ecf = tbw * (1 / 3);
  const isf = ecf * 0.75;
  const plasma = ecf * 0.25;

  return (
    <div id="calc-tbw-container" className="space-y-6">
      <div className="border-l-4 border-emerald-500 pl-4 py-1">
        <h3 className="text-lg font-semibold text-gray-800">Total Body Water & ECF/ICF Compartments</h3>
        <p className="text-xs text-gray-500">Calculates physiological fluid compartment volumes based on weight and standard demographic parameters.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-5 bg-gray-50 p-6 rounded-xl border border-gray-100">
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Patient Weight (kg)</label>
            <div className="flex items-center gap-4">
              <input
                id="input-weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(Math.max(1, Number(e.target.value)))}
                className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono text-center focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
              <input
                id="slider-weight"
                type="range"
                min="3"
                max="150"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="flex-1 accent-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Demographic Profile (Table 1.1)</label>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(ratios).map(([key, item]) => (
                <button
                  key={key}
                  id={`btn-demographic-${key}`}
                  onClick={() => setDemographic(key as any)}
                  className={`py-2 px-3 text-xs font-medium rounded-lg text-left border transition-all ${
                    demographic === key
                      ? "bg-emerald-500 text-white border-emerald-500 shadow-sm"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-emerald-50 p-4 rounded-lg text-xs leading-relaxed text-emerald-800 border border-emerald-100">
            <strong>Clinical Rule of Thumb:</strong> Interstitial ECF volume is approximately three times as large as intravascular plasma volume. This explains why infusing 1 Liter of Normal Saline or Ringer's Lactate increases plasma volume by only ~250 ml, while 750 ml expands the interstitial compartments.
          </div>
        </div>

        {/* Results */}
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-500/10 border border-emerald-100 rounded-xl p-4 text-center">
              <div className="text-xs font-medium text-emerald-700 uppercase tracking-wider">Total Body Water</div>
              <div className="text-3xl font-bold font-mono text-emerald-600 mt-1">{tbw.toFixed(1)} L</div>
              <div className="text-[10px] text-emerald-500 font-semibold mt-1">{(selectedRatio.pct * 100)}% of Body Weight</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Body Weight</div>
              <div className="text-3xl font-bold font-mono text-gray-700 mt-1">{weight} kg</div>
              <div className="text-[10px] text-gray-400 font-semibold mt-1">Input Parameter</div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Dynamic Volume Distribution:</h4>
            
            {/* ICF bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-semibold text-gray-700">
                <span>Intracellular Fluid (ICF) - 2/3 of TBW</span>
                <span className="font-mono">{icf.toFixed(1)} Liters</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full transition-all" style={{ width: `${(2/3)*100}%` }}></div>
              </div>
            </div>

            {/* ECF bar */}
            <div className="space-y-1 pt-2">
              <div className="flex justify-between text-xs font-semibold text-gray-700">
                <span>Extracellular Fluid (ECF) - 1/3 of TBW</span>
                <span className="font-mono">{ecf.toFixed(1)} Liters</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                <div className="bg-teal-500 h-full rounded-full transition-all" style={{ width: `${(1/3)*100}%` }}></div>
              </div>
              
              {/* ECF breakdowns */}
              <div className="pl-4 border-l-2 border-dashed border-teal-300 mt-2 space-y-2">
                <div className="flex justify-between text-[11px] text-gray-600">
                  <span className="flex items-center gap-1">🟢 Interstitial Fluid (3/4 of ECF):</span>
                  <span className="font-mono font-bold text-gray-700">{isf.toFixed(1)} Liters</span>
                </div>
                <div className="flex justify-between text-[11px] text-gray-600">
                  <span className="flex items-center gap-1">🔴 Intravascular Plasma (1/4 of ECF):</span>
                  <span className="font-mono font-bold text-gray-700">{plasma.toFixed(1)} Liters</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. SOLUTE WEIGHT CONVERTER
// ==========================================
function SoluteConverter() {
  const [selectedSalt, setSelectedSalt] = useState<string>("NaCl");
  const [saltGrams, setSaltGrams] = useState<number>(1);

  const salts: Record<string, { name: string; mEqPerGm: number; mgPerMeq: number; formula: string }> = {
    NaCl: { name: "Sodium Chloride (NaCl)", mEqPerGm: 17, mgPerMeq: 58, formula: "mEq = Grams * 17" },
    KCl: { name: "Potassium Chloride (KCl)", mEqPerGm: 13, mgPerMeq: 75, formula: "mEq = Grams * 13" },
    NaHCO3: { name: "Sodium Bicarbonate (NaHCO3)", mEqPerGm: 12, mgPerMeq: 84, formula: "mEq = Grams * 12" },
    CaGluconate: { name: "Calcium Gluconate", mEqPerGm: 4, mgPerMeq: 224, formula: "mEq = Grams * 4" },
    CaCl2: { name: "Calcium Chloride", mEqPerGm: 14, mgPerMeq: 73, formula: "mEq = Grams * 14" },
    MgSO4: { name: "Magnesium Sulfate", mEqPerGm: 8, mgPerMeq: 123, formula: "mEq = Grams * 8" }
  };

  const saltInfo = salts[selectedSalt];
  const calculatedMeq = saltGrams * saltInfo.mEqPerGm;

  return (
    <div id="calc-solute-container" className="space-y-6">
      <div className="border-l-4 border-emerald-500 pl-4 py-1">
        <h3 className="text-lg font-semibold text-gray-800">Equivalent & Ionic Charge Converter</h3>
        <p className="text-xs text-gray-500">Find the specific milliequivalents of electrolyte delivered per gram of salt added (Table 1.7).</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-5 bg-gray-50 p-6 rounded-xl border border-gray-100">
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Select Salt Compound</label>
            <select
              id="select-salt"
              value={selectedSalt}
              onChange={(e) => setSelectedSalt(e.target.value)}
              className="w-full bg-white px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500"
            >
              {Object.entries(salts).map(([key, item]) => (
                <option key={key} value={key}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Salt Weight (grams)</label>
            <div className="flex items-center gap-4">
              <input
                id="input-salt-weight"
                type="number"
                min="0.1"
                step="0.1"
                value={saltGrams}
                onChange={(e) => setSaltGrams(Math.max(0.1, Number(e.target.value)))}
                className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono text-center focus:outline-none focus:border-emerald-500"
              />
              <input
                id="slider-salt-weight"
                type="range"
                min="0.5"
                max="20"
                step="0.5"
                value={saltGrams}
                onChange={(e) => setSaltGrams(Number(e.target.value))}
                className="flex-1 accent-emerald-500"
              />
            </div>
          </div>

          <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-100 flex items-start gap-2">
            <span className="text-emerald-600 text-lg mt-0.5">ℹ️</span>
            <div className="text-xs leading-relaxed text-emerald-800">
              <strong>Conversion Formula:</strong> {saltInfo.formula}.
              <br />
              Each 1 mEq of cation (or anion) corresponds to exactly {saltInfo.mgPerMeq} mg of total {saltInfo.name} salt.
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="bg-emerald-500/10 border border-emerald-200 rounded-2xl p-6 text-center space-y-1">
            <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Calculated Ions Delivered</div>
            <div className="text-4xl font-bold font-mono text-emerald-600">{calculatedMeq.toFixed(1)} mEq</div>
            <div className="text-sm font-medium text-gray-600 mt-1">Of Cation & Anion separately</div>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 space-y-2">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Standard Reference Conversion Checklist:</h4>
            
            <div className="flex justify-between text-xs text-gray-600 border-b border-gray-200/60 pb-1">
              <span>🧂 Normal Saline (1 Liter at 0.9%)</span>
              <strong className="font-mono text-gray-700">9 gm NaCl = 153 mEq Na+</strong>
            </div>
            <div className="flex justify-between text-xs text-gray-600 border-b border-gray-200/60 pb-1">
              <span>🧪 10 ml of 15% KCl Ampoule</span>
              <strong className="font-mono text-gray-700">1.5 gm KCl = 19.5 mEq K+</strong>
            </div>
            <div className="flex justify-between text-xs text-gray-600 pb-1">
              <span>🩺 25 ml of 7.5% NaHCO3 Ampoule</span>
              <strong className="font-mono text-gray-700">1.86 gm NaHCO3 = 22.3 mEq Na+</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. DROP RATE CALCULATOR
// ==========================================
function DripCalculator() {
  const [totalVolume, setTotalVolume] = useState<number>(1000);
  const [hours, setHours] = useState<number>(8);
  const [dropFactor, setDropFactor] = useState<number>(15);

  const mlPerHour = totalVolume / hours;
  const mlPerMin = mlPerHour / 60;
  const dropsPerMin = mlPerMin * dropFactor;

  // Shortcuts based on Rules of Pandya Guidelines
  const applyRuleOfTen = () => {
    // 24 Hour rate. Calculate rate as (liters in 24 hours) * 10
    const liters = totalVolume / 1000;
    const ruleTime = HoursToMatchVolumeFor24H(totalVolume);
    setHours(24);
    setDropFactor(15);
  };

  const applyRuleOfFour = () => {
    // Drop Rate = (ml/hour) / 4. Works for Drop Factor of 15!
    setDropFactor(15);
  };

  return (
    <div id="calc-drip-container" className="space-y-6">
      <div className="border-l-4 border-emerald-500 pl-4 py-1">
        <h3 className="text-lg font-semibold text-gray-800">Infusion Rate & Drop Rate Calculator</h3>
        <p className="text-xs text-gray-500">Calculate drop rates for gravity-fed intravenous lines using macro or microdrip sets.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-5 bg-gray-50 p-6 rounded-xl border border-gray-100">
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Total Volume to Infuse (mL)</label>
            <input
              id="input-total-volume"
              type="number"
              value={totalVolume}
              onChange={(e) => setTotalVolume(Math.max(50, Number(e.target.value)))}
              className="w-full bg-white px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono text-center focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Time Duration (Hours)</label>
              <input
                id="input-duration-hours"
                type="number"
                min="1"
                max="96"
                value={hours}
                onChange={(e) => setHours(Math.max(1, Number(e.target.value)))}
                className="w-full bg-white px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono text-center focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Tubing Drop Factor (gtts/mL)</label>
              <select
                id="select-drop-factor"
                value={dropFactor}
                onChange={(e) => setDropFactor(Number(e.target.value))}
                className="w-full bg-white px-3 py-2 border border-gray-200 rounded-lg text-sm text-center focus:outline-none focus:border-emerald-500"
              >
                <option value={10}>10 (Macro)</option>
                <option value={15}>15 (Standard Macro)</option>
                <option value={20}>20 (Macro)</option>
                <option value={60}>60 (Pediatric Microdrip)</option>
              </select>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Practical Clinical Shortcuts:</h4>
            <div className="flex gap-2">
              <button
                id="btn-rule-ten"
                onClick={applyRuleOfTen}
                className="flex-1 py-2 px-3 text-xs bg-emerald-50 text-emerald-700 font-medium rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-all"
              >
                Applying Rule of Ten
              </button>
              <button
                id="btn-rule-four"
                onClick={applyRuleOfFour}
                className="flex-1 py-1.5 px-3 text-xs bg-emerald-50 text-emerald-700 font-medium rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-all"
              >
                Applying Rule of Four
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4 flex flex-col justify-center">
          <div className="bg-emerald-500 rounded-2xl p-6 text-white text-center shadow-md shadow-emerald-500/10">
            <div className="text-xs font-medium uppercase tracking-wider opacity-90">Required Drop Rate</div>
            <div className="text-5xl font-extrabold font-mono mt-2 tracking-tight">
              {Math.round(dropsPerMin)} <span className="text-lg font-medium font-sans">gtts / min</span>
            </div>
            <div className="text-xs opacity-75 mt-1 font-mono">
              Exact calculated value: {dropsPerMin.toFixed(1)} drops/minute
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-4">
            <div className="grid grid-cols-2 gap-4 divide-x divide-gray-200 text-center">
              <div>
                <div className="text-[10px] uppercase font-bold text-gray-400">Infusion Rate</div>
                <div className="text-base font-bold font-mono text-gray-700 mt-1">{mlPerHour.toFixed(0)} mL / hr</div>
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-gray-400">Flow volume</div>
                <div className="text-base font-bold font-mono text-gray-700 mt-1">{mlPerMin.toFixed(2)} mL / min</div>
              </div>
            </div>

            {/* Quick formulas display */}
            <div className="bg-white p-3 rounded-lg border border-gray-100 text-xs text-gray-600 leading-relaxed">
              <strong className="text-gray-800">Rule Outputs Verification:</strong>
              <ul className="list-disc pl-4 mt-1 space-y-1">
                <li>
                  <strong className="text-gray-800">Rule of Ten</strong> (at 24h & 15gtts):{" "}
                  <span className="font-mono bg-amber-50 text-amber-800 px-1.5 py-0.5 rounded">
                    {((totalVolume / 1000) * 10).toFixed(0)} drops/minute
                  </span>
                </li>
                <li>
                  <strong className="text-gray-800">Rule of Four</strong> (at 15 gtts/mL):{" "}
                  <span className="font-mono bg-blue-50 text-blue-805 px-1.5 py-0.5 rounded">
                    {(mlPerHour / 4).toFixed(0)} drops/minute
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HoursToMatchVolumeFor24H(totalVol: number): number {
  return 24;
}

// ==========================================
// 4. PLASMA OSMOLALITY & TONICITY CALCULATOR
// ==========================================
function OsmolalityCalculator() {
  const [sodium, setSodium] = useState<number>(140);
  const [glucose, setGlucose] = useState<number>(90);
  const [bun, setBun] = useState<number>(14);

  const totalOsm = 2 * sodium + (glucose / 18) + (bun / 2.8);
  const effectiveOsm = 2 * sodium + (glucose / 18);

  return (
    <div id="calc-osm-container" className="space-y-6">
      <div className="border-l-4 border-emerald-500 pl-4 py-1">
        <h3 className="text-lg font-semibold text-gray-800">Plasma Osmolality & Effective Osmolality (Tonicity)</h3>
        <p className="text-xs text-gray-500">Compare calculated Total Plasma Osmolality against Effective Osmolality/Tonicity straight from the guidelines.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-5 bg-gray-50 p-6 rounded-xl border border-gray-100">
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Plasma Sodium (Na+) mEq/L</label>
            <div className="flex items-center gap-4">
              <input
                id="input-sodium"
                type="number"
                min="100"
                max="180"
                value={sodium}
                onChange={(e) => setSodium(Math.max(100, Number(e.target.value)))}
                className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono text-center focus:outline-none focus:border-emerald-500"
              />
              <input
                id="slider-sodium"
                type="range"
                min="115"
                max="165"
                value={sodium}
                onChange={(e) => setSodium(Number(e.target.value))}
                className="flex-1 accent-emerald-500"
              />
            </div>
            <p className="text-[10px] text-gray-400 mt-1">Normal Plasma Sodium is typically 136 - 145 mEq/L.</p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Plasma Glucose (mg/dL)</label>
            <div className="flex items-center gap-4">
              <input
                id="input-glucose"
                type="number"
                min="0"
                max="600"
                value={glucose}
                onChange={(e) => setGlucose(Math.max(0, Number(e.target.value)))}
                className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono text-center focus:outline-none focus:border-emerald-500"
              />
              <input
                id="slider-glucose"
                type="range"
                min="40"
                max="400"
                value={glucose}
                onChange={(e) => setGlucose(Number(e.target.value))}
                className="flex-1 accent-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Blood Urea Nitrogen (BUN) mg/dL</label>
            <div className="flex items-center gap-4">
              <input
                id="input-bun"
                type="number"
                min="0"
                max="150"
                value={bun}
                onChange={(e) => setBun(Math.max(0, Number(e.target.value)))}
                className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono text-center focus:outline-none focus:border-emerald-500"
              />
              <input
                id="slider-bun"
                type="range"
                min="5"
                max="100"
                value={bun}
                onChange={(e) => setBun(Number(e.target.value))}
                className="flex-1 accent-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-500/5 border border-emerald-100 rounded-xl p-4 text-center">
              <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Calculated Total Osmolality</div>
              <div className="text-3xl font-extrabold font-mono text-emerald-600 mt-1">{totalOsm.toFixed(1)}</div>
              <div className="text-[10px] text-gray-400 font-bold mt-1">mOsm / kg</div>
            </div>

            <div className="bg-blue-500/5 border border-blue-100 rounded-xl p-4 text-center">
              <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Calculated Effective Osmolality</div>
              <div className="text-3xl font-extrabold font-mono text-blue-600 mt-1">{effectiveOsm.toFixed(1)}</div>
              <div className="text-[10px] text-gray-400 font-bold mt-1">mOsm / kg (Tonicity)</div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 text-xs leading-relaxed space-y-3">
            <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200 pb-1 flex items-center gap-1.5">
              💡 Core Physiological Insights:
            </h4>
            <p>
              Under regular conditions, <strong>effective osmolality (tonicity)</strong> is the parameter that actively determines water shifts between the ECF and ICF fluid spaces.
            </p>
            <p>
              <strong>The Urea (BUN) Paradox:</strong> Urea passes freely through lipid-soluble cell membranes. Thus, it cannot establish stable concentration gradients to draw water out of cells. For this reason, elevated BUN increases <em>measured total osmolality</em>, but it does NOT contribute to <em>effective osmolality</em>. Effective tonicity is driven entirely by Sodium and Glucose.
            </p>
            <div className="p-2.5 bg-amber-50 rounded border border-amber-200 text-amber-800">
              <strong>Normal reference range is 275 - 295 mOsm/kg.</strong> If osmolality rises significantly, osmoreceptors inside the hypothalamus trigger water conservation and strong thirst behaviors.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
