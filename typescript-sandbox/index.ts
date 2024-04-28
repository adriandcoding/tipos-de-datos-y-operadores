/*Tienes un grupo de 6 amigos y quieres invitarlos a cenar por tu cumpleaños.

Solo puedes permitirte invitar a las bebidas, ya que estás un poco ajustado de dinero.
Tienes un ticket de cena que cuesta 120 € y en el que ya se incluyen las bebidas por un valor de 18 €.
Calcula cuánto tendría que pagar cada comensal para dividir los costos de manera equitativa.
Utiliza JavaScript para hacer el cálculo y mostrar el resultado por consola.*/



function cuentaTotal(amigos: number, cuenta_a_pagar: number) {
  let resultado: number = 0;
  let bebidas: number = 18;
  resultado = (cuenta_a_pagar - bebidas) / amigos;
  return resultado;
}
console.log(cuentaTotal(6, 120));
