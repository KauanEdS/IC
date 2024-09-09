/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

document.addEventListener('DOMContentLoaded', function() {
    const fileUpload = document.getElementById('file-upload');
    const fileName = document.getElementById('file-name');

    fileUpload.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            fileName.textContent = this.files[0].name;
        } else {
            fileName.textContent = 'Selecione um ficheiro';
        }
    });

    // Ensure the file name text is reset on page load
    fileName.textContent = 'Selecione um ficheiro';
});
document.getElementById('file-upload').addEventListener('change', function() {
    // Se você não quiser que o formulário seja enviado automaticamente, não adicione código aqui
    // Se houver código para enviar automaticamente, remova ou ajuste conforme necessário
});


$(document).ready( function () {
    $('#datatablesSimple').DataTable();
});

document.getElementById('upload-form').addEventListener('submit', function(event) {
    var fileInput = document.getElementById('file-upload');
    if (!fileInput.files.length) {
        event.preventDefault(); // Impede o envio do formulário
        alert('Selecione um arquivo para enviar');
    }
});








document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("editModal");
    var closeBtn = document.getElementsByClassName("close-btn")[0];

    // Abre o modal
    document.querySelectorAll('.edit-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            var itemId = this.getAttribute('data-id');
            var itemAction = this.getAttribute('data-action');

            // Preenche o formulário
            document.getElementById('editItemId').value = itemId;
            document.getElementById('editAction').value = itemAction;

            // Exibe o modal
            modal.style.display = "block";
        });
    });

    // Fecha o modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

function saveEdit() {
    var itemId = document.getElementById('editItemId').value;
    var action = document.getElementById('editAction').value;

    // Envia os dados para o servidor
    fetch(`/update-action/${itemId}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify({ action: action })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Ação atualizada com sucesso!');
            location.reload(); // Recarrega a página para mostrar as mudanças
        } else {
            alert('Erro ao atualizar a ação.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });

    // Fecha o modal
    document.getElementById('editModal').style.display = "none";
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}