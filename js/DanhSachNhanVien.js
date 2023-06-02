function DanhSachNhanVien() {
    this.mangNV = [];
    this.themNV = function(nv){
        this.mangNV.push(nv);
    }

    this.timIndex = function(id) {
        var indexFind = -1;
        this.mangNV.map(function (nv, index) {
            if (nv.id === id)
                indexFind = index;
        })
        return indexFind;
    }

    this.xoaNV = function(id) {
        var index = this.timIndex(id);
        console.log(index)
        if (index > -1) {
            this.mangNV.splice(index, 1)
        }
    }

    this.capNhat = function(nv) {
        var indexFind = this.timIndex(nv.id);
        if (indexFind > -1) {
            dsnv.mangNV[indexFind] = nv;
            return true;
        } else {
            return false;
        }
    }

    DanhSachNhanVien.prototype.timKiemTheoLoai = function(tuTim) {
        var mangTK = [];
        var tuTimThuong = tuTim.toLowerCase();
        var tuTimReplace = tuTimThuong.replace(/\s/g,"");

        this.mangNV.map(function(nv,index){
            var xepLoaiThuong = nv.rank.toLowerCase();
            var xepLoaiReplace = xepLoaiThuong.replace(/\s/g,"")
            var result = xepLoaiReplace.indexOf(tuTimReplace);
            if (result > -1){
                mangTK.push(nv);
            }
        });
        return mangTK;
    }

}
