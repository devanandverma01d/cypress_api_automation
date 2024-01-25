describe("HTTP Request",()=>{
    it('GET Call',()=>{
        cy.request({
            method:'GET',
            url:'https://jsonplaceholder.typicode.com/posts/1'
        })
        .its('status')
        .should('equal',200)
    })
    it('POST Call',()=>{
        cy.request({
            method:"POST",
            url:"https://jsonplaceholder.typicode.com/posts/",
            body:{
                userId:1,
                title:"this is post 1",
                body:"This is post call"
            }
        })
        .its("status")
        .should('equal',201)
    })
    it('UPDATE Call',()=>{
        cy.request({
            method:"PUT",
            url:"https://jsonplaceholder.typicode.com/posts/1",
            body:{
                userId:1,
                id:1,
                title:"test -updated",
                body:"This is put call"
            }
        })
        .its('status')
        .should('equal',200)
    })
    it('DELETE',()=>{
        cy.request({
            method:"DELETE",
            url:'https://jsonplaceholder.typicode.com/posts/1'
        })
        .its('status')
        .should('equal',200)
    })
})