import React, { useState } from "react";
import {
  Heart, ShoppingBag, Search, Star, ChevronRight, ChevronDown, ChevronUp,
  Truck, RotateCcw, Shield, X, Minus, Plus, Loader2, Eye, Menu, User,
  Check, AlertCircle, Info, Package
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h4 className="mb-6" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-text-muted)" }}>
        {title}
      </h4>
      {children}
    </div>
  );
}

/* ─── A. BUTTONS ─── */
function ButtonsSection() {
  return (
    <Section id="buttons" title="A. Buttons" subtitle="CTA primario alto contraste (negro). Hover con acento dorado de marca. Variantes para jerarquía clara.">
      {/* Primary */}
      <SubSection title="Primary Button">
        <div className="flex flex-wrap gap-4 items-center">
          <button className="px-8 py-3 text-sm transition-all" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
            AÑADIR AL CARRITO
          </button>
          <button className="px-8 py-3 text-sm transition-all" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-gold)", color: "var(--sg-white)", borderRadius: "2px" }}>
            HOVER STATE
          </button>
          <button className="px-8 py-3 text-sm transition-all" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-gold-dark)", color: "var(--sg-white)", borderRadius: "2px" }}>
            PRESSED
          </button>
          <button className="px-8 py-3 text-sm transition-all opacity-40 cursor-not-allowed" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-sand)", color: "var(--sg-text-muted)", borderRadius: "2px" }}>
            DISABLED
          </button>
          <button className="px-8 py-3 text-sm transition-all flex items-center gap-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
            <Loader2 size={16} className="animate-spin" /> CARGANDO...
          </button>
        </div>
      </SubSection>

      {/* Secondary */}
      <SubSection title="Secondary Button">
        <div className="flex flex-wrap gap-4 items-center">
          <button className="px-8 py-3 text-sm border transition-all" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", borderColor: "var(--sg-black)", color: "var(--sg-black)", borderRadius: "2px", borderWidth: "1.5px" }}>
            VER COLECCIÓN
          </button>
          <button className="px-8 py-3 text-sm border transition-all" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", borderColor: "var(--sg-gold)", color: "var(--sg-gold-dark)", borderRadius: "2px", borderWidth: "1.5px" }}>
            HOVER
          </button>
          <button className="px-8 py-3 text-sm border transition-all" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", borderColor: "var(--sg-gold-dark)", color: "var(--sg-gold-dark)", backgroundColor: "var(--sg-gold-light)", borderRadius: "2px", borderWidth: "1.5px", opacity: 0.7 }}>
            PRESSED
          </button>
          <button className="px-8 py-3 text-sm border transition-all opacity-40 cursor-not-allowed" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", borderColor: "var(--sg-border)", color: "var(--sg-text-muted)", borderRadius: "2px", borderWidth: "1.5px" }}>
            DISABLED
          </button>
        </div>
      </SubSection>

      {/* Tertiary */}
      <SubSection title="Tertiary Button (Text)">
        <div className="flex flex-wrap gap-6 items-center">
          <button className="text-sm transition-all flex items-center gap-1" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)", borderBottom: "1px solid var(--sg-black)" }}>
            Ver más detalles
          </button>
          <button className="text-sm transition-all flex items-center gap-1" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-gold-dark)", borderBottom: "1px solid var(--sg-gold)" }}>
            Hover State
          </button>
          <button className="text-sm transition-all flex items-center gap-1 opacity-40 cursor-not-allowed" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text-muted)" }}>
            Disabled
          </button>
        </div>
      </SubSection>

      {/* Icon Buttons */}
      <SubSection title="Icon Button">
        <div className="flex flex-wrap gap-4 items-center">
          {[
            { icon: <Heart size={20} strokeWidth={1.5} />, label: "Wishlist" },
            { icon: <ShoppingBag size={20} strokeWidth={1.5} />, label: "Cart" },
            { icon: <Search size={20} strokeWidth={1.5} />, label: "Search" },
            { icon: <Eye size={20} strokeWidth={1.5} />, label: "Quick View" },
          ].map(b => (
            <div key={b.label} className="flex flex-col items-center gap-2">
              <button className="w-11 h-11 flex items-center justify-center rounded-full transition-all border" style={{ borderColor: "var(--sg-border)", color: "var(--sg-black)" }}>
                {b.icon}
              </button>
              <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>{b.label}</span>
            </div>
          ))}
          {/* Filled active */}
          <div className="flex flex-col items-center gap-2">
            <button className="w-11 h-11 flex items-center justify-center rounded-full transition-all" style={{ backgroundColor: "var(--sg-black)", color: "var(--sg-white)" }}>
              <Heart size={20} strokeWidth={1.5} fill="currentColor" />
            </button>
            <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Active</span>
          </div>
        </div>
      </SubSection>

      {/* Sizes */}
      <SubSection title="Tamaños">
        <div className="flex flex-wrap gap-4 items-center">
          <button className="px-5 py-2 text-xs transition-all" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
            SMALL
          </button>
          <button className="px-8 py-3 text-sm transition-all" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
            MEDIUM
          </button>
          <button className="px-10 py-4 text-base transition-all" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
            LARGE
          </button>
        </div>
      </SubSection>
    </Section>
  );
}

/* ─── B. INPUTS & FORMS ─── */
function InputsSection() {
  const [qty, setQty] = useState(1);
  return (
    <Section id="inputs" title="B. Inputs & Forms" subtitle="Campos con estados claros. Helper text para validación. Estética limpia y minimalista.">
      {/* Text Fields */}
      <SubSection title="Text Field — Estados">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
          {/* Empty */}
          <div>
            <label className="block mb-1.5 text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text-secondary)" }}>Nombre</label>
            <input
              type="text"
              placeholder="Ej. María López"
              className="w-full px-4 py-3 text-sm rounded border outline-none transition-all"
              style={{ fontFamily: "var(--font-sans)", borderColor: "var(--sg-border)", backgroundColor: "var(--sg-white)", color: "var(--sg-text)" }}
              readOnly
            />
            <p className="mt-1.5 text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Empty</p>
          </div>
          {/* Filled */}
          <div>
            <label className="block mb-1.5 text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text-secondary)" }}>Nombre</label>
            <input
              type="text"
              value="María López"
              className="w-full px-4 py-3 text-sm rounded border outline-none transition-all"
              style={{ fontFamily: "var(--font-sans)", borderColor: "var(--sg-border)", backgroundColor: "var(--sg-white)", color: "var(--sg-text)" }}
              readOnly
            />
            <p className="mt-1.5 text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Filled</p>
          </div>
          {/* Focus */}
          <div>
            <label className="block mb-1.5 text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-gold-dark)" }}>Nombre</label>
            <input
              type="text"
              value="María"
              className="w-full px-4 py-3 text-sm rounded border-2 outline-none transition-all"
              style={{ fontFamily: "var(--font-sans)", borderColor: "var(--sg-gold)", backgroundColor: "var(--sg-white)", color: "var(--sg-text)" }}
              readOnly
            />
            <p className="mt-1.5 text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Focus</p>
          </div>
          {/* Error */}
          <div>
            <label className="block mb-1.5 text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-error)" }}>Email</label>
            <input
              type="text"
              value="maria@"
              className="w-full px-4 py-3 text-sm rounded border-2 outline-none transition-all"
              style={{ fontFamily: "var(--font-sans)", borderColor: "var(--sg-error)", backgroundColor: "var(--sg-error-bg)", color: "var(--sg-text)" }}
              readOnly
            />
            <p className="mt-1.5 text-xs flex items-center gap-1" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-error)" }}>
              <AlertCircle size={12} /> Ingresa un email válido
            </p>
          </div>
          {/* Success */}
          <div>
            <label className="block mb-1.5 text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-success)" }}>Email</label>
            <input
              type="text"
              value="maria@email.com"
              className="w-full px-4 py-3 text-sm rounded border-2 outline-none transition-all"
              style={{ fontFamily: "var(--font-sans)", borderColor: "var(--sg-success)", backgroundColor: "var(--sg-success-bg)", color: "var(--sg-text)" }}
              readOnly
            />
            <p className="mt-1.5 text-xs flex items-center gap-1" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-success)" }}>
              <Check size={12} /> Email válido
            </p>
          </div>
          {/* Disabled */}
          <div>
            <label className="block mb-1.5 text-xs opacity-40" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text-muted)" }}>Nombre</label>
            <input
              type="text"
              value="No disponible"
              className="w-full px-4 py-3 text-sm rounded border outline-none cursor-not-allowed opacity-40"
              style={{ fontFamily: "var(--font-sans)", borderColor: "var(--sg-border)", backgroundColor: "var(--sg-sand)", color: "var(--sg-text-muted)" }}
              readOnly
            />
            <p className="mt-1.5 text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Disabled</p>
          </div>
        </div>
      </SubSection>

      {/* Search */}
      <SubSection title="Search">
        <div className="max-w-md">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "var(--sg-text-muted)" }} />
            <input
              type="text"
              placeholder="Buscar collares, aretes, pulseras..."
              className="w-full pl-11 pr-4 py-3 text-sm rounded-full border outline-none transition-all"
              style={{ fontFamily: "var(--font-sans)", borderColor: "var(--sg-border)", backgroundColor: "var(--sg-white)", color: "var(--sg-text)" }}
              readOnly
            />
          </div>
        </div>
      </SubSection>

      {/* Select */}
      <SubSection title="Select">
        <div className="max-w-xs">
          <label className="block mb-1.5 text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text-secondary)" }}>Talla</label>
          <div className="relative">
            <select
              className="w-full px-4 py-3 text-sm rounded border outline-none appearance-none"
              style={{ fontFamily: "var(--font-sans)", borderColor: "var(--sg-border)", backgroundColor: "var(--sg-white)", color: "var(--sg-text)" }}
            >
              <option>Selecciona una talla</option>
              <option>Chica</option>
              <option>Mediana</option>
              <option>Grande</option>
            </select>
            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "var(--sg-text-muted)" }} />
          </div>
        </div>
      </SubSection>

      {/* Quantity Stepper */}
      <SubSection title="Quantity Stepper">
        <div className="flex items-center border rounded overflow-hidden w-fit" style={{ borderColor: "var(--sg-border)" }}>
          <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-11 h-11 flex items-center justify-center transition-colors hover:bg-[var(--sg-beige)]" style={{ color: "var(--sg-text)" }}>
            <Minus size={16} />
          </button>
          <div className="w-14 h-11 flex items-center justify-center text-sm border-x" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)", borderColor: "var(--sg-border)" }}>
            {qty}
          </div>
          <button onClick={() => setQty(qty + 1)} className="w-11 h-11 flex items-center justify-center transition-colors hover:bg-[var(--sg-beige)]" style={{ color: "var(--sg-text)" }}>
            <Plus size={16} />
          </button>
        </div>
      </SubSection>
    </Section>
  );
}

/* ─── C. NAVIGATION ─── */
function NavigationSection() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <Section id="navigation" title="C. Navigation" subtitle="Header limpio con navegación clara. Breadcrumbs, tabs y paginación para exploración fluida.">
      {/* Desktop Header */}
      <SubSection title="Header — Desktop">
        <div className="border border-[var(--sg-border)] rounded-lg overflow-hidden" style={{ backgroundColor: "var(--sg-white)" }}>
          <div className="px-8 py-4 flex items-center justify-between">
            <nav className="flex items-center gap-8">
              <span className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>Collares</span>
              <span className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>Aretes</span>
              <span className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>Pulseras</span>
              <span className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>Anillos</span>
            </nav>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 500, color: "var(--sg-black)" }}>
              Soul&Gold
            </span>
            <div className="flex items-center gap-5">
              <Search size={20} strokeWidth={1.5} style={{ color: "var(--sg-black)" }} />
              <User size={20} strokeWidth={1.5} style={{ color: "var(--sg-black)" }} />
              <Heart size={20} strokeWidth={1.5} style={{ color: "var(--sg-black)" }} />
              <div className="relative">
                <ShoppingBag size={20} strokeWidth={1.5} style={{ color: "var(--sg-black)" }} />
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px]" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, backgroundColor: "var(--sg-gold)", color: "var(--sg-white)" }}>2</span>
              </div>
            </div>
          </div>
        </div>
      </SubSection>

      {/* Mobile Header */}
      <SubSection title="Header — Mobile">
        <div className="max-w-sm border border-[var(--sg-border)] rounded-lg overflow-hidden" style={{ backgroundColor: "var(--sg-white)" }}>
          <div className="px-4 py-3 flex items-center justify-between">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              <Menu size={22} strokeWidth={1.5} style={{ color: "var(--sg-black)" }} />
            </button>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 500, color: "var(--sg-black)" }}>
              Soul&Gold
            </span>
            <div className="flex items-center gap-4">
              <Search size={20} strokeWidth={1.5} style={{ color: "var(--sg-black)" }} />
              <div className="relative">
                <ShoppingBag size={20} strokeWidth={1.5} style={{ color: "var(--sg-black)" }} />
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px]" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, backgroundColor: "var(--sg-gold)", color: "var(--sg-white)" }}>2</span>
              </div>
            </div>
          </div>
          {mobileOpen && (
            <div className="border-t px-4 py-4 space-y-3" style={{ borderColor: "var(--sg-border-light)" }}>
              {["Collares", "Aretes", "Pulseras", "Anillos", "Nueva Colección", "Sale"].map(item => (
                <a key={item} className="block text-sm py-1" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>{item}</a>
              ))}
            </div>
          )}
        </div>
      </SubSection>

      {/* Breadcrumbs */}
      <SubSection title="Breadcrumbs">
        <nav className="flex items-center gap-2 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
          <a style={{ color: "var(--sg-text-muted)" }}>Inicio</a>
          <ChevronRight size={14} style={{ color: "var(--sg-border)" }} />
          <a style={{ color: "var(--sg-text-muted)" }}>Collares</a>
          <ChevronRight size={14} style={{ color: "var(--sg-border)" }} />
          <span style={{ color: "var(--sg-text)", fontWeight: 500 }}>Collar Luna Dorada</span>
        </nav>
      </SubSection>

      {/* Tabs */}
      <SubSection title="Tabs (Colecciones)">
        <div className="flex gap-1 border-b" style={{ borderColor: "var(--sg-border)" }}>
          {["Todas", "Collares", "Aretes", "Pulseras", "Anillos"].map((tab, i) => (
            <button
              key={tab}
              className="px-5 py-3 text-sm transition-all -mb-px"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: i === 0 ? 600 : 400,
                color: i === 0 ? "var(--sg-black)" : "var(--sg-text-muted)",
                borderBottom: i === 0 ? "2px solid var(--sg-gold)" : "2px solid transparent",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </SubSection>

      {/* Pagination */}
      <SubSection title="Pagination">
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded text-sm opacity-40 cursor-not-allowed" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>
            ‹
          </button>
          {[1, 2, 3, "...", 12].map((page, i) => (
            <button
              key={i}
              className="w-9 h-9 flex items-center justify-center rounded text-sm transition-all"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: page === 1 ? 600 : 400,
                backgroundColor: page === 1 ? "var(--sg-black)" : "transparent",
                color: page === 1 ? "var(--sg-white)" : "var(--sg-text)",
              }}
            >
              {page}
            </button>
          ))}
          <button className="w-9 h-9 flex items-center justify-center rounded text-sm transition-all" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text)" }}>
            ›
          </button>
        </div>
      </SubSection>
    </Section>
  );
}

/* ─── D. PRODUCT COMPONENTS ─── */
function ProductSection({ images }: { images: { necklace: string; bracelet: string; earrings: string; ring: string } }) {
  return (
    <Section id="products" title="D. Product Components" subtitle="Tarjetas de producto con variantes, badges, ratings, y hover states para wishlist y quick actions.">
      {/* Product Cards */}
      <SubSection title="Product Card — Variantes">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Default */}
          <div className="group">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3" style={{ backgroundColor: "var(--sg-bone)" }}>
              <ImageWithFallback src={images.necklace} alt="Collar Luna Dorada" className="w-full h-full object-cover" />
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-9 h-9 rounded-full flex items-center justify-center shadow-md" style={{ backgroundColor: "var(--sg-white)" }}>
                  <Heart size={16} strokeWidth={1.5} style={{ color: "var(--sg-black)" }} />
                </button>
                <button className="w-9 h-9 rounded-full flex items-center justify-center shadow-md" style={{ backgroundColor: "var(--sg-white)" }}>
                  <Eye size={16} strokeWidth={1.5} style={{ color: "var(--sg-black)" }} />
                </button>
              </div>
            </div>
            <p className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>Collar Luna Dorada</p>
            <p className="text-sm mt-1" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-black)" }}>$680</p>
            <p className="text-xs mt-1" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Default</p>
          </div>

          {/* With Badge */}
          <div className="group">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3" style={{ backgroundColor: "var(--sg-bone)" }}>
              <ImageWithFallback src={images.bracelet} alt="Pulsera Sol" className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.08em", backgroundColor: "var(--sg-gold)", color: "var(--sg-white)", borderRadius: "2px" }}>
                Bestseller
              </span>
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-9 h-9 rounded-full flex items-center justify-center shadow-md" style={{ backgroundColor: "var(--sg-white)" }}>
                  <Heart size={16} strokeWidth={1.5} style={{ color: "var(--sg-black)" }} />
                </button>
              </div>
            </div>
            <p className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>Pulsera Sol</p>
            <p className="text-sm mt-1" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-black)" }}>$520</p>
            <p className="text-xs mt-1" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>With Badge (Bestseller)</p>
          </div>

          {/* With Rating */}
          <div className="group">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3" style={{ backgroundColor: "var(--sg-bone)" }}>
              <ImageWithFallback src={images.earrings} alt="Aretes Estrella" className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.08em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
                Nuevo
              </span>
            </div>
            <div className="flex items-center gap-1 mb-1">
              {[1, 2, 3, 4, 5].map(s => (
                <Star key={s} size={12} fill={s <= 4 ? "var(--sg-gold)" : "none"} strokeWidth={1.5} style={{ color: "var(--sg-gold)" }} />
              ))}
              <span className="text-xs ml-1" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>(24)</span>
            </div>
            <p className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>Aretes Estrella</p>
            <p className="text-sm mt-1" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-black)" }}>$450</p>
            <p className="text-xs mt-1" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>With Rating + Badge (New)</p>
          </div>

          {/* With Discount */}
          <div className="group">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3" style={{ backgroundColor: "var(--sg-bone)" }}>
              <ImageWithFallback src={images.ring} alt="Anillo Amor" className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.08em", backgroundColor: "var(--sg-error)", color: "var(--sg-white)", borderRadius: "2px" }}>
                -20%
              </span>
            </div>
            <p className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>Anillo Amor</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-error)" }}>$480</span>
              <span className="text-sm line-through" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>$600</span>
            </div>
            <p className="text-xs mt-1" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>With Discount</p>
          </div>
        </div>
      </SubSection>

      {/* Price Block */}
      <SubSection title="Price Block">
        <div className="flex flex-wrap gap-8">
          <div>
            <p className="text-xs mb-1" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Regular</p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", fontWeight: 600, color: "var(--sg-black)" }}>$680</p>
          </div>
          <div>
            <p className="text-xs mb-1" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Con descuento</p>
            <div className="flex items-baseline gap-2">
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", fontWeight: 600, color: "var(--sg-error)" }}>$480</p>
              <p className="line-through" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--sg-text-muted)" }}>$600</p>
              <span className="text-xs px-1.5 py-0.5 rounded" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, backgroundColor: "var(--sg-error-bg)", color: "var(--sg-error)" }}>-20%</span>
            </div>
          </div>
        </div>
      </SubSection>

      {/* Rating Component */}
      <SubSection title="Rating Component">
        <div className="flex flex-wrap gap-8">
          {[5, 4, 3].map(rating => (
            <div key={rating} className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map(s => (
                <Star key={s} size={16} fill={s <= rating ? "var(--sg-gold)" : "none"} strokeWidth={1.5} style={{ color: "var(--sg-gold)" }} />
              ))}
              <span className="text-sm ml-1" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>{rating}.0</span>
              <span className="text-sm" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>(128 reseñas)</span>
            </div>
          ))}
        </div>
      </SubSection>
    </Section>
  );
}

/* ─── E. CONTENT & TRUST ─── */
function ContentTrustSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <Section id="trust" title="E. Content & Trust" subtitle="Reviews, testimonios, trust badges, FAQ y empty states para construir confianza.">
      {/* Review Snippet */}
      <SubSection title="Review Snippet">
        <div className="max-w-lg p-6 rounded-lg border border-[var(--sg-border)]" style={{ backgroundColor: "var(--sg-white)" }}>
          <div className="flex items-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map(s => (
              <Star key={s} size={14} fill="var(--sg-gold)" strokeWidth={1.5} style={{ color: "var(--sg-gold)" }} />
            ))}
          </div>
          <p className="text-sm mb-3" style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontStyle: "italic", color: "var(--sg-text)", lineHeight: 1.6 }}>
            "El collar es precioso, la chapa de oro se ve y se siente real. Lo uso todos los días y no se ha desgastado nada."
          </p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, backgroundColor: "var(--sg-beige)", color: "var(--sg-text)" }}>CL</div>
            <div>
              <p className="text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-text)" }}>Claudia López</p>
              <p className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Compra verificada · hace 2 semanas</p>
            </div>
          </div>
        </div>
      </SubSection>

      {/* Testimonial Card */}
      <SubSection title="Testimonial Card">
        <div className="max-w-md p-8 rounded-lg text-center" style={{ backgroundColor: "var(--sg-beige)" }}>
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map(s => (
              <Star key={s} size={16} fill="var(--sg-gold)" strokeWidth={1.5} style={{ color: "var(--sg-gold)" }} />
            ))}
          </div>
          <p className="mb-5" style={{ fontFamily: "var(--font-serif)", fontSize: "1.125rem", fontStyle: "italic", color: "var(--sg-text)", lineHeight: 1.6 }}>
            "Cada pieza de Soul&Gold brilla con personalidad propia. Mi favorita es la pulsera Sol — la uso desde hace 6 meses sin que pierda brillo."
          </p>
          <p className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-text)" }}>Daniela Herrera</p>
          <p className="text-xs mt-1" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Ciudad de México</p>
        </div>
      </SubSection>

      {/* Trust Badges */}
      <SubSection title="Trust Badges Row">
        <div className="flex flex-wrap gap-8 py-6 px-8 rounded-lg border border-[var(--sg-border-light)]" style={{ backgroundColor: "var(--sg-bone)" }}>
          {[
            { icon: <Truck size={24} strokeWidth={1.5} />, title: "Envío Gratis", desc: "En pedidos +$999" },
            { icon: <RotateCcw size={24} strokeWidth={1.5} />, title: "Devoluciones", desc: "30 días sin costo" },
            { icon: <Shield size={24} strokeWidth={1.5} />, title: "Chapa de Oro Real", desc: "Garantía de calidad" },
            { icon: <Package size={24} strokeWidth={1.5} />, title: "Empaque Premium", desc: "Listo para regalo" },
          ].map(badge => (
            <div key={badge.title} className="flex items-center gap-3">
              <div style={{ color: "var(--sg-gold)" }}>{badge.icon}</div>
              <div>
                <p className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-text)" }}>{badge.title}</p>
                <p className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SubSection>

      {/* FAQ Accordion */}
      <SubSection title="FAQ Accordion">
        <div className="max-w-lg divide-y" style={{ borderColor: "var(--sg-border)" }}>
          {[
            { q: "¿La chapa de oro se desgasta?", a: "Nuestra chapa de oro 22k tiene una durabilidad excepcional. Con los cuidados adecuados, tus piezas mantendrán su brillo por mucho tiempo." },
            { q: "¿Cuánto tarda el envío?", a: "Los envíos dentro de CDMX se entregan en 1-3 días hábiles. A nivel nacional, de 3-5 días hábiles." },
            { q: "¿Puedo devolver mi compra?", a: "Sí, cuentas con 30 días para realizar una devolución sin costo. La pieza debe estar en su empaque original." },
          ].map((faq, i) => (
            <div key={i} className="border-t" style={{ borderColor: "var(--sg-border-light)" }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>{faq.q}</span>
                {openFaq === i ? <ChevronUp size={18} style={{ color: "var(--sg-text-muted)" }} /> : <ChevronDown size={18} style={{ color: "var(--sg-text-muted)" }} />}
              </button>
              {openFaq === i && (
                <p className="pb-4 text-sm" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-secondary)", lineHeight: 1.7 }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </SubSection>

      {/* Empty States */}
      <SubSection title="Empty States">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
          <div className="p-8 rounded-lg border border-dashed text-center" style={{ borderColor: "var(--sg-border)", backgroundColor: "var(--sg-bone)" }}>
            <Heart size={32} strokeWidth={1} className="mx-auto mb-3" style={{ color: "var(--sg-text-muted)" }} />
            <p className="text-sm mb-1" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>Tu wishlist está vacía</p>
            <p className="text-xs mb-4" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Agrega piezas que te enamoren</p>
            <button className="px-6 py-2 text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
              EXPLORAR COLECCIONES
            </button>
          </div>
          <div className="p-8 rounded-lg border border-dashed text-center" style={{ borderColor: "var(--sg-border)", backgroundColor: "var(--sg-bone)" }}>
            <ShoppingBag size={32} strokeWidth={1} className="mx-auto mb-3" style={{ color: "var(--sg-text-muted)" }} />
            <p className="text-sm mb-1" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>Tu carrito está vacío</p>
            <p className="text-xs mb-4" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Descubre piezas únicas para ti</p>
            <button className="px-6 py-2 text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
              SEGUIR COMPRANDO
            </button>
          </div>
        </div>
      </SubSection>
    </Section>
  );
}

/* ─── F. OVERLAYS ─── */
function OverlaysSection() {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  return (
    <Section id="overlays" title="F. Overlays" subtitle="Modales, drawers y notificaciones. Sin pop-ups agresivos — cada interrupción debe estar justificada.">
      <SubSection title="Modal">
        <button onClick={() => setShowModal(true)} className="px-6 py-2.5 text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
          ABRIR MODAL
        </button>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(26,26,26,0.4)" }} onClick={() => setShowModal(false)}>
            <div className="w-full max-w-md rounded-lg p-8 relative" style={{ backgroundColor: "var(--sg-white)", boxShadow: "var(--sg-shadow-lg)" }} onClick={e => e.stopPropagation()}>
              <button onClick={() => setShowModal(false)} className="absolute top-4 right-4">
                <X size={20} style={{ color: "var(--sg-text-muted)" }} />
              </button>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 500, color: "var(--sg-black)" }}>Vista Rápida</h3>
              <p className="mt-3 text-sm" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-secondary)", lineHeight: 1.7 }}>
                Este modal se usa para vistas rápidas de producto, confirmaciones de acción, o información complementaria sin salir de la página actual.
              </p>
              <div className="mt-6 flex gap-3">
                <button onClick={() => setShowModal(false)} className="px-6 py-2.5 text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
                  ACEPTAR
                </button>
                <button onClick={() => setShowModal(false)} className="px-6 py-2.5 text-sm border" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", borderColor: "var(--sg-border)", color: "var(--sg-text)", borderRadius: "2px" }}>
                  CANCELAR
                </button>
              </div>
            </div>
          </div>
        )}
      </SubSection>

      {/* Cart Drawer Preview */}
      <SubSection title="Cart Drawer (Preview)">
        <div className="max-w-sm border border-[var(--sg-border)] rounded-lg overflow-hidden" style={{ backgroundColor: "var(--sg-white)" }}>
          <div className="px-6 py-4 flex items-center justify-between border-b" style={{ borderColor: "var(--sg-border-light)" }}>
            <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", fontWeight: 600, color: "var(--sg-black)" }}>Tu Carrito (2)</h4>
            <X size={20} style={{ color: "var(--sg-text-muted)" }} />
          </div>
          <div className="p-6 space-y-4">
            {[
              { name: "Collar Luna Dorada", price: "$680", qty: 1 },
              { name: "Pulsera Sol", price: "$520", qty: 1 },
            ].map(item => (
              <div key={item.name} className="flex gap-3">
                <div className="w-16 h-16 rounded shrink-0" style={{ backgroundColor: "var(--sg-beige)" }} />
                <div className="flex-1">
                  <p className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>{item.name}</p>
                  <p className="text-sm mt-0.5" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-black)" }}>{item.price}</p>
                  <p className="text-xs mt-0.5" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Cant: {item.qty}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-4 border-t" style={{ borderColor: "var(--sg-border-light)" }}>
            <div className="flex justify-between mb-4">
              <span className="text-sm" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-secondary)" }}>Subtotal</span>
              <span className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-black)" }}>$1,200</span>
            </div>
            <button className="w-full py-3 text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
              FINALIZAR COMPRA
            </button>
          </div>
        </div>
      </SubSection>

      {/* Toast */}
      <SubSection title="Toast / Notification">
        <div className="space-y-3 max-w-sm">
          <button onClick={() => setShowToast(true)} className="px-6 py-2.5 text-sm mb-4" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
            MOSTRAR TOAST
          </button>
          {/* Success Toast */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg" style={{ backgroundColor: "var(--sg-success-bg)", border: "1px solid var(--sg-success)" }}>
            <Check size={18} style={{ color: "var(--sg-success)" }} />
            <p className="text-sm flex-1" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-success)" }}>Agregado al carrito</p>
            <X size={14} style={{ color: "var(--sg-success)" }} />
          </div>
          {/* Error Toast */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg" style={{ backgroundColor: "var(--sg-error-bg)", border: "1px solid var(--sg-error)" }}>
            <AlertCircle size={18} style={{ color: "var(--sg-error)" }} />
            <p className="text-sm flex-1" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-error)" }}>Error al procesar el pago</p>
            <X size={14} style={{ color: "var(--sg-error)" }} />
          </div>
          {/* Info Toast */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg" style={{ backgroundColor: "var(--sg-info-bg)", border: "1px solid var(--sg-info)" }}>
            <Info size={18} style={{ color: "var(--sg-info)" }} />
            <p className="text-sm flex-1" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-info)" }}>Envío gratis en tu próxima compra</p>
            <X size={14} style={{ color: "var(--sg-info)" }} />
          </div>
        </div>
        {showToast && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-lg animate-in slide-in-from-bottom-4" style={{ backgroundColor: "var(--sg-black)", boxShadow: "var(--sg-shadow-lg)" }}>
            <Check size={18} style={{ color: "var(--sg-gold)" }} />
            <p className="text-sm" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-white)" }}>Agregado al carrito</p>
            <button onClick={() => setShowToast(false)} className="ml-2"><X size={14} style={{ color: "var(--sg-text-muted)" }} /></button>
          </div>
        )}
      </SubSection>
    </Section>
  );
}

/* ─── Main Components Export ─── */
export function DSComponents({ images }: { images: { necklace: string; bracelet: string; earrings: string; ring: string } }) {
  return (
    <div>
      <ButtonsSection />
      <InputsSection />
      <NavigationSection />
      <ProductSection images={images} />
      <ContentTrustSection />
      <OverlaysSection />
    </div>
  );
}