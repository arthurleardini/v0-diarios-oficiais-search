"use client"

import { Clock, Trash2 } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface SearchHistoryProps {
  history: string[]
  onHistoryClick: (query: string) => void
  onClearHistory: () => void
}

export function SearchHistory({ history, onHistoryClick, onClearHistory }: SearchHistoryProps) {
  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex justify-center mb-2">
          <Image src="/logo-farol-gov.png" alt="FAROL.GOV" width={140} height={42} className="w-auto h-10" />
        </div>
      </div>

      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-sm font-semibold text-sidebar-foreground flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Histórico
          </h2>
          {history.length > 0 && (
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onClearHistory} title="Limpar histórico">
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {history.length === 0 ? (
            <p className="text-xs text-muted-foreground px-3 py-6 text-center">Nenhuma busca recente</p>
          ) : (
            history.map((item, index) => (
              <button
                key={index}
                onClick={() => onHistoryClick(item)}
                className="w-full text-left px-3 py-2.5 rounded-md text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors leading-relaxed"
              >
                {item}
              </button>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
