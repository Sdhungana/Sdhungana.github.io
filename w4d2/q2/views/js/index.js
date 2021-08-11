$(() => {   
    $("#form").submit(() => {
        $.get({
            url:"/8ball", 
    })
    .done(successMethod).fail(failMethod);

    return false;
    })
    function successMethod(data) {
        let textBox = $("#inputbox");
        textBox.val(data);
        textBox.select();
    }
    function failMethod() {
    $("#msg").text("Sorry!! Unable to make request :(");
    }
})


