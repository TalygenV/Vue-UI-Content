var mobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    mobile = true;
}

function HandleErrorOccured(exception, fncName) {
    hideLoader();
    // alert(fncName + '--' + exception.message);
    printlog(fncName + '--' + exception.message);
    return false;
}

function printlog(message) {
    try {
        //console.log(message);
    } catch (ex) { }

}

$.ajaxSetup({
    statusCode: {
        302: function () {
            //alert('302');
            window.location = "/Account/Login";
        }
    },
    error: function (xhr, ajaxOptions, thrownError) {
        if (xhr.status == 302) {
            //alert('302');
            window.location = "/Account/Login";
        }
    }
});
function SetBootstraptoolTip() {
    //debugger;
    $("body").find(".tooltip.show").remove();

    var ctrl = $("body").find("a:not(.noToolTip)[title][data-toggle-tooltip!=tooltip]");


    if (mobile == false && ($("#hdnisResponsive").length > 0 && $("#hdnisResponsive").val() == "R")) {
        $("body").find("table").find("a").attr("data-placement", "left");

        ctrl.attr("data-toggle-tooltip", "tooltip").tooltip({ trigger: 'hover' });

        $("body").find("a.actionicons[data-toggle-tooltip=tooltip]").addClass("float-left");

        ctrl = $("body").find("a:not(.noToolTip)[title][data-toggle-tooltip=tooltip]");
        /*ctrl.click(function () {
            $("body").find(".tooltip.show").remove();
            $(this).tooltip('dispose');           
        });*/

        if ($(".send-save-btn").length > 0) {
            ctrl = $(".send-save-btn");
            ctrl.attr("data-toggle-tooltip", "tooltip").tooltip({ trigger: 'hover' });

            /*ctrl.click(function () {
                $("body").find(".tooltip.show").remove();
                $(this).tooltip('dispose');
            });*/
        }
        if ($("li.selectall").length > 0) {
            ctrl = $("li.selectall");
            ctrl.attr("data-toggle-tooltip", "tooltip").tooltip({ trigger: 'hover' });

            /*ctrl.click(function () {
                $("body").find(".tooltip.show").remove();
                $(this).tooltip('dispose');
            });*/
        }
        if ($("li.selectnon").length > 0) {
            ctrl = $("li.selectnon");
            ctrl.attr("data-toggle-tooltip", "tooltip").tooltip({ trigger: 'hover' });

            /*ctrl.click(function () {
                $("body").find(".tooltip.show").remove();
                $(this).tooltip('dispose');
            });*/
        }
        if ($(".modal-footer button[title]").length > 0) {
            ctrl = $(".modal-footer button[title]");
            ctrl.attr("data-toggle-tooltip", "tooltip").tooltip({ trigger: 'hover' });

            /*ctrl.click(function () {
                $("body").find(".tooltip.show").remove();
                $(this).tooltip('dispose');
            });*/
        }
        if ($("#divShowLocationAvailability li[title]").length > 0) {
            ctrl = $("#divShowLocationAvailability li[title]");
            ctrl.attr("data-toggle-tooltip", "tooltip").tooltip({ trigger: 'hover' });

            /*ctrl.click(function () {
                $("body").find(".tooltip.show").remove();
                $(this).tooltip('dispose');
            });*/
        }

    }

}
function HideChatBox()
{
 setTimeout(function(){ 
     $(".chat_popup").addClass("chat-btn-hide");
     $("i#arrow-rotate").toggleClass('arrow-rotate');
   }, 5000);
}
$(document).ready(function () {
   HideChatBox();
    $(document).click(function (e) {
       // debugger;
        var ele = $(e.target);
        if (!ele.hasClass("hasdatetimepicker") && !ele.hasClass("bootstrap-datetimepicker-widget") && !ele.hasClass("input-group-append") && !$(ele).closest(".input-group-append").length) {
            if ($(".hasdatetimepicker").length > 0) {
                try {
                    $(".hasdatetimepicker").datetimepicker("hide");
                }
                catch (ex) { //console.log(ex.message);
                }
            }
        }
        if ($("body").find("[data-toggle-tooltip=tooltip]").length) {
            try {
                $("body").find("[data-toggle-tooltip=tooltip]").tooltip('hide');
            }
            catch (ex) {}
        }
        $("body").find(".tooltip.show").remove();
    });
    $("body").on("keyup paste", "input[data-numberonly='yes']", function () {
        setTimeout(jQuery.proxy(function () {
            this.val(this.val().replace(/[^0-9]/g, ''));
        }, $(this)), 0);
    });
    $("body").on("keyup paste", "input[data-postalcode='yes']", function () {
        setTimeout(jQuery.proxy(function () {
            this.val(this.val().replace(/[^0-9][^A-Z][^a-z]/g, ''));
        }, $(this)), 0);
    });
    $("body").on("keyup, blur, change", "input:text,select,textarea", function () {

        if ($.trim($(this).val()) != "") {
            $(this).removeClass("is-invalid");
            $(this).parent().find("span.invalid-feedback").removeClass("invalid-feedback").html('');
        }
    });

    if (mobile) {
        $(".search-head a.searchsh-btn").addClass("collapsed");
    }
    if ($("#hdnisResponsive").length > 0 && $("#hdnisResponsive").val() == "R") {
        SetBootstraptoolTip();
    }
    jQuery.fn.NumerOnly = function () {
        return this.each(function () {
            $(this).keydown(function (e) {
                if (e.shiftKey) e.preventDefault();
                var key = e.charCode || e.keyCode || 0;
                return key == 8 || key == 9 || key == 46 || key >= 35 && key <= 40 || key >= 48 && key <= 57 || key >= 96 && key <= 105;
            });
        });
    };
    jQuery.fn.Decimal = function (decimalPlace, allowNegative) {
        try {
            return this.each(function () {
                var cul = Globalize.culture();
                var sep = cul.numberFormat["."];
                if (decimalPlace == null) {
                    decimalPlace = 2;
                }
                var sepKeyVal = 0;
                if (sep == '.') {
                    sepKeyVal = 190;
                }
                else if (sep == ',') {
                    sepKeyVal = 188;
                }
                if (allowNegative == undefined) {
                    allowNegative = false;
                }
                $(this).keydown(function (e) {
                    if (e.shiftKey) e.preventDefault();
                    var inputValue = $(this).val();
                    var key = e.charCode || e.keyCode || 0;

                    if ((key == sepKeyVal || key == 110) && (inputValue.indexOf(sep) != -1 || decimalPlace == 0)) return false;

                    if ((allowNegative == true) && (key == 189 || key == 109) && inputValue.length > 0) {
                        return false;
                    }

                    else if ((allowNegative != true) && (key == 189 || key == 109)) {
                        return false;
                    }

                    if (sepKeyVal == 188 && key == 110) return false;

                    if (key == 8 || key == 9 || key == 46 || key == 110 || key == sepKeyVal || key == 189 || key == 109 || (key >= 33 && key <= 40)) return true;
                    var arrDecimalPlace = inputValue.split(sep);
                    //if (arrDecimalPlace.length > 1 && (arrDecimalPlace[1]).toString().length > decimalPlace) {
                    //    e.preventDefault ? e.preventDefault() : e.returnValue = false;
                    //    return false
                    //}
                    if ((key >= 48 && key <= 57) || (key >= 96 && key <= 105)) return true;
                    e.preventDefault ? e.preventDefault() : e.returnValue = false;
                    return false;
                });

                $(this).keyup(function (e) {
                    var inputValue = $(this).val();
                    if (e.shiftKey) e.preventDefault();
                    var key = e.charCode || e.keyCode || 0;
                    if ((key == sepKeyVal || key == 110) && (inputValue.indexOf(sep) != -1 || decimalPlace == 0)) return false;
                    if (sepKeyVal == 188 && key == 110) return false;
                    if ((allowNegative == true) && (key == 189 || key == 109) && inputValue.length > 0) {
                        return false;
                    }

                    else if ((allowNegative != true) && (key == 189 || key == 109)) {
                        return false;
                    }

                    if (key == 8 || key == 9 || key == 46 || key == 110 || key == sepKeyVal || key == 189 || key == 109 || (key >= 33 && key <= 40)) return true;
                    var arrDecimalPlace = inputValue.split(sep);
                    if (arrDecimalPlace.length > 1 && (arrDecimalPlace[1]).toString().length > decimalPlace) {
                        $(this).val(arrDecimalPlace[0] + sep + (arrDecimalPlace[1]).toString().substring(0, decimalPlace));
                    }
                });
                try {
                    $(this).onblur(function (e) {
                        var orignal = $(this).val();
                        var restValue = orignal.split(sep);
                        if (restValue[1] == "") {
                            if (restValue[0] == "") {
                                $(this).val("0" + sep + "00");
                            }
                            else {
                                $(this).val(restValue[0] + sep + "00");
                            }
                            return true;
                        }
                        return true;
                    });
                } catch (e) {

                }
            });
        } catch (error) {
            return true;
        }
    };
    String.Format = function () {
        var s = arguments[0];
        for (var i = 0; i < arguments.length - 1; i++) {
            var reg = new RegExp("\\{" + i + "\\}",
                "gm");
            s = s.replace(reg, arguments[i + 1]);
        }
        return s;
    };
    $(".alert:not(.alert-success)").click(function () {
        alert(Globalize.localize("RequestedPageInProgress"));
    });

    $("div.navcont nav ul.megaMenu a[checkPrivilege='Yes']").unbind("click").click(function (ev) {
        ev.preventDefault();
        var hrefLink = $(this).attr("href");
        if (hrefLink == "javascript:;" || hrefLink.indexOf("/") == -1 && hrefLink.length == 0) return;
        GetPrivilege(hrefLink, true, true);
    });
    $("div.btncontainer div.body a[checkPrivilege='Yes']").unbind("click").click(function (ev) {
        ev.preventDefault();
        var hrefLink = $(this).attr("href");
        if (hrefLink == "javascript:;" || hrefLink.indexOf("/") == -1 && hrefLink.length == 0) return;
        GetPrivilege(hrefLink, true, true);
    });
    $("div.sitemap a[checkPrivilege='Yes']").unbind("click").click(function (ev) {
        ev.preventDefault();
        var hrefLink = $(this).attr("href");
        if (hrefLink == "javascript:;" || hrefLink.indexOf("/") == -1 && hrefLink.length == 0) return;
        GetPrivilege(hrefLink, true, true);
    });

    $("input[type='text'],[type='password']:not([autocomplete='off'])").attr("autocomplete", "off");
    $("textarea").bind("keypress", function (event) {
        var keycode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
        //debugger;
        if (keycode == 190 || keycode == 188 || keycode == 60 || keycode == 62) return false;
        return true;
    });


    $("#UserLangCode").val($("#Language").val());
    $("#nav_lang .dd-option").click(function () {

        var langname = $(this).find('label').attr('typefor');

        $("#lnkLanguage").show();
        $.ajax({
            url: '/Home/ChangeLanguage',
            //data: { langName: $("#Language option:selected").val() },
            data: {
                langName: $(this).find('label').attr('typefor')
            },
            type: 'get',
            async: false,
            success: function (dropDownData) {

                // $('#hdnCulture').val(langname);
                window.location = window.location.href;
            },
            error: function () { }

        });
    });
    $(".navlanguage a").click(function () {
        var langname = $(this).attr('typefor');
        $.ajax({
            url: '/Home/ChangeLanguage',
            data: {
                langName: langname
            },
            type: 'get',
            async: false,
            success: function (dropDownData) {
                window.location.reload(true);
            },
            error: function () { }
        });
    });
    //$("#Language").change(function () {

    //    $.ajax({
    //        url: '/Home/ChangeLanguage',
    //        data: {
    //            langName: $("#Language option:selected").val()
    //        },
    //        //data: { langName: $(this).find('label').attr('typefor') },
    //        type: 'get',
    //        async: false,
    //        success: function (dropDownData) {
    //            window.location = window.location.href;
    //        },
    //        error: function () { }

    //    });
    //});
});

function showLoader() {
    //    try {
    //        if ($("#divProgress").css("display") == "none") $("#divProgress").show()
    //    } catch (ex) {
    //        alert("showLoader--" + ex.message)
    //    }
    $("#divProgress").css("opacity", "").show();
    //$("#divProgress").css({ display: "inline" });
}

function hideLoader() {
    $("a[href='#nogo']").removeAttr("href");
    //    $("#divProgress").hide(1000);   
    setTimeout(function () { $("#divProgress").css({ display: "none" }); }, 300);
}


function ShowStatusMessage(messageKey, action, statusClass) {
    try {
        if ($.trim(messageKey).length >= 1) $("#spanStatusMessage").text(messageKey);
        $("#spanStatusMessage").addClass(statusClass);
    } catch (ex) {
        alert("ShowStatusMessage--" + ex.message);
    }
}

function getRootURL() {
    var baseUrl = location.href;
    var rootUrl = location.protocol + "//" + location.host;
    if (baseUrl.indexOf("localhost") == -1) return rootUrl + "/";
    else return rootUrl + "/";
}


function potentialDangerous(val) {
    //debugger;
    //Old Regex 
    //var reg = /^([^<>';&]|&+[^#<>;])*&*$/;

    //var reg = /^([^<>;&]|&+[^#<>;])*&*$/; comment By deepak: to add the semicolon in task(edit/progress) comment section
    var reg = /^([^<>&]|&+[^#<>])*&*$/;   
    //Modified By :Shilpa Sharma
    //Modified At :5 July 2013
    //Summary : Modified for validating the input against ascii characters.
    //var reg = /^[^<>~!#$%^*';]*$/;
    //Modified By :Radhay
    //Modified At :30 june 2014
    //Summary : Modified to allow ' 
    var isValid = reg.test(val);
    return isValid;
}

function ValidateEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var isValid = reg.test(email);
    return isValid;
}

function ValidateUrl(url) {
    var urlregex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
    var isValid = urlregex.test(url);
    return isValid;
}

function AllowNumbersWithDotWithNegtaiveValue(e, el, allowNegativeValue) {

    var key = (e.keyCode ? e.keyCode : (e.which ? e.which : e.charCode));
    // debugger;
    console.log(key);
    //For all function keys like delete back space enter e.t.c.
    if (key == 8 || key == 9 || key == 46 || (e.keyCode >= 35 && e.keyCode <= 39)) return true;

    if (e.shiftKey) e.preventDefault ? e.preventDefault() : e.returnValue = false;

    var value1 = el.value;
    var cul = Globalize.culture();
    var sep = cul.numberFormat["."];
    var dotKeyCode = 110;
    var dotKeyCode1 = 190;

    var minusKeyCode = 109;
    var minusKeyCode1 = 173;

    if (navigator.userAgent.indexOf("Chrome") != -1) {
        minusKeyCode1 = 189;
    }

    // if seprator is not "."
    if (sep == ',')
        dotKeyCode1 = dotKeyCode = 188;

    //set keyCode according to seprator
    if (el.value == "" && (e.keyCode == dotKeyCode || e.keyCode == dotKeyCode1))
        el.value = "0";

    // Check for seprator only
    if (key == dotKeyCode1 || key == dotKeyCode)
        if (value1.split(sep).length > 1) {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            return false;
        } else return true;

    if (allowNegativeValue) {
        //debugger;
        // Check for seprator only
        if (key == minusKeyCode1 || key == minusKeyCode)
            if ((parseFloat(value1, 10) > 0) || value1.indexOf('-') != -1) {
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
                return false;
            }
            else {
                return true;
            }
    }

    //Allow Numbers only
    if (key >= 48 && key <= 57 || key >= 96 && key <= 105) return true;
    else {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        return false;
    }
}
function AllowNumbersWithDot(e, el) {

    var key = (e.keyCode ? e.keyCode : (e.which ? e.which : e.charCode));

    //For all function keys like delete back space enter e.t.c.
    if (key == 8 || key == 9 || key == 46 || (e.keyCode >= 35 && e.keyCode <= 39)) return true;

    if (e.shiftKey) e.preventDefault ? e.preventDefault() : e.returnValue = false;

    var value1 = el.value;
    var cul = Globalize.culture();
    var sep = cul.numberFormat["."];
    var dotKeyCode = 110;
    var dotKeyCode1 = 190;


    // if seprator is not "."
    if (sep == ',')
        dotKeyCode1 = dotKeyCode = 188;

    //set keyCode according to seprator
    if (el.value == "" && (e.keyCode == dotKeyCode || e.keyCode == dotKeyCode1))
        el.value = "0";

    // Check for seprator only
    if (key == dotKeyCode1 || key == dotKeyCode)
        if (value1.split(sep).length > 1) {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            return false;
        } else return true;

    //Allow Numbers only
    if (key >= 48 && key <= 57 || key >= 96 && key <= 105) return true;
    else {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        return false;
    }
}

function AllowNumberWithDotOnBlur(ele) {
    var orignal = $(ele).val();

    var value1 = ele.value;
    var cul = Globalize.culture();
    var sep = cul.numberFormat["."];

    var restValue = orignal.split(sep);
    if (restValue[1] == "") {
        if (restValue[0] == "") {
            $(ele).val("0" + sep + "00");
        }
        else {
            $(ele).val(restValue[0] + sep + "00");
        }
        return true;
    }
    return true;
}

function AllowNumbersOnly(e, el) {
    if ($("#hdnisResponsive").length > 0 && $("#hdnisResponsive").val() == "R") {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //display error message           
            return false;
        }
    }
    else {
        var key = e.which || e.keyCode;
        if (key == 8 || key == 9 || key == 46 || (e.keyCode >= 35 && e.keyCode <= 39)) return true;
        if (e.shiftKey) e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var value1 = el.value;
        if (key >= 48 && key <= 57 || key >= 96 && key <= 105) return true;
        else {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            return false;
        }
    }
}


function CheckLenght(el, msg, cssClass) {
    var el1 = $(el);
    el1 = el1.length > 0 ? el1 : $("#" + el);
    var spn = $(el1).attr("name");
    if (cssClass == undefined) {
        cssClass = 'field-validation-error';
    }
    var maxLength = 100;
    if ($(el1).attr("data-val-length-max")) {
        maxLength = Globalize.parseFloat($(el1).attr("data-val-length-max"), 10);
    }
    if (!msg) {
        if ($(el1).attr("data-val-length")) {
            msg = $(el1).attr("data-val-length");
        }
        else if (Globalize.localize(spn)) {
            msg = String.Format(Globalize.localize("Required"), Globalize.localize(spn));
        }
    }
    if ($(el1).val().length > maxLength) {
        ShowError(el1, msg, cssClass);
        return "no";
    }
    return "";
}

function CheckRequired(el, msg, cssClass) {
    //debugger;
    var el1 = $(el);
    el1 = el1.length > 0 ? el1 : $("#" + el);
    var spn = $(el1).attr("name");
    $(el1).removeClass("input-validation-error");
    var errorCssclass = cssClass;
    if (spn != undefined) {
        if (cssClass == undefined) {
            cssClass = 'field-validation-error';
        }
        $("span[data-valmsg-for='" + spn + "']").removeClass(cssClass).addClass("field-validation-valid").html(" ");

    }

    var val = $.trim($(el1).val());
    if (val.length <= 0) {
        if (!msg)
            if ($(el1).attr("data-val-required")) msg = $(el1).attr("data-val-required");
            else if (Globalize.localize(spn)) msg = String.Format(Globalize.localize("Required"),
            Globalize.localize(spn));
        if (el == "ProjectId") {
            msg = Globalize.localize("ProjectName") + " " + Globalize.localize("Required");
            msg = String(msg).replace("{0}", "");
        }
        ShowError(el1, msg, errorCssclass);
        return "no";
    }
    if (!potentialDangerous(val)) {
        ShowError(el1, msg == "" ? "" : Globalize.localize("InvalidInput"), cssClass);
        return "no";
    }
    return "";
}
function CheckRequiredR(el, msg, cssClass) {
    //debugger;
    var el1 = $(el);
    el1 = el1.length > 0 ? el1 : $("#" + el);
    var spn = $(el1).attr("name");
    $(el1).removeClass("is-invalid");
    var errorCssclass = cssClass;
    if (spn != undefined) {
        if (cssClass == undefined) {
            cssClass = 'invalid-feedback';
        }
        $("span[data-valmsg-for='" + spn + "']").removeClass(cssClass).addClass("invalid-feedback").css("display", "block").html(" ");
        //$(".invalid-feedback").css("display", "block");
    }

    var val = $.trim($(el1).val());
    if (val.length <= 0) {
        if (!msg)
            if ($(el1).attr("data-val-required")) msg = $(el1).attr("data-val-required");
            else if (Globalize.localize(spn)) msg = String.Format(Globalize.localize("Required"),
            Globalize.localize(spn));
        if (el == "ProjectId") {
            msg = Globalize.localize("ProjectName") + " " + Globalize.localize("Required");
            msg = String(msg).replace("{0}", "");
        }
        ShowError(el1, msg, errorCssclass, "R");
        return "no";
    }
    if (!potentialDangerous(val)) {
        ShowError(el1, msg == "" ? "" : Globalize.localize("InvalidInput"), cssClass);
        return "no";
    }
    return "";
}

function CustomeValidationVD(el, type, msg, cssClass) {
    var el1 = $(el);
    el1 = el1.length > 0 ? el1 : $("#" + el);
    type = type.toLowerCase();
    var val = $.trim($(el1).val());
    if (val.length <= 0) return "";
    var isError = false;
    if (type == "email") isError = !ValidateEmail(val);
    else if (type == "url") isError = !ValidateUrl(val);
    else if (type == "price") isError = !(parseFloat(val) > 0);
    else if (type == "phone") {
        var filter = /^[0-9-+() ]+$/;
        isError = !filter.test(val);
    } else if (type == "image") {
        var ext = val.split(".").pop().toLowerCase();
        if ($.inArray(ext, ["gif",
            "png", "jpg", "jpeg"
        ]) == -1) isError = true;
    } else if (type == "video") {
        var ext = val.split(".").pop().toLowerCase();
        if ($.inArray(ext, ["avi", "3gp", "mp4", "mpeg", "wmv", "flv", "mpg", "mov", "rm", "mkv"]) == -1) isError = true;
    }
    if (isError) {
        ShowError(el1, msg, cssClass);
        return "no";
    }
    if (!potentialDangerous(val)) {
        ShowError(el1, Globalize.localize("InvalidInput"), cssClass);
        return "no";
    }
    return "";
}

//created by :Shilpa Sharma
//Created on :2 July 2013
//Summary: Validaton for the price including the value 0
function CustomeValidationVDNew(el, type, msg, cssClass) {
    var el1 = $(el);
    el1 = el1.length > 0 ? el1 : $("#" + el);
    type = type.toLowerCase();
    var val = $.trim($(el1).val());
    if (val.length <= 0) return "";
    var isError = false;
    if (type == "email") isError = !ValidateEmail(val);
    else if (type == "url") isError = !ValidateUrl(val);
    else if (type == "price") isError = !(parseFloat(val) >= 0);
    else if (type == "phone") {
        var filter = /^[0-9-+() ]+$/;
        isError = !filter.test(val);
    } else if (type == "image") {
        var ext = val.split(".").pop().toLowerCase();
        if ($.inArray(ext, [
            "gif",
            "png", "jpg", "jpeg"
        ]) == -1) isError = true;
    } else if (type == "video") {
        var ext = val.split(".").pop().toLowerCase();
        if ($.inArray(ext, ["avi", "3gp", "mp4", "mpeg", "wmv", "flv", "mpg", "mov", "rm", "mkv"]) == -1) isError = true;
    }
    if (isError) {
        ShowError(el1, msg, cssClass);
        return "no";
    }
    if (!potentialDangerous(val)) {
        ShowError(el1, Globalize.localize("InvalidInput"), cssClass);
        return "no";
    }
    return "";
}

function ShowError(el, msg, cssClass, isFor) {
    if (cssClass) {
        if (cssClass.length <= 0) cssClass = "field-validation-error";
    } else cssClass = "field-validation-error";
    if (isFor == "R") {
        cssClass = "invalid-feedback";
        $(el).addClass("is-invalid");
    }
    else {
        $(el).addClass("input-validation-error");
    }
    //debugger; 
    var spn;
    var newspn;
    var spantag;
    if (msg) {
        spn = $(el).attr("name");
        if (spn != undefined) {
            newspn = spn;
            if (spn.indexOf(".") > -1) spn = spn.replace(".", "\\.");
            spantag = "span[data-valmsg-for='" + spn + "']";
            if ($(spantag).length > 0) $(spantag).removeClass("field-validation-valid").addClass(cssClass).html(msg);
            else {
                if (isFor == "R") {
                    $(el).parent().append("<span class='invalid-feedback' data-valmsg-for='" + newspn + "' >" + msg + " </span>");
                }
                else {
                    $(el).parent().append("<span class='field-validation-error textalignleft text-danger' data-valmsg-for='" + newspn + "' >" + msg + " </span>");
                }
            }
        }
    } else {
        if ($(el).attr("data-val-regex")) {
            msg = $(el).attr("data-val-regex");
            spn = $(el).attr("name");
            if (spn != undefined) {
                newspn = spn;
                if (spn.indexOf(".") > -1) spn = spn.replace(".", "\\.");
                spantag = "span[data-valmsg-for='" + spn + "']";
                if ($(spantag).length > 0) $(spantag).removeClass("field-validation-valid").addClass(cssClass).html(msg);
                else {
                    if (isFor == "R") {
                        $(el).parent().append("<span class='invalid-feedback' data-valmsg-for='" + newspn + "' >" + msg + " </span>");
                    }
                    else {
                        $(el).parent().append("<span class='field-validation-error textalignleft text-danger' data-valmsg-for='" + newspn + "' >" + msg + " </span>");
                    }
                }
            }
        }
    }
}

function secondstotime(secs) {
    var t = new Date(1970, 0, 1);
    t.setSeconds(secs);
    var s = t.toTimeString().substr(0, 8);
    if (secs > 86399) s = Math.floor((t - Date.parse("1/1/70")) / 36E5) + s.substr(2);
    return s;
}

function secondstohours(secs) {
    var hours = Math.floor(secs / (60 * 60));
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
    if (minutes < 10) minutes = "0" + minutes;
    return hours + "." + minutes;
}

function secondstohours_colon(secs) {
    var hours = Math.floor(secs / (60 * 60));
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
    if (minutes < 10) minutes = "0" + minutes;
    var divisor_for_secs = secs % 60;
    var sec = Math.floor(divisor_for_secs);
    if (sec < 10) sec = "0" + sec;
    return hours + ":" + minutes + ":" + sec;
}
$("#ancDeleteTask").click(function () {
    //debugger;
    var val = "";
    var tskName = "";
    $("input.chkItems:checkbox:checked").not("[id^='chkAll']").each(function (i) {
        if (val.length > 0) val += ",";
        val += $(this).val();
        if (tskName.length > 0) tskName += ",";
        var taskName = $(this).attr("data-task-name");
        taskName = String(taskName).split(",").join("&#44;");
        tskName += taskName;
    });
    // alert(val);
    // return false;
    if (val.length > 0) {
        showLoader();
        if (GetPrivilege('/Project/DeleteTask', true, false)) {
            talygen.confirm(Globalize.localize("ConfirmDelete"), function (result) {
                if (result) {
                    var url = "/" + "Project" + "/" + "DeleteTask";
                    $.post(url, {
                        ids: val,
                        Projectid: $("#projectid").val(),
                        ProjectName: $("#hdnprojectName").val(),
                        TaskNameList: tskName,
                    }, function (data) {
                        $("#DivTask").html(data);
                        ShowMsgWithMsg(Globalize.localize("DeleteTaskSuccess"), "success");
                    });
                }
            });
        }
        hideLoader();
    } else talygen.alert(Globalize.localize("Selectanyrecordtodelete"));
});

function showMessage(DivClass, message) {
    $("#errMessage").attr("class", DivClass);
    $("#errMessage").attr("style", "block");
    $("#errMessage").html(message);
    $("#errMessage").show();
    setTimeout('$("#errMessage").fadeOut(800)', 2E3);
}

function create(template, vars, opts) {
    return $container.notify("create", template, vars, opts);
}

function ShowMsg() {

    if ($("#hdnNotifyMsg").length > 0) {
        //debugger;
        var notifymsg = $("#hdnNotifyMsg").val();
        if (notifymsg)
            if (notifymsg.length > 0) {
                var msgbox = $("div#notify");
                if ($("#hdnisResponsive").length > 0 && $("#hdnisResponsive").val() != "R") {
                    var y = Math.max(0, ($(window).height() - $(msgbox).outerHeight()) / 2 + $(window).scrollTop()) + "px";
                    $(msgbox).css("top", y);

                    if ($(msgbox).outerWidth() > 400) {
                        var widthRatio = $(window).width() != 0 ? $(msgbox).outerWidth() / $(window).width() : 1;
                        var x = 45 * (1 - widthRatio) + "%";
                        $(msgbox).css("left", x);
                    }
                }
                $("div#notify").find("p").html(notifymsg);

                var attr = $("#hdnNotifyMsg").attr("msgFor");

                if (attr != undefined) {
                    if (attr.toLowerCase() == "success") {
                        if ($("#hdnisResponsive").length > 0 && $("#hdnisResponsive").val() == "R") {
                            $('div#notify').removeClass("alert alert-danger hide d-none").addClass("alert-success show alert");
                            setTimeout(function () {
                                $('div#notify').removeClass("show").addClass("hide d-none");
                            }, 6E3);
                        }
                        else {
                            $("div#notify").show().removeClass("ui-stateerror").addClass("ui-notify-message ui-notify-message-style");
                            setTimeout(function () {
                                $("div#notify").fadeOut();
                            }, 6E3);
                        }
                    } else if (attr.toLowerCase() == "failure") {
                        if ($("#hdnisResponsive").length > 0 && $("#hdnisResponsive").val() == "R") {
                            $("div#notify").removeClass("alert-success hide d-none").addClass("alert alert-danger show");
                        }
                        else {
                            $("div#notify").show().removeClass("ui-notify-message ui-notify-message-style").addClass("ui-stateerror");
                        }
                    }
                }
            }
    }
}

function ShowMsgWithMsg(msg, attr) {

    if (!attr) attr = "success";
    if ($("#hdnisResponsive").length > 0 && $("#hdnisResponsive").val() == "R") {
        $("div#notify .close").click(function () {
            $('div#notify').removeClass("show").addClass("hide d-none");
        });
    }
    else {
        var msgbox = $("div#notify").removeClass("hide").addClass("show").removeClass("d-none");
        var y = Math.max(0, ($(window).height() - $(msgbox).outerHeight()) / 2 + ($(window).scrollTop() - 30)) + "px";
        $(msgbox).css("top", y);



        if ($(msgbox).outerWidth() > 400) {
            var widthRatio = $(window).width() != 0 ? $(msgbox).outerWidth() / $(window).width() : 1;
            var x = 45 * (1 - widthRatio) + "%";
            $(msgbox).css("left", x);
        }
    }
    $("div#notify").find("p").html(msg);
    if (attr.toLowerCase() == "success") {
        if ($("#hdnisResponsive").length > 0 && $("#hdnisResponsive").val() == "R") {
            $('div#notify').removeClass("alert-danger hide d-none").addClass("alert-success show alert");
            setTimeout(function () {
                $('div#notify').removeClass("show").addClass("hide d-none");
            }, 6E3);
        }
        else {
            $("div#notify").show().removeClass("ui-stateerror").addClass("ui-notify-message ui-notify-message-style");
            setTimeout(function () {
                $('div#notify"').fadeOut();
            }, 6E3);
        }
    } else {
        if ($("#hdnisResponsive").length > 0 && $("#hdnisResponsive").val() == "R") {
            $("div#notify").removeClass("alert-success hide d-none").addClass("alert alert-danger show");
            $("div#notify").css("display", "block");
        }
        else {
            $("div#notify").show().removeClass("ui-notify-message ui-notify-message-style").addClass("ui-stateerror");
        }
    }
}



function hideMsg() {
    $("div#notify").hide().removeAttr("class").find("p").html("");
}

function IsValidChars(e, strValidChars) {
    var charcode = [e.keyCode || e.which];
    var strChar;
    var blnResult = true;
    if (!e.shiftKey)
        if (charcode == 16 || charcode == 8 || charcode == 35 || charcode == 36 || charcode == 9 || charcode == 37 || charcode == 39) return blnResult;
    var strString = String.fromCharCode(charcode);
    if (strString.length == 0) return false;
    if (strValidChars.indexOf(strString) == -1) blnResult = false;
    if (!blnResult) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        return false;
    }
    return blnResult;
}

function PrintElem(elem) {
    var reportTitle = $(".ui-state-active a").html();
    var startdate = $("#txtStartDateHidden").val();
    var endDate = $("#txtEndDatehidden").val();
    var title = "";
    if ($("#txtStartDateHidden").length > 1) title = reportTitle + " (" + startdate + " - " + endDate + ")";
    else title = reportTitle;
    Popup($("#" + elem).html(), title);
}

function Popup(data, title) {
    var mywindow = window.open("", "mydiv", "height=400,width=600", false);
    mywindow.document.write("<html><head><title>" + title + "</title>");
    var path = getRootURL();
    mywindow.document.write('<link rel="stylesheet" href="' + path + 'Content/css/cssblack/style"  type="text/css" /></head><body >');
    mywindow.document.write(data);
    mywindow.document.write(" </body></html>");
    mywindow.document.close();
    mywindow.print();
    return true;
}

function PrivilegesCheck() {
    if ($("#hdnisResponsive").length > 0 && $("#hdnisResponsive").val() == "R") {
        /*$("body").find('a:not([class="blue"],[checkprivilege="no"],[href*="javascript"],[href*="javascript"],[href*="#tabs-"])').each(function () {
             var element = $(this);
             var hrefLink = $(this).attr("href");
             if (hrefLink == undefined) return;
             if ($("#A").attr("permission") !== undefined) return;
             if (!GetPrivilege(hrefLink, false, false, "start")) {
                 $(element).attr("permission", "No");
                 $(element).removeAttr("href");
                 $(element).attr("style", "cursor:pointer");
                 $(element).removeAttr("onclick");
             }
         });
        $("body").find("a[permission='No']").each(function () {
             var element =
                 $(this);
             $(element).unbind("click").bind("click", function (ev) {
                 ev.preventDefault();
                 talygen.alert(Globalize.localize("UnAuthorized"));
             });
         });*/
    }
    else {
        $('div#divBody a:not([class=blue],[checkprivilege="no"],[href*=javascript],[href*=javascript],[href*=#tabs-])').each(function () {
            var element = $(this);
            var hrefLink = $(this).attr("href");
            if (hrefLink == undefined) return;
            if ($("#A").attr("permission") !== undefined) return;
            if (!GetPrivilege(hrefLink, false, false)) {
                $(element).attr("permission", "No");
                $(element).removeAttr("href");
                $(element).attr("style", "cursor:pointer");
                $(element).removeAttr("onclick");
            }
        });
        $("div#divBody a[permission='No']").each(function () {
//debugger;
            var element =
                $(this);
            $(element).unbind("click").bind("click", function (ev) {
                ev.preventDefault();
                alert(Globalize.localize("UnAuthorized"));
            });
        });
    }
}

function testAttribute(element, attribute) {
    var test = document.createElement(element);
    if (attribute in test) return true;
    else return false;
}

function GetInterval(datalist) {
    var max = 0;
    for (x in datalist) {
        var newmax = datalist[x][1];
        if (newmax > max) max = newmax;
    }
    return MakeIntervalHoursInSeconds(max);
}

function MakeIntervalHoursInSeconds(max) {
    var interval = Math.round(max / 5);
    var intervalhours = Math.round(interval / 3600);
    var mod = 0;
    if (intervalhours >= 1E3) mod = intervalhours % 1E3;
    else if (intervalhours >= 100) mod = intervalhours % 100;
    else if (intervalhours >= 10) mod = intervalhours % 10;
    else if (intervalhours >= 5) mod = intervalhours % 5;
    intervalhours = intervalhours - mod;
    if (intervalhours != 0) interval = intervalhours * 3600;
    if (interval < 3600) interval = 3600;
    return interval;
}

function FormatString(value, maxChars, CalledBy) {
    var words = value.split(/[\s]+/);
    var numWordsPerLine = 4;
    if (CalledBy != undefined && CalledBy != null && CalledBy.length > 0) numWordsPerLine = 30;
    var str = [];
    var bigStr = "";
    var winwidth = $(window).width();
    var lineMaxchars = 30;
    if (winwidth > 1100 && winwidth <= 1300) lineMaxchars = 40;
    else if (winwidth > 1300 && winwidth <= 1600) {
        lineMaxchars = 48;
        numWordsPerLine = 5;
    } else if (winwidth > 1600) {
        lineMaxchars = 55;
        numWordsPerLine = 6;
    }
    for (var word in words) {
        if (word > 0 && word % numWordsPerLine == 0 || bigStr.length >=
                lineMaxchars) {
            bigStr = "";
            str.push("<br>");
        }
        if (words[word].length > maxChars) {
            var strword = words[word];
            if (strword.length < maxChars * 2) str.push(strword.substring(0, maxChars) + "<br>" + strword.substring(maxChars + 1, strword.length - 1));
            else if (strword.length < maxChars * 3) str.push(strword.substring(0, maxChars) + "<br>" + strword.substring(maxChars + 1, maxChars * 2) + "<br>" + strword.substring(maxChars * 2 + 1, strword.length - 1));
            else if (strword.length < maxChars * 4) str.push(strword.substring(0, maxChars) + "<br>" + strword.substring(maxChars +
                    1, maxChars * 2) + "<br>" + strword.substring(maxChars * 2 + 1, maxChars * 3) + "<br>" + strword.substring(maxChars * 3 + 1, strword.length - 1));
            else str.push(strword.substring(0, maxChars) + "<br>" + strword.substring(maxChars + 1, maxChars * 2) + "<br>" + strword.substring(maxChars * 2 + 1, maxChars * 3) + "<br>" + strword.substring(maxChars * 3 + 1, maxChars * 4) + "<br>" + strword.substring(maxChars * 4 + 1, strword.length - 1));
            bigStr = "";
        } else {
            bigStr += words[word];
            if (bigStr.length >= lineMaxchars) {
                bigStr = "";
                str.push("<br>");
            }
            str.push(words[word]);
        }
    }
    return str.join(" ");
}
//used in performance review creation page and all dates are disable before current date

function datePickerWithValidation_WithMinDate(dateFrom, dateTo) {
    //debugger
    var cur = Globalize.culture();

    var cDate = new Date();
    var whoseEvent = "";
    var newDate = "";
    $("#" + dateFrom).keydown(function (event) {
        whoseEvent = "StartDate";
        event.preventDefault();
    });
    $("#" + dateTo).keydown(function (event) {
        whoseEvent = "EndDate";
        event.preventDefault();
    });


    var globalDateFormat = 'dd/MM/YYYY'; //  cur.calendar.patterns.d; //$('#hdnDateFormat').val();
    var localDateFormat = 'dd/MM/YYYY';  //cur.calendar.patterns.d;// $('#hdnDateFormat').val();











    var dates = $("#" + dateFrom + ", #" + dateTo).datepicker({
        minDate: cDate,
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        //dateFormat: globalDateFormat,
        showOn: "button",
        buttonImage: getRootURL() + "Content/images/black/calendar_iconB.png",
        buttonImageOnly: true,
        buttonText: Globalize.localize("SelectDate"),
        showButtonPanel: true,

        onSelect: function (selectedDate) {

            whoseEvent = this.id;
            var option = this.id == dateFrom ? "minDate" : "maxDate",
                instance = $(this).data("datepicker"),
                date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
            dates.not(this).datepicker("option", option, date);
            if ($("#duration").length > 0) {
                newDate = date;
                //  newDate = newDate.format(localDateFormat);
                newDate = Globalize.format(newDate, "d", Globalize.culture().name);
            }
        },
        beforeShow: function (input) {
            dpClearButton(input);
            var option1 = this.id;
            if (option1 == dateFrom) {
                if ($("#" + dateTo).val() == "") $("#" + dateFrom).datepicker("option", {
                    maxDate: null

                });
            } else if ($("#" + dateFrom).val() == "") $("#" + dateTo).datepicker("option", {
                minDate: null,
                maxDate: null

            });
            $(this).attr("disabled", true);
        },
        onClose: function (dateText, inst) {
            $(this).attr("disabled", false);
            if ($("#duration").length > 0) {
                //debugger;
                if ($("#tempStartDate") != $("#PlanStartDate").val() || $("#tempEndDate").val() != $("#PlanEndDate").val()) {
                    CheckDateConstraints(newDate, whoseEvent, $("#tempStartDate").val(), $("#tempEndDate").val());
                    CalculateWorkingDays(whoseEvent);
                }
            }
            if ($("#taskTemplate").length > 0) {
                CheckdateConstraintsTask($("#tempStartDate").val(), newDate);
            }
        }
    });
    //$("#ui-datepicker-div").hide()
    $(".ui-datepicker").hide();
}

function datePickerWithValidation_WithMinDateReport(dateFrom, dateTo, show, callFrom) {
    //debugger;
    var cur = Globalize.culture();

    var cDate = new Date();
    var whoseEvent = "";
    var newDate = "";
    $("#" + dateFrom).keydown(function (event) {
        whoseEvent = "StartDate";
        event.preventDefault();
    });
    $("#" + dateTo).keydown(function (event) {
        whoseEvent = "EndDate";
        event.preventDefault();
    });


    var globalDateFormat = 'dd/MM/YYYY'; //  cur.calendar.patterns.d; //$('#hdnDateFormat').val();
    var localDateFormat = 'dd/MM/YYYY';  //cur.calendar.patterns.d;// $('#hdnDateFormat').val();

    if (show == "input") {
        //$('#' + ctrl).removeAttr("onkeydown");
        $('#' + dateFrom).attr({ "data-target": "#" + dateFrom, "data-toggle": "datetimepicker", "title": Globalize.localize("SelectDate") });
        $('#' + dateTo).attr({ "data-target": "#" + dateTo, "data-toggle": "datetimepicker", "title": Globalize.localize("SelectDate") });
    }
    else {
        //debugger;
        var $DivFrom = $("<div>").addClass("input-group-append").attr({ "data-target": "#" + dateFrom, "data-toggle": "datetimepicker", "title": Globalize.localize("SelectDate") });
        var $DivFromSpan = $("<span>").addClass("input-group-text").append('<i class="fa fa-calendar"></i>');
        $DivFrom.append($DivFromSpan);
        if (!mobile) {
            $DivFrom.tooltip();
        }
        $DivFrom.insertAfter($('#' + dateFrom));

        var $DivTo = $("<div>").addClass("input-group-append").attr({ "data-target": "#" + dateTo, "data-toggle": "datetimepicker", "title": Globalize.localize("SelectDate") });
        var $DivToSpan = $("<span>").addClass("input-group-text").append('<i class="fa fa-calendar"></i>');
        $DivTo.append($DivToSpan);
        if (!mobile) {
            $DivTo.tooltip();
        }
        $DivTo.insertAfter($('#' + dateTo));
        $('#' + dateFrom).attr("readonly", "readonly").css("background-color", "#ffffff").addClass("hasdatetimepicker");
        $('#' + dateTo).attr("readonly", "readonly").css("background-color", "#ffffff").addClass("hasdatetimepicker");
    }
    $('#' + dateFrom).addClass("hasdatetimepicker");
    $('#' + dateTo).addClass("hasdatetimepicker");
    if (callFrom == "daterange") {
        $('#' + dateFrom).datetimepicker({
            format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
            locale: cur.name,
            showClear: true,
            showClose: true,
            //autoclose: true,
            widgetPositioning: {
                horizontal: 'left',
                vertical: 'bottom'
            }
        });
        $('#' + dateTo).datetimepicker({
            format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
            locale: cur.name,
            showClear: true,
            showClose: true,
            //autoclose: true,
            widgetPositioning: {
                horizontal: 'right',
                vertical: 'bottom'
            }
        });
    }
    else if (callFrom == "datetime") {
        var format = String(Globalize.culture().calendar.patterns.d).toUpperCase() + " " + String(Globalize.culture().calendar.patterns.t).replace("t", "A").replace("t", "");
        $('#' + dateFrom).datetimepicker({
            format: format,
            locale: cur.name,
            showClear: true,
            showClose: true,
            //autoclose: true,
        });
        $('#' + dateTo).datetimepicker({
            format: format,
            locale: cur.name,
            showClear: true,
            showClose: true,
            //autoclose: true
        });
    }
    else {
        $('#' + dateFrom).datetimepicker({
            format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
            locale: cur.name,
            showClear: true,
            showClose: true,
            //autoclose: true,
        });
        $('#' + dateTo).datetimepicker({
            format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
            locale: cur.name,
            showClear: true,
            showClose: true,
            //autoclose: true
        });
    }
    $("#" + dateFrom).on("change.datetimepicker", function (e) {
        $('#' + dateTo).datetimepicker('minDate', e.date);
    });
    $("#" + dateTo).on("change.datetimepicker", function (e) {
        var date = $(this).val();
        $('#' + dateFrom).datetimepicker('maxDate', date);
    });
    if (callFrom == "project") {
        $("#" + dateFrom).on("change.datetimepicker", function (e) {
            if ($("#duration").length > 0) {
                if ($("#tempStartDate").val() != $("#PlanStartDate").val() || $("#tempEndDate").val() != $("#PlanEndDate").val()) {
                    CheckDateConstraints(e.date, 'PlanStartDate', $("#tempStartDate").val(), $("#tempEndDate").val());
                    CalculateWorkingDays('PlanStartDate');
                }
            }
        });
        $("#" + dateTo).on("change.datetimepicker", function (e) {
            if ($("#duration").length > 0) {
                if ($("#tempStartDate").val() != $("#PlanStartDate").val() || $("#tempEndDate").val() != $("#PlanEndDate").val()) {
                    CheckDateConstraints(e.date, 'PlanEndDate', $("#tempStartDate").val(), $("#tempEndDate").val());
                    CalculateWorkingDays('PlanEndDate');
                }
            }
        });
    }
}

function datePickerWithValidation_WithMinDateR(dateFrom, dateTo, show, callFrom) {
    //debugger;
    var cur = Globalize.culture();

    var cDate = new Date();
    var whoseEvent = "";
    var newDate = "";
    $("#" + dateFrom).keydown(function (event) {
        whoseEvent = "StartDate";
        event.preventDefault();
    });
    $("#" + dateTo).keydown(function (event) {
        whoseEvent = "EndDate";
        event.preventDefault();
    });


    var globalDateFormat = 'dd/MM/YYYY'; //  cur.calendar.patterns.d; //$('#hdnDateFormat').val();
    var localDateFormat = 'dd/MM/YYYY';  //cur.calendar.patterns.d;// $('#hdnDateFormat').val();

    if (show == "input") {
        //$('#' + ctrl).removeAttr("onkeydown");
        $('#' + dateFrom).attr({ "data-target": "#" + dateFrom, "data-toggle": "datetimepicker", "title": Globalize.localize("SelectDate") });
        $('#' + dateTo).attr({ "data-target": "#" + dateTo, "data-toggle": "datetimepicker", "title": Globalize.localize("SelectDate") });
    }
    else {
        //debugger;
        var $DivFrom = $("<div>").addClass("input-group-append").attr({ "data-target": "#" + dateFrom, "data-toggle": "datetimepicker", "title": Globalize.localize("SelectDate") });
        var $DivFromSpan = $("<span>").addClass("input-group-text").append('<i class="fa fa-calendar"></i>');
        $DivFrom.append($DivFromSpan);
        if (!mobile) {
            $DivFrom.tooltip();
        }
        $DivFrom.insertAfter($('#' + dateFrom));

        var $DivTo = $("<div>").addClass("input-group-append").attr({ "data-target": "#" + dateTo, "data-toggle": "datetimepicker", "title": Globalize.localize("SelectDate") });
        var $DivToSpan = $("<span>").addClass("input-group-text").append('<i class="fa fa-calendar"></i>');
        $DivTo.append($DivToSpan);
        if (!mobile) {
            $DivTo.tooltip();
        }
        $DivTo.insertAfter($('#' + dateTo));
        $('#' + dateFrom).attr("readonly", "readonly").css("background-color", "#ffffff").addClass("hasdatetimepicker");
        $('#' + dateTo).attr("readonly", "readonly").css("background-color", "#ffffff").addClass("hasdatetimepicker");
    }
    $('#' + dateFrom).addClass("hasdatetimepicker");
    $('#' + dateTo).addClass("hasdatetimepicker");
    if (callFrom == "daterange") {
        $('#' + dateFrom).datetimepicker({
            format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
            locale: cur.name,
            showClear: true,
            showClose: true,
            //autoclose: true,
            widgetPositioning: {
                horizontal: 'left',
                vertical: 'bottom'
            }
        });
        $('#' + dateTo).datetimepicker({
            format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
            locale: cur.name,
            showClear: true,
            showClose: true,
            //autoclose: true,
            widgetPositioning: {
                horizontal: 'right',
                vertical: 'bottom'
            }
        });
    }
    else if (callFrom == "datetime") {
        var format = String(Globalize.culture().calendar.patterns.d).toUpperCase() + " " + String(Globalize.culture().calendar.patterns.t).replace("t", "A").replace("t", "");
        $('#' + dateFrom).datetimepicker({
            format: format,
            locale: cur.name,
            showClear: true,
            showClose: true,
            //autoclose: true,
        });
        $('#' + dateTo).datetimepicker({
            format: format,
            locale: cur.name,
            showClear: true,
            showClose: true,
            //autoclose: true
        });
    }
    else {
        $('#' + dateFrom).datetimepicker({
            format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
            locale: cur.name,
            showClear: true,
            showClose: true,
            //autoclose: true,
        });
        $('#' + dateTo).datetimepicker({
            format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
            locale: cur.name,
            showClear: true,
            showClose: true,
            //autoclose: true
        });
    }
    $("#" + dateFrom).on("change.datetimepicker", function (e) {
        $('#' + dateTo).datetimepicker('minDate', e.date);
    });
    $("#" + dateTo).on("change.datetimepicker", function (e) {
        $('#' + dateFrom).datetimepicker('maxDate', e.date);
    });
    if (callFrom == "project") {
        $("#" + dateFrom).on("change.datetimepicker", function (e) {
            if ($("#duration").length > 0) {
                if ($("#tempStartDate").val() != $("#PlanStartDate").val() || $("#tempEndDate").val() != $("#PlanEndDate").val()) {
                    CheckDateConstraints(e.date, 'PlanStartDate', $("#tempStartDate").val(), $("#tempEndDate").val());
                    CalculateWorkingDays('PlanStartDate');
                }
            }
        });
        $("#" + dateTo).on("change.datetimepicker", function (e) {
            if ($("#duration").length > 0) {
                if ($("#tempStartDate").val() != $("#PlanStartDate").val() || $("#tempEndDate").val() != $("#PlanEndDate").val()) {
                    CheckDateConstraints(e.date, 'PlanEndDate', $("#tempStartDate").val(), $("#tempEndDate").val());
                    CalculateWorkingDays('PlanEndDate');
                }
            }
        });
    }
}

function SetDatePickerOnClassR(element, min, max, show) {
    var cur = Globalize.culture();

    if (show == "input") {
        //$('#' + ctrl).removeAttr("onkeydown");
        $('.' + element).attr({ "data-target": "." + element, "data-toggle": "datetimepicker", "title": Globalize.localize("SelectDate") });

    }
    else {
        var $DivFrom = $("<div>").addClass("input-group-append").attr({ "data-target": "." + element, "data-toggle": "datetimepicker", "title": Globalize.localize("SelectDate") });
        var $DivFromSpan = $("<span>").addClass("input-group-text").append('<i class="fa fa-calendar"></i>');
        $DivFrom.append($DivFromSpan);
        if (!mobile) {
            $DivFrom.tooltip();
        }
        $DivFrom.insertAfter($('.' + element));

    }
    $('#' + element).attr("readonly", "readonly").css("background-color", "#ffffff").addClass("hasdatetimepicker");
    $("." + element).datetimepicker({
        format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
        locale: cur.name,
        showClear: true,
        showClose: true,
        //autoclose: true
    });
    if (min)
        if (min.length > 0) $("." + element).datetimepicker("minDate", min);
    if (max)
        if (max.length > 0) $("." + element).datetimepicker("maxDate", max);
}


function SetTimesPicker(ctrl, timeFormat, isFor) {
    //debugger;
    var cur = Globalize.culture();
    var $DivTo = $("<div>").addClass("input-group-append").attr({ "data-target": "#" + ctrl, "data-toggle": "datetimepicker", "title": Globalize.localize("SelectTime") });
    var $DivToSpan = $("<span>").addClass("input-group-text").append('<i class="fa fa-clock-o"></i>');
    if (!mobile) {
        $DivTo.tooltip();
    }
    $DivTo.append($DivToSpan);
    $DivTo.insertAfter($('#' + ctrl));
    //moment.locale(cur.name);
    $('#' + ctrl).attr("onpaste", "return false;")
    $('#' + ctrl).attr("onkeydown", "return false;")
    if (typeof timeFormat === 'undefined') {
        timeFormat = 'LT';
    }
    var format = 'HH:mm';
    if (isFor == "timer") {
        format = 'HH:mm:ss';
    }

    $('#' + ctrl).attr("readonly", "readonly").css("background-color", "#ffffff").addClass("hasdatetimepicker");
    $('#' + ctrl).datetimepicker({
        format: ($("#hdnTimeFormat").val() == '24' ? format : timeFormat),
        use24hours: ($("#hdnTimeFormat").val() == '24' ? true : false),
        locale: cur.name,
        showClear: true,
        showClose: true,
        //autoclose: true,
        useCurrent: false
    });
}
function SetDatesPicker(ctrl, callfrom, show) {
    //debugger;
    var cur = Globalize.culture();

    if (show == "input") {
        //$('#' + ctrl).removeAttr("onkeydown");
        $('#' + ctrl).attr({ "data-target": "#" + ctrl, "data-toggle": "datetimepicker", "title": Globalize.localize("SelectDate") });
    }
    else {
        var $DivTo = $("<div>").addClass("input-group-append").attr({ "data-target": "#" + ctrl, "data-toggle": "datetimepicker", "title": Globalize.localize("SelectDate") });
        var $DivToSpan = $("<span>").addClass("input-group-text").append('<i class="fa fa-calendar"></i>');
        if (!mobile) {
            $DivTo.tooltip();
        }
        $DivTo.append($DivToSpan);
        $DivTo.insertAfter($('#' + ctrl));
    }
    $('#' + ctrl).attr("readonly", "readonly").css("background-color", "#ffffff").addClass("hasdatetimepicker");
    if (callfrom == "showbottom") {
        $('#' + ctrl).datetimepicker({
            format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
            locale: cur.name,
            showClear: true,
            showClose: true,
            beforeShowDay: (callfrom == "screenshot" ? daysToMark : null),
            //autoclose: true,
            widgetPositioning: {
                horizontal: 'left',
                vertical: 'bottom'
            }
        });
    }
    else {
        $('#' + ctrl).datetimepicker({
            format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
            locale: cur.name,
            showClear: true,
            showClose: true,
            beforeShowDay: (callfrom == "screenshot" ? daysToMark : null),
            //autoclose: true
        });
    }
    $('#' + ctrl).attr("onpaste", "return false;");
    $('#' + ctrl).keypress(function (e) {
        e.preventDefault();
    });
    if (callfrom == "screenshot") {
        $("#" + ctrl).on("change.datetimepicker", function (e) {
            //debugger;
            var date = $("#datepicker").datetimepicker("viewDate").format("YYYY-MM-DD");
            changescreens(date);
        });
    }
}

function daysToMark(date) {
    // debugger;
    var screendates = $('#hdnselecteddates').val();
    if (screendates != "") {

        var temp = new Array();
        temp = screendates.split(',');
        for (i = 0; i < temp.length; i++) {
            var currentdate = temp[i].split('/');
            var calendarDate = date.split('-');
            if (calendarDate[1] == currentdate[0] && calendarDate[2] == currentdate[1] && calendarDate[0] == currentdate[2]) {
                return [true, 'screenshotavailable', ""];
            }
        }
    }
    return [true, ''];
}

function SetDatePickerR(element, min, max, img, showOn, isFor) {
    //debugger;
    var cur = Globalize.culture();
    $("#" + element).keydown(function (event) {
        event.preventDefault();
    });
    $('#' + element).attr("readonly", "readonly").css("background-color", "#ffffff").addClass("hasdatetimepicker");
    var dates = $("#" + element).datetimepicker({
        format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
        locale: cur.name,
        showClear: true,
        showClose: true,
        //autoclose: true
    });
    $("#" + element).on("change.datetimepicker", function (e) {
        if (isFor == "AuditRelatedInfo") {
            var Frequency = $("#AuditFrequency").val();
            var second_date = new Date(date);
            var dateselectedtype = $("#hdndateselectedtype").val();

            if (dateselectedtype == "imagehistory") {
                Frequency = $("#ImageCaptureFrequency").val();
            }
            else if (dateselectedtype == "calibration") {
                Frequency = $("#CalibrationFrequency").val();
            }
            //debugger;
            switch (Frequency) {
                case "annual":
                    second_date.setFullYear(second_date.getFullYear() + 1);
                    $('#NextAuditDate').datetimepicker('setDate', second_date);
                    break;
                case "biweek":
                    second_date.setDate(second_date.getDate() + 14);
                    $('#NextAuditDate').datetimepicker('setDate', second_date);
                    break;
                case "daily":
                    second_date.setDate(second_date.getDate() + 1);
                    $("#NextAuditDate").datetimepicker("setDate", second_date);
                    break;
                case "halfyear":
                    second_date.setMonth(second_date.getMonth() + 6);
                    $("#NextAuditDate").datetimepicker("setDate", second_date);
                    break;
                case "month":
                    second_date.setMonth(second_date.getMonth() + 1);
                    $("#NextAuditDate").datetimepicker("setDate", second_date);
                    break;
                case "quarterly":
                    second_date.setMonth(second_date.getMonth() + 3);
                    $("#NextAuditDate").datetimepicker("setDate", second_date);
                    break;
                case "week":
                    second_date.setDate(second_date.getDate() + 7);
                    $("#NextAuditDate").datetimepicker("setDate", second_date);
                    break;
            }
        }
    });
    if (min)
        if (min.length > 0) {
            // $('#' + element).datetimepicker('minDate', min);
        }
    if (max)
        if (max.length > 0) {
            //$('#' + element).datetimepicker('minDate', max);
        }
}

//Dharampal
function DatepickerPastDateDisable(dateFrom, dateTo, callby, callfrom)
{
     var cur = Globalize.culture();
    //alert(dateFrom + "  " + dateTo);
    //debugger;
    var whoseEvent = "";
    var newDate = "";
    var dateFromNoChange = dateFrom;
    var dateFromNoChangeVal = $("#" + dateFrom).val();
    var dateToNoChangeval = $("#" + dateTo).val();

    if ($("#" + dateFrom).next("#divgroupfrom" + dateFrom).length == 0) {
        var $DivFrom = $("<div>").addClass("input-group-append").attr({ "data-target": "#" + dateFrom, "data-toggle": "datetimepicker", "id": "divgroupfrom" + dateFrom });
        var $DivFromSpan = $("<span>").addClass("input-group-text").append('<i class="fa fa-calendar"></i>');
        $DivFrom.append($DivFromSpan);
        $DivFrom.insertAfter($('#' + dateFrom));
    }
    if ($("#" + dateTo).next("#divgroupto" + dateTo).length == 0) {
        var $DivTo = $("<div>").addClass("input-group-append").attr({ "data-target": "#" + dateTo, "data-toggle": "datetimepicker", "id": "divgroupto" + dateTo });
        var $DivToSpan = $("<span>").addClass("input-group-text").append('<i class="fa fa-calendar"></i>');
        $DivTo.append($DivToSpan);
        $DivTo.insertAfter($('#' + dateTo));
    }

    $("#" + dateFrom).keydown(function (event) {
        whoseEvent = "StartDate";
        event.preventDefault();
    });
    $("#" + dateTo).keydown(function (event) {
        whoseEvent = "EndDate";
        event.preventDefault();
    });
    $('#' + dateFrom).attr("readonly", "readonly").css("background-color", "#ffffff").addClass("hasdatetimepicker");
    $('#' + dateTo).attr("readonly", "readonly").css("background-color", "#ffffff").addClass("hasdatetimepicker");
    if (callfrom == "showbottom") {
        $('#' + dateFrom).datetimepicker({
            format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
            locale: cur.name,
            showClear: true,
            showClose: true,
            minDate:0,
            //autoclose: true,
            widgetPositioning: {
                horizontal: 'left',
                vertical: 'bottom'
            }
        });
        $('#' + dateTo).datetimepicker({
            format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
            locale: cur.name,
            showClear: true,
            showClose: true,
            minDate:0,
            //autoclose: true,
            widgetPositioning: {
                horizontal: 'left',
                vertical: 'bottom'
            }
        });
    }
    else if (dateFrom == "ResignationEffectiveFrom") {
        //debugger;
        $('#' + dateFrom).datetimepicker({
            format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
            locale: cur.name,
            showClear: true,
            showClose: true,
            minDate: new Date(),
            disabledDates: HOLIDAY_DATES,
            daysOfWeekDisabled: WEEK_DAYS
        });
    }
    else {
        $('#' + dateFrom).datetimepicker({
            format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
            locale: cur.name,
            showClear: true,
            showClose: true,
            minDate: new Date()
            //autoclose: true
        });
        $('#' + dateTo).datetimepicker({
            format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
            locale: cur.name,
            useCurrent: false,   // For project phase datepicker(Project/Edit/ProjectPhase) add 'useCurrent' attr and remove the on change event 
            showClear: true,
            showClose: true,
            //autoclose: true
        });
    }
    if (typeof callby != undefined) {
        // debugger;
        $("#" + dateFrom).on("change.datetimepicker", function (e) {
            CallDateFunction(e.date, callby, dateFrom, dateTo, dateFromNoChange, dateFromNoChangeVal, dateToNoChangeval, whoseEvent);
        });
        $("#" + dateTo).on("change.datetimepicker", function (e) {
            CallDateFunction(e.date, callby, dateFrom, dateTo, dateFromNoChange, dateFromNoChangeVal, dateToNoChangeval, whoseEvent);
        });
        if (callby == "stage" || callby == "task" || callby == "phase") {
            
            $("#" + dateFrom).on("change.datetimepicker", function (e) {
                $('#' + dateTo).datetimepicker('minDate', e.date);
            });
            $("#" + dateTo).on("change.datetimepicker", function (e) {
                $('#' + dateFrom).datetimepicker('maxDate', e.date);
            });
        }
    }
}

function datePickerWithValidationR(dateFrom, dateTo, callby, callfrom) {
    //debugger;
    var cur = Globalize.culture();
    //alert(dateFrom + "  " + dateTo);
     //debugger;
    var whoseEvent = "";
    var newDate = "";
    var dateFromNoChange = dateFrom;
    var dateFromNoChangeVal = $("#" + dateFrom).val();
    var dateToNoChangeval = $("#" + dateTo).val();

    if ($("#" + dateFrom).next("#divgroupfrom" + dateFrom).length == 0) {
        var $DivFrom = $("<div>").addClass("input-group-append").attr({ "data-target": "#" + dateFrom, "data-toggle": "datetimepicker", "id": "divgroupfrom" + dateFrom });
        var $DivFromSpan = $("<span>").addClass("input-group-text").append('<i class="fa fa-calendar"></i>');
        $DivFrom.append($DivFromSpan);
        $DivFrom.insertAfter($('#' + dateFrom));
    }
    if ($("#" + dateTo).next("#divgroupto" + dateTo).length == 0) {
        var $DivTo = $("<div>").addClass("input-group-append").attr({ "data-target": "#" + dateTo, "data-toggle": "datetimepicker", "id": "divgroupto" + dateTo });
        var $DivToSpan = $("<span>").addClass("input-group-text").append('<i class="fa fa-calendar"></i>');
        $DivTo.append($DivToSpan);
        $DivTo.insertAfter($('#' + dateTo));
    }

    $("#" + dateFrom).keydown(function (event) {
        whoseEvent = "StartDate";
        event.preventDefault();
    });
    $("#" + dateTo).keydown(function (event) {
        whoseEvent = "EndDate";
        event.preventDefault();
    });
    $('#' + dateFrom).attr("readonly", "readonly").css("background-color", "#ffffff").addClass("hasdatetimepicker");
    $('#' + dateTo).attr("readonly", "readonly").css("background-color", "#ffffff").addClass("hasdatetimepicker");
    if (callfrom == "showbottom") {
        $('#' + dateFrom).datetimepicker({
            format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
            locale: cur.name,
            showClear: true,
            showClose: true,
            //autoclose: true,
            widgetPositioning: {
                horizontal: 'left',
                vertical: 'bottom'
            }
        });
        $('#' + dateTo).datetimepicker({
            format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
            locale: cur.name,
            showClear: true,
            showClose: true,
            //autoclose: true,
            widgetPositioning: {
                horizontal: 'left',
                vertical: 'bottom'
            }
        });
    }
    else {
        $('#' + dateFrom).datetimepicker({
            format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
            locale: cur.name,
            showClear: true,
            showClose: true
            //autoclose: true
        });
        $('#' + dateTo).datetimepicker({
            format: String(Globalize.culture().calendar.patterns.d).toUpperCase(),
            locale: cur.name,
            useCurrent: false,   // For project phase datepicker(Project/Edit/ProjectPhase) add 'useCurrent' attr and remove the on change event 
            showClear: true,
            showClose: true,
            //autoclose: true
        });
    }
    if (typeof callby != undefined) {
        // debugger;
        $("#" + dateFrom).on("change.datetimepicker", function (e) {
            CallDateFunction(e.date, callby, dateFrom, dateTo, dateFromNoChange, dateFromNoChangeVal, dateToNoChangeval, whoseEvent);
        });
        $("#" + dateTo).on("change.datetimepicker", function (e) {
            CallDateFunction(e.date, callby, dateFrom, dateTo, dateFromNoChange, dateFromNoChangeVal, dateToNoChangeval, whoseEvent);
        });
        if (callby == "stage" || callby == "task" || callby == "phase") {
            
            $("#" + dateFrom).on("change.datetimepicker", function (e) {
                $('#' + dateTo).datetimepicker('minDate', e.date);
            });
            $("#" + dateTo).on("change.datetimepicker", function (e) {
                $('#' + dateFrom).datetimepicker('maxDate', e.date);
            });
        }
    }
}


function CallDateFunction(date, callby, dateFrom, dateTo, dateFromNoChange, dateFromNoChangeVal, dateToNoChangeval, whoseEvent) {
    if ($("#duration").length > 0) {
        newDate = Globalize.format(date, "d", Globalize.culture().name);
    }
    if (callby == "task") {
        newDate = date;
    }
    if (typeof callby == "function")
        callby($("#" + dateFrom).val(), $("#" + dateTo).val());
    else if (callby == "task") {
        CheckdateConstraintsTask(dateFromNoChange, dateTo, dateFromNoChangeVal, dateToNoChangeval, newDate);
    }
    else if (callby == "WeeklyLimit") { } // No chack will be performed if called by Weekly Limit.
    else if (callby == "CheckVenueAvailability") { CheckVenueAvailability($("._startdate").val()); }
    else if (callby == "CRMContract") {
        var start = $("#" + dateFrom).datepicker('getDate');
        var end = $("#" + dateTo).datepicker('getDate');
        var days = (end - start) / 1000 / 60 / 60 / 24;
        //  alert(days);
        days = days < 0 ? 0 : days;
        $("#DurationInDays").val(days);
    }
    else if (callby == "resourcescheduling") {
        $("#txtToDate").removeClass("input-validation-error");
        $("#txtToDate").parent().parent().find("span.reserror").removeClass("field-validation-error").html('');
        $("#txtFromDate").removeClass("input-validation-error");
        $("#txtFromDate").parent().parent().find("span.reserror").removeClass("field-validation-error").html('');
        $("#hdnisticketresolutionchanged").val("1");
    }
    else {
        if ($("#duration").length > 0) {
            if ($("#tempStartDate") != $("#PlanStartDate").val() || $("#tempEndDate").val() != $("#PlanEndDate").val()) {
                if (callby == "task") {
                    CheckDateConstraints(newDate, whoseEvent, $("#tempStartDate").val(), $("#tempEndDate").val());
                }
                CalculateWorkingDays(whoseEvent);
            }
        }
    }
}


function datePickerWithValidation(dateFrom, dateTo, callby) {
    //debugger
    //alert(dateFrom + "  " + dateTo);
    //return true;
    try {
        var whoseEvent = "";
        var newDate = "";
        var dateFromNoChange = dateFrom;
        var dateFromNoChangeVal = $("#" + dateFrom).val();
        var dateToNoChangeval = $("#" + dateTo).val();
        $("#" + dateFrom).keydown(function (event) {
            whoseEvent = "StartDate";
            event.preventDefault();
        });
        $("#" + dateTo).keydown(function (event) {
            whoseEvent = "EndDate";
            event.preventDefault();
        });


        //var globalDateFormat = $.datepicker.regional[cul].dateFormat;
        //var localDateFormat = $('#hdnDateFormat').val();
        //    if ($('#hdnDateFormat').length >= 1) {
        //        var dateFormatVal = $('#hdnDateFormat').val();
        //        if (dateFormatVal == "MM/dd/yyyy") {
        //            globalDateFormat = "mm/dd/yy";
        //            localDateFormat = "mm/dd/yyyy";
        //        }
        //        else {
        //            globalDateFormat = "dd/mm/yy";
        //            localDateFormat = "dd/mm/yyyy";
        //        }
        //    }




        var dates = $("#" + dateFrom + ", #" + dateTo).datepicker({
            changeMonth: true,
            changeYear: true,
            numberOfMonths: 1,
            // dateFormat: globalDateFormat,
            showOn: "button",
            buttonImage: getRootURL() + "Content/images/black/calendar_iconB.png",
            buttonImageOnly: true,
            buttonText: Globalize.localize("SelectDate"),
            showButtonPanel: true,


            onSelect: function (selectedDate) {

                // debugger;
                whoseEvent = this.id;
                var option = this.id == dateFrom ? "minDate" : "maxDate",
                    instance = $(this).data("datepicker"),
                    date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
                dates.not(this).datepicker("option", option, date);
                if ($("#duration").length > 0) {
                    newDate = date;
                    //newDate = newDate.format(localDateFormat);
                    newDate = Globalize.format(newDate, "d", Globalize.culture().name);
                }
                if (callby == "task") {
                    newDate = date;
                    // newDate = Globalize.format(newDate, "d", Globalize.culture().name);
                    newDate = selectedDate;
                }


                //$(this).val(newDate);
            },
            beforeShow: function (input) {
                //  debugger;

                dpClearButton(input);
                var option1 = this.id;
                if (option1 == dateFrom) {
                    if ($("#" + dateTo).val() == "") $("#" + dateFrom).datepicker("option", {
                        maxDate: null

                    });
                } else if ($("#" + dateFrom).val() == "") $("#" + dateTo).datepicker("option", {
                    minDate: null,
                    maxDate: null

                });
                $(this).attr("disabled", true);
            },
            onClose: function (dateText, inst, even) {
                //debugger;

                $(this).attr("disabled", false);
                if (typeof callby == "function")
                    callby($("#" + dateFrom).val(), $("#" + dateTo).val());
                else if (callby == "task") {
                    CheckdateConstraintsTask(dateFromNoChange, dateTo, dateFromNoChangeVal, dateToNoChangeval, newDate);
                }
                else if (callby == "WeeklyLimit") { } // No chack will be performed if called by Weekly Limit.
                else if (callby == "CheckVenueAvailability") { CheckVenueAvailability($("._startdate").val()); }
                else if (callby == "CRMContract") {
                    var start = $("#" + dateFrom).datepicker('getDate');
                    var end = $("#" + dateTo).datepicker('getDate');
                    var days = (end - start) / 1000 / 60 / 60 / 24;
                    //  alert(days);
                    days = days < 0 ? 0 : days;
                    $("#DurationInDays").val(days);
                }
                else if (callby == "resourcescheduling") {
                    $("#txtToDate").removeClass("input-validation-error");
                    $("#txtToDate").parent().parent().find("span.reserror").removeClass("field-validation-error").html('');
                    $("#txtFromDate").removeClass("input-validation-error");
                    $("#txtFromDate").parent().parent().find("span.reserror").removeClass("field-validation-error").html('');
                    $("#hdnisticketresolutionchanged").val("1");
                }
                else {
                    //debugger;
                    if ($("#duration").length > 0) {
                        if ($("#tempStartDate") != $("#PlanStartDate").val() || $("#tempEndDate").val() != $("#PlanEndDate").val()) {
                            CheckDateConstraints(newDate, whoseEvent, $("#tempStartDate").val(), $("#tempEndDate").val());
                            CalculateWorkingDays(whoseEvent);
                        }
                    }
                }
            },
            onChangeMonthYear: function (element) {
                dpClearButton(element);
            }
        });
        //$("#ui-datepicker-div").hide()
        $("#" + dateFrom).focus(function () {
            $("#" + dateFrom).datepicker("show");
        });
        $("#" + dateTo).focus(function () {
            $("#" + dateTo).datepicker("show", function () {
                $("#" + dateFrom).focus();
            });
        });
    }
    catch (ex) {
        console.log(ex.message);
    }
    $(".ui-datepicker").hide();
}

function dpClearButton(input) {
    setTimeout(function () {
        var buttonPane = $(input)
            .datepicker("widget")
            .find(".ui-datepicker-buttonpane");
        $(buttonPane).html('');
        $("<button>", {
            text: Globalize.localize("Clear"),
            click: function () {
                //Code to clear your date field (text box, read only field etc.) I had to remove the line below and add custom code here
                $.datepicker._clearDate(input);
            }
        }).appendTo(buttonPane).addClass("ui-datepicker-clear ui-state-default ui-priority-primary ui-corner-all");
    }, 1);
}

function MaxCharsandMaxCharperWord(el, maxWordChars, maxLength, e) {
    var value = $(el).val();
    var words = value.split(/[\s]+/);
    var str = [];
    var bigStr = "";
    var charcode = e.keyCode ? e.keyCode : e.which;
    if (charcode == 16 || charcode == 8 || charcode == 35 || charcode == 36 || charcode == 9 || charcode == 37 || charcode == 39) return true;
    if (value.length > maxLength) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        return false;
    }
    if (charcode == 32) return true;
    for (var word in words)
        if (words[word].length > maxWordChars) str.push(words[word] + " ");
        else str.push(words[word]);
    $(el).val(str.join(" "));
    return true;
}

function fixedtoDecimal(el, dec) {
    if ($(el).length > 0)
        if ($(el).val().length > 0) {
            var amt = parseFloat($(el).val());
            $(el).val(amt.toFixed(dec));
        }
}
//Added by Damanpreet on 13th June 2013
// Create a jquery style modal confirm dialog
// Usage:
//    $.confirm(
//        "message",
//        "title",
//        function() { /* Ok action here*/
//        });
//Updated by Radhay on 11th Dec 2014
// Set Ok and cancel button with globalize

$.extend({
    confirm: function (message, title, okAction, cancelAction) {
        //debugger;
        title = Globalize.localize("Confirm");
        if ($("#divshowConfirmMessage").length > 0) {
            $("#divshowConfirmMessage").remove();
        }
        $("<div id='divshowConfirmMessage' class='textaligncenter text-center'></div>").appendTo("body");
        $("#divshowConfirmMessage").dialog({
            // Remove the closing 'X' from the dialog
            open: function (event, ui) {
                $("#divshowConfirmMessage").closest("div.modal").find('button.close').hide();
                $("span.ui-dialog-title").text(title);
                //$('body').css('overflow', 'hidden');
            },
            width: 380,
            buttons: [
    {
        text: Globalize.localize("OK"),
        title: Globalize.localize("OK"),
        'iTagClass': "fa fa-check pr-2",
        "class": "btn btn-success",
        click: function () {
            $("#divshowConfirmMessage").dialog("close");
            okAction();
        }
    },
    {
        text: Globalize.localize("Cancel"),
        title: Globalize.localize("Cancel"),
        'iTagClass': "fa fa-close pr-2",
        "class": "btn btn-danger",
        click: function () {
            $("#divshowConfirmMessage").dialog('close');
            if (cancelAction != undefined)
                cancelAction();
        }
    }
            ],
            close: function (event, ui) { $(this).remove(); },
            resizable: false,
            title: title,
            modal: true
        }).text(message);
        //$("#divshowConfirmMessage").dialog('open');
    }
});
$.extend({
    confirmCustom: function (message, title,buttons, okAction, cancelAction) {
        //debugger;
        title = Globalize.localize("Confirm");
        if ($("#divshowConfirmMessage").length > 0) {
            $("#divshowConfirmMessage").remove();
        }
        $("<div id='divshowConfirmMessage' class='textaligncenter text-center'></div>").appendTo("body");
        $("#divshowConfirmMessage").dialog({
            // Remove the closing 'X' from the dialog
            open: function (event, ui) {
                $("#divshowConfirmMessage").closest("div.modal").find('button.close').hide();
                $("span.ui-dialog-title").text(title);
                //$('body').css('overflow', 'hidden');
            },
            width: 380,
            buttons: [
                    {
                        text: Globalize.localize("OK"),
                        title: Globalize.localize("OK"),
                        'iTagClass': "fa fa-check pr-2",
                        "class": "btn btn-success",
                        click: function () {
                            $("#divshowConfirmMessage").dialog("close");
                            okAction();
                        }
                    },
                    {
                        text: Globalize.localize("Cancel"),
                        title: Globalize.localize("Cancel"),
                        'iTagClass': "fa fa-close pr-2",
                        "class": "btn btn-danger",
                        click: function () {
                            $("#divshowConfirmMessage").dialog('close');
                            if (cancelAction != undefined)
                                cancelAction();
                        }
                    }
            ],
            close: function (event, ui) { $(this).remove(); },
            resizable: false,
            title: title,
            modal: true
        }).text(message);
        //$("#divshowConfirmMessage").dialog('open');
    }
});
$.extend({
    alert: function (message, title) {
        if ($("#divshowAlertMessage").length > 0) {
            $("#divshowAlertMessage").remove();
        }
        $("<div id='divshowAlertMessage' class='textaligncenter text-center'></div>").appendTo("body");
        $("#divshowAlertMessage").dialog({
            // Remove the closing 'X' from the dialog
            open: function (event, ui) {
                //  $(".ui-dialog-titlebar-close").hide();
                $("#divshowAlertMessage").closest("div.modal").find('button.close').hide();
                $("span.ui-dialog-title").text(title);
                //  $('body').css('overflow', 'hidden');                
            },
            width: 380,
            buttons: [
    {
        text: Globalize.localize("OK"),
        title: Globalize.localize("OK"),
        'class': 'popupgreenbtn',
        click: function () { $("#divshowAlertMessage").dialog('close'); }
    }
            ],
            close: function (event, ui) { $("#divshowAlertMessage").remove(); },
            resizable: false,
            title: title,
            modal: true
        }).text(message);
    }
});
//window.confirm = function (message, title, okAction) {
//debugger;   
// $.confirm(message, Globalize.localize("Confirm"), okAction);
//};
//window.alert = function (message) {
// debugger;
// $.alert(message, Globalize.localize("Alert"));
//};
function newTab(href) {
    var form = document.createElement("form");
    form.method = "GET";
    form.action = href;
    form.target = "_blank";
    document.body.appendChild(form);
    form.submit();
}
function GetPrivilege(hrefLink, showalert, doredirect, isFor) {
    //debugger;
    //alert(hrefLink);
    //alert(showalert);
    // alert(doredirect);
    if (hrefLink == undefined) return true;
    if (hrefLink == "javascript:;" || hrefLink.indexOf("/") == -1 && hrefLink.length == 0) return true;
    var path = getRootURL();
    var haspermission = true;

    var scriptUrl = "/Shared/CheckPrivilegeAndModule";
    showLoader();
    $.ajax({
        url: scriptUrl,
        data: {
            link: hrefLink
        },
        type: "get",
        dataType: "json",
        async: false,
        success: function (data1) {
          
            try {
                if (data1)
                    if (!data1.hasPermission) {
                        haspermission = false;
                        if (data1.message == "Login") {
                            $.confirm(Globalize.localize("SessionExpired"), '', function () { /* Ok action here*/
                                if (doredirect) {
                                    window.location = "/Account/Logon";
                                }
                            });
                        } else if (data1.modulebuy == "cano") {
                            if (showalert) {
                                var str = '<br /><br /><br /><div class="fr"><a href="/Upgrade/Manage" class="green" >Ok</a> <a href="javascript: ClosePopUp();" class="red" >Cancel</a></div>';
                                $("#popUnauthrize").html(data1.message + str);
                                $("#popUnauthrize").dialog("open");
                            }
                        } else if (data1.modulebuy == "otherno") {
                            if (showalert) {
                                var str = '<br /><br /><br /><div class="fr"><a href="javascript:ClosePopUp(); " class="red" >Cancel</a></div>';
                                $("#popUnauthrize").html(data1.message + str);
                                $("#popUnauthrize").dialog("open");
                            }
                        } else if (showalert) {
                            if ($("#hdnisResponsive").length > 0 && $("#hdnisResponsive").val() == "R") {
                                talygen.alert(data1.message);
                            }
                            else {
                                alert(data1.message);
                            }
                        }
                    } else {
                        //this code for checking expense disable if value return yes then expense is disable
                        //alert(isFor);
                        if (hrefLink.indexOf("Expenses/Add") > -1 && isFor != "start") {
                            $.ajax({
                                url: "/Shared/CheckExpenseModule",
                                type: "get",
                                dataType: "json",
                                async: false,
                                success: function (data) {
                                    if (data == 'yes') {
                                        if ($("#hdnisResponsive").length > 0 && $("#hdnisResponsive").val() == "R") {
                                            talygen.alert(Globalize.localize("DisableExpenseMessage"));
                                        }
                                        else {
                                            alert(Globalize.localize("DisableExpenseMessage"));
                                        }
                                        window.location.href = '/TimeSheet/Index';
                                    }
                                    else {

                                        if (doredirect) window.location =
                                   hrefLink;
                                    }

                                },
                                error: function (xhr, ajaxOptions, thrownError) {

                                    // alert("GetPrivilege-1-" + xhr.status);
                                    // alert("GetPrivilege-2-" + thrownError)
                                }
                            });
                        }
                        else {

                            /* if (doredirect && $(ctrl).attr("target") == "_blank") {
                                  debugger;
                                 window.open(hrefLink, '_blank');
                             }
                             else {*/
                            if (doredirect)
                                window.location = hrefLink;
                            //}

                        }
                        haspermission = true;
                        hideLoader();
                    }
            } catch (ex) {
                hideLoader();
                if ($("#hdnisResponsive").length > 0 && $("#hdnisResponsive").val() == "R") {
                    talygen.alert(ex.message);
                }
                else {
                    alert(ex.message);
                }
            }

        },
        error: function (xhr, ajaxOptions, thrownError) {
            hideLoader();
            // alert("GetPrivilege-1-" + xhr.status);
            // alert("GetPrivilege-2-" + thrownError)
        },
      complete:function(){
         hideLoader();
            }
    });
    return haspermission;
}

function CheckExpenseDisable() {
    var value = 'no';
    $.ajax({
        url: "/Shared/CheckExpenseModule",
        type: "get",
        dataType: "json",
        async: false,
        success: function (data) {
            if (data == 'yes') {
                alert('yes');
                alert(Globalize.localize("DisableTimerMessage"));
                window.location.href = '/TimeSheet/Index';
            }

        },
        error: function (xhr, ajaxOptions, thrownError) {

            // alert("GetPrivilege-1-" + xhr.status);
            // alert("GetPrivilege-2-" + thrownError)
        }
    });
}
function CheckForLoginAndCompany(hrefLink, showalert, doredirect) {

    if (hrefLink == undefined) return true;
    if (hrefLink == "javascript:;" || hrefLink.indexOf("/") == -1 && hrefLink.length == 0) return true;
    var path = getRootURL();
    var haspermission = true;
    var scriptUrl = "/Shared/CheckForCompany";
    $.ajax({
        url: scriptUrl,
        data: {
            link: hrefLink
        },
        type: "get",
        dataType: "json",
        async: false,
        success: function (data1) {
            try {

                if (data1)
                    if (!data1.hasPermission) {
                        haspermission = false;
                        if (data1.message == "Login") {
                            $.confirm(Globalize.localize("SessionExpired"), '', function () { /* Ok action here*/
                                if (doredirect) {
                                    window.location = "/Account/Logon";
                                }
                            });
                        } else if (showalert) alert(data1.message);
                    } else {
                        if (doredirect) {
                            try {
                                var data = hrefLink.split("/");

                                if (data[1] == "ClientReport") {
                                    window.open(hrefLink, '_blank');
                                }
                                else {
                                    window.location = hrefLink;
                                }
                            }
                            catch (e) {
                                window.location = hrefLink;
                            }
                        }
                        haspermission = true;
                    }
            } catch (ex) {
                alert(ex.message);
            }

        },
        error: function (xhr, ajaxOptions, thrownError) {

            alert("GetPrivilege-1-" + xhr.status);
            alert("GetPrivilege-2-" + thrownError);
        }
    });
    return haspermission;
}

function CheckPrivilege(privilegeName, showalert, doredirect) {
    if (privilegeName == "" || privilegeName.length == 0) return true;
    var haspermission = true;
    var scriptUrl = "/Shared/CheckPrivilegeName";
    $.ajax({
        url: scriptUrl,
        data: {
            privilegeName: privilegeName
        },
        type: "get",
        dataType: "json",
        async: false,
        success: function (data1) {
            if (data1)
                if (!data1.hasPermission) {
                    haspermission = false;
                    if (data1.message == "Login") {
                        if (doredirect) window.location = "/Account/Logon";
                    } else if (showalert) alert(data1.message);
                } else {
                    if (doredirect) window.location =
                        hrefLink;
                    haspermission = true;
                }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
    return haspermission;
}

function StrTruncate(str, len) {
    if (str.length <= len) return str;
    else return str.substring(0, len) + "...";
}

function MakeAjaxCall(url, type, data, datatype, async, controlToContentShow) {
    try {
        $.ajax({
            url: url,
            type: type,
            data: data,
            dataType: datatype,
            async: async,
            success: function (result) {
                $("#" + controlToContentShow).html(result);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $("#" + controlToContentShow).html("Status: " + xhr.status + "   Error: " + thrownError);
            },
            failure: function (reason) {
                $("#" + controlToContentShow).html("Failed due to " + reason);
            }
        });
    } catch (ex) {
        $(controlToContentShow).html("Exception " + ex.message);
    }
}

function GetCurrentPage(pageNum) {
    try {
        if (pageNum != null && pageNum != "NaN" && pageNum != "undefined") return pageNum;
        var pageNumber = 1;
        pageNumber = parseInt($("div.pagination li").find("span.currentPage").html());
        if (pageNumber == null || pageNumber < 1) pageNumber = 1;
        return pageNumber;
    } catch (e) {
        return 1;
    }
}

function addParameter(param, value, url) {
    if (url == '' || url == undefined) {
        url = window.location.href;
    }
    var val = new RegExp("(\\?|\\&)" + param + "=.*?(?=(&|$))"),
        qstring = /\?.+$/;
    if (val.test(url)) {
        return url.replace(val, "$1" + param + "=" + value);
    } else if (qstring.test(url)) return url + "&" + param + "=" + value;

    else return url + "?" + param + "=" + value;
}


function getParameterByName(name) {
    var match = RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
}

function removeURLParam(url, param) {
    url = decodeURIComponent(url);
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {
        var prefix = encodeURIComponent(param) + '=';
        var pars = urlparts[1].split(/[&;]/g);
        for (var i = pars.length; i-- > 0;)
            if (pars[i].indexOf(prefix, 0) !== -1)
                pars.splice(i, 1);
        if (pars.length > 0)
            return urlparts[0] + '?' + pars.join('&');
        else
            return urlparts[0];
    } else

        return url;
}

function DisableBtn(el) {
    showLoader();
    $(el).val("Processing...");
}

function dateTimePickerWithValidation(dateFrom, dateTo) {
    $('#' + dateFrom).attr("readonly", "readonly").css("background-color", "#ffffff").addClass("hasdatetimepicker");
    $('#' + dateTo).attr("readonly", "readonly").css("background-color", "#ffffff").addClass("hasdatetimepicker");
    var dates = $("#" + dateFrom + ", #" + dateTo).datetimepicker({
        changeMonth: true,
        numberOfMonths: 1,
        showOn: "button",
        buttonImage: getRootURL() + "Content/images/black/calendar_iconB.png",
        buttonImageOnly: true,
        showButtonPanel: true,
        buttonText: Globalize.localize("SelectDate"),

        onSelect: function (selectedDate) {
            var option = this.id == dateFrom ? "minDate" : "maxDate",
                instance = $(this).data("datepicker"),
                date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat,
                    selectedDate, instance.settings);
            dates.not(this).datepicker("option", option, date);
        },
        beforeShow: function () {
            var option1 = this.id;
            if (option1 == dateFrom) {
                if ($("#" + dateTo).val() == "") $("#" + dateFrom).datepicker("option", {
                    maxDate: null
                });
            } else if ($("#" + dateFrom).val() == "") $("#" + dateTo).datepicker("option", {
                minDate: null,
                maxDate: null
            });
        }
    });
    $("#ui-datepicker-div").hide();
}
function SetTimePicker(element) {
    $('#' + element).timeEntry();
}
function SetDatePicker(element, min, max, img, showOn, isFor) {

    $("#" + element).keydown(function (event) {
        event.preventDefault();
    });
    if (img == undefined || img == '') {
        img = "calendar_iconB.png";
    }
    var dates = $("#" + element).datepicker({
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        showOn: showOn == true ? "both" : "button",
        buttonImage: getRootURL() + "Content/images/black/" + img,
        buttonImageOnly: true,
        buttonText: Globalize.localize("SelectDate"),
        showButtonPanel: true,
        onSelect: function (selectedDate) {
            dpClearButton(element);
            var option = this.id == element,
                    instance = $(this).data("datepicker"),
                    date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
            dates.not(this).datepicker("option",
                    option, date);

            if (isFor == "AuditRelatedInfo") {

                var Frequency = $("#AuditFrequency").val();
                var second_date = new Date(date);
                var dateselectedtype = $("#hdndateselectedtype").val();

                if (dateselectedtype == "imagehistory") {
                    Frequency = $("#ImageCaptureFrequency").val();
                }
                else if (dateselectedtype == "calibration") {
                    Frequency = $("#CalibrationFrequency").val();
                }
                //debugger;
                switch (Frequency) {
                    case "annual":
                        second_date.setFullYear(second_date.getFullYear() + 1);
                        $("#NextAuditDate").datepicker("setDate", second_date);
                        break;
                    case "biweek":
                        second_date.setDate(second_date.getDate() + 14);
                        $("#NextAuditDate").datepicker("setDate", second_date);
                        break;
                    case "daily":
                        second_date.setDate(second_date.getDate() + 1);
                        $("#NextAuditDate").datepicker("setDate", second_date);
                        break;
                    case "halfyear":
                        second_date.setMonth(second_date.getMonth() + 6);
                        $("#NextAuditDate").datepicker("setDate", second_date);
                        break;
                    case "month":
                        second_date.setMonth(second_date.getMonth() + 1);
                        $("#NextAuditDate").datepicker("setDate", second_date);
                        break;
                    case "quarterly":
                        second_date.setMonth(second_date.getMonth() + 3);
                        $("#NextAuditDate").datepicker("setDate", second_date);
                        break;
                    case "week":
                        second_date.setDate(second_date.getDate() + 7);
                        $("#NextAuditDate").datepicker("setDate", second_date);
                        break;
                }
            }
            else if (isFor == "checkout") {
                var startDate = $("#AssignedFrom").datepicker("getDate");
                var endDate = $("#AssignedTill").datepicker("getDate");
                $("#AssignedTill").datepicker("option", "minDate", startDate);
                if (endDate < startDate) {
                    $("#AssignedTill").datepicker("setDate", startDate);
                    //ShowMsgWithMsg(Globalize.localize("AssignedTillAndFromDateValidation"), "failure");                  
                }
            }

        },
        beforeShow: function (element) {
            dpClearButton(element);
            $(this).attr("disabled", true);
        },
        onClose: function (dateText, inst) {
            $(this).attr("disabled", false);
            if (isFor == "dashboard") {
                searchInbox();
            }
        },
        onChangeMonthYear: function (element) {
            dpClearButton(element);
        }

    });
    if (min)
        if (min.length > 0) $("#" + element).datepicker("option", "minDate", min);
    if (max)
        if (max.length > 0) $("#" + element).datepicker("option", "maxDate", max);

    //$("#ui-datepicker-div").hide();
    $(".ui-datepicker").hide();
}

function SetDatePickerOnClass(element, min, max) {

    var dates = $("." + element).datepicker({
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        showOn: "button",
        buttonImage: getRootURL() + "Content/images/black/calendar_iconB.png",
        buttonImageOnly: true,
        showButtonPanel: true,
        buttonText: Globalize.localize("SelectDate"),

        onSelect: function (selectedDate) {
            var option = this.id == element,
                instance = $(this).data("datepicker"),
                date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
            dates.not(this).datepicker("option", option, date);
        }
    });
    if (min)
        if (min.length > 0) $("." + element).datepicker("option", "minDate", min);
    if (max)
        if (max.length > 0) $("." + element).datepicker("option", "maxDate", max);
    $("#ui-datepicker-div").hide();
}

function datePickerSingle(dateFrom) {
    try {
        var dates = $("#" + dateFrom).datepicker({
            changeMonth: true,
            numberOfMonths: 1,
            showOn: "button",
            buttonImage: getRootURL() + "Content/images/black/calendar_iconB.png",
            buttonImageOnly: true,
            showButtonPanel: true,
            buttonText: Globalize.localize("SelectDate"),

            onSelect: function (selectedDate) {
                var option = this.id == dateFrom,
                    instance = $(this).data("datepicker"),
                    date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
                dates.not(this).datepicker("option",
                    option, date);
            }
        });
    } catch (ex) {
        alert("datePickerSingle--" + ex.message);
    }
    $("#ui-datepicker-div").hide();
}

function isAfterStartDate(startDateStr, endDateStr) {
    var inDate = new Date(startDateStr),
        eDate = new Date(endDateStr);
    if (inDate < eDate) return false;
    else return true;
}

function ClosePopUp() {
    $("#popUnauthrize").dialog("close");
}


function GetUnFormatedDateFromDateTime(date) {

    date = new Date(date);
    var dd = date.getDate();
    var mm = parseInt(date.getMonth()) + 1;
    var yy = date.getFullYear();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    date = mm + "/" + dd + "/" + yy;
    return date;
}


function ChangeDateFormatAccoToCachedUserFormat(date) {
    if ($('#hdnDateFormat').length >= 1) {

        date = new Date(date);
        var dd = date.getDate();
        var mm = parseInt(date.getMonth()) + 1;
        var yy = date.getFullYear();
        if (dd < 10) dd = "0" + dd;
        if (mm < 10) mm = "0" + mm;
        var dateFormatVal = $('#hdnDateFormat').val();
        if (dateFormatVal == "MM/dd/yyyy") {
            date = mm + "/" + dd + "/" + yy;
        } else {

            date = dd + "/" + mm + "/" + yy;
        }

    }
    return date;
}


function GetDateFromDateTime(date) {
    var dateFormat = $("#hdnDateFormat").val();
    date = new Date(date);
    var dd = date.getDate();
    var mm = parseInt(date.getMonth()) + 1;
    var yy = date.getFullYear();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    if (dateFormat == "dd/MM/yyyy") date = dd + "/" + mm + "/" + yy;
    else if (dateFormat == "MM/dd/yyyy") date = mm + "/" + dd + "/" + yy;
    else date = yy + "/" + mm + "/" + dd;
    return date;
}

function GetDateTimeInAMPM(date) {
    var dateFormat = $("#hdnDateFormat").val();
    date = new Date(date);
    var dd = date.getDate();
    var mm = parseInt(date.getMonth()) + 1;
    var yy = date.getFullYear();

    var min = date.getMinutes();
    var hour = date.getHours();
    var postfix = "";
    if (hour < 12) {
        postfix = "AM";
    } else {

        hour = hour - 12;
        postfix = "PM";
    }
    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    if (dateFormat == "dd/MM/yyyy") date = dd + "/" + mm + "/" + yy;
    else if (dateFormat == "MM/dd/yyyy") date = mm + "/" + dd + "/" + yy;
    else date = yy + "/" + mm + "/" + dd;

    return date + " " + hour + ":" + min + " " + postfix;
}

function GetTimeFromDateTime(date) {
    var dateFormat = $("#hdnDateFormat").val();
    date = new Date(date);
    var min = date.getMinutes();
    var hour = date.getHours();
    var postfix = "";
    if (hour < 12) {
        postfix = "AM";
    } else {

        hour = hour - 12;
        postfix = "PM";
    }
    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;

    return hour + ":" + min + "" + postfix;
}

$(function () {
    try {
        if ($("#hdnisResponsive").length > 0 && $("#hdnisResponsive").val() == "R") {
         
            setTimeout(CheckBoxBootstrap, 100);
        }
        else {
            setTimeout(customcheckbox, 100);
        }
    } catch (e) { }
});

function customcheckbox() {
    var chkedInput = $('input[type="checkbox"]:checked').not(":disabled").not("input[name^=multiselect]").not(".addonlist").not(".chkProjects").not(".chkTasks");
    var uncheckedInput = $("input:checkbox:not(:checked)").not(":disabled").not("input[name^=multiselect]").not(".addonlist").not(".chkProjects").not(".chkTasks");
    var chkedInputdisabled = $('input[type="checkbox"]:checked:disabled').not("input[name^=multiselect]");
    var uncheckedInputdisabled = $("input:checkbox:not(:checked):disabled").not("input[name^=multiselect]");
    $("label.disablecheck, label.disableoff").remove();
    if (chkedInputdisabled.length > 0) {
        $(chkedInputdisabled).after('<label class="disablecheck"></label>');
        $(chkedInputdisabled).hide();
    }
    if (uncheckedInputdisabled.length > 0) {
        $(uncheckedInputdisabled).after('<label class="disableoff"></label>');
        $(uncheckedInputdisabled).hide();
    }
    $("label.off, label.check").remove();
    if (chkedInput.length > 0) {
        $(chkedInput).after('<label class="check"></label>');
        $(chkedInput).hide();
    }
    if (uncheckedInput.length > 0) {
        $(uncheckedInput).after('<label class="off"></label>');
        $(uncheckedInput).hide();
    }
    $("label.check").off("click").on("click", function () {
        var checkboxesInput = $(this).prev('input["checkbox"]');
        if (checkboxesInput.attr("disabled") == "disabled") return false;
        $(this).removeClass("check");
        $(this).addClass("off");
        checkboxesInput.removeAttr("checked");
        $(checkboxesInput).trigger("click");
        checkboxesInput.removeAttr("checked");
        if ($(checkboxesInput).attr("id") == "chkAll") {
            var parent = $(checkboxesInput).parents("table");
            $(parent).find("input.chkItems:not(:disabled)+ label.check").addClass("off");
            $(parent).find("input.chkItems:not(:disabled)+ label.check").removeClass("check");
            $(parent).find("input.chkItems:not(:disabled)").removeAttr("checked");
        } else {
            var chkClass = $(checkboxesInput).attr("class");
            var gettable = $(checkboxesInput).parents("table").parent("div:visible").parent("div:visible").parent("div:visible").parent("div:visible:not(.ui-tabs-hide)");
            var classname = "";
            try { classname = $(gettable).attr("class") }
            catch (err) {
            }
            if (chkClass != undefined && chkClass.indexOf("chkItems") != -1) {
                if (String(classname).indexOf("ui-tabs-panel") > 0) {
                    $(gettable).find("input#chkAll").removeAttr("checked");
                    $(gettable).find("input#chkAll+ label").addClass("off");
                    $(gettable).find("input#chkAll+ label").removeClass("check");
                }
                else {
                    $("input#chkAll").removeAttr("checked");
                    $("input#chkAll+ label").addClass("off");
                    $("input#chkAll+ label").removeClass("check");
                }
            }

        }
        // var chkedInputForEnableIcon = $('input[type="checkbox"]:checked');
        var chkedInputForEnableIcon = $('table-sorting tbody, .table tbody').find('input[type="checkbox"]:checked').not(":disabled").not("input[name^=multiselect]");
        //        if (chkedInputForEnableIcon.length <= 0) $(".tablehead img").attr("src", function (i, e) {
        //            return e.replace("enable", "disable")
        //        })
        if (chkedInputForEnableIcon.length <= 0) {

            $(".tablehead a").removeClass('enable');
        }
        customcheckbox();
    });
    $("label.off").off("click").on("click", function () {

        var checkboxesInput = $(this).prev('input["checkbox"]');
        if (checkboxesInput.attr("disabled") == "disabled") return false;

        $(this).removeClass("off");
        $(this).addClass("check");
        checkboxesInput.attr("checked", "checked");
        $(checkboxesInput).trigger("click");
        checkboxesInput.attr("checked", "checked");
        if ($(checkboxesInput).attr("id") == "chkAll") {
            var parent = $(checkboxesInput).parents("table");
            $(parent).find("tr:visible").find("input.chkItems:not(:disabled)").attr("checked", "checked");
            $(parent).find("tr:visible").find("input.chkItems:not(:disabled)+ label.off").addClass("check");
            $(parent).find("tr:visible").find("input.chkItems:not(:disabled)+ label.off").removeClass("off");
        } else {
            var chkClass = $(checkboxesInput).attr("class");
            if (chkClass != undefined && chkClass.indexOf("chkItems") != -1) try {
                var gettable = $(checkboxesInput).parents("table").parent("div:visible").parent("div:visible").parent("div:visible").parent("div:visible:not(.ui-tabs-hide)");
                var classname = "";
                try { classname = $(gettable).attr("class") }
                catch (err) {
                }
                var totalcheckboxes = 0;
                var selectedCount = 0;
                if (String(classname).indexOf("ui-tabs-panel") > 0) {
                    totalcheckboxes = $(gettable).find("input.chkItems:not(:disabled)").not("#chkAll").length;
                    selectedCount = $(gettable).find('input.chkItems[id!="chkAll"][checked]').length;
                }
                else {
                    totalcheckboxes = $("input.chkItems:not(:disabled)").not("#chkAll").length;
                    selectedCount = $('input.chkItems[id!="chkAll"][checked]').length;
                }

                if (parseInt(selectedCount, 10) == parseInt(totalcheckboxes, 10)) {
                    if (String(classname).indexOf("ui-tabs-panel") > 0) {
                        $(gettable).find(':checkbox[id="chkAll"]').not(":disabled").attr("checked", "checked");
                        $(gettable).find("input#chkAll+ label").addClass("check");
                        $(gettable).find("input#chkAll+ label").removeClass("off");
                    }
                    else {
                        $(':checkbox[id="chkAll"]').not(":disabled").attr("checked", "checked");
                        $("input#chkAll+ label").addClass("check");
                        $("input#chkAll+ label").removeClass("off");
                    }

                }

            } catch (ex) {
                alert(ex.message);
            }
        }
        var chkedInputForEnableIcon = $('.tablesorter tbody, .sortable tbody').find('input[type="checkbox"]:checked').not(":disabled").not("input[name^=multiselect]");
        if (chkedInputForEnableIcon.length > 0) {
            $(".tablehead img").attr("src", function (i, e) {
                return e.replace("disable", "enable");
            });
        }

        if (chkedInputForEnableIcon.length > 0)
            $(".tablehead a").addClass('enable');
        customcheckbox();
    });
}


function CheckBoxBootstrap() {

    var chkedInput = $('input[type="checkbox"]').not("input[name^=multiselect]").not(".addonlist").not(".chkProjects").not(".multilevel,.multilevelall,.dynamic");
    var uncheckedInput = $("input:checkbox:not(:checked)").not("input[name^=multiselect]").not(".addonlist").not(".chkProjects").not(".chkTasks");
    var chkedInputdisabled = $('input[type="checkbox"]:checked:disabled').not("input[name^=multiselect]");
    var uncheckedInputdisabled = $("input:checkbox:not(:checked):disabled").not("input[name^=multiselect]");

    //debugger;
    //if (chkedInput.length > 0) {
    var chkallIndex = 1;
    $("label[for^='chkAll']").remove();
    $(chkedInput).parent().find("label.custom-control-label:not(.dynamic)").remove();
    //$("label.custom-control-label").remove();
    //$("div.custom-control").remove();

    $(chkedInput).each(function (index, element) {

        var $this = $(element);
        if ($(this).closest(".multiselect-container").length > 0) {
            return;
        }
        var id = "chk_" + index;
        if ($this.attr("data-change-id") == "no") {
            id = $this.attr("id");
        }
        var $div = $("<div>").addClass("custom-control custom-checkbox");
        var $divLabel = $("<label>").addClass("custom-control-label universal-custom-control-label pt-1").attr("for", id)
        if ($this.attr("data-resource-id") != undefined) {
            $divLabel.html($this.attr("data-resource-id"));
        }

        if ($(this).is("[id^='chkAll']")) {
            $divLabel.attr("for", "chkAll_" + index);
            $(this).attr("id", "chkAll_" + index);
            $(this).click(function (e) {
                e.stopImmediatePropagation();
                var table = $(e.target).closest('table');

                if ($(e.target).prop('checked') == true) {
                    $("input:checkbox", table).not(":disabled,.nochecked").prop("checked", true);
                    $("input:checkbox", table).not(":disabled,.nochecked").attr("checked", "checked");

                    if ($("input:checkbox", table).not(e.target).length > 0) {

                        if ($(table).closest(".tablehead").find("#DeleteMultiple").length > 0) {
                            $(table).closest(".tablehead").find("#DeleteMultiple").removeClass("disabled").addClass("enable");
                        }
                        else if ($(table).closest(".tablehead").find("a.iconenable").length > 0) {
                            $(table).closest(".tablehead").find("a.iconenable").removeClass("disabled").addClass("enable");
                        }
                        else if ($(e.target).attr("data-parent") != "no") {
                            $("#DeleteMultiple").removeClass("disabled").addClass("enable");
                            $(".tablehead a.iconenable").removeClass("disabled").addClass("enable");
                        }
                    }
                }
                else {
                    $("input:checkbox", table).not(":disabled,.nochecked").prop("checked", false);
                    $("input:checkbox", table).not(":disabled,.nochecked").removeAttr("checked");

                    if ($(table).closest(".tablehead").find("#DeleteMultiple").length > 0) {
                        $(table).closest(".tablehead").find("#DeleteMultiple").addClass("disabled").removeClass("enable");
                    }
                    else if ($(table).closest(".tablehead").find("a.iconenable").length > 0) {
                        $(table).closest(".tablehead").find("a.iconenable").addClass("disabled").removeClass("enable");
                    }
                    else if ($(e.target).attr("data-parent") != "no") {
                        $("#DeleteMultiple").addClass("disabled").removeClass("enable");
                        $(".tablehead a.iconenable").addClass("disabled").removeClass("enable");
                    }
                }
            });

        }
        else {
            $(this).attr("id", id);
        }
        $(this).addClass("custom-control-input").hide();
        if ($(this).closest("div.custom-control").length == 0) {
            $(this).wrap($div);
        }
        $(this).prev("input:checkbox").removeClass("chkItems");
        if ($(this).next("label.custom-control-label").length == 0) {
            $(this).after($divLabel);
        }
        else {
            $(this).next("label.custom-control-label").attr("for", id);
        }
    });
    $(".chkItems").click(function (e) {

        var totalcheckboxes = 0;
        var selectedCount = 0;
        //debugger;
        var gettable = $(this).closest("table");//.parent("div:visible").parent("div:visible").parent("div:visible").parent("div:visible:not(.ui-tabs-hide)");
        totalcheckboxes = $(gettable).find("input.chkItems:not(:disabled)").not("[id^='chkAll']").length;
        selectedCount = $(gettable).find('input.chkItems:checked').not("[id^='chkAll']").length;

        if (parseInt(selectedCount, 10) == parseInt(totalcheckboxes, 10)) {
            $(gettable).find(':checkbox[id^="chkAll"]').not(":disabled").prop("checked", true);
            $(gettable).find(':checkbox[id^="chkAll"]').not(":disabled").attr("checked", "checked");
        }
        else {
            $(gettable).find(':checkbox[id^="chkAll"]').not(":disabled").prop("checked", false);
            $(gettable).find(':checkbox[id^="chkAll"]').not(":disabled").removeAttr("checked");
        }

        if ($(this).is(':checked')) {

            if (totalcheckboxes > 0 && $(e.target).attr("data-parent") != "no") {
                $("#DeleteMultiple").removeClass("disabled");
                $(".tablehead a.iconenable").removeClass("disabled").addClass("enable");
            }
        }
        else {
            if (selectedCount == 0) {
                $("#DeleteMultiple").addClass("disabled");
                $(".tablehead a.iconenable").removeClass("enable").addClass("disabled");
            }
        }
        if ($(e.target).is(':checked')) {
            $(e.target).not(":disabled").attr("checked", "checked");
        }
        else {
            $(e.target).not(":disabled").removeAttr("checked");
        }

    });
    $("input:checkbox:not(:disabled)").not("[id^='chkAll']").not("input[name^=multiselect]").not(".addonlist").not(".chkItems").not(".chkProjects").not(".chkTasks").not(".multilevel,.dynamic").click(function (e) {
        if ($(e.target).is(':checked')) {
            $(e.target).not(":disabled").attr("checked", "checked");
        }
        else {
            $(e.target).not(":disabled").removeAttr("checked");
        }
    });
}
function ShowPopOver() {
    $('[data-toggle="popoveruserguide"]').popover({
        html: true,
        content: function () {
            return $(this).attr("data-content");
        },
        placement: "top",
        template: '<div class="popover popover-custom"><div class="arrow"></div><h3 class="popover-header"></h3><div><a href="javascript:;" class="close" style="font-size:23px;" data-dismiss="alert">&times;</a></div><div class="popover-body">' + $(this).attr("data-content") + '</div></div>',
        trigger: "focus"

    }).on("show.bs.popover", function (e) {
        // hide all other popovers
        $('[data-toggle="popoveruserguide"]').not(e.target).popover("hide");
    });    
}

$(document).on("click", ".popover .close", function () {
    $(this).parents(".popover").popover('hide');
});

function RadioButtonBootstrap() {
    var chkedInput = $('input[type="radio"]').not("input[name^=multiselect]").not(".dynamic");

    $("label.universalradio-custom-control-label:not(.dynamic)").remove();
    $("label.checkrd").remove();
    $("label.offrd").remove();
    $(chkedInput).each(function (index, element) {
        var $this = $(element);
        if ($this.closest(".multiselect-container").length > 0) {
            return;
        }
        var $div = $("<div>").addClass("form-check form-check-inline custom-control mx-2 p-0 custom-radio");
        var id = "rdo_" + index;
        if ($this.attr("data-change-id") == "no") {
            id = $this.attr("id");
        }
        //debugger;
        var labelName = Globalize.localize($(this).attr("data-resource")) == undefined ? $(this).attr("data-resource") : Globalize.localize($(this).attr("data-resource"));
        var $divLabel = $("<label>").addClass("custom-control-label universalradio-custom-control-label pl-2 pt-1").attr("for", id).html(labelName);

        $this.attr("id", id);
        var className = $this.attr("class");
        $this.addClass("form-check-input custom-control-input");//.addClass(className);//.hide();
        if ($this.closest("div.custom-radio").length == 0) {
            $this.wrap($div);
        }
        $this.after($divLabel);
    });

}
$(function () {
    try {
        if ($("#hdnisResponsive").length > 0 && $("#hdnisResponsive").val() == "R") {
            setTimeout(RadioButtonBootstrap, 100);
        }
        else {
            setTimeout(customradiobutton, 100);
        }
    } catch (e) { }
});
function SetBootstrapMultiSelectWithId(ddlId) {
    if ($("#" + ddlId).length == 0) {
        return;
    }
    var elName = $("#" + ddlId).attr('name');

    $("#" + ddlId).multiselect({
        includeSelectAllOption: true,
        enableFiltering: true,
        onDropdownHide: function (event) {
            var el = $("#" + ddlId).attr('name');
            $('input[type=hidden][name=' + el + ']').val($("#" + ddlId).val());
        }
    });
    var element = $("#" + ddlId).attr('name');
    if ($('input[type=hidden][name=' + element + ']').val() != "") {
        var selected = $('input[type=hidden][name=' + element + ']').val();
        var dataarray = selected.split(",");
        $("#" + ddlId).val(dataarray);
        // Then refresh
        $("#" + ddlId).multiselect("rebuild");
    }
}
function customradiobutton() {
    var chkedInput = $('input[type="radio"]:checked').not("input[name^=multiselect]").not(":disabled");
    var uncheckedInput = $("input:radio:not(:checked)").not("input[name^=multiselect]").not(":disabled");
    var chkedInputdisabled = $('input[type="radio"]:checked:disabled').not("input[name^=multiselect]");
    var uncheckedInputdisabled = $("input:radio:not(:checked):disabled").not("input[name^=multiselect]");
    $("label.disablecheckrd, label.disableoffrd").remove();
    if (chkedInputdisabled.length >
        0) {
        $(chkedInputdisabled).after('<label class="disablecheckrd"></label>');
        $(chkedInputdisabled).hide();
    }
    if (uncheckedInputdisabled.length > 0) {
        $(uncheckedInputdisabled).after('<label class="disableoffrd"></label>');
        $(uncheckedInputdisabled).hide();
    }
    $("label.offrd, label.checkrd").remove();
    if (chkedInput.length > 0) {
        $(chkedInput).after('<label class="checkrd"></label>');
        $(chkedInput).hide();
    }
    if (uncheckedInput.length > 0) {
        $(uncheckedInput).after('<label class="offrd"></label>');
        $(uncheckedInput).hide();
    }
    $("body").on("click", "label.checkrd", function (event) {
        //debugger;
        event.stopImmediatePropagation();
        var checkboxesInput = $(this).prev('input["radio"]');
        if (checkboxesInput.attr("disabled") == "disabled" || checkboxesInput.attr("checked") == "checked") return false;
        $(this).removeClass("checkrd");
        $(this).addClass("offrd");
        checkboxesInput.removeAttr("checked");
        $(checkboxesInput).trigger("click");
        checkboxesInput.removeAttr("checked");
    });
    $("body").on("click", "label.offrd", function (event) {
        //debugger;
        event.stopImmediatePropagation();
        var checkboxesInput = $(this).prev('input["radio"]');
        if (checkboxesInput.attr("disabled") == "disabled") return false;
        var thisName = $(checkboxesInput).attr("name");
        $('input[name="' + thisName + '"]+label').removeClass("checkrd");
        $('input[name="' + thisName + '"]+label').addClass("offrd");
        $(this).removeClass("offrd");
        $(this).addClass("checkrd");
        $(this).prev('input["radio"]').attr("checked", "checked");
        $(checkboxesInput).trigger("click");
        $(this).prev('input["radio"]').attr("checked", "checked");
    });
};

function IsNumeric(num) {
    return (num >= 0);
}

function TrancateTextByWidth(text, original, idealWidth) {
    try {
        if (idealWidth <= 0) {
            idealWidth = 140;
        }
        $('.temp_item').remove();
        var tempItem = ('<span class="temp_item" style="display: none;">' + text + '</span>');
        $(tempItem).appendTo('body');
        var itemWidth = $('span.temp_item').width();
        var ideal = parseInt(idealWidth);
        ideal -= 25;
        var smallerText = text;

        while (itemWidth > ideal) {
            smallerText = smallerText.substr(0, (smallerText.length - 1));
            if (smallerText.length <= 0) {
                //alert(text + '   -    Hello hello');
                return text;
            }

            $('.temp_item').html(smallerText);
            itemWidth = $('span.temp_item').width();

        }

        var finalLength = smallerText.length;
        $('.temp_item').remove();
        if (finalLength != original) {
            return (smallerText + '&hellip;');
        } else {
            return text;
        }
    } catch (e) {

        // alert(e);
        return text;
    }
}

//function validASCIIChars(el) {
//    var isValid = true;
//    var values = "";

//    var el1 = $(el);
//    el1 = $('#' + el);


//    $(el1).each(function () {
//        values = $.trim($(this).val().replace(/<|>/g, ""));
//        if (values.indexOf('&#') > -1) {
//            isValid = false;
//            hideLoader();
//            return false;
//        }
//    });
//}
//made By radhay 20 june 2014 Convert HMM to seconds
function CommonConvertHHmmToSeconds(hhmm) {
    var totaltime = hhmm.split(":");
    var hours = parseInt(totaltime[0], 10) * 60 * 60;
    var minutes = parseInt(totaltime[1], 10) * 60;
    var convertedSeconds = hours + minutes;
    return convertedSeconds;
}

function CommonConvertDecimalToHHMM(timeInDecimal) {
    //debugger;
    // var isColon = timeInDecimal.val();
    var isColon = timeInDecimal.toString();

    if (isColon.indexOf(':') != -1) {

        var formatcolon = isColon.split(':');

        var colhrs = formatcolon[0];
        var colmin = formatcolon[1];

        if (colhrs > 9999999999) {
            alert(Globalize.localize("HoursExceedWarning"));
            //timeInDecimal.val('00:00');
            return '00:00';
            //return false;
        }

        var numbers = /[0]/;
        if (colhrs < 9 && parseInt(colhrs, 10) != 0) {
            colhrs = "0" + colhrs;
            colhrs = colhrs.split("00").join("");
            if (!colhrs.match(numbers)) {
                colhrs = "0" + colhrs;
            }
        } else if (parseInt(colhrs, 10) == 0) {
            colhrs = '00';
        }


        if (colmin < 9 && parseInt(colmin, 10) != 0) {
            colmin = "0" + colmin;
            colmin = colmin.split("00").join("");
            if (!colmin.match(numbers)) {
                colmin = "0" + colmin;
            }

        } else if (parseInt(colmin, 10) == 0) {
            colmin = '00';
        }

        if (colmin == "") {
            //timeInDecimal.val(colhrs + ':00');
            return colhrs + ':00';
        } else {


            if (colmin > 59) {
                // timeInDecimal.val(colhrs + ':59');
                return colhrs + ':59';
            } else {

                //timeInDecimal.val(colhrs + ':' + colmin);
                return colhrs + ':' + colmin;
            }
        }
        return false;
    }



    var hrs = parseInt(Number(timeInDecimal), 10);

    if (hrs > 9999999999) {
        alert(Globalize.localize("HoursExceedWarning"));
        // timeInDecimal.val('00:00');
        return '00:00';
        //return false;
    }

    var min = Math.round((Number(timeInDecimal) - hrs) * 60);
    if (hrs <= 9)
        hrs = "0" + hrs;
    if (min <= 9)
        min = "0" + min;
    // timeInDecimal.val(hrs + ':' + min);
    return hrs + ':' + min;
}

function CurrentDBDate(newDate) {

    var stringDate = "";
    try {

        newDate = new Date(newDate);
        var month = newDate.getMonth() + 1;
        var year = newDate.getFullYear();
        var day = newDate.getDate();
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        stringDate = month + "/" + day + "/" + year;
        return stringDate;
    } catch (ex) {
        //alert("CurrentDBDate--" + ex.message);
        HandleErrorOccured(ex, 'CurrentDBDate--');
    }
    return stringDate;
}
if (!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
        return this.replace(/{([^{}]*)}/g, function (a, b) {
            var r = o[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        });
    };
}
String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;



    });
};






function GetCurrentDateForDatePickarTextbox() {

    var currentDate = Globalize.format(new Date(), 'd', Globalize.culture().name);
    return currentDate;
    //    var day = currentDate.getDate();
    //    var month = currentDate.getMonth() + 1;
    //    var year = currentDate.getFullYear();
    //    if (day < 10) {
    //        day = "0" + day;
    //    }
    //    if (month < 10) {
    //        month = "0" + month;
    //    }
    //    if ($('#hdnDateFormat').val() == 'dd/MM/yyyy') {
    //        date = day + "/" + month + "/" + year;
    //    } else if ($('#hdnDateFormat').val() == 'MM/dd/yyyy') {
    //        date = month + "/" + day + "/" + year;
    //    } else {
    //        date = year + "/" + month + "/" + day;
    //    }

    //return date;
};

function SetDateFormat(newDate) {
    var stringDate = "";
    try {

        newDate = new Date(newDate.replace("IST", ""));
        var month = newDate.getMonth() + 1;
        var year = newDate.getFullYear();
        var day = newDate.getDate();
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }

        if ($('#hdnDateFormat').val() == 'dd/MM/yyyy') {
            stringDate = day + "/" + month + "/" + year;
        } else if ($('#hdnDateFormat').val() == 'MM/dd/yyyy') {
            stringDate = month + "/" + day + "/" + year;
        } else {

            stringDate = year + "/" + month + "/" + day;
        }
        return stringDate;
    } catch (ex) {
        //alert("CurrentDBDate--" + ex.message);
        HandleErrorOccured(ex, 'CurrentDBDate--');
    }
    return stringDate;
}

//function addParameterNew(param, value, url) {
//    //var url = window.location.href;
//    var val = new RegExp("(\\?|\\&)" + param + "=.*?(?=(&|$))"),
//        qstring = /\?.+$/;
//    if (val.test(url)) {
//        return url.replace(val, "$1" + param + "=" + value);
//    }
//    else if (qstring.test(url)) return url + "&" + param + "=" + value;
//    else return url + "?" + param + "=" + value
//}

//Created By: Surinderjit Singh
//Created At: 2015-02-06
// e.g. Parameter vDate = 'dd/MM/yyyy', return Date
function ToJsDate(vDate) {
    return Globalize.parseDate(vDate, Globalize.culture().calendar.patterns.d);
}

// e.g. Parameter vTime = 'HH:mm', return Date
function ToJsTime(vTime) {
    return Globalize.parseDate(vTime, Globalize.culture().calendar.patterns.t);
}

// e.g. Parameter vTime = 'dd/MM/yyyy HH:mm', return Date
function ToJsDateTime(vDateTime) {
    return Globalize.parseDate(vDateTime, Globalize.culture().calendar.patterns.d + " " + Globalize.culture().calendar.patterns.t);
}

// e.g. Parameter vDateTime = new Date(), return dd/MM/yyyy
function FromJsDate(vDateTime) {
    return Globalize.format(vDateTime, Globalize.culture().calendar.patterns.d);
}

// e.g. Parameter vDateTime = new Date(), return HH:mm
function FromJsTime(vDateTime) {
    return Globalize.format(vDateTime, Globalize.culture().calendar.patterns.t);
}

// e.g. Parameter vDateTime = new Date(), return dd/MM/yyyy HH:mm
function FromJsDateTime(vDateTime) {
    return Globalize.format(vDateTime, Globalize.culture().calendar.patterns.d + " " + Globalize.culture().calendar.patterns.t);
}

function ShowfileUploadWithCulture(width, isFor) {
    if (isFor == "R") {
        $('.custom-file-input').on('change', function () {
            //debugger;
            var fileName = $(this).val().split('\\').pop();
            $(this).next('.form-control-file').addClass("selected").html(fileName);
        })
        // $('<style type="text/css"> .custom-file-label::after {content: "' + Globalize.localize("Browse") + '" !important }</style>').appendTo("head");
        //$('input[type="file"]').attr('title', Globalize.localize("FileControlText"));
    }
    else {
        if (width != undefined && String(width) != 'undefined') {
            if (width.length > 0 && parseInt(width, 10) > 30) {
                $(":file").filestyle({ icon: false, buttonText: Globalize.localize("FileControlText"), buttonTitle: Globalize.localize("FileControlToolTip"), width: width });
            }
            else {
                $(":file").filestyle({ icon: false, buttonText: Globalize.localize("FileControlText"), buttonTitle: Globalize.localize("FileControlToolTip") });
            }
        }
        else {
            $(":file").filestyle({ icon: false, buttonText: Globalize.localize("FileControlText"), buttonTitle: Globalize.localize("FileControlToolTip") });
        }
        ClearfileUpload();
    }
}
function ClearfileUpload() {
    $(document).on("click", "a.clear,a#clearfile", function () {
        //  alert("hello");
        //  alert($(this).parent().parent().parent("div").find("input:file").attr("class"));
        $(this).parent().parent("div").find("input:file").filestyle('clear');
    });
}
function ChangeDBDate(newDate) {
    try {
        newDate = Globalize.format(Globalize.parseDate(newDate), "yyyy-MM-dd");
        return newDate;
    }

    catch (ex) {

        HandleErrorOccured(ex, 'ChangeDBDate--');
    }
    return newDate;
}

function setculture() {

    var cul = Globalize.culture();
    var culname = cul.name;
    if ($("#hdnisResponsive").length > 0 && $("#hdnisResponsive").val() == "R") {
        var timeFormat = false;
        if ($('#hdnTimeFormat').val() == "24") {
            timeFormat = true;
        }
        if ($("#txtStartTime").length > 0) {
            $("#txtStartTime").datetimepicker('setDefault', timeFormat);
        }
        if ($("#txtStopTime").length > 0) {
            $("#txtStopTime").datetimepicker('setDefault', timeFormat);
        }
        if ($("#txtStartTime24").length > 0) {
            $("#txtStartTime24").datetimepicker('setDefault', timeFormat);
        }
        if ($("#txtStopTime24").length > 0) {
            $("#txtStopTime24").datetimepicker('setDefault', timeFormat);
        }

        if ($("#txtEditStartTime").length > 0) {
            $("#txtEditStartTime").datetimepicker('setDefault', timeFormat);
        }
        if ($("#txtEditStopTime").length > 0) {
            $("#txtEditStopTime").datetimepicker('setDefault', timeFormat);
        }
        if ($("#txtEditStartTime24").length > 0) {
            $("#txtEditStartTime24").datetimepicker('setDefault', timeFormat);
        }
        if ($("#txtEditStopTime24").length > 0) {
            $("#txtEditStopTime24").datetimepicker('setDefault', timeFormat);
        }
    }
    else {
        var calregional = $.datepicker.regional[culname];
        $.datepicker.setDefaults($.datepicker.regional['']);
        if (culname != 'en' && calregional) {
            $.datepicker.setDefaults(calregional);
        };

        if ($('#hdnTimeFormat').val() == "24") {
            calregional.regionalOptions.show24Hours = true;
            calregional.regionalOptions.ampmPrefix = '';
            calregional.timeFormat = calregional.timeFormat.replace("h", "H").replace("h", "H").replace(" tt", '');
            cul.calendar.patterns.t = cul.calendar.patterns.t.replace("h", "H").replace("h", "H").replace(" tt", '');
            cul.calendar.patterns.T = cul.calendar.patterns.T.replace("h", "H").replace("h", "H").replace(" tt", '');
        }
        else {
            calregional.regionalOptions.show24Hours = false;
            calregional.regionalOptions.ampmPrefix = ' ';

            calregional.regionalOptions.ampmNames = [Globalize.localize('AM'), Globalize.localize('PM')];
            cul.calendar.AM = [Globalize.localize('AM')];
            cul.calendar.PM = [Globalize.localize('PM')];

            calregional.timeFormat = calregional.timeFormat.replace("H", "h").replace("H", "h").replace(" tt", '') + " tt";
            cul.calendar.patterns.t = cul.calendar.patterns.t.replace("H", "h").replace("H", "h").replace(" tt", '') + " tt";
            cul.calendar.patterns.T = cul.calendar.patterns.T.replace("H", "h").replace("H", "h").replace(" tt", '') + " tt";
        }
    }
}
var validNavigation = false;


function wireUpWindowUnloadEvents() {
    alert('wireUpWindowUnloadEvents()');
    /*
    * List of events which are triggered onbeforeunload on IE
    * check http://msdn.microsoft.com/en-us/library/ms536907(VS.85).aspx
    */

    // Attach the event keypress to exclude the F5 refresh
    $(document).on('keypress', function (e) {
        alert(e.keyCode);
        if (e.keyCode == 116) {
            validNavigation = true;
        }
    });

    // Attach the event click for all links in the page
    $(document).on("click", "a", function () {
        validNavigation = true;
    });

    // Attach the event submit for all forms in the page
    $(document).on("submit", "form", function () {
        validNavigation = true;
    });

    // Attach the event click for all inputs in the page
    $(document).bind("click", "input[type=submit]", function () {
        validNavigation = true;
    });

    $(document).bind("click", "button[type=submit]", function () {
        validNavigation = true;
    });

}
function getQueryStringValue(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function CheckdateConstraintsTask(objStart, objEnd, objStartNoChangeVal, objEndNoChangeVal, newDate) {
    //debugger;
    //if (confirm(Globalize.localize("PlanDatesChangeAlert"))) {
    //    var projectId = $("#ProjectIdTaskVal").val();
    //    var parentTaskId = $("#ParentTaskId").val();
    //    var start_date = $("#" + objStart).val();
    //    var end_date = $("#" + objEnd).val();
    //    //debugger;
    //    $.ajax({
    //        url: '/task/CheckForDuration',
    //        data: { task_id: 0, project_id: projectId, parent_task_id: parentTaskId, startDate: start_date, endDate: end_date },
    //        async: true,
    //        cache: false,
    //        success: function (data) {
    //            //$("#updateDepends").val('');
    //            if (data) {
    //                $("#hdnDuration").val(data.WORKING_DAYS);
    //                $("#ProjectIdTaskChkValue").val(data.CHANGE_IN_PROJECT);
    //                if (data.CHANGE_IN_PROJECT == null) {
    //                    $("#" + objEnd).val(newDate);
    //                }
    //                else {
    //                    if (!confirm(Globalize.localize("PlanDatesChangeAlert"))) {
    //                        $("#" + objEnd).val(objEndNoChangeVal);
    //                    }
    //                    else {
    //                        $("#" + objEnd).val(newDate);
    //                    }
    //                }
    //            }
    //        },
    //        error: function (http, message, exc) {
    //            ShowMsgWithMsg(message, "failure");
    //        }
    //    });
    //}
    //else {
    //    $("#" + objEnd).val(objEndNoChangeVal);
    //}
}
function communication_icon(user_id, user_type_id, company_id) {
    //showLoader();

    $.ajax({
        url: '/Home/communication/',
        data: { user_Id: user_id, user_Type_Id: user_type_id, company_Id: company_id },
        type: "GET",
        async: true,
        success: function (result) {

            $(".communication").html(result);
            hideLoader();
        },
        error: function (ex) {
            console.log(ex);
            ShowMsgWithMsg(Globalize.localize("ErrorWhileProcessingRequest"), "failure");
            hideLoader();
        }
    });


    hideLoader();

}
function JSONToCSVConvertor(JSONData, fileName, ShowLabel) {
   
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    var CSV = '<table border="1" cellpadding="10" cellspacing="10"><tr>';
    if (ShowLabel) {
        var row = "";
        for (var index in arrData.schema) {
            if (arrData.schema[index].VISIBLE == true) {
                var displayName = arrData.schema[index].DISPLAY_NAME;
                var fieldName = arrData.schema[index].COLUMN_NAME;
                if (!(displayName || /^\s*$/.test(displayName))) {
                    var chk = Globalize.localize(String(fieldName).toUpperCase());
                    if (chk || /^\s*$/.test(chk) == true) {
                        displayName = chk;
                    }
                    else {
                        chk = Globalize.localize(String(fieldName));
                        if (chk || /^\s*$/.test(chk) == true) {
                            displayName = chk;
                        } else {
                            displayName = fieldName;
                        }
                    }
                }
                else {
                    var chk = Globalize.localize(String(displayName).toUpperCase());
                    if (chk || /^\s*$/.test(chk) == true) {
                        displayName = chk;
                    } else {
                        chk = Globalize.localize(String(displayName));
                        if (chk || /^\s*$/.test(chk) == true) {
                            displayName = chk;
                        }
                    }
                }
                row += '<th>' + displayName + '</th>';
            }
        }
        CSV += row + '</tr>';
    }
    for (var i = 0; i < arrData.data.length; i++) {
        var row = "<tr>";
        var j = 0;
        for (var j = 0; j < arrData.schema.length; j++) {
            if (arrData.schema[j].VISIBLE == true) {
                var arrValue = ''
                if (arrData.schema[j].DATA_TYPE == 'date') {
                    arrValue = arrData.data[i][arrData.schema[j].COLUMN_NAME] == null ? "" : moment(String(arrData.data[i][arrData.schema[j].COLUMN_NAME]), "YYYY-MM-DD").format("DD/MM/YYYY");
                } else {
                    arrValue = arrData.data[i][arrData.schema[j].COLUMN_NAME] == null ? "" : arrData.data[i][arrData.schema[j].COLUMN_NAME];
                }
                row += '<td type="' + arrData.schema[j].DATA_TYPE + '">' + arrValue + '</td>';
            }
        }
        row.slice(0, row.length - 1);
        CSV += row + '</tr>';
    }
    CSV += "</table>";
    if (CSV == '') {
        growl.error("Invalid data");
        return;
    }
    var fileName = fileName;
    var uri = 'data:application/xls;charset=utf-8,' + escape(CSV);
    var link = document.createElement("a");
    link.href = uri;
    link.style = "visibility:hidden";
    link.download = fileName + ".xls";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function confirmR(message, showtitle, title, okAction, cancelAction) {
    if (showtitle) {
        talygen.confirm({
            title: title,
            message: message,
            callback: function (result) {
                if (result) {
                    okAction();
                }
                else {
                    if (cancelAction != undefined)
                        cancelAction();
                }
            }
        });
    }
    else {
        talygen.confirm(message, function (result) {
            if (result) {
                okAction();
            }
        });
    }
}

function alertR(message, showtitle, title, isHide, okAction) {
    if (showtitle) {
        var box = talygen.alert({
            title: title,
            message: message,
            //size: 'small',
            callback: function () {
                if (okAction != undefined)
                    okAction();
            }
        });
    }
    else {
        var box = talygen.alert(message);
    }
    if (isHide) {
        setTimeout(function () {
            box.modal('hide');
        }, 3000);
    }
}
function ScrollTable(ctrl) {
    $("#" + ctrl).scroll(function () {
        ScrollDiv(ctrl);
    });
}
function ScrollDiv(ctrl) {
    var scrollwidth = $('#' + ctrl + ' table').width() - $('#' + ctrl).width();
    totalmargin = scrollwidth + 30;
    var setTotal = totalmargin - $("#" + ctrl).scrollLeft();

    $("#" + ctrl + " table .sldrwrapper").css("right", setTotal);
}