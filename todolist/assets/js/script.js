let designcl=['Work','Personal','Cleaning','Others']
// creating class for implementing design to different category

$(document).ready(function(){
    //getting all the class name from category
    let categorys = document.getElementsByClassName('catesec');

    for(let i=0;i<categorys.length;i++){
        if(categorys[i].innerHTML.trim() == 'Work'){
            categorys[i].classList.add(designcl[0]);
            categorys[i].classList.add('commonClass');
        }else if(categorys[i].innerHTML.trim() == 'Personal'){
            categorys[i].classList.add(designcl[1]);
            categorys[i].classList.add('commonClass');
        }else if(categorys[i].innerHTML.trim() == 'Cleaning'){
            categorys[i].classList.add(designcl[2]);
            categorys[i].classList.add('commonClass');
        }else if(categorys[i].innerHTML.trim() == 'Others'){
            categorys[i].classList.add(designcl[3]);
            categorys[i].classList.add('commonClass');
        }

    }
})


// this in responsible for making  making cross line when the idem is  checked for deleting
function checkedOrNot(){ 
    let cb = document.querySelectorAll('.delechack'); // getting all the check-box class 
    let descdisp = document.querySelectorAll('.dispdsc'); // gettong all the class where descripting of TODO is defined
    let ddsp = document.querySelectorAll('.dueDate'); // getting all the class for dueDate
    for(let i=0;i<descdisp.length;i++){
        let dueDate = ddsp[i].innerHTML;
        // checking if checkbox is checked  if checked a line will pass through the text(-) else if it is unchecked no line will pass through date and description
            if(cb[i].checked == true){ 
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'line-through';
            document.getElementById(cb[i].getAttribute('uid')+dueDate).style.textDecoration  = 'line-through';
            }
            else if(cb[i].checked == false){
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'none';
            document.getElementById(cb[i].getAttribute('uid')+dueDate).style.textDecoration  = 'none'
        }
       
    } 
   
}

//this addlistener come into action when we clicked on delete button after we checked which list of item neet to be deleted
document.getElementById('deleteButton').addEventListener('click',function(){
    let checkedbox = document.querySelectorAll('.delechack:checked');//getting only checked value
    let arrcheck = []; //creating the list of checked array
    for(let i of checkedbox){
        let gg=''
        gg=i.getAttribute('uid')//getting unique id and pushing into array
        console.log(gg)
        arrcheck.push(gg);
    }
    if(arrcheck.length === 0){
        console.log('no items is checked');
        swal("No item is checked!","Please select item to remove!","error");
        return;
    }
    //here we are making delete request with the help of ajax request
    $.ajax({
        type: 'post',
        url : '/delete_todo/?id='+arrcheck,
        success:function(){//on ajax success that is when data is deleted
            swal("Item is deleted","Click ok to go back home","success")
            .then(redir => {
                window.location = '/';
            })

        },
        error: function(err){
            console.log(err);
        }
    });
})