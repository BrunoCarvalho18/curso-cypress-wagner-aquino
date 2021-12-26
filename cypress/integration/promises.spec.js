// eslint-disable-next-line no-undef
it('sem testes, ainda', ()=>{})

// eslint-disable-next-line no-unused-vars
const getSomething = callback => {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
        setTimeout(() =>
            resolve(1300)
        ,1000)
    })
}

// eslint-disable-next-line no-unused-vars
const system = () =>{
    console.log('init')
    getSomething(some=>`Something is ${some}`)
    console.log('end')
}

system()