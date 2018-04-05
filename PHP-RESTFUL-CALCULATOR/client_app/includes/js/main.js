var method, func, num2, num3, num4;

function run() {
    var dataObj = {
        'func': func,
        'num1': num2,
        'num2': num3,
        'num3': num4
    };
    console.log(dataObj);
    $.ajax({
        url: "http://shenkar.html5-book.co.il/2017-2018/dcs/dev_32/service_calculator/DCS.php",
        data: dataObj,
        type: method,
        success: function(data) {
            $(".result").text("Result: " + data.retVal);
            console.log("retVal: " + data.retVal);
        }
    });
}

$(function() {
    $("#GET .input-group-prepend").on("click", "button", function() {
        method = "GET";
        for (var i = 2; i < 5; i++)
            eval("num" + i + "=" + $("#GET :nth-child(" + i + ")").val());
        $(this).attr("id") == "SUM" ? func = "sum" : ($(this).attr("id") == "AVG" ? func = "avg" : func = "multi");
        run();
    });
    $("#POST .input-group-prepend").on("click", "button", function() {
        method = "POST";
        for (var i = 2; i < 5; i++)
            eval("num" + i + "=" + $("#POST :nth-child(" + i + ")").val());
        $(this).attr("id") == "SUM" ? func = "sum" : ($(this).attr("id") == "AVG" ? func = "avg" : func = "multi");
        run();
    });
    $("#PUT .input-group-prepend").on("click", "button", function() {
        method = "PUT";
        for (var i = 2; i < 5; i++)
            eval("num" + i + "=" + $("#PUT :nth-child(" + i + ")").val());
        $(this).attr("id") == "SUM" ? func = "sum" : ($(this).attr("id") == "AVG" ? func = "avg" : func = "multi");
        run();
    });
});