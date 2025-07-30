export const fetchWord = async () : Promise<string> => {
  const wordLength = Number(localStorage.getItem('wordLength'));

  if (!wordLength || wordLength < 4 || wordLength > 11) return '';

  const responseWordData = await fetch(`http://localhost:3000/api/palabra/${wordLength}`);
  const wordData = await responseWordData.json();
  const word = wordData.palabra;
  console.log(word);
  if (/[áéíóúÁÉÍÓÚ]/i.test(word)) return await fetchWord();
  return word;
}