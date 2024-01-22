# Design Patterns ( Patrones de diseño )
  > Los patrones de diseño son una parte fundamental del desarrollo de software, ya que brindan soluciones típicas a problemas comúnmente recurrentes en el diseño de software. En lugar de proporcionar piezas específicas de software, los patrones de diseño son simplemente conceptos que se pueden usar para manejar temas recurrentes de manera optimizada.

## singleton-pattern ( Patron unico ) 
  > Singletons son clases que se pueden instanciar una vez y se puede acceder a ellas globalmente. Esta instancia única se puede compartir en toda nuestra aplicación, lo que hace que Singletons sea excelente para administrar el estado global en una aplicación.

## proxy-pattern
  > Con un objeto Proxy, tenemos más control sobre las interacciones con ciertos objetos. Un objeto proxy puede determinar el comportamiento cada vez que interactuamos con el objeto, por ejemplo, cuando obtenemos un valor o establecemos un valor.

## provider-pattern
  > Con el provider-pattern, podemos hacer que los datos estén disponibles para múltiples componentes. En lugar de pasar esos datos a cada capa a través de props, podemos envolver todos los componentes en un archivo Provider. 

## prototype-pattern 
  > El patrón prototipo es una forma útil de compartir propiedades entre muchos objetos del mismo tipo. El prototipo es un objeto que es nativo de JavaScript y los objetos pueden acceder a él a través de la cadena de prototipos.

## presentational-container-pattern
  > En React, una forma de hacer cumplir la separación de preocupacioneses mediante el uso del patrón Container/Presentational. Con este patrón, podemos separar la vista de la lógica de la aplicación. La función principal de los componentes de contenedor es pasar datos a los componentes de presentación, que contienen archivos, En muchos casos, el patrón Container/Presentational se puede reemplazar con React Hooks. La introducción de Hooks facilitó a los desarrolladores agregar estado sin necesidad de un componente de contenedor para proporcionar ese estado.

## observer-pattern
  > Con el patrón del observer, podemos suscribir ciertos objetos, ¡Cada vez que ocurre un evento, el observable notifica a todos sus observadores!
  
  Un objeto observable generalmente contiene 3 partes importantes:

  * observers: una matriz de observadores que recibirán una notificación cada vez que ocurra un evento específico.
  * subscribe(): un método para agregar observadores a la lista de observadores.
  * unsubscribe(): un método para eliminar observadores de la lista de observadores
  * notify(): un método para notificar a todos los observadores cada vez que ocurre un evento específico

## module-pattern
  > El patrón del módulo le permite dividir su código en piezas más pequeñas y reutilizables.
  Con el patrón del módulo, podemos encapsular partes de nuestro código que no deberían exponerse públicamente. Esto evita la colisión accidental de nombres y la contaminación del alcance global

## mixin-pattern 
  > Un mixin es un objeto que podemos usar para agregar funcionalidad reutilizable a otro objeto o clase, sin usar la herencia. No podemos usar mixins por sí solos: su único propósito es agregar funcionalidad a objetos o clases sin herencia.

## mediator-pattern
  > El patrón mediador hace posible que los componentes interactúen entre sí a través de un punto central: el mediador. ¡En lugar de hablar directamente entre ellos, el mediador recibe las solicitudes y las envía! En JavaScript, el mediador a menudo no es más que un objeto literal o una función.

## hoc-pattern
  > Son funciones que toman como argumento un componente(BaseComponent) y devulve otro componente(EnhacedComponente)
    Este patrón nos permite reutilizar la lógica de los componentes en toda nuestra aplicación.

## render props
  > Cuando la función ya no la enviamos dentro del componente en su propiedad { children } sino que la enviamos en alguna otra propiedad del componente, puede ser cualquiera, se puede jugar mucho con ese patron para que compartir información y hacer composición de componentes sea mas divertido.
  Lo bueno de la renner props es que podemos pasar en esa props componentes diferenctes si s lo queremos.

##  Render Function
  > Es el patrón de entregar la información de nuestro componente en una función. No es exclusivo de react context, nosotros podemos crear nuestros propios componentes que usen este patrón, que reciban una función para que le podamos enviar la información que queremos proveer y luego si, renderizar los componentes que ya tienen la info gracias a la función.