# 🎵 Reprodutor de Música

Um projeto simples de **Reprodutor de Música**, onde o usuário pode carregar arquivos de áudio diretamente do computador e reproduzi-los no navegador.

---

## 🚀 Funcionalidades

* 📁 Upload de arquivos de áudio
* ▶️ Reprodução automática da música
* 🎧 Player com controles nativos (play, pause, volume)
* ⚡ Carregamento rápido usando URL local

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript 

---

## 📂 Estrutura do Projeto

```id="u7x2kd"
📁 reprodutor-de-musica
 ├── index.html
 ├── styles.css
 └── script.js
```

---

## 💻 Como Funciona

* O usuário seleciona um arquivo de áudio do computador
* O JavaScript cria uma URL temporária para o arquivo
* O player carrega automaticamente a música
* A reprodução começa automaticamente

---

## ▶️ Como Executar

1. Baixe ou clone o projeto
2. Abra o arquivo `index.html` no navegador
3. Clique em **Subir Música** e selecione um arquivo de áudio

---

## 📄 Código Principal (Resumo)

### 🎵 Upload e reprodução

```javascript id="9h2kpl"
fileInput.addEventListener("change", function() {
    const file = this.files[0]
    if (file) {
        const objectURL = URL.createObjectURL(file)
        audioElemento.src = objectURL
        audioElemento.load()
        audioElemento.play()
    }
})
```

---

## 👨‍💻 Autor

Desenvolvido por mim 🚀
Projeto simples para praticar manipulação de arquivos e uso de áudio no JavaScript.
