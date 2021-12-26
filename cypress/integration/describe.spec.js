
// eslint-disable-next-line no-undef
it('A external test ...',() =>{

})

// eslint-disable-next-line no-undef
describe('Should group tests....', () => {
    // eslint-disable-next-line no-undef
    describe('Should group more specific tests....', () =>{
    // eslint-disable-next-line no-undef
        it.skip('A internal test...',()=>{
        
        })
    })

    // eslint-disable-next-line no-undef
    describe('Should group more specific tests. 2...', () =>{
        // eslint-disable-next-line no-undef
        it('A specific test 2...',()=>{
            
        })
    })

    // eslint-disable-next-line no-undef
    it('A internal tests...', () => {

    })
})
