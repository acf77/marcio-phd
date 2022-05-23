module.exports = {
  convertAgentNotif: (agent) => {
    switch (agent) {
      case "Propietário ou responsável pelos animais":
        return 1;
        break;
      case "Funcionário":
        return 2;
        break;
      case "Pessoal de laboratório ou de diagnóstico":
        return 3;
        break;
      case "Médico Veterinário de Clínica Privada":
        return 4;
        break;
      case "Médico Veterinário habilitado pelo SVO":
        return 5;
        break;
      case "Médico Veterinário da AGED":
        return 6;
        break;

      default:
        0;
        break;
    }
  },
};
