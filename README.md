# Badgerly

```
    $> bower install badgerly --save
```

- Integrates easily with [Font Awesome](http://fontawesome.io/)!
- Fully implemented in CSS 3, no spacer images or other hackery.
- Simple to use CSS classes which can be extended.
- Implemented in SCSS, also available in plain CSS for your convenience.
- Also, check out our [Wall of Badges](https://jsfiddle.net/stevenmhunt/3krm64o1/)!

[![badges.png](https://s11.postimg.org/nfqgfq09f/badges.png)](https://postimg.org/image/aoca97qhb/)

## Colors
Gold, Silver, Bronze

## Sizes
Tiny, Small, Medium, Large, Huge

## Ribbon Patterns
Red, Orange, Yellow, Green, Blue, Purple, Pink, Black, Rainbow, and a bunch of country flags!

Supports either a single ribbon or a lanyard with two visible ribbons.

## Examples

### [Round silver metal with a single purple ribbon](https://jsfiddle.net/stevenmhunt/wqyrq8a0/)
```html
  <div class="badge large">
    <div class="ribbon purple">
    </div>
    <div class="circle silver border">
      <i class="fa fa-tree"></i>
    </div>
  </div>
```

### [Diamond gold metal with a red lanyard](https://jsfiddle.net/stevenmhunt/0739du3f/)
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

## Contributing

Contributions and pull requests are welcome! However, please make sure that you only modify the SCSS file and then transpile it into CSS. I use WebStorm which will automatically set up a watcher for it, I've even left the configuration for that in the project so that it "just works".