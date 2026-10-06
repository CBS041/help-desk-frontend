export function generateRandomDate() {
  const initialDay = 1
  const initialMonth = 1
  const initialYear = 2020

  // 1. Criar a data inicial (O mês em JavaScript começa no 0, então subtraímos 1)
  const startDate = new Date(initialYear, initialMonth - 1, initialDay)

  // 2. Definir a data final (vamos usar a data de hoje)
  const endDate = new Date()

  // 3. Gerar um timestamp aleatório entre o início e o fim
  const randomTimestamp =
    startDate.getTime() +
    Math.random() * (endDate.getTime() - startDate.getTime())

  // 4. Criar o objeto de data a partir desse timestamp
  const randomDate = new Date(randomTimestamp)

  // 5. Extrair dia, mês e ano, garantindo que fiquem com 2 dígitos
  const day = String(randomDate.getDate()).padStart(2, '0')
  const month = String(randomDate.getMonth() + 1).padStart(2, '0')
  const year = randomDate.getFullYear()

  // 6. Retornar no formato dd/mm/aaaa
  return `${day}/${month}/${year}`
}
