function NhanVien(id, fullName, email, pass, date, salary, pos, time) {
    this.id = id;
    this.nameNV = fullName;
    this.email = email;
    this.password = pass;
    this.date = date;
    this.salary = salary;
    this.position = pos;
    this.workTimes = time;
    this.sumSal = 0;
    this.rank = "";
    this.calcSalary = function() {
        switch (pos) {
            case "Sếp":
                this.sumSal = this.salary * 3;
                break;
            case "Trưởng phòng":
                this.sumSal = this.salary * 2;
                break;
            case "Nhân viên":
                this.sumSal = this.salary * 1;
                break;
        }

    }
    this.sortRank = function(){
        if (this.workTimes >= 192){
            this.rank = "Xuất sắc";
        } else if (this.workTimes >= 176){
            this.rank = "Giỏi";
        } else if (this.workTimes >= 162){
            this.rank = "Khá";
        }  else {
            this.rank = "Trung bình";
        }
    }
}