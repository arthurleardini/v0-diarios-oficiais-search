"use client"

import { useState } from "react"
import { SearchBar } from "@/components/search-bar"
import { SearchHistory } from "@/components/search-history"
import { SearchResults } from "@/components/search-results"
import { SearchFilters } from "@/components/search-filters"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [hasSearched, setHasSearched] = useState(false)
  const [searchHistory, setSearchHistory] = useState<string[]>([
    "editais de tecnologia 2024",
    "licitação desenvolvimento software",
    "pregão eletrônico TI",
  ])

  const handleSearch = (query: string) => {
    if (query.trim()) {
      setSearchQuery(query)
      setHasSearched(true)

      if (!searchHistory.includes(query)) {
        setSearchHistory([query, ...searchHistory.slice(0, 9)])
      }
    }
  }

  const handleHistoryClick = (query: string) => {
    setSearchQuery(query)
    setHasSearched(true)
  }

  const handleClearHistory = () => {
    setSearchHistory([])
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar - Histórico */}
      <aside className="w-64 border-r border-border bg-sidebar">
        <SearchHistory
          history={searchHistory}
          onHistoryClick={handleHistoryClick}
          onClearHistory={handleClearHistory}
        />
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {!hasSearched ? (
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="w-full max-w-2xl space-y-8">
              <div className="text-center space-y-4">
                <p className="text-xl text-muted-foreground">O que você procura nos Diários Oficiais?</p>
              </div>
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        ) : (
          <div className="min-h-screen">
            <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <SearchBar onSearch={handleSearch} initialValue={searchQuery} compact />
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex gap-6">
                <aside className="w-64 flex-shrink-0">
                  <SearchFilters />
                </aside>
                <div className="flex-1 min-w-0">
                  <SearchResults query={searchQuery} />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
