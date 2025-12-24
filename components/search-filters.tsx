"use client"

import { useState } from "react"
import { Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Card } from "@/components/ui/card"

export function SearchFilters() {
  const [dateOpen, setDateOpen] = useState(true)
  const [typeOpen, setTypeOpen] = useState(true)
  const [organOpen, setOrganOpen] = useState(true)

  return (
    <Card className="p-4 space-y-4">
      <div className="flex items-center gap-2 pb-2 border-b">
        <Filter className="h-4 w-4" />
        <h3 className="font-semibold text-sm">Filtros</h3>
      </div>

      {/* Período */}
      <Collapsible open={dateOpen} onOpenChange={setDateOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-between p-2 h-auto">
            <span className="text-sm font-medium">Período</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${dateOpen ? "rotate-180" : ""}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3 pt-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="last-week" />
            <Label htmlFor="last-week" className="text-sm font-normal cursor-pointer">
              Última semana
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="last-month" />
            <Label htmlFor="last-month" className="text-sm font-normal cursor-pointer">
              Último mês
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="last-year" />
            <Label htmlFor="last-year" className="text-sm font-normal cursor-pointer">
              Último ano
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="2024" />
            <Label htmlFor="2024" className="text-sm font-normal cursor-pointer">
              2024
            </Label>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Tipo de Documento */}
      <Collapsible open={typeOpen} onOpenChange={setTypeOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-between p-2 h-auto">
            <span className="text-sm font-medium">Tipo de Documento</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${typeOpen ? "rotate-180" : ""}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3 pt-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="edital" />
            <Label htmlFor="edital" className="text-sm font-normal cursor-pointer">
              Editais
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="portaria" />
            <Label htmlFor="portaria" className="text-sm font-normal cursor-pointer">
              Portarias
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="decreto" />
            <Label htmlFor="decreto" className="text-sm font-normal cursor-pointer">
              Decretos
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="resolucao" />
            <Label htmlFor="resolucao" className="text-sm font-normal cursor-pointer">
              Resoluções
            </Label>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Órgão */}
      <Collapsible open={organOpen} onOpenChange={setOrganOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-between p-2 h-auto">
            <span className="text-sm font-medium">Órgão</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${organOpen ? "rotate-180" : ""}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3 pt-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="mctic" />
            <Label htmlFor="mctic" className="text-sm font-normal cursor-pointer">
              MCTI
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="mec" />
            <Label htmlFor="mec" className="text-sm font-normal cursor-pointer">
              Ministério da Educação
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="mcom" />
            <Label htmlFor="mcom" className="text-sm font-normal cursor-pointer">
              Ministério das Comunicações
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="anatel" />
            <Label htmlFor="anatel" className="text-sm font-normal cursor-pointer">
              ANATEL
            </Label>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Button variant="outline" className="w-full bg-transparent" size="sm">
        Limpar filtros
      </Button>
    </Card>
  )
}
