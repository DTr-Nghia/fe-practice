$(document).ready(function() {
    $('.sellers').click(function(e) {
        setTimeout(function() {
            $('.sellers').addClass('active')
            $('.featured').removeClass('active')
            $('.reviews').removeClass('active')
        },200)
    })
    $('.featured').click(function(e) {
        setTimeout(function() {
            $('.sellers').removeClass('active')
            $('.featured').addClass('active')
            $('.reviews').removeClass('active')
        },200)
     })
    $('.reviews').click(function(e) {
        setTimeout(function() {
            $('.sellers').removeClass('active')
            $('.featured').removeClass('active')
            $('.reviews').addClass('active')
        },200)
     })
    $('.nav-icon').click(function(e) {
        $('.hide-bar').addClass('show-hidebar')
        $('.overlay').addClass('show-overlay')
    })
    $('.overlay').click(function(e) {
        $('.hide-bar').removeClass('show-hidebar')
        $('.overlay').removeClass('show-overlay')
    })
})