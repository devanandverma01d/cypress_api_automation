describe('API Testing',()=>{
    //test cases
    it('Approach 1- hard coded json object',()=>{
        const requestBody={
            userId: 2,
            id: 2,
            title: "delectus aut autem",
            completed: false
        
        }
        cy.request({
            method:"POST",
            url:"https://jsonplaceholder.typicode.com/todos/",
            body:requestBody
        })
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.title).to.eq("delectus aut autem")
        })
    })

    it('Approach 2- Dynamically generated json object',()=>{
        const requestBody={
            userId: 2,
            id: 2,
            title: Math.random().toString(5).substring(2),
            completed: false
        
        }
        cy.request({
            method:"POST",
            url:"https://jsonplaceholder.typicode.com/todos/",
            body:requestBody
        })
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.title).to.eq(requestBody.title)
        })
    })
    it.only('Approach 3- using Fixture',()=>{
        cy.fixture('user').then((data)=>{
            const requestBody = data
            cy.request({
                method:"POST",
                url:"https://jsonplaceholder.typicode.com/todos/",
                body:requestBody
            })
            .then((response)=>{
                expect(response.status).to.eq(201)
                expect(response.body.title).to.eq(requestBody.title)
            })
        })  
        
    })
})