// Bài tập 1 

/** Input : +nhập vào số ngày làm
// output : +tổng lương nhân viên
/*
    PROGRESS:
    +tạo biến tienLuong1Ngay và gán giá trị = 100000
    +tạo biến NgayLam
    +tạo biến tongLuong
    +tính toán : tienLuong1Ngay*gioLam = tongLuong
    +Trỏ tới thẻ cần in ra tongLuong
*/
function tinhTienLuong(){
    var tienLuong1Ngay =100000;
    
    var ngayLam = +document.getElementById("ngayLam").value;
    
   var luongChinhThuc = tienLuong1Ngay * ngayLam;
    var tongLuong = document.getElementById("tienLuongChinhThuc");
        tongLuong.innerHTML =  luongChinhThuc.toLocaleString();
}



// Bài tập 2
// input : nhập vào 5 số thực
// output : giá trị trung bình của 5 số thực được nhập vào
// progress :
/**
 * +tạo biến soA , soB , soC ,soD ,soE
 * +trỏ tới thẻ và lấy giá trị
 * +ép kiểu Number cho các giá trị nhập vào
 * +giaTriTrungBinh= (soA + soB + soC + soD + soE)/5
 * +in kết quả ra màn hình
 */

document.getElementById("btn_TB").onclick = function(){
    var soA = Number(document.getElementById("soA").value);
    var soB = Number(document.getElementById("soB").value);
    var soC = Number(document.getElementById("soC").value);
    var soD = Number(document.getElementById("soD").value) ;
    var soE = Number(document.getElementById("soE").value) ;
       var giaTriTrungBinh = (soA+ soB + soC + soD + soE)/5 ;
       // var trungBinhCong = giaTriTong/5;
       var tong=document.getElementById("ketQuaTB");
       tong.innerHTML = giaTriTrungBinh;
   }

//    Bài tập 3
//  input : Nhập vào số tiền USD
//  output : Số tiền quy đổi ra VND
/*
   Progress : +Tạo biến USD và gán giá trị bằng 23500
              +Tạo biến soUSD và tìm tới thẻ để lấy giá trị
              +Tạo biến trans và tính toán
              +trans = USD * 23500
              +in kết quả ra màn hình  
*/
document.getElementById("btn_DoiTien").onclick = function(){
    var USD = 23500;
    var soUSD = document.getElementById("tienUSD").value;
    
    var trans = USD * soUSD;
    var quyDoi = document.getElementById("quyDoi");
    quyDoi.innerHTML = new Intl.NumberFormat('vn-VN').format(trans) + " VND";
}


// Bài tập 4
//  input : Nhập vào chiều dài và chiều rộng
//  output : xuất ra diện tích và chu vi của HCN
/*
    Progress : +Tạo biến chieuDai , chieuRong , chuVi ,dienTich , ketQuaChuVi , ketQuaDienTich
               +Cho người dùng nhập vào chiều dài , chiều rộng và gán giá trị cho chieuDai ,chieuRong
               +Ép kiểu dữ liệu Number cho chieuDai ,chieuRong
               +chuVi =(chieuDai + chieuRong)*2
               +dienTich =chieuDai * chieuRong
               +In kết quả ra màn hình
*/

document.getElementById("btn_solve").onclick = function(){
    var chieuDai = Number(document.getElementById("chieuDai").value) ;
    var chieuRong = Number(document.getElementById("chieuRong").value) ;
    var chuVi = (chieuDai + chieuRong)*2;
    var dienTich =chieuDai * chieuRong;
    var ketQuaChuVi = document.getElementById("chuVi");
    ketQuaChuVi.innerHTML = chuVi;
    var ketQuaDienTich = document.getElementById("dienTich");
    ketQuaDienTich.innerHTML = dienTich;
}

// Bài tập 5
// input : Nhập vào 1 số có 2 chữ số
// output : Tính tổng 2 ký số của số vừa nhập
/*
    Progress : +Tạo biến number , hangChuc , hangDonVi ,tongKySo,ketQuaTinhTong
               +Cho người dùng nhập vào và gán giá trị vào biến number
               + tínhtoán để lấy ra số hàng chục và hàng đơn vị
               +hangChuc = Math.floor(number/10)
               +hangDonVi = number%10
               +Tính tổng và in kết quả ra màn hình
*/
document.getElementById("btn_tinhTong").onclick = function(){
    var number = document.getElementById("input_number").value;
    var hangChuc = Math.floor(number/10) ;
    var hangDonVi = number%10;
    var tongKySo = hangChuc + hangDonVi ;
    var ketQuaTinhTong = document.getElementById("tongKySo");
    ketQuaTinhTong.innerHTML = tongKySo;
}