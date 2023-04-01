const vscode = require('vscode');

function activate(context) {
    // 注册菜单项
    const importCommand = vscode.commands.registerCommand('chartjs.importChart', () => {
        // 获取当前编辑器
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }
        // 获取代码片段
        const snippet = new vscode.SnippetString("<script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js\"></script>");
        // 插入代码片段
        editor.insertSnippet(snippet);
    });

    const addSnippetCommand = vscode.commands.registerCommand('chartjs.addChart', () => {
        // 获取当前编辑器
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }
        // 获取代码片段
        const snippet = new vscode.SnippetString(`<canvas id="\${1:graphName}" width="\${2}" height="\${3}"></canvas>
<script>
\tvar ctx = document.getElementById('\${1:graphName}').getContext('2d');
\tvar chart = new Chart(ctx, {
\t\ttype: '\${4:graphType}',

\t\tdata: {
\t\t\tlabels: \${4:labelList},
\t\t\tdatasets: [{
\t\t\t\tbackgroundColor: \${5:colorList},
\t\t\t\tdata: \${6:dataList},
\t\t\t}]
\t\t},

\t\toptions: {
\t\t\ttitle: {
\t\t\t\tdisplay: true,
\t\t\t\ttext: "\${7:graphTitle}"
\t\t\t}
\t\t}
\t});
</script>`);
        
        // 插入代码片段
        editor.insertSnippet(snippet);
    });

    // 将菜单项注册到订阅数组中
    context.subscriptions.concat(importCommand, addSnippetCommand);
}

exports.activate = activate;
