// type ConvertAgentNotifType = {
//   agent:
//     | "Propietário ou responsável pelos animais"
//     | "Funcionário"
//     | "Pessoal de laboratório ou de diagnóstico"
//     | "Médico Veterinário de Clínica Privada"
//     | "Médico Veterinário habilitado pelo SVO"
//     | "Médico Veterinário da AGED";
// };

export const ConvertAgentNotif = (
  agent:
    | "Propietário ou responsável pelos animais"
    | "Funcionário"
    | "Pessoal de laboratório ou de diagnóstico"
    | "Médico Veterinário de Clínica Privada"
    | "Médico Veterinário habilitado pelo SVO"
    | "Médico Veterinário da AGED"
) => {
  switch (agent) {
    case "Propietário ou responsável pelos animais":
      return 1;
    case "Funcionário":
      return 2;
    case "Pessoal de laboratório ou de diagnóstico":
      return 3;
    case "Médico Veterinário de Clínica Privada":
      return 4;
    case "Médico Veterinário habilitado pelo SVO":
      return 5;
    case "Médico Veterinário da AGED":
      return 6;

    default:
      return 0;
  }
};
