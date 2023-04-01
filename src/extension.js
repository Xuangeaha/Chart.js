const vscode = require('vscode');

function activate(context) {
    // 注册菜单项
    const addSnippetCommand = vscode.commands.registerCommand('chartjs.addChart', () => {
        // 获取当前编辑器
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }
        // 获取代码片段
        const snippet = new vscode.SnippetString('');
        // 插入代码片段
        editor.insertSnippet(snippet);
    });

    // 添加菜单项到编辑器右键菜单中
    context.subscriptions.push(vscode.languages.registerCodeActionsProvider('*', {
        provideCodeActions(document, range, context, token) {
            const command = {
                title: 'Insert Chart.js Graph',
                command: 'chartjs.addChartt',
                tooltip: 'Insert Chart.js Graph'
            };
            return {
                actions: [command],
                dispose() {}
            };
        }
    }));
}

exports.activate = activate;
