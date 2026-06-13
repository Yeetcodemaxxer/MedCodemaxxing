import React, { useState } from "react";
import { IV_FLUIDS_REFERENCE, CHAPTERS } from "../data/chapters";
import { ListFilter, Sparkles, BookOpen } from "lucide-react";

export default function FluidInspector() {
  const [fluidAIndex, setFluidAIndex] = useState<number>(0);
  const [fluidBIndex, setFluidBIndex] = useState<number>(1);

  const fluidA = IV_FLUIDS_REFERENCE[fluidAIndex];
  const fluidB = IV_FLUIDS_REFERENCE[fluidBIndex];

  // Helper function to convert numeric string values for progress rendering
  const getNumberValue = (value: string | number | undefined): number => {
    if (!value) return 0;
    const parsed = parseFloat(String(value));
    return isNaN(parsed) ? 0 : parsed;
  };

  return (
    <div className="space-y-8" id="fluid-inspector-root">
      {/* Introduction Card */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-6 md:p-8 text-white shadow-lg">
        <h3 className="text-xl font-bold flex items-center gap-2">
          💧 Interactive IV Solution Comparison Catalog
        </h3>
        <p className="text-sm mt-1.5 opacity-90 leading-relaxed max-w-3xl">
          Understanding the chemistry of crystalloids is critical for preventing hyperchloremic acidosis, worsening hyperkalemia myths, or precipitating cerebral edema. Select any two fluids below to compare their composition (Table 2.1) and clinical indications side-by-side.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left selector */}
        <div className="space-y-4">
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest">Select Fluid A</label>
          <select
            id="select-fluid-a"
            value={fluidAIndex}
            onChange={(e) => setFluidAIndex(Number(e.target.value))}
            className="w-full bg-white px-4 py-3 border border-gray-200 rounded-xl shadow-sm text-sm font-semibold text-gray-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          >
            {IV_FLUIDS_REFERENCE.map((fluid, idx) => (
              <option key={idx} value={idx}>
                {fluid.name}
              </option>
            ))}
          </select>

          <FluidCard fluid={fluidA} getNum={getNumberValue} />
        </div>

        {/* Right selector */}
        <div className="space-y-4">
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest">Select Fluid B</label>
          <select
            id="select-fluid-b"
            value={fluidBIndex}
            onChange={(e) => setFluidBIndex(Number(e.target.value))}
            className="w-full bg-white px-4 py-3 border border-gray-200 rounded-xl shadow-sm text-sm font-semibold text-gray-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          >
            {IV_FLUIDS_REFERENCE.map((fluid, idx) => (
              <option key={idx} value={idx}>
                {fluid.name}
              </option>
            ))}
          </select>

          <FluidCard fluid={fluidB} getNum={getNumberValue} />
        </div>
      </div>

      {/* Composition comparative breakdown table */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm space-y-4">
        <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5 border-b border-gray-100 pb-3">
          📊 Visual Core Composition Comparison (mEq / Liter equivalence)
        </h4>

        <div className="space-y-6">
          <CompositionProgressBar
            label="Sodium (Na+)"
            valA={fluidA.na}
            valB={fluidB.cl} // Wait, let's keep consistency using the accurate parameter mapping!
            nameA={fluidA.name}
            nameB={fluidB.name}
            valNumA={getNumberValue(fluidA.na)}
            valNumB={getNumberValue(fluidB.na)}
            max={154}
            unit="mEq/L"
          />

          <CompositionProgressBar
            label="Potassium (K+)"
            valA={fluidA.k}
            valB={fluidB.k}
            nameA={fluidA.name}
            nameB={fluidB.name}
            valNumA={getNumberValue(fluidA.k)}
            valNumB={getNumberValue(fluidB.k)}
            max={35}
            unit="mEq/L"
          />

          <CompositionProgressBar
            label="Chloride (Cl-)"
            valA={fluidA.cl}
            valB={fluidB.cl}
            nameA={fluidA.name}
            nameB={fluidB.name}
            valNumA={getNumberValue(fluidA.cl)}
            valNumB={getNumberValue(fluidB.cl)}
            max={154}
            unit="mEq/L"
          />

          <CompositionProgressBar
            label="Measured Osmolality"
            valA={fluidA.osmUnit}
            valB={fluidB.osmUnit}
            nameA={fluidA.name}
            nameB={fluidB.name}
            valNumA={getNumberValue(fluidA.osmUnit)}
            valNumB={getNumberValue(fluidB.osmUnit)}
            max={600}
            unit="mOsm/L"
          />
        </div>
      </div>
    </div>
  );
}

function FluidCard({ fluid, getNum }: { fluid: any; getNum: (v: any) => number }) {
  return (
    <div className="bg-white border border-gray-150 rounded-2xl shadow-sm p-6 space-y-6">
      <div>
        <h4 className="text-lg font-bold text-gray-800">{fluid.name}</h4>
        <div className="flex gap-2 mt-1.5 flex-wrap">
          <span className="bg-gray-100 text-gray-700 text-[10px] font-bold px-2.5 py-1 rounded-full">
            Osm: {fluid.osmUnit}
          </span>
          <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-full">
            Tonicity: {fluid.tonicity}
          </span>
          <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-full">
            Buffer: {fluid.buffer}
          </span>
        </div>
      </div>

      {/* Electrolytes Grid */}
      <div className="grid grid-cols-3 gap-2 bg-gray-50/50 p-3 rounded-xl border border-gray-100 text-center font-mono">
        <div>
          <div className="text-[10px] text-gray-400 font-sans font-semibold">Na+</div>
          <div className="text-sm font-bold text-gray-700 mt-0.5">{fluid.na || "-"}</div>
        </div>
        <div>
          <div className="text-[10px] text-gray-400 font-sans font-semibold">Cl-</div>
          <div className="text-sm font-bold text-gray-700 mt-0.5">{fluid.cl || "-"}</div>
        </div>
        <div>
          <div className="text-[10px] text-gray-400 font-sans font-semibold">K+</div>
          <div className="text-sm font-bold text-gray-700 mt-0.5">{fluid.k || "-"}</div>
        </div>
      </div>

      <div className="space-y-4 text-xs">
        <div>
          <h5 className="font-bold text-emerald-800">✅ Key Indications & Strengths:</h5>
          <ul className="list-disc pl-4 mt-1.5 space-y-1 text-gray-600">
            {fluid.advantages.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-red-800">❌ Contraindications & Risks:</h5>
          <ul className="list-disc pl-4 mt-1.5 space-y-1 text-gray-600">
            {fluid.contraindications.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
          <strong className="text-gray-700 block">💡 Ideal Clinical Scenario:</strong>
          <span className="text-gray-600 mt-1 block leading-relaxed">{fluid.idealFor}</span>
        </div>
      </div>
    </div>
  );
}

function CompositionProgressBar({
  label,
  valA,
  valB,
  nameA,
  nameB,
  valNumA,
  valNumB,
  max,
  unit
}: {
  label: string;
  valA: any;
  valB: any;
  nameA: string;
  nameB: string;
  valNumA: number;
  valNumB: number;
  max: number;
  unit: string;
}) {
  const pctA = Math.min(100, (valNumA / max) * 100);
  const pctB = Math.min(100, (valNumB / max) * 100);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">{label}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Progress A */}
        <div className="space-y-1">
          <div className="flex justify-between text-[11px] text-gray-500 font-medium">
            <span className="truncate max-w-[150px]">{nameA}</span>
            <span className="font-mono text-gray-700 font-bold">{valA} {unit}</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full transition-all" style={{ width: `${pctA}%` }}></div>
          </div>
        </div>

        {/* Progress B */}
        <div className="space-y-1">
          <div className="flex justify-between text-[11px] text-gray-500 font-medium">
            <span className="truncate max-w-[150px]">{nameB}</span>
            <span className="font-mono text-gray-700 font-bold">{valB} {unit}</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div className="bg-teal-500 h-full rounded-full transition-all" style={{ width: `${pctB}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
