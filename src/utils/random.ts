const generateRandomKey = () =>
  `${Math.random().toString(36).substr(2, 9)}-${Date.now()}`

export default generateRandomKey
