# Abs-NJX (Abs-Inject)

## Introduction:

The Inject module is not a node package and is intended to be used as a utility resource for userscripts.
This module defines a few useful methods specifically for the context of writing userscripts and exposes a quick-to-set-up class for generating a floating menu on page with multiple buttons for easy access to your custom injected functionalities.


## Import:

Depending on what browser extension you're using the process of loading an external resource may vary (or may not even be possible) but what you need is just the direct url to the Javascript file from this repository.

Simply use Github's raw url to obtain the direct file url.
`https://raw.githubusercontent.com/{user}/{repository}/{branch|tag|commit}/{path}`

Examples:
from `main` branch: `https://raw.githubusercontent.com/Abstractn/abs-inject/main/abs-inject.js`
from `1.0.0` tag: `https://raw.githubusercontent.com/Abstractn/abs-inject/1.0.0/abs-inject.js`

### Tampermonkey:
Use the `@require` header:
`// @require      https://raw.githubusercontent.com/Abstractn/abs-inject/main/abs-inject.js`

Check the [official documentation](https://www.tampermonkey.net/documentation.php) for more info.


## Methods:

### `Element.waitFor(selector, callback)`
This method is a `querySelector` at its core but used to select nodes that don't exist yet in the page due to the nature of userscripts and how websites generate page content asynchronously from receiving HTTP responses.

- `selector`: of type `string`, exactly the same value used in a `querySelector`
- `callback`: is the function `(node: HTMLElement) => void` that will get executed as soon as the selection returns a result, will pass the same selected node via parameter


## The Quick Menu Genetator:

This feature is not implemented yet.
