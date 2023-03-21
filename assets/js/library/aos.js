/* Como usar? How to use? 
- Adicione no elemento que deseja que o texto fique dinamico o atributo " data-aos="fade" "
- Vá no site para ver todas modificações
- obs: Não é preciso atribuir valor ao atributo.
- Este arquivo não se mexe... Vá no arquivo main.js e dê os argumentos desejados a função
*/

export default function initAOS(duration=1500) {
   AOS.init({
      duration: duration,
   });
}