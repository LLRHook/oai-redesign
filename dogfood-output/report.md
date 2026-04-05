# Dogfood Report: OAI Conference Site

**Target:** http://localhost:38952
**Date:** 2026-04-02
**Session:** oai-conf
**Tester:** Automated (Claude Code)

## Summary

| Severity | Count |
|----------|-------|
| Critical | 2 |
| High     | 2 |
| Medium   | 2 |
| Low      | 3 |
| **Total** | **9** |

## Issues

### ISSUE-001: Nginx trailing-slash redirects strip the port, breaking all navigation links

**Severity:** Critical
**Page:** All pages (e.g., http://localhost:38952/speakers)
**Type:** Functional

**Description:** Nginx is configured to add trailing slashes to directory URLs, but the 301 redirect Location header uses `http://localhost/speakers/` instead of `http://localhost:38952/speakers/`. This drops port 38952 from the URL, causing the browser to try connecting to port 80, which results in an ERR_CONNECTION_REFUSED error. Every internal nav link (Workshops, Speakers, Program, Contact, Call for Speakers) uses paths without trailing slashes (e.g., `/speakers` not `/speakers/`), so **clicking any nav link breaks the site**.

**Steps to Reproduce:**
1. Open http://localhost:38952
2. Click "Speakers" in the nav bar
3. Browser navigates to http://localhost:38952/speakers, gets 301 redirect to http://localhost/speakers/ (no port)
4. Connection refused -- see `screenshots/issue-001-redirect.png`

**Expected:** Navigation should load the speakers page at http://localhost:38952/speakers/
**Actual:** 301 redirect to http://localhost/speakers/ (port dropped), ERR_CONNECTION_REFUSED

**Evidence:**
- Screenshot: `screenshots/issue-001-redirect.png`
- Verified via curl: `curl -I http://localhost:38952/speakers` returns `Location: http://localhost/speakers/`

**Fix suggestion:** Add `port_in_redirect on;` to nginx.conf, or configure `absolute_redirect off;` so redirects use relative paths.

---

### ISSUE-002: 24 speakers have missing title/company information

**Severity:** Medium
**Page:** http://localhost:38952/speakers/
**Type:** Content

**Description:** Out of 68 speakers listed on the speakers page, 24 have completely blank role/company information. The affected speakers show only their name with no title, company, or role. This makes the speaker cards appear incomplete and unprofessional.

**Affected speakers (completely blank -- no title, no company):** 25 speakers
Marcus Eagan, Khalifeh Al Jadda, Yuanzheng Zhu, Manai Mohamed Mortadha, Siddarth Ranganathan, Lamar Rhodes, Anwar Msehli, Daniel Beecham, Scott Radcliffe, Muhammad Ali Shafique, Lennon Shikhman, Austin Brown, Dawn Choo, Victor Calderon, Christopher Reckord, Steven Pousty, Aniket Wattamwar, Barsha Saha, Cordelia Chadwick, Reshma Lal Jagadheesh, Uday Reddy Malgireddy, Shibashis Mishra, Rajani Maski, Nithin Mohan, Joshua Cazoe

**Affected speakers (title only, missing company):** 19 speakers
Chip Huyen, Sura Elamurugu, Vivek Kolasani, Ashok Prakash, Avinash Ahuja, Jen Agarwal, Santosh Appachu D. Poovaiah, Manisha Arora, Logan Lawler, Kelley O'Keeffe, Laura Edell, Justin Castilla, Bhavuk Jain, Yasel Garcia, Jared Rhodes, Brianna King, Mustapha Nisar, Stanislav Stolpovskiy, Akhil Sai Devunoori

**Total:** 44 of 68 speakers (65%) have incomplete information

**Steps to Reproduce:**
1. Navigate to http://localhost:38952/speakers/
2. Scroll down past the featured keynote speakers
3. Observe many speaker cards showing only a name with no role or company

**Expected:** Every speaker card should display name, role/title, and company
**Actual:** 24 speaker cards show only the name with blank info below

**Evidence:**
- Screenshot: `screenshots/issue-002.png`, `screenshots/issue-002b.png`

---

### ISSUE-003: Duplicate speaker entry -- Josh Sutton / Joshua Sutton

**Severity:** Medium
**Page:** http://localhost:38952/speakers/
**Type:** Content

**Description:** The same person appears twice in the speakers list with slightly different names and titles:
- "Josh Sutton" -- SVP of Innovation | 66 Degrees (in keynote section)
- "Joshua Sutton" -- Chief Innovation Officer | 66 Degrees (in general speakers grid)

Both are from 66 Degrees and clearly the same individual.

**Steps to Reproduce:**
1. Navigate to http://localhost:38952/speakers/
2. Find "Josh Sutton" in the Featured Keynote Speakers section (3rd card)
3. Scroll down to the "2026 Speakers" grid and find "Joshua Sutton"

**Expected:** Each speaker should appear only once with consistent name and title
**Actual:** Same person listed twice with inconsistent name (Josh vs Joshua) and title (SVP of Innovation vs Chief Innovation Officer)

**Evidence:**
- Screenshot: `screenshots/speakers-keynote.png` (Josh Sutton in keynote section)
- Screenshot: `screenshots/speakers-grid2.png` (Joshua Sutton in grid)

---

### ISSUE-004: Contact form submit does nothing -- no backend handler

**Severity:** High
**Page:** http://localhost:38952/contact/
**Type:** Functional

**Description:** The contact form's `action` attribute is set to `#`, meaning it posts to nowhere. When a user fills in all four fields (Name, Email, Subject, Message) and clicks "Submit", nothing happens -- no success message, no error, no redirect, no network request. The form has no JavaScript submit handler either. This affects all ticket purchase CTAs ("Get Student Pass", "Apply to Volunteer", "Grab Early Bird", "Get Full Pass") and all "Register for Workshop" buttons since they all redirect to the contact page.

**Steps to Reproduce:**
1. Navigate to http://localhost:38952/contact/
2. Fill in Name, Email, Subject, and Message fields
3. Click "Submit"
4. Observe: nothing happens

**Expected:** Form submission should send data and show a success/confirmation message
**Actual:** Form action is `#`, submit does nothing, no feedback to user

**Evidence:**
- Screenshot: `screenshots/contact-form-filled.png`
- Screenshot: `screenshots/issue-004.png` (after submit -- no change)
- Form HTML: `<form action="#" method="post">` with no JS handler

---

### ISSUE-005: Virtual Event Schedule shows wrong date -- "Oct 29, 2025" instead of 2026

**Severity:** High
**Page:** http://localhost:38952/program/
**Type:** Content

**Description:** The Virtual Event Schedule section on the Program page displays "Oct 29, 2025 | 9:00 AM - 3:00 PM PST" as the event date. The conference is scheduled for March 30-31, 2026 (per the hero, program overview, and all workshop cards). The October 2025 date is either a leftover from a previous event or a placeholder that was never updated. It is already in the past.

**Steps to Reproduce:**
1. Navigate to http://localhost:38952/ (homepage) or http://localhost:38952/program/
2. Scroll down to the "Virtual Event Schedule" section
3. Observe: date shown is "OCT 29, 2025"
   - Appears on BOTH the homepage and the program page

**Expected:** Virtual event date should be consistent with the conference dates (March 30-31, 2026) or clearly labeled as a separate event
**Actual:** Shows "Oct 29, 2025" -- a date in the past, inconsistent with the 2026 conference

**Evidence:**
- Screenshot: `screenshots/issue-005.png`

---

### ISSUE-006: 404 page shows raw nginx error instead of branded page

**Severity:** Low
**Page:** http://localhost:38952/nonexistent-page/
**Type:** Visual

**Description:** Navigating to a non-existent URL shows the default nginx "404 Not Found" error page with a white background and plain text. There is no navigation, no branding, no link back to the homepage, and the styling completely breaks from the site's dark theme. Users who encounter a broken link are stranded with no way to navigate back without using the browser's back button.

**Steps to Reproduce:**
1. Navigate to http://localhost:38952/nonexistent-page/
2. Observe: raw nginx 404 page with white background

**Expected:** A styled 404 page matching the site's dark theme with navigation and a link back to the homepage
**Actual:** Default nginx "404 Not Found" page with white background and "nginx/1.29.7" text

**Evidence:**
- Screenshot: `screenshots/issue-006.png`

---

### ISSUE-007: Social media links use cryptic abbreviated text ("YO", "LI", "YT") instead of icons or full labels

**Severity:** Low
**Page:** All pages (footer), http://localhost:38952/contact/ (sidebar)
**Type:** Visual / UX

**Description:** Social media links throughout the site use short abbreviated text labels instead of recognizable icons or full platform names:
- Footer: "YO" for YouTube, "LI" for LinkedIn
- Contact sidebar: "YT" for YouTube, "LI" for LinkedIn

The abbreviations are inconsistent (footer uses "YO" while contact page uses "YT" for the same YouTube link). Neither label is immediately recognizable to users. Additionally, none of these links have `aria-label` attributes for accessibility.

**Steps to Reproduce:**
1. Scroll to the footer on any page -- observe "YO" and "LI" links
2. Navigate to http://localhost:38952/contact/ -- observe "YT" and "LI" under Social Media heading

**Expected:** Social media links should use recognizable icons (SVG/icon font) or full platform names ("YouTube", "LinkedIn"), with consistent labeling and `aria-label` for accessibility
**Actual:** Abbreviated text "YO"/"YT" for YouTube and "LI" for LinkedIn, no aria-labels, inconsistent between footer and contact page

**Evidence:**
- Screenshot: `screenshots/issue-007.png` (footer)
- Screenshot: `screenshots/issue-007-contact.png` (contact sidebar)

---

### ISSUE-008: Footer workshop link for "Mastering AI Agents" is missing

**Severity:** Low
**Page:** All pages (footer)
**Type:** Content

**Description:** The footer lists 10 workshop links split across "WORKSHOPS" (5 links) and "MORE WORKSHOPS" (5 links) columns. However, there are 11 workshops on the site. The "Mastering AI Agents" workshop (`/workshops/master-agents`) is missing from the footer entirely. All other 10 workshops are linked.

**Steps to Reproduce:**
1. Scroll to the footer on any page
2. Count the workshop links under "WORKSHOPS" and "MORE WORKSHOPS"
3. Observe: 10 workshops listed, "Mastering AI Agents" is absent

**Expected:** All 11 workshops should be linked in the footer
**Actual:** Only 10 workshops linked; "Mastering AI Agents" is missing

**Evidence:**
- Screenshot: `screenshots/footer-links.png`

---

### ISSUE-009: All internal links use paths without trailing slashes, triggering broken redirects

**Severity:** Critical
**Page:** All pages
**Type:** Functional

**Description:** This is a consequence of ISSUE-001. Every internal link on the site (nav links, CTA buttons, footer links, workshop card links) uses paths without trailing slashes (e.g., `/speakers` instead of `/speakers/`). Since nginx redirects these to the wrong port, **every clickable link that navigates within the site is broken**. Specifically affected:

- **Nav bar:** Home, Workshops, Speakers, Program, Contact, Call for Speakers (6 links)
- **Hero CTAs:** "Explore Workshops", "View Speakers" (2 links)
- **Workshop cards:** All 11 "View Details" links from homepage and workshops page
- **Footer:** All 10 workshop links, plus 5 content links, plus 2 legal links
- **Ticket buttons:** "Get Student Pass", "Apply to Volunteer", "Grab Early Bird", "Get Full Pass" (4 links)
- **Program page:** All 11 workshop schedule links

Total: 50+ broken internal links across the site.

**Steps to Reproduce:**
1. Open http://localhost:38952/
2. Click ANY link in the nav bar, hero, footer, or workshop cards
3. Page fails to load (ERR_CONNECTION_REFUSED)

**Expected:** Links should navigate to the correct page
**Actual:** All links trigger a 301 redirect that drops the port, resulting in connection refused

**Evidence:**
- Screenshot: `screenshots/issue-001-redirect.png`
- Root cause: nginx `port_in_redirect` defaults to off, and all `<a href>` values lack trailing slashes

**Note:** This is directly related to ISSUE-001 but is documented separately to highlight the scope of impact across the entire site.

---

