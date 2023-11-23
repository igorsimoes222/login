const clinicDetails = {
    semclinic: { name: 'LOGAR', logo: 'logo_semclinic.png' },
    clinic1: { name: 'Az Radiologia', logo: 'logo_clinic1.png' },
    clinic2: { name: 'RR Imagem', logo: 'logo_clinic2.png' },
    clinic3: { name: 'Clínica Serraro', logo: 'logo_clinic3.png' },
};
const validUsers = [
    { clinic: 'clinic1', username: 'user1', password: 'pass1' },
    { clinic: 'clinic2', username: 'user2', password: 'pass2' },
    { clinic: 'clinic3', username: 'user3', password: 'pass3' }
];

// Função para atualizar dinamicamente a imagem e o nome da clínica
function updateClinicInfo() {
    const selectedClinic = document.getElementById('clinic').value;
    const clinicLogo = document.getElementById('clinicLogo');
    const clinicName = document.getElementById('clinicName');

    // Atualize a imagem e o nome da clínica
    if (clinicDetails[selectedClinic]) {
        const { name, logo } = clinicDetails[selectedClinic];
        clinicLogo.src = `/public/img/${logo}`;  // Substitua pelo caminho real do logotipo
        clinicName.innerText = name;
    } else {
        // Se a clínica não estiver nos detalhes, redefina para valores padrão
        clinicLogo.src = '';
        clinicName.innerText = 'Login';
    }
}

function login() {
    // Obtenha a clínica selecionada
    const selectedClinic = document.getElementById('clinic').value;

    // Obtenha o usuário e a senha
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar lógica para validar o login (verificar usuário e senha, por exemplo)
    const isValidCredentials = validUsers.some(user => {
        return user.clinic === selectedClinic && user.username === username && user.password === password;
    });

    if (isValidCredentials) {
        switch (selectedClinic) {
            case 'clinic1':
                window.location.href = '/views/table_clinic1';
                break;
            case 'clinic2':
                window.location.href = '/clinic/2';
                break;
            case 'clinic3':
                window.location.href = '/clinic/3';
                break;
            default:
                console.error('Clínica não reconhecida');
                break;
        }
    } else {
        // Se as credenciais não são válidas, exiba uma mensagem de erro
        alert('Credenciais inválidas. Tente novamente.');
    }
}

    // Redireciona com base na clínica selecionada
    switch (selectedClinic) {
        case 'clinic1':
            // Verifique se o login é válido, aqui apenas redireciona
            window.location.href = '/views/table_clinic1';
            break;
        case 'clinic2':
            window.location.href = '/views/table_clinic2';
            break;
        case 'clinic3':
            window.location.href = '/views/table_clinic3';
            break;
        default:
            console.error('Clínica não reconhecida');
            break;
    }



