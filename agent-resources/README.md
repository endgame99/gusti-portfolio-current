# Agent Resources

This directory keeps optional agent material out of the repository root. Nothing here is automatically authoritative.

## Usage order

1. Follow the current user request.
2. Follow `AGENTS.md`.
3. For UI work, follow `UI_GUIDELINES.md`.
4. Load only the task-specific reference needed from this directory.

## References

### Behance

- `references/behance/UI_SPEC.md`: curated design-system notes derived from the captured CSS.
- `references/behance/css/clean/`: readable, reduced CSS evidence.
- `references/behance/css/raw/`: original captured CSS evidence; preserve as read-only provenance.

### Ecommerce

- `references/ecommerce/marketplace-display.md`: marketplace display structure.
- `references/ecommerce/sku-selector.md`: PDP SKU selector structure.
- `references/ecommerce/taobao-product-detail.md`: Taobao-derived product-detail structure for Contoura only.

### ZCOOL

- `references/zcool/work-detail.html`: cleaned external work-detail capture.
- `references/zcool/work-detail-media.json`: media manifest for that capture.

External references provide layout and interaction evidence only. Do not copy branding, claims, prices, metrics, customer data, or external media into production without explicit approval.

## Legacy prompts

`legacy-prompts/design-ui-designer.md` is historical generic prompt material. It is not a Codex skill, is not loaded by default, and must not override `AGENTS.md` or `UI_GUIDELINES.md`. It is retained only for provenance.
