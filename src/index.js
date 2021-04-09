console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    //Challenge 1
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const container = document.querySelector('#dog-image-container')

    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {
        data.message.forEach(element => {
            const img = document.createElement('img')
            img.src = element
            container.appendChild(img)
        })
    })

    //Challenge 2,3, and 4
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const breed = document.querySelector('#dog-breeds')
    const drop = document.querySelector('#breed-dropdown')
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        Object.keys(data.message).forEach(keys => {
            const li = document.createElement('li')
            li.innerText = keys
            li.addEventListener('click', function() {
                li.style.color = 'firebrick'
            })
            breed.appendChild(li)

            drop.addEventListener('change', function () {
                breed.innerHTML = ''
                switch(drop.value) {
                    case 'a':
                        Object.keys(data.message).forEach(keys => {
                            if (keys.startsWith('a')) {
                                const li = document.createElement('li')
                                li.innerText = keys
                                li.addEventListener('click', function() {
                                li.style.color = 'firebrick'
                                })
                                breed.appendChild(li)
                            }
                        })
                        break
                    case 'b':
                        Object.keys(data.message).forEach(keys => {
                            if (keys.startsWith('b')) {
                                const li = document.createElement('li')
                                li.innerText = keys
                                li.addEventListener('click', function() {
                                li.style.color = 'firebrick'
                                })
                                breed.appendChild(li)
                            }
                        })
                        break
                    case 'c':
                        Object.keys(data.message).forEach(keys => {
                            if (keys.startsWith('c')) {
                                const li = document.createElement('li')
                                li.innerText = keys
                                li.addEventListener('click', function() {
                                li.style.color = 'firebrick'
                                })
                                breed.appendChild(li)
                            }
                        })
                        break
                    default:
                        Object.keys(data.message).forEach(keys => {
                            if (keys.startsWith('d')) {
                                const li = document.createElement('li')
                                li.innerText = keys
                                li.addEventListener('click', function() {
                                li.style.color = 'firebrick'
                                })
                                breed.appendChild(li)
                            }
                        })
                }
            })
        
        })
    })
})