export const sampleData = {
  users: [
    { id: 0, login: '0000', nome: 'Tom Cruise', status: 'A', tipoUsuario: 'I', perfis: [0], email: '', numeroDocumento: '', telefone: '' },
    { id: 1, login: '0001', nome: 'Jon Voight', status: 'A', tipoUsuario: 'I', perfis: [2], email: '', numeroDocumento: '', telefone: '' },
    { id: 2, login: '0002', nome: 'Emmanuelle Béart', status: 'I', tipoUsuario: 'I', perfis: [], email: '', numeroDocumento: '', telefone: '' },
    { id: 3, login: '0003', nome: 'Jean Reno', status: 'A', tipoUsuario: 'I', perfis: [], email: '', numeroDocumento: '', telefone: '' },
    { id: 4, login: '0004', nome: 'External 4', status: 'A', tipoUsuario: 'E', perfis: [], email: '', numeroDocumento: '', telefone: '' },
    { id: 5, login: '0005', nome: 'External 5', status: 'A', tipoUsuario: 'E', perfis: [], email: '', numeroDocumento: '', telefone: '' },
    { id: 6, login: '0006', nome: 'External 6', status: 'S', tipoUsuario: 'E', perfis: [], email: '', numeroDocumento: '', telefone: '' },
    { id: 7, login: '0007', nome: 'External 7', status: 'A', tipoUsuario: 'E', perfis: [0,1,2], email: '', numeroDocumento: '', telefone: '' },
  ],
  roles: [
    { id: 0, name: 'ADMINISTRADOR'},
    { id: 1, name: 'CONSULTANTE'},
    { id: 2, name: 'CONSULTANTE_RELATORIO_FINAL'},
  ],

  components: [
    { id: 0, name: 'INFORMATION_REQUEST'},
    { id: 1, name: 'AUDIT_EXCEPTION'},
    { id: 2, name: 'TRANSACTION_LIST'},
    { id: 3, name: 'FINAL_REPORT'},
    { id: 4, name: 'PRELIMINARY'},
  ],
};
