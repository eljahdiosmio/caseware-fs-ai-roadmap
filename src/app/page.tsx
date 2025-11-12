"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Rocket,
  BookOpen,
  Layers,
  CheckCircle,
  Info,
  Moon,
  Sun,
} from "lucide-react";

/*
  Caseware – AI Roadmap (IFRS)
  Simplified: focus on achievable functionality and existing technology.
  Removed budgets and workforce; emphasizes real-world tools and feasibility.
*/

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs bg-muted text-muted-foreground">
    {children}
  </span>
);

const EvidenceItem = ({
  label,
  href,
  note,
}: {
  label: string;
  href: string;
  note?: string;
}) => (
  <li className="mb-1">
    <a className="underline" href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
    {note ? (
      <>
        {" "}
        — <span className="text-muted-foreground">{note}</span>
      </>
    ) : null}
  </li>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <header className="mb-6 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              AI Roadmap for Financial Statement Automation (IFRS)
            </h1>
            <p className="text-sm text-muted-foreground">
              Caseware Cloud • Interactive, achievable, technology-based plan
            </p>
          </div>
          <Button variant="outline" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <>
                <Sun className="h-4 w-4 mr-2" />
                White Mode
              </>
            ) : (
              <>
                <Moon className="h-4 w-4 mr-2" />
                Dark Mode
              </>
            )}
          </Button>
        </header>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="h-4 w-4" /> Briefing Bullets
            </CardTitle>
            <CardDescription>
              High-impact summary of achievable AI roadmap.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>
                First-year onboarding automated using prior-year Financial
                Statements (PDF/Word) and current Trial Balance with prior-year
                comparatives.
              </li>
              <li>
                Mapping and disclosure logic derived through AI models (AWS
                Bedrock, Textract) that learn from prior data and industry
                conventions.
              </li>
              <li>
                Mappings and disclosures persist automatically into next year,
                minimizing recurring setup; only new accounts or exceptional
                regulatory changes need review.
              </li>
              <li>
                Telemetry system monitors user edits to continuously refine
                templates and disclosures; this feedback improves both AI
                accuracy and content library quality.
              </li>
              <li>
                Optional consent-based fine-tuning on anonymized or
                client-approved Financial Statements to build a stronger
                IFRS/GAAP-aware model.
              </li>
              <li>
                AI-enhanced live review: reads statements in real time and flags
                missing disclosures, inconsistencies, or cross-check errors
                before submission.
              </li>
              <li>
                All achievable today with AWS Bedrock, Textract, OpenSearch
                Vector DB, and established product analytics tools like Pendo or
                Snowplow.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Tabs defaultValue="phase0" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="phase0">Phase 0</TabsTrigger>
            <TabsTrigger value="phase1">Phase 1</TabsTrigger>
            <TabsTrigger value="phase2">Phase 2</TabsTrigger>
            <TabsTrigger value="phase3">Phase 3</TabsTrigger>
          </TabsList>

          <TabsContent value="phase0" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Phase 0 • Automated First-Year Onboarding</CardTitle>
                <CardDescription>
                  Immediate AI application using existing tools and structured
                  logic.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <div className="flex flex-wrap gap-2">
                  <Pill>
                    <Brain className="h-3 w-3" /> OCR + Layout Parsing
                    (Textract)
                  </Pill>
                  <Pill>
                    <Layers className="h-3 w-3" /> Mapping Logic
                  </Pill>
                  <Pill>
                    <CheckCircle className="h-3 w-3" /> Persistent Data
                  </Pill>
                </div>
                <p>
                  Users import prior-year FS and current TB. AI extracts
                  structure, reconciles PY ↔ CY, suggests mappings, enables
                  relevant disclosures, and highlights anomalies. Once mapping
                  and disclosures are finalized, they persist into future years
                  automatically.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="phase1" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Phase 1 • Learning and Persistence</CardTitle>
                <CardDescription>
                  AI evolves from one-time inference to a continuous learning
                  system.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  After initial onboarding, the system reuses previous mappings
                  and disclosures automatically. Only new accounts or
                  exceptional events (major chart-of-account or regulatory
                  shifts) require manual intervention. Telemetry tracks where
                  users make changes and feeds back to improve the models and
                  disclosure logic.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="phase2" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>
                  Phase 2 • Smart Disclosure and Continuous Validation
                </CardTitle>
                <CardDescription>
                  AI as a reviewer: real-time feedback on missing or unclear
                  disclosures.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  The AI reads Financial Statements live, detects unusual
                  variations, or changes that may require additional disclosure.
                  It flags inconsistencies between policies, notes, and
                  numerical data, guiding users toward IFRS-aligned
                  completeness. This ensures compliance and enhances the quality
                  of published FSs.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="phase3" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Phase 3 • Intelligent IFRS Repository</CardTitle>
                <CardDescription>
                  Building the global Caseware Financial Intelligence Layer.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  By aggregating anonymized or client-approved Financial
                  Statements across 40+ jurisdictions, Caseware can fine-tune
                  domain-specific AI models. These models learn global
                  disclosure patterns, regional nuances, and evolving reporting
                  frameworks—positioning Caseware as the world’s largest
                  IFRS/GAAP intelligence repository. The goal: proactive
                  compliance, predictive disclosures, and industry benchmarking
                  all in one ecosystem.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Evidence & Industry Readiness
            </CardTitle>
            <CardDescription>
              All of this is technically possible now using stable,
              cloud-available tools.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 text-sm">
              <EvidenceItem
                label="AWS Bedrock"
                href="https://aws.amazon.com/bedrock/"
                note="Foundation models, fine-tuning, managed services."
              />
              <EvidenceItem
                label="Amazon Textract"
                href="https://aws.amazon.com/textract/"
                note="Extracts tables, layout, and structure from PDFs reliably."
              />
              <EvidenceItem
                label="Amazon OpenSearch Vector"
                href="https://aws.amazon.com/opensearch-service/"
                note="Vector database used in retrieval-augmented generation (RAG) pipelines."
              />
              <EvidenceItem
                label="Pendo"
                href="https://www.pendo.io/"
                note="Collects product usage telemetry for model and content refinement."
              />
              <EvidenceItem
                label="Snowplow"
                href="https://snowplow.io/"
                note="Open-source event analytics used in ML feedback loops."
              />
            </ul>
            <div className="mt-4 text-xs text-muted-foreground flex items-start gap-2">
              <Info className="h-4 w-4" />
              <p>
                All referenced technologies are standard and proven in
                production-scale environments. This plan emphasizes achievable
                innovation using current-generation LLMs and cloud
                infrastructure, not speculative research.
              </p>
            </div>
          </CardContent>
        </Card>

        <footer className="pb-10 text-center text-xs text-muted-foreground">
          © Caseware – Internal AI vision document
        </footer>
      </div>
    </div>
  );
}
