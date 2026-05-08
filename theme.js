/* ═══════════════════════════════════════════════════════════════
   PRISM · Theme Fusion Lab
   Vanilla JS · Closure-based factory functions · No libraries
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────────────────────────
   THEME CATALOG
   ──────────────────────────────────────────────────────────── */

const THEMES = [
    /* ── Editorial & Publication ── */
    { id:'magazine', name:'Magazine Editorial', group:'Editorial', tag:'serif',
      tokens:{ bg:'#f7f3ec', surface:'#ffffff', text:'#171411', textDim:'#5e554b',
              accent:'#8b1a1a', accent2:'#c89b3c', font:"'Fraunces', Georgia, serif",
              fontBody:"'Fraunces', Georgia, serif", radius:4, letterH:'-0.02em',
              letterB:'0', uppercase:'none', italic:'normal',
              shadow:'0 2px 8px rgba(0,0,0,0.06)' },
      swatch:['#f7f3ec','#8b1a1a'] },

    { id:'newspaper', name:'Newspaper / Broadsheet', group:'Editorial', tag:'serif',
      tokens:{ bg:'#fdf8ee', surface:'#fff', text:'#0a0a0a', textDim:'#3a3a3a',
              accent:'#1a1a1a', accent2:'#7a3017', font:"'Fraunces', serif",
              fontBody:"Georgia, serif", radius:0, letterH:'-0.01em', letterB:'0',
              uppercase:'none', italic:'normal',
              shadow:'0 1px 0 #1a1a1a' },
      swatch:['#fdf8ee','#1a1a1a'] },

    { id:'longform', name:'Long-form Reading', group:'Editorial', tag:'medium',
      tokens:{ bg:'#fafaf7', surface:'#fff', text:'#222', textDim:'#777',
              accent:'#1a8917', accent2:'#0e6912', font:"'Fraunces', Georgia, serif",
              fontBody:"Georgia, serif", radius:6, letterH:'-0.02em', letterB:'0',
              uppercase:'none', italic:'normal',
              shadow:'0 1px 3px rgba(0,0,0,0.04)' },
      swatch:['#fafaf7','#1a8917'] },

    /* ── Minimalist Family ── */
    { id:'swiss', name:'Swiss / Typographic', group:'Minimalist', tag:'grid',
      tokens:{ bg:'#ffffff', surface:'#f5f5f5', text:'#000', textDim:'#666',
              accent:'#dc2626', accent2:'#000', font:"'Space Grotesk', sans-serif",
              fontBody:"'Space Grotesk', sans-serif", radius:0, letterH:'-0.04em',
              letterB:'0', uppercase:'none', italic:'normal',
              shadow:'none' },
      swatch:['#ffffff','#dc2626'] },

    { id:'editorialmin', name:'Editorial Minimalism', group:'Minimalist', tag:'serif',
      tokens:{ bg:'#fafaf7', surface:'#fff', text:'#0a0a0a', textDim:'#888',
              accent:'#0a0a0a', accent2:'#666', font:"'Fraunces', serif",
              fontBody:"'Space Grotesk', sans-serif", radius:0, letterH:'-0.05em',
              letterB:'0', uppercase:'none', italic:'normal',
              shadow:'none' },
      swatch:['#fafaf7','#0a0a0a'] },

    { id:'muji', name:'Japanese / Muji', group:'Minimalist', tag:'whitespace',
      tokens:{ bg:'#f8f6f1', surface:'#fff', text:'#3a3a3a', textDim:'#a8a8a3',
              accent:'#5a5a55', accent2:'#8a8a82', font:"'Space Grotesk', sans-serif",
              fontBody:"'Space Grotesk', sans-serif", radius:2, letterH:'-0.01em',
              letterB:'0.02em', uppercase:'none', italic:'normal',
              shadow:'none' },
      swatch:['#f8f6f1','#5a5a55'] },

    /* ── Bold & Loud ── */
    { id:'brutal', name:'Neo-Brutalism', group:'Bold', tag:'hard',
      tokens:{ bg:'#fef200', surface:'#ffffff', text:'#000', textDim:'#222',
              accent:'#ff3366', accent2:'#000', font:"'Space Grotesk', sans-serif",
              fontBody:"'Space Grotesk', sans-serif", radius:0, letterH:'-0.05em',
              letterB:'0.04em', uppercase:'uppercase', italic:'normal',
              shadow:'8px 8px 0 0 #000' },
      swatch:['#fef200','#ff3366'] },

    { id:'maximal', name:'Maximalist', group:'Bold', tag:'dense',
      tokens:{ bg:'#1a0033', surface:'#330066', text:'#ffeb3b', textDim:'#ffb3d9',
              accent:'#ff00aa', accent2:'#00ffaa', font:"'Fraunces', serif",
              fontBody:"'Space Grotesk', sans-serif", radius:20, letterH:'-0.02em',
              letterB:'0', uppercase:'none', italic:'italic',
              shadow:'0 0 40px rgba(255,0,170,0.4), 0 0 80px rgba(0,255,170,0.3)' },
      swatch:['#ff00aa','#ffeb3b'] },

    { id:'memphis', name:'Memphis / 80s', group:'Bold', tag:'pastel',
      tokens:{ bg:'#fde9c4', surface:'#fff', text:'#1a1a3a', textDim:'#5a5a8a',
              accent:'#ff5fa8', accent2:'#00b4d8', font:"'Space Grotesk', sans-serif",
              fontBody:"'Space Grotesk', sans-serif", radius:24, letterH:'-0.02em',
              letterB:'0', uppercase:'none', italic:'normal',
              shadow:'6px 6px 0 #ff5fa8' },
      swatch:['#fde9c4','#ff5fa8'] },

    { id:'y2k', name:'Y2K', group:'Bold', tag:'chrome',
      tokens:{ bg:'#c4d7e6', surface:'#e7f0f7', text:'#1a3a5a', textDim:'#557a9a',
              accent:'#0099ff', accent2:'#aabbcc', font:"'Space Grotesk', sans-serif",
              fontBody:"'Space Grotesk', sans-serif", radius:24, letterH:'-0.03em',
              letterB:'0', uppercase:'none', italic:'normal',
              shadow:'inset 0 2px 8px rgba(255,255,255,0.6), 0 8px 24px rgba(0,153,255,0.3)' },
      swatch:['#c4d7e6','#0099ff'] },

    { id:'vapor', name:'Vaporwave', group:'Bold', tag:'retro',
      tokens:{ bg:'#1a0033', surface:'#2a0055', text:'#ff6ec7', textDim:'#a06fc7',
              accent:'#00ffe5', accent2:'#ff6ec7', font:"'Fraunces', serif",
              fontBody:"'Space Grotesk', sans-serif", radius:8, letterH:'-0.02em',
              letterB:'0.05em', uppercase:'uppercase', italic:'italic',
              shadow:'0 0 20px #ff6ec7, 0 0 40px #00ffe5' },
      swatch:['#1a0033','#00ffe5'] },

    /* ── Glass & Atmospheric ── */
    { id:'glass', name:'Glassmorphic', group:'Atmospheric', tag:'frosted',
      tokens:{ bg:'#0a0e1f', surface:'rgba(255,255,255,0.08)', text:'#f1f5ff',
              textDim:'rgba(241,245,255,0.6)', accent:'#a5f3fc', accent2:'#f0abfc',
              font:"'Fraunces', serif", fontBody:"'Space Grotesk', sans-serif",
              radius:24, letterH:'-0.02em', letterB:'0', uppercase:'none',
              italic:'normal',
              shadow:'0 8px 32px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.08)' },
      swatch:['#a5f3fc','#f0abfc'] },

    { id:'neumorph', name:'Neumorphic', group:'Atmospheric', tag:'soft',
      tokens:{ bg:'#e0e5ec', surface:'#e0e5ec', text:'#3d4754', textDim:'#7a8597',
              accent:'#5b8def', accent2:'#a4b3c9', font:"'Space Grotesk', sans-serif",
              fontBody:"'Space Grotesk', sans-serif", radius:18, letterH:'-0.02em',
              letterB:'0', uppercase:'none', italic:'normal',
              shadow:'9px 9px 18px #b8bcc2, -9px -9px 18px #ffffff' },
      swatch:['#e0e5ec','#5b8def'] },

    { id:'clay', name:'Claymorphic', group:'Atmospheric', tag:'rounded',
      tokens:{ bg:'#fde6e8', surface:'#ffffff', text:'#5a3a3a', textDim:'#aa7a7a',
              accent:'#ff9eb1', accent2:'#a5d4ff', font:"'Fraunces', serif",
              fontBody:"'Space Grotesk', sans-serif", radius:32, letterH:'-0.02em',
              letterB:'0', uppercase:'none', italic:'normal',
              shadow:'0 12px 32px rgba(255,158,177,0.4), inset 0 -6px 0 rgba(0,0,0,0.05)' },
      swatch:['#fde6e8','#ff9eb1'] },

    { id:'aurora', name:'Aurora / Liquid Mesh', group:'Atmospheric', tag:'gradient',
      tokens:{ bg:'#0f0a1f', surface:'#1f1a3a', text:'#f0e8ff', textDim:'#a89dc4',
              accent:'#7dd3fc', accent2:'#fb7185', font:"'Fraunces', serif",
              fontBody:"'Space Grotesk', sans-serif", radius:20, letterH:'-0.02em',
              letterB:'0', uppercase:'none', italic:'normal',
              shadow:'0 20px 60px rgba(125,211,252,0.3)' },
      swatch:['#7dd3fc','#fb7185'] },

    /* ── Tech & Developer ── */
    { id:'darktech', name:'Dark Technical', group:'Tech', tag:'dev',
      tokens:{ bg:'#0a0a0f', surface:'#13131a', text:'#e4e4e7', textDim:'#71717a',
              accent:'#22d3ee', accent2:'#a78bfa', font:"'Space Grotesk', sans-serif",
              fontBody:"'Space Grotesk', sans-serif", radius:8, letterH:'-0.02em',
              letterB:'0', uppercase:'none', italic:'normal',
              shadow:'0 0 0 1px rgba(34,211,238,0.1), 0 4px 24px rgba(0,0,0,0.5)' },
      swatch:['#0a0a0f','#22d3ee'] },

    { id:'terminal', name:'Terminal / Hacker', group:'Tech', tag:'mono',
      tokens:{ bg:'#000000', surface:'#0a0a0a', text:'#00ff41', textDim:'#008f23',
              accent:'#00ff41', accent2:'#33ff66', font:"'JetBrains Mono', monospace",
              fontBody:"'JetBrains Mono', monospace", radius:0, letterH:'0',
              letterB:'0.05em', uppercase:'none', italic:'normal',
              shadow:'0 0 12px rgba(0,255,65,0.4)' },
      swatch:['#000000','#00ff41'] },

    { id:'dashboard', name:'Dashboard / Admin', group:'Tech', tag:'data',
      tokens:{ bg:'#f8fafc', surface:'#ffffff', text:'#0f172a', textDim:'#64748b',
              accent:'#3b82f6', accent2:'#8b5cf6', font:"'Space Grotesk', sans-serif",
              fontBody:"'Space Grotesk', sans-serif", radius:8, letterH:'-0.02em',
              letterB:'0', uppercase:'none', italic:'normal',
              shadow:'0 1px 3px rgba(15,23,42,0.06), 0 4px 12px rgba(15,23,42,0.04)' },
      swatch:['#f8fafc','#3b82f6'] },

    { id:'docsite', name:'Documentation Site', group:'Tech', tag:'docs',
      tokens:{ bg:'#ffffff', surface:'#f6f8fa', text:'#1f2328', textDim:'#656d76',
              accent:'#0969da', accent2:'#1a7f37', font:"'Space Grotesk', sans-serif",
              fontBody:"'Space Grotesk', sans-serif", radius:6, letterH:'-0.02em',
              letterB:'0', uppercase:'none', italic:'normal',
              shadow:'0 1px 0 rgba(31,35,40,0.04)' },
      swatch:['#ffffff','#0969da'] },

    /* ── Marketing & Landing ── */
    { id:'saas', name:'SaaS Landing', group:'Marketing', tag:'gradient',
      tokens:{ bg:'#fafaff', surface:'#ffffff', text:'#0f0a1f', textDim:'#6b6b7d',
              accent:'#7c3aed', accent2:'#06b6d4', font:"'Space Grotesk', sans-serif",
              fontBody:"'Space Grotesk', sans-serif", radius:12, letterH:'-0.03em',
              letterB:'0', uppercase:'none', italic:'normal',
              shadow:'0 10px 40px rgba(124,58,237,0.15)' },
      swatch:['#7c3aed','#06b6d4'] },

    { id:'apple', name:'Apple Product Page', group:'Marketing', tag:'pristine',
      tokens:{ bg:'#fbfbfd', surface:'#ffffff', text:'#1d1d1f', textDim:'#6e6e73',
              accent:'#0071e3', accent2:'#1d1d1f', font:"'Space Grotesk', sans-serif",
              fontBody:"'Space Grotesk', sans-serif", radius:18, letterH:'-0.04em',
              letterB:'0', uppercase:'none', italic:'normal',
              shadow:'0 8px 32px rgba(0,0,0,0.06)' },
      swatch:['#fbfbfd','#0071e3'] },

    /* ── Content & Story ── */
    { id:'cinematic', name:'Cinematic / Scrollytelling', group:'Story', tag:'film',
      tokens:{ bg:'#0a0a0a', surface:'#1a1a1a', text:'#fafafa', textDim:'#a0a0a0',
              accent:'#d4af37', accent2:'#ffffff', font:"'Fraunces', serif",
              fontBody:"'Space Grotesk', sans-serif", radius:0, letterH:'-0.04em',
              letterB:'0.05em', uppercase:'uppercase', italic:'normal',
              shadow:'0 20px 60px rgba(0,0,0,0.6)' },
      swatch:['#0a0a0a','#d4af37'] },

    { id:'portfolio', name:'Personal Portfolio', group:'Story', tag:'show',
      tokens:{ bg:'#111111', surface:'#1c1c1c', text:'#e8e8e8', textDim:'#888',
              accent:'#fde047', accent2:'#a3e635', font:"'Fraunces', serif",
              fontBody:"'Space Grotesk', sans-serif", radius:14, letterH:'-0.03em',
              letterB:'0', uppercase:'none', italic:'italic',
              shadow:'0 12px 40px rgba(0,0,0,0.4)' },
      swatch:['#111111','#fde047'] },

    /* ── E-commerce ── */
    { id:'luxe', name:'Luxury Product', group:'Commerce', tag:'gold',
      tokens:{ bg:'#0a0a0a', surface:'#1a1a1a', text:'#f5f0e8', textDim:'#a09a8e',
              accent:'#c9a878', accent2:'#8a6f4a', font:"'Fraunces', serif",
              fontBody:"'Fraunces', serif", radius:2, letterH:'-0.02em',
              letterB:'0.18em', uppercase:'uppercase', italic:'normal',
              shadow:'0 16px 48px rgba(201,168,120,0.2)' },
      swatch:['#0a0a0a','#c9a878'] },

    { id:'dtc', name:'DTC Brand', group:'Commerce', tag:'voice',
      tokens:{ bg:'#fff8f0', surface:'#fff', text:'#2a1f15', textDim:'#7a6f60',
              accent:'#e8794a', accent2:'#5a8a4a', font:"'Fraunces', serif",
              fontBody:"'Space Grotesk', sans-serif", radius:14, letterH:'-0.02em',
              letterB:'0', uppercase:'none', italic:'normal',
              shadow:'0 6px 24px rgba(232,121,74,0.15)' },
      swatch:['#fff8f0','#e8794a'] },

    /* ── Lifestyle & Niche ── */
    { id:'wellness', name:'Wellness / Calm', group:'Lifestyle', tag:'pastel',
      tokens:{ bg:'#f5f0e8', surface:'#fff', text:'#3a4a3f', textDim:'#88958c',
              accent:'#a8c7a8', accent2:'#d4a8a0', font:"'Fraunces', serif",
              fontBody:"'Space Grotesk', sans-serif", radius:24, letterH:'-0.02em',
              letterB:'0', uppercase:'none', italic:'normal',
              shadow:'0 4px 20px rgba(168,199,168,0.2)' },
      swatch:['#f5f0e8','#a8c7a8'] },

    { id:'botanical', name:'Botanical / Organic', group:'Lifestyle', tag:'earthy',
      tokens:{ bg:'#f4f1ea', surface:'#ffffff', text:'#2a3a25', textDim:'#7a8a70',
              accent:'#5a7a3a', accent2:'#a8946f', font:"'Fraunces', serif",
              fontBody:"'Fraunces', serif", radius:18, letterH:'-0.02em',
              letterB:'0', uppercase:'none', italic:'italic',
              shadow:'0 4px 16px rgba(90,122,58,0.15)' },
      swatch:['#f4f1ea','#5a7a3a'] },

    { id:'outdoor', name:'Outdoor / Adventure', group:'Lifestyle', tag:'rugged',
      tokens:{ bg:'#1f2a1f', surface:'#2a3a2a', text:'#e8e0d0', textDim:'#a8a090',
              accent:'#d4a04a', accent2:'#8a5a3a', font:"'Fraunces', serif",
              fontBody:"'Space Grotesk', sans-serif", radius:6, letterH:'-0.02em',
              letterB:'0.04em', uppercase:'uppercase', italic:'normal',
              shadow:'0 8px 32px rgba(0,0,0,0.4)' },
      swatch:['#1f2a1f','#d4a04a'] },

    /* ── Civic & Mission ── */
    { id:'civic', name:'Trust / Civic', group:'Civic', tag:'mission',
      tokens:{ bg:'#fefcf7', surface:'#ffffff', text:'#0f3a4a', textDim:'#557a8a',
              accent:'#0f5a8a', accent2:'#c89b3c', font:"'Fraunces', serif",
              fontBody:"'Space Grotesk', sans-serif", radius:6, letterH:'-0.02em',
              letterB:'0', uppercase:'none', italic:'normal',
              shadow:'0 2px 8px rgba(15,90,138,0.08)' },
      swatch:['#fefcf7','#0f5a8a'] },

    /* ── Playful & Indie ── */
    { id:'indie', name:'Hand-Drawn / Indie', group:'Playful', tag:'hand',
      tokens:{ bg:'#fef6e7', surface:'#fff', text:'#2a2a3a', textDim:'#6a6a7a',
              accent:'#ff5a5f', accent2:'#7d6cff', font:"'Fraunces', serif",
              fontBody:"'Space Grotesk', sans-serif", radius:18, letterH:'-0.02em',
              letterB:'0', uppercase:'none', italic:'italic',
              shadow:'-4px 4px 0 rgba(125,108,255,0.4)' },
      swatch:['#fef6e7','#ff5a5f'] },

    { id:'riso', name:'Risograph', group:'Playful', tag:'print',
      tokens:{ bg:'#f0e6d2', surface:'#fff', text:'#1a1a3a', textDim:'#5a5a7a',
              accent:'#ff5a5f', accent2:'#3d52d5', font:"'Space Grotesk', sans-serif",
              fontBody:"'Space Grotesk', sans-serif", radius:0, letterH:'-0.03em',
              letterB:'0', uppercase:'none', italic:'normal',
              shadow:'4px 4px 0 #3d52d5' },
      swatch:['#ff5a5f','#3d52d5'] },

    /* ── Vintage ── */
    { id:'vintage', name:'Vintage Typographic', group:'Vintage', tag:'serif',
      tokens:{ bg:'#f4ecd8', surface:'#fffaf0', text:'#3a2a1a', textDim:'#7a6a5a',
              accent:'#7a3017', accent2:'#c89b3c', font:"'Fraunces', serif",
              fontBody:"'Fraunces', serif", radius:2, letterH:'-0.01em',
              letterB:'0.04em', uppercase:'uppercase', italic:'normal',
              shadow:'0 2px 0 rgba(122,48,23,0.2)' },
      swatch:['#f4ecd8','#7a3017'] },

    { id:'midcentury', name:'Mid-Century Modern', group:'Vintage', tag:'geometric',
      tokens:{ bg:'#f4ede0', surface:'#fff', text:'#2a1f10', textDim:'#7a6a5a',
              accent:'#d97706', accent2:'#0d8970', font:"'Fraunces', serif",
              fontBody:"'Space Grotesk', sans-serif", radius:0, letterH:'-0.03em',
              letterB:'0.06em', uppercase:'uppercase', italic:'normal',
              shadow:'0 4px 0 rgba(217,119,6,0.3)' },
      swatch:['#f4ede0','#d97706'] },

    { id:'artdeco', name:'Art Deco', group:'Vintage', tag:'gold',
      tokens:{ bg:'#0a0a14', surface:'#14141f', text:'#f0e6c8', textDim:'#a89978',
              accent:'#d4af37', accent2:'#8a6a2a', font:"'Fraunces', serif",
              fontBody:"'Fraunces', serif", radius:0, letterH:'-0.02em',
              letterB:'0.2em', uppercase:'uppercase', italic:'normal',
              shadow:'0 0 0 1px #d4af37, 0 12px 40px rgba(212,175,55,0.2)' },
      swatch:['#0a0a14','#d4af37'] },

    /* ── Specialized ── */
    { id:'gameui', name:'Game UI / HUD', group:'Specialized', tag:'hud',
      tokens:{ bg:'#0a0e1a', surface:'#141a2a', text:'#fef200', textDim:'#aabbdd',
              accent:'#ff3366', accent2:'#22d3ee', font:"'JetBrains Mono', monospace",
              fontBody:"'Space Grotesk', sans-serif", radius:4, letterH:'-0.02em',
              letterB:'0.08em', uppercase:'uppercase', italic:'normal',
              shadow:'0 0 0 2px #ff3366, 0 0 24px rgba(255,51,102,0.4)' },
      swatch:['#0a0e1a','#ff3366'] },

    { id:'crypto', name:'Crypto / Web3', group:'Specialized', tag:'neon',
      tokens:{ bg:'#000814', surface:'#001d3d', text:'#a8ff60', textDim:'#7090a0',
              accent:'#a8ff60', accent2:'#ff00aa', font:"'JetBrains Mono', monospace",
              fontBody:"'Space Grotesk', sans-serif", radius:6, letterH:'-0.02em',
              letterB:'0.04em', uppercase:'uppercase', italic:'normal',
              shadow:'0 0 24px rgba(168,255,96,0.3)' },
      swatch:['#000814','#a8ff60'] },

    { id:'fintech', name:'Fintech Sober', group:'Specialized', tag:'grade',
      tokens:{ bg:'#08090f', surface:'#13141d', text:'#f0f4ff', textDim:'#7a8090',
              accent:'#5b8def', accent2:'#a78bfa', font:"'Space Grotesk', sans-serif",
              fontBody:"'Space Grotesk', sans-serif", radius:10, letterH:'-0.03em',
              letterB:'0', uppercase:'none', italic:'normal',
              shadow:'0 4px 24px rgba(91,141,239,0.15)' },
      swatch:['#08090f','#5b8def'] },
];


/* ─────────────────────────────────────────────────────────────
   COLOR UTILITIES
   ──────────────────────────────────────────────────────────── */

function parseColor(c) {
    c = c.trim();
    if (c.startsWith('#')) {
        const h = c.slice(1);
        if (h.length === 3) {
            return {
                r: parseInt(h[0]+h[0], 16),
                g: parseInt(h[1]+h[1], 16),
                b: parseInt(h[2]+h[2], 16),
                a: 1
            };
        }
        return {
            r: parseInt(h.slice(0,2), 16),
            g: parseInt(h.slice(2,4), 16),
            b: parseInt(h.slice(4,6), 16),
            a: 1
        };
    }
    const m = c.match(/rgba?\(([^)]+)\)/);
    if (m) {
        const parts = m[1].split(',').map(s => parseFloat(s.trim()));
        return { r: parts[0], g: parts[1], b: parts[2], a: parts[3] ?? 1 };
    }
    return { r: 0, g: 0, b: 0, a: 1 };
}

function toHex(n) {
    return Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0');
}

function rgbToHex(r, g, b) {
    return '#' + toHex(r) + toHex(g) + toHex(b);
}

function mixColor(a, b, t) {
    const ca = parseColor(a);
    const cb = parseColor(b);
    const r = ca.r + (cb.r - ca.r) * t;
    const g = ca.g + (cb.g - ca.g) * t;
    const bl = ca.b + (cb.b - ca.b) * t;
    const al = ca.a + (cb.a - ca.a) * t;
    if (al < 1) {
        return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(bl)}, ${al.toFixed(2)})`;
    }
    return rgbToHex(r, g, bl);
}

function mixNum(a, b, t) {
    return Math.round(a + (b - a) * t);
}

function pickToken(a, b, t) {
    return t < 0.5 ? a : b;
}


/* ─────────────────────────────────────────────────────────────
   FUSION ENGINE  (factory function with closure)
   ──────────────────────────────────────────────────────────── */

function createFusionEngine() {
    // private state lives in this closure
    let _themeA = THEMES.find(t => t.id === 'vapor');
    let _themeB = THEMES.find(t => t.id === 'gameui');
    let _ratio = 0.5;
    const _listeners = [];

    function _fuse() {
        const a = _themeA.tokens;
        const b = _themeB.tokens;
        const t = _ratio;

        return {
            bg:       mixColor(a.bg, b.bg, t),
            surface:  mixColor(a.surface, b.surface, t),
            text:     mixColor(a.text, b.text, t),
            textDim:  mixColor(a.textDim, b.textDim, t),
            accent:   mixColor(a.accent, b.accent, t),
            accent2:  mixColor(a.accent2, b.accent2, t),
            radius:   mixNum(a.radius, b.radius, t),
            font:     pickToken(a.font, b.font, t),
            fontBody: pickToken(a.fontBody, b.fontBody, t),
            letterH:  pickToken(a.letterH, b.letterH, t),
            letterB:  pickToken(a.letterB, b.letterB, t),
            uppercase: pickToken(a.uppercase, b.uppercase, t),
            italic:   pickToken(a.italic, b.italic, t),
            shadow:   pickToken(a.shadow, b.shadow, t),
            sourceA:  _themeA.name,
            sourceB:  _themeB.name,
            ratio:    Math.round(t * 100)
        };
    }

    function _emit() {
        const fused = _fuse();
        _listeners.forEach(fn => fn(fused));
    }

    return {
        setA(theme)   { _themeA = theme; _emit(); },
        setB(theme)   { _themeB = theme; _emit(); },
        setRatio(r)   { _ratio = Math.max(0, Math.min(1, r)); _emit(); },
        getA()        { return _themeA; },
        getB()        { return _themeB; },
        getRatio()    { return _ratio; },
        getFused()    { return _fuse(); },
        onChange(fn)  { _listeners.push(fn); fn(_fuse()); },
        randomize() {
            _themeA = THEMES[Math.floor(Math.random() * THEMES.length)];
            do {
                _themeB = THEMES[Math.floor(Math.random() * THEMES.length)];
            } while (_themeB.id === _themeA.id);
            _ratio = 0.3 + Math.random() * 0.4;
            _emit();
        }
    };
}


/* ─────────────────────────────────────────────────────────────
   DROPDOWN FACTORY  (closure-based component)
   ──────────────────────────────────────────────────────────── */

function createDropdown(config) {
    const { triggerEl, menuEl, currentEl, swatchEl, themes, onSelect, getValue } = config;

    let _isOpen = false;

    function _renderMenu() {
        const groups = {};
        themes.forEach(t => {
            if (!groups[t.group]) groups[t.group] = [];
            groups[t.group].push(t);
        });

        menuEl.innerHTML = '';

        let itemIndex = 0;
        Object.keys(groups).forEach(groupName => {
            const label = document.createElement('li');
            label.className = 'dropdown-group-label';
            label.textContent = groupName;
            menuEl.appendChild(label);

            groups[groupName].forEach(theme => {
                const item = document.createElement('li');
                item.className = 'dropdown-item';
                item.setAttribute('role', 'option');
                item.dataset.themeId = theme.id;
                item.style.setProperty('--swatch-a', theme.swatch[0]);
                item.style.setProperty('--swatch-b', theme.swatch[1]);
                item.style.animationDelay = (itemIndex * 18) + 'ms';

                const sw = document.createElement('span');
                sw.className = 'dropdown-item-swatch';
                sw.setAttribute('aria-hidden', 'true');

                const name = document.createElement('span');
                name.className = 'dropdown-item-name';
                name.textContent = theme.name;

                const tag = document.createElement('span');
                tag.className = 'dropdown-item-tag';
                tag.textContent = theme.tag;

                item.appendChild(sw);
                item.appendChild(name);
                item.appendChild(tag);

                if (getValue() && getValue().id === theme.id) {
                    item.classList.add('is-active');
                }

                item.addEventListener('click', () => {
                    onSelect(theme);
                    _close();
                });

                menuEl.appendChild(item);
                itemIndex++;
            });
        });
    }

    function _open() {
        _renderMenu();
        menuEl.classList.add('is-open');
        triggerEl.setAttribute('aria-expanded', 'true');
        _isOpen = true;
    }

    function _close() {
        menuEl.classList.remove('is-open');
        triggerEl.setAttribute('aria-expanded', 'false');
        _isOpen = false;
    }

    function _toggle() {
        _isOpen ? _close() : _open();
    }

    function _updateDisplay(theme) {
        currentEl.textContent = theme.name;
        swatchEl.style.background =
            `linear-gradient(135deg, ${theme.swatch[0]}, ${theme.swatch[1]})`;
    }

    triggerEl.addEventListener('click', e => {
        e.stopPropagation();
        _toggle();
    });

    document.addEventListener('click', e => {
        if (_isOpen && !menuEl.contains(e.target) && !triggerEl.contains(e.target)) {
            _close();
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && _isOpen) {
            _close();
            triggerEl.focus();
        }
    });

    return { open: _open, close: _close, updateDisplay: _updateDisplay };
}


/* ─────────────────────────────────────────────────────────────
   APPLY FUSED THEME
   ──────────────────────────────────────────────────────────── */

function applyFusedTheme(fused) {
    const ms = document.getElementById('miniSite');
    if (!ms) return;

    ms.style.setProperty('--ms-bg',       fused.bg);
    ms.style.setProperty('--ms-surface',  fused.surface);
    ms.style.setProperty('--ms-text',     fused.text);
    ms.style.setProperty('--ms-text-dim', fused.textDim);
    ms.style.setProperty('--ms-accent',   fused.accent);
    ms.style.setProperty('--ms-accent-2', fused.accent2);
    ms.style.setProperty('--ms-radius',   fused.radius + 'px');
    ms.style.setProperty('--ms-font',     fused.font);
    ms.style.setProperty('--ms-font-body',fused.fontBody);
    ms.style.setProperty('--ms-letter-h', fused.letterH);
    ms.style.setProperty('--ms-letter-b', fused.letterB);
    ms.style.setProperty('--ms-uppercase',fused.uppercase);
    ms.style.setProperty('--ms-italic',   fused.italic);
    ms.style.setProperty('--ms-shadow',   fused.shadow);

    const borderC = mixColor(fused.text, fused.bg, 0.85);
    ms.style.setProperty('--ms-border',   borderC);
}


/* ─────────────────────────────────────────────────────────────
   TOKEN STRIP
   ──────────────────────────────────────────────────────────── */

function updateTokenStrip(fused) {
    const blocks = [
        ['tsBg',      'tsBgVal',      fused.bg],
        ['tsSurface', 'tsSurfaceVal', fused.surface],
        ['tsAccent',  'tsAccentVal',  fused.accent],
        ['tsText',    'tsTextVal',    fused.text],
    ];
    blocks.forEach(([blockId, valId, color]) => {
        const block = document.getElementById(blockId);
        const val = document.getElementById(valId);
        if (block) block.style.setProperty('--ts-color', color);
        if (val) val.textContent = color;
    });

    const fontEl = document.getElementById('tsFontVal');
    if (fontEl) {
        const fontName = fused.font.split(',')[0].replace(/['"]/g, '').trim();
        fontEl.textContent = fontName;
    }
}


/* ─────────────────────────────────────────────────────────────
   CODE PANEL
   ──────────────────────────────────────────────────────────── */

let _activeTab = 'tokens';

function renderCSS(fused) {
    const lines = [
        ['comment', `/* fusion: ${fused.sourceA} × ${fused.sourceB} · ${100-fused.ratio}/${fused.ratio} */`],
        ['plain',   `:root {`],
        ['decl',    `  --bg`,       fused.bg],
        ['decl',    `  --surface`,  fused.surface],
        ['decl',    `  --text`,     fused.text],
        ['decl',    `  --text-dim`, fused.textDim],
        ['decl',    `  --accent`,   fused.accent],
        ['decl',    `  --accent-2`, fused.accent2],
        ['decl',    `  --radius`,   fused.radius + 'px'],
        ['decl',    `  --font`,     fused.font],
        ['decl',    `  --font-body`,fused.fontBody],
        ['decl',    `  --letter-h`, fused.letterH],
        ['decl',    `  --letter-b`, fused.letterB],
        ['decl',    `  --uppercase`,fused.uppercase],
        ['decl',    `  --italic`,   fused.italic],
        ['decl',    `  --shadow`,   fused.shadow],
        ['plain',   `}`],
    ];

    return lines.map(line => {
        if (line[0] === 'comment') {
            return `<span class="tk-comment">${escapeHtml(line[1])}</span>`;
        }
        if (line[0] === 'decl') {
            return `<span class="tk-prop">${escapeHtml(line[1])}</span>: <span class="tk-val">${escapeHtml(line[2])}</span>;`;
        }
        return escapeHtml(line[1]);
    }).join('\n');
}

function renderJSON(fused) {
    const obj = {
        meta: {
            sourceA: fused.sourceA,
            sourceB: fused.sourceB,
            ratio:   `${100 - fused.ratio}/${fused.ratio}`,
            generated: new Date().toISOString()
        },
        tokens: {
            bg: fused.bg,
            surface: fused.surface,
            text: fused.text,
            textDim: fused.textDim,
            accent: fused.accent,
            accent2: fused.accent2,
            radius: fused.radius,
            font: fused.font,
            fontBody: fused.fontBody,
            letterH: fused.letterH,
            letterB: fused.letterB,
            uppercase: fused.uppercase,
            italic: fused.italic,
            shadow: fused.shadow
        }
    };
    const json = JSON.stringify(obj, null, 2);
    return escapeHtml(json)
        .replace(/("(?:[^"\\]|\\.)*")(\s*:)/g, '<span class="tk-key">$1</span>$2')
        .replace(/:\s*("(?:[^"\\]|\\.)*")/g,    ': <span class="tk-str">$1</span>')
        .replace(/:\s*(-?\d+(?:\.\d+)?)/g,      ': <span class="tk-num">$1</span>');
}

function escapeHtml(s) {
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function updateCodePanel(fused) {
    const out = document.getElementById('codeOut');
    if (!out) return;
    out.innerHTML = _activeTab === 'tokens' ? renderCSS(fused) : renderJSON(fused);
}


/* ─────────────────────────────────────────────────────────────
   PLAIN-TEXT CSS (clipboard)
   ──────────────────────────────────────────────────────────── */

function buildPlainCSS(fused) {
    return `/* Prism fusion — ${fused.sourceA} × ${fused.sourceB} · ${100-fused.ratio}/${fused.ratio} */
:root {
  --bg:        ${fused.bg};
  --surface:   ${fused.surface};
  --text:      ${fused.text};
  --text-dim:  ${fused.textDim};
  --accent:    ${fused.accent};
  --accent-2:  ${fused.accent2};
  --radius:    ${fused.radius}px;
  --font:      ${fused.font};
  --font-body: ${fused.fontBody};
  --letter-h:  ${fused.letterH};
  --letter-b:  ${fused.letterB};
  --uppercase: ${fused.uppercase};
  --italic:    ${fused.italic};
  --shadow:    ${fused.shadow};
}
`;
}


/* ─────────────────────────────────────────────────────────────
   INIT
   ──────────────────────────────────────────────────────────── */

function init() {
    const engine = createFusionEngine();

    const dropA = createDropdown({
        triggerEl: document.getElementById('triggerA'),
        menuEl:    document.getElementById('menuA'),
        currentEl: document.getElementById('currentA'),
        swatchEl:  document.getElementById('swatchA'),
        themes:    THEMES,
        onSelect:  (theme) => engine.setA(theme),
        getValue:  () => engine.getA()
    });

    const dropB = createDropdown({
        triggerEl: document.getElementById('triggerB'),
        menuEl:    document.getElementById('menuB'),
        currentEl: document.getElementById('currentB'),
        swatchEl:  document.getElementById('swatchB'),
        themes:    THEMES,
        onSelect:  (theme) => engine.setB(theme),
        getValue:  () => engine.getB()
    });

    dropA.updateDisplay(engine.getA());
    dropB.updateDisplay(engine.getB());

    const ratioInput = document.getElementById('ratio');
    const ratioOut = document.getElementById('ratioOut');
    ratioInput.addEventListener('input', () => {
        const v = parseInt(ratioInput.value, 10);
        engine.setRatio(v / 100);
        ratioOut.textContent = `${100 - v} / ${v}`;
    });

    const brandInput = document.getElementById('brandName');
    const msTitle = document.getElementById('msTitle');
    const msLogo = document.getElementById('msLogo');
    const msFooter = document.getElementById('msFooter');

    function updateBrand() {
        const raw = brandInput.value.trim() || 'RETROGRADE';
        msTitle.textContent = raw;
        msLogo.textContent = raw.charAt(0).toUpperCase() || 'R';
        msFooter.textContent = `© ${raw} · Built with Prism`;
        const url = document.getElementById('previewUrl');
        if (url) {
            url.textContent = `prism://${raw.toLowerCase().replace(/\s+/g, '-')}/${engine.getA().id}+${engine.getB().id}`;
        }
    }
    brandInput.addEventListener('input', updateBrand);

    engine.onChange((fused) => {
        applyFusedTheme(fused);
        updateTokenStrip(fused);
        updateCodePanel(fused);
        dropA.updateDisplay(engine.getA());
        dropB.updateDisplay(engine.getB());
        const url = document.getElementById('previewUrl');
        if (url) {
            const brand = (brandInput.value.trim() || 'retrograde').toLowerCase().replace(/\s+/g, '-');
            url.textContent = `prism://${brand}/${engine.getA().id}+${engine.getB().id}`;
        }
    });

    updateBrand();

    const fuseBtn = document.getElementById('fuseBtn');
    fuseBtn.addEventListener('click', () => {
        const ms = document.getElementById('miniSite');
        if (ms) {
            ms.style.animation = 'none';
            void ms.offsetWidth;
            ms.style.animation = 'fuseShake 0.6s var(--ease-spring)';
            setTimeout(() => { ms.style.animation = ''; }, 700);
        }
        engine.setRatio(engine.getRatio());
    });

    const randomBtn = document.getElementById('randomBtn');
    randomBtn.addEventListener('click', () => {
        engine.randomize();
        const r = Math.round(engine.getRatio() * 100);
        ratioInput.value = r;
        ratioOut.textContent = `${100 - r} / ${r}`;
    });

    const copyBtn = document.getElementById('copyBtn');
    const copyFlash = document.getElementById('copyFlash');
    copyBtn.addEventListener('click', async () => {
        const css = buildPlainCSS(engine.getFused());
        try {
            await navigator.clipboard.writeText(css);
        } catch (err) {
            const ta = document.createElement('textarea');
            ta.value = css;
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand('copy'); } catch (e) {}
            document.body.removeChild(ta);
        }
        copyFlash.classList.add('show');
        setTimeout(() => copyFlash.classList.remove('show'), 1500);
    });

    document.querySelectorAll('.codetab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.codetab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            _activeTab = tab.dataset.tab;
            updateCodePanel(engine.getFused());
        });
    });
}

const fuseStyle = document.createElement('style');
fuseStyle.textContent = `
@keyframes fuseShake {
    0%   { transform: scale(1)    rotate(0); }
    20%  { transform: scale(1.04) rotate(-1deg); }
    40%  { transform: scale(0.98) rotate(0.8deg); }
    60%  { transform: scale(1.03) rotate(-0.4deg); }
    100% { transform: scale(1)    rotate(0); }
}
`;
document.head.appendChild(fuseStyle);

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
