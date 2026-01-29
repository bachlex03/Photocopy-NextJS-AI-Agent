# Plan: Vistaprint Header Wireframe

> **Goal**: Create a production-grade header wireframe based on Vistaprint's design using React + Tailwind CSS.

---

## 📋 Overview
Replicate the multi-tier header structure of Vistaprint to provide a clear, functional wireframe for the global navigation system.

**Project Type**: WEB (Next.js)
**Working Directory**: `./frontend`

---

## 🎯 Success Criteria
- [ ] Tier 1: Utility navigation (Wix, Corporate, etc.)
- [ ] Tier 2: Brand identity (Logo) + Search + User Actions (Icons)
- [ ] Tier 3: Category navigation (Deals, Business Cards, etc.)
- [ ] Tier 4: Promotional Announcement Bar
- [ ] Responsive design (Mobile/Desktop transitions)
- [ ] Interaction states (Hover, Search focus)

---

## 🛠️ Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React (standard for high-quality wireframes)
- **Components**: Radix UI (if needed for dropdowns)

---

## 🏗️ File Structure
```
frontend/src/components/header/
├── VistaprintHeader.tsx      # Main composition
├── UtilityBar.tsx            # Top tier
├── BrandBar.tsx              # Middle tier (Logo/Search/Icons)
├── CategoryNav.tsx           # Bottom tier
└── PromoBar.tsx              # Announcement strip
```

---

## 📝 Task Breakdown

### Phase 1: Foundation (P0)
- **Task ID**: `VP-01`
- **Name**: Component Scaffolding
- **Agent**: `frontend-specialist`
- **Input**: Vistaprint image/URL
- **Output**: Skeleton components for all 4 header tiers
- **Verify**: Files exist in `src/components/header`

### Phase 2: Implementation (P1)
- **Task ID**: `VP-02`
- **Name**: Brand & Search Logic
- **Agent**: `frontend-specialist`
- **Input**: `BrandBar.tsx`
- **Output**: Functional search input + user action icons with hover states
- **Verify**: Visual alignment matches Vistaprint image

- **Task ID**: `VP-03`
- **Name**: Navigation & Promo
- **Agent**: `frontend-specialist`
- **Input**: `CategoryNav.tsx`, `UtilityBar.tsx`
- **Output**: Comprehensive menu links and sticky promo bar
- **Verify**: Hover effects on categories

### Phase 3: Final Polish (P2)
- **Task ID**: `VP-04`
- **Name**: Full Composition & Verification
- **Agent**: `test-engineer`
- **Input**: All components
- **Output**: Final `VistaprintHeader.tsx` integrated into a preview page
- **Verify**: Run `ux_audit.py` and visual check

---

## ✅ PHASE X COMPLETE
- [ ] Visual Match: [ ]
- [ ] Responsive: [ ]
- [ ] Lint/Type: [ ]
