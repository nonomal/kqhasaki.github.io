---
title: 红宝书系列（二）HTML中的JavaScript
date: 2022-01-09
cover: https://tva1.sinaimg.cn/large/008i3skNgy1gy6bw9bv2hj30jg0oo40x.jpg
---

在 JavaScript 出现之前，万维网已经在大量使用 HTML 了。为了将 JavaScript 引入网页，
首先要解决它与 HTML 的关系问题。经过网景公司反复的讨论和试错，达成了向网页中引入通用脚本能力的共识。

# <script\>元素

网景公司创造出了`<script>`元素，以此将 JavaScript 代码插入 HTML 中，现在已经被加入到 HTML 规范中。
`<script>`标签的使用方式有两种，一种是直接在 HTML 中嵌入 JavaScript 代码，
另一种是通过它的 src 属性来引入外部 JavaScript 文件。当然在实际开发中，很少使用第一种方法。

需要注意的是，无论是行内 JavaScript 还是外部 JavaScript，浏览器解析到`<script>`都会阻塞。
直到 JavaScript 文件全部下载完成并执行完毕。在这期间，页面的其余内容不会被加载也不会被执行。

`<script>`元素一个最强大的地方在于它能够加载来自外部源的 JavaScript 文件。
浏览器的同源策略并不会限制`<script>`元素发送的请求，因此浏览器对于 JavaScript 的执行也有一定的限制。
如果同时有多个`<script>`元素，浏览器会按照在页面中出现的顺序依次解释它们，前提是没有设置`defer`和
`async`属性。

# 推迟执行脚本

自 HTML4.0 版本以来，`<script>`元素多了一个`defer`属性。
浏览器在解析到这个标签时会立即下载`<script>`中的 JavaScript 代码，
但是会延迟到整个页面解析完毕后执行。这就使得脚本在执行的时候不会改变页面结构。
`defer`属性仅对外部脚本文件有效，并且实际上推迟执行的脚本并不一定总会按照顺序执行
（虽然 HTML5 规范要求脚本应该按照它们出现的顺序执行）。因此最好只包含一个这样的`<script>`元素。

# 异步执行脚本

HTML5 标准给`<script>`元素添加了 `async`属性。同样也只适用于外部脚本，它和`defer`类似，
告诉浏览器立刻开始下载脚本文件，但是不必等待脚本下载和执行完毕后再加载页面，
也不必等到该异步脚本下载和执行后再加载其他脚本。与`defer`最大的不同在于，
标记为`async`的脚本并不保证其按照出现的次序执行，下载完毕后就会执行。

![](https://tva1.sinaimg.cn/large/008i3skNgy1gy7ngctjtpj30m90mmq5d.jpg)

上图来自于 StackOverflow 上的[回答](https://stackoverflow.com/questions/10808109/script-tag-async-defer)，
很清楚地解释了`async`和`defer`的区别。