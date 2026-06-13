import { Chapter, QuizQuestion } from "../types";

export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: "Chapter 1: Basic Physiology",
    shortDesc: "Total body water, fluid compartments, electrolytes, and units of measurement.",
    sections: [
      {
        title: "Total Body Water (TBW) & Distribution",
        content: [
          "Water is the most abundant component of the body, essential for transport of nutrients, electrolytes, gases, and wastes, maintaining body temperature, and cell shape.",
          "Total body water (TBW) varies mainly with body weight, age, sex, and fat content. It is about 60% of body weight in a young adult male and 50% in a young adult female.",
          "Adipose tissue is relatively dry, meaning that an obese person has proportionally less body water compared to a lean person. Newborns have the highest percentage of TBW (up to 80%), which declines steadily with age.",
          "Measurement techniques of TBW include indicator dilution using Deuterium oxide (2H2O), tritium oxide (3H2O), oxygen-18 labeled water, or bioelectrical impedance analysis (BIA)."
        ],
        tables: [
          {
            title: "Table 1.1: Average Total Body Water as a Percentage of Body Weight",
            headers: ["Group", "Percentage of Body Weight"],
            rows: [
              ["Adult Male", "60%"],
              ["Adult Female", "50%"],
              ["Elderly", "50%"],
              ["Adult Obese", "50%"],
              ["Infant", "70%"],
              ["Neonate", "80%"]
            ]
          },
          {
            title: "Table 1.2: Distribution of Fluid Volume in Body Compartments (for a 70 kg Male)",
            headers: ["Compartment", "% of Body Weight", "Volume (Liters)", "Fraction of TBW"],
            rows: [
              ["Total Body Water (TBW)", "60%", "42.0 L", "1/1"],
              ["Intracellular Fluid (ICF)", "40%", "28.0 L", "2/3 of TBW"],
              ["Extracellular Fluid (ECF)", "20%", "14.0 L", "1/3 of TBW"],
              [" - Interstitial Fluid (ISF)", "15% (3/4 of ECF)", "10.5 L", "1/4 of TBW"],
              [" - Plasma (Intravascular)", "5% (1/4 of ECF)", "3.5 L", "1/12 of TBW"]
            ],
            notes: "There is another small ECF compartment called transcellular fluid, which includes cerebrospinal fluid (CSF), synovial, peritoneal, pericardial, and intraocular spaces. Sodium balance regulates ECF volume, while water balance regulates ICF volume."
          }
        ],
        clinicalClues: [
          "Since sodium-containing fluids expand the ECF, they distribute throughout both the interstitial and intravascular spaces, so interstitial space expansion is approximately 3 times as much as plasma.",
          "Obese patients require less initial fluid per kg of actual body weight because fat tissue has low water content."
        ]
      },
      {
        title: "Fluid and Electrolytes Movement",
        content: [
          "Cell membranes separating ECF and ICF compartments are selectively permeable.",
          "Water passes freely and readily in response to solute concentration changes. Consequently, the osmolalities in all body compartments are always equal in steady state.",
          "Hydrostatic pressure and oncotic pressure are the two major determinants of fluid movement between intravascular and interstitial spaces (Starling's forces).",
          "Major water retaining solutes: Sodium (Na+) in ECF, Potassium (K+) in ICF, and Plasma Proteins inside intravascular compartments.",
          "Unlike water, solutes cannot cross cell membranes freely. Their compartmentalization is maintained by active transport mechanisms, primarily the sodium-potassium ATPase pump (Na+-K+-ATPase) found in all cell membranes, keeping Na+ outside and K+ inside cells."
        ]
      },
      {
        title: "Normal Water Balance & Insensible Losses",
        content: [
          "A healthy adult consumes an average of 2000 ml of water per day.",
          "Daily water intake comes from oral liquids, food, and water synthesized by metabolic oxidation.",
          "Thirst is primarily regulated by high ECF osmotic pressure stimulating osmoreceptors in the brain's hypothalamus thirst center. Drinking and stomach distension inhibit thirst.",
          "Water loss occurs via kidneys (urine output), feces, sweat (sensible), skin (insensible evaporation), and lungs (during breathing).",
          "Insensible Fluid Input = 300 ml water due to oxidation.",
          "Insensible Fluid Loss = 1000 ml total (500 ml skin, 400 ml lung, 100 ml stool).",
          "Normal Daily Net Insensible Fluid Loss = (Insensible Loss) - (Insensible Input) = 1000 - 300 ml = 700 ml.",
          "Therefore, the minimum daily fluid requirement for a healthy person is: Urine Output + 700 mL."
        ],
        keyTakeaways: [
          "Net daily insensible water loss is 700 ml under standard conditions.",
          "Water loss is increased significantly during exercise, excessive sweating, fever, burns, and surgical interventions."
        ]
      },
      {
        title: "Electrolyte Distribution & Balance",
        content: [
          "The normal electrolyte compositions of each fluid compartment differ markedly.",
          "The ECF compartment contains a high concentration of sodium, chloride, and bicarbonate, with a very small quantity of potassium.",
          "The ICF compartment contains high concentrations of potassium, magnesium, phosphate, sulfate, and proteins."
        ],
        tables: [
          {
            title: "Table 1.3: Electrolyte Concentration of Body Fluids (mEq/L)",
            headers: ["Electrolyte", "ECF (mEq/L)", "ICF (mEq/L)"],
            rows: [
              ["Sodium (Na+)", "142.0", "10.0"],
              ["Potassium (K+)", "4.3", "150.0"],
              ["Chloride (Cl-)", "104.0", "2.0"],
              ["Bicarbonate (HCO3-)", "24.0", "6.0"],
              ["Calcium (Ca2+)", "5.0", "0.01"],
              ["Magnesium (Mg2+)", "3.0", "40.0"],
              ["Phosphate & Sulfate", "8.0", "15.0"]
            ]
          },
          {
            title: "Table 1.4: Major Ions in ECF and ICF",
            headers: ["Compartment", "Major Cations", "Major Anions"],
            rows: [
              ["ECF", "Sodium (Na+)", "Chloride (Cl-) & Bicarbonate (HCO3-)"],
              ["ICF", "Potassium (K+) & Magnesium (Mg2+)", "Phosphate (PO4 3-), Sulfate, & Proteins"]
            ]
          }
        ]
      },
      {
        title: "Units of Measurement & Chemical Formulas",
        content: [
          "Ions: Atoms/groups with electric charge. Anions are negative (e.g. Cl-, HCO3-, phosphate). Cations are positive (e.g. Na+, K+, Mg2+).",
          "Mnemonic: Anion has 'n' representing negative charge. Cation has 't' resembling a '+' (positive) sign.",
          "Moles and Millimoles: 1 mole represents 6.022 x 10^23 particles (molecular weight in grams). 1 millimole (mmol) = 1/1000 of a mole.",
          "Equivalent and Milliequivalent: An equivalent represents a mole of ionic charges.",
          "Equivalents = Moles * Valence. For monovalent ions, mmol/L = mEq/L. For divalent ions like Calcium (Ca2+), 1 mmol = 2 mEq."
        ],
        tables: [
          {
            title: "Table 1.5: Atomic and Molecular Weights of Important Substances",
            headers: ["Substance", "Symbol / Formula", "Atomic or Molecular Weight"],
            rows: [
              ["Calcium / Calcium Ion", "Ca2+", "40.1"],
              ["Carbon", "C", "12.0"],
              ["Chloride Ion", "Cl-", "35.5"],
              ["Hydrogen Ion", "H+", "1.0"],
              ["Magnesium Ion", "Mg2+", "24.3"],
              ["Oxygen", "O", "16.0"],
              ["Phosphorus", "P", "31.0"],
              ["Potassium Ion", "K+", "39.1"],
              ["Sodium Ion", "Na+", "23.0"],
              ["Ammonium", "NH4+", "18.0"],
              ["Bicarbonate Ion", "HCO3-", "61.0"],
              ["Phosphate Ion", "PO4 3-", "95.0"],
              ["Water", "H2O", "18.0"]
            ]
          },
          {
            title: "Table 1.6: Normal Plasma Electrolyte Concentrations",
            headers: ["Electrolyte", "mEq/L", "mmol/L"],
            rows: [
              ["Cations: Sodium", "136 to 145", "136 to 145"],
              ["Cations: Potassium", "3.5 to 5.0", "3.5 to 5.0"],
              ["Cations: Calcium (Total)*", "4.5 to 5.6", "2.2 to 2.6"],
              ["Cations: Ionized Calcium*", "2.2 to 2.6", "1.05 to 1.3"],
              ["Cations: Magnesium*", "1.4 to 1.7", "0.70 to 0.85"],
              ["Anions: Chloride", "96 to 106", "96 to 106"],
              ["Anions: Bicarbonate", "22 to 26", "22 to 26"]
            ],
            notes: "*Normal range in mg/dL: Total Calcium is 8.5-10.5 mg/dL, Ionized Calcium is 4.3-5.3 mg/dL, and Magnesium is 1.7-2.1 mg/dL."
          },
          {
            title: "Table 1.7: Practical Salt-to-Milliequivalent Weight Conversion Factors",
            headers: ["Salt", "mEq Cation or Anion per Gram of Salt", "mg of Salt per 1 mEq of Electrolyte"],
            rows: [
              ["Sodium Chloride (NaCl)", "17 mEq", "58 mg"],
              ["Potassium Chloride (KCl)", "13 mEq", "75 mg"],
              ["Sodium Bicarbonate (NaHCO3)", "12 mEq", "84 mg"],
              ["Calcium Gluconate", "4 mEq", "224 mg"],
              ["Calcium Chloride", "14 mEq", "73 mg"],
              ["Magnesium Sulfate", "8 mEq", "123 mg"]
            ]
          }
        ],
        clinicalClues: [
          "Conversion formulas:\n  • mmol/L = (mg/dL * 10) / Atomic Weight\n  • mEq/L = (mg/dL * 10 * Valence) / Molecular Weight\n  • mg/dL = (mEq/L * Molecular Weight) / (10 * Valence)",
          "1 gm of salt (NaCl) in 1 L of water yields 17.1 mEq/L of Sodium and 17.1 mEq/L of Chloride.",
          "10 ml ampoule of 15% Potassium Chloride (KCl) contains 1.5 grams of KCl, which provides 1.5 * 13 = 19.5 mEq of K+.",
          "25 ml ampoule of 7.5% Sodium Bicarbonate (NaHCO3) contains 1.86 grams of NaHCO3, which provides 1.86 * 12 = 22.3 mEq of Na+."
        ]
      },
      {
        title: "Osmolality, Osmolarity, and Tonicity",
        content: [
          "Osmotic pressure: Determined by the number of solute particles per unit volume of solvent, not by their charge, valence, or mass. Solutes must be unable to cross the membrane to exert tonicity.",
          "Osmole (Osm): 1 gram molecular weight of a non-dissociating substance (like glucose). Salts that dissociate (like NaCl) create multiple particles (1 mmol NaCl dissociates into 1 mmol Na+ and 1 mmol Cl-, yielding 2 mOsm).",
          "Osmolarity: Moles of solute per Liter of fluid ('r' for LitRe). Affected by temperature.",
          "Osmolality: Moles of solute per Kilogram of solvent ('l' for KilogLam). More accurate and used clinically.",
          "Plasma Osmolality is normally 285 mOsm/kg (range: 275-295). It is largely determined by sodium salts, with small contributions from glucose and urea.",
          "Formula for calculated total plasma osmolality:\n  Total Osmolality = 2 * Na+ (mEq/L) + (Glucose [mg/dL] / 18) + (BUN [mg/dL] / 2.8)",
          "Effective Osmolality (Tonicity): Relies on solutes that cannot cross cell membranes (sodium, glucose). Urea is lipid soluble and passes cell membranes freely, so it contributes to total osmolality but NOT effective osmolality (it does not cause water shifts)."
        ],
        keyTakeaways: [
          "Effective Osmolality = 2 * Na+ (mEq/L) + (Glucose [mg/dL] / 18)",
          "Under healthy regular conditions, glucose provides only about 5 mOsm/kg of the effective osmolality. Therefore, plasma sodium concentration is the major reflector of osmolality."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Chapter 2: Overview of Intravenous Fluids",
    shortDesc: "Comprehensive comparison of fluid types, indications, rate calculation, and risks.",
    sections: [
      {
        title: "Composition of Common IV Solutions",
        content: [
          "Selecting appropriate IV fluids requires knowing the exact electrolyte, buffer, osmolar, and caloric values.",
          "A major category is Balanced (Physiological) Crystalloids (e.g. Ringer's lactate, PlasmaLyte, Sterofundin) which closely mirror the ECF composition, minimizing the risk of hyperchloremic metabolic acidosis."
        ],
        tables: [
          {
            title: "Table 2.1: Complete Chemical Composition of Common Intravenous Solutions (/L)",
            headers: ["Fluid", "Dextrose (g)", "kcal/L", "Na+", "K+", "Cl-", "Acetate", "Lactate", "Ca2+", "Mg2+", "Others", "Osm", "SID"],
            rows: [
              ["5% Dextrose (D5W)", "50", "170", "0", "0", "0", "0", "0", "0", "0", "None", "252", "0"],
              ["10% Dextrose", "100", "340", "0", "0", "0", "0", "0", "0", "0", "None", "505", "0"],
              ["0.45% Saline (Half NS)", "0", "0", "77", "0", "77", "0", "0", "0", "0", "None", "154", "0"],
              ["D5W + 0.45% Saline", "50", "170", "77", "0", "77", "0", "0", "0", "0", "None", "406", "0"],
              ["Normal (0.9%) Saline", "0", "0", "154", "0", "154", "0", "0", "0", "0", "None", "308", "0"],
              ["Dextrose Saline (D5NS)", "50", "170", "154", "0", "154", "0", "0", "0", "0", "None", "560", "0"],
              ["Ringer's Lactate (RL)", "0", "0", "130", "4.0", "109", "0", "28", "3.0", "0", "None", "273", "28"],
              ["Ringer's Acetate", "0", "0", "130", "5.0", "112", "27", "0", "3.0", "2.0", "None", "276", "27"],
              ["PlasmaLyte", "0", "0", "140", "5.0", "98", "27", "0", "0", "3.0", "Gluconate 23", "295", "50"],
              ["Sterofundin", "0", "0", "145", "4.0", "127", "24", "0", "5.0", "2.0", "None", "309", "29"],
              ["Isolyte-G", "50", "170", "63", "17", "150", "0", "0", "0", "0", "NH4+ 70", "578", "NA"],
              ["Isolyte-M", "50", "170", "37", "35", "37", "20", "0", "0", "0", "HPO4 3- 15", "415", "NA"],
              ["Isolyte-P", "50", "170", "25", "20", "24", "23", "0", "0", "3.0", "HPO4 3- 3", "348", "NA"],
              ["Isolyte-E", "50", "170", "140", "10", "103", "47", "0", "5.0", "3.0", "Citrate 8", "595", "57"],
              ["Isolyte-S", "0", "0", "141", "5.0", "98", "27", "0", "5.0", "3.0", "HPO4 3- 1, Gluc. 23", "295", "NA"]
            ],
            notes: "Dextrose concentrations are in gms/L. SID: Strong Ion Difference (mEq/L). Osm: Osmolality (mOsm/L). NH4+: Ammonium, Gluconate is listed under Gluc."
          }
        ]
      },
      {
        title: "Clinical Indications, Advantages & Risks",
        content: [
          "Clinical Indications:\n  1. Resuscitation: Fluid replacement in shock and severe tissue dehydration.\n  2. Daily Maintenance: Patient is unable to take oral or enteral intake (e.g. coma, surgery, gastrointestinal rest).\n  3. Replacement: Restoring severe gastrointestinal losses (vomiting, diarrhea), third space fluids (sepsis, ascites, pancreatitis, peritonitis), or open hemorrhages.\n  4. Metabolic Correction: Re-establishing pH and electrolyte concentrations.\n  5. Severe Hypoglycemia: Life-saving emergency 25% or 50% intravenous dextrose.\n  6. Drug Dilution: Vehicle for medication infusion (NS, D5W).",
          "Contraindications:\n  • Intravenous line should be completely avoided if the patient has normal gastrointestinal function and can take oral hydration.\n  • Administer with extreme caution or avoid if patient presents with congestive heart failure, pulmonary congestion, or fluid volume overload.",
          "Major Risks & Complications:\n  • Local: Haematoma, extravasation infiltration, infusion phlebitis.\n  • Systemic: Cardiovascular/circulatory volume overload, pulmonary congestion, rigors, air embolism, and catheter-induced septicemia."
        ],
        clinicalClues: [
          "Always prefer oral route over intravenous route whenever possible.",
          "Improper fluid selection (e.g. infusing hypotonic fluids to a head injury patient) can worsen outcomes, cause cerebral edema, or lead to cardiopulmonary arrest."
        ]
      },
      {
        title: "Electrolyte content summary across fluids",
        content: [
          "Sodium content: Maximum in Normal Saline & D5NS (154 mEq/L), followed by Sterofundin (145 mEq/L), PlasmaLyte (140 mEq/L), and Ringer's lactate (130 mEq/L). Isolyte-P is very low-sodium (25 mEq/L). 3% NaCl contains 513 mEq/L.",
          "Chloride content: Maximum in Normal Saline, D5NS, and Isolyte-G (all 154 mEq/L). Because PlasmaLyte has low chloride (98 mEq/L), it minimizes hyperchloremia.",
          "Potassium content: Isolyte-M has the highest potassium content (35 mEq/L), followed by Isolyte-P (20 mEq/L), and Isolyte-G (17 mEq/L). Balanced crystalloids contain only standard physiological values (4 to 5 mEq/L).",
          "Acidosis Correction: Corrected by lactate-containing (converted to bicarbonate in liver only) or acetate-containing fluids (metabolized globally in liver + muscles, making it safer in shock and hepatic failure).",
          "Alkalosis Correction: Isolyte-G stands as the single specialized solution to address metabolic alkalosis. It relies on Ammonium Chloride (NH4Cl = 70 mEq/L), which undergoes hepatic conversion to urea and H+ ions to normalize blood pH."
        ]
      },
      {
        title: "Manual Flow & Drop Rate Calculations",
        content: [
          "In non-ICU setups where automated infusion pumps are unavailable, manual calculations are needed using macro or microdrip administration tubings.",
          "Macro-drip sets: Standard sets deliver 10, 15, or 20 drops per milliliter (drops/mL).",
          "Micro-drip sets: Pediatric/small infusion sets provide 60 micro-drops per milliliter (60 drops/mL).",
          "Drip Rate Calculations:\n  1. Volume per Hour = Total Fluid (mL) / Time Duration (Hours)\n  2. Volume per Minute = (Volume per Hour) / 60\n  3. Drip Rate (drops/min) = Volume per Minute * Tubing Drop Factor (drops/mL)",
          "Simple clinical macro formulas (calibrated for a drop factor of 15 drops/ml):\n  • Rule of Ten (24-hour rate): Infusion over 24 hours. Drip Rate (drops/min) = Volume in Liters * 10.\n    - Example: 2.0 Liters inside 24 hours = 2.0 * 10 = 20 drops/min.\n    - Example: 3.0 Liters inside 24 hours (1L every 8 hours) = 30 drops/min.\n  • Rule of Four (Hourly rate shortcut): Drip Rate (drops/min) = Volume in mL/hour ÷ 4.\n    - Example: Infusing 60 mL/hour = 60 / 4 = 15 drops/min.\n    - Example: Infusing 200 mL/hour = 200 / 4 = 50 drops/min."
        ],
        keyTakeaways: [
          "For Micro-drip tubing (60 drops/ml), the Drop Rate in micro-drops/minute is exactly identical to the infusion volume rate in mL/hour (e.g. 30 mL/hour = 30 micro-drops/minute)."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Chapter 3: Dextrose and Sodium Chloride Solutions",
    shortDesc: "Details on 5% Dextrose, Normal Saline, half-normal saline, and dextrose-saline mixtures.",
    sections: [
      {
        title: "5% Dextrose in Water (D5W)",
        content: [
          "D5W is composed of 50 grams of anhydrous dextrose inside sterile water, yielding 170 kcal/L with an initial bag osmolality of 252 mOsm/L and an acidic pH range of 4.3 (3.2 to 6.5).",
          "Pharmacological basis: D5W provides free water with glucose without electrolytes. Used when free water replacement is necessary.",
          "Why we add dextrose to water: Intravenous infusion of sterile pure water alone causes localized hemolysis of red blood cells. The addition of 5% dextrose makes the fluid near-isotonic in the bag, preventing hemolysis during raw administration.",
          "In vivo osmolality difference: Although isotonic in the bag, once infused, dextrose is rapidly metabolized by tissues. This leaves behind pure free water, rendering the fluid highly hypotonic in vivo with an active osmolality of zero."
        ],
        keyTakeaways: [
          "Avoid D5W in acute blood loss or resuscitation, as it distributes primarily to the intracellular space, expanding intravascular volume by only 8%."
        ]
      },
      {
        title: "Normal Saline (0.9% NaCl)",
        content: [
          "Composition: Contains 154 mEq/L of Sodium and 154 mEq/L of Chloride, with an osmolality of 308 mOsm/L and an acidic pH of ~5.5.",
          "Pharmacological basis: NS contains supraphysiologic chloride concentrations (154 mEq/L, which is 50% higher than the normal human serum range of 96-106 mEq/L). It lacks essential plasma electrolytes (K+, Ca2+, Magnesium) and contains no buffering agents.",
          "Disadvantages & Risks of Large Volume Normal Saline:\n  1. Hyperchloremic Metabolic Acidosis: Infusing large volumes reduces the ECF Strong Ion Difference (SID) toward zero, leading to severe hyperchloremic metabolic acidosis.\n  2. Renal Vasoconstriction (AKI risk): High chloride concentrations delivered to the distal tubules are detected by the macula densa, trigger 'Tubuloglomerular Feedback', constrict the afferent arterioles, decrease renal perfusion, and reduce the GFR.\n  3. Intestitial Fluid Retention: Leads to significant peripheral interstitial edema, delayed tissue healing, and pulmonary congestion."
        ],
        clinicalClues: [
          "Normal Saline is the absolute fluid of choice for correcting hypovolemic hyponatremia, profound hypocloremic metabolic alkalosis (e.g. from vomiting), traumatic brain injury (TBI), and during blood product transfusions."
        ]
      },
      {
        title: "Half-Normal Saline (0.45% NaCl)",
        content: [
          "Composition: Comprises 77 mEq/L Sodium and 77 mEq/L Chloride, with a hypotonic osmolality of 154 mOsm/L.",
          "Mainly used to supplement water loss or correct hypernatremia.",
          "Addition of Dextrose (D5W in 0.45% Saline) provides both free water, calories to prevent starvation ketosis, and 77 mEq of sodium to preserve extracellular space."
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Chapter 4: Balanced and Multi-electrolyte Solutions",
    shortDesc: "Ringer's lactate, Ringer's acetate, PlasmaLyte, and Sterofundin.",
    sections: [
      {
        title: "Ringer's Lactate (RL) / Hartmann's",
        content: [
          "Ringer's lactate is also known as Hartmann's solution or sodium lactate solution. It contains Na+ (130 mEq/L), K+ (4.0 mEq/L), Cl- (109 mEq/L), Calcium (3.0 mEq/L), and Lactate (28 mEq/L), with an osmolality of 273 mOsm/L (physiologically near-isotonic, but slightly hypotonic in vivo).",
          "Lactate buffer is primarily converted to bicarbonate inside the liver to correct metabolic acidosis.",
          "Contraindications / Limitations of RL:\n  1. Severe liver impairment: Liver failure prevents metabolism of lactate, leading to lactate accumulation.\n  2. Risk of Cerebral Edema: RL is slightly hypotonic (273 mOsm/L). Avoid in head injuries or patients at risk of intracranial pressure.\n  3. Blood Transfusion incompatibilities: Calcium in RL binds to the citrate anticoagulant used in packed red blood cells, causing calcium-citrate precipitation inside the IV line."
        ],
        clinicalClues: [
          "RL is safe in patients with hyperkalemia. While it contains 4 mEq/L K+ (which is low), it prevents hyperchloremic acidosis (unlike Normal Saline), preventing the shift of potassium out of cells. It acts to trend serum potassium toward normal."
        ]
      },
      {
        title: "Newer Balanced Crystalloids: PlasmaLyte & Sterofundin",
        content: [
          "PlasmaLyte replicates human plasma. It replaces calcium with magnesium to avoid blood product precipitation, and substitutes lactate with acetate and gluconate buffers.",
          "Sterofundin is another isotonic balanced salt solution containing acetate buffer (24 mEq/L), Ca2+ (5.0 mEq/L), and Mg2+ (2.0 mEq/L), with an osmolality of 309 mOsm/L.",
          "The major benefit of acetate-buffered crystalloids (PlasmaLyte, Sterofundin) is that acetate is metabolized globally in multiple tissues (liver, skeletal muscles), rather than being limited to the liver like lactate. This makes them highly effective in correcting acidosis during hepatic failure or severe circulatory shock."
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Chapter 5: Colloid Solutions",
    shortDesc: "Comparison of Albumin, HES, Gelatins, and Dextrans with Crystalloids.",
    sections: [
      {
        title: "Introduction to Colloids",
        content: [
          "Colloids are volume expanders containing large solute molecules that cannot readily pass through semipermeable capillary membranes. Consequently, colloid solutions remain entirely inside the intravascular compartments.",
          "They are three times more effective in expanding intravascular plasma volume compared to crystalloids.",
          "Potent or rapid volume expansion represents a major advantage, but their routine usage remains highly debated due to high costs and risks of complications."
        ]
      },
      {
        title: "Human Albumin Solution",
        content: [
          "Albumin is a natural human plasma protein available in 5% (isotonic) or 20%-25% (hypertonic) concentrations.",
          "It is highly effective and safe but comes with a 30 to 100 times higher cost compared to crystalloids.",
          "Absolute Indications for Albumin:\n  1. Large-volume paracentesis (ascites draining > 5 Liters) to prevent post-paracentesis circulatory dysfunction.\n  2. Spontaneous Bacterial Peritonitis (SBP) combined with antibiotics.\n  3. Hepatorenal syndrome in decompensated cirrhosis.",
          "Severe contraindication: Traumatic Brain Injury (TBI). 4% Albumin was shown in the SAFE trial to increase mortality in TBI patients, most likely due to its mild hypotonicity (260 mOsm/kg) increasing intracranial pressure and brain edema."
        ],
        clinicalClues: [
          "Avoid using Albumin for general or routine resuscitation. Limit its use to cirrhosis complications or severe hypoalbuminemia unresponsive to crystalloids."
        ]
      },
      {
        title: "Synthetic Colloids (HES, Gelatins, Dextrans)",
        content: [
          "Hydroxyethyl Starch (HES): Once widely popular, it is associated with increased acute kidney injury, renal replacement therapy, and mortality in critically ill patients, especially those with sepsis. The European Medicines Agency suspended its marketing and usage in 2022.",
          "Gelatin Polymers (e.g. Polygeline): Associated with significant risk of anaphylaxis, coagulation impairment, acute kidney injury, and increased mortality. Currently recommended against in Surviving Sepsis Guidelines.",
          "Dextrans (Dextran 40, Dextran 70): Used selectively in microvascular surgeries due to its ability to reduce blood viscosity and improve microcirculation. It is restricted due to severe anaphylactic risk, renal tubular damage, and blood cross-matching interference."
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Chapter 6: Principles, Planning, and Prescribing Fluid Therapy",
    shortDesc: "Meticulous design, clinical indicators, and the '4 D's' of fluid stewardship.",
    sections: [
      {
        title: "Meticulous Prescribing and Fluid Stewardship",
        content: [
          "Intravenous fluids should be prescribed with the same caution as other drugs like antibiotics. Both under-administration and over-administration can cause severe harm.",
          "Fluid Overload is a major, often-overlooked complication of overzealous fluid administration, leading to increased patient morbidity, pulmonary edema, bowel edema, and systemic organ dysfunction.",
          "Plan meticulously by monitoring the 4 D's of Fluid Therapy:\n  1. Drug: Selecting the precise fluid type (NS vs RL vs PlasmaLyte).\n  2. Dosing: Calculating the exact weight-based volume & infusion rate.\n  3. Duration: Defining clear timing parameters for stopping the infusion.\n  4. De-escalation: Phasing out high volumes, encouraging oral or enteral intake, and initiating de-resuscitation/diuresis if necessary."
        ],
        keyTakeaways: [
          "Constantly evaluate the clinical state (urine output, vitals, skin hydration, electrolytes) to adjust fluid prescriptions.",
          "Fluid demands are entirely dynamic, requiring immediate adjustments as patients transition between resuscitation, stabilization, and de-escalation cycles."
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Chapter 7: Maintenance Fluid Therapy",
    shortDesc: "Physiological principles, daily maintenance requirements, and avoiding fluid overload.",
    sections: [
      {
        title: "Physiological Principles & Requirements",
        content: [
          "The main goal of maintenance fluid therapy is replacing ongoing physiologic losses (urine, sweat, respiration, feces) while preserving stable extracellular volume, water/electrolyte balance, and supplying initial calories to prevent starvation ketosis.",
          "Daily normal maintenance requirements in healthy adults:\n  • Water: 25 to 30 mL/kg/day\n  • Sodium: 1 mEq/kg/day\n  • Potassium: 1 mEq/kg/day\n  • Dextrose: 100 grams/day",
          "There is significant debate regarding the usage of hypotonic maintenance fluids (e.g. Isolyte-M, Isolyte-P, 0.45% Saline) inside hospitals due to a high risk of iatrogenic hyponatremia. Many international guidelines now suggest using isotonic maintenance fluids (like buffered crystalloids) unless specific water deficits exist.",
          "Beware of 'Fluid Creep': Unintended fluid and salt burdens from drug dilution volumes, flush lines, or keep-open lines, which can add up to several liters per day in critically ill patients."
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Chapter 8: Resuscitation Fluids",
    shortDesc: "Rapid volume recovery, physiological distribution, and clinical trial reviews.",
    sections: [
      {
        title: "Resuscitation Principles & Wave-Based Phases",
        content: [
          "Resuscitation focuses on rapid IV fluid administration to restore circulating intravascular volume in severe hypovolemic shock, sepsis, burns, or acute hemorrhage.",
          "Early aggressive volume resuscitation reduces mortality. Surviving Sepsis Campaign guidelines (2021) recommend infusing at least 30 mL/kg of IV crystalloids within the first 3 hours of diagnosing sepsis.",
          "Initial targets: achieve an average Mean Arterial Pressure (MAP) of 65 mmHg.",
          " Resuscitation occurs in clinical phases:\n  1. Salvage phase (0-24 hours): Rapid volume replacement is necessary to correct tissue hypoperfusion.\n  2. Optimization/Stabilization phase (24-96 hours): Restricting excessive fluid infusion and reducing flow rates.\n  3. De-escalation phase (>96 hours): Restrictive strategy, actively mobilizing fluid, or diuresis to achieve negative fluid balance."
        ],
        tables: [
          {
            title: "Table 8.1: Distribution of 1000 ml of Various IV Solutions across Body Compartments",
            headers: ["Solution Infused (1000 ml)", "Intracellular (ICF) ml", "Extracellular (ECF) ml", "Interstitial ml", "Intravascular (Plasma) ml"],
            rows: [
              ["5% Dextrose (D5W)", "667 ml", "333 ml", "250 ml", "83 ml"],
              ["0.45% Saline (Half NS)", "333 ml", "667 ml", "500 ml", "167 ml"],
              ["Normal Saline / RL", "0 ml", "1000 ml", "750 ml", "250 ml"],
              ["Colloids / Blood products", "0 ml", "1000 ml", "0 ml", "1000 ml"]
            ]
          }
        ],
        clinicalClues: [
          "Why 5% Dextrose is contraindicated in Resuscitation / Shock:\n  1. Minimal Intravascular Expansion: Only 83 mL of 1 Liter remains in the intravascular space. It is a very poor option for restoring blood pressure.\n  2. Osmotic Diuresis: Fast infusion loads excess glucose (>25 g/hour), causing hyperglycemia and osmotic diuresis. This worsens cellular dehydration and obscures clinical urine output monitoring."
        ]
      },
      {
        title: "Saline vs. Balanced Crystalloids: Clinical Trials",
        content: [
          "Selecting between normal saline and buffered balanced crystalloids remains an active debate, but clinical trials highlight the safety benefits of balanced solutions.",
          "Clinical Trials on Saline vs Balanced Crystalloids:\n  • SMART Trial (2018): Trial on 15,802 critically ill patients. Balanced crystalloids significantly reduced deaths, need for renal replacement therapy (RRT), or persistent GFR decline compared to Normal Saline.\n  • SALT-ED Trial (2018): Trial on 13,347 non-critically ill adults, displaying lower rates of renal replacement therapy or GFR deficits in the balanced group.\n  • SPLIT Trial (2015): Trial on 2278 ICU patients, showing no major difference (partially due to small median volumes given).\n  • BaSICS (2021) & PLUS (2022) Trials: Indicated no major differences in overall mortality, but meta-analyses confirm the safety advantages of balanced solutions (reduced acute kidney injury and hyperchloremia)."
        ],
        tables: [
          {
            title: "Table 8.2: Detailed Composition of Resuscitation Fluids vs. Human Plasma",
            headers: ["Fluid", "Na+ (mEq/L)", "K+ (mEq/L)", "Cl- (mEq/L)", "Acetate (mEq/L)", "Lactate (mEq/L)", "Ca2+ (mEq/L)", "Mg2+ (mEq/L)", "Gluc. (mEq/L)", "Osm. (mOsm/L)", "SID (mEq/L)"],
            rows: [
              ["Plasma", "136 - 145", "3.5 - 5.0", "98 - 106", "0", "0", "2.2 - 2.6", "0.8 - 1.0", "0", "285 - 295", "40"],
              ["0.9% NaCl", "154", "0", "154", "0", "0", "0", "0", "0", "308", "0"],
              ["RL", "130", "4.0", "109", "0", "28", "3.0", "0", "0", "273", "28"],
              ["PlasmaLyte", "140", "5.0", "98", "27", "0", "0", "3.0", "23", "295", "50"],
              ["Sterofundin", "145", "4.0", "127", "24", "0", "5.0", "2.0", "0", "309", "29"]
            ],
            notes: "Gluc. represents Gluconate buffer. SID is Strong Ion Difference."
          }
        ]
      },
      {
        title: "Guidelines for Blood Transfusion",
        content: [
          "Transfusion parameters inside hypovolemic hemorrhagic shock:\n  1. In hemodynamically stable hospitalized adult patients, initiate transfusion only if Hemoglobin (Hb) drops to ≤ 7 gm/dL (target Hb: 7-9 gm/dL).\n  2. In patients at high cardiac risk (myocardial ischemia, cardiac surgery), initiate transfusion if Hb drops to ≤ 8 gm/dL, aiming for a target Hb ≥ 8 gm/dL.\n  3. During active severe bleeding, base decisions on clinical hemodynamics (shock index, blood pressure, pulse, coagulation risk) rather than waiting for serial laboratory Hb levels.",
          "In massive blood losses, implement a Massive Transfusion Protocol using a balanced 1:1:1 ratio: 1 Unit of Packed Red Blood Cells (PRBCs) to 1 Unit of Fresh Frozen Plasma (FFP) to 1 Unit of Platelets, to avoid dilutional coagulopathy.",
          "Avoid using liberal transfusion ratios. Raising Hb > 10 gm/dL increases blood viscosity, slows capillary perfusion, and can trigger organ ischemic dysfunction."
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Chapter 9: Fluid Therapy in the Elderly",
    shortDesc: "Age-associated decline, dehydration diagnosis, daily requirements, and safety guidelines.",
    sections: [
      {
        title: "Age-Associated Physiological Changes",
        content: [
          "Understanding physiological shifts with age is crucial to avoid fluid and electrolyte complications in older adults.",
          "Key geriatric physiological changes:\n  1. Total Body Water decreases by 10% to 15% due to a reduction in skeletal lean muscle mass.\n  2. Decline in Thirst Sensation (CNS dysfunction controlling drinking drives).\n  3. GFR and renal blood flow decline, with age-associated loss of renal tissue mass.\n  4. Impaired renal concentrating ability makes the elderly highly susceptible to rapid water-deficit dehydration.\n  5. Hormonal shifts: Increase in Atrial Natriuretic Peptide (ANP) and decline in Renin/Aldosterone levels, causing impaired sodium retention and an increased risk of hypovolemia and hyponatremia."
        ],
        clinicalClues: [
          "Dehydration is the single most common fluid-electrolyte disorder requiring hospitalization in the elderly.",
          "Older patients have smaller margins of error. Excess fluids can rapidly precipitate congestive heart failure and acute pulmonary edema."
        ]
      },
      {
        title: "Dehydration Diagnosis in the Elderly",
        content: [
          "Traditional diagnostic indicators of dehydration (such as skin turgor, dry mouth, weight change, specific gravity of urine, or bioelectrical impedance) are inaccurate in older adults.",
          "Key clinical diagnostic checklist for geriatric dehydration (furrowed dry tongue, sunken eyes, speech fluency errors). Presenting ≥ 4 of these 7 criteria suggests volume depletion:\n  1. Mental confusion / Delirium\n  2. Non-fluent speech / slurred talking\n  3. Dry mucous membranes\n  4. Sunken eyes\n  5. Upper/lower extremity weakness\n  6. Flat/dry tongue\n  7. Deeply furrowed/grooved tongue",
          "The most reliable laboratory test for dehydration in the elderly is a measured serum osmolality > 300 mOsm/kg."
        ]
      },
      {
        title: "Geriatric Maintenance fluid recommendations",
        content: [
          "Normal Daily Fluid Intake (ESPEN/EFSA recommendations):\n  • Older Males: Minimum of 2.0 Liters/day\n  • Older Females: Minimum of 1.6 Liters/day",
          "Geriatric Weight-Based Maintenance: Maintain at 20 to 25 mL/kg/day (lower than youth, which is 25-30 mL/kg/day), due to high risks of renal or cardiac impairment."
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Chapter 10: Calcium Gluconate, Calcium Chloride, and Hypertonic Dextrose Solutions",
    shortDesc: "Special solutions, compositions, indications, and emergency management.",
    sections: [
      {
        title: "Emergency Electrolytes & Special Additives",
        content: [
          "Specialized concentrated solutions are used for key life-threatening emergency situations (such as hyperkalemia, severe hypocalcemia, or cardiotoxicity)."
        ],
        tables: [
          {
            title: "Table 10.1: Chemical Composition of Emergency Special Solutions",
            headers: ["Additive Injection", "Content (mEq/mL)", "Standard Volume", "Total Content / Amp", "Salt Content / Amp"],
            rows: [
              ["Calcium Gluconate 10%", "Ca2+ = 0.45", "10 mL", "4.5 mEq per amp", "1.0 gm / 10 mL"],
              ["Calcium Chloride 10%", "Ca2+ = 1.36", "10 mL", "13.6 mEq per amp", "1.0 gm / 10 mL"],
              ["Hypertonic Saline (3%)", "Na+ = 0.51", "100 mL", "51.3 mEq per bag", "3.0 gm / 100 mL"],
              ["Magnesium Sulfate 50%", "Mg2+ = 4.0", "2 mL", "8.0 mEq per amp", "1.0 gm / 2 mL"],
              ["Potassium Chloride 15%", "K+ = 2.0", "10 mL", "20.0 mEq per amp", "1.5 gm / 10 mL"],
              ["Potassium Phosphates", "K+ = 4.4, PH4 = 3.0", "15 mL", "K+: 66, PH4: 45 / amp", "Varies"],
              ["7.5% Sodium Bicarbonate", "HCO3- = 0.9", "10 mL", "9.0 mEq per amp", "0.75 gm / 10 mL"],
              ["8.4% Sodium Bicarbonate", "HCO3- = 1.0", "20 mL", "20.0 mEq per amp", "1.68 gm / 20 mL"]
            ],
            notes: "Ensure complete verification of concentrated solutions. Dilute concentrated Potassium Chloride before infusion; infusing undiluted K+ causes immediate cardiac arrest."
          }
        ],
        clinicalClues: [
          "Calcium Gluconate 10% vs Calcium Chloride 10%:\n  • Calcium Chloride contains ~3 times more elemental calcium (1.36 mEq/mL vs 0.45 mEq/mL).\n  • Calcium Chloride is highly sclerosing and hyperosmolar. Avoid infusing via peripheral IV lines; always prioritize central venous catheters to avoid severe local tissue necrosis.\n  • Calcium Gluconate is safer for peripheral administration.",
          "Absolute Indications for Calcium Salts:\n  1. Cardiac protection in Severe Hyperkalemia: Calcium stabilizes cardiomyocyte membranes to prevent ventricular fibrillation.\n  2. Severe symptomatic mineral Hypocalcemia.\n  3. Severe hypermagnesemia cardiotoxicity.\n  4. Calcium channel blocker or beta-blocker poisonings.\n  5. Prevention of systemic citrate toxicity during massive blood product transfusions."
        ]
      }
    ]
  }
];

export const IV_FLUIDS_REFERENCE: any[] = [
  {
    name: "Ringer's Lactate (Hartmann's)",
    osmUnit: "273 mOsm/L",
    tonicity: "Slightly Hypotonic in vivo",
    na: "130 mEq/L",
    cl: "109 mEq/L",
    k: "4.0 mEq/L",
    ca: "3.0 mEq/L",
    lactate: "28 mEq/L",
    buffer: "Lactate (converted inside the liver)",
    advantages: [
      "Physiological electrolyte composition compared to normal saline.",
      "Lactate converted into bicarbonate, helping to correct systemic metabolic acidosis.",
      "Extremely safe in most hyperkalemic patients.",
      "Inexpensive and widely available globally."
    ],
    contraindications: [
      "Severe end-stage liver impairment (unable to metabolize lactate).",
      "Traumatic brain injury or neurointensive care (slight hypotonicity can expand brain edema).",
      "During Co-infusion with blood product lines (calcium binds and precipitates with blood citrate)."
    ],
    idealFor: "Surgical fluid replacement, burns, general tissue dehydration, resuscitating hypovolemic patients with normal liver function."
  },
  {
    name: "Normal Saline (0.9% NaCl)",
    osmUnit: "308 mOsm/L",
    tonicity: "Isotonic",
    na: "154 mEq/L",
    cl: "154 mEq/L",
    k: "0 mEq/L",
    ca: "0 mEq/L",
    lactate: "0 mEq/L",
    buffer: "None",
    advantages: [
      "Completely compatible with blood product transfusions (lacks calcium, preventing coagulation clots).",
      "Extremely safe in patients with traumatic brain injury (no risk of expanding cerebral edema).",
      "Excellent fluid to raise blood pressure rapidly in profound hypovolemia."
    ],
    contraindications: [
      "Do not use in large volumes, as it carries an extreme risk of hyperchloremic metabolic acidosis.",
      "Avoid in patients with acute kidney injuries (high chloride causes renal vasoconstriction).",
      "Avoid in patients with sodium or volume retention illnesses."
    ],
    idealFor: "Hypochloremic metabolic alkalosis (vomiting), hypovolemic hyponatremia, traumatic brain injury fluid resuscitation, blood transfusion lines."
  },
  {
    name: "PlasmaLyte (Acetate Buffered)",
    osmUnit: "295 mOsm/L",
    tonicity: "Highly Isotonic",
    na: "140 mEq/L",
    cl: "98 mEq/L",
    k: "5.0 mEq/L",
    ca: "0 mEq/L",
    lactate: "0 mEq/L",
    additional: "Magnesium 3.0 mEq/L, Acetate 27 mEq/L, Gluconate 23 mEq/L",
    buffer: "Acetate & Gluconate (Metabolized in liver + globally inside skeletal muscles)",
    advantages: [
      "Composition closely matches human plasma.",
      "Acetate buffer is metabolized globally, making it highly effective inside severe shock or liver failure.",
      "Calcium-free, making it fully compatible with blood transfusion lines.",
      "Does not interfere with clinical lactate measurements.",
      "Minimizes the risks of hyperchloremia."
    ],
    contraindications: [
      "Use with caution in patients with hypermagnesemia.",
      "Avoid in patients with metabolic alkalosis or high SID states.",
      "Higher commercial cost compared to firstline solutions."
    ],
    idealFor: "Severe diabetic ketoacidosis (DKA), liver failure or hepatic transplantations, complex gastrointestinal surgeries, general resuscitation in most critically ill adults."
  },
  {
    name: "5% Dextrose in Water (D5W)",
    osmUnit: "252 mOsm/L (Bag) -> 0 mOsm/L (in vivo)",
    tonicity: "Hypotonic in vivo",
    na: "0 mEq/L",
    cl: "0 mEq/L",
    k: "0 mEq/L",
    ca: "0 mEq/L",
    lactate: "0 mEq/L",
    buffer: "None",
    calories: "170 kcal/L",
    advantages: [
      "Source of pure free water to supplement dry tissue water losses.",
      "Prevents erythrocyte hemolysis during raw intravenous hydration.",
      "Provides basic non-protein calories of 170 kcal/L, minimizing starvation ketosis."
    ],
    contraindications: [
      "Do NOT use during hypovolemic resuscitation or shock, as it offers minimal intravascular volume replacement (only 8% remains in core vessels).",
      "High infusion rates cause hyperglycemia and osmotic diuresis, worsening overall cellular dehydration.",
      "Avoid in patients presenting with cerebral edema or severe hyponatremia."
    ],
    idealFor: "Severe hypernatremia, pure free water loss deficits, correcting severe hypoglycemia."
  },
  {
    name: "Isolyte-G (Specialized Acidifying)",
    osmUnit: "578 mOsm/L",
    tonicity: "Hypertonic",
    na: "63 mEq/L",
    cl: "150 mEq/L",
    additional: "K+ 17 mEq/L, Ammonium (NH4+) 70 mEq/L, Dextrose 50 g/L",
    buffer: "None (Acidifying solution)",
    advantages: [
      "The single primary fluid capable of directly correcting profound metabolic alkalosis.",
      "Provides both calories and supplementary potassium."
    ],
    contraindications: [
      "Completely contraindicated in patients presenting with end-stage hepatic coma or severe renal failure (danger of worsening uremic acidosis and hyperkalemia).",
      "Avoid in any patient with metabolic acidosis."
    ],
    idealFor: "Severe metabolic alkalosis."
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Why is 5% Dextrose in Water (D5W) avoided during initial resuscitation of hypovolemic shock?",
    options: [
      "It causes hypernatremia and rapid fluid retention inside cells.",
      "It expands intravascular volume poorly (only 83 ml of 1 Liter remains intravascular) and risks causing osmotic diuresis.",
      "Its alkaline pH causes severe metabolic alkalosis.",
      "It contains high concentrations of potassium that precipitate cardiac arrest."
    ],
    answerIndex: 1,
    rationale: "Once inside the body, dextrose is rapidly metabolized by tissues, leaving behind pure free water. This water distributes throughout total body water (2/3 intracellularly, 1/3 extracellularly), leaving only 8.3% (83 mL per Liter) inside the intravascular space. Furthermore, infusing large volumes rapidly exceeds the glucose handling limit, causing hyperglycemia and osmotic diuresis, compounding overall dehydration.",
    chapterContext: "Chapter 8: Resuscitation Fluids"
  },
  {
    id: 2,
    question: "Which of the following is the most reliable clinical indicator to diagnose dehydration/volume depletion in the elderly?",
    options: [
      "Skin turgor assessment under the clavicle.",
      "Dryness of the oral mucous membranes alone.",
      "Presence of at least 4 of 7 clinical checklist criteria (such as furrowed tongue, non-fluent speech, confusion, etc.) or measured serum osmolality > 300 mOsm/kg.",
      "Urine specific gravity measured via color strips."
    ],
    answerIndex: 2,
    rationale: "Traditional indicators such as skin turgor or mouth dryness are highly unreliable in the elderly due to age-associated skin changes and dry mouth caused by medications. Dr. Pandya highlights that clinical clues including confusion, slurred talking, sunken eyes, weakness, and a dry or deeply furrowed tongue (the presence of >= 4 of these 7 criteria) are indicative of volume depletion. A directly measured serum osmolality > 300 mOsm/kg represents the most reliable test.",
    chapterContext: "Chapter 9: fluid therapy in the Elderly"
  },
  {
    id: 3,
    question: "Why is Ringer's Lactate (RL) considered safe to use in patients with hyperkalemia, contrary to common medical myths?",
    options: [
      "RL has an acidifying effect that forces potassium to move back into cells.",
      "The potassium inside RL is specialized and cannot cross biological cell membranes.",
      "RL's potassium concentration is extremely low (4 mEq/L) and, by maintaining ECF pH, it prevents the acidemia that shifts potassium out of cells.",
      "RL does not actually contain any potassium in its chemical composition."
    ],
    answerIndex: 2,
    rationale: "Ringer's Lactate contains only 4 mEq/L of potassium. More importantly, it has an alkalinizing effect (due to lactate buffer), preventing hyperchloremic metabolic acidosis. Acidosis drives hydrogen ions into cells in exchange for potassium entering the ECF. By preventing acidosis, RL prevents hyperkalemia, making it safer than Normal Saline in hyperkalemic septic patients.",
    chapterContext: "Chapter 8: Resuscitation Fluids"
  },
  {
    id: 4,
    question: "Why is Human Albumin solution strongly contraindicated for volume resuscitation in patients with traumatic brain injury (TBI)?",
    options: [
      "It causes immediate liver impairment due to massive protein overloads.",
      "Albumin is highly hypotonic (260 mOsm/kg) compared to brain tissue ECF, drawing free water into brain cells, expanding cerebral edema, and increasing mortality.",
      "It binds to anticoagulants, triggering massive intravascular stroke clots.",
      "It induces severe, irreversible hyperchloremic metabolic acidosis."
    ],
    answerIndex: 1,
    rationale: "The SAFE trial demonstrated that infusing 4% albumin in patients with traumatic brain injury led to significantly higher mortality rates. Albumin is slightly hypotonic (260 mOsm/kg) relative to the brain's microenvironment. This tonicity mismatch draws water across the blood-brain barrier into the tissue, elevating intracranial intracranial pressure and worsening cerebral edema.",
    chapterContext: "Chapter 5: Colloid Solutions"
  },
  {
    id: 5,
    question: "How does the buffer mechanism of PlasmaLyte differ from Ringer's Lactate, and what clinical advantage does it offer?",
    options: [
      "PlasmaLyte contains no buffers and maintains a highly acidic pH to prevent alkalosis.",
      "PlasmaLyte uses acetate and gluconate, which are metabolized globally (skeletal muscles) and do not require liver function, unlike the lactate in RL which relies heavily on liver metabolism.",
      "PlasmaLyte uses bicarbonate directly, which is extremely stable in plastic containers.",
      "PlasmaLyte relies on citric acid, which prevents calcium from precipitating during blood administration."
    ],
    answerIndex: 1,
    rationale: "While Ringer's Lactate relies on lactate conversion inside the liver (which is severely impaired during hepatic failure, hypoxia, or deep septic shock), PlasmaLyte utilizes acetate and gluconate as bicarbonate precursors. Acetate metabolism is highly preserved in severe shock and occurs in muscles and tissues throughout the body, making it a safer choice in hepatic deficiency.",
    chapterContext: "Chapter 4: Balanced solutions & Resuscitation"
  },
  {
    id: 6,
    question: "What is the net insensible fluid loss under normal resting conditions in a healthy adult?",
    options: [
      "1000 mL per day.",
      "700 mL per day (1000 mL output from skin/lung/stool minus 300 mL metabolic input).",
      "300 mL per day.",
      "1500 mL per day, primarily driven by renal excretion."
    ],
    answerIndex: 1,
    rationale: "An adult's insensible fluid intake is 300 ml due to metabolic oxidation, while total insensible loss is 1000 ml (500 ml skin evaporation, 400 ml lungs, 100 ml stool). Thus, Net Insensible Fluid Loss = 1000 - 300 = 700 mL per day. Daily maintenance requirements are calculated as urine output + 700 mL.",
    chapterContext: "Chapter 1: Basic Physiology"
  }
];
