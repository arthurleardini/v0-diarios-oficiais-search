"use client"

import { useState, type FormEvent } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchBarProps {
  onSearch: (query: string) => void
  initialValue?: string
  compact?: boolean
}

export function SearchBar({ onSearch, initialValue = "", compact = false }: SearchBarProps) {
  const [query, setQuery] = useState(initialValue)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Ex: editais de tecnologia, licitação TI, pregão eletrônico..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`${compact ? "h-10" : "h-14"} pl-10 text-base bg-card border-input`}
          />
        </div>
        <Button type="submit" size={compact ? "default" : "lg"} className="px-6">
          Buscar
        </Button>
      </div>
    </form>
  )
}
