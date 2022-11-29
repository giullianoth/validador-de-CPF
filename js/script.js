$(function () {

    $("input").on("keyup", function (e) {

        e.preventDefault();

        var value = $(this).val();

        if ((value.length == 3 || value.length == 7) && e.which !== 8 && e.which !== 46) {
            value += ".";
            $(this).val(value);
        } else if (value.length == 11 && e.which !== 8 && e.which !== 46) {
            value += "-";
            $(this).val(value);
        } else {
            $(this).val(value);
        }
        //$(".result").text(value).append(" <b>" + value.length + "</b>");
        //$(".result").append("<p>" + e.which + "</p>");

        if (value.length == 14) {

            var valid = null;
            var digit1 = [];
            var digit2 = [];
            var sum1 = 0;
            var sum2 = 0;
            var weight1 = 1;
            var weight2 = 0;
            var verify1 = null;
            var verify2 = null;

            for (i = 0; i <= 10; i++) {
                if (value[i] == "." || value[i] == "-") {
                    continue;
                }
                digit1.push(parseInt(value[i]) * weight1);
                digit2.push(parseInt(value[i]) * weight2);
                weight1++;
                weight2++;
            }

            digit1.forEach(function (el) {
                sum1 += el;
            });
            digit2.forEach(function (el) {
                sum2 += el;
            });

            verify1 = sum1 % 11;
            if (verify1 == 10) {
                verify1 = 0;
            }

            sum2 += verify1 * weight2;

            verify2 = sum2 % 11;
            if (verify2 == 10) {
                verify2 = 0;
            }

            if (verify1 == value[value.length - 2] && verify2 == value[value.length - 1]) {
                valid = true;
            } else {
                valid = false;
            }

            if (valid) {
                $(".result").html("<p>CPF válido!</p>").find("p").css({
                    "background-color": "green",
                    "color": "white"
                });
            } else {
                $(".result").html("<p>CPF inválido!</p>").find("p").css({
                    "background-color": "red",
                    "color": "white"
                });
            }
            /*
            console.log(digit1);
            console.log(digit2);
            console.log(sum1);
            console.log(sum2);
            console.log(verify1);
            console.log(verify2);
            console.log(valid);
            */
        }

        if (e.which === 8 || e.which === 46) {
            $(".result").find("p").remove();
        }
    });

});