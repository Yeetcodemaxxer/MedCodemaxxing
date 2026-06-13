import React, { useState, useMemo } from "react";
import { CHAPTERS } from "../data/chapters";
import { Search, BookOpen, AlertCircle, CheckCircle, ChevronRight, HelpCircle } from "lucide-react";

export default function TextbookReader() {
  const [selectedChapterId, setSelectedChapterId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const selectedChapter = useMemo(() => {
    return CHAPTERS.find((ch) => ch.id === selectedChapterId) || CHAPTERS[0];
  }, [selectedChapterId]);

  // Comprehensive full-text search across all chapters, sections, tables, key takeaways, and clinical clues.
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    const results: Array<{
      chapterId: number;
      chapterTitle: string;
      sectionTitle: string;
      snippet: string;
    }> = [];

    CHAPTERS.forEach((ch) => {
      ch.sections.forEach((sec) => {
        let matched = false;
        let snippet = "";

        // Check content paragraphs
        const contentMatch = sec.content.find((p) => p.toLowerCase().includes(query));
        if (contentMatch) {
          matched = true;
          snippet = contentMatch;
        }

        // Check clinical clues
        if (!matched && sec.clinicalClues) {
          const clueMatch = sec.clinicalClues.find((c) => c.toLowerCase().includes(query));
          if (clueMatch) {
            matched = true;
            snippet = `[Clinical Clue] ${clueMatch}`;
          }
        }

        // Check key takeaways
        if (!matched && sec.keyTakeaways) {
          const takeawayMatch = sec.keyTakeaways.find((t) => t.toLowerCase().includes(query));
          if (takeawayMatch) {
            matched = true;
            snippet = `[Takeaway] ${takeawayMatch}`;
          }
        }

        // Check sections titles
        if (!matched && sec.title.toLowerCase().includes(query)) {
          matched = true;
          snippet = sec.content[0] || "Section header match";
        }

        if (matched) {
          results.push({
            chapterId: ch.id,
            chapterTitle: ch.title,
            sectionTitle: sec.title,
            snippet: snippet.length > 140 ? snippet.substring(0, 140) + "..." : snippet
          });
        }
      });
    });

    return results;
  }, [searchQuery]);

  const handleSearchResultClick = (chId: number) => {
    setSelectedChapterId(chId);
    setSearchQuery(""); // Clear search to reveal the chapter view
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8" id="textbook-reader-root">
      {/* Search & Sidebar Navigation */}
      <div className="lg:col-span-1 space-y-6">
        {/* Search Input */}
        <div className="relative">
          <input
            id="textbook-search"
            type="text"
            placeholder="Search textbook (e.g. edemas, hyperkalemia)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 shadow-sm transition-all"
          />
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
        </div>

        {/* Search Results Dashboard */}
        {searchQuery.trim() !== "" ? (
          <div className="bg-white border border-gray-150 rounded-xl p-4 space-y-3 shadow-md max-h-[400px] overflow-y-auto">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Search Results ({searchResults.length})</h4>
            {searchResults.length === 0 ? (
              <p className="text-xs text-gray-400 italic">No matches found. Try another clinical search word.</p>
            ) : (
              <div className="space-y-2">
                {searchResults.map((res, idx) => (
                  <button
                    key={idx}
                    id={`search-result-btn-${idx}`}
                    onClick={() => handleSearchResultClick(res.chapterId)}
                    className="w-full text-left p-2 hover:bg-emerald-50/50 border border-transparent hover:border-emerald-100 rounded-lg text-xs transition-all space-y-1 block"
                  >
                    <div className="font-bold text-emerald-800 tracking-tight flex items-center justify-between">
                      <span>{res.sectionTitle}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-[10px] text-gray-400 font-medium font-mono">{res.chapterId === 10 ? "Chapter 10" : `Chapter ${res.chapterId}`}</div>
                    <p className="text-[10px] text-gray-500 leading-normal italic font-sans">"{res.snippet}"</p>
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : null}

        {/* Chapters Table of Contents Selector */}
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm space-y-3">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-2">Portions & Chapters</h4>
          <div className="space-y-1">
            {CHAPTERS.map((ch) => (
              <button
                key={ch.id}
                id={`toc-chapter-btn-${ch.id}`}
                onClick={() => setSelectedChapterId(ch.id)}
                className={`w-full text-left py-2 px-3 rounded-lg text-xs font-medium transition-all flex items-start gap-2.5 ${
                  selectedChapterId === ch.id
                    ? "bg-emerald-600 text-white font-semibold shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <span className="font-mono opacity-80 mt-0.5">{ch.id}.</span>
                <span className="leading-snug">{ch.title.replace(`Chapter ${ch.id}: `, "")}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chapter Reader Panel */}
      <div className="lg:col-span-3 space-y-8 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="border-b border-gray-100 pb-4">
          <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded-full border border-emerald-100 uppercase tracking-wider">
            Practical Handbook of Fluid Therapy
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 mt-2">
            {selectedChapter.title}
          </h2>
          <p className="text-xs text-gray-500 italic mt-1 font-sans">{selectedChapter.shortDesc}</p>
        </div>

        {/* Chapter sections */}
        <div className="space-y-8 font-sans">
          {selectedChapter.sections.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-base font-bold text-gray-800 border-l-3 border-emerald-500 pl-3">
                {sec.title}
              </h3>

              <div className="space-y-3 text-xs leading-relaxed text-gray-600">
                {sec.content.map((p, pIdx) => (
                  <p key={pIdx} className="font-sans text-justify">
                    {p}
                  </p>
                ))}
              </div>

              {/* Collapsed Key Takeaways */}
              {sec.keyTakeaways && sec.keyTakeaways.length > 0 && (
                <div className="bg-emerald-50/60 border border-emerald-150 rounded-xl p-4 space-y-2 mt-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    <CheckCircle className="w-4 h-4" /> Recommended Takeaways
                  </div>
                  <ul className="list-disc pl-5 text-xs text-emerald-950/80 leading-relaxed font-sans space-y-1">
                    {sec.keyTakeaways.map((takeaway, tkIdx) => (
                      <li key={tkIdx}>{takeaway}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Collapsed Clinical Clues */}
              {sec.clinicalClues && sec.clinicalClues.length > 0 && (
                <div className="bg-amber-50/50 border border-amber-200 rounded-xl p-4 space-y-2 mt-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4" /> Dr. Pandya's Clinical Clues
                  </div>
                  <ul className="list-disc pl-5 text-xs text-amber-950/80 leading-relaxed font-sans space-y-1">
                    {sec.clinicalClues.map((clue, clIdx) => (
                      <li key={clIdx}>{clue}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Comparative Tables list */}
              {sec.tables && sec.tables.length > 0 && (
                <div className="space-y-4 mt-6 overflow-hidden">
                  {sec.tables.map((table, tIdx) => (
                    <div key={tIdx} className="border border-gray-150 rounded-xl overflow-hidden shadow-sm">
                      <div className="bg-gray-50 border-b border-gray-150 px-4 py-2.5 text-xs font-bold text-gray-700 tracking-tight">
                        {table.title}
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left border-collapse font-sans">
                          <thead>
                            <tr className="bg-gray-100/50 text-gray-500 font-semibold border-b border-gray-150 text-[10px] uppercase tracking-wider">
                              {table.headers.map((h, hIdx) => (
                                <th key={hIdx} className="px-4 py-2">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 font-mono text-[11px] text-gray-600">
                            {table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-gray-50/50 transition-all">
                                {row.map((val, cellIdx) => (
                                  <td key={cellIdx} className="px-4 py-2 border-r border-gray-100/55 last:border-r-0">
                                    {val}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {table.notes && (
                        <div className="bg-gray-50/50 border-t border-gray-100 px-4 py-2 text-[10px] italic leading-relaxed text-gray-500">
                          {table.notes}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
