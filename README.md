# FOCUS tools

Community reference tools for working with the FinOps Open Cost and Usage Specification (FOCUS). The specification is published at https://focus.finops.org.

## Unofficial

These tools are a personal and community project by Beau Nelford, FOCUS Technical Community Architect, acting in a personal and community capacity. They are not official FOCUS, FinOps Foundation, or Linux Foundation publications, and they do not state a project position. See [DISCLAIMER.md](DISCLAIMER.md).

## Website

The tools are published at https://beau-finopsorg.github.io/focus-tools/. That site is the interactive schema maps (FOCUS 1.0 through 1.5), the version PDFs, the spec compare tool, and the reference architectures, with the unofficial banner on the landing page.

Version 1.5 is a Candidate Release, pending ratification on Dec 3, 2026, and may change. It has no standalone PDF; use the 1.5 tab in the interactive map.

The site is GitHub Pages from the `main` branch, root (`/`) folder. There is no build step: `index.html` is the landing page, and changes pushed to `main` go live as they are.

## What is here

- [Schema maps](schema-maps/FOCUS_Schema_Maps.html): interactive HTML, plus PDFs for specification versions 1.0 through 1.4. The 1.5 sheet is a candidate / pre-release and may change.
- [Reference architectures](reference-architectures/focus-reference-architectures.html).
- [Spec compare](spec-compare/focus-spec-compare.html): word-level diff of any section between two published versions. It reads the specification live from focus.finops.org, so it covers published versions only (1.0 through 1.4, not the 1.5 candidate).
- Later, possibly a column graph.

If a tool and the specification disagree, the specification wins.

## Pre-release material

A schema map for specification version 1.5, if included, is a candidate / pre-release. It is marked that way on the page and in the file name. It may change and is not final.

## Report a tool bug

Open a [tool bug issue](https://github.com/beau-finopsorg/focus-tools/issues/new?template=tool-bug.yml). Say which tool, which version, and how to repeat it.

## Report a schema map correction

Open a [schema map correction issue](https://github.com/beau-finopsorg/focus-tools/issues/new?template=schema-map-correction.yml). Link the part of the specification that shows the right answer. For feedback on the specification itself, use https://focus.finops.org/feedback/.

## Contribute

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Licenses

- Code, scripts, and HTML/JS tools: MIT, Copyright (c) 2026 Beau Nelford.
- Written documentation: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

See [LICENSE-NOTES.md](LICENSE-NOTES.md).

## Sibling repos

- https://github.com/beau-finopsorg/focus-ecosystem: a community link index.
- https://github.com/beau-finopsorg/focus-gap-analyses: dated readings of public vendor documentation.
