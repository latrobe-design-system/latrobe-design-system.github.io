/*** 
 * THIS IS NOT PRODUCTION CODE
 * 
 * This script is purely for UI demonstrations purposes!
 * 
 ***/

$(document).ready(function() {

    /*** Local script for adding icon to student type selection ***/
    
    function changeStudentTypeIcon(val){
        // load icon for student type
        if (val == 'dom') {
            $('#student-type-icon').empty().append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48" fill="#52c41a"><polygon class="st1" points="27 31.2 25.6 31 26 32.3 26.5 32.5 27 31.9 "/><path class="st1" d="M26.2 15l1.4 2.4 3.1 6v1.6L27 29.8c0 0-1.1-0.2-1.4-0.2 -0.1 0-4.3-3.8-4.3-3.8l-1.8-0.2 -4.8 2.1 -1.1-0.2L12 22.2l0.2-1.1 3.3-1.7 0.7-1.7 2-1.6 1.1 0.5 0.8-1.4h3l-0.1 2.8 2.1 1.1L26.2 15z"/><polygon class="st1" points="31.9 33 32.5 31.8 34.2 30.4 34.8 28.9 35.5 29.3 35.6 29.9 35 31.4 33.9 32.9 33.3 33.5 "/><polygon class="st1" points="35.9 28.8 36.4 29 37.2 28 37.9 27.1 38 26.5 36.5 25.7 36 25 35.1 24.4 36.1 26.4 35.6 27.5 36.2 28.1 "/></svg>');
        } else if (val == 'int') {
            $('#student-type-icon').empty().append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48" fill="#52c41a"><path class="st0" d="M24 13c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11S30.1 13 24 13zM32.4 19.7h-3.6c-0.3-1.9-0.9-3.4-1.7-4.6C29.4 15.9 31.3 17.5 32.4 19.7zM27.5 24c0 1-0.1 1.9-0.2 2.8h-6.7c-0.1-0.9-0.2-1.8-0.2-2.8s0.1-1.9 0.2-2.8h6.7C27.5 22.1 27.5 23 27.5 24zM24 33.4c-1.2 0-2.5-2-3.1-5.1h6.2C26.5 31.4 25.2 33.4 24 33.4zM20.9 19.7c0.6-3.1 1.9-5.1 3.1-5.1s2.5 2 3.1 5.1H20.9zM20.9 15.1c-0.7 1.2-1.3 2.7-1.7 4.6h-3.6C16.7 17.5 18.6 15.9 20.9 15.1zM15 21.2H19c-0.1 0.9-0.2 1.8-0.2 2.8s0.1 1.9 0.2 2.8H15c-0.3-0.9-0.4-1.8-0.4-2.8C14.6 23 14.7 22.1 15 21.2zM15.6 28.3h3.6c0.3 1.9 0.9 3.4 1.7 4.6C18.6 32.1 16.7 30.5 15.6 28.3zM27.1 32.9c0.7-1.2 1.3-2.7 1.7-4.6h3.6C31.3 30.5 29.4 32.1 27.1 32.9zM33 26.8H29c0.1-0.9 0.2-1.8 0.2-2.8s-0.1-1.9-0.2-2.8H33c0.3 0.9 0.4 1.8 0.4 2.8C33.4 25 33.3 25.9 33 26.8z"/></svg>');
        }
    }
    
    // change icon when selection changes
    $('#student-type').on('change', function(){
        changeStudentTypeIcon($(this).val());
    });
    
    // load icon on page load
    changeStudentTypeIcon('dom');
    
    
    // upadate location select based on query string
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const campus = urlParams.get('campus');
    $('#location-d option[value="'+campus+'"]').prop('selected', true);
        
});