# Chart.js

[![Version](https://vsmarketplacebadges.dev/version/xuangeaha.chartjs.svg?&colorB=orange)](https://marketplace.visualstudio.com/items?itemName=xuangeaha.chartjs) [![Installs](https://vsmarketplacebadges.dev/installs/xuangeaha.chartjs.svg)](https://marketplace.visualstudio.com/items?itemName=xuangeaha.chartjs) [![Downloads](https://vsmarketplacebadges.dev/downloads/xuangeaha.chartjs.svg)](https://marketplace.visualstudio.com/items?itemName=xuangeaha.chartjs) [![Rating Short](https://vsmarketplacebadges.dev/rating-short/xuangeaha.chartjs.svg)](https://marketplace.visualstudio.com/items?itemName=xuangeaha.chartjs) [![Rating Star](https://vsmarketplacebadges.dev/rating-star/xuangeaha.chartjs.svg)](https://marketplace.visualstudio.com/items?itemName=xuangeaha.chartjs)

[![TrendingDaily](https://vsmarketplacebadges.dev/trending-daily/xuangeaha.chartjs.svg?&colorB=blue)](https://marketplace.visualstudio.com/items?itemName=xuangeaha.chartjs) [![TrendingWeekly](https://vsmarketplacebadges.dev/trending-weekly/xuangeaha.chartjs.svg?&colorB=blue)](https://marketplace.visualstudio.com/items?itemName=xuangeaha.chartjs) [![TrendingMonthly](https://vsmarketplacebadges.dev/trending-monthly/xuangeaha.chartjs.svg?&colorB=blue)](https://marketplace.visualstudio.com/items?itemName=xuangeaha.chartjs)

Simple and flexible JavaScript charting library for the modern web. Add Chart.js graph code to your HTML files easily with one click.

为设计和开发人员准备的简单、灵活的 JavaScript 图表工具。轻松一点即可向你的HTML文件添加Chart.js图表。

**Homepage/主页**: [`https://xuangeaha.github.io/`](https://xuangeaha.github.io/)

**Repository/仓库**: [`https://github.com/Xuangeaha/Chart.js`](https://github.com/Xuangeaha/Chart.js)

**Issues/问题**: [`https://github.com/Xuangeaha/Chart.js/issues`](https://github.com/Xuangeaha/Chart.js/issues)

**Changelog/更新日志**: [`https://marketplace.visualstudio.com/items/XuangeAha.Chartjs/changelog`](https://marketplace.visualstudio.com/items/XuangeAha.Chartjs/changelog)

**License/许可证**: [`https://marketplace.visualstudio.com/items/XuangeAha.Chartjs/license`](https://marketplace.visualstudio.com/items/XuangeAha.Chartjs/license)

**Download/下载**: [`https://marketplace.visualstudio.com/items?itemName=XuangeAha.Chartjs`](https://marketplace.visualstudio.com/items?itemName=XuangeAha.Chartjs)

**Copyright (c) 2023 XuangeAha(轩哥啊哈OvO)**

# How To Use 使用方法

1. **Right click** to show context menu. **右键**显示上下文菜单。
2. Select `Import Chart.js` to **import Chart.js script**. 选择 `Import Chart.js` 以**导入Chart.js代码**。
3. Select `Insert Chart.js Graph` to **insert Chart.js graph**. 选择 `Insert Chart.js Graph` 以**插入Chart.js图表**。

# Language Supports 语言支持

## HTML

```html
<!-- Import Chart.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>

<!-- Insert Chart.js Graph -->
<canvas id="{graphName}" width="{}" height="{}"></canvas>
<script>
    var ctx = document.getElementById('{graphName}').getContext('2d');
    var chart = new Chart(ctx, {
        type: '{graphType}',

        data: {
            labels: {labelList},
            datasets: [{
                backgroundColor: {colorList},
                data: {dataList},
            }]
        },

        options: {
            title: {
                display: true,
                text: "{graphTitle}"
            }
        }
    });
</script>
```

**Enjoy!**
