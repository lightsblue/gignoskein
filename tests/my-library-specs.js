define(['my-library'], function(myLibrary){

  describe("my-library", function(){
    describe("sayHello", function(){
      it("should say Hello", function(){
        expect(myLibrary.sayHello()).toEqual("Hello");
      })
    })
  })
  
})