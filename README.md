# Interactive question page

A small personal HTML, CSS, and JavaScript interaction exploring button behavior and a playful question flow.

## Status and scope

This is a personal UI exercise, with no backend or data-processing system. It is supplementary design work rather than a flagship software product.

## Run or evaluate

Run a static server from the repository root:

```sh
python -m http.server 4173
```

Open `http://localhost:4173` and select the relevant HTML page or variant directory. No build step is required for plain HTML/CSS/JavaScript. Use a server when scripts fetch local content; opening a file directly can produce different behavior.

## Example workflow

Try the interaction with mouse, touch, and keyboard and inspect its behavior on a narrow viewport.

## Checks

No meaningful automated application check was established from the reviewed manifest. Evaluate the walkthrough with synthetic data and record the commit, environment, and result. For a static site, inspect narrow/wide layouts, keyboard focus, links, forms, and console errors.

## Implementation notes

See the [implementation guide](docs/PROJECT_GUIDE.md) for the code map, configuration boundary, and evidence to capture for a case study.
