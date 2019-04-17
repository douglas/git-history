// Duotone Light
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)

var theme /*: PrismTheme */ = {
  plain: {
    backgroundColor: "#fefef9",
    color: "#0044d0"
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: "#b28e44",
      }
    },
    {
      types: ["namespace"],
      style: {
      }
    },
    {
      types: ["tag", "operator", "number"],
      style: {
        color: "#063289",
      }
    },
    {
      types: ["property", "function"],
      style: {
        color: "#ac7a18",
      }
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#2d2006",
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "#805a0f",
      }
    },
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "at-rule"
      ],
      style: {
        color: "#1950c1",
      }
    },
    {
      types: ["placeholder", "variable"],
      style: {
        color: "#1853ca",
      }
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through",
      }
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline",
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      }
    },
    {
      types: ["important"],
      style: {
        color: "#765513",
      }
    }
  ]
};

module.exports = theme;
