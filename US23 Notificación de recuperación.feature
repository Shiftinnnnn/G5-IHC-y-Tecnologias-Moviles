Feature: US23 - Notificación de recuperación

  Como usuario, quiero recibir una notificación de recuperación por cada objeto perdido
  para ser notificado cuando recupere mi objeto

  Scenario: Recepción de notificación
    Given que el usuario encontró su objeto perdido mediante la página
    When el usuario recupera completamente el objeto
    Then el sistema debe enviar una notificación confirmando la recuperación

  Examples: INPUT
    | Objeto recuperado |
    | Calculadora       |

  Examples: OUTPUT
    | Notificación enviada                               |
    | Tu objeto "Calculadora" ha sido recuperado con éxito |