const stopwatch = () => {

    const clock = document.getElementsByClassName('clock')[0]
    const birthday = new Date(2023, 11, 5) // especificando data 5 de novembro de 2023
    const today = new Date() // criando a data do dia atual
    const difference = birthday.getTime() - today.getTime() // calculando a diferença em milisegundos
    const seconds = Math.floor(difference / 1000) % 60; // transformando milisegundos em segundos e com - % faz com que seconds = 0 ~ 60
    const minutes = Math.floor(difference / (1000 * 60)) % 60; // segundos para minuto
    const hours = Math.floor(difference / (1000 * 60 * 60)) % 24; // minutos para segundo - horas entre 0 e 24
    const days = Math.floor(difference / (1000 * 60 * 60 * 24)); // horas para dias - sem limites
    const hour = hours < 10 ? `0${hours}` : hours // condicional - se for < 10 adicionar um 0 à frente
    const minute = minutes < 10 ? `0${minutes}` : minutes //condicional - se for < 10 adicionar um 0 à frente
    const second = seconds < 10 ? `0${seconds}` : seconds //condicional - se for < 10 adicionar um 0 à frente

    clock.innerHTML = `${days}:${hour}:${minute}:${second}` //basicamente o painel de saída

}

setInterval(() => {
    stopwatch()
}, 1000); // atualiza a tela a cada 1000 milisegundos (1 segundo)
