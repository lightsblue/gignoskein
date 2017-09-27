define(
  ['jquery', 'my-library', 'mustache', "text!template/test.html"],
  function($, myLibrary, mustache, html) {

  describe("my-library", function(){
    describe("sayHello", function(){
      it("should say Hello", function(){
        expect(myLibrary.sayHello()).toEqual("Hello");
      })
    })
  })

  describe("mustache", function(){
    describe("render", function(){
      it("should render", function(){
        var view = {
          title: "Joe",
          calc: function () {
            return 2 + 4;
          }
        };

        var output = mustache.render("{{title}} spends {{calc}}", view);
        expect(output).toEqual("Joe spends 6");
      })
    })

    describe("template", function(){
      it("should have loaded and been appended", function(){
        expect($("h1.test").size()).toEqual(0);
        expect(html).toEqual("<h1 class=\"test\">Test</h1>\n");
        $("body").append(html);
        expect($("h1.test").size()).toEqual(1);
        $("h1.test").remove();
        expect($("h1.test").size()).toEqual(0);
      })
    })
  })
  
})