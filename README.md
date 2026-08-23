# Readi Leads website

A lightweight Next.js site for **readileads.com**, designed as a finished first-version web presence for a B2B cold email / outbound business.

## What is intentionally not on the site

There are no:
- client logos
- testimonials
- case studies
- fabricated campaign results
- scarcity claims
- stock photos
- placeholder content

Those can be added later when there is real material worth publishing.

## Run locally

1. Install Node.js 18 or newer.
2. Open this folder in Terminal.
3. Run:

```bash
npm install
npm run dev
```

4. Open `http://localhost:3000`.

## Deploy with GitHub + Vercel

### 1. Create a GitHub repository

Create a new repository, for example:

`readi-leads-site`

Then upload/push all files from this folder.

### 2. Import into Vercel

- Sign in to Vercel.
- Choose **Add New → Project**.
- Import the GitHub repository.
- Vercel should detect Next.js automatically.
- Click **Deploy**.

### 3. Add readileads.com

In the Vercel project:

**Settings → Domains → Add**

Add:

- `readileads.com`
- `www.readileads.com`

Vercel will display the DNS records required for the domain.

### 4. Point Squarespace DNS to Vercel

In Squarespace:

**Domains → readileads.com → DNS Settings**

Enter the DNS records Vercel tells you to use. Do not use an IP address copied from an old tutorial; use the current values shown in the Vercel dashboard.

Once Vercel verifies the records, it will automatically handle HTTPS/SSL.

## Adding the Google Voice number later

There is deliberately no fake or placeholder phone number in the current site.

When the final Google Voice number is ready, add a phone link like:

```html
<a href="tel:+1XXXXXXXXXX">(XXX) XXX-XXXX</a>
```

Good locations:
- top-right header CTA
- final CTA section
- footer

## Content strategy

This version stays broad while Readi Leads tests niches. Once a niche and offer prove out, change:
- hero headline/subhead
- "who it is for"
- examples of targeting
- FAQ
- CTA

Once real evidence exists, add:
- campaign results
- case studies
- client logos
- testimonials

The design is built so those sections can be inserted later without rebuilding the site.
