import React, { useState } from "react";
import {
  Heart, ShoppingBag, Star, ChevronDown, ChevronRight,
  Truck, SlidersHorizontal, Grid3X3, List, X, Minus, Plus,
  CreditCard, MapPin, Package, Check, ChevronLeft, ZoomIn
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

/* ─── PLP Filter Bar ─── */
function PLPPattern({ images }: { images: { necklace: string; bracelet: string; earrings: string; ring: string; chain: string; lifestyle: string } }) {
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <Section id="plp" title="PLP — Filter Bar & Grid" subtitle="Barra de filtros desktop con drawer en mobile. Grid de productos con espacio generoso.">
      {/* Desktop Filter Bar */}
      <div className="mb-8">
        <p className="text-xs mb-4" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-text-muted)" }}>Desktop Filter Bar</p>
        <div className="border border-[var(--sg-border)] rounded-lg overflow-hidden" style={{ backgroundColor: "var(--sg-white)" }}>
          <div className="px-6 py-4 flex items-center justify-between border-b" style={{ borderColor: "var(--sg-border-light)" }}>
            <div className="flex items-center gap-6">
              <span className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-text)" }}>Collares</span>
              <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>48 productos</span>
            </div>
            <div className="flex items-center gap-4">
              {/* Filters */}
              {["Categoría", "Material", "Precio"].map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(activeFilter === f ? null : f)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded border transition-all"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    borderColor: activeFilter === f ? "var(--sg-gold)" : "var(--sg-border)",
                    color: activeFilter === f ? "var(--sg-gold-dark)" : "var(--sg-text)",
                    backgroundColor: activeFilter === f ? "var(--sg-gold-light)" : "transparent",
                  }}
                >
                  {f} <ChevronDown size={14} />
                </button>
              ))}
              <div className="w-px h-5 mx-2" style={{ backgroundColor: "var(--sg-border)" }} />
              <span className="text-sm" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Ordenar:</span>
              <select className="text-sm border-none outline-none bg-transparent" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>
                <option>Más recientes</option>
                <option>Precio: menor a mayor</option>
                <option>Precio: mayor a menor</option>
                <option>Más populares</option>
              </select>
            </div>
          </div>

          {/* Product Grid Preview */}
          <div className="p-6">
            <div className="grid grid-cols-4 gap-6">
              {[
                { name: "Collar Luna Dorada", price: "$680", img: images.necklace },
                { name: "Pulsera Sol", price: "$520", img: images.bracelet, badge: "Bestseller" },
                { name: "Aretes Estrella", price: "$450", img: images.earrings },
                { name: "Cadena Elegante", price: "$780", img: images.chain },
              ].map(p => (
                <div key={p.name} className="group">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3" style={{ backgroundColor: "var(--sg-bone)" }}>
                    <ImageWithFallback src={p.img} alt={p.name} className="w-full h-full object-cover" />
                    {p.badge && (
                      <span className="absolute top-3 left-3 px-2 py-1 text-[10px] uppercase" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.08em", backgroundColor: "var(--sg-gold)", color: "var(--sg-white)", borderRadius: "2px" }}>
                        {p.badge}
                      </span>
                    )}
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: "var(--sg-white)", boxShadow: "var(--sg-shadow-sm)" }}>
                      <Heart size={14} strokeWidth={1.5} style={{ color: "var(--sg-black)" }} />
                    </button>
                  </div>
                  <p className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>{p.name}</p>
                  <p className="text-sm mt-1" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-black)" }}>{p.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div>
        <p className="text-xs mb-4" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-text-muted)" }}>Mobile Filter Drawer</p>
        <div className="flex gap-4 items-start">
          <button onClick={() => setShowFilterDrawer(true)} className="flex items-center gap-2 px-4 py-2.5 text-sm border rounded" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, borderColor: "var(--sg-border)", color: "var(--sg-text)" }}>
            <SlidersHorizontal size={16} /> Filtrar
          </button>
          {showFilterDrawer && (
            <div className="max-w-xs w-full border border-[var(--sg-border)] rounded-lg overflow-hidden" style={{ backgroundColor: "var(--sg-white)" }}>
              <div className="px-5 py-4 flex items-center justify-between border-b" style={{ borderColor: "var(--sg-border-light)" }}>
                <span className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-text)" }}>Filtros</span>
                <button onClick={() => setShowFilterDrawer(false)}>
                  <X size={18} style={{ color: "var(--sg-text-muted)" }} />
                </button>
              </div>
              <div className="p-5 space-y-5">
                {["Categoría", "Material", "Precio"].map(filter => (
                  <div key={filter}>
                    <p className="text-sm mb-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>{filter}</p>
                    <div className="space-y-2">
                      {(filter === "Categoría" ? ["Collares", "Aretes", "Pulseras", "Anillos"] :
                        filter === "Material" ? ["Chapa de Oro", "Acero Inoxidable"] :
                          ["$0 – $500", "$500 – $1,000", "$1,000+"]).map(opt => (
                        <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-secondary)" }}>
                          <div className="w-4 h-4 border rounded-sm" style={{ borderColor: "var(--sg-border)" }} />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-5 py-4 border-t" style={{ borderColor: "var(--sg-border-light)" }}>
                <button className="w-full py-2.5 text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
                  APLICAR FILTROS
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

/* ─── PDP Pattern ─── */
function PDPPattern({ images }: { images: { necklace: string; bracelet: string; earrings: string; ring: string } }) {
  const [selectedThumb, setSelectedThumb] = useState(0);
  const thumbs = [images.necklace, images.earrings, images.bracelet, images.ring];

  return (
    <Section id="pdp" title="PDP — Gallery & Product Info" subtitle="Galería con thumbnails y zoom. Layout de información clara y organizada.">
      <div className="border border-[var(--sg-border)] rounded-lg overflow-hidden" style={{ backgroundColor: "var(--sg-white)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Gallery */}
          <div className="p-6">
            <div className="relative aspect-square rounded-lg overflow-hidden mb-3" style={{ backgroundColor: "var(--sg-bone)" }}>
              <ImageWithFallback src={thumbs[selectedThumb]} alt="Product" className="w-full h-full object-cover" />
              <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--sg-white)", boxShadow: "var(--sg-shadow-md)" }}>
                <ZoomIn size={18} style={{ color: "var(--sg-text)" }} />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {thumbs.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedThumb(i)}
                  className="aspect-square rounded overflow-hidden border-2 transition-all"
                  style={{
                    borderColor: selectedThumb === i ? "var(--sg-gold)" : "transparent",
                    backgroundColor: "var(--sg-bone)",
                  }}
                >
                  <ImageWithFallback src={thumb} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="p-8 lg:border-l" style={{ borderColor: "var(--sg-border-light)" }}>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 mb-4">
              <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Collares</span>
              <ChevronRight size={12} style={{ color: "var(--sg-border)" }} />
              <span className="text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>Collar Luna Dorada</span>
            </nav>

            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 500, color: "var(--sg-black)", lineHeight: 1.2 }}>
              Collar Luna Dorada
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mt-3">
              {[1, 2, 3, 4, 5].map(s => (
                <Star key={s} size={14} fill={s <= 4 ? "var(--sg-gold)" : "none"} strokeWidth={1.5} style={{ color: "var(--sg-gold)" }} />
              ))}
              <span className="text-sm ml-1" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>4.8 (128 reseñas)</span>
            </div>

            {/* Price */}
            <p className="mt-4" style={{ fontFamily: "var(--font-sans)", fontSize: "1.5rem", fontWeight: 600, color: "var(--sg-black)" }}>$680</p>

            {/* Description */}
            <p className="mt-4 text-sm" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-secondary)", lineHeight: 1.7 }}>
              Collar artesanal en chapa de oro 22k con dije de luna. Cadena de eslabones finos con cierre tipo langosta. Perfecto para uso diario y ocasiones especiales.
            </p>

            {/* Material Tags */}
            <div className="flex gap-2 mt-4">
              {["Chapa de Oro 22k", "Hecho a mano", "Hipoalergénico"].map(tag => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full" style={{ fontFamily: "var(--font-sans)", backgroundColor: "var(--sg-beige)", color: "var(--sg-text-secondary)" }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center border rounded" style={{ borderColor: "var(--sg-border)" }}>
                <button className="w-10 h-10 flex items-center justify-center"><Minus size={14} /></button>
                <span className="w-10 h-10 flex items-center justify-center text-sm border-x" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, borderColor: "var(--sg-border)" }}>1</span>
                <button className="w-10 h-10 flex items-center justify-center"><Plus size={14} /></button>
              </div>
              <button className="flex-1 py-3 text-sm flex items-center justify-center gap-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
                <ShoppingBag size={16} /> AÑADIR AL CARRITO
              </button>
              <button className="w-11 h-11 flex items-center justify-center rounded border" style={{ borderColor: "var(--sg-border)" }}>
                <Heart size={18} strokeWidth={1.5} style={{ color: "var(--sg-black)" }} />
              </button>
            </div>

            {/* Trust Badges Inline */}
            <div className="mt-6 pt-6 space-y-3 border-t" style={{ borderColor: "var(--sg-border-light)" }}>
              {[
                { icon: <Truck size={16} strokeWidth={1.5} />, text: "Envío gratis en pedidos +$999" },
                { icon: <Package size={16} strokeWidth={1.5} />, text: "Empaque premium listo para regalo" },
              ].map(b => (
                <div key={b.text} className="flex items-center gap-2">
                  <span style={{ color: "var(--sg-gold)" }}>{b.icon}</span>
                  <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── Cart Pattern ─── */
function CartPattern() {
  return (
    <Section id="cart" title="Cart — Line Item & Summary" subtitle="Línea de producto con controles de cantidad. Resumen de carrito con desglose claro.">
      <div className="border border-[var(--sg-border)] rounded-lg overflow-hidden max-w-3xl" style={{ backgroundColor: "var(--sg-white)" }}>
        <div className="px-6 py-4 border-b" style={{ borderColor: "var(--sg-border-light)" }}>
          <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", fontWeight: 600, color: "var(--sg-black)" }}>Tu Carrito (2 artículos)</h3>
        </div>

        {/* Line Items */}
        <div className="divide-y" style={{ borderColor: "var(--sg-border-light)" }}>
          {[
            { name: "Collar Luna Dorada", desc: "Chapa de Oro 22k", price: "$680", qty: 1 },
            { name: "Pulsera Sol", desc: "Acero Inoxidable", price: "$520", qty: 2 },
          ].map(item => (
            <div key={item.name} className="px-6 py-5 flex gap-4 items-center">
              <div className="w-20 h-20 rounded shrink-0" style={{ backgroundColor: "var(--sg-beige)" }} />
              <div className="flex-1">
                <p className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>{item.name}</p>
                <p className="text-xs mt-0.5" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>{item.desc}</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center border rounded" style={{ borderColor: "var(--sg-border)" }}>
                    <button className="w-7 h-7 flex items-center justify-center"><Minus size={12} /></button>
                    <span className="w-8 h-7 flex items-center justify-center text-xs border-x" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, borderColor: "var(--sg-border)" }}>{item.qty}</span>
                    <button className="w-7 h-7 flex items-center justify-center"><Plus size={12} /></button>
                  </div>
                  <button className="text-xs underline" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Eliminar</button>
                </div>
              </div>
              <p className="text-sm shrink-0" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-black)" }}>{item.price}</p>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="px-6 py-5 border-t" style={{ borderColor: "var(--sg-border)", backgroundColor: "var(--sg-bone)" }}>
          <div className="space-y-2">
            <div className="flex justify-between text-sm" style={{ fontFamily: "var(--font-sans)" }}>
              <span style={{ color: "var(--sg-text-secondary)" }}>Subtotal</span>
              <span style={{ fontWeight: 500, color: "var(--sg-text)" }}>$1,720</span>
            </div>
            <div className="flex justify-between text-sm" style={{ fontFamily: "var(--font-sans)" }}>
              <span style={{ color: "var(--sg-text-secondary)" }}>Envío</span>
              <span style={{ fontWeight: 500, color: "var(--sg-success)" }}>Gratis</span>
            </div>
            <div className="flex justify-between pt-3 border-t" style={{ fontFamily: "var(--font-sans)", borderColor: "var(--sg-border-light)" }}>
              <span style={{ fontWeight: 600, color: "var(--sg-black)" }}>Total</span>
              <span style={{ fontSize: "1.125rem", fontWeight: 600, color: "var(--sg-black)" }}>$1,720</span>
            </div>
          </div>
          <button className="w-full mt-4 py-3 text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
            PROCEDER AL CHECKOUT
          </button>
        </div>
      </div>
    </Section>
  );
}

/* ─── Checkout Pattern ─── */
function CheckoutPattern() {
  return (
    <Section id="checkout" title="Checkout — Steps & Validation" subtitle="Checkout por pasos con estados de validación. Diseño claro que reduce fricción.">
      <div className="max-w-3xl">
        {/* Step Indicator */}
        <div className="flex items-center gap-0 mb-8">
          {[
            { num: 1, label: "Dirección", done: true },
            { num: 2, label: "Envío", done: false, active: true },
            { num: 3, label: "Pago", done: false },
          ].map((step, i) => (
            <div key={step.num} className="contents">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    backgroundColor: step.done ? "var(--sg-gold)" : step.active ? "var(--sg-black)" : "var(--sg-sand)",
                    color: step.done || step.active ? "var(--sg-white)" : "var(--sg-text-muted)",
                  }}
                >
                  {step.done ? <Check size={14} /> : step.num}
                </div>
                <span className="text-sm hidden sm:inline" style={{ fontFamily: "var(--font-sans)", fontWeight: step.active ? 600 : 400, color: step.active ? "var(--sg-text)" : "var(--sg-text-muted)" }}>
                  {step.label}
                </span>
              </div>
              {i < 2 && <div className="flex-1 h-px mx-3" style={{ backgroundColor: i === 0 ? "var(--sg-gold)" : "var(--sg-border)" }} />}
            </div>
          ))}
        </div>

        {/* Address Section */}
        <div className="border border-[var(--sg-border)] rounded-lg overflow-hidden mb-6" style={{ backgroundColor: "var(--sg-white)" }}>
          <div className="px-6 py-4 flex items-center gap-3 border-b" style={{ borderColor: "var(--sg-border-light)" }}>
            <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--sg-gold)" }}>
              <Check size={12} style={{ color: "var(--sg-white)" }} />
            </div>
            <span className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-text)" }}>Dirección de Envío</span>
            <button className="ml-auto text-xs underline" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-gold-dark)" }}>Editar</button>
          </div>
          <div className="px-6 py-4">
            <p className="text-sm" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text)" }}>María López</p>
            <p className="text-sm mt-0.5" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-secondary)" }}>Av. Presidente Masaryk 123, Polanco</p>
            <p className="text-sm" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-secondary)" }}>CDMX, 11560</p>
          </div>
        </div>

        {/* Shipping Section */}
        <div className="border-2 rounded-lg overflow-hidden mb-6" style={{ borderColor: "var(--sg-gold)", backgroundColor: "var(--sg-white)" }}>
          <div className="px-6 py-4 flex items-center gap-3 border-b" style={{ borderColor: "var(--sg-border-light)" }}>
            <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--sg-black)", color: "var(--sg-white)" }}>
              <span className="text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}>2</span>
            </div>
            <span className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-text)" }}>Método de Envío</span>
          </div>
          <div className="px-6 py-4 space-y-3">
            {[
              { label: "Envío estándar (3–5 días)", price: "Gratis", selected: true },
              { label: "Envío express (1–2 días)", price: "$99", selected: false },
            ].map(opt => (
              <label key={opt.label} className="flex items-center gap-3 p-3 rounded border cursor-pointer transition-all" style={{ borderColor: opt.selected ? "var(--sg-gold)" : "var(--sg-border)", backgroundColor: opt.selected ? "var(--sg-gold-light)" : "transparent", opacity: opt.selected ? 1 : 0.3 }}>
                <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center" style={{ borderColor: opt.selected ? "var(--sg-gold)" : "var(--sg-border)" }}>
                  {opt.selected && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--sg-gold)" }} />}
                </div>
                <span className="flex-1 text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: opt.selected ? 500 : 400, color: "var(--sg-text)" }}>{opt.label}</span>
                <span className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: opt.price === "Gratis" ? "var(--sg-success)" : "var(--sg-text)" }}>{opt.price}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Payment Section */}
        <div className="border border-[var(--sg-border)] rounded-lg overflow-hidden" style={{ backgroundColor: "var(--sg-white)", opacity: 0.5 }}>
          <div className="px-6 py-4 flex items-center gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--sg-sand)" }}>
              <span className="text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-text-muted)" }}>3</span>
            </div>
            <span className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-text-muted)" }}>Pago</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── Main Patterns Export ─── */
export function DSPatterns({ images }: { images: { necklace: string; bracelet: string; earrings: string; ring: string; chain: string; lifestyle: string } }) {
  return (
    <div>
      <PLPPattern images={images} />
      <PDPPattern images={images} />
      <CartPattern />
      <CheckoutPattern />
    </div>
  );
}