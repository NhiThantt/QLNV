const dsnv = new DanhSachNhanVien();
const validation = new Validation();

function setLocalStorage() {
    localStorage.setItem('DSNV', JSON.stringify(dsnv.mangNV))
}

function getLocalStorage() {
    var dataLocal = JSON.parse(localStorage.getItem('DSNV'));
    if (dataLocal != null) {
        hienThiTable(dataLocal);
        dsnv.mangNV = dataLocal;
    }
}
getLocalStorage();

function themNhanVien() {
    var id = document.getElementById('tknv').value;
    var fullName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var date = document.getElementById('datepicker').value;
    var salary = document.getElementById('luongCB').value;
    var pos = document.getElementById('chucvu').value;
    var time = document.getElementById('gioLam').value;


    var isValid = true;
    //id: không để trống, kí số từ 4-6, không được trùng nhau
    isValid &= validation.checkEmpty(id, "tbTKNV", "Tài khoản không được để trống") && validation.checkTaiKhoan(id, "tbTKNV", "Tài khoản tối đa 4 - 6 kí số") && validation.checkID(id, "tbTKNV", "Tài khoản đã tồn tại", dsnv.mangNV);

    //Tên nv phải là chữ không được để trống
    isValid &= validation.checkEmpty(fullName, "tbTen", "Tên không được để trống") && validation.checkName(fullName, "tbTen", "Tên bao gồm kí tự chữ");

    //Email phải đúng định dạng, không để trống
    isValid &= validation.checkEmpty(email, "tbEmail", "Email không được để trống") && validation.checkEmail(email, "tbEmail", "Email phải đúng định dạng");

    //Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống
    isValid &= validation.checkEmpty(pass, "tbMatKhau", "Mật khẩu không được để trống") && validation.checkPassword(pass, "tbMatKhau", "Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)");

    //Ngày làm không để trống, định dạng mm/dd/yyyy
    isValid &= validation.checkEmpty(date, "tbNgay", "Ngày không được để trống") && validation.checkDate(date, "tbNgay", "Định dạng ngày mm/dd/yyyy");

    //Lương cơ bản 1 000 000 - 20 000 000, không để trống
    isValid &= validation.checkEmpty(salary, "tbLuongCB", "Lương không được để trống") && validation.checkSalary(salary, "tbLuongCB", "Lương từ 1.000.000 - 20.000.000");

    //Số giờ làm trong tháng 80 - 200 giờ, không để trống
    isValid &= validation.checkEmpty(time, "tbGiolam", "Giờ làm không được để trống") && validation.checkTime(time, "tbGiolam", "Số giờ làm từ 80 - 200 giờ");

    //Chức vụ
    isValid &= validation.checkPosition("chucvu", "tbChucVu", "Vui lòng chọn chức vụ!");

    if (isValid) {
        var nv = new NhanVien(id, fullName, email, pass, date, salary, pos, time);
        nv.calcSalary();
        nv.sortRank();
        dsnv.themNV(nv);
        setLocalStorage();
        hienThiTable(dsnv.mangNV);
        resetForm();
    }
}

function hienThiTable(mang) {
    var content = "";
    mang.map(function (nv, index) {
        var trNV = `<tr>
            <td>${nv.id}</td>
            <td>${nv.nameNV}</td>
            <td>${nv.email}</td>
            <td>${nv.date}</td>
            <td>${nv.position}</td>
            <td>${nv.sumSal}</td>
            <td>${nv.rank}</td>
            <td>
            <button class="btn btn-success" onclick="xemNhanVien('${nv.id}')" data-toggle="modal" data-target="#myModal"> Xem </button>
            <button class="btn btn-danger" onclick="xoaNhanVien('${nv.id}')"> Xóa </button>
        </tr>`;
        content += trNV;
    })
    document.getElementById('tableDanhSach').innerHTML = content;
}

function xoaNhanVien(id) {
    dsnv.xoaNV(id);
    setLocalStorage();
    hienThiTable(dsnv.mangNV);
}

function xemNhanVien(id) {
    var indexFind = dsnv.timIndex(id);
    if (indexFind > -1) {
        var nvFind = dsnv.mangNV[indexFind];
        document.getElementById('tknv').value = nvFind.id;
        document.getElementById('tknv').disabled = true;
        document.getElementById('name').value = nvFind.nameNV;
        document.getElementById('email').value = nvFind.email;
        document.getElementById('password').value = nvFind.password;
        document.getElementById('datepicker').value = nvFind.date;
        document.getElementById('luongCB').value = nvFind.salary;
        document.getElementById('chucvu').value = nvFind.position;
        document.getElementById('gioLam').value = nvFind.workTimes;

    }

}

function capNhatNhanVien() {
    var id = document.getElementById('tknv').value;
    var fullName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var date = document.getElementById('datepicker').value;
    var salary = document.getElementById('luongCB').value;
    var pos = document.getElementById('chucvu').value;
    var time = document.getElementById('gioLam').value;

    var isValid = true;

    //Tên nv phải là chữ không được để trống
    isValid &= validation.checkEmpty(fullName, "tbTen", "Tên không được để trống") && validation.checkName(fullName, "tbTen", "Tên bao gồm kí tự chữ");

    //Email phải đúng định dạng, không để trống
    isValid &= validation.checkEmpty(email, "tbEmail", "Email không được để trống") && validation.checkEmail(email, "tbEmail", "Email phải đúng định dạng");

    //Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống
    isValid &= validation.checkEmpty(pass, "tbMatKhau", "Mật khẩu không được để trống") && validation.checkPassword(pass, "tbMatKhau", "Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)");

    //Ngày làm không để trống, định dạng mm/dd/yyyy
    isValid &= validation.checkEmpty(date, "tbNgay", "Ngày không được để trống") && validation.checkDate(date, "tbNgay", "");

    //Lương cơ bản 1 000 000 - 20 000 000, không để trống
    isValid &= validation.checkEmpty(salary, "tbLuongCB", "Lương không được để trống") && validation.checkSalary(salary, "tbLuongCB", "Lương từ 1.000.000 - 20.000.000");

    //Số giờ làm trong tháng 80 - 200 giờ, không để trống
    isValid &= validation.checkEmpty(time, "tbGiolam", "Giờ làm không được để trống") && validation.checkTime(time, "tbGiolam", "Số giờ làm từ 80 - 200 giờ");

    //Chức vụ
    isValid &= validation.checkPosition("chucvu", "tbChucVu", "Vui lòng chọn chức vụ!");
   
    if (isValid) {
        var nv = new NhanVien(id, fullName, email, pass, date, salary, pos, time);
        nv.calcSalary();
        nv.sortRank();

        var result = dsnv.capNhat(nv)
        if (result) {
            hienThiTable(dsnv.mangNV);
            setLocalStorage();
            resetForm();
        } else { alert("Cập nhật thất bại") };

    }
}

function resetForm() {
    document.getElementById("formOLNV").reset();
    document.getElementById("tknv").disabled = false;
}

document.getElementById('searchName').onkeyup = function () {
    var tuTim = document.getElementById('searchName').value;
    var mangTK = dsnv.timKiemTheoLoai(tuTim);
    hienThiTable(mangTK);
}