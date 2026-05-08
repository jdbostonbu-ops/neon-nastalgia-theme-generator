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
   DISPLAY FONT CATALOG
   id 'auto' = use the fused font (default behavior)
   ──────────────────────────────────────────────────────────── */

const FONTS = [
    { id:'auto',     name:'Auto (from fusion)', stack:null,
      preview:"'Space Grotesk', sans-serif" },
    { id:'monoton',  name:'Monoton',
      stack:"'Monoton', cursive",
      preview:"'Monoton', cursive" },
    { id:'audiowide',name:'Audiowide',
      stack:"'Audiowide', sans-serif",
      preview:"'Audiowide', sans-serif" },
    { id:'fraunces', name:'Fraunces',
      stack:"'Fraunces', Georgia, serif",
      preview:"'Fraunces', Georgia, serif" },
    { id:'playfair', name:'Playfair Display',
      stack:"'Playfair Display', Georgia, serif",
      preview:"'Playfair Display', Georgia, serif" },
    { id:'space',    name:'Space Grotesk',
      stack:"'Space Grotesk', sans-serif",
      preview:"'Space Grotesk', sans-serif" },
    { id:'jetbrains',name:'JetBrains Mono',
      stack:"'JetBrains Mono', monospace",
      preview:"'JetBrains Mono', monospace" },
    { id:'bungee',   name:'Bungee',
      stack:"'Bungee', sans-serif",
      preview:"'Bungee', sans-serif" },
    { id:'bebas',    name:'Bebas Neue',
      stack:"'Bebas Neue', sans-serif",
      preview:"'Bebas Neue', sans-serif" },
    { id:'caveat',   name:'Caveat (handwritten)',
      stack:"'Caveat', cursive",
      preview:"'Caveat', cursive" },
];


/* ─────────────────────────────────────────────────────────────
   ANIMATION CATALOG
   id 'none' = no animation
   className = body/wrapper class applied
   needsLetters = title must be split into <span class="letter">
   needsCardBacks = cards need back-side content injected
   ──────────────────────────────────────────────────────────── */

const ANIMATIONS = [
    { id:'none', name:'None', className:null, duration:0,
      desc:'Static — no animation applied.' },
    { id:'flip', name:'Card Flip', className:'anim-flip', duration:0,
      desc:'Cards flip 180° on click to reveal hidden info.',
      needsCardBacks:true, isInteractive:true },
    { id:'burst', name:'Burst', className:'anim-burst', duration:800,
      desc:'Cards burst outward from center, then settle into place.' },
    { id:'slide', name:'Slide In', className:'anim-slide', duration:1000,
      desc:'Hero and cards slide in from the left with stagger.' },
    { id:'fade', name:'Fade In Up', className:'anim-fade', duration:1200,
      desc:'Sections fade in while rising 30 pixels.' },
    { id:'drop', name:'Letter Drop', className:'anim-drop', duration:1800,
      desc:'Title letters drop in from above one at a time.',
      needsLetters:true, letterStagger:80 },
    { id:'wave', name:'Letter Wave', className:'anim-wave', duration:1800,
      desc:'Title letters wave up and down in sequence.',
      needsLetters:true, letterStagger:60 },
    { id:'glitch', name:'Glitch', className:'anim-glitch', duration:600,
      desc:'Title glitches with RGB-split chromatic aberration.' },
    { id:'type', name:'Typewriter', className:'anim-type', duration:2000,
      desc:'Subtitle types itself out character by character.' },
    { id:'zoom', name:'Zoom In', className:'anim-zoom', duration:700,
      desc:'Whole site scales up from 0.5 with a bouncy spring.' },
    { id:'flicker', name:'Neon Flicker', className:'anim-flicker', duration:1600,
      desc:'Title flickers like a dying neon sign before stabilizing.' },
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
    const { triggerEl, menuEl, currentEl, swatchEl, themes, onSelect, getValue,
            renderItem, useGroups } = config;

    let _isOpen = false;

    function _renderMenu() {
        menuEl.innerHTML = '';

        // Custom render path for non-theme dropdowns (font, animation)
        if (renderItem) {
            themes.forEach((item, idx) => {
                const li = renderItem(item, idx, () => {
                    onSelect(item);
                    _close();
                }, getValue());
                menuEl.appendChild(li);
            });
            return;
        }

        // Default: theme rendering with groups
        const groups = {};
        themes.forEach(t => {
            if (!groups[t.group]) groups[t.group] = [];
            groups[t.group].push(t);
        });

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
        // Lift the selector and control above sibling sections for browsers without :has()
        const selector = triggerEl.closest('.selector');
        if (selector) selector.classList.add('selector-open');
        const control = triggerEl.closest('.control');
        if (control) control.classList.add('has-open-dropdown');
    }

    function _close() {
        menuEl.classList.remove('is-open');
        triggerEl.setAttribute('aria-expanded', 'false');
        _isOpen = false;
        const selector = triggerEl.closest('.selector');
        if (selector) selector.classList.remove('selector-open');
        // Only remove control's class if no other dropdown is still open
        const control = triggerEl.closest('.control');
        if (control && !control.querySelector('.dropdown-menu.is-open')) {
            control.classList.remove('has-open-dropdown');
        }
    }

    function _toggle() {
        _isOpen ? _close() : _open();
    }

    function _updateDisplay(item) {
        currentEl.textContent = item.name;
        if (item.swatch && Array.isArray(item.swatch)) {
            swatchEl.style.background =
                `linear-gradient(135deg, ${item.swatch[0]}, ${item.swatch[1]})`;
        }
        // Font dropdown — render the swatch in the actual font
        if (item.preview) {
            swatchEl.style.fontFamily = item.preview;
        }
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

/* ─────────────────────────────────────────────────────────────
   ZIP BUILDER — pure JS, no libraries
   Implements minimal ZIP file format with STORED (no compression).
   Valid ZIP that opens in any standard unzip tool.
   Reference: PKWARE APPNOTE.TXT
   ──────────────────────────────────────────────────────────── */

// CRC-32 lookup table (computed once)
const _crcTable = (() => {
    const table = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
        let c = i;
        for (let j = 0; j < 8; j++) {
            c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
        }
        table[i] = c;
    }
    return table;
})();

function crc32(bytes) {
    let crc = 0xFFFFFFFF;
    for (let i = 0; i < bytes.length; i++) {
        crc = _crcTable[(crc ^ bytes[i]) & 0xFF] ^ (crc >>> 8);
    }
    return (crc ^ 0xFFFFFFFF) >>> 0;
}

function strToBytes(s) {
    return new TextEncoder().encode(s);
}

// Build a minimal ZIP from {filename: stringContent}
function buildZip(files) {
    const encoder = new TextEncoder();
    const fileEntries = [];
    const localChunks = [];
    let offset = 0;

    // Helper to write little-endian integers
    function u32(view, pos, val) { view.setUint32(pos, val, true); }
    function u16(view, pos, val) { view.setUint16(pos, val, true); }

    // Build local file headers + data
    for (const [name, content] of Object.entries(files)) {
        const nameBytes = encoder.encode(name);
        const dataBytes = encoder.encode(content);
        const crc = crc32(dataBytes);
        const size = dataBytes.length;

        // Local file header: 30 bytes + filename
        const header = new ArrayBuffer(30 + nameBytes.length);
        const hv = new DataView(header);
        u32(hv, 0,  0x04034b50);     // local file header signature
        u16(hv, 4,  20);              // version needed
        u16(hv, 6,  0);               // general purpose flags
        u16(hv, 8,  0);               // compression method = STORED
        u16(hv, 10, 0);               // last mod time
        u16(hv, 12, 0x21);            // last mod date (Jan 1 1980-ish, fine)
        u32(hv, 14, crc);             // crc-32
        u32(hv, 18, size);            // compressed size (= uncompressed)
        u32(hv, 22, size);            // uncompressed size
        u16(hv, 26, nameBytes.length);// filename length
        u16(hv, 28, 0);               // extra field length
        new Uint8Array(header, 30).set(nameBytes);

        localChunks.push(new Uint8Array(header));
        localChunks.push(dataBytes);

        fileEntries.push({
            name: nameBytes,
            crc, size,
            offset
        });

        offset += header.byteLength + dataBytes.byteLength;
    }

    // Build central directory
    const centralStart = offset;
    const centralChunks = [];
    let centralSize = 0;

    for (const entry of fileEntries) {
        // Central directory record: 46 bytes + filename
        const cdr = new ArrayBuffer(46 + entry.name.length);
        const cv = new DataView(cdr);
        u32(cv, 0,  0x02014b50);          // central dir signature
        u16(cv, 4,  20);                   // version made by
        u16(cv, 6,  20);                   // version needed
        u16(cv, 8,  0);                    // general purpose flags
        u16(cv, 10, 0);                    // compression method
        u16(cv, 12, 0);                    // mod time
        u16(cv, 14, 0x21);                 // mod date
        u32(cv, 16, entry.crc);            // crc-32
        u32(cv, 20, entry.size);           // compressed size
        u32(cv, 24, entry.size);           // uncompressed size
        u16(cv, 28, entry.name.length);    // filename length
        u16(cv, 30, 0);                    // extra field length
        u16(cv, 32, 0);                    // file comment length
        u16(cv, 34, 0);                    // disk number
        u16(cv, 36, 0);                    // internal attrs
        u32(cv, 38, 0);                    // external attrs
        u32(cv, 42, entry.offset);         // local header offset
        new Uint8Array(cdr, 46).set(entry.name);

        centralChunks.push(new Uint8Array(cdr));
        centralSize += cdr.byteLength;
    }

    // End of central directory record (22 bytes, no comment)
    const eocd = new ArrayBuffer(22);
    const ev = new DataView(eocd);
    u32(ev, 0,  0x06054b50);          // EOCD signature
    u16(ev, 4,  0);                    // disk number
    u16(ev, 6,  0);                    // disk where central dir starts
    u16(ev, 8,  fileEntries.length);   // number of entries on this disk
    u16(ev, 10, fileEntries.length);   // total number of entries
    u32(ev, 12, centralSize);          // size of central dir
    u32(ev, 16, centralStart);         // offset of central dir
    u16(ev, 20, 0);                    // comment length

    // Stitch everything together into one Blob
    const allChunks = [...localChunks, ...centralChunks, new Uint8Array(eocd)];
    return new Blob(allChunks, { type: 'application/zip' });
}


/* ─────────────────────────────────────────────────────────────
   STARTER FILES — generated from current fusion
   ──────────────────────────────────────────────────────────── */

function buildStarterIndex(brand, fused, animClass) {
    const safeBrand = brand.replace(/[<>"&]/g, ''); // basic sanitization for HTML attrs
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${safeBrand}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Monoton&family=Audiowide&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&family=Fraunces:opsz,wght@9..144,400;9..144,800&family=Bungee&family=Playfair+Display:wght@400;700;900&family=Bebas+Neue&family=Caveat:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>
  <article class="site${animClass ? ' ' + animClass : ''}" id="site">
    <header class="site-header">
      <div class="site-logo">${safeBrand.charAt(0).toUpperCase() || 'A'}</div>
      <nav class="site-nav">
        <span>work</span><span>about</span><span>contact</span>
      </nav>
    </header>

    <section class="site-hero">
      <span class="site-kicker">Issue No. 01</span>
      <h1 class="site-title" id="siteTitle">${safeBrand}</h1>
      <p class="site-sub">A studio of pattern, intention, and patient craft.</p>
      <div class="site-cta">
        <button class="site-btn site-btn-primary">Begin →</button>
        <button class="site-btn site-btn-ghost">Read more</button>
      </div>
    </section>

    <section class="site-cards">
      <div class="site-card"><span class="site-card-num">01</span><h2>Discovery</h2><p>Listen first. Map the territory before drawing the lines.</p></div>
      <div class="site-card"><span class="site-card-num">02</span><h2>Form</h2><p>Where typography and spacing carry the meaning.</p></div>
      <div class="site-card"><span class="site-card-num">03</span><h2>Ship</h2><p>The release is the beginning, not the end.</p></div>
    </section>

    <footer class="site-footer">© ${safeBrand} · Generated by Prism</footer>
  </article>

  <script src="script.js"></script>
</body>
</html>
`;
}

function buildStarterCSS(fused, animClass) {
    // Border color derived from text/bg (matches preview behavior)
    const borderColor = mixColor(fused.text, fused.bg, 0.85);

    // Animation CSS only included if user picked one
    let animCSS = '';
    if (animClass) {
        animCSS = `
/* ── ANIMATION (auto-applied via class on <article>) ── */
${getAnimationCSSForExport(animClass)}
`;
    }

    return `/* ═══════════════════════════════════════════════════════════════
   ${fused.sourceA} × ${fused.sourceB}  ·  ${100 - fused.ratio}/${fused.ratio}
   Generated by Prism — Theme Fusion Lab
   ═══════════════════════════════════════════════════════════════ */

:root {
  --bg:        ${fused.bg};
  --surface:   ${fused.surface};
  --text:      ${fused.text};
  --text-dim:  ${fused.textDim};
  --accent:    ${fused.accent};
  --accent-2:  ${fused.accent2};
  --border:    ${borderColor};
  --radius:    ${fused.radius}px;
  --font:      ${fused.font};
  --font-body: ${fused.fontBody};
  --letter-h:  ${fused.letterH};
  --letter-b:  ${fused.letterB};
  --uppercase: ${fused.uppercase};
  --italic:    ${fused.italic};
  --shadow:    ${fused.shadow};
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}

.site {
  width: 100%;
  max-width: 720px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 22px;
  border-bottom: 1px solid var(--border);
}

.site-logo {
  width: 36px; height: 36px;
  display: grid; place-items: center;
  background: var(--accent);
  color: var(--bg);
  border-radius: 8px;
  font-family: var(--font);
  font-weight: 800;
  font-style: var(--italic);
  text-transform: var(--uppercase);
}

.site-nav {
  display: flex; gap: 18px;
  font-size: 0.78rem;
  color: var(--text-dim);
  text-transform: var(--uppercase);
  letter-spacing: 0.1em;
}

.site-hero {
  padding: 48px 28px 32px;
  text-align: center;
}

.site-kicker {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin-bottom: 14px;
}

.site-title {
  font-family: var(--font);
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: var(--letter-h);
  font-style: var(--italic);
  text-transform: var(--uppercase);
  margin-bottom: 18px;
  background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  word-break: break-word;
}

.site-sub {
  color: var(--text-dim);
  max-width: 42ch;
  margin: 0 auto 24px;
  font-size: 1rem;
}

.site-cta {
  display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;
}

.site-btn {
  padding: 12px 22px;
  border-radius: calc(var(--radius) * 0.7);
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  font: inherit;
  font-family: var(--font-body);
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
  text-transform: var(--uppercase);
  letter-spacing: var(--letter-b);
}

.site-btn-primary {
  background: var(--accent);
  color: var(--bg);
  border-color: var(--accent);
}

.site-btn:hover { transform: translateY(-1px); }

.site-cards {
  padding: 22px;
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .site-cards { grid-template-columns: repeat(3, 1fr); }
}

.site-card {
  padding: 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: calc(var(--radius) * 0.7);
}

.site-card-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  color: var(--accent);
  letter-spacing: 0.1em;
}

.site-card h2 {
  font-family: var(--font);
  font-size: 1.1rem;
  font-weight: 700;
  font-style: var(--italic);
  margin: 6px 0 8px;
}

.site-card p {
  color: var(--text-dim);
  font-size: 0.92rem;
}

.site-footer {
  padding: 14px 22px;
  border-top: 1px solid var(--border);
  font-size: 0.78rem;
  color: var(--text-dim);
  text-align: center;
  font-family: 'JetBrains Mono', monospace;
}
${animCSS}`;
}

// Build the per-animation CSS for export — mirrors what's in style.css but
// scoped to the exported .site class (no .mini-site)
function getAnimationCSSForExport(animClass) {
    // Map mini-site classes → site classes for the export
    const map = {
        'anim-flip': `
.site.anim-flip .site-card {
  cursor: pointer;
  transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-style: preserve-3d;
}
.site.anim-flip .site-card:hover {
  box-shadow: 0 0 24px var(--accent);
}
/* For full flip behavior, see the JS file — the demo cards toggle is-flipped on click */
.site.anim-flip .site-card.is-flipped {
  transform: rotateY(180deg);
}`,
        'anim-burst': `
@keyframes burstOut {
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(var(--burst-x, 0), var(--burst-y, 0)) scale(1.2); }
  100% { transform: translate(0, 0) scale(1); }
}
.site.anim-burst .site-card { animation: burstOut 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
.site.anim-burst .site-card:nth-child(1) { --burst-x: -40px; --burst-y: -20px; }
.site.anim-burst .site-card:nth-child(2) { --burst-y: -30px; }
.site.anim-burst .site-card:nth-child(3) { --burst-x:  40px; --burst-y: -20px; }`,
        'anim-slide': `
@keyframes slideInLeft {
  from { transform: translateX(-60px); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}
.site.anim-slide .site-hero,
.site.anim-slide .site-card { animation: slideInLeft 0.6s ease-out both; }
.site.anim-slide .site-card:nth-child(1) { animation-delay: 0.1s; }
.site.anim-slide .site-card:nth-child(2) { animation-delay: 0.2s; }
.site.anim-slide .site-card:nth-child(3) { animation-delay: 0.3s; }`,
        'anim-fade': `
@keyframes fadeInUp {
  from { transform: translateY(30px); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}
.site.anim-fade > * { animation: fadeInUp 0.7s ease-out both; }
.site.anim-fade > *:nth-child(2) { animation-delay: 0.15s; }
.site.anim-fade > *:nth-child(3) { animation-delay: 0.3s; }
.site.anim-fade > *:nth-child(4) { animation-delay: 0.45s; }`,
        'anim-drop': `
@keyframes letterDrop {
  0%   { transform: translateY(-60px) rotate(-6deg); opacity: 0; }
  60%  { transform: translateY(8px) rotate(2deg); opacity: 1; }
  100% { transform: translateY(0) rotate(0); opacity: 1; }
}
.site.anim-drop .site-title {
  background: none;
  -webkit-text-fill-color: var(--text);
  color: var(--text);
}
.site.anim-drop .site-title .letter {
  display: inline-block;
  color: var(--text);
  -webkit-text-fill-color: var(--text);
  animation: letterDrop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}`,
        'anim-wave': `
@keyframes letterWave {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-14px); }
}
.site.anim-wave .site-title {
  background: none;
  -webkit-text-fill-color: var(--accent);
  color: var(--accent);
}
.site.anim-wave .site-title .letter {
  display: inline-block;
  color: var(--accent);
  -webkit-text-fill-color: var(--accent);
  animation: letterWave 1s ease-in-out infinite;
}`,
        'anim-glitch': `
@keyframes glitchShake {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-2px, 1px); }
  30% { transform: translate(-1px, 2px); }
  50% { transform: translate(-2px, -1px); }
  70% { transform: translate(-1px, -2px); }
  90% { transform: translate(-2px, 1px); }
}
.site.anim-glitch .site-title { animation: glitchShake 0.6s steps(1) both; }`,
        'anim-type': `
.site.anim-type .site-sub {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid var(--accent);
  width: 0;
  max-width: 100%;
  margin: 0 auto 24px;
  animation: typewriter 2.4s steps(var(--type-len, 40), end) forwards, typeCaret 0.7s step-end infinite;
}
@keyframes typewriter { from { width: 0; } to { width: calc(var(--type-len, 40) * 1ch); } }
@keyframes typeCaret { 0%, 100% { border-color: var(--accent); } 50% { border-color: transparent; } }`,
        'anim-zoom': `
@keyframes zoomBounce {
  0%   { transform: scale(0.5); opacity: 0; }
  60%  { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
.site.anim-zoom { animation: zoomBounce 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both; }`,
        'anim-flicker': `
@keyframes neonFlicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    opacity: 0.99;
    text-shadow: 0 0 4px var(--accent), 0 0 12px var(--accent), 0 0 24px var(--accent);
  }
  20%, 24%, 55% { opacity: 0.4; text-shadow: none; }
}
.site.anim-flicker .site-title { animation: neonFlicker 1.6s linear both; }`
    };
    return map[animClass] || '';
}

function buildStarterJS(animClass, brand) {
    const needsLetters = animClass === 'anim-drop' || animClass === 'anim-wave';
    const needsFlip    = animClass === 'anim-flip';
    const needsType    = animClass === 'anim-type';

    let script = `// ═══════════════════════════════════════════════════════════════
// Generated by Prism — Theme Fusion Lab
// Vanilla JavaScript · no libraries · safe textContent for user input
// ═══════════════════════════════════════════════════════════════

`;

    if (needsLetters) {
        script += `// Split title text into individual letters for animation
(function splitLetters() {
  const title = document.getElementById('siteTitle');
  if (!title) return;
  const text = title.textContent || '';
  title.textContent = '';
  [...text].forEach((ch, i) => {
    const span = document.createElement('span');
    span.className = 'letter';
    span.textContent = ch === ' ' ? '\\u00A0' : ch;
    span.style.animationDelay = (i * 80) + 'ms';
    title.appendChild(span);
  });
})();
`;
    }

    if (needsType) {
        script += `// Typewriter — measure subtitle length so width can animate to the right size
(function setupTypewriter() {
  const sub = document.querySelector('.site-sub');
  if (!sub) return;
  const len = (sub.textContent || '').length;
  sub.style.setProperty('--type-len', len);
})();
`;
    }

    if (needsFlip) {
        script += `// Card flip on click — reveals back-side content
(function setupCardFlip() {
  document.querySelectorAll('.site-card').forEach(card => {
    // Build "back" content using textContent (injection-safe)
    const num = card.querySelector('.site-card-num');
    const numText = num ? num.textContent : '00';
    const back = document.createElement('div');
    back.className = 'site-card-back';
    back.style.cssText = 'position:absolute;inset:14px;display:grid;place-items:center;text-align:center;transform:rotateY(180deg);backface-visibility:hidden;color:var(--accent);font-family:JetBrains Mono,monospace;font-size:0.85rem;white-space:pre-line;';
    back.textContent = '// step ' + numText + '\\nready when you are.';

    // Wrap original content as "front"
    const front = document.createElement('div');
    front.className = 'site-card-front';
    front.style.cssText = 'backface-visibility:hidden;';
    while (card.firstChild) front.appendChild(card.firstChild);

    card.style.position = 'relative';
    card.style.transformStyle = 'preserve-3d';
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  });
})();
`;
    }

    if (animClass && !needsFlip) {
        // For non-interactive animations, allow click-to-replay
        script += `// Click site to replay animation
(function setupReplay() {
  const site = document.getElementById('site');
  if (!site) return;
  const cls = '${animClass}';
  site.addEventListener('click', () => {
    site.classList.remove(cls);
    void site.offsetWidth; // force reflow
    site.classList.add(cls);
  });
})();
`;
    }

    if (!animClass) {
        script += `// No animation selected — this file is intentionally minimal.
// Add interactivity here as your project grows.
`;
    }

    return script;
}

function buildStarterReadme(brand, fused, animName, fontName) {
    return `# ${brand} — Generated by Prism

This starter kit was generated from a theme fusion in **Prism · Theme Fusion Lab**.

## What's inside

- **index.html** — a minimal landing page using your fused theme
- **style.css** — the generated design tokens and component styles
- **script.js** — vanilla JavaScript${animName !== 'None' ? ' for the ' + animName + ' animation' : ' (placeholder)'}

## Your fusion

| Setting | Value |
| :-- | :-- |
| Theme A | ${fused.sourceA} |
| Theme B | ${fused.sourceB} |
| Ratio | ${100 - fused.ratio} / ${fused.ratio} |
| Display Font | ${fontName} |
| Animation | ${animName} |

## Generated tokens

\`\`\`css
--bg:        ${fused.bg};
--surface:   ${fused.surface};
--text:      ${fused.text};
--accent:    ${fused.accent};
--accent-2:  ${fused.accent2};
--radius:    ${fused.radius}px;
--font:      ${fused.font};
\`\`\`

## How to use

1. Unzip this folder anywhere on your computer.
2. Open \`index.html\` in your browser — that's it. No build step, no install.
3. Edit \`style.css\` to customize tokens or component styles.
4. Drop your own content into \`index.html\` and ship.

## License

Generated output is yours to use however you want — commercial, personal, anywhere.

— *Prism · Theme Fusion Lab*
`;
}


/* ─────────────────────────────────────────────────────────────
   FONT OVERRIDE & ANIMATION HELPERS
   ──────────────────────────────────────────────────────────── */

// State shared between init handlers
let _selectedFont = FONTS[0];      // 'auto'
let _selectedAnim = ANIMATIONS[0]; // 'none'
let _animPlayToken = 0;            // cancels stale timers

function applyFontOverride() {
    const ms = document.getElementById('miniSite');
    if (!ms) return;
    if (_selectedFont.id === 'auto' || !_selectedFont.stack) {
        // remove inline override — let fused font take over again
        ms.style.removeProperty('--ms-font');
    } else {
        ms.style.setProperty('--ms-font', _selectedFont.stack);
    }
    // update token strip font label
    const fontEl = document.getElementById('tsFontVal');
    if (fontEl) {
        if (_selectedFont.id === 'auto') {
            // show the fused font
            const styles = getComputedStyle(ms);
            const cur = styles.getPropertyValue('--ms-font').trim();
            const name = cur.split(',')[0].replace(/['"]/g, '').trim();
            if (name) fontEl.textContent = name;
        } else {
            fontEl.textContent = _selectedFont.name.replace(/\s*\(.*?\)/, '');
        }
    }
}

// Split title text into <span class="letter"> for letter animations
function splitTitleLetters() {
    const titleEl = document.getElementById('msTitle');
    if (!titleEl) return;
    const text = titleEl.textContent || '';
    if (!text.trim()) return;
    titleEl.innerHTML = ''; // safe: rebuilding from textContent we just read
    [...text].forEach(ch => {
        const span = document.createElement('span');
        span.className = 'letter';
        // use NBSP for spaces so they keep width
        span.textContent = ch === ' ' ? '\u00A0' : ch;
        titleEl.appendChild(span);
    });
}

// Set title back to plain textContent (no spans)
function unsplitTitleLetters() {
    const titleEl = document.getElementById('msTitle');
    if (!titleEl) return;
    const brand = document.getElementById('brandName');
    const raw = (brand && brand.value.trim()) || 'Next Chapter';
    titleEl.textContent = raw;
    titleEl.removeAttribute('data-text');
}

// Inject card-back content for the flip animation
function ensureCardBacks() {
    const cards = document.querySelectorAll('#miniSite .ms-card');
    cards.forEach(card => {
        if (card.querySelector('.ms-card-back')) return;
        // wrap existing content in a "front"
        if (!card.querySelector('.ms-card-front')) {
            const front = document.createElement('div');
            front.className = 'ms-card-front';
            while (card.firstChild) front.appendChild(card.firstChild);
            card.appendChild(front);
        }
        const back = document.createElement('div');
        back.className = 'ms-card-back';
        // Use textContent — never innerHTML for safety
        const num = card.querySelector('.ms-card-num');
        const numText = num ? num.textContent : '00';
        back.textContent = `// step ${numText}\nready when you are.`;
        // preserve newlines
        back.style.whiteSpace = 'pre-line';
        card.appendChild(back);
    });
}

function removeCardBacks() {
    const cards = document.querySelectorAll('#miniSite .ms-card');
    cards.forEach(card => {
        const back = card.querySelector('.ms-card-back');
        if (back) back.remove();
        const front = card.querySelector('.ms-card-front');
        if (front) {
            // unwrap front
            while (front.firstChild) card.insertBefore(front.firstChild, front);
            front.remove();
        }
        card.classList.remove('is-flipped');
    });
}

// Wire click-to-flip for card-flip animation
function wireCardFlipHandlers(enabled) {
    const cards = document.querySelectorAll('#miniSite .ms-card');
    cards.forEach(card => {
        // remove old handler reference
        if (card._flipHandler) {
            card.removeEventListener('click', card._flipHandler);
            card._flipHandler = null;
        }
        if (enabled) {
            const handler = (e) => {
                e.stopPropagation();
                card.classList.toggle('is-flipped');
            };
            card._flipHandler = handler;
            card.addEventListener('click', handler);
        }
    });
}

// Play (or replay) the currently selected animation
function playAnimation() {
    const ms = document.getElementById('miniSite');
    if (!ms) return;

    // bump token so stale finish-timers don't run
    _animPlayToken++;
    const myToken = _animPlayToken;

    // strip any prior anim-* class
    [...ms.classList].forEach(c => {
        if (c.startsWith('anim-')) ms.classList.remove(c);
    });

    const anim = _selectedAnim;
    if (!anim || anim.id === 'none' || !anim.className) {
        unsplitTitleLetters();
        removeCardBacks();
        wireCardFlipHandlers(false);
        ms.classList.remove('is-clickable');
        const hint = document.getElementById('previewHint');
        if (hint) hint.classList.remove('visible');
        // also clear typewriter measurement so a future switch back recalculates
        const subElNone = document.getElementById('msSub');
        if (subElNone) subElNone.style.removeProperty('--type-len');
        return;
    }

    // Prepare DOM for this animation
    if (anim.needsLetters) {
        splitTitleLetters();
    } else {
        unsplitTitleLetters();
    }

    // For glitch — we use data-text on the title to power ::before/::after
    const titleEl = document.getElementById('msTitle');
    if (anim.id === 'glitch' && titleEl) {
        titleEl.setAttribute('data-text', titleEl.textContent || '');
    } else if (titleEl) {
        titleEl.removeAttribute('data-text');
    }

    if (anim.needsCardBacks) {
        ensureCardBacks();
        wireCardFlipHandlers(true);
    } else {
        removeCardBacks();
        wireCardFlipHandlers(false);
    }

    // For typewriter — measure subtitle length and set --type-len so the
    // CSS animation reveals the correct number of characters (1ch per char)
    if (anim.id === 'type') {
        const subEl = document.getElementById('msSub');
        if (subEl) {
            const len = (subEl.textContent || '').length;
            subEl.style.setProperty('--type-len', len);
        }
    } else {
        const subEl = document.getElementById('msSub');
        if (subEl) subEl.style.removeProperty('--type-len');
    }

    // Force reflow so the animation re-triggers cleanly
    void ms.offsetWidth;
    ms.classList.add(anim.className);

    // Apply per-letter stagger inline if needed
    if (anim.needsLetters) {
        const letters = ms.querySelectorAll('.ms-title .letter');
        letters.forEach((letter, i) => {
            letter.style.animationDelay = (i * (anim.letterStagger || 60)) + 'ms';
        });
    }

    // Make preview clickable for replay (any animation)
    ms.classList.add('is-clickable');
    const hint = document.getElementById('previewHint');
    if (hint) hint.classList.add('visible');
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

    // ── FONT DROPDOWN ──
    const dropFont = createDropdown({
        triggerEl: document.getElementById('triggerFont'),
        menuEl:    document.getElementById('menuFont'),
        currentEl: document.getElementById('currentFont'),
        swatchEl:  document.getElementById('swatchFont'),
        themes:    FONTS,
        getValue:  () => _selectedFont,
        onSelect:  (font) => {
            _selectedFont = font;
            dropFont.updateDisplay(font);
            applyFontOverride();
            // re-render code panel to reflect new font
            updateCodePanel(engine.getFused());
        },
        renderItem: (font, idx, onClick, current) => {
            const li = document.createElement('li');
            li.className = 'dropdown-item font-item';
            li.setAttribute('role', 'option');
            li.style.setProperty('--swatch-a', '#ff10f0');
            li.style.setProperty('--swatch-b', '#00f0ff');
            li.style.animationDelay = (idx * 22) + 'ms';
            li.style.setProperty('--item-font', font.preview);

            const sw = document.createElement('span');
            sw.className = 'dropdown-item-swatch';
            sw.style.fontFamily = font.preview;
            sw.style.display = 'grid';
            sw.style.placeItems = 'center';
            sw.style.fontSize = '0.7rem';
            sw.style.color = '#0a0014';
            sw.textContent = 'Aa';

            const name = document.createElement('span');
            name.className = 'dropdown-item-name';
            name.textContent = font.name;

            li.appendChild(sw);
            li.appendChild(name);

            if (current && current.id === font.id) li.classList.add('is-active');
            li.addEventListener('click', onClick);
            return li;
        }
    });
    dropFont.updateDisplay(_selectedFont);

    // ── ANIMATION DROPDOWN ──
    const dropAnim = createDropdown({
        triggerEl: document.getElementById('triggerAnim'),
        menuEl:    document.getElementById('menuAnim'),
        currentEl: document.getElementById('currentAnim'),
        swatchEl:  document.getElementById('swatchAnim'),
        themes:    ANIMATIONS,
        getValue:  () => _selectedAnim,
        onSelect:  (anim) => {
            _selectedAnim = anim;
            dropAnim.updateDisplay(anim);
            // auto-play once on selection
            playAnimation();
        },
        renderItem: (anim, idx, onClick, current) => {
            const li = document.createElement('li');
            li.className = 'dropdown-item anim-item';
            li.setAttribute('role', 'option');
            li.style.setProperty('--swatch-a', '#ff10f0');
            li.style.setProperty('--swatch-b', '#00f0ff');
            li.style.animationDelay = (idx * 22) + 'ms';

            const row = document.createElement('div');
            row.className = 'dropdown-item-row';

            const sw = document.createElement('span');
            sw.className = 'dropdown-item-swatch';

            const name = document.createElement('span');
            name.className = 'dropdown-item-name';
            name.textContent = anim.name;

            row.appendChild(sw);
            row.appendChild(name);

            const desc = document.createElement('div');
            desc.className = 'dropdown-item-desc';
            desc.textContent = anim.desc;

            li.appendChild(row);
            li.appendChild(desc);

            if (current && current.id === anim.id) li.classList.add('is-active');
            li.addEventListener('click', onClick);
            return li;
        }
    });
    dropAnim.updateDisplay(_selectedAnim);

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
        const raw = brandInput.value.trim() || 'Next Chapter';
        // textContent everywhere — injection-safe
        msTitle.textContent = raw;
        msLogo.textContent = raw.charAt(0).toUpperCase() || 'R';
        msFooter.textContent = `© ${raw} · Built with Prism`;
        const url = document.getElementById('previewUrl');
        if (url) {
            url.textContent = `prism://${raw.toLowerCase().replace(/\s+/g, '-')}/${engine.getA().id}+${engine.getB().id}`;
        }
        // If a letter-based animation is active, re-split letters
        if (_selectedAnim && _selectedAnim.needsLetters) {
            splitTitleLetters();
            const letters = document.querySelectorAll('#miniSite .ms-title .letter');
            letters.forEach((letter, i) => {
                letter.style.animationDelay = (i * (_selectedAnim.letterStagger || 60)) + 'ms';
            });
        }
        // Refresh data-text for glitch
        if (_selectedAnim && _selectedAnim.id === 'glitch') {
            msTitle.setAttribute('data-text', raw);
        }
    }
    brandInput.addEventListener('input', updateBrand);

    engine.onChange((fused) => {
        applyFusedTheme(fused);
        updateTokenStrip(fused);
        updateCodePanel(fused);
        // re-apply font override (CSS var was just overwritten)
        applyFontOverride();
        dropA.updateDisplay(engine.getA());
        dropB.updateDisplay(engine.getB());
        const url = document.getElementById('previewUrl');
        if (url) {
            const brand = (brandInput.value.trim() || 'next chapter').toLowerCase().replace(/\s+/g, '-');
            url.textContent = `prism://${brand}/${engine.getA().id}+${engine.getB().id}`;
        }
    });

    updateBrand();

    // ── PLAY ANIMATION button (was FUSE) ──
    const fuseBtn = document.getElementById('fuseBtn');
    fuseBtn.addEventListener('click', () => {
        playAnimation();
    });

    // ── Click preview to replay ──
    const miniSite = document.getElementById('miniSite');
    if (miniSite) {
        miniSite.addEventListener('click', (e) => {
            // For card-flip, individual cards handle their own clicks — let those bubble
            if (_selectedAnim && _selectedAnim.id === 'flip') {
                // only replay if click was on the bare site (not a card)
                if (e.target.closest('.ms-card')) return;
            }
            if (_selectedAnim && _selectedAnim.id !== 'none') {
                playAnimation();
            }
        });
    }

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

    // ── DOWNLOAD ZIP ──
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const fused = engine.getFused();
            const brand = (brandInput.value.trim() || 'Next Chapter');
            const animClass = (_selectedAnim && _selectedAnim.className) || null;
            const animName = (_selectedAnim && _selectedAnim.name) || 'None';
            const fontName = (_selectedFont && _selectedFont.name) || 'Auto';

            // If user picked a font override, splice it into the fused token's font field
            const exportFused = { ...fused };
            if (_selectedFont && _selectedFont.id !== 'auto' && _selectedFont.stack) {
                exportFused.font = _selectedFont.stack;
            }

            const files = {
                'index.html': buildStarterIndex(brand, exportFused, animClass),
                'style.css':  buildStarterCSS(exportFused, animClass),
                'script.js':  buildStarterJS(animClass, brand),
                'README.md':  buildStarterReadme(brand, exportFused, animName, fontName)
            };

            try {
                const blob = buildZip(files);
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                // filename: prism-<brand>-<themeA>+<themeB>.zip
                const slug = brand.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                a.download = `prism-${slug || 'starter'}-${engine.getA().id}+${engine.getB().id}.zip`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                setTimeout(() => URL.revokeObjectURL(url), 1000);

                // Reuse the copy flash for visual confirmation
                copyFlash.textContent = '// download started';
                copyFlash.classList.add('show');
                setTimeout(() => {
                    copyFlash.classList.remove('show');
                    // Reset text after fade
                    setTimeout(() => { copyFlash.textContent = '// copied to clipboard'; }, 400);
                }, 1500);
            } catch (err) {
                console.error('Zip generation failed:', err);
                alert('Sorry — zip generation failed in this browser. Try the Copy CSS button instead.');
            }
        });
    }

    document.querySelectorAll('.codetab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.codetab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            _activeTab = tab.dataset.tab;
            updateCodePanel(engine.getFused());
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
