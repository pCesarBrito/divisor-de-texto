document.getElementById('divideText').addEventListener('click', function() {
    let charCount = parseInt(document.getElementById('charCount').value);
    let inputText = document.getElementById('inputText').value;
    let outputDiv = document.getElementById('output');

    // Limpa o conteúdo anterior
    outputDiv.innerHTML = '';

    if (isNaN(charCount) || charCount <= 0) {
        alert("Por favor, insira um número válido de caracteres.");
        return;
    }

    // Divide o texto em blocos de caracteres
    for (let i = 0; i < inputText.length; i += charCount) {
        let textBlock = inputText.slice(i, i + charCount);
        
        // Cria a div para cada bloco
        let blockDiv = document.createElement('div');
        blockDiv.classList.add('block');

        let copyButton = document.createElement('button');
        copyButton.textContent = 'Copiar texto';
        copyButton.name = 'copy';
        copyButton.classList.add('button-area');
        copyButton.addEventListener('click', function() {
            textArea.select();
            document.execCommand('copy');
            copyButton.textContent = 'Texto foi copiado!';
            copyButton.classList.add('copied');
        });

        let textArea = document.createElement('textarea');
        textArea.classList.add('text-area');
        textArea.value = textBlock;
        
        blockDiv.appendChild(copyButton);
        blockDiv.appendChild(textArea);

        outputDiv.appendChild(blockDiv);
    }
});
