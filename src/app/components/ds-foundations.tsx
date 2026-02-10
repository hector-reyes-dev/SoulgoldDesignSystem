import React, { useState } from "react";
import {
  Check, X, Heart, ShoppingBag, Search, Star, ChevronRight,
  Truck, RotateCcw, Shield, Package, Eye, Menu, User
} from "lucide-react";

/* ─── Color Swatch ─── */
function ColorSwatch({ name, value, role, cssVar }: { name: string; value: string; role: string; cssVar: string }) {
  const [copied, setCopied] = useState(false);
  const isLight = ["#FAF8F5", "#FFFDF9", "#FBF7F0", "#F0E8DD", "#E5D9CA", "#FFFFFF", "#E8D5B0", "#E8E0D6", "#F0EAE2", "#EDF5F0", "#FDEDED", "#FFF8E1", "#EEF3F8"].includes(value);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(cssVar); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      className="group text-left"
    >
      <div
        className="w-full aspect-[4/3] rounded-lg mb-3 border border-[var(--sg-border)] transition-transform group-hover:scale-[1.02]"
        style={{ backgroundColor: value }}
      >
        {copied && (
          <div className="flex items-center justify-center h-full">
            <span className={`text-xs px-2 py-1 rounded ${isLight ? "bg-[var(--sg-black)] text-white" : "bg-white text-[var(--sg-black)]"}`}>
              Copied!
            </span>
          </div>
        )}
      </div>
      <p className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}>{name}</p>
      <p className="text-xs mt-0.5" style={{ color: "var(--sg-text-secondary)" }}>{value}</p>
      <p className="text-xs mt-0.5" style={{ color: "var(--sg-text-muted)" }}>{role}</p>
    </button>
  );
}

/* ─── Section Wrapper ─── */
function Section({ id, title, subtitle, children }: { id?: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-20">
      <div className="mb-8">
        <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "1.5rem", fontWeight: 600, color: "var(--sg-black)", letterSpacing: "-0.01em" }}>
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 max-w-2xl" style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--sg-text-muted)", lineHeight: 1.6 }}>
            {subtitle}
          </p>
        )}
      </div>
      <div className="border-t border-[var(--sg-border-light)] pt-8">{children}</div>
    </section>
  );
}

/* ─── Do/Don't Card ─── */
function DoDont({ type, text, children }: { type: "do" | "dont"; text: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg overflow-hidden border border-[var(--sg-border)]">
      <div className="p-4 flex items-center justify-center min-h-[120px]" style={{ backgroundColor: "var(--sg-bone)" }}>
        {children}
      </div>
      <div className="p-4 flex items-start gap-2" style={{ backgroundColor: type === "do" ? "var(--sg-success-bg)" : "var(--sg-error-bg)" }}>
        <span className="mt-0.5">
          {type === "do" ? <Check size={16} style={{ color: "var(--sg-success)" }} /> : <X size={16} style={{ color: "var(--sg-error)" }} />}
        </span>
        <div>
          <p className="text-xs mb-1" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: type === "do" ? "var(--sg-success)" : "var(--sg-error)" }}>
            {type === "do" ? "Do" : "Don't"}
          </p>
          <p className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-secondary)", lineHeight: 1.5 }}>{text}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Typography Sample ─── */
function TypeSample({ label, fontFamily, size, weight, lineHeight, tracking, sample }: {
  label: string; fontFamily: string; size: string; weight: number; lineHeight: number; tracking?: string; sample: string;
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-baseline gap-4 py-5 border-b border-[var(--sg-border-light)]">
      <div className="lg:w-48 shrink-0">
        <span className="text-xs px-2 py-1 rounded" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, background: "var(--sg-beige)", color: "var(--sg-text-secondary)" }}>
          {label}
        </span>
      </div>
      <div className="flex-1">
        <p style={{ fontFamily, fontSize: size, fontWeight: weight, lineHeight, letterSpacing: tracking || "normal", color: "var(--sg-black)" }}>
          {sample}
        </p>
      </div>
      <div className="lg:w-64 shrink-0 flex flex-wrap gap-x-4 gap-y-1">
        <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>{size}</span>
        <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>w{weight}</span>
        <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>lh {lineHeight}</span>
        {tracking && <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>ls {tracking}</span>}
      </div>
    </div>
  );
}

/* ─── Spacing Token ─── */
function SpacingToken({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-12 text-right text-xs shrink-0" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text-secondary)" }}>{label}</span>
      <div className="h-5 rounded-sm" style={{ width: `${value}px`, backgroundColor: "var(--sg-gold)", opacity: 0.7 }} />
      <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>{value}px</span>
    </div>
  );
}

/* ─── Main Foundations Component ─── */
export function DSFoundations() {
  return (
    <div>
      {/* ── A. Color ── */}
      <Section id="color" title="A. Color" subtitle="Tokens de color definidos por roles funcionales. Click en cualquier swatch para copiar la variable CSS.">
        {/* Primary Colors */}
        <div className="mb-12">
          <h4 className="mb-4" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-text-muted)" }}>
            Colores Primarios
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            <ColorSwatch name="Gold" value="#C8A96E" role="Accent / Firma de marca" cssVar="var(--sg-gold)" />
            <ColorSwatch name="Gold Light" value="#E8D5B0" role="Highlight / Hover sutil" cssVar="var(--sg-gold-light)" />
            <ColorSwatch name="Gold Dark" value="#A68B5B" role="Gold en texto / énfasis" cssVar="var(--sg-gold-dark)" />
            <ColorSwatch name="Bone White" value="#FAF8F5" role="Background principal" cssVar="var(--sg-bone)" />
            <ColorSwatch name="Black" value="#1A1A1A" role="Text / CTA primario" cssVar="var(--sg-black)" />
          </div>
        </div>

        {/* Secondary / Neutral */}
        <div className="mb-12">
          <h4 className="mb-4" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-text-muted)" }}>
            Neutros & Superficies
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <ColorSwatch name="Beige" value="#F0E8DD" role="Fondo alternativo" cssVar="var(--sg-beige)" />
            <ColorSwatch name="Sand" value="#E5D9CA" role="Muted / Disabled" cssVar="var(--sg-sand)" />
            <ColorSwatch name="Kraft" value="#C4A882" role="Acento artesanal" cssVar="var(--sg-kraft)" />
            <ColorSwatch name="Surface" value="#FFFDF9" role="Fondo base" cssVar="var(--sg-surface)" />
            <ColorSwatch name="Surface Warm" value="#FBF7F0" role="Secciones editoriales" cssVar="var(--sg-surface-warm)" />
            <ColorSwatch name="White" value="#FFFFFF" role="Tarjetas / Producto" cssVar="var(--sg-white)" />
          </div>
        </div>

        {/* Text Colors */}
        <div className="mb-12">
          <h4 className="mb-4" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-text-muted)" }}>
            Texto
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <ColorSwatch name="Text Primary" value="#1A1A1A" role="Títulos y body" cssVar="var(--sg-text)" />
            <ColorSwatch name="Text Secondary" value="#5C564E" role="Subtítulos" cssVar="var(--sg-text-secondary)" />
            <ColorSwatch name="Text Muted" value="#8C8278" role="Captions / Helper" cssVar="var(--sg-text-muted)" />
            <ColorSwatch name="Gold Dark (text)" value="#A68B5B" role="Links / Énfasis dorado" cssVar="var(--sg-gold-dark)" />
          </div>
        </div>

        {/* Border */}
        <div className="mb-12">
          <h4 className="mb-4" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-text-muted)" }}>
            Bordes & Dividers
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
            <ColorSwatch name="Border" value="#E8E0D6" role="Bordes de tarjetas" cssVar="var(--sg-border)" />
            <ColorSwatch name="Border Light" value="#F0EAE2" role="Dividers sutiles" cssVar="var(--sg-border-light)" />
            <ColorSwatch name="Gold" value="#C8A96E" role="Borde de énfasis" cssVar="var(--sg-gold)" />
          </div>
        </div>

        {/* Feedback */}
        <div className="mb-12">
          <h4 className="mb-4" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-text-muted)" }}>
            Feedback
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <ColorSwatch name="Success" value="#4A7C59" role="Confirmación" cssVar="var(--sg-success)" />
            <ColorSwatch name="Error" value="#C0392B" role="Errores / Validación" cssVar="var(--sg-error)" />
            <ColorSwatch name="Warning" value="#D4A017" role="Advertencia" cssVar="var(--sg-warning)" />
            <ColorSwatch name="Info" value="#5B7FA5" role="Información" cssVar="var(--sg-info)" />
          </div>
        </div>

        {/* Recommended Combinations */}
        <div className="mb-12">
          <h4 className="mb-6" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-text-muted)" }}>
            Combinaciones Recomendadas
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CTA Primary */}
            <div className="rounded-lg overflow-hidden border border-[var(--sg-border)]">
              <div className="p-6 flex items-center justify-center" style={{ backgroundColor: "var(--sg-bone)" }}>
                <button className="px-8 py-3 text-sm transition-colors" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.05em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
                  COMPRAR AHORA
                </button>
              </div>
              <div className="p-4">
                <p className="text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-text)" }}>CTA Primario</p>
                <p className="text-xs mt-1" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Negro #1A1A1A sobre fondo Bone</p>
              </div>
            </div>

            {/* CTA Hover */}
            <div className="rounded-lg overflow-hidden border border-[var(--sg-border)]">
              <div className="p-6 flex items-center justify-center" style={{ backgroundColor: "var(--sg-bone)" }}>
                <button className="px-8 py-3 text-sm transition-colors" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.05em", backgroundColor: "var(--sg-gold)", color: "var(--sg-white)", borderRadius: "2px" }}>
                  COMPRAR AHORA
                </button>
              </div>
              <div className="p-4">
                <p className="text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-text)" }}>CTA Hover</p>
                <p className="text-xs mt-1" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Gold #C8A96E — firma de marca en hover</p>
              </div>
            </div>

            {/* Trust Section */}
            <div className="rounded-lg overflow-hidden border border-[var(--sg-border)]">
              <div className="p-6 flex items-center justify-center" style={{ backgroundColor: "var(--sg-beige)" }}>
                <span className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-black)" }}>
                  ★★★★★ Garantía de calidad
                </span>
              </div>
              <div className="p-4">
                <p className="text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-text)" }}>Trust / Reviews</p>
                <p className="text-xs mt-1" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Text Black sobre Beige — calidez y confianza</p>
              </div>
            </div>
          </div>
        </div>

        {/* Do / Don't */}
        <div>
          <h4 className="mb-6" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-text-muted)" }}>
            Do / Don't
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <DoDont type="do" text="Usar dorado como acento especial y con moderación. Menos es más.">
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 rounded" style={{ backgroundColor: "var(--sg-bone)" }} />
                <div className="w-12 h-12 rounded" style={{ backgroundColor: "var(--sg-white)" }} />
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "var(--sg-gold)" }} />
              </div>
            </DoDont>
            <DoDont type="dont" text="Saturar la interfaz con dorado. Se percibe ostentoso y 'barato'.">
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 rounded" style={{ backgroundColor: "var(--sg-gold)" }} />
                <div className="w-12 h-12 rounded" style={{ backgroundColor: "var(--sg-gold-light)" }} />
                <div className="w-12 h-12 rounded" style={{ backgroundColor: "var(--sg-gold-dark)" }} />
              </div>
            </DoDont>
            <DoDont type="do" text="Fondos luminosos (Bone, Beige, White) que permitan que producto y fotografía brillen.">
              <div className="p-3 rounded" style={{ backgroundColor: "var(--sg-bone)" }}>
                <div className="w-16 h-10 rounded" style={{ backgroundColor: "var(--sg-white)", boxShadow: "var(--sg-shadow-sm)" }} />
              </div>
            </DoDont>
            <DoDont type="dont" text="Fondos oscuros dominantes. Contradicen la luminosidad de la marca.">
              <div className="p-3 rounded" style={{ backgroundColor: "#2A2A2A" }}>
                <div className="w-16 h-10 rounded" style={{ backgroundColor: "#3A3A3A" }} />
              </div>
            </DoDont>
          </div>
        </div>
      </Section>

      {/* ── B. Typography ── */}
      <Section id="typography" title="B. Typography" subtitle="Serif para identidad y emoción (Cormorant Garamond). Sans para funcionalidad y UI (DM Sans).">
        <TypeSample label="Display" fontFamily="var(--font-serif)" size="3.5rem" weight={500} lineHeight={1.1} sample="Detalles que transforman" />
        <TypeSample label="H1" fontFamily="var(--font-serif)" size="2.5rem" weight={500} lineHeight={1.2} sample="Explora Nuestras Colecciones" />
        <TypeSample label="H2" fontFamily="var(--font-sans)" size="1.75rem" weight={600} lineHeight={1.3} sample="Las más vendidas" />
        <TypeSample label="H3" fontFamily="var(--font-serif)" size="1.5rem" weight={500} lineHeight={1.35} sample="Colección Atardecer" />
        <TypeSample label="H4" fontFamily="var(--font-sans)" size="1.125rem" weight={500} lineHeight={1.4} sample="Collar Luna Dorada" />
        <TypeSample label="Body" fontFamily="var(--font-sans)" size="1rem" weight={400} lineHeight={1.7} sample="Cada pieza de Soul&Gold es elaborada artesanalmente en chapa de oro, combinando tradición y diseño contemporáneo para la mujer moderna." />
        <TypeSample label="Body Small" fontFamily="var(--font-sans)" size="0.875rem" weight={400} lineHeight={1.6} sample="Chapa de oro 22k · Garantía de calidad · Envío a todo México" />
        <TypeSample label="Caption" fontFamily="var(--font-sans)" size="0.75rem" weight={400} lineHeight={1.5} sample="Agregado al carrito · hace 2 minutos" />
        <TypeSample label="Button" fontFamily="var(--font-sans)" size="0.875rem" weight={600} lineHeight={1} tracking="0.08em" sample="AÑADIR AL CARRITO" />
        <TypeSample label="Link" fontFamily="var(--font-sans)" size="0.875rem" weight={500} lineHeight={1.5} sample="Ver todas las colecciones →" />

        <div className="mt-10 p-6 rounded-lg" style={{ backgroundColor: "var(--sg-beige)" }}>
          <h4 className="mb-3" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", fontWeight: 600, color: "var(--sg-text)" }}>
            Reglas de uso
          </h4>
          <ul className="space-y-2">
            {[
              "Serif (Cormorant Garamond): Títulos principales, H1, H3, mensajes emocionales. Máximo 1 H1 por página.",
              "Sans (DM Sans): Body, navegación, precios, formularios, CTAs, información técnica.",
              "Botones: Siempre uppercase o capitalize con letter-spacing amplio para claridad.",
              "Tamaño mínimo: 14px para etiquetas, 16px para body en desktop, 18px recomendado para textos largos.",
              "Line-height: 1.6–1.8 para textos largos para legibilidad óptima."
            ].map((rule, i) => (
              <li key={i} className="text-xs flex gap-2" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-secondary)", lineHeight: 1.6 }}>
                <span style={{ color: "var(--sg-gold)" }}>•</span> {rule}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── C. Spacing & Layout ── */}
      <Section id="spacing" title="C. Spacing & Layout" subtitle="Escala de espaciado base 4px. Grid system para mobile y desktop. Whitespace premium como principio.">
        {/* Spacing Scale */}
        <div className="mb-12">
          <h4 className="mb-6" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-text-muted)" }}>
            Escala de Espaciado
          </h4>
          <div className="space-y-3">
            <SpacingToken value={4} label="4" />
            <SpacingToken value={8} label="8" />
            <SpacingToken value={12} label="12" />
            <SpacingToken value={16} label="16" />
            <SpacingToken value={24} label="24" />
            <SpacingToken value={32} label="32" />
            <SpacingToken value={48} label="48" />
            <SpacingToken value={64} label="64" />
            <SpacingToken value={80} label="80" />
            <SpacingToken value={96} label="96" />
            <SpacingToken value={120} label="120" />
          </div>
        </div>

        {/* Grid */}
        <div className="mb-12">
          <h4 className="mb-6" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-text-muted)" }}>
            Grid System
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mobile Grid */}
            <div className="p-6 rounded-lg border border-[var(--sg-border)]">
              <p className="text-xs mb-4" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-text)" }}>Mobile — 4 columnas</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="flex-1 h-24 rounded" style={{ backgroundColor: "var(--sg-gold-light)", opacity: 0.5 }} />
                ))}
              </div>
              <div className="mt-3 flex justify-between">
                <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Margin: 16px</span>
                <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Gutter: 16px</span>
              </div>
            </div>
            {/* Desktop Grid */}
            <div className="p-6 rounded-lg border border-[var(--sg-border)]">
              <p className="text-xs mb-4" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-text)" }}>Desktop — 12 columnas</p>
              <div className="flex gap-1">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="flex-1 h-24 rounded" style={{ backgroundColor: "var(--sg-gold-light)", opacity: 0.4 }} />
                ))}
              </div>
              <div className="mt-3 flex justify-between">
                <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Max width: 1280px</span>
                <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Gutter: 24px</span>
              </div>
            </div>
          </div>
        </div>

        {/* Radii, Strokes, Elevations */}
        <div className="mb-12">
          <h4 className="mb-6" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-text-muted)" }}>
            Radii, Strokes & Elevaciones
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Radii */}
            <div className="p-6 rounded-lg border border-[var(--sg-border)]">
              <p className="text-xs mb-4" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-text)" }}>Border Radius</p>
              <div className="space-y-3">
                {[
                  { label: "None", value: "0px" },
                  { label: "Subtle", value: "2px" },
                  { label: "SM", value: "4px" },
                  { label: "MD", value: "6px" },
                  { label: "LG", value: "8px" },
                  { label: "Full", value: "9999px" },
                ].map(r => (
                  <div key={r.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 border border-[var(--sg-border)]" style={{ borderRadius: r.value, backgroundColor: "var(--sg-beige)" }} />
                    <div>
                      <span className="text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>{r.label}</span>
                      <span className="text-xs ml-2" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>{r.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strokes */}
            <div className="p-6 rounded-lg border border-[var(--sg-border)]">
              <p className="text-xs mb-4" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-text)" }}>Strokes</p>
              <div className="space-y-4">
                {[
                  { label: "Border Light", w: 1, color: "var(--sg-border-light)" },
                  { label: "Border Default", w: 1, color: "var(--sg-border)" },
                  { label: "Border Strong", w: 1.5, color: "var(--sg-kraft)" },
                  { label: "Border Gold", w: 1.5, color: "var(--sg-gold)" },
                ].map(s => (
                  <div key={s.label}>
                    <div className="h-0 mb-2" style={{ borderBottom: `${s.w}px solid ${s.color}` }} />
                    <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>{s.label} — {s.w}px</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shadows */}
            <div className="p-6 rounded-lg border border-[var(--sg-border)]">
              <p className="text-xs mb-4" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-text)" }}>Elevaciones</p>
              <div className="space-y-4">
                {[
                  { label: "Shadow SM", shadow: "0 1px 3px rgba(26,26,26,0.04)" },
                  { label: "Shadow MD", shadow: "0 4px 12px rgba(26,26,26,0.06)" },
                  { label: "Shadow LG", shadow: "0 8px 24px rgba(26,26,26,0.08)" },
                ].map(s => (
                  <div key={s.label} className="flex items-center gap-3">
                    <div className="w-16 h-10 rounded" style={{ backgroundColor: "var(--sg-white)", boxShadow: s.shadow }} />
                    <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Whitespace Rules */}
        <div className="p-6 rounded-lg" style={{ backgroundColor: "var(--sg-beige)" }}>
          <h4 className="mb-3" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", fontWeight: 600, color: "var(--sg-text)" }}>
            Reglas de Whitespace Premium
          </h4>
          <ul className="space-y-2">
            {[
              "Padding interno de elementos UI: 16–24px mínimo (mobile), 32–48px (desktop).",
              "Separación entre secciones: 80–120px en desktop para sensación de lujo.",
              "Grids de producto: espacio entre tarjetas generoso para protagonismo individual.",
              "El producto y la fotografía deben 'respirar' — no saturar con contenido.",
              "Equilibrio: whitespace premium sin ser ineficiente (evitar scroll excesivo).",
            ].map((rule, i) => (
              <li key={i} className="text-xs flex gap-2" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-secondary)", lineHeight: 1.6 }}>
                <span style={{ color: "var(--sg-gold)" }}>•</span> {rule}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── D. Iconography ── */}
      <Section id="iconography" title="D. Iconography" subtitle="Line icons minimalistas y cálidos. Evitar estilo 'tech-corporate'. Stroke width consistente.">
        <div className="mb-8">
          <h4 className="mb-6" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-text-muted)" }}>
            Tamaños Estándar
          </h4>
          <div className="flex flex-wrap gap-8 items-end">
            {[
              { size: 16, label: "SM — 16px", stroke: 1.5 },
              { size: 20, label: "MD — 20px", stroke: 1.5 },
              { size: 24, label: "LG — 24px", stroke: 1.5 },
              { size: 32, label: "XL — 32px", stroke: 1.25 },
            ].map(s => (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <Heart size={s.size} strokeWidth={s.stroke} style={{ color: "var(--sg-black)" }} />
                <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-6" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-text-muted)" }}>
            Iconos de E-commerce
          </h4>
          <div className="flex flex-wrap gap-6">
            {[
              { icon: <Heart size={24} strokeWidth={1.5} />, label: "Wishlist" },
              { icon: <ShoppingBag size={24} strokeWidth={1.5} />, label: "Cart" },
              { icon: <Search size={24} strokeWidth={1.5} />, label: "Search" },
              { icon: <User size={24} strokeWidth={1.5} />, label: "Account" },
              { icon: <Menu size={24} strokeWidth={1.5} />, label: "Menu" },
              { icon: <Star size={24} strokeWidth={1.5} />, label: "Rating" },
              { icon: <ChevronRight size={24} strokeWidth={1.5} />, label: "Navigate" },
              { icon: <Truck size={24} strokeWidth={1.5} />, label: "Shipping" },
              { icon: <RotateCcw size={24} strokeWidth={1.5} />, label: "Returns" },
              { icon: <Shield size={24} strokeWidth={1.5} />, label: "Guarantee" },
              { icon: <Package size={24} strokeWidth={1.5} />, label: "Package" },
              { icon: <Eye size={24} strokeWidth={1.5} />, label: "Quick View" },
            ].map(item => (
              <div key={item.label} className="flex flex-col items-center gap-2 w-16">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--sg-bone)", color: "var(--sg-black)" }}>
                  {item.icon}
                </div>
                <span className="text-xs text-center" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: "var(--sg-beige)" }}>
          <h4 className="mb-3" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", fontWeight: 600, color: "var(--sg-text)" }}>
            Lineamientos de Iconografía
          </h4>
          <ul className="space-y-2">
            {[
              "Estilo: Line icons con stroke width de 1.5px (tamaños SM–LG) o 1.25px (XL).",
              "Personalidad: Cálidos, orgánicos, accesibles — no ultra-geométricos ni corporativos.",
              "Color: Usar --sg-black para default, --sg-gold para estados activos/hover.",
              "Consistencia: Todos los iconos deben tener el mismo peso visual en la misma vista.",
            ].map((rule, i) => (
              <li key={i} className="text-xs flex gap-2" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-secondary)", lineHeight: 1.6 }}>
                <span style={{ color: "var(--sg-gold)" }}>•</span> {rule}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
}
