Este foi um teste prático feito para entrevista da Gauge.

---
## Rodando o projeto

Para o projeto funcionar é preciso instalar as dependências. Basta [instalar o bower](https://bower.io/#install-bower) e executar no terminal o seguinte comando:

```
bower install
```

Depois disso, você precisará de um servidor local (para não ter problema com o carregamento dos arquivos estáticos). Você pode, por exemplo, utilizar o Python para isso. Se você tiver ele instalado em sua máquina, abra o terminal, vá até a pasta do projeto e execute o comando:

```
python -m SimpleHTTPServer
```

Pronto, sua aplicação já está de pé! Pode acessá-la pelo browser no endereço: `http://localhost:8000/`

## Sobre a escolha das tecnologias

Para implementar essa solução, foi utilizado o framework JavaScript **AngularJS**. O motivo da escolha foi simplesmente para demonstrar os conhecimentos do framework, levando em consideração que pelo escopo e complexidade do problema talvez não houvesse a necessidade de utilizá-lo.

Os gráficos foram implementados utilizando o [Highcharts](http://www.highcharts.com). E para integrá-lo com o AngularJS foi utilizado o [highcarts-ng](https://github.com/pablojim/highcharts-ng).

O design foi todo feito em CSS puro, fazendo uso do **Flexbox** e utilizando conceitos do [BEM CSS](http://getbem.com/introduction) e o [SMACSS](https://smacss.com) para organização código.

E para gerenciar essas depêndencias, como já puderam perceber, o bower fez este trabalho!

## Melhorias

Apesar do projeto resolver o problema inicial, há muitas melhorias que poderiam ser implementadas! Mas pra isso precisamos de mais horas de trabalho

- A aplicação não está coberta por testes, isso é terrível!
- Os arquivos JavaScript da aplicação estão sendo importados um por um, o que implica em várias requisições feitas pelo browser e isso diminui o desempenho. Com uma ferramenta de automação de tarefa (os famosos TaskRunners) é possível concatenar todos os arquivos em um único `script.js`. 
- Além disso, os arquivos JavaScript não estão minificados. Assim como o CSS. Outra coisa que poderia ser feita por um TaskRunner como, por exemplo, o Gulp e o Grunt.
- Em relação a usabilidade, os gráficos resolvem o problema atualmente, mas poderiam ser muito melhor. Seria ótimo também apresentar estes dados de forma tabular, pois é uma alternativa muito interessante visualmente e também em relação a acessibilidade (leitores de tela).
