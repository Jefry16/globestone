export function hideAlert(){
    document.querySelectorAll('.alert').forEach(alert=> {
        setTimeout(function(){
            alert.remove()
        }, 5000)
    })
}