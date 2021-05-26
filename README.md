# Tailspin

Tailspin is a customizable, class-based, utility-first CSS library that helps you work within the constraints of a unified system, instead of littering style sheets with arbitrary values. It’s purpose is to help with rapid front-end style development, which is based on consistent design patterns. It can work with any other framework or library such as Bootstrap or React.

Tailspin acts as a single source library of truth, for repeating utility styles in your code.

<p>&nbsp;</p>

***

<p>&nbsp;</p>

### How To Use

<p>&nbsp;</p>

1. **Choose a Tailspin CSS type for your project. You can either use all of Tailspin, or pick and choose multiple or individual utilities, helpers, and/or modifiers. 
Each type has its very own CSS file.**

```html
tailspin-all.min.css
tailspin-helpers-animations.min.css
tailspin-modifiers-border-radius.min.css
tailspin-modifiers-font-size.min.css
tailspin-modifiers-margin-padding.min.css
tailspin-modifiers-opacity.min.css
tailspin-modifiers-z-index.min.css
tailspin-utilities-ratios.min.css
tailspin-utilities-typography.min.css
tailspin-utilities.min.css
```

###### Example
```html
<link rel="stylesheet" type="text/css" href="../prod/css/tailspin-all.css" media="all">
```
<p>&nbsp;</p>

2. **Include the _Fill Media to Container_ javascript file written by [John Ludena](https://github.com/johnludena).**   
This file will work with either **_tailspin-all.min.css_** or **_tailspin-utilities.min.css_**.

```html
tailspin-fill.media.to.container.js
```

###### Example
```html
<script type="text/javascript" src="../prod/js/fill.media.to.container.js"></script>
```

<p>&nbsp;</p>

3. **Add classes to your code.**   
The following code will display a div block, with 30 pixels of padding, and a border. The paragraph inside the div block has zero margin, and a font size of 20 (1.25rem).

```html
<div class="padding-30 border">
  <p class="margin-0 font-size-20">This is a paragraph of text.</p>
</div>
```

<p>&nbsp;</p>

***

<p>&nbsp;</p>
