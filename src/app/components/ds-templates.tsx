import React, { useState } from "react";
import {
  Heart, ShoppingBag, Search, Star, ChevronRight,
  Truck, RotateCcw, Shield, Package, Menu, User,
  ArrowRight, Instagram, Minus, Plus, ChevronDown, SlidersHorizontal, X, Check
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
// Import Figma Moodboard images
import imgImage1 from "figma:asset/d70cda1bbd50def02e504276383a12ac8679d7b5.png";
import img202602071312541 from "figma:asset/1dac8d01e5076a3483476cd1bcc39280b20e7754.png";
import imgImage2 from "figma:asset/aec10fca6ac34e80baf3049c7b7262e5ff1d624f.png";
import imgImage3 from "figma:asset/4530671a011883b58561beeb6031e2f57ed9479e.png";
import imgImage4 from "figma:asset/118d2281096a5d2299b32c55e83fba950c1277fc.png";
import imgImage5 from "figma:asset/5892133f17b4c4aca56cab7b574832cd03e2bbec.png";
import imgImage6 from "figma:asset/cdb614dcd504056b83c839a575db772634a31e22.png";
import imgImage7 from "figma:asset/3f404778bc6138310b140fe70c947d1602c0746c.png";

/* ─── Home-specific image URLs ─── */
const homeImages = {
  hero: "https://images.unsplash.com/photo-1689367436414-7acc3fdc3e2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGdvbGQlMjBqZXdlbHJ5JTIwc3VubGlnaHQlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzcwNDk0NjcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  collection: "https://images.unsplash.com/photo-1759726995161-8bcd3d1aacba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJlYWNoJTIwZ29sZGVuJTIwaG91ciUyMHBvcnRyYWl0JTIwZWxlZ2FudHxlbnwxfHx8fDE3NzA0OTQ2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  catNecklaces: "https://images.unsplash.com/photo-1623699655000-b4eb2011cef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbGF5ZXJlZCUyMG5lY2tsYWNlcyUyMHdvbWFuJTIwbmVja3xlbnwxfHx8fDE3NzA0OTQ2NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  catEarrings: "https://images.unsplash.com/photo-1767249627091-fa4412bba90b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwaG9vcCUyMGVhcnJpbmdzJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA0OTQ2NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  catBracelets: "https://images.unsplash.com/photo-1708389828485-66de31e8a165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwYnJhY2VsZXQlMjBzdGFjayUyMHdyaXN0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NzA0OTQ2NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  catRings: "https://images.unsplash.com/photo-1674275552496-5327af426de2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwcmluZ3MlMjB3b21hbiUyMGhhbmQlMjBtaW5pbWFsfGVufDF8fHx8MTc3MDQ5NDY3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  pendant: "https://images.unsplash.com/photo-1733761013921-89d19f4a2194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwcGVuZGFudCUyMG5lY2tsYWNlJTIwY2xvc2V1cCUyMGVsZWdhbnR8ZW58MXx8fHwxNzcwNDk0NjczfDA&ixlib=rb-4.1.0&q=80&w=1080",
  womanEarrings: "https://images.unsplash.com/photo-1760135119470-98e5abf07b23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBlYXJyaW5ncyUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfHx8fDE3NzA0OTQ2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  artisanDetail: "https://images.unsplash.com/photo-1679019937997-2272d4a840ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwY2hhaW4lMjBicmFjZWxldCUyMGRldGFpbCUyMGFydGlzYW58ZW58MXx8fHwxNzcwNDk0Njc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  summer: "https://images.unsplash.com/photo-1765584830117-166fecd1eb0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFjY2Vzc29yaWVzJTIwZ29sZCUyMHN1bW1lciUyMG91dGRvb3J8ZW58MXx8fHwxNzcwNDk0Njc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  giftBox: "https://images.unsplash.com/photo-1759563874745-47e35c0a9572?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwZ2lmdCUyMGJveCUyMHBhY2thZ2luZyUyMGVsZWdhbnR8ZW58MXx8fHwxNzcwNDk0Njc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
};

// Figma Moodboard images for authentic Soul&Gold aesthetics
const moodboardImages = {
  hero: imgImage1,
  heroAlt: img202602071312541,
  lifestyle1: imgImage2,
  lifestyle2: imgImage3,
  jewelry1: imgImage4,
  jewelry2: imgImage5,
  jewelry3: imgImage6,
  jewelry4: imgImage7,
};

/* ─── Section Wrapper ─── */
function Section({ id, title, subtitle, children }: { id?: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-24">
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

/* ─── Shared Header ─── */
function TemplateHeader() {
  return (
    <div className="px-6 lg:px-10 py-4 flex items-center justify-between border-b" style={{ borderColor: "var(--sg-border-light)", backgroundColor: "var(--sg-white)" }}>
      <nav className="hidden lg:flex items-center gap-6">
        {["Collares", "Aretes", "Pulseras", "Anillos"].map(item => (
          <span key={item} className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 400, color: "var(--sg-text)" }}>{item}</span>
        ))}
      </nav>
      <button className="lg:hidden"><Menu size={22} strokeWidth={1.5} style={{ color: "var(--sg-black)" }} /></button>
      <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.375rem", fontWeight: 500, color: "var(--sg-black)" }}>
        Soul&Gold
      </span>
      <div className="flex items-center gap-4">
        <Search size={18} strokeWidth={1.5} style={{ color: "var(--sg-black)" }} />
        <User size={18} strokeWidth={1.5} className="hidden lg:block" style={{ color: "var(--sg-black)" }} />
        <Heart size={18} strokeWidth={1.5} className="hidden lg:block" style={{ color: "var(--sg-black)" }} />
        <div className="relative">
          <ShoppingBag size={18} strokeWidth={1.5} style={{ color: "var(--sg-black)" }} />
          <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px]" style={{ fontFamily: "var(--font-sans)", fontWeight: 700, backgroundColor: "var(--sg-gold)", color: "var(--sg-white)" }}>2</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Shared Footer ─── */
function TemplateFooter() {
  return (
    <div className="px-6 lg:px-10 py-10 border-t" style={{ borderColor: "var(--sg-border)", backgroundColor: "var(--sg-black)" }}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 500, color: "var(--sg-white)" }}>Soul&Gold</p>
          <p className="mt-2 text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)", lineHeight: 1.6 }}>Joyería artesanal hecha con amor. Chapa de oro real para la mujer moderna.</p>
        </div>
        <div>
          <p className="text-xs mb-3" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-gold)" }}>Tienda</p>
          {["Collares", "Aretes", "Pulseras", "Anillos"].map(item => (
            <p key={item} className="text-sm mb-1.5" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>{item}</p>
          ))}
        </div>
        <div>
          <p className="text-xs mb-3" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-gold)" }}>Info</p>
          {["Nosotros", "Envíos", "Devoluciones", "FAQ"].map(item => (
            <p key={item} className="text-sm mb-1.5" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>{item}</p>
          ))}
        </div>
        <div>
          <p className="text-xs mb-3" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-gold)" }}>Newsletter</p>
          <p className="text-xs mb-3" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)", lineHeight: 1.5 }}>Recibe noticias de colecciones nuevas y ofertas especiales.</p>
          <div className="flex">
            <input type="email" placeholder="tu@email.com" className="flex-1 px-3 py-2 text-xs rounded-l border outline-none" style={{ fontFamily: "var(--font-sans)", borderColor: "rgba(255,255,255,0.15)", backgroundColor: "rgba(255,255,255,0.05)", color: "var(--sg-white)" }} readOnly />
            <button className="px-4 py-2 text-xs rounded-r" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, backgroundColor: "var(--sg-gold)", color: "var(--sg-white)" }}>OK</button>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t flex items-center justify-between" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <p className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>&copy; 2026 Soul&Gold. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <Instagram size={16} style={{ color: "var(--sg-text-muted)" }} />
        </div>
      </div>
    </div>
  );
}

/* ─── HOME TEMPLATE ─── */
function HomeTemplate({ images }: { images: Record<string, string> }) {
  return (
    <Section id="home" title="Home Template" subtitle="Landing principal con 6 secciones: Hero, Coleccion Destacada, Bestsellers, Shop by Category, Social Proof y Value Props.">
      <div className="border border-[var(--sg-border)] rounded-lg overflow-hidden" style={{ backgroundColor: "var(--sg-surface)" }}>
        <TemplateHeader />

        {/* ─── 1. HERO SECTION ─── */}
        <div className="relative" style={{ backgroundColor: "var(--sg-bone)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
            <div className="p-8 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
              <p className="text-xs mb-4" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--sg-gold-dark)" }}>
                Nueva Coleccion Primavera 2026
              </p>
              <h1 className="mb-5" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 500, color: "var(--sg-black)", lineHeight: 1.05 }}>
                Detalles que<br />transforman
              </h1>
              <p className="mb-8 max-w-md" style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--sg-text-secondary)", lineHeight: 1.75 }}>
                Joyeria artesanal en chapa de oro, disenada para la mujer que convierte lo cotidiano en extraordinario. Cada pieza es unica, hecha con amor.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="px-10 py-3.5 text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
                  EXPLORAR COLECCION
                </button>
                <button className="px-10 py-3.5 text-sm border" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", borderColor: "var(--sg-black)", color: "var(--sg-black)", borderRadius: "2px", borderWidth: "1.5px" }}>
                  VER TODO
                </button>
              </div>
            </div>
            <div className="relative aspect-[4/5] lg:aspect-auto overflow-hidden order-1 lg:order-2">
              <img src={moodboardImages.hero} alt="Mujer con joyeria dorada" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--sg-bone)] via-transparent to-transparent lg:hidden opacity-40" />
            </div>
          </div>
        </div>

        {/* ─── 2. COLECCION DESTACADA ─── */}
        <div style={{ backgroundColor: "var(--sg-surface)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ backgroundColor: "var(--sg-beige)" }}>
            <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img src={moodboardImages.lifestyle1} alt="Coleccion Atardecer Dorado" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <p className="text-xs mb-3" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--sg-gold-dark)" }}>
                Coleccion Destacada
              </p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3vw, 2.75rem)", fontWeight: 500, color: "var(--sg-black)", lineHeight: 1.15 }}>
                Atardecer Dorado
              </h2>
              <p className="mt-4 max-w-md" style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--sg-text-secondary)", lineHeight: 1.75 }}>
                Inspirada en los atardeceres de la costa mexicana. Cada pieza captura la calidez del golden hour en chapa de oro 22k. Elegancia que se siente como verano.
              </p>
              <button className="mt-6 px-8 py-3 text-sm w-fit flex items-center gap-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
                DESCUBRIR COLECCION <ArrowRight size={14} />
              </button>
            </div>
          </div>
          <div className="px-6 lg:px-10 py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                { name: "Collar Otomana", price: "$890", img: moodboardImages.jewelry1, badge: "Nuevo" },
                { name: "Aretes Medialuna", price: "$520", img: moodboardImages.jewelry2 },
                { name: "Pulsera Cadena Sol", price: "$680", img: moodboardImages.jewelry3 },
                { name: "Anillo Atardecer", price: "$420", img: moodboardImages.jewelry4 },
              ].map(p => (
                <div key={p.name} className="group">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3" style={{ backgroundColor: "var(--sg-bone)" }}>
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                    {p.badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.08em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
                        {p.badge}
                      </span>
                    )}
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: "var(--sg-white)", boxShadow: "var(--sg-shadow-sm)" }}>
                      <Heart size={14} strokeWidth={1.5} style={{ color: "var(--sg-black)" }} />
                    </button>
                  </div>
                  <p className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>{p.name}</p>
                  <p className="text-sm mt-0.5" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-black)" }}>{p.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── 3. BESTSELLERS ─── */}
        <div className="px-6 lg:px-10 py-16 border-t" style={{ borderColor: "var(--sg-border-light)", backgroundColor: "var(--sg-white)" }}>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs mb-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--sg-gold-dark)" }}>Lo mas vendido</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 500, color: "var(--sg-black)" }}>Nuestras Favoritas</h2>
            </div>
            <button className="flex items-center gap-1.5 text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)", borderBottom: "1px solid var(--sg-black)" }}>
              Ver todo <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { name: "Collar Luna Dorada", price: "$680", img: images.necklace, badge: "Bestseller", stars: 5, reviews: 128 },
              { name: "Pulsera Sol", price: "$520", img: images.bracelet, badge: "Bestseller", stars: 5, reviews: 94 },
              { name: "Aretes Estrella", price: "$450", img: images.earrings, stars: 4, reviews: 67 },
              { name: "Anillo Amor", price: "$380", img: images.ring, stars: 5, reviews: 52 },
              { name: "Cadena Elegante", price: "$780", img: images.chain, stars: 4, reviews: 41 },
              { name: "Collar Cascada", price: "$920", img: homeImages.catNecklaces, badge: "Bestseller", stars: 5, reviews: 86 },
              { name: "Pulsera Mar", price: "$550", img: homeImages.catBracelets, stars: 4, reviews: 38 },
              { name: "Aretes Gota", price: "$490", img: homeImages.womanEarrings, stars: 5, reviews: 73 },
            ].map((p, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3" style={{ backgroundColor: "var(--sg-bone)" }}>
                  <ImageWithFallback src={p.img} alt={p.name} className="w-full h-full object-cover" />
                  {p.badge && (
                    <span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] uppercase" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.08em", backgroundColor: "var(--sg-gold)", color: "var(--sg-white)", borderRadius: "2px" }}>
                      {p.badge}
                    </span>
                  )}
                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: "var(--sg-white)", boxShadow: "var(--sg-shadow-sm)" }}>
                    <Heart size={14} strokeWidth={1.5} style={{ color: "var(--sg-black)" }} />
                  </button>
                </div>
                <div className="flex items-center gap-0.5 mb-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={10} fill={s < p.stars ? "var(--sg-gold)" : "none"} strokeWidth={1.5} style={{ color: "var(--sg-gold)" }} />
                  ))}
                  <span className="text-[10px] ml-1" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>({p.reviews})</span>
                </div>
                <p className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>{p.name}</p>
                <p className="text-sm mt-0.5" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-black)" }}>{p.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 4. SHOP BY CATEGORY ─── */}
        <div className="px-6 lg:px-10 py-16" style={{ backgroundColor: "var(--sg-bone)" }}>
          <div className="text-center mb-10">
            <p className="text-xs mb-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--sg-gold-dark)" }}>Explora</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 500, color: "var(--sg-black)" }}>Compra por Categoria</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { name: "Collares", count: "48 piezas", img: moodboardImages.jewelry1 },
              { name: "Aretes", count: "36 piezas", img: moodboardImages.jewelry2 },
              { name: "Pulseras", count: "28 piezas", img: moodboardImages.jewelry3 },
              { name: "Anillos", count: "22 piezas", img: moodboardImages.jewelry4 },
            ].map(cat => (
              <div key={cat.name} className="group cursor-pointer">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.375rem", fontWeight: 500, color: "var(--sg-white)" }}>{cat.name}</h3>
                    <p className="text-xs mt-0.5" style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.75)" }}>{cat.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 5. SOCIAL PROOF ─── */}
        <div className="px-6 lg:px-10 py-16" style={{ backgroundColor: "var(--sg-surface)" }}>
          <div className="text-center mb-10">
            <p className="text-xs mb-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--sg-gold-dark)" }}>Testimonios</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 500, color: "var(--sg-black)" }}>Lo que dicen nuestras clientas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { text: "El collar es precioso, la chapa de oro se ve y se siente real. Lo uso todos los dias y no se ha desgastado.", name: "Claudia Lopez", location: "CDMX", stars: 5 },
              { text: "Me encanto el empaque kraft, perfecto para regalar. Mi mama quedo feliz con sus aretes.", name: "Daniela Herrera", location: "Guadalajara", stars: 5 },
              { text: "Compre la pulsera Sol hace 6 meses y sigue brillando como nueva. La calidad es increible para el precio.", name: "Andrea Martinez", location: "Monterrey", stars: 5 },
            ].map(t => (
              <div key={t.name} className="p-6 rounded-lg" style={{ backgroundColor: "var(--sg-beige)" }}>
                <div className="flex justify-center gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} fill="var(--sg-gold)" strokeWidth={1.5} style={{ color: "var(--sg-gold)" }} />
                  ))}
                </div>
                <p className="text-sm mb-4 text-center" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--sg-text)", lineHeight: 1.65 }}>
                  "{t.text}"
                </p>
                <div className="text-center">
                  <p className="text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-text)" }}>{t.name}</p>
                  <p className="text-xs mt-0.5" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Feed */}
        <div className="px-6 lg:px-10 py-12 border-t" style={{ borderColor: "var(--sg-border-light)", backgroundColor: "var(--sg-bone)" }}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs mb-1" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--sg-gold-dark)" }}>@soul.andgold</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.375rem", fontWeight: 500, color: "var(--sg-black)" }}>Siguenos en Instagram</h2>
            </div>
            <button className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, borderColor: "var(--sg-border)", color: "var(--sg-text)" }}>
              <Instagram size={16} /> Seguir
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3">
            {[moodboardImages.hero, moodboardImages.jewelry1, moodboardImages.lifestyle1, moodboardImages.jewelry2, moodboardImages.jewelry3, moodboardImages.lifestyle2].map((img, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden group cursor-pointer relative">
                <img src={img} alt={`Instagram post ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                  <Instagram size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--sg-white)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 6. VALUE PROPS ─── */}
        <div className="px-6 lg:px-10 py-16 border-t" style={{ borderColor: "var(--sg-border-light)", backgroundColor: "var(--sg-white)" }}>
          <div className="text-center mb-10">
            <p className="text-xs mb-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--sg-gold-dark)" }}>Por que Soul&Gold</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 500, color: "var(--sg-black)" }}>Calidad que se siente</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <Truck size={28} strokeWidth={1.25} />, title: "Envios a toda la Republica", desc: "Envio gratis en pedidos mayores a $999. Entrega de 1 a 5 dias habiles. Empaque premium listo para regalo." },
              { icon: <Heart size={28} strokeWidth={1.25} />, title: "Piezas artesanales unicas", desc: "Cada joya es elaborada a mano con atencion al detalle. No somos produccion masiva — cada pieza tiene el sello de lo hecho con amor." },
              { icon: <Shield size={28} strokeWidth={1.25} />, title: "Materiales de calidad", desc: "Chapa de oro 22k y acero inoxidable de grado premium. Garantia de calidad en cada pieza. Instrucciones de cuidado incluidas." },
            ].map(prop => (
              <div key={prop.title} className="text-center p-6 rounded-lg" style={{ backgroundColor: "var(--sg-bone)" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "var(--sg-gold-light)", color: "var(--sg-gold-dark)" }}>
                  {prop.icon}
                </div>
                <h3 className="mb-3" style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", fontWeight: 600, color: "var(--sg-black)" }}>{prop.title}</h3>
                <p className="text-sm" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-secondary)", lineHeight: 1.7 }}>{prop.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 lg:gap-16 pt-10 border-t" style={{ borderColor: "var(--sg-border-light)" }}>
            {[
              { icon: <Truck size={18} strokeWidth={1.5} />, text: "Envio gratis +$999" },
              { icon: <RotateCcw size={18} strokeWidth={1.5} />, text: "30 dias de devolucion" },
              { icon: <Shield size={18} strokeWidth={1.5} />, text: "Chapa de oro real" },
              { icon: <Package size={18} strokeWidth={1.5} />, text: "Empaque premium" },
            ].map(b => (
              <div key={b.text} className="flex items-center gap-2">
                <span style={{ color: "var(--sg-gold)" }}>{b.icon}</span>
                <span className="text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="px-6 lg:px-10 py-14 text-center" style={{ backgroundColor: "var(--sg-beige)" }}>
          <p className="text-xs mb-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--sg-gold-dark)" }}>Newsletter</p>
          <h2 className="mb-3" style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 500, color: "var(--sg-black)" }}>Se la primera en saber</h2>
          <p className="text-sm mb-6 max-w-md mx-auto" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-secondary)", lineHeight: 1.6 }}>
            Nuevas colecciones, ofertas exclusivas y tips de cuidado para tus piezas. Sin spam, lo prometemos.
          </p>
          <div className="flex max-w-sm mx-auto">
            <input type="email" placeholder="tu@email.com" className="flex-1 px-4 py-3 text-sm rounded-l border outline-none" style={{ fontFamily: "var(--font-sans)", borderColor: "var(--sg-border)", backgroundColor: "var(--sg-white)", color: "var(--sg-text)" }} readOnly />
            <button className="px-6 py-3 text-sm rounded-r" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)" }}>
              SUSCRIBIR
            </button>
          </div>
        </div>

        <TemplateFooter />
      </div>
    </Section>
  );
}

/* ─── PLP TEMPLATE ─── */
function PLPTemplate({ images }: { images: Record<string, string> }) {
  return (
    <Section id="plp-template" title="PLP Template" subtitle="Listado de productos con filtros, grid, y paginación.">
      <div className="border border-[var(--sg-border)] rounded-lg overflow-hidden" style={{ backgroundColor: "var(--sg-surface)" }}>
        <TemplateHeader />

        <div className="px-6 lg:px-10 py-6" style={{ backgroundColor: "var(--sg-surface)" }}>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 mb-6">
            <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Inicio</span>
            <ChevronRight size={12} style={{ color: "var(--sg-border)" }} />
            <span className="text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>Collares</span>
          </nav>

          <div className="flex items-end justify-between mb-6">
            <div>
              <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 500, color: "var(--sg-black)" }}>Collares</h1>
              <p className="text-sm mt-1" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>48 productos</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="lg:hidden flex items-center gap-2 px-3 py-2 text-xs border rounded" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, borderColor: "var(--sg-border)", color: "var(--sg-text)" }}>
                <SlidersHorizontal size={14} /> Filtrar
              </button>
              <div className="hidden lg:flex items-center gap-3">
                {["Categoría", "Material", "Precio"].map(f => (
                  <button key={f} className="flex items-center gap-1 px-3 py-1.5 text-sm rounded border" style={{ fontFamily: "var(--font-sans)", borderColor: "var(--sg-border)", color: "var(--sg-text)" }}>
                    {f} <ChevronDown size={14} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10">
            {[
              { name: "Collar Luna Dorada", price: "$680", img: images.necklace, badge: "Bestseller" },
              { name: "Pulsera Sol", price: "$520", img: images.bracelet },
              { name: "Aretes Estrella", price: "$450", img: images.earrings },
              { name: "Cadena Elegante", price: "$780", img: images.chain },
              { name: "Collar Atardecer", price: "$890", img: images.necklace },
              { name: "Aretes Luna", price: "$420", img: images.earrings },
              { name: "Anillo Amor", price: "$380", img: images.ring },
              { name: "Pulsera Mar", price: "$550", img: images.bracelet },
            ].map((p, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3" style={{ backgroundColor: "var(--sg-bone)" }}>
                  <ImageWithFallback src={p.img} alt={p.name} className="w-full h-full object-cover" />
                  {p.badge && (
                    <span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] uppercase" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.08em", backgroundColor: "var(--sg-gold)", color: "var(--sg-white)", borderRadius: "2px" }}>
                      {p.badge}
                    </span>
                  )}
                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: "var(--sg-white)", boxShadow: "var(--sg-shadow-sm)" }}>
                    <Heart size={14} strokeWidth={1.5} style={{ color: "var(--sg-black)" }} />
                  </button>
                </div>
                <p className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>{p.name}</p>
                <p className="text-sm mt-0.5" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-black)" }}>{p.price}</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 pb-6">
            {[1, 2, 3, "...", 6].map((p, i) => (
              <button key={i} className="w-9 h-9 flex items-center justify-center rounded text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: p === 1 ? 600 : 400, backgroundColor: p === 1 ? "var(--sg-black)" : "transparent", color: p === 1 ? "var(--sg-white)" : "var(--sg-text)" }}>
                {p}
              </button>
            ))}
          </div>
        </div>

        <TemplateFooter />
      </div>
    </Section>
  );
}

/* ─── PDP TEMPLATE ─── */
function PDPTemplate({ images }: { images: Record<string, string> }) {
  const [openReview, setOpenReview] = useState(false);
  return (
    <Section id="pdp-template" title="PDP Template" subtitle="Galería de producto + información + reviews. Layout optimizado para conversión.">
      <div className="border border-[var(--sg-border)] rounded-lg overflow-hidden" style={{ backgroundColor: "var(--sg-surface)" }}>
        <TemplateHeader />

        <div className="px-6 lg:px-10 py-6" style={{ backgroundColor: "var(--sg-surface)" }}>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 mb-6">
            <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Inicio</span>
            <ChevronRight size={12} style={{ color: "var(--sg-border)" }} />
            <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Collares</span>
            <ChevronRight size={12} style={{ color: "var(--sg-border)" }} />
            <span className="text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>Collar Luna Dorada</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Gallery */}
            <div>
              <div className="aspect-square rounded-lg overflow-hidden mb-3" style={{ backgroundColor: "var(--sg-bone)" }}>
                <ImageWithFallback src={images.necklace} alt="Collar Luna Dorada" className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[images.necklace, images.earrings, images.bracelet, images.ring].map((img, i) => (
                  <div key={i} className="aspect-square rounded overflow-hidden border-2" style={{ borderColor: i === 0 ? "var(--sg-gold)" : "transparent", backgroundColor: "var(--sg-bone)" }}>
                    <ImageWithFallback src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 500, color: "var(--sg-black)", lineHeight: 1.2 }}>
                Collar Luna Dorada
              </h1>
              <div className="flex items-center gap-1.5 mt-3">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} size={14} fill={s <= 4 ? "var(--sg-gold)" : "none"} strokeWidth={1.5} style={{ color: "var(--sg-gold)" }} />
                ))}
                <span className="text-sm ml-1" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>4.8 (128)</span>
              </div>
              <p className="mt-4" style={{ fontFamily: "var(--font-sans)", fontSize: "1.5rem", fontWeight: 600, color: "var(--sg-black)" }}>$680</p>
              <p className="mt-4 text-sm" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-secondary)", lineHeight: 1.7 }}>
                Collar artesanal en chapa de oro 22k con dije de luna creciente. Cadena de eslabones finos con cierre tipo langosta. Ideal para uso diario y ocasiones especiales.
              </p>
              <div className="flex gap-2 mt-4">
                {["Chapa de Oro 22k", "Hecho a mano"].map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full" style={{ fontFamily: "var(--font-sans)", backgroundColor: "var(--sg-beige)", color: "var(--sg-text-secondary)" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-6">
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
              <div className="mt-6 pt-6 space-y-3 border-t" style={{ borderColor: "var(--sg-border-light)" }}>
                {[
                  { icon: <Truck size={16} strokeWidth={1.5} />, text: "Envío gratis en pedidos +$999" },
                  { icon: <RotateCcw size={16} strokeWidth={1.5} />, text: "30 días de devolución" },
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

          {/* Reviews Section */}
          <div className="mt-12 mb-6 pt-8 border-t" style={{ borderColor: "var(--sg-border-light)" }}>
            <h2 className="mb-6" style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 500, color: "var(--sg-black)" }}>Reseñas de clientas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Claudia L.", text: "El collar es precioso, la chapa se siente real y el cierre es muy seguro.", stars: 5, date: "hace 2 semanas" },
                { name: "Andrea M.", text: "Lo compré como regalo y el empaque es hermoso. Mi mamá quedó encantada.", stars: 5, date: "hace 1 mes" },
              ].map(r => (
                <div key={r.name} className="p-5 rounded-lg border" style={{ borderColor: "var(--sg-border-light)", backgroundColor: "var(--sg-white)" }}>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <Star key={i} size={12} fill="var(--sg-gold)" strokeWidth={1.5} style={{ color: "var(--sg-gold)" }} />
                    ))}
                  </div>
                  <p className="text-sm mb-2" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text)", lineHeight: 1.6 }}>"{r.text}"</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-text)" }}>{r.name}</span>
                    <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>· {r.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <TemplateFooter />
      </div>
    </Section>
  );
}

/* ─── CART TEMPLATE ─── */
function CartTemplate({ images }: { images: Record<string, string> }) {
  return (
    <Section id="cart-template" title="Cart Template" subtitle="Carrito como drawer lateral y como página completa.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Drawer */}
        <div>
          <p className="text-xs mb-4" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-text-muted)" }}>Cart Drawer</p>
          <div className="max-w-sm border border-[var(--sg-border)] rounded-lg overflow-hidden" style={{ backgroundColor: "var(--sg-white)" }}>
            <div className="px-6 py-4 flex items-center justify-between border-b" style={{ borderColor: "var(--sg-border-light)" }}>
              <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", fontWeight: 600, color: "var(--sg-black)" }}>Tu Carrito (2)</h4>
              <X size={18} style={{ color: "var(--sg-text-muted)" }} />
            </div>
            <div className="p-5 space-y-4">
              {[
                { name: "Collar Luna Dorada", price: "$680", img: images.necklace },
                { name: "Pulsera Sol", price: "$520", img: images.bracelet },
              ].map(item => (
                <div key={item.name} className="flex gap-3">
                  <div className="w-16 h-16 rounded shrink-0 overflow-hidden" style={{ backgroundColor: "var(--sg-bone)" }}>
                    <ImageWithFallback src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>{item.name}</p>
                    <p className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-black)" }}>{item.price}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center border rounded" style={{ borderColor: "var(--sg-border)" }}>
                        <button className="w-6 h-6 flex items-center justify-center"><Minus size={10} /></button>
                        <span className="w-6 h-6 flex items-center justify-center text-xs border-x" style={{ fontFamily: "var(--font-sans)", borderColor: "var(--sg-border)" }}>1</span>
                        <button className="w-6 h-6 flex items-center justify-center"><Plus size={10} /></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 py-4 border-t" style={{ borderColor: "var(--sg-border-light)", backgroundColor: "var(--sg-bone)" }}>
              <div className="flex justify-between mb-2 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                <span style={{ color: "var(--sg-text-secondary)" }}>Subtotal</span>
                <span style={{ fontWeight: 600, color: "var(--sg-black)" }}>$1,200</span>
              </div>
              <p className="text-xs mb-3" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Envío calculado al checkout</p>
              <button className="w-full py-3 text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
                FINALIZAR COMPRA
              </button>
              <button className="w-full py-2 mt-2 text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text-muted)" }}>
                Seguir comprando
              </button>
            </div>
          </div>
        </div>

        {/* Cart Page */}
        <div>
          <p className="text-xs mb-4" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sg-text-muted)" }}>Cart Page (Summary)</p>
          <div className="max-w-sm border border-[var(--sg-border)] rounded-lg overflow-hidden" style={{ backgroundColor: "var(--sg-white)" }}>
            <div className="px-5 py-4 border-b" style={{ borderColor: "var(--sg-border-light)" }}>
              <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: "var(--sg-black)" }}>Resumen del Pedido</h4>
            </div>
            <div className="p-5 space-y-3" style={{ backgroundColor: "var(--sg-bone)" }}>
              <div className="flex justify-between text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                <span style={{ color: "var(--sg-text-secondary)" }}>Subtotal (2 artículos)</span>
                <span style={{ fontWeight: 500, color: "var(--sg-text)" }}>$1,200</span>
              </div>
              <div className="flex justify-between text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                <span style={{ color: "var(--sg-text-secondary)" }}>Envío estándar</span>
                <span style={{ fontWeight: 500, color: "var(--sg-success)" }}>Gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="text" placeholder="Código de descuento" className="flex-1 px-3 py-2 text-xs rounded border outline-none" style={{ fontFamily: "var(--font-sans)", borderColor: "var(--sg-border)", backgroundColor: "var(--sg-white)" }} readOnly />
                <button className="px-3 py-2 text-xs border rounded" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, borderColor: "var(--sg-border)", color: "var(--sg-text)" }}>Aplicar</button>
              </div>
              <div className="flex justify-between pt-3 border-t" style={{ fontFamily: "var(--font-sans)", borderColor: "var(--sg-border-light)" }}>
                <span style={{ fontWeight: 600, color: "var(--sg-black)" }}>Total</span>
                <span style={{ fontSize: "1.125rem", fontWeight: 600, color: "var(--sg-black)" }}>$1,200</span>
              </div>
              <button className="w-full py-3 text-sm mt-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
                PROCEDER AL CHECKOUT
              </button>
              <div className="flex items-center justify-center gap-1.5 mt-2">
                <Shield size={12} style={{ color: "var(--sg-text-muted)" }} />
                <span className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Pago 100% seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── CHECKOUT TEMPLATE ─── */
function CheckoutTemplate() {
  return (
    <Section id="checkout-template" title="Checkout Template" subtitle="Checkout por pasos: dirección, envío y pago. Sin fricción, con validación clara.">
      <div className="border border-[var(--sg-border)] rounded-lg overflow-hidden" style={{ backgroundColor: "var(--sg-surface)" }}>
        {/* Simple Checkout Header */}
        <div className="px-6 lg:px-10 py-4 flex items-center justify-between border-b" style={{ borderColor: "var(--sg-border-light)", backgroundColor: "var(--sg-white)" }}>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 500, color: "var(--sg-black)" }}>Soul&Gold</span>
          <span className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text-muted)" }}>Checkout seguro</span>
          <Shield size={18} style={{ color: "var(--sg-gold)" }} />
        </div>

        <div className="px-6 lg:px-10 py-8">
          {/* Steps */}
          <div className="flex items-center gap-0 mb-10 max-w-lg mx-auto">
            {[
              { num: 1, label: "Datos", done: true },
              { num: 2, label: "Envío", active: true },
              { num: 3, label: "Pago" },
            ].map((step, i) => (
              <div key={step.num} className="contents">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, backgroundColor: step.done ? "var(--sg-gold)" : step.active ? "var(--sg-black)" : "var(--sg-sand)", color: step.done || step.active ? "var(--sg-white)" : "var(--sg-text-muted)" }}>
                    {step.done ? <Check size={14} /> : step.num}
                  </div>
                  <span className="text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: step.active ? 600 : 400, color: step.active ? "var(--sg-text)" : "var(--sg-text-muted)" }}>{step.label}</span>
                </div>
                {i < 2 && <div className="flex-1 h-px mx-4 mb-5" style={{ backgroundColor: step.done ? "var(--sg-gold)" : "var(--sg-border)" }} />}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Completed Step */}
              <div className="p-5 rounded-lg border" style={{ borderColor: "var(--sg-border)", backgroundColor: "var(--sg-white)" }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Check size={16} style={{ color: "var(--sg-gold)" }} />
                    <span className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-text)" }}>Datos personales</span>
                  </div>
                  <button className="text-xs underline" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-gold-dark)" }}>Editar</button>
                </div>
                <p className="text-sm" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-secondary)" }}>María López · maria@email.com · +52 55 1234 5678</p>
                <p className="text-sm" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-secondary)" }}>Av. Presidente Masaryk 123, Polanco, CDMX 11560</p>
              </div>

              {/* Active Step */}
              <div className="p-5 rounded-lg border-2" style={{ borderColor: "var(--sg-gold)", backgroundColor: "var(--sg-white)" }}>
                <h4 className="mb-4" style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", fontWeight: 600, color: "var(--sg-black)" }}>Método de envío</h4>
                <div className="space-y-3">
                  {[
                    { label: "Envío estándar", desc: "3–5 días hábiles", price: "Gratis", selected: true },
                    { label: "Envío express", desc: "1–2 días hábiles", price: "$99" },
                  ].map(opt => (
                    <label key={opt.label} className="flex items-center gap-3 p-4 rounded border cursor-pointer" style={{ borderColor: opt.selected ? "var(--sg-gold)" : "var(--sg-border)", backgroundColor: opt.selected ? "var(--sg-gold-light)" : "transparent", opacity: opt.selected ? 1 : 0.35 }}>
                      <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center" style={{ borderColor: opt.selected ? "var(--sg-gold)" : "var(--sg-border)" }}>
                        {opt.selected && <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--sg-gold)" }} />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>{opt.label}</p>
                        <p className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>{opt.desc}</p>
                      </div>
                      <span className="text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: opt.price === "Gratis" ? "var(--sg-success)" : "var(--sg-text)" }}>{opt.price}</span>
                    </label>
                  ))}
                </div>
                <button className="w-full mt-5 py-3 text-sm" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.06em", backgroundColor: "var(--sg-black)", color: "var(--sg-white)", borderRadius: "2px" }}>
                  CONTINUAR AL PAGO
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="p-5 rounded-lg border h-fit" style={{ borderColor: "var(--sg-border)", backgroundColor: "var(--sg-white)" }}>
              <h4 className="mb-4" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: "var(--sg-black)" }}>Tu Pedido</h4>
              <div className="space-y-3 mb-4">
                {[
                  { name: "Collar Luna Dorada", qty: 1, price: "$680" },
                  { name: "Pulsera Sol", qty: 1, price: "$520" },
                ].map(item => (
                  <div key={item.name} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded shrink-0" style={{ backgroundColor: "var(--sg-beige)" }} />
                    <div className="flex-1">
                      <p className="text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "var(--sg-text)" }}>{item.name}</p>
                      <p className="text-xs" style={{ fontFamily: "var(--font-sans)", color: "var(--sg-text-muted)" }}>Cant: {item.qty}</p>
                    </div>
                    <p className="text-xs" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--sg-black)" }}>{item.price}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2 pt-4 border-t" style={{ borderColor: "var(--sg-border-light)" }}>
                <div className="flex justify-between text-xs" style={{ fontFamily: "var(--font-sans)" }}>
                  <span style={{ color: "var(--sg-text-secondary)" }}>Subtotal</span>
                  <span style={{ fontWeight: 500, color: "var(--sg-text)" }}>$1,200</span>
                </div>
                <div className="flex justify-between text-xs" style={{ fontFamily: "var(--font-sans)" }}>
                  <span style={{ color: "var(--sg-text-secondary)" }}>Envío</span>
                  <span style={{ fontWeight: 500, color: "var(--sg-success)" }}>Gratis</span>
                </div>
                <div className="flex justify-between pt-3 border-t" style={{ fontFamily: "var(--font-sans)", borderColor: "var(--sg-border-light)" }}>
                  <span className="text-sm" style={{ fontWeight: 600, color: "var(--sg-black)" }}>Total</span>
                  <span className="text-sm" style={{ fontWeight: 600, color: "var(--sg-black)" }}>$1,200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── Main Templates Export ─── */
export function DSTemplates({ images }: { images: Record<string, string> }) {
  return (
    <div>
      <HomeTemplate images={images} />
      <PLPTemplate images={images} />
      <PDPTemplate images={images} />
      <CartTemplate images={images} />
      <CheckoutTemplate />
    </div>
  );
}