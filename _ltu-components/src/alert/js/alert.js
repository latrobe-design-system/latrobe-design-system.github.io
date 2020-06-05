/*
 * Alert dismissal
 * attaches listener to alert close buttons
 * removes alert from DOM if close button clicked
 */

$(document).ready(function() {
    $('.ds-alert__close').on('click', function() {
        $(this).parent().remove();
    });
});