---
title: "ISDA SIMM"
description: "The model behind uncleared initial margin"
permalink: /OTC_Learn/product/simm/
---

# ISDA SIMM

*The model behind uncleared initial margin*

ISDA’s Standard Initial Margin Model is how almost every pair of counterparties under the uncleared margin rules computes initial margin. It takes a portfolio’s sensitivities — delta, vega and curvature to defined risk factors — multiplies them by calibrated risk weights, and aggregates them with prescribed correlations, first within buckets, then across buckets, risk classes and product classes. Because both sides use the same model on the same trades, their two numbers ought to be close, which is what makes daily two-way margining workable at all.

[Open in the app](/OTC_Learn/) · [Risk & the Greeks](/OTC_Learn/category/risk/) · advanced

Risk & the Greeks is part of the OTC Learn subscription. Everything the app shipped with — 36 products across six asset classes — stays free.

## What the lesson covers

1. What it is
2. How it works
3. Why it’s used
4. Aggregation across classes
5. Risks to watch

## Key terms

- **SIMM** — ISDA’s Standard Initial Margin Model, a sensitivities-based calculation of initial margin for uncleared derivatives.
- **CRIF** — Common Risk Interchange Format, the standard file of sensitivities that feeds SIMM and is exchanged between counterparties.
- **Risk weight** — The calibrated multiplier that turns a sensitivity into a weighted sensitivity, reflecting the factor’s 10-day stress move.
- **Bucket** — The grouping within a risk class — a currency, a credit sector, an equity sector — inside which sensitivities are first aggregated.
- **Concentration threshold** — The size above which a bucket’s weighted sensitivities are scaled up to reflect the cost of liquidating a large position.
- **Product class** — One of four groupings — rates and FX, credit, equity, commodity — whose margins are summed without diversification.

[Every key term, A to Z](/OTC_Learn/glossary/)

## In practice

Dealers and in-scope buy-side firms compute SIMM daily, exchange CRIFs or IM amounts with each counterparty, and reconcile the differences. Many smaller firms buy the calculation from a vendor; the largest run it in-house so that IM can feed pre-trade pricing as margin valuation adjustment.

## Read next

- [The Uncleared Margin Rules](/OTC_Learn/product/umr/) — Who must post initial margin, and when
- [DV01 and Rate Risk](/OTC_Learn/product/dv01/) — What one basis point is worth
- [Vega and the Volatility Surface](/OTC_Learn/product/vega/) — What a book loses when volatility reprices

In the app, ISDA SIMM carries a five-step lesson, a worked example and a bank of twelve questions drawn differently every sitting.

[Get OTC Learn on Google Play](/OTC_Learn/get/?c=web)

Educational content only. Nothing here is financial advice, an offer to trade, or a recommendation to buy or sell any instrument.

<script type="application/ld+json">
[
  {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "ISDA SIMM",
    "description": "The model behind uncleared initial margin",
    "abstract": "ISDA’s Standard Initial Margin Model is how almost every pair of counterparties under the uncleared margin rules computes initial margin. It takes a portfolio’s sensitivities — delta, vega and curvature to defined risk factors — multiplies them by calibrated risk weights, and aggregates them with prescribed correlations, first within buckets, then across buckets, risk classes and product classes. Because both sides use the same model on the same trades, their two numbers ought to be close, which is what makes daily two-way margining workable at all.",
    "articleSection": "Risk & the Greeks",
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "mainEntityOfPage": "https://singhalsachin2003.github.io/OTC_Learn/product/simm/",
    "url": "https://singhalsachin2003.github.io/OTC_Learn/product/simm/",
    "author": {
      "@type": "Person",
      "name": "Sachin Singhal"
    },
    "publisher": {
      "@type": "Person",
      "name": "Sachin Singhal"
    },
    "about": {
      "@type": "DefinedTerm",
      "name": "ISDA SIMM",
      "description": "The model behind uncleared initial margin",
      "inDefinedTermSet": "https://singhalsachin2003.github.io/OTC_Learn/category/risk/"
    },
    "proficiencyLevel": "advanced"
  },
  {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "ISDA SIMM — key terms",
    "url": "https://singhalsachin2003.github.io/OTC_Learn/product/simm/",
    "inLanguage": "en",
    "hasDefinedTerm": [
      {
        "@type": "DefinedTerm",
        "name": "SIMM",
        "description": "ISDA’s Standard Initial Margin Model, a sensitivities-based calculation of initial margin for uncleared derivatives.",
        "inDefinedTermSet": "https://singhalsachin2003.github.io/OTC_Learn/category/risk/"
      },
      {
        "@type": "DefinedTerm",
        "name": "CRIF",
        "description": "Common Risk Interchange Format, the standard file of sensitivities that feeds SIMM and is exchanged between counterparties.",
        "inDefinedTermSet": "https://singhalsachin2003.github.io/OTC_Learn/category/risk/"
      },
      {
        "@type": "DefinedTerm",
        "name": "Risk weight",
        "description": "The calibrated multiplier that turns a sensitivity into a weighted sensitivity, reflecting the factor’s 10-day stress move.",
        "inDefinedTermSet": "https://singhalsachin2003.github.io/OTC_Learn/category/risk/"
      },
      {
        "@type": "DefinedTerm",
        "name": "Bucket",
        "description": "The grouping within a risk class — a currency, a credit sector, an equity sector — inside which sensitivities are first aggregated.",
        "inDefinedTermSet": "https://singhalsachin2003.github.io/OTC_Learn/category/risk/"
      },
      {
        "@type": "DefinedTerm",
        "name": "Concentration threshold",
        "description": "The size above which a bucket’s weighted sensitivities are scaled up to reflect the cost of liquidating a large position.",
        "inDefinedTermSet": "https://singhalsachin2003.github.io/OTC_Learn/category/risk/"
      },
      {
        "@type": "DefinedTerm",
        "name": "Product class",
        "description": "One of four groupings — rates and FX, credit, equity, commodity — whose margins are summed without diversification.",
        "inDefinedTermSet": "https://singhalsachin2003.github.io/OTC_Learn/category/risk/"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "OTC Learn",
        "item": "https://singhalsachin2003.github.io/OTC_Learn/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Risk & the Greeks",
        "item": "https://singhalsachin2003.github.io/OTC_Learn/category/risk/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "ISDA SIMM",
        "item": "https://singhalsachin2003.github.io/OTC_Learn/product/simm/"
      }
    ]
  }
]
</script>
