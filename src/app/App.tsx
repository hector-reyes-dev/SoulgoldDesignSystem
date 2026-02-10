import React, { useState } from "react";
import { DSFoundations } from "./components/ds-foundations";
import { DSComponents } from "./components/ds-components";
import { DSPatterns } from "./components/ds-patterns";
import { DSTemplates } from "./components/ds-templates";
import {
  Layers,
  Component,
  LayoutGrid,
  FileText,
} from "lucide-react";

const pages = [
  {
    id: "foundations",
    label: "00 — Foundations",
    icon: <Layers size={16} strokeWidth={1.5} />,
  },
  {
    id: "components",
    label: "01 — Components",
    icon: <Component size={16} strokeWidth={1.5} />,
  },
  {
    id: "patterns",
    label: "02 — Patterns",
    icon: <LayoutGrid size={16} strokeWidth={1.5} />,
  },
  /*  { id: "templates", label: "03 — Templates", icon: <FileText size={16} strokeWidth={1.5} /> },*/
];

const images = {
  necklace:
    "https://images.unsplash.com/photo-1758995115560-59c10d6cc28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwamV3ZWxyeSUyMG5lY2tsYWNlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzA0NjczMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  bracelet:
    "https://images.unsplash.com/photo-1764265923279-98e80f7a8ddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwYnJhY2VsZXQlMjB3b21hbiUyMGhhbmR8ZW58MXx8fHwxNzcwNDkzNjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  earrings:
    "https://images.unsplash.com/photo-1751552147727-e084b038e7c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwZWFycmluZ3MlMjBqZXdlbHJ5JTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NzA0OTM2NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  lifestyle:
    "https://images.unsplash.com/photo-1633810542706-90e5ff7557be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBnb2xkJTIwamV3ZWxyeSUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzA0OTM2NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ring: "https://images.unsplash.com/photo-1738800076744-c37b80b37d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwcmluZyUyMGpld2VscnklMjBtaW5pbWFsfGVufDF8fHx8MTc3MDQ5MzY3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  chain:
    "https://images.unsplash.com/photo-1598009632415-1b42a2c686b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwY2hhaW4lMjBuZWNrbGFjZSUyMHBlbmRhbnR8ZW58MXx8fHwxNzcwNDkzNjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
};

export default function App() {
  const [activePage, setActivePage] = useState("foundations");

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--sg-surface)" }}
    >
      {/* ─── Top Header ─── */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{
          borderColor: "var(--sg-border)",
          backgroundColor: "var(--sg-white)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "var(--sg-gold)",
                }}
              >
                <span
                  className="text-xs"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 600,
                    color: "var(--sg-white)",
                  }}
                >
                  S
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.125rem",
                    fontWeight: 500,
                    color: "var(--sg-black)",
                  }}
                >
                  Soul&Gold
                </span>
                <span
                  className="ml-2 text-xs px-2 py-0.5 rounded-full"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    backgroundColor: "var(--sg-beige)",
                    color: "var(--sg-text-muted)",
                  }}
                >
                  Design System v1.0
                </span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => {
                    setActivePage(page.id);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight:
                      activePage === page.id ? 600 : 400,
                    backgroundColor:
                      activePage === page.id
                        ? "var(--sg-beige)"
                        : "transparent",
                    color:
                      activePage === page.id
                        ? "var(--sg-black)"
                        : "var(--sg-text-muted)",
                  }}
                >
                  {page.icon}
                  <span className="hidden lg:inline">
                    {page.label}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden flex gap-1 pb-3 overflow-x-auto">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => {
                  setActivePage(page.id);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs whitespace-nowrap transition-all"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight:
                    activePage === page.id ? 600 : 400,
                  backgroundColor:
                    activePage === page.id
                      ? "var(--sg-beige)"
                      : "transparent",
                  color:
                    activePage === page.id
                      ? "var(--sg-black)"
                      : "var(--sg-text-muted)",
                }}
              >
                {page.icon}
                {page.label.split(" — ")[1]}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ─── Page Content ─── */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
          {/* Page Title */}
          <div className="mb-12">
            <p
              className="text-xs mb-2"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--sg-gold-dark)",
              }}
            >
              Soul&Gold Design System
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 500,
                color: "var(--sg-black)",
                lineHeight: 1.15,
              }}
            >
              {activePage === "foundations" && "Foundations"}
              {activePage === "components" && "Components"}
              {activePage === "patterns" && "Patterns"}
              {activePage === "templates" && "Templates"}
            </h1>
            <p
              className="mt-3 max-w-xl"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                color: "var(--sg-text-secondary)",
                lineHeight: 1.7,
              }}
            >
              {activePage === "foundations" &&
                "Tokens de color, tipografía, espaciado e iconografía que definen la identidad visual de Soul&Gold. Minimalismo cálido y elegante."}
              {activePage === "components" &&
                "Componentes reutilizables con variantes y estados. Botones, inputs, navegación, tarjetas de producto, trust y overlays."}
              {activePage === "patterns" &&
                "Patrones de e-commerce: PLP con filtros, PDP con galería, carrito y checkout por pasos."}
              {activePage === "templates" &&
                "Templates completos con estilo aplicado: Home, PLP, PDP, Cart y Checkout. Wireframes visuales listos para implementar."}
            </p>
          </div>

          {/* Content */}
          {activePage === "foundations" && <DSFoundations />}
          {activePage === "components" && (
            <DSComponents images={images} />
          )}
          {activePage === "patterns" && (
            <DSPatterns images={images} />
          )}
          {activePage === "templates" && (
            <DSTemplates images={images} />
          )}
        </div>
      </main>

      {/* ─── Footer ─── */}
      <footer
        className="border-t py-6 px-6 lg:px-10"
        style={{ borderColor: "var(--sg-border-light)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--sg-text-muted)",
            }}
          >
            Soul&Gold Design System &middot; v1.0 &middot;
            Febrero 2026
          </p>
          <p
            className="text-xs"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--sg-text-muted)",
            }}
          >
            Basado en la Guia de Estilo Visual — Notion
          </p>
        </div>
      </footer>
    </div>
  );
}