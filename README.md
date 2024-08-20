<h1 align="center">Máquina de Criptografia e Descriptografia</h1>
"Porque, quem despreza o dia das coisas pequenas? Pois esses se alegrarão, vendo o prumo na mão de Zorobabel;" (Zacarias 4:10)

# Introdução

Este projeto é um desafio proposto pela Alura relativo ao programa de educação e empregabilidade de iniciativa da ORACLE + Alura.

É um projeto de página web criada para criptografar e descriptografar um texto com base em chaves de criptografia simples. A tela única da página pode ser visualizado na imagem.

![Imagem da tela Inicial da página web criada para criptografar e descriptografar um texto. Existe um ícone da letra A, na parte superior esquerda, um título central, Máquina de Criptografia e Descriptografia, dois textarea com labels, criptografia e descriptografia, respectivamente, um ícone de interrogação seguido de um texto afirmando que a aplicação aceita apenas letras minúsculas e sem acentuação, logo abaixo há Dois botões azuis para determinar qual ação será feita, ao lado existe uma área com com um boneco sem cor com camisa e cabelo vermelho, um objeto sem cor em forma de diamante, o cenário é um fundo azul no meio verde e no final cinza, ao redor do boneco há alguns rabiscos que pode ser interpretado como desenhos de grama ou de vento, e bolinhas vermelhas. Existe um texto dizendo que não foi encontrado mensagem e uma solicitação de que seja digitado um texto.](https://github.com/user-attachments/assets/f5cc7d8a-0773-475f-a253-3d8adfd2cbdd)

Não é necessário qualquer instalação específica para rodar os códigos, pois funciona diretamente no navegador. Entretanto, para copiar o texto, criptografado ou descriptografado, usando um botão da página, é verificada a permissão para acesso à área de transferência através do navegador, e só funciona em páginas HTTPS.


# Funcionalidades e Demonstração da Aplicação

A aplicação se divide em partes como animação de cores, transição entre estados, validador de entrada de dados e retorno de entradas inválidas, criptografia e descriptografia dos textos, e cópia dos textos.

## Animação de Cores

A animação de cores ocorre quando o usuário transita de um "textarea" para o outro. No "textarea" com 'label' Criptografia a cor da camisa e do cabelo do boneco se torna azul e o com 'label' Descriptografia se torna vermelho; em alusão aos 'blue e red team' da área de cibersegurança.

Demonstração do click no "textare" Criptografia:

![Boneco sem cor com camisa e cabelo Azul usando uma lupa para investigar um objeto sem cor em forma de diamante](https://github.com/user-attachments/assets/b3f2e761-3739-492e-acc2-cd844d9fa56f)

Demonstração do click no "textare" Descriptografia:

![Boneco sem cor com camisa e cabelo Azul usando uma lupa para investigar um objeto sem cor em forma de diamante](https://github.com/user-attachments/assets/e7f9cea1-5b40-4e6a-b2d3-36da9e7987d2)

## Trasição entre Estados

<p>A transição de estado é apenas a mudança visual que ocorre na tela quando algo acontece.</p>
<p>Na imagem abaixo o estado de número 1, ocorre quando uma das duas "textarea" está sem texto, algo que vale ser considerado é que ao passo que o usuário trasita de um Textarea para a outra, a textearea inicial tem seu texto apagado, isso garante que este estado de 'animação' garanta que de fato ambos os textarea estão sem texto quando é apresentado a mensagem que não há texto digitado.</p>
<p>O estado de número 2, ocorre quando o botão de Criptografia ou Descriptografia é pressionado e o texto é tratado sem erro.</p>
<p>O estado de número 3, ocorre quando existe um ou mais caracteres inválido no texto, o que impossibilita o tratamento do texto digitado nas "textarea".</p>

![São três recortes da página web que não ocorrem simultaneamente, porém na mesma posição da página, a saber canto direito. A primeira do boneco já descrito anteriormente, a segunda de um texto exemplo criptografado, e a última um título indicando que há caracteres inválidos no texto digitado um texto simples explicando o formato chave valor que aparece abaixo. O formato chave valor indica a posição e o caractere inválido no texto, na imagem a posição é 1 e o carácter é a letra maiúscula ‘A’.](https://github.com/user-attachments/assets/34800da9-3072-4761-a670-995e7f9636b2)


## Validador de Entrada de Dados e Resposta

<p>Conforme o usuário vai digitando seu texto em uma textarea os caracteres são verificados através de uma simples expressão regular. Quando é digitado um carácter inválido automaticamente os elementos da página a direita transitam para o terceiro estado descrito anteriormente.</p>
<p>Quando o usuário em um dos botões disponíveis na tela com os textarea sem texto ou com algum carácter inválido, uma assistente de voz avisa que ocorre uma dessas situações, o que impede que seja feita criptografia ou descriptografia. Nota: também deveria aparecer um alerta na tela, pois no Edge o recurso de voz não funciona, mas ainda estou aprendendo a usar o git então, verei isso mais a frente.</p>

## Criptografia e Descriptografia dos textos

<p>Este é o carro chefe da aplicação. Trata-se simplesmente de transformar determinados caracteres em suas respectivas chaves de criptografia ou descriptografia.</p>

<p>Foi usado o recurso de chave e valor para facilitar essa substituição. Ou seja, o tipo de criptografia usada é um método de criptografia por substituição. É um projeto de uso penas de nível de exercício sem aplicação real</p>


## Copia dos textos

Consiste em um botão com a função de copiar o resultado da criptografia ou descriptografia para a área de transferência. Neste caso foi necessário o uso do "clipboard-write" através de uma solicitação de permissão para adicionar algo no sistema do usuário, permissão que ocorre de forma segura através do protocolo HTTPS.

# Acesso ao Projeto
<p>A página pode ser acessado através do 
<a href="https://junioraltn.github.io/CodeDecod_Challenge/" target="_blank">Link</a> </p>

# Tecnologias utilizadas
*Visual Studio Code;
*API da Google;
*API de texto para fala HTML5;

# Pessoa Desenvolvedora
*Ailton N. S. Júnior

# Aprendizado e Créditos

<p>Posso ser o desenvolvedor, mas nada seria possível sem ajuda dos professores e equipe da Alura. Seja o uso das APIs, didática relacionada à construção do HTML e CSS, como puxar valores de elementos do HTML para o JavaScript, enfim, o que fiz certo e que funciona é crédito deles também. Os erros e pontos de melhoria da estrutura, organização, funcionalidades ... é creditado todo meu :D .</p>

<p>Foi um belo desafio. Fiz um pouco mais do que era exigido, mas porque a cada passo que dava pensava: "E se? ... Será que consigo? ... Ficaria legal! ... Vou tentar..." Daí, tá aí o problema, kkk.</p>

## Dificuldades??

<p>Em relação ao HTML não tive dificuldades. A estrutura e a organização foi fácil.</p>

<p>>Em relação ao CSS, acredito que seja o mais difícil. Parecia fácil no início, mas depois que o projeto estava grandinho, confesso que passei um tempo tentando fazer o que imaginava que ficaria legal, foi muitas tentativas, muito erro, e acertos em quantidade aceitável. Um exemplo é deixar a página responsiva, acredito que um problema tenha sido ter colocado alguns elementos com mínimo de largura o que faz com que o mesmo saia da tela depois que a janela chega em um certo tamanho, mas não tive tempo para ver isso. Coloquei em adaptações futuras.</p>

<p>Em relação ao JavaScript não tive dificuldades como no CSS. Porém não foi como a experiência com HTML. Destes, este foi o que mais tentei e errei. Chegou momentos que não sabia o que estava dando errado, tive que usar "console.log()" linha por linha, "alert()" em alguns casos, em fim, "veni vidi vici". Um exemplo, o mais difícil entre todos, além do validador de entrada, foi o botão de copiar. Eu não entendi como o "execCommand" funcionava e depois vi que o uso do clipboard é mais atual e recomendado. Mesmo assim, a forma mais fácil de copiar o texto foi na verdade copiando o valor da variável e não o texto do parágrafo como fiquei tentando por um bom tempo.</p>

# Conclusão

Transite entre criptografia e descriptografia, use o chrome para ouvir a assistente de voz ao clicar nos botões com os texarea sem valor. E obrigado pela atenção!!

