function newEditor(name) {
    var editor = ace.edit(name);
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/seq");
    editor.setShowPrintMargin(false);
    document.getElementById(name).style.fontSize='20px';

    editor.commands.addCommand({
        name: 'try',
        bindKey: {win: 'Shift-Enter',  mac: 'Shift-Enter'},
        exec: function(editor) {
            window.location.href = "demo.html?code=" + encodeURIComponent(editor.getValue());
        },
        readOnly: true
    });

    return editor;
}

function setEditor(editor, file) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', file, false);
    xhr.send(null);
    editor.setValue(xhr.responseText, 1);
}
