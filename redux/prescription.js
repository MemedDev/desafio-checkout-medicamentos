const prescription = {
  date: new Date().toLocaleString("pt-br", { dateStyle: "short" }),
  medicaments: [
    { name: "Ácido zoledrônico 4mg", quantity: 1 },
    { name: "Água para injeção 1mL", quantity: 1 },
    { name: "Betaserc 16mg", quantity: 1 }
  ]
};

export default () => {
  return prescription;
};
