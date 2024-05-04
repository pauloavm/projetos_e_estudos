class BoxShadowGenerator {
    constructor(
      horizontal,
      horizontalRef,
      vertical,
      verticalRef,
      blur,
      blurRef,
      spread,
      spreadRef,
      color,
      colorRef,
      opacity,
      opacityRef,
      inset,
      previewBox,
      rule,
      webkitRule,
      mozRule
    ) {
      this.horizontal = horizontal;
      this.horizontalRef = horizontalRef;
      this.vertical = vertical;
      this.verticalRef = verticalRef;
      this.blur = blur;
      this.blurRef = blurRef;
      this.spread = spread;
      this.spreadRef = spreadRef;
      this.color = color;
      this.colorRef = colorRef;
      this.opacity = opacity;
      this.opacityRef = opacityRef;
      this.inset = inset;
      this.insetRef = inset.checked;
      this.previewBox = previewBox;
      this.rule = rule;
      this.webkitRule = webkitRule;
      this.mozRule = mozRule;
    }
