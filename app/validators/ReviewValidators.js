export default ReviewValidators = {
  rating: {
    title: 'Avaliação',
    validate: [{
      validator: 'isNumeric',
    }]
  },
  text: {
    title: 'Descreva sua experiência',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
    }]
  },
  errorMessage: (error) => {
    switch (error.id) {
      default:
        return 'Oops! Ocorreu um erro ao acessar nosso servidor. Por favor, tente novamente.'
    }
  }
}
