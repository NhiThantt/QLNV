function Validation() {
    this.checkEmpty = function (value, spanID, message) {
        if (value === "") {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "none";
        return true;
    }

    this.checkID = function (value, spanID, message, mangNV) {
        var isExist = mangNV.some(function (nv) {
            return nv.id === value;
        })
        if (isExist) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "none";
        return true;
    }

    this.checkTaiKhoan = function (value, spanID, message){
        var pattern = /^[a-zA-Z0-9]{4,6}$/;
        if (value.match(pattern)) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkName = function (value, spanID, message) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/

        if (value.match(pattern)) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    
    this.checkEmail = function (value, spanID, message) {
        var pattern =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (value.match(pattern)) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    
    this.checkPassword = function (value, spanID, message) {
        var pattern = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,10})/g
        if (value.match(pattern)) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    
    this.checkDate = function (value, spanID, message) {
        var pattern = /^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/;

        if (value.match(pattern)) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkSalary = function (value, spanID, message){
        var pattern = /^[0-9]+$/;
        if (value.match(pattern)&& value>=1e6 && value <= 2e7) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkTime = function (value, spanID, message){
        var pattern = /^[0-9]+$/;
        if (value.match(pattern)&& value>=80 && value <=200) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkPosition = function (value, spanID, message) {
        var select = document.getElementById(value).selectedIndex;
        if (select > 0) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }


}