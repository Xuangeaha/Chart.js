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
        const snippet = new vscode.SnippetString(`<canvas id="\${1:myChart}" width="\${2}" height="\${3}"></canvas>
<script>
\tvar ctx = document.getElementById('\${1:myChart}').getContext('2d');
\tvar chart = new Chart(ctx, {
\t\ttype: '\${4:line}',

\t\tdata: {
\t\t\tlabels: \${5},
\t\t\tdatasets: [{
\t\t\t\tlabel: "\${6:My Chart}",
\t\t\t\tdata: \${7},
\t\t\t\tbackgroundColor: \${8},
\t\t\t\tborderColor: \${9},
\t\t\t\tborderWidth: \${10}
\t\t\t}]
\t\t},

\t\toptions: {
\t\t\ttitle: {
\t\t\t\ttext: "\${11:My Chart}",
\t\t\t\tdisplay: \${12:true},
\t\t\t},
\t\t\tevents: [\${13}],
\t\t\tlegend: {
\t\t\t\tdisplay: \${14:true},
\t\t\t},
\t\t\ttooltips: {
\t\t\t\tmode: '\${15}'
\t\t\t},
\t\t\tlayout: {\${16}},
\t\t\tanimation: {\${17}}
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
