# react-gs

![NPM](https://img.shields.io/npm/v/react-gs.svg)
    
Inline style declarations for React

Demo - http://clintonhalpin.github.io/react-gs/examples/#/

# get started

Install
```
npm i react-gs --save
```

Import
```javascript
import * as gs from 'react-gs';

// JSX
<div style={gs.ta.center}>Text Align Center</div>
// Or with Radium ( object-assign )
<div style={[ga.ta.center, ga.fs.large]}>Text Align Center + Large</div>
```

# Styles

## ta: Text Align

```
gs.ta.left
gs.ta.center
gs.ta.right
```

## p: Position

```
gs.p.relative
gs.p.static
gs.p.absolute
gs.p.fixed
```

## d: Display

```
gs.d.none
gs.d.inline
gs.d.block
gs.d.inlineBlock
gs.d.inlineTable
gs.d.table
gs.d.tableCell
gs.d.tableColumn
gs.d.tableColumnGroup
gs.d.flex
```

## fw: Font Weight
```
gs.fw.lighter
gs.fw.normal
gs.fw.bold
gs.fw.bolder
```

## m, p: Margin, Padding

```
// 0

gs.[m,p]._0
gs.[m,p]._t0
gs.[m,p]._r0
gs.[m,p]._b0
gs.[m,p]._l0

// Base

gs.[m,p]._1
gs.[m,p]._t1
gs.[m,p]._r1
gs.[m,p]._b1
gs.[m,p]._l1

// Base * 2

gs.[m,p]._2
gs.[m,p]._t2
gs.[m,p]._r2
gs.[m,p]._b2
gs.[m,p]._l2

// Base * 3

gs.[m,p]._3
gs.[m,p]._t3
gs.[m,p]._r3
gs.[m,p]._b3
gs.[m,p]._l3

// Base * 4

gs.[m,p]._4
gs.[m,p]._t4
gs.[m,p]._r4
gs.[m,p]._b4
gs.[m,p]._l4

// Left and Right

gs.[m,p]._xn1
gs.[m,p]._xn2
gs.[m,p]._xn3
gs.[m,p]._xn4
gs.[m,p]._xauto
```

## ff: Font Family

```
gs.ff.sanSerif
gs.ff.monospace
```

## fs: Font Size

```
gs.fs.xxLarge
gs.fs.xLarge
gs.fs.large
gs.fs.medium
gs.fs.small
gs.fs.xSmall
```

# Modules

## textTruncate
 
```
gs.modules.textTruncate
```

## flag

```
gs.modules.flag
gs.modules.flag.image
gs.modules.flag.body
```
=

built by [@clintonhalpin](http://clintonhalpin.com)
