// SIMULAMOS LA CARGA DE UN BALANCE INICIAL
let balance = 100_000;

// CAPTURAMOS EL ELEMENTO DEL DOM EN EL QUE MOSTRAREMOS EL BALANCE
const balanceEl = document.getElementById("balance");

// ASIGNAMOS EL VALOR SIMULADO
if (balanceEl) balanceEl.textContent = balance.toLocaleString("es-CL");

// REGISTROS DE CONTACTO DEL CLIENTE
const contactos = [
    {
        id: 1,
        nombre: "John Doe",
        cbu: "123456789",
        alias: "john.doe",
        banco: "ABC Bank",
    },
    {
        id:2,
        nombre: "Jane Smith",
        cbu: "987654321",
        alias: "jane.smith",
        banco: "XYZ Bank",
    },
];


// FUNCIÓN QUE CARGA LOS CONTACTOS EN LA UL DEL DOM USANDO DocumentFragment
function cargarContactos(listaContactos){
    const listaEl = document.getElementById("listaContactos");
    if (!listaEl) return;

    // Limpiamos la lista existente de forma eficiente
    while (listaEl.firstChild) listaEl.removeChild(listaEl.firstChild);

    // Creamos un fragmento para evitar reflow/repaint repetidos
    const fragment = document.createDocumentFragment();

    for (const contacto of listaContactos) {
        const { id, nombre, cbu, alias, banco } = contacto;

        const li = document.createElement('li');
        li.className = 'list-group-item';

        const input = document.createElement('input');
        input.className = 'form-check-input me-1';
        input.type = 'radio';
        input.name = 'contacto';
        input.value = cbu;
        input.id = `contacto${id}`;
        input.required = true;

        const label = document.createElement('label');
        label.className = 'form-check-label';
        label.htmlFor = `contacto${id}`;
        label.textContent = `${nombre}, CBU: ${cbu}, Alias: ${alias}, Banco: ${banco}`;

        li.appendChild(input);
        li.appendChild(label);

        fragment.appendChild(li);
    }

    // Añadimos todo de una sola vez al DOM
    listaEl.appendChild(fragment);
}


// FUNCIÓN PRINCIPAL
function main(){
    cargarContactos(contactos);
}

main();
