export const WindowEnd = ({ isWin = false }: { isWin: boolean }) => {
  return (
    <>
      <h1>{isWin ? 'You Win' : 'You Lose'}</h1>
    </>
  )
}