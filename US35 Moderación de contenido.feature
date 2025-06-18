Feature: US35 - Moderación de contenido

  Como usuario, quiero visualizar solo contenido relacionado
  para no perder tiempo con contenido no relacionado a los objetos perdidos

  Scenario: Revisión de publicación
    Given que el usuario decide hacer una publicación
    When el usuario presione la opción de “Publicar”
    Then el sistema realizará una revisión de la publicación

  Scenario: Rechazo de publicación
    Given que el usuario decide hacer una publicación
    When el usuario presione la opción de “Publicar”
    And la publicación no tenga relación con el contenido permitido en el producto
    Then el sistema rechazará la publicación con un mensaje

  Examples: INPUT
    | Contenido de publicación                             |
    | "Objeto olvidado en la sala de estudio del pabellón C" |
    | "Perdí mis llaves en el estacionamiento del campus"   |

  Examples: OUTPUT
    | Resultado                                        |
    | Publicación aceptada y visible en la plataforma |
    | Publicación aceptada y visible en la plataforma |
