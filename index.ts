function appendValue(value: string): void{
  const display = document.getElementById("display") as HTMLInputElement
  display.value += value;
}
function clearDisplay(): void{
  const display = document.getElementById('display') as HTMLInputElement;
  display.value = '';
}
function calculate(): void {
  const display = document.getElementById('display') as HTMLInputElement;
  try{
    display.value = eval(display.value).toString();
  } catch (error){
    display.value = 'Error';
  }
}