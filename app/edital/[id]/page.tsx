import Link from "next/link"
import { ArrowLeft, Building2, Calendar, FileText, Download, Share2, Printer, DollarSign, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function EditalDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Voltar para resultados
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {/* Title and Actions */}
          <div className="space-y-4">
            <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
              Edital
            </Badge>
            <h1 className="text-3xl font-bold text-foreground leading-tight">
              Edital de Pregão Eletrônico nº 45/2024 - MCTI
            </h1>
            <div className="flex items-center gap-4 flex-wrap">
              <Button variant="default" className="gap-2">
                <Download className="h-4 w-4" />
                Baixar Edital (PDF)
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Share2 className="h-4 w-4" />
                Compartilhar
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Printer className="h-4 w-4" />
                Imprimir
              </Button>
            </div>
          </div>

          {/* Metadata Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4">
              <div className="flex items-start gap-3">
                <Building2 className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Órgão</p>
                  <p className="text-sm font-medium">Ministério da Ciência, Tecnologia e Inovações</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Data de Publicação</p>
                  <p className="text-sm font-medium">14 de dezembro de 2024</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Localização no DOU</p>
                  <p className="text-sm font-medium">Seção 3 - Página 78</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Key Information */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Informações Principais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Valor Estimado</p>
                  <p className="text-lg font-semibold text-foreground">R$ 2.500.000,00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Prazo de Execução</p>
                  <p className="text-lg font-semibold text-foreground">24 meses</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Data de Abertura</p>
                  <p className="text-lg font-semibold text-foreground">05 de janeiro de 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Modalidade</p>
                  <p className="text-lg font-semibold text-foreground">Pregão Eletrônico</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Object Description */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Objeto da Licitação</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Contratação de empresa especializada para desenvolvimento de plataforma digital de inteligência artificial
              voltada para análise de dados governamentais, com os seguintes objetivos:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground ml-6">
              <li className="list-disc">
                Desenvolvimento de sistema web responsivo com interface intuitiva e acessível
              </li>
              <li className="list-disc">
                Implementação de algoritmos de machine learning para processamento e análise de grandes volumes de dados
              </li>
              <li className="list-disc">
                Integração com bases de dados governamentais existentes através de APIs REST e GraphQL
              </li>
              <li className="list-disc">
                Capacidade de processamento de linguagem natural (NLP) para análise de documentos e textos
              </li>
              <li className="list-disc">Sistema de dashboards e visualizações interativas de dados</li>
              <li className="list-disc">Módulo de geração de relatórios automatizados com insights baseados em IA</li>
            </ul>
          </Card>

          {/* Technical Requirements */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Requisitos Técnicos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-sm mb-2">Experiência Comprovada</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A empresa licitante deve comprovar experiência mínima de 5 anos em desenvolvimento de soluções de
                  inteligência artificial, com pelo menos 3 projetos de grande porte implementados nos últimos 3 anos.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium text-sm mb-2">Stack Tecnológico</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">TensorFlow</Badge>
                  <Badge variant="secondary">PyTorch</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Redis</Badge>
                  <Badge variant="secondary">Kubernetes</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium text-sm mb-2">Certificações Exigidas</h3>
                <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                  <li className="list-disc">ISO/IEC 27001 - Gestão de Segurança da Informação</li>
                  <li className="list-disc">ISO/IEC 9001 - Sistema de Gestão da Qualidade</li>
                  <li className="list-disc">CMMI nível 3 ou superior</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Submission Details */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Condições de Participação</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="leading-relaxed">
                <strong className="text-foreground">Prazo para envio de propostas:</strong> até 03/01/2025 às 23:59h
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Data de abertura das propostas:</strong> 05/01/2025 às 10:00h
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Local de realização:</strong> Portal de Compras do Governo Federal
                (comprasgovernamentais.gov.br)
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Garantia de proposta:</strong> 1% do valor estimado da contratação
              </p>
            </div>
          </Card>

          {/* Documents */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Documentos Relacionados</h2>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group">
                <FileText className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium group-hover:text-primary">Edital Completo - PE_45_2024.pdf</p>
                  <p className="text-xs text-muted-foreground">2.4 MB</p>
                </div>
                <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group">
                <FileText className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium group-hover:text-primary">Anexo I - Termo de Referência.pdf</p>
                  <p className="text-xs text-muted-foreground">1.8 MB</p>
                </div>
                <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group">
                <FileText className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium group-hover:text-primary">Anexo II - Minuta de Contrato.pdf</p>
                  <p className="text-xs text-muted-foreground">856 KB</p>
                </div>
                <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
