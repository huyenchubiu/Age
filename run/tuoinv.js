class age{
    constructor(birthday){
        this.birthday = birthday;
    }

    checkAge(){
        const current=(new Date()).getFullYear();
        this.birthday=prompt("Nhập vào ngày tháng năm sinh theo định dạng 'MM/dd/yyyy':", "04/30/1993");
        this.birthday=new Date(birthday).getFullYear();
        number = current - birthday;
        return "Tuoi : " + (current - this.birthday)
    } // tinh tuoi
}
 
export{age}

/*var current=new Date().getFullYear();
var birthday=prompt("Nhập vào ngày tháng năm sinh theo định dạng 'MM/dd/yyyy':", "04/30/1993");
birthday=new Date(birthday).getFullYear();
alert("Tuổi của bạn là: "+(current-birthday));*/
