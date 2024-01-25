describe('Authentication API Testing',()=>{
    //test cases
    it('Auth/Login',()=>{
        const requestBody={
            agency_id: 11,
            email: "geotoll.qa.smartapp@gmail.com",
            password: "QA2024@ab",
            make:"apple",
            model:"iPhone 13 Pro",
            appversion:"2.1.8",
            osversion:"16.5.1"
        }
        cy.request({
            method:"POST",
            url:"https://api.staging.geotoll.com/auth/login",
            body:requestBody
        })
        .then((response)=>{
            expect(response.statusCode).to.eq(401)
            expect(response.body.title).to.eq("delectus aut autem")
        })
    })
})