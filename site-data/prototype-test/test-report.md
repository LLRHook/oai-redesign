# Figma Prototype Test Report

**Date:** 2026-04-02  
**Figma File:** `H0BdGnAtkzZbKDvlVf2GDt`  
**Prototype Page:** `101:2` (Prototype)  
**Starting Frame:** `101:3` (Homepage)  

---

## Blocker: Browser-Based Testing

The Figma prototype URL (`figma.com/proto/...`) requires authentication. The headless browser (agent-browser) cannot bypass the Figma login wall. All embed URL variants (`?hide-ui=1`, `/embed?embed_host=share`) also redirect to login.

**Mitigation:** All tests were conducted using the **Figma Cloud API** (MCP tools: `get_screenshot`, `get_metadata`, `get_design_context`, `use_figma`) which provides full authenticated access to the file. Prototype interactions were verified programmatically by reading the `reactions` property of every interactive node.

---

## Prototype Frames (12 total)

| # | Frame Name | Node ID | Position |
|---|-----------|---------|----------|
| 1 | Homepage | 101:3 | x=0, y=0 |
| 2 | Speakers | 144:2 | x=1600, y=0 |
| 3 | About | 148:2 | x=14400, y=0 |
| 4 | Workshop: Agentic Coding | 149:2 | x=4800, y=0 |
| 5 | Workshop: Multi-Agent | 159:2 | x=6400, y=0 |
| 6 | Workshops | 160:2 | x=3200, y=0 |
| 7 | Contact Us | 161:2 | x=9600, y=0 |
| 8 | Program | 162:2 | x=16000, y=0 |
| 9 | Workshop: Agent Retrieval | 167:2 | x=8000, y=0 |
| 10 | Code of Conduct | 170:2 | x=17600, y=0 |
| 11 | Sign Up | 171:2 | x=11200, y=0 |
| 12 | Event: OAI 2026 | 177:2 | x=12800, y=0 |

All frames are 1440x900 with `clipsContent: true` (scrollable viewport).

---

## Test Results

### Test 1: Homepage
- **Action:** Load prototype starting page (node 101:3)
- **Expected:** Homepage with "Architecting Agentic AI Systems" heading
- **Result:** PASS -- Homepage loads correctly with dark UI, hero heading, date badge "March 30-31, 2026 - Atlanta, GA", two CTAs (Register Now, View Program), stats row (70+ Speakers, 11 Workshops, 2 Days, 2,000+ Attendees)
- **Content:** Real text, no placeholder content
- **Visual Issues:** 
  - **NAVBAR WIDTH BUG:** The navbar frame (101:5) has `layoutSizingHorizontal: "HUG"` causing it to be only 897px wide on a 1440px page. It should be `FILL` to span the full width. The navbar visually appears left-aligned and doesn't stretch edge-to-edge.
  - **WORKSHOP CARD HEIGHT INCONSISTENCY:** The 4th workshop card ("Production-Ready Agentic AI", 111:27) is 218px tall while the other 3 cards are 240px tall, creating an uneven bottom edge in the grid.

### Test 2: Homepage -> Workshops (click "Workshops" in nav)
- **Action:** Click "Nav: Workshops" (102:7)
- **Expected:** Navigate to Workshops page
- **Result:** PASS -- ON_CLICK -> NAVIGATE -> Workshops (160:2) with DISSOLVE transition
- **Content:** Real text. "Hands-On Workshop Tracks" heading, "11 workshops across 2 days" subtitle. 6 workshop cards visible: Mastering Agentic Coding & GPUs, Multi-Agent Architecture, Optimizing Retrieval for Agentic Systems, Optimizing LLM Training & Inference, plus 2 more below the fold. Each card has duration badges (2h, 1h, 1.5h), date badges, speaker names, and descriptions.
- **Visual Issues:** None observed. Clean layout, proper card grid with teal duration/date badges.

### Test 3: Click "Program" in nav
- **Action:** Click "Nav: Program" (102:8)
- **Expected:** Navigate to Program page
- **Result:** PASS -- ON_CLICK -> NAVIGATE -> Program (162:2) with DISSOLVE transition
- **Content:** Real text. "Conference Schedule" heading, "Two days of keynotes, workshops, and networking" subtitle. Day 1/Day 2 tab selector. Schedule rows with times (7:30 AM through 3:15 PM+), session titles, speakers, and room assignments.
- **Visual Issues:** None observed. Clean schedule layout with teal time labels.

### Test 4: Click "Speakers" in nav
- **Action:** Click "Nav: Speakers" (102:9)
- **Expected:** Navigate to Speakers page
- **Result:** PASS -- ON_CLICK -> NAVIGATE -> Speakers (144:2) with DISSOLVE transition
- **Content:** Real text. "70+ Industry Leaders" heading, "Learn from the best minds in AI engineering" subtitle. 6 speaker cards visible: Kamelia Aryafar (Netflix), Mike Tamir (Tubi), Paige Bailey (Google), Carter Abdallah (NVIDIA), Dona Sarkar (Microsoft), Josh Sutton (66 Degrees). Each card has name, title, and company in teal.
- **Visual Issues:** 
  - **PLACEHOLDER PHOTOS:** All speaker photo areas are empty dark rectangles (no actual headshot images). This is expected for a prototype but worth noting.

### Test 5: Click "Registration" in nav
- **Action:** Click "Nav: Registration" (102:10)
- **Expected:** Navigate to Sign Up page
- **Result:** PASS -- ON_CLICK -> NAVIGATE -> Sign Up (171:2) with DISSOLVE transition
- **Content:** Real text. "Register for OAI 2026" heading, "March 30-31, 2026 - Cobb Galleria Centre, Atlanta, GA" subtitle. Three ticket tiers: Student ($100), Lite Pass ($250), Full Conference ($450) with feature lists and CTA buttons.
- **Visual Issues:**
  - **FULL CONFERENCE CARD HIGHLIGHT:** The Full Conference card has a teal/green border glow effect distinguishing it as the recommended option. Visually clear.
  - **NO REGISTER CTA IN NAVBAR:** The Sign Up page navbar does not show the orange "Register Now" CTA button (correct behavior since user is already on the registration page).

### Test 6: Click "Contact Us" in nav
- **Action:** Click "Nav: Contact Us" (102:11)
- **Expected:** Navigate to Contact Us page
- **Result:** PASS -- ON_CLICK -> NAVIGATE -> Contact Us (161:2) with DISSOLVE transition
- **Content:** Real text. "Contact Us" heading, "Have questions about the conference? We'd love to hear from you." subtitle. Form fields: Name, Email, Subject, Message (textarea), and "Send Message" orange CTA button.
- **Visual Issues:** None observed. Clean form layout centered on page.

### Test 7: Click OAI Logo -> Homepage
- **Action:** Click OAI Logo on any non-Homepage page
- **Expected:** Navigate back to Homepage
- **Result:** PARTIAL PASS
  - On all NON-Homepage pages: PASS -- Logo node has ON_CLICK -> NAVIGATE -> Homepage (101:3) with DISSOLVE transition
  - **BUG: On Homepage itself (102:2):** The Logo node has NO reactions (0 interactions). This means clicking the logo on the Homepage does nothing. While this is acceptable (you're already on the Homepage), it's inconsistent -- the Logo should either always be clickable or have a clear visual distinction when on the home page.

### Test 8: Homepage "Register Now" CTA -> Sign Up
- **Action:** Click "Register Now" hero CTA (102:19)
- **Expected:** Navigate to Sign Up page
- **Result:** PASS -- ON_CLICK -> NAVIGATE -> Sign Up (171:2) with DISSOLVE transition
- **Note:** Both the button frame (102:19) AND the text node (102:20) have the same interaction wired, ensuring the click target is generous.

### Test 9: Homepage "View Program" CTA -> Program
- **Action:** Click "View Program" hero CTA (102:21)
- **Expected:** Navigate to Program page
- **Result:** PASS -- ON_CLICK -> NAVIGATE -> Program (162:2) with DISSOLVE transition

### Test 10: Homepage workshop card "View Details" -> Workshop detail
- **Action:** Click "View Details ->" on first workshop card (111:12, "Mastering Agentic Coding & GPUs")
- **Expected:** Navigate to Workshop detail page
- **Result:** PASS -- ON_CLICK -> NAVIGATE -> Workshop: Agentic Coding (149:2) with DISSOLVE transition
- **Content:** Real text. Workshop detail page shows: title "Mastering Agentic Coding & GPUs", badge "2 Hours - March 31, 2026", speaker bio (Anton Alexander, Sr. GenAI Specialist, AWS), Workshop Overview section, Time & Location section.
- **Visual Issues:**
  - **PLACEHOLDER SPEAKER PHOTO:** Speaker photo area is an empty dark rectangle.
- **Additional wiring verified:** Cards 2 and 3 also have correct View Details interactions:
  - Card 2 (111:19) -> Workshop: Multi-Agent (159:2)
  - Card 3 (111:26) -> Workshop: Agent Retrieval (167:2)
  - Card 4 has NO View Details interaction (the "View Details" text exists at 111:33 but was not found in the interaction list -- potential missing wire)

### Test 11: Homepage "View All Workshops ->" -> Workshops page
- **Action:** Click "View All Workshops ->" (111:34) on Homepage
- **Expected:** Navigate to Workshops page
- **Result:** PASS -- ON_CLICK -> NAVIGATE -> Workshops (160:2) with DISSOLVE transition

---

## Interaction Wiring Summary (All Pages)

### Homepage (101:3) -- 17 interactions
| Source | Destination |
|--------|------------|
| Nav: Workshops | Workshops (160:2) |
| Nav: Program | Program (162:2) |
| Nav: Speakers | Speakers (144:2) |
| Nav: Registration | Sign Up (171:2) |
| Nav: Contact Us | Contact Us (161:2) |
| Navbar Register CTA | Sign Up (171:2) |
| Hero Register Now CTA | Sign Up (171:2) |
| Hero View Program CTA | Program (162:2) |
| Workshop Card 1 View Details | Workshop: Agentic Coding (149:2) |
| Workshop Card 2 View Details | Workshop: Multi-Agent (159:2) |
| Workshop Card 3 View Details | Workshop: Agent Retrieval (167:2) |
| View All Workshops | Workshops (160:2) |
| View All Speakers Link | Speakers (144:2) |
| CTA Banner Register Now | Sign Up (171:2) |
| (+ duplicate text node interactions) | |

### Other Pages -- All have Logo -> Homepage + full nav wiring
Every non-Homepage page has:
- Logo -> Homepage (101:3)
- Nav: Home -> Homepage (101:3)  
- All other nav links properly wired to their targets
- Register CTA in navbar -> Sign Up (171:2)

### Missing/Notable:
- **Homepage Logo (102:2):** No interaction (0 reactions)
- **Sign Up page:** Missing Register CTA in navbar (intentional -- already on registration)
- **Workshop Card 4 "View Details":** Potentially unwired (not found in Homepage interactions)

---

## Visual Issues Summary

| Severity | Issue | Location |
|----------|-------|----------|
| **HIGH** | Navbar width is HUG (897px) instead of FILL (1440px) -- doesn't span full page width | Homepage navbar (101:5) |
| **MEDIUM** | Workshop card height inconsistency (218px vs 240px) -- uneven grid bottom edge | Homepage Workshop Grid (111:27) |
| **LOW** | Speaker photos are placeholder rectangles (no images) | Speakers page, Workshop detail pages |
| **LOW** | Homepage Logo has no click interaction | Homepage Logo (102:2) |
| **LOW** | Workshop Card 4 may be missing "View Details" interaction | Homepage (111:33) |

---

## Overall Test Results Table

| Test | Action | Expected Page | Result | Visual Issues |
|------|--------|---------------|--------|---------------|
| 1 | Load Homepage | Homepage | PASS | Navbar width bug (HUG not FILL); Workshop card height inconsistency |
| 2 | Click "Workshops" nav | Workshops | PASS | None |
| 3 | Click "Program" nav | Program | PASS | None |
| 4 | Click "Speakers" nav | Speakers | PASS | Placeholder speaker photos |
| 5 | Click "Registration" nav | Sign Up | PASS | None (no Register CTA in navbar is intentional) |
| 6 | Click "Contact Us" nav | Contact Us | PASS | None |
| 7 | Click OAI Logo | Homepage | PARTIAL PASS | Logo on Homepage has no reaction (works on all other pages) |
| 8 | Click "Register Now" hero CTA | Sign Up | PASS | None |
| 9 | Click "View Program" hero CTA | Program | PASS | None |
| 10 | Click "View Details" on card 1 | Workshop Detail | PASS | Placeholder speaker photo |
| 11 | Click "View All Workshops" | Workshops | PASS | None |

**Overall: 10 PASS, 1 PARTIAL PASS out of 11 tests. All navigation paths are functional.**
