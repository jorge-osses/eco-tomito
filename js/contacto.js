var form = document.getElementById("my-form");
const divMensaje = document.createElement('p');
divMensaje.classList.add('success', 'hidden');
divMensaje.setAttribute("id", "my-form-status");

        async function handleSubmit(event) {
            event.preventDefault();
            document.querySelector('.resetContact').insertBefore(divMensaje, null);
            
            var status = document.getElementById("my-form-status");
            var data = new FormData(event.target);
            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                status.classList.remove('hidden');
                status.innerHTML = "Gracias por comunicarse!";
                form.reset()
                setTimeout(() => {
                    status.remove();
                },4000)
            }).catch(error => {
                status.innerHTML = "Uups! Hay un problema para enviarlo";
            });
        }
        form.addEventListener("submit", handleSubmit)