# Badgerly
Easy to use CSS 3 badges with a variety of configuration options.

[![badges.png](https://s11.postimg.org/nfqgfq09f/badges.png)](https://postimg.org/image/aoca97qhb/)

## Colors
Gold, Silver, Bronze

## Sizes
Tiny, Small, Medium, Large, Huge

## Ribbon Patterns
Red, Orange, Yellow, Green, Blue, Purple, Pink, Black, Rainbow, and a bunch of country flags!

Supports either a single ribbon or a lanyard with two visible ribbons.

## Examples

### Round silver metal with a single purple ribbon
```html
  <div class="badge large">
    <div class="ribbon purple">
    </div>
    <div class="circle silver border">
      <i class="fa fa-tree"></i>
    </div>
  </div>
```

### Diamond gold metal with a red lanyard
```html
  <div class="badge large">
    <div class="lanyard">
      <div class="ribbon left red"></div>
      <div class="ribbon right red"></div>
    </div>
    <div class="diamond gold border">
      <i class="fa fa-star"></i>
    </div>
  </div>
```