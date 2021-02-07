import { JSONSchemaV4 } from "../../platform/deno/schemaValidate.ts";

export const eslintRcSchema: JSONSchemaV4 = {
  "title": "JSON schema for ESLint configuration files",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "definitions": {
    "rule": {
      "oneOf": [
        {
          "description":
            "ESLint rule\n\n0 - turns the rule off\n1 - turn the rule on as a warning (doesn't affect exit code)\n2 - turn the rule on as an error (exit code is 1 when triggered)\n",
          "type": "integer",
          "minimum": 0,
          "maximum": 2,
        },
        {
          "description":
            'ESLint rule\n\n"off" - turns the rule off\n"warn" - turn the rule on as a warning (doesn\'t affect exit code)\n"error" - turn the rule on as an error (exit code is 1 when triggered)\n',
          "type": "string",
          "enum": [
            "off",
            "warn",
            "error",
          ],
        },
        {
          "type": "array",
        },
      ],
    },
    "possibleErrors": {
      "properties": {
        "comma-dangle": {
          "$ref": "#/definitions/rule",
          "description": "Require or disallow trailing commas",
        },
        "for-direction": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce “for” loop update clause moving the counter in the right direction",
        },
        "getter-return": {
          "$ref": "#/definitions/rule",
          "description": "Enforce return statements in getters",
        },
        "no-await-in-loop": {
          "$ref": "#/definitions/rule",
          "description": "Disallow await inside of loops",
        },
        "no-compare-neg-zero": {
          "$ref": "#/definitions/rule",
          "description": "Disallow comparing against -0",
        },
        "no-cond-assign": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow assignment operators in conditional expressions",
        },
        "no-console": {
          "$ref": "#/definitions/rule",
          "description": "Disallow the use of console",
        },
        "no-constant-condition": {
          "$ref": "#/definitions/rule",
          "description": "Disallow constant expressions in conditions",
        },
        "no-control-regex": {
          "$ref": "#/definitions/rule",
          "description": "Disallow control characters in regular expressions",
        },
        "no-debugger": {
          "$ref": "#/definitions/rule",
          "description": "Disallow the use of debugger",
        },
        "no-dupe-args": {
          "$ref": "#/definitions/rule",
          "description": "Disallow duplicate arguments in function definitions",
        },
        "no-dupe-keys": {
          "$ref": "#/definitions/rule",
          "description": "Disallow duplicate keys in object literals",
        },
        "no-duplicate-case": {
          "$ref": "#/definitions/rule",
          "description": "Disallow duplicate case labels",
        },
        "no-empty": {
          "$ref": "#/definitions/rule",
          "description": "Disallow empty block statements",
        },
        "no-empty-character-class": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow empty character classes in regular expressions",
        },
        "no-ex-assign": {
          "$ref": "#/definitions/rule",
          "description": "Disallow reassigning exceptions in catch clauses",
        },
        "no-extra-boolean-cast": {
          "$ref": "#/definitions/rule",
          "description": "Disallow unnecessary boolean casts",
        },
        "no-extra-parens": {
          "$ref": "#/definitions/rule",
          "description": "Disallow unnecessary parentheses",
        },
        "no-extra-semi": {
          "$ref": "#/definitions/rule",
          "description": "Disallow unnecessary semicolons",
        },
        "no-func-assign": {
          "$ref": "#/definitions/rule",
          "description": "Disallow reassigning function declarations",
        },
        "no-inner-declarations": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow function or var declarations in nested blocks",
        },
        "no-invalid-regexp": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow invalid regular expression strings in RegExp constructors",
        },
        "no-irregular-whitespace": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow irregular whitespace outside of strings and comments",
        },
        "no-negated-in-lhs": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow negating the left operand in in expressions (deprecated)",
        },
        "no-obj-calls": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow calling global object properties as functions",
        },
        "no-prototype-builtins": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow calling some Object.prototype methods directly on objects",
        },
        "no-regex-spaces": {
          "$ref": "#/definitions/rule",
          "description": "Disallow multiple spaces in regular expressions",
        },
        "no-sparse-arrays": {
          "$ref": "#/definitions/rule",
          "description": "Disallow sparse arrays",
        },
        "no-template-curly-in-string": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow template literal placeholder syntax in regular strings",
        },
        "no-unexpected-multiline": {
          "$ref": "#/definitions/rule",
          "description": "Disallow confusing multiline expressions",
        },
        "no-unreachable": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow unreachable code after return, throw, continue, and break statements",
        },
        "no-unsafe-finally": {
          "$ref": "#/definitions/rule",
          "description": "Disallow control flow statements in finally blocks",
        },
        "no-unsafe-negation": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow negating the left operand of relational operators",
        },
        "use-isnan": {
          "$ref": "#/definitions/rule",
          "description": "Require calls to isNaN() when checking for NaN",
        },
        "valid-jsdoc": {
          "$ref": "#/definitions/rule",
          "description": "Enforce valid JSDoc comments",
        },
        "valid-typeof": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce comparing typeof expressions against valid strings",
        },
      },
    },
    "bestPractices": {
      "properties": {
        "accessor-pairs": {
          "$ref": "#/definitions/rule",
          "description": "Enforce getter and setter pairs in objects",
        },
        "array-callback-return": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce return statements in callbacks of array methods",
        },
        "block-scoped-var": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce the use of variables within the scope they are defined",
        },
        "class-methods-use-this": {
          "$ref": "#/definitions/rule",
          "description": "Enforce that class methods utilize this",
        },
        "complexity": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce a maximum cyclomatic complexity allowed in a program",
        },
        "consistent-return": {
          "$ref": "#/definitions/rule",
          "description":
            "Require return statements to either always or never specify values",
        },
        "curly": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce consistent brace style for all control statements",
        },
        "default-case": {
          "$ref": "#/definitions/rule",
          "description": "Require default cases in switch statements",
        },
        "dot-location": {
          "$ref": "#/definitions/rule",
          "description": "Enforce consistent newlines before and after dots",
        },
        "dot-notation": {
          "$ref": "#/definitions/rule",
          "description": "Enforce dot notation whenever possible",
        },
        "eqeqeq": {
          "$ref": "#/definitions/rule",
          "description": "Require the use of === and !==",
        },
        "guard-for-in": {
          "$ref": "#/definitions/rule",
          "description": "Require for-in loops to include an if statement",
        },
        "no-alert": {
          "$ref": "#/definitions/rule",
          "description": "Disallow the use of alert, confirm, and prompt",
        },
        "no-caller": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow the use of arguments.caller or arguments.callee",
        },
        "no-case-declarations": {
          "$ref": "#/definitions/rule",
          "description": "Disallow lexical declarations in case clauses",
        },
        "no-div-regex": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow division operators explicitly at the beginning of regular expressions",
        },
        "no-else-return": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow else blocks after return statements in if statements",
        },
        "no-empty-function": {
          "$ref": "#/definitions/rule",
          "description": "Disallow empty functions",
        },
        "no-empty-pattern": {
          "$ref": "#/definitions/rule",
          "description": "Disallow empty destructuring patterns",
        },
        "no-eq-null": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow null comparisons without type-checking operators",
        },
        "no-eval": {
          "$ref": "#/definitions/rule",
          "description": "Disallow the use of eval()",
        },
        "no-extend-native": {
          "$ref": "#/definitions/rule",
          "description": "Disallow extending native types",
        },
        "no-extra-bind": {
          "$ref": "#/definitions/rule",
          "description": "Disallow unnecessary calls to .bind()",
        },
        "no-extra-label": {
          "$ref": "#/definitions/rule",
          "description": "Disallow unnecessary labels",
        },
        "no-fallthrough": {
          "$ref": "#/definitions/rule",
          "description": "Disallow fallthrough of case statements",
        },
        "no-floating-decimal": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow leading or trailing decimal points in numeric literals",
        },
        "no-global-assign": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow assignments to native objects or read-only global variables",
        },
        "no-implicit-coercion": {
          "$ref": "#/definitions/rule",
          "description": "Disallow shorthand type conversions",
        },
        "no-implicit-globals": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow var and named function declarations in the global scope",
        },
        "no-implied-eval": {
          "$ref": "#/definitions/rule",
          "description": "Disallow the use of eval()-like methods",
        },
        "no-invalid-this": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow this keywords outside of classes or class-like objects",
        },
        "no-iterator": {
          "$ref": "#/definitions/rule",
          "description": "Disallow the use of the __iterator__ property",
        },
        "no-labels": {
          "$ref": "#/definitions/rule",
          "description": "Disallow labeled statements",
        },
        "no-lone-blocks": {
          "$ref": "#/definitions/rule",
          "description": "Disallow unnecessary nested blocks",
        },
        "no-loop-func": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow function declarations and expressions inside loop statements",
        },
        "no-magic-numbers": {
          "$ref": "#/definitions/rule",
          "description": "Disallow magic numbers",
        },
        "no-multi-spaces": {
          "$ref": "#/definitions/rule",
          "description": "Disallow multiple spaces",
        },
        "no-multi-str": {
          "$ref": "#/definitions/rule",
          "description": "Disallow multiline strings",
        },
        "no-native-reassign": { "$ref": "#/definitions/rule" },
        "no-new": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow new operators outside of assignments or comparisons",
        },
        "no-new-func": {
          "$ref": "#/definitions/rule",
          "description": "Disallow new operators with the Function object",
        },
        "no-new-wrappers": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow new operators with the String, Number, and Boolean objects",
        },
        "no-octal": {
          "$ref": "#/definitions/rule",
          "description": "Disallow octal literals",
        },
        "no-octal-escape": {
          "$ref": "#/definitions/rule",
          "description": "Disallow octal escape sequences in string literals",
        },
        "no-param-reassign": {
          "$ref": "#/definitions/rule",
          "description": "Disallow reassigning function parameters",
        },
        "no-proto": {
          "$ref": "#/definitions/rule",
          "description": "Disallow the use of the __proto__ property",
        },
        "no-redeclare": {
          "$ref": "#/definitions/rule",
          "description": "Disallow var redeclaration",
        },
        "no-restricted-properties": {
          "$ref": "#/definitions/rule",
          "description": "Disallow certain properties on certain objects",
        },
        "no-return-assign": {
          "$ref": "#/definitions/rule",
          "description": "Disallow assignment operators in return statements",
        },
        "no-return-await": {
          "$ref": "#/definitions/rule",
          "description": "Disallow unnecessary return await",
        },
        "no-script-url": {
          "$ref": "#/definitions/rule",
          "description": "Disallow javascript: urls",
        },
        "no-self-assign": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow assignments where both sides are exactly the same",
        },
        "no-self-compare": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow comparisons where both sides are exactly the same",
        },
        "no-sequences": {
          "$ref": "#/definitions/rule",
          "description": "Disallow comma operators",
        },
        "no-throw-literal": {
          "$ref": "#/definitions/rule",
          "description": "Disallow throwing literals as exceptions",
        },
        "no-unmodified-loop-condition": {
          "$ref": "#/definitions/rule",
          "description": "Disallow unmodified loop conditions",
        },
        "no-unused-expressions": {
          "$ref": "#/definitions/rule",
          "description": "Disallow unused expressions",
        },
        "no-unused-labels": {
          "$ref": "#/definitions/rule",
          "description": "Disallow unused labels",
        },
        "no-useless-call": {
          "$ref": "#/definitions/rule",
          "description": "Disallow unnecessary calls to .call() and .apply()",
        },
        "no-useless-concat": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow unnecessary concatenation of literals or template literals",
        },
        "no-useless-escape": {
          "$ref": "#/definitions/rule",
          "description": "Disallow unnecessary escape characters",
        },
        "no-useless-return": {
          "$ref": "#/definitions/rule",
          "description": "Disallow redundant return statements",
        },
        "no-void": {
          "$ref": "#/definitions/rule",
          "description": "Disallow void operators",
        },
        "no-warning-comments": {
          "$ref": "#/definitions/rule",
          "description": "Disallow specified warning terms in comments",
        },
        "no-with": {
          "$ref": "#/definitions/rule",
          "description": "Disallow with statements",
        },
        "prefer-promise-reject-errors": {
          "$ref": "#/definitions/rule",
          "description":
            "Require using Error objects as Promise rejection reasons",
        },
        "radix": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce the consistent use of the radix argument when using parseInt()",
        },
        "require-await": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow async functions which have no await expression",
        },
        "vars-on-top": {
          "$ref": "#/definitions/rule",
          "description":
            "Require var declarations be placed at the top of their containing scope",
        },
        "wrap-iife": {
          "$ref": "#/definitions/rule",
          "description":
            "Require parentheses around immediate function invocations",
        },
        "yoda": {
          "$ref": "#/definitions/rule",
          "description": "Require or Disallow “Yoda” conditions",
        },
      },
    },
    "strictMode": {
      "properties": {
        "strict": {
          "$ref": "#/definitions/rule",
          "description": "require or disallow strict mode directives",
        },
      },
    },
    "variables": {
      "properties": {
        "init-declarations": {
          "$ref": "#/definitions/rule",
          "description":
            "Require or disallow initialization in var declarations",
        },
        "no-catch-shadow": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow catch clause parameters from shadowing variables in the outer scope",
        },
        "no-delete-var": {
          "$ref": "#/definitions/rule",
          "description": "Disallow deleting variables",
        },
        "no-label-var": {
          "$ref": "#/definitions/rule",
          "description": "Disallow labels that share a name with a variable",
        },
        "no-restricted-globals": {
          "$ref": "#/definitions/rule",
          "description": "Disallow specified global variables",
        },
        "no-shadow": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow var declarations from shadowing variables in the outer scope",
        },
        "no-shadow-restricted-names": {
          "$ref": "#/definitions/rule",
          "description": "Disallow identifiers from shadowing restricted names",
        },
        "no-undef": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow the use of undeclared variables unless mentioned in /*global */ comments",
        },
        "no-undefined": {
          "$ref": "#/definitions/rule",
          "description": "Disallow the use of undefined as an identifier",
        },
        "no-undef-init": {
          "$ref": "#/definitions/rule",
          "description": "Disallow initializing variables to undefined",
        },
        "no-unused-vars": {
          "$ref": "#/definitions/rule",
          "description": "Disallow unused variables",
        },
        "no-use-before-define": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow the use of variables before they are defined",
        },
      },
    },
    "nodeAndCommonJs": {
      "properties": {
        "callback-return": {
          "$ref": "#/definitions/rule",
          "description": "Require return statements after callbacks",
        },
        "global-require": {
          "$ref": "#/definitions/rule",
          "description":
            "Require require() calls to be placed at top-level module scope",
        },
        "handle-callback-err": {
          "$ref": "#/definitions/rule",
          "description": "Require error handling in callbacks",
        },
        "no-buffer-constructor": {
          "$ref": "#/definitions/rule",
          "description": "Disallow use of the Buffer() constructor",
        },
        "no-mixed-requires": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow require calls to be mixed with regular var declarations",
        },
        "no-new-require": {
          "$ref": "#/definitions/rule",
          "description": "Disallow new operators with calls to require",
        },
        "no-path-concat": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow string concatenation with __dirname and __filename",
        },
        "no-process-env": {
          "$ref": "#/definitions/rule",
          "description": "Disallow the use of process.env",
        },
        "no-process-exit": {
          "$ref": "#/definitions/rule",
          "description": "Disallow the use of process.exit()",
        },
        "no-restricted-modules": {
          "$ref": "#/definitions/rule",
          "description": "Disallow specified modules when loaded by require",
        },
        "no-sync": {
          "$ref": "#/definitions/rule",
          "description": "Disallow synchronous methods",
        },
      },
    },
    "stylisticIssues": {
      "properties": {
        "array-bracket-newline": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce line breaks after opening and before closing array brackets",
        },
        "array-bracket-spacing": {
          "$ref": "#/definitions/rule",
          "description": "Enforce consistent spacing inside array brackets",
        },
        "array-element-newline": {
          "$ref": "#/definitions/rule",
          "description": "Enforce line breaks after each array element",
        },
        "block-spacing": {
          "$ref": "#/definitions/rule",
          "description": "Enforce consistent spacing inside single-line blocks",
        },
        "brace-style": {
          "$ref": "#/definitions/rule",
          "description": "Enforce consistent brace style for blocks",
        },
        "camelcase": {
          "$ref": "#/definitions/rule",
          "description": "Enforce camelcase naming convention",
        },
        "capitalized-comments": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce or disallow capitalization of the first letter of a comment",
        },
        "comma-dangle": {
          "$ref": "#/definitions/rule",
          "description": "Require or disallow trailing commas",
        },
        "comma-spacing": {
          "$ref": "#/definitions/rule",
          "description": "Enforce consistent spacing before and after commas",
        },
        "comma-style": {
          "$ref": "#/definitions/rule",
          "description": "Enforce consistent comma style",
        },
        "computed-property-spacing": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce consistent spacing inside computed property brackets",
        },
        "consistent-this": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce consistent naming when capturing the current execution context",
        },
        "eol-last": {
          "$ref": "#/definitions/rule",
          "description": "Enforce at least one newline at the end of files",
        },
        "func-call-spacing": {
          "$ref": "#/definitions/rule",
          "description":
            "Require or disallow spacing between function identifiers and their invocations",
        },
        "func-name-matching": {
          "$ref": "#/definitions/rule",
          "description":
            "Require function names to match the name of the variable or property to which they are assigned",
        },
        "func-names": {
          "$ref": "#/definitions/rule",
          "description": "Require or disallow named function expressions",
        },
        "func-style": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce the consistent use of either function declarations or expressions",
        },
        "function-call-argument-newline": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce line breaks between arguments of a function call",
        },
        "function-paren-newline": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce consistent line breaks inside function parentheses",
        },
        "id-blacklist": {
          "$ref": "#/definitions/rule",
          "description": "Disallow specified identifiers",
        },
        "id-length": {
          "$ref": "#/definitions/rule",
          "description": "Enforce minimum and maximum identifier lengths",
        },
        "id-match": {
          "$ref": "#/definitions/rule",
          "description":
            "Require identifiers to match a specified regular expression",
        },
        "implicit-arrow-linebreak": {
          "$ref": "#/definitions/rule",
          "description": "Enforce the location of arrow function bodies",
        },
        "indent": {
          "$ref": "#/definitions/rule",
          "description": "Enforce consistent indentation",
        },
        "indent-legacy": {
          "$ref": "#/definitions/rule",
          "description": "Enforce consistent indentation (legacy, deprecated)",
        },
        "jsx-quotes": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce the consistent use of either double or single quotes in JSX attributes",
        },
        "key-spacing": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce consistent spacing between keys and values in object literal properties",
        },
        "keyword-spacing": {
          "$ref": "#/definitions/rule",
          "description": "Enforce consistent spacing before and after keywords",
        },
        "line-comment-position": {
          "$ref": "#/definitions/rule",
          "description": "Enforce position of line comments",
        },
        "lines-between-class-members": {
          "$ref": "#/definitions/rule",
          "description":
            "Require or disallow an empty line between class members",
        },
        "linebreak-style": {
          "$ref": "#/definitions/rule",
          "description": "Enforce consistent linebreak style",
        },
        "lines-around-comment": {
          "$ref": "#/definitions/rule",
          "description": "Require empty lines around comments",
        },
        "lines-around-directive": {
          "$ref": "#/definitions/rule",
          "description": "Require or disallow newlines around directives",
        },
        "max-depth": {
          "$ref": "#/definitions/rule",
          "description": "Enforce a maximum depth that blocks can be nested",
        },
        "max-len": {
          "$ref": "#/definitions/rule",
          "description": "Enforce a maximum line length",
        },
        "max-lines": {
          "$ref": "#/definitions/rule",
          "description": "Enforce a maximum number of lines per file",
        },
        "max-nested-callbacks": {
          "$ref": "#/definitions/rule",
          "description": "Enforce a maximum depth that callbacks can be nested",
        },
        "max-params": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce a maximum number of parameters in function definitions",
        },
        "max-statements": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce a maximum number of statements allowed in function blocks",
        },
        "max-statements-per-line": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce a maximum number of statements allowed per line",
        },
        "multiline-comment-style": {
          "$ref": "#/definitions/rule",
          "description": "Enforce a particular style for multiline comments",
        },
        "multiline-ternary": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce newlines between operands of ternary expressions",
        },
        "new-cap": {
          "$ref": "#/definitions/rule",
          "description":
            "Require constructor function names to begin with a capital letter",
        },
        "newline-after-var": {
          "$ref": "#/definitions/rule",
          "description":
            "Require or disallow an empty line after var declarations",
        },
        "newline-before-return": {
          "$ref": "#/definitions/rule",
          "description": "Require an empty line before return statements",
        },
        "newline-per-chained-call": {
          "$ref": "#/definitions/rule",
          "description": "Require a newline after each call in a method chain",
        },
        "new-parens": {
          "$ref": "#/definitions/rule",
          "description":
            "Require parentheses when invoking a constructor with no arguments",
        },
        "no-array-constructor": {
          "$ref": "#/definitions/rule",
          "description": "Disallow Array constructors",
        },
        "no-bitwise": {
          "$ref": "#/definitions/rule",
          "description": "Disallow bitwise operators",
        },
        "no-continue": {
          "$ref": "#/definitions/rule",
          "description": "Disallow continue statements",
        },
        "no-inline-comments": {
          "$ref": "#/definitions/rule",
          "description": "Disallow inline comments after code",
        },
        "no-lonely-if": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow if statements as the only statement in else blocks",
        },
        "no-mixed-operators": {
          "$ref": "#/definitions/rule",
          "description": "Disallow mixed binary operators",
        },
        "no-mixed-spaces-and-tabs": {
          "$ref": "#/definitions/rule",
          "description": "Disallow mixed spaces and tabs for indentation",
        },
        "no-multi-assign": {
          "$ref": "#/definitions/rule",
          "description": "Disallow use of chained assignment expressions",
        },
        "no-multiple-empty-lines": {
          "$ref": "#/definitions/rule",
          "description": "Disallow multiple empty lines",
        },
        "no-negated-condition": {
          "$ref": "#/definitions/rule",
          "description": "Disallow negated conditions",
        },
        "no-nested-ternary": {
          "$ref": "#/definitions/rule",
          "description": "Disallow nested ternary expressions",
        },
        "no-new-object": {
          "$ref": "#/definitions/rule",
          "description": "Disallow Object constructors",
        },
        "no-plusplus": {
          "$ref": "#/definitions/rule",
          "description": "Disallow the unary operators ++ and --",
        },
        "no-restricted-syntax": {
          "$ref": "#/definitions/rule",
          "description": "Disallow specified syntax",
        },
        "no-spaced-func": { "$ref": "#/definitions/rule" },
        "no-tabs": {
          "$ref": "#/definitions/rule",
          "description": "Disallow tabs in file",
        },
        "no-ternary": {
          "$ref": "#/definitions/rule",
          "description": "Disallow ternary operators",
        },
        "no-trailing-spaces": {
          "$ref": "#/definitions/rule",
          "description": "Disallow trailing whitespace at the end of lines",
        },
        "no-underscore-dangle": {
          "$ref": "#/definitions/rule",
          "description": "Disallow dangling underscores in identifiers",
        },
        "no-unneeded-ternary": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow ternary operators when simpler alternatives exist",
        },
        "no-whitespace-before-property": {
          "$ref": "#/definitions/rule",
          "description": "Disallow whitespace before properties",
        },
        "nonblock-statement-body-position": {
          "$ref": "#/definitions/rule",
          "description": "Enforce the location of single-line statements",
        },
        "object-curly-newline": {
          "$ref": "#/definitions/rule",
          "description": "Enforce consistent line breaks inside braces",
        },
        "object-curly-spacing": {
          "$ref": "#/definitions/rule",
          "description": "Enforce consistent spacing inside braces",
        },
        "object-property-newline": {
          "$ref": "#/definitions/rule",
          "description": "Enforce placing object properties on separate lines",
        },
        "object-shorthand": { "$ref": "#/definitions/rule" },
        "one-var": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce variables to be declared either together or separately in functions",
        },
        "one-var-declaration-per-line": {
          "$ref": "#/definitions/rule",
          "description": "Require or disallow newlines around var declarations",
        },
        "operator-assignment": {
          "$ref": "#/definitions/rule",
          "description":
            "Require or disallow assignment operator shorthand where possible",
        },
        "operator-linebreak": {
          "$ref": "#/definitions/rule",
          "description": "Enforce consistent linebreak style for operators",
        },
        "padded-blocks": {
          "$ref": "#/definitions/rule",
          "description": "Require or disallow padding within blocks",
        },
        "padding-line-between-statements": {
          "$ref": "#/definitions/rule",
          "description": "Require or disallow padding lines between statements",
        },
        "quote-props": {
          "$ref": "#/definitions/rule",
          "description": "Require quotes around object literal property names",
        },
        "quotes": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce the consistent use of either backticks, double, or single quotes",
        },
        "require-jsdoc": {
          "$ref": "#/definitions/rule",
          "description": "Require JSDoc comments",
        },
        "semi": {
          "$ref": "#/definitions/rule",
          "description": "Require or disallow semicolons instead of ASI",
        },
        "semi-spacing": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce consistent spacing before and after semicolons",
        },
        "semi-style": {
          "$ref": "#/definitions/rule",
          "description": "Enforce location of semicolons",
        },
        "sort-keys": {
          "$ref": "#/definitions/rule",
          "description": "Requires object keys to be sorted",
        },
        "sort-vars": {
          "$ref": "#/definitions/rule",
          "description":
            "Require variables within the same declaration block to be sorted",
        },
        "space-before-blocks": {
          "$ref": "#/definitions/rule",
          "description": "Enforce consistent spacing before blocks",
        },
        "space-before-function-paren": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce consistent spacing before function definition opening parenthesis",
        },
        "spaced-comment": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce consistent spacing after the // or /* in a comment",
        },
        "space-infix-ops": {
          "$ref": "#/definitions/rule",
          "description": "Require spacing around operators",
        },
        "space-in-parens": {
          "$ref": "#/definitions/rule",
          "description": "Enforce consistent spacing inside parentheses",
        },
        "space-unary-ops": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce consistent spacing before or after unary operators",
        },
        "switch-colon-spacing": {
          "$ref": "#/definitions/rule",
          "description": "Enforce spacing around colons of switch statements",
        },
        "template-tag-spacing": {
          "$ref": "#/definitions/rule",
          "description":
            "Require or disallow spacing between template tags and their literals",
        },
        "unicode-bom": {
          "$ref": "#/definitions/rule",
          "description": "Require or disallow Unicode byte order mark (BOM)",
        },
        "wrap-regex": {
          "$ref": "#/definitions/rule",
          "description": "Require parenthesis around regex literals",
        },
      },
    },
    "ecmaScript6": {
      "properties": {
        "arrow-body-style": {
          "$ref": "#/definitions/rule",
          "description": "Require braces around arrow function bodies",
        },
        "arrow-parens": {
          "$ref": "#/definitions/rule",
          "description": "Require parentheses around arrow function arguments",
        },
        "arrow-spacing": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce consistent spacing before and after the arrow in arrow functions",
        },
        "constructor-super": {
          "$ref": "#/definitions/rule",
          "description": "Require super() calls in constructors",
        },
        "generator-star-spacing": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce consistent spacing around * operators in generator functions",
        },
        "no-class-assign": {
          "$ref": "#/definitions/rule",
          "description": "Disallow reassigning class members",
        },
        "no-confusing-arrow": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow arrow functions where they could be confused with comparisons",
        },
        "no-const-assign": {
          "$ref": "#/definitions/rule",
          "description": "Disallow reassigning const variables",
        },
        "no-dupe-class-members": {
          "$ref": "#/definitions/rule",
          "description": "Disallow duplicate class members",
        },
        "no-duplicate-imports": {
          "$ref": "#/definitions/rule",
          "description": "Disallow duplicate module imports",
        },
        "no-new-symbol": {
          "$ref": "#/definitions/rule",
          "description": "Disallow new operators with the Symbol object",
        },
        "no-restricted-imports": {
          "$ref": "#/definitions/rule",
          "description": "Disallow specified modules when loaded by import",
        },
        "no-this-before-super": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow this/super before calling super() in constructors",
        },
        "no-useless-computed-key": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow unnecessary computed property keys in object literals",
        },
        "no-useless-constructor": {
          "$ref": "#/definitions/rule",
          "description": "Disallow unnecessary constructors",
        },
        "no-useless-rename": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow renaming import, export, and destructured assignments to the same name",
        },
        "no-var": {
          "$ref": "#/definitions/rule",
          "description": "Require let or const instead of var",
        },
        "object-shorthand": {
          "$ref": "#/definitions/rule",
          "description":
            "Require or disallow method and property shorthand syntax for object literals",
        },
        "prefer-arrow-callback": {
          "$ref": "#/definitions/rule",
          "description": "Require arrow functions as callbacks",
        },
        "prefer-const": {
          "$ref": "#/definitions/rule",
          "description":
            "Require const declarations for variables that are never reassigned after declared",
        },
        "prefer-destructuring": {
          "$ref": "#/definitions/rule",
          "description": "Require destructuring from arrays and/or objects",
        },
        "prefer-numeric-literals": {
          "$ref": "#/definitions/rule",
          "description":
            "Disallow parseInt() in favor of binary, octal, and hexadecimal literals",
        },
        "prefer-reflect": {
          "$ref": "#/definitions/rule",
          "description": "Require Reflect methods where applicable",
        },
        "prefer-rest-params": {
          "$ref": "#/definitions/rule",
          "description": "Require rest parameters instead of arguments",
        },
        "prefer-spread": {
          "$ref": "#/definitions/rule",
          "description": "Require spread operators instead of .apply()",
        },
        "prefer-template": {
          "$ref": "#/definitions/rule",
          "description":
            "Require template literals instead of string concatenation",
        },
        "require-yield": {
          "$ref": "#/definitions/rule",
          "description": "Require generator functions to contain yield",
        },
        "rest-spread-spacing": {
          "$ref": "#/definitions/rule",
          "description":
            "Enforce spacing between rest and spread operators and their expressions",
        },
        "sort-imports": {
          "$ref": "#/definitions/rule",
          "description": "Enforce sorted import declarations within modules",
        },
        "symbol-description": {
          "$ref": "#/definitions/rule",
          "description": "Require symbol descriptions",
        },
        "template-curly-spacing": {
          "$ref": "#/definitions/rule",
          "description":
            "Require or disallow spacing around embedded expressions of template strings",
        },
        "yield-star-spacing": {
          "$ref": "#/definitions/rule",
          "description":
            "Require or disallow spacing around the * in yield* expressions",
        },
      },
    },
    "legacy": {
      "properties": {
        "max-depth": { "$ref": "#/definitions/rule" },
        "max-len": { "$ref": "#/definitions/rule" },
        "max-params": { "$ref": "#/definitions/rule" },
        "max-statements": { "$ref": "#/definitions/rule" },
        "no-bitwise": { "$ref": "#/definitions/rule" },
        "no-plusplus": { "$ref": "#/definitions/rule" },
      },
    },
  },

  "properties": {
    "ecmaFeatures": {
      "description":
        "By default, ESLint supports only ECMAScript 5 syntax. You can override that setting to enable support for ECMAScript 6 as well as JSX by using configuration settings.",
      "type": "object",

      "properties": {
        "arrowFunctions": { "type": "boolean" },
        "binaryLiterals": { "type": "boolean" },
        "blockBindings": { "type": "boolean" },
        "classes": { "type": "boolean" },
        "defaultParams": { "type": "boolean" },
        "destructuring": { "type": "boolean" },
        "experimentalObjectRestSpread": {
          "type": "boolean",
          "description":
            "Enables support for the experimental object rest/spread properties (IMPORTANT: This is an experimental feature that may change significantly in the future. It’s recommended that you do not write rules relying on this functionality unless you are willing to incur maintenance cost when it changes.)",
        },
        "forOf": { "type": "boolean" },
        "generators": { "type": "boolean" },
        "globalReturn": {
          "type": "boolean",
          "description": "allow return statements in the global scope",
        },
        "impliedStrict": {
          "type": "boolean",
          "description":
            "enable global strict mode (if ecmaVersion is 5 or greater)",
        },
        "jsx": { "type": "boolean", "description": "enable JSX" },
        "modules": { "type": "boolean" },
        "objectLiteralComputedProperties": { "type": "boolean" },
        "objectLiteralDuplicateProperties": { "type": "boolean" },
        "objectLiteralShorthandMethods": { "type": "boolean" },
        "objectLiteralShorthandProperties": { "type": "boolean" },
        "octalLiterals": { "type": "boolean" },
        "regexUFlag": { "type": "boolean" },
        "regexYFlag": { "type": "boolean" },
        "restParams": { "type": "boolean" },
        "spread": { "type": "boolean" },
        "superInFunctions": { "type": "boolean" },
        "templateStrings": { "type": "boolean" },
        "unicodeCodePointEscapes": { "type": "boolean" },
      },
    },
    "env": {
      "description":
        "An environment defines global variables that are predefined.",
      "type": "object",

      "properties": {
        "amd": {
          "type": "boolean",
          "description":
            "defines require() and define() as global variables as per the amd spec",
        },
        "applescript": {
          "type": "boolean",
          "description": "AppleScript global variables",
        },
        "atomtest": {
          "type": "boolean",
          "description": "Atom test helper globals",
        },
        "browser": {
          "type": "boolean",
          "description": "browser global variables",
        },
        "commonjs": {
          "type": "boolean",
          "description":
            "CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack)",
        },
        "shared-node-browser": {
          "type": "boolean",
          "description": "Globals common to both Node and Browser",
        },
        "embertest": {
          "type": "boolean",
          "description": "Ember test helper globals",
        },
        "es6": {
          "type": "boolean",
          "description": "enable all ECMAScript 6 features except for modules",
        },
        "greasemonkey": {
          "type": "boolean",
          "description": "GreaseMonkey globals",
        },
        "jasmine": {
          "type": "boolean",
          "description":
            "adds all of the Jasmine testing global variables for version 1.3 and 2.0",
        },
        "jest": {
          "type": "boolean",
          "description": "Jest global variables",
        },
        "jquery": {
          "type": "boolean",
          "description": "jQuery global variables",
        },
        "meteor": {
          "type": "boolean",
          "description": "Meteor global variables",
        },
        "mocha": {
          "type": "boolean",
          "description": "adds all of the Mocha test global variables",
        },
        "mongo": {
          "type": "boolean",
          "description": "MongoDB global variables",
        },
        "nashorn": {
          "type": "boolean",
          "description": "Java 8 Nashorn global variables",
        },
        "node": {
          "type": "boolean",
          "description": "Node.js global variables and Node.js scoping",
        },
        "phantomjs": {
          "type": "boolean",
          "description": "PhantomJS global variables",
        },
        "prototypejs": {
          "type": "boolean",
          "description": "Prototype.js global variables",
        },
        "protractor": {
          "type": "boolean",
          "description": "Protractor global variables",
        },
        "qunit": {
          "type": "boolean",
          "description": "QUnit global variables",
        },
        "serviceworker": {
          "type": "boolean",
          "description": "Service Worker global variables",
        },
        "shelljs": {
          "type": "boolean",
          "description": "ShellJS global variables",
        },
        "webextensions": {
          "type": "boolean",
          "description": "WebExtensions globals",
        },
        "worker": {
          "type": "boolean",
          "description": "web workers global variables",
        },
      },
    },
    "extends": {
      "description":
        "If you want to extend a specific configuration file, you can use the extends property and specify the path to the file. The path can be either relative or absolute.",
      "type": ["string", "array"],
      "items": {
        "type": "string",
      },
    },
    "globals": {
      "description":
        "Set each global variable name equal to true to allow the variable to be overwritten or false to disallow overwriting.",
      "type": "object",

      "additionalProperties": {
        "oneOf": [
          {
            "type": "string",
            "enum": [
              "readonly",
              "writable",
              "off",
            ],
          },
          {
            "description":
              'The values false|"readable" and true|"writeable" are deprecated, they are equivalent to "readonly" and "writable", respectively.',
            "type": "boolean",
          },
        ],
      },
    },
    "noInlineConfig": {
      "description": "Prevent comments from changing config or rules",
      "type": "boolean",
    },
    "parser": {
      "type": "string",
    },
    "parserOptions": {
      "description": "The JavaScript language options to be supported",
      "type": "object",
      "properties": {
        "ecmaFeatures": {
          "$ref": "#/properties/ecmaFeatures",
        },
        "ecmaVersion": {
          "enum": [
            3,
            5,
            6,
            2015,
            7,
            2016,
            8,
            2017,
            9,
            2018,
            10,
            2019,
            11,
            2020,
            12,
            2021,
          ],
          "default": 11,
          "description":
            "Set to 3, 5, 6, 7, 8, 9, 10, 11 (default) or 12 to specify the version of ECMAScript syntax you want to use. You can also set to 2015 (same as 6), 2016 (same as 7), 2017 (same as 8), 2018 (same as 9), 2019 (same as 10), 2020 (same as 11) or 2021 (same as 12) to use the year-based naming.",
        },
        "sourceType": {
          "enum": ["script", "module"],
          "default": "script",
          "description":
            'set to "script" (default) or "module" if your code is in ECMAScript modules',
        },
      },
    },
    "plugins": {
      "description":
        "ESLint supports the use of third-party plugins. Before using the plugin, you have to install it using npm.",
      "type": "array",
      "items": {
        "type": "string",
      },
    },
    "root": {
      "description":
        "By default, ESLint will look for configuration files in all parent folders up to the root directory. This can be useful if you want all of your projects to follow a certain convention, but can sometimes lead to unexpected results. To limit ESLint to a specific project, set this to `true` in a configuration in the root of your project.",
      "type": "boolean",
    },
    "ignorePatterns": {
      "description":
        "Tell ESLint to ignore specific files and directories. Each value uses the same pattern as the `.eslintignore` file.",
      "type": ["string", "array"],
      "items": {
        "type": "string",
      },
    },
    "rules": {
      "description":
        "ESLint comes with a large number of rules. You can modify which rules your project uses either using configuration comments or configuration files.",
      "type": "object",

      "allOf": [
        { "$ref": "#/definitions/possibleErrors" },
        { "$ref": "#/definitions/bestPractices" },
        { "$ref": "#/definitions/strictMode" },
        { "$ref": "#/definitions/variables" },
        { "$ref": "#/definitions/nodeAndCommonJs" },
        { "$ref": "#/definitions/stylisticIssues" },
        { "$ref": "#/definitions/ecmaScript6" },
        { "$ref": "#/definitions/legacy" },
      ],
    },
    "settings": {
      "description":
        "ESLint supports adding shared settings into configuration file. You can add settings object to ESLint configuration file and it will be supplied to every rule that will be executed. This may be useful if you are adding custom rules and want them to have access to the same information and be easily configurable.",
      "type": "object",
    },
    "overrides": {
      "type": "array",
      "description":
        "Allows to override configuration for files and folders, specified by glob patterns",
      "items": {
        "type": "object",
        "properties": {
          "files": {
            "description":
              "Glob pattern for files to apply 'overrides' configuration, relative to the directory of the config file",
            "oneOf": [
              {
                "type": "string",
              },
              {
                "minItems": 1,
                "type": "array",
                "items": {
                  "type": "string",
                },
              },
            ],
          },
          "extends": {
            "description":
              "If you want to extend a specific configuration file, you can use the extends property and specify the path to the file. The path can be either relative or absolute.",
            "type": ["string", "array"],
            "items": {
              "type": "string",
            },
          },
          "excludedFiles": {
            "description":
              "If a file matches any of the 'excludedFiles' glob patterns, the 'overrides' configuration won’t apply",
            "oneOf": [
              {
                "type": "string",
              },
              {
                "type": "array",
                "items": {
                  "type": "string",
                },
              },
            ],
          },
          "ecmaFeatures": {
            "$ref": "#/properties/ecmaFeatures",
          },
          "env": {
            "$ref": "#/properties/env",
          },
          "globals": {
            "$ref": "#/properties/globals",
          },
          "parser": {
            "$ref": "#/properties/parser",
          },
          "parserOptions": {
            "$ref": "#/properties/parserOptions",
          },
          "plugins": {
            "$ref": "#/properties/plugins",
          },
          "processor": {
            "description":
              "To specify a processor, specify the plugin name and processor name joined by a forward slash",
            "type": "string",
          },
          "rules": {
            "$ref": "#/properties/rules",
          },
          "settings": {
            "$ref": "#/properties/settings",
          },
        },
        "additionalProperties": false,
        "required": [
          "files",
        ],
      },
    },
  },
};