$(document).ready(function() {
    var i = 1; 
    $("#btn2").click(function() {
        $("#myModal").modal();
    });

    function kiemtraTen() {
        var i = 1;
        let mauKT = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val() == "") {
            $("#tbName").html("Khong de trong");
            return false;
        }
        if (!mauKT.test($("#Name").val())) {
            $("#tbName").html("Moi ky tu dau viet hoa khong su dung so");
            return true;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemtraTen);

    function kiemtraSoAo() {
        var mauKT = /^\d*$/;
        if ($("#Ao").val() == "") {
            $("#tbAo").html("Khong de trong");
            return false;
        }
        if (!mauKT.test($("#Ao").val())) {
            $("#tbAo").html("Dung so tu 1 den 100");
            return true;
        } else {
            var soAo = $("#Ao").val();
            if (soAo < 1 || soAo > 100) {
                $("#tbAo").html("tu 1 den 100");
            } else {
                $("#tbAo").html("*");
                return true;
            }
        }
    }
    $("#Ao").blur(kiemtraSoAo);

    function KTCLB(){
        var kt=/^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})(\s{1}[0-9]+)$/;
        if($("#txtCLB").val()==""){
            $("#tbCLB").html("Không được để trống");
            return false;
        }
        if(!kt.test($("#txtCLB").val())){
            $("#tbCLB").html("Dùng chữ hoa đầu từ và số  ");
            return false;
        }
        $("#tbCLB").html("*");
        return true;
    }
    $("#txtCLB").blur(KTCLB);

    function kiemtraNTT() {

        if ($("#NTT").val() == "") {
            $("#tbNTT").html("Khong de trong");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        today = today.setDate(today.getDate() + 7);
        if (today > ntt) {
            $("#tbNTT").html("phai sau ngay hien tai 7 ngay");
            return false;
        }
        $("#tbNTT").html("*");
        return true;
    }
    $("#NTT").blur(kiemtraNTT);

    function kiemtraSDT() {
        var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html("Khong de trong");
            return false;
        }
        if (!mauKT.test($("#SDT").val())) {
            $("#tbSDT").html("theo dang 0xxx-xxx-xxx trong do x la so");
            return true;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemtraSDT);

    $("#Save").click(function() {
        if(kiemtraTen() == true && kiemtraSoAo() == true && kiemtraDiaChi == true && kiemtraNTT == true && kiemtraSDT == true) {
            row = "<tr>";
            row += '<th>' + (i++) + "</th>";
            row += '<th>' + $("#Name").val() + "</th>";
            row += '<th>' + $("#Ao").val() + "</th>";
            row += '<th>' + $("#DC").val() + "</th>";
            row += '<th>' + $("#NTT").val() + "</th>";
            row += '<th>' + $("#SDT").val() + "</th>";
            row += '<th>' + $("#ADD").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
    })
})