$(document).ready(function(){


    $.each($('.radiobuttons__item'), function(index, val){
        if($(this).find('input').prop('checked')==true){
            $(this).addClass('active');
        }
    });

    $(document).on('click', '.radiobuttons__item', function(event){
        $(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
        $(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
        $(this).toggleClass('active');
        $(this).find('input').prop('checked', true);
        return false
    })

});

let checkboxAgree = document.querySelector('.custom-checkbox')
let btnSubmit = document.querySelector('.sign__in')
checkboxAgree.addEventListener('change', function(){
    if (checkboxAgree.checked) {
        btnSubmit.removeAttribute("disabled");
    } else {
        btnSubmit.setAttribute("disabled", true);
    }
})

