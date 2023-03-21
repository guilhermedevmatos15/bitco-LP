/* Como usar? How to use? 
- Adicione no elemento que deseja que o texto fique dinamico o atributo " data-typed "
- obs: Não é preciso atribuir valor ao atributo.
- Este arquivo não se mexe... Vá no arquivo main.js e dê os argumentos desejados a função
- obs: O elemento no qual terá os textos dinamicos deve ter o display inline/inline-block
*/

export default function initTypedTexts(arrayTexts, typeSpeed=300, backSpeed=300, backDelay=400) {
   let typed = new Typed('[data-typed]', {
      strings: [...arrayTexts],
      typeSpeed: typeSpeed, // duração de cada caractere digitado
      backSpeed: backSpeed, // duração de cada caractere apagado
      backDelay: backDelay, // uma palavra para outra
      loop: true,
   });
   typed;
}