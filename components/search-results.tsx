"use client"

import { useState } from "react"
import Link from "next/link"
import { FileText, Calendar, Building2, ExternalLink, ThumbsUp, ThumbsDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface SearchResultsProps {
  query: string
}

const mockResults = [
  {
    id: "45",
    title: "Edital de Pregão Eletrônico nº 45/2024 - MCTI",
    snippet:
      "Contratação de empresa especializada para desenvolvimento de plataforma digital de inteligência artificial para análise de dados governamentais. Valor estimado: R$ 2.500.000,00. Prazo: 24 meses. Requisitos técnicos incluem experiência em IA, machine learning e processamento de linguagem natural.",
    organ: "Ministério da Ciência, Tecnologia e Inovações",
    date: "14 de dezembro de 2024",
    section: "Seção 3",
    page: "78",
    type: "Edital",
    relevance: 98,
  },
  {
    id: "123",
    title: "Edital nº 123/2024 - Modernização de Sistemas - Ministério da Educação",
    snippet:
      "Processo licitatório para contratação de serviços de tecnologia da informação visando a modernização dos sistemas educacionais. Escopo inclui desenvolvimento de aplicativos móveis, sistema web responsivo, integração com plataformas existentes e treinamento de equipes. Valor estimado: R$ 3.800.000,00.",
    organ: "Ministério da Educação",
    date: "12 de dezembro de 2024",
    section: "Seção 3",
    page: "156",
    type: "Edital",
    relevance: 95,
  },
  {
    id: "89",
    title: "Edital de Concorrência nº 89/2024 - Infraestrutura de TI - Casa Civil",
    snippet:
      "Licitação para fornecimento e implementação de infraestrutura de tecnologia da informação, incluindo servidores, storage, solução de backup, virtualização e serviços gerenciados. Valor estimado: R$ 5.200.000,00. Prazo de execução: 36 meses com possibilidade de prorrogação.",
    organ: "Casa Civil da Presidência da República",
    date: "10 de dezembro de 2024",
    section: "Seção 3",
    page: "12",
    type: "Edital",
    relevance: 92,
  },
  {
    id: "67",
    title: "Edital nº 67/2024 - Desenvolvimento de Sistema de Gestão - Ministério das Comunicações",
    snippet:
      "Contratação de solução completa de software para gestão de processos administrativos e documentos eletrônicos. Deve incluir workflow, assinatura digital, integração com e-CAC e módulo de business intelligence. Tecnologias: Java, Angular, PostgreSQL. Valor: R$ 1.900.000,00.",
    organ: "Ministério das Comunicações",
    date: "08 de dezembro de 2024",
    section: "Seção 3",
    page: "234",
    type: "Edital",
    relevance: 89,
  },
  {
    id: "201",
    title: "Edital de Pregão Eletrônico nº 201/2024 - Segurança Cibernética - ANATEL",
    snippet:
      "Serviços especializados em segurança da informação e cibernética, incluindo SOC (Security Operations Center), análise de vulnerabilidades, testes de penetração, implementação de SIEM e serviços de resposta a incidentes. Certificações exigidas: ISO 27001, CISSP. Valor: R$ 4.100.000,00.",
    organ: "Agência Nacional de Telecomunicações",
    date: "05 de dezembro de 2024",
    section: "Seção 3",
    page: "89",
    type: "Edital",
    relevance: 87,
  },
]

const typeColors: Record<string, string> = {
  Portaria: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  Decreto: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  Resolução: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  "Instrução Normativa": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  Edital: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
}

export function SearchResults({ query }: SearchResultsProps) {
  const [feedback, setFeedback] = useState<Record<string, "relevant" | "not-relevant" | null>>({})

  const handleFeedback = (id: string, type: "relevant" | "not-relevant") => {
    setFeedback((prev) => ({
      ...prev,
      [id]: prev[id] === type ? null : type,
    }))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Aproximadamente {mockResults.length} resultados para{" "}
          <span className="font-medium text-foreground">"{query}"</span>
        </p>
      </div>

      <div className="space-y-4">
        {mockResults.map((result) => (
          <Card key={result.id} className="p-5 hover:shadow-md transition-shadow bg-card">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/edital/${result.id}`}
                    className="text-lg font-medium text-primary hover:underline leading-relaxed line-clamp-2"
                  >
                    {result.title}
                  </Link>
                  <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground flex-wrap">
                    <span className="flex items-center gap-1">
                      <Building2 className="h-3.5 w-3.5" />
                      {result.organ}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {result.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="h-3.5 w-3.5" />
                      {result.section} - Pág. {result.page}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      Relevância: {result.relevance}%
                    </Badge>
                  </div>
                </div>
                <Badge className={typeColors[result.type] || "bg-gray-100 text-gray-800"} variant="secondary">
                  {result.type}
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{result.snippet}</p>

              <div className="flex items-center justify-between pt-2">
                <Link
                  href={`/edital/${result.id}`}
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline font-medium"
                >
                  Ver edital completo
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground mr-1">Este resultado foi útil?</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`h-8 px-2 ${
                      feedback[result.id] === "relevant"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                        : ""
                    }`}
                    onClick={() => handleFeedback(result.id, "relevant")}
                  >
                    <ThumbsUp className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`h-8 px-2 ${
                      feedback[result.id] === "not-relevant"
                        ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                        : ""
                    }`}
                    onClick={() => handleFeedback(result.id, "not-relevant")}
                  >
                    <ThumbsDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
